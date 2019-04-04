// package: sc_push
// file: sc_push/service.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as sc_push_service_pb from "../sc_push/service_pb";
import * as base_base_pb from "../base/base_pb";

interface IServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sendFCM: IServiceService_ISendFCM;
    sendAPN: IServiceService_ISendAPN;
}

interface IServiceService_ISendFCM extends grpc.MethodDefinition<sc_push_service_pb.PushRequestFCM, sc_push_service_pb.PushResponse> {
    path: string; // "/sc_push.Service/SendFCM"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_push_service_pb.PushRequestFCM>;
    requestDeserialize: grpc.deserialize<sc_push_service_pb.PushRequestFCM>;
    responseSerialize: grpc.serialize<sc_push_service_pb.PushResponse>;
    responseDeserialize: grpc.deserialize<sc_push_service_pb.PushResponse>;
}
interface IServiceService_ISendAPN extends grpc.MethodDefinition<sc_push_service_pb.PushRequestAPN, sc_push_service_pb.PushResponse> {
    path: string; // "/sc_push.Service/SendAPN"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_push_service_pb.PushRequestAPN>;
    requestDeserialize: grpc.deserialize<sc_push_service_pb.PushRequestAPN>;
    responseSerialize: grpc.serialize<sc_push_service_pb.PushResponse>;
    responseDeserialize: grpc.deserialize<sc_push_service_pb.PushResponse>;
}

export const ServiceService: IServiceService;

export interface IServiceServer {
    sendFCM: grpc.handleUnaryCall<sc_push_service_pb.PushRequestFCM, sc_push_service_pb.PushResponse>;
    sendAPN: grpc.handleUnaryCall<sc_push_service_pb.PushRequestAPN, sc_push_service_pb.PushResponse>;
}

export interface IServiceClient {
    sendFCM(request: sc_push_service_pb.PushRequestFCM, callback: (error: grpc.ServiceError | null, response: sc_push_service_pb.PushResponse) => void): grpc.ClientUnaryCall;
    sendFCM(request: sc_push_service_pb.PushRequestFCM, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_push_service_pb.PushResponse) => void): grpc.ClientUnaryCall;
    sendFCM(request: sc_push_service_pb.PushRequestFCM, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_push_service_pb.PushResponse) => void): grpc.ClientUnaryCall;
    sendAPN(request: sc_push_service_pb.PushRequestAPN, callback: (error: grpc.ServiceError | null, response: sc_push_service_pb.PushResponse) => void): grpc.ClientUnaryCall;
    sendAPN(request: sc_push_service_pb.PushRequestAPN, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_push_service_pb.PushResponse) => void): grpc.ClientUnaryCall;
    sendAPN(request: sc_push_service_pb.PushRequestAPN, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_push_service_pb.PushResponse) => void): grpc.ClientUnaryCall;
}

export class ServiceClient extends grpc.Client implements IServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sendFCM(request: sc_push_service_pb.PushRequestFCM, callback: (error: grpc.ServiceError | null, response: sc_push_service_pb.PushResponse) => void): grpc.ClientUnaryCall;
    public sendFCM(request: sc_push_service_pb.PushRequestFCM, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_push_service_pb.PushResponse) => void): grpc.ClientUnaryCall;
    public sendFCM(request: sc_push_service_pb.PushRequestFCM, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_push_service_pb.PushResponse) => void): grpc.ClientUnaryCall;
    public sendAPN(request: sc_push_service_pb.PushRequestAPN, callback: (error: grpc.ServiceError | null, response: sc_push_service_pb.PushResponse) => void): grpc.ClientUnaryCall;
    public sendAPN(request: sc_push_service_pb.PushRequestAPN, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_push_service_pb.PushResponse) => void): grpc.ClientUnaryCall;
    public sendAPN(request: sc_push_service_pb.PushRequestAPN, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_push_service_pb.PushResponse) => void): grpc.ClientUnaryCall;
}
