// package: sc_db_api
// file: sc_db_api/db_manager_api.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as sc_db_api_db_manager_api_pb from "../sc_db_api/db_manager_api_pb";
// "../github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as sc_db_api_db_meta_common_pb from "../sc_db_api/db_meta_common_pb";

interface IServerManagerApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getDatabases: IServerManagerApiService_IGetDatabases;
    getDatabase: IServerManagerApiService_IGetDatabase;
    createDatabase: IServerManagerApiService_ICreateDatabase;
    dropDatabase: IServerManagerApiService_IDropDatabase;
    getSchemas: IServerManagerApiService_IGetSchemas;
    getSchema: IServerManagerApiService_IGetSchema;
    getSchemaCollections: IServerManagerApiService_IGetSchemaCollections;
    updateSchemaCollection: IServerManagerApiService_IUpdateSchemaCollection;
    getCollections: IServerManagerApiService_IGetCollections;
    getCollection: IServerManagerApiService_IGetCollection;
    executeDdl: IServerManagerApiService_IExecuteDdl;
    getDatabaseLog: IServerManagerApiService_IGetDatabaseLog;
}

interface IServerManagerApiService_IGetDatabases extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, sc_db_api_db_manager_api_pb.GetDatabasesResponse> {
    path: string; // "/sc_db_api.ServerManagerApi/GetDatabases"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<sc_db_api_db_manager_api_pb.GetDatabasesResponse>;
    responseDeserialize: grpc.deserialize<sc_db_api_db_manager_api_pb.GetDatabasesResponse>;
}
interface IServerManagerApiService_IGetDatabase extends grpc.MethodDefinition<sc_db_api_db_manager_api_pb.GetDatabaseRequest, sc_db_api_db_manager_api_pb.Database> {
    path: string; // "/sc_db_api.ServerManagerApi/GetDatabase"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_db_api_db_manager_api_pb.GetDatabaseRequest>;
    requestDeserialize: grpc.deserialize<sc_db_api_db_manager_api_pb.GetDatabaseRequest>;
    responseSerialize: grpc.serialize<sc_db_api_db_manager_api_pb.Database>;
    responseDeserialize: grpc.deserialize<sc_db_api_db_manager_api_pb.Database>;
}
interface IServerManagerApiService_ICreateDatabase extends grpc.MethodDefinition<sc_db_api_db_manager_api_pb.Database, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_db_api.ServerManagerApi/CreateDatabase"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_db_api_db_manager_api_pb.Database>;
    requestDeserialize: grpc.deserialize<sc_db_api_db_manager_api_pb.Database>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IServerManagerApiService_IDropDatabase extends grpc.MethodDefinition<sc_db_api_db_manager_api_pb.DropDatabaseRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_db_api.ServerManagerApi/DropDatabase"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_db_api_db_manager_api_pb.DropDatabaseRequest>;
    requestDeserialize: grpc.deserialize<sc_db_api_db_manager_api_pb.DropDatabaseRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IServerManagerApiService_IGetSchemas extends grpc.MethodDefinition<sc_db_api_db_manager_api_pb.GetSchemasRequest, sc_db_api_db_manager_api_pb.GetSchemasResponse> {
    path: string; // "/sc_db_api.ServerManagerApi/GetSchemas"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_db_api_db_manager_api_pb.GetSchemasRequest>;
    requestDeserialize: grpc.deserialize<sc_db_api_db_manager_api_pb.GetSchemasRequest>;
    responseSerialize: grpc.serialize<sc_db_api_db_manager_api_pb.GetSchemasResponse>;
    responseDeserialize: grpc.deserialize<sc_db_api_db_manager_api_pb.GetSchemasResponse>;
}
interface IServerManagerApiService_IGetSchema extends grpc.MethodDefinition<sc_db_api_db_manager_api_pb.GetSchemaRequest, sc_db_api_db_meta_common_pb.Schema> {
    path: string; // "/sc_db_api.ServerManagerApi/GetSchema"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_db_api_db_manager_api_pb.GetSchemaRequest>;
    requestDeserialize: grpc.deserialize<sc_db_api_db_manager_api_pb.GetSchemaRequest>;
    responseSerialize: grpc.serialize<sc_db_api_db_meta_common_pb.Schema>;
    responseDeserialize: grpc.deserialize<sc_db_api_db_meta_common_pb.Schema>;
}
interface IServerManagerApiService_IGetSchemaCollections extends grpc.MethodDefinition<sc_db_api_db_manager_api_pb.GetSchemaCollectionsRequest, sc_db_api_db_manager_api_pb.GetSchemaCollectionsResponse> {
    path: string; // "/sc_db_api.ServerManagerApi/GetSchemaCollections"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_db_api_db_manager_api_pb.GetSchemaCollectionsRequest>;
    requestDeserialize: grpc.deserialize<sc_db_api_db_manager_api_pb.GetSchemaCollectionsRequest>;
    responseSerialize: grpc.serialize<sc_db_api_db_manager_api_pb.GetSchemaCollectionsResponse>;
    responseDeserialize: grpc.deserialize<sc_db_api_db_manager_api_pb.GetSchemaCollectionsResponse>;
}
interface IServerManagerApiService_IUpdateSchemaCollection extends grpc.MethodDefinition<sc_db_api_db_manager_api_pb.UpdateSchemaCollectionRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_db_api.ServerManagerApi/UpdateSchemaCollection"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_db_api_db_manager_api_pb.UpdateSchemaCollectionRequest>;
    requestDeserialize: grpc.deserialize<sc_db_api_db_manager_api_pb.UpdateSchemaCollectionRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IServerManagerApiService_IGetCollections extends grpc.MethodDefinition<sc_db_api_db_manager_api_pb.GetCollectionsRequest, sc_db_api_db_manager_api_pb.GetCollectionsResponse> {
    path: string; // "/sc_db_api.ServerManagerApi/GetCollections"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_db_api_db_manager_api_pb.GetCollectionsRequest>;
    requestDeserialize: grpc.deserialize<sc_db_api_db_manager_api_pb.GetCollectionsRequest>;
    responseSerialize: grpc.serialize<sc_db_api_db_manager_api_pb.GetCollectionsResponse>;
    responseDeserialize: grpc.deserialize<sc_db_api_db_manager_api_pb.GetCollectionsResponse>;
}
interface IServerManagerApiService_IGetCollection extends grpc.MethodDefinition<sc_db_api_db_manager_api_pb.GetCollectionRequest, sc_db_api_db_manager_api_pb.CollectionInfo> {
    path: string; // "/sc_db_api.ServerManagerApi/GetCollection"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_db_api_db_manager_api_pb.GetCollectionRequest>;
    requestDeserialize: grpc.deserialize<sc_db_api_db_manager_api_pb.GetCollectionRequest>;
    responseSerialize: grpc.serialize<sc_db_api_db_manager_api_pb.CollectionInfo>;
    responseDeserialize: grpc.deserialize<sc_db_api_db_manager_api_pb.CollectionInfo>;
}
interface IServerManagerApiService_IExecuteDdl extends grpc.MethodDefinition<sc_db_api_db_manager_api_pb.ExecuteDdlRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_db_api.ServerManagerApi/ExecuteDdl"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_db_api_db_manager_api_pb.ExecuteDdlRequest>;
    requestDeserialize: grpc.deserialize<sc_db_api_db_manager_api_pb.ExecuteDdlRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IServerManagerApiService_IGetDatabaseLog extends grpc.MethodDefinition<sc_db_api_db_manager_api_pb.GetDatabaseLogRequest, sc_db_api_db_manager_api_pb.GetDatabaseLogResponse> {
    path: string; // "/sc_db_api.ServerManagerApi/GetDatabaseLog"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_db_api_db_manager_api_pb.GetDatabaseLogRequest>;
    requestDeserialize: grpc.deserialize<sc_db_api_db_manager_api_pb.GetDatabaseLogRequest>;
    responseSerialize: grpc.serialize<sc_db_api_db_manager_api_pb.GetDatabaseLogResponse>;
    responseDeserialize: grpc.deserialize<sc_db_api_db_manager_api_pb.GetDatabaseLogResponse>;
}

export const ServerManagerApiService: IServerManagerApiService;

export interface IServerManagerApiServer {
    getDatabases: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, sc_db_api_db_manager_api_pb.GetDatabasesResponse>;
    getDatabase: grpc.handleUnaryCall<sc_db_api_db_manager_api_pb.GetDatabaseRequest, sc_db_api_db_manager_api_pb.Database>;
    createDatabase: grpc.handleUnaryCall<sc_db_api_db_manager_api_pb.Database, google_protobuf_empty_pb.Empty>;
    dropDatabase: grpc.handleUnaryCall<sc_db_api_db_manager_api_pb.DropDatabaseRequest, google_protobuf_empty_pb.Empty>;
    getSchemas: grpc.handleUnaryCall<sc_db_api_db_manager_api_pb.GetSchemasRequest, sc_db_api_db_manager_api_pb.GetSchemasResponse>;
    getSchema: grpc.handleUnaryCall<sc_db_api_db_manager_api_pb.GetSchemaRequest, sc_db_api_db_meta_common_pb.Schema>;
    getSchemaCollections: grpc.handleUnaryCall<sc_db_api_db_manager_api_pb.GetSchemaCollectionsRequest, sc_db_api_db_manager_api_pb.GetSchemaCollectionsResponse>;
    updateSchemaCollection: grpc.handleUnaryCall<sc_db_api_db_manager_api_pb.UpdateSchemaCollectionRequest, google_protobuf_empty_pb.Empty>;
    getCollections: grpc.handleUnaryCall<sc_db_api_db_manager_api_pb.GetCollectionsRequest, sc_db_api_db_manager_api_pb.GetCollectionsResponse>;
    getCollection: grpc.handleUnaryCall<sc_db_api_db_manager_api_pb.GetCollectionRequest, sc_db_api_db_manager_api_pb.CollectionInfo>;
    executeDdl: grpc.handleUnaryCall<sc_db_api_db_manager_api_pb.ExecuteDdlRequest, google_protobuf_empty_pb.Empty>;
    getDatabaseLog: grpc.handleUnaryCall<sc_db_api_db_manager_api_pb.GetDatabaseLogRequest, sc_db_api_db_manager_api_pb.GetDatabaseLogResponse>;
}

export interface IServerManagerApiClient {
    getDatabases(request: google_protobuf_empty_pb.Empty, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetDatabasesResponse) => void): grpc.ClientUnaryCall;
    getDatabases(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetDatabasesResponse) => void): grpc.ClientUnaryCall;
    getDatabases(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetDatabasesResponse) => void): grpc.ClientUnaryCall;
    getDatabase(request: sc_db_api_db_manager_api_pb.GetDatabaseRequest, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.Database) => void): grpc.ClientUnaryCall;
    getDatabase(request: sc_db_api_db_manager_api_pb.GetDatabaseRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.Database) => void): grpc.ClientUnaryCall;
    getDatabase(request: sc_db_api_db_manager_api_pb.GetDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.Database) => void): grpc.ClientUnaryCall;
    createDatabase(request: sc_db_api_db_manager_api_pb.Database, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createDatabase(request: sc_db_api_db_manager_api_pb.Database, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createDatabase(request: sc_db_api_db_manager_api_pb.Database, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    dropDatabase(request: sc_db_api_db_manager_api_pb.DropDatabaseRequest, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    dropDatabase(request: sc_db_api_db_manager_api_pb.DropDatabaseRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    dropDatabase(request: sc_db_api_db_manager_api_pb.DropDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getSchemas(request: sc_db_api_db_manager_api_pb.GetSchemasRequest, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetSchemasResponse) => void): grpc.ClientUnaryCall;
    getSchemas(request: sc_db_api_db_manager_api_pb.GetSchemasRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetSchemasResponse) => void): grpc.ClientUnaryCall;
    getSchemas(request: sc_db_api_db_manager_api_pb.GetSchemasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetSchemasResponse) => void): grpc.ClientUnaryCall;
    getSchema(request: sc_db_api_db_manager_api_pb.GetSchemaRequest, callback: (error: Error | null, response: sc_db_api_db_meta_common_pb.Schema) => void): grpc.ClientUnaryCall;
    getSchema(request: sc_db_api_db_manager_api_pb.GetSchemaRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_db_api_db_meta_common_pb.Schema) => void): grpc.ClientUnaryCall;
    getSchema(request: sc_db_api_db_manager_api_pb.GetSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_db_api_db_meta_common_pb.Schema) => void): grpc.ClientUnaryCall;
    getSchemaCollections(request: sc_db_api_db_manager_api_pb.GetSchemaCollectionsRequest, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetSchemaCollectionsResponse) => void): grpc.ClientUnaryCall;
    getSchemaCollections(request: sc_db_api_db_manager_api_pb.GetSchemaCollectionsRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetSchemaCollectionsResponse) => void): grpc.ClientUnaryCall;
    getSchemaCollections(request: sc_db_api_db_manager_api_pb.GetSchemaCollectionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetSchemaCollectionsResponse) => void): grpc.ClientUnaryCall;
    updateSchemaCollection(request: sc_db_api_db_manager_api_pb.UpdateSchemaCollectionRequest, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateSchemaCollection(request: sc_db_api_db_manager_api_pb.UpdateSchemaCollectionRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateSchemaCollection(request: sc_db_api_db_manager_api_pb.UpdateSchemaCollectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getCollections(request: sc_db_api_db_manager_api_pb.GetCollectionsRequest, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetCollectionsResponse) => void): grpc.ClientUnaryCall;
    getCollections(request: sc_db_api_db_manager_api_pb.GetCollectionsRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetCollectionsResponse) => void): grpc.ClientUnaryCall;
    getCollections(request: sc_db_api_db_manager_api_pb.GetCollectionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetCollectionsResponse) => void): grpc.ClientUnaryCall;
    getCollection(request: sc_db_api_db_manager_api_pb.GetCollectionRequest, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.CollectionInfo) => void): grpc.ClientUnaryCall;
    getCollection(request: sc_db_api_db_manager_api_pb.GetCollectionRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.CollectionInfo) => void): grpc.ClientUnaryCall;
    getCollection(request: sc_db_api_db_manager_api_pb.GetCollectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.CollectionInfo) => void): grpc.ClientUnaryCall;
    executeDdl(request: sc_db_api_db_manager_api_pb.ExecuteDdlRequest, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    executeDdl(request: sc_db_api_db_manager_api_pb.ExecuteDdlRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    executeDdl(request: sc_db_api_db_manager_api_pb.ExecuteDdlRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getDatabaseLog(request: sc_db_api_db_manager_api_pb.GetDatabaseLogRequest, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetDatabaseLogResponse) => void): grpc.ClientUnaryCall;
    getDatabaseLog(request: sc_db_api_db_manager_api_pb.GetDatabaseLogRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetDatabaseLogResponse) => void): grpc.ClientUnaryCall;
    getDatabaseLog(request: sc_db_api_db_manager_api_pb.GetDatabaseLogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetDatabaseLogResponse) => void): grpc.ClientUnaryCall;
}

export class ServerManagerApiClient extends grpc.Client implements IServerManagerApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getDatabases(request: google_protobuf_empty_pb.Empty, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetDatabasesResponse) => void): grpc.ClientUnaryCall;
    public getDatabases(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetDatabasesResponse) => void): grpc.ClientUnaryCall;
    public getDatabases(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetDatabasesResponse) => void): grpc.ClientUnaryCall;
    public getDatabase(request: sc_db_api_db_manager_api_pb.GetDatabaseRequest, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.Database) => void): grpc.ClientUnaryCall;
    public getDatabase(request: sc_db_api_db_manager_api_pb.GetDatabaseRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.Database) => void): grpc.ClientUnaryCall;
    public getDatabase(request: sc_db_api_db_manager_api_pb.GetDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.Database) => void): grpc.ClientUnaryCall;
    public createDatabase(request: sc_db_api_db_manager_api_pb.Database, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createDatabase(request: sc_db_api_db_manager_api_pb.Database, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createDatabase(request: sc_db_api_db_manager_api_pb.Database, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public dropDatabase(request: sc_db_api_db_manager_api_pb.DropDatabaseRequest, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public dropDatabase(request: sc_db_api_db_manager_api_pb.DropDatabaseRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public dropDatabase(request: sc_db_api_db_manager_api_pb.DropDatabaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getSchemas(request: sc_db_api_db_manager_api_pb.GetSchemasRequest, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetSchemasResponse) => void): grpc.ClientUnaryCall;
    public getSchemas(request: sc_db_api_db_manager_api_pb.GetSchemasRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetSchemasResponse) => void): grpc.ClientUnaryCall;
    public getSchemas(request: sc_db_api_db_manager_api_pb.GetSchemasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetSchemasResponse) => void): grpc.ClientUnaryCall;
    public getSchema(request: sc_db_api_db_manager_api_pb.GetSchemaRequest, callback: (error: Error | null, response: sc_db_api_db_meta_common_pb.Schema) => void): grpc.ClientUnaryCall;
    public getSchema(request: sc_db_api_db_manager_api_pb.GetSchemaRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_db_api_db_meta_common_pb.Schema) => void): grpc.ClientUnaryCall;
    public getSchema(request: sc_db_api_db_manager_api_pb.GetSchemaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_db_api_db_meta_common_pb.Schema) => void): grpc.ClientUnaryCall;
    public getSchemaCollections(request: sc_db_api_db_manager_api_pb.GetSchemaCollectionsRequest, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetSchemaCollectionsResponse) => void): grpc.ClientUnaryCall;
    public getSchemaCollections(request: sc_db_api_db_manager_api_pb.GetSchemaCollectionsRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetSchemaCollectionsResponse) => void): grpc.ClientUnaryCall;
    public getSchemaCollections(request: sc_db_api_db_manager_api_pb.GetSchemaCollectionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetSchemaCollectionsResponse) => void): grpc.ClientUnaryCall;
    public updateSchemaCollection(request: sc_db_api_db_manager_api_pb.UpdateSchemaCollectionRequest, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateSchemaCollection(request: sc_db_api_db_manager_api_pb.UpdateSchemaCollectionRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateSchemaCollection(request: sc_db_api_db_manager_api_pb.UpdateSchemaCollectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getCollections(request: sc_db_api_db_manager_api_pb.GetCollectionsRequest, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetCollectionsResponse) => void): grpc.ClientUnaryCall;
    public getCollections(request: sc_db_api_db_manager_api_pb.GetCollectionsRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetCollectionsResponse) => void): grpc.ClientUnaryCall;
    public getCollections(request: sc_db_api_db_manager_api_pb.GetCollectionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetCollectionsResponse) => void): grpc.ClientUnaryCall;
    public getCollection(request: sc_db_api_db_manager_api_pb.GetCollectionRequest, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.CollectionInfo) => void): grpc.ClientUnaryCall;
    public getCollection(request: sc_db_api_db_manager_api_pb.GetCollectionRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.CollectionInfo) => void): grpc.ClientUnaryCall;
    public getCollection(request: sc_db_api_db_manager_api_pb.GetCollectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.CollectionInfo) => void): grpc.ClientUnaryCall;
    public executeDdl(request: sc_db_api_db_manager_api_pb.ExecuteDdlRequest, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public executeDdl(request: sc_db_api_db_manager_api_pb.ExecuteDdlRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public executeDdl(request: sc_db_api_db_manager_api_pb.ExecuteDdlRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getDatabaseLog(request: sc_db_api_db_manager_api_pb.GetDatabaseLogRequest, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetDatabaseLogResponse) => void): grpc.ClientUnaryCall;
    public getDatabaseLog(request: sc_db_api_db_manager_api_pb.GetDatabaseLogRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetDatabaseLogResponse) => void): grpc.ClientUnaryCall;
    public getDatabaseLog(request: sc_db_api_db_manager_api_pb.GetDatabaseLogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_db_api_db_manager_api_pb.GetDatabaseLogResponse) => void): grpc.ClientUnaryCall;
}
