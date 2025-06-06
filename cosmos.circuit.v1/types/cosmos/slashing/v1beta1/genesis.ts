// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               unknown
// source: cosmos/slashing/v1beta1/genesis.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Params, ValidatorSigningInfo } from "./slashing";

export const protobufPackage = "cosmos.slashing.v1beta1";

/** GenesisState defines the slashing module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params:
    | Params
    | undefined;
  /**
   * signing_infos represents a map between validator addresses and their
   * signing infos.
   */
  signingInfos: SigningInfo[];
  /**
   * missed_blocks represents a map between validator addresses and their
   * missed blocks.
   */
  missedBlocks: ValidatorMissedBlocks[];
}

/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfo {
  /** address is the validator address. */
  address: string;
  /** validator_signing_info represents the signing info of this validator. */
  validatorSigningInfo: ValidatorSigningInfo | undefined;
}

/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */
export interface ValidatorMissedBlocks {
  /** address is the validator address. */
  address: string;
  /** missed_blocks is an array of missed blocks by the validator. */
  missedBlocks: MissedBlock[];
}

/** MissedBlock contains height and missed status as boolean. */
export interface MissedBlock {
  /** index is the height at which the block was missed. */
  index: number;
  /** missed is the missed status. */
  missed: boolean;
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, signingInfos: [], missedBlocks: [] };
}

export const GenesisState: MessageFns<GenesisState> = {
  encode(message: GenesisState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).join();
    }
    for (const v of message.signingInfos) {
      SigningInfo.encode(v!, writer.uint32(18).fork()).join();
    }
    for (const v of message.missedBlocks) {
      ValidatorMissedBlocks.encode(v!, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.signingInfos.push(SigningInfo.decode(reader, reader.uint32()));
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.missedBlocks.push(ValidatorMissedBlocks.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      signingInfos: globalThis.Array.isArray(object?.signingInfos)
        ? object.signingInfos.map((e: any) => SigningInfo.fromJSON(e))
        : [],
      missedBlocks: globalThis.Array.isArray(object?.missedBlocks)
        ? object.missedBlocks.map((e: any) => ValidatorMissedBlocks.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.signingInfos?.length) {
      obj.signingInfos = message.signingInfos.map((e) => SigningInfo.toJSON(e));
    }
    if (message.missedBlocks?.length) {
      obj.missedBlocks = message.missedBlocks.map((e) => ValidatorMissedBlocks.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.signingInfos = object.signingInfos?.map((e) => SigningInfo.fromPartial(e)) || [];
    message.missedBlocks = object.missedBlocks?.map((e) => ValidatorMissedBlocks.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSigningInfo(): SigningInfo {
  return { address: "", validatorSigningInfo: undefined };
}

export const SigningInfo: MessageFns<SigningInfo> = {
  encode(message: SigningInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.validatorSigningInfo !== undefined) {
      ValidatorSigningInfo.encode(message.validatorSigningInfo, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SigningInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.validatorSigningInfo = ValidatorSigningInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): SigningInfo {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      validatorSigningInfo: isSet(object.validatorSigningInfo)
        ? ValidatorSigningInfo.fromJSON(object.validatorSigningInfo)
        : undefined,
    };
  },

  toJSON(message: SigningInfo): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.validatorSigningInfo !== undefined) {
      obj.validatorSigningInfo = ValidatorSigningInfo.toJSON(message.validatorSigningInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SigningInfo>, I>>(base?: I): SigningInfo {
    return SigningInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SigningInfo>, I>>(object: I): SigningInfo {
    const message = createBaseSigningInfo();
    message.address = object.address ?? "";
    message.validatorSigningInfo = (object.validatorSigningInfo !== undefined && object.validatorSigningInfo !== null)
      ? ValidatorSigningInfo.fromPartial(object.validatorSigningInfo)
      : undefined;
    return message;
  },
};

function createBaseValidatorMissedBlocks(): ValidatorMissedBlocks {
  return { address: "", missedBlocks: [] };
}

export const ValidatorMissedBlocks: MessageFns<ValidatorMissedBlocks> = {
  encode(message: ValidatorMissedBlocks, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.missedBlocks) {
      MissedBlock.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorMissedBlocks {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorMissedBlocks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.missedBlocks.push(MissedBlock.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ValidatorMissedBlocks {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      missedBlocks: globalThis.Array.isArray(object?.missedBlocks)
        ? object.missedBlocks.map((e: any) => MissedBlock.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ValidatorMissedBlocks): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.missedBlocks?.length) {
      obj.missedBlocks = message.missedBlocks.map((e) => MissedBlock.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidatorMissedBlocks>, I>>(base?: I): ValidatorMissedBlocks {
    return ValidatorMissedBlocks.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ValidatorMissedBlocks>, I>>(object: I): ValidatorMissedBlocks {
    const message = createBaseValidatorMissedBlocks();
    message.address = object.address ?? "";
    message.missedBlocks = object.missedBlocks?.map((e) => MissedBlock.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMissedBlock(): MissedBlock {
  return { index: 0, missed: false };
}

export const MissedBlock: MessageFns<MissedBlock> = {
  encode(message: MissedBlock, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.index !== 0) {
      writer.uint32(8).int64(message.index);
    }
    if (message.missed !== false) {
      writer.uint32(16).bool(message.missed);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MissedBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMissedBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.index = longToNumber(reader.int64());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.missed = reader.bool();
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

  fromJSON(object: any): MissedBlock {
    return {
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
      missed: isSet(object.missed) ? globalThis.Boolean(object.missed) : false,
    };
  },

  toJSON(message: MissedBlock): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.missed !== false) {
      obj.missed = message.missed;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MissedBlock>, I>>(base?: I): MissedBlock {
    return MissedBlock.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MissedBlock>, I>>(object: I): MissedBlock {
    const message = createBaseMissedBlock();
    message.index = object.index ?? 0;
    message.missed = object.missed ?? false;
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
