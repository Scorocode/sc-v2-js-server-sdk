// package: sc_logger_api
// file: sc_logger_api/sc_logger_api_service.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Select extends jspb.Message { 
    getPart(): number;
    setPart(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Select.AsObject;
    static toObject(includeInstance: boolean, msg: Select): Select.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Select, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Select;
    static deserializeBinaryFromReader(message: Select, reader: jspb.BinaryReader): Select;
}

export namespace Select {
    export type AsObject = {
        part: number,
    }
}

export class SelectResponse extends jspb.Message { 
    getPart(): number;
    setPart(value: number): void;

    getCountParts(): number;
    setCountParts(value: number): void;

    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SelectResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SelectResponse): SelectResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SelectResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SelectResponse;
    static deserializeBinaryFromReader(message: SelectResponse, reader: jspb.BinaryReader): SelectResponse;
}

export namespace SelectResponse {
    export type AsObject = {
        part: number,
        countParts: number,
        data: Uint8Array | string,
    }
}

export class File extends jspb.Message { 
    getBody(): Uint8Array | string;
    getBody_asU8(): Uint8Array;
    getBody_asB64(): string;
    setBody(value: Uint8Array | string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): File.AsObject;
    static toObject(includeInstance: boolean, msg: File): File.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): File;
    static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
}

export namespace File {
    export type AsObject = {
        body: Uint8Array | string,
    }
}

export class GetLastRequest extends jspb.Message { 
    getLinescount(): number;
    setLinescount(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLastRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLastRequest): GetLastRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLastRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLastRequest;
    static deserializeBinaryFromReader(message: GetLastRequest, reader: jspb.BinaryReader): GetLastRequest;
}

export namespace GetLastRequest {
    export type AsObject = {
        linescount: number,
    }
}
