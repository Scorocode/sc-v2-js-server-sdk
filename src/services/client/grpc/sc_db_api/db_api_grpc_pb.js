// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var sc_db_api_db_api_pb = require('../sc_db_api/db_api_pb.js');
// require('../github.com/gogo/protobuf/gogoproto/gogo_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var sc_db_api_common_pb = require('../sc_db_api/common_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_db_api_ByIdRequest(arg) {
  if (!(arg instanceof sc_db_api_db_api_pb.ByIdRequest)) {
    throw new Error('Expected argument of type sc_db_api.ByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_db_api_ByIdRequest(buffer_arg) {
  return sc_db_api_db_api_pb.ByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_db_api_GetListRequest(arg) {
  if (!(arg instanceof sc_db_api_db_api_pb.GetListRequest)) {
    throw new Error('Expected argument of type sc_db_api.GetListRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_db_api_GetListRequest(buffer_arg) {
  return sc_db_api_db_api_pb.GetListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_db_api_GetListResponse(arg) {
  if (!(arg instanceof sc_db_api_db_api_pb.GetListResponse)) {
    throw new Error('Expected argument of type sc_db_api.GetListResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_db_api_GetListResponse(buffer_arg) {
  return sc_db_api_db_api_pb.GetListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_db_api_InsertRequest(arg) {
  if (!(arg instanceof sc_db_api_db_api_pb.InsertRequest)) {
    throw new Error('Expected argument of type sc_db_api.InsertRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_db_api_InsertRequest(buffer_arg) {
  return sc_db_api_db_api_pb.InsertRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_db_api_SingleRecordResponse(arg) {
  if (!(arg instanceof sc_db_api_db_api_pb.SingleRecordResponse)) {
    throw new Error('Expected argument of type sc_db_api.SingleRecordResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_db_api_SingleRecordResponse(buffer_arg) {
  return sc_db_api_db_api_pb.SingleRecordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_db_api_UpdateRequest(arg) {
  if (!(arg instanceof sc_db_api_db_api_pb.UpdateRequest)) {
    throw new Error('Expected argument of type sc_db_api.UpdateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_db_api_UpdateRequest(buffer_arg) {
  return sc_db_api_db_api_pb.UpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var DatabaseApiService = exports.DatabaseApiService = {
  getById: {
    path: '/sc_db_api.DatabaseApi/GetById',
    requestStream: false,
    responseStream: false,
    requestType: sc_db_api_db_api_pb.ByIdRequest,
    responseType: sc_db_api_db_api_pb.SingleRecordResponse,
    requestSerialize: serialize_sc_db_api_ByIdRequest,
    requestDeserialize: deserialize_sc_db_api_ByIdRequest,
    responseSerialize: serialize_sc_db_api_SingleRecordResponse,
    responseDeserialize: deserialize_sc_db_api_SingleRecordResponse,
  },
  getList: {
    path: '/sc_db_api.DatabaseApi/GetList',
    requestStream: false,
    responseStream: false,
    requestType: sc_db_api_db_api_pb.GetListRequest,
    responseType: sc_db_api_db_api_pb.GetListResponse,
    requestSerialize: serialize_sc_db_api_GetListRequest,
    requestDeserialize: deserialize_sc_db_api_GetListRequest,
    responseSerialize: serialize_sc_db_api_GetListResponse,
    responseDeserialize: deserialize_sc_db_api_GetListResponse,
  },
  insert: {
    path: '/sc_db_api.DatabaseApi/Insert',
    requestStream: false,
    responseStream: false,
    requestType: sc_db_api_db_api_pb.InsertRequest,
    responseType: sc_db_api_db_api_pb.SingleRecordResponse,
    requestSerialize: serialize_sc_db_api_InsertRequest,
    requestDeserialize: deserialize_sc_db_api_InsertRequest,
    responseSerialize: serialize_sc_db_api_SingleRecordResponse,
    responseDeserialize: deserialize_sc_db_api_SingleRecordResponse,
  },
  update: {
    path: '/sc_db_api.DatabaseApi/Update',
    requestStream: false,
    responseStream: false,
    requestType: sc_db_api_db_api_pb.UpdateRequest,
    responseType: sc_db_api_db_api_pb.SingleRecordResponse,
    requestSerialize: serialize_sc_db_api_UpdateRequest,
    requestDeserialize: deserialize_sc_db_api_UpdateRequest,
    responseSerialize: serialize_sc_db_api_SingleRecordResponse,
    responseDeserialize: deserialize_sc_db_api_SingleRecordResponse,
  },
  delete: {
    path: '/sc_db_api.DatabaseApi/Delete',
    requestStream: false,
    responseStream: false,
    requestType: sc_db_api_db_api_pb.ByIdRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_db_api_ByIdRequest,
    requestDeserialize: deserialize_sc_db_api_ByIdRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.DatabaseApiClient = grpc.makeGenericClientConstructor(DatabaseApiService);
