import fs from 'fs'
import sc from '../../../index'

const TEST_FILE = 'test.file'
const TEST_FILE_RENAMED = 'renamed.file'

beforeAll(async () => {
  const app = sc.initApp()

  await app
    .fs()
    .file(TEST_FILE)
    .delete()
    .catch(() => {
      return
    })

  await app
    .fs()
    .file(TEST_FILE_RENAMED)
    .delete()
    .catch(() => {
      return
    })
})

afterAll(() => sc.destroyApp())

describe('File integration tests', () => {
  it('Should get an error', async () => {
    await expect(
      sc
        .app()
        .fs()
        .file(TEST_FILE)
        .sync()
    ).rejects.toMatchObject({
      httpCode: 2,
      apiCode: 'server_err',
      message: expect.stringMatching(/file not found/),
    })
  })

  it('Create, read, rename and remove file using file as source', async () => {
    const app = sc.app()
    const data = fs.createReadStream(__dirname + '/data.file')
    const dataContent = fs.readFileSync(__dirname + '/data.file').toString()

    // upload
    const file = app.fs().file(TEST_FILE)
    await file.upload(data)
    await file.sync()

    // download
    const fileRef = app.fs().file(TEST_FILE)
    await fileRef.sync()

    const fileContent = (file.content as Buffer).toString()
    const fileRefContent = (fileRef.content as Buffer).toString()
    expect(fileContent).toBe(dataContent)
    expect(fileRefContent).toBe(dataContent)

    // rename
    await fileRef.rename(TEST_FILE_RENAMED)
    expect(fileRef.path).toBe(TEST_FILE_RENAMED)

    const renamedRef = app.fs().file(TEST_FILE_RENAMED)
    await renamedRef.sync()

    expect(renamedRef.path).toBe(TEST_FILE_RENAMED)
    const renamedRefContent = (renamedRef.content as Buffer).toString()
    expect(renamedRefContent).toBe(dataContent)

    // delete
    await renamedRef.delete()

    // check
    await expect(
      app
        .fs()
        .file(TEST_FILE)
        .sync()
    ).rejects.toMatchObject({
      httpCode: 2,
      apiCode: 'server_err',
      message: expect.stringMatching(/file not found/),
    })

    await expect(
      app
        .fs()
        .file(TEST_FILE_RENAMED)
        .sync()
    ).rejects.toMatchObject({
      httpCode: 2,
      apiCode: 'server_err',
      message: expect.stringMatching(/file not found/),
    })
  })

  it('Create, read, and remove file using string as source', async () => {
    const app = sc.app()
    const data = 'foobar'

    // upload
    const file = app.fs().file(TEST_FILE)
    await file.upload(data)
    await file.sync()

    // download
    const fileRef = app.fs().file(TEST_FILE)
    await fileRef.sync()

    const fileContent = (file.content as Buffer).toString()
    const fileRefContent = (fileRef.content as Buffer).toString()
    expect(fileContent).toBe(data)
    expect(fileRefContent).toBe(data)

    // delete
    await fileRef.delete()

    // check
    await expect(
      app
        .fs()
        .file(TEST_FILE)
        .sync()
    ).rejects.toMatchObject({
      httpCode: 2,
      apiCode: 'server_err',
      message: expect.stringMatching(/file not found/),
    })
  })
})
