import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'
import grpc from 'grpc'
import BaseService from './BaseService'
import { ServiceClient } from './grpc/sc_logger_api/sc_logger_api_service_grpc_pb'
import * as loggerObjects from './grpc/sc_logger_api/sc_logger_api_service_pb'

interface IGetRequest {
  part: number
}

interface IGetResponse {
  part: number
  countParts: number
  data: Uint8Array | string
}

interface IGetLastRequest {
  linesCount: number
}

type IGetLastResponse = Uint8Array | string

const createGetResponse = (
  data: loggerObjects.SelectResponse
): IGetResponse => ({
  part: data.getPart(),
  countParts: data.getCountParts(),
  data: data.getData(),
})

const createGetLastResponse = (data: loggerObjects.File): IGetLastResponse =>
  data.getBody()

export default class LoggerService extends BaseService<ServiceClient> {
  get(payload: IGetRequest): Promise<IGetResponse> {
    const req = new loggerObjects.Select()
    req.setPart(payload.part)

    return this.makeCall<loggerObjects.Select, loggerObjects.SelectResponse>(
      'get',
      req
    ).then(createGetResponse)
  }

  getLast(payload: IGetLastRequest): Promise<IGetLastResponse> {
    const req = new loggerObjects.GetLastRequest()
    req.setLinescount(payload.linesCount)

    return this.makeCall<loggerObjects.GetLastRequest, loggerObjects.File>(
      'getLast',
      req
    ).then(createGetLastResponse)
  }

  clear(): Promise<google_protobuf_empty_pb.Empty> {
    const req = new google_protobuf_empty_pb.Empty()

    return this.makeCall<
      google_protobuf_empty_pb.Empty,
      google_protobuf_empty_pb.Empty
    >('clear', req)
  }

  dump(): Promise<Buffer> {
    const req = new google_protobuf_empty_pb.Empty()

    return this.makeReadableCall<
      google_protobuf_empty_pb.Empty,
      loggerObjects.File
    >('dump', req).then((chunks) =>
      Buffer.concat(chunks.map((chunk) => chunk.getBody_asU8()))
    )
  }

  subscribe(
    payload: IGetLastRequest
  ): grpc.ClientReadableStream<loggerObjects.GetLastRequest> {
    const req = new loggerObjects.GetLastRequest()
    req.setLinescount(payload.linesCount)

    return this.client.subscribe(req)
  }

  protected getClientConstructor() {
    return ServiceClient
  }
}
