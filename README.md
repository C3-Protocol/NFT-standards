# standards
Propose standards for dfinity NFT tokens

## ICP721 interface
The following interface allows for the implementation of a standard API for NFTs within smart contracts. This standard provides basic functionality to track and transfer NFTs.

### MUST
Every ICP-721 Token compliant contract must implement the ICP721 interfaces (subject to "caveats" below):
```go
shared(msg) actor class NFT {

    public shared(msg) func uploadNftMetaData(tokenInfo: [NFTMetaData]): async Bool;

    public shared(msg) func uploadComponents(components_data: [Component]): async Bool 

    public query func getTokenById(tokenId:Nat): async GetTokenResponse
    
    public query func balanceOf(_owner: Principal) : async Nat;

    public query func ownerOf(_tokenId: Nat) : async ?Principal;

    public share(msg) func transferFrom(_from： Principal, _to: Principal, _tokenId: Nat) : async Bool;

    public shared(msg) func list(listReq: ListRequest): async ListResponse

    public shared(msg) func cancelList(tokenIndex: TokenIndex): async ListResponse

    public shared(msg) func buyNow(buyRequest: BuyRequest): async BuyResponse

    public query func getListings() : async [(NFTStoreInfo, Listings)]

    public shared query(msg) func getAll() : async [(TokenIndex, Principal)] 

    public shared(msg) func wallet_receive() : async Nat
}
```


### OPTIONAL
```go
    public query func isList(index: TokenIndex) : async ?Listings

    public query func getSoldListings() : async [(NFTStoreInfo, SoldListings)]

    public shared(msg) func updateList(listReq: ListRequest): async ListResponse
  
    public shared(msg) func cliamAirdrop() : async AirDropResponse

    public shared(msg) func preMint(preMintArr: [PreMint]) : async Nat

    public shared(msg) func mint(mintAmount: Nat) : async MintResponse 

    public share(msg) func approve(_approved: Principal, _tokenId: Nat) external : async Bool;

    public share(msg) func setApprovalForAll( _operator: Principal, _approved: Bool) : async Bool;

    public query func getApproved(_tokenId: Nat) : async ?Principal

    public query func isApprovedForAll(_owner: Principal, _operator: Principal) : async Bool;

    public shared(msg) func batchTransferFrom(from: Principal, tos: [Principal], tokenIndexs: [TokenIndex]): async TransferResponse
```

Please comment, submit PRs, collaborate with us to build this standard.

we will launch an NFT on dfinity according to this standard soon