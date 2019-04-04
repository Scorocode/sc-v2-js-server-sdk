// package: sc_db_api
// file: sc_db_api/db_manager_api.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
// "../github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as sc_db_api_db_meta_common_pb from "../sc_db_api/db_meta_common_pb";

export class GetDatabaseRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDatabaseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDatabaseRequest): GetDatabaseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDatabaseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDatabaseRequest;
    static deserializeBinaryFromReader(message: GetDatabaseRequest, reader: jspb.BinaryReader): GetDatabaseRequest;
}

export namespace GetDatabaseRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetDatabasesResponse extends jspb.Message { 
    clearDatabasesList(): void;
    getDatabasesList(): Array<Database>;
    setDatabasesList(value: Array<Database>): void;
    addDatabases(value?: Database, index?: number): Database;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDatabasesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDatabasesResponse): GetDatabasesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDatabasesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDatabasesResponse;
    static deserializeBinaryFromReader(message: GetDatabasesResponse, reader: jspb.BinaryReader): GetDatabasesResponse;
}

export namespace GetDatabasesResponse {
    export type AsObject = {
        databasesList: Array<Database.AsObject>,
    }
}

export class Database extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getEncoding(): string;
    setEncoding(value: string): void;

    getAdminuser(): string;
    setAdminuser(value: string): void;

    getPassword(): string;
    setPassword(value: string): void;

    clearSchemasList(): void;
    getSchemasList(): Array<string>;
    setSchemasList(value: Array<string>): void;
    addSchemas(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Database.AsObject;
    static toObject(includeInstance: boolean, msg: Database): Database.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Database, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Database;
    static deserializeBinaryFromReader(message: Database, reader: jspb.BinaryReader): Database;
}

export namespace Database {
    export type AsObject = {
        id: string,
        name: string,
        encoding: string,
        adminuser: string,
        password: string,
        schemasList: Array<string>,
    }
}

export class DropDatabaseRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DropDatabaseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DropDatabaseRequest): DropDatabaseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DropDatabaseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DropDatabaseRequest;
    static deserializeBinaryFromReader(message: DropDatabaseRequest, reader: jspb.BinaryReader): DropDatabaseRequest;
}

export namespace DropDatabaseRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetSchemasRequest extends jspb.Message { 
    getDbid(): string;
    setDbid(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSchemasRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSchemasRequest): GetSchemasRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSchemasRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSchemasRequest;
    static deserializeBinaryFromReader(message: GetSchemasRequest, reader: jspb.BinaryReader): GetSchemasRequest;
}

export namespace GetSchemasRequest {
    export type AsObject = {
        dbid: string,
    }
}

export class GetSchemasResponse extends jspb.Message { 
    clearSchemasList(): void;
    getSchemasList(): Array<string>;
    setSchemasList(value: Array<string>): void;
    addSchemas(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSchemasResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSchemasResponse): GetSchemasResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSchemasResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSchemasResponse;
    static deserializeBinaryFromReader(message: GetSchemasResponse, reader: jspb.BinaryReader): GetSchemasResponse;
}

export namespace GetSchemasResponse {
    export type AsObject = {
        schemasList: Array<string>,
    }
}

export class GetSchemaRequest extends jspb.Message { 
    getDbid(): string;
    setDbid(value: string): void;

    getSchema(): string;
    setSchema(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSchemaRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSchemaRequest): GetSchemaRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSchemaRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSchemaRequest;
    static deserializeBinaryFromReader(message: GetSchemaRequest, reader: jspb.BinaryReader): GetSchemaRequest;
}

export namespace GetSchemaRequest {
    export type AsObject = {
        dbid: string,
        schema: string,
    }
}

export class GetSchemaCollectionsRequest extends jspb.Message { 
    getDbid(): string;
    setDbid(value: string): void;

    getSchema(): string;
    setSchema(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSchemaCollectionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSchemaCollectionsRequest): GetSchemaCollectionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSchemaCollectionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSchemaCollectionsRequest;
    static deserializeBinaryFromReader(message: GetSchemaCollectionsRequest, reader: jspb.BinaryReader): GetSchemaCollectionsRequest;
}

export namespace GetSchemaCollectionsRequest {
    export type AsObject = {
        dbid: string,
        schema: string,
    }
}

export class GetSchemaCollectionsResponse extends jspb.Message { 
    clearCollectionsList(): void;
    getCollectionsList(): Array<sc_db_api_db_meta_common_pb.CollectionMetadata>;
    setCollectionsList(value: Array<sc_db_api_db_meta_common_pb.CollectionMetadata>): void;
    addCollections(value?: sc_db_api_db_meta_common_pb.CollectionMetadata, index?: number): sc_db_api_db_meta_common_pb.CollectionMetadata;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSchemaCollectionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSchemaCollectionsResponse): GetSchemaCollectionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSchemaCollectionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSchemaCollectionsResponse;
    static deserializeBinaryFromReader(message: GetSchemaCollectionsResponse, reader: jspb.BinaryReader): GetSchemaCollectionsResponse;
}

export namespace GetSchemaCollectionsResponse {
    export type AsObject = {
        collectionsList: Array<sc_db_api_db_meta_common_pb.CollectionMetadata.AsObject>,
    }
}

export class GetCollectionsRequest extends jspb.Message { 
    getDbid(): string;
    setDbid(value: string): void;

    getSchema(): string;
    setSchema(value: string): void;

    clearCollectionsList(): void;
    getCollectionsList(): Array<string>;
    setCollectionsList(value: Array<string>): void;
    addCollections(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCollectionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCollectionsRequest): GetCollectionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCollectionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCollectionsRequest;
    static deserializeBinaryFromReader(message: GetCollectionsRequest, reader: jspb.BinaryReader): GetCollectionsRequest;
}

export namespace GetCollectionsRequest {
    export type AsObject = {
        dbid: string,
        schema: string,
        collectionsList: Array<string>,
    }
}

export class GetCollectionsResponse extends jspb.Message { 
    clearCollectionsList(): void;
    getCollectionsList(): Array<CollectionInfo>;
    setCollectionsList(value: Array<CollectionInfo>): void;
    addCollections(value?: CollectionInfo, index?: number): CollectionInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCollectionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetCollectionsResponse): GetCollectionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCollectionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCollectionsResponse;
    static deserializeBinaryFromReader(message: GetCollectionsResponse, reader: jspb.BinaryReader): GetCollectionsResponse;
}

export namespace GetCollectionsResponse {
    export type AsObject = {
        collectionsList: Array<CollectionInfo.AsObject>,
    }
}

export class GetCollectionRequest extends jspb.Message { 
    getDbid(): string;
    setDbid(value: string): void;

    getSchema(): string;
    setSchema(value: string): void;

    getCollection(): string;
    setCollection(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCollectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCollectionRequest): GetCollectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCollectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCollectionRequest;
    static deserializeBinaryFromReader(message: GetCollectionRequest, reader: jspb.BinaryReader): GetCollectionRequest;
}

export namespace GetCollectionRequest {
    export type AsObject = {
        dbid: string,
        schema: string,
        collection: string,
    }
}

export class CollectionInfo extends jspb.Message { 

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): sc_db_api_db_meta_common_pb.CollectionMetadata | undefined;
    setMetadata(value?: sc_db_api_db_meta_common_pb.CollectionMetadata): void;


    hasCollection(): boolean;
    clearCollection(): void;
    getCollection(): sc_db_api_db_meta_common_pb.Collection | undefined;
    setCollection(value?: sc_db_api_db_meta_common_pb.Collection): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CollectionInfo.AsObject;
    static toObject(includeInstance: boolean, msg: CollectionInfo): CollectionInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CollectionInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CollectionInfo;
    static deserializeBinaryFromReader(message: CollectionInfo, reader: jspb.BinaryReader): CollectionInfo;
}

export namespace CollectionInfo {
    export type AsObject = {
        metadata?: sc_db_api_db_meta_common_pb.CollectionMetadata.AsObject,
        collection?: sc_db_api_db_meta_common_pb.Collection.AsObject,
    }
}

export class ExecuteDdlRequest extends jspb.Message { 
    getDatabasealias(): string;
    setDatabasealias(value: string): void;

    getUp(): string;
    setUp(value: string): void;

    getDown(): string;
    setDown(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecuteDdlRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExecuteDdlRequest): ExecuteDdlRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecuteDdlRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecuteDdlRequest;
    static deserializeBinaryFromReader(message: ExecuteDdlRequest, reader: jspb.BinaryReader): ExecuteDdlRequest;
}

export namespace ExecuteDdlRequest {
    export type AsObject = {
        databasealias: string,
        up: string,
        down: string,
    }
}

export class GetDatabaseLogRequest extends jspb.Message { 
    getDbid(): string;
    setDbid(value: string): void;


    hasAfter(): boolean;
    clearAfter(): void;
    getAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setAfter(value?: google_protobuf_timestamp_pb.Timestamp): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDatabaseLogRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDatabaseLogRequest): GetDatabaseLogRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDatabaseLogRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDatabaseLogRequest;
    static deserializeBinaryFromReader(message: GetDatabaseLogRequest, reader: jspb.BinaryReader): GetDatabaseLogRequest;
}

export namespace GetDatabaseLogRequest {
    export type AsObject = {
        dbid: string,
        after?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class GetDatabaseLogResponse extends jspb.Message { 
    clearScriptsList(): void;
    getScriptsList(): Array<Script>;
    setScriptsList(value: Array<Script>): void;
    addScripts(value?: Script, index?: number): Script;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDatabaseLogResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDatabaseLogResponse): GetDatabaseLogResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDatabaseLogResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDatabaseLogResponse;
    static deserializeBinaryFromReader(message: GetDatabaseLogResponse, reader: jspb.BinaryReader): GetDatabaseLogResponse;
}

export namespace GetDatabaseLogResponse {
    export type AsObject = {
        scriptsList: Array<Script.AsObject>,
    }
}

export class Script extends jspb.Message { 
    getUp(): string;
    setUp(value: string): void;

    getDown(): string;
    setDown(value: string): void;

    getType(): StatementType;
    setType(value: StatementType): void;

    getStatus(): StatementStatus;
    setStatus(value: StatementStatus): void;

    getMessage(): string;
    setMessage(value: string): void;


    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Script.AsObject;
    static toObject(includeInstance: boolean, msg: Script): Script.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Script, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Script;
    static deserializeBinaryFromReader(message: Script, reader: jspb.BinaryReader): Script;
}

export namespace Script {
    export type AsObject = {
        up: string,
        down: string,
        type: StatementType,
        status: StatementStatus,
        message: string,
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class UpdateSchemaCollectionRequest extends jspb.Message { 
    getDbid(): string;
    setDbid(value: string): void;

    getSchema(): string;
    setSchema(value: string): void;


    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): sc_db_api_db_meta_common_pb.CollectionMetadata | undefined;
    setMetadata(value?: sc_db_api_db_meta_common_pb.CollectionMetadata): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSchemaCollectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSchemaCollectionRequest): UpdateSchemaCollectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSchemaCollectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSchemaCollectionRequest;
    static deserializeBinaryFromReader(message: UpdateSchemaCollectionRequest, reader: jspb.BinaryReader): UpdateSchemaCollectionRequest;
}

export namespace UpdateSchemaCollectionRequest {
    export type AsObject = {
        dbid: string,
        schema: string,
        metadata?: sc_db_api_db_meta_common_pb.CollectionMetadata.AsObject,
    }
}

export enum StatementType {
    CUSTOM = 0,
    CREATETABLE = 1,
    DROPTABLE = 2,
}

export enum StatementStatus {
    NEW = 0,
    CANCELED = 1,
    EXECUTED = 2,
    FAILED = 3,
}
