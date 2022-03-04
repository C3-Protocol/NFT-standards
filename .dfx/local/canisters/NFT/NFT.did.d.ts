import type { Principal } from '@dfinity/principal';
export interface BuyRequest {
  'tokenIndex' : TokenIndex,
  'marketFeeRatio' : bigint,
  'feeTo' : Principal,
}
export type BuyResponse = { 'ok' : TokenIndex } |
  {
    'err' : { 'NotAllowBuySelf' : null } |
      { 'InsufficientBalance' : null } |
      { 'AlreadyTransferToOther' : null } |
      { 'NotFoundIndex' : null } |
      { 'Unauthorized' : null } |
      { 'Other' : null } |
      { 'LessThanFee' : null } |
      { 'AllowedInsufficientBalance' : null }
  };
export interface CanvasIdentity {
  'index' : TokenIndex,
  'canisterId' : Principal,
}
export interface Component { 'id' : bigint, 'attribute' : ComponentAttribute }
export interface ComponentAttribute {
  'attr_value' : string,
  'attr_name' : string,
}
export type GetTokenResponse = { 'ok' : TokenDetails } |
  { 'err' : { 'NotFoundIndex' : null } };
export interface ListRequest { 'tokenIndex' : TokenIndex, 'price' : bigint }
export type ListResponse = { 'ok' : TokenIndex } |
  {
    'err' : { 'NotApprove' : null } |
      { 'NotNFT' : null } |
      { 'NotFoundIndex' : null } |
      { 'SamePrice' : null } |
      { 'NotOwner' : null } |
      { 'Other' : null } |
      { 'AlreadyList' : null }
  };
export interface Listings {
  'tokenIndex' : TokenIndex,
  'time' : Time,
  'seller' : Principal,
  'price' : bigint,
}
export type MintResponse = { 'ok' : Array<CanvasIdentity> } |
  {
    'err' : { 'NotOpen' : null } |
      { 'NotWhiteListOrMaximum' : null } |
      { 'SoldOut' : null } |
      { 'InsufficientBalance' : null } |
      { 'Unauthorized' : null } |
      { 'Other' : null } |
      { 'NotEnoughToMint' : null } |
      { 'LessThanFee' : null } |
      { 'AllowedInsufficientBalance' : null }
  };
export interface NFT {
  'approve' : (arg_0: Principal, arg_1: TokenIndex__1) => Promise<boolean>,
  'balanceOf' : (arg_0: Principal) => Promise<bigint>,
  'batchTransferFrom' : (
      arg_0: Principal,
      arg_1: Array<Principal>,
      arg_2: Array<TokenIndex__1>,
    ) => Promise<TransferResponse>,
  'buyNow' : (arg_0: BuyRequest) => Promise<BuyResponse>,
  'cancelList' : (arg_0: TokenIndex__1) => Promise<ListResponse>,
  'getAll' : () => Promise<Array<[TokenIndex__1, Principal]>>,
  'getAllHolder' : (arg_0: Principal) => Promise<Array<Principal>>,
  'getAllNFT' : (arg_0: Principal) => Promise<
      Array<[TokenIndex__1, Principal]>
    >,
  'getAllNftCanister' : () => Promise<Array<Principal>>,
  'getAllTokens' : () => Promise<Array<[TokenIndex__1, NFTMetaData]>>,
  'getApproved' : (arg_0: TokenIndex__1) => Promise<[] | [Principal]>,
  'getAvailableMint' : () => Promise<Array<[TokenIndex__1, boolean]>>,
  'getComponentById' : (arg_0: TokenIndex__1) => Promise<[] | [Component]>,
  'getComponentsSize' : () => Promise<bigint>,
  'getCycles' : () => Promise<bigint>,
  'getListings' : () => Promise<Array<[NFTStoreInfo, Listings]>>,
  'getSoldListings' : () => Promise<Array<[NFTStoreInfo, SoldListings]>>,
  'getStorageCanisterId' : () => Promise<[] | [Principal]>,
  'getTokenById' : (arg_0: bigint) => Promise<GetTokenResponse>,
  'isApprovedForAll' : (arg_0: Principal, arg_1: Principal) => Promise<boolean>,
  'isList' : (arg_0: TokenIndex__1) => Promise<[] | [Listings]>,
  'list' : (arg_0: ListRequest) => Promise<ListResponse>,
  'mint' : (arg_0: bigint) => Promise<MintResponse>,
  'newStorageCanister' : (arg_0: Principal) => Promise<boolean>,
  'ownerOf' : (arg_0: TokenIndex__1) => Promise<[] | [Principal]>,
  'proAvailableMint' : () => Promise<boolean>,
  'setApprovalForAll' : (arg_0: Principal, arg_1: boolean) => Promise<boolean>,
  'setNftCanister' : (arg_0: Array<Principal>) => Promise<boolean>,
  'setOwner' : (arg_0: Principal) => Promise<boolean>,
  'setStorageCanisterId' : (arg_0: [] | [Principal]) => Promise<boolean>,
  'transferFrom' : (
      arg_0: Principal,
      arg_1: Principal,
      arg_2: TokenIndex__1,
    ) => Promise<TransferResponse>,
  'updateList' : (arg_0: ListRequest) => Promise<ListResponse>,
  'uploadComponents' : (arg_0: Array<Component>) => Promise<boolean>,
  'uploadNftMetaData' : (arg_0: Array<NFTMetaData>) => Promise<boolean>,
  'wallet_receive' : () => Promise<bigint>,
}
export interface NFTMetaData {
  'id' : bigint,
  'attr1' : bigint,
  'attr2' : bigint,
  'attr3' : bigint,
  'attr4' : bigint,
  'attr5' : bigint,
  'attr6' : bigint,
  'attr7' : bigint,
}
export interface NFTStoreInfo { 'index' : TokenIndex, 'canisterId' : Principal }
export interface SoldListings {
  'lastPrice' : bigint,
  'time' : Time,
  'account' : bigint,
}
export type Time = bigint;
export interface TokenDetails {
  'id' : bigint,
  'attr1' : ComponentAttribute,
  'attr2' : ComponentAttribute,
  'attr3' : ComponentAttribute,
  'attr4' : ComponentAttribute,
  'attr5' : ComponentAttribute,
  'attr6' : ComponentAttribute,
  'attr7' : ComponentAttribute,
}
export type TokenIndex = bigint;
export type TokenIndex__1 = bigint;
export type TransferResponse = { 'ok' : TokenIndex } |
  {
    'err' : { 'ListOnMarketPlace' : null } |
      { 'NotAllowTransferToSelf' : null } |
      { 'NotOwnerOrNotApprove' : null } |
      { 'Other' : null }
  };
export interface _SERVICE extends NFT {}
