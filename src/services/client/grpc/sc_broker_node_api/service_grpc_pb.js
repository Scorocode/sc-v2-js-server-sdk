// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var sc_broker_node_api_manager_pb = require('../sc_broker_node_api/manager_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_broker_node_api_Process(arg) {
  if (!(arg instanceof sc_broker_node_api_manager_pb.Process)) {
    throw new Error('Expected argument of type sc_broker_node_api.Process');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_broker_node_api_Process(buffer_arg) {
  return sc_broker_node_api_manager_pb.Process.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_broker_node_api_ProcessList(arg) {
  if (!(arg instanceof sc_broker_node_api_manager_pb.ProcessList)) {
    throw new Error('Expected argument of type sc_broker_node_api.ProcessList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_broker_node_api_ProcessList(buffer_arg) {
  return sc_broker_node_api_manager_pb.ProcessList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_broker_node_api_ProcessSelect(arg) {
  if (!(arg instanceof sc_broker_node_api_manager_pb.ProcessSelect)) {
    throw new Error('Expected argument of type sc_broker_node_api.ProcessSelect');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_broker_node_api_ProcessSelect(buffer_arg) {
  return sc_broker_node_api_manager_pb.ProcessSelect.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_broker_node_api_SelectRequest(arg) {
  if (!(arg instanceof sc_broker_node_api_manager_pb.SelectRequest)) {
    throw new Error('Expected argument of type sc_broker_node_api.SelectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_broker_node_api_SelectRequest(buffer_arg) {
  return sc_broker_node_api_manager_pb.SelectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var SeviceService = exports.SeviceService = {
  processes: {
    path: '/sc_broker_node_api.Sevice/Processes',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: sc_broker_node_api_manager_pb.ProcessList,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_sc_broker_node_api_ProcessList,
    responseDeserialize: deserialize_sc_broker_node_api_ProcessList,
  },
  // Dependencies
  dependenciesUpdate: {
    path: '/sc_broker_node_api.Sevice/DependenciesUpdate',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  dependenciesDeleteDir: {
    path: '/sc_broker_node_api.Sevice/DependenciesDeleteDir',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Web server
  webServerRun: {
    path: '/sc_broker_node_api.Sevice/WebServerRun',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  webServerStop: {
    path: '/sc_broker_node_api.Sevice/WebServerStop',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Async scripts
  asyncScriptRun: {
    path: '/sc_broker_node_api.Sevice/AsyncScriptRun',
    requestStream: false,
    responseStream: false,
    requestType: sc_broker_node_api_manager_pb.SelectRequest,
    responseType: sc_broker_node_api_manager_pb.Process,
    requestSerialize: serialize_sc_broker_node_api_SelectRequest,
    requestDeserialize: deserialize_sc_broker_node_api_SelectRequest,
    responseSerialize: serialize_sc_broker_node_api_Process,
    responseDeserialize: deserialize_sc_broker_node_api_Process,
  },
  asyncScriptStop: {
    path: '/sc_broker_node_api.Sevice/AsyncScriptStop',
    requestStream: false,
    responseStream: false,
    requestType: sc_broker_node_api_manager_pb.ProcessSelect,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_broker_node_api_ProcessSelect,
    requestDeserialize: deserialize_sc_broker_node_api_ProcessSelect,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.SeviceClient = grpc.makeGenericClientConstructor(SeviceService);
