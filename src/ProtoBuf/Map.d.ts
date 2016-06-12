import {Reflect} from './Reflect';

/**
 * @alias ProtoBuf.Map
 * @expose
 */
export class Map<Key, Value> {
  /**
   * Constructs a new Map. A Map is a container that is used to implement map
   * fields on message objects. It closely follows the ES6 Map API; however,
   * it is distinct because we do not want to depend on external polyfills or
   * on ES6 itself.
   *
   * @exports ProtoBuf.Map
   * @param {!ProtoBuf.Reflect.Message.Field} field Map field
   * @param {Object.<string,*>=} contents Initial contents
   * @constructor
   */
  constructor(field: Reflect.Message.Field, contents?: { [key: string]: any });

  /**
   * The field corresponding to this map.
   * @type {!ProtoBuf.Reflect.Message.Field}
   */
  field: Reflect.Message.Field;

  /**
   * Element instance corresponding to key type.
   * @type {!ProtoBuf.Reflect.Element}
   */
  keyElem: Reflect.Element;

  /**
   * Element instance corresponding to value type.
   * @type {!ProtoBuf.Reflect.Element}
   */
  valueElem: Reflect.Element;

  /**
   * Internal map: stores mapping of (string form of key) -> (key, value)
   * pair.
   *
   * We provide map semantics for arbitrary key types, but we build on top
   * of an Object, which has only string keys. In order to avoid the need
   * to convert a string key back to its native type in many situations,
   * we store the native key value alongside the value. Thus, we only need
   * a one-way mapping from a key type to its string form that guarantees
   * uniqueness and equality (i.e., str(K1) === str(K2) if and only if K1
   * === K2).
   *
   * @type {!Object<string, {key: *, value: *}>}
   */
  map: {[key: string]: {key: Key, value: Value}};

  /**
   * Returns the number of elements in the map.
   */
  size: number;

  /**
   * Clears the map.
   */
  clear(): void;

  /**
   * Deletes a particular key from the map.
   * @returns {boolean} Whether any entry with this key was deleted.
   */
  delete(key: Key): boolean;

  /**
   * Returns an iterator over [key, value] pairs in the map.
   * @returns {Object} The iterator
   */
  entries(): [Key, Value][];

  /**
   * Returns an iterator over keys in the map.
   * @returns {Object} The iterator
   */
  keys(): Key[];

  /**
   * Returns an iterator over values in the map.
   * @returns {!Object} The iterator
   */
  values(): Value[];

  /**
   * Iterates over entries in the map, calling a function on each.
   * @param {function(this:*, *, *, *)} cb The callback to invoke with value, key, and map arguments.
   * @param {Object=} thisArg The `this` value for the callback
   */
  forEach(cb: (value: Value, key: Key, map: this) => void, thisArg ?: any): void;

  /**
   * Sets a key in the map to the given value.
   * @param {*} key The key
   * @param {*} value The value
   * @returns {!ProtoBuf.Map} The map instance
   */
  set(key: Key, value: Value): this;

  /**
   * Gets the value corresponding to a key in the map.
   * @param {*} key The key
   * @returns {*|undefined} The value, or `undefined` if key not present
   */
  get(key: Key): Value;

  /**
   * Determines whether the given key is present in the map.
   * @param {*} key The key
   * @returns {boolean} `true` if the key is present
   */
  has(key: Key): boolean;
}
