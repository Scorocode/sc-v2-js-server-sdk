import Application from '../../Application'
import { ISchema, ITableMetadata } from '../client/PgManagerService'
import Table from './Table'

export default class Schema {
  private _info?: ISchema

  constructor(
    public readonly app: Application,
    public readonly dbId: string,
    public readonly schema: string,
    info?: ISchema
  ) {
    if (info) {
      this._info = info
    }
  }

  // getters
  get info(): ISchema | void {
    return this._info
  }

  get tables(): ITableMetadata[] | void {
    return this._info && this._info.tables
  }

  // factories
  table(table: string): Table {
    return new Table(this.app, this.dbId, this.schema, table)
  }

  // api
  // not implemented yet
  // drop(): Promise<this> {
  //   return this.app
  //     .client()
  //     .pgManager.dropSchema({
  //
  //     })
  //     .then(() => {
  //       this._info = undefined
  //
  //       return this
  //     })
  // }

  sync(): Promise<this> {
    return this.app
      .client()
      .pgManager.getSchema({
        dbId: this.dbId,
        schema: this.schema,
      })
      .then((info) => {
        this._info = info

        return this
      })
  }
}
