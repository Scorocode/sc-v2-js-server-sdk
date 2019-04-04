// package: sc_db_api
// file: sc_db_api/db_api.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
// "../github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as sc_db_api_common_pb from "../sc_db_api/common_pb";

export class ByIdRequest extends jspb.Message { 

    hasDb(): boolean;
    clearDb(): void;
    getDb(): sc_db_api_common_pb.DatabaseRequest | undefined;
    setDb(value?: sc_db_api_common_pb.DatabaseRequest): void;

    getCollection(): string;
    setCollection(value: string): void;

    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ByIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ByIdRequest): ByIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ByIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ByIdRequest;
    static deserializeBinaryFromReader(message: ByIdRequest, reader: jspb.BinaryReader): ByIdRequest;
}

export namespace ByIdRequest {
    export type AsObject = {
        db?: sc_db_api_common_pb.DatabaseRequest.AsObject,
        collection: string,
        key: Uint8Array | string,
    }
}

export class SingleRecord extends jspb.Message { 
    getBody(): Uint8Array | string;
    getBody_asU8(): Uint8Array;
    getBody_asB64(): string;
    setBody(value: Uint8Array | string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleRecord.AsObject;
    static toObject(includeInstance: boolean, msg: SingleRecord): SingleRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleRecord;
    static deserializeBinaryFromReader(message: SingleRecord, reader: jspb.BinaryReader): SingleRecord;
}

export namespace SingleRecord {
    export type AsObject = {
        body: Uint8Array | string,
    }
}

export class SingleRecordResponse extends jspb.Message { 
    clearKeyList(): void;
    getKeyList(): Array<string>;
    setKeyList(value: Array<string>): void;
    addKey(value: string, index?: number): string;


    hasData(): boolean;
    clearData(): void;
    getData(): SingleRecord | undefined;
    setData(value?: SingleRecord): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SingleRecordResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SingleRecordResponse): SingleRecordResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SingleRecordResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SingleRecordResponse;
    static deserializeBinaryFromReader(message: SingleRecordResponse, reader: jspb.BinaryReader): SingleRecordResponse;
}

export namespace SingleRecordResponse {
    export type AsObject = {
        keyList: Array<string>,
        data?: SingleRecord.AsObject,
    }
}

export class OrderField extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getDesc(): boolean;
    setDesc(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderField.AsObject;
    static toObject(includeInstance: boolean, msg: OrderField): OrderField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderField;
    static deserializeBinaryFromReader(message: OrderField, reader: jspb.BinaryReader): OrderField;
}

export namespace OrderField {
    export type AsObject = {
        name: string,
        desc: boolean,
    }
}

export class GetListRequest extends jspb.Message { 

    hasDb(): boolean;
    clearDb(): void;
    getDb(): sc_db_api_common_pb.DatabaseRequest | undefined;
    setDb(value?: sc_db_api_common_pb.DatabaseRequest): void;

    getCollection(): string;
    setCollection(value: string): void;

    getFrom(): number;
    setFrom(value: number): void;

    getLimit(): number;
    setLimit(value: number): void;

    getCalctotal(): boolean;
    setCalctotal(value: boolean): void;


    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): SingleRecord | undefined;
    setFilter(value?: SingleRecord): void;

    clearOrderList(): void;
    getOrderList(): Array<OrderField>;
    setOrderList(value: Array<OrderField>): void;
    addOrder(value?: OrderField, index?: number): OrderField;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetListRequest): GetListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetListRequest;
    static deserializeBinaryFromReader(message: GetListRequest, reader: jspb.BinaryReader): GetListRequest;
}

export namespace GetListRequest {
    export type AsObject = {
        db?: sc_db_api_common_pb.DatabaseRequest.AsObject,
        collection: string,
        from: number,
        limit: number,
        calctotal: boolean,
        filter?: SingleRecord.AsObject,
        orderList: Array<OrderField.AsObject>,
    }
}

export class GetListResponse extends jspb.Message { 
    getTotal(): number;
    setTotal(value: number): void;

    getItems(): Uint8Array | string;
    getItems_asU8(): Uint8Array;
    getItems_asB64(): string;
    setItems(value: Uint8Array | string): void;

    clearKeyList(): void;
    getKeyList(): Array<string>;
    setKeyList(value: Array<string>): void;
    addKey(value: string, index?: number): string;

    getFrom(): number;
    setFrom(value: number): void;

    getLimit(): number;
    setLimit(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetListResponse): GetListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetListResponse;
    static deserializeBinaryFromReader(message: GetListResponse, reader: jspb.BinaryReader): GetListResponse;
}

export namespace GetListResponse {
    export type AsObject = {
        total: number,
        items: Uint8Array | string,
        keyList: Array<string>,
        from: number,
        limit: number,
    }
}

export class UpdateRequest extends jspb.Message { 

    hasDb(): boolean;
    clearDb(): void;
    getDb(): sc_db_api_common_pb.DatabaseRequest | undefined;
    setDb(value?: sc_db_api_common_pb.DatabaseRequest): void;

    getCollection(): string;
    setCollection(value: string): void;

    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): void;


    hasItem(): boolean;
    clearItem(): void;
    getItem(): SingleRecord | undefined;
    setItem(value?: SingleRecord): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRequest;
    static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
    export type AsObject = {
        db?: sc_db_api_common_pb.DatabaseRequest.AsObject,
        collection: string,
        key: Uint8Array | string,
        item?: SingleRecord.AsObject,
    }
}

export class InsertRequest extends jspb.Message { 

    hasDb(): boolean;
    clearDb(): void;
    getDb(): sc_db_api_common_pb.DatabaseRequest | undefined;
    setDb(value?: sc_db_api_common_pb.DatabaseRequest): void;

    getCollection(): string;
    setCollection(value: string): void;


    hasItem(): boolean;
    clearItem(): void;
    getItem(): SingleRecord | undefined;
    setItem(value?: SingleRecord): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InsertRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InsertRequest): InsertRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InsertRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InsertRequest;
    static deserializeBinaryFromReader(message: InsertRequest, reader: jspb.BinaryReader): InsertRequest;
}

export namespace InsertRequest {
    export type AsObject = {
        db?: sc_db_api_common_pb.DatabaseRequest.AsObject,
        collection: string,
        item?: SingleRecord.AsObject,
    }
}
