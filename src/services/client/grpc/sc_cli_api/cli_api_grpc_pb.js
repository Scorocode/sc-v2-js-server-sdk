// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var sc_cli_api_cli_api_pb = require('../sc_cli_api/cli_api_pb.js');
// require('../github.com/gogo/protobuf/gogoproto/gogo_pb.js');
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

function serialize_sc_cli_api_ActivePortsResponse(arg) {
  if (!(arg instanceof sc_cli_api_cli_api_pb.ActivePortsResponse)) {
    throw new Error('Expected argument of type sc_cli_api.ActivePortsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_cli_api_ActivePortsResponse(buffer_arg) {
  return sc_cli_api_cli_api_pb.ActivePortsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_cli_api_Archive(arg) {
  if (!(arg instanceof sc_cli_api_cli_api_pb.Archive)) {
    throw new Error('Expected argument of type sc_cli_api.Archive');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_cli_api_Archive(buffer_arg) {
  return sc_cli_api_cli_api_pb.Archive.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_cli_api_Command(arg) {
  if (!(arg instanceof sc_cli_api_cli_api_pb.Command)) {
    throw new Error('Expected argument of type sc_cli_api.Command');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_cli_api_Command(buffer_arg) {
  return sc_cli_api_cli_api_pb.Command.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_cli_api_RegisterDatabaseRequest(arg) {
  if (!(arg instanceof sc_cli_api_cli_api_pb.RegisterDatabaseRequest)) {
    throw new Error('Expected argument of type sc_cli_api.RegisterDatabaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_cli_api_RegisterDatabaseRequest(buffer_arg) {
  return sc_cli_api_cli_api_pb.RegisterDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_cli_api_SubscribeResponse(arg) {
  if (!(arg instanceof sc_cli_api_cli_api_pb.SubscribeResponse)) {
    throw new Error('Expected argument of type sc_cli_api.SubscribeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_cli_api_SubscribeResponse(buffer_arg) {
  return sc_cli_api_cli_api_pb.SubscribeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_cli_api_SurscribeRequest(arg) {
  if (!(arg instanceof sc_cli_api_cli_api_pb.SurscribeRequest)) {
    throw new Error('Expected argument of type sc_cli_api.SurscribeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_cli_api_SurscribeRequest(buffer_arg) {
  return sc_cli_api_cli_api_pb.SurscribeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var CliApiService = exports.CliApiService = {
  getActivePorts: {
    path: '/sc_cli_api.CliApi/GetActivePorts',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: sc_cli_api_cli_api_pb.ActivePortsResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_sc_cli_api_ActivePortsResponse,
    responseDeserialize: deserialize_sc_cli_api_ActivePortsResponse,
  },
  // Project management
  pull: {
    path: '/sc_cli_api.CliApi/Pull',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: sc_cli_api_cli_api_pb.Archive,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_sc_cli_api_Archive,
    responseDeserialize: deserialize_sc_cli_api_Archive,
  },
  push: {
    path: '/sc_cli_api.CliApi/Push',
    requestStream: true,
    responseStream: false,
    requestType: sc_cli_api_cli_api_pb.Archive,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_cli_api_Archive,
    requestDeserialize: deserialize_sc_cli_api_Archive,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  dependenciesUpdate: {
    path: '/sc_cli_api.CliApi/DependenciesUpdate',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Logs
  logsSubscribe: {
    path: '/sc_cli_api.CliApi/LogsSubscribe',
    requestStream: false,
    responseStream: true,
    requestType: sc_cli_api_cli_api_pb.SurscribeRequest,
    responseType: sc_cli_api_cli_api_pb.SubscribeResponse,
    requestSerialize: serialize_sc_cli_api_SurscribeRequest,
    requestDeserialize: deserialize_sc_cli_api_SurscribeRequest,
    responseSerialize: serialize_sc_cli_api_SubscribeResponse,
    responseDeserialize: deserialize_sc_cli_api_SubscribeResponse,
  },
  // Reverse proxy
  proxy: {
    path: '/sc_cli_api.CliApi/Proxy',
    requestStream: true,
    responseStream: true,
    requestType: sc_cli_api_cli_api_pb.Command,
    responseType: sc_cli_api_cli_api_pb.Command,
    requestSerialize: serialize_sc_cli_api_Command,
    requestDeserialize: deserialize_sc_cli_api_Command,
    responseSerialize: serialize_sc_cli_api_Command,
    responseDeserialize: deserialize_sc_cli_api_Command,
  },
  // Register user database in scDbManager
  registerDatabase: {
    path: '/sc_cli_api.CliApi/RegisterDatabase',
    requestStream: false,
    responseStream: false,
    requestType: sc_cli_api_cli_api_pb.RegisterDatabaseRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_cli_api_RegisterDatabaseRequest,
    requestDeserialize: deserialize_sc_cli_api_RegisterDatabaseRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.CliApiClient = grpc.makeGenericClientConstructor(CliApiService);
