// package: sc_db_api
// file: sc_db_api/db_api.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as sc_db_api_db_api_pb from "../sc_db_api/db_api_pb";
// "../github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as sc_db_api_common_pb from "../sc_db_api/common_pb";

interface IDatabaseApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getById: IDatabaseApiService_IGetById;
    getList: IDatabaseApiService_IGetList;
    insert: IDatabaseApiService_IInsert;
    update: IDatabaseApiService_IUpdate;
    delete: IDatabaseApiService_IDelete;
}

interface IDatabaseApiService_IGetById extends grpc.MethodDefinition<sc_db_api_db_api_pb.ByIdRequest, sc_db_api_db_api_pb.SingleRecordResponse> {
    path: string; // "/sc_db_api.DatabaseApi/GetById"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_db_api_db_api_pb.ByIdRequest>;
    requestDeserialize: grpc.deserialize<sc_db_api_db_api_pb.ByIdRequest>;
    responseSerialize: grpc.serialize<sc_db_api_db_api_pb.SingleRecordResponse>;
    responseDeserialize: grpc.deserialize<sc_db_api_db_api_pb.SingleRecordResponse>;
}
interface IDatabaseApiService_IGetList extends grpc.MethodDefinition<sc_db_api_db_api_pb.GetListRequest, sc_db_api_db_api_pb.GetListResponse> {
    path: string; // "/sc_db_api.DatabaseApi/GetList"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_db_api_db_api_pb.GetListRequest>;
    requestDeserialize: grpc.deserialize<sc_db_api_db_api_pb.GetListRequest>;
    responseSerialize: grpc.serialize<sc_db_api_db_api_pb.GetListResponse>;
    responseDeserialize: grpc.deserialize<sc_db_api_db_api_pb.GetListResponse>;
}
interface IDatabaseApiService_IInsert extends grpc.MethodDefinition<sc_db_api_db_api_pb.InsertRequest, sc_db_api_db_api_pb.SingleRecordResponse> {
    path: string; // "/sc_db_api.DatabaseApi/Insert"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_db_api_db_api_pb.InsertRequest>;
    requestDeserialize: grpc.deserialize<sc_db_api_db_api_pb.InsertRequest>;
    responseSerialize: grpc.serialize<sc_db_api_db_api_pb.SingleRecordResponse>;
    responseDeserialize: grpc.deserialize<sc_db_api_db_api_pb.SingleRecordResponse>;
}
interface IDatabaseApiService_IUpdate extends grpc.MethodDefinition<sc_db_api_db_api_pb.UpdateRequest, sc_db_api_db_api_pb.SingleRecordResponse> {
    path: string; // "/sc_db_api.DatabaseApi/Update"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_db_api_db_api_pb.UpdateRequest>;
    requestDeserialize: grpc.deserialize<sc_db_api_db_api_pb.UpdateRequest>;
    responseSerialize: grpc.serialize<sc_db_api_db_api_pb.SingleRecordResponse>;
    responseDeserialize: grpc.deserialize<sc_db_api_db_api_pb.SingleRecordResponse>;
}
interface IDatabaseApiService_IDelete extends grpc.MethodDefinition<sc_db_api_db_api_pb.ByIdRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_db_api.DatabaseApi/Delete"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_db_api_db_api_pb.ByIdRequest>;
    requestDeserialize: grpc.deserialize<sc_db_api_db_api_pb.ByIdRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const DatabaseApiService: IDatabaseApiService;

export interface IDatabaseApiServer {
    getById: grpc.handleUnaryCall<sc_db_api_db_api_pb.ByIdRequest, sc_db_api_db_api_pb.SingleRecordResponse>;
    getList: grpc.handleUnaryCall<sc_db_api_db_api_pb.GetListRequest, sc_db_api_db_api_pb.GetListResponse>;
    insert: grpc.handleUnaryCall<sc_db_api_db_api_pb.InsertRequest, sc_db_api_db_api_pb.SingleRecordResponse>;
    update: grpc.handleUnaryCall<sc_db_api_db_api_pb.UpdateRequest, sc_db_api_db_api_pb.SingleRecordResponse>;
    delete: grpc.handleUnaryCall<sc_db_api_db_api_pb.ByIdRequest, google_protobuf_empty_pb.Empty>;
}

export interface IDatabaseApiClient {
    getById(request: sc_db_api_db_api_pb.ByIdRequest, callback: (error: Error | null, response: sc_db_api_db_api_pb.SingleRecordResponse) => void): grpc.ClientUnaryCall;
    getById(request: sc_db_api_db_api_pb.ByIdRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_db_api_db_api_pb.SingleRecordResponse) => void): grpc.ClientUnaryCall;
    getById(request: sc_db_api_db_api_pb.ByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_db_api_db_api_pb.SingleRecordResponse) => void): grpc.ClientUnaryCall;
    getList(request: sc_db_api_db_api_pb.GetListRequest, callback: (error: Error | null, response: sc_db_api_db_api_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    getList(request: sc_db_api_db_api_pb.GetListRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_db_api_db_api_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    getList(request: sc_db_api_db_api_pb.GetListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_db_api_db_api_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    insert(request: sc_db_api_db_api_pb.InsertRequest, callback: (error: Error | null, response: sc_db_api_db_api_pb.SingleRecordResponse) => void): grpc.ClientUnaryCall;
    insert(request: sc_db_api_db_api_pb.InsertRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_db_api_db_api_pb.SingleRecordResponse) => void): grpc.ClientUnaryCall;
    insert(request: sc_db_api_db_api_pb.InsertRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_db_api_db_api_pb.SingleRecordResponse) => void): grpc.ClientUnaryCall;
    update(request: sc_db_api_db_api_pb.UpdateRequest, callback: (error: Error | null, response: sc_db_api_db_api_pb.SingleRecordResponse) => void): grpc.ClientUnaryCall;
    update(request: sc_db_api_db_api_pb.UpdateRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_db_api_db_api_pb.SingleRecordResponse) => void): grpc.ClientUnaryCall;
    update(request: sc_db_api_db_api_pb.UpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_db_api_db_api_pb.SingleRecordResponse) => void): grpc.ClientUnaryCall;
    delete(request: sc_db_api_db_api_pb.ByIdRequest, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    delete(request: sc_db_api_db_api_pb.ByIdRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    delete(request: sc_db_api_db_api_pb.ByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class DatabaseApiClient extends grpc.Client implements IDatabaseApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getById(request: sc_db_api_db_api_pb.ByIdRequest, callback: (error: Error | null, response: sc_db_api_db_api_pb.SingleRecordResponse) => void): grpc.ClientUnaryCall;
    public getById(request: sc_db_api_db_api_pb.ByIdRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_db_api_db_api_pb.SingleRecordResponse) => void): grpc.ClientUnaryCall;
    public getById(request: sc_db_api_db_api_pb.ByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_db_api_db_api_pb.SingleRecordResponse) => void): grpc.ClientUnaryCall;
    public getList(request: sc_db_api_db_api_pb.GetListRequest, callback: (error: Error | null, response: sc_db_api_db_api_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    public getList(request: sc_db_api_db_api_pb.GetListRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_db_api_db_api_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    public getList(request: sc_db_api_db_api_pb.GetListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_db_api_db_api_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    public insert(request: sc_db_api_db_api_pb.InsertRequest, callback: (error: Error | null, response: sc_db_api_db_api_pb.SingleRecordResponse) => void): grpc.ClientUnaryCall;
    public insert(request: sc_db_api_db_api_pb.InsertRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_db_api_db_api_pb.SingleRecordResponse) => void): grpc.ClientUnaryCall;
    public insert(request: sc_db_api_db_api_pb.InsertRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_db_api_db_api_pb.SingleRecordResponse) => void): grpc.ClientUnaryCall;
    public update(request: sc_db_api_db_api_pb.UpdateRequest, callback: (error: Error | null, response: sc_db_api_db_api_pb.SingleRecordResponse) => void): grpc.ClientUnaryCall;
    public update(request: sc_db_api_db_api_pb.UpdateRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: sc_db_api_db_api_pb.SingleRecordResponse) => void): grpc.ClientUnaryCall;
    public update(request: sc_db_api_db_api_pb.UpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: sc_db_api_db_api_pb.SingleRecordResponse) => void): grpc.ClientUnaryCall;
    public delete(request: sc_db_api_db_api_pb.ByIdRequest, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public delete(request: sc_db_api_db_api_pb.ByIdRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public delete(request: sc_db_api_db_api_pb.ByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
