import sc from '../../../index'
import AuthManagerService from '../AuthManagerService'
import AuthService from '../AuthService'
import BrokerService from '../BrokerService'
import Client from '../Client'
import FsService from '../FsService'
import PgApiService from '../PgApiService'
import PgManagerService from '../PgManagerService'
import WsService from '../WsService'

beforeAll(() => {
  sc.initApp()
})

afterAll(() => sc.destroyApp())

describe('Client service integration test', () => {
  it('Scorocode application returns a client service', () => {
    expect(sc.app().client()).toBeInstanceOf(Client)
  })

  it('Client service should return a set of grpc services', () => {
    const client = sc.app().client()

    expect(client.auth).toBeInstanceOf(AuthService)
    expect(client.authManager).toBeInstanceOf(AuthManagerService)
    expect(client.fs).toBeInstanceOf(FsService)
    expect(client.pg).toBeInstanceOf(PgApiService)
    expect(client.pgManager).toBeInstanceOf(PgManagerService)
    expect(client.ws).toBeInstanceOf(WsService)
    expect(client.broker).toBeInstanceOf(BrokerService)
  })
})
