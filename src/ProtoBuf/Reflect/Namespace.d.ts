import {Builder} from '../Builder';
import {Reflect} from '../Reflect';

export class Namespace {
  /**
   * Constructs a new Namespace.
   * @exports ProtoBuf.Reflect.Namespace
   * @param {!ProtoBuf.Builder} builder Builder reference
   * @param {?ProtoBuf.Reflect.Namespace} parent Namespace parent
   * @param {string} name Namespace name
   * @param {Object.<string,*>=} options Namespace options
   * @param {string?} syntax The syntax level of this definition (e.g., proto3)
   * @constructor
   * @extends ProtoBuf.Reflect.T
   */
  constructor(builder: Builder, parent: Namespace, name: string, options?: { [name: string]: any }, syntax?: string);

  className: string;

  /**
   * Children inside the namespace.
   * @type {!Array.<ProtoBuf.Reflect.T>}
   */
  children: Reflect.T[];

  /**
   * Options.
   * @type {!Object.<string, *>}
   */
  options: { [name: string]: any };

  /**
   * Syntax level (e.g., proto2 or proto3).
   * @type {!string}
   */
  syntax: string;

  /**
   * Returns an array of the namespace's children.
   * @param {ProtoBuf.Reflect.T=} type Filter type (returns instances of this type only). Defaults to null (all children).
   * @return {Array.<ProtoBuf.Reflect.T>}
   * @expose
   */
  getChildren<T extends Reflect.T>(type?: new () => T): T[];

  /**
   * Adds a child to the namespace.
   * @param {ProtoBuf.Reflect.T} child Child
   * @throws {Error} If the child cannot be added (duplicate)
   * @expose
   */
  addChild(child: Reflect.T): void;

  /**
   * Gets a child by its name or id.
   * @param {string|number} nameOrId Child name or id
   * @return {?ProtoBuf.Reflect.T} The child or null if not found
   * @expose
   */
  getChild(nameOrId: string | number): Reflect.T;

  /**
   * Resolves a reflect object inside of this namespace.
   * @param {string|!Array.<string>} qn Qualified name to resolve
   * @param {boolean=} excludeNonNamespace Excludes non-namespace types, defaults to `false`
   * @return {?ProtoBuf.Reflect.Namespace} The resolved type or null if not found
   * @expose
   */
  resolve(qn: string | string[], excludeNonNamespace?: boolean): Namespace;

  /**
   * Determines the shortest qualified name of the specified type, if any, relative to this namespace.
   * @param {!ProtoBuf.Reflect.T} t Reflection type
   * @returns {string} The shortest qualified name or, if there is none, the fqn
   * @expose
   */
  qn(t: Reflect.T): string;

  /**
   * Builds the namespace and returns the runtime counterpart.
   * @return {Object.<string,Function|Object>} Runtime namespace
   * @expose
   */
  build(): { [key: string]: Function | any };

  /**
   * Builds the namespace's '$options' property.
   * @return {Object.<string,*>}
   */
  buildOpt(): { [key: string]: any };

  /**
   * Gets the value assigned to the option with the specified name.
   * @param {string=} name Returns the option value if specified, otherwise all options are returned.
   * @return {*|Object.<string,*>}null} Option value or NULL if there is no such option
   */
  getOption(): { [name: string]: any };
  getOption(name: string): any;
}