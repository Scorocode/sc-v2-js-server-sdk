import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'
import BaseService from './BaseService'
import bson from './bson'
import * as dbCommonObjects from './grpc/sc_db_api/common_pb'
import { DatabaseApiClient } from './grpc/sc_db_api/db_api_grpc_pb'
import * as dbApiObjects from './grpc/sc_db_api/db_api_pb'

// should be converted to the bson string
export interface RecordRef {
  [key: string]: any
}

interface IRecordRefRequest {
  dbId: string
  schema: string
  table: string
  key: RecordRef
}

interface IRecordData {
  [field: string]: any
}

interface ISingleRecord {
  keys: string[]
  data: IRecordData
}

interface IGetListRequest {
  dbId: string
  schema: string
  table: string
  from?: number
  limit?: number
  calcTotal?: boolean
  filter?: ISingleRecord
  order?: IOrderField[]
}

interface IGetListResponse {
  from: number
  limit: number
  total: number
  keys: string[]
  items: IRecordData[]
}

interface IOrderField {
  name: string
  desc: boolean
}

interface IInsertRequest {
  dbId: string
  schema: string
  table: string
  item: IRecordData
}

interface IUpdateRequest {
  dbId: string
  schema: string
  table: string
  key: RecordRef
  item: IRecordData
}

const createGetListResponse = (
  data: dbApiObjects.GetListResponse
): IGetListResponse => ({
  from: data.getFrom(),
  limit: data.getLimit(),
  total: data.getTotal(),
  keys: data.getKeyList(),
  items: Object.values(bson.deserialize(Buffer.from(data.getItems()))),
})

const createSingleRecord = (
  data: dbApiObjects.SingleRecordResponse
): ISingleRecord => {
  const recordData = data.getData()

  return {
    keys: data.getKeyList(),
    data: recordData ? bson.deserialize(Buffer.from(recordData.getBody())) : {},
  }
}

export default class PgApiService extends BaseService<DatabaseApiClient> {
  getById(payload: IRecordRefRequest): Promise<ISingleRecord> {
    const db = new dbCommonObjects.DatabaseRequest()
    db.setType(dbCommonObjects.DbType.PG)
    db.setSchema(payload.schema)
    db.setName(payload.dbId)

    const req = new dbApiObjects.ByIdRequest()
    req.setDb(db)
    req.setCollection(payload.table)
    req.setKey(bson.serialize(payload.key))

    return this.makeCall<
      dbApiObjects.ByIdRequest,
      dbApiObjects.SingleRecordResponse
    >('getById', req).then(createSingleRecord)
  }

  getList(payload: IGetListRequest): Promise<IGetListResponse> {
    const db = new dbCommonObjects.DatabaseRequest()
    db.setType(dbCommonObjects.DbType.PG)
    db.setSchema(payload.schema)
    db.setName(payload.dbId)

    const req = new dbApiObjects.GetListRequest()
    req.setDb(db)
    req.setCollection(payload.table)
    payload.from && req.setFrom(payload.from)
    payload.calcTotal && req.setCalctotal(payload.calcTotal)
    payload.limit && req.setLimit(payload.limit)

    if (payload.filter) {
      const filter = new dbApiObjects.SingleRecord()
      filter.setBody(bson.serialize(payload.filter))

      req.setFilter(filter)
    }

    if (payload.order) {
      const orderList = payload.order.map((item) => {
        const orderField = new dbApiObjects.OrderField()
        orderField.setName(item.name)
        orderField.setDesc(item.desc)

        return orderField
      })

      req.setOrderList(orderList)
    }

    return this.makeCall<
      dbApiObjects.GetListRequest,
      dbApiObjects.GetListResponse
    >('getList', req).then(createGetListResponse)
  }

  insert(payload: IInsertRequest): Promise<ISingleRecord> {
    const db = new dbCommonObjects.DatabaseRequest()
    db.setType(dbCommonObjects.DbType.PG)
    db.setSchema(payload.schema)
    db.setName(payload.dbId)

    const item = new dbApiObjects.SingleRecord()
    item.setBody(bson.serialize(payload.item))

    const req = new dbApiObjects.InsertRequest()
    req.setDb(db)
    req.setCollection(payload.table)
    req.setItem(item)

    return this.makeCall<
      dbApiObjects.InsertRequest,
      dbApiObjects.SingleRecordResponse
    >('insert', req).then(createSingleRecord)
  }

  update(payload: IUpdateRequest): Promise<ISingleRecord> {
    const db = new dbCommonObjects.DatabaseRequest()
    db.setType(dbCommonObjects.DbType.PG)
    db.setSchema(payload.schema)
    db.setName(payload.dbId)

    const item = new dbApiObjects.SingleRecord()
    item.setBody(bson.serialize(payload.item))

    const req = new dbApiObjects.UpdateRequest()
    req.setDb(db)
    req.setCollection(payload.table)
    req.setKey(bson.serialize(payload.key))
    req.setItem(item)

    return this.makeCall<
      dbApiObjects.UpdateRequest,
      dbApiObjects.SingleRecordResponse
    >('update', req).then(createSingleRecord)
  }

  delete(payload: IRecordRefRequest): Promise<google_protobuf_empty_pb.Empty> {
    const db = new dbCommonObjects.DatabaseRequest()
    db.setType(dbCommonObjects.DbType.PG)
    db.setSchema(payload.schema)
    db.setName(payload.dbId)

    const req = new dbApiObjects.ByIdRequest()
    req.setDb(db)
    req.setCollection(payload.table)
    req.setKey(bson.serialize(payload.key))

    return this.makeCall<
      dbApiObjects.ByIdRequest,
      google_protobuf_empty_pb.Empty
    >('delete', req)
  }

  protected getClientConstructor() {
    return DatabaseApiClient
  }
}
