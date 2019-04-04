import fs from 'fs'
import utils from '../index'

describe('Utils integration tests', () => {
  it('Test convert functions', async () => {
    const stream = fs.createReadStream(`${__dirname}/data.file`)
    const _stream = fs.createReadStream(`${__dirname}/data.file`)

    const str = await utils.streamToString(stream)
    const arr = await utils.streamToUint8Array(_stream)
    const _str = utils.uint8ArrayToString(arr)

    expect(str).toBe(_str)
  })
})
