import { GeneratedType } from "@cosmjs/proto-signing";
import { Subspace } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/params/v1beta1/query";
import { ParameterChangeProposal } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/params/v1beta1/params";
import { QueryParamsRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/params/v1beta1/query";
import { QueryParamsResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/params/v1beta1/query";
import { QuerySubspacesRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/params/v1beta1/query";
import { ParamChange } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/params/v1beta1/params";
import { QuerySubspacesResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/params/v1beta1/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cosmos.params.v1beta1.Subspace", Subspace],
    ["/cosmos.params.v1beta1.ParameterChangeProposal", ParameterChangeProposal],
    ["/cosmos.params.v1beta1.QueryParamsRequest", QueryParamsRequest],
    ["/cosmos.params.v1beta1.QueryParamsResponse", QueryParamsResponse],
    ["/cosmos.params.v1beta1.QuerySubspacesRequest", QuerySubspacesRequest],
    ["/cosmos.params.v1beta1.ParamChange", ParamChange],
    ["/cosmos.params.v1beta1.QuerySubspacesResponse", QuerySubspacesResponse],
    
];

export { msgTypes }