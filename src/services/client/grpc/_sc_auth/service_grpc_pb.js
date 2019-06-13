// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var sc_auth_service_pb = require('../sc_auth/service_pb.js');
var base_base_pb = require('../base/base_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_base_SimpleResponse(arg) {
  if (!(arg instanceof base_base_pb.SimpleResponse)) {
    throw new Error('Expected argument of type base.SimpleResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_base_SimpleResponse(buffer_arg) {
  return base_base_pb.SimpleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_SessionInfo(arg) {
  if (!(arg instanceof sc_auth_service_pb.SessionInfo)) {
    throw new Error('Expected argument of type sc_auth.SessionInfo');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_SessionInfo(buffer_arg) {
  return sc_auth_service_pb.SessionInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_SessionRequest(arg) {
  if (!(arg instanceof sc_auth_service_pb.SessionRequest)) {
    throw new Error('Expected argument of type sc_auth.SessionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_SessionRequest(buffer_arg) {
  return sc_auth_service_pb.SessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_User(arg) {
  if (!(arg instanceof sc_auth_service_pb.User)) {
    throw new Error('Expected argument of type sc_auth.User');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_User(buffer_arg) {
  return sc_auth_service_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_UserEmailAndPasswordRequest(arg) {
  if (!(arg instanceof sc_auth_service_pb.UserEmailAndPasswordRequest)) {
    throw new Error('Expected argument of type sc_auth.UserEmailAndPasswordRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_UserEmailAndPasswordRequest(buffer_arg) {
  return sc_auth_service_pb.UserEmailAndPasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_UserSelectRequest(arg) {
  if (!(arg instanceof sc_auth_service_pb.UserSelectRequest)) {
    throw new Error('Expected argument of type sc_auth.UserSelectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_UserSelectRequest(buffer_arg) {
  return sc_auth_service_pb.UserSelectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ServiceService = exports.ServiceService = {
  getSession: {
    path: '/sc_auth.Service/GetSession',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_service_pb.SessionRequest,
    responseType: sc_auth_service_pb.SessionInfo,
    requestSerialize: serialize_sc_auth_SessionRequest,
    requestDeserialize: deserialize_sc_auth_SessionRequest,
    responseSerialize: serialize_sc_auth_SessionInfo,
    responseDeserialize: deserialize_sc_auth_SessionInfo,
  },
  refreshSession: {
    path: '/sc_auth.Service/RefreshSession',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_service_pb.SessionRequest,
    responseType: sc_auth_service_pb.SessionInfo,
    requestSerialize: serialize_sc_auth_SessionRequest,
    requestDeserialize: deserialize_sc_auth_SessionRequest,
    responseSerialize: serialize_sc_auth_SessionInfo,
    responseDeserialize: deserialize_sc_auth_SessionInfo,
  },
  createUser: {
    path: '/sc_auth.Service/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_service_pb.UserEmailAndPasswordRequest,
    responseType: sc_auth_service_pb.User,
    requestSerialize: serialize_sc_auth_UserEmailAndPasswordRequest,
    requestDeserialize: deserialize_sc_auth_UserEmailAndPasswordRequest,
    responseSerialize: serialize_sc_auth_User,
    responseDeserialize: deserialize_sc_auth_User,
  },
  signInWithEmailAndPassword: {
    path: '/sc_auth.Service/SignInWithEmailAndPassword',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_service_pb.UserEmailAndPasswordRequest,
    responseType: sc_auth_service_pb.SessionInfo,
    requestSerialize: serialize_sc_auth_UserEmailAndPasswordRequest,
    requestDeserialize: deserialize_sc_auth_UserEmailAndPasswordRequest,
    responseSerialize: serialize_sc_auth_SessionInfo,
    responseDeserialize: deserialize_sc_auth_SessionInfo,
  },
  signoutByToken: {
    path: '/sc_auth.Service/SignoutByToken',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_service_pb.SessionRequest,
    responseType: base_base_pb.SimpleResponse,
    requestSerialize: serialize_sc_auth_SessionRequest,
    requestDeserialize: deserialize_sc_auth_SessionRequest,
    responseSerialize: serialize_base_SimpleResponse,
    responseDeserialize: deserialize_base_SimpleResponse,
  },
  getUserByID: {
    path: '/sc_auth.Service/GetUserByID',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_service_pb.UserSelectRequest,
    responseType: sc_auth_service_pb.User,
    requestSerialize: serialize_sc_auth_UserSelectRequest,
    requestDeserialize: deserialize_sc_auth_UserSelectRequest,
    responseSerialize: serialize_sc_auth_User,
    responseDeserialize: deserialize_sc_auth_User,
  },
  getUserByEmail: {
    path: '/sc_auth.Service/GetUserByEmail',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_service_pb.UserSelectRequest,
    responseType: sc_auth_service_pb.User,
    requestSerialize: serialize_sc_auth_UserSelectRequest,
    requestDeserialize: deserialize_sc_auth_UserSelectRequest,
    responseSerialize: serialize_sc_auth_User,
    responseDeserialize: deserialize_sc_auth_User,
  },
  getUserByToken: {
    path: '/sc_auth.Service/GetUserByToken',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_service_pb.UserSelectRequest,
    responseType: sc_auth_service_pb.User,
    requestSerialize: serialize_sc_auth_UserSelectRequest,
    requestDeserialize: deserialize_sc_auth_UserSelectRequest,
    responseSerialize: serialize_sc_auth_User,
    responseDeserialize: deserialize_sc_auth_User,
  },
  deleteUserByID: {
    path: '/sc_auth.Service/DeleteUserByID',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_service_pb.UserSelectRequest,
    responseType: base_base_pb.SimpleResponse,
    requestSerialize: serialize_sc_auth_UserSelectRequest,
    requestDeserialize: deserialize_sc_auth_UserSelectRequest,
    responseSerialize: serialize_base_SimpleResponse,
    responseDeserialize: deserialize_base_SimpleResponse,
  },
};

exports.ServiceClient = grpc.makeGenericClientConstructor(ServiceService);
