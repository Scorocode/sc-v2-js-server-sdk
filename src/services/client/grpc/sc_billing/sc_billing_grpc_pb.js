// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var sc_billing_sc_billing_pb = require('../sc_billing/sc_billing_pb.js');
// require('../github.com/gogo/protobuf/gogoproto/gogo_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_billing_ChangeApplicationStateRequest(arg) {
  if (!(arg instanceof sc_billing_sc_billing_pb.ChangeApplicationStateRequest)) {
    throw new Error('Expected argument of type sc_billing.ChangeApplicationStateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_billing_ChangeApplicationStateRequest(buffer_arg) {
  return sc_billing_sc_billing_pb.ChangeApplicationStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_billing_FundsRequest(arg) {
  if (!(arg instanceof sc_billing_sc_billing_pb.FundsRequest)) {
    throw new Error('Expected argument of type sc_billing.FundsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_billing_FundsRequest(buffer_arg) {
  return sc_billing_sc_billing_pb.FundsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_billing_RegisterApplicationRequest(arg) {
  if (!(arg instanceof sc_billing_sc_billing_pb.RegisterApplicationRequest)) {
    throw new Error('Expected argument of type sc_billing.RegisterApplicationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_billing_RegisterApplicationRequest(buffer_arg) {
  return sc_billing_sc_billing_pb.RegisterApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_billing_User(arg) {
  if (!(arg instanceof sc_billing_sc_billing_pb.User)) {
    throw new Error('Expected argument of type sc_billing.User');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_billing_User(buffer_arg) {
  return sc_billing_sc_billing_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var BillingApiService = exports.BillingApiService = {
  // User
  registerUser: {
    path: '/sc_billing.BillingApi/RegisterUser',
    requestStream: false,
    responseStream: false,
    requestType: sc_billing_sc_billing_pb.User,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_billing_User,
    requestDeserialize: deserialize_sc_billing_User,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  blockUser: {
    path: '/sc_billing.BillingApi/BlockUser',
    requestStream: false,
    responseStream: false,
    requestType: sc_billing_sc_billing_pb.User,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_billing_User,
    requestDeserialize: deserialize_sc_billing_User,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Application
  registerApplication: {
    path: '/sc_billing.BillingApi/RegisterApplication',
    requestStream: false,
    responseStream: false,
    requestType: sc_billing_sc_billing_pb.RegisterApplicationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_billing_RegisterApplicationRequest,
    requestDeserialize: deserialize_sc_billing_RegisterApplicationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  changeApplicationState: {
    path: '/sc_billing.BillingApi/ChangeApplicationState',
    requestStream: false,
    responseStream: false,
    requestType: sc_billing_sc_billing_pb.ChangeApplicationStateRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_billing_ChangeApplicationStateRequest,
    requestDeserialize: deserialize_sc_billing_ChangeApplicationStateRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Funds operations
  addFundsToUser: {
    path: '/sc_billing.BillingApi/AddFundsToUser',
    requestStream: false,
    responseStream: false,
    requestType: sc_billing_sc_billing_pb.FundsRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_billing_FundsRequest,
    requestDeserialize: deserialize_sc_billing_FundsRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  withdrawFundsFromUser: {
    path: '/sc_billing.BillingApi/WithdrawFundsFromUser',
    requestStream: false,
    responseStream: false,
    requestType: sc_billing_sc_billing_pb.FundsRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_billing_FundsRequest,
    requestDeserialize: deserialize_sc_billing_FundsRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  addFundsToApp: {
    path: '/sc_billing.BillingApi/AddFundsToApp',
    requestStream: false,
    responseStream: false,
    requestType: sc_billing_sc_billing_pb.FundsRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_billing_FundsRequest,
    requestDeserialize: deserialize_sc_billing_FundsRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  withdrawFundsFromApp: {
    path: '/sc_billing.BillingApi/WithdrawFundsFromApp',
    requestStream: false,
    responseStream: false,
    requestType: sc_billing_sc_billing_pb.FundsRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_billing_FundsRequest,
    requestDeserialize: deserialize_sc_billing_FundsRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.BillingApiClient = grpc.makeGenericClientConstructor(BillingApiService);
