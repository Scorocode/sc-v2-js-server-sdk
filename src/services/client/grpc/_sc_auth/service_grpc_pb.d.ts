// package: sc_auth
// file: sc_auth/service.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as sc_auth_service_pb from "../sc_auth/service_pb";
import * as base_base_pb from "../base/base_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

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
interface IServiceService_ICreateUser extends grpc.MethodDefinition<sc_auth_service_pb.UserEmailAndPasswordRequest, sc_auth_service_pb.User> {
    path: string; // "/sc_auth.Service/CreateUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_service_pb.UserEmailAndPasswordRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_service_pb.UserEmailAndPasswordRequest>;
    responseSerialize: grpc.serialize<sc_auth_service_pb.User>;
    responseDeserialize: grpc.deserialize<sc_auth_service_pb.User>;
}
interface IServiceService_ISignInWithEmailAndPassword extends grpc.MethodDefinition<sc_auth_service_pb.UserEmailAndPasswordRequest, sc_auth_service_pb.SessionInfo> {
    path: string; // "/sc_auth.Service/SignInWithEmailAndPassword"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_service_pb.UserEmailAndPasswordRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_service_pb.UserEmailAndPasswordRequest>;
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
interface IServiceService_IGetUserByID extends grpc.MethodDefinition<sc_auth_service_pb.UserSelectRequest, sc_auth_service_pb.User> {
    path: string; // "/sc_auth.Service/GetUserByID"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_service_pb.UserSelectRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_service_pb.UserSelectRequest>;
    responseSerialize: grpc.serialize<sc_auth_service_pb.User>;
    responseDeserialize: grpc.deserialize<sc_auth_service_pb.User>;
}
interface IServiceService_IGetUserByEmail extends grpc.MethodDefinition<sc_auth_service_pb.UserSelectRequest, sc_auth_service_pb.User> {
    path: string; // "/sc_auth.Service/GetUserByEmail"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_service_pb.UserSelectRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_service_pb.UserSelectRequest>;
    responseSerialize: grpc.serialize<sc_auth_service_pb.User>;
    responseDeserialize: grpc.deserialize<sc_auth_service_pb.User>;
}
interface IServiceService_IGetUserByToken extends grpc.MethodDefinition<sc_auth_service_pb.UserSelectRequest, sc_auth_service_pb.User> {
    path: string; // "/sc_auth.Service/GetUserByToken"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_service_pb.UserSelectRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_service_pb.UserSelectRequest>;
    responseSerialize: grpc.serialize<sc_auth_service_pb.User>;
    responseDeserialize: grpc.deserialize<sc_auth_service_pb.User>;
}
interface IServiceService_IDeleteUserByID extends grpc.MethodDefinition<sc_auth_service_pb.UserSelectRequest, base_base_pb.SimpleResponse> {
    path: string; // "/sc_auth.Service/DeleteUserByID"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_service_pb.UserSelectRequest>;
    requestDeserialize: grpc.deserialize<sc_auth_service_pb.UserSelectRequest>;
    responseSerialize: grpc.serialize<base_base_pb.SimpleResponse>;
    responseDeserialize: grpc.deserialize<base_base_pb.SimpleResponse>;
}

export const ServiceService: IServiceService;

export interface IServiceServer {
    getSession: grpc.handleUnaryCall<sc_auth_service_pb.SessionRequest, sc_auth_service_pb.SessionInfo>;
    refreshSession: grpc.handleUnaryCall<sc_auth_service_pb.SessionRequest, sc_auth_service_pb.SessionInfo>;
    createUser: grpc.handleUnaryCall<sc_auth_service_pb.UserEmailAndPasswordRequest, sc_auth_service_pb.User>;
    signInWithEmailAndPassword: grpc.handleUnaryCall<sc_auth_service_pb.UserEmailAndPasswordRequest, sc_auth_service_pb.SessionInfo>;
    signoutByToken: grpc.handleUnaryCall<sc_auth_service_pb.SessionRequest, base_base_pb.SimpleResponse>;
    getUserByID: grpc.handleUnaryCall<sc_auth_service_pb.UserSelectRequest, sc_auth_service_pb.User>;
    getUserByEmail: grpc.handleUnaryCall<sc_auth_service_pb.UserSelectRequest, sc_auth_service_pb.User>;
    getUserByToken: grpc.handleUnaryCall<sc_auth_service_pb.UserSelectRequest, sc_auth_service_pb.User>;
    deleteUserByID: grpc.handleUnaryCall<sc_auth_service_pb.UserSelectRequest, base_base_pb.SimpleResponse>;
}

export interface IServiceClient {
    getSession(request: sc_auth_service_pb.SessionRequest, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    getSession(request: sc_auth_service_pb.SessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    getSession(request: sc_auth_service_pb.SessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    refreshSession(request: sc_auth_service_pb.SessionRequest, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    refreshSession(request: sc_auth_service_pb.SessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    refreshSession(request: sc_auth_service_pb.SessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    createUser(request: sc_auth_service_pb.UserEmailAndPasswordRequest, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: sc_auth_service_pb.UserEmailAndPasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: sc_auth_service_pb.UserEmailAndPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.User) => void): grpc.ClientUnaryCall;
    signInWithEmailAndPassword(request: sc_auth_service_pb.UserEmailAndPasswordRequest, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    signInWithEmailAndPassword(request: sc_auth_service_pb.UserEmailAndPasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    signInWithEmailAndPassword(request: sc_auth_service_pb.UserEmailAndPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    signoutByToken(request: sc_auth_service_pb.SessionRequest, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    signoutByToken(request: sc_auth_service_pb.SessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    signoutByToken(request: sc_auth_service_pb.SessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    getUserByID(request: sc_auth_service_pb.UserSelectRequest, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.User) => void): grpc.ClientUnaryCall;
    getUserByID(request: sc_auth_service_pb.UserSelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.User) => void): grpc.ClientUnaryCall;
    getUserByID(request: sc_auth_service_pb.UserSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.User) => void): grpc.ClientUnaryCall;
    getUserByEmail(request: sc_auth_service_pb.UserSelectRequest, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.User) => void): grpc.ClientUnaryCall;
    getUserByEmail(request: sc_auth_service_pb.UserSelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.User) => void): grpc.ClientUnaryCall;
    getUserByEmail(request: sc_auth_service_pb.UserSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.User) => void): grpc.ClientUnaryCall;
    getUserByToken(request: sc_auth_service_pb.UserSelectRequest, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.User) => void): grpc.ClientUnaryCall;
    getUserByToken(request: sc_auth_service_pb.UserSelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.User) => void): grpc.ClientUnaryCall;
    getUserByToken(request: sc_auth_service_pb.UserSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.User) => void): grpc.ClientUnaryCall;
    deleteUserByID(request: sc_auth_service_pb.UserSelectRequest, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    deleteUserByID(request: sc_auth_service_pb.UserSelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    deleteUserByID(request: sc_auth_service_pb.UserSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
}

export class ServiceClient extends grpc.Client implements IServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getSession(request: sc_auth_service_pb.SessionRequest, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    public getSession(request: sc_auth_service_pb.SessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    public getSession(request: sc_auth_service_pb.SessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    public refreshSession(request: sc_auth_service_pb.SessionRequest, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    public refreshSession(request: sc_auth_service_pb.SessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    public refreshSession(request: sc_auth_service_pb.SessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    public createUser(request: sc_auth_service_pb.UserEmailAndPasswordRequest, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: sc_auth_service_pb.UserEmailAndPasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: sc_auth_service_pb.UserEmailAndPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.User) => void): grpc.ClientUnaryCall;
    public signInWithEmailAndPassword(request: sc_auth_service_pb.UserEmailAndPasswordRequest, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    public signInWithEmailAndPassword(request: sc_auth_service_pb.UserEmailAndPasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    public signInWithEmailAndPassword(request: sc_auth_service_pb.UserEmailAndPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.SessionInfo) => void): grpc.ClientUnaryCall;
    public signoutByToken(request: sc_auth_service_pb.SessionRequest, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    public signoutByToken(request: sc_auth_service_pb.SessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    public signoutByToken(request: sc_auth_service_pb.SessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    public getUserByID(request: sc_auth_service_pb.UserSelectRequest, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByID(request: sc_auth_service_pb.UserSelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByID(request: sc_auth_service_pb.UserSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByEmail(request: sc_auth_service_pb.UserSelectRequest, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByEmail(request: sc_auth_service_pb.UserSelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByEmail(request: sc_auth_service_pb.UserSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByToken(request: sc_auth_service_pb.UserSelectRequest, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByToken(request: sc_auth_service_pb.UserSelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByToken(request: sc_auth_service_pb.UserSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_auth_service_pb.User) => void): grpc.ClientUnaryCall;
    public deleteUserByID(request: sc_auth_service_pb.UserSelectRequest, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    public deleteUserByID(request: sc_auth_service_pb.UserSelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    public deleteUserByID(request: sc_auth_service_pb.UserSelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
}
