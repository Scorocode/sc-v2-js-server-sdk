import Application from '../Application'
import sc from '../index'
import { Client } from '../services/client'

describe('Scorocode manager', () => {
  it('Creates and destroys default application', async () => {
    sc.initApp()

    const app = sc.app()

    expect(app).toBeInstanceOf(Application)
    expect(app.client()).toBeInstanceOf(Client)

    await sc.destroyApp()

    expect(() => {
      app.client()
    }).toThrow('Application is destroyed')
  })
})
