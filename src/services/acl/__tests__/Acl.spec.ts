import sc from '../../../index'
import Acl from '../Acl'

beforeAll(() => {
  sc.initApp()
})

afterAll(() => sc.destroyApp())

describe('Acl service', () => {
  it('Should return Acl service', () => {
    expect(sc.app().acl()).toBeInstanceOf(Acl)
  })
})

describe('Acl service integration tests', () => {
  it('Test getAclsByRoles', async () => {
    expect(true).toBe(true)

    // const res = await sc
    //   .app()
    //   .acl()
    //   .getAclsByRoles(['fiviv', 'administrator', 'fuck'])
    //
    // console.log('res', res);
  })

  it('Test getRoles', async () => {
    expect(true).toBe(true)

    // const res = await sc
    //   .app()
    //   .acl()
    //   .getRoles()
    // console.log(res)
  })
})
