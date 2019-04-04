import Application from '../../Application'
import { RecordRef } from '../client/PgApiService'
import { ITableInfo } from '../client/PgManagerService'
import Query from './Query'
import Record from './Record'

export default class Table {
  private _info?: ITableInfo

  constructor(
    public readonly app: Application,
    public readonly dbId: string,
    public readonly schema: string,
    public readonly table: string
  ) {}

  // getters
  get info(): ITableInfo | void {
    return this._info
  }

  // factories
  record(ref?: RecordRef): Record {
    return new Record(this.app, this.dbId, this.schema, this.table, ref)
  }

  query(): Query {
    return new Query(this.app, this.dbId, this.schema, this.table)
  }

  // api
  // not implemented yet
  // drop(): Promise<this> {
  //   return this.app
  //     .client()
  //     .pgManager.dropCollection(this.dbId, this.schema, this.collection)
  //     .then(() => {
  //       this._info = undefined
  //
  //       return this
  //     })
  // }

  // not implemented yet
  // create(options: ICollectionPayload): Promise<this> {
  //   return this.app
  //     .client()
  //     .pgManager.createCollection({
  //       ...options,
  //       dbId: this.dbId,
  //       name: this.collection,
  //     })
  //     .then((info) => {
  //       this._info = info
  //
  //       return this
  //     })
  // }

  sync(): Promise<this> {
    return this.app
      .client()
      .pgManager.getTable({
        dbId: this.dbId,
        schema: this.schema,
        table: this.table,
      })
      .then((collection) => {
        this._info = collection

        return this
      })
  }
}
