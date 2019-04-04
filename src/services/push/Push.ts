import { Readable } from 'stream'
import { eventEmitter } from '../../decorators'
import { EventEmitterInterface } from '../../utils/EventEmitter'
import Service, { ServiceConfig } from '../Service'

export interface PushConfig {}

@eventEmitter
export default class Push extends Service<PushConfig & ServiceConfig>
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

  // api
  updateSettingsFCM(payload: Readable): Promise<void> {
    return this.app.client().pushManager.updateSettingsFCM(payload)
  }
  updateSettingsAPN(payload: Readable): Promise<void> {
    return this.app.client().pushManager.updateSettingsAPN(payload)
  }

  sendFCM(payload: {}): Promise<{}> {
    return this.app.client().push.sendFCM(payload)
  }
  sendAPN(payload: {}): Promise<{}> {
    return this.app.client().push.sendAPN(payload)
  }
}
