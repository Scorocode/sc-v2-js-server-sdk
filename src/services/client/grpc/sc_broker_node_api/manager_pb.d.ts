// package: sc_broker_node_api
// file: sc_broker_node_api/manager.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Timer extends jspb.Message { 
    getType(): Timer.Type;
    setType(value: Timer.Type): void;

    getActive(): boolean;
    setActive(value: boolean): void;

    getStart(): number;
    setStart(value: number): void;

    getNext(): number;
    setNext(value: number): void;


    hasRepeat(): boolean;
    clearRepeat(): void;
    getRepeat(): Timer.Repeat | undefined;
    setRepeat(value?: Timer.Repeat): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Timer.AsObject;
    static toObject(includeInstance: boolean, msg: Timer): Timer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Timer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Timer;
    static deserializeBinaryFromReader(message: Timer, reader: jspb.BinaryReader): Timer;
}

export namespace Timer {
    export type AsObject = {
        type: Timer.Type,
        active: boolean,
        start: number,
        next: number,
        repeat?: Timer.Repeat.AsObject,
    }


    export class Repeat extends jspb.Message { 

    hasCustom(): boolean;
    clearCustom(): void;
    getCustom(): Timer.Repeat.Custom | undefined;
    setCustom(value?: Timer.Repeat.Custom): void;


    hasDaily(): boolean;
    clearDaily(): void;
    getDaily(): Timer.Repeat.Daily | undefined;
    setDaily(value?: Timer.Repeat.Daily): void;


    hasMonthly(): boolean;
    clearMonthly(): void;
    getMonthly(): Timer.Repeat.Monthly | undefined;
    setMonthly(value?: Timer.Repeat.Monthly): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Repeat.AsObject;
        static toObject(includeInstance: boolean, msg: Repeat): Repeat.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Repeat, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Repeat;
        static deserializeBinaryFromReader(message: Repeat, reader: jspb.BinaryReader): Repeat;
    }

    export namespace Repeat {
        export type AsObject = {
        custom?: Timer.Repeat.Custom.AsObject,
        daily?: Timer.Repeat.Daily.AsObject,
        monthly?: Timer.Repeat.Monthly.AsObject,
        }


        export class Custom extends jspb.Message { 
    getMinutes(): number;
    setMinutes(value: number): void;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Custom.AsObject;
            static toObject(includeInstance: boolean, msg: Custom): Custom.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Custom, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Custom;
            static deserializeBinaryFromReader(message: Custom, reader: jspb.BinaryReader): Custom;
        }

        export namespace Custom {
            export type AsObject = {
        minutes: number,
            }
        }

        export class Daily extends jspb.Message { 
    clearDaysList(): void;
    getDaysList(): Array<number>;
    setDaysList(value: Array<number>): void;
    addDays(value: number, index?: number): number;

    getMinutes(): number;
    setMinutes(value: number): void;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Daily.AsObject;
            static toObject(includeInstance: boolean, msg: Daily): Daily.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Daily, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Daily;
            static deserializeBinaryFromReader(message: Daily, reader: jspb.BinaryReader): Daily;
        }

        export namespace Daily {
            export type AsObject = {
        daysList: Array<number>,
        minutes: number,
            }
        }

        export class Monthly extends jspb.Message { 
    clearMonthsList(): void;
    getMonthsList(): Array<number>;
    setMonthsList(value: Array<number>): void;
    addMonths(value: number, index?: number): number;

    clearDaysList(): void;
    getDaysList(): Array<number>;
    setDaysList(value: Array<number>): void;
    addDays(value: number, index?: number): number;

    getLastDate(): boolean;
    setLastDate(value: boolean): void;

    getMinutes(): number;
    setMinutes(value: number): void;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Monthly.AsObject;
            static toObject(includeInstance: boolean, msg: Monthly): Monthly.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Monthly, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Monthly;
            static deserializeBinaryFromReader(message: Monthly, reader: jspb.BinaryReader): Monthly;
        }

        export namespace Monthly {
            export type AsObject = {
        monthsList: Array<number>,
        daysList: Array<number>,
        lastDate: boolean,
        minutes: number,
            }
        }

    }


    export enum Type {
    ONCE = 0,
    CUSTOM = 1,
    DAILY = 2,
    MONTHLY = 3,
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

    getMimetype(): string;
    setMimetype(value: string): void;

    getSize(): number;
    setSize(value: number): void;


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
        mimetype: string,
        size: number,
    }
}

export class Script extends jspb.Message { 
    getPath(): string;
    setPath(value: string): void;

    getCode(): string;
    setCode(value: string): void;


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
        path: string,
        code: string,
    }
}

export class Cron extends jspb.Message { 
    clearRulesList(): void;
    getRulesList(): Array<CronItem>;
    setRulesList(value: Array<CronItem>): void;
    addRules(value?: CronItem, index?: number): CronItem;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cron.AsObject;
    static toObject(includeInstance: boolean, msg: Cron): Cron.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Cron, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Cron;
    static deserializeBinaryFromReader(message: Cron, reader: jspb.BinaryReader): Cron;
}

export namespace Cron {
    export type AsObject = {
        rulesList: Array<CronItem.AsObject>,
    }
}

export class CronItem extends jspb.Message { 
    getPath(): string;
    setPath(value: string): void;


    hasTimer(): boolean;
    clearTimer(): void;
    getTimer(): Timer | undefined;
    setTimer(value?: Timer): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CronItem.AsObject;
    static toObject(includeInstance: boolean, msg: CronItem): CronItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CronItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CronItem;
    static deserializeBinaryFromReader(message: CronItem, reader: jspb.BinaryReader): CronItem;
}

export namespace CronItem {
    export type AsObject = {
        path: string,
        timer?: Timer.AsObject,
    }
}

export class Process extends jspb.Message { 
    getReplica(): string;
    setReplica(value: string): void;

    getPid(): number;
    setPid(value: number): void;

    getPath(): string;
    setPath(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Process.AsObject;
    static toObject(includeInstance: boolean, msg: Process): Process.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Process, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Process;
    static deserializeBinaryFromReader(message: Process, reader: jspb.BinaryReader): Process;
}

export namespace Process {
    export type AsObject = {
        replica: string,
        pid: number,
        path: string,
    }
}

export class ProcessSelect extends jspb.Message { 
    getReplica(): string;
    setReplica(value: string): void;

    getPid(): number;
    setPid(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessSelect.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessSelect): ProcessSelect.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessSelect, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessSelect;
    static deserializeBinaryFromReader(message: ProcessSelect, reader: jspb.BinaryReader): ProcessSelect;
}

export namespace ProcessSelect {
    export type AsObject = {
        replica: string,
        pid: number,
    }
}

export class ProcessInfo extends jspb.Message { 
    getReplica(): string;
    setReplica(value: string): void;

    getPid(): number;
    setPid(value: number): void;

    getPath(): string;
    setPath(value: string): void;

    getCreatedAt(): number;
    setCreatedAt(value: number): void;

    getMemory(): number;
    setMemory(value: number): void;

    getCpu(): number;
    setCpu(value: number): void;

    getState(): ProcessInfo.State;
    setState(value: ProcessInfo.State): void;

    getType(): ProcessInfo.Type;
    setType(value: ProcessInfo.Type): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessInfo): ProcessInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessInfo;
    static deserializeBinaryFromReader(message: ProcessInfo, reader: jspb.BinaryReader): ProcessInfo;
}

export namespace ProcessInfo {
    export type AsObject = {
        replica: string,
        pid: number,
        path: string,
        createdAt: number,
        memory: number,
        cpu: number,
        state: ProcessInfo.State,
        type: ProcessInfo.Type,
    }

    export enum State {
    STOP = 0,
    RUN = 1,
    }

    export enum Type {
    WEBSERVER = 0,
    CRON = 1,
    }

}

export class ProcessList extends jspb.Message { 
    clearListList(): void;
    getListList(): Array<ProcessInfo>;
    setListList(value: Array<ProcessInfo>): void;
    addList(value?: ProcessInfo, index?: number): ProcessInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessList.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessList): ProcessList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessList;
    static deserializeBinaryFromReader(message: ProcessList, reader: jspb.BinaryReader): ProcessList;
}

export namespace ProcessList {
    export type AsObject = {
        listList: Array<ProcessInfo.AsObject>,
    }
}

export class Replica extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getAppName(): string;
    setAppName(value: string): void;

    getVersion(): string;
    setVersion(value: string): void;

    getGoVersion(): string;
    setGoVersion(value: string): void;

    getBuildDate(): string;
    setBuildDate(value: string): void;

    getCommit(): string;
    setCommit(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Replica.AsObject;
    static toObject(includeInstance: boolean, msg: Replica): Replica.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Replica, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Replica;
    static deserializeBinaryFromReader(message: Replica, reader: jspb.BinaryReader): Replica;
}

export namespace Replica {
    export type AsObject = {
        id: string,
        appName: string,
        version: string,
        goVersion: string,
        buildDate: string,
        commit: string,
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
