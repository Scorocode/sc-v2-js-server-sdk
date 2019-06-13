// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var sc_auth_manager_pb = require('../sc_auth/manager_pb.js');
// require('../github.com/gogo/protobuf/gogoproto/gogo_pb.js');
var base_base_pb = require('../base/base_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var sc_auth_common_pb = require('../sc_auth/common_pb.js');

function serialize_base_SimpleResponse(arg) {
  if (!(arg instanceof base_base_pb.SimpleResponse)) {
    throw new Error('Expected argument of type base.SimpleResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_base_SimpleResponse(buffer_arg) {
  return base_base_pb.SimpleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_AclAction(arg) {
  if (!(arg instanceof sc_auth_common_pb.AclAction)) {
    throw new Error('Expected argument of type sc_auth.AclAction');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_AclAction(buffer_arg) {
  return sc_auth_common_pb.AclAction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_AclActionType(arg) {
  if (!(arg instanceof sc_auth_common_pb.AclActionType)) {
    throw new Error('Expected argument of type sc_auth.AclActionType');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_AclActionType(buffer_arg) {
  return sc_auth_common_pb.AclActionType.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_AclActionTypesList(arg) {
  if (!(arg instanceof sc_auth_common_pb.AclActionTypesList)) {
    throw new Error('Expected argument of type sc_auth.AclActionTypesList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_AclActionTypesList(buffer_arg) {
  return sc_auth_common_pb.AclActionTypesList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_AclActionTypesListRequest(arg) {
  if (!(arg instanceof sc_auth_common_pb.AclActionTypesListRequest)) {
    throw new Error('Expected argument of type sc_auth.AclActionTypesListRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_AclActionTypesListRequest(buffer_arg) {
  return sc_auth_common_pb.AclActionTypesListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_AclActionsList(arg) {
  if (!(arg instanceof sc_auth_common_pb.AclActionsList)) {
    throw new Error('Expected argument of type sc_auth.AclActionsList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_AclActionsList(buffer_arg) {
  return sc_auth_common_pb.AclActionsList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_AclActionsListRequest(arg) {
  if (!(arg instanceof sc_auth_common_pb.AclActionsListRequest)) {
    throw new Error('Expected argument of type sc_auth.AclActionsListRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_AclActionsListRequest(buffer_arg) {
  return sc_auth_common_pb.AclActionsListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_AclField(arg) {
  if (!(arg instanceof sc_auth_common_pb.AclField)) {
    throw new Error('Expected argument of type sc_auth.AclField');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_AclField(buffer_arg) {
  return sc_auth_common_pb.AclField.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_AclFieldsList(arg) {
  if (!(arg instanceof sc_auth_common_pb.AclFieldsList)) {
    throw new Error('Expected argument of type sc_auth.AclFieldsList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_AclFieldsList(buffer_arg) {
  return sc_auth_common_pb.AclFieldsList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_AclFieldsListRequest(arg) {
  if (!(arg instanceof sc_auth_common_pb.AclFieldsListRequest)) {
    throw new Error('Expected argument of type sc_auth.AclFieldsListRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_AclFieldsListRequest(buffer_arg) {
  return sc_auth_common_pb.AclFieldsListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_AclObject(arg) {
  if (!(arg instanceof sc_auth_common_pb.AclObject)) {
    throw new Error('Expected argument of type sc_auth.AclObject');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_AclObject(buffer_arg) {
  return sc_auth_common_pb.AclObject.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_AclObjectsList(arg) {
  if (!(arg instanceof sc_auth_common_pb.AclObjectsList)) {
    throw new Error('Expected argument of type sc_auth.AclObjectsList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_AclObjectsList(buffer_arg) {
  return sc_auth_common_pb.AclObjectsList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_AclObjectsListRequest(arg) {
  if (!(arg instanceof sc_auth_common_pb.AclObjectsListRequest)) {
    throw new Error('Expected argument of type sc_auth.AclObjectsListRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_AclObjectsListRequest(buffer_arg) {
  return sc_auth_common_pb.AclObjectsListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_ByIdSelectRequest(arg) {
  if (!(arg instanceof sc_auth_manager_pb.ByIdSelectRequest)) {
    throw new Error('Expected argument of type sc_auth.ByIdSelectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_ByIdSelectRequest(buffer_arg) {
  return sc_auth_manager_pb.ByIdSelectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_Role(arg) {
  if (!(arg instanceof sc_auth_common_pb.Role)) {
    throw new Error('Expected argument of type sc_auth.Role');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_Role(buffer_arg) {
  return sc_auth_common_pb.Role.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_RolesList(arg) {
  if (!(arg instanceof sc_auth_common_pb.RolesList)) {
    throw new Error('Expected argument of type sc_auth.RolesList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_RolesList(buffer_arg) {
  return sc_auth_common_pb.RolesList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_RolesListRequest(arg) {
  if (!(arg instanceof sc_auth_common_pb.RolesListRequest)) {
    throw new Error('Expected argument of type sc_auth.RolesListRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_RolesListRequest(buffer_arg) {
  return sc_auth_common_pb.RolesListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_Settings(arg) {
  if (!(arg instanceof sc_auth_common_pb.Settings)) {
    throw new Error('Expected argument of type sc_auth.Settings');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_Settings(buffer_arg) {
  return sc_auth_common_pb.Settings.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_User(arg) {
  if (!(arg instanceof sc_auth_common_pb.User)) {
    throw new Error('Expected argument of type sc_auth.User');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_User(buffer_arg) {
  return sc_auth_common_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_UserEmailAndPasswordRequest(arg) {
  if (!(arg instanceof sc_auth_common_pb.UserEmailAndPasswordRequest)) {
    throw new Error('Expected argument of type sc_auth.UserEmailAndPasswordRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_UserEmailAndPasswordRequest(buffer_arg) {
  return sc_auth_common_pb.UserEmailAndPasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_UserSelectRequest(arg) {
  if (!(arg instanceof sc_auth_common_pb.UserSelectRequest)) {
    throw new Error('Expected argument of type sc_auth.UserSelectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_UserSelectRequest(buffer_arg) {
  return sc_auth_common_pb.UserSelectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_UsersList(arg) {
  if (!(arg instanceof sc_auth_common_pb.UsersList)) {
    throw new Error('Expected argument of type sc_auth.UsersList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_UsersList(buffer_arg) {
  return sc_auth_common_pb.UsersList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sc_auth_UsersListRequest(arg) {
  if (!(arg instanceof sc_auth_common_pb.UsersListRequest)) {
    throw new Error('Expected argument of type sc_auth.UsersListRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sc_auth_UsersListRequest(buffer_arg) {
  return sc_auth_common_pb.UsersListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ManagementService = exports.ManagementService = {
  updateSettigns: {
    path: '/sc_auth.Management/UpdateSettigns',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_common_pb.Settings,
    responseType: base_base_pb.SimpleResponse,
    requestSerialize: serialize_sc_auth_Settings,
    requestDeserialize: deserialize_sc_auth_Settings,
    responseSerialize: serialize_base_SimpleResponse,
    responseDeserialize: deserialize_base_SimpleResponse,
  },
  // Users crud
  createUser: {
    path: '/sc_auth.Management/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_common_pb.UserEmailAndPasswordRequest,
    responseType: sc_auth_common_pb.User,
    requestSerialize: serialize_sc_auth_UserEmailAndPasswordRequest,
    requestDeserialize: deserialize_sc_auth_UserEmailAndPasswordRequest,
    responseSerialize: serialize_sc_auth_User,
    responseDeserialize: deserialize_sc_auth_User,
  },
  getUserByID: {
    path: '/sc_auth.Management/GetUserByID',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_common_pb.UserSelectRequest,
    responseType: sc_auth_common_pb.User,
    requestSerialize: serialize_sc_auth_UserSelectRequest,
    requestDeserialize: deserialize_sc_auth_UserSelectRequest,
    responseSerialize: serialize_sc_auth_User,
    responseDeserialize: deserialize_sc_auth_User,
  },
  getUserByEmail: {
    path: '/sc_auth.Management/GetUserByEmail',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_common_pb.UserSelectRequest,
    responseType: sc_auth_common_pb.User,
    requestSerialize: serialize_sc_auth_UserSelectRequest,
    requestDeserialize: deserialize_sc_auth_UserSelectRequest,
    responseSerialize: serialize_sc_auth_User,
    responseDeserialize: deserialize_sc_auth_User,
  },
  getUsersList: {
    path: '/sc_auth.Management/GetUsersList',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_common_pb.UsersListRequest,
    responseType: sc_auth_common_pb.UsersList,
    requestSerialize: serialize_sc_auth_UsersListRequest,
    requestDeserialize: deserialize_sc_auth_UsersListRequest,
    responseSerialize: serialize_sc_auth_UsersList,
    responseDeserialize: deserialize_sc_auth_UsersList,
  },
  updateUser: {
    path: '/sc_auth.Management/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_common_pb.User,
    responseType: sc_auth_common_pb.User,
    requestSerialize: serialize_sc_auth_User,
    requestDeserialize: deserialize_sc_auth_User,
    responseSerialize: serialize_sc_auth_User,
    responseDeserialize: deserialize_sc_auth_User,
  },
  deleteUserByID: {
    path: '/sc_auth.Management/DeleteUserByID',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_common_pb.UserSelectRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_auth_UserSelectRequest,
    requestDeserialize: deserialize_sc_auth_UserSelectRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Roles crud
  createRole: {
    path: '/sc_auth.Management/CreateRole',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_common_pb.Role,
    responseType: sc_auth_common_pb.Role,
    requestSerialize: serialize_sc_auth_Role,
    requestDeserialize: deserialize_sc_auth_Role,
    responseSerialize: serialize_sc_auth_Role,
    responseDeserialize: deserialize_sc_auth_Role,
  },
  getRoleByID: {
    path: '/sc_auth.Management/GetRoleByID',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_manager_pb.ByIdSelectRequest,
    responseType: sc_auth_common_pb.Role,
    requestSerialize: serialize_sc_auth_ByIdSelectRequest,
    requestDeserialize: deserialize_sc_auth_ByIdSelectRequest,
    responseSerialize: serialize_sc_auth_Role,
    responseDeserialize: deserialize_sc_auth_Role,
  },
  getRolesList: {
    path: '/sc_auth.Management/GetRolesList',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_common_pb.RolesListRequest,
    responseType: sc_auth_common_pb.RolesList,
    requestSerialize: serialize_sc_auth_RolesListRequest,
    requestDeserialize: deserialize_sc_auth_RolesListRequest,
    responseSerialize: serialize_sc_auth_RolesList,
    responseDeserialize: deserialize_sc_auth_RolesList,
  },
  updateRole: {
    path: '/sc_auth.Management/UpdateRole',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_common_pb.Role,
    responseType: sc_auth_common_pb.Role,
    requestSerialize: serialize_sc_auth_Role,
    requestDeserialize: deserialize_sc_auth_Role,
    responseSerialize: serialize_sc_auth_Role,
    responseDeserialize: deserialize_sc_auth_Role,
  },
  deleteRoleByID: {
    path: '/sc_auth.Management/DeleteRoleByID',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_manager_pb.ByIdSelectRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_auth_ByIdSelectRequest,
    requestDeserialize: deserialize_sc_auth_ByIdSelectRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Action types crud
  createActionType: {
    path: '/sc_auth.Management/CreateActionType',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_common_pb.AclActionType,
    responseType: sc_auth_common_pb.AclActionType,
    requestSerialize: serialize_sc_auth_AclActionType,
    requestDeserialize: deserialize_sc_auth_AclActionType,
    responseSerialize: serialize_sc_auth_AclActionType,
    responseDeserialize: deserialize_sc_auth_AclActionType,
  },
  getActionTypeByID: {
    path: '/sc_auth.Management/GetActionTypeByID',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_manager_pb.ByIdSelectRequest,
    responseType: sc_auth_common_pb.AclActionType,
    requestSerialize: serialize_sc_auth_ByIdSelectRequest,
    requestDeserialize: deserialize_sc_auth_ByIdSelectRequest,
    responseSerialize: serialize_sc_auth_AclActionType,
    responseDeserialize: deserialize_sc_auth_AclActionType,
  },
  getActionTypesList: {
    path: '/sc_auth.Management/GetActionTypesList',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_common_pb.AclActionTypesListRequest,
    responseType: sc_auth_common_pb.AclActionTypesList,
    requestSerialize: serialize_sc_auth_AclActionTypesListRequest,
    requestDeserialize: deserialize_sc_auth_AclActionTypesListRequest,
    responseSerialize: serialize_sc_auth_AclActionTypesList,
    responseDeserialize: deserialize_sc_auth_AclActionTypesList,
  },
  updateActionType: {
    path: '/sc_auth.Management/UpdateActionType',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_common_pb.AclActionType,
    responseType: sc_auth_common_pb.AclActionType,
    requestSerialize: serialize_sc_auth_AclActionType,
    requestDeserialize: deserialize_sc_auth_AclActionType,
    responseSerialize: serialize_sc_auth_AclActionType,
    responseDeserialize: deserialize_sc_auth_AclActionType,
  },
  deleteActionTypeByID: {
    path: '/sc_auth.Management/DeleteActionTypeByID',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_manager_pb.ByIdSelectRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_auth_ByIdSelectRequest,
    requestDeserialize: deserialize_sc_auth_ByIdSelectRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // ACL Action crud
  createAction: {
    path: '/sc_auth.Management/CreateAction',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_common_pb.AclAction,
    responseType: sc_auth_common_pb.AclAction,
    requestSerialize: serialize_sc_auth_AclAction,
    requestDeserialize: deserialize_sc_auth_AclAction,
    responseSerialize: serialize_sc_auth_AclAction,
    responseDeserialize: deserialize_sc_auth_AclAction,
  },
  getActionByID: {
    path: '/sc_auth.Management/GetActionByID',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_manager_pb.ByIdSelectRequest,
    responseType: sc_auth_common_pb.AclAction,
    requestSerialize: serialize_sc_auth_ByIdSelectRequest,
    requestDeserialize: deserialize_sc_auth_ByIdSelectRequest,
    responseSerialize: serialize_sc_auth_AclAction,
    responseDeserialize: deserialize_sc_auth_AclAction,
  },
  getActionsList: {
    path: '/sc_auth.Management/GetActionsList',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_common_pb.AclActionsListRequest,
    responseType: sc_auth_common_pb.AclActionsList,
    requestSerialize: serialize_sc_auth_AclActionsListRequest,
    requestDeserialize: deserialize_sc_auth_AclActionsListRequest,
    responseSerialize: serialize_sc_auth_AclActionsList,
    responseDeserialize: deserialize_sc_auth_AclActionsList,
  },
  updateAction: {
    path: '/sc_auth.Management/UpdateAction',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_common_pb.AclAction,
    responseType: sc_auth_common_pb.AclAction,
    requestSerialize: serialize_sc_auth_AclAction,
    requestDeserialize: deserialize_sc_auth_AclAction,
    responseSerialize: serialize_sc_auth_AclAction,
    responseDeserialize: deserialize_sc_auth_AclAction,
  },
  deleteActionByID: {
    path: '/sc_auth.Management/DeleteActionByID',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_manager_pb.ByIdSelectRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_auth_ByIdSelectRequest,
    requestDeserialize: deserialize_sc_auth_ByIdSelectRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // ACL object crud
  createObject: {
    path: '/sc_auth.Management/CreateObject',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_common_pb.AclObject,
    responseType: sc_auth_common_pb.AclObject,
    requestSerialize: serialize_sc_auth_AclObject,
    requestDeserialize: deserialize_sc_auth_AclObject,
    responseSerialize: serialize_sc_auth_AclObject,
    responseDeserialize: deserialize_sc_auth_AclObject,
  },
  getObjectByID: {
    path: '/sc_auth.Management/GetObjectByID',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_manager_pb.ByIdSelectRequest,
    responseType: sc_auth_common_pb.AclObject,
    requestSerialize: serialize_sc_auth_ByIdSelectRequest,
    requestDeserialize: deserialize_sc_auth_ByIdSelectRequest,
    responseSerialize: serialize_sc_auth_AclObject,
    responseDeserialize: deserialize_sc_auth_AclObject,
  },
  getObjectsList: {
    path: '/sc_auth.Management/GetObjectsList',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_common_pb.AclObjectsListRequest,
    responseType: sc_auth_common_pb.AclObjectsList,
    requestSerialize: serialize_sc_auth_AclObjectsListRequest,
    requestDeserialize: deserialize_sc_auth_AclObjectsListRequest,
    responseSerialize: serialize_sc_auth_AclObjectsList,
    responseDeserialize: deserialize_sc_auth_AclObjectsList,
  },
  updateObject: {
    path: '/sc_auth.Management/UpdateObject',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_common_pb.AclObject,
    responseType: sc_auth_common_pb.AclObject,
    requestSerialize: serialize_sc_auth_AclObject,
    requestDeserialize: deserialize_sc_auth_AclObject,
    responseSerialize: serialize_sc_auth_AclObject,
    responseDeserialize: deserialize_sc_auth_AclObject,
  },
  deleteObjectByID: {
    path: '/sc_auth.Management/DeleteObjectByID',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_manager_pb.ByIdSelectRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_auth_ByIdSelectRequest,
    requestDeserialize: deserialize_sc_auth_ByIdSelectRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // ACL field crud
  createField: {
    path: '/sc_auth.Management/CreateField',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_common_pb.AclField,
    responseType: sc_auth_common_pb.AclField,
    requestSerialize: serialize_sc_auth_AclField,
    requestDeserialize: deserialize_sc_auth_AclField,
    responseSerialize: serialize_sc_auth_AclField,
    responseDeserialize: deserialize_sc_auth_AclField,
  },
  getFieldByID: {
    path: '/sc_auth.Management/GetFieldByID',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_manager_pb.ByIdSelectRequest,
    responseType: sc_auth_common_pb.AclField,
    requestSerialize: serialize_sc_auth_ByIdSelectRequest,
    requestDeserialize: deserialize_sc_auth_ByIdSelectRequest,
    responseSerialize: serialize_sc_auth_AclField,
    responseDeserialize: deserialize_sc_auth_AclField,
  },
  getFieldsList: {
    path: '/sc_auth.Management/GetFieldsList',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_common_pb.AclFieldsListRequest,
    responseType: sc_auth_common_pb.AclFieldsList,
    requestSerialize: serialize_sc_auth_AclFieldsListRequest,
    requestDeserialize: deserialize_sc_auth_AclFieldsListRequest,
    responseSerialize: serialize_sc_auth_AclFieldsList,
    responseDeserialize: deserialize_sc_auth_AclFieldsList,
  },
  updateField: {
    path: '/sc_auth.Management/UpdateField',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_common_pb.AclField,
    responseType: sc_auth_common_pb.AclField,
    requestSerialize: serialize_sc_auth_AclField,
    requestDeserialize: deserialize_sc_auth_AclField,
    responseSerialize: serialize_sc_auth_AclField,
    responseDeserialize: deserialize_sc_auth_AclField,
  },
  deleteFieldByID: {
    path: '/sc_auth.Management/DeleteFieldByID',
    requestStream: false,
    responseStream: false,
    requestType: sc_auth_manager_pb.ByIdSelectRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sc_auth_ByIdSelectRequest,
    requestDeserialize: deserialize_sc_auth_ByIdSelectRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.ManagementClient = grpc.makeGenericClientConstructor(ManagementService);
