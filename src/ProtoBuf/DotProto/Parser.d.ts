import Tokenizer from './Tokenizer';
import {MetaProto} from '../../../interfaces';

declare class Parser {
  /**
   * Constructs a new Parser.
   * @exports ProtoBuf.DotProto.Parser
   * @class prototype parser
   * @param {string} source Source
   * @constructor
   */
  constructor(proto: string);

  /**
   * Whether parsing proto3 or not.
   * @type {boolean}
   */
  proto3: boolean;

  /**
   * Tokenizer.
   * @type {!ProtoBuf.DotProto.Tokenizer}
   * @expose
   */
  tn: Tokenizer;

  /**
   * Parses the source.
   * @returns {!Object}
   * @throws {Error} If the source cannot be parsed
   * @expose
   */
  parse(): MetaProto;

  /**
   * Parses the specified source.
   * @returns {!Object}
   * @throws {Error} If the source cannot be parsed
   * @expose
   */
  static parse(source: any): MetaProto;

  toString(): string;
}
export default Parser;
