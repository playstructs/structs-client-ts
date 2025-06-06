// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               unknown
// source: structs/structs/planet.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { planetStatus, planetStatusFromJSON, planetStatusToJSON } from "./keys";

export const protobufPackage = "structs.structs";

export interface Planet {
  id: string;
  maxOre: number;
  creator: string;
  owner: string;
  space: string[];
  air: string[];
  land: string[];
  water: string[];
  spaceSlots: number;
  airSlots: number;
  landSlots: number;
  waterSlots: number;
  status: planetStatus;
  /** First in line to battle planet */
  locationListStart: string;
  /** End of the line */
  locationListLast: string;
}

export interface PlanetAttributeRecord {
  attributeId: string;
  value: number;
}

export interface PlanetAttributes {
  planetaryShield: number;
  repairNetworkQuantity: number;
  defensiveCannonQuantity: number;
  coordinatedGlobalShieldNetworkQuantity: number;
  lowOrbitBallisticsInterceptorNetworkQuantity: number;
  advancedLowOrbitBallisticsInterceptorNetworkQuantity: number;
  lowOrbitBallisticsInterceptorNetworkSuccessRateNumerator: number;
  lowOrbitBallisticsInterceptorNetworkSuccessRateDenominator: number;
  orbitalJammingStationQuantity: number;
  advancedOrbitalJammingStationQuantity: number;
  blockStartRaid: number;
}

function createBasePlanet(): Planet {
  return {
    id: "",
    maxOre: 0,
    creator: "",
    owner: "",
    space: [],
    air: [],
    land: [],
    water: [],
    spaceSlots: 0,
    airSlots: 0,
    landSlots: 0,
    waterSlots: 0,
    status: 0,
    locationListStart: "",
    locationListLast: "",
  };
}

export const Planet: MessageFns<Planet> = {
  encode(message: Planet, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.maxOre !== 0) {
      writer.uint32(16).uint64(message.maxOre);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    for (const v of message.space) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.air) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.land) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.water) {
      writer.uint32(66).string(v!);
    }
    if (message.spaceSlots !== 0) {
      writer.uint32(72).uint64(message.spaceSlots);
    }
    if (message.airSlots !== 0) {
      writer.uint32(80).uint64(message.airSlots);
    }
    if (message.landSlots !== 0) {
      writer.uint32(88).uint64(message.landSlots);
    }
    if (message.waterSlots !== 0) {
      writer.uint32(96).uint64(message.waterSlots);
    }
    if (message.status !== 0) {
      writer.uint32(104).int32(message.status);
    }
    if (message.locationListStart !== "") {
      writer.uint32(114).string(message.locationListStart);
    }
    if (message.locationListLast !== "") {
      writer.uint32(122).string(message.locationListLast);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Planet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.maxOre = longToNumber(reader.uint64());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.creator = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.owner = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.space.push(reader.string());
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.air.push(reader.string());
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.land.push(reader.string());
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.water.push(reader.string());
          continue;
        }
        case 9: {
          if (tag !== 72) {
            break;
          }

          message.spaceSlots = longToNumber(reader.uint64());
          continue;
        }
        case 10: {
          if (tag !== 80) {
            break;
          }

          message.airSlots = longToNumber(reader.uint64());
          continue;
        }
        case 11: {
          if (tag !== 88) {
            break;
          }

          message.landSlots = longToNumber(reader.uint64());
          continue;
        }
        case 12: {
          if (tag !== 96) {
            break;
          }

          message.waterSlots = longToNumber(reader.uint64());
          continue;
        }
        case 13: {
          if (tag !== 104) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        }
        case 14: {
          if (tag !== 114) {
            break;
          }

          message.locationListStart = reader.string();
          continue;
        }
        case 15: {
          if (tag !== 122) {
            break;
          }

          message.locationListLast = reader.string();
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

  fromJSON(object: any): Planet {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      maxOre: isSet(object.maxOre) ? globalThis.Number(object.maxOre) : 0,
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      space: globalThis.Array.isArray(object?.space) ? object.space.map((e: any) => globalThis.String(e)) : [],
      air: globalThis.Array.isArray(object?.air) ? object.air.map((e: any) => globalThis.String(e)) : [],
      land: globalThis.Array.isArray(object?.land) ? object.land.map((e: any) => globalThis.String(e)) : [],
      water: globalThis.Array.isArray(object?.water) ? object.water.map((e: any) => globalThis.String(e)) : [],
      spaceSlots: isSet(object.spaceSlots) ? globalThis.Number(object.spaceSlots) : 0,
      airSlots: isSet(object.airSlots) ? globalThis.Number(object.airSlots) : 0,
      landSlots: isSet(object.landSlots) ? globalThis.Number(object.landSlots) : 0,
      waterSlots: isSet(object.waterSlots) ? globalThis.Number(object.waterSlots) : 0,
      status: isSet(object.status) ? planetStatusFromJSON(object.status) : 0,
      locationListStart: isSet(object.locationListStart) ? globalThis.String(object.locationListStart) : "",
      locationListLast: isSet(object.locationListLast) ? globalThis.String(object.locationListLast) : "",
    };
  },

  toJSON(message: Planet): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.maxOre !== 0) {
      obj.maxOre = Math.round(message.maxOre);
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.space?.length) {
      obj.space = message.space;
    }
    if (message.air?.length) {
      obj.air = message.air;
    }
    if (message.land?.length) {
      obj.land = message.land;
    }
    if (message.water?.length) {
      obj.water = message.water;
    }
    if (message.spaceSlots !== 0) {
      obj.spaceSlots = Math.round(message.spaceSlots);
    }
    if (message.airSlots !== 0) {
      obj.airSlots = Math.round(message.airSlots);
    }
    if (message.landSlots !== 0) {
      obj.landSlots = Math.round(message.landSlots);
    }
    if (message.waterSlots !== 0) {
      obj.waterSlots = Math.round(message.waterSlots);
    }
    if (message.status !== 0) {
      obj.status = planetStatusToJSON(message.status);
    }
    if (message.locationListStart !== "") {
      obj.locationListStart = message.locationListStart;
    }
    if (message.locationListLast !== "") {
      obj.locationListLast = message.locationListLast;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Planet>, I>>(base?: I): Planet {
    return Planet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Planet>, I>>(object: I): Planet {
    const message = createBasePlanet();
    message.id = object.id ?? "";
    message.maxOre = object.maxOre ?? 0;
    message.creator = object.creator ?? "";
    message.owner = object.owner ?? "";
    message.space = object.space?.map((e) => e) || [];
    message.air = object.air?.map((e) => e) || [];
    message.land = object.land?.map((e) => e) || [];
    message.water = object.water?.map((e) => e) || [];
    message.spaceSlots = object.spaceSlots ?? 0;
    message.airSlots = object.airSlots ?? 0;
    message.landSlots = object.landSlots ?? 0;
    message.waterSlots = object.waterSlots ?? 0;
    message.status = object.status ?? 0;
    message.locationListStart = object.locationListStart ?? "";
    message.locationListLast = object.locationListLast ?? "";
    return message;
  },
};

function createBasePlanetAttributeRecord(): PlanetAttributeRecord {
  return { attributeId: "", value: 0 };
}

export const PlanetAttributeRecord: MessageFns<PlanetAttributeRecord> = {
  encode(message: PlanetAttributeRecord, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.attributeId !== "") {
      writer.uint32(10).string(message.attributeId);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlanetAttributeRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanetAttributeRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.attributeId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = longToNumber(reader.uint64());
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

  fromJSON(object: any): PlanetAttributeRecord {
    return {
      attributeId: isSet(object.attributeId) ? globalThis.String(object.attributeId) : "",
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: PlanetAttributeRecord): unknown {
    const obj: any = {};
    if (message.attributeId !== "") {
      obj.attributeId = message.attributeId;
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlanetAttributeRecord>, I>>(base?: I): PlanetAttributeRecord {
    return PlanetAttributeRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlanetAttributeRecord>, I>>(object: I): PlanetAttributeRecord {
    const message = createBasePlanetAttributeRecord();
    message.attributeId = object.attributeId ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBasePlanetAttributes(): PlanetAttributes {
  return {
    planetaryShield: 0,
    repairNetworkQuantity: 0,
    defensiveCannonQuantity: 0,
    coordinatedGlobalShieldNetworkQuantity: 0,
    lowOrbitBallisticsInterceptorNetworkQuantity: 0,
    advancedLowOrbitBallisticsInterceptorNetworkQuantity: 0,
    lowOrbitBallisticsInterceptorNetworkSuccessRateNumerator: 0,
    lowOrbitBallisticsInterceptorNetworkSuccessRateDenominator: 0,
    orbitalJammingStationQuantity: 0,
    advancedOrbitalJammingStationQuantity: 0,
    blockStartRaid: 0,
  };
}

export const PlanetAttributes: MessageFns<PlanetAttributes> = {
  encode(message: PlanetAttributes, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.planetaryShield !== 0) {
      writer.uint32(8).uint64(message.planetaryShield);
    }
    if (message.repairNetworkQuantity !== 0) {
      writer.uint32(16).uint64(message.repairNetworkQuantity);
    }
    if (message.defensiveCannonQuantity !== 0) {
      writer.uint32(24).uint64(message.defensiveCannonQuantity);
    }
    if (message.coordinatedGlobalShieldNetworkQuantity !== 0) {
      writer.uint32(32).uint64(message.coordinatedGlobalShieldNetworkQuantity);
    }
    if (message.lowOrbitBallisticsInterceptorNetworkQuantity !== 0) {
      writer.uint32(40).uint64(message.lowOrbitBallisticsInterceptorNetworkQuantity);
    }
    if (message.advancedLowOrbitBallisticsInterceptorNetworkQuantity !== 0) {
      writer.uint32(48).uint64(message.advancedLowOrbitBallisticsInterceptorNetworkQuantity);
    }
    if (message.lowOrbitBallisticsInterceptorNetworkSuccessRateNumerator !== 0) {
      writer.uint32(56).uint64(message.lowOrbitBallisticsInterceptorNetworkSuccessRateNumerator);
    }
    if (message.lowOrbitBallisticsInterceptorNetworkSuccessRateDenominator !== 0) {
      writer.uint32(64).uint64(message.lowOrbitBallisticsInterceptorNetworkSuccessRateDenominator);
    }
    if (message.orbitalJammingStationQuantity !== 0) {
      writer.uint32(72).uint64(message.orbitalJammingStationQuantity);
    }
    if (message.advancedOrbitalJammingStationQuantity !== 0) {
      writer.uint32(80).uint64(message.advancedOrbitalJammingStationQuantity);
    }
    if (message.blockStartRaid !== 0) {
      writer.uint32(88).uint64(message.blockStartRaid);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlanetAttributes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanetAttributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.planetaryShield = longToNumber(reader.uint64());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.repairNetworkQuantity = longToNumber(reader.uint64());
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.defensiveCannonQuantity = longToNumber(reader.uint64());
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.coordinatedGlobalShieldNetworkQuantity = longToNumber(reader.uint64());
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.lowOrbitBallisticsInterceptorNetworkQuantity = longToNumber(reader.uint64());
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.advancedLowOrbitBallisticsInterceptorNetworkQuantity = longToNumber(reader.uint64());
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.lowOrbitBallisticsInterceptorNetworkSuccessRateNumerator = longToNumber(reader.uint64());
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.lowOrbitBallisticsInterceptorNetworkSuccessRateDenominator = longToNumber(reader.uint64());
          continue;
        }
        case 9: {
          if (tag !== 72) {
            break;
          }

          message.orbitalJammingStationQuantity = longToNumber(reader.uint64());
          continue;
        }
        case 10: {
          if (tag !== 80) {
            break;
          }

          message.advancedOrbitalJammingStationQuantity = longToNumber(reader.uint64());
          continue;
        }
        case 11: {
          if (tag !== 88) {
            break;
          }

          message.blockStartRaid = longToNumber(reader.uint64());
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

  fromJSON(object: any): PlanetAttributes {
    return {
      planetaryShield: isSet(object.planetaryShield) ? globalThis.Number(object.planetaryShield) : 0,
      repairNetworkQuantity: isSet(object.repairNetworkQuantity) ? globalThis.Number(object.repairNetworkQuantity) : 0,
      defensiveCannonQuantity: isSet(object.defensiveCannonQuantity)
        ? globalThis.Number(object.defensiveCannonQuantity)
        : 0,
      coordinatedGlobalShieldNetworkQuantity: isSet(object.coordinatedGlobalShieldNetworkQuantity)
        ? globalThis.Number(object.coordinatedGlobalShieldNetworkQuantity)
        : 0,
      lowOrbitBallisticsInterceptorNetworkQuantity: isSet(object.lowOrbitBallisticsInterceptorNetworkQuantity)
        ? globalThis.Number(object.lowOrbitBallisticsInterceptorNetworkQuantity)
        : 0,
      advancedLowOrbitBallisticsInterceptorNetworkQuantity:
        isSet(object.advancedLowOrbitBallisticsInterceptorNetworkQuantity)
          ? globalThis.Number(object.advancedLowOrbitBallisticsInterceptorNetworkQuantity)
          : 0,
      lowOrbitBallisticsInterceptorNetworkSuccessRateNumerator:
        isSet(object.lowOrbitBallisticsInterceptorNetworkSuccessRateNumerator)
          ? globalThis.Number(object.lowOrbitBallisticsInterceptorNetworkSuccessRateNumerator)
          : 0,
      lowOrbitBallisticsInterceptorNetworkSuccessRateDenominator:
        isSet(object.lowOrbitBallisticsInterceptorNetworkSuccessRateDenominator)
          ? globalThis.Number(object.lowOrbitBallisticsInterceptorNetworkSuccessRateDenominator)
          : 0,
      orbitalJammingStationQuantity: isSet(object.orbitalJammingStationQuantity)
        ? globalThis.Number(object.orbitalJammingStationQuantity)
        : 0,
      advancedOrbitalJammingStationQuantity: isSet(object.advancedOrbitalJammingStationQuantity)
        ? globalThis.Number(object.advancedOrbitalJammingStationQuantity)
        : 0,
      blockStartRaid: isSet(object.blockStartRaid) ? globalThis.Number(object.blockStartRaid) : 0,
    };
  },

  toJSON(message: PlanetAttributes): unknown {
    const obj: any = {};
    if (message.planetaryShield !== 0) {
      obj.planetaryShield = Math.round(message.planetaryShield);
    }
    if (message.repairNetworkQuantity !== 0) {
      obj.repairNetworkQuantity = Math.round(message.repairNetworkQuantity);
    }
    if (message.defensiveCannonQuantity !== 0) {
      obj.defensiveCannonQuantity = Math.round(message.defensiveCannonQuantity);
    }
    if (message.coordinatedGlobalShieldNetworkQuantity !== 0) {
      obj.coordinatedGlobalShieldNetworkQuantity = Math.round(message.coordinatedGlobalShieldNetworkQuantity);
    }
    if (message.lowOrbitBallisticsInterceptorNetworkQuantity !== 0) {
      obj.lowOrbitBallisticsInterceptorNetworkQuantity = Math.round(
        message.lowOrbitBallisticsInterceptorNetworkQuantity,
      );
    }
    if (message.advancedLowOrbitBallisticsInterceptorNetworkQuantity !== 0) {
      obj.advancedLowOrbitBallisticsInterceptorNetworkQuantity = Math.round(
        message.advancedLowOrbitBallisticsInterceptorNetworkQuantity,
      );
    }
    if (message.lowOrbitBallisticsInterceptorNetworkSuccessRateNumerator !== 0) {
      obj.lowOrbitBallisticsInterceptorNetworkSuccessRateNumerator = Math.round(
        message.lowOrbitBallisticsInterceptorNetworkSuccessRateNumerator,
      );
    }
    if (message.lowOrbitBallisticsInterceptorNetworkSuccessRateDenominator !== 0) {
      obj.lowOrbitBallisticsInterceptorNetworkSuccessRateDenominator = Math.round(
        message.lowOrbitBallisticsInterceptorNetworkSuccessRateDenominator,
      );
    }
    if (message.orbitalJammingStationQuantity !== 0) {
      obj.orbitalJammingStationQuantity = Math.round(message.orbitalJammingStationQuantity);
    }
    if (message.advancedOrbitalJammingStationQuantity !== 0) {
      obj.advancedOrbitalJammingStationQuantity = Math.round(message.advancedOrbitalJammingStationQuantity);
    }
    if (message.blockStartRaid !== 0) {
      obj.blockStartRaid = Math.round(message.blockStartRaid);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlanetAttributes>, I>>(base?: I): PlanetAttributes {
    return PlanetAttributes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlanetAttributes>, I>>(object: I): PlanetAttributes {
    const message = createBasePlanetAttributes();
    message.planetaryShield = object.planetaryShield ?? 0;
    message.repairNetworkQuantity = object.repairNetworkQuantity ?? 0;
    message.defensiveCannonQuantity = object.defensiveCannonQuantity ?? 0;
    message.coordinatedGlobalShieldNetworkQuantity = object.coordinatedGlobalShieldNetworkQuantity ?? 0;
    message.lowOrbitBallisticsInterceptorNetworkQuantity = object.lowOrbitBallisticsInterceptorNetworkQuantity ?? 0;
    message.advancedLowOrbitBallisticsInterceptorNetworkQuantity =
      object.advancedLowOrbitBallisticsInterceptorNetworkQuantity ?? 0;
    message.lowOrbitBallisticsInterceptorNetworkSuccessRateNumerator =
      object.lowOrbitBallisticsInterceptorNetworkSuccessRateNumerator ?? 0;
    message.lowOrbitBallisticsInterceptorNetworkSuccessRateDenominator =
      object.lowOrbitBallisticsInterceptorNetworkSuccessRateDenominator ?? 0;
    message.orbitalJammingStationQuantity = object.orbitalJammingStationQuantity ?? 0;
    message.advancedOrbitalJammingStationQuantity = object.advancedOrbitalJammingStationQuantity ?? 0;
    message.blockStartRaid = object.blockStartRaid ?? 0;
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
