// package: sc_auth
// file: sc_auth/manager.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as sc_auth_manager_pb from "../sc_auth/manager_pb";
import * as base_base_pb from "../base/base_pb";

interface IManagementService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    updateSettigns: IManagementService_IUpdateSettigns;
}

interface IManagementService_IUpdateSettigns extends grpc.MethodDefinition<sc_auth_manager_pb.Settings, base_base_pb.SimpleResponse> {
    path: string; // "/sc_auth.Management/UpdateSettigns"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_auth_manager_pb.Settings>;
    requestDeserialize: grpc.deserialize<sc_auth_manager_pb.Settings>;
    responseSerialize: grpc.serialize<base_base_pb.SimpleResponse>;
    responseDeserialize: grpc.deserialize<base_base_pb.SimpleResponse>;
}

export const ManagementService: IManagementService;

export interface IManagementServer {
    updateSettigns: grpc.handleUnaryCall<sc_auth_manager_pb.Settings, base_base_pb.SimpleResponse>;
}

export interface IManagementClient {
    updateSettigns(request: sc_auth_manager_pb.Settings, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    updateSettigns(request: sc_auth_manager_pb.Settings, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    updateSettigns(request: sc_auth_manager_pb.Settings, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
}

export class ManagementClient extends grpc.Client implements IManagementClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public updateSettigns(request: sc_auth_manager_pb.Settings, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    public updateSettigns(request: sc_auth_manager_pb.Settings, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
    public updateSettigns(request: sc_auth_manager_pb.Settings, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: base_base_pb.SimpleResponse) => void): grpc.ClientUnaryCall;
}
