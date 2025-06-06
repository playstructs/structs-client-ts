import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryDenomTraceRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/query";
import { QueryDenomTraceResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/query";
import { QueryDenomTracesRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/query";
import { QueryDenomTracesResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/query";
import { Params } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/transfer";
import { TransferAuthorization } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/authz";
import { MsgTransferResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/tx";
import { DenomTrace } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/transfer";
import { QueryDenomHashRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/query";
import { MsgUpdateParams } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/tx";
import { MsgTransfer } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/tx";
import { Allocation } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/authz";
import { QueryParamsRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/query";
import { QueryParamsResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/query";
import { QueryDenomHashResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/query";
import { QueryEscrowAddressResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/query";
import { QueryEscrowAddressRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/query";
import { QueryTotalEscrowForDenomRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/query";
import { QueryTotalEscrowForDenomResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/query";
import { GenesisState } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/genesis";
import { MsgUpdateParamsResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/ibc.applications.transfer.v1.QueryDenomTraceRequest", QueryDenomTraceRequest],
    ["/ibc.applications.transfer.v1.QueryDenomTraceResponse", QueryDenomTraceResponse],
    ["/ibc.applications.transfer.v1.QueryDenomTracesRequest", QueryDenomTracesRequest],
    ["/ibc.applications.transfer.v1.QueryDenomTracesResponse", QueryDenomTracesResponse],
    ["/ibc.applications.transfer.v1.Params", Params],
    ["/ibc.applications.transfer.v1.TransferAuthorization", TransferAuthorization],
    ["/ibc.applications.transfer.v1.MsgTransferResponse", MsgTransferResponse],
    ["/ibc.applications.transfer.v1.DenomTrace", DenomTrace],
    ["/ibc.applications.transfer.v1.QueryDenomHashRequest", QueryDenomHashRequest],
    ["/ibc.applications.transfer.v1.MsgUpdateParams", MsgUpdateParams],
    ["/ibc.applications.transfer.v1.MsgTransfer", MsgTransfer],
    ["/ibc.applications.transfer.v1.Allocation", Allocation],
    ["/ibc.applications.transfer.v1.QueryParamsRequest", QueryParamsRequest],
    ["/ibc.applications.transfer.v1.QueryParamsResponse", QueryParamsResponse],
    ["/ibc.applications.transfer.v1.QueryDenomHashResponse", QueryDenomHashResponse],
    ["/ibc.applications.transfer.v1.QueryEscrowAddressResponse", QueryEscrowAddressResponse],
    ["/ibc.applications.transfer.v1.QueryEscrowAddressRequest", QueryEscrowAddressRequest],
    ["/ibc.applications.transfer.v1.QueryTotalEscrowForDenomRequest", QueryTotalEscrowForDenomRequest],
    ["/ibc.applications.transfer.v1.QueryTotalEscrowForDenomResponse", QueryTotalEscrowForDenomResponse],
    ["/ibc.applications.transfer.v1.GenesisState", GenesisState],
    ["/ibc.applications.transfer.v1.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    
];

export { msgTypes }