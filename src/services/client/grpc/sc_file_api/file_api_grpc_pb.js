// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var sc_file_api_file_api_pb = require('../sc_file_api/file_api_pb.js');
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

function serialize_sc_file_api_File(arg) {
  if (!(arg instanceof sc_file_api_file_api_pb.File)) {
    throw new Error('Expected argument of type sc_file_api.File');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_file_api_File(buffer_arg) {
  return sc_file_api_file_api_pb.File.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_file_api_FolderInfo(arg) {
  if (!(arg instanceof sc_file_api_file_api_pb.FolderInfo)) {
    throw new Error('Expected argument of type sc_file_api.FolderInfo');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_file_api_FolderInfo(buffer_arg) {
  return sc_file_api_file_api_pb.FolderInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_file_api_RenameRequest(arg) {
  if (!(arg instanceof sc_file_api_file_api_pb.RenameRequest)) {
    throw new Error('Expected argument of type sc_file_api.RenameRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_file_api_RenameRequest(buffer_arg) {
  return sc_file_api_file_api_pb.RenameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_file_api_SelectRequest(arg) {
  if (!(arg instanceof sc_file_api_file_api_pb.SelectRequest)) {
    throw new Error('Expected argument of type sc_file_api.SelectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_file_api_SelectRequest(buffer_arg) {
  return sc_file_api_file_api_pb.SelectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_file_api_UploadRequest(arg) {
  if (!(arg instanceof sc_file_api_file_api_pb.UploadRequest)) {
    throw new Error('Expected argument of type sc_file_api.UploadRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_file_api_UploadRequest(buffer_arg) {
  return sc_file_api_file_api_pb.UploadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var FileApiService = exports.FileApiService = {
  // Folders
  folderCreate: {
    path: '/sc_file_api.FileApi/FolderCreate',
    requestStream: false,
    responseStream: false,
    requestType: sc_file_api_file_api_pb.SelectRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_file_api_SelectRequest,
    requestDeserialize: deserialize_sc_file_api_SelectRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  folderDelete: {
    path: '/sc_file_api.FileApi/FolderDelete',
    requestStream: false,
    responseStream: false,
    requestType: sc_file_api_file_api_pb.SelectRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_file_api_SelectRequest,
    requestDeserialize: deserialize_sc_file_api_SelectRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  folderRename: {
    path: '/sc_file_api.FileApi/FolderRename',
    requestStream: false,
    responseStream: false,
    requestType: sc_file_api_file_api_pb.RenameRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_file_api_RenameRequest,
    requestDeserialize: deserialize_sc_file_api_RenameRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  folderRead: {
    path: '/sc_file_api.FileApi/FolderRead',
    requestStream: false,
    responseStream: false,
    requestType: sc_file_api_file_api_pb.SelectRequest,
    responseType: sc_file_api_file_api_pb.FolderInfo,
    requestSerialize: serialize_sc_file_api_SelectRequest,
    requestDeserialize: deserialize_sc_file_api_SelectRequest,
    responseSerialize: serialize_sc_file_api_FolderInfo,
    responseDeserialize: deserialize_sc_file_api_FolderInfo,
  },
  // Files
  fileUpload: {
    path: '/sc_file_api.FileApi/FileUpload',
    requestStream: true,
    responseStream: false,
    requestType: sc_file_api_file_api_pb.UploadRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_file_api_UploadRequest,
    requestDeserialize: deserialize_sc_file_api_UploadRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  fileDownload: {
    path: '/sc_file_api.FileApi/FileDownload',
    requestStream: false,
    responseStream: true,
    requestType: sc_file_api_file_api_pb.SelectRequest,
    responseType: sc_file_api_file_api_pb.File,
    requestSerialize: serialize_sc_file_api_SelectRequest,
    requestDeserialize: deserialize_sc_file_api_SelectRequest,
    responseSerialize: serialize_sc_file_api_File,
    responseDeserialize: deserialize_sc_file_api_File,
  },
  fileRename: {
    path: '/sc_file_api.FileApi/FileRename',
    requestStream: false,
    responseStream: false,
    requestType: sc_file_api_file_api_pb.RenameRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_file_api_RenameRequest,
    requestDeserialize: deserialize_sc_file_api_RenameRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  fileDelete: {
    path: '/sc_file_api.FileApi/FileDelete',
    requestStream: false,
    responseStream: false,
    requestType: sc_file_api_file_api_pb.SelectRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_file_api_SelectRequest,
    requestDeserialize: deserialize_sc_file_api_SelectRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.FileApiClient = grpc.makeGenericClientConstructor(FileApiService);
