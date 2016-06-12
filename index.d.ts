// Type definitions for ProtoBuf.js
// Project: https://github.com/dcodeIO/ProtoBuf.js
// Definitions by: Panu Horsmalahti <https://github.com/panuhorsmalahti>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import ByteBuffer = require('bytebuffer');
import Long = require('long');

import {Map} from './src/ProtoBuf/Map';
import {Builder} from './src/ProtoBuf/Builder';
import {Reflect} from './src/ProtoBuf/Reflect';

// ==========
// protobufjs/src/ProtoBuf.js

export {ByteBuffer, Long};

/**
 * ProtoBuf.js version.
 * @type {string}
 * @const
 * @expose
 */
export const VERSION: string;

/**
 * Wire types.
 * @type {Object.<string,number>}
 * @const
 * @expose
 */
export const WIRE_TYPES: {
  /**
   * Varint wire type.
   * @type {number}
   * @expose
   */
  VARINT: number;
  /**
   * Fixed 64 bits wire type.
   * @type {number}
   * @const
   * @expose
   */
  BITS64: number;
  /**
   * Length delimited wire type.
   * @type {number}
   * @const
   * @expose
   */
  LDELIM: number;
  /**
   * Start group wire type.
   * @type {number}
   * @const
   * @expose
   */
  STARTGROUP: number;
  /**
   * End group wire type.
   * @type {number}
   * @const
   * @expose
   */
  ENDGROUP: number;
  /**
   * Fixed 32 bits wire type.
   * @type {number}
   * @const
   * @expose
   */
  BITS32: number;
};

/**
 * Packable wire types.
 * @type {!Array.<number>}
 * @const
 * @expose
 */
export const PACKABLE_WIRE_TYPES: number[];

export interface WireTuple {
  name: string,
  wireType: number,
  defaultValue: number,
}

/**
 * Types.
 * @dict
 * @type {!Object.<string,{name: string, wireType: number, defaultValue: *}>}
 * @const
 * @expose
 */
export const TYPES: {
  [name: string]: WireTuple;
};

/**
 * Valid map key types.
 * @type {!Array.<!Object.<string,{name: string, wireType: number, defaultValue: *}>>}
 * @const
 * @expose
 */
export const MAP_KEY_TYPES: WireTuple[];

/** Maximum field id. */
export const ID_MAX: number;
/** Minimum field id. */
export const ID_MIN: number;

/**
 * If set to `true`, field names will be converted from underscore notation to camel case. Defaults to `false`.
 *  Must be set prior to parsing.
 * @type {boolean}
 * @expose
 */
export var convertFieldsToCamelCase: boolean;

/**
 * By default, messages are populated with (setX, set_x) accessors for each field. This can be disabled by
 *  setting this to `false` prior to building messages.
 * @type {boolean}
 * @expose
 */
export var populateAccessors: boolean;

/**
 * By default, messages are populated with default values if a field is not present on the wire. To disable
 *  this behavior, set this setting to `false`.
 * @type {boolean}
 * @expose
 */
export var populateDefaults: boolean;

// TODO - Util

export interface Lang {
  /** Characters always ending a statement */
  DELIM: RegExp;
  /** Field rules */
  RULE: RegExp;
  /** Field types */
  TYPE: RegExp;
  /** Names */
  NAME: RegExp;
  /** Type definitions */
  TYPEDEF: RegExp;
  /** Type references */
  TYPEREF: RegExp;
  /** Fully qualified type references */
  FQTYPEREF: RegExp;
  /** All numbers */
  NUMBER: RegExp;
  /** Decimal numbers */
  NUMBER_DEC: RegExp;
  /** Hexadecimal numbers */
  NUMBER_HEX: RegExp;
  /** Octal numbers */
  NUMBER_OCT: RegExp;
  /** Floating point numbers */
  NUMBER_FLT: RegExp;
  /** Booleans */
  BOOL: RegExp;
  /** Id numbers */
  ID: RegExp;
  /** Negative id numbers (enum values) */
  NEGID: RegExp;
  /** Whitespaces */
  WHITESPACE: RegExp;
  /** All strings */
  STRING: RegExp;
  /** Double quoted strings */
  STRING_DQ: RegExp;
  /** Single quoted strings */
  STRING_SQ: RegExp;

  [key: string]: RegExp;
}
export const Lang: Lang;

import * as DotProto from './src/ProtoBuf/DotProto';

export {DotProto};

export {Reflect};

export {Builder};

export {Map};

/**
 * Loads a .proto string and returns the Builder.
 * @param {string} proto .proto file contents
 * @param {(ProtoBuf.Builder|string|{root: string, file: string})=} builder Builder to append to. Will create a new one if omitted.
 * @param {(string|{root: string, file: string})=} filename The corresponding file name if known. Must be specified for imports.
 * @return {ProtoBuf.Builder} Builder to create new messages
 * @throws {Error} If the definition cannot be parsed or built
 * @expose
 */
export function loadProto(proto: string, builder?: Builder,
    filename?: string): Builder;

/**
 * Loads a .proto string and returns the Builder. This is an alias of {@link ProtoBuf.loadProto}.
 * @function
 * @param {string} proto .proto file contents
 * @param {(ProtoBuf.Builder|string)=} builder Builder to append to. Will create a new one if omitted.
 * @param {(string|{root: string, file: string})=} filename The corresponding file name if known. Must be specified for imports.
 * @return {ProtoBuf.Builder} Builder to create new messages
 * @throws {Error} If the definition cannot be parsed or built
 * @expose
 */
export function protoFromString(proto: string, builder?: Builder,
    filename?: string): Builder; // Legacy

/**
 * Loads a .proto file and returns the Builder.
 * @param {string|{root: string, file: string}} filename Path to proto file or an object specifying 'file' with
 *  an overridden 'root' path for all imported files.
 * @param {function(?Error, !ProtoBuf.Builder=)=} callback Callback that will receive `null` as the first and
 *  the Builder as its second argument on success, otherwise the error as its first argument. If omitted, the
 *  file will be read synchronously and this function will return the Builder.
 * @param {ProtoBuf.Builder=} builder Builder to append to. Will create a new one if omitted.
 * @return {?ProtoBuf.Builder|undefined} The Builder if synchronous (no callback specified, will be NULL if the
 *   request has failed), else undefined
 * @expose
 */
export function loadProtoFile(filePath: string,
    callback?: (error: any, builder: Builder) => void,
    builder?: Builder): Builder;
export function loadProtoFile(filePath: string,
    builder?: Builder): Builder;

/**
 * Loads a .proto file and returns the Builder. This is an alias of {@link ProtoBuf.loadProtoFile}.
 * @function
 * @param {string|{root: string, file: string}} filename Path to proto file or an object specifying 'file' with
 *  an overridden 'root' path for all imported files.
 * @param {function(?Error, !ProtoBuf.Builder=)=} callback Callback that will receive `null` as the first and
 *  the Builder as its second argument on success, otherwise the error as its first argument. If omitted, the
 *  file will be read synchronously and this function will return the Builder.
 * @param {ProtoBuf.Builder=} builder Builder to append to. Will create a new one if omitted.
 * @return {!ProtoBuf.Builder|undefined} The Builder if synchronous (no callback specified, will be NULL if the
 *   request has failed), else undefined
 * @expose
 */

export function protoFromFile(filePath: string,
    callback?: (error: any, builder: Builder) => void,
    builder?: Builder): Builder; // Legacy
export function protoFromFile(filePath: string,
    builder?: Builder): Builder; // Legacy

/**
 * Constructs a new empty Builder.
 * @param {Object.<string,*>=} options Builder options, defaults to global options set on ProtoBuf
 * @return {!ProtoBuf.Builder} Builder
 * @expose
 */
export function newBuilder(options?: {[key: string]: any}): Builder;

/**
 * Loads a .json definition and returns the Builder.
 * @param {!*|string} json JSON definition
 * @param {(ProtoBuf.Builder|string|{root: string, file: string})=} builder Builder to append to. Will create a new one if omitted.
 * @param {(string|{root: string, file: string})=} filename The corresponding file name if known. Must be specified for imports.
 * @return {ProtoBuf.Builder} Builder to create new messages
 * @throws {Error} If the definition cannot be parsed or built
 * @expose
 */
export function loadJson(
  json: string,
  builder?: Builder | string | { root: string, file: string },
  filename?: string | { root: string, file: string }
): Builder;

/**
 * Loads a .json file and returns the Builder.
 * @param {string|!{root: string, file: string}} filename Path to json file or an object specifying 'file' with
 *  an overridden 'root' path for all imported files.
 * @param {function(?Error, !ProtoBuf.Builder=)=} callback Callback that will receive `null` as the first and
 *  the Builder as its second argument on success, otherwise the error as its first argument. If omitted, the
 *  file will be read synchronously and this function will return the Builder.
 * @param {ProtoBuf.Builder=} builder Builder to append to. Will create a new one if omitted.
 * @return {?ProtoBuf.Builder|undefined} The Builder if synchronous (no callback specified, will be NULL if the
 *   request has failed), else undefined
 * @expose
 */
export function loadJsonFile(
  filename: string | { root: string, file: string },
  callback: (error: Error, builder: Builder) => void,
  builder?: Builder
): void;
export function loadJsonFile(
  filename: string | { root: string, file: string },
  builder?: Builder
): Builder;

/**
 * TODO: Confirm that message needs no further implementation
 */
export interface Message {
    new(values?: {[key: string]: any}, var_args?: string[]): Message;
    [field: string]: any;
}

/**
 * TODO: Implement service interface
 */
export interface Service {
    new(rpcImpl?: Function): Service;
}


export * from './interfaces';
