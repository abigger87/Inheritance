/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface OwnerManagerContract
  extends Truffle.Contract<OwnerManagerInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<OwnerManagerInstance>;
}

export interface AddedOwner {
  name: "AddedOwner";
  args: {
    owner: string;
    0: string;
  };
}

export interface ChangedThreshold {
  name: "ChangedThreshold";
  args: {
    threshold: BN;
    0: BN;
  };
}

export interface RemovedOwner {
  name: "RemovedOwner";
  args: {
    owner: string;
    0: string;
  };
}

type AllEvents = AddedOwner | ChangedThreshold | RemovedOwner;

export interface OwnerManagerInstance extends Truffle.ContractInstance {
  addOwnerWithThreshold: {
    (
      owner: string,
      _threshold: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      owner: string,
      _threshold: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      owner: string,
      _threshold: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      owner: string,
      _threshold: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  changeThreshold: {
    (
      _threshold: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _threshold: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _threshold: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _threshold: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getOwners(txDetails?: Truffle.TransactionDetails): Promise<string[]>;

  getThreshold(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  isOwner(
    owner: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  removeOwner: {
    (
      prevOwner: string,
      owner: string,
      _threshold: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      prevOwner: string,
      owner: string,
      _threshold: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      prevOwner: string,
      owner: string,
      _threshold: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      prevOwner: string,
      owner: string,
      _threshold: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  swapOwner: {
    (
      prevOwner: string,
      oldOwner: string,
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      prevOwner: string,
      oldOwner: string,
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      prevOwner: string,
      oldOwner: string,
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      prevOwner: string,
      oldOwner: string,
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    addOwnerWithThreshold: {
      (
        owner: string,
        _threshold: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        owner: string,
        _threshold: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        owner: string,
        _threshold: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        owner: string,
        _threshold: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    changeThreshold: {
      (
        _threshold: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _threshold: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _threshold: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _threshold: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getOwners(txDetails?: Truffle.TransactionDetails): Promise<string[]>;

    getThreshold(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    isOwner(
      owner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    removeOwner: {
      (
        prevOwner: string,
        owner: string,
        _threshold: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        prevOwner: string,
        owner: string,
        _threshold: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        prevOwner: string,
        owner: string,
        _threshold: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        prevOwner: string,
        owner: string,
        _threshold: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    swapOwner: {
      (
        prevOwner: string,
        oldOwner: string,
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        prevOwner: string,
        oldOwner: string,
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        prevOwner: string,
        oldOwner: string,
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        prevOwner: string,
        oldOwner: string,
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
