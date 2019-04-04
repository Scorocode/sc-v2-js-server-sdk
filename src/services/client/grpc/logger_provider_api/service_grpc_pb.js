// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var logger_provider_api_service_pb = require('../logger_provider_api/service_pb.js');
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

function serialize_logger_provider_api_Message(arg) {
  if (!(arg instanceof logger_provider_api_service_pb.Message)) {
    throw new Error('Expected argument of type logger_provider_api.Message');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_logger_provider_api_Message(buffer_arg) {
  return logger_provider_api_service_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProviderApiService = exports.ProviderApiService = {
  send: {
    path: '/logger_provider_api.ProviderApi/Send',
    requestStream: false,
    responseStream: false,
    requestType: logger_provider_api_service_pb.Message,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_logger_provider_api_Message,
    requestDeserialize: deserialize_logger_provider_api_Message,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.ProviderApiClient = grpc.makeGenericClientConstructor(ProviderApiService);
