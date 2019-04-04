// package: sc_billing
// file: sc_billing/sc_billing.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as sc_billing_sc_billing_pb from "../sc_billing/sc_billing_pb";
// "../github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IBillingApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    registerUser: IBillingApiService_IRegisterUser;
    blockUser: IBillingApiService_IBlockUser;
    registerApplication: IBillingApiService_IRegisterApplication;
    changeApplicationState: IBillingApiService_IChangeApplicationState;
    addFundsToUser: IBillingApiService_IAddFundsToUser;
    withdrawFundsFromUser: IBillingApiService_IWithdrawFundsFromUser;
    addFundsToApp: IBillingApiService_IAddFundsToApp;
    withdrawFundsFromApp: IBillingApiService_IWithdrawFundsFromApp;
}

interface IBillingApiService_IRegisterUser extends grpc.MethodDefinition<sc_billing_sc_billing_pb.User, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_billing.BillingApi/RegisterUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_billing_sc_billing_pb.User>;
    requestDeserialize: grpc.deserialize<sc_billing_sc_billing_pb.User>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IBillingApiService_IBlockUser extends grpc.MethodDefinition<sc_billing_sc_billing_pb.User, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_billing.BillingApi/BlockUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_billing_sc_billing_pb.User>;
    requestDeserialize: grpc.deserialize<sc_billing_sc_billing_pb.User>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IBillingApiService_IRegisterApplication extends grpc.MethodDefinition<sc_billing_sc_billing_pb.RegisterApplicationRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_billing.BillingApi/RegisterApplication"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_billing_sc_billing_pb.RegisterApplicationRequest>;
    requestDeserialize: grpc.deserialize<sc_billing_sc_billing_pb.RegisterApplicationRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IBillingApiService_IChangeApplicationState extends grpc.MethodDefinition<sc_billing_sc_billing_pb.ChangeApplicationStateRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_billing.BillingApi/ChangeApplicationState"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_billing_sc_billing_pb.ChangeApplicationStateRequest>;
    requestDeserialize: grpc.deserialize<sc_billing_sc_billing_pb.ChangeApplicationStateRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IBillingApiService_IAddFundsToUser extends grpc.MethodDefinition<sc_billing_sc_billing_pb.FundsRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_billing.BillingApi/AddFundsToUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_billing_sc_billing_pb.FundsRequest>;
    requestDeserialize: grpc.deserialize<sc_billing_sc_billing_pb.FundsRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IBillingApiService_IWithdrawFundsFromUser extends grpc.MethodDefinition<sc_billing_sc_billing_pb.FundsRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_billing.BillingApi/WithdrawFundsFromUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_billing_sc_billing_pb.FundsRequest>;
    requestDeserialize: grpc.deserialize<sc_billing_sc_billing_pb.FundsRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IBillingApiService_IAddFundsToApp extends grpc.MethodDefinition<sc_billing_sc_billing_pb.FundsRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_billing.BillingApi/AddFundsToApp"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_billing_sc_billing_pb.FundsRequest>;
    requestDeserialize: grpc.deserialize<sc_billing_sc_billing_pb.FundsRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IBillingApiService_IWithdrawFundsFromApp extends grpc.MethodDefinition<sc_billing_sc_billing_pb.FundsRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_billing.BillingApi/WithdrawFundsFromApp"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_billing_sc_billing_pb.FundsRequest>;
    requestDeserialize: grpc.deserialize<sc_billing_sc_billing_pb.FundsRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const BillingApiService: IBillingApiService;

export interface IBillingApiServer {
    registerUser: grpc.handleUnaryCall<sc_billing_sc_billing_pb.User, google_protobuf_empty_pb.Empty>;
    blockUser: grpc.handleUnaryCall<sc_billing_sc_billing_pb.User, google_protobuf_empty_pb.Empty>;
    registerApplication: grpc.handleUnaryCall<sc_billing_sc_billing_pb.RegisterApplicationRequest, google_protobuf_empty_pb.Empty>;
    changeApplicationState: grpc.handleUnaryCall<sc_billing_sc_billing_pb.ChangeApplicationStateRequest, google_protobuf_empty_pb.Empty>;
    addFundsToUser: grpc.handleUnaryCall<sc_billing_sc_billing_pb.FundsRequest, google_protobuf_empty_pb.Empty>;
    withdrawFundsFromUser: grpc.handleUnaryCall<sc_billing_sc_billing_pb.FundsRequest, google_protobuf_empty_pb.Empty>;
    addFundsToApp: grpc.handleUnaryCall<sc_billing_sc_billing_pb.FundsRequest, google_protobuf_empty_pb.Empty>;
    withdrawFundsFromApp: grpc.handleUnaryCall<sc_billing_sc_billing_pb.FundsRequest, google_protobuf_empty_pb.Empty>;
}

export interface IBillingApiClient {
    registerUser(request: sc_billing_sc_billing_pb.User, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    registerUser(request: sc_billing_sc_billing_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    registerUser(request: sc_billing_sc_billing_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    blockUser(request: sc_billing_sc_billing_pb.User, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    blockUser(request: sc_billing_sc_billing_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    blockUser(request: sc_billing_sc_billing_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    registerApplication(request: sc_billing_sc_billing_pb.RegisterApplicationRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    registerApplication(request: sc_billing_sc_billing_pb.RegisterApplicationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    registerApplication(request: sc_billing_sc_billing_pb.RegisterApplicationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    changeApplicationState(request: sc_billing_sc_billing_pb.ChangeApplicationStateRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    changeApplicationState(request: sc_billing_sc_billing_pb.ChangeApplicationStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    changeApplicationState(request: sc_billing_sc_billing_pb.ChangeApplicationStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    addFundsToUser(request: sc_billing_sc_billing_pb.FundsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    addFundsToUser(request: sc_billing_sc_billing_pb.FundsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    addFundsToUser(request: sc_billing_sc_billing_pb.FundsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    withdrawFundsFromUser(request: sc_billing_sc_billing_pb.FundsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    withdrawFundsFromUser(request: sc_billing_sc_billing_pb.FundsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    withdrawFundsFromUser(request: sc_billing_sc_billing_pb.FundsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    addFundsToApp(request: sc_billing_sc_billing_pb.FundsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    addFundsToApp(request: sc_billing_sc_billing_pb.FundsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    addFundsToApp(request: sc_billing_sc_billing_pb.FundsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    withdrawFundsFromApp(request: sc_billing_sc_billing_pb.FundsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    withdrawFundsFromApp(request: sc_billing_sc_billing_pb.FundsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    withdrawFundsFromApp(request: sc_billing_sc_billing_pb.FundsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class BillingApiClient extends grpc.Client implements IBillingApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public registerUser(request: sc_billing_sc_billing_pb.User, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public registerUser(request: sc_billing_sc_billing_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public registerUser(request: sc_billing_sc_billing_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public blockUser(request: sc_billing_sc_billing_pb.User, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public blockUser(request: sc_billing_sc_billing_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public blockUser(request: sc_billing_sc_billing_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public registerApplication(request: sc_billing_sc_billing_pb.RegisterApplicationRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public registerApplication(request: sc_billing_sc_billing_pb.RegisterApplicationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public registerApplication(request: sc_billing_sc_billing_pb.RegisterApplicationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public changeApplicationState(request: sc_billing_sc_billing_pb.ChangeApplicationStateRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public changeApplicationState(request: sc_billing_sc_billing_pb.ChangeApplicationStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public changeApplicationState(request: sc_billing_sc_billing_pb.ChangeApplicationStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public addFundsToUser(request: sc_billing_sc_billing_pb.FundsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public addFundsToUser(request: sc_billing_sc_billing_pb.FundsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public addFundsToUser(request: sc_billing_sc_billing_pb.FundsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public withdrawFundsFromUser(request: sc_billing_sc_billing_pb.FundsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public withdrawFundsFromUser(request: sc_billing_sc_billing_pb.FundsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public withdrawFundsFromUser(request: sc_billing_sc_billing_pb.FundsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public addFundsToApp(request: sc_billing_sc_billing_pb.FundsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public addFundsToApp(request: sc_billing_sc_billing_pb.FundsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public addFundsToApp(request: sc_billing_sc_billing_pb.FundsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public withdrawFundsFromApp(request: sc_billing_sc_billing_pb.FundsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public withdrawFundsFromApp(request: sc_billing_sc_billing_pb.FundsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public withdrawFundsFromApp(request: sc_billing_sc_billing_pb.FundsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
