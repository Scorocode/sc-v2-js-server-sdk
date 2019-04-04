// package: sc_ws_api
// file: sc_ws/ws_api.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as sc_ws_ws_api_pb from "../sc_ws/ws_api_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IWebsocketApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sendMessage: IWebsocketApiService_ISendMessage;
}

interface IWebsocketApiService_ISendMessage extends grpc.MethodDefinition<sc_ws_ws_api_pb.SendMessageRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/sc_ws_api.WebsocketApi/SendMessage"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<sc_ws_ws_api_pb.SendMessageRequest>;
    requestDeserialize: grpc.deserialize<sc_ws_ws_api_pb.SendMessageRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const WebsocketApiService: IWebsocketApiService;

export interface IWebsocketApiServer {
    sendMessage: grpc.handleUnaryCall<sc_ws_ws_api_pb.SendMessageRequest, google_protobuf_empty_pb.Empty>;
}

export interface IWebsocketApiClient {
    sendMessage(request: sc_ws_ws_api_pb.SendMessageRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sendMessage(request: sc_ws_ws_api_pb.SendMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sendMessage(request: sc_ws_ws_api_pb.SendMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class WebsocketApiClient extends grpc.Client implements IWebsocketApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sendMessage(request: sc_ws_ws_api_pb.SendMessageRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendMessage(request: sc_ws_ws_api_pb.SendMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendMessage(request: sc_ws_ws_api_pb.SendMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
