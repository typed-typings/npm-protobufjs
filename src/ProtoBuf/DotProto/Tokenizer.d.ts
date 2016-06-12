declare interface Tokenizer {
  new (proto: string): Tokenizer;
  source: string;
  index: number;
  line: number;
  stack: string[];
  readingString: boolean;
  stringEndsWith: string;
  next(): string;
  peek(): string;
  toString(): string;
}
export default Tokenizer;
