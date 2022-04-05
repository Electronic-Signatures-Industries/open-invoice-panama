/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ILendingPoolAddressesProviderInterface
  extends utils.Interface {
  functions: {
    "getMarketId()": FunctionFragment;
    "setMarketId(string)": FunctionFragment;
    "setAddress(bytes32,address)": FunctionFragment;
    "setAddressAsProxy(bytes32,address)": FunctionFragment;
    "getAddress(bytes32)": FunctionFragment;
    "getLendingPool()": FunctionFragment;
    "setLendingPoolImpl(address)": FunctionFragment;
    "getLendingPoolConfigurator()": FunctionFragment;
    "setLendingPoolConfiguratorImpl(address)": FunctionFragment;
    "getLendingPoolCollateralManager()": FunctionFragment;
    "setLendingPoolCollateralManager(address)": FunctionFragment;
    "getPoolAdmin()": FunctionFragment;
    "setPoolAdmin(address)": FunctionFragment;
    "getEmergencyAdmin()": FunctionFragment;
    "setEmergencyAdmin(address)": FunctionFragment;
    "getPriceOracle()": FunctionFragment;
    "setPriceOracle(address)": FunctionFragment;
    "getLendingRateOracle()": FunctionFragment;
    "setLendingRateOracle(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getMarketId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setMarketId", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setAddress",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setAddressAsProxy",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getLendingPool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setLendingPoolImpl",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLendingPoolConfigurator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setLendingPoolConfiguratorImpl",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLendingPoolCollateralManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setLendingPoolCollateralManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPoolAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getEmergencyAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setEmergencyAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPriceOracle",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLendingRateOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setLendingRateOracle",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getMarketId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMarketId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAddressAsProxy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLendingPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLendingPoolImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLendingPoolConfigurator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLendingPoolConfiguratorImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLendingPoolCollateralManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLendingPoolCollateralManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPoolAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEmergencyAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEmergencyAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLendingRateOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLendingRateOracle",
    data: BytesLike
  ): Result;

  events: {
    "AddressSet(bytes32,address,bool)": EventFragment;
    "ConfigurationAdminUpdated(address)": EventFragment;
    "EmergencyAdminUpdated(address)": EventFragment;
    "LendingPoolCollateralManagerUpdated(address)": EventFragment;
    "LendingPoolConfiguratorUpdated(address)": EventFragment;
    "LendingPoolUpdated(address)": EventFragment;
    "LendingRateOracleUpdated(address)": EventFragment;
    "MarketIdSet(string)": EventFragment;
    "PriceOracleUpdated(address)": EventFragment;
    "ProxyCreated(bytes32,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddressSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ConfigurationAdminUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmergencyAdminUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "LendingPoolCollateralManagerUpdated"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "LendingPoolConfiguratorUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LendingPoolUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LendingRateOracleUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MarketIdSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PriceOracleUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProxyCreated"): EventFragment;
}

export type AddressSetEvent = TypedEvent<
  [string, string, boolean],
  { id: string; newAddress: string; hasProxy: boolean }
>;

export type AddressSetEventFilter = TypedEventFilter<AddressSetEvent>;

export type ConfigurationAdminUpdatedEvent = TypedEvent<
  [string],
  { newAddress: string }
>;

export type ConfigurationAdminUpdatedEventFilter =
  TypedEventFilter<ConfigurationAdminUpdatedEvent>;

export type EmergencyAdminUpdatedEvent = TypedEvent<
  [string],
  { newAddress: string }
>;

export type EmergencyAdminUpdatedEventFilter =
  TypedEventFilter<EmergencyAdminUpdatedEvent>;

export type LendingPoolCollateralManagerUpdatedEvent = TypedEvent<
  [string],
  { newAddress: string }
>;

export type LendingPoolCollateralManagerUpdatedEventFilter =
  TypedEventFilter<LendingPoolCollateralManagerUpdatedEvent>;

export type LendingPoolConfiguratorUpdatedEvent = TypedEvent<
  [string],
  { newAddress: string }
>;

export type LendingPoolConfiguratorUpdatedEventFilter =
  TypedEventFilter<LendingPoolConfiguratorUpdatedEvent>;

export type LendingPoolUpdatedEvent = TypedEvent<
  [string],
  { newAddress: string }
>;

export type LendingPoolUpdatedEventFilter =
  TypedEventFilter<LendingPoolUpdatedEvent>;

export type LendingRateOracleUpdatedEvent = TypedEvent<
  [string],
  { newAddress: string }
>;

export type LendingRateOracleUpdatedEventFilter =
  TypedEventFilter<LendingRateOracleUpdatedEvent>;

export type MarketIdSetEvent = TypedEvent<[string], { newMarketId: string }>;

export type MarketIdSetEventFilter = TypedEventFilter<MarketIdSetEvent>;

export type PriceOracleUpdatedEvent = TypedEvent<
  [string],
  { newAddress: string }
>;

export type PriceOracleUpdatedEventFilter =
  TypedEventFilter<PriceOracleUpdatedEvent>;

export type ProxyCreatedEvent = TypedEvent<
  [string, string],
  { id: string; newAddress: string }
>;

export type ProxyCreatedEventFilter = TypedEventFilter<ProxyCreatedEvent>;

export interface ILendingPoolAddressesProvider extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ILendingPoolAddressesProviderInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getMarketId(overrides?: CallOverrides): Promise<[string]>;

    setMarketId(
      marketId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAddress(
      id: BytesLike,
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAddressAsProxy(
      id: BytesLike,
      impl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAddress(id: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    getLendingPool(overrides?: CallOverrides): Promise<[string]>;

    setLendingPoolImpl(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getLendingPoolConfigurator(overrides?: CallOverrides): Promise<[string]>;

    setLendingPoolConfiguratorImpl(
      configurator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getLendingPoolCollateralManager(
      overrides?: CallOverrides
    ): Promise<[string]>;

    setLendingPoolCollateralManager(
      manager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPoolAdmin(overrides?: CallOverrides): Promise<[string]>;

    setPoolAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getEmergencyAdmin(overrides?: CallOverrides): Promise<[string]>;

    setEmergencyAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPriceOracle(overrides?: CallOverrides): Promise<[string]>;

    setPriceOracle(
      priceOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getLendingRateOracle(overrides?: CallOverrides): Promise<[string]>;

    setLendingRateOracle(
      lendingRateOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getMarketId(overrides?: CallOverrides): Promise<string>;

  setMarketId(
    marketId: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAddress(
    id: BytesLike,
    newAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAddressAsProxy(
    id: BytesLike,
    impl: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAddress(id: BytesLike, overrides?: CallOverrides): Promise<string>;

  getLendingPool(overrides?: CallOverrides): Promise<string>;

  setLendingPoolImpl(
    pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getLendingPoolConfigurator(overrides?: CallOverrides): Promise<string>;

  setLendingPoolConfiguratorImpl(
    configurator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getLendingPoolCollateralManager(overrides?: CallOverrides): Promise<string>;

  setLendingPoolCollateralManager(
    manager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPoolAdmin(overrides?: CallOverrides): Promise<string>;

  setPoolAdmin(
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getEmergencyAdmin(overrides?: CallOverrides): Promise<string>;

  setEmergencyAdmin(
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPriceOracle(overrides?: CallOverrides): Promise<string>;

  setPriceOracle(
    priceOracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getLendingRateOracle(overrides?: CallOverrides): Promise<string>;

  setLendingRateOracle(
    lendingRateOracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getMarketId(overrides?: CallOverrides): Promise<string>;

    setMarketId(marketId: string, overrides?: CallOverrides): Promise<void>;

    setAddress(
      id: BytesLike,
      newAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setAddressAsProxy(
      id: BytesLike,
      impl: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getAddress(id: BytesLike, overrides?: CallOverrides): Promise<string>;

    getLendingPool(overrides?: CallOverrides): Promise<string>;

    setLendingPoolImpl(pool: string, overrides?: CallOverrides): Promise<void>;

    getLendingPoolConfigurator(overrides?: CallOverrides): Promise<string>;

    setLendingPoolConfiguratorImpl(
      configurator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getLendingPoolCollateralManager(overrides?: CallOverrides): Promise<string>;

    setLendingPoolCollateralManager(
      manager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getPoolAdmin(overrides?: CallOverrides): Promise<string>;

    setPoolAdmin(admin: string, overrides?: CallOverrides): Promise<void>;

    getEmergencyAdmin(overrides?: CallOverrides): Promise<string>;

    setEmergencyAdmin(admin: string, overrides?: CallOverrides): Promise<void>;

    getPriceOracle(overrides?: CallOverrides): Promise<string>;

    setPriceOracle(
      priceOracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getLendingRateOracle(overrides?: CallOverrides): Promise<string>;

    setLendingRateOracle(
      lendingRateOracle: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddressSet(bytes32,address,bool)"(
      id?: null,
      newAddress?: string | null,
      hasProxy?: null
    ): AddressSetEventFilter;
    AddressSet(
      id?: null,
      newAddress?: string | null,
      hasProxy?: null
    ): AddressSetEventFilter;

    "ConfigurationAdminUpdated(address)"(
      newAddress?: string | null
    ): ConfigurationAdminUpdatedEventFilter;
    ConfigurationAdminUpdated(
      newAddress?: string | null
    ): ConfigurationAdminUpdatedEventFilter;

    "EmergencyAdminUpdated(address)"(
      newAddress?: string | null
    ): EmergencyAdminUpdatedEventFilter;
    EmergencyAdminUpdated(
      newAddress?: string | null
    ): EmergencyAdminUpdatedEventFilter;

    "LendingPoolCollateralManagerUpdated(address)"(
      newAddress?: string | null
    ): LendingPoolCollateralManagerUpdatedEventFilter;
    LendingPoolCollateralManagerUpdated(
      newAddress?: string | null
    ): LendingPoolCollateralManagerUpdatedEventFilter;

    "LendingPoolConfiguratorUpdated(address)"(
      newAddress?: string | null
    ): LendingPoolConfiguratorUpdatedEventFilter;
    LendingPoolConfiguratorUpdated(
      newAddress?: string | null
    ): LendingPoolConfiguratorUpdatedEventFilter;

    "LendingPoolUpdated(address)"(
      newAddress?: string | null
    ): LendingPoolUpdatedEventFilter;
    LendingPoolUpdated(
      newAddress?: string | null
    ): LendingPoolUpdatedEventFilter;

    "LendingRateOracleUpdated(address)"(
      newAddress?: string | null
    ): LendingRateOracleUpdatedEventFilter;
    LendingRateOracleUpdated(
      newAddress?: string | null
    ): LendingRateOracleUpdatedEventFilter;

    "MarketIdSet(string)"(newMarketId?: null): MarketIdSetEventFilter;
    MarketIdSet(newMarketId?: null): MarketIdSetEventFilter;

    "PriceOracleUpdated(address)"(
      newAddress?: string | null
    ): PriceOracleUpdatedEventFilter;
    PriceOracleUpdated(
      newAddress?: string | null
    ): PriceOracleUpdatedEventFilter;

    "ProxyCreated(bytes32,address)"(
      id?: null,
      newAddress?: string | null
    ): ProxyCreatedEventFilter;
    ProxyCreated(
      id?: null,
      newAddress?: string | null
    ): ProxyCreatedEventFilter;
  };

  estimateGas: {
    getMarketId(overrides?: CallOverrides): Promise<BigNumber>;

    setMarketId(
      marketId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAddress(
      id: BytesLike,
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAddressAsProxy(
      id: BytesLike,
      impl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAddress(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getLendingPool(overrides?: CallOverrides): Promise<BigNumber>;

    setLendingPoolImpl(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getLendingPoolConfigurator(overrides?: CallOverrides): Promise<BigNumber>;

    setLendingPoolConfiguratorImpl(
      configurator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getLendingPoolCollateralManager(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setLendingPoolCollateralManager(
      manager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPoolAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    setPoolAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getEmergencyAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    setEmergencyAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPriceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    setPriceOracle(
      priceOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getLendingRateOracle(overrides?: CallOverrides): Promise<BigNumber>;

    setLendingRateOracle(
      lendingRateOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getMarketId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMarketId(
      marketId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAddress(
      id: BytesLike,
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAddressAsProxy(
      id: BytesLike,
      impl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAddress(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLendingPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setLendingPoolImpl(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getLendingPoolConfigurator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setLendingPoolConfiguratorImpl(
      configurator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getLendingPoolCollateralManager(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setLendingPoolCollateralManager(
      manager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPoolAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setPoolAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getEmergencyAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setEmergencyAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPriceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setPriceOracle(
      priceOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getLendingRateOracle(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setLendingRateOracle(
      lendingRateOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}