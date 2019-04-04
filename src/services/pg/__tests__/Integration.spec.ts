import sc from '../../../index'
import RecordList from '../RecordList'

const TEST_DB = 'test'
const TEST_SCHEMA = 'public'
const TEST_TABLE = 'test'

const TEST_TABLE_FIELD_NAME = 'name'

const dbObjectSchema = {
  id: expect.any(String),
  name: expect.any(String),
  encoding: expect.any(String),
  adminUser: expect.any(String),
  password: expect.any(String),
  schemas: expect.any(Array),
}

beforeAll(async () => {
  sc.initApp()
})

afterAll(() => sc.destroyApp())

describe('DB integration tests', () => {
  it('Get databases', async () => {
    const databases = await sc
      .app()
      .pg()
      .getDatabases()
    expect(databases[0]).toMatchObject({
      dbId: expect.any(String),
      info: expect.objectContaining(dbObjectSchema),
    })
  })

  it('Sync database', async () => {
    const database = await sc
      .app()
      .pg()
      .database(TEST_DB)
      .sync()

    expect(database).toMatchObject({
      dbId: TEST_DB,
      info: expect.objectContaining(dbObjectSchema),
    })
  })

  it('Sync schema', async () => {
    const schema = await sc
      .app()
      .pg()
      .schema(TEST_DB, TEST_SCHEMA)
      .sync()

    expect(schema.info).toMatchObject({
      dbId: TEST_DB,
      name: TEST_SCHEMA,
    })
  })

  it('Sync table', async () => {
    const table = await sc
      .app()
      .pg()
      .table(TEST_DB, TEST_SCHEMA, TEST_TABLE)
      .sync()

    expect(table.info).toMatchObject({
      metadata: expect.objectContaining({
        name: TEST_TABLE,
        isPublic: expect.any(Boolean),
      }),
      table: expect.objectContaining({
        dbId: TEST_DB,
        schema: TEST_SCHEMA,
        name: TEST_TABLE,
      }),
    })
  })

  it('Record tests', async () => {
    const record = sc
      .app()
      .pg()
      .record(TEST_DB, TEST_SCHEMA, TEST_TABLE)
    record.set(TEST_TABLE_FIELD_NAME, 'foo')

    await record.save()
    expect(record.id).not.toEqual('')

    // try to fetch created record
    const _record = await sc
      .app()
      .pg()
      .record(TEST_DB, TEST_SCHEMA, TEST_TABLE, record.ref as any)
      .sync()

    expect(_record.get(TEST_TABLE_FIELD_NAME)).toEqual('foo')
    expect(record.attributes).toMatchObject(_record.attributes)
    expect(record.id).toEqual(_record.id)

    // try to update record
    record.set(TEST_TABLE_FIELD_NAME, 'bar')
    await record.save()
    await _record.sync()

    expect(record.get(TEST_TABLE_FIELD_NAME)).toEqual('bar')
    expect(_record.get(TEST_TABLE_FIELD_NAME)).toEqual('bar')
    expect(record.attributes).toMatchObject(_record.attributes)

    // try to fetch record list
    const list = await sc
      .app()
      .pg()
      .query(TEST_DB, TEST_SCHEMA, TEST_TABLE)
      .sync()
    expect(list).toBeInstanceOf(RecordList)

    // delete item
    expect(record.isDeleted).toBe(false)
    await record.delete()
    expect(record.isDeleted).toBe(true)

    await expect(_record.sync()).rejects.toMatchObject({
      httpCode: 500,
      apiCode: 'server_err',
      message: expect.stringMatching(/record not found/),
    })
  })
})
