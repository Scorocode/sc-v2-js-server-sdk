import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'
import utils from '../../utils'
import BaseService from './BaseService'
import * as baseObjects from './grpc/base/base_pb'
import * as commonObjects from './grpc/sc_auth/common_pb'
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

const createUser = (data: commonObjects.User): IUser => ({
  id: data.getId(),
  email: data.getEmail().toString(),
  password:
    (data.getPassword() && utils.uint8ArrayToString(data.getPassword_asU8())) ||
    '',
  isBlocked: data.getBlocked(),
  createdAt: getDateFromTimestamp(data.getCreatedAt()),
  updatedAt: getDateFromTimestamp(data.getUpdatedAt()),
})

export interface ISessionInfo {
  token: string
  refreshToken: string
  expiresAt: Date
  xsrf: string
  payload: { [paramName: string]: any }
  user: IUser
}

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

interface IIdentifyUserWithEmailAndPassword {
  email: string
  password: string
}

// ACL
export interface IRole {
  id: number
  name: string
  isAdmin: boolean
  isPublic: boolean
  createdAt?: Date
  updatedAt?: Date
}

const createRole = (data: commonObjects.Role): IRole => ({
  id: data.getId(),
  name: data.getName().toString(),
  isAdmin: data.getIsadmin(),
  isPublic: data.getIspublic(),
  createdAt: getDateFromTimestamp(data.getCreatedAt()),
  updatedAt: getDateFromTimestamp(data.getUpdatedAt()),
})

// export interface IRolesList {
//   rolesList: IRole[],
//   page: number
//   pageSize: number
//   total: number
// }
//
// const createRoleList = (data: commonObjects.RolesList): IRolesList => ({
//   rolesList: data.getRolesList().map(createRole),
//   page: data.getPage(),
//   pageSize: data.getPagesize(),
//   total: data.getTotal(),
// })

export interface IAclType {
  id: number
  name: string
  type: commonObjects.AclType
}

const createAclType = (data: commonObjects.AclActionType): IAclType => ({
  id: data.getId(),
  name: data.getName().toString(),
  type: data.getType(),
})

export interface IAclAction {
  id: number
  roleId: number
  objectId: number
  fieldId: number
  actionType?: IAclType
  condition: string
}

const createAclAction = (data: commonObjects.AclAction): IAclAction => ({
  id: data.getId(),
  roleId: data.getRoleid(),
  objectId: data.getObjectid(),
  fieldId: data.getFieldid(),
  actionType: data.getActiontype()
    ? createAclType(data.getActiontype() as any)
    : undefined,
  condition: data.getCondition().toString(),
})

export interface IAclField {
  id: number
  objectId: number
  name: string
  actionsList: IAclAction[]
}

const createAclField = (data: commonObjects.AclField): IAclField => ({
  id: data.getId(),
  objectId: data.getObjectid(),
  name: data.getName().toString(),
  actionsList: data.getActionsList().map(createAclAction),
})

export interface IAclObject {
  id: number
  name: string
  fieldsList: IAclField[]
  actionsList: IAclAction[]
}

const createAclObject = (data: commonObjects.AclObject): IAclObject => ({
  id: data.getId(),
  name: data.getName().toString(),
  fieldsList: data.getFieldsList().map(createAclField),
  actionsList: data.getActionsList().map(createAclAction),
})

export interface IGetAclsByRolesRequest {
  roles: string[]
}

export interface IAclObjectsToRolesMap {
  [rolesNames: string]: IAclObject[]
}

const createRolesToObjectsMap = (
  data: commonObjects.GetAclsByRolesArrayResponse
): IAclObjectsToRolesMap => {
  const map = {}

  data.getAclsList().forEach((item) => {
    const name = item.getRole()
    const list = item.getObjectsList()

    map[name] = list.map(createAclObject)
  })

  return map
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
    const req = new commonObjects.UserEmailAndPasswordRequest()
    req.setEmail(payload.email)
    req.setPassword(payload.password)

    return this.makeCall<
      commonObjects.UserEmailAndPasswordRequest,
      commonObjects.User
    >('createUser', req).then(createUser)
  }

  signInWithEmailAndPassword(
    payload: IIdentifyUserWithEmailAndPassword
  ): Promise<ISessionInfo> {
    const req = new commonObjects.UserEmailAndPasswordRequest()
    req.setEmail(payload.email)
    req.setPassword(payload.password)

    return this.makeCall<
      commonObjects.UserEmailAndPasswordRequest,
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
    const req = new commonObjects.UserSelectRequest()
    req.setData(payload.id)

    return this.makeCall<commonObjects.UserSelectRequest, commonObjects.User>(
      'getUserByID',
      req
    ).then(createUser)
  }

  getUserByEmail(payload: IEmailRequest): Promise<IUser> {
    const req = new commonObjects.UserSelectRequest()
    req.setData(payload.email)

    return this.makeCall<commonObjects.UserSelectRequest, commonObjects.User>(
      'getUserByEmail',
      req
    ).then(createUser)
  }

  getUserByToken(payload: ITokenRequest): Promise<IUser> {
    const req = new commonObjects.UserSelectRequest()
    req.setData(payload.token)

    return this.makeCall<commonObjects.UserSelectRequest, commonObjects.User>(
      'getUserByToken',
      req
    ).then(createUser)
  }

  deleteUserByID(payload: IIdRequest): Promise<IEmptyResponse> {
    const req = new commonObjects.UserSelectRequest()
    req.setData(payload.id)

    return this.makeCall<commonObjects.UserSelectRequest, commonObjects.User>(
      'deleteUserByID',
      req
    )
  }

  getRoles(): Promise<IRole[]> {
    const req = new google_protobuf_empty_pb.Empty()

    return this.makeCall<
      google_protobuf_empty_pb.Empty,
      commonObjects.AllRolesList
    >('getRoles', req).then((res) => res.getRolesList().map(createRole))
  }

  getAclsByRoles(
    payload: IGetAclsByRolesRequest
  ): Promise<IAclObjectsToRolesMap> {
    const req = new commonObjects.GetAclsByRolesRequest()
    req.setRolesList(payload.roles)

    return this.makeCall<
      commonObjects.GetAclsByRolesRequest,
      commonObjects.GetAclsByRolesArrayResponse
    >('getAclsByRolesArray', req).then(createRolesToObjectsMap)
  }

  protected getClientConstructor() {
    return ServiceClient
  }
}
