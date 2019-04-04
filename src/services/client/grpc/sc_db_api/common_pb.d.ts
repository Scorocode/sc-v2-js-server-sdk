// package: sc_db_api
// file: sc_db_api/common.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class DatabaseRequest extends jspb.Message { 
    getType(): DbType;
    setType(value: DbType): void;

    getName(): string;
    setName(value: string): void;

    getSchema(): string;
    setSchema(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DatabaseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DatabaseRequest): DatabaseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DatabaseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DatabaseRequest;
    static deserializeBinaryFromReader(message: DatabaseRequest, reader: jspb.BinaryReader): DatabaseRequest;
}

export namespace DatabaseRequest {
    export type AsObject = {
        type: DbType,
        name: string,
        schema: string,
    }
}

export enum DbType {
    PG = 0,
    MONGO = 1,
}
