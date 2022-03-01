import type { Principal } from '@dfinity/principal';
export type AirDropResponse = { 'ok' : CanvasIdentity } |
  {
    'err' : { 'AlreadyCliam' : null } |
      { 'NotInAirDropListOrAlreadyCliam' : null }
  };
export interface AirDropStruct { 'user' : Principal, 'remainTimes' : bigint }
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
export interface DisCountStruct { 'disCount' : bigint, 'user' : Principal }
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
  'cancelFavorite' : (arg_0: TokenIndex__1) => Promise<boolean>,
  'cancelList' : (arg_0: TokenIndex__1) => Promise<ListResponse>,
  'clearAirDrop' : () => Promise<boolean>,
  'clearDisCount' : () => Promise<boolean>,
  'cliamAirdrop' : () => Promise<AirDropResponse>,
  'deleteAirDrop' : (arg_0: Principal) => Promise<boolean>,
  'getAirDropLeft' : () => Promise<Array<[Principal, bigint]>>,
  'getAirDropRemain' : (arg_0: Principal) => Promise<bigint>,
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
  'getDisCountByUser' : (arg_0: Principal) => Promise<bigint>,
  'getDisCountLeft' : () => Promise<Array<[Principal, bigint]>>,
  'getListings' : () => Promise<Array<[NFTStoreInfo, Listings]>>,
  'getMintPrice' : () => Promise<bigint>,
  'getSoldListings' : () => Promise<Array<[NFTStoreInfo, SoldListings]>>,
  'getStorageCanisterId' : () => Promise<[] | [Principal]>,
  'getTokenById' : (arg_0: bigint) => Promise<GetTokenResponse>,
  'getWICPCanisterId' : () => Promise<Principal>,
  'isApprovedForAll' : (arg_0: Principal, arg_1: Principal) => Promise<boolean>,
  'isList' : (arg_0: TokenIndex__1) => Promise<[] | [Listings]>,
  'list' : (arg_0: ListRequest) => Promise<ListResponse>,
  'mint' : (arg_0: bigint) => Promise<MintResponse>,
  'newStorageCanister' : (arg_0: Principal) => Promise<boolean>,
  'ownerOf' : (arg_0: TokenIndex__1) => Promise<[] | [Principal]>,
  'preMint' : (arg_0: Array<PreMint>) => Promise<bigint>,
  'proAvailableMint' : () => Promise<boolean>,
  'setApprovalForAll' : (arg_0: Principal, arg_1: boolean) => Promise<boolean>,
  'setFavorite' : (arg_0: TokenIndex__1) => Promise<boolean>,
  'setMintPrice' : (arg_0: bigint) => Promise<boolean>,
  'setNftCanister' : (arg_0: Array<Principal>) => Promise<boolean>,
  'setOwner' : (arg_0: Principal) => Promise<boolean>,
  'setStorageCanisterId' : (arg_0: [] | [Principal]) => Promise<boolean>,
  'setWICPCanisterId' : (arg_0: Principal) => Promise<boolean>,
  'transferFrom' : (
      arg_0: Principal,
      arg_1: Principal,
      arg_2: TokenIndex__1,
    ) => Promise<TransferResponse>,
  'updateList' : (arg_0: ListRequest) => Promise<ListResponse>,
  'uploadAirDropList' : (arg_0: Array<AirDropStruct>) => Promise<boolean>,
  'uploadComponents' : (arg_0: Array<Component>) => Promise<boolean>,
  'uploadDisCountList' : (arg_0: Array<DisCountStruct>) => Promise<boolean>,
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
export interface PreMint { 'user' : Principal, 'index' : bigint }
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
