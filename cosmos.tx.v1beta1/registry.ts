import { GeneratedType } from "@cosmjs/proto-signing";
import { ModeInfo_Single } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/tx";
import { ModeInfo_Multi } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/tx";
import { Tip } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/tx";
import { GetTxsEventRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/service";
import { GetTxResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/service";
import { TxDecodeResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/service";
import { SimulateResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/service";
import { GetTxRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/service";
import { TxDecodeRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/service";
import { Tx } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/tx";
import { TxDecodeAminoRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/service";
import { SignDoc } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/tx";
import { TxBody } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/tx";
import { GetTxsEventResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/service";
import { BroadcastTxResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/service";
import { TxEncodeRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/service";
import { TxEncodeAminoRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/service";
import { SignDocDirectAux } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/tx";
import { TxDecodeAminoResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/service";
import { TxRaw } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/tx";
import { ModeInfo } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/tx";
import { AuxSignerData } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/tx";
import { SimulateRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/service";
import { GetBlockWithTxsResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/service";
import { TxEncodeAminoResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/service";
import { AuthInfo } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/tx";
import { Fee } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/tx";
import { GetBlockWithTxsRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/service";
import { TxEncodeResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/service";
import { SignerInfo } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/tx";
import { BroadcastTxRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/tx/v1beta1/service";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cosmos.tx.v1beta1.ModeInfo_Single", ModeInfo_Single],
    ["/cosmos.tx.v1beta1.ModeInfo_Multi", ModeInfo_Multi],
    ["/cosmos.tx.v1beta1.Tip", Tip],
    ["/cosmos.tx.v1beta1.GetTxsEventRequest", GetTxsEventRequest],
    ["/cosmos.tx.v1beta1.GetTxResponse", GetTxResponse],
    ["/cosmos.tx.v1beta1.TxDecodeResponse", TxDecodeResponse],
    ["/cosmos.tx.v1beta1.SimulateResponse", SimulateResponse],
    ["/cosmos.tx.v1beta1.GetTxRequest", GetTxRequest],
    ["/cosmos.tx.v1beta1.TxDecodeRequest", TxDecodeRequest],
    ["/cosmos.tx.v1beta1.Tx", Tx],
    ["/cosmos.tx.v1beta1.TxDecodeAminoRequest", TxDecodeAminoRequest],
    ["/cosmos.tx.v1beta1.SignDoc", SignDoc],
    ["/cosmos.tx.v1beta1.TxBody", TxBody],
    ["/cosmos.tx.v1beta1.GetTxsEventResponse", GetTxsEventResponse],
    ["/cosmos.tx.v1beta1.BroadcastTxResponse", BroadcastTxResponse],
    ["/cosmos.tx.v1beta1.TxEncodeRequest", TxEncodeRequest],
    ["/cosmos.tx.v1beta1.TxEncodeAminoRequest", TxEncodeAminoRequest],
    ["/cosmos.tx.v1beta1.SignDocDirectAux", SignDocDirectAux],
    ["/cosmos.tx.v1beta1.TxDecodeAminoResponse", TxDecodeAminoResponse],
    ["/cosmos.tx.v1beta1.TxRaw", TxRaw],
    ["/cosmos.tx.v1beta1.ModeInfo", ModeInfo],
    ["/cosmos.tx.v1beta1.AuxSignerData", AuxSignerData],
    ["/cosmos.tx.v1beta1.SimulateRequest", SimulateRequest],
    ["/cosmos.tx.v1beta1.GetBlockWithTxsResponse", GetBlockWithTxsResponse],
    ["/cosmos.tx.v1beta1.TxEncodeAminoResponse", TxEncodeAminoResponse],
    ["/cosmos.tx.v1beta1.AuthInfo", AuthInfo],
    ["/cosmos.tx.v1beta1.Fee", Fee],
    ["/cosmos.tx.v1beta1.GetBlockWithTxsRequest", GetBlockWithTxsRequest],
    ["/cosmos.tx.v1beta1.TxEncodeResponse", TxEncodeResponse],
    ["/cosmos.tx.v1beta1.SignerInfo", SignerInfo],
    ["/cosmos.tx.v1beta1.BroadcastTxRequest", BroadcastTxRequest],
    
];

export { msgTypes }