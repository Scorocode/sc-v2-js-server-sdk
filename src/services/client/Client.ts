import Service, { ServiceConfig } from '../Service'

import { eventEmitter } from '../../decorators'
import { EventEmitterInterface } from '../../utils/EventEmitter'
import AuthService from './AuthService'
import FsService from './FsService'
import LoggerService from './LoggerService'
import PgApiService from './PgApiService'
import PgManagerService from './PgManagerService'
import PushApiService from './PushApiService'
import PushManagerService from './PushManagerService'
import WsService from './WsService'

export interface ClientConfig {
  auth?: {
    address: string
  }
  pg?: {
    address: string
  }
  pgManager?: {
    address: string
  }
  fs?: {
    address: string
  }
  push?: {
    address: string
  }
  pushManager?: {
    address: string
  }
}

@eventEmitter
export default class Client extends Service<ClientConfig & ServiceConfig>
  implements EventEmitterInterface {
  public readonly auth: AuthService
  public readonly pg: PgApiService
  public readonly pgManager: PgManagerService
  public readonly push: PushApiService
  public readonly pushManager: PushManagerService
  public readonly fs: FsService
  public readonly logger: LoggerService
  public readonly ws: WsService

  constructor(config: ClientConfig & ServiceConfig) {
    super(config)

    this.auth = new AuthService(
      config.auth || {
        address: `${process.env.SCAUTH_SERVICE_HOST}:${
          process.env.SCAUTH_SERVICE_PORT_GRPC
        }`,
      }
    )
    this.pg = new PgApiService(
      config.pg || {
        address: `${process.env.SCDBAPI_SERVICE_HOST}:${
          process.env.SCDBAPI_SERVICE_PORT_GRPC
        }`,
      }
    )
    this.pgManager = new PgManagerService(
      config.pgManager || {
        address: `${process.env.SCDBMANAGERAPI_SERVICE_HOST}:${
          process.env.SCDBMANAGERAPI_SERVICE_PORT_GRPC
        }`,
      }
    )
    this.push = new PushApiService(
      config.push || {
        address: `${process.env.SCPUSH_SERVICE_HOST}:${
          process.env.SCPUSH_SERVICE_PORT_GRPC
        }`,
      }
    )
    this.pushManager = new PushManagerService(
      config.pushManager || {
        address: `${process.env.SCMANAGERAPI_SERVICE_HOST}:${
          process.env.SCMANAGERAPI_SERVICE_PORT_GRPC
        }`,
      }
    )
    this.fs = new FsService(
      config.fs || {
        address: `${process.env.SCFILEAPI_SERVICE_HOST}:${
          process.env.SCFILEAPI_SERVICE_PORT_GRPC
        }`,
      }
    )
    this.logger = new LoggerService(
      config.fs || {
        address: `${process.env.SCLOGGER_SERVICE_HOST}:${
          process.env.SCLOGGER_SERVICE_PORT_GRPC
        }`,
      }
    )
    this.ws = new WsService(
      config.fs || {
        address: `${process.env.SCWS_SERVICE_HOST}:${
          process.env.SCWS_SERVICE_PORT_GRPC
        }`,
      }
    )
  }

  // EventEmitter interface implementation
  on(event: string, listener: (...args: any[]) => void): void {
    return
  }
  removeListener(event: string, listener: (...args: any[]) => void): void {
    return
  }
  emit(event: string, ...args: any[]): void {
    return
  }
  once(event: string, listener: (...args: any[]) => void): void {
    return
  }
}
