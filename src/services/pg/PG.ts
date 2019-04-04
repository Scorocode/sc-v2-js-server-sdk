import { eventEmitter } from '../../decorators'
import { EventEmitterInterface } from '../../utils/EventEmitter'
import { RecordRef } from '../client/PgApiService'
import { IDatabase } from '../client/PgManagerService'
import Service, { ServiceConfig } from '../Service'
import Database from './Database'
import Query from './Query'
import Record from './Record'
import Schema from './Schema'
import Table from './Table'

export interface PGConfig {
  defaultLimit?: number
}

@eventEmitter
export default class PG extends Service<PGConfig & ServiceConfig>
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
  getDatabases(): Promise<Database[]> {
    return this.app
      .client()
      .pgManager.getDatabases()
      .then((items) =>
        items.map((item) => new Database(this.app, item.id, item))
      )
  }

  database(dbId: string): Database {
    return new Database(this.app, dbId)
  }

  registerDatabase(options: IDatabase): Promise<Database> {
    return this.app
      .client()
      .pgManager.registerDatabase(options)
      .then(() => {
        return this.database(options.id).sync()
      })
  }

  schema(dbId: string, schema: string): Schema {
    return new Schema(this.app, dbId, schema)
  }

  table(dbId: string, schema: string, table: string): Table {
    return new Table(this.app, dbId, schema, table)
  }

  record(dbId: string, schema: string, table: string, ref?: RecordRef): Record {
    return new Record(this.app, dbId, schema, table, ref)
  }

  query(dbId: string, schema: string, table: string): Query {
    return new Query(this.app, dbId, schema, table)
  }
}
