import Application from '../../Application'
import { IDatabase } from '../client/PgManagerService'
import Schema from './Schema'

export default class Database {
  private _info?: IDatabase

  constructor(
    public readonly app: Application,
    public readonly dbId: string,
    info?: IDatabase
  ) {
    if (info) {
      this._info = info
    }
  }

  // getters
  get info(): IDatabase | void {
    return this._info
  }

  get schemas(): string[] | void {
    return this._info && this._info.schemas
  }

  // factories
  schema(schema: string): Schema {
    return new Schema(this.app, this.dbId, schema)
  }

  // api
  drop(): Promise<this> {
    return this.app
      .client()
      .pgManager.dropDatabase({
        id: this.dbId,
      })
      .then(() => {
        this._info = undefined

        return this
      })
  }

  sync(): Promise<this> {
    return this.app
      .client()
      .pgManager.getDatabase({
        id: this.dbId,
      })
      .then((info) => {
        this._info = info

        return this
      })
  }
}
