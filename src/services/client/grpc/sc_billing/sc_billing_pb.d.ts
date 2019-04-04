// package: sc_billing
// file: sc_billing/sc_billing.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
// "../github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class User extends jspb.Message { 
    getId(): Uint8Array | string;
    getId_asU8(): Uint8Array;
    getId_asB64(): string;
    setId(value: Uint8Array | string): void;


    hasAt(): boolean;
    clearAt(): void;
    getAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setAt(value?: google_protobuf_timestamp_pb.Timestamp): void;


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
        id: Uint8Array | string,
        at?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class RegisterApplicationRequest extends jspb.Message { 
    getId(): Uint8Array | string;
    getId_asU8(): Uint8Array;
    getId_asB64(): string;
    setId(value: Uint8Array | string): void;

    getOwner(): Uint8Array | string;
    getOwner_asU8(): Uint8Array;
    getOwner_asB64(): string;
    setOwner(value: Uint8Array | string): void;


    hasAt(): boolean;
    clearAt(): void;
    getAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setAt(value?: google_protobuf_timestamp_pb.Timestamp): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterApplicationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterApplicationRequest): RegisterApplicationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterApplicationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterApplicationRequest;
    static deserializeBinaryFromReader(message: RegisterApplicationRequest, reader: jspb.BinaryReader): RegisterApplicationRequest;
}

export namespace RegisterApplicationRequest {
    export type AsObject = {
        id: Uint8Array | string,
        owner: Uint8Array | string,
        at?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ChangeApplicationStateRequest extends jspb.Message { 
    getId(): Uint8Array | string;
    getId_asU8(): Uint8Array;
    getId_asB64(): string;
    setId(value: Uint8Array | string): void;

    getState(): AppState;
    setState(value: AppState): void;


    hasAt(): boolean;
    clearAt(): void;
    getAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setAt(value?: google_protobuf_timestamp_pb.Timestamp): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangeApplicationStateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ChangeApplicationStateRequest): ChangeApplicationStateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangeApplicationStateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangeApplicationStateRequest;
    static deserializeBinaryFromReader(message: ChangeApplicationStateRequest, reader: jspb.BinaryReader): ChangeApplicationStateRequest;
}

export namespace ChangeApplicationStateRequest {
    export type AsObject = {
        id: Uint8Array | string,
        state: AppState,
        at?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class FundsRequest extends jspb.Message { 
    getId(): Uint8Array | string;
    getId_asU8(): Uint8Array;
    getId_asB64(): string;
    setId(value: Uint8Array | string): void;

    getAmount(): number;
    setAmount(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FundsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FundsRequest): FundsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FundsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FundsRequest;
    static deserializeBinaryFromReader(message: FundsRequest, reader: jspb.BinaryReader): FundsRequest;
}

export namespace FundsRequest {
    export type AsObject = {
        id: Uint8Array | string,
        amount: number,
    }
}

export enum AppState {
    CREATING = 0,
    ACTIVE = 1,
    SUSPENDED = 2,
    DELETED = 3,
}
