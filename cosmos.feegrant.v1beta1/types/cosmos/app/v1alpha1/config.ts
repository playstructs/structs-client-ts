// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               unknown
// source: cosmos/app/v1alpha1/config.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Any } from "../../../google/protobuf/any";

export const protobufPackage = "cosmos.app.v1alpha1";

/**
 * Config represents the configuration for a Cosmos SDK ABCI app.
 * It is intended that all state machine logic including the version of
 * baseapp and tx handlers (and possibly even Tendermint) that an app needs
 * can be described in a config object. For compatibility, the framework should
 * allow a mixture of declarative and imperative app wiring, however, apps
 * that strive for the maximum ease of maintainability should be able to describe
 * their state machine with a config object alone.
 */
export interface Config {
  /** modules are the module configurations for the app. */
  modules: ModuleConfig[];
  /**
   * golang_bindings specifies explicit interface to implementation type bindings which
   * depinject uses to resolve interface inputs to provider functions.  The scope of this
   * field's configuration is global (not module specific).
   */
  golangBindings: GolangBinding[];
}

/** ModuleConfig is a module configuration for an app. */
export interface ModuleConfig {
  /**
   * name is the unique name of the module within the app. It should be a name
   * that persists between different versions of a module so that modules
   * can be smoothly upgraded to new versions.
   *
   * For example, for the module cosmos.bank.module.v1.Module, we may chose
   * to simply name the module "bank" in the app. When we upgrade to
   * cosmos.bank.module.v2.Module, the app-specific name "bank" stays the same
   * and the framework knows that the v2 module should receive all the same state
   * that the v1 module had. Note: modules should provide info on which versions
   * they can migrate from in the ModuleDescriptor.can_migration_from field.
   */
  name: string;
  /**
   * config is the config object for the module. Module config messages should
   * define a ModuleDescriptor using the cosmos.app.v1alpha1.is_module extension.
   */
  config:
    | Any
    | undefined;
  /**
   * golang_bindings specifies explicit interface to implementation type bindings which
   * depinject uses to resolve interface inputs to provider functions.  The scope of this
   * field's configuration is module specific.
   */
  golangBindings: GolangBinding[];
}

/** GolangBinding is an explicit interface type to implementing type binding for dependency injection. */
export interface GolangBinding {
  /** interface_type is the interface type which will be bound to a specific implementation type */
  interfaceType: string;
  /** implementation is the implementing type which will be supplied when an input of type interface is requested */
  implementation: string;
}

function createBaseConfig(): Config {
  return { modules: [], golangBindings: [] };
}

export const Config: MessageFns<Config> = {
  encode(message: Config, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.modules) {
      ModuleConfig.encode(v!, writer.uint32(10).fork()).join();
    }
    for (const v of message.golangBindings) {
      GolangBinding.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Config {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.modules.push(ModuleConfig.decode(reader, reader.uint32()));
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.golangBindings.push(GolangBinding.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Config {
    return {
      modules: globalThis.Array.isArray(object?.modules)
        ? object.modules.map((e: any) => ModuleConfig.fromJSON(e))
        : [],
      golangBindings: globalThis.Array.isArray(object?.golangBindings)
        ? object.golangBindings.map((e: any) => GolangBinding.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Config): unknown {
    const obj: any = {};
    if (message.modules?.length) {
      obj.modules = message.modules.map((e) => ModuleConfig.toJSON(e));
    }
    if (message.golangBindings?.length) {
      obj.golangBindings = message.golangBindings.map((e) => GolangBinding.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Config>, I>>(base?: I): Config {
    return Config.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Config>, I>>(object: I): Config {
    const message = createBaseConfig();
    message.modules = object.modules?.map((e) => ModuleConfig.fromPartial(e)) || [];
    message.golangBindings = object.golangBindings?.map((e) => GolangBinding.fromPartial(e)) || [];
    return message;
  },
};

function createBaseModuleConfig(): ModuleConfig {
  return { name: "", config: undefined, golangBindings: [] };
}

export const ModuleConfig: MessageFns<ModuleConfig> = {
  encode(message: ModuleConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.config !== undefined) {
      Any.encode(message.config, writer.uint32(18).fork()).join();
    }
    for (const v of message.golangBindings) {
      GolangBinding.encode(v!, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ModuleConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.config = Any.decode(reader, reader.uint32());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.golangBindings.push(GolangBinding.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ModuleConfig {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      config: isSet(object.config) ? Any.fromJSON(object.config) : undefined,
      golangBindings: globalThis.Array.isArray(object?.golangBindings)
        ? object.golangBindings.map((e: any) => GolangBinding.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ModuleConfig): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.config !== undefined) {
      obj.config = Any.toJSON(message.config);
    }
    if (message.golangBindings?.length) {
      obj.golangBindings = message.golangBindings.map((e) => GolangBinding.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ModuleConfig>, I>>(base?: I): ModuleConfig {
    return ModuleConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ModuleConfig>, I>>(object: I): ModuleConfig {
    const message = createBaseModuleConfig();
    message.name = object.name ?? "";
    message.config = (object.config !== undefined && object.config !== null)
      ? Any.fromPartial(object.config)
      : undefined;
    message.golangBindings = object.golangBindings?.map((e) => GolangBinding.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGolangBinding(): GolangBinding {
  return { interfaceType: "", implementation: "" };
}

export const GolangBinding: MessageFns<GolangBinding> = {
  encode(message: GolangBinding, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.interfaceType !== "") {
      writer.uint32(10).string(message.interfaceType);
    }
    if (message.implementation !== "") {
      writer.uint32(18).string(message.implementation);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GolangBinding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGolangBinding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.interfaceType = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.implementation = reader.string();
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

  fromJSON(object: any): GolangBinding {
    return {
      interfaceType: isSet(object.interfaceType) ? globalThis.String(object.interfaceType) : "",
      implementation: isSet(object.implementation) ? globalThis.String(object.implementation) : "",
    };
  },

  toJSON(message: GolangBinding): unknown {
    const obj: any = {};
    if (message.interfaceType !== "") {
      obj.interfaceType = message.interfaceType;
    }
    if (message.implementation !== "") {
      obj.implementation = message.implementation;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GolangBinding>, I>>(base?: I): GolangBinding {
    return GolangBinding.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GolangBinding>, I>>(object: I): GolangBinding {
    const message = createBaseGolangBinding();
    message.interfaceType = object.interfaceType ?? "";
    message.implementation = object.implementation ?? "";
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
