import {Reflect} from './Reflect';
import {Message} from './Builder/Message';
import {ProtoBuf} from '../../interfaces';

export class Builder {
  constructor(options?: { [key: string]: any });

  static isValidMessage(def: { [key: string]: any }): boolean;
  static isValidMessageField(def: { [key: string]: any }): boolean;
  static isValidEnum(def: { [key: string]: any }): boolean;
  static isValidService(def: { [key: string]: any }): boolean;
  static isValidExtend(def: { [key: string]: any }): boolean;

  ns: Reflect.Namespace;
  ptr: Reflect.Namespace;
  resolved: boolean;
  result: ProtoBuf;
  files: string[];
  importRoot: string;
  options: { [key: string]: any };
  syntax: string;
  reset(): void;
  define(pkg: string, options?: { [key: string]: any }): Builder;
  create(defs?: { [key: string]: any }[]): Builder;
  resolveAll(): void;
  build(path?: string): ProtoBuf;
  lookup(path?: string): Reflect.T;
}

export namespace Builder {
  // ----- Base classes -----
  // Exist for the sole purpose of being able to "... instanceof ProtoBuf.Builder.Message" etc.

  /**
   * @alias ProtoBuf.Builder.Message
   */
  export class Message { }

  /**
   * @alias ProtoBuf.Builder.Enum
   */
  export class Enum { }

  /**
   * @alias ProtoBuf.Builder.Message
   */
  export class Service { }
}
