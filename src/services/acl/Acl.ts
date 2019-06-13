import { eventEmitter } from '../../decorators'
import { EventEmitterInterface } from '../../utils/EventEmitter'
import { IAclObjectsToRolesMap, IRole } from '../client/AuthService'
import Service, { ServiceConfig } from '../Service'

export interface AclConfig {}

@eventEmitter
export default class Acl extends Service<AclConfig & ServiceConfig>
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

  // Acl API
  getRoles(): Promise<IRole[]> {
    return this.app.client().auth.getRoles()
  }

  getAclsByRoles(roles: string[]): Promise<IAclObjectsToRolesMap> {
    return this.app.client().auth.getAclsByRoles({ roles })
  }
}
