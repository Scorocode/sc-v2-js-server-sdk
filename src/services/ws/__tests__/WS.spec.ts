/* tslint:disable:no-magic-numbers */
import WebSocket from 'ws'
import sc from '../../../index'

declare const SC_APP_HOST: string

let ws: WebSocket

beforeEach(() => {
  sc.initApp()
  ws = new WebSocket(`wss://ws-${SC_APP_HOST}/connect`)
})

afterEach(async () => {
  await sc.destroyApp()
  ws.close()
})

describe('WS integration tests', () => {
  it('Should establish web socket connection and receive a message', async () => {
    const fn = jest.fn()

    ws.addEventListener('message', fn)

    const delay = 500
    await new Promise((res) => setTimeout(res, delay))

    expect(fn).toHaveBeenCalledTimes(1)

    await sc
      .app()
      .ws()
      .sendMessage('echo', 'Hello!')

    await new Promise((res) => setTimeout(res, delay))

    expect(fn).toHaveBeenCalledTimes(2)
  })
})
