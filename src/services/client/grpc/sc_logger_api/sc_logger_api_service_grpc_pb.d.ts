// package: sc_logger_api
// file: sc_logger_api/sc_logger_api_service.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as sc_logger_api_sc_logger_api_service_pb from "../sc_logger_api/sc_logger_api_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IServiceService_IGet;
    clear: IServiceService_IClear;
    dump: IServiceService_IDump;
    getLast: IServiceService_IGetLast;
    subscribe: IServiceService_ISubscribe;
}

interface IServiceService_IGet extends grpc.MethodDefinition<sc_logger_api_sc_logger_api_service_pb.Select, sc_logger_api_sc_logger_api_service_pb.SelectResponse> {
    path: string; // "/sc_logger_api.Service/Get"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_logger_api_sc_logger_api_service_pb.Select>;
    requestDeserialize: grpc.deserialize<sc_logger_api_sc_logger_api_service_pb.Select>;
    responseSerialize: grpc.serialize<sc_logger_api_sc_logger_api_service_pb.SelectResponse>;
    responseDeserialize: grpc.deserialize<sc_logger_api_sc_logger_api_service_pb.SelectResponse>;
}
interface IServiceService_IClear extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_logger_api.Service/Clear"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IServiceService_IDump extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, sc_logger_api_sc_logger_api_service_pb.File> {
    path: string; // "/sc_logger_api.Service/Dump"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<sc_logger_api_sc_logger_api_service_pb.File>;
    responseDeserialize: grpc.deserialize<sc_logger_api_sc_logger_api_service_pb.File>;
}
interface IServiceService_IGetLast extends grpc.MethodDefinition<sc_logger_api_sc_logger_api_service_pb.GetLastRequest, sc_logger_api_sc_logger_api_service_pb.File> {
    path: string; // "/sc_logger_api.Service/GetLast"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_logger_api_sc_logger_api_service_pb.GetLastRequest>;
    requestDeserialize: grpc.deserialize<sc_logger_api_sc_logger_api_service_pb.GetLastRequest>;
    responseSerialize: grpc.serialize<sc_logger_api_sc_logger_api_service_pb.File>;
    responseDeserialize: grpc.deserialize<sc_logger_api_sc_logger_api_service_pb.File>;
}
interface IServiceService_ISubscribe extends grpc.MethodDefinition<sc_logger_api_sc_logger_api_service_pb.GetLastRequest, sc_logger_api_sc_logger_api_service_pb.File> {
    path: string; // "/sc_logger_api.Service/Subscribe"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<sc_logger_api_sc_logger_api_service_pb.GetLastRequest>;
    requestDeserialize: grpc.deserialize<sc_logger_api_sc_logger_api_service_pb.GetLastRequest>;
    responseSerialize: grpc.serialize<sc_logger_api_sc_logger_api_service_pb.File>;
    responseDeserialize: grpc.deserialize<sc_logger_api_sc_logger_api_service_pb.File>;
}

export const ServiceService: IServiceService;

export interface IServiceServer {
    get: grpc.handleUnaryCall<sc_logger_api_sc_logger_api_service_pb.Select, sc_logger_api_sc_logger_api_service_pb.SelectResponse>;
    clear: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
    dump: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, sc_logger_api_sc_logger_api_service_pb.File>;
    getLast: grpc.handleUnaryCall<sc_logger_api_sc_logger_api_service_pb.GetLastRequest, sc_logger_api_sc_logger_api_service_pb.File>;
    subscribe: grpc.handleServerStreamingCall<sc_logger_api_sc_logger_api_service_pb.GetLastRequest, sc_logger_api_sc_logger_api_service_pb.File>;
}

export interface IServiceClient {
    get(request: sc_logger_api_sc_logger_api_service_pb.Select, callback: (error: grpc.ServiceError | null, response: sc_logger_api_sc_logger_api_service_pb.SelectResponse) => void): grpc.ClientUnaryCall;
    get(request: sc_logger_api_sc_logger_api_service_pb.Select, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_logger_api_sc_logger_api_service_pb.SelectResponse) => void): grpc.ClientUnaryCall;
    get(request: sc_logger_api_sc_logger_api_service_pb.Select, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_logger_api_sc_logger_api_service_pb.SelectResponse) => void): grpc.ClientUnaryCall;
    clear(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    clear(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    clear(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    dump(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sc_logger_api_sc_logger_api_service_pb.File>;
    dump(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sc_logger_api_sc_logger_api_service_pb.File>;
    getLast(request: sc_logger_api_sc_logger_api_service_pb.GetLastRequest, callback: (error: grpc.ServiceError | null, response: sc_logger_api_sc_logger_api_service_pb.File) => void): grpc.ClientUnaryCall;
    getLast(request: sc_logger_api_sc_logger_api_service_pb.GetLastRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_logger_api_sc_logger_api_service_pb.File) => void): grpc.ClientUnaryCall;
    getLast(request: sc_logger_api_sc_logger_api_service_pb.GetLastRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_logger_api_sc_logger_api_service_pb.File) => void): grpc.ClientUnaryCall;
    subscribe(request: sc_logger_api_sc_logger_api_service_pb.GetLastRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sc_logger_api_sc_logger_api_service_pb.File>;
    subscribe(request: sc_logger_api_sc_logger_api_service_pb.GetLastRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sc_logger_api_sc_logger_api_service_pb.File>;
}

export class ServiceClient extends grpc.Client implements IServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: sc_logger_api_sc_logger_api_service_pb.Select, callback: (error: grpc.ServiceError | null, response: sc_logger_api_sc_logger_api_service_pb.SelectResponse) => void): grpc.ClientUnaryCall;
    public get(request: sc_logger_api_sc_logger_api_service_pb.Select, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_logger_api_sc_logger_api_service_pb.SelectResponse) => void): grpc.ClientUnaryCall;
    public get(request: sc_logger_api_sc_logger_api_service_pb.Select, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_logger_api_sc_logger_api_service_pb.SelectResponse) => void): grpc.ClientUnaryCall;
    public clear(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public clear(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public clear(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public dump(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sc_logger_api_sc_logger_api_service_pb.File>;
    public dump(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sc_logger_api_sc_logger_api_service_pb.File>;
    public getLast(request: sc_logger_api_sc_logger_api_service_pb.GetLastRequest, callback: (error: grpc.ServiceError | null, response: sc_logger_api_sc_logger_api_service_pb.File) => void): grpc.ClientUnaryCall;
    public getLast(request: sc_logger_api_sc_logger_api_service_pb.GetLastRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_logger_api_sc_logger_api_service_pb.File) => void): grpc.ClientUnaryCall;
    public getLast(request: sc_logger_api_sc_logger_api_service_pb.GetLastRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_logger_api_sc_logger_api_service_pb.File) => void): grpc.ClientUnaryCall;
    public subscribe(request: sc_logger_api_sc_logger_api_service_pb.GetLastRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sc_logger_api_sc_logger_api_service_pb.File>;
    public subscribe(request: sc_logger_api_sc_logger_api_service_pb.GetLastRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sc_logger_api_sc_logger_api_service_pb.File>;
}
