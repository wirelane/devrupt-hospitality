import * as coreHttp from "@azure/core-http";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { ApaleoFinanceAPIContext } from "./apaleoFinanceAPIContext";
import {
  ApaleoFinanceAPIOptionalParams,
  ApaleoFinanceAPIFinanceFoliosGetOptionalParams,
  ApaleoFinanceAPIFinanceFoliosGetResponse,
  CreateFolioModel,
  ApaleoFinanceAPIFinanceFoliosPostOptionalParams,
  ApaleoFinanceAPIFinanceFoliosPostResponse,
  ApaleoFinanceAPIFinanceFoliosCountGetOptionalParams,
  ApaleoFinanceAPIFinanceFoliosCountGetResponse,
  ApaleoFinanceAPIFinanceFoliosByIdGetOptionalParams,
  ApaleoFinanceAPIFinanceFoliosByIdGetResponse,
  Operation,
  ApaleoFinanceAPIFinanceFoliosByIdPatchResponse,
  ApaleoFinanceAPIFinanceFoliosByIdDeleteResponse,
  CreateChargeModel,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdChargesPostOptionalParams,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdChargesPostResponse,
  CreateTransitoryChargeModel,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdTransitoryChargesPostOptionalParams,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdTransitoryChargesPostResponse,
  MonetaryValueModel,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdCancellationFeePostOptionalParams,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdCancellationFeePostResponse,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdNoShowFeePostOptionalParams,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdNoShowFeePostResponse,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdClosePutResponse,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdReopenPutResponse,
  MoveChargesRequest,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdMoveChargesPutResponse,
  BulkMoveRequest,
  ApaleoFinanceAPIFinanceFolioActionsBulkMovePutResponse,
  MoveAllChargesRequest,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdMoveAllChargesPutResponse,
  CreateAllowanceForChargeModel,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdChargesByChargeIdAllowancesPostOptionalParams,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdChargesByChargeIdAllowancesPostResponse,
  CreateAllowanceForFolioModel,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdAllowancesPostOptionalParams,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdAllowancesPostResponse,
  CreateAllowanceBulkModel,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdBulkAllowancesPostOptionalParams,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdBulkAllowancesPostResponse,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdPostChargesPutResponse,
  MovePaymentsRequest,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdMovePaymentsPutResponse,
  CorrectFolioRequest,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdCorrectPostOptionalParams,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdCorrectPostResponse,
  SplitChargeRequest,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdChargesByChargeIdSplitPostOptionalParams,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdChargesByChargeIdSplitPostResponse,
  SplitPaymentRequest,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdPaymentsByPaymentIdSplitPostOptionalParams,
  ApaleoFinanceAPIFinanceFolioActionsByFolioIdPaymentsByPaymentIdSplitPostResponse,
  ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsGetOptionalParams,
  ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsGetResponse,
  CreateCustomPaymentRequest,
  ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsPostOptionalParams,
  ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsPostResponse,
  ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentIdGetOptionalParams,
  ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentIdGetResponse,
  CreateTerminalPaymentRequest,
  ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByTerminalPostOptionalParams,
  ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByTerminalPostResponse,
  CreateAuthorizationPaymentRequest,
  ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByAuthorizationPostOptionalParams,
  ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByAuthorizationPostResponse,
  CreateAccountPaymentRequest,
  ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentAccountPostOptionalParams,
  ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentAccountPostResponse,
  CreatePaymentLinkRequest,
  ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByLinkPostOptionalParams,
  ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByLinkPostResponse,
  ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentIdCancelPutResponse,
  ApaleoFinanceAPIFinanceFoliosByFolioIdRefundsGetOptionalParams,
  ApaleoFinanceAPIFinanceFoliosByFolioIdRefundsGetResponse,
  CreateFolioRefundRequest,
  ApaleoFinanceAPIFinanceFoliosByFolioIdRefundsPostOptionalParams,
  ApaleoFinanceAPIFinanceFoliosByFolioIdRefundsPostResponse,
  ApaleoFinanceAPIFinanceFoliosByFolioIdRefundsByRefundIdGetResponse,
  CreatePaymentRefundRequest,
  ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPostOptionalParams,
  ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPostResponse,
  ApaleoFinanceAPIFinanceInvoicesPreviewPdfGetResponse,
  ApaleoFinanceAPIFinanceInvoicesPreviewGetOptionalParams,
  ApaleoFinanceAPIFinanceInvoicesPreviewGetResponse,
  ApaleoFinanceAPIFinanceInvoicesGetOptionalParams,
  ApaleoFinanceAPIFinanceInvoicesGetResponse,
  CreateInvoicePdfRequest,
  ApaleoFinanceAPIFinanceInvoicesPostOptionalParams,
  ApaleoFinanceAPIFinanceInvoicesPostResponse,
  ApaleoFinanceAPIFinanceInvoicesByIdPdfGetResponse,
  ApaleoFinanceAPIFinanceInvoicesByIdGetOptionalParams,
  ApaleoFinanceAPIFinanceInvoicesByIdGetResponse,
  PayInvoiceRequest,
  ApaleoFinanceAPIFinanceInvoiceActionsByIdPayPutResponse,
  ApaleoFinanceAPIFinanceInvoiceActionsByIdCancelPutResponse,
  ApaleoFinanceAPIFinanceAccountsAggregatePairsDailyPostOptionalParams,
  ApaleoFinanceAPIFinanceAccountsAggregatePairsDailyPostResponse,
  ApaleoFinanceAPIFinanceAccountsAggregateDailyPostOptionalParams,
  ApaleoFinanceAPIFinanceAccountsAggregateDailyPostResponse,
  ApaleoFinanceAPIFinanceAccountsAggregatePostOptionalParams,
  ApaleoFinanceAPIFinanceAccountsAggregatePostResponse,
  ApaleoFinanceAPIFinanceAccountsExportPostOptionalParams,
  ApaleoFinanceAPIFinanceAccountsExportPostResponse,
  ApaleoFinanceAPIFinanceAccountsExportDailyPostOptionalParams,
  ApaleoFinanceAPIFinanceAccountsExportDailyPostResponse,
  ApaleoFinanceAPIFinanceAccountsExportGrossDailyPostOptionalParams,
  ApaleoFinanceAPIFinanceAccountsExportGrossDailyPostResponse,
  ApaleoFinanceAPIFinanceAccountsSchemaGetOptionalParams,
  ApaleoFinanceAPIFinanceAccountsSchemaGetResponse,
  ApaleoFinanceAPIFinanceGlobalAccountsGetOptionalParams,
  ApaleoFinanceAPIFinanceGlobalAccountsGetResponse,
  ApaleoFinanceAPIFinanceGuestAccountsGetOptionalParams,
  ApaleoFinanceAPIFinanceGuestAccountsGetResponse,
  ApaleoFinanceAPIFinanceExternalAccountsGetOptionalParams,
  ApaleoFinanceAPIFinanceExternalAccountsGetResponse,
  ApaleoFinanceAPIFinanceAccountsByNumberGetOptionalParams,
  ApaleoFinanceAPIFinanceAccountsByNumberGetResponse,
  ApaleoFinanceAPIFinanceAccountsChildAccountsGetOptionalParams,
  ApaleoFinanceAPIFinanceAccountsChildAccountsGetResponse,
  ApaleoFinanceAPIFinanceTypesCurrenciesGetResponse,
  ApaleoFinanceAPIFinanceTypesPaymentMethodsGetResponse,
  ApaleoFinanceAPIFinanceTypesServiceTypesGetResponse,
  ApaleoFinanceAPIFinanceTypesVatGetOptionalParams,
  ApaleoFinanceAPIFinanceTypesVatGetResponse
} from "./models";

export class ApaleoFinanceAPI extends ApaleoFinanceAPIContext {
  /**
   * Initializes a new instance of the ApaleoFinanceAPI class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    $host: string,
    options?: ApaleoFinanceAPIOptionalParams
  ) {
    super(credentials, $host, options);
  }

  /**
   * Allowed actions are only returned, when the list is filtered by reservation ID.<br>You must have at
   * least one of these scopes: 'folios.read, folios.manage'.
   * @param options The options parameters.
   */
  financeFoliosGet(
    options?: ApaleoFinanceAPIFinanceFoliosGetOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceFoliosGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFoliosGetOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceFoliosGetResponse>;
  }

  /**
   * Use this call to create a new folio.<br>You must have at least one of these scopes:
   * 'reservations.create, reservations.manage, folios.manage'.
   * @param body The definition of the folio.
   * @param options The options parameters.
   */
  financeFoliosPost(
    body: CreateFolioModel,
    options?: ApaleoFinanceAPIFinanceFoliosPostOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceFoliosPostResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFoliosPostOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceFoliosPostResponse>;
  }

  /**
   * Returns number of folios matching the filter criteria.<br>You must have at least one of these
   * scopes: 'folios.read, folios.manage'.
   * @param options The options parameters.
   */
  financeFoliosCountGet(
    options?: ApaleoFinanceAPIFinanceFoliosCountGetOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceFoliosCountGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFoliosCountGetOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceFoliosCountGetResponse>;
  }

  /**
   * Get a folio by ID.<br>You must have at least one of these scopes: 'folios.read, folios.manage'.
   * @param id The ID of the folio.
   * @param options The options parameters.
   */
  financeFoliosByIdGet(
    id: string,
    options?: ApaleoFinanceAPIFinanceFoliosByIdGetOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceFoliosByIdGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      id,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFoliosByIdGetOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceFoliosByIdGetResponse>;
  }

  /**
   * Here is the list of operations that are currently allowed:
   * - Replace debitor (for guest folios only)
   * - Add a company (not for house folios)
   * - Replace/remove a company (not for house folios)<br>You must have this scope: 'folios.manage'.
   * @param id The folio ID.
   * @param body Define the list of operations to be applied to the resource. Learn more about JSON Patch
   *             here: http://jsonpatch.com/.
   *                         See the FolioDebitorModel in GET for values that can be changed.
   * @param options The options parameters.
   */
  financeFoliosByIdPatch(
    id: string,
    body: Operation[],
    options?: coreHttp.OperationOptions
  ): Promise<ApaleoFinanceAPIFinanceFoliosByIdPatchResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      id,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFoliosByIdPatchOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceFoliosByIdPatchResponse>;
  }

  /**
   * Check if the folio exists.<br>You must have at least one of these scopes: 'folios.read,
   * folios.manage'.
   * @param id
   * @param options The options parameters.
   */
  financeFoliosByIdHead(
    id: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      id,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFoliosByIdHeadOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Deletes a folio. This cannot be undone.
   * You can delete a folio only if it's not a main folio,
   * and the folio is empty (it has no charges, allowance, payments or pending payments).
   * <br />
   * Requires 'allowed action': Delete.<br>You must have this scope: 'folios.manage'.
   * @param id The folio ID.
   * @param options The options parameters.
   */
  financeFoliosByIdDelete(
    id: string,
    options?: coreHttp.OperationOptions
  ): Promise<ApaleoFinanceAPIFinanceFoliosByIdDeleteResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      id,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFoliosByIdDeleteOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceFoliosByIdDeleteResponse>;
  }

  /**
   * Adds a charge for any good or service, and directly posts it. Can be used to charge items that are
   * not part of the reservation,
   * but should appear on the invoice.
   * <br />
   * Requires 'allowed action': AddCharge.<br>You must have at least one of these scopes:
   * 'charges.create, folios.manage'.
   * @param folioId The folio ID
   * @param body The charge to be added
   * @param options The options parameters.
   */
  financeFolioActionsByFolioIdChargesPost(
    folioId: string,
    body: CreateChargeModel,
    options?: ApaleoFinanceAPIFinanceFolioActionsByFolioIdChargesPostOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceFolioActionsByFolioIdChargesPostResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFolioActionsByFolioIdChargesPostOperationSpec
    ) as Promise<
      ApaleoFinanceAPIFinanceFolioActionsByFolioIdChargesPostResponse
    >;
  }

  /**
   * Adds a transitory item for any good or service, and directly posts it. To be used for sales that are
   * not revenue of the property,
   * but should appear on te guest's invoice.
   * <br />
   * Requires 'allowed action': AddCharge.<br>You must have at least one of these scopes:
   * 'charges.create, folios.manage'.
   * @param folioId The folio ID
   * @param body The transitory charge to be added
   * @param options The options parameters.
   */
  financeFolioActionsByFolioIdTransitoryChargesPost(
    folioId: string,
    body: CreateTransitoryChargeModel,
    options?: ApaleoFinanceAPIFinanceFolioActionsByFolioIdTransitoryChargesPostOptionalParams
  ): Promise<
    ApaleoFinanceAPIFinanceFolioActionsByFolioIdTransitoryChargesPostResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFolioActionsByFolioIdTransitoryChargesPostOperationSpec
    ) as Promise<
      ApaleoFinanceAPIFinanceFolioActionsByFolioIdTransitoryChargesPostResponse
    >;
  }

  /**
   * Adds a cancellation fee, and directly posts it. Cancellation fees can only be posted on guest
   * folios.
   * <br />
   * Requires 'allowed action': AddCancellationFee.<br>You must have at least one of these scopes:
   * 'charges.create, folios.manage'.
   * @param folioId The folio ID
   * @param body The cancellation fee to be added
   * @param options The options parameters.
   */
  financeFolioActionsByFolioIdCancellationFeePost(
    folioId: string,
    body: MonetaryValueModel,
    options?: ApaleoFinanceAPIFinanceFolioActionsByFolioIdCancellationFeePostOptionalParams
  ): Promise<
    ApaleoFinanceAPIFinanceFolioActionsByFolioIdCancellationFeePostResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFolioActionsByFolioIdCancellationFeePostOperationSpec
    ) as Promise<
      ApaleoFinanceAPIFinanceFolioActionsByFolioIdCancellationFeePostResponse
    >;
  }

  /**
   * Adds a no-show fee, and directly posts it. No-show fees can only be posted on guest folios.
   * <br />
   * Requires 'allowed action': AddNoShowFee.<br>You must have at least one of these scopes:
   * 'charges.create, folios.manage'.
   * @param folioId The folio ID
   * @param body The no-show fee to be added
   * @param options The options parameters.
   */
  financeFolioActionsByFolioIdNoShowFeePost(
    folioId: string,
    body: MonetaryValueModel,
    options?: ApaleoFinanceAPIFinanceFolioActionsByFolioIdNoShowFeePostOptionalParams
  ): Promise<
    ApaleoFinanceAPIFinanceFolioActionsByFolioIdNoShowFeePostResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFolioActionsByFolioIdNoShowFeePostOperationSpec
    ) as Promise<
      ApaleoFinanceAPIFinanceFolioActionsByFolioIdNoShowFeePostResponse
    >;
  }

  /**
   * Mark a folio as closed to prevent adding charges and payments. This action cannot be undone,
   * and is only possible if the balance is 0.
   * <br />
   * Requires 'allowed action': Close.<br>You must have this scope: 'folios.manage'.
   * @param folioId The folio ID.
   * @param options The options parameters.
   */
  financeFolioActionsByFolioIdClosePut(
    folioId: string,
    options?: coreHttp.OperationOptions
  ): Promise<ApaleoFinanceAPIFinanceFolioActionsByFolioIdClosePutResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFolioActionsByFolioIdClosePutOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceFolioActionsByFolioIdClosePutResponse>;
  }

  /**
   * Reopens a closed folio.
   * You can only reopen a folio if no invoice has been created for the folio.
   * Otherwise, use `invoice-actions/{invoiceId}/cancel` endpoint to cancel an invoice and reopen the
   * folio.
   * <br />
   * Requires 'allowed action': Reopen.<br>You must have this scope: 'folios.manage'.
   * @param folioId The folio ID.
   * @param options The options parameters.
   */
  financeFolioActionsByFolioIdReopenPut(
    folioId: string,
    options?: coreHttp.OperationOptions
  ): Promise<ApaleoFinanceAPIFinanceFolioActionsByFolioIdReopenPutResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFolioActionsByFolioIdReopenPutOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceFolioActionsByFolioIdReopenPutResponse>;
  }

  /**
   * If one of the folios is closed, this action cannot be performed.<br /><br />
   * If any of the specified charges does not exist, this action cannot be performed.<br /><br />
   * Moving negative charges to a house folio is not supported. Create additional folios instead, and
   * move the charges there.<br>You must have at least one of these scopes: 'charges.move,
   * folios.manage'.
   * @param folioId The ID of the source folio from where the charges should be moved away.
   * @param body See class.
   * @param options The options parameters.
   */
  financeFolioActionsByFolioIdMoveChargesPut(
    folioId: string,
    body: MoveChargesRequest,
    options?: coreHttp.OperationOptions
  ): Promise<
    ApaleoFinanceAPIFinanceFolioActionsByFolioIdMoveChargesPutResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFolioActionsByFolioIdMoveChargesPutOperationSpec
    ) as Promise<
      ApaleoFinanceAPIFinanceFolioActionsByFolioIdMoveChargesPutResponse
    >;
  }

  /**
   * If one of the folios is closed, this action cannot be performed.<br /><br />
   * If any of the specified charges does not exist, this action cannot be performed.<br /><br />
   * Moving negative charges to a house folio is not supported. Create additional folios instead, and
   * move the charges there.<br>You must have this scope: 'folios.manage'.
   * @param body See class.
   * @param options The options parameters.
   */
  financeFolioActionsBulkMovePut(
    body: BulkMoveRequest,
    options?: coreHttp.OperationOptions
  ): Promise<ApaleoFinanceAPIFinanceFolioActionsBulkMovePutResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFolioActionsBulkMovePutOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceFolioActionsBulkMovePutResponse>;
  }

  /**
   * If one of the folios is closed, this action cannot be performed.<br /><br />
   * Only charges that can be moved will be moved.<br /><br /><br>You must have at least one of these
   * scopes: 'charges.move, folios.manage'.
   * @param folioId The ID of the source folio from where the charges should be moved away.
   * @param body See class.
   * @param options The options parameters.
   */
  financeFolioActionsByFolioIdMoveAllChargesPut(
    folioId: string,
    body: MoveAllChargesRequest,
    options?: coreHttp.OperationOptions
  ): Promise<
    ApaleoFinanceAPIFinanceFolioActionsByFolioIdMoveAllChargesPutResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFolioActionsByFolioIdMoveAllChargesPutOperationSpec
    ) as Promise<
      ApaleoFinanceAPIFinanceFolioActionsByFolioIdMoveAllChargesPutResponse
    >;
  }

  /**
   * Allowance value posted must not exceed source charge minus allowances posted for this charge<br>You
   * must have at least one of these scopes: 'allowances.post, folios.manage'.
   * @param folioId The ID of the folio.
   * @param chargeId The ID of the charge allowance posted for
   * @param body Allowance data
   * @param options The options parameters.
   */
  financeFolioActionsByFolioIdChargesByChargeIdAllowancesPost(
    folioId: string,
    chargeId: string,
    body: CreateAllowanceForChargeModel,
    options?: ApaleoFinanceAPIFinanceFolioActionsByFolioIdChargesByChargeIdAllowancesPostOptionalParams
  ): Promise<
    ApaleoFinanceAPIFinanceFolioActionsByFolioIdChargesByChargeIdAllowancesPostResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      chargeId,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFolioActionsByFolioIdChargesByChargeIdAllowancesPostOperationSpec
    ) as Promise<
      ApaleoFinanceAPIFinanceFolioActionsByFolioIdChargesByChargeIdAllowancesPostResponse
    >;
  }

  /**
   * Allowance value posted must not exceed sum of charges minus existing allowances<br>You must have at
   * least one of these scopes: 'allowances.post, folios.manage'.
   * @param folioId The ID of the folio.
   * @param body Allowance amount and post reason
   * @param options The options parameters.
   */
  financeFolioActionsByFolioIdAllowancesPost(
    folioId: string,
    body: CreateAllowanceForFolioModel,
    options?: ApaleoFinanceAPIFinanceFolioActionsByFolioIdAllowancesPostOptionalParams
  ): Promise<
    ApaleoFinanceAPIFinanceFolioActionsByFolioIdAllowancesPostResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFolioActionsByFolioIdAllowancesPostOperationSpec
    ) as Promise<
      ApaleoFinanceAPIFinanceFolioActionsByFolioIdAllowancesPostResponse
    >;
  }

  /**
   * Allowance value posted must not exceed sum of charges minus existing allowances<br>You must have at
   * least one of these scopes: 'allowances.post, folios.manage'.
   * @param folioId The ID of the folio.
   * @param body Allowance amount and post reason
   * @param options The options parameters.
   */
  financeFolioActionsByFolioIdBulkAllowancesPost(
    folioId: string,
    body: CreateAllowanceBulkModel,
    options?: ApaleoFinanceAPIFinanceFolioActionsByFolioIdBulkAllowancesPostOptionalParams
  ): Promise<
    ApaleoFinanceAPIFinanceFolioActionsByFolioIdBulkAllowancesPostResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFolioActionsByFolioIdBulkAllowancesPostOperationSpec
    ) as Promise<
      ApaleoFinanceAPIFinanceFolioActionsByFolioIdBulkAllowancesPostResponse
    >;
  }

  /**
   * Use this call for cases when the folio should be closed early. For example, when a guest wants to
   * get the invoice right after the check-in
   * As posting charges before the service is delivered is potentially risky, this operation will fail if
   * there are any unposted charges
   * further in the future than 7 days.
   * Posting open charges is only possible for fully prepaid folios.
   * <br />
   * Requires 'allowed action': PostOpenCharges.<br>You must have this scope: 'folios.manage'.
   * @param folioId The ID of the folio.
   * @param options The options parameters.
   */
  financeFolioActionsByFolioIdPostChargesPut(
    folioId: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    ApaleoFinanceAPIFinanceFolioActionsByFolioIdPostChargesPutResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFolioActionsByFolioIdPostChargesPutOperationSpec
    ) as Promise<
      ApaleoFinanceAPIFinanceFolioActionsByFolioIdPostChargesPutResponse
    >;
  }

  /**
   * Move payments from one folio of a reservation to another - moving between different reservations is
   * not supported,
   * and will lead to an error. If one of the folios is closed, this action cannot be performed.<br />
   * The PSP reference, if present, will be removed when moving and only be persisted on the original
   * payment.<br>You must have at least one of these scopes: 'charges.move, folios.manage'.
   * @param folioId The ID of the source folio from where the payments should be moved away.
   * @param body See class.
   * @param options The options parameters.
   */
  financeFolioActionsByFolioIdMovePaymentsPut(
    folioId: string,
    body: MovePaymentsRequest,
    options?: coreHttp.OperationOptions
  ): Promise<
    ApaleoFinanceAPIFinanceFolioActionsByFolioIdMovePaymentsPutResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFolioActionsByFolioIdMovePaymentsPutOperationSpec
    ) as Promise<
      ApaleoFinanceAPIFinanceFolioActionsByFolioIdMovePaymentsPutResponse
    >;
  }

  /**
   * Allowance value posted must not exceed sum of charges minus existing allowances<br>You must have
   * this scope: 'folios.manage'.
   * @param folioId The ID of the folio.
   * @param body Array of chargeIds to move and reason
   * @param options The options parameters.
   */
  financeFolioActionsByFolioIdCorrectPost(
    folioId: string,
    body: CorrectFolioRequest,
    options?: ApaleoFinanceAPIFinanceFolioActionsByFolioIdCorrectPostOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceFolioActionsByFolioIdCorrectPostResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFolioActionsByFolioIdCorrectPostOperationSpec
    ) as Promise<
      ApaleoFinanceAPIFinanceFolioActionsByFolioIdCorrectPostResponse
    >;
  }

  /**
   * <br>You must have at least one of these scopes: 'allowances.post, charges.create, folios.manage'.
   * @param folioId The ID of the folio
   * @param chargeId The ID of the charge
   * @param body See class
   * @param options The options parameters.
   */
  financeFolioActionsByFolioIdChargesByChargeIdSplitPost(
    folioId: string,
    chargeId: string,
    body: SplitChargeRequest,
    options?: ApaleoFinanceAPIFinanceFolioActionsByFolioIdChargesByChargeIdSplitPostOptionalParams
  ): Promise<
    ApaleoFinanceAPIFinanceFolioActionsByFolioIdChargesByChargeIdSplitPostResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      chargeId,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFolioActionsByFolioIdChargesByChargeIdSplitPostOperationSpec
    ) as Promise<
      ApaleoFinanceAPIFinanceFolioActionsByFolioIdChargesByChargeIdSplitPostResponse
    >;
  }

  /**
   * <br>You must have at least one of these scopes: 'payments.create, refunds.create, folios.manage'.
   * @param folioId The ID of the folio
   * @param paymentId The ID of the payment
   * @param body See class
   * @param options The options parameters.
   */
  financeFolioActionsByFolioIdPaymentsByPaymentIdSplitPost(
    folioId: string,
    paymentId: string,
    body: SplitPaymentRequest,
    options?: ApaleoFinanceAPIFinanceFolioActionsByFolioIdPaymentsByPaymentIdSplitPostOptionalParams
  ): Promise<
    ApaleoFinanceAPIFinanceFolioActionsByFolioIdPaymentsByPaymentIdSplitPostResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      paymentId,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFolioActionsByFolioIdPaymentsByPaymentIdSplitPostOperationSpec
    ) as Promise<
      ApaleoFinanceAPIFinanceFolioActionsByFolioIdPaymentsByPaymentIdSplitPostResponse
    >;
  }

  /**
   * Returns a list of all payments for this folio ordered by creation date, newest first<br>You must
   * have at least one of these scopes: 'folios.read, folios.manage'.
   * @param folioId
   * @param options The options parameters.
   */
  financeFoliosByFolioIdPaymentsGet(
    folioId: string,
    options?: ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsGetOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFoliosByFolioIdPaymentsGetOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsGetResponse>;
  }

  /**
   * A custom payment will not involve any automatic processing. This is best to be used for cash, cheque
   * or voucher payments or payments that have
   * been processed by an external system and it should just be recorded in apaleo for accounting
   * purposes.<br>You must have this scope: 'folios.manage'.
   * @param folioId
   * @param body The definition of the payment.
   * @param options The options parameters.
   */
  financeFoliosByFolioIdPaymentsPost(
    folioId: string,
    body: CreateCustomPaymentRequest,
    options?: ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsPostOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsPostResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFoliosByFolioIdPaymentsPostOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsPostResponse>;
  }

  /**
   * Get a payment by its ID<br>You must have at least one of these scopes: 'folios.read, folios.manage'.
   * @param folioId
   * @param paymentId The payment ID.
   * @param options The options parameters.
   */
  financeFoliosByFolioIdPaymentsByPaymentIdGet(
    folioId: string,
    paymentId: string,
    options?: ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentIdGetOptionalParams
  ): Promise<
    ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentIdGetResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      paymentId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFoliosByFolioIdPaymentsByPaymentIdGetOperationSpec
    ) as Promise<
      ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentIdGetResponse
    >;
  }

  /**
   * Trigger a terminal payment for the folio. The payment will be processed asynchronously. Use the
   * location header to poll for the status of the payment.
   * As long as a payment is pending it reduces the amount of allowed payments for the folio. The payment
   * times out after 60 minutes automatically<br>You must have this scope: 'folios.manage'.
   * @param folioId
   * @param body The definition of the payment.
   * @param options The options parameters.
   */
  financeFoliosByFolioIdPaymentsByTerminalPost(
    folioId: string,
    body: CreateTerminalPaymentRequest,
    options?: ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByTerminalPostOptionalParams
  ): Promise<
    ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByTerminalPostResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFoliosByFolioIdPaymentsByTerminalPostOperationSpec
    ) as Promise<
      ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByTerminalPostResponse
    >;
  }

  /**
   * Captures a specific amount from a pre-authorization and posts it to the folio. For the
   * pre-authorization please ensure to set the respective metadata in the original payment
   * transaction. The flow type has to be set to <i>CaptureOnly</i>. For more information please refer to
   * the documentation of <a href="https://apaleo.dev/guides/business-cases/ibe/getting-the-money"
   * target="_blank">how to do a pre-authorization on a booking engine</a>.
   * The payment will be processed asynchronously. Use the location header to poll for the status of the
   * payment. As long as a payment is pending it reduces the amount of allowed
   * payments for the folio. The payment times out after 60 minutes automatically<br>You must have this
   * scope: 'folios.manage'.
   * @param folioId
   * @param body The definition of the payment.
   * @param options The options parameters.
   */
  financeFoliosByFolioIdPaymentsByAuthorizationPost(
    folioId: string,
    body: CreateAuthorizationPaymentRequest,
    options?: ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByAuthorizationPostOptionalParams
  ): Promise<
    ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByAuthorizationPostResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFoliosByFolioIdPaymentsByAuthorizationPostOperationSpec
    ) as Promise<
      ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByAuthorizationPostResponse
    >;
  }

  /**
   * Trigger a payment for the folio using the payment account stored on the reservation. The payment
   * will be processed asynchronously. Use the location header to poll
   * for the status of the payment. As long as a payment is pending it reduces the amount of allowed
   * payments for the folio. The payment times out after 60 minutes
   * automatically<br>You must have this scope: 'folios.manage'.
   * @param folioId
   * @param body The definition of the payment.
   * @param options The options parameters.
   */
  financeFoliosByFolioIdPaymentsByPaymentAccountPost(
    folioId: string,
    body: CreateAccountPaymentRequest,
    options?: ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentAccountPostOptionalParams
  ): Promise<
    ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentAccountPostResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFoliosByFolioIdPaymentsByPaymentAccountPostOperationSpec
    ) as Promise<
      ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentAccountPostResponse
    >;
  }

  /**
   * Creates a link to a payment form where guests can pay. To enable open invoice payment methods you
   * need to provide at
   * least the paid charges with the request. For some open invoice payment methods you also need to
   * ensure that the full
   * billing address of the folio is set, before you create the payment link. The payment will be
   * processed asynchronously.
   * Use the location header to poll for the status of the payment. As long as a payment is pending it
   * reduces the amount
   * of allowed payments for the folio.<br>You must have this scope: 'folios.manage'.
   * @param folioId
   * @param body The definition of the payment link.
   * @param options The options parameters.
   */
  financeFoliosByFolioIdPaymentsByLinkPost(
    folioId: string,
    body: CreatePaymentLinkRequest,
    options?: ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByLinkPostOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByLinkPostResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFoliosByFolioIdPaymentsByLinkPostOperationSpec
    ) as Promise<
      ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByLinkPostResponse
    >;
  }

  /**
   * Sets a payment to cancelled and triggers the cancellation.<br>You must have this scope:
   * 'folios.manage'.
   * @param folioId
   * @param paymentId The id of the payment.
   * @param options The options parameters.
   */
  financeFoliosByFolioIdPaymentsByPaymentIdCancelPut(
    folioId: string,
    paymentId: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentIdCancelPutResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      paymentId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFoliosByFolioIdPaymentsByPaymentIdCancelPutOperationSpec
    ) as Promise<
      ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentIdCancelPutResponse
    >;
  }

  /**
   * Returns a list of all refunds for this folio ordered by creation date, newest first<br>You must have
   * at least one of these scopes: 'folios.read, folios.manage'.
   * @param folioId
   * @param options The options parameters.
   */
  financeFoliosByFolioIdRefundsGet(
    folioId: string,
    options?: ApaleoFinanceAPIFinanceFoliosByFolioIdRefundsGetOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceFoliosByFolioIdRefundsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFoliosByFolioIdRefundsGetOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceFoliosByFolioIdRefundsGetResponse>;
  }

  /**
   * Trigger a generic refund for the folio. The refund will be processed asynchronously. Use the
   * location header to poll for the status of the refund.
   * As long as a refund is pending it reduces the amount of allowed refunds for the folio. The refund
   * times out after 60 minutes automatically<br>You must have this scope: 'folios.manage'.
   * @param folioId
   * @param body The definition of the refund.
   * @param options The options parameters.
   */
  financeFoliosByFolioIdRefundsPost(
    folioId: string,
    body: CreateFolioRefundRequest,
    options?: ApaleoFinanceAPIFinanceFoliosByFolioIdRefundsPostOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceFoliosByFolioIdRefundsPostResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFoliosByFolioIdRefundsPostOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceFoliosByFolioIdRefundsPostResponse>;
  }

  /**
   * Get a refund by its ID<br>You must have at least one of these scopes: 'folios.read, folios.manage'.
   * @param folioId
   * @param refundId The refund ID.
   * @param options The options parameters.
   */
  financeFoliosByFolioIdRefundsByRefundIdGet(
    folioId: string,
    refundId: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    ApaleoFinanceAPIFinanceFoliosByFolioIdRefundsByRefundIdGetResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      refundId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFoliosByFolioIdRefundsByRefundIdGetOperationSpec
    ) as Promise<
      ApaleoFinanceAPIFinanceFoliosByFolioIdRefundsByRefundIdGetResponse
    >;
  }

  /**
   * Trigger a refund for a specific payment on this folio. The refund will be processed asynchronously.
   * Use the location header to poll for
   * the status of the refund. As long as a refund is pending the allowed refund amount for this payment
   * will be reduced by the amount. The refund
   * times out after 10 minutes automatically<br>You must have this scope: 'folios.manage'.
   * @param folioId
   * @param paymentId The payment Id.
   * @param body The definition of the refund.
   * @param options The options parameters.
   */
  financeFoliosByFolioIdPaymentsByPaymentIdRefundsPost(
    folioId: string,
    paymentId: string,
    body: CreatePaymentRefundRequest,
    options?: ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPostOptionalParams
  ): Promise<
    ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPostResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      paymentId,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeFoliosByFolioIdPaymentsByPaymentIdRefundsPostOperationSpec
    ) as Promise<
      ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPostResponse
    >;
  }

  /**
   * Gets a preview invoice PDF for one specific folio.<br>You must have this scope: 'invoices.read'.
   * @param languageCode The language in which the invoice should be produced.
   * @param folioId The ID of the folio for which the invoice should be created.
   * @param options The options parameters.
   */
  financeInvoicesPreviewPdfGet(
    languageCode: string,
    folioId: string,
    options?: coreHttp.OperationOptions
  ): Promise<ApaleoFinanceAPIFinanceInvoicesPreviewPdfGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      languageCode,
      folioId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeInvoicesPreviewPdfGetOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceInvoicesPreviewPdfGetResponse>;
  }

  /**
   * To see if the invoice creation would be successful, check the warnings.<br>You must have this scope:
   * 'invoices.read'.
   * @param folioId The ID of the folio for which the invoice should be created.
   * @param options The options parameters.
   */
  financeInvoicesPreviewGet(
    folioId: string,
    options?: ApaleoFinanceAPIFinanceInvoicesPreviewGetOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceInvoicesPreviewGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      folioId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeInvoicesPreviewGetOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceInvoicesPreviewGetResponse>;
  }

  /**
   * Gets the list of all invoices (the metadata only, not the files).<br>You must have this scope:
   * 'invoices.read'.
   * @param options The options parameters.
   */
  financeInvoicesGet(
    options?: ApaleoFinanceAPIFinanceInvoicesGetOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceInvoicesGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeInvoicesGetOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceInvoicesGetResponse>;
  }

  /**
   * Creates an invoice for one specific folio. The invoice can only be created once.
   * The debitor needs to have name, city, postal code and country code, as these are required for
   * invoices.
   * If the folio is not fully paid, this will check out the reservation on AR and create an invoice with
   * outstanding payments.<br>You must have at least one of these scopes: 'invoices.create,
   * invoices.manage'.
   * @param body The folio ID to create the invoice for.
   * @param options The options parameters.
   */
  financeInvoicesPost(
    body: CreateInvoicePdfRequest,
    options?: ApaleoFinanceAPIFinanceInvoicesPostOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceInvoicesPostResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeInvoicesPostOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceInvoicesPostResponse>;
  }

  /**
   * Gets an invoice PDF file by its ID. Only works for invoices that have already been created using
   * POST /invoices.<br>You must have this scope: 'invoices.read'.
   * @param id The invoice ID.
   * @param options The options parameters.
   */
  financeInvoicesByIdPdfGet(
    id: string,
    options?: coreHttp.OperationOptions
  ): Promise<ApaleoFinanceAPIFinanceInvoicesByIdPdfGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      id,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeInvoicesByIdPdfGetOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceInvoicesByIdPdfGetResponse>;
  }

  /**
   * Gets invoice data by its ID. Only works for invoices that have already been created using POST
   * /invoices.<br>You must have this scope: 'invoices.read'.
   * @param id The invoice ID.
   * @param options The options parameters.
   */
  financeInvoicesByIdGet(
    id: string,
    options?: ApaleoFinanceAPIFinanceInvoicesByIdGetOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceInvoicesByIdGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      id,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeInvoicesByIdGetOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceInvoicesByIdGetResponse>;
  }

  /**
   * Settles the invoice, if the invoice has an amount to be paid (total != 0).<br>You must have this
   * scope: 'invoices.manage'.
   * @param id The invoice ID
   * @param body see class
   * @param options The options parameters.
   */
  financeInvoiceActionsByIdPayPut(
    id: string,
    body: PayInvoiceRequest,
    options?: coreHttp.OperationOptions
  ): Promise<ApaleoFinanceAPIFinanceInvoiceActionsByIdPayPutResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      id,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeInvoiceActionsByIdPayPutOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceInvoiceActionsByIdPayPutResponse>;
  }

  /**
   * For regular invoices and AR invoices that haven't been paid yet, creates a new cancellation invoice
   * and opens the folio again.
   * For advance invoices, creates a new cancellation invoice.<br>You must have this scope:
   * 'invoices.manage'.
   * @param id The invoice ID
   * @param options The options parameters.
   */
  financeInvoiceActionsByIdCancelPut(
    id: string,
    options?: coreHttp.OperationOptions
  ): Promise<ApaleoFinanceAPIFinanceInvoiceActionsByIdCancelPutResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      id,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeInvoiceActionsByIdCancelPutOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceInvoiceActionsByIdCancelPutResponse>;
  }

  /**
   * Returns total amount credited from one account to another<br>You must have at least one of these
   * scopes: 'subledger.read, accounting.read'.
   * @param propertyId Specifies the property transactions will be aggregated for.
   * @param to The exclusive end date of the interval
   * @param fromParam The inclusive start date of the interval
   * @param options The options parameters.
   */
  financeAccountsAggregatePairsDailyPost(
    propertyId: string,
    to: Date,
    fromParam: Date,
    options?: ApaleoFinanceAPIFinanceAccountsAggregatePairsDailyPostOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceAccountsAggregatePairsDailyPostResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      propertyId,
      to,
      fromParam,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeAccountsAggregatePairsDailyPostOperationSpec
    ) as Promise<
      ApaleoFinanceAPIFinanceAccountsAggregatePairsDailyPostResponse
    >;
  }

  /**
   * Returns credited and debited amounts aggregated by transactions' date (business day) for all
   * accounts and a given period.
   * Stores an entry in the export audit log.<br>You must have at least one of these scopes:
   * 'subledger.read, accounting.read'.
   * @param propertyId Specifies the property transactions will be aggregated for.
   * @param to The exclusive end date of the interval
   * @param fromParam The inclusive start date of the interval
   * @param options The options parameters.
   */
  financeAccountsAggregateDailyPost(
    propertyId: string,
    to: Date,
    fromParam: Date,
    options?: ApaleoFinanceAPIFinanceAccountsAggregateDailyPostOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceAccountsAggregateDailyPostResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      propertyId,
      to,
      fromParam,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeAccountsAggregateDailyPostOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceAccountsAggregateDailyPostResponse>;
  }

  /**
   * Returns credited and debited amounts aggregated by transactions' timestamp for all accounts and a
   * given period.
   * Stores an entry in the export audit log.<br>You must have at least one of these scopes:
   * 'subledger.read, accounting.read'.
   * @param propertyId Specifies the property for which transactions will be exported
   * @param to The exclusive end time of the posting date.
   *           Either posting date or business date interval should be specified.<br />A date and time (without
   *           fractional second part) in UTC or with UTC offset as defined in <a
   *           href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   * @param fromParam The inclusive start time of the posting date.
   *                  Either posting date or business date interval should be specified.<br />A date and time (without
   *                  fractional second part) in UTC or with UTC offset as defined in <a
   *                  href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   * @param options The options parameters.
   */
  financeAccountsAggregatePost(
    propertyId: string,
    to: Date,
    fromParam: Date,
    options?: ApaleoFinanceAPIFinanceAccountsAggregatePostOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceAccountsAggregatePostResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      propertyId,
      to,
      fromParam,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeAccountsAggregatePostOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceAccountsAggregatePostResponse>;
  }

  /**
   * Returns the raw transaction data for a given property and time period.
   * Stores an entry in the export audit log.<br>You must have at least one of these scopes:
   * 'transactions.export, accounting.read'.
   * @param propertyId Specifies the property for which transactions will be exported
   * @param to The exclusive end time of the posting date.
   *           Either posting date or business date interval should be specified.<br />A date and time (without
   *           fractional second part) in UTC or with UTC offset as defined in <a
   *           href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   * @param fromParam The inclusive start time of the posting date.
   *                  Either posting date or business date interval should be specified.<br />A date and time (without
   *                  fractional second part) in UTC or with UTC offset as defined in <a
   *                  href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   * @param options The options parameters.
   */
  financeAccountsExportPost(
    propertyId: string,
    to: Date,
    fromParam: Date,
    options?: ApaleoFinanceAPIFinanceAccountsExportPostOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceAccountsExportPostResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      propertyId,
      to,
      fromParam,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeAccountsExportPostOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceAccountsExportPostResponse>;
  }

  /**
   * Returns the raw transaction data for a given property and time period.
   * Stores an entry in the export audit log.<br>You must have at least one of these scopes:
   * 'transactions.export, accounting.read'.
   * @param propertyId Specifies the property transactions will be aggregated for.
   * @param to The exclusive end date of the interval
   * @param fromParam The inclusive start date of the interval
   * @param options The options parameters.
   */
  financeAccountsExportDailyPost(
    propertyId: string,
    to: Date,
    fromParam: Date,
    options?: ApaleoFinanceAPIFinanceAccountsExportDailyPostOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceAccountsExportDailyPostResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      propertyId,
      to,
      fromParam,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeAccountsExportDailyPostOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceAccountsExportDailyPostResponse>;
  }

  /**
   * Returns the raw transaction data for a given property and time period.
   * Stores an entry in the export audit log.<br>You must have at least one of these scopes:
   * 'transactions.export, accounting.read'.
   * @param propertyId Specifies the property transactions will be aggregated for.
   * @param to The exclusive end date of the interval
   * @param fromParam The inclusive start date of the interval
   * @param options The options parameters.
   */
  financeAccountsExportGrossDailyPost(
    propertyId: string,
    to: Date,
    fromParam: Date,
    options?: ApaleoFinanceAPIFinanceAccountsExportGrossDailyPostOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceAccountsExportGrossDailyPostResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      propertyId,
      to,
      fromParam,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeAccountsExportGrossDailyPostOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceAccountsExportGrossDailyPostResponse>;
  }

  /**
   * Returns the schema of subledger, split into global and guest ledger.<br>You must have at least one
   * of these scopes: 'subledger.read, accounting.read'.
   * @param propertyId Filter account list by property ID
   * @param options The options parameters.
   */
  financeAccountsSchemaGet(
    propertyId: string,
    options?: ApaleoFinanceAPIFinanceAccountsSchemaGetOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceAccountsSchemaGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      propertyId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeAccountsSchemaGetOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceAccountsSchemaGetResponse>;
  }

  /**
   * Returns a list of accounts in one property, having the same global account as parent.<br>You must
   * have at least one of these scopes: 'subledger.read, accounting.read'.
   * @param propertyId Filter account list by property ID
   * @param parent Filter account list by the parent account's number.
   * @param options The options parameters.
   */
  financeGlobalAccountsGet(
    propertyId: string,
    parent: string,
    options?: ApaleoFinanceAPIFinanceGlobalAccountsGetOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceGlobalAccountsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      propertyId,
      parent,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeGlobalAccountsGetOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceGlobalAccountsGetResponse>;
  }

  /**
   * Returns a list of accounts in one property for a reservation.<br>You must have at least one of these
   * scopes: 'subledger.read, accounting.read'.
   * @param propertyId Filter account list by property id
   * @param reservationId Filter account list by reservation id
   * @param options The options parameters.
   */
  financeGuestAccountsGet(
    propertyId: string,
    reservationId: string,
    options?: ApaleoFinanceAPIFinanceGuestAccountsGetOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceGuestAccountsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      propertyId,
      reservationId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeGuestAccountsGetOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceGuestAccountsGetResponse>;
  }

  /**
   * Returns a list of accounts in one property for a folio.<br>You must have at least one of these
   * scopes: 'subledger.read, accounting.read'.
   * @param propertyId Filter account list by property id
   * @param folioId Filter account list by folio id
   * @param options The options parameters.
   */
  financeExternalAccountsGet(
    propertyId: string,
    folioId: string,
    options?: ApaleoFinanceAPIFinanceExternalAccountsGetOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceExternalAccountsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      propertyId,
      folioId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeExternalAccountsGetOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceExternalAccountsGetResponse>;
  }

  /**
   * Returns one account, as specified by its number and the property.<br>You must have at least one of
   * these scopes: 'subledger.read, accounting.read'.
   * @param propertyId Specifies the property the account is in.
   * @param numberParam The account number
   * @param options The options parameters.
   */
  financeAccountsByNumberGet(
    propertyId: string,
    numberParam: string,
    options?: ApaleoFinanceAPIFinanceAccountsByNumberGetOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceAccountsByNumberGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      propertyId,
      numberParam,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeAccountsByNumberGetOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceAccountsByNumberGetResponse>;
  }

  /**
   * <br>You must have at least one of these scopes: 'subledger.read, accounting.read'.
   * @param propertyId Filter account list by property id
   * @param parent Filter account list by the parent account's number.
   * @param options The options parameters.
   */
  financeAccountsChildAccountsGet(
    propertyId: string,
    parent: string,
    options?: ApaleoFinanceAPIFinanceAccountsChildAccountsGetOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceAccountsChildAccountsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      propertyId,
      parent,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeAccountsChildAccountsGetOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceAccountsChildAccountsGetResponse>;
  }

  /**
   * Returns a list of all currencies.
   * @param options The options parameters.
   */
  financeTypesCurrenciesGet(
    options?: coreHttp.OperationOptions
  ): Promise<ApaleoFinanceAPIFinanceTypesCurrenciesGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeTypesCurrenciesGetOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceTypesCurrenciesGetResponse>;
  }

  /**
   * Returns a list of all supported payment methods.
   * @param options The options parameters.
   */
  financeTypesPaymentMethodsGet(
    options?: coreHttp.OperationOptions
  ): Promise<ApaleoFinanceAPIFinanceTypesPaymentMethodsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeTypesPaymentMethodsGetOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceTypesPaymentMethodsGetResponse>;
  }

  /**
   * Returns a list of all supported service types.
   * @param options The options parameters.
   */
  financeTypesServiceTypesGet(
    options?: coreHttp.OperationOptions
  ): Promise<ApaleoFinanceAPIFinanceTypesServiceTypesGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeTypesServiceTypesGetOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceTypesServiceTypesGetResponse>;
  }

  /**
   * Returns a list of all VAT types and percents for a country. Supported:<br />
   * - Belgium (BE)<br />
   * - Botswana (BW)<br />
   * - Cape Verde (CV)<br />
   * - Croatia (HR)<br />
   * - Czech Republic (CZ)<br />
   * - Denmark (DK)<br />
   * - Finland (FI)<br />
   * - France (FR) - without the super-reduced 2.1% VAT<br />
   * - French Polynesia (PF)<br />
   * - Germany (DE)<br />
   * - Morocco (MA)<br />
   * - Netherlands (NL)<br />
   * - Norway (NO) - without the VAT for raw fish supplies<br />
   * - Spain (ES)<br />
   * - South Africa (ZA)<br />
   * - Sweden (SE)<br />
   * - Switzerland (CH)<br />
   * - United Kingdom (GB)
   * @param isoCountryCode The 2-letter ISO country code
   * @param options The options parameters.
   */
  financeTypesVatGet(
    isoCountryCode: string,
    options?: ApaleoFinanceAPIFinanceTypesVatGetOptionalParams
  ): Promise<ApaleoFinanceAPIFinanceTypesVatGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      isoCountryCode,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      financeTypesVatGetOperationSpec
    ) as Promise<ApaleoFinanceAPIFinanceTypesVatGetResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const financeFoliosGetOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folios",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FolioListModel
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [
    Parameters.propertyIds,
    Parameters.companyIds,
    Parameters.reservationIds,
    Parameters.bookingIds,
    Parameters.isEmpty,
    Parameters.checkedOutOnAccountsReceivable,
    Parameters.excludeClosed,
    Parameters.hasInvoices,
    Parameters.createdFrom,
    Parameters.createdTo,
    Parameters.onlyMain,
    Parameters.typeParam,
    Parameters.externalFolioCode,
    Parameters.pageNumber,
    Parameters.pageSize,
    Parameters.expand
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const financeFoliosPostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folios",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.FolioCreatedModel,
      headersMapper: Mappers.ApaleoFinanceAPIFinanceFoliosPostHeaders
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body,
  urlParameters: [Parameters.$host],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.idempotencyKey
  ],
  mediaType: "json",
  serializer
};
const financeFoliosCountGetOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folios/$count",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CountModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [
    Parameters.propertyIds,
    Parameters.companyIds,
    Parameters.reservationIds,
    Parameters.bookingIds,
    Parameters.isEmpty,
    Parameters.checkedOutOnAccountsReceivable,
    Parameters.excludeClosed,
    Parameters.hasInvoices,
    Parameters.createdFrom,
    Parameters.createdTo,
    Parameters.onlyMain,
    Parameters.typeParam,
    Parameters.externalFolioCode
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const financeFoliosByIdGetOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folios/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FolioModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [Parameters.expand1],
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const financeFoliosByIdPatchOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folios/{id}",
  httpMethod: "PATCH",
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const financeFoliosByIdHeadOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folios/{id}",
  httpMethod: "HEAD",
  responses: { 200: {}, 400: {}, 401: {}, 403: {}, 404: {}, 500: {}, 503: {} },
  urlParameters: [Parameters.$host, Parameters.id],
  serializer
};
const financeFoliosByIdDeleteOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folios/{id}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const financeFolioActionsByFolioIdChargesPostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folio-actions/{folioId}/charges",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AddedChargeModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body2,
  urlParameters: [Parameters.$host, Parameters.folioId],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.idempotencyKey
  ],
  mediaType: "json",
  serializer
};
const financeFolioActionsByFolioIdTransitoryChargesPostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folio-actions/{folioId}/transitory-charges",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CreatedSubResourceIdModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body3,
  urlParameters: [Parameters.$host, Parameters.folioId],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.idempotencyKey
  ],
  mediaType: "json",
  serializer
};
const financeFolioActionsByFolioIdCancellationFeePostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folio-actions/{folioId}/cancellation-fee",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AddedChargeModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body4,
  urlParameters: [Parameters.$host, Parameters.folioId],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.idempotencyKey
  ],
  mediaType: "json",
  serializer
};
const financeFolioActionsByFolioIdNoShowFeePostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folio-actions/{folioId}/no-show-fee",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AddedChargeModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body4,
  urlParameters: [Parameters.$host, Parameters.folioId],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.idempotencyKey
  ],
  mediaType: "json",
  serializer
};
const financeFolioActionsByFolioIdClosePutOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folio-actions/{folioId}/close",
  httpMethod: "PUT",
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  urlParameters: [Parameters.$host, Parameters.folioId],
  headerParameters: [Parameters.accept],
  serializer
};
const financeFolioActionsByFolioIdReopenPutOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folio-actions/{folioId}/reopen",
  httpMethod: "PUT",
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  urlParameters: [Parameters.$host, Parameters.folioId],
  headerParameters: [Parameters.accept],
  serializer
};
const financeFolioActionsByFolioIdMoveChargesPutOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folio-actions/{folioId}/move-charges",
  httpMethod: "PUT",
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body5,
  urlParameters: [Parameters.$host, Parameters.folioId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const financeFolioActionsBulkMovePutOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folio-actions/bulk-move",
  httpMethod: "PUT",
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body6,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const financeFolioActionsByFolioIdMoveAllChargesPutOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folio-actions/{folioId}/move-all-charges",
  httpMethod: "PUT",
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body7,
  urlParameters: [Parameters.$host, Parameters.folioId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const financeFolioActionsByFolioIdChargesByChargeIdAllowancesPostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folio-actions/{folioId}/charges/{chargeId}/allowances",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CreatedSubResourceIdModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body8,
  urlParameters: [Parameters.$host, Parameters.folioId, Parameters.chargeId],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.idempotencyKey
  ],
  mediaType: "json",
  serializer
};
const financeFolioActionsByFolioIdAllowancesPostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folio-actions/{folioId}/allowances",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CreatedSubResourceIdModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body9,
  urlParameters: [Parameters.$host, Parameters.folioId],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.idempotencyKey
  ],
  mediaType: "json",
  serializer
};
const financeFolioActionsByFolioIdBulkAllowancesPostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folio-actions/{folioId}/bulk-allowances",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BulkAllowanceCreatedModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body10,
  urlParameters: [Parameters.$host, Parameters.folioId],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.idempotencyKey
  ],
  mediaType: "json",
  serializer
};
const financeFolioActionsByFolioIdPostChargesPutOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folio-actions/{folioId}/post-charges",
  httpMethod: "PUT",
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  urlParameters: [Parameters.$host, Parameters.folioId],
  headerParameters: [Parameters.accept],
  serializer
};
const financeFolioActionsByFolioIdMovePaymentsPutOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folio-actions/{folioId}/move-payments",
  httpMethod: "PUT",
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body11,
  urlParameters: [Parameters.$host, Parameters.folioId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const financeFolioActionsByFolioIdCorrectPostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folio-actions/{folioId}/correct",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.FolioCreatedModel,
      headersMapper:
        Mappers.ApaleoFinanceAPIFinanceFolioActionsByFolioIdCorrectPostHeaders
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body12,
  urlParameters: [Parameters.$host, Parameters.folioId],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.idempotencyKey
  ],
  mediaType: "json",
  serializer
};
const financeFolioActionsByFolioIdChargesByChargeIdSplitPostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folio-actions/{folioId}/charges/{chargeId}/split",
  httpMethod: "POST",
  responses: {
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body13,
  urlParameters: [Parameters.$host, Parameters.folioId, Parameters.chargeId],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.idempotencyKey
  ],
  mediaType: "json",
  serializer
};
const financeFolioActionsByFolioIdPaymentsByPaymentIdSplitPostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folio-actions/{folioId}/payments/{paymentId}/split",
  httpMethod: "POST",
  responses: {
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body14,
  urlParameters: [Parameters.$host, Parameters.folioId, Parameters.paymentId],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.idempotencyKey
  ],
  mediaType: "json",
  serializer
};
const financeFoliosByFolioIdPaymentsGetOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folios/{folioId}/payments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PaymentListModel
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [
    Parameters.pageNumber,
    Parameters.pageSize,
    Parameters.statusCodes,
    Parameters.expand2
  ],
  urlParameters: [Parameters.$host, Parameters.folioId],
  headerParameters: [Parameters.accept],
  serializer
};
const financeFoliosByFolioIdPaymentsPostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folios/{folioId}/payments",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.PaymentCreatedModel,
      headersMapper:
        Mappers.ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsPostHeaders
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body15,
  urlParameters: [Parameters.$host, Parameters.folioId],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.idempotencyKey
  ],
  mediaType: "json",
  serializer
};
const financeFoliosByFolioIdPaymentsByPaymentIdGetOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folios/{folioId}/payments/{paymentId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FolioPaymentModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [Parameters.expand2],
  urlParameters: [Parameters.$host, Parameters.folioId, Parameters.paymentId],
  headerParameters: [Parameters.accept],
  serializer
};
const financeFoliosByFolioIdPaymentsByTerminalPostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folios/{folioId}/payments/by-terminal",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.PaymentCreatedModel,
      headersMapper:
        Mappers.ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByTerminalPostHeaders
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body16,
  urlParameters: [Parameters.$host, Parameters.folioId],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.idempotencyKey
  ],
  mediaType: "json",
  serializer
};
const financeFoliosByFolioIdPaymentsByAuthorizationPostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folios/{folioId}/payments/by-authorization",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.PaymentCreatedModel,
      headersMapper:
        Mappers.ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByAuthorizationPostHeaders
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body17,
  urlParameters: [Parameters.$host, Parameters.folioId],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.idempotencyKey
  ],
  mediaType: "json",
  serializer
};
const financeFoliosByFolioIdPaymentsByPaymentAccountPostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folios/{folioId}/payments/by-payment-account",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.PaymentCreatedModel,
      headersMapper:
        Mappers.ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentAccountPostHeaders
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body18,
  urlParameters: [Parameters.$host, Parameters.folioId],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.idempotencyKey
  ],
  mediaType: "json",
  serializer
};
const financeFoliosByFolioIdPaymentsByLinkPostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folios/{folioId}/payments/by-link",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.PaymentCreatedModel,
      headersMapper:
        Mappers.ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByLinkPostHeaders
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body19,
  urlParameters: [Parameters.$host, Parameters.folioId],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.idempotencyKey
  ],
  mediaType: "json",
  serializer
};
const financeFoliosByFolioIdPaymentsByPaymentIdCancelPutOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folios/{folioId}/payments/{paymentId}/cancel",
  httpMethod: "PUT",
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  urlParameters: [Parameters.$host, Parameters.folioId, Parameters.paymentId],
  headerParameters: [Parameters.accept],
  serializer
};
const financeFoliosByFolioIdRefundsGetOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folios/{folioId}/refunds",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RefundListModel
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [
    Parameters.pageNumber,
    Parameters.pageSize,
    Parameters.statusCodes
  ],
  urlParameters: [Parameters.$host, Parameters.folioId],
  headerParameters: [Parameters.accept],
  serializer
};
const financeFoliosByFolioIdRefundsPostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folios/{folioId}/refunds",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.RefundCreatedModel,
      headersMapper:
        Mappers.ApaleoFinanceAPIFinanceFoliosByFolioIdRefundsPostHeaders
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body20,
  urlParameters: [Parameters.$host, Parameters.folioId],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.idempotencyKey
  ],
  mediaType: "json",
  serializer
};
const financeFoliosByFolioIdRefundsByRefundIdGetOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folios/{folioId}/refunds/{refundId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RefundModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  urlParameters: [Parameters.$host, Parameters.folioId, Parameters.refundId],
  headerParameters: [Parameters.accept],
  serializer
};
const financeFoliosByFolioIdPaymentsByPaymentIdRefundsPostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/folios/{folioId}/payments/{paymentId}/refunds",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.RefundCreatedModel,
      headersMapper:
        Mappers.ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPostHeaders
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body21,
  urlParameters: [Parameters.$host, Parameters.folioId, Parameters.paymentId],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.idempotencyKey
  ],
  mediaType: "json",
  serializer
};
const financeInvoicesPreviewPdfGetOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/invoices/preview-pdf",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Stream" }, serializedName: "parsedResponse" }
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [Parameters.languageCode, Parameters.folioId1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept1],
  serializer
};
const financeInvoicesPreviewGetOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/invoices/preview",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PreviewInvoiceModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [Parameters.folioId1, Parameters.expand3],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const financeInvoicesGetOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/invoices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InvoiceListModel
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [
    Parameters.propertyIds,
    Parameters.companyIds,
    Parameters.reservationIds,
    Parameters.checkedOutOnAccountsReceivable,
    Parameters.pageNumber,
    Parameters.pageSize,
    Parameters.numberParam,
    Parameters.outstandingPaymentFilter,
    Parameters.dateFilter,
    Parameters.folioIds,
    Parameters.nameSearch,
    Parameters.paymentSettled,
    Parameters.expand4
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const financeInvoicesPostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/invoices",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.InvoiceCreatedModel,
      headersMapper: Mappers.ApaleoFinanceAPIFinanceInvoicesPostHeaders
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body22,
  urlParameters: [Parameters.$host],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.idempotencyKey
  ],
  mediaType: "json",
  serializer
};
const financeInvoicesByIdPdfGetOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/invoices/{id}/pdf",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Stream" }, serializedName: "parsedResponse" }
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept1],
  serializer
};
const financeInvoicesByIdGetOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/invoices/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InvoiceModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [Parameters.expand3],
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const financeInvoiceActionsByIdPayPutOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/invoice-actions/{id}/pay",
  httpMethod: "PUT",
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body23,
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const financeInvoiceActionsByIdCancelPutOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/invoice-actions/{id}/cancel",
  httpMethod: "PUT",
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const financeAccountsAggregatePairsDailyPostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/accounts/aggregate-pairs-daily",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AccountingTransactionPairListModel
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [
    Parameters.propertyId,
    Parameters.fromParam,
    Parameters.to,
    Parameters.reference,
    Parameters.accountNumber,
    Parameters.accountType,
    Parameters.accountingSchema,
    Parameters.languageCode1
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.idempotencyKey],
  serializer
};
const financeAccountsAggregateDailyPostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/accounts/aggregate-daily",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AggregateTransactionListModel
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [
    Parameters.propertyId,
    Parameters.fromParam,
    Parameters.to,
    Parameters.reference,
    Parameters.accountNumber,
    Parameters.accountType,
    Parameters.accountingSchema,
    Parameters.languageCode1
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.idempotencyKey],
  serializer
};
const financeAccountsAggregatePostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/accounts/aggregate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AggregateTransactionListModel
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [
    Parameters.propertyId,
    Parameters.accountNumber,
    Parameters.accountType,
    Parameters.accountingSchema,
    Parameters.languageCode1,
    Parameters.fromParam1,
    Parameters.to1
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.idempotencyKey],
  serializer
};
const financeAccountsExportPostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/accounts/export",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AccountingTransactionListModel
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [
    Parameters.propertyId,
    Parameters.accountNumber,
    Parameters.accountType,
    Parameters.accountingSchema,
    Parameters.languageCode1,
    Parameters.fromParam1,
    Parameters.to1
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.idempotencyKey],
  serializer
};
const financeAccountsExportDailyPostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/accounts/export-daily",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AccountingTransactionListModel
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [
    Parameters.propertyId,
    Parameters.fromParam,
    Parameters.to,
    Parameters.reference,
    Parameters.accountNumber,
    Parameters.accountType,
    Parameters.accountingSchema,
    Parameters.languageCode1
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.idempotencyKey],
  serializer
};
const financeAccountsExportGrossDailyPostOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/accounts/export-gross-daily",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ExportGrossTransactionListModel
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [
    Parameters.propertyId,
    Parameters.fromParam,
    Parameters.to,
    Parameters.reference,
    Parameters.accountingSchema
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.idempotencyKey],
  serializer
};
const financeAccountsSchemaGetOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/accounts/schema",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChartOfAccountsModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [
    Parameters.propertyId,
    Parameters.accountingSchema,
    Parameters.languageCode1,
    Parameters.depth,
    Parameters.includeArchived
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const financeGlobalAccountsGetOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/global-accounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FinanceAccountListModel
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [
    Parameters.pageNumber,
    Parameters.pageSize,
    Parameters.propertyId,
    Parameters.accountingSchema,
    Parameters.languageCode1,
    Parameters.includeArchived,
    Parameters.parent
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const financeGuestAccountsGetOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/guest-accounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FinanceAccountListModel
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [
    Parameters.pageNumber,
    Parameters.pageSize,
    Parameters.propertyId,
    Parameters.languageCode1,
    Parameters.reservationId,
    Parameters.parent1
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const financeExternalAccountsGetOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/external-accounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FinanceAccountListModel
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [
    Parameters.pageNumber,
    Parameters.pageSize,
    Parameters.folioId1,
    Parameters.propertyId,
    Parameters.languageCode1,
    Parameters.parent1
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const financeAccountsByNumberGetOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/accounts/{number}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FinanceAccountModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [
    Parameters.propertyId,
    Parameters.accountingSchema,
    Parameters.languageCode1,
    Parameters.includeArchived,
    Parameters.transactionLimit
  ],
  urlParameters: [Parameters.$host, Parameters.numberParam1],
  headerParameters: [Parameters.accept],
  serializer
};
const financeAccountsChildAccountsGetOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/accounts/child-accounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FinanceAccountListModel
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [
    Parameters.pageNumber,
    Parameters.pageSize,
    Parameters.propertyId,
    Parameters.accountingSchema,
    Parameters.languageCode1,
    Parameters.includeArchived,
    Parameters.parent
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const financeTypesCurrenciesGetOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/types/currencies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CurrencyListModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const financeTypesPaymentMethodsGetOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/types/payment-methods",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PaymentMethodListModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const financeTypesServiceTypesGetOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/types/service-types",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceTypeListModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const financeTypesVatGetOperationSpec: coreHttp.OperationSpec = {
  path: "/finance/v1/types/vat",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VatListModel
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [Parameters.isoCountryCode, Parameters.atDate],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
