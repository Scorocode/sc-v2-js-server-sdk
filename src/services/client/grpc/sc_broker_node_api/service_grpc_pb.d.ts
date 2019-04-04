// package: sc_broker_node_api
// file: sc_broker_node_api/service.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as sc_broker_node_api_service_pb from "../sc_broker_node_api/service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as sc_broker_node_api_manager_pb from "../sc_broker_node_api/manager_pb";

interface ISeviceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    processes: ISeviceService_IProcesses;
    dependenciesUpdate: ISeviceService_IDependenciesUpdate;
    dependenciesDeleteDir: ISeviceService_IDependenciesDeleteDir;
    webServerRun: ISeviceService_IWebServerRun;
    webServerStop: ISeviceService_IWebServerStop;
    asyncScriptRun: ISeviceService_IAsyncScriptRun;
    asyncScriptStop: ISeviceService_IAsyncScriptStop;
}

interface ISeviceService_IProcesses extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, sc_broker_node_api_manager_pb.ProcessList> {
    path: string; // "/sc_broker_node_api.Sevice/Processes"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<sc_broker_node_api_manager_pb.ProcessList>;
    responseDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.ProcessList>;
}
interface ISeviceService_IDependenciesUpdate extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_broker_node_api.Sevice/DependenciesUpdate"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ISeviceService_IDependenciesDeleteDir extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_broker_node_api.Sevice/DependenciesDeleteDir"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ISeviceService_IWebServerRun extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_broker_node_api.Sevice/WebServerRun"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ISeviceService_IWebServerStop extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_broker_node_api.Sevice/WebServerStop"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ISeviceService_IAsyncScriptRun extends grpc.MethodDefinition<sc_broker_node_api_manager_pb.SelectRequest, sc_broker_node_api_manager_pb.Process> {
    path: string; // "/sc_broker_node_api.Sevice/AsyncScriptRun"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_broker_node_api_manager_pb.SelectRequest>;
    requestDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.SelectRequest>;
    responseSerialize: grpc.serialize<sc_broker_node_api_manager_pb.Process>;
    responseDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.Process>;
}
interface ISeviceService_IAsyncScriptStop extends grpc.MethodDefinition<sc_broker_node_api_manager_pb.ProcessSelect, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_broker_node_api.Sevice/AsyncScriptStop"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_broker_node_api_manager_pb.ProcessSelect>;
    requestDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.ProcessSelect>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const SeviceService: ISeviceService;

export interface ISeviceServer {
    processes: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, sc_broker_node_api_manager_pb.ProcessList>;
    dependenciesUpdate: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
    dependenciesDeleteDir: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
    webServerRun: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
    webServerStop: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
    asyncScriptRun: grpc.handleUnaryCall<sc_broker_node_api_manager_pb.SelectRequest, sc_broker_node_api_manager_pb.Process>;
    asyncScriptStop: grpc.handleUnaryCall<sc_broker_node_api_manager_pb.ProcessSelect, google_protobuf_empty_pb.Empty>;
}

export interface ISeviceClient {
    processes(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.ProcessList) => void): grpc.ClientUnaryCall;
    processes(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.ProcessList) => void): grpc.ClientUnaryCall;
    processes(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.ProcessList) => void): grpc.ClientUnaryCall;
    dependenciesUpdate(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    dependenciesUpdate(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    dependenciesUpdate(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    dependenciesDeleteDir(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    dependenciesDeleteDir(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    dependenciesDeleteDir(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    webServerRun(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    webServerRun(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    webServerRun(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    webServerStop(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    webServerStop(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    webServerStop(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    asyncScriptRun(request: sc_broker_node_api_manager_pb.SelectRequest, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Process) => void): grpc.ClientUnaryCall;
    asyncScriptRun(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Process) => void): grpc.ClientUnaryCall;
    asyncScriptRun(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Process) => void): grpc.ClientUnaryCall;
    asyncScriptStop(request: sc_broker_node_api_manager_pb.ProcessSelect, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    asyncScriptStop(request: sc_broker_node_api_manager_pb.ProcessSelect, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    asyncScriptStop(request: sc_broker_node_api_manager_pb.ProcessSelect, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class SeviceClient extends grpc.Client implements ISeviceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public processes(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.ProcessList) => void): grpc.ClientUnaryCall;
    public processes(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.ProcessList) => void): grpc.ClientUnaryCall;
    public processes(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.ProcessList) => void): grpc.ClientUnaryCall;
    public dependenciesUpdate(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public dependenciesUpdate(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public dependenciesUpdate(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public dependenciesDeleteDir(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public dependenciesDeleteDir(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public dependenciesDeleteDir(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public webServerRun(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public webServerRun(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public webServerRun(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public webServerStop(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public webServerStop(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public webServerStop(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public asyncScriptRun(request: sc_broker_node_api_manager_pb.SelectRequest, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Process) => void): grpc.ClientUnaryCall;
    public asyncScriptRun(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Process) => void): grpc.ClientUnaryCall;
    public asyncScriptRun(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Process) => void): grpc.ClientUnaryCall;
    public asyncScriptStop(request: sc_broker_node_api_manager_pb.ProcessSelect, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public asyncScriptStop(request: sc_broker_node_api_manager_pb.ProcessSelect, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public asyncScriptStop(request: sc_broker_node_api_manager_pb.ProcessSelect, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
