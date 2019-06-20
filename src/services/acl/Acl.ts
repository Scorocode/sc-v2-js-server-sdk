import { eventEmitter } from '../../decorators'
import { EventEmitterInterface } from '../../utils/EventEmitter'
import * as mngService from '../client/AuthManagerService'
import { IAclObjectsToRolesMap, IRole } from '../client/AuthService'
import Service, { ServiceConfig } from '../Service'

export interface AclConfig {}

@eventEmitter
export default class Acl extends Service<AclConfig & ServiceConfig>
  implements EventEmitterInterface {
  // EventEmitter interface implementation
  on(event: string, listener: (...args: any[]) => void): void {
    return
  }
  removeListener(event: string, listener: (...args: any[]) => void): void {
    return
  }
  emit(event: string, ...args: any[]): void {
    return
  }
  once(event: string, listener: (...args: any[]) => void): void {
    return
  }

  destroy(): Promise<void> {
    return Promise.resolve()
  }

  // Auth
  getRoles(): Promise<IRole[]> {
    return this.app.client().auth.getRoles()
  }

  getAclsByRoles(roles: string[]): Promise<IAclObjectsToRolesMap> {
    return this.app.client().auth.getAclsByRoles({ roles })
  }

  // User
  createUser(
    payload: mngService.IUserCreateRequest
  ): Promise<mngService.IUser> {
    return this.app.client().authManager.createUser(payload)
  }

  updateUser(
    payload: mngService.IUserUpdateRequest
  ): Promise<mngService.IUser> {
    return this.app.client().authManager.updateUser(payload)
  }

  getUserByID(id: string): Promise<mngService.IUser> {
    return this.app.client().authManager.getUserByID({ id })
  }

  getUserByEmail(email: string): Promise<mngService.IUser> {
    return this.app.client().authManager.getUserByEmail({ email })
  }

  getUsersList(
    payload: mngService.IUsersListRequest
  ): Promise<mngService.IItemList<mngService.IUser>> {
    return this.app.client().authManager.getUsersList(payload)
  }

  deleteUserByID(id: string): Promise<mngService.IEmptyResponse> {
    return this.app.client().authManager.deleteUserByID({ id })
  }

  // Role
  createRole(
    payload: mngService.IRoleCreateRequest
  ): Promise<mngService.IRole> {
    return this.app.client().authManager.createRole(payload)
  }

  updateRole(
    payload: mngService.IRoleUpdateRequest
  ): Promise<mngService.IRole> {
    return this.app.client().authManager.updateRole(payload)
  }

  getRoleByID(id: number): Promise<mngService.IRole> {
    return this.app.client().authManager.getRoleByID({ id })
  }

  getRolesList(
    payload: mngService.IRolesListRequest
  ): Promise<mngService.IItemList<mngService.IRole>> {
    return this.app.client().authManager.getRolesList(payload)
  }

  deleteRoleByID(id: number): Promise<mngService.IEmptyResponse> {
    return this.app.client().authManager.deleteRoleByID({ id })
  }

  // ActionType
  createActionType(
    payload: mngService.IAclActionTypeCreateRequest
  ): Promise<mngService.IAclActionType> {
    return this.app.client().authManager.createActionType(payload)
  }

  updateActionType(
    payload: mngService.IAclActionTypeUpdateRequest
  ): Promise<mngService.IAclActionType> {
    return this.app.client().authManager.updateActionType(payload)
  }

  getActionTypeByID(id: number): Promise<mngService.IAclActionType> {
    return this.app.client().authManager.getActionTypeByID({ id })
  }

  getActionTypesList(
    payload: mngService.IAclActionTypesListRequest
  ): Promise<mngService.IItemList<mngService.IAclActionType>> {
    return this.app.client().authManager.getActionTypesList(payload)
  }

  deleteActionTypeByID(id: number): Promise<mngService.IEmptyResponse> {
    return this.app.client().authManager.deleteActionTypeByID({ id })
  }

  // Action
  createAction(
    payload: mngService.IAclActionCreateRequest
  ): Promise<mngService.IAclAction> {
    return this.app.client().authManager.createAction(payload)
  }

  updateAction(
    payload: mngService.IAclActionUpdateRequest
  ): Promise<mngService.IAclAction> {
    return this.app.client().authManager.updateAction(payload)
  }

  getActionByID(id: number): Promise<mngService.IAclAction> {
    return this.app.client().authManager.getActionByID({ id })
  }

  getActionsList(
    payload: mngService.IAclActionsListRequest
  ): Promise<mngService.IItemList<mngService.IAclAction>> {
    return this.app.client().authManager.getActionsList(payload)
  }

  deleteActionByID(id: number): Promise<mngService.IEmptyResponse> {
    return this.app.client().authManager.deleteActionByID({ id })
  }

  // Object
  createObject(
    payload: mngService.IAclObjectCreateRequest
  ): Promise<mngService.IAclObject> {
    return this.app.client().authManager.createObject(payload)
  }

  updateObject(
    payload: mngService.IAclObjectUpdateRequest
  ): Promise<mngService.IAclObject> {
    return this.app.client().authManager.updateObject(payload)
  }

  getObjectByID(id: number): Promise<mngService.IAclObject> {
    return this.app.client().authManager.getObjectByID({ id })
  }

  getObjectsList(
    payload: mngService.IAclObjectsListRequest
  ): Promise<mngService.IItemList<mngService.IAclObject>> {
    return this.app.client().authManager.getObjectsList(payload)
  }

  deleteObjectByID(id: number): Promise<mngService.IEmptyResponse> {
    return this.app.client().authManager.deleteObjectByID({ id })
  }

  // Field
  createField(
    payload: mngService.IAclFieldCreateRequest
  ): Promise<mngService.IAclField> {
    return this.app.client().authManager.createField(payload)
  }

  updateField(
    payload: mngService.IAclFieldUpdateRequest
  ): Promise<mngService.IAclField> {
    return this.app.client().authManager.updateField(payload)
  }

  getFieldByID(id: number): Promise<mngService.IAclField> {
    return this.app.client().authManager.getFieldByID({ id })
  }

  getFieldsList(
    payload: mngService.IAclFieldsListRequest
  ): Promise<mngService.IItemList<mngService.IAclField>> {
    return this.app.client().authManager.getFieldsList(payload)
  }

  deleteFieldByID(id: number): Promise<mngService.IEmptyResponse> {
    return this.app.client().authManager.deleteFieldByID({ id })
  }
}
