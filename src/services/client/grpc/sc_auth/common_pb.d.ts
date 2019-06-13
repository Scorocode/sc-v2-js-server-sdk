// package: sc_auth
// file: sc_auth/common.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
// "../github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as base_base_pb from "../base/base_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Settings extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Settings.AsObject;
    static toObject(includeInstance: boolean, msg: Settings): Settings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Settings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Settings;
    static deserializeBinaryFromReader(message: Settings, reader: jspb.BinaryReader): Settings;
}

export namespace Settings {
    export type AsObject = {
        data: Uint8Array | string,
    }
}

export class UserEmailAndPasswordRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): void;

    getPassword(): string;
    setPassword(value: string): void;

    clearRolesList(): void;
    getRolesList(): Array<string>;
    setRolesList(value: Array<string>): void;
    addRoles(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserEmailAndPasswordRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UserEmailAndPasswordRequest): UserEmailAndPasswordRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserEmailAndPasswordRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserEmailAndPasswordRequest;
    static deserializeBinaryFromReader(message: UserEmailAndPasswordRequest, reader: jspb.BinaryReader): UserEmailAndPasswordRequest;
}

export namespace UserEmailAndPasswordRequest {
    export type AsObject = {
        email: string,
        password: string,
        rolesList: Array<string>,
    }
}

export class BoolFilter extends jspb.Message { 
    getFlag(): boolean;
    setFlag(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BoolFilter.AsObject;
    static toObject(includeInstance: boolean, msg: BoolFilter): BoolFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BoolFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BoolFilter;
    static deserializeBinaryFromReader(message: BoolFilter, reader: jspb.BinaryReader): BoolFilter;
}

export namespace BoolFilter {
    export type AsObject = {
        flag: boolean,
    }
}

export class User extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;

    getPassword(): Uint8Array | string;
    getPassword_asU8(): Uint8Array;
    getPassword_asB64(): string;
    setPassword(value: Uint8Array | string): void;

    getBlocked(): boolean;
    setBlocked(value: boolean): void;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;


    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;


    hasError(): boolean;
    clearError(): void;
    getError(): base_base_pb.Error | undefined;
    setError(value?: base_base_pb.Error): void;

    clearRolesList(): void;
    getRolesList(): Array<string>;
    setRolesList(value: Array<string>): void;
    addRoles(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: string,
        email: string,
        password: Uint8Array | string,
        blocked: boolean,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        error?: base_base_pb.Error.AsObject,
        rolesList: Array<string>,
    }
}

export class UsersList extends jspb.Message { 
    getPage(): number;
    setPage(value: number): void;

    getPagesize(): number;
    setPagesize(value: number): void;

    getTotal(): number;
    setTotal(value: number): void;

    clearItemsList(): void;
    getItemsList(): Array<User>;
    setItemsList(value: Array<User>): void;
    addItems(value?: User, index?: number): User;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsersList.AsObject;
    static toObject(includeInstance: boolean, msg: UsersList): UsersList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsersList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsersList;
    static deserializeBinaryFromReader(message: UsersList, reader: jspb.BinaryReader): UsersList;
}

export namespace UsersList {
    export type AsObject = {
        page: number,
        pagesize: number,
        total: number,
        itemsList: Array<User.AsObject>,
    }
}

export class UserSelectRequest extends jspb.Message { 
    getData(): string;
    setData(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserSelectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UserSelectRequest): UserSelectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserSelectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserSelectRequest;
    static deserializeBinaryFromReader(message: UserSelectRequest, reader: jspb.BinaryReader): UserSelectRequest;
}

export namespace UserSelectRequest {
    export type AsObject = {
        data: string,
    }
}

export class GetAclsByRolesRequest extends jspb.Message { 
    clearRolesList(): void;
    getRolesList(): Array<string>;
    setRolesList(value: Array<string>): void;
    addRoles(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAclsByRolesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAclsByRolesRequest): GetAclsByRolesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAclsByRolesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAclsByRolesRequest;
    static deserializeBinaryFromReader(message: GetAclsByRolesRequest, reader: jspb.BinaryReader): GetAclsByRolesRequest;
}

export namespace GetAclsByRolesRequest {
    export type AsObject = {
        rolesList: Array<string>,
    }
}

export class AclObjectsListRequest extends jspb.Message { 
    getPage(): number;
    setPage(value: number): void;

    getPagesize(): number;
    setPagesize(value: number): void;

    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;

    clearOrderList(): void;
    getOrderList(): Array<OrderField>;
    setOrderList(value: Array<OrderField>): void;
    addOrder(value?: OrderField, index?: number): OrderField;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AclObjectsListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AclObjectsListRequest): AclObjectsListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AclObjectsListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AclObjectsListRequest;
    static deserializeBinaryFromReader(message: AclObjectsListRequest, reader: jspb.BinaryReader): AclObjectsListRequest;
}

export namespace AclObjectsListRequest {
    export type AsObject = {
        page: number,
        pagesize: number,
        id: number,
        name: string,
        orderList: Array<OrderField.AsObject>,
    }
}

export class AclObjectsList extends jspb.Message { 
    clearObjectsList(): void;
    getObjectsList(): Array<AclObject>;
    setObjectsList(value: Array<AclObject>): void;
    addObjects(value?: AclObject, index?: number): AclObject;

    getPage(): number;
    setPage(value: number): void;

    getPagesize(): number;
    setPagesize(value: number): void;

    getTotal(): number;
    setTotal(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AclObjectsList.AsObject;
    static toObject(includeInstance: boolean, msg: AclObjectsList): AclObjectsList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AclObjectsList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AclObjectsList;
    static deserializeBinaryFromReader(message: AclObjectsList, reader: jspb.BinaryReader): AclObjectsList;
}

export namespace AclObjectsList {
    export type AsObject = {
        objectsList: Array<AclObject.AsObject>,
        page: number,
        pagesize: number,
        total: number,
    }
}

export class AclObjectsArray extends jspb.Message { 
    clearObjectsList(): void;
    getObjectsList(): Array<AclObject>;
    setObjectsList(value: Array<AclObject>): void;
    addObjects(value?: AclObject, index?: number): AclObject;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AclObjectsArray.AsObject;
    static toObject(includeInstance: boolean, msg: AclObjectsArray): AclObjectsArray.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AclObjectsArray, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AclObjectsArray;
    static deserializeBinaryFromReader(message: AclObjectsArray, reader: jspb.BinaryReader): AclObjectsArray;
}

export namespace AclObjectsArray {
    export type AsObject = {
        objectsList: Array<AclObject.AsObject>,
    }
}

export class GetAclsByRolesResponse extends jspb.Message { 

    getAclsMap(): jspb.Map<string, AclObjectsArray>;
    clearAclsMap(): void;


    hasError(): boolean;
    clearError(): void;
    getError(): base_base_pb.Error | undefined;
    setError(value?: base_base_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAclsByRolesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAclsByRolesResponse): GetAclsByRolesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAclsByRolesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAclsByRolesResponse;
    static deserializeBinaryFromReader(message: GetAclsByRolesResponse, reader: jspb.BinaryReader): GetAclsByRolesResponse;
}

export namespace GetAclsByRolesResponse {
    export type AsObject = {

        aclsMap: Array<[string, AclObjectsArray.AsObject]>,
        error?: base_base_pb.Error.AsObject,
    }
}

export class AclObjectsByRole extends jspb.Message { 
    getRole(): string;
    setRole(value: string): void;

    clearObjectsList(): void;
    getObjectsList(): Array<AclObject>;
    setObjectsList(value: Array<AclObject>): void;
    addObjects(value?: AclObject, index?: number): AclObject;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AclObjectsByRole.AsObject;
    static toObject(includeInstance: boolean, msg: AclObjectsByRole): AclObjectsByRole.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AclObjectsByRole, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AclObjectsByRole;
    static deserializeBinaryFromReader(message: AclObjectsByRole, reader: jspb.BinaryReader): AclObjectsByRole;
}

export namespace AclObjectsByRole {
    export type AsObject = {
        role: string,
        objectsList: Array<AclObject.AsObject>,
    }
}

export class GetAclsByRolesArrayResponse extends jspb.Message { 
    clearAclsList(): void;
    getAclsList(): Array<AclObjectsByRole>;
    setAclsList(value: Array<AclObjectsByRole>): void;
    addAcls(value?: AclObjectsByRole, index?: number): AclObjectsByRole;


    hasError(): boolean;
    clearError(): void;
    getError(): base_base_pb.Error | undefined;
    setError(value?: base_base_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAclsByRolesArrayResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAclsByRolesArrayResponse): GetAclsByRolesArrayResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAclsByRolesArrayResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAclsByRolesArrayResponse;
    static deserializeBinaryFromReader(message: GetAclsByRolesArrayResponse, reader: jspb.BinaryReader): GetAclsByRolesArrayResponse;
}

export namespace GetAclsByRolesArrayResponse {
    export type AsObject = {
        aclsList: Array<AclObjectsByRole.AsObject>,
        error?: base_base_pb.Error.AsObject,
    }
}

export class AclObject extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;

    clearFieldsList(): void;
    getFieldsList(): Array<AclField>;
    setFieldsList(value: Array<AclField>): void;
    addFields(value?: AclField, index?: number): AclField;

    clearActionsList(): void;
    getActionsList(): Array<AclAction>;
    setActionsList(value: Array<AclAction>): void;
    addActions(value?: AclAction, index?: number): AclAction;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AclObject.AsObject;
    static toObject(includeInstance: boolean, msg: AclObject): AclObject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AclObject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AclObject;
    static deserializeBinaryFromReader(message: AclObject, reader: jspb.BinaryReader): AclObject;
}

export namespace AclObject {
    export type AsObject = {
        id: number,
        name: string,
        fieldsList: Array<AclField.AsObject>,
        actionsList: Array<AclAction.AsObject>,
    }
}

export class AclField extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getObjectid(): number;
    setObjectid(value: number): void;

    getName(): string;
    setName(value: string): void;

    clearActionsList(): void;
    getActionsList(): Array<AclAction>;
    setActionsList(value: Array<AclAction>): void;
    addActions(value?: AclAction, index?: number): AclAction;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AclField.AsObject;
    static toObject(includeInstance: boolean, msg: AclField): AclField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AclField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AclField;
    static deserializeBinaryFromReader(message: AclField, reader: jspb.BinaryReader): AclField;
}

export namespace AclField {
    export type AsObject = {
        id: number,
        objectid: number,
        name: string,
        actionsList: Array<AclAction.AsObject>,
    }
}

export class AclFieldsListRequest extends jspb.Message { 
    getPage(): number;
    setPage(value: number): void;

    getPagesize(): number;
    setPagesize(value: number): void;

    getId(): number;
    setId(value: number): void;

    getObjectid(): number;
    setObjectid(value: number): void;

    getName(): string;
    setName(value: string): void;

    clearOrderList(): void;
    getOrderList(): Array<OrderField>;
    setOrderList(value: Array<OrderField>): void;
    addOrder(value?: OrderField, index?: number): OrderField;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AclFieldsListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AclFieldsListRequest): AclFieldsListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AclFieldsListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AclFieldsListRequest;
    static deserializeBinaryFromReader(message: AclFieldsListRequest, reader: jspb.BinaryReader): AclFieldsListRequest;
}

export namespace AclFieldsListRequest {
    export type AsObject = {
        page: number,
        pagesize: number,
        id: number,
        objectid: number,
        name: string,
        orderList: Array<OrderField.AsObject>,
    }
}

export class AclFieldsList extends jspb.Message { 
    getPage(): number;
    setPage(value: number): void;

    getPagesize(): number;
    setPagesize(value: number): void;

    getTotal(): number;
    setTotal(value: number): void;

    clearFieldsList(): void;
    getFieldsList(): Array<AclField>;
    setFieldsList(value: Array<AclField>): void;
    addFields(value?: AclField, index?: number): AclField;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AclFieldsList.AsObject;
    static toObject(includeInstance: boolean, msg: AclFieldsList): AclFieldsList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AclFieldsList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AclFieldsList;
    static deserializeBinaryFromReader(message: AclFieldsList, reader: jspb.BinaryReader): AclFieldsList;
}

export namespace AclFieldsList {
    export type AsObject = {
        page: number,
        pagesize: number,
        total: number,
        fieldsList: Array<AclField.AsObject>,
    }
}

export class Role extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;

    getIsadmin(): boolean;
    setIsadmin(value: boolean): void;

    getIspublic(): boolean;
    setIspublic(value: boolean): void;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;


    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Role.AsObject;
    static toObject(includeInstance: boolean, msg: Role): Role.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Role, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Role;
    static deserializeBinaryFromReader(message: Role, reader: jspb.BinaryReader): Role;
}

export namespace Role {
    export type AsObject = {
        id: number,
        name: string,
        isadmin: boolean,
        ispublic: boolean,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class RolesList extends jspb.Message { 
    clearRolesList(): void;
    getRolesList(): Array<Role>;
    setRolesList(value: Array<Role>): void;
    addRoles(value?: Role, index?: number): Role;

    getPage(): number;
    setPage(value: number): void;

    getPagesize(): number;
    setPagesize(value: number): void;

    getTotal(): number;
    setTotal(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RolesList.AsObject;
    static toObject(includeInstance: boolean, msg: RolesList): RolesList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RolesList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RolesList;
    static deserializeBinaryFromReader(message: RolesList, reader: jspb.BinaryReader): RolesList;
}

export namespace RolesList {
    export type AsObject = {
        rolesList: Array<Role.AsObject>,
        page: number,
        pagesize: number,
        total: number,
    }
}

export class AllRolesList extends jspb.Message { 
    clearRolesList(): void;
    getRolesList(): Array<Role>;
    setRolesList(value: Array<Role>): void;
    addRoles(value?: Role, index?: number): Role;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AllRolesList.AsObject;
    static toObject(includeInstance: boolean, msg: AllRolesList): AllRolesList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AllRolesList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AllRolesList;
    static deserializeBinaryFromReader(message: AllRolesList, reader: jspb.BinaryReader): AllRolesList;
}

export namespace AllRolesList {
    export type AsObject = {
        rolesList: Array<Role.AsObject>,
    }
}

export class AclActionType extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;

    getType(): AclType;
    setType(value: AclType): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AclActionType.AsObject;
    static toObject(includeInstance: boolean, msg: AclActionType): AclActionType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AclActionType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AclActionType;
    static deserializeBinaryFromReader(message: AclActionType, reader: jspb.BinaryReader): AclActionType;
}

export namespace AclActionType {
    export type AsObject = {
        id: number,
        name: string,
        type: AclType,
    }
}

export class AclTypeFilter extends jspb.Message { 
    getAcltype(): AclType;
    setAcltype(value: AclType): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AclTypeFilter.AsObject;
    static toObject(includeInstance: boolean, msg: AclTypeFilter): AclTypeFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AclTypeFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AclTypeFilter;
    static deserializeBinaryFromReader(message: AclTypeFilter, reader: jspb.BinaryReader): AclTypeFilter;
}

export namespace AclTypeFilter {
    export type AsObject = {
        acltype: AclType,
    }
}

export class AclActionTypesListRequest extends jspb.Message { 
    getPage(): number;
    setPage(value: number): void;

    getPagesize(): number;
    setPagesize(value: number): void;

    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;


    hasType(): boolean;
    clearType(): void;
    getType(): AclTypeFilter | undefined;
    setType(value?: AclTypeFilter): void;

    clearOrderList(): void;
    getOrderList(): Array<OrderField>;
    setOrderList(value: Array<OrderField>): void;
    addOrder(value?: OrderField, index?: number): OrderField;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AclActionTypesListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AclActionTypesListRequest): AclActionTypesListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AclActionTypesListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AclActionTypesListRequest;
    static deserializeBinaryFromReader(message: AclActionTypesListRequest, reader: jspb.BinaryReader): AclActionTypesListRequest;
}

export namespace AclActionTypesListRequest {
    export type AsObject = {
        page: number,
        pagesize: number,
        id: number,
        name: string,
        type?: AclTypeFilter.AsObject,
        orderList: Array<OrderField.AsObject>,
    }
}

export class AclActionTypesList extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<AclActionType>;
    setItemsList(value: Array<AclActionType>): void;
    addItems(value?: AclActionType, index?: number): AclActionType;

    getPage(): number;
    setPage(value: number): void;

    getPagesize(): number;
    setPagesize(value: number): void;

    getTotal(): number;
    setTotal(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AclActionTypesList.AsObject;
    static toObject(includeInstance: boolean, msg: AclActionTypesList): AclActionTypesList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AclActionTypesList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AclActionTypesList;
    static deserializeBinaryFromReader(message: AclActionTypesList, reader: jspb.BinaryReader): AclActionTypesList;
}

export namespace AclActionTypesList {
    export type AsObject = {
        itemsList: Array<AclActionType.AsObject>,
        page: number,
        pagesize: number,
        total: number,
    }
}

export class AclAction extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getRoleid(): number;
    setRoleid(value: number): void;


    hasRole(): boolean;
    clearRole(): void;
    getRole(): IdNameObj | undefined;
    setRole(value?: IdNameObj): void;

    getObjectid(): number;
    setObjectid(value: number): void;


    hasObject(): boolean;
    clearObject(): void;
    getObject(): IdNameObj | undefined;
    setObject(value?: IdNameObj): void;

    getFieldid(): number;
    setFieldid(value: number): void;


    hasField(): boolean;
    clearField(): void;
    getField(): IdNameObj | undefined;
    setField(value?: IdNameObj): void;


    hasActiontype(): boolean;
    clearActiontype(): void;
    getActiontype(): AclActionType | undefined;
    setActiontype(value?: AclActionType): void;

    getCondition(): string;
    setCondition(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AclAction.AsObject;
    static toObject(includeInstance: boolean, msg: AclAction): AclAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AclAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AclAction;
    static deserializeBinaryFromReader(message: AclAction, reader: jspb.BinaryReader): AclAction;
}

export namespace AclAction {
    export type AsObject = {
        id: number,
        roleid: number,
        role?: IdNameObj.AsObject,
        objectid: number,
        object?: IdNameObj.AsObject,
        fieldid: number,
        field?: IdNameObj.AsObject,
        actiontype?: AclActionType.AsObject,
        condition: string,
    }
}

export class AclActionsList extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<AclAction>;
    setItemsList(value: Array<AclAction>): void;
    addItems(value?: AclAction, index?: number): AclAction;

    getPage(): number;
    setPage(value: number): void;

    getPagesize(): number;
    setPagesize(value: number): void;

    getTotal(): number;
    setTotal(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AclActionsList.AsObject;
    static toObject(includeInstance: boolean, msg: AclActionsList): AclActionsList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AclActionsList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AclActionsList;
    static deserializeBinaryFromReader(message: AclActionsList, reader: jspb.BinaryReader): AclActionsList;
}

export namespace AclActionsList {
    export type AsObject = {
        itemsList: Array<AclAction.AsObject>,
        page: number,
        pagesize: number,
        total: number,
    }
}

export class IdNameObj extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IdNameObj.AsObject;
    static toObject(includeInstance: boolean, msg: IdNameObj): IdNameObj.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IdNameObj, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IdNameObj;
    static deserializeBinaryFromReader(message: IdNameObj, reader: jspb.BinaryReader): IdNameObj;
}

export namespace IdNameObj {
    export type AsObject = {
        id: number,
        name: string,
    }
}

export class AclActionsListRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getRoleid(): number;
    setRoleid(value: number): void;

    getObjectid(): number;
    setObjectid(value: number): void;

    getFieldid(): number;
    setFieldid(value: number): void;

    getActiontype(): number;
    setActiontype(value: number): void;

    getCondition(): string;
    setCondition(value: string): void;

    getPage(): number;
    setPage(value: number): void;

    getPagesize(): number;
    setPagesize(value: number): void;

    clearOrderList(): void;
    getOrderList(): Array<OrderField>;
    setOrderList(value: Array<OrderField>): void;
    addOrder(value?: OrderField, index?: number): OrderField;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AclActionsListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AclActionsListRequest): AclActionsListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AclActionsListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AclActionsListRequest;
    static deserializeBinaryFromReader(message: AclActionsListRequest, reader: jspb.BinaryReader): AclActionsListRequest;
}

export namespace AclActionsListRequest {
    export type AsObject = {
        id: number,
        roleid: number,
        objectid: number,
        fieldid: number,
        actiontype: number,
        condition: string,
        page: number,
        pagesize: number,
        orderList: Array<OrderField.AsObject>,
    }
}

export class UsersListRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;


    hasBlocked(): boolean;
    clearBlocked(): void;
    getBlocked(): BoolFilter | undefined;
    setBlocked(value?: BoolFilter): void;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;


    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getPage(): number;
    setPage(value: number): void;

    getPagesize(): number;
    setPagesize(value: number): void;

    clearOrderList(): void;
    getOrderList(): Array<OrderField>;
    setOrderList(value: Array<OrderField>): void;
    addOrder(value?: OrderField, index?: number): OrderField;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsersListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UsersListRequest): UsersListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsersListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsersListRequest;
    static deserializeBinaryFromReader(message: UsersListRequest, reader: jspb.BinaryReader): UsersListRequest;
}

export namespace UsersListRequest {
    export type AsObject = {
        id: string,
        email: string,
        blocked?: BoolFilter.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        page: number,
        pagesize: number,
        orderList: Array<OrderField.AsObject>,
    }
}

export class RolesListRequest extends jspb.Message { 
    getPage(): number;
    setPage(value: number): void;

    getPagesize(): number;
    setPagesize(value: number): void;

    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;


    hasIsadmin(): boolean;
    clearIsadmin(): void;
    getIsadmin(): BoolFilter | undefined;
    setIsadmin(value?: BoolFilter): void;


    hasIspublic(): boolean;
    clearIspublic(): void;
    getIspublic(): BoolFilter | undefined;
    setIspublic(value?: BoolFilter): void;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;


    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    clearOrderList(): void;
    getOrderList(): Array<OrderField>;
    setOrderList(value: Array<OrderField>): void;
    addOrder(value?: OrderField, index?: number): OrderField;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RolesListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RolesListRequest): RolesListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RolesListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RolesListRequest;
    static deserializeBinaryFromReader(message: RolesListRequest, reader: jspb.BinaryReader): RolesListRequest;
}

export namespace RolesListRequest {
    export type AsObject = {
        page: number,
        pagesize: number,
        id: number,
        name: string,
        isadmin?: BoolFilter.AsObject,
        ispublic?: BoolFilter.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        orderList: Array<OrderField.AsObject>,
    }
}

export class OrderField extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getDesc(): boolean;
    setDesc(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderField.AsObject;
    static toObject(includeInstance: boolean, msg: OrderField): OrderField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderField;
    static deserializeBinaryFromReader(message: OrderField, reader: jspb.BinaryReader): OrderField;
}

export namespace OrderField {
    export type AsObject = {
        name: string,
        desc: boolean,
    }
}

export enum AclType {
    CREATE = 0,
    READ = 1,
    UPDATE = 2,
    DELETE = 3,
    CUSTOM = 4,
}
