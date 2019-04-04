// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var sc_push_service_pb = require('../sc_push/service_pb.js');
var base_base_pb = require('../base/base_pb.js');

function serialize_sc_push_PushRequestAPN(arg) {
  if (!(arg instanceof sc_push_service_pb.PushRequestAPN)) {
    throw new Error('Expected argument of type sc_push.PushRequestAPN');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_push_PushRequestAPN(buffer_arg) {
  return sc_push_service_pb.PushRequestAPN.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_push_PushRequestFCM(arg) {
  if (!(arg instanceof sc_push_service_pb.PushRequestFCM)) {
    throw new Error('Expected argument of type sc_push.PushRequestFCM');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_push_PushRequestFCM(buffer_arg) {
  return sc_push_service_pb.PushRequestFCM.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_push_PushResponse(arg) {
  if (!(arg instanceof sc_push_service_pb.PushResponse)) {
    throw new Error('Expected argument of type sc_push.PushResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_push_PushResponse(buffer_arg) {
  return sc_push_service_pb.PushResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ServiceService = exports.ServiceService = {
  sendFCM: {
    path: '/sc_push.Service/SendFCM',
    requestStream: false,
    responseStream: false,
    requestType: sc_push_service_pb.PushRequestFCM,
    responseType: sc_push_service_pb.PushResponse,
    requestSerialize: serialize_sc_push_PushRequestFCM,
    requestDeserialize: deserialize_sc_push_PushRequestFCM,
    responseSerialize: serialize_sc_push_PushResponse,
    responseDeserialize: deserialize_sc_push_PushResponse,
  },
  sendAPN: {
    path: '/sc_push.Service/SendAPN',
    requestStream: false,
    responseStream: false,
    requestType: sc_push_service_pb.PushRequestAPN,
    responseType: sc_push_service_pb.PushResponse,
    requestSerialize: serialize_sc_push_PushRequestAPN,
    requestDeserialize: deserialize_sc_push_PushRequestAPN,
    responseSerialize: serialize_sc_push_PushResponse,
    responseDeserialize: deserialize_sc_push_PushResponse,
  },
};

exports.ServiceClient = grpc.makeGenericClientConstructor(ServiceService);
