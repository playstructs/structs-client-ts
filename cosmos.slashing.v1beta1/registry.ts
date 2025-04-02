import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryParamsResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/slashing/v1beta1/query";
import { QuerySigningInfoResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/slashing/v1beta1/query";
import { QuerySigningInfosResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/slashing/v1beta1/query";
import { MsgUpdateParams } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/slashing/v1beta1/tx";
import { MsgUpdateParamsResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/slashing/v1beta1/tx";
import { QuerySigningInfosRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/slashing/v1beta1/query";
import { MsgUnjailResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/slashing/v1beta1/tx";
import { ValidatorSigningInfo } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/slashing/v1beta1/slashing";
import { GenesisState } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/slashing/v1beta1/genesis";
import { MissedBlock } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/slashing/v1beta1/genesis";
import { Params } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/slashing/v1beta1/slashing";
import { QuerySigningInfoRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/slashing/v1beta1/query";
import { SigningInfo } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/slashing/v1beta1/genesis";
import { ValidatorMissedBlocks } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/slashing/v1beta1/genesis";
import { MsgUnjail } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/slashing/v1beta1/tx";
import { QueryParamsRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/slashing/v1beta1/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cosmos.slashing.v1beta1.QueryParamsResponse", QueryParamsResponse],
    ["/cosmos.slashing.v1beta1.QuerySigningInfoResponse", QuerySigningInfoResponse],
    ["/cosmos.slashing.v1beta1.QuerySigningInfosResponse", QuerySigningInfosResponse],
    ["/cosmos.slashing.v1beta1.MsgUpdateParams", MsgUpdateParams],
    ["/cosmos.slashing.v1beta1.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/cosmos.slashing.v1beta1.QuerySigningInfosRequest", QuerySigningInfosRequest],
    ["/cosmos.slashing.v1beta1.MsgUnjailResponse", MsgUnjailResponse],
    ["/cosmos.slashing.v1beta1.ValidatorSigningInfo", ValidatorSigningInfo],
    ["/cosmos.slashing.v1beta1.GenesisState", GenesisState],
    ["/cosmos.slashing.v1beta1.MissedBlock", MissedBlock],
    ["/cosmos.slashing.v1beta1.Params", Params],
    ["/cosmos.slashing.v1beta1.QuerySigningInfoRequest", QuerySigningInfoRequest],
    ["/cosmos.slashing.v1beta1.SigningInfo", SigningInfo],
    ["/cosmos.slashing.v1beta1.ValidatorMissedBlocks", ValidatorMissedBlocks],
    ["/cosmos.slashing.v1beta1.MsgUnjail", MsgUnjail],
    ["/cosmos.slashing.v1beta1.QueryParamsRequest", QueryParamsRequest],
    
];

export { msgTypes }