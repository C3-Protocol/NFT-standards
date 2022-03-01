import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Option "mo:base/Option";
import Principal "mo:base/Principal";
import Bool "mo:base/Bool";
import Cycles "mo:base/ExperimentalCycles";
import Result "mo:base/Result";
import Array "mo:base/Array";
import Blob "mo:base/Blob";
import Iter "mo:base/Iter";
import Types "../common/nftTypes";
import Hash "mo:base/Hash";

shared(msg) actor class NFTMetaData(_owner: Principal) = this {
    type HttpRequest = Types.HttpRequest;
    type HttpResponse = Types.HttpResponse;
    type Result<T,E> = Result.Result<T,E>;
    type Image = Types.Image;

    private stable var owner : Principal = _owner;
    private stable var supply : Nat  = 10000;  //accroding to your project
    private stable var imageDatas: [var Types.Image] = Array.init<Types.Image>(10000, Blob.fromArray([]));
 
    private stable var dataUser : Principal = Principal.fromText("umgol-annoi-q7dqt-qbsw6-a2pww-eitzs-6vi5t-efaz6-xquey-5jmut-sqe");

    public shared(msg) func setDataUser(user: Principal) : async Bool {
        assert(msg.caller == owner);
        dataUser := user;
        return true;
    };

    public shared(msg) func uploadImage(token_id: Nat, nftData: Blob): async Bool{
        assert(_checkUsr(msg.caller));
        imageDatas[token_id] := nftData;
        true
    };

    public shared(msg) func deleteImage(token_id: Nat): async Bool{
        assert(_checkUsr(msg.caller));
        imageDatas[token_id] := Blob.fromArray([]);
        true
    };

    public query func http_request(request: HttpRequest) : async HttpResponse {
        
        let path = Iter.toArray(Text.tokens(request.url, #text("/")));
        if (path.size() != 2){
            assert(false);
        };

        var nftData :Image = Blob.fromArray([]);
        let tokenId = Types.textToNat(path[1]);
        if(tokenId  >= supply){
            assert(false);
        };

        if (path[0] == "token") {
            nftData := imageDatas[tokenId];
        }else {assert(false)};

        return {
                body = nftData;
                headers = [("Content-Type", "image/png")];
                status_code = 200;
                streaming_strategy = null;
        };
    };

    public shared(msg) func wallet_receive() : async Nat {
        let available = Cycles.available();
        let accepted = Cycles.accept(available);
        return accepted;
    };

    public query func getCycles() : async Nat {
        return Cycles.balance();
    };

    private func _checkUsr(usr: Principal) : Bool {
        var ret = false;
        if(usr == owner or usr == dataUser){
            ret := true;
        };
        ret
    };

    system func preupgrade() {    
    };

    system func postupgrade() {
    };
 
}