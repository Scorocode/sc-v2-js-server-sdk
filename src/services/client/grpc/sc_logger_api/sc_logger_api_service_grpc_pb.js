// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var sc_logger_api_sc_logger_api_service_pb = require('../sc_logger_api/sc_logger_api_service_pb.js');
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

function serialize_sc_logger_api_File(arg) {
  if (!(arg instanceof sc_logger_api_sc_logger_api_service_pb.File)) {
    throw new Error('Expected argument of type sc_logger_api.File');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_logger_api_File(buffer_arg) {
  return sc_logger_api_sc_logger_api_service_pb.File.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_logger_api_GetLastRequest(arg) {
  if (!(arg instanceof sc_logger_api_sc_logger_api_service_pb.GetLastRequest)) {
    throw new Error('Expected argument of type sc_logger_api.GetLastRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_logger_api_GetLastRequest(buffer_arg) {
  return sc_logger_api_sc_logger_api_service_pb.GetLastRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_logger_api_Select(arg) {
  if (!(arg instanceof sc_logger_api_sc_logger_api_service_pb.Select)) {
    throw new Error('Expected argument of type sc_logger_api.Select');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_logger_api_Select(buffer_arg) {
  return sc_logger_api_sc_logger_api_service_pb.Select.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_logger_api_SelectResponse(arg) {
  if (!(arg instanceof sc_logger_api_sc_logger_api_service_pb.SelectResponse)) {
    throw new Error('Expected argument of type sc_logger_api.SelectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_logger_api_SelectResponse(buffer_arg) {
  return sc_logger_api_sc_logger_api_service_pb.SelectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ServiceService = exports.ServiceService = {
  get: {
    path: '/sc_logger_api.Service/Get',
    requestStream: false,
    responseStream: false,
    requestType: sc_logger_api_sc_logger_api_service_pb.Select,
    responseType: sc_logger_api_sc_logger_api_service_pb.SelectResponse,
    requestSerialize: serialize_sc_logger_api_Select,
    requestDeserialize: deserialize_sc_logger_api_Select,
    responseSerialize: serialize_sc_logger_api_SelectResponse,
    responseDeserialize: deserialize_sc_logger_api_SelectResponse,
  },
  clear: {
    path: '/sc_logger_api.Service/Clear',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  dump: {
    path: '/sc_logger_api.Service/Dump',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: sc_logger_api_sc_logger_api_service_pb.File,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_sc_logger_api_File,
    responseDeserialize: deserialize_sc_logger_api_File,
  },
  getLast: {
    path: '/sc_logger_api.Service/GetLast',
    requestStream: false,
    responseStream: false,
    requestType: sc_logger_api_sc_logger_api_service_pb.GetLastRequest,
    responseType: sc_logger_api_sc_logger_api_service_pb.File,
    requestSerialize: serialize_sc_logger_api_GetLastRequest,
    requestDeserialize: deserialize_sc_logger_api_GetLastRequest,
    responseSerialize: serialize_sc_logger_api_File,
    responseDeserialize: deserialize_sc_logger_api_File,
  },
  subscribe: {
    path: '/sc_logger_api.Service/Subscribe',
    requestStream: false,
    responseStream: true,
    requestType: sc_logger_api_sc_logger_api_service_pb.GetLastRequest,
    responseType: sc_logger_api_sc_logger_api_service_pb.File,
    requestSerialize: serialize_sc_logger_api_GetLastRequest,
    requestDeserialize: deserialize_sc_logger_api_GetLastRequest,
    responseSerialize: serialize_sc_logger_api_File,
    responseDeserialize: deserialize_sc_logger_api_File,
  },
};

exports.ServiceClient = grpc.makeGenericClientConstructor(ServiceService);
