import sc from '../../../index'

const TEST_FOLDER = 'test'

beforeAll(async () => {
  const app = sc.initApp()

  await app
    .fs()
    .folder(TEST_FOLDER)
    .delete()
    .catch(() => {
      return
    })
})

afterAll(() => sc.destroyApp())

describe('Folder integration tests', () => {
  it('Should sync folder', async () => {
    const folder = await sc
      .app()
      .fs()
      .folder('')
      .sync()

    expect(folder.files).toBeInstanceOf(Array)
  })

  it('Should create and remove folder', async () => {
    const folder = await sc
      .app()
      .fs()
      .folder(TEST_FOLDER)
      .create()
    expect(folder.path).toBe(TEST_FOLDER)

    await expect(
      sc
        .app()
        .fs()
        .folder(TEST_FOLDER)
        .sync()
    ).resolves.toMatchObject({
      path: TEST_FOLDER,
    })

    await folder.delete()

    await expect(
      sc
        .app()
        .fs()
        .folder(TEST_FOLDER)
        .sync()
    ).rejects.toMatchObject({
      httpCode: 500,
      apiCode: 'server_err',
      message: expect.stringMatching(/no such file or directory/),
    })
  })
})
