// package: sc_push
// file: sc_push/manager.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as base_base_pb from "../base/base_pb";

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
