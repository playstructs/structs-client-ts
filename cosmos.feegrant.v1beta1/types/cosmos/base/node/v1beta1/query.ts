// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               unknown
// source: cosmos/base/node/v1beta1/query.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Timestamp } from "../../../../google/protobuf/timestamp";

export const protobufPackage = "cosmos.base.node.v1beta1";

/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequest {
}

/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponse {
  minimumGasPrice: string;
  pruningKeepRecent: string;
  pruningInterval: string;
  haltHeight: number;
}

/** StateRequest defines the request structure for the status of a node. */
export interface StatusRequest {
}

/** StateResponse defines the response structure for the status of a node. */
export interface StatusResponse {
  /** earliest block height available in the store */
  earliestStoreHeight: number;
  /** current block height */
  height: number;
  /** block height timestamp */
  timestamp:
    | Date
    | undefined;
  /** app hash of the current block */
  appHash: Uint8Array;
  /** validator hash provided by the consensus header */
  validatorHash: Uint8Array;
}

function createBaseConfigRequest(): ConfigRequest {
  return {};
}

export const ConfigRequest: MessageFns<ConfigRequest> = {
  encode(_: ConfigRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ConfigRequest {
    return {};
  },

  toJSON(_: ConfigRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfigRequest>, I>>(base?: I): ConfigRequest {
    return ConfigRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConfigRequest>, I>>(_: I): ConfigRequest {
    const message = createBaseConfigRequest();
    return message;
  },
};

function createBaseConfigResponse(): ConfigResponse {
  return { minimumGasPrice: "", pruningKeepRecent: "", pruningInterval: "", haltHeight: 0 };
}

export const ConfigResponse: MessageFns<ConfigResponse> = {
  encode(message: ConfigResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.minimumGasPrice !== "") {
      writer.uint32(10).string(message.minimumGasPrice);
    }
    if (message.pruningKeepRecent !== "") {
      writer.uint32(18).string(message.pruningKeepRecent);
    }
    if (message.pruningInterval !== "") {
      writer.uint32(26).string(message.pruningInterval);
    }
    if (message.haltHeight !== 0) {
      writer.uint32(32).uint64(message.haltHeight);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.minimumGasPrice = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.pruningKeepRecent = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.pruningInterval = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.haltHeight = longToNumber(reader.uint64());
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

  fromJSON(object: any): ConfigResponse {
    return {
      minimumGasPrice: isSet(object.minimumGasPrice) ? globalThis.String(object.minimumGasPrice) : "",
      pruningKeepRecent: isSet(object.pruningKeepRecent) ? globalThis.String(object.pruningKeepRecent) : "",
      pruningInterval: isSet(object.pruningInterval) ? globalThis.String(object.pruningInterval) : "",
      haltHeight: isSet(object.haltHeight) ? globalThis.Number(object.haltHeight) : 0,
    };
  },

  toJSON(message: ConfigResponse): unknown {
    const obj: any = {};
    if (message.minimumGasPrice !== "") {
      obj.minimumGasPrice = message.minimumGasPrice;
    }
    if (message.pruningKeepRecent !== "") {
      obj.pruningKeepRecent = message.pruningKeepRecent;
    }
    if (message.pruningInterval !== "") {
      obj.pruningInterval = message.pruningInterval;
    }
    if (message.haltHeight !== 0) {
      obj.haltHeight = Math.round(message.haltHeight);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfigResponse>, I>>(base?: I): ConfigResponse {
    return ConfigResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConfigResponse>, I>>(object: I): ConfigResponse {
    const message = createBaseConfigResponse();
    message.minimumGasPrice = object.minimumGasPrice ?? "";
    message.pruningKeepRecent = object.pruningKeepRecent ?? "";
    message.pruningInterval = object.pruningInterval ?? "";
    message.haltHeight = object.haltHeight ?? 0;
    return message;
  },
};

function createBaseStatusRequest(): StatusRequest {
  return {};
}

export const StatusRequest: MessageFns<StatusRequest> = {
  encode(_: StatusRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): StatusRequest {
    return {};
  },

  toJSON(_: StatusRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<StatusRequest>, I>>(base?: I): StatusRequest {
    return StatusRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatusRequest>, I>>(_: I): StatusRequest {
    const message = createBaseStatusRequest();
    return message;
  },
};

function createBaseStatusResponse(): StatusResponse {
  return {
    earliestStoreHeight: 0,
    height: 0,
    timestamp: undefined,
    appHash: new Uint8Array(0),
    validatorHash: new Uint8Array(0),
  };
}

export const StatusResponse: MessageFns<StatusResponse> = {
  encode(message: StatusResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.earliestStoreHeight !== 0) {
      writer.uint32(8).uint64(message.earliestStoreHeight);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).join();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(34).bytes(message.appHash);
    }
    if (message.validatorHash.length !== 0) {
      writer.uint32(42).bytes(message.validatorHash);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.earliestStoreHeight = longToNumber(reader.uint64());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.height = longToNumber(reader.uint64());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.appHash = reader.bytes();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.validatorHash = reader.bytes();
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

  fromJSON(object: any): StatusResponse {
    return {
      earliestStoreHeight: isSet(object.earliestStoreHeight) ? globalThis.Number(object.earliestStoreHeight) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array(0),
      validatorHash: isSet(object.validatorHash) ? bytesFromBase64(object.validatorHash) : new Uint8Array(0),
    };
  },

  toJSON(message: StatusResponse): unknown {
    const obj: any = {};
    if (message.earliestStoreHeight !== 0) {
      obj.earliestStoreHeight = Math.round(message.earliestStoreHeight);
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString();
    }
    if (message.appHash.length !== 0) {
      obj.appHash = base64FromBytes(message.appHash);
    }
    if (message.validatorHash.length !== 0) {
      obj.validatorHash = base64FromBytes(message.validatorHash);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatusResponse>, I>>(base?: I): StatusResponse {
    return StatusResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatusResponse>, I>>(object: I): StatusResponse {
    const message = createBaseStatusResponse();
    message.earliestStoreHeight = object.earliestStoreHeight ?? 0;
    message.height = object.height ?? 0;
    message.timestamp = object.timestamp ?? undefined;
    message.appHash = object.appHash ?? new Uint8Array(0);
    message.validatorHash = object.validatorHash ?? new Uint8Array(0);
    return message;
  },
};

/** Service defines the gRPC querier service for node related queries. */
export interface Service {
  /** Config queries for the operator configuration. */
  Config(request: ConfigRequest): Promise<ConfigResponse>;
  /** Status queries for the node status. */
  Status(request: StatusRequest): Promise<StatusResponse>;
}

export const ServiceServiceName = "cosmos.base.node.v1beta1.Service";
export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ServiceServiceName;
    this.rpc = rpc;
    this.Config = this.Config.bind(this);
    this.Status = this.Status.bind(this);
  }
  Config(request: ConfigRequest): Promise<ConfigResponse> {
    const data = ConfigRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Config", data);
    return promise.then((data) => ConfigResponse.decode(new BinaryReader(data)));
  }

  Status(request: StatusRequest): Promise<StatusResponse> {
    const data = StatusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Status", data);
    return promise.then((data) => StatusResponse.decode(new BinaryReader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
