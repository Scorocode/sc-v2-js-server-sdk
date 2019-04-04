// package: base
// file: base/base.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class Error extends jspb.Message { 
    getHttpCode(): number;
    setHttpCode(value: number): void;

    getApiCode(): string;
    setApiCode(value: string): void;

    getMessage(): string;
    setMessage(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
    export type AsObject = {
        httpCode: number,
        apiCode: string,
        message: string,
    }
}

export class SimpleResponse extends jspb.Message { 

    hasError(): boolean;
    clearError(): void;
    getError(): Error | undefined;
    setError(value?: Error): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SimpleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SimpleResponse): SimpleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SimpleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SimpleResponse;
    static deserializeBinaryFromReader(message: SimpleResponse, reader: jspb.BinaryReader): SimpleResponse;
}

export namespace SimpleResponse {
    export type AsObject = {
        error?: Error.AsObject,
    }
}
