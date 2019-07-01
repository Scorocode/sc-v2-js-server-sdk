import sc from '../../../index'
import Manager from '../Manager'

beforeAll(async () => {
  sc.initApp()
})

afterAll(() => sc.destroyApp())

describe('Manager service', () => {
  it('Should return Manager service', () => {
    expect(sc.app().manager()).toBeInstanceOf(Manager)
  })
})

describe('Auth service integration tests', () => {
  it('Should get a list of processes', async () => {
    const res = await sc
      .app()
      .manager()
      .processes()

    expect(res[0]).toMatchObject({
      replica: expect.any(String),
      pid: expect.any(Number),
      path: expect.any(String),
      createdAt: expect.any(Number),
      memory: expect.any(Number),
      cpu: expect.any(Number),
      state: expect.any(Number),
      type: expect.any(Number),
    })
  })

  it('Should get a list of cron jobs', async () => {
    await sc
      .app()
      .manager()
      .cronSet([
        {
          path: 'some/path/script.js',
        },
      ])

    let res = await sc
      .app()
      .manager()
      .cronRead()

    expect(res[0]).toMatchObject({
      path: 'some/path/script.js',
    })

    await sc
      .app()
      .manager()
      .cronSet([])

    res = await sc
      .app()
      .manager()
      .cronRead()

    expect(res).toHaveLength(0)
  })
})
