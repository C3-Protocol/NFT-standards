import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Hash "mo:base/Hash";
import Nat32 "mo:base/Nat32";
import Char "mo:base/Char";
import Float "mo:base/Float";

module Types = {

    public type Image = Blob;

    public type Component = {
        id: Nat;
        attribute: ComponentAttribute;
    };

    public type ComponentAttribute = {
       attr_name: Text;
       attr_value: Text;
    };

    public type TokenDetails = {
        id: Nat;
        attr1: ComponentAttribute;
        attr2: ComponentAttribute;
        attr3: ComponentAttribute;
        attr4: ComponentAttribute;
        attr5: ComponentAttribute;
        attr6: ComponentAttribute;
        attr7: ComponentAttribute;
    };

    public type NFTMetaData = {
        id: Nat;
        attr1: Nat;
        attr2: Nat;
        attr3: Nat;
        attr4: Nat;
        attr5: Nat;
        attr6: Nat;
        attr7: Nat;
    };

    public type GetTokenResponse = Result.Result<TokenDetails, {
        #NotFoundIndex;
    }>;

    //Http Request and Response
    public type HttpRequest = {
        body: Blob;
        headers: [HeaderField];
        method: Text;
        url: Text;
    };

    public type HeaderField = (Text, Text);

    public type HttpResponse = {
        body: Blob;
        headers: [HeaderField];
        status_code: Nat16;
        streaming_strategy: ?StreamingStrategy;
    };
  
    public type StreamingCallbackToken =  {
        content_encoding: Text;
        index: Nat;
        key: Text;
        sha256: ?Blob;
    };

    public type StreamingStrategy = {
        #Callback: {
            callback: query (StreamingCallbackToken) -> async (StreamingCallbackResponse);
            token: StreamingCallbackToken;
        };
    };

    public type StreamingCallbackResponse = {
        body: Blob;
        token: ?StreamingCallbackToken;
    };

    public func textToNat( txt : Text) : Nat {
        assert(txt.size() > 0);
        let chars = txt.chars();

        var num : Nat = 0;
        for (v in chars){
            let charToNum = Nat32.toNat(Char.toNat32(v)-48);
            assert(charToNum >= 0 and charToNum <= 9);
            num := num * 10 +  charToNum;          
        };

        num;
    };

}

