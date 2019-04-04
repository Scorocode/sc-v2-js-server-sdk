// package: sc_broker_node_api
// file: sc_broker_node_api/manager.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as sc_broker_node_api_manager_pb from "../sc_broker_node_api/manager_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IManagerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    folderCreate: IManagerService_IFolderCreate;
    folderDelete: IManagerService_IFolderDelete;
    folderRename: IManagerService_IFolderRename;
    folderRead: IManagerService_IFolderRead;
    scriptCreate: IManagerService_IScriptCreate;
    scriptUpdate: IManagerService_IScriptUpdate;
    scriptRename: IManagerService_IScriptRename;
    scriptDelete: IManagerService_IScriptDelete;
    scriptRead: IManagerService_IScriptRead;
    cronSet: IManagerService_ICronSet;
    cronRead: IManagerService_ICronRead;
    processes: IManagerService_IProcesses;
    webServerRun: IManagerService_IWebServerRun;
    webServerStop: IManagerService_IWebServerStop;
    asyncScriptRun: IManagerService_IAsyncScriptRun;
    asyncScriptStop: IManagerService_IAsyncScriptStop;
    dependenciesUpdate: IManagerService_IDependenciesUpdate;
    dependenciesDeleteDir: IManagerService_IDependenciesDeleteDir;
    pull: IManagerService_IPull;
    push: IManagerService_IPush;
}

interface IManagerService_IFolderCreate extends grpc.MethodDefinition<sc_broker_node_api_manager_pb.SelectRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_broker_node_api.Manager/FolderCreate"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_broker_node_api_manager_pb.SelectRequest>;
    requestDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.SelectRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IManagerService_IFolderDelete extends grpc.MethodDefinition<sc_broker_node_api_manager_pb.SelectRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_broker_node_api.Manager/FolderDelete"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_broker_node_api_manager_pb.SelectRequest>;
    requestDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.SelectRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IManagerService_IFolderRename extends grpc.MethodDefinition<sc_broker_node_api_manager_pb.RenameRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_broker_node_api.Manager/FolderRename"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_broker_node_api_manager_pb.RenameRequest>;
    requestDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.RenameRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IManagerService_IFolderRead extends grpc.MethodDefinition<sc_broker_node_api_manager_pb.SelectRequest, sc_broker_node_api_manager_pb.FolderInfo> {
    path: string; // "/sc_broker_node_api.Manager/FolderRead"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_broker_node_api_manager_pb.SelectRequest>;
    requestDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.SelectRequest>;
    responseSerialize: grpc.serialize<sc_broker_node_api_manager_pb.FolderInfo>;
    responseDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.FolderInfo>;
}
interface IManagerService_IScriptCreate extends grpc.MethodDefinition<sc_broker_node_api_manager_pb.SelectRequest, sc_broker_node_api_manager_pb.Script> {
    path: string; // "/sc_broker_node_api.Manager/ScriptCreate"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_broker_node_api_manager_pb.SelectRequest>;
    requestDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.SelectRequest>;
    responseSerialize: grpc.serialize<sc_broker_node_api_manager_pb.Script>;
    responseDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.Script>;
}
interface IManagerService_IScriptUpdate extends grpc.MethodDefinition<sc_broker_node_api_manager_pb.Script, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_broker_node_api.Manager/ScriptUpdate"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_broker_node_api_manager_pb.Script>;
    requestDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.Script>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IManagerService_IScriptRename extends grpc.MethodDefinition<sc_broker_node_api_manager_pb.RenameRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_broker_node_api.Manager/ScriptRename"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_broker_node_api_manager_pb.RenameRequest>;
    requestDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.RenameRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IManagerService_IScriptDelete extends grpc.MethodDefinition<sc_broker_node_api_manager_pb.SelectRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_broker_node_api.Manager/ScriptDelete"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_broker_node_api_manager_pb.SelectRequest>;
    requestDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.SelectRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IManagerService_IScriptRead extends grpc.MethodDefinition<sc_broker_node_api_manager_pb.SelectRequest, sc_broker_node_api_manager_pb.Script> {
    path: string; // "/sc_broker_node_api.Manager/ScriptRead"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_broker_node_api_manager_pb.SelectRequest>;
    requestDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.SelectRequest>;
    responseSerialize: grpc.serialize<sc_broker_node_api_manager_pb.Script>;
    responseDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.Script>;
}
interface IManagerService_ICronSet extends grpc.MethodDefinition<sc_broker_node_api_manager_pb.Cron, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_broker_node_api.Manager/CronSet"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_broker_node_api_manager_pb.Cron>;
    requestDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.Cron>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IManagerService_ICronRead extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, sc_broker_node_api_manager_pb.Cron> {
    path: string; // "/sc_broker_node_api.Manager/CronRead"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<sc_broker_node_api_manager_pb.Cron>;
    responseDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.Cron>;
}
interface IManagerService_IProcesses extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, sc_broker_node_api_manager_pb.ProcessList> {
    path: string; // "/sc_broker_node_api.Manager/Processes"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<sc_broker_node_api_manager_pb.ProcessList>;
    responseDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.ProcessList>;
}
interface IManagerService_IWebServerRun extends grpc.MethodDefinition<sc_broker_node_api_manager_pb.Replica, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_broker_node_api.Manager/WebServerRun"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_broker_node_api_manager_pb.Replica>;
    requestDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.Replica>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IManagerService_IWebServerStop extends grpc.MethodDefinition<sc_broker_node_api_manager_pb.Replica, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_broker_node_api.Manager/WebServerStop"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_broker_node_api_manager_pb.Replica>;
    requestDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.Replica>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IManagerService_IAsyncScriptRun extends grpc.MethodDefinition<sc_broker_node_api_manager_pb.SelectRequest, sc_broker_node_api_manager_pb.Process> {
    path: string; // "/sc_broker_node_api.Manager/AsyncScriptRun"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_broker_node_api_manager_pb.SelectRequest>;
    requestDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.SelectRequest>;
    responseSerialize: grpc.serialize<sc_broker_node_api_manager_pb.Process>;
    responseDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.Process>;
}
interface IManagerService_IAsyncScriptStop extends grpc.MethodDefinition<sc_broker_node_api_manager_pb.ProcessSelect, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_broker_node_api.Manager/AsyncScriptStop"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_broker_node_api_manager_pb.ProcessSelect>;
    requestDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.ProcessSelect>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IManagerService_IDependenciesUpdate extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_broker_node_api.Manager/DependenciesUpdate"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IManagerService_IDependenciesDeleteDir extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_broker_node_api.Manager/DependenciesDeleteDir"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IManagerService_IPull extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, sc_broker_node_api_manager_pb.Archive> {
    path: string; // "/sc_broker_node_api.Manager/Pull"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<sc_broker_node_api_manager_pb.Archive>;
    responseDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.Archive>;
}
interface IManagerService_IPush extends grpc.MethodDefinition<sc_broker_node_api_manager_pb.Archive, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_broker_node_api.Manager/Push"
    requestStream: boolean; // true
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_broker_node_api_manager_pb.Archive>;
    requestDeserialize: grpc.deserialize<sc_broker_node_api_manager_pb.Archive>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const ManagerService: IManagerService;

export interface IManagerServer {
    folderCreate: grpc.handleUnaryCall<sc_broker_node_api_manager_pb.SelectRequest, google_protobuf_empty_pb.Empty>;
    folderDelete: grpc.handleUnaryCall<sc_broker_node_api_manager_pb.SelectRequest, google_protobuf_empty_pb.Empty>;
    folderRename: grpc.handleUnaryCall<sc_broker_node_api_manager_pb.RenameRequest, google_protobuf_empty_pb.Empty>;
    folderRead: grpc.handleUnaryCall<sc_broker_node_api_manager_pb.SelectRequest, sc_broker_node_api_manager_pb.FolderInfo>;
    scriptCreate: grpc.handleUnaryCall<sc_broker_node_api_manager_pb.SelectRequest, sc_broker_node_api_manager_pb.Script>;
    scriptUpdate: grpc.handleUnaryCall<sc_broker_node_api_manager_pb.Script, google_protobuf_empty_pb.Empty>;
    scriptRename: grpc.handleUnaryCall<sc_broker_node_api_manager_pb.RenameRequest, google_protobuf_empty_pb.Empty>;
    scriptDelete: grpc.handleUnaryCall<sc_broker_node_api_manager_pb.SelectRequest, google_protobuf_empty_pb.Empty>;
    scriptRead: grpc.handleUnaryCall<sc_broker_node_api_manager_pb.SelectRequest, sc_broker_node_api_manager_pb.Script>;
    cronSet: grpc.handleUnaryCall<sc_broker_node_api_manager_pb.Cron, google_protobuf_empty_pb.Empty>;
    cronRead: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, sc_broker_node_api_manager_pb.Cron>;
    processes: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, sc_broker_node_api_manager_pb.ProcessList>;
    webServerRun: grpc.handleUnaryCall<sc_broker_node_api_manager_pb.Replica, google_protobuf_empty_pb.Empty>;
    webServerStop: grpc.handleUnaryCall<sc_broker_node_api_manager_pb.Replica, google_protobuf_empty_pb.Empty>;
    asyncScriptRun: grpc.handleUnaryCall<sc_broker_node_api_manager_pb.SelectRequest, sc_broker_node_api_manager_pb.Process>;
    asyncScriptStop: grpc.handleUnaryCall<sc_broker_node_api_manager_pb.ProcessSelect, google_protobuf_empty_pb.Empty>;
    dependenciesUpdate: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
    dependenciesDeleteDir: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
    pull: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, sc_broker_node_api_manager_pb.Archive>;
    push: grpc.handleClientStreamingCall<sc_broker_node_api_manager_pb.Archive, google_protobuf_empty_pb.Empty>;
}

export interface IManagerClient {
    folderCreate(request: sc_broker_node_api_manager_pb.SelectRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    folderCreate(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    folderCreate(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    folderDelete(request: sc_broker_node_api_manager_pb.SelectRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    folderDelete(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    folderDelete(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    folderRename(request: sc_broker_node_api_manager_pb.RenameRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    folderRename(request: sc_broker_node_api_manager_pb.RenameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    folderRename(request: sc_broker_node_api_manager_pb.RenameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    folderRead(request: sc_broker_node_api_manager_pb.SelectRequest, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.FolderInfo) => void): grpc.ClientUnaryCall;
    folderRead(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.FolderInfo) => void): grpc.ClientUnaryCall;
    folderRead(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.FolderInfo) => void): grpc.ClientUnaryCall;
    scriptCreate(request: sc_broker_node_api_manager_pb.SelectRequest, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Script) => void): grpc.ClientUnaryCall;
    scriptCreate(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Script) => void): grpc.ClientUnaryCall;
    scriptCreate(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Script) => void): grpc.ClientUnaryCall;
    scriptUpdate(request: sc_broker_node_api_manager_pb.Script, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    scriptUpdate(request: sc_broker_node_api_manager_pb.Script, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    scriptUpdate(request: sc_broker_node_api_manager_pb.Script, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    scriptRename(request: sc_broker_node_api_manager_pb.RenameRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    scriptRename(request: sc_broker_node_api_manager_pb.RenameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    scriptRename(request: sc_broker_node_api_manager_pb.RenameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    scriptDelete(request: sc_broker_node_api_manager_pb.SelectRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    scriptDelete(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    scriptDelete(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    scriptRead(request: sc_broker_node_api_manager_pb.SelectRequest, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Script) => void): grpc.ClientUnaryCall;
    scriptRead(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Script) => void): grpc.ClientUnaryCall;
    scriptRead(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Script) => void): grpc.ClientUnaryCall;
    cronSet(request: sc_broker_node_api_manager_pb.Cron, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cronSet(request: sc_broker_node_api_manager_pb.Cron, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cronSet(request: sc_broker_node_api_manager_pb.Cron, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cronRead(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Cron) => void): grpc.ClientUnaryCall;
    cronRead(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Cron) => void): grpc.ClientUnaryCall;
    cronRead(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Cron) => void): grpc.ClientUnaryCall;
    processes(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.ProcessList) => void): grpc.ClientUnaryCall;
    processes(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.ProcessList) => void): grpc.ClientUnaryCall;
    processes(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.ProcessList) => void): grpc.ClientUnaryCall;
    webServerRun(request: sc_broker_node_api_manager_pb.Replica, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    webServerRun(request: sc_broker_node_api_manager_pb.Replica, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    webServerRun(request: sc_broker_node_api_manager_pb.Replica, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    webServerStop(request: sc_broker_node_api_manager_pb.Replica, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    webServerStop(request: sc_broker_node_api_manager_pb.Replica, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    webServerStop(request: sc_broker_node_api_manager_pb.Replica, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    asyncScriptRun(request: sc_broker_node_api_manager_pb.SelectRequest, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Process) => void): grpc.ClientUnaryCall;
    asyncScriptRun(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Process) => void): grpc.ClientUnaryCall;
    asyncScriptRun(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Process) => void): grpc.ClientUnaryCall;
    asyncScriptStop(request: sc_broker_node_api_manager_pb.ProcessSelect, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    asyncScriptStop(request: sc_broker_node_api_manager_pb.ProcessSelect, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    asyncScriptStop(request: sc_broker_node_api_manager_pb.ProcessSelect, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    dependenciesUpdate(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    dependenciesUpdate(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    dependenciesUpdate(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    dependenciesDeleteDir(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    dependenciesDeleteDir(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    dependenciesDeleteDir(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    pull(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sc_broker_node_api_manager_pb.Archive>;
    pull(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sc_broker_node_api_manager_pb.Archive>;
    push(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sc_broker_node_api_manager_pb.Archive>;
    push(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sc_broker_node_api_manager_pb.Archive>;
    push(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sc_broker_node_api_manager_pb.Archive>;
    push(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sc_broker_node_api_manager_pb.Archive>;
}

export class ManagerClient extends grpc.Client implements IManagerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public folderCreate(request: sc_broker_node_api_manager_pb.SelectRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public folderCreate(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public folderCreate(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public folderDelete(request: sc_broker_node_api_manager_pb.SelectRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public folderDelete(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public folderDelete(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public folderRename(request: sc_broker_node_api_manager_pb.RenameRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public folderRename(request: sc_broker_node_api_manager_pb.RenameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public folderRename(request: sc_broker_node_api_manager_pb.RenameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public folderRead(request: sc_broker_node_api_manager_pb.SelectRequest, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.FolderInfo) => void): grpc.ClientUnaryCall;
    public folderRead(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.FolderInfo) => void): grpc.ClientUnaryCall;
    public folderRead(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.FolderInfo) => void): grpc.ClientUnaryCall;
    public scriptCreate(request: sc_broker_node_api_manager_pb.SelectRequest, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Script) => void): grpc.ClientUnaryCall;
    public scriptCreate(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Script) => void): grpc.ClientUnaryCall;
    public scriptCreate(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Script) => void): grpc.ClientUnaryCall;
    public scriptUpdate(request: sc_broker_node_api_manager_pb.Script, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public scriptUpdate(request: sc_broker_node_api_manager_pb.Script, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public scriptUpdate(request: sc_broker_node_api_manager_pb.Script, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public scriptRename(request: sc_broker_node_api_manager_pb.RenameRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public scriptRename(request: sc_broker_node_api_manager_pb.RenameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public scriptRename(request: sc_broker_node_api_manager_pb.RenameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public scriptDelete(request: sc_broker_node_api_manager_pb.SelectRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public scriptDelete(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public scriptDelete(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public scriptRead(request: sc_broker_node_api_manager_pb.SelectRequest, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Script) => void): grpc.ClientUnaryCall;
    public scriptRead(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Script) => void): grpc.ClientUnaryCall;
    public scriptRead(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Script) => void): grpc.ClientUnaryCall;
    public cronSet(request: sc_broker_node_api_manager_pb.Cron, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cronSet(request: sc_broker_node_api_manager_pb.Cron, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cronSet(request: sc_broker_node_api_manager_pb.Cron, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cronRead(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Cron) => void): grpc.ClientUnaryCall;
    public cronRead(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Cron) => void): grpc.ClientUnaryCall;
    public cronRead(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Cron) => void): grpc.ClientUnaryCall;
    public processes(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.ProcessList) => void): grpc.ClientUnaryCall;
    public processes(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.ProcessList) => void): grpc.ClientUnaryCall;
    public processes(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.ProcessList) => void): grpc.ClientUnaryCall;
    public webServerRun(request: sc_broker_node_api_manager_pb.Replica, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public webServerRun(request: sc_broker_node_api_manager_pb.Replica, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public webServerRun(request: sc_broker_node_api_manager_pb.Replica, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public webServerStop(request: sc_broker_node_api_manager_pb.Replica, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public webServerStop(request: sc_broker_node_api_manager_pb.Replica, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public webServerStop(request: sc_broker_node_api_manager_pb.Replica, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public asyncScriptRun(request: sc_broker_node_api_manager_pb.SelectRequest, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Process) => void): grpc.ClientUnaryCall;
    public asyncScriptRun(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Process) => void): grpc.ClientUnaryCall;
    public asyncScriptRun(request: sc_broker_node_api_manager_pb.SelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_broker_node_api_manager_pb.Process) => void): grpc.ClientUnaryCall;
    public asyncScriptStop(request: sc_broker_node_api_manager_pb.ProcessSelect, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public asyncScriptStop(request: sc_broker_node_api_manager_pb.ProcessSelect, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public asyncScriptStop(request: sc_broker_node_api_manager_pb.ProcessSelect, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public dependenciesUpdate(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public dependenciesUpdate(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public dependenciesUpdate(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public dependenciesDeleteDir(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public dependenciesDeleteDir(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public dependenciesDeleteDir(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public pull(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sc_broker_node_api_manager_pb.Archive>;
    public pull(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sc_broker_node_api_manager_pb.Archive>;
    public push(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sc_broker_node_api_manager_pb.Archive>;
    public push(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sc_broker_node_api_manager_pb.Archive>;
    public push(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sc_broker_node_api_manager_pb.Archive>;
    public push(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sc_broker_node_api_manager_pb.Archive>;
}
