import {Reflect} from '../Reflect';
import {Builder} from '../Builder';
import ByteBuffer = require('bytebuffer');

export class Message extends Builder.Message {
  /**
   * Constructs a new runtime Message.
   * @name ProtoBuf.Builder.Message
   * @class Barebone of all runtime messages.
   * @param {!Object.<string,*>|string} values Preset values
   * @param {...string} var_args
   * @constructor
   * @throws {Error} If the message cannot be created
   */
  constructor(values: string | { [name: string]: any }, ...var_args: string[]);

  /**
   * Adds a value to a repeated field.
   * @name ProtoBuf.Builder.Message#add
   * @function
   * @param {string} key Field name
   * @param {*} value Value to add
   * @param {boolean=} noAssert Whether to assert the value or not (asserts by default)
   * @returns {!ProtoBuf.Builder.Message} this
   * @throws {Error} If the value cannot be added
   * @expose
   */
  add(key: string, value: any, noAssert?: boolean): this;

  /**
   * Adds a value to a repeated field. This is an alias for {@link ProtoBuf.Builder.Message#add}.
   * @name ProtoBuf.Builder.Message#$add
   * @function
   * @param {string} key Field name
   * @param {*} value Value to add
   * @param {boolean=} noAssert Whether to assert the value or not (asserts by default)
   * @returns {!ProtoBuf.Builder.Message} this
   * @throws {Error} If the value cannot be added
   * @expose
   */
  $add: typeof Message.prototype.add;

  /**
   * Sets a field's value.
   * @name ProtoBuf.Builder.Message#set
   * @function
   * @param {string|!Object.<string,*>} keyOrObj String key or plain object holding multiple values
   * @param {(*|boolean)=} value Value to set if key is a string, otherwise omitted
   * @param {boolean=} noAssert Whether to not assert for an actual field / proper value type, defaults to `false`
   * @returns {!ProtoBuf.Builder.Message} this
   * @throws {Error} If the value cannot be set
   * @expose
   */
  set(key: string, value: any, noAssert?: boolean): this;
  set(obj: { [key: string]: any }, noAssert?: boolean): this;

  /**
   * Sets a field's value. This is an alias for [@link ProtoBuf.Builder.Message#set}.
   * @name ProtoBuf.Builder.Message#$set
   * @function
   * @param {string|!Object.<string,*>} keyOrObj String key or plain object holding multiple values
   * @param {(*|boolean)=} value Value to set if key is a string, otherwise omitted
   * @param {boolean=} noAssert Whether to not assert the value, defaults to `false`
   * @throws {Error} If the value cannot be set
   * @expose
   */
  $set: typeof Message.prototype.set;

  /**
   * Gets a field's value.
   * @name ProtoBuf.Builder.Message#get
   * @function
   * @param {string} key Key
   * @param {boolean=} noAssert Whether to not assert for an actual field, defaults to `false`
   * @return {*} Value
   * @throws {Error} If there is no such field
   * @expose
   */
  get(key: string, noAssert?: boolean): any;

  /**
   * Gets a field's value. This is an alias for {@link ProtoBuf.Builder.Message#$get}.
   * @name ProtoBuf.Builder.Message#$get
   * @function
   * @param {string} key Key
   * @return {*} Value
   * @throws {Error} If there is no such field
   * @expose
   */
  $get: typeof Message.prototype.get;

  // En-/decoding

  /**
   * Encodes the message.
   * @name ProtoBuf.Builder.Message#$encode
   * @function
   * @param {(!ByteBuffer|boolean)=} buffer ByteBuffer to encode to. Will create a new one and flip it if omitted.
   * @param {boolean=} noVerify Whether to not verify field values, defaults to `false`
   * @return {!ByteBuffer} Encoded message as a ByteBuffer
   * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
   *  returns the encoded ByteBuffer in the `encoded` property on the error.
   * @expose
   * @see ProtoBuf.Builder.Message#encode64
   * @see ProtoBuf.Builder.Message#encodeHex
   * @see ProtoBuf.Builder.Message#encodeAB
   */
  encode(noVerify?: boolean): ByteBuffer;
  encode(buffer: ByteBuffer, noVerify?: boolean): ByteBuffer;

  /**
   * Encodes a message using the specified data payload.
   * @param {!Object.<string,*>} data Data payload
   * @param {(!ByteBuffer|boolean)=} buffer ByteBuffer to encode to. Will create a new one and flip it if omitted.
   * @param {boolean=} noVerify Whether to not verify field values, defaults to `false`
   * @return {!ByteBuffer} Encoded message as a ByteBuffer
   * @expose
   */
  static encode(data: { [key: string]: any }, buffer: ByteBuffer, noVerify?: boolean): ByteBuffer;
  static encode(data: { [key: string]: any }, noVerify?: boolean): ByteBuffer;

  /**
   * Calculates the byte length of the message.
   * @name ProtoBuf.Builder.Message#calculate
   * @function
   * @returns {number} Byte length
   * @throws {Error} If the message cannot be calculated or if required fields are missing.
   * @expose
   */
  calculate(): number;

  /**
   * Encodes the varint32 length-delimited message.
   * @name ProtoBuf.Builder.Message#encodeDelimited
   * @function
   * @param {(!ByteBuffer|boolean)=} buffer ByteBuffer to encode to. Will create a new one and flip it if omitted.
   * @param {boolean=} noVerify Whether to not verify field values, defaults to `false`
   * @return {!ByteBuffer} Encoded message as a ByteBuffer
   * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
   *  returns the encoded ByteBuffer in the `encoded` property on the error.
   * @expose
   */
  encodeDelimited(buffer: ByteBuffer, noVerify?: boolean): ByteBuffer;
  encodeDelimited(noVerify?: boolean): ByteBuffer;

  /**
   * Directly encodes the message to an ArrayBuffer.
   * @name ProtoBuf.Builder.Message#encodeAB
   * @function
   * @return {ArrayBuffer} Encoded message as ArrayBuffer
   * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
   *  returns the encoded ArrayBuffer in the `encoded` property on the error.
   * @expose
   */
  encodeAB(): ArrayBuffer;

  /**
   * Returns the message as an ArrayBuffer. This is an alias for {@link ProtoBuf.Builder.Message#encodeAB}.
   * @name ProtoBuf.Builder.Message#toArrayBuffer
   * @function
   * @return {ArrayBuffer} Encoded message as ArrayBuffer
   * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
   *  returns the encoded ArrayBuffer in the `encoded` property on the error.
   * @expose
   */
  toArrayBuffer: typeof Message.prototype.encodeAB;

  /**
   * Directly encodes the message to a node Buffer.
   * @name ProtoBuf.Builder.Message#encodeNB
   * @function
   * @return {!Buffer}
   * @throws {Error} If the message cannot be encoded, not running under node.js or if required fields are
   *  missing. The later still returns the encoded node Buffer in the `encoded` property on the error.
   * @expose
   */
  encodeNB(): Buffer;

  /**
   * Returns the message as a node Buffer. This is an alias for {@link ProtoBuf.Builder.Message#encodeNB}.
   * @name ProtoBuf.Builder.Message#toBuffer
   * @function
   * @return {!Buffer}
   * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
   *  returns the encoded node Buffer in the `encoded` property on the error.
   * @expose
   */
  toBuffer: typeof Message.prototype.encodeNB;

  /**
   * Directly encodes the message to a base64 encoded string.
   * @name ProtoBuf.Builder.Message#encode64
   * @function
   * @return {string} Base64 encoded string
   * @throws {Error} If the underlying buffer cannot be encoded or if required fields are missing. The later
   *  still returns the encoded base64 string in the `encoded` property on the error.
   * @expose
   */
  encode64(): string;

  /**
   * Returns the message as a base64 encoded string. This is an alias for {@link ProtoBuf.Builder.Message#encode64}.
   * @name ProtoBuf.Builder.Message#toBase64
   * @function
   * @return {string} Base64 encoded string
   * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
   *  returns the encoded base64 string in the `encoded` property on the error.
   * @expose
   */
  toBase64: typeof Message.prototype.encode64;

  /**
   * Directly encodes the message to a hex encoded string.
   * @name ProtoBuf.Builder.Message#encodeHex
   * @function
   * @return {string} Hex encoded string
   * @throws {Error} If the underlying buffer cannot be encoded or if required fields are missing. The later
   *  still returns the encoded hex string in the `encoded` property on the error.
   * @expose
   */
  encodeHex(): string;

  /**
   * Returns the message as a hex encoded string. This is an alias for {@link ProtoBuf.Builder.Message#encodeHex}.
   * @name ProtoBuf.Builder.Message#toHex
   * @function
   * @return {string} Hex encoded string
   * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
   *  returns the encoded hex string in the `encoded` property on the error.
   * @expose
   */
  toHex: typeof Message.prototype.encodeHex;

  /**
   * Returns the message's raw payload.
   * @param {boolean=} binaryAsBase64 Whether to include binary data as base64 strings instead of Buffers, defaults to `false`
   * @param {boolean} longsAsStrings Whether to encode longs as strings
   * @returns {Object.<string,*>} Raw payload
   * @expose
   */
  toRaw(binaryAsBase64: boolean, longsAsStrings: boolean): { [key: string]: any };

  /**
   * Encodes a message to JSON.
   * @returns {string} JSON string
   * @expose
   */
  encodeJSON(): string;

  /**
   * Decodes a message from the specified buffer or string.
   * @name ProtoBuf.Builder.Message.decode
   * @function
   * @param {!ByteBuffer|!ArrayBuffer|!Buffer|string} buffer Buffer to decode from
   * @param {(number|string)=} length Message length. Defaults to decode all the remainig data.
   * @param {string=} enc Encoding if buffer is a string: hex, utf8 (not recommended), defaults to base64
   * @return {!ProtoBuf.Builder.Message} Decoded message
   * @throws {Error} If the message cannot be decoded or if required fields are missing. The later still
   *  returns the decoded message with missing fields in the `decoded` property on the error.
   * @expose
   * @see ProtoBuf.Builder.Message.decode64
   * @see ProtoBuf.Builder.Message.decodeHex
   */
  static decode(buffer: ByteBuffer | ArrayBuffer | Buffer | string, length?: number, enc?: string): Message;
  static decode(buffer: ByteBuffer | ArrayBuffer | Buffer | string, enc?: string): Message;

  /**
   * Decodes a varint32 length-delimited message from the specified buffer or string.
   * @name ProtoBuf.Builder.Message.decodeDelimited
   * @function
   * @param {!ByteBuffer|!ArrayBuffer|!Buffer|string} buffer Buffer to decode from
   * @param {string=} enc Encoding if buffer is a string: hex, utf8 (not recommended), defaults to base64
   * @return {ProtoBuf.Builder.Message} Decoded message or `null` if not enough bytes are available yet
   * @throws {Error} If the message cannot be decoded or if required fields are missing. The later still
   *  returns the decoded message with missing fields in the `decoded` property on the error.
   * @expose
   */
  static decodeDelimited(buffer: ByteBuffer | ArrayBuffer | Buffer | string, enc?: string): Message;

  /**
   * Decodes the message from the specified base64 encoded string.
   * @name ProtoBuf.Builder.Message.decode64
   * @function
   * @param {string} str String to decode from
   * @return {!ProtoBuf.Builder.Message} Decoded message
   * @throws {Error} If the message cannot be decoded or if required fields are missing. The later still
   *  returns the decoded message with missing fields in the `decoded` property on the error.
   * @expose
   */
  static decode64(str: string): Message;

  /**
   * Decodes the message from the specified hex encoded string.
   * @name ProtoBuf.Builder.Message.decodeHex
   * @function
   * @param {string} str String to decode from
   * @return {!ProtoBuf.Builder.Message} Decoded message
   * @throws {Error} If the message cannot be decoded or if required fields are missing. The later still
   *  returns the decoded message with missing fields in the `decoded` property on the error.
   * @expose
   */
  static decodeHex(str: string): Message;

  /**
   * Decodes the message from a JSON string.
   * @name ProtoBuf.Builder.Message.decodeJSON
   * @function
   * @param {string} str String to decode from
   * @return {!ProtoBuf.Builder.Message} Decoded message
   * @throws {Error} If the message cannot be decoded or if required fields are
   * missing.
   * @expose
   */
  static decodeJSON(str: string): Message;

  // Utility

  /**
   * Returns a string representation of this Message.
   * @name ProtoBuf.Builder.Message#toString
   * @function
   * @return {string} String representation as of ".Fully.Qualified.MessageName"
   * @expose
   */
  toString(): string;

  // Properties

  /**
   * Message options.
   * @name ProtoBuf.Builder.Message.$options
   * @type {Object.<string,*>}
   * @expose
   */
  $options: { [key: string]: any }; // cc needs this

  /**
   * Message options.
   * @name ProtoBuf.Builder.Message#$options
   * @type {Object.<string,*>}
   * @expose
   */
  static $options: { [key: string]: any }; // cc needs this

  /**
   * Reflection type.
   * @name ProtoBuf.Builder.Message.$type
   * @type {!ProtoBuf.Reflect.Message}
   * @expose
   */
  $type: Reflect.T;

  /**
   * Reflection type.
   * @name ProtoBuf.Builder.Message#$type
   * @type {!ProtoBuf.Reflect.Message}
   * @expose
   */
  static $type: Reflect.T;
}
