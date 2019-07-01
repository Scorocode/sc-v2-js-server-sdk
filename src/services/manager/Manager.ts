import { eventEmitter } from '../../decorators'
import { EventEmitterInterface } from '../../utils/EventEmitter'
import {
  ICron,
  IEmptyResponse,
  IProcessInfo,
  IReplica,
} from '../client/BrokerService'
import Service, { ServiceConfig } from '../Service'

export interface ManagerConfig {}

@eventEmitter
export default class Manager extends Service<ManagerConfig & ServiceConfig>
  implements EventEmitterInterface {
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

  destroy(): Promise<void> {
    return Promise.resolve()
  }

  // API
  cronSet(rules: ICron[]): Promise<IEmptyResponse> {
    return this.app.client().broker.cronSet({ rules })
  }

  cronRead(): Promise<ICron[]> {
    return this.app
      .client()
      .broker.cronRead()
      .then((res) => res.rules)
  }

  processes(): Promise<IProcessInfo[]> {
    return this.app.client().broker.processes()
  }

  webServerRun(payload: IReplica): Promise<IEmptyResponse> {
    return this.app.client().broker.webServerRun(payload)
  }

  webServerStop(payload: IReplica): Promise<IEmptyResponse> {
    return this.app.client().broker.webServerStop(payload)
  }

  asyncScriptRun(path: string): Promise<IEmptyResponse> {
    return this.app.client().broker.asyncScriptRun({ path })
  }

  asyncScriptStop(replica: string, pid: number): Promise<IEmptyResponse> {
    return this.app.client().broker.asyncScriptStop({ replica, pid })
  }
}
