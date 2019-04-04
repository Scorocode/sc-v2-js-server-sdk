// package: sc_db_api
// file: sc_db_api/db_meta_common.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
// "../github.com/gogo/protobuf/gogoproto/gogo_pb";
import * as sc_db_api_common_pb from "../sc_db_api/common_pb";

export class CollectionMetadata extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getIspublic(): boolean;
    setIspublic(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CollectionMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CollectionMetadata): CollectionMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CollectionMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CollectionMetadata;
    static deserializeBinaryFromReader(message: CollectionMetadata, reader: jspb.BinaryReader): CollectionMetadata;
}

export namespace CollectionMetadata {
    export type AsObject = {
        name: string,
        ispublic: boolean,
    }
}

export class Schema extends jspb.Message { 
    getDbid(): string;
    setDbid(value: string): void;

    getDbname(): string;
    setDbname(value: string): void;

    getName(): string;
    setName(value: string): void;

    getSchemaowner(): string;
    setSchemaowner(value: string): void;

    getDefaultcharactersetcatalog(): string;
    setDefaultcharactersetcatalog(value: string): void;

    getDefaultcharactersetschema(): string;
    setDefaultcharactersetschema(value: string): void;

    getDefaultcharactersetname(): string;
    setDefaultcharactersetname(value: string): void;

    getSqlpath(): string;
    setSqlpath(value: string): void;

    clearCollectionsList(): void;
    getCollectionsList(): Array<CollectionMetadata>;
    setCollectionsList(value: Array<CollectionMetadata>): void;
    addCollections(value?: CollectionMetadata, index?: number): CollectionMetadata;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Schema.AsObject;
    static toObject(includeInstance: boolean, msg: Schema): Schema.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Schema, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Schema;
    static deserializeBinaryFromReader(message: Schema, reader: jspb.BinaryReader): Schema;
}

export namespace Schema {
    export type AsObject = {
        dbid: string,
        dbname: string,
        name: string,
        schemaowner: string,
        defaultcharactersetcatalog: string,
        defaultcharactersetschema: string,
        defaultcharactersetname: string,
        sqlpath: string,
        collectionsList: Array<CollectionMetadata.AsObject>,
    }
}

export class Collection extends jspb.Message { 
    getDbid(): string;
    setDbid(value: string): void;

    getDbname(): string;
    setDbname(value: string): void;

    getSchema(): string;
    setSchema(value: string): void;

    getName(): string;
    setName(value: string): void;

    getType(): string;
    setType(value: string): void;

    getSelfreferencingcolumnname(): string;
    setSelfreferencingcolumnname(value: string): void;

    getReferencegeneration(): string;
    setReferencegeneration(value: string): void;

    getUserdefinedtypecatalog(): string;
    setUserdefinedtypecatalog(value: string): void;

    getUserdefinedtypeschema(): string;
    setUserdefinedtypeschema(value: string): void;

    getUserdefinedtypename(): string;
    setUserdefinedtypename(value: string): void;

    getIsinsertableinto(): string;
    setIsinsertableinto(value: string): void;

    getIstyped(): string;
    setIstyped(value: string): void;

    getCommitaction(): string;
    setCommitaction(value: string): void;

    clearColumnsList(): void;
    getColumnsList(): Array<Column>;
    setColumnsList(value: Array<Column>): void;
    addColumns(value?: Column, index?: number): Column;

    clearPrimarykeyList(): void;
    getPrimarykeyList(): Array<string>;
    setPrimarykeyList(value: Array<string>): void;
    addPrimarykey(value: string, index?: number): string;

    clearIndexesList(): void;
    getIndexesList(): Array<Index>;
    setIndexesList(value: Array<Index>): void;
    addIndexes(value?: Index, index?: number): Index;

    clearForeignkeysList(): void;
    getForeignkeysList(): Array<ForeignKey>;
    setForeignkeysList(value: Array<ForeignKey>): void;
    addForeignkeys(value?: ForeignKey, index?: number): ForeignKey;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Collection.AsObject;
    static toObject(includeInstance: boolean, msg: Collection): Collection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Collection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Collection;
    static deserializeBinaryFromReader(message: Collection, reader: jspb.BinaryReader): Collection;
}

export namespace Collection {
    export type AsObject = {
        dbid: string,
        dbname: string,
        schema: string,
        name: string,
        type: string,
        selfreferencingcolumnname: string,
        referencegeneration: string,
        userdefinedtypecatalog: string,
        userdefinedtypeschema: string,
        userdefinedtypename: string,
        isinsertableinto: string,
        istyped: string,
        commitaction: string,
        columnsList: Array<Column.AsObject>,
        primarykeyList: Array<string>,
        indexesList: Array<Index.AsObject>,
        foreignkeysList: Array<ForeignKey.AsObject>,
    }
}

export class Column extends jspb.Message { 
    getColumnname(): string;
    setColumnname(value: string): void;

    getOrdinalposition(): number;
    setOrdinalposition(value: number): void;

    getColumndefault(): string;
    setColumndefault(value: string): void;

    getIsnullable(): string;
    setIsnullable(value: string): void;

    getDatatype(): string;
    setDatatype(value: string): void;

    getCharactermaximumlength(): number;
    setCharactermaximumlength(value: number): void;

    getCharacteroctetlength(): number;
    setCharacteroctetlength(value: number): void;

    getNumericprecision(): number;
    setNumericprecision(value: number): void;

    getNumericprecisionradix(): number;
    setNumericprecisionradix(value: number): void;

    getNumericscale(): number;
    setNumericscale(value: number): void;

    getCharactersetname(): string;
    setCharactersetname(value: string): void;

    getCollationname(): string;
    setCollationname(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Column.AsObject;
    static toObject(includeInstance: boolean, msg: Column): Column.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Column, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Column;
    static deserializeBinaryFromReader(message: Column, reader: jspb.BinaryReader): Column;
}

export namespace Column {
    export type AsObject = {
        columnname: string,
        ordinalposition: number,
        columndefault: string,
        isnullable: string,
        datatype: string,
        charactermaximumlength: number,
        characteroctetlength: number,
        numericprecision: number,
        numericprecisionradix: number,
        numericscale: number,
        charactersetname: string,
        collationname: string,
    }
}

export class Index extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getType(): Index.Type;
    setType(value: Index.Type): void;

    clearColumnsList(): void;
    getColumnsList(): Array<string>;
    setColumnsList(value: Array<string>): void;
    addColumns(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Index.AsObject;
    static toObject(includeInstance: boolean, msg: Index): Index.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Index, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Index;
    static deserializeBinaryFromReader(message: Index, reader: jspb.BinaryReader): Index;
}

export namespace Index {
    export type AsObject = {
        name: string,
        type: Index.Type,
        columnsList: Array<string>,
    }

    export enum Type {
    UNKNOWN = 0,
    PRIMARY = 1,
    UNIQUE = 2,
    SECONDARY = 3,
    }

}

export class ForeignKey extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    getUpdaterule(): string;
    setUpdaterule(value: string): void;

    getDeleterule(): string;
    setDeleterule(value: string): void;

    getReferencesschema(): string;
    setReferencesschema(value: string): void;

    getReferencestable(): string;
    setReferencestable(value: string): void;

    clearKeycolumnsList(): void;
    getKeycolumnsList(): Array<string>;
    setKeycolumnsList(value: Array<string>): void;
    addKeycolumns(value: string, index?: number): string;

    clearReferencescolumnsList(): void;
    getReferencescolumnsList(): Array<string>;
    setReferencescolumnsList(value: Array<string>): void;
    addReferencescolumns(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ForeignKey.AsObject;
    static toObject(includeInstance: boolean, msg: ForeignKey): ForeignKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ForeignKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ForeignKey;
    static deserializeBinaryFromReader(message: ForeignKey, reader: jspb.BinaryReader): ForeignKey;
}

export namespace ForeignKey {
    export type AsObject = {
        name: string,
        updaterule: string,
        deleterule: string,
        referencesschema: string,
        referencestable: string,
        keycolumnsList: Array<string>,
        referencescolumnsList: Array<string>,
    }
}
