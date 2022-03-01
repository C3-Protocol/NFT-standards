// This is a generated Motoko binding.
// Please use `import service "ic:canister_id"` instead to call canisters on the IC if possible.

module {
  public type AccountIdentifier = Text;
  public type Balance = Nat;
  public type BlockHeight = Nat64;
  public type BurnResponse = {
    #ok : Balance;
    #err : { #InsufficientBalance; #Other };
  };
  public type ICPTransactionRecord = {
    from_subaccount : ?SubAccount;
    blockHeight : BlockHeight;
  };
  public type MintResponse = {
    #ok : Balance;
    #err : {
      #BlockError : Text;
      #NotTransferType;
      #CanisterIDError : Principal;
      #NotRecharge;
      #AllowedInsufficientBalance;
    };
  };
  public type SubAccount = [Nat8];
  public type TransferResponse = {
    #ok : Balance;
    #err : {
      #InsufficientBalance;
      #Unauthorized;
      #Other;
      #LessThanFee;
      #AllowedInsufficientBalance;
    };
  };
  public type WICPActor = actor {
    approve : shared (Principal, Nat) -> async Bool;
    balanceOf : shared query Principal -> async Nat;
    totalSupply : shared query () -> async Nat;
    transfer : shared (Principal, Nat) -> async TransferResponse;
    transferFrom : shared (Principal, Principal, Nat) -> async TransferResponse;
    batchTransfer : shared ([Principal], [Nat]) -> async TransferResponse;
    batchTransferFrom : shared (Principal, [Principal], [Nat]) -> async TransferResponse;
  }
}