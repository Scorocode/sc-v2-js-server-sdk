import grpc from 'grpc'
import CallError from './CallError'
import * as baseObjects from './grpc/base/base_pb'

const HTTP_CODE_INTERNAL_ERROR = 500

export interface ServiceConfig {
  address: string
  credentials?: grpc.ChannelCredentials
}

export default class BaseService<TServiceClient extends grpc.Client> {
  private _client?: TServiceClient

  constructor(private _config: ServiceConfig) {}

  get config(): ServiceConfig {
    return this._config
  }

  get client(): TServiceClient {
    if (!this._client) {
      this._client = new (this.getClientConstructor())(
        this.config.address,
        grpc.credentials.createInsecure()
      )
    }

    return this._client
  }

  protected getClientConstructor(): new (
    address: string,
    credentials: grpc.ChannelCredentials
  ) => TServiceClient {
    return grpc.Client as any
  }

  // utils
  protected makeCall<Req, Res>(method: string, request: Req): Promise<Res> {
    return new Promise((resolve, reject) => {
      this.client[method](request, (err: Error | null, response: Res) => {
        if (!err) {
          let responseErr: baseObjects.Error | undefined

          if ((response as any).getError) {
            try {
              responseErr = (response as any).getError()
            } catch (e) {
              // nothing do
            }
          }

          if (responseErr) {
            const callError = new CallError(
              responseErr.getHttpCode(),
              responseErr.getApiCode(),
              responseErr.getMessage()
            )

            reject(callError)
          } else {
            resolve(response)
          }
        } else {
          const callError = new CallError(
            HTTP_CODE_INTERNAL_ERROR,
            'server_err',
            err.toString()
          )

          reject(callError)
        }
      })
    })
  }

  protected makeWritableCall<Req, Res>(
    method: string,
    writer: (stream: grpc.ClientWritableStream<Req>) => void
  ): Promise<Res> {
    return new Promise((resolve, reject) => {
      const stream = this.client[method]((err: Error | null, response: Res) => {
        if (!err) {
          let responseErr: baseObjects.Error | undefined

          if ((response as any).getError) {
            try {
              responseErr = (response as any).getError()
            } catch (e) {
              // nothing do
            }
          }

          if (responseErr) {
            const callError = new CallError(
              responseErr.getHttpCode(),
              responseErr.getApiCode(),
              responseErr.getMessage()
            )

            reject(callError)
          } else {
            resolve(response)
          }
        } else {
          const callError = new CallError(
            HTTP_CODE_INTERNAL_ERROR,
            'server_err',
            err.toString()
          )

          reject(callError)
        }
      })

      writer(stream)
    })
  }

  protected makeReadableCall<Req, Res>(
    method: string,
    request: Req,
    metadata?: grpc.Metadata
  ): Promise<Res[]> {
    return new Promise((resolve, reject) => {
      const stream = this.client[method](request, metadata)
      const results: Res[] = []

      stream.on('data', (response: Res) => {
        results.push(response)
      })
      stream.on('end', () => {
        resolve(results)
      })
      stream.on('error', (grpcError: grpc.ServiceError) => {
        reject(
          new CallError(
            grpcError.code || HTTP_CODE_INTERNAL_ERROR,
            'server_err',
            grpcError.message
          )
        )
      })
    })
  }
}
