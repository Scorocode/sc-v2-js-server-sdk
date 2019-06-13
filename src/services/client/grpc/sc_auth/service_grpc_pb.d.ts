// package: sc_auth
// file: sc_auth/service.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as sc_auth_service_pb from "../sc_auth/service_pb";
// "../github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as base_base_pb from "../base/base_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as sc_auth_common_pb from "../sc_auth/common_pb";

interface IServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getSession: IServiceService_IGetSession;
    refreshSession: IServiceService_IRefreshSession;
    createUser: IServiceService_ICreateUser;
    signInWithEmailAndPassword: IServiceService_ISignInWithEmailAndPassword;
    signoutByToken: IServiceService_ISignoutByToken;
    getUserByID: IServiceService_IGetUserByID;
    getUserByEmail: IServiceService_IGetUserByEmail;
    getUserByToken: IServiceService_IGetUserByToken;
    deleteUserByID: IServiceService_IDeleteUserByID;
    getRoles: IServiceService_IGetRoles;
    getAclsByRoles: IServiceService_IGetAclsByRoles;
    getAclsByRolesArray: IServiceService_IGetAclsByRolesArray;
}

interface IServiceService_IGetSession extends grpc.MethodDefinition<sc_auth_service_pb.SessionRequest, sc_auth_service_pb.SessionInfo> {
    path: string; // "/sc_auth.Service/GetSession"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_service_pb.SessionRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_service_pb.SessionRequest>;
    responseSerialize: grpc.serialize<sc_auth_service_pb.SessionInfo>;
    responseDeserialize: grpc.deserialize<sc_auth_service_pb.SessionInfo>;
}
interface IServiceService_IRefreshSession extends grpc.MethodDefinition<sc_auth_service_pb.SessionRequest, sc_auth_service_pb.SessionInfo> {
    path: string; // "/sc_auth.Service/RefreshSession"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_service_pb.SessionRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_service_pb.SessionRequest>;
    responseSerialize: grpc.serialize<sc_auth_service_pb.SessionInfo>;
    responseDeserialize: grpc.deserialize<sc_auth_service_pb.SessionInfo>;
}
interface IServiceService_ICreateUser extends grpc.MethodDefinition<sc_auth_common_pb.UserEmailAndPasswordRequest, sc_auth_common_pb.User> {
    path: string; // "/sc_auth.Service/CreateUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.UserEmailAndPasswordRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.UserEmailAndPasswordRequest>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.User>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.User>;
}
interface IServiceService_ISignInWithEmailAndPassword extends grpc.MethodDefinition<sc_auth_common_pb.UserEmailAndPasswordRequest, sc_auth_service_pb.SessionInfo> {
    path: string; // "/sc_auth.Service/SignInWithEmailAndPassword"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.UserEmailAndPasswordRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.UserEmailAndPasswordRequest>;
    responseSerialize: grpc.serialize<sc_auth_service_pb.SessionInfo>;
    responseDeserialize: grpc.deserialize<sc_auth_service_pb.SessionInfo>;
}
interface IServiceService_ISignoutByToken extends grpc.MethodDefinition<sc_auth_service_pb.SessionRequest, base_base_pb.SimpleResponse> {
    path: string; // "/sc_auth.Service/SignoutByToken"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_service_pb.SessionRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_service_pb.SessionRequest>;
    responseSerialize: grpc.serialize<base_base_pb.SimpleResponse>;
    responseDeserialize: grpc.deserialize<base_base_pb.SimpleResponse>;
}
interface IServiceService_IGetUserByID extends grpc.MethodDefinition<sc_auth_common_pb.UserSelectRequest, sc_auth_common_pb.User> {
    path: string; // "/sc_auth.Service/GetUserByID"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.UserSelectRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.UserSelectRequest>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.User>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.User>;
}
interface IServiceService_IGetUserByEmail extends grpc.MethodDefinition<sc_auth_common_pb.UserSelectRequest, sc_auth_common_pb.User> {
    path: string; // "/sc_auth.Service/GetUserByEmail"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.UserSelectRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.UserSelectRequest>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.User>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.User>;
}
interface IServiceService_IGetUserByToken extends grpc.MethodDefinition<sc_auth_common_pb.UserSelectRequest, sc_auth_common_pb.User> {
    path: string; // "/sc_auth.Service/GetUserByToken"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.UserSelectRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.UserSelectRequest>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.User>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.User>;
}
interface IServiceService_IDeleteUserByID extends grpc.MethodDefinition<sc_auth_common_pb.UserSelectRequest, base_base_pb.SimpleResponse> {
    path: string; // "/sc_auth.Service/DeleteUserByID"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.UserSelectRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.UserSelectRequest>;
    responseSerialize: grpc.serialize<base_base_pb.SimpleResponse>;
    responseDeserialize: grpc.deserialize<base_base_pb.SimpleResponse>;
}
interface IServiceService_IGetRoles extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, sc_auth_common_pb.AllRolesList> {
    path: string; // "/sc_auth.Service/GetRoles"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.AllRolesList>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.AllRolesList>;
}
interface IServiceService_IGetAclsByRoles extends grpc.MethodDefinition<sc_auth_common_pb.GetAclsByRolesRequest, sc_auth_common_pb.GetAclsByRolesResponse> {
    path: string; // "/sc_auth.Service/GetAclsByRoles"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.GetAclsByRolesRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.GetAclsByRolesRequest>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.GetAclsByRolesResponse>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.GetAclsByRolesResponse>;
}
interface IServiceService_IGetAclsByRolesArray extends grpc.MethodDefinition<sc_auth_common_pb.GetAclsByRolesRequest, sc_auth_common_pb.GetAclsByRolesArrayResponse> {
    path: string; // "/sc_auth.Service/GetAclsByRolesArray"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.GetAclsByRolesRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.GetAclsByRolesRequest>;
    responseSerialize: grpc.serialize<sc_auth_common_pb.GetAclsByRolesArrayResponse>;
    responseDeserialize: grpc.deserialize<sc_auth_common_pb.GetAclsByRolesArrayResponse>;
}

export const ServiceService: IServiceService;

export interface IServiceServer {
    getSession: grpc.handleUnaryCall<sc_auth_service_pb.SessionRequest, sc_auth_service_pb.SessionInfo>;
    refreshSession: grpc.handleUnaryCall<sc_auth_service_pb.SessionRequest, sc_auth_service_pb.SessionInfo>;
    createUser: grpc.handleUnaryCall<sc_auth_common_pb.UserEmailAndPasswordRequest, sc_auth_common_pb.User>;
    signInWithEmailAndPassword: grpc.handleUnaryCall<sc_auth_common_pb.UserEmailAndPasswordRequest, sc_auth_service_pb.SessionInfo>;
    signoutByToken: grpc.handleUnaryCall<sc_auth_service_pb.SessionRequest, base_base_pb.SimpleResponse>;
    getUserByID: grpc.handleUnaryCall<sc_auth_common_pb.UserSelectRequest, sc_auth_common_pb.User>;
    getUserByEmail: grpc.handleUnaryCall<sc_auth_common_pb.UserSelectRequest, sc_auth_common_pb.User>;
    getUserByToken: grpc.handleUnaryCall<sc_auth_common_pb.UserSelectRequest, sc_auth_common_pb.User>;
    deleteUserByID: grpc.handleUnaryCall<sc_auth_common_pb.UserSelectRequest, base_base_pb.SimpleResponse>;
    getRoles: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, sc_auth_common_pb.AllRolesList>;
    getAclsByRoles: grpc.handleUnaryCall<sc_auth_common_pb.GetAclsByRolesRequest, sc_auth_common_pb.GetAclsByRolesResponse>;
    getAclsByRolesArray: grpc.handleUnaryCall<sc_auth_common_pb.GetAclsByRolesRequest, sc_auth_common_pb.GetAclsByRolesArrayResponse>;
}

export interface IServiceClient {
    getSession(request: sc_auth_service_pb.SessionRequest, callback: (error: Error | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    getSession(request: sc_auth_service_pb.SessionRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    getSession(request: sc_auth_service_pb.SessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    refreshSession(request: sc_auth_service_pb.SessionRequest, callback: (error: Error | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    refreshSession(request: sc_auth_service_pb.SessionRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    refreshSession(request: sc_auth_service_pb.SessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    createUser(request: sc_auth_common_pb.UserEmailAndPasswordRequest, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: sc_auth_common_pb.UserEmailAndPasswordRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: sc_auth_common_pb.UserEmailAndPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    signInWithEmailAndPassword(request: sc_auth_common_pb.UserEmailAndPasswordRequest, callback: (error: Error | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    signInWithEmailAndPassword(request: sc_auth_common_pb.UserEmailAndPasswordRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    signInWithEmailAndPassword(request: sc_auth_common_pb.UserEmailAndPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    signoutByToken(request: sc_auth_service_pb.SessionRequest, callback: (error: Error | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    signoutByToken(request: sc_auth_service_pb.SessionRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    signoutByToken(request: sc_auth_service_pb.SessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    getUserByID(request: sc_auth_common_pb.UserSelectRequest, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    getUserByID(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    getUserByID(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    getUserByEmail(request: sc_auth_common_pb.UserSelectRequest, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    getUserByEmail(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    getUserByEmail(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    getUserByToken(request: sc_auth_common_pb.UserSelectRequest, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    getUserByToken(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    getUserByToken(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    deleteUserByID(request: sc_auth_common_pb.UserSelectRequest, callback: (error: Error | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    deleteUserByID(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    deleteUserByID(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    getRoles(request: google_protobuf_empty_pb.Empty, callback: (error: Error | null, response: sc_auth_common_pb.AllRolesList) => void): grpc.ClientUnaryCall;
    getRoles(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AllRolesList) => void): grpc.ClientUnaryCall;
    getRoles(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AllRolesList) => void): grpc.ClientUnaryCall;
    getAclsByRoles(request: sc_auth_common_pb.GetAclsByRolesRequest, callback: (error: Error | null, response: sc_auth_common_pb.GetAclsByRolesResponse) => void): grpc.ClientUnaryCall;
    getAclsByRoles(request: sc_auth_common_pb.GetAclsByRolesRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.GetAclsByRolesResponse) => void): grpc.ClientUnaryCall;
    getAclsByRoles(request: sc_auth_common_pb.GetAclsByRolesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.GetAclsByRolesResponse) => void): grpc.ClientUnaryCall;
    getAclsByRolesArray(request: sc_auth_common_pb.GetAclsByRolesRequest, callback: (error: Error | null, response: sc_auth_common_pb.GetAclsByRolesArrayResponse) => void): grpc.ClientUnaryCall;
    getAclsByRolesArray(request: sc_auth_common_pb.GetAclsByRolesRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.GetAclsByRolesArrayResponse) => void): grpc.ClientUnaryCall;
    getAclsByRolesArray(request: sc_auth_common_pb.GetAclsByRolesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.GetAclsByRolesArrayResponse) => void): grpc.ClientUnaryCall;
}

export class ServiceClient extends grpc.Client implements IServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getSession(request: sc_auth_service_pb.SessionRequest, callback: (error: Error | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    public getSession(request: sc_auth_service_pb.SessionRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    public getSession(request: sc_auth_service_pb.SessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    public refreshSession(request: sc_auth_service_pb.SessionRequest, callback: (error: Error | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    public refreshSession(request: sc_auth_service_pb.SessionRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    public refreshSession(request: sc_auth_service_pb.SessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    public createUser(request: sc_auth_common_pb.UserEmailAndPasswordRequest, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: sc_auth_common_pb.UserEmailAndPasswordRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: sc_auth_common_pb.UserEmailAndPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    public signInWithEmailAndPassword(request: sc_auth_common_pb.UserEmailAndPasswordRequest, callback: (error: Error | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    public signInWithEmailAndPassword(request: sc_auth_common_pb.UserEmailAndPasswordRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    public signInWithEmailAndPassword(request: sc_auth_common_pb.UserEmailAndPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    public signoutByToken(request: sc_auth_service_pb.SessionRequest, callback: (error: Error | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    public signoutByToken(request: sc_auth_service_pb.SessionRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    public signoutByToken(request: sc_auth_service_pb.SessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    public getUserByID(request: sc_auth_common_pb.UserSelectRequest, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByID(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByID(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByEmail(request: sc_auth_common_pb.UserSelectRequest, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByEmail(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByEmail(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByToken(request: sc_auth_common_pb.UserSelectRequest, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByToken(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByToken(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.User) => void): grpc.ClientUnaryCall;
    public deleteUserByID(request: sc_auth_common_pb.UserSelectRequest, callback: (error: Error | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    public deleteUserByID(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    public deleteUserByID(request: sc_auth_common_pb.UserSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    public getRoles(request: google_protobuf_empty_pb.Empty, callback: (error: Error | null, response: sc_auth_common_pb.AllRolesList) => void): grpc.ClientUnaryCall;
    public getRoles(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.AllRolesList) => void): grpc.ClientUnaryCall;
    public getRoles(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.AllRolesList) => void): grpc.ClientUnaryCall;
    public getAclsByRoles(request: sc_auth_common_pb.GetAclsByRolesRequest, callback: (error: Error | null, response: sc_auth_common_pb.GetAclsByRolesResponse) => void): grpc.ClientUnaryCall;
    public getAclsByRoles(request: sc_auth_common_pb.GetAclsByRolesRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.GetAclsByRolesResponse) => void): grpc.ClientUnaryCall;
    public getAclsByRoles(request: sc_auth_common_pb.GetAclsByRolesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.GetAclsByRolesResponse) => void): grpc.ClientUnaryCall;
    public getAclsByRolesArray(request: sc_auth_common_pb.GetAclsByRolesRequest, callback: (error: Error | null, response: sc_auth_common_pb.GetAclsByRolesArrayResponse) => void): grpc.ClientUnaryCall;
    public getAclsByRolesArray(request: sc_auth_common_pb.GetAclsByRolesRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_auth_common_pb.GetAclsByRolesArrayResponse) => void): grpc.ClientUnaryCall;
    public getAclsByRolesArray(request: sc_auth_common_pb.GetAclsByRolesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_auth_common_pb.GetAclsByRolesArrayResponse) => void): grpc.ClientUnaryCall;
}

interface ISettingsUpdaterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    updateSettigns: ISettingsUpdaterService_IUpdateSettigns;
}

interface ISettingsUpdaterService_IUpdateSettigns extends grpc.MethodDefinition<sc_auth_common_pb.Settings, base_base_pb.SimpleResponse> {
    path: string; // "/sc_auth.SettingsUpdater/UpdateSettigns"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_common_pb.Settings>;
    requestDeserialize: grpc.deserialize<sc_auth_common_pb.Settings>;
    responseSerialize: grpc.serialize<base_base_pb.SimpleResponse>;
    responseDeserialize: grpc.deserialize<base_base_pb.SimpleResponse>;
}

export const SettingsUpdaterService: ISettingsUpdaterService;

export interface ISettingsUpdaterServer {
    updateSettigns: grpc.handleUnaryCall<sc_auth_common_pb.Settings, base_base_pb.SimpleResponse>;
}

export interface ISettingsUpdaterClient {
    updateSettigns(request: sc_auth_common_pb.Settings, callback: (error: Error | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    updateSettigns(request: sc_auth_common_pb.Settings, metadata: grpc.Metadata, callback: (error: Error | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    updateSettigns(request: sc_auth_common_pb.Settings, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
}

export class SettingsUpdaterClient extends grpc.Client implements ISettingsUpdaterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public updateSettigns(request: sc_auth_common_pb.Settings, callback: (error: Error | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    public updateSettigns(request: sc_auth_common_pb.Settings, metadata: grpc.Metadata, callback: (error: Error | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    public updateSettigns(request: sc_auth_common_pb.Settings, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
}
