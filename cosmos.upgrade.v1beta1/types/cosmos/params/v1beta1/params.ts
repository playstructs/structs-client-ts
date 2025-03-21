// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               unknown
// source: cosmos/params/v1beta1/params.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "cosmos.params.v1beta1";

/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposal {
  title: string;
  description: string;
  changes: ParamChange[];
}

/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface ParamChange {
  subspace: string;
  key: string;
  value: string;
}

function createBaseParameterChangeProposal(): ParameterChangeProposal {
  return { title: "", description: "", changes: [] };
}

export const ParameterChangeProposal: MessageFns<ParameterChangeProposal> = {
  encode(message: ParameterChangeProposal, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.changes) {
      ParamChange.encode(v!, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ParameterChangeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParameterChangeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.changes.push(ParamChange.decode(reader, reader.uint32()));
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ParameterChangeProposal {
    return {
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      changes: globalThis.Array.isArray(object?.changes) ? object.changes.map((e: any) => ParamChange.fromJSON(e)) : [],
    };
  },

  toJSON(message: ParameterChangeProposal): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.changes?.length) {
      obj.changes = message.changes.map((e) => ParamChange.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParameterChangeProposal>, I>>(base?: I): ParameterChangeProposal {
    return ParameterChangeProposal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParameterChangeProposal>, I>>(object: I): ParameterChangeProposal {
    const message = createBaseParameterChangeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.changes = object.changes?.map((e) => ParamChange.fromPartial(e)) || [];
    return message;
  },
};

function createBaseParamChange(): ParamChange {
  return { subspace: "", key: "", value: "" };
}

export const ParamChange: MessageFns<ParamChange> = {
  encode(message: ParamChange, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ParamChange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.subspace = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.key = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.value = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ParamChange {
    return {
      subspace: isSet(object.subspace) ? globalThis.String(object.subspace) : "",
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: ParamChange): unknown {
    const obj: any = {};
    if (message.subspace !== "") {
      obj.subspace = message.subspace;
    }
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParamChange>, I>>(base?: I): ParamChange {
    return ParamChange.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParamChange>, I>>(object: I): ParamChange {
    const message = createBaseParamChange();
    message.subspace = object.subspace ?? "";
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
