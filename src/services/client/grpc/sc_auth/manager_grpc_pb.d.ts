// package: sc_auth
// file: sc_auth/manager.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as sc_auth_manager_pb from "../sc_auth/manager_pb";
// "../github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as base_base_pb from "../base/base_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as sc_auth_common_pb from "../sc_auth/common_pb";

interface IManagementService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    updateSettigns: IManagementService_IUpdateSettigns;
    createUser: IManagementService_ICreateUser;
    getUserByID: IManagementService_IGetUserByID;
    getUserByEmail: IManagementService_IGetUserByEmail;
    getUsersList: IManagementService_IGetUsersList;
    updateUser: IManagementService_IUpdateUser;
    deleteUserByID: IManagementService_IDeleteUserByID;
    createRole: IManagementService_ICreateRole;
    getRoleByID: IManagementService_IGetRoleByID;
    getRolesList: IManagementService_IGetRolesList;
    updateRole: IManagementService_IUpdateRole;
    deleteRoleByID: IManagementService_IDeleteRoleByID;
    createActionType: IManagementService_ICreateActionType;
    getActionTypeByID: IManagementService_IGetActionTypeByID;
    getActionTypesList: IManagementService_IGetActionTypesList;
    updateActionType: IManagementService_IUpdateActionType;
    deleteActionTypeByID: IManagementService_IDeleteActionTypeByID;
    createAction: IManagementService_ICreateAction;
    getActionByID: IManagementService_IGetActionByID;
    getActionsList: IManagementService_IGetActionsList;
    updateAction: IManagementService_IUpdateAction;
    deleteActionByID: IManagementService_IDeleteActionByID;
    createObject: IManagementService_ICreateObject;
    getObjectByID: IManagementService_IGetObjectByID;
    getObjectsList: IManagementService_IGetObjectsList;
    updateObject: IManagementService_IUpdateObject;
    deleteObjectByID: IManagementService_IDeleteObjectByID;
    createField: IManagementService_ICreateField;
    getFieldByID: IManagementService_IGetFieldByID;
    getFieldsList: IManagementService_IGetFieldsList;
    updateField: IManagementService_IUpdateField;
    deleteFieldByID: IManagementService_IDeleteFieldByID;
}

interface IManagementService_IUpdateSettigns extends grpc.MethodDefinition<sc_auth_common_pb.Settings, base_base_pb.SimpleResponse> {
    path: string; // "/sc_auth.Management/UpdateSettigns"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.Settings>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.Settings>;
    responseSerialize: grpc.serialize<base_base_pb.SimpleResponse>;
    responseDeserialize: grpc.deserialize<base_base_pb.SimpleResponse>;
}
interface IManagementService_ICreateUser extends grpc.MethodDefinition<sc_auth_common_pb.UserEmailAndPasswordRequest, sc_auth_common_pb.User> {
    path: string; // "/sc_auth.Management/CreateUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.UserEmailAndPasswordRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.UserEmailAndPasswordRequest>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.User>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.User>;
}
interface IManagementService_IGetUserByID extends grpc.MethodDefinition<sc_auth_common_pb.UserSelectRequest, sc_auth_common_pb.User> {
    path: string; // "/sc_auth.Management/GetUserByID"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.UserSelectRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.UserSelectRequest>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.User>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.User>;
}
interface IManagementService_IGetUserByEmail extends grpc.MethodDefinition<sc_auth_common_pb.UserSelectRequest, sc_auth_common_pb.User> {
    path: string; // "/sc_auth.Management/GetUserByEmail"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.UserSelectRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.UserSelectRequest>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.User>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.User>;
}
interface IManagementService_IGetUsersList extends grpc.MethodDefinition<sc_auth_common_pb.UsersListRequest, sc_auth_common_pb.UsersList> {
    path: string; // "/sc_auth.Management/GetUsersList"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.UsersListRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.UsersListRequest>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.UsersList>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.UsersList>;
}
interface IManagementService_IUpdateUser extends grpc.MethodDefinition<sc_auth_common_pb.User, sc_auth_common_pb.User> {
    path: string; // "/sc_auth.Management/UpdateUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.User>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.User>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.User>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.User>;
}
interface IManagementService_IDeleteUserByID extends grpc.MethodDefinition<sc_auth_common_pb.UserSelectRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_auth.Management/DeleteUserByID"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.UserSelectRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.UserSelectRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IManagementService_ICreateRole extends grpc.MethodDefinition<sc_auth_common_pb.Role, sc_auth_common_pb.Role> {
    path: string; // "/sc_auth.Management/CreateRole"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.Role>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.Role>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.Role>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.Role>;
}
interface IManagementService_IGetRoleByID extends grpc.MethodDefinition<sc_auth_manager_pb.ByIdSelectRequest, sc_auth_common_pb.Role> {
    path: string; // "/sc_auth.Management/GetRoleByID"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_manager_pb.ByIdSelectRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_manager_pb.ByIdSelectRequest>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.Role>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.Role>;
}
interface IManagementService_IGetRolesList extends grpc.MethodDefinition<sc_auth_common_pb.RolesListRequest, sc_auth_common_pb.RolesList> {
    path: string; // "/sc_auth.Management/GetRolesList"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.RolesListRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.RolesListRequest>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.RolesList>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.RolesList>;
}
interface IManagementService_IUpdateRole extends grpc.MethodDefinition<sc_auth_common_pb.Role, sc_auth_common_pb.Role> {
    path: string; // "/sc_auth.Management/UpdateRole"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.Role>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.Role>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.Role>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.Role>;
}
interface IManagementService_IDeleteRoleByID extends grpc.MethodDefinition<sc_auth_manager_pb.ByIdSelectRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_auth.Management/DeleteRoleByID"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_manager_pb.ByIdSelectRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_manager_pb.ByIdSelectRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IManagementService_ICreateActionType extends grpc.MethodDefinition<sc_auth_common_pb.AclActionType, sc_auth_common_pb.AclActionType> {
    path: string; // "/sc_auth.Management/CreateActionType"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.AclActionType>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.AclActionType>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.AclActionType>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.AclActionType>;
}
interface IManagementService_IGetActionTypeByID extends grpc.MethodDefinition<sc_auth_manager_pb.ByIdSelectRequest, sc_auth_common_pb.AclActionType> {
    path: string; // "/sc_auth.Management/GetActionTypeByID"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_manager_pb.ByIdSelectRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_manager_pb.ByIdSelectRequest>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.AclActionType>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.AclActionType>;
}
interface IManagementService_IGetActionTypesList extends grpc.MethodDefinition<sc_auth_common_pb.AclActionTypesListRequest, sc_auth_common_pb.AclActionTypesList> {
    path: string; // "/sc_auth.Management/GetActionTypesList"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.AclActionTypesListRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.AclActionTypesListRequest>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.AclActionTypesList>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.AclActionTypesList>;
}
interface IManagementService_IUpdateActionType extends grpc.MethodDefinition<sc_auth_common_pb.AclActionType, sc_auth_common_pb.AclActionType> {
    path: string; // "/sc_auth.Management/UpdateActionType"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.AclActionType>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.AclActionType>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.AclActionType>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.AclActionType>;
}
interface IManagementService_IDeleteActionTypeByID extends grpc.MethodDefinition<sc_auth_manager_pb.ByIdSelectRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_auth.Management/DeleteActionTypeByID"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_manager_pb.ByIdSelectRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_manager_pb.ByIdSelectRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IManagementService_ICreateAction extends grpc.MethodDefinition<sc_auth_common_pb.AclAction, sc_auth_common_pb.AclAction> {
    path: string; // "/sc_auth.Management/CreateAction"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.AclAction>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.AclAction>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.AclAction>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.AclAction>;
}
interface IManagementService_IGetActionByID extends grpc.MethodDefinition<sc_auth_manager_pb.ByIdSelectRequest, sc_auth_common_pb.AclAction> {
    path: string; // "/sc_auth.Management/GetActionByID"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_manager_pb.ByIdSelectRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_manager_pb.ByIdSelectRequest>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.AclAction>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.AclAction>;
}
interface IManagementService_IGetActionsList extends grpc.MethodDefinition<sc_auth_common_pb.AclActionsListRequest, sc_auth_common_pb.AclActionsList> {
    path: string; // "/sc_auth.Management/GetActionsList"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.AclActionsListRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.AclActionsListRequest>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.AclActionsList>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.AclActionsList>;
}
interface IManagementService_IUpdateAction extends grpc.MethodDefinition<sc_auth_common_pb.AclAction, sc_auth_common_pb.AclAction> {
    path: string; // "/sc_auth.Management/UpdateAction"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.AclAction>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.AclAction>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.AclAction>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.AclAction>;
}
interface IManagementService_IDeleteActionByID extends grpc.MethodDefinition<sc_auth_manager_pb.ByIdSelectRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_auth.Management/DeleteActionByID"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_manager_pb.ByIdSelectRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_manager_pb.ByIdSelectRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IManagementService_ICreateObject extends grpc.MethodDefinition<sc_auth_common_pb.AclObject, sc_auth_common_pb.AclObject> {
    path: string; // "/sc_auth.Management/CreateObject"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.AclObject>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.AclObject>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.AclObject>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.AclObject>;
}
interface IManagementService_IGetObjectByID extends grpc.MethodDefinition<sc_auth_manager_pb.ByIdSelectRequest, sc_auth_common_pb.AclObject> {
    path: string; // "/sc_auth.Management/GetObjectByID"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_manager_pb.ByIdSelectRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_manager_pb.ByIdSelectRequest>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.AclObject>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.AclObject>;
}
interface IManagementService_IGetObjectsList extends grpc.MethodDefinition<sc_auth_common_pb.AclObjectsListRequest, sc_auth_common_pb.AclObjectsList> {
    path: string; // "/sc_auth.Management/GetObjectsList"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.AclObjectsListRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.AclObjectsListRequest>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.AclObjectsList>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.AclObjectsList>;
}
interface IManagementService_IUpdateObject extends grpc.MethodDefinition<sc_auth_common_pb.AclObject, sc_auth_common_pb.AclObject> {
    path: string; // "/sc_auth.Management/UpdateObject"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.AclObject>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.AclObject>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.AclObject>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.AclObject>;
}
interface IManagementService_IDeleteObjectByID extends grpc.MethodDefinition<sc_auth_manager_pb.ByIdSelectRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_auth.Management/DeleteObjectByID"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_manager_pb.ByIdSelectRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_manager_pb.ByIdSelectRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IManagementService_ICreateField extends grpc.MethodDefinition<sc_auth_common_pb.AclField, sc_auth_common_pb.AclField> {
    path: string; // "/sc_auth.Management/CreateField"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.AclField>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.AclField>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.AclField>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.AclField>;
}
interface IManagementService_IGetFieldByID extends grpc.MethodDefinition<sc_auth_manager_pb.ByIdSelectRequest, sc_auth_common_pb.AclField> {
    path: string; // "/sc_auth.Management/GetFieldByID"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_manager_pb.ByIdSelectRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_manager_pb.ByIdSelectRequest>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.AclField>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.AclField>;
}
interface IManagementService_IGetFieldsList extends grpc.MethodDefinition<sc_auth_common_pb.AclFieldsListRequest, sc_auth_common_pb.AclFieldsList> {
    path: string; // "/sc_auth.Management/GetFieldsList"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.AclFieldsListRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.AclFieldsListRequest>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.AclFieldsList>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.AclFieldsList>;
}
interface IManagementService_IUpdateField extends grpc.MethodDefinition<sc_auth_common_pb.AclField, sc_auth_common_pb.AclField> {
    path: string; // "/sc_auth.Management/UpdateField"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.AclField>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.AclField>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.AclField>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.AclField>;
}
interface IManagementService_IDeleteFieldByID extends grpc.MethodDefinition<sc_auth_manager_pb.ByIdSelectRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_auth.Management/DeleteFieldByID"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_manager_pb.ByIdSelectRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_manager_pb.ByIdSelectRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const ManagementService: IManagementService;

export interface IManagementServer {
    updateSettigns: grpc.handleUnaryCall<sc_auth_common_pb.Settings, base_base_pb.SimpleResponse>;
    createUser: grpc.handleUnaryCall<sc_auth_common_pb.UserEmailAndPasswordRequest, sc_auth_common_pb.User>;
    getUserByID: grpc.handleUnaryCall<sc_auth_common_pb.UserSelectRequest, sc_auth_common_pb.User>;
    getUserByEmail: grpc.handleUnaryCall<sc_auth_common_pb.UserSelectRequest, sc_auth_common_pb.User>;
    getUsersList: grpc.handleUnaryCall<sc_auth_common_pb.UsersListRequest, sc_auth_common_pb.UsersList>;
    updateUser: grpc.handleUnaryCall<sc_auth_common_pb.User, sc_auth_common_pb.User>;
    deleteUserByID: grpc.handleUnaryCall<sc_auth_common_pb.UserSelectRequest, google_protobuf_empty_pb.Empty>;
    createRole: grpc.handleUnaryCall<sc_auth_common_pb.Role, sc_auth_common_pb.Role>;
    getRoleByID: grpc.handleUnaryCall<sc_auth_manager_pb.ByIdSelectRequest, sc_auth_common_pb.Role>;
    getRolesList: grpc.handleUnaryCall<sc_auth_common_pb.RolesListRequest, sc_auth_common_pb.RolesList>;
    updateRole: grpc.handleUnaryCall<sc_auth_common_pb.Role, sc_auth_common_pb.Role>;
    deleteRoleByID: grpc.handleUnaryCall<sc_auth_manager_pb.ByIdSelectRequest, google_protobuf_empty_pb.Empty>;
    createActionType: grpc.handleUnaryCall<sc_auth_common_pb.AclActionType, sc_auth_common_pb.AclActionType>;
    getActionTypeByID: grpc.handleUnaryCall<sc_auth_manager_pb.ByIdSelectRequest, sc_auth_common_pb.AclActionType>;
    getActionTypesList: grpc.handleUnaryCall<sc_auth_common_pb.AclActionTypesListRequest, sc_auth_common_pb.AclActionTypesList>;
    updateActionType: grpc.handleUnaryCall<sc_auth_common_pb.AclActionType, sc_auth_common_pb.AclActionType>;
    deleteActionTypeByID: grpc.handleUnaryCall<sc_auth_manager_pb.ByIdSelectRequest, google_protobuf_empty_pb.Empty>;
    createAction: grpc.handleUnaryCall<sc_auth_common_pb.AclAction, sc_auth_common_pb.AclAction>;
    getActionByID: grpc.handleUnaryCall<sc_auth_manager_pb.ByIdSelectRequest, sc_auth_common_pb.AclAction>;
    getActionsList: grpc.handleUnaryCall<sc_auth_common_pb.AclActionsListRequest, sc_auth_common_pb.AclActionsList>;
    updateAction: grpc.handleUnaryCall<sc_auth_common_pb.AclAction, sc_auth_common_pb.AclAction>;
    deleteActionByID: grpc.handleUnaryCall<sc_auth_manager_pb.ByIdSelectRequest, google_protobuf_empty_pb.Empty>;
    createObject: grpc.handleUnaryCall<sc_auth_common_pb.AclObject, sc_auth_common_pb.AclObject>;
    getObjectByID: grpc.handleUnaryCall<sc_auth_manager_pb.ByIdSelectRequest, sc_auth_common_pb.AclObject>;
    getObjectsList: grpc.handleUnaryCall<sc_auth_common_pb.AclObjectsListRequest, sc_auth_common_pb.AclObjectsList>;
    updateObject: grpc.handleUnaryCall<sc_auth_common_pb.AclObject, sc_auth_common_pb.AclObject>;
    deleteObjectByID: grpc.handleUnaryCall<sc_auth_manager_pb.ByIdSelectRequest, google_protobuf_empty_pb.Empty>;
    createField: grpc.handleUnaryCall<sc_auth_common_pb.AclField, sc_auth_common_pb.AclField>;
    getFieldByID: grpc.handleUnaryCall<sc_auth_manager_pb.ByIdSelectRequest, sc_auth_common_pb.AclField>;
    getFieldsList: grpc.handleUnaryCall<sc_auth_common_pb.AclFieldsListRequest, sc_auth_common_pb.AclFieldsList>;
    updateField: grpc.handleUnaryCall<sc_auth_common_pb.AclField, sc_auth_common_pb.AclField>;
    deleteFieldByID: grpc.handleUnaryCall<sc_auth_manager_pb.ByIdSelectRequest, google_protobuf_empty_pb.Empty>;
}

export interface IManagementClient {
    updateSettigns(request: sc_auth_common_pb.Settings, callback: (error: Error | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    updateSettigns(request: sc_auth_common_pb.Settings, metadata: grpc.Metadata, callback: (error: Error | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    updateSettigns(request: sc_auth_common_pb.Settings, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    createUser(request: sc_auth_common_pb.UserEmailAndPasswordRequest, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: sc_auth_common_pb.UserEmailAndPasswordRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: sc_auth_common_pb.UserEmailAndPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    getUserByID(request: sc_auth_common_pb.UserSelectRequest, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    getUserByID(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    getUserByID(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    getUserByEmail(request: sc_auth_common_pb.UserSelectRequest, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    getUserByEmail(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    getUserByEmail(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    getUsersList(request: sc_auth_common_pb.UsersListRequest, callback: (error: Error | null, response: sc_auth_common_pb.UsersList) => void): grpc.ClientUnaryCall;
    getUsersList(request: sc_auth_common_pb.UsersListRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.UsersList) => void): grpc.ClientUnaryCall;
    getUsersList(request: sc_auth_common_pb.UsersListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.UsersList) => void): grpc.ClientUnaryCall;
    updateUser(request: sc_auth_common_pb.User, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: sc_auth_common_pb.User, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: sc_auth_common_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    deleteUserByID(request: sc_auth_common_pb.UserSelectRequest, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteUserByID(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteUserByID(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createRole(request: sc_auth_common_pb.Role, callback: (error: Error | null, response: sc_auth_common_pb.Role) => void): grpc.ClientUnaryCall;
    createRole(request: sc_auth_common_pb.Role, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.Role) => void): grpc.ClientUnaryCall;
    createRole(request: sc_auth_common_pb.Role, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.Role) => void): grpc.ClientUnaryCall;
    getRoleByID(request: sc_auth_manager_pb.ByIdSelectRequest, callback: (error: Error | null, response: sc_auth_common_pb.Role) => void): grpc.ClientUnaryCall;
    getRoleByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.Role) => void): grpc.ClientUnaryCall;
    getRoleByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.Role) => void): grpc.ClientUnaryCall;
    getRolesList(request: sc_auth_common_pb.RolesListRequest, callback: (error: Error | null, response: sc_auth_common_pb.RolesList) => void): grpc.ClientUnaryCall;
    getRolesList(request: sc_auth_common_pb.RolesListRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.RolesList) => void): grpc.ClientUnaryCall;
    getRolesList(request: sc_auth_common_pb.RolesListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.RolesList) => void): grpc.ClientUnaryCall;
    updateRole(request: sc_auth_common_pb.Role, callback: (error: Error | null, response: sc_auth_common_pb.Role) => void): grpc.ClientUnaryCall;
    updateRole(request: sc_auth_common_pb.Role, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.Role) => void): grpc.ClientUnaryCall;
    updateRole(request: sc_auth_common_pb.Role, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.Role) => void): grpc.ClientUnaryCall;
    deleteRoleByID(request: sc_auth_manager_pb.ByIdSelectRequest, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteRoleByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteRoleByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createActionType(request: sc_auth_common_pb.AclActionType, callback: (error: Error | null, response: sc_auth_common_pb.AclActionType) => void): grpc.ClientUnaryCall;
    createActionType(request: sc_auth_common_pb.AclActionType, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclActionType) => void): grpc.ClientUnaryCall;
    createActionType(request: sc_auth_common_pb.AclActionType, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclActionType) => void): grpc.ClientUnaryCall;
    getActionTypeByID(request: sc_auth_manager_pb.ByIdSelectRequest, callback: (error: Error | null, response: sc_auth_common_pb.AclActionType) => void): grpc.ClientUnaryCall;
    getActionTypeByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclActionType) => void): grpc.ClientUnaryCall;
    getActionTypeByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclActionType) => void): grpc.ClientUnaryCall;
    getActionTypesList(request: sc_auth_common_pb.AclActionTypesListRequest, callback: (error: Error | null, response: sc_auth_common_pb.AclActionTypesList) => void): grpc.ClientUnaryCall;
    getActionTypesList(request: sc_auth_common_pb.AclActionTypesListRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclActionTypesList) => void): grpc.ClientUnaryCall;
    getActionTypesList(request: sc_auth_common_pb.AclActionTypesListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclActionTypesList) => void): grpc.ClientUnaryCall;
    updateActionType(request: sc_auth_common_pb.AclActionType, callback: (error: Error | null, response: sc_auth_common_pb.AclActionType) => void): grpc.ClientUnaryCall;
    updateActionType(request: sc_auth_common_pb.AclActionType, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclActionType) => void): grpc.ClientUnaryCall;
    updateActionType(request: sc_auth_common_pb.AclActionType, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclActionType) => void): grpc.ClientUnaryCall;
    deleteActionTypeByID(request: sc_auth_manager_pb.ByIdSelectRequest, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteActionTypeByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteActionTypeByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createAction(request: sc_auth_common_pb.AclAction, callback: (error: Error | null, response: sc_auth_common_pb.AclAction) => void): grpc.ClientUnaryCall;
    createAction(request: sc_auth_common_pb.AclAction, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclAction) => void): grpc.ClientUnaryCall;
    createAction(request: sc_auth_common_pb.AclAction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclAction) => void): grpc.ClientUnaryCall;
    getActionByID(request: sc_auth_manager_pb.ByIdSelectRequest, callback: (error: Error | null, response: sc_auth_common_pb.AclAction) => void): grpc.ClientUnaryCall;
    getActionByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclAction) => void): grpc.ClientUnaryCall;
    getActionByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclAction) => void): grpc.ClientUnaryCall;
    getActionsList(request: sc_auth_common_pb.AclActionsListRequest, callback: (error: Error | null, response: sc_auth_common_pb.AclActionsList) => void): grpc.ClientUnaryCall;
    getActionsList(request: sc_auth_common_pb.AclActionsListRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclActionsList) => void): grpc.ClientUnaryCall;
    getActionsList(request: sc_auth_common_pb.AclActionsListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclActionsList) => void): grpc.ClientUnaryCall;
    updateAction(request: sc_auth_common_pb.AclAction, callback: (error: Error | null, response: sc_auth_common_pb.AclAction) => void): grpc.ClientUnaryCall;
    updateAction(request: sc_auth_common_pb.AclAction, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclAction) => void): grpc.ClientUnaryCall;
    updateAction(request: sc_auth_common_pb.AclAction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclAction) => void): grpc.ClientUnaryCall;
    deleteActionByID(request: sc_auth_manager_pb.ByIdSelectRequest, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteActionByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteActionByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createObject(request: sc_auth_common_pb.AclObject, callback: (error: Error | null, response: sc_auth_common_pb.AclObject) => void): grpc.ClientUnaryCall;
    createObject(request: sc_auth_common_pb.AclObject, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclObject) => void): grpc.ClientUnaryCall;
    createObject(request: sc_auth_common_pb.AclObject, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclObject) => void): grpc.ClientUnaryCall;
    getObjectByID(request: sc_auth_manager_pb.ByIdSelectRequest, callback: (error: Error | null, response: sc_auth_common_pb.AclObject) => void): grpc.ClientUnaryCall;
    getObjectByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclObject) => void): grpc.ClientUnaryCall;
    getObjectByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclObject) => void): grpc.ClientUnaryCall;
    getObjectsList(request: sc_auth_common_pb.AclObjectsListRequest, callback: (error: Error | null, response: sc_auth_common_pb.AclObjectsList) => void): grpc.ClientUnaryCall;
    getObjectsList(request: sc_auth_common_pb.AclObjectsListRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclObjectsList) => void): grpc.ClientUnaryCall;
    getObjectsList(request: sc_auth_common_pb.AclObjectsListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclObjectsList) => void): grpc.ClientUnaryCall;
    updateObject(request: sc_auth_common_pb.AclObject, callback: (error: Error | null, response: sc_auth_common_pb.AclObject) => void): grpc.ClientUnaryCall;
    updateObject(request: sc_auth_common_pb.AclObject, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclObject) => void): grpc.ClientUnaryCall;
    updateObject(request: sc_auth_common_pb.AclObject, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclObject) => void): grpc.ClientUnaryCall;
    deleteObjectByID(request: sc_auth_manager_pb.ByIdSelectRequest, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteObjectByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteObjectByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createField(request: sc_auth_common_pb.AclField, callback: (error: Error | null, response: sc_auth_common_pb.AclField) => void): grpc.ClientUnaryCall;
    createField(request: sc_auth_common_pb.AclField, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclField) => void): grpc.ClientUnaryCall;
    createField(request: sc_auth_common_pb.AclField, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclField) => void): grpc.ClientUnaryCall;
    getFieldByID(request: sc_auth_manager_pb.ByIdSelectRequest, callback: (error: Error | null, response: sc_auth_common_pb.AclField) => void): grpc.ClientUnaryCall;
    getFieldByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclField) => void): grpc.ClientUnaryCall;
    getFieldByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclField) => void): grpc.ClientUnaryCall;
    getFieldsList(request: sc_auth_common_pb.AclFieldsListRequest, callback: (error: Error | null, response: sc_auth_common_pb.AclFieldsList) => void): grpc.ClientUnaryCall;
    getFieldsList(request: sc_auth_common_pb.AclFieldsListRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclFieldsList) => void): grpc.ClientUnaryCall;
    getFieldsList(request: sc_auth_common_pb.AclFieldsListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclFieldsList) => void): grpc.ClientUnaryCall;
    updateField(request: sc_auth_common_pb.AclField, callback: (error: Error | null, response: sc_auth_common_pb.AclField) => void): grpc.ClientUnaryCall;
    updateField(request: sc_auth_common_pb.AclField, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclField) => void): grpc.ClientUnaryCall;
    updateField(request: sc_auth_common_pb.AclField, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclField) => void): grpc.ClientUnaryCall;
    deleteFieldByID(request: sc_auth_manager_pb.ByIdSelectRequest, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteFieldByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteFieldByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class ManagementClient extends grpc.Client implements IManagementClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public updateSettigns(request: sc_auth_common_pb.Settings, callback: (error: Error | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    public updateSettigns(request: sc_auth_common_pb.Settings, metadata: grpc.Metadata, callback: (error: Error | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    public updateSettigns(request: sc_auth_common_pb.Settings, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: sc_auth_common_pb.UserEmailAndPasswordRequest, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: sc_auth_common_pb.UserEmailAndPasswordRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: sc_auth_common_pb.UserEmailAndPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByID(request: sc_auth_common_pb.UserSelectRequest, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByID(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByID(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByEmail(request: sc_auth_common_pb.UserSelectRequest, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByEmail(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByEmail(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    public getUsersList(request: sc_auth_common_pb.UsersListRequest, callback: (error: Error | null, response: sc_auth_common_pb.UsersList) => void): grpc.ClientUnaryCall;
    public getUsersList(request: sc_auth_common_pb.UsersListRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.UsersList) => void): grpc.ClientUnaryCall;
    public getUsersList(request: sc_auth_common_pb.UsersListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.UsersList) => void): grpc.ClientUnaryCall;
    public updateUser(request: sc_auth_common_pb.User, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: sc_auth_common_pb.User, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: sc_auth_common_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    public deleteUserByID(request: sc_auth_common_pb.UserSelectRequest, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteUserByID(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteUserByID(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createRole(request: sc_auth_common_pb.Role, callback: (error: Error | null, response: sc_auth_common_pb.Role) => void): grpc.ClientUnaryCall;
    public createRole(request: sc_auth_common_pb.Role, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.Role) => void): grpc.ClientUnaryCall;
    public createRole(request: sc_auth_common_pb.Role, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.Role) => void): grpc.ClientUnaryCall;
    public getRoleByID(request: sc_auth_manager_pb.ByIdSelectRequest, callback: (error: Error | null, response: sc_auth_common_pb.Role) => void): grpc.ClientUnaryCall;
    public getRoleByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.Role) => void): grpc.ClientUnaryCall;
    public getRoleByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.Role) => void): grpc.ClientUnaryCall;
    public getRolesList(request: sc_auth_common_pb.RolesListRequest, callback: (error: Error | null, response: sc_auth_common_pb.RolesList) => void): grpc.ClientUnaryCall;
    public getRolesList(request: sc_auth_common_pb.RolesListRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.RolesList) => void): grpc.ClientUnaryCall;
    public getRolesList(request: sc_auth_common_pb.RolesListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.RolesList) => void): grpc.ClientUnaryCall;
    public updateRole(request: sc_auth_common_pb.Role, callback: (error: Error | null, response: sc_auth_common_pb.Role) => void): grpc.ClientUnaryCall;
    public updateRole(request: sc_auth_common_pb.Role, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.Role) => void): grpc.ClientUnaryCall;
    public updateRole(request: sc_auth_common_pb.Role, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.Role) => void): grpc.ClientUnaryCall;
    public deleteRoleByID(request: sc_auth_manager_pb.ByIdSelectRequest, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteRoleByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteRoleByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createActionType(request: sc_auth_common_pb.AclActionType, callback: (error: Error | null, response: sc_auth_common_pb.AclActionType) => void): grpc.ClientUnaryCall;
    public createActionType(request: sc_auth_common_pb.AclActionType, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclActionType) => void): grpc.ClientUnaryCall;
    public createActionType(request: sc_auth_common_pb.AclActionType, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclActionType) => void): grpc.ClientUnaryCall;
    public getActionTypeByID(request: sc_auth_manager_pb.ByIdSelectRequest, callback: (error: Error | null, response: sc_auth_common_pb.AclActionType) => void): grpc.ClientUnaryCall;
    public getActionTypeByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclActionType) => void): grpc.ClientUnaryCall;
    public getActionTypeByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclActionType) => void): grpc.ClientUnaryCall;
    public getActionTypesList(request: sc_auth_common_pb.AclActionTypesListRequest, callback: (error: Error | null, response: sc_auth_common_pb.AclActionTypesList) => void): grpc.ClientUnaryCall;
    public getActionTypesList(request: sc_auth_common_pb.AclActionTypesListRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclActionTypesList) => void): grpc.ClientUnaryCall;
    public getActionTypesList(request: sc_auth_common_pb.AclActionTypesListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclActionTypesList) => void): grpc.ClientUnaryCall;
    public updateActionType(request: sc_auth_common_pb.AclActionType, callback: (error: Error | null, response: sc_auth_common_pb.AclActionType) => void): grpc.ClientUnaryCall;
    public updateActionType(request: sc_auth_common_pb.AclActionType, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclActionType) => void): grpc.ClientUnaryCall;
    public updateActionType(request: sc_auth_common_pb.AclActionType, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclActionType) => void): grpc.ClientUnaryCall;
    public deleteActionTypeByID(request: sc_auth_manager_pb.ByIdSelectRequest, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteActionTypeByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteActionTypeByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createAction(request: sc_auth_common_pb.AclAction, callback: (error: Error | null, response: sc_auth_common_pb.AclAction) => void): grpc.ClientUnaryCall;
    public createAction(request: sc_auth_common_pb.AclAction, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclAction) => void): grpc.ClientUnaryCall;
    public createAction(request: sc_auth_common_pb.AclAction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclAction) => void): grpc.ClientUnaryCall;
    public getActionByID(request: sc_auth_manager_pb.ByIdSelectRequest, callback: (error: Error | null, response: sc_auth_common_pb.AclAction) => void): grpc.ClientUnaryCall;
    public getActionByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclAction) => void): grpc.ClientUnaryCall;
    public getActionByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclAction) => void): grpc.ClientUnaryCall;
    public getActionsList(request: sc_auth_common_pb.AclActionsListRequest, callback: (error: Error | null, response: sc_auth_common_pb.AclActionsList) => void): grpc.ClientUnaryCall;
    public getActionsList(request: sc_auth_common_pb.AclActionsListRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclActionsList) => void): grpc.ClientUnaryCall;
    public getActionsList(request: sc_auth_common_pb.AclActionsListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclActionsList) => void): grpc.ClientUnaryCall;
    public updateAction(request: sc_auth_common_pb.AclAction, callback: (error: Error | null, response: sc_auth_common_pb.AclAction) => void): grpc.ClientUnaryCall;
    public updateAction(request: sc_auth_common_pb.AclAction, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclAction) => void): grpc.ClientUnaryCall;
    public updateAction(request: sc_auth_common_pb.AclAction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclAction) => void): grpc.ClientUnaryCall;
    public deleteActionByID(request: sc_auth_manager_pb.ByIdSelectRequest, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteActionByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteActionByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createObject(request: sc_auth_common_pb.AclObject, callback: (error: Error | null, response: sc_auth_common_pb.AclObject) => void): grpc.ClientUnaryCall;
    public createObject(request: sc_auth_common_pb.AclObject, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclObject) => void): grpc.ClientUnaryCall;
    public createObject(request: sc_auth_common_pb.AclObject, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclObject) => void): grpc.ClientUnaryCall;
    public getObjectByID(request: sc_auth_manager_pb.ByIdSelectRequest, callback: (error: Error | null, response: sc_auth_common_pb.AclObject) => void): grpc.ClientUnaryCall;
    public getObjectByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclObject) => void): grpc.ClientUnaryCall;
    public getObjectByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclObject) => void): grpc.ClientUnaryCall;
    public getObjectsList(request: sc_auth_common_pb.AclObjectsListRequest, callback: (error: Error | null, response: sc_auth_common_pb.AclObjectsList) => void): grpc.ClientUnaryCall;
    public getObjectsList(request: sc_auth_common_pb.AclObjectsListRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclObjectsList) => void): grpc.ClientUnaryCall;
    public getObjectsList(request: sc_auth_common_pb.AclObjectsListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclObjectsList) => void): grpc.ClientUnaryCall;
    public updateObject(request: sc_auth_common_pb.AclObject, callback: (error: Error | null, response: sc_auth_common_pb.AclObject) => void): grpc.ClientUnaryCall;
    public updateObject(request: sc_auth_common_pb.AclObject, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclObject) => void): grpc.ClientUnaryCall;
    public updateObject(request: sc_auth_common_pb.AclObject, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclObject) => void): grpc.ClientUnaryCall;
    public deleteObjectByID(request: sc_auth_manager_pb.ByIdSelectRequest, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteObjectByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteObjectByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createField(request: sc_auth_common_pb.AclField, callback: (error: Error | null, response: sc_auth_common_pb.AclField) => void): grpc.ClientUnaryCall;
    public createField(request: sc_auth_common_pb.AclField, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclField) => void): grpc.ClientUnaryCall;
    public createField(request: sc_auth_common_pb.AclField, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclField) => void): grpc.ClientUnaryCall;
    public getFieldByID(request: sc_auth_manager_pb.ByIdSelectRequest, callback: (error: Error | null, response: sc_auth_common_pb.AclField) => void): grpc.ClientUnaryCall;
    public getFieldByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclField) => void): grpc.ClientUnaryCall;
    public getFieldByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclField) => void): grpc.ClientUnaryCall;
    public getFieldsList(request: sc_auth_common_pb.AclFieldsListRequest, callback: (error: Error | null, response: sc_auth_common_pb.AclFieldsList) => void): grpc.ClientUnaryCall;
    public getFieldsList(request: sc_auth_common_pb.AclFieldsListRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclFieldsList) => void): grpc.ClientUnaryCall;
    public getFieldsList(request: sc_auth_common_pb.AclFieldsListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclFieldsList) => void): grpc.ClientUnaryCall;
    public updateField(request: sc_auth_common_pb.AclField, callback: (error: Error | null, response: sc_auth_common_pb.AclField) => void): grpc.ClientUnaryCall;
    public updateField(request: sc_auth_common_pb.AclField, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AclField) => void): grpc.ClientUnaryCall;
    public updateField(request: sc_auth_common_pb.AclField, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AclField) => void): grpc.ClientUnaryCall;
    public deleteFieldByID(request: sc_auth_manager_pb.ByIdSelectRequest, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteFieldByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteFieldByID(request: sc_auth_manager_pb.ByIdSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
