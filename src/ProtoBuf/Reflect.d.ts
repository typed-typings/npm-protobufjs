import {Builder} from './Builder';

/**
 * Reflection types.
 * @exports ProtoBuf.Reflect
 * @namespace
 */
export namespace Reflect {
  /**
   * @alias ProtoBuf.Reflect.T
   * @expose
   */
  export class T {
    /**
     * Constructs a Reflect base class.
     * @exports ProtoBuf.Reflect.T
     * @constructor
     * @abstract
     * @param {!ProtoBuf.Builder} builder Builder reference
     * @param {?ProtoBuf.Reflect.T} parent Parent object
     * @param {string} name Object name
     */
    constructor(builder: Builder, parent: T, name: string);

    /**
     * Builder reference.
     * @type {!ProtoBuf.Builder}
     * @expose
     */
    builder: Builder;

    /**
     * Parent object.
     * @type {?ProtoBuf.Reflect.T}
     * @expose
     */
    parent: T;

    /**
     * Object name in namespace.
     * @type {string}
     * @expose
     */
    name: string;

    /**
     * Fully qualified class name
     * @type {string}
     * @expose
     */
    className: string;

    /**
     * Returns the fully qualified name of this object.
     * @returns {string} Fully qualified name as of ".PATH.TO.THIS"
     * @expose
     */
    fqn(): string;

    /**
     * Returns a string representation of this Reflect object (its fully qualified name).
     * @param {boolean=} includeClass Set to true to include the class name. Defaults to false.
     * @return String representation
     * @expose
     */
    toString(includeClass?: boolean): string;

    /**
     * Builds this type.
     * @throws {Error} If this type cannot be built directly
     * @expose
     */
    build(): any;
  }

  //? include("Reflect/Namespace.js");

  export interface Namespace {
  }
  /**
   * @alias ProtoBuf.Reflect.Namespace
   * @expose
   */
  export const Namespace: Namespace;

  //? include("Reflect/Element.js");

  export interface Element {
  }
  /**
   * @alias ProtoBuf.Reflect.Element
   * @expose
   */
  export const Element: Element;

  //? include("Reflect/Message.js");

  export interface Message {
  }
  /**
   * @alias ProtoBuf.Reflect.Message
   * @expose
   */
  // export const Message: Message;

  export namespace Message {
    //? include("Reflect/Message/Field.js");

    export interface Field {
      //
    }
    /**
     * @alias ProtoBuf.Reflect.Message.Field
     * @expose
     */
    export const Field: Field;

    //? include("Reflect/Message/ExtensionField.js");

    export interface ExtensionField {
      //
    }
    /**
     * @alias ProtoBuf.Reflect.Message.ExtensionField
     * @expose
     */
    export const ExtensionField: ExtensionField;

    //? include("Reflect/Message/OneOf.js");

    export interface OneOf {
      //
    }
    /**
     * @alias ProtoBuf.Reflect.Message.OneOf
     * @expose
     */
    export const OneOf: OneOf;
  }

  //? include("Reflect/Enum.js");

  export interface Enum {
  }
  /**
   * @alias ProtoBuf.Reflect.Enum
   * @expose
   */
  // export const Enum: Enum;

  export namespace Enum {
    //? include("Reflect/Enum/Value.js");

    export interface Value {
    }
    /**
     * @alias ProtoBuf.Reflect.Enum.Value
     * @expose
     */
    export const Value: Value;
  }

  //? include("Reflect/Extension.js");

  export interface Extension {
  }
  /**
   * @alias ProtoBuf.Reflect.Extension
   * @expose
   */
  export const Extension: Extension;

  //? include("Reflect/Service.js");

  export interface Service {
  }
  /**
   * @alias ProtoBuf.Reflect.Service
   * @expose
   */
  // export const Service: Service;
  export namespace Service {
    //? include("Reflect/Service/Method.js");
    export interface Method {
    }
    /**
     * @alias ProtoBuf.Reflect.Service.Method
     * @expose
     */
    export const Method: Method;

    //? include("Reflect/Service/RPCMethod.js");
    export interface RPCMethod {
    }
    /**
     * @alias ProtoBuf.Reflect.Service.RPCMethod
     * @expose
     */
    export const RPCMethod: RPCMethod;
  }
}

/*

// ==========
// protobufjs/src/ProtoBuf/Reflect.js

export interface Reflect {
    T: ReflectT;
    Namespace: ReflectNamespace;
    Message: ReflectMessage;
    Enum: ReflectEnum;
    Extension: ReflectExtension;
    Service: ReflectService;
}

export interface ReflectT {
    new(builder?: Builder, parent?: ReflectT, name?: string): ReflectT;
    builder: Builder;
    parent: ReflectT;
    name: string;
    fqn(): string;
    toString(includeClass?: boolean): string;
}

export interface ReflectNamespace extends ReflectT {
    new(builder?: Builder, parent?: ReflectNamespace, name?: string,
        options?: {[key: string]: any}): ReflectNamespace;
    className: string;
    children: ReflectT[];
    options: {[key: string]: any};
    syntax: string;
    getChildren(type?: ReflectT): ReflectT[];
    addChild(child: ReflectT): void;
    getChild(nameOrId?: string | number): ReflectT;
    resolve(qn: string, excludeFields?: boolean): ReflectNamespace;
    build(): ProtoBuf;
    buildOpt(): {[key: string]: any};
    getOption(name?: string): any;
}

export interface ReflectMessage extends ReflectNamespace {
    new(builder?: Builder, parent?: ReflectNamespace, name?: string,
        options?: {[key: string]: any}, isGroup?: boolean): ReflectMessage;
    Field: ReflectField; // NOTE: only for new ProtoBuf.Reflect.Message.Field();
    ExtensionField: ReflectExtensionField; // NOTE: only for
                                      // new ProtoBuf.Reflect.Message.ExtensionField();
    OneOf: ReflectOneOf; // NOTE: only for new ProtoBuf.Reflect.Message.OneOf();
    extensions: number[];
    clazz(): MetaMessage;
    isGroup: boolean;
    build(rebuild?: boolean): MetaMessage|any;
    encode(message: Message, buffer: Buffer, noVerify?: boolean): Buffer;
    calculate(message: Message): number;
    decode(buffer: Buffer, length?: number, expectedGroupEndId?: number): Message;
}

export interface ReflectEnum extends ReflectNamespace {
    new(builder?: Builder, parent?: ReflectT, name?: string,
        options?: {[key: string]: any}): ReflectEnum;
    Value: ReflectValue; // NOTE: only for new ProtoBuf.Reflect.Enum.Value();
    object: {[key: string]:number};
    build(): {[key: string]: any};
}

export interface ReflectExtension extends ReflectT {
    new(builder?: Builder, parent?: ReflectT, name?: string,
        field?: ReflectField): ReflectExtension;
    field: ReflectField;
}

export interface ReflectService extends ReflectNamespace {
    new(): ReflectService;
    Method: ReflectMethod; // NOTE: only for new ProtoBuf.Reflect.Service.Method();
    RPCMethod: ReflectRPCMethod; // NOTE: only for new ProtoBuf.Reflect.Service.RPCMethod();
    clazz(): Function;
    build(rebuild?: boolean): Function|any;
}

// TODO: check that the runtime instance of this type reflects this definition
export interface ReflectField extends ReflectT {
    new(builder: Builder, message: ReflectMessage, rule: string, type: string,
        name: string, id: number, options: {[key: string]: any}, oneof: ReflectOneOf): ReflectField;
    className: string;
    required: boolean;
    repeated: boolean;
    type: string | WireTuple;
    resolvedType: ReflectT;
    id: number;
    options: {[key: string]: any};
    defaultValue: any;
    oneof: ReflectOneOf;
    originalName: string;
    build(): {[key: string]: any};
    mkLong(value: any, unsigned?: boolean): number;
    verifyValue(value: any, skipRepeated?: boolean): any;
    encode(value: any, buffer: Buffer): Buffer;
    encodeValue(value: any, buffer: Buffer): Buffer;
    calculate(value: any): number;
    calculateValue(value: any): number;
    decode(wireType: number, buffer: Buffer, skipRepeated?: boolean): any;
}

// TODO: check that the runtime instance of this type reflects this definition
export interface ReflectExtensionField extends ReflectField {
    new(builder: Builder, message: ReflectMessage, rule: string, type: string,
        name: string, id: number, options: {[key: string]: any}): ReflectExtensionField;
    extension: ReflectExtension;
}

export interface ReflectOneOf extends ReflectT {
    new(builder?: Builder, message?: ReflectMessage, name?: string): ReflectOneOf;
    fields: ReflectField[];
}

export interface ReflectValue extends ReflectT {
    new(builder?: Builder, enm?: ReflectEnum, name?: string, id?: number): ReflectValue;
    className: string;
    id: number;
}

export interface ReflectMethod extends ReflectT {
    new(builder?: Builder, svc?: ReflectService, name?: string,
        options?: {[key: string]: any}): ReflectMethod;
    className: string;
    options: {[key: string]: any};
    buildOpt(): {[key: string]: any};
}

export interface ReflectRPCMethod extends ReflectMethod {
    new(builder?: Builder, svc?: ReflectService, name?: string, request?: string,
        response?: string, options?: {[key: string]: any}): ReflectRPCMethod;
    requestName: string;
    responseName: string;
    resolvedRequestType: ReflectMessage;
    resolvedResponseType: ReflectMessage;
}
 */