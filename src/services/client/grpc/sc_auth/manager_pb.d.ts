// package: sc_auth
// file: sc_auth/manager.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
// "../github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as base_base_pb from "../base/base_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as sc_auth_common_pb from "../sc_auth/common_pb";

export class ByIdSelectRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ByIdSelectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ByIdSelectRequest): ByIdSelectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ByIdSelectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ByIdSelectRequest;
    static deserializeBinaryFromReader(message: ByIdSelectRequest, reader: jspb.BinaryReader): ByIdSelectRequest;
}

export namespace ByIdSelectRequest {
    export type AsObject = {
        id: number,
    }
}
