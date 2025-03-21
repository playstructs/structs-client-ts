// Generated by Ignite ignite.com/cli

import { SigningStargateClient, DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { QueryParamsRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/query";
import { TransferAuthorization } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/authz";
import { MsgUpdateParams } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/tx";
import { MsgTransfer } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/tx";
import { QueryDenomTraceResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/query";
import { QueryTotalEscrowForDenomResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/query";
import { Allocation } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/authz";
import { DenomTrace } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/transfer";
import { Params } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/transfer";
import { QueryDenomTraceRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/query";
import { QueryEscrowAddressRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/query";
import { MsgUpdateParamsResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/tx";
import { GenesisState } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/genesis";
import { QueryDenomTracesResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/query";
import { QueryEscrowAddressResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/query";
import { QueryTotalEscrowForDenomRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/query";
import { QueryDenomTracesRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/query";
import { QueryParamsResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/query";
import { QueryDenomHashRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/query";
import { QueryDenomHashResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/query";
import { MsgTransferResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.0.0/proto/ibc/applications/transfer/v1/tx";


export { QueryParamsRequest, TransferAuthorization, MsgUpdateParams, MsgTransfer, QueryDenomTraceResponse, QueryTotalEscrowForDenomResponse, Allocation, DenomTrace, Params, QueryDenomTraceRequest, QueryEscrowAddressRequest, MsgUpdateParamsResponse, GenesisState, QueryDenomTracesResponse, QueryEscrowAddressResponse, QueryTotalEscrowForDenomRequest, QueryDenomTracesRequest, QueryParamsResponse, QueryDenomHashRequest, QueryDenomHashResponse, MsgTransferResponse };

type sendQueryParamsRequestParams = {
  value: QueryParamsRequest,
  fee?: StdFee,
  memo?: string
};

type sendTransferAuthorizationParams = {
  value: TransferAuthorization,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateParamsParams = {
  value: MsgUpdateParams,
  fee?: StdFee,
  memo?: string
};

type sendMsgTransferParams = {
  value: MsgTransfer,
  fee?: StdFee,
  memo?: string
};

type sendQueryDenomTraceResponseParams = {
  value: QueryDenomTraceResponse,
  fee?: StdFee,
  memo?: string
};

type sendQueryTotalEscrowForDenomResponseParams = {
  value: QueryTotalEscrowForDenomResponse,
  fee?: StdFee,
  memo?: string
};

type sendAllocationParams = {
  value: Allocation,
  fee?: StdFee,
  memo?: string
};

type sendDenomTraceParams = {
  value: DenomTrace,
  fee?: StdFee,
  memo?: string
};

type sendParamsParams = {
  value: Params,
  fee?: StdFee,
  memo?: string
};

type sendQueryDenomTraceRequestParams = {
  value: QueryDenomTraceRequest,
  fee?: StdFee,
  memo?: string
};

type sendQueryEscrowAddressRequestParams = {
  value: QueryEscrowAddressRequest,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse,
  fee?: StdFee,
  memo?: string
};

type sendGenesisStateParams = {
  value: GenesisState,
  fee?: StdFee,
  memo?: string
};

type sendQueryDenomTracesResponseParams = {
  value: QueryDenomTracesResponse,
  fee?: StdFee,
  memo?: string
};

type sendQueryEscrowAddressResponseParams = {
  value: QueryEscrowAddressResponse,
  fee?: StdFee,
  memo?: string
};

type sendQueryTotalEscrowForDenomRequestParams = {
  value: QueryTotalEscrowForDenomRequest,
  fee?: StdFee,
  memo?: string
};

type sendQueryDenomTracesRequestParams = {
  value: QueryDenomTracesRequest,
  fee?: StdFee,
  memo?: string
};

type sendQueryParamsResponseParams = {
  value: QueryParamsResponse,
  fee?: StdFee,
  memo?: string
};

type sendQueryDenomHashRequestParams = {
  value: QueryDenomHashRequest,
  fee?: StdFee,
  memo?: string
};

type sendQueryDenomHashResponseParams = {
  value: QueryDenomHashResponse,
  fee?: StdFee,
  memo?: string
};

type sendMsgTransferResponseParams = {
  value: MsgTransferResponse,
  fee?: StdFee,
  memo?: string
};


type queryParamsRequestParams = {
  value: QueryParamsRequest,
};

type transferAuthorizationParams = {
  value: TransferAuthorization,
};

type msgUpdateParamsParams = {
  value: MsgUpdateParams,
};

type msgTransferParams = {
  value: MsgTransfer,
};

type queryDenomTraceResponseParams = {
  value: QueryDenomTraceResponse,
};

type queryTotalEscrowForDenomResponseParams = {
  value: QueryTotalEscrowForDenomResponse,
};

type allocationParams = {
  value: Allocation,
};

type denomTraceParams = {
  value: DenomTrace,
};

type paramsParams = {
  value: Params,
};

type queryDenomTraceRequestParams = {
  value: QueryDenomTraceRequest,
};

type queryEscrowAddressRequestParams = {
  value: QueryEscrowAddressRequest,
};

type msgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse,
};

type genesisStateParams = {
  value: GenesisState,
};

type queryDenomTracesResponseParams = {
  value: QueryDenomTracesResponse,
};

type queryEscrowAddressResponseParams = {
  value: QueryEscrowAddressResponse,
};

type queryTotalEscrowForDenomRequestParams = {
  value: QueryTotalEscrowForDenomRequest,
};

type queryDenomTracesRequestParams = {
  value: QueryDenomTracesRequest,
};

type queryParamsResponseParams = {
  value: QueryParamsResponse,
};

type queryDenomHashRequestParams = {
  value: QueryDenomHashRequest,
};

type queryDenomHashResponseParams = {
  value: QueryDenomHashResponse,
};

type msgTransferResponseParams = {
  value: MsgTransferResponse,
};


export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	const structure: {fields: Field[]} = { fields: [] }
	for (let [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryParamsRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryParamsRequest({ value: QueryParamsRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryParamsRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendTransferAuthorization({ value, fee, memo }: sendTransferAuthorizationParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendTransferAuthorization: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.transferAuthorization({ value: TransferAuthorization.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendTransferAuthorization: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateParams: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgUpdateParams({ value: MsgUpdateParams.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateParams: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgTransfer({ value, fee, memo }: sendMsgTransferParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgTransfer: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgTransfer({ value: MsgTransfer.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgTransfer: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryDenomTraceResponse({ value, fee, memo }: sendQueryDenomTraceResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryDenomTraceResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryDenomTraceResponse({ value: QueryDenomTraceResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryDenomTraceResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryTotalEscrowForDenomResponse({ value, fee, memo }: sendQueryTotalEscrowForDenomResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryTotalEscrowForDenomResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryTotalEscrowForDenomResponse({ value: QueryTotalEscrowForDenomResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryTotalEscrowForDenomResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendAllocation({ value, fee, memo }: sendAllocationParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendAllocation: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.allocation({ value: Allocation.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendAllocation: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendDenomTrace({ value, fee, memo }: sendDenomTraceParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendDenomTrace: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.denomTrace({ value: DenomTrace.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendDenomTrace: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendParams: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.params({ value: Params.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendParams: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryDenomTraceRequest({ value, fee, memo }: sendQueryDenomTraceRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryDenomTraceRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryDenomTraceRequest({ value: QueryDenomTraceRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryDenomTraceRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryEscrowAddressRequest({ value, fee, memo }: sendQueryEscrowAddressRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryEscrowAddressRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryEscrowAddressRequest({ value: QueryEscrowAddressRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryEscrowAddressRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateParamsResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgUpdateParamsResponse({ value: MsgUpdateParamsResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateParamsResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendGenesisState: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.genesisState({ value: GenesisState.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendGenesisState: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryDenomTracesResponse({ value, fee, memo }: sendQueryDenomTracesResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryDenomTracesResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryDenomTracesResponse({ value: QueryDenomTracesResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryDenomTracesResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryEscrowAddressResponse({ value, fee, memo }: sendQueryEscrowAddressResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryEscrowAddressResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryEscrowAddressResponse({ value: QueryEscrowAddressResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryEscrowAddressResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryTotalEscrowForDenomRequest({ value, fee, memo }: sendQueryTotalEscrowForDenomRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryTotalEscrowForDenomRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryTotalEscrowForDenomRequest({ value: QueryTotalEscrowForDenomRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryTotalEscrowForDenomRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryDenomTracesRequest({ value, fee, memo }: sendQueryDenomTracesRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryDenomTracesRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryDenomTracesRequest({ value: QueryDenomTracesRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryDenomTracesRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryParamsResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryParamsResponse({ value: QueryParamsResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryParamsResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryDenomHashRequest({ value, fee, memo }: sendQueryDenomHashRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryDenomHashRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryDenomHashRequest({ value: QueryDenomHashRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryDenomHashRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryDenomHashResponse({ value, fee, memo }: sendQueryDenomHashResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryDenomHashResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryDenomHashResponse({ value: QueryDenomHashResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryDenomHashResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgTransferResponse({ value, fee, memo }: sendMsgTransferResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgTransferResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgTransferResponse({ value: MsgTransferResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgTransferResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest", value: QueryParamsRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryParamsRequest: Could not create message: ' + e.message)
			}
		},
		
		transferAuthorization({ value }: transferAuthorizationParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.transfer.v1.TransferAuthorization", value: TransferAuthorization.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:TransferAuthorization: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParams", value: MsgUpdateParams.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message)
			}
		},
		
		msgTransfer({ value }: msgTransferParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.transfer.v1.MsgTransfer", value: MsgTransfer.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgTransfer: Could not create message: ' + e.message)
			}
		},
		
		queryDenomTraceResponse({ value }: queryDenomTraceResponseParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceResponse", value: QueryDenomTraceResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryDenomTraceResponse: Could not create message: ' + e.message)
			}
		},
		
		queryTotalEscrowForDenomResponse({ value }: queryTotalEscrowForDenomResponseParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.transfer.v1.QueryTotalEscrowForDenomResponse", value: QueryTotalEscrowForDenomResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryTotalEscrowForDenomResponse: Could not create message: ' + e.message)
			}
		},
		
		allocation({ value }: allocationParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.transfer.v1.Allocation", value: Allocation.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:Allocation: Could not create message: ' + e.message)
			}
		},
		
		denomTrace({ value }: denomTraceParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.transfer.v1.DenomTrace", value: DenomTrace.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:DenomTrace: Could not create message: ' + e.message)
			}
		},
		
		params({ value }: paramsParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.transfer.v1.Params", value: Params.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:Params: Could not create message: ' + e.message)
			}
		},
		
		queryDenomTraceRequest({ value }: queryDenomTraceRequestParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceRequest", value: QueryDenomTraceRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryDenomTraceRequest: Could not create message: ' + e.message)
			}
		},
		
		queryEscrowAddressRequest({ value }: queryEscrowAddressRequestParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressRequest", value: QueryEscrowAddressRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryEscrowAddressRequest: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParamsResponse", value: MsgUpdateParamsResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateParamsResponse: Could not create message: ' + e.message)
			}
		},
		
		genesisState({ value }: genesisStateParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.transfer.v1.GenesisState", value: GenesisState.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:GenesisState: Could not create message: ' + e.message)
			}
		},
		
		queryDenomTracesResponse({ value }: queryDenomTracesResponseParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesResponse", value: QueryDenomTracesResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryDenomTracesResponse: Could not create message: ' + e.message)
			}
		},
		
		queryEscrowAddressResponse({ value }: queryEscrowAddressResponseParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressResponse", value: QueryEscrowAddressResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryEscrowAddressResponse: Could not create message: ' + e.message)
			}
		},
		
		queryTotalEscrowForDenomRequest({ value }: queryTotalEscrowForDenomRequestParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.transfer.v1.QueryTotalEscrowForDenomRequest", value: QueryTotalEscrowForDenomRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryTotalEscrowForDenomRequest: Could not create message: ' + e.message)
			}
		},
		
		queryDenomTracesRequest({ value }: queryDenomTracesRequestParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesRequest", value: QueryDenomTracesRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryDenomTracesRequest: Could not create message: ' + e.message)
			}
		},
		
		queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse", value: QueryParamsResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryParamsResponse: Could not create message: ' + e.message)
			}
		},
		
		queryDenomHashRequest({ value }: queryDenomHashRequestParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashRequest", value: QueryDenomHashRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryDenomHashRequest: Could not create message: ' + e.message)
			}
		},
		
		queryDenomHashResponse({ value }: queryDenomHashResponseParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashResponse", value: QueryDenomHashResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryDenomHashResponse: Could not create message: ' + e.message)
			}
		},
		
		msgTransferResponse({ value }: msgTransferResponseParams): EncodeObject {
			try {
				return { typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse", value: MsgTransferResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgTransferResponse: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const IgntModule = (test: IgniteClient) => {
	return {
		module: {
			IbcApplicationsTransferV1: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default IgntModule;