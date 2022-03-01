export const idlFactory = ({ IDL }) => {
  const HeaderField = IDL.Tuple(IDL.Text, IDL.Text);
  const HttpRequest = IDL.Record({
    'url' : IDL.Text,
    'method' : IDL.Text,
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
  });
  const StreamingCallbackToken = IDL.Record({
    'key' : IDL.Text,
    'sha256' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'index' : IDL.Nat,
    'content_encoding' : IDL.Text,
  });
  const StreamingCallbackResponse = IDL.Record({
    'token' : IDL.Opt(StreamingCallbackToken),
    'body' : IDL.Vec(IDL.Nat8),
  });
  const StreamingStrategy = IDL.Variant({
    'Callback' : IDL.Record({
      'token' : StreamingCallbackToken,
      'callback' : IDL.Func(
          [StreamingCallbackToken],
          [StreamingCallbackResponse],
          ['query'],
        ),
    }),
  });
  const HttpResponse = IDL.Record({
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
    'streaming_strategy' : IDL.Opt(StreamingStrategy),
    'status_code' : IDL.Nat16,
  });
  const NFTMetaData = IDL.Service({
    'deleteImage' : IDL.Func([IDL.Nat], [IDL.Bool], []),
    'getCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'http_request' : IDL.Func([HttpRequest], [HttpResponse], ['query']),
    'setDataUser' : IDL.Func([IDL.Principal], [IDL.Bool], []),
    'uploadImage' : IDL.Func([IDL.Nat, IDL.Vec(IDL.Nat8)], [IDL.Bool], []),
    'wallet_receive' : IDL.Func([], [IDL.Nat], []),
  });
  return NFTMetaData;
};
export const init = ({ IDL }) => { return [IDL.Principal]; };
