// package: sc_auth
// file: sc_auth/service.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
// "../github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as base_base_pb from "../base/base_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as sc_auth_common_pb from "../sc_auth/common_pb";

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
    getUser(): sc_auth_common_pb.User | undefined;
    setUser(value?: sc_auth_common_pb.User): void;


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
        user?: sc_auth_common_pb.User.AsObject,
        error?: base_base_pb.Error.AsObject,
    }
}
