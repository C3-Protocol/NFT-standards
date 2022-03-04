# Launched your NFT on CCC MarketPlace
support other NFT project launched on CCC platform marketplace

## How to launched your NFT on CCC marketplace

### NFT.mo
it's the major smart contract, store all the nft-owner relationship,and support list/cancelList/transferFrom/batchTransferFrom and so on.

### storage.mo
it store all the transaction records, so every tx can be tracked.

### nftMetaData.mo
store all nft photo/video/music...

## what you need to do?
1. deploy the three canister: NFT.mo, storage.mo and nftMetaData.mo
2. set nft-owner relationship into NFT canister(through airdrop/mint/pubsell interface)
3. set your nft-store canister-id(nftMetaData.mo) into NFT canister
   
provide your nft-store canister-id, and set into the NFT, yout nft-store canister must provide a https_request to show your nft-photo or nft-video, than ccc web-front can show them on marketplace.

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

    public shared query(msg) func getAllNFT() : async [(TokenIndex, Principal)] 

    public shared(msg) func wallet_receive() : async Nat
}

shared(msg) actor class NFTMetaData {

    public shared(msg) func uploadImage(token_id: Nat, nftData: Blob): async Bool;

    public query func http_request(request: HttpRequest) : async HttpResponse

    public shared(msg) func wallet_receive() : async Nat
}
```


### OPTIONAL
```go
shared(msg) actor class NFT {
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
}
```

Please comment, submit PRs, collaborate with us to build this standard.

## What benefit of launched on ccc marketplace.

* we use WICP that created by C3-Prootocol, alreay have more than 4k customers, and more than 73K+ WICP transactions. you can check the website. 
https://opdit-ciaaa-aaaah-aa5ra-cai.ic0.app/#/index
use WICP can guarantee the atomic transaction.

* We put the account that receives the commission in the parameters of buyNow, that means all front-end trading markets can integrate this standard nft to earn commission fees. and project can set royaltyfeeRatio to earn royalty fee at every transaction.


## Contract us
Twitter: https://twitter.com/CCCProtocol

Email:   C3-Protocol@outlook.com