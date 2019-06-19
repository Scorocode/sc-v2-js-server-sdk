import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'
import utils from '../../utils'
import BaseService from './BaseService'
import * as commonObjects from './grpc/sc_auth/common_pb'
import { ManagementClient } from './grpc/sc_auth/manager_grpc_pb'
import * as mngObjects from './grpc/sc_auth/manager_pb'

const DEFAULT_PAGE_SIZE = 20

interface IEmptyResponse {}

interface IIdStringRequest {
  id: string
}

interface IIdNumberRequest {
  id: number
}

interface IEmailRequest {
  email: string
}

export interface IItemList<T> {
  items: T[]
  page: number
  pageSize: number
  total: number
}

export interface IOrderField {
  name: string
  desc: boolean
}

// User
export interface IUser {
  id: string
  email: string
  password: string
  isBlocked: boolean
  createdAt?: Date
  updatedAt?: Date
  roles?: string[]
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

export interface IUserCreateRequest {
  email: string
  password: string
}

export interface IUserUpdateRequest {
  id: string
  email: string
  isBlocked: boolean
  password?: string
}

export interface IUsersListRequest {
  id?: string
  email?: string
  isBlocked?: boolean
  createdAt?: Date
  updatedAt?: Date
  page?: number
  pageSize?: number
  orderList?: IOrderField[]
}

const createUsersList = (data: commonObjects.UsersList): IItemList<IUser> => ({
  items: data.getItemsList().map(createUser),
  page: data.getPage(),
  pageSize: data.getPagesize(),
  total: data.getTotal(),
})

// ACL
// Role
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

export interface IRoleCreateRequest {
  name: string
  isAdmin: boolean
  isPublic: boolean
}

export interface IRoleUpdateRequest {
  id: number
  name: string
  isAdmin: boolean
  isPublic: boolean
}

export interface IRolesListRequest {
  id?: number
  name?: string
  isAdmin?: boolean
  isPublic?: boolean
  createdAt?: Date
  updatedAt?: Date
  page?: number
  pageSize?: number
  orderList?: IOrderField[]
}

const createRolesList = (data: commonObjects.RolesList): IItemList<IRole> => ({
  items: data.getRolesList().map(createRole),
  page: data.getPage(),
  pageSize: data.getPagesize(),
  total: data.getTotal(),
})

// ActionType
export interface IAclActionType {
  id: number
  name: string
  type: commonObjects.AclType
}

const createAclActionType = (
  data: commonObjects.AclActionType
): IAclActionType => ({
  id: data.getId(),
  name: data.getName().toString(),
  type: data.getType(),
})

export interface IAclActionTypeCreateRequest {
  name: string
  type: commonObjects.AclType
}

export interface IAclActionTypeUpdateRequest {
  id: number
  name: string
  type: commonObjects.AclType
}

export interface IAclActionTypesListRequest {
  id?: number
  name?: string
  type?: commonObjects.AclType
  page?: number
  pageSize?: number
  orderList?: IOrderField[]
}

const createActActionTypeList = (
  data: commonObjects.AclActionTypesList
): IItemList<IAclActionType> => ({
  items: data.getItemsList().map(createAclActionType),
  page: data.getPage(),
  pageSize: data.getPagesize(),
  total: data.getTotal(),
})

// Action
export interface IAclAction {
  id: number
  roleId: number
  objectId: number
  fieldId: number
  actionType?: IAclActionType
  condition: string
}

const createAclAction = (data: commonObjects.AclAction): IAclAction => ({
  id: data.getId(),
  roleId: data.getRoleid(),
  objectId: data.getObjectid(),
  fieldId: data.getFieldid(),
  actionType: data.getActiontype()
    ? createAclActionType(data.getActiontype() as any)
    : undefined,
  condition: data.getCondition().toString(),
})

export interface IAclActionCreateRequest {
  roleId: number
  objectId: number
  fieldId: number
  condition?: string
  // actionType?: IAclActionType  // avoid it?
}

export interface IAclActionUpdateRequest {
  id: number
  roleId: number
  objectId: number
  fieldId: number
  condition: string
  // actionType?: IAclActionType  // avoid it?
}

export interface IAclActionsListRequest {
  id?: number
  roleId?: number
  objectId?: number
  fieldId?: number
  actionType?: IAclActionType
  condition?: string
  page?: number
  pageSize?: number
  orderList?: IOrderField[]
}

const createActActionList = (
  data: commonObjects.AclActionsList
): IItemList<IAclAction> => ({
  items: data.getItemsList().map(createAclAction),
  page: data.getPage(),
  pageSize: data.getPagesize(),
  total: data.getTotal(),
})

// Field
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

export interface IAclFieldCreateRequest {
  objectId: number
  name: string
}

export interface IAclFieldUpdateRequest {
  id: number
  objectId: number
  name: string
}

export interface IAclFieldsListRequest {
  id?: number
  objectId?: number
  name?: string
  page?: number
  pageSize?: number
  orderList?: IOrderField[]
}

const createActFieldList = (
  data: commonObjects.AclFieldsList
): IItemList<IAclField> => ({
  items: data.getFieldsList().map(createAclField),
  page: data.getPage(),
  pageSize: data.getPagesize(),
  total: data.getTotal(),
})

// Object
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

export interface IAclObjectCreateRequest {
  name: string
}

export interface IAclObjectUpdateRequest {
  id: number
  name: string
}

export interface IAclObjectsListRequest {
  id?: number
  name?: string
  page?: number
  pageSize?: number
  orderList?: IOrderField[]
}

const createActObjectList = (
  data: commonObjects.AclObjectsList
): IItemList<IAclObject> => ({
  items: data.getObjectsList().map(createAclObject),
  page: data.getPage(),
  pageSize: data.getPagesize(),
  total: data.getTotal(),
})

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

export default class AuthManagerService extends BaseService<ManagementClient> {
  // User
  createUser(payload: IUserCreateRequest): Promise<IUser> {
    const req = new commonObjects.UserEmailAndPasswordRequest()
    req.setEmail(payload.email)
    req.setPassword(payload.password)

    return this.makeCall<
      commonObjects.UserEmailAndPasswordRequest,
      commonObjects.User
    >('createUser', req).then(createUser)
  }

  updateUser(payload: IUserUpdateRequest): Promise<IUser> {
    const req = new commonObjects.User()
    req.setId(payload.id)
    req.setEmail(payload.email)
    req.setBlocked(payload.isBlocked)
    payload.password !== undefined && req.setPassword(payload.password)

    return this.makeCall<commonObjects.User, commonObjects.User>(
      'updateUser',
      req
    ).then(createUser)
  }

  getUserByID(payload: IIdStringRequest): Promise<IUser> {
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

  getUsersList(payload: IUsersListRequest): Promise<IItemList<IUser>> {
    const req = new commonObjects.UsersListRequest()
    payload.id && req.setId(payload.id)
    payload.email && req.setEmail(payload.email)
    req.setPage(payload.page || 1)
    req.setPagesize(payload.pageSize || DEFAULT_PAGE_SIZE)

    if (payload.createdAt !== undefined) {
      const value = new google_protobuf_timestamp_pb.Timestamp()
      value.fromDate(payload.createdAt)

      req.setCreatedAt(value)
    }

    if (payload.updatedAt !== undefined) {
      const value = new google_protobuf_timestamp_pb.Timestamp()
      value.fromDate(payload.updatedAt)

      req.setCreatedAt(value)
    }

    if (payload.isBlocked !== undefined) {
      const value = new commonObjects.BoolFilter()
      value.setFlag(payload.isBlocked)

      req.setBlocked(value)
    }

    const orderFields = (payload.orderList || []).map((item) => {
      const itemField = new commonObjects.OrderField()
      itemField.setName(item.name)
      itemField.setDesc(item.desc)

      return itemField
    })
    req.setOrderList(orderFields)

    return this.makeCall<
      commonObjects.UsersListRequest,
      commonObjects.UsersList
    >('getUsersList', req).then(createUsersList)
  }

  deleteUserByID(payload: IIdStringRequest): Promise<IEmptyResponse> {
    const req = new commonObjects.UserSelectRequest()
    req.setData(payload.id)

    return this.makeCall<
      commonObjects.UserSelectRequest,
      google_protobuf_empty_pb.Empty
    >('deleteUserByID', req)
  }

  // Role
  createRole(payload: IRoleCreateRequest): Promise<IRole> {
    const req = new commonObjects.Role()
    req.setName(payload.name)
    req.setIsadmin(payload.isAdmin)
    req.setIspublic(payload.isPublic)

    return this.makeCall<commonObjects.Role, commonObjects.Role>(
      'createRole',
      req
    ).then(createRole)
  }

  updateRole(payload: IRoleUpdateRequest): Promise<IRole> {
    const req = new commonObjects.Role()
    req.setId(payload.id)
    req.setName(payload.name)
    req.setIsadmin(payload.isAdmin)
    req.setIspublic(payload.isPublic)

    return this.makeCall<commonObjects.Role, commonObjects.Role>(
      'updateRole',
      req
    ).then(createRole)
  }

  getRoleByID(payload: IIdNumberRequest): Promise<IRole> {
    const req = new mngObjects.ByIdSelectRequest()
    req.setId(payload.id)

    return this.makeCall<mngObjects.ByIdSelectRequest, commonObjects.Role>(
      'getRoleByID',
      req
    ).then(createRole)
  }

  getRolesList(payload: IRolesListRequest): Promise<IItemList<IRole>> {
    const req = new commonObjects.RolesListRequest()
    payload.id && req.setId(payload.id)
    payload.name && req.setName(payload.name)
    req.setPage(payload.page || 1)
    req.setPagesize(payload.pageSize || DEFAULT_PAGE_SIZE)

    if (payload.createdAt !== undefined) {
      const value = new google_protobuf_timestamp_pb.Timestamp()
      value.fromDate(payload.createdAt)

      req.setCreatedAt(value)
    }

    if (payload.updatedAt !== undefined) {
      const value = new google_protobuf_timestamp_pb.Timestamp()
      value.fromDate(payload.updatedAt)

      req.setCreatedAt(value)
    }

    if (payload.isAdmin !== undefined) {
      const value = new commonObjects.BoolFilter()
      value.setFlag(payload.isAdmin)

      req.setIsadmin(value)
    }

    if (payload.isPublic !== undefined) {
      const value = new commonObjects.BoolFilter()
      value.setFlag(payload.isPublic)

      req.setIspublic(value)
    }

    const orderFields = (payload.orderList || []).map((item) => {
      const itemField = new commonObjects.OrderField()
      itemField.setName(item.name)
      itemField.setDesc(item.desc)

      return itemField
    })
    req.setOrderList(orderFields)

    return this.makeCall<
      commonObjects.RolesListRequest,
      commonObjects.RolesList
    >('getRolesList', req).then(createRolesList)
  }

  deleteRoleByID(payload: IIdNumberRequest): Promise<IEmptyResponse> {
    const req = new mngObjects.ByIdSelectRequest()
    req.setId(payload.id)

    return this.makeCall<
      mngObjects.ByIdSelectRequest,
      google_protobuf_empty_pb.Empty
    >('deleteRoleByID', req)
  }

  // ActionType
  createActionType(
    payload: IAclActionTypeCreateRequest
  ): Promise<IAclActionType> {
    const req = new commonObjects.AclActionType()
    req.setName(payload.name)
    req.setType(payload.type)

    return this.makeCall<
      commonObjects.AclActionType,
      commonObjects.AclActionType
    >('createActionType', req).then(createAclActionType)
  }

  updateActionType(
    payload: IAclActionTypeUpdateRequest
  ): Promise<IAclActionType> {
    const req = new commonObjects.AclActionType()
    req.setId(payload.id)
    req.setName(payload.name)
    req.setType(payload.type)

    return this.makeCall<
      commonObjects.AclActionType,
      commonObjects.AclActionType
    >('updateActionType', req).then(createAclActionType)
  }

  getActionTypeByID(payload: IIdNumberRequest): Promise<IAclActionType> {
    const req = new mngObjects.ByIdSelectRequest()
    req.setId(payload.id)

    return this.makeCall<
      mngObjects.ByIdSelectRequest,
      commonObjects.AclActionType
    >('getActionTypeByID', req).then(createAclActionType)
  }

  getActionTypesList(
    payload: IAclActionTypesListRequest
  ): Promise<IItemList<IAclActionType>> {
    const req = new commonObjects.AclActionTypesListRequest()
    payload.id && req.setId(payload.id)
    payload.name && req.setName(payload.name)
    req.setPage(payload.page || 1)
    req.setPagesize(payload.pageSize || DEFAULT_PAGE_SIZE)

    if (payload.type !== undefined) {
      const value = new commonObjects.AclTypeFilter()
      value.setAcltype(payload.type)

      req.setType(value)
    }

    const orderFields = (payload.orderList || []).map((item) => {
      const itemField = new commonObjects.OrderField()
      itemField.setName(item.name)
      itemField.setDesc(item.desc)

      return itemField
    })
    req.setOrderList(orderFields)

    return this.makeCall<
      commonObjects.AclActionTypesListRequest,
      commonObjects.AclActionTypesList
    >('getActionTypesList', req).then(createActActionTypeList)
  }

  deleteActionTypeByID(payload: IIdNumberRequest): Promise<IEmptyResponse> {
    const req = new mngObjects.ByIdSelectRequest()
    req.setId(payload.id)

    return this.makeCall<
      mngObjects.ByIdSelectRequest,
      google_protobuf_empty_pb.Empty
    >('deleteActionTypeByID', req)
  }

  // Action
  createAction(payload: IAclActionCreateRequest): Promise<IAclAction> {
    const req = new commonObjects.AclAction()
    req.setObjectid(payload.objectId)
    req.setRoleid(payload.roleId)
    req.setFieldid(payload.fieldId)
    payload.condition !== undefined && req.setCondition(payload.condition)

    return this.makeCall<commonObjects.AclAction, commonObjects.AclAction>(
      'createAction',
      req
    ).then(createAclAction)
  }

  updateAction(payload: IAclActionUpdateRequest): Promise<IAclAction> {
    const req = new commonObjects.AclAction()
    req.setId(payload.id)
    req.setObjectid(payload.objectId)
    req.setRoleid(payload.roleId)
    req.setFieldid(payload.fieldId)
    req.setCondition(payload.condition)

    return this.makeCall<commonObjects.AclAction, commonObjects.AclAction>(
      'updateAction',
      req
    ).then(createAclAction)
  }

  getActionByID(payload: IIdNumberRequest): Promise<IAclAction> {
    const req = new mngObjects.ByIdSelectRequest()
    req.setId(payload.id)

    return this.makeCall<mngObjects.ByIdSelectRequest, commonObjects.AclAction>(
      'getActionByID',
      req
    ).then(createAclAction)
  }

  getActionsList(
    payload: IAclActionsListRequest
  ): Promise<IItemList<IAclAction>> {
    const req = new commonObjects.AclActionsListRequest()
    payload.id && req.setId(payload.id)
    payload.objectId && req.setObjectid(payload.objectId)
    payload.roleId && req.setRoleid(payload.roleId)
    payload.fieldId && req.setFieldid(payload.fieldId)
    payload.condition !== undefined && req.setCondition(payload.condition)

    req.setPage(payload.page || 1)
    req.setPagesize(payload.pageSize || DEFAULT_PAGE_SIZE)

    const orderFields = (payload.orderList || []).map((item) => {
      const itemField = new commonObjects.OrderField()
      itemField.setName(item.name)
      itemField.setDesc(item.desc)

      return itemField
    })
    req.setOrderList(orderFields)

    return this.makeCall<
      commonObjects.AclActionsListRequest,
      commonObjects.AclActionsList
    >('getActionsList', req).then(createActActionList)
  }

  deleteActionByID(payload: IIdNumberRequest): Promise<IEmptyResponse> {
    const req = new mngObjects.ByIdSelectRequest()
    req.setId(payload.id)

    return this.makeCall<
      mngObjects.ByIdSelectRequest,
      google_protobuf_empty_pb.Empty
    >('deleteActionByID', req)
  }

  // Object
  createObject(payload: IAclObjectCreateRequest): Promise<IAclObject> {
    const req = new commonObjects.AclObject()
    req.setName(payload.name)

    return this.makeCall<commonObjects.AclObject, commonObjects.AclObject>(
      'createObject',
      req
    ).then(createAclObject)
  }

  updateObject(payload: IAclObjectUpdateRequest): Promise<IAclObject> {
    const req = new commonObjects.AclObject()
    req.setId(payload.id)
    req.setName(payload.name)

    return this.makeCall<commonObjects.AclObject, commonObjects.AclObject>(
      'updateObject',
      req
    ).then(createAclObject)
  }

  getObjectByID(payload: IIdNumberRequest): Promise<IAclObject> {
    const req = new mngObjects.ByIdSelectRequest()
    req.setId(payload.id)

    return this.makeCall<mngObjects.ByIdSelectRequest, commonObjects.AclObject>(
      'getObjectByID',
      req
    ).then(createAclObject)
  }

  getObjectsList(
    payload: IAclObjectsListRequest
  ): Promise<IItemList<IAclObject>> {
    const req = new commonObjects.AclObjectsListRequest()
    payload.id && req.setId(payload.id)
    payload.name && req.setName(payload.name)

    req.setPage(payload.page || 1)
    req.setPagesize(payload.pageSize || DEFAULT_PAGE_SIZE)

    const orderFields = (payload.orderList || []).map((item) => {
      const itemField = new commonObjects.OrderField()
      itemField.setName(item.name)
      itemField.setDesc(item.desc)

      return itemField
    })
    req.setOrderList(orderFields)

    return this.makeCall<
      commonObjects.AclObjectsListRequest,
      commonObjects.AclObjectsList
    >('getObjectsList', req).then(createActObjectList)
  }

  deleteObjectByID(payload: IIdNumberRequest): Promise<IEmptyResponse> {
    const req = new mngObjects.ByIdSelectRequest()
    req.setId(payload.id)

    return this.makeCall<
      mngObjects.ByIdSelectRequest,
      google_protobuf_empty_pb.Empty
    >('deleteObjectByID', req)
  }

  // Field
  createField(payload: IAclFieldCreateRequest): Promise<IAclField> {
    const req = new commonObjects.AclField()
    req.setObjectid(payload.objectId)
    req.setName(payload.name)

    return this.makeCall<commonObjects.AclField, commonObjects.AclField>(
      'createField',
      req
    ).then(createAclField)
  }

  updateField(payload: IAclFieldUpdateRequest): Promise<IAclField> {
    const req = new commonObjects.AclField()
    req.setId(payload.id)
    req.setObjectid(payload.objectId)
    req.setName(payload.name)

    return this.makeCall<commonObjects.AclField, commonObjects.AclField>(
      'updateField',
      req
    ).then(createAclField)
  }

  getFieldByID(payload: IIdNumberRequest): Promise<IAclField> {
    const req = new mngObjects.ByIdSelectRequest()
    req.setId(payload.id)

    return this.makeCall<mngObjects.ByIdSelectRequest, commonObjects.AclField>(
      'getFieldByID',
      req
    ).then(createAclField)
  }

  getFieldsList(payload: IAclFieldsListRequest): Promise<IItemList<IAclField>> {
    const req = new commonObjects.AclFieldsListRequest()
    payload.id && req.setId(payload.id)
    payload.objectId && req.setObjectid(payload.objectId)
    payload.name && req.setName(payload.name)

    req.setPage(payload.page || 1)
    req.setPagesize(payload.pageSize || DEFAULT_PAGE_SIZE)

    const orderFields = (payload.orderList || []).map((item) => {
      const itemField = new commonObjects.OrderField()
      itemField.setName(item.name)
      itemField.setDesc(item.desc)

      return itemField
    })
    req.setOrderList(orderFields)

    return this.makeCall<
      commonObjects.AclFieldsListRequest,
      commonObjects.AclFieldsList
    >('getFieldsList', req).then(createActFieldList)
  }

  deleteFieldByID(payload: IIdNumberRequest): Promise<IEmptyResponse> {
    const req = new mngObjects.ByIdSelectRequest()
    req.setId(payload.id)

    return this.makeCall<
      mngObjects.ByIdSelectRequest,
      google_protobuf_empty_pb.Empty
    >('deleteFieldByID', req)
  }

  protected getClientConstructor() {
    return ManagementClient
  }
}
