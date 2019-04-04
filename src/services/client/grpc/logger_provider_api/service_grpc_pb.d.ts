// package: logger_provider_api
// file: logger_provider_api/service.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as logger_provider_api_service_pb from "../logger_provider_api/service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IProviderApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    send: IProviderApiService_ISend;
}

interface IProviderApiService_ISend extends grpc.MethodDefinition<logger_provider_api_service_pb.Message, google_protobuf_empty_pb.Empty> {
    path: string; // "/logger_provider_api.ProviderApi/Send"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<logger_provider_api_service_pb.Message>;
    requestDeserialize: grpc.deserialize<logger_provider_api_service_pb.Message>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const ProviderApiService: IProviderApiService;

export interface IProviderApiServer {
    send: grpc.handleUnaryCall<logger_provider_api_service_pb.Message, google_protobuf_empty_pb.Empty>;
}

export interface IProviderApiClient {
    send(request: logger_provider_api_service_pb.Message, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    send(request: logger_provider_api_service_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    send(request: logger_provider_api_service_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class ProviderApiClient extends grpc.Client implements IProviderApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public send(request: logger_provider_api_service_pb.Message, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public send(request: logger_provider_api_service_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public send(request: logger_provider_api_service_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
