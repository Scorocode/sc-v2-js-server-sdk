// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var sc_broker_node_api_manager_pb = require('../sc_broker_node_api/manager_pb.js');
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

function serialize_sc_broker_node_api_Archive(arg) {
  if (!(arg instanceof sc_broker_node_api_manager_pb.Archive)) {
    throw new Error('Expected argument of type sc_broker_node_api.Archive');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_broker_node_api_Archive(buffer_arg) {
  return sc_broker_node_api_manager_pb.Archive.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_broker_node_api_Cron(arg) {
  if (!(arg instanceof sc_broker_node_api_manager_pb.Cron)) {
    throw new Error('Expected argument of type sc_broker_node_api.Cron');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_broker_node_api_Cron(buffer_arg) {
  return sc_broker_node_api_manager_pb.Cron.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_broker_node_api_FolderInfo(arg) {
  if (!(arg instanceof sc_broker_node_api_manager_pb.FolderInfo)) {
    throw new Error('Expected argument of type sc_broker_node_api.FolderInfo');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_broker_node_api_FolderInfo(buffer_arg) {
  return sc_broker_node_api_manager_pb.FolderInfo.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_sc_broker_node_api_RenameRequest(arg) {
  if (!(arg instanceof sc_broker_node_api_manager_pb.RenameRequest)) {
    throw new Error('Expected argument of type sc_broker_node_api.RenameRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_broker_node_api_RenameRequest(buffer_arg) {
  return sc_broker_node_api_manager_pb.RenameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_broker_node_api_Replica(arg) {
  if (!(arg instanceof sc_broker_node_api_manager_pb.Replica)) {
    throw new Error('Expected argument of type sc_broker_node_api.Replica');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_broker_node_api_Replica(buffer_arg) {
  return sc_broker_node_api_manager_pb.Replica.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_broker_node_api_Script(arg) {
  if (!(arg instanceof sc_broker_node_api_manager_pb.Script)) {
    throw new Error('Expected argument of type sc_broker_node_api.Script');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_broker_node_api_Script(buffer_arg) {
  return sc_broker_node_api_manager_pb.Script.deserializeBinary(new Uint8Array(buffer_arg));
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


var ManagerService = exports.ManagerService = {
  // Folders
  folderCreate: {
    path: '/sc_broker_node_api.Manager/FolderCreate',
    requestStream: false,
    responseStream: false,
    requestType: sc_broker_node_api_manager_pb.SelectRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_broker_node_api_SelectRequest,
    requestDeserialize: deserialize_sc_broker_node_api_SelectRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  folderDelete: {
    path: '/sc_broker_node_api.Manager/FolderDelete',
    requestStream: false,
    responseStream: false,
    requestType: sc_broker_node_api_manager_pb.SelectRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_broker_node_api_SelectRequest,
    requestDeserialize: deserialize_sc_broker_node_api_SelectRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  folderRename: {
    path: '/sc_broker_node_api.Manager/FolderRename',
    requestStream: false,
    responseStream: false,
    requestType: sc_broker_node_api_manager_pb.RenameRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_broker_node_api_RenameRequest,
    requestDeserialize: deserialize_sc_broker_node_api_RenameRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  folderRead: {
    path: '/sc_broker_node_api.Manager/FolderRead',
    requestStream: false,
    responseStream: false,
    requestType: sc_broker_node_api_manager_pb.SelectRequest,
    responseType: sc_broker_node_api_manager_pb.FolderInfo,
    requestSerialize: serialize_sc_broker_node_api_SelectRequest,
    requestDeserialize: deserialize_sc_broker_node_api_SelectRequest,
    responseSerialize: serialize_sc_broker_node_api_FolderInfo,
    responseDeserialize: deserialize_sc_broker_node_api_FolderInfo,
  },
  // Scripts
  scriptCreate: {
    path: '/sc_broker_node_api.Manager/ScriptCreate',
    requestStream: false,
    responseStream: false,
    requestType: sc_broker_node_api_manager_pb.SelectRequest,
    responseType: sc_broker_node_api_manager_pb.Script,
    requestSerialize: serialize_sc_broker_node_api_SelectRequest,
    requestDeserialize: deserialize_sc_broker_node_api_SelectRequest,
    responseSerialize: serialize_sc_broker_node_api_Script,
    responseDeserialize: deserialize_sc_broker_node_api_Script,
  },
  scriptUpdate: {
    path: '/sc_broker_node_api.Manager/ScriptUpdate',
    requestStream: false,
    responseStream: false,
    requestType: sc_broker_node_api_manager_pb.Script,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_broker_node_api_Script,
    requestDeserialize: deserialize_sc_broker_node_api_Script,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  scriptRename: {
    path: '/sc_broker_node_api.Manager/ScriptRename',
    requestStream: false,
    responseStream: false,
    requestType: sc_broker_node_api_manager_pb.RenameRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_broker_node_api_RenameRequest,
    requestDeserialize: deserialize_sc_broker_node_api_RenameRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  scriptDelete: {
    path: '/sc_broker_node_api.Manager/ScriptDelete',
    requestStream: false,
    responseStream: false,
    requestType: sc_broker_node_api_manager_pb.SelectRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_broker_node_api_SelectRequest,
    requestDeserialize: deserialize_sc_broker_node_api_SelectRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  scriptRead: {
    path: '/sc_broker_node_api.Manager/ScriptRead',
    requestStream: false,
    responseStream: false,
    requestType: sc_broker_node_api_manager_pb.SelectRequest,
    responseType: sc_broker_node_api_manager_pb.Script,
    requestSerialize: serialize_sc_broker_node_api_SelectRequest,
    requestDeserialize: deserialize_sc_broker_node_api_SelectRequest,
    responseSerialize: serialize_sc_broker_node_api_Script,
    responseDeserialize: deserialize_sc_broker_node_api_Script,
  },
  // Cron
  cronSet: {
    path: '/sc_broker_node_api.Manager/CronSet',
    requestStream: false,
    responseStream: false,
    requestType: sc_broker_node_api_manager_pb.Cron,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_broker_node_api_Cron,
    requestDeserialize: deserialize_sc_broker_node_api_Cron,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  cronRead: {
    path: '/sc_broker_node_api.Manager/CronRead',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: sc_broker_node_api_manager_pb.Cron,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_sc_broker_node_api_Cron,
    responseDeserialize: deserialize_sc_broker_node_api_Cron,
  },
  // System
  processes: {
    path: '/sc_broker_node_api.Manager/Processes',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: sc_broker_node_api_manager_pb.ProcessList,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_sc_broker_node_api_ProcessList,
    responseDeserialize: deserialize_sc_broker_node_api_ProcessList,
  },
  // Web server
  webServerRun: {
    path: '/sc_broker_node_api.Manager/WebServerRun',
    requestStream: false,
    responseStream: false,
    requestType: sc_broker_node_api_manager_pb.Replica,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_broker_node_api_Replica,
    requestDeserialize: deserialize_sc_broker_node_api_Replica,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  webServerStop: {
    path: '/sc_broker_node_api.Manager/WebServerStop',
    requestStream: false,
    responseStream: false,
    requestType: sc_broker_node_api_manager_pb.Replica,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_broker_node_api_Replica,
    requestDeserialize: deserialize_sc_broker_node_api_Replica,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Async scripts
  asyncScriptRun: {
    path: '/sc_broker_node_api.Manager/AsyncScriptRun',
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
    path: '/sc_broker_node_api.Manager/AsyncScriptStop',
    requestStream: false,
    responseStream: false,
    requestType: sc_broker_node_api_manager_pb.ProcessSelect,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_broker_node_api_ProcessSelect,
    requestDeserialize: deserialize_sc_broker_node_api_ProcessSelect,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Dependencies
  dependenciesUpdate: {
    path: '/sc_broker_node_api.Manager/DependenciesUpdate',
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
    path: '/sc_broker_node_api.Manager/DependenciesDeleteDir',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Full upload/download
  pull: {
    path: '/sc_broker_node_api.Manager/Pull',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: sc_broker_node_api_manager_pb.Archive,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_sc_broker_node_api_Archive,
    responseDeserialize: deserialize_sc_broker_node_api_Archive,
  },
  push: {
    path: '/sc_broker_node_api.Manager/Push',
    requestStream: true,
    responseStream: false,
    requestType: sc_broker_node_api_manager_pb.Archive,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_broker_node_api_Archive,
    requestDeserialize: deserialize_sc_broker_node_api_Archive,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.ManagerClient = grpc.makeGenericClientConstructor(ManagerService);
