// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var sc_push_manager_pb = require('../sc_push/manager_pb.js');
var base_base_pb = require('../base/base_pb.js');

function serialize_base_SimpleResponse(arg) {
  if (!(arg instanceof base_base_pb.SimpleResponse)) {
    throw new Error('Expected argument of type base.SimpleResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_base_SimpleResponse(buffer_arg) {
  return base_base_pb.SimpleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_push_Settings(arg) {
  if (!(arg instanceof sc_push_manager_pb.Settings)) {
    throw new Error('Expected argument of type sc_push.Settings');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_push_Settings(buffer_arg) {
  return sc_push_manager_pb.Settings.deserializeBinary(new Uint8Array(buffer_arg));
}


var ManagementService = exports.ManagementService = {
  updateSettignsFCM: {
    path: '/sc_push.Management/UpdateSettignsFCM',
    requestStream: false,
    responseStream: false,
    requestType: sc_push_manager_pb.Settings,
    responseType: base_base_pb.SimpleResponse,
    requestSerialize: serialize_sc_push_Settings,
    requestDeserialize: deserialize_sc_push_Settings,
    responseSerialize: serialize_base_SimpleResponse,
    responseDeserialize: deserialize_base_SimpleResponse,
  },
  updateSettignsAPN: {
    path: '/sc_push.Management/UpdateSettignsAPN',
    requestStream: false,
    responseStream: false,
    requestType: sc_push_manager_pb.Settings,
    responseType: base_base_pb.SimpleResponse,
    requestSerialize: serialize_sc_push_Settings,
    requestDeserialize: deserialize_sc_push_Settings,
    responseSerialize: serialize_base_SimpleResponse,
    responseDeserialize: deserialize_base_SimpleResponse,
  },
};

exports.ManagementClient = grpc.makeGenericClientConstructor(ManagementService);
