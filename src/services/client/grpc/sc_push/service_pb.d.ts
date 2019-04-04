// package: sc_push
// file: sc_push/service.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as base_base_pb from "../base/base_pb";

export class PushRequestFCM extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PushRequestFCM.AsObject;
    static toObject(includeInstance: boolean, msg: PushRequestFCM): PushRequestFCM.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PushRequestFCM, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PushRequestFCM;
    static deserializeBinaryFromReader(message: PushRequestFCM, reader: jspb.BinaryReader): PushRequestFCM;
}

export namespace PushRequestFCM {
    export type AsObject = {
        data: Uint8Array | string,
    }
}

export class PushRequestAPN extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PushRequestAPN.AsObject;
    static toObject(includeInstance: boolean, msg: PushRequestAPN): PushRequestAPN.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PushRequestAPN, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PushRequestAPN;
    static deserializeBinaryFromReader(message: PushRequestAPN, reader: jspb.BinaryReader): PushRequestAPN;
}

export namespace PushRequestAPN {
    export type AsObject = {
        data: Uint8Array | string,
    }
}

export class PushResponse extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): void;


    hasError(): boolean;
    clearError(): void;
    getError(): base_base_pb.Error | undefined;
    setError(value?: base_base_pb.Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PushResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PushResponse): PushResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PushResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PushResponse;
    static deserializeBinaryFromReader(message: PushResponse, reader: jspb.BinaryReader): PushResponse;
}

export namespace PushResponse {
    export type AsObject = {
        data: Uint8Array | string,
        error?: base_base_pb.Error.AsObject,
    }
}
