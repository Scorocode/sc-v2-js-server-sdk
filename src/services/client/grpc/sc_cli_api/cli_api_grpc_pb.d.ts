// package: sc_cli_api
// file: sc_cli_api/cli_api.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as sc_cli_api_cli_api_pb from "../sc_cli_api/cli_api_pb";
// "../github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ICliApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getActivePorts: ICliApiService_IGetActivePorts;
    pull: ICliApiService_IPull;
    push: ICliApiService_IPush;
    dependenciesUpdate: ICliApiService_IDependenciesUpdate;
    logsSubscribe: ICliApiService_ILogsSubscribe;
    proxy: ICliApiService_IProxy;
    registerDatabase: ICliApiService_IRegisterDatabase;
}

interface ICliApiService_IGetActivePorts extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, sc_cli_api_cli_api_pb.ActivePortsResponse> {
    path: string; // "/sc_cli_api.CliApi/GetActivePorts"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<sc_cli_api_cli_api_pb.ActivePortsResponse>;
    responseDeserialize: grpc.deserialize<sc_cli_api_cli_api_pb.ActivePortsResponse>;
}
interface ICliApiService_IPull extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, sc_cli_api_cli_api_pb.Archive> {
    path: string; // "/sc_cli_api.CliApi/Pull"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<sc_cli_api_cli_api_pb.Archive>;
    responseDeserialize: grpc.deserialize<sc_cli_api_cli_api_pb.Archive>;
}
interface ICliApiService_IPush extends grpc.MethodDefinition<sc_cli_api_cli_api_pb.Archive, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_cli_api.CliApi/Push"
    requestStream: boolean; // true
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_cli_api_cli_api_pb.Archive>;
    requestDeserialize: grpc.deserialize<sc_cli_api_cli_api_pb.Archive>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ICliApiService_IDependenciesUpdate extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_cli_api.CliApi/DependenciesUpdate"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ICliApiService_ILogsSubscribe extends grpc.MethodDefinition<sc_cli_api_cli_api_pb.SurscribeRequest, sc_cli_api_cli_api_pb.SubscribeResponse> {
    path: string; // "/sc_cli_api.CliApi/LogsSubscribe"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<sc_cli_api_cli_api_pb.SurscribeRequest>;
    requestDeserialize: grpc.deserialize<sc_cli_api_cli_api_pb.SurscribeRequest>;
    responseSerialize: grpc.serialize<sc_cli_api_cli_api_pb.SubscribeResponse>;
    responseDeserialize: grpc.deserialize<sc_cli_api_cli_api_pb.SubscribeResponse>;
}
interface ICliApiService_IProxy extends grpc.MethodDefinition<sc_cli_api_cli_api_pb.Command, sc_cli_api_cli_api_pb.Command> {
    path: string; // "/sc_cli_api.CliApi/Proxy"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<sc_cli_api_cli_api_pb.Command>;
    requestDeserialize: grpc.deserialize<sc_cli_api_cli_api_pb.Command>;
    responseSerialize: grpc.serialize<sc_cli_api_cli_api_pb.Command>;
    responseDeserialize: grpc.deserialize<sc_cli_api_cli_api_pb.Command>;
}
interface ICliApiService_IRegisterDatabase extends grpc.MethodDefinition<sc_cli_api_cli_api_pb.RegisterDatabaseRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_cli_api.CliApi/RegisterDatabase"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_cli_api_cli_api_pb.RegisterDatabaseRequest>;
    requestDeserialize: grpc.deserialize<sc_cli_api_cli_api_pb.RegisterDatabaseRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const CliApiService: ICliApiService;

export interface ICliApiServer {
    getActivePorts: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, sc_cli_api_cli_api_pb.ActivePortsResponse>;
    pull: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, sc_cli_api_cli_api_pb.Archive>;
    push: grpc.handleClientStreamingCall<sc_cli_api_cli_api_pb.Archive, google_protobuf_empty_pb.Empty>;
    dependenciesUpdate: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
    logsSubscribe: grpc.handleServerStreamingCall<sc_cli_api_cli_api_pb.SurscribeRequest, sc_cli_api_cli_api_pb.SubscribeResponse>;
    proxy: grpc.handleBidiStreamingCall<sc_cli_api_cli_api_pb.Command, sc_cli_api_cli_api_pb.Command>;
    registerDatabase: grpc.handleUnaryCall<sc_cli_api_cli_api_pb.RegisterDatabaseRequest, google_protobuf_empty_pb.Empty>;
}

export interface ICliApiClient {
    getActivePorts(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: sc_cli_api_cli_api_pb.ActivePortsResponse) => void): grpc.ClientUnaryCall;
    getActivePorts(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_cli_api_cli_api_pb.ActivePortsResponse) => void): grpc.ClientUnaryCall;
    getActivePorts(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_cli_api_cli_api_pb.ActivePortsResponse) => void): grpc.ClientUnaryCall;
    pull(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sc_cli_api_cli_api_pb.Archive>;
    pull(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sc_cli_api_cli_api_pb.Archive>;
    push(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sc_cli_api_cli_api_pb.Archive>;
    push(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sc_cli_api_cli_api_pb.Archive>;
    push(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sc_cli_api_cli_api_pb.Archive>;
    push(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sc_cli_api_cli_api_pb.Archive>;
    dependenciesUpdate(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    dependenciesUpdate(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    dependenciesUpdate(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    logsSubscribe(request: sc_cli_api_cli_api_pb.SurscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sc_cli_api_cli_api_pb.SubscribeResponse>;
    logsSubscribe(request: sc_cli_api_cli_api_pb.SurscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sc_cli_api_cli_api_pb.SubscribeResponse>;
    proxy(): grpc.ClientDuplexStream<sc_cli_api_cli_api_pb.Command, sc_cli_api_cli_api_pb.Command>;
    proxy(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<sc_cli_api_cli_api_pb.Command, sc_cli_api_cli_api_pb.Command>;
    proxy(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<sc_cli_api_cli_api_pb.Command, sc_cli_api_cli_api_pb.Command>;
    registerDatabase(request: sc_cli_api_cli_api_pb.RegisterDatabaseRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    registerDatabase(request: sc_cli_api_cli_api_pb.RegisterDatabaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    registerDatabase(request: sc_cli_api_cli_api_pb.RegisterDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class CliApiClient extends grpc.Client implements ICliApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getActivePorts(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: sc_cli_api_cli_api_pb.ActivePortsResponse) => void): grpc.ClientUnaryCall;
    public getActivePorts(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_cli_api_cli_api_pb.ActivePortsResponse) => void): grpc.ClientUnaryCall;
    public getActivePorts(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_cli_api_cli_api_pb.ActivePortsResponse) => void): grpc.ClientUnaryCall;
    public pull(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sc_cli_api_cli_api_pb.Archive>;
    public pull(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sc_cli_api_cli_api_pb.Archive>;
    public push(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sc_cli_api_cli_api_pb.Archive>;
    public push(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sc_cli_api_cli_api_pb.Archive>;
    public push(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sc_cli_api_cli_api_pb.Archive>;
    public push(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sc_cli_api_cli_api_pb.Archive>;
    public dependenciesUpdate(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public dependenciesUpdate(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public dependenciesUpdate(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public logsSubscribe(request: sc_cli_api_cli_api_pb.SurscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sc_cli_api_cli_api_pb.SubscribeResponse>;
    public logsSubscribe(request: sc_cli_api_cli_api_pb.SurscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sc_cli_api_cli_api_pb.SubscribeResponse>;
    public proxy(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<sc_cli_api_cli_api_pb.Command, sc_cli_api_cli_api_pb.Command>;
    public proxy(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<sc_cli_api_cli_api_pb.Command, sc_cli_api_cli_api_pb.Command>;
    public registerDatabase(request: sc_cli_api_cli_api_pb.RegisterDatabaseRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public registerDatabase(request: sc_cli_api_cli_api_pb.RegisterDatabaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public registerDatabase(request: sc_cli_api_cli_api_pb.RegisterDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
