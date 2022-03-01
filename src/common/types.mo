import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Int "mo:base/Int";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Text "mo:base/Text";
import List "mo:base/List";
import Time "mo:base/Time";
import Hash "mo:base/Hash";

module Types = {

  public let CREATECANVAS_CYCLES: Nat = 1_000_000_000_000;  //1 T
  public type Result<T,E> = Result.Result<T,E>;
  public type TokenIndex = Nat;

  public type Balance = Nat;
  
  public type AirDropStruct = {
    user: Principal;
    remainTimes: Nat;
  };

  public type DisCountStruct = {
    user: Principal;
    disCount: Nat;
  };

  public type BuyRequest = {
    tokenIndex:     TokenIndex;
    feeTo:          Principal;
    marketFeeRatio: Nat;
  };

  public type PreMint = {
    user: Principal;
    index: Nat;
  };

  public type AirDropResponse = Result.Result<CanvasIdentity, {
    #NotInAirDropListOrAlreadyCliam;
    #AlreadyCliam;
  }>;

  public type MintResponse = Result.Result<[CanvasIdentity], {
    #Unauthorized;
    #LessThanFee;
    #InsufficientBalance;
    #AllowedInsufficientBalance;
    #Other;
    #SoldOut;
    #NotOpen;
    #NotEnoughToMint;
    #NotWhiteListOrMaximum;
  }>;

  public type CanvasIdentity = {
    index: TokenIndex;
    canisterId: Principal;
  };

  public type TransferResponse = Result.Result<TokenIndex, {
    #NotOwnerOrNotApprove;
    #NotAllowTransferToSelf;
    #ListOnMarketPlace;
    #Other;
  }>;

  public type BuyResponse = Result.Result<TokenIndex, {
    #Unauthorized;
    #LessThanFee;
    #InsufficientBalance;
    #AllowedInsufficientBalance;
    #NotFoundIndex;
    #NotAllowBuySelf;
    #AlreadyTransferToOther;
    #Other;
  }>;

  public type ListRequest = {
    tokenIndex : TokenIndex;
    price : Nat;
  };

  public type Listings = { 
    tokenIndex : TokenIndex; 
    seller : Principal; 
    price : Nat;
    time : Time.Time;
  };

  public type GetListingsRes = { 
    listings : Listings;
    rarityScore : Float;
  };

  public type SoldListings = {
    lastPrice : Nat;
    time : Time.Time;
    account : Nat;
  };

  public type GetSoldListingsRes = { 
    listings : SoldListings;
    rarityScore : Float;
  };

  public type Operation = {
    #Mint;
    #List;
    #UpdateList;
    #CancelList;
    #Sale;
    #Transfer;
    #Bid;
  };

  public type OpRecord = {
    op: Operation;
    price: ?Nat;
    from: ?Principal;
    to: ?Principal;
    timestamp: Time.Time;
  };

  public type AncestorMintRecord = {
    index: Nat;
    record: OpRecord;
  };

  public type ListResponse = Result.Result<TokenIndex, {
    #NotOwner;
    #NotFoundIndex;
    #AlreadyList;
    #NotApprove;
    #NotNFT;
    #SamePrice;
    #Other;
  }>;

  public type StorageActor = actor {
    setFavorite : shared (user: Principal, info: CanvasIdentity) -> async ();
    cancelFavorite : shared (user: Principal, info: CanvasIdentity) -> async ();
    addRecord : shared (index: TokenIndex, op: Operation, from: ?Principal, to: ?Principal, 
        price: ?Nat, timestamp: Time.Time) -> async ();
    addBuyRecord : shared (index: TokenIndex, from: ?Principal, to: ?Principal, 
        price: ?Nat, timestamp: Time.Time) -> async ();
    addRecords : shared (records: [AncestorMintRecord]) -> async ();
  };

  public module TokenIndex = {
    public func equal(x : TokenIndex, y : TokenIndex) : Bool {
      x == y
    };
    public func hash(x : TokenIndex) : Hash.Hash {
      Text.hash(Nat.toText(x))
    };
  };

}

