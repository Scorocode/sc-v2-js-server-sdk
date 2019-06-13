/* tslint:disable:no-magic-numbers */
import fs from 'fs'
import sc from '../../../index'

beforeAll(() => sc.initApp())

afterAll(() => sc.destroyApp())

/*
  !!! You must add android.json and ios.p12 files to pass tests
 */

describe('Push integration tests', () => {
  // it('ff', () => {
  //   expect(true).toBe(true)
  // })

  it('Should update FCM settings', async () => {
    const stream = fs.createReadStream(`${__dirname}/android.json`)

    await sc
      .app()
      .push()
      .updateSettingsFCM(stream)
    expect(true).toBe(true)
  })

  it('Should update APN settings', async () => {
    const stream = fs.createReadStream(`${__dirname}/ios.p12`)

    await sc
      .app()
      .push()
      .updateSettingsAPN(stream)
    expect(true).toBe(true)
  })

  it('Should send FCM message', async () => {
    const response = await sc
      .app()
      .push()
      .sendFCM({
        message: {
          token:
            'fSTGz4_Uxek:APA91bHfdjojzZuoh4Dszz8nL5wVm40FYYCoqW9rrJBLmV19oh_-kOFrbmZxVo5kP3hYbstMCtTWE7LDR9-tKx3hXUlHCSVeI7-2FiHqdZfCg7GekWlKLcVYOr2j_iuWa7REIYnklby9',
          android: {
            notification: {
              body: 'body',
              title: 'title2018-12-12T12:25:58+03:00',
            },
          },
        },
      })

    expect(response).toMatchObject({
      name: expect.any(String),
    })
  })

  // it('Should send APN message', async () => {
  //   const response = await sc
  //     .app()
  //     .push()
  //     .sendAPN({
  //       token:
  //         'A27DA256E2057FC0C6029849E5FF15CC52BD03389D3CECD889F3236AB53E392C',
  //       payload: { aps: { alert: 'Hello' } },
  //     })
  //
  //   expect(true).toBe(true)
  // })
})
