import type { Principal } from '@dfinity/principal';
export type HeaderField = [string, string];
export interface HttpRequest {
  'url' : string,
  'method' : string,
  'body' : Array<number>,
  'headers' : Array<HeaderField>,
}
export interface HttpResponse {
  'body' : Array<number>,
  'headers' : Array<HeaderField>,
  'streaming_strategy' : [] | [StreamingStrategy],
  'status_code' : number,
}
export interface NFTMetaData {
  'deleteImage' : (arg_0: bigint) => Promise<boolean>,
  'getCycles' : () => Promise<bigint>,
  'http_request' : (arg_0: HttpRequest) => Promise<HttpResponse>,
  'setDataUser' : (arg_0: Principal) => Promise<boolean>,
  'uploadImage' : (arg_0: bigint, arg_1: Array<number>) => Promise<boolean>,
  'wallet_receive' : () => Promise<bigint>,
}
export interface StreamingCallbackResponse {
  'token' : [] | [StreamingCallbackToken],
  'body' : Array<number>,
}
export interface StreamingCallbackToken {
  'key' : string,
  'sha256' : [] | [Array<number>],
  'index' : bigint,
  'content_encoding' : string,
}
export type StreamingStrategy = {
    'Callback' : {
      'token' : StreamingCallbackToken,
      'callback' : [Principal, string],
    }
  };
export interface _SERVICE extends NFTMetaData {}
