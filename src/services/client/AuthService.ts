import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'
import utils from '../../utils'
import BaseService from './BaseService'
import * as baseObjects from './grpc/base/base_pb'
import { ServiceClient } from './grpc/sc_auth/service_grpc_pb'
import * as svcObjects from './grpc/sc_auth/service_pb'

interface ITokenRequest {
  token: string
}

interface IIdRequest {
  id: string
}

interface IEmailRequest {
  email: string
}

export interface IUser {
  id: string
  email: string
  password: string
  isBlocked: boolean
  createdAt?: Date
  updatedAt?: Date
}

export interface ISessionInfo {
  token: string
  refreshToken: string
  expiresAt: Date
  xsrf: string
  payload: { [paramName: string]: any }
  user: IUser
}

interface IIdentifyUserWithEmailAndPassword {
  email: string
  password: string
}

interface IEmptyResponse {}

function getDateFromTimestamp(
  value?: google_protobuf_timestamp_pb.Timestamp
): Date | undefined {
  if (value) {
    const time = new Date(value.getSeconds())
    time.setMilliseconds(value.getNanos())

    return time
  }

  return undefined
}

const createUser = (data: svcObjects.User): IUser => ({
  id: data.getId(),
  email: data.getEmail().toString(),
  password:
    (data.getPassword() && utils.uint8ArrayToString(data.getPassword_asU8())) ||
    '',
  isBlocked: data.getBlocked(),
  createdAt: getDateFromTimestamp(data.getCreatedAt()),
  updatedAt: getDateFromTimestamp(data.getUpdatedAt()),
})

const createSessionInfo = (data: svcObjects.SessionInfo): ISessionInfo => ({
  token: data.getToken(),
  refreshToken: data.getRefreshtoken(),
  expiresAt: getDateFromTimestamp(data.getExpiresAt()) as any,
  xsrf: data.getXsrf(),
  payload: data
    .getPayloadMap()
    .toArray()
    .reduce((result, [k, v]) => (result[v] = v), {}),
  user: createUser(data.getUser() as any),
})

export default class AuthService extends BaseService<ServiceClient> {
  getSession(payload: ITokenRequest): Promise<ISessionInfo> {
    const req = new svcObjects.SessionRequest()
    req.setToken(payload.token)

    return this.makeCall<svcObjects.SessionRequest, svcObjects.SessionInfo>(
      'getSession',
      req
    ).then(createSessionInfo)
  }

  refreshSession(payload: ITokenRequest): Promise<ISessionInfo> {
    const req = new svcObjects.SessionRequest()
    req.setToken(payload.token)

    return this.makeCall<svcObjects.SessionRequest, svcObjects.SessionInfo>(
      'refreshSession',
      req
    ).then(createSessionInfo)
  }

  createUser(payload: IIdentifyUserWithEmailAndPassword): Promise<IUser> {
    const req = new svcObjects.UserEmailAndPasswordRequest()
    req.setEmail(payload.email)
    req.setPassword(payload.password)

    return this.makeCall<
      svcObjects.UserEmailAndPasswordRequest,
      svcObjects.User
    >('createUser', req).then(createUser)
  }

  signInWithEmailAndPassword(
    payload: IIdentifyUserWithEmailAndPassword
  ): Promise<ISessionInfo> {
    const req = new svcObjects.UserEmailAndPasswordRequest()
    req.setEmail(payload.email)
    req.setPassword(payload.password)

    return this.makeCall<
      svcObjects.UserEmailAndPasswordRequest,
      svcObjects.SessionInfo
    >('signInWithEmailAndPassword', req).then(createSessionInfo)
  }

  signOutByToken(payload: ITokenRequest): Promise<IEmptyResponse> {
    const req = new svcObjects.SessionRequest()
    req.setToken(payload.token)

    return this.makeCall<svcObjects.SessionRequest, baseObjects.SimpleResponse>(
      'signoutByToken',
      req
    )
  }

  getUserByID(payload: IIdRequest): Promise<IUser> {
    const req = new svcObjects.UserSelectRequest()
    req.setData(payload.id)

    return this.makeCall<svcObjects.UserSelectRequest, svcObjects.User>(
      'getUserByID',
      req
    ).then(createUser)
  }

  getUserByEmail(payload: IEmailRequest): Promise<IUser> {
    const req = new svcObjects.UserSelectRequest()
    req.setData(payload.email)

    return this.makeCall<svcObjects.UserSelectRequest, svcObjects.User>(
      'getUserByEmail',
      req
    ).then(createUser)
  }

  getUserByToken(payload: ITokenRequest): Promise<IUser> {
    const req = new svcObjects.UserSelectRequest()
    req.setData(payload.token)

    return this.makeCall<svcObjects.UserSelectRequest, svcObjects.User>(
      'getUserByToken',
      req
    ).then(createUser)
  }

  deleteUserByID(payload: IIdRequest): Promise<IEmptyResponse> {
    const req = new svcObjects.UserSelectRequest()
    req.setData(payload.id)

    return this.makeCall<svcObjects.UserSelectRequest, svcObjects.User>(
      'deleteUserByID',
      req
    )
  }

  protected getClientConstructor() {
    return ServiceClient
  }
}
