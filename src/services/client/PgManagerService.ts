import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'
import BaseService from './BaseService'
import { ServerManagerApiClient } from './grpc/sc_db_api/db_manager_api_grpc_pb'
import * as dbManagerObjects from './grpc/sc_db_api/db_manager_api_pb'
import * as dbMetaObjects from './grpc/sc_db_api/db_meta_common_pb'

const MILLISECONDS = 1000

export interface IDatabase {
  id: string
  name: string
  encoding: string
  adminUser: string
  password: string
  schemas: string[]
}

const createDatabase = (data: dbManagerObjects.Database): IDatabase => ({
  id: data.getId(),
  name: data.getName(),
  encoding: data.getEncoding(),
  adminUser: data.getAdminuser(),
  password: data.getPassword(),
  schemas: data.getSchemasList(),
})

interface IRefDatabaseRequest {
  id: string
}

interface IGetSchemasRequest {
  dbId: string
}

interface IRefSchemaRequest {
  dbId: string
  schema: string
}

export interface ISchema {
  dbId: string
  dbName: string
  name: string
  schemaOwner: string
  defaultCharacterSetCatalog: string
  defaultCharacterSetSchema: string
  defaultCharacterSetName: string
  sqlPath: string
  tables: ITableMetadata[]
}

export interface ITableMetadata {
  name: string
  isPublic: boolean
}

interface IUpdateSchemaTableRequest {
  dbId: string
  schema: string
  metadata: ITableMetadata
}

interface IGetTablesRequest {
  dbId: string
  schema: string
  tables: string[]
}

export interface ITable {
  dbId: string
  dbName: string
  schema: string
  name: string
  type: string
  selfReferencingColumnName: string
  referenceGeneration: string
  userDefinedTypeCatalog: string
  userDefinedTypeSchema: string
  userDefinedTypeName: string
  isInsertableInto: string
  isTyped: string
  commitAction: string
  columnsList: IColumn[]
  primaryKeyList: string[]
  indexesList: IIndex[]
  foreignKeysList: IForeignKey[]
}

export interface IColumn {
  columnName: string
  ordinalPosition: number
  columnDefault: string
  isNullable: string
  dataType: string
  characterMaximumLength: number
  characterOctetLength: number
  numericPrecision: number
  numericPrecisionRadix: number
  numericScale: number
  characterSetName: string
  collationName: string
}

export interface IIndex {
  name: string
  type: dbMetaObjects.Index.Type
  columns: string[]
}

export interface IForeignKey {
  name: string
  updateRule: string
  deleteRule: string
  referencesSchema: string
  referencesTable: string
  keyColumnsList: string[]
  referencesColumnsList: string[]
}

export interface ITableInfo {
  metadata: ITableMetadata
  table: ITable
}

interface IGetTableRequest {
  dbId: string
  schema: string
  table: string
}

interface IExecuteDdlRequest {
  dbId: string
  up: string
  down: string
}

export interface IGetDatabaseLogRequest {
  dbId: string
  after?: Date // google_protobuf_timestamp_pb.Timestamp.AsObject,
}

export interface IScript {
  up: string
  down: string
  type: dbManagerObjects.StatementType
  status: dbManagerObjects.StatementStatus
  message: string
  // todo сделать время обязательным параметром
  time?: Date // google_protobuf_timestamp_pb.Timestamp.AsObject,
}

const createScript = (data: dbManagerObjects.Script): IScript => {
  const time = data.getTime()
  let jsTime: Date | undefined

  if (time) {
    jsTime = new Date(time.getSeconds())
    jsTime.setMilliseconds(time.getNanos())
  }

  return {
    up: data.getUp(),
    down: data.getDown(),
    type: data.getType(),
    status: data.getStatus(),
    message: data.getMessage(),
    time: jsTime,
  }
}

const createTableMetadata = (
  data: dbMetaObjects.CollectionMetadata
): ITableMetadata => ({
  name: data.getName(),
  isPublic: data.getIspublic(),
})

const createSchema = (data: dbMetaObjects.Schema): ISchema => ({
  dbId: data.getDbid(),
  dbName: data.getDbname(),
  name: data.getName(),
  schemaOwner: data.getSchemaowner(),
  defaultCharacterSetCatalog: data.getDefaultcharactersetcatalog(),
  defaultCharacterSetSchema: data.getDefaultcharactersetschema(),
  defaultCharacterSetName: data.getDefaultcharactersetname(),
  sqlPath: data.getSqlpath(),
  tables: data.getCollectionsList().map(createTableMetadata),
})

const createColumn = (data: dbMetaObjects.Column): IColumn => ({
  columnName: data.getColumnname(),
  ordinalPosition: data.getOrdinalposition(),
  columnDefault: data.getColumndefault(),
  isNullable: data.getIsnullable(),
  dataType: data.getDatatype(),
  characterMaximumLength: data.getCharactermaximumlength(),
  characterOctetLength: data.getCharacteroctetlength(),
  numericPrecision: data.getNumericprecision(),
  numericPrecisionRadix: data.getNumericprecisionradix(),
  numericScale: data.getNumericscale(),
  characterSetName: data.getCharactersetname(),
  collationName: data.getCollationname(),
})

const createIndex = (data: dbMetaObjects.Index): IIndex => ({
  name: data.getName(),
  type: data.getType(),
  columns: data.getColumnsList(),
})

const createForeignKey = (data: dbMetaObjects.ForeignKey): IForeignKey => ({
  name: data.getName(),
  updateRule: data.getUpdaterule(),
  deleteRule: data.getDeleterule(),
  referencesSchema: data.getReferencesschema(),
  referencesTable: data.getReferencestable(),
  keyColumnsList: data.getKeycolumnsList(),
  referencesColumnsList: data.getReferencescolumnsList(),
})

const createTable = (data: dbMetaObjects.Collection): ITable => ({
  dbId: data.getDbid(),
  dbName: data.getDbname(),
  schema: data.getSchema(),
  name: data.getName(),
  type: data.getType(),
  selfReferencingColumnName: data.getSelfreferencingcolumnname(),
  referenceGeneration: data.getReferencegeneration(),
  userDefinedTypeCatalog: data.getUserdefinedtypecatalog(),
  userDefinedTypeSchema: data.getUserdefinedtypeschema(),
  userDefinedTypeName: data.getUserdefinedtypename(),
  isInsertableInto: data.getIsinsertableinto(),
  isTyped: data.getIstyped(),
  commitAction: data.getCommitaction(),
  columnsList: data.getColumnsList().map(createColumn),
  primaryKeyList: data.getPrimarykeyList(),
  indexesList: data.getIndexesList().map(createIndex),
  foreignKeysList: data.getForeignkeysList().map(createForeignKey),
})

// todo fix proto - the fields of dbManagerObjects.CollectionInfo should be always defined
const createTableInfo = (
  data: dbManagerObjects.CollectionInfo
): ITableInfo => ({
  metadata: createTableMetadata(
    data.getMetadata() as dbMetaObjects.CollectionMetadata
  ),
  table: createTable(data.getCollection() as dbMetaObjects.Collection),
})

export default class PgManagerService extends BaseService<
  ServerManagerApiClient
> {
  getDatabases(): Promise<IDatabase[]> {
    const req = new google_protobuf_empty_pb.Empty()

    return this.makeCall<
      google_protobuf_empty_pb.Empty,
      dbManagerObjects.GetDatabasesResponse
    >('getDatabases', req).then((res) => {
      return res.getDatabasesList().map(createDatabase)
    })
  }

  getDatabase(payload: IRefDatabaseRequest): Promise<IDatabase> {
    const req = new dbManagerObjects.GetDatabaseRequest()
    req.setId(payload.id)

    return this.makeCall<
      dbManagerObjects.GetDatabaseRequest,
      dbManagerObjects.Database
    >('getDatabase', req).then(createDatabase)
  }

  registerDatabase(
    payload: IDatabase
  ): Promise<google_protobuf_empty_pb.Empty> {
    const req = new dbManagerObjects.Database()
    req.setId(payload.id)
    req.setName(payload.name)
    req.setEncoding(payload.encoding)
    req.setAdminuser(payload.adminUser)
    req.setPassword(payload.password)
    req.setSchemasList(payload.schemas)

    return this.makeCall<
      dbManagerObjects.Database,
      google_protobuf_empty_pb.Empty
    >('createDatabase', req)
  }

  dropDatabase(
    payload: IRefDatabaseRequest
  ): Promise<google_protobuf_empty_pb.Empty> {
    const req = new dbManagerObjects.DropDatabaseRequest()
    req.setId(payload.id)

    return this.makeCall<
      dbManagerObjects.DropDatabaseRequest,
      google_protobuf_empty_pb.Empty
    >('dropDatabase', req)
  }

  getSchemas(payload: IGetSchemasRequest): Promise<string[]> {
    const req = new dbManagerObjects.GetSchemasRequest()
    req.setDbid(payload.dbId)

    return this.makeCall<
      dbManagerObjects.GetSchemasRequest,
      dbManagerObjects.GetSchemasResponse
    >('getSchemas', req).then((res) => res.getSchemasList())
  }

  getSchema(payload: IRefSchemaRequest): Promise<ISchema> {
    const req = new dbManagerObjects.GetSchemaRequest()
    req.setDbid(payload.dbId)
    req.setSchema(payload.schema)

    return this.makeCall<
      dbManagerObjects.GetSchemaRequest,
      dbMetaObjects.Schema
    >('getSchema', req).then(createSchema)
  }

  getSchemaTables(payload: IRefSchemaRequest): Promise<ITableMetadata[]> {
    const req = new dbManagerObjects.GetSchemaCollectionsRequest()
    req.setDbid(payload.dbId)
    req.setSchema(payload.schema)

    return this.makeCall<
      dbManagerObjects.GetSchemaCollectionsRequest,
      dbManagerObjects.GetSchemaCollectionsResponse
    >('getSchemaCollections', req).then((res) => {
      return res.getCollectionsList().map(createTableMetadata)
    })
  }

  updateSchemaTable(
    payload: IUpdateSchemaTableRequest
  ): Promise<google_protobuf_empty_pb.Empty> {
    const metadata = new dbMetaObjects.CollectionMetadata()
    metadata.setName(payload.metadata.name)
    metadata.setIspublic(payload.metadata.isPublic)

    const req = new dbManagerObjects.UpdateSchemaCollectionRequest()
    req.setDbid(payload.dbId)
    req.setSchema(payload.schema)
    req.setMetadata(metadata)

    return this.makeCall<
      dbManagerObjects.UpdateSchemaCollectionRequest,
      google_protobuf_empty_pb.Empty
    >('updateSchemaCollection', req)
  }

  getTables(payload: IGetTablesRequest): Promise<ITableInfo[]> {
    const req = new dbManagerObjects.GetCollectionsRequest()
    req.setDbid(payload.dbId)
    req.setSchema(payload.schema)
    req.setCollectionsList(payload.tables)

    return this.makeCall<
      dbManagerObjects.GetCollectionsRequest,
      dbManagerObjects.GetCollectionsResponse
    >('getCollections', req).then((res) => {
      return res.getCollectionsList().map(createTableInfo)
    })
  }

  getTable(payload: IGetTableRequest): Promise<ITableInfo> {
    const req = new dbManagerObjects.GetCollectionRequest()
    req.setDbid(payload.dbId)
    req.setSchema(payload.schema)
    req.setCollection(payload.table)

    return this.makeCall<
      dbManagerObjects.GetCollectionRequest,
      dbManagerObjects.CollectionInfo
    >('getCollection', req).then(createTableInfo)
  }

  executeDdl(
    payload: IExecuteDdlRequest
  ): Promise<google_protobuf_empty_pb.Empty> {
    const req = new dbManagerObjects.ExecuteDdlRequest()
    req.setDatabasealias(payload.dbId)
    req.setUp(payload.up)
    req.setDown(payload.down)

    return this.makeCall<
      dbManagerObjects.ExecuteDdlRequest,
      google_protobuf_empty_pb.Empty
    >('executeDdl', req)
  }

  getDatabaseLog(payload: IGetDatabaseLogRequest): Promise<IScript[]> {
    const req = new dbManagerObjects.GetDatabaseLogRequest()
    req.setDbid(payload.dbId)

    if (payload.after) {
      const after = new google_protobuf_timestamp_pb.Timestamp()
      after.setSeconds(Math.floor(payload.after.getTime() / MILLISECONDS))
      after.setNanos(payload.after.getMilliseconds())

      req.setAfter(after)
    }

    return this.makeCall<
      dbManagerObjects.GetDatabaseLogRequest,
      dbManagerObjects.GetDatabaseLogResponse
    >('getDatabaseLog', req).then((res) =>
      res.getScriptsList().map(createScript)
    )
  }

  protected getClientConstructor() {
    return ServerManagerApiClient
  }
}
