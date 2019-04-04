// package: sc_ws_api
// file: sc_ws/ws_api.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class SendMessageRequest extends jspb.Message { 
    getClientaccestocken(): string;
    setClientaccestocken(value: string): void;

    getClientid(): string;
    setClientid(value: string): void;

    getInreplyto(): string;
    setInreplyto(value: string): void;

    getBody(): string;
    setBody(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendMessageRequest): SendMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendMessageRequest;
    static deserializeBinaryFromReader(message: SendMessageRequest, reader: jspb.BinaryReader): SendMessageRequest;
}

export namespace SendMessageRequest {
    export type AsObject = {
        clientaccestocken: string,
        clientid: string,
        inreplyto: string,
        body: string,
    }
}
