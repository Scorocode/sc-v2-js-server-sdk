import Application from '../Application'
import sc from '../index'
import { Acl } from '../services/acl'
import { Auth } from '../services/auth'
import { Client } from '../services/client'
import { FS } from '../services/fs'
import { Manager } from '../services/manager'
import { PG } from '../services/pg'
import { Push } from '../services/push'
import { WS } from '../services/ws'

describe('Scorocode manager', () => {
  it('Creates and destroys default application', async () => {
    sc.initApp()

    const app = sc.app()

    expect(app).toBeInstanceOf(Application)
    expect(app.acl()).toBeInstanceOf(Acl)
    expect(app.auth()).toBeInstanceOf(Auth)
    expect(app.client()).toBeInstanceOf(Client)
    expect(app.fs()).toBeInstanceOf(FS)
    expect(app.manager()).toBeInstanceOf(Manager)
    expect(app.pg()).toBeInstanceOf(PG)
    expect(app.push()).toBeInstanceOf(Push)
    expect(app.ws()).toBeInstanceOf(WS)

    await sc.destroyApp()

    expect(() => {
      app.client()
    }).toThrow('Application is destroyed')
  })
})
