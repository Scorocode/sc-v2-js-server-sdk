import { eventEmitter } from '../../decorators'
import { EventEmitterInterface } from '../../utils/EventEmitter'
import { ISessionInfo, IUser } from '../client/AuthService'
import Service, { ServiceConfig } from '../Service'

export interface AuthConfig {}

@eventEmitter
export default class Auth extends Service<AuthConfig & ServiceConfig>
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

  // Auth API
  getSession(token: string): Promise<ISessionInfo> {
    return this.app.client().auth.getSession({ token })
  }

  refreshSession(token: string): Promise<ISessionInfo> {
    return this.app.client().auth.refreshSession({ token })
  }

  createUser(email: string, password: string): Promise<IUser> {
    return this.app.client().auth.createUser({ email, password })
  }

  signInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<ISessionInfo> {
    return this.app
      .client()
      .auth.signInWithEmailAndPassword({ email, password })
  }

  signOutByToken(token: string): Promise<{}> {
    return this.app.client().auth.signOutByToken({ token })
  }

  getUserById(id: string): Promise<IUser> {
    return this.app.client().auth.getUserByID({ id })
  }

  getUserByEmail(email: string): Promise<IUser> {
    return this.app.client().auth.getUserByEmail({ email })
  }

  getUserByToken(token: string): Promise<IUser> {
    return this.app.client().auth.getUserByToken({ token })
  }

  deleteUserById(id: string): Promise<{}> {
    return this.app.client().auth.deleteUserByID({ id })
  }
}
