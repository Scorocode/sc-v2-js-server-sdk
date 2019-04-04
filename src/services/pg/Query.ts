import Application from '../../Application'
import utils from '../../utils'
import Record from './Record'
import RecordList from './RecordList'

export const ORDER_ASC = 'ascend'
export const ORDER_DESC = 'descend'

export const DEFAULT_LIMIT = 20

export default class Query {
  private _from?: number
  private _limit: number
  private _filter: {}
  private readonly _order: {}

  constructor(
    public readonly app: Application,
    public readonly dbId: string,
    public readonly schema: string,
    public readonly table: string
  ) {
    this._limit = (app.config.pg && app.config.pg.defaultLimit) || DEFAULT_LIMIT
    this._filter = {}
    this._order = {}
  }

  sync(): Promise<RecordList> {
    const dbQueryParams: any = {
      calcTotal: true,
      limit: this._limit,
    }

    if (this._from !== undefined) {
      dbQueryParams.from = this._from
    }

    if (Object.keys(this._order).length) {
      dbQueryParams.order = Object.entries(this._order).map(([name, dir]) => ({
        name,
        desc: dir === ORDER_DESC,
      }))
    }

    if (Object.keys(this._filter).length) {
      dbQueryParams.filter = this._filter
    }

    return this.app
      .client()
      .pg.getList({
        dbId: this.dbId,
        schema: this.schema,
        table: this.table,
        ...dbQueryParams,
      })
      .then((response) => {
        const items = response.items.map((record) => {
          const ref = {}
          response.keys.forEach((key) => (ref[key] = record[key]))

          return new Record(
            this.app,
            this.dbId,
            this.schema,
            this.table,
            ref
          ).setAttributes(record)
        })

        return new RecordList(
          response.from,
          response.limit,
          response.total,
          items
        )
      })
  }

  count(): Promise<number> {
    const dbQueryParams: any = {
      from: 0,
      limit: 0,
      calcTotal: 1,
    }

    if (Object.keys(this._order).length) {
      dbQueryParams.order = Object.entries(this._order).map(([name, dir]) => ({
        name,
        desc: dir === ORDER_DESC,
      }))
    }

    if (Object.keys(this._filter).length) {
      dbQueryParams.filter = this._filter
    }

    return this.app
      .client()
      .pg.getList({
        dbId: this.dbId,
        schema: this.schema,
        table: this.table,
        ...dbQueryParams,
      })
      .then((response) => response.total)
  }

  from(from: number): this {
    this._from = from

    return this
  }

  limit(limit: number): this {
    this._limit = limit

    return this
  }

  orderBy(field: string, dir: string): this {
    this._order[field] = dir

    return this
  }

  filterBy(fieldOrFilterObject: {} | string, value?: any): this {
    let filterBy: {} = {}

    if (value === undefined && typeof fieldOrFilterObject === 'string') {
      filterBy[fieldOrFilterObject] = value
    } else if (
      fieldOrFilterObject &&
      typeof fieldOrFilterObject === 'object' &&
      !Array.isArray(fieldOrFilterObject)
    ) {
      filterBy = fieldOrFilterObject
    } else {
      utils.throwError(
        'PG.Query.FilterBy.BadParams',
        `Query::filterBy - received bad params`
      )
    }

    this._filter = {
      ...this._filter,
      ...filterBy,
    }

    return this
  }

  page(page: number): this {
    return this.from(Math.max(Math.floor(page) - 1, 0) * this._limit)
  }
}
