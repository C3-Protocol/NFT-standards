# standards
Propose standards for dfinity NFT tokens

## ICP721 interface
This token standard provides a ERC721 approach with extensions that can add additional functionality based on the purpose of the token, and is inspired by the ERC-20 token standard 

The metadata of nft on ethereum is some data or URL links, I think nft's metadata on ICP can be another separate container, which can have its own unique functions, such as game characters, or other things.

The following interface allows for the implementation of a standard API for NFTs within smart contracts. This standard provides basic functionality to track and transfer NFTs.

### MUST
Every ICP-721 Token compliant contract must implement the ICP721 interfaces (subject to "caveats" below):
```go
shared(msg) actor class ICP721 {
    /// @notice Count all NFTs assigned to an owner
    /// @param _owner An address for whom to query the balance
    /// @return The number of NFTs owned by `_owner`, possibly zero
    public query func balanceOf(_owner: Principal) : async Nat;

    /// @notice Find the owner of an NFT index
    /// @param _tokenId The index NFT
    /// @return The Principal of the owner of the NFT
    public query func ownerOf(_tokenId: Nat) : async ?Principal;

    /// @notice Transfer ownership of an NFT -- THE CALLER IS RESPONSIBLE
    ///  TO CONFIRM THAT `_to` IS CAPABLE OF RECEIVING NFTS OR ELSE
    /// @dev Throws unless `msg.caller` is the current owner, an authorized
    ///  operator, or the approved address for this NFT. Throws if `_from` is
    ///  not the current owner. Throws if `_to` is the zero address. Throws if
    ///  `canisterId` is not a valid NFT.
    /// @param _from The current owner of the NFT
    /// @param _to The new owner
    /// @param _tokenId The index NFT to transfer
    /// @return True if success, false otherwise
    public share(msg) func transferFrom(_from： Principal, _to: Principal, _tokenId: Nat) : async Bool;

    /// @notice Change or reaffirm the approved address for an NFT
    ///  Throws unless `msg.caller` is the current NFT owner, or an authorized
    ///  operator of the current owner.
    /// @param _approved The new approved NFT controller
    /// @param _tokenId The index NFT to approve
    /// @return True if success, false otherwise
    public share(msg) func approve(_approved: Principal, _tokenId: Nat) external : async Bool;

    /// @notice Enable or disable approval for a third party ("operator") to manage
    ///  all of `msg.caller`'s assets
    /// @dev Emits the ApprovalForAll event. The contract MUST allow
    ///  multiple operators per owner.
    /// @param _operator Address to add to the set of authorized operators
    /// @param _approved True if the operator is approved, false to revoke approval
    /// @return True if success, false otherwise
    public share(msg) func setApprovalForAll( _operator: Principal, _approved: Bool) : async Bool;

    /// @notice Get the approved address for a single NFT
    /// @dev Throws if `_tokenId` is not a valid NFT.
    /// @param _tokenId The NFT to find the approved address for
    /// @return The approved address for this NFT, or null if there is none
    public query func getApproved(_tokenId: Nat) : async ?Principal

    /// @notice Query if an address is an authorized operator for another address
    /// @param _owner The address that owns the NFTs
    /// @param _operator The address that acts on behalf of the owner
    /// @return True if `_operator` is an approved operator for `_owner`, false otherwise
    public query func isApprovedForAll(_owner: Principal, _operator: Principal) : async Bool;
}
```


### OPTIONAL
```go
    /// @notice mint new NFT canister, 
    /// NFT is a matadat or url in ERC20, in dfinity, optional it can be a new canisterId,
    /// and must save the NFT canisterId, the would be used to check in function setNFTOwner to check msg.caller if exist in NFT CanisterId list
    /// @param up tp project logic
    /// @return True if mint success, false otherwise
    public share(msg) func mintNFT(……) : async ……;

    /// @notice check if _canisterId exist in Mint NFT List 
    /// @param _canisterId The canister of NFT
    /// @return True if exist, false otherwise
    public query func isCanisterExist(_canisterId: Principal) : async Bool;

    /// @notice when the canister of NFT be complete, callback this function from the NFT's canister 
    /// @param _owner set owner of that NFT(It's msg.caller, the NFT's canister)
    /// @return True if set owner success, false otherwise
    public share(msg) func setNFTOwner(_owner: Principal) : async Bool;

    /// @notice Count NFTs tracked by this contract
    /// @return A count of valid NFTs tracked by this contract, where each one of
    ///  them has an assigned and queryable owner
    public query func  totalSupply() : async Nat;

    /// @notice Enumerate valid NFTs
    /// @dev Throws if `_index` >= `totalSupply()`.
    /// @param _index A counter less than `totalSupply()`
    /// @return The token identifier for the `_index`th NFT,
    ///  (sort order not specified)
    public query func tokenByIndex(_index: Nat) : async Nat;

    /// @notice Enumerate NFTs assigned to an owner
    /// @dev Throws if `_index` >= `balanceOf(_owner)` or if
    ///  `_owner` is the zero address, representing invalid NFTs.
    /// @param _owner An address where we are interested in NFTs owned by them
    /// @param _index A counter less than `balanceOf(_owner)`
    /// @return The token identifier for the `_index`th NFT assigned to `_owner`,
    ///   (sort order not specified)
    public query func tokenOfOwnerByIndex(_owner: Principal, _index: Nat) : async Nat;

    /// @notice set Nft owner to be Nft canister's controller
    /// @dev Throws if caller is not contract owner 
    /// @param _canisterId a canisterId that pointed by NFT 
    /// @param _nftOwner nft's owner
    /// @return return true if set success, otherwise false
    public share(msg) func setController(_canisterId: Principal, _nftOwner: Principal) : async Bool;
```

PS: The controller of the nft container can be set as a black hole id to achieve the purpose of decentralization.

Please comment, submit PRs, collaborate with us to build this standard.