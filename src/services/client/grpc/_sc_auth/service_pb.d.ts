// package: sc_auth
// file: sc_auth/service.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as base_base_pb from "../base/base_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class SessionRequest extends jspb.Message { 
    getToken(): string;
    setToken(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SessionRequest): SessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionRequest;
    static deserializeBinaryFromReader(message: SessionRequest, reader: jspb.BinaryReader): SessionRequest;
}

export namespace SessionRequest {
    export type AsObject = {
        token: string,
    }
}

export class SessionInfo extends jspb.Message { 
    getToken(): string;
    setToken(value: string): void;

    getRefreshtoken(): string;
    setRefreshtoken(value: string): void;

    getXsrf(): string;
    setXsrf(value: string): void;


    getPayloadMap(): jspb.Map<string, string>;
    clearPayloadMap(): void;


    hasExpiresAt(): boolean;
    clearExpiresAt(): void;
    getExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): void;


    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): void;


    hasError(): boolean;
    clearError(): void;
    getError(): base_base_pb.Error | undefined;
    setError(value?: base_base_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionInfo.AsObject;
    static toObject(includeInstance: boolean, msg: SessionInfo): SessionInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionInfo;
    static deserializeBinaryFromReader(message: SessionInfo, reader: jspb.BinaryReader): SessionInfo;
}

export namespace SessionInfo {
    export type AsObject = {
        token: string,
        refreshtoken: string,
        xsrf: string,

        payloadMap: Array<[string, string]>,
        expiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        user?: User.AsObject,
        error?: base_base_pb.Error.AsObject,
    }
}

export class UserEmailAndPasswordRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): void;

    getPassword(): string;
    setPassword(value: string): void;


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
