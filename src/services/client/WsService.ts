import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'
import BaseService from './BaseService'
import { WebsocketApiClient } from './grpc/sc_ws/ws_api_grpc_pb'
import * as wsObjects from './grpc/sc_ws/ws_api_pb'

interface ISendMessageRequest {
  clientAccessToken?: string
  clientId?: string
  inReplyTo?: string
  body: string
}

export default class WsService extends BaseService<WebsocketApiClient> {
  sendMessage(
    payload: ISendMessageRequest
  ): Promise<google_protobuf_empty_pb.Empty> {
    const req = new wsObjects.SendMessageRequest()
    payload.clientAccessToken &&
      req.setClientaccestocken(payload.clientAccessToken)
    payload.clientId && req.setClientid(payload.clientId)
    payload.inReplyTo && req.setInreplyto(payload.inReplyTo)
    req.setBody(payload.body)

    return this.makeCall<
      wsObjects.SendMessageRequest,
      google_protobuf_empty_pb.Empty
    >('sendMessage', req)
  }

  protected getClientConstructor() {
    return WebsocketApiClient
  }
}
