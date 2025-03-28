import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryGranterGrantsRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/authz/v1beta1/query";
import { QueryGranterGrantsResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/authz/v1beta1/query";
import { MsgGrantResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/authz/v1beta1/tx";
import { Grant } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/authz/v1beta1/authz";
import { EventGrant } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/authz/v1beta1/event";
import { QueryGranteeGrantsResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/authz/v1beta1/query";
import { EventRevoke } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/authz/v1beta1/event";
import { QueryGrantsResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/authz/v1beta1/query";
import { QueryGranteeGrantsRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/authz/v1beta1/query";
import { MsgGrant } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/authz/v1beta1/tx";
import { MsgExec } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/authz/v1beta1/tx";
import { MsgExecResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/authz/v1beta1/tx";
import { MsgRevoke } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/authz/v1beta1/tx";
import { GenericAuthorization } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/authz/v1beta1/authz";
import { GrantAuthorization } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/authz/v1beta1/authz";
import { GrantQueueItem } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/authz/v1beta1/authz";
import { MsgRevokeResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/authz/v1beta1/tx";
import { GenesisState } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/authz/v1beta1/genesis";
import { QueryGrantsRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.3/proto/cosmos/authz/v1beta1/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cosmos.authz.v1beta1.QueryGranterGrantsRequest", QueryGranterGrantsRequest],
    ["/cosmos.authz.v1beta1.QueryGranterGrantsResponse", QueryGranterGrantsResponse],
    ["/cosmos.authz.v1beta1.MsgGrantResponse", MsgGrantResponse],
    ["/cosmos.authz.v1beta1.Grant", Grant],
    ["/cosmos.authz.v1beta1.EventGrant", EventGrant],
    ["/cosmos.authz.v1beta1.QueryGranteeGrantsResponse", QueryGranteeGrantsResponse],
    ["/cosmos.authz.v1beta1.EventRevoke", EventRevoke],
    ["/cosmos.authz.v1beta1.QueryGrantsResponse", QueryGrantsResponse],
    ["/cosmos.authz.v1beta1.QueryGranteeGrantsRequest", QueryGranteeGrantsRequest],
    ["/cosmos.authz.v1beta1.MsgGrant", MsgGrant],
    ["/cosmos.authz.v1beta1.MsgExec", MsgExec],
    ["/cosmos.authz.v1beta1.MsgExecResponse", MsgExecResponse],
    ["/cosmos.authz.v1beta1.MsgRevoke", MsgRevoke],
    ["/cosmos.authz.v1beta1.GenericAuthorization", GenericAuthorization],
    ["/cosmos.authz.v1beta1.GrantAuthorization", GrantAuthorization],
    ["/cosmos.authz.v1beta1.GrantQueueItem", GrantQueueItem],
    ["/cosmos.authz.v1beta1.MsgRevokeResponse", MsgRevokeResponse],
    ["/cosmos.authz.v1beta1.GenesisState", GenesisState],
    ["/cosmos.authz.v1beta1.QueryGrantsRequest", QueryGrantsRequest],
    
];

export { msgTypes }