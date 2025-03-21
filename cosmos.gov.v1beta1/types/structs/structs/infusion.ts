// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               unknown
// source: structs/structs/infusion.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { objectType, objectTypeFromJSON, objectTypeToJSON } from "./keys";

export const protobufPackage = "structs.structs";

export interface Infusion {
  destinationType: objectType;
  destinationId: string;
  fuel: number;
  power: number;
  commission: string;
  playerId: string;
  address: string;
  ratio: number;
  defusing: string;
}

function createBaseInfusion(): Infusion {
  return {
    destinationType: 0,
    destinationId: "",
    fuel: 0,
    power: 0,
    commission: "",
    playerId: "",
    address: "",
    ratio: 0,
    defusing: "",
  };
}

export const Infusion: MessageFns<Infusion> = {
  encode(message: Infusion, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.destinationType !== 0) {
      writer.uint32(8).int32(message.destinationType);
    }
    if (message.destinationId !== "") {
      writer.uint32(18).string(message.destinationId);
    }
    if (message.fuel !== 0) {
      writer.uint32(24).uint64(message.fuel);
    }
    if (message.power !== 0) {
      writer.uint32(32).uint64(message.power);
    }
    if (message.commission !== "") {
      writer.uint32(42).string(message.commission);
    }
    if (message.playerId !== "") {
      writer.uint32(50).string(message.playerId);
    }
    if (message.address !== "") {
      writer.uint32(58).string(message.address);
    }
    if (message.ratio !== 0) {
      writer.uint32(64).uint64(message.ratio);
    }
    if (message.defusing !== "") {
      writer.uint32(74).string(message.defusing);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Infusion {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInfusion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.destinationType = reader.int32() as any;
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.destinationId = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.fuel = longToNumber(reader.uint64());
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.power = longToNumber(reader.uint64());
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.commission = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.playerId = reader.string();
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.address = reader.string();
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.ratio = longToNumber(reader.uint64());
          continue;
        }
        case 9: {
          if (tag !== 74) {
            break;
          }

          message.defusing = reader.string();
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

  fromJSON(object: any): Infusion {
    return {
      destinationType: isSet(object.destinationType) ? objectTypeFromJSON(object.destinationType) : 0,
      destinationId: isSet(object.destinationId) ? globalThis.String(object.destinationId) : "",
      fuel: isSet(object.fuel) ? globalThis.Number(object.fuel) : 0,
      power: isSet(object.power) ? globalThis.Number(object.power) : 0,
      commission: isSet(object.commission) ? globalThis.String(object.commission) : "",
      playerId: isSet(object.playerId) ? globalThis.String(object.playerId) : "",
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      ratio: isSet(object.ratio) ? globalThis.Number(object.ratio) : 0,
      defusing: isSet(object.defusing) ? globalThis.String(object.defusing) : "",
    };
  },

  toJSON(message: Infusion): unknown {
    const obj: any = {};
    if (message.destinationType !== 0) {
      obj.destinationType = objectTypeToJSON(message.destinationType);
    }
    if (message.destinationId !== "") {
      obj.destinationId = message.destinationId;
    }
    if (message.fuel !== 0) {
      obj.fuel = Math.round(message.fuel);
    }
    if (message.power !== 0) {
      obj.power = Math.round(message.power);
    }
    if (message.commission !== "") {
      obj.commission = message.commission;
    }
    if (message.playerId !== "") {
      obj.playerId = message.playerId;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.ratio !== 0) {
      obj.ratio = Math.round(message.ratio);
    }
    if (message.defusing !== "") {
      obj.defusing = message.defusing;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Infusion>, I>>(base?: I): Infusion {
    return Infusion.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Infusion>, I>>(object: I): Infusion {
    const message = createBaseInfusion();
    message.destinationType = object.destinationType ?? 0;
    message.destinationId = object.destinationId ?? "";
    message.fuel = object.fuel ?? 0;
    message.power = object.power ?? 0;
    message.commission = object.commission ?? "";
    message.playerId = object.playerId ?? "";
    message.address = object.address ?? "";
    message.ratio = object.ratio ?? 0;
    message.defusing = object.defusing ?? "";
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

function longToNumber(int64: { toString(): string }): number {
  const num = globalThis.Number(int64.toString());
  if (num > globalThis.Number.MAX_SAFE_INTEGER) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (num < globalThis.Number.MIN_SAFE_INTEGER) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return num;
}

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
