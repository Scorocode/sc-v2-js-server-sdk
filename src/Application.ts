import extend from 'lodash/extend'
import Scorocode from './Scorocode'
import { Acl, AclConfig } from './services/acl'
import { Auth, AuthConfig } from './services/auth'
import { Client, ClientConfig } from './services/client'
import { FS, FSConfig } from './services/fs'
import { PG, PGConfig } from './services/pg'
import { Push, PushConfig } from './services/push'
import Service from './services/Service'
import { WS, WSConfig } from './services/ws'
import utils from './utils'
import EventEmitter from './utils/EventEmitter'

export interface ApplicationConfig {
  client?: ClientConfig
  auth?: AuthConfig
  acl?: AclConfig
  pg?: PGConfig
  fs?: FSConfig
  ws?: WSConfig
  push?: PushConfig
}

const DEFAULT_APP_CONFIG: ApplicationConfig = {
  pg: {
    defaultLimit: 20,
  },
}

export default class Application extends EventEmitter {
  private readonly _sc: Scorocode
  private readonly _services: { [name: string]: Service<any> }
  private readonly _config: ApplicationConfig
  private _isDestroyed = false

  constructor(sc: Scorocode, config?: ApplicationConfig) {
    super()

    this._sc = sc
    this._config = extend({}, DEFAULT_APP_CONFIG, config)

    this._services = {}
  }

  public auth(): Auth
  public auth(config?: AuthConfig): Promise<Auth>
  public auth(config?: AuthConfig) {
    this._checkIsAlive()

    return this.getService<Auth>('auth', Auth, config)
  }

  public acl(): Acl
  public acl(config?: AclConfig): Promise<Acl>
  public acl(config?: AclConfig) {
    this._checkIsAlive()

    return this.getService<Acl>('acl', Acl, config)
  }

  public client(): Client
  public client(config?: ClientConfig): Promise<Client>
  public client(config?: ClientConfig) {
    this._checkIsAlive()

    return this.getService<Client>('client', Client, config)
  }

  public fs(): FS
  public fs(config?: FSConfig): Promise<FS>
  public fs(config?: FSConfig) {
    this._checkIsAlive()

    return this.getService<FS>('fs', FS, config)
  }

  public pg(): PG
  public pg(config?: PGConfig): Promise<PG>
  public pg(config?: PGConfig) {
    this._checkIsAlive()

    return this.getService<PG>('pg', PG, config)
  }

  public ws(): WS
  public ws(config?: WSConfig): Promise<WS>
  public ws(config?: WSConfig) {
    this._checkIsAlive()

    return this.getService<WS>('ws', WS, config)
  }

  public push(): Push
  public push(config?: PushConfig): Promise<Push>
  public push(config?: PushConfig) {
    this._checkIsAlive()

    return this.getService<Push>('push', Push, config)
  }

  get config(): ApplicationConfig {
    return this._config
  }

  get scorocode(): Scorocode {
    return this._sc
  }

  // register external services
  registerService<T extends Service<any>>(
    name: string,
    constructor: new () => T
  ): void {
    if (Application.prototype[name]) {
      throw new Error('Service name is already used')
    }

    Application.prototype[name] = (config?: {}): T | Promise<T> => {
      this._checkIsAlive()

      return this.getService<T>(name, constructor, config)
    }
  }

  getService<T extends Service<any>>(
    name: string,
    constructor: new (config: any) => T,
    config?: {}
  ): T | Promise<T> {
    this._checkIsAlive()

    // При первоначальной инициализации объект сервиса возращается синхронно
    if (!this._services[name]) {
      this._services[name] = new constructor({
        ...this._config[name],
        ...config,
        app: this,
      })

      if (config) {
        return Promise.resolve(this._services[name] as T)
      }
    } else if (config) {
      // При повторной реинициализации объект возращается асинхронно
      return this._services[name].destroy().then(() => {
        return (this._services[name] = new constructor({
          ...this._config[name],
          ...config,
          app: this,
        }))
      })
    }

    return this._services[name] as T
  }

  destroy(): Promise<void> {
    this._checkIsAlive()

    // destroy app
    return new Promise((resolve) => {
      this._checkIsAlive()

      resolve()
    })
      .then(() =>
        Promise.all(
          Object.values(this._services).map((service) => service.destroy())
        )
      )
      .then(() => {
        this._isDestroyed = true
      })
  }

  private _checkIsAlive() {
    if (this._isDestroyed) {
      throw utils.throwError(
        'Application.isNotAlive',
        `Application is destroyed`
      )
    }
  }
}
