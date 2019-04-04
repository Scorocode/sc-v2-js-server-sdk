// package: sc_push
// file: sc_push/manager.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as sc_push_manager_pb from "../sc_push/manager_pb";
import * as base_base_pb from "../base/base_pb";

interface IManagementService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    updateSettignsFCM: IManagementService_IUpdateSettignsFCM;
    updateSettignsAPN: IManagementService_IUpdateSettignsAPN;
}

interface IManagementService_IUpdateSettignsFCM extends grpc.MethodDefinition<sc_push_manager_pb.Settings, base_base_pb.SimpleResponse> {
    path: string; // "/sc_push.Management/UpdateSettignsFCM"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_push_manager_pb.Settings>;
    requestDeserialize: grpc.deserialize<sc_push_manager_pb.Settings>;
    responseSerialize: grpc.serialize<base_base_pb.SimpleResponse>;
    responseDeserialize: grpc.deserialize<base_base_pb.SimpleResponse>;
}
interface IManagementService_IUpdateSettignsAPN extends grpc.MethodDefinition<sc_push_manager_pb.Settings, base_base_pb.SimpleResponse> {
    path: string; // "/sc_push.Management/UpdateSettignsAPN"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_push_manager_pb.Settings>;
    requestDeserialize: grpc.deserialize<sc_push_manager_pb.Settings>;
    responseSerialize: grpc.serialize<base_base_pb.SimpleResponse>;
    responseDeserialize: grpc.deserialize<base_base_pb.SimpleResponse>;
}

export const ManagementService: IManagementService;

export interface IManagementServer {
    updateSettignsFCM: grpc.handleUnaryCall<sc_push_manager_pb.Settings, base_base_pb.SimpleResponse>;
    updateSettignsAPN: grpc.handleUnaryCall<sc_push_manager_pb.Settings, base_base_pb.SimpleResponse>;
}

export interface IManagementClient {
    updateSettignsFCM(request: sc_push_manager_pb.Settings, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    updateSettignsFCM(request: sc_push_manager_pb.Settings, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    updateSettignsFCM(request: sc_push_manager_pb.Settings, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    updateSettignsAPN(request: sc_push_manager_pb.Settings, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    updateSettignsAPN(request: sc_push_manager_pb.Settings, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    updateSettignsAPN(request: sc_push_manager_pb.Settings, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
}

export class ManagementClient extends grpc.Client implements IManagementClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public updateSettignsFCM(request: sc_push_manager_pb.Settings, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    public updateSettignsFCM(request: sc_push_manager_pb.Settings, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    public updateSettignsFCM(request: sc_push_manager_pb.Settings, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    public updateSettignsAPN(request: sc_push_manager_pb.Settings, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    public updateSettignsAPN(request: sc_push_manager_pb.Settings, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    public updateSettignsAPN(request: sc_push_manager_pb.Settings, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
}
