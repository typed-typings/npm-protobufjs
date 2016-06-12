import {Builder} from './src/ProtoBuf/Builder';

// ==========
// proto meta information returned by the Parser

export interface MetaProto {
  package: string;
  messages: ProtoMessage[];
  enums: ProtoEnum[];
  imports: string[];
  options: { [key: string]: any };
  services: ProtoService[];
}

export interface ProtoEnum {
  name: string;
  values: ProtoEnumValue[];
  options: { [key: string]: any };
}

export interface ProtoEnumValue {
  name: string;
  id: string;
}

export interface ProtoField {
  rule: string;
  options: { [key: string]: any };
  type: string;
  name: string;
  id: number;
  oneof?: string;
}

export interface ProtoMessage {
  name: string;
  isGroup?: boolean;
  fields: ProtoField[];
  enums: ProtoEnum[];
  messages: ProtoMessage[];
  options: { [key: string]: any };
  oneofs: { [key: string]: number[] };
}

export interface ProtoRpcService {
  request: string;
  response: string;
  options: { [key: string]: any };
}

export interface ProtoService {
  name: string;
  rpc: { [key: string]: ProtoRpcService };
  options: { [key: string]: any };
}

export interface ProtoBuf {
  [Package: string]: { [key: string]: MetaMessage | any };
}

export interface MetaMessage {
  new (values?: { [key: string]: any }, var_args?: string[]): Builder.Message;
  decode(buffer?: Buffer, enc?: string): Builder.Message;
  decodeDelimited(buffer?: Buffer, enc?: string): Builder.Message;
  decode64(str: string): Builder.Message;
  decodeHex(str: string): Builder.Message;
}
