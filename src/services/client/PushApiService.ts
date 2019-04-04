// import grpc from 'grpc'
import utils from '../../utils'
import BaseService from './BaseService'
import { ServiceClient } from './grpc/sc_push/service_grpc_pb'
import * as pushObjects from './grpc/sc_push/service_pb'

export default class PushApiService extends BaseService<ServiceClient> {
  sendFCM(payload: {}): Promise<{}> {
    const req = new pushObjects.PushRequestFCM()
    req.setData(utils.stringToUint8Array(JSON.stringify(payload)))

    return this.makeCall<pushObjects.PushRequestFCM, pushObjects.PushResponse>(
      'sendFCM',
      req
    ).then((response) =>
      JSON.parse(utils.uint8ArrayToString(response.getData_asU8()))
    )
  }

  sendAPN(payload: {}): Promise<{}> {
    const req = new pushObjects.PushRequestAPN()
    req.setData(utils.stringToUint8Array(JSON.stringify(payload)))

    return this.makeCall<pushObjects.PushRequestAPN, pushObjects.PushResponse>(
      'sendAPN',
      req
    ).then((response) =>
      JSON.parse(utils.uint8ArrayToString(response.getData_asU8()))
    )
  }

  protected getClientConstructor() {
    return ServiceClient
  }
}
