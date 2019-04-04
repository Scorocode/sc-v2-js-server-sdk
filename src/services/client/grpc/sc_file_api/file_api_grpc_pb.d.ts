// package: sc_file_api
// file: sc_file_api/file_api.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as sc_file_api_file_api_pb from "../sc_file_api/file_api_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IFileApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    folderCreate: IFileApiService_IFolderCreate;
    folderDelete: IFileApiService_IFolderDelete;
    folderRename: IFileApiService_IFolderRename;
    folderRead: IFileApiService_IFolderRead;
    fileUpload: IFileApiService_IFileUpload;
    fileDownload: IFileApiService_IFileDownload;
    fileRename: IFileApiService_IFileRename;
    fileDelete: IFileApiService_IFileDelete;
}

interface IFileApiService_IFolderCreate extends grpc.MethodDefinition<sc_file_api_file_api_pb.SelectRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_file_api.FileApi/FolderCreate"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_file_api_file_api_pb.SelectRequest>;
    requestDeserialize: grpc.deserialize<sc_file_api_file_api_pb.SelectRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IFileApiService_IFolderDelete extends grpc.MethodDefinition<sc_file_api_file_api_pb.SelectRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_file_api.FileApi/FolderDelete"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_file_api_file_api_pb.SelectRequest>;
    requestDeserialize: grpc.deserialize<sc_file_api_file_api_pb.SelectRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IFileApiService_IFolderRename extends grpc.MethodDefinition<sc_file_api_file_api_pb.RenameRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_file_api.FileApi/FolderRename"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_file_api_file_api_pb.RenameRequest>;
    requestDeserialize: grpc.deserialize<sc_file_api_file_api_pb.RenameRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IFileApiService_IFolderRead extends grpc.MethodDefinition<sc_file_api_file_api_pb.SelectRequest, sc_file_api_file_api_pb.FolderInfo> {
    path: string; // "/sc_file_api.FileApi/FolderRead"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_file_api_file_api_pb.SelectRequest>;
    requestDeserialize: grpc.deserialize<sc_file_api_file_api_pb.SelectRequest>;
    responseSerialize: grpc.serialize<sc_file_api_file_api_pb.FolderInfo>;
    responseDeserialize: grpc.deserialize<sc_file_api_file_api_pb.FolderInfo>;
}
interface IFileApiService_IFileUpload extends grpc.MethodDefinition<sc_file_api_file_api_pb.UploadRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_file_api.FileApi/FileUpload"
    requestStream: boolean; // true
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_file_api_file_api_pb.UploadRequest>;
    requestDeserialize: grpc.deserialize<sc_file_api_file_api_pb.UploadRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IFileApiService_IFileDownload extends grpc.MethodDefinition<sc_file_api_file_api_pb.SelectRequest, sc_file_api_file_api_pb.File> {
    path: string; // "/sc_file_api.FileApi/FileDownload"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<sc_file_api_file_api_pb.SelectRequest>;
    requestDeserialize: grpc.deserialize<sc_file_api_file_api_pb.SelectRequest>;
    responseSerialize: grpc.serialize<sc_file_api_file_api_pb.File>;
    responseDeserialize: grpc.deserialize<sc_file_api_file_api_pb.File>;
}
interface IFileApiService_IFileRename extends grpc.MethodDefinition<sc_file_api_file_api_pb.RenameRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_file_api.FileApi/FileRename"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_file_api_file_api_pb.RenameRequest>;
    requestDeserialize: grpc.deserialize<sc_file_api_file_api_pb.RenameRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IFileApiService_IFileDelete extends grpc.MethodDefinition<sc_file_api_file_api_pb.SelectRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_file_api.FileApi/FileDelete"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_file_api_file_api_pb.SelectRequest>;
    requestDeserialize: grpc.deserialize<sc_file_api_file_api_pb.SelectRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const FileApiService: IFileApiService;

export interface IFileApiServer {
    folderCreate: grpc.handleUnaryCall<sc_file_api_file_api_pb.SelectRequest, google_protobuf_empty_pb.Empty>;
    folderDelete: grpc.handleUnaryCall<sc_file_api_file_api_pb.SelectRequest, google_protobuf_empty_pb.Empty>;
    folderRename: grpc.handleUnaryCall<sc_file_api_file_api_pb.RenameRequest, google_protobuf_empty_pb.Empty>;
    folderRead: grpc.handleUnaryCall<sc_file_api_file_api_pb.SelectRequest, sc_file_api_file_api_pb.FolderInfo>;
    fileUpload: grpc.handleClientStreamingCall<sc_file_api_file_api_pb.UploadRequest, google_protobuf_empty_pb.Empty>;
    fileDownload: grpc.handleServerStreamingCall<sc_file_api_file_api_pb.SelectRequest, sc_file_api_file_api_pb.File>;
    fileRename: grpc.handleUnaryCall<sc_file_api_file_api_pb.RenameRequest, google_protobuf_empty_pb.Empty>;
    fileDelete: grpc.handleUnaryCall<sc_file_api_file_api_pb.SelectRequest, google_protobuf_empty_pb.Empty>;
}

export interface IFileApiClient {
    folderCreate(request: sc_file_api_file_api_pb.SelectRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    folderCreate(request: sc_file_api_file_api_pb.SelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    folderCreate(request: sc_file_api_file_api_pb.SelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    folderDelete(request: sc_file_api_file_api_pb.SelectRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    folderDelete(request: sc_file_api_file_api_pb.SelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    folderDelete(request: sc_file_api_file_api_pb.SelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    folderRename(request: sc_file_api_file_api_pb.RenameRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    folderRename(request: sc_file_api_file_api_pb.RenameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    folderRename(request: sc_file_api_file_api_pb.RenameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    folderRead(request: sc_file_api_file_api_pb.SelectRequest, callback: (error: grpc.ServiceError | null, response: sc_file_api_file_api_pb.FolderInfo) => void): grpc.ClientUnaryCall;
    folderRead(request: sc_file_api_file_api_pb.SelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_file_api_file_api_pb.FolderInfo) => void): grpc.ClientUnaryCall;
    folderRead(request: sc_file_api_file_api_pb.SelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_file_api_file_api_pb.FolderInfo) => void): grpc.ClientUnaryCall;
    fileUpload(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sc_file_api_file_api_pb.UploadRequest>;
    fileUpload(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sc_file_api_file_api_pb.UploadRequest>;
    fileUpload(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sc_file_api_file_api_pb.UploadRequest>;
    fileUpload(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sc_file_api_file_api_pb.UploadRequest>;
    fileDownload(request: sc_file_api_file_api_pb.SelectRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sc_file_api_file_api_pb.File>;
    fileDownload(request: sc_file_api_file_api_pb.SelectRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sc_file_api_file_api_pb.File>;
    fileRename(request: sc_file_api_file_api_pb.RenameRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    fileRename(request: sc_file_api_file_api_pb.RenameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    fileRename(request: sc_file_api_file_api_pb.RenameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    fileDelete(request: sc_file_api_file_api_pb.SelectRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    fileDelete(request: sc_file_api_file_api_pb.SelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    fileDelete(request: sc_file_api_file_api_pb.SelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class FileApiClient extends grpc.Client implements IFileApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public folderCreate(request: sc_file_api_file_api_pb.SelectRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public folderCreate(request: sc_file_api_file_api_pb.SelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public folderCreate(request: sc_file_api_file_api_pb.SelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public folderDelete(request: sc_file_api_file_api_pb.SelectRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public folderDelete(request: sc_file_api_file_api_pb.SelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public folderDelete(request: sc_file_api_file_api_pb.SelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public folderRename(request: sc_file_api_file_api_pb.RenameRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public folderRename(request: sc_file_api_file_api_pb.RenameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public folderRename(request: sc_file_api_file_api_pb.RenameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public folderRead(request: sc_file_api_file_api_pb.SelectRequest, callback: (error: grpc.ServiceError | null, response: sc_file_api_file_api_pb.FolderInfo) => void): grpc.ClientUnaryCall;
    public folderRead(request: sc_file_api_file_api_pb.SelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sc_file_api_file_api_pb.FolderInfo) => void): grpc.ClientUnaryCall;
    public folderRead(request: sc_file_api_file_api_pb.SelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sc_file_api_file_api_pb.FolderInfo) => void): grpc.ClientUnaryCall;
    public fileUpload(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sc_file_api_file_api_pb.UploadRequest>;
    public fileUpload(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sc_file_api_file_api_pb.UploadRequest>;
    public fileUpload(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sc_file_api_file_api_pb.UploadRequest>;
    public fileUpload(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sc_file_api_file_api_pb.UploadRequest>;
    public fileDownload(request: sc_file_api_file_api_pb.SelectRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sc_file_api_file_api_pb.File>;
    public fileDownload(request: sc_file_api_file_api_pb.SelectRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sc_file_api_file_api_pb.File>;
    public fileRename(request: sc_file_api_file_api_pb.RenameRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public fileRename(request: sc_file_api_file_api_pb.RenameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public fileRename(request: sc_file_api_file_api_pb.RenameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public fileDelete(request: sc_file_api_file_api_pb.SelectRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public fileDelete(request: sc_file_api_file_api_pb.SelectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public fileDelete(request: sc_file_api_file_api_pb.SelectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
