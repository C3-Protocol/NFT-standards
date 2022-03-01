import type { Principal } from '@dfinity/principal';
export interface AncestorMintRecord { 'index' : bigint, 'record' : OpRecord__1 }
export interface NFTStoreInfo { 'index' : TokenIndex, 'canisterId' : Principal }
export interface OpRecord {
  'op' : Operation,
  'to' : [] | [Principal],
  'from' : [] | [Principal],
  'timestamp' : Time,
  'price' : [] | [bigint],
}
export interface OpRecord__1 {
  'op' : Operation,
  'to' : [] | [Principal],
  'from' : [] | [Principal],
  'timestamp' : Time,
  'price' : [] | [bigint],
}
export type Operation = { 'Bid' : null } |
  { 'List' : null } |
  { 'Mint' : null } |
  { 'Sale' : null } |
  { 'CancelList' : null } |
  { 'Transfer' : null } |
  { 'UpdateList' : null };
export type Operation__1 = { 'Bid' : null } |
  { 'List' : null } |
  { 'Mint' : null } |
  { 'Sale' : null } |
  { 'CancelList' : null } |
  { 'Transfer' : null } |
  { 'UpdateList' : null };
export interface Storage {
  'addBuyRecord' : (
      arg_0: TokenIndex__1,
      arg_1: [] | [Principal],
      arg_2: [] | [Principal],
      arg_3: [] | [bigint],
      arg_4: Time,
    ) => Promise<undefined>,
  'addRecord' : (
      arg_0: TokenIndex__1,
      arg_1: Operation__1,
      arg_2: [] | [Principal],
      arg_3: [] | [Principal],
      arg_4: [] | [bigint],
      arg_5: Time,
    ) => Promise<undefined>,
  'addRecord2' : (arg_0: Array<bigint>, arg_1: Principal) => Promise<undefined>,
  'addRecords' : (arg_0: Array<AncestorMintRecord>) => Promise<undefined>,
  'cancelFavorite' : (arg_0: Principal, arg_1: NFTStoreInfo) => Promise<
      undefined
    >,
  'getCycles' : () => Promise<bigint>,
  'getFavorite' : (arg_0: Principal) => Promise<Array<NFTStoreInfo>>,
  'getHistory' : (arg_0: TokenIndex__1) => Promise<Array<OpRecord>>,
  'getNftFavoriteNum' : (arg_0: TokenIndex__1) => Promise<bigint>,
  'getZombieNftCanisterId' : () => Promise<Principal>,
  'isFavorite' : (arg_0: Principal, arg_1: NFTStoreInfo) => Promise<boolean>,
  'setFavorite' : (arg_0: Principal, arg_1: NFTStoreInfo) => Promise<undefined>,
  'setZombieNftCanisterId' : (arg_0: Principal) => Promise<boolean>,
  'wallet_receive' : () => Promise<bigint>,
}
export type Time = bigint;
export type TokenIndex = bigint;
export type TokenIndex__1 = bigint;
export interface _SERVICE extends Storage {}
