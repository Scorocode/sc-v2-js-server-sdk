// package: sc_file_api
// file: sc_file_api/file_api.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class SelectRequest extends jspb.Message { 
    getPath(): string;
    setPath(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SelectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SelectRequest): SelectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SelectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SelectRequest;
    static deserializeBinaryFromReader(message: SelectRequest, reader: jspb.BinaryReader): SelectRequest;
}

export namespace SelectRequest {
    export type AsObject = {
        path: string,
    }
}

export class FolderInfo extends jspb.Message { 
    getPath(): string;
    setPath(value: string): void;

    clearFilesInfoList(): void;
    getFilesInfoList(): Array<FileInfo>;
    setFilesInfoList(value: Array<FileInfo>): void;
    addFilesInfo(value?: FileInfo, index?: number): FileInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FolderInfo.AsObject;
    static toObject(includeInstance: boolean, msg: FolderInfo): FolderInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FolderInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FolderInfo;
    static deserializeBinaryFromReader(message: FolderInfo, reader: jspb.BinaryReader): FolderInfo;
}

export namespace FolderInfo {
    export type AsObject = {
        path: string,
        filesInfoList: Array<FileInfo.AsObject>,
    }
}

export class FileInfo extends jspb.Message { 
    getIsDir(): boolean;
    setIsDir(value: boolean): void;

    getPath(): string;
    setPath(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileInfo.AsObject;
    static toObject(includeInstance: boolean, msg: FileInfo): FileInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileInfo;
    static deserializeBinaryFromReader(message: FileInfo, reader: jspb.BinaryReader): FileInfo;
}

export namespace FileInfo {
    export type AsObject = {
        isDir: boolean,
        path: string,
    }
}

export class UploadRequest extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): Uint8Array | string;
    getBody_asU8(): Uint8Array;
    getBody_asB64(): string;
    setBody(value: Uint8Array | string): void;


    hasPath(): boolean;
    clearPath(): void;
    getPath(): string;
    setPath(value: string): void;


    getRequestCase(): UploadRequest.RequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UploadRequest): UploadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadRequest;
    static deserializeBinaryFromReader(message: UploadRequest, reader: jspb.BinaryReader): UploadRequest;
}

export namespace UploadRequest {
    export type AsObject = {
        body: Uint8Array | string,
        path: string,
    }

    export enum RequestCase {
        REQUEST_NOT_SET = 0,
    
    BODY = 1,

    PATH = 2,

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

export class RenameRequest extends jspb.Message { 
    getPath(): string;
    setPath(value: string): void;

    getNewPath(): string;
    setNewPath(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RenameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RenameRequest): RenameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RenameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RenameRequest;
    static deserializeBinaryFromReader(message: RenameRequest, reader: jspb.BinaryReader): RenameRequest;
}

export namespace RenameRequest {
    export type AsObject = {
        path: string,
        newPath: string,
    }
}
