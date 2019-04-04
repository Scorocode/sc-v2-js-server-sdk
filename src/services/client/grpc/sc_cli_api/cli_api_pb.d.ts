// package: sc_cli_api
// file: sc_cli_api/cli_api.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
// "../github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class ActivePortsResponse extends jspb.Message { 
    clearPortsList(): void;
    getPortsList(): Array<ActivePort>;
    setPortsList(value: Array<ActivePort>): void;
    addPorts(value?: ActivePort, index?: number): ActivePort;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActivePortsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ActivePortsResponse): ActivePortsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActivePortsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActivePortsResponse;
    static deserializeBinaryFromReader(message: ActivePortsResponse, reader: jspb.BinaryReader): ActivePortsResponse;
}

export namespace ActivePortsResponse {
    export type AsObject = {
        portsList: Array<ActivePort.AsObject>,
    }
}

export class ActivePort extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;

    getLocalport(): number;
    setLocalport(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActivePort.AsObject;
    static toObject(includeInstance: boolean, msg: ActivePort): ActivePort.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActivePort, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActivePort;
    static deserializeBinaryFromReader(message: ActivePort, reader: jspb.BinaryReader): ActivePort;
}

export namespace ActivePort {
    export type AsObject = {
        id: number,
        name: string,
        localport: number,
    }
}

export class Archive extends jspb.Message { 
    getBody(): Uint8Array | string;
    getBody_asU8(): Uint8Array;
    getBody_asB64(): string;
    setBody(value: Uint8Array | string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Archive.AsObject;
    static toObject(includeInstance: boolean, msg: Archive): Archive.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Archive, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Archive;
    static deserializeBinaryFromReader(message: Archive, reader: jspb.BinaryReader): Archive;
}

export namespace Archive {
    export type AsObject = {
        body: Uint8Array | string,
    }
}

export class SurscribeRequest extends jspb.Message { 
    getLinescount(): number;
    setLinescount(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurscribeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SurscribeRequest): SurscribeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurscribeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurscribeRequest;
    static deserializeBinaryFromReader(message: SurscribeRequest, reader: jspb.BinaryReader): SurscribeRequest;
}

export namespace SurscribeRequest {
    export type AsObject = {
        linescount: number,
    }
}

export class SubscribeResponse extends jspb.Message { 
    getBody(): Uint8Array | string;
    getBody_asU8(): Uint8Array;
    getBody_asB64(): string;
    setBody(value: Uint8Array | string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeResponse): SubscribeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeResponse;
    static deserializeBinaryFromReader(message: SubscribeResponse, reader: jspb.BinaryReader): SubscribeResponse;
}

export namespace SubscribeResponse {
    export type AsObject = {
        body: Uint8Array | string,
    }
}

export class CommandHeader extends jspb.Message { 
    getType(): CommandHeader.Type;
    setType(value: CommandHeader.Type): void;

    getClientid(): number;
    setClientid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommandHeader.AsObject;
    static toObject(includeInstance: boolean, msg: CommandHeader): CommandHeader.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommandHeader, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommandHeader;
    static deserializeBinaryFromReader(message: CommandHeader, reader: jspb.BinaryReader): CommandHeader;
}

export namespace CommandHeader {
    export type AsObject = {
        type: CommandHeader.Type,
        clientid: number,
    }

    export enum Type {
    OPEN = 0,
    SEND = 1,
    CLOSE = 2,
    ERROR = 3,
    SHUTDOWN = 4,
    PING = 5,
    CONNECT = 6,
    }

}

export class Command extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): CommandHeader | undefined;
    setHeader(value?: CommandHeader): void;

    getServiceid(): number;
    setServiceid(value: number): void;

    getBody(): Uint8Array | string;
    getBody_asU8(): Uint8Array;
    getBody_asB64(): string;
    setBody(value: Uint8Array | string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Command.AsObject;
    static toObject(includeInstance: boolean, msg: Command): Command.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Command, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Command;
    static deserializeBinaryFromReader(message: Command, reader: jspb.BinaryReader): Command;
}

export namespace Command {
    export type AsObject = {
        header?: CommandHeader.AsObject,
        serviceid: number,
        body: Uint8Array | string,
    }
}

export class RegisterDatabaseRequest extends jspb.Message { 
    getAlias(): string;
    setAlias(value: string): void;

    getName(): string;
    setName(value: string): void;

    getUser(): string;
    setUser(value: string): void;

    getPassword(): string;
    setPassword(value: string): void;

    getEncoding(): string;
    setEncoding(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterDatabaseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterDatabaseRequest): RegisterDatabaseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterDatabaseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterDatabaseRequest;
    static deserializeBinaryFromReader(message: RegisterDatabaseRequest, reader: jspb.BinaryReader): RegisterDatabaseRequest;
}

export namespace RegisterDatabaseRequest {
    export type AsObject = {
        alias: string,
        name: string,
        user: string,
        password: string,
        encoding: string,
    }
}
