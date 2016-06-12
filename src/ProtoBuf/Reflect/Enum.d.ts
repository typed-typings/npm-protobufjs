import {Builder} from '../Builder';
import {Reflect} from '../Reflect';
import {Namespace} from './Namespace';

export class Enum extends Namespace {
  /**
   * Constructs a new Enum.
   * @exports ProtoBuf.Reflect.Enum
   * @param {!ProtoBuf.Builder} builder Builder reference
   * @param {!ProtoBuf.Reflect.T} parent Parent Reflect object
   * @param {string} name Enum name
   * @param {Object.<string,*>=} options Enum options
   * @param {string?} syntax The syntax level (e.g., proto3)
   * @constructor
   * @extends ProtoBuf.Reflect.Namespace
   */
  constructor(builder: Builder, parent: Reflect.T, name: string, options?: { [key: string]: any }, syntax?: string);

  /**
   * Runtime enum object.
   * @type {Object.<string,number>|null}
   * @expose
   */
  object: { [key: string]: number } | void;

  /**
   * Gets the string name of an enum value.
   * @param {!ProtoBuf.Builder.Enum} enm Runtime enum
   * @param {number} value Enum value
   * @returns {?string} Name or `null` if not present
   * @expose
   */
  static getName(enm: Enum, value: number): string | void;

  /**
   * Builds this enum and returns the runtime counterpart.
   * @param {boolean} rebuild Whether to rebuild or not, defaults to false
   * @returns {!Object.<string,number>}
   * @expose
   */
  build(rebuild?: boolean): { [key: string]: number };
}