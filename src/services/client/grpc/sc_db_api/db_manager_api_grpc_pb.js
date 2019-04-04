// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var sc_db_api_db_manager_api_pb = require('../sc_db_api/db_manager_api_pb.js');
// require('../github.com/gogo/protobuf/gogoproto/gogo_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var sc_db_api_db_meta_common_pb = require('../sc_db_api/db_meta_common_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_db_api_CollectionInfo(arg) {
  if (!(arg instanceof sc_db_api_db_manager_api_pb.CollectionInfo)) {
    throw new Error('Expected argument of type sc_db_api.CollectionInfo');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_db_api_CollectionInfo(buffer_arg) {
  return sc_db_api_db_manager_api_pb.CollectionInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_db_api_Database(arg) {
  if (!(arg instanceof sc_db_api_db_manager_api_pb.Database)) {
    throw new Error('Expected argument of type sc_db_api.Database');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_db_api_Database(buffer_arg) {
  return sc_db_api_db_manager_api_pb.Database.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_db_api_DropDatabaseRequest(arg) {
  if (!(arg instanceof sc_db_api_db_manager_api_pb.DropDatabaseRequest)) {
    throw new Error('Expected argument of type sc_db_api.DropDatabaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_db_api_DropDatabaseRequest(buffer_arg) {
  return sc_db_api_db_manager_api_pb.DropDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_db_api_ExecuteDdlRequest(arg) {
  if (!(arg instanceof sc_db_api_db_manager_api_pb.ExecuteDdlRequest)) {
    throw new Error('Expected argument of type sc_db_api.ExecuteDdlRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_db_api_ExecuteDdlRequest(buffer_arg) {
  return sc_db_api_db_manager_api_pb.ExecuteDdlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_db_api_GetCollectionRequest(arg) {
  if (!(arg instanceof sc_db_api_db_manager_api_pb.GetCollectionRequest)) {
    throw new Error('Expected argument of type sc_db_api.GetCollectionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_db_api_GetCollectionRequest(buffer_arg) {
  return sc_db_api_db_manager_api_pb.GetCollectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_db_api_GetCollectionsRequest(arg) {
  if (!(arg instanceof sc_db_api_db_manager_api_pb.GetCollectionsRequest)) {
    throw new Error('Expected argument of type sc_db_api.GetCollectionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_db_api_GetCollectionsRequest(buffer_arg) {
  return sc_db_api_db_manager_api_pb.GetCollectionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_db_api_GetCollectionsResponse(arg) {
  if (!(arg instanceof sc_db_api_db_manager_api_pb.GetCollectionsResponse)) {
    throw new Error('Expected argument of type sc_db_api.GetCollectionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_db_api_GetCollectionsResponse(buffer_arg) {
  return sc_db_api_db_manager_api_pb.GetCollectionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_db_api_GetDatabaseLogRequest(arg) {
  if (!(arg instanceof sc_db_api_db_manager_api_pb.GetDatabaseLogRequest)) {
    throw new Error('Expected argument of type sc_db_api.GetDatabaseLogRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_db_api_GetDatabaseLogRequest(buffer_arg) {
  return sc_db_api_db_manager_api_pb.GetDatabaseLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_db_api_GetDatabaseLogResponse(arg) {
  if (!(arg instanceof sc_db_api_db_manager_api_pb.GetDatabaseLogResponse)) {
    throw new Error('Expected argument of type sc_db_api.GetDatabaseLogResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_db_api_GetDatabaseLogResponse(buffer_arg) {
  return sc_db_api_db_manager_api_pb.GetDatabaseLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_db_api_GetDatabaseRequest(arg) {
  if (!(arg instanceof sc_db_api_db_manager_api_pb.GetDatabaseRequest)) {
    throw new Error('Expected argument of type sc_db_api.GetDatabaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_db_api_GetDatabaseRequest(buffer_arg) {
  return sc_db_api_db_manager_api_pb.GetDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_db_api_GetDatabasesResponse(arg) {
  if (!(arg instanceof sc_db_api_db_manager_api_pb.GetDatabasesResponse)) {
    throw new Error('Expected argument of type sc_db_api.GetDatabasesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_db_api_GetDatabasesResponse(buffer_arg) {
  return sc_db_api_db_manager_api_pb.GetDatabasesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_db_api_GetSchemaCollectionsRequest(arg) {
  if (!(arg instanceof sc_db_api_db_manager_api_pb.GetSchemaCollectionsRequest)) {
    throw new Error('Expected argument of type sc_db_api.GetSchemaCollectionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_db_api_GetSchemaCollectionsRequest(buffer_arg) {
  return sc_db_api_db_manager_api_pb.GetSchemaCollectionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_db_api_GetSchemaCollectionsResponse(arg) {
  if (!(arg instanceof sc_db_api_db_manager_api_pb.GetSchemaCollectionsResponse)) {
    throw new Error('Expected argument of type sc_db_api.GetSchemaCollectionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_db_api_GetSchemaCollectionsResponse(buffer_arg) {
  return sc_db_api_db_manager_api_pb.GetSchemaCollectionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_db_api_GetSchemaRequest(arg) {
  if (!(arg instanceof sc_db_api_db_manager_api_pb.GetSchemaRequest)) {
    throw new Error('Expected argument of type sc_db_api.GetSchemaRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_db_api_GetSchemaRequest(buffer_arg) {
  return sc_db_api_db_manager_api_pb.GetSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_db_api_GetSchemasRequest(arg) {
  if (!(arg instanceof sc_db_api_db_manager_api_pb.GetSchemasRequest)) {
    throw new Error('Expected argument of type sc_db_api.GetSchemasRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_db_api_GetSchemasRequest(buffer_arg) {
  return sc_db_api_db_manager_api_pb.GetSchemasRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_db_api_GetSchemasResponse(arg) {
  if (!(arg instanceof sc_db_api_db_manager_api_pb.GetSchemasResponse)) {
    throw new Error('Expected argument of type sc_db_api.GetSchemasResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_db_api_GetSchemasResponse(buffer_arg) {
  return sc_db_api_db_manager_api_pb.GetSchemasResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_db_api_Schema(arg) {
  if (!(arg instanceof sc_db_api_db_meta_common_pb.Schema)) {
    throw new Error('Expected argument of type sc_db_api.Schema');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_db_api_Schema(buffer_arg) {
  return sc_db_api_db_meta_common_pb.Schema.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_db_api_UpdateSchemaCollectionRequest(arg) {
  if (!(arg instanceof sc_db_api_db_manager_api_pb.UpdateSchemaCollectionRequest)) {
    throw new Error('Expected argument of type sc_db_api.UpdateSchemaCollectionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_db_api_UpdateSchemaCollectionRequest(buffer_arg) {
  return sc_db_api_db_manager_api_pb.UpdateSchemaCollectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ServerManagerApiService = exports.ServerManagerApiService = {
  getDatabases: {
    path: '/sc_db_api.ServerManagerApi/GetDatabases',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: sc_db_api_db_manager_api_pb.GetDatabasesResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_sc_db_api_GetDatabasesResponse,
    responseDeserialize: deserialize_sc_db_api_GetDatabasesResponse,
  },
  getDatabase: {
    path: '/sc_db_api.ServerManagerApi/GetDatabase',
    requestStream: false,
    responseStream: false,
    requestType: sc_db_api_db_manager_api_pb.GetDatabaseRequest,
    responseType: sc_db_api_db_manager_api_pb.Database,
    requestSerialize: serialize_sc_db_api_GetDatabaseRequest,
    requestDeserialize: deserialize_sc_db_api_GetDatabaseRequest,
    responseSerialize: serialize_sc_db_api_Database,
    responseDeserialize: deserialize_sc_db_api_Database,
  },
  createDatabase: {
    path: '/sc_db_api.ServerManagerApi/CreateDatabase',
    requestStream: false,
    responseStream: false,
    requestType: sc_db_api_db_manager_api_pb.Database,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_db_api_Database,
    requestDeserialize: deserialize_sc_db_api_Database,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  dropDatabase: {
    path: '/sc_db_api.ServerManagerApi/DropDatabase',
    requestStream: false,
    responseStream: false,
    requestType: sc_db_api_db_manager_api_pb.DropDatabaseRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_db_api_DropDatabaseRequest,
    requestDeserialize: deserialize_sc_db_api_DropDatabaseRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getSchemas: {
    path: '/sc_db_api.ServerManagerApi/GetSchemas',
    requestStream: false,
    responseStream: false,
    requestType: sc_db_api_db_manager_api_pb.GetSchemasRequest,
    responseType: sc_db_api_db_manager_api_pb.GetSchemasResponse,
    requestSerialize: serialize_sc_db_api_GetSchemasRequest,
    requestDeserialize: deserialize_sc_db_api_GetSchemasRequest,
    responseSerialize: serialize_sc_db_api_GetSchemasResponse,
    responseDeserialize: deserialize_sc_db_api_GetSchemasResponse,
  },
  getSchema: {
    path: '/sc_db_api.ServerManagerApi/GetSchema',
    requestStream: false,
    responseStream: false,
    requestType: sc_db_api_db_manager_api_pb.GetSchemaRequest,
    responseType: sc_db_api_db_meta_common_pb.Schema,
    requestSerialize: serialize_sc_db_api_GetSchemaRequest,
    requestDeserialize: deserialize_sc_db_api_GetSchemaRequest,
    responseSerialize: serialize_sc_db_api_Schema,
    responseDeserialize: deserialize_sc_db_api_Schema,
  },
  getSchemaCollections: {
    path: '/sc_db_api.ServerManagerApi/GetSchemaCollections',
    requestStream: false,
    responseStream: false,
    requestType: sc_db_api_db_manager_api_pb.GetSchemaCollectionsRequest,
    responseType: sc_db_api_db_manager_api_pb.GetSchemaCollectionsResponse,
    requestSerialize: serialize_sc_db_api_GetSchemaCollectionsRequest,
    requestDeserialize: deserialize_sc_db_api_GetSchemaCollectionsRequest,
    responseSerialize: serialize_sc_db_api_GetSchemaCollectionsResponse,
    responseDeserialize: deserialize_sc_db_api_GetSchemaCollectionsResponse,
  },
  updateSchemaCollection: {
    path: '/sc_db_api.ServerManagerApi/UpdateSchemaCollection',
    requestStream: false,
    responseStream: false,
    requestType: sc_db_api_db_manager_api_pb.UpdateSchemaCollectionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_db_api_UpdateSchemaCollectionRequest,
    requestDeserialize: deserialize_sc_db_api_UpdateSchemaCollectionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getCollections: {
    path: '/sc_db_api.ServerManagerApi/GetCollections',
    requestStream: false,
    responseStream: false,
    requestType: sc_db_api_db_manager_api_pb.GetCollectionsRequest,
    responseType: sc_db_api_db_manager_api_pb.GetCollectionsResponse,
    requestSerialize: serialize_sc_db_api_GetCollectionsRequest,
    requestDeserialize: deserialize_sc_db_api_GetCollectionsRequest,
    responseSerialize: serialize_sc_db_api_GetCollectionsResponse,
    responseDeserialize: deserialize_sc_db_api_GetCollectionsResponse,
  },
  getCollection: {
    path: '/sc_db_api.ServerManagerApi/GetCollection',
    requestStream: false,
    responseStream: false,
    requestType: sc_db_api_db_manager_api_pb.GetCollectionRequest,
    responseType: sc_db_api_db_manager_api_pb.CollectionInfo,
    requestSerialize: serialize_sc_db_api_GetCollectionRequest,
    requestDeserialize: deserialize_sc_db_api_GetCollectionRequest,
    responseSerialize: serialize_sc_db_api_CollectionInfo,
    responseDeserialize: deserialize_sc_db_api_CollectionInfo,
  },
  executeDdl: {
    path: '/sc_db_api.ServerManagerApi/ExecuteDdl',
    requestStream: false,
    responseStream: false,
    requestType: sc_db_api_db_manager_api_pb.ExecuteDdlRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_db_api_ExecuteDdlRequest,
    requestDeserialize: deserialize_sc_db_api_ExecuteDdlRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getDatabaseLog: {
    path: '/sc_db_api.ServerManagerApi/GetDatabaseLog',
    requestStream: false,
    responseStream: false,
    requestType: sc_db_api_db_manager_api_pb.GetDatabaseLogRequest,
    responseType: sc_db_api_db_manager_api_pb.GetDatabaseLogResponse,
    requestSerialize: serialize_sc_db_api_GetDatabaseLogRequest,
    requestDeserialize: deserialize_sc_db_api_GetDatabaseLogRequest,
    responseSerialize: serialize_sc_db_api_GetDatabaseLogResponse,
    responseDeserialize: deserialize_sc_db_api_GetDatabaseLogResponse,
  },
  // TODO in the future add separate methods for managment of db, schemas, tables... etc.
};

exports.ServerManagerApiClient = grpc.makeGenericClientConstructor(ServerManagerApiService);
