/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type LeafOpStruct = {
  valid: boolean;
  hash: BigNumberish;
  prehash_key: BigNumberish;
  prehash_value: BigNumberish;
  len: BigNumberish;
  prefix: BytesLike;
};

export type LeafOpStructOutput = [
  boolean,
  number,
  number,
  number,
  number,
  string
] & {
  valid: boolean;
  hash: number;
  prehash_key: number;
  prehash_value: number;
  len: number;
  prefix: string;
};

export type InnerSpecStruct = {
  childOrder: BigNumberish[];
  childSize: BigNumberish;
  minPrefixLength: BigNumberish;
  maxPrefixLength: BigNumberish;
  emptyChild: BytesLike;
  hash: BigNumberish;
};

export type InnerSpecStructOutput = [
  BigNumber[],
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  number
] & {
  childOrder: BigNumber[];
  childSize: BigNumber;
  minPrefixLength: BigNumber;
  maxPrefixLength: BigNumber;
  emptyChild: string;
  hash: number;
};

export type ProofSpecStruct = {
  leafSpec: LeafOpStruct;
  innerSpec: InnerSpecStruct;
  maxDepth: BigNumberish;
  minDepth: BigNumberish;
};

export type ProofSpecStructOutput = [
  LeafOpStructOutput,
  InnerSpecStructOutput,
  BigNumber,
  BigNumber
] & {
  leafSpec: LeafOpStructOutput;
  innerSpec: InnerSpecStructOutput;
  maxDepth: BigNumber;
  minDepth: BigNumber;
};

export type InnerOpStruct = {
  valid: boolean;
  hash: BigNumberish;
  prefix: BytesLike;
  suffix: BytesLike;
};

export type InnerOpStructOutput = [boolean, number, string, string] & {
  valid: boolean;
  hash: number;
  prefix: string;
  suffix: string;
};

export type ExistenceProofStruct = {
  valid: boolean;
  key: BytesLike;
  value: BytesLike;
  leaf: LeafOpStruct;
  path: InnerOpStruct[];
};

export type ExistenceProofStructOutput = [
  boolean,
  string,
  string,
  LeafOpStructOutput,
  InnerOpStructOutput[]
] & {
  valid: boolean;
  key: string;
  value: string;
  leaf: LeafOpStructOutput;
  path: InnerOpStructOutput[];
};

export interface AnconVerifierInterface extends utils.Interface {
  functions: {
    "getIavlSpec()": FunctionFragment;
    "owner()": FunctionFragment;
    "verify((bool,bytes,bytes,(bool,uint8,uint8,uint8,uint8,bytes),(bool,uint8,bytes,bytes)[]),((bool,uint8,uint8,uint8,uint8,bytes),(uint256[],uint256,uint256,uint256,bytes,uint8),uint256,uint256),bytes,bytes,bytes)": FunctionFragment;
    "setRootHash(bytes)": FunctionFragment;
    "convertProof(bytes,bytes,bytes,uint256[],bytes,bytes,uint256)": FunctionFragment;
    "verifyProof((bool,bytes,bytes,(bool,uint8,uint8,uint8,uint8,bytes),(bool,uint8,bytes,bytes)[]),bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getIavlSpec",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [
      ExistenceProofStruct,
      ProofSpecStruct,
      BytesLike,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setRootHash",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "convertProof",
    values: [
      BytesLike,
      BytesLike,
      BytesLike,
      BigNumberish[],
      BytesLike,
      BytesLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyProof",
    values: [ExistenceProofStruct, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getIavlSpec",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRootHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "convertProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyProof",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AnconVerifier extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AnconVerifierInterface;

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
    getIavlSpec(overrides?: CallOverrides): Promise<[ProofSpecStructOutput]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    verify(
      proof: ExistenceProofStruct,
      spec: ProofSpecStruct,
      root: BytesLike,
      key: BytesLike,
      value: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    setRootHash(
      rootHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    convertProof(
      key: BytesLike,
      value: BytesLike,
      _prefix: BytesLike,
      _leafOpUint: BigNumberish[],
      _innerOpPrefix: BytesLike,
      _innerOpSuffix: BytesLike,
      existenceProofInnerOpHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[ExistenceProofStructOutput]>;

    verifyProof(
      proof: ExistenceProofStruct,
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  getIavlSpec(overrides?: CallOverrides): Promise<ProofSpecStructOutput>;

  owner(overrides?: CallOverrides): Promise<string>;

  verify(
    proof: ExistenceProofStruct,
    spec: ProofSpecStruct,
    root: BytesLike,
    key: BytesLike,
    value: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  setRootHash(
    rootHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  convertProof(
    key: BytesLike,
    value: BytesLike,
    _prefix: BytesLike,
    _leafOpUint: BigNumberish[],
    _innerOpPrefix: BytesLike,
    _innerOpSuffix: BytesLike,
    existenceProofInnerOpHash: BigNumberish,
    overrides?: CallOverrides
  ): Promise<ExistenceProofStructOutput>;

  verifyProof(
    proof: ExistenceProofStruct,
    key: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    getIavlSpec(overrides?: CallOverrides): Promise<ProofSpecStructOutput>;

    owner(overrides?: CallOverrides): Promise<string>;

    verify(
      proof: ExistenceProofStruct,
      spec: ProofSpecStruct,
      root: BytesLike,
      key: BytesLike,
      value: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setRootHash(
      rootHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    convertProof(
      key: BytesLike,
      value: BytesLike,
      _prefix: BytesLike,
      _leafOpUint: BigNumberish[],
      _innerOpPrefix: BytesLike,
      _innerOpSuffix: BytesLike,
      existenceProofInnerOpHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<ExistenceProofStructOutput>;

    verifyProof(
      proof: ExistenceProofStruct,
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    getIavlSpec(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    verify(
      proof: ExistenceProofStruct,
      spec: ProofSpecStruct,
      root: BytesLike,
      key: BytesLike,
      value: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setRootHash(
      rootHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    convertProof(
      key: BytesLike,
      value: BytesLike,
      _prefix: BytesLike,
      _leafOpUint: BigNumberish[],
      _innerOpPrefix: BytesLike,
      _innerOpSuffix: BytesLike,
      existenceProofInnerOpHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyProof(
      proof: ExistenceProofStruct,
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getIavlSpec(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    verify(
      proof: ExistenceProofStruct,
      spec: ProofSpecStruct,
      root: BytesLike,
      key: BytesLike,
      value: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setRootHash(
      rootHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    convertProof(
      key: BytesLike,
      value: BytesLike,
      _prefix: BytesLike,
      _leafOpUint: BigNumberish[],
      _innerOpPrefix: BytesLike,
      _innerOpSuffix: BytesLike,
      existenceProofInnerOpHash: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyProof(
      proof: ExistenceProofStruct,
      key: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
