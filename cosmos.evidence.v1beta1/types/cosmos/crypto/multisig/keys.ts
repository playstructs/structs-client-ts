// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               unknown
// source: cosmos/crypto/multisig/keys.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Any } from "../../../google/protobuf/any";

export const protobufPackage = "cosmos.crypto.multisig";

/**
 * LegacyAminoPubKey specifies a public key type
 * which nests multiple public keys and a threshold,
 * it uses legacy amino address rules.
 */
export interface LegacyAminoPubKey {
  threshold: number;
  publicKeys: Any[];
}

function createBaseLegacyAminoPubKey(): LegacyAminoPubKey {
  return { threshold: 0, publicKeys: [] };
}

export const LegacyAminoPubKey: MessageFns<LegacyAminoPubKey> = {
  encode(message: LegacyAminoPubKey, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.threshold !== 0) {
      writer.uint32(8).uint32(message.threshold);
    }
    for (const v of message.publicKeys) {
      Any.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LegacyAminoPubKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyAminoPubKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.threshold = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.publicKeys.push(Any.decode(reader, reader.uint32()));
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

  fromJSON(object: any): LegacyAminoPubKey {
    return {
      threshold: isSet(object.threshold) ? globalThis.Number(object.threshold) : 0,
      publicKeys: globalThis.Array.isArray(object?.publicKeys)
        ? object.publicKeys.map((e: any) => Any.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LegacyAminoPubKey): unknown {
    const obj: any = {};
    if (message.threshold !== 0) {
      obj.threshold = Math.round(message.threshold);
    }
    if (message.publicKeys?.length) {
      obj.publicKeys = message.publicKeys.map((e) => Any.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LegacyAminoPubKey>, I>>(base?: I): LegacyAminoPubKey {
    return LegacyAminoPubKey.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LegacyAminoPubKey>, I>>(object: I): LegacyAminoPubKey {
    const message = createBaseLegacyAminoPubKey();
    message.threshold = object.threshold ?? 0;
    message.publicKeys = object.publicKeys?.map((e) => Any.fromPartial(e)) || [];
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
