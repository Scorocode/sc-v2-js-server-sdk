import sc from '../../../index'
import File from '../File'
import Folder from '../Folder'
import FS from '../FS'

beforeAll(() => {
  sc.initApp()
})

afterAll(() => sc.destroyApp())

describe('FS service', () => {
  it('Should return FS service', () => {
    expect(sc.app().fs()).toBeInstanceOf(FS)
  })

  it('Should return File object', () => {
    expect(
      sc
        .app()
        .fs()
        .file('/file.txt')
    ).toBeInstanceOf(File)
  })

  it('Should return Folder object', () => {
    expect(
      sc
        .app()
        .fs()
        .folder('/')
    ).toBeInstanceOf(Folder)
  })
})
