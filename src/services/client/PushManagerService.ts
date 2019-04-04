import { Readable } from 'stream'
import utils from '../../utils'
import BaseService from './BaseService'
import * as baseObjects from './grpc/base/base_pb'
import { ManagementClient } from './grpc/sc_push/manager_grpc_pb'
import * as pushObjects from './grpc/sc_push/manager_pb'

export default class PushManagerService extends BaseService<ManagementClient> {
  async updateSettingsFCM(payload: Readable): Promise<void> {
    const req = new pushObjects.Settings()
    const data = await utils.streamToUint8Array(payload)
    req.setData(data)

    return this.makeCall<pushObjects.Settings, baseObjects.SimpleResponse>(
      'updateSettignsFCM',
      req
    ).then(() => undefined)
  }

  async updateSettingsAPN(payload: Readable): Promise<void> {
    const req = new pushObjects.Settings()
    const data = await utils.streamToUint8Array(payload)
    req.setData(data)

    return this.makeCall<pushObjects.Settings, baseObjects.SimpleResponse>(
      'updateSettignsAPN',
      req
    ).then(() => undefined)
  }

  protected getClientConstructor() {
    return ManagementClient
  }
}
