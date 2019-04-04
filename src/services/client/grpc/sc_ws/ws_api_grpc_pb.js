// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var sc_ws_ws_api_pb = require('../sc_ws/ws_api_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_ws_api_SendMessageRequest(arg) {
  if (!(arg instanceof sc_ws_ws_api_pb.SendMessageRequest)) {
    throw new Error('Expected argument of type sc_ws_api.SendMessageRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_ws_api_SendMessageRequest(buffer_arg) {
  return sc_ws_ws_api_pb.SendMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var WebsocketApiService = exports.WebsocketApiService = {
  sendMessage: {
    path: '/sc_ws_api.WebsocketApi/SendMessage',
    requestStream: false,
    responseStream: false,
    requestType: sc_ws_ws_api_pb.SendMessageRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_ws_api_SendMessageRequest,
    requestDeserialize: deserialize_sc_ws_api_SendMessageRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.WebsocketApiClient = grpc.makeGenericClientConstructor(WebsocketApiService);
