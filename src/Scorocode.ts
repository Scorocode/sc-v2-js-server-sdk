import Application, { ApplicationConfig } from './Application'
import utils from './utils'
import EventEmitter from './utils/EventEmitter'

export default class Scorocode extends EventEmitter {
  version = '${SDK_VERSION}'
  ns = {
    Scorocode,
    Application,
  }
  private _app?: Application

  initApp(appConfig?: ApplicationConfig): Application {
    // init
    if (this._app) {
      throw utils.throwError(
        'Scorocode.initApp.applicationExists',
        `The application is already exists`
      )
    } else {
      this._app = new Application(this, appConfig)
    }

    return this._app
  }

  app(): Application {
    if (!this._app) {
      throw utils.throwError(
        'Scorocode.app.applicationNotExists',
        `An application doesn't exists`
      )
    }

    return this._app
  }

  destroyApp(): Promise<void> {
    return this.app()
      .destroy()
      .then(() => {
        delete this._app
      })
  }
}
