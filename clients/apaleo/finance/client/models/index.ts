import * as coreHttp from "@azure/core-http";

export interface FolioListModel {
  /** List of folios. */
  folios: FolioItemModel[];
  /** Total count of items */
  count: number;
}

export interface FolioItemModel {
  /** The id of the folio */
  id: string;
  /** Date of creation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  created: Date;
  /** Date of update<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  updated: Date;
  /** The folio type */
  type?: FolioType;
  debitor?: FolioDebitorModel;
  /** The date when the folio has been closed */
  closingDate?: Date;
  /** Set to {true} if this is the main folio for the reservation */
  isMainFolio?: boolean;
  /** Set to {true} if the folio has no unmoved [transitory] charges, unmoved payments, and allowances. */
  isEmpty?: boolean;
  reservation?: EmbeddedReservationModel;
  company?: EmbeddedCompanyModel;
  balance: MonetaryValueModel;
  /** Set to true, if the folio has been checked out on accounts receivable */
  checkedOutOnAccountsReceivable?: boolean;
  /**
   * Depending on the state of the folio, certain warnings are shown.
   * This list includes all folio warnings.
   */
  folioWarnings?: string[];
  /**
   * Depending on the state of the folio, certain actions are allowed or not.
   * This list includes all actions you can perform on this folio.
   */
  allowedActions?: AllowedFolioAction[];
  /** All invoices that have been created for this folio. This is only set on folios of type 'guest' */
  relatedInvoices?: EmbeddedInvoiceModel[];
  /** Status of the folio */
  status: FolioStatus;
  /** The list of charges */
  charges?: ChargeModel[];
  /** The list of allowances */
  allowances?: AllowanceModel[];
  /** The list of transitory charges */
  transitoryCharges?: TransitoryChargeModel[];
}

export interface FolioDebitorModel {
  /** Title */
  title?: PersonTitle;
  /** First name */
  firstName?: string;
  /** Last name */
  name?: string;
  address?: NonStrictAddressModel;
  company?: CompanyInfoModel;
  /** Any additional information about the debitor that should be present on the invoice */
  reference?: string;
  /** Debitor's email */
  email?: string;
}

export interface NonStrictAddressModel {
  addressLine1?: string;
  addressLine2?: string;
  postalCode?: string;
  city?: string;
  regionCode?: string;
  countryCode?: string;
}

export interface CompanyInfoModel {
  /** Name of the company */
  name: string;
  /** Tax or Vat ID of the company */
  taxId?: string;
}

export interface EmbeddedReservationModel {
  /** Reservation id */
  id: string;
  /** Booking id */
  bookingId: string;
}

export interface EmbeddedCompanyModel {
  /** The company ID */
  id: string;
  /** The code of the company */
  code?: string;
  /** The name of the company */
  name?: string;
  /** Whether or not the company can check out on AR */
  canCheckOutOnAr?: boolean;
}

export interface MonetaryValueModel {
  amount: number;
  currency: string;
}

export interface EmbeddedInvoiceModel {
  /** Invoice id */
  id: string;
}

export interface ChargeModel {
  /** ID for charges. This is unique within one folio. */
  id: string;
  /** The type of the service or good */
  serviceType: ServiceType;
  /** The name, article number, or other description of this charge */
  name: string;
  /**
   * The name, article number, or other description of this charge
   * translated in different languages
   */
  translatedNames?: { [propertyName: string]: string };
  /** Status: is this already posted? */
  isPosted: boolean;
  /** The day when the line item is (or was) due to be charged. */
  serviceDate: Date;
  /** Date of creation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  created: Date;
  movedFrom?: EmbeddedFolioModel;
  movedTo?: EmbeddedFolioModel;
  /** A reason why move operation was performed */
  movedReason?: string;
  amount: AmountModel;
  /** Receipt for this transaction */
  receipt?: string;
  /** Identifier used for grouping related charges together */
  groupId?: string;
  /** ID of the custom sub-account the charge has been posted to */
  subAccountId?: string;
  /** The count of services provided */
  quantity: number;
}

export interface EmbeddedFolioModel {
  /** Folio ID */
  id: string;
  /** Name of the debitor - the one who will pay the bill */
  debitor?: string;
}

export interface AmountModel {
  grossAmount: number;
  netAmount: number;
  vatType: VatType;
  vatPercent: number;
  currency: string;
}

export interface AllowanceModel {
  /** ID for allowances. This is unique within one folio. */
  id: string;
  amount: AmountModel;
  /** Reason why this allowance was posted */
  reason: string;
  /** The type of the service or good */
  serviceType: ServiceType;
  serviceDate: Date;
  /** Date of creation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  created: Date;
  movedFrom?: EmbeddedFolioModel;
  movedTo?: EmbeddedFolioModel;
  /** A reason why move operation was performed */
  movedReason?: string;
  /** ID of a charge allowance posted for. `Null` if posted for folio */
  sourceChargeId?: string;
  /** ID of the custom sub-account the allowance has been posted to */
  subAccountId?: string;
}

export interface TransitoryChargeModel {
  /** ID for transitory charge. This is unique within one folio. */
  id: string;
  /** The name, article number, or other description of this item */
  name: string;
  amount: MonetaryValueModel;
  /** The service type of this transitory charge. As revenue and VAT of transitory charges are not recorded for the hotel, this is just FYI. */
  serviceType?: ServiceType;
  /** The date when this charge was added. */
  serviceDate: Date;
  /** Date of creation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  created: Date;
  /** Receipt for this transaction */
  receipt?: string;
  movedFrom?: EmbeddedFolioModel;
  movedTo?: EmbeddedFolioModel;
  /** A reason why move operation was performed */
  movedReason?: string;
  /** The count of services provided */
  quantity: number;
}

export interface MessageItemCollection {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly messages?: string[];
}

export interface CreateFolioModel {
  /** The ID of the reservation for which a guest folio should be created */
  reservationId?: string;
  /** The ID of the company for which a folio should be created */
  companyId?: string;
  debitor: FolioDebitorModel;
  /**
   * The type of the folio to create. Default is the guest folio.
   * This field will become required 01.11.2019.
   */
  type?: CreateFolioType;
  /** The ID of the property for which an external folio should be created. */
  propertyId?: string;
  /**
   * Optional code for external folios.
   * If present, the id of the folio will be propertyId-code (MUC-SOMETHING);
   * If no code is provided, the id of the folio will be propertyId-ext-number (MUC-EXT-282).
   */
  code?: string;
}

export interface FolioCreatedModel {
  /** The folio id */
  id: string;
}

export interface CountModel {
  count: number;
}

export interface FolioModel {
  /** The id of the folio */
  id: string;
  /** Date of creation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  created: Date;
  /** Date of update<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  updated: Date;
  /** The folio type */
  type?: FolioType;
  debitor?: FolioDebitorModel;
  /** The date when the folio has been closed */
  closingDate?: Date;
  reservation?: EmbeddedReservationModel;
  company?: EmbeddedCompanyModel;
  property: EmbeddedPropertyModel;
  /** The list of charges */
  charges?: ChargeModel[];
  /** The list of charges */
  transitoryCharges?: TransitoryChargeModel[];
  /** The list of payments - <b>DEPRECATED: This field will be removed on July 3rd 2020. Use GET /finance/v1/folios/{folioId}/payments or GET /finance/v1/folios/{folioId}/refunds instead.</b> */
  payments?: PaymentModel[];
  /** The list of pending payments - <b>DEPRECATED: This field will be removed on July 3rd 2020. Use GET /finance/v1/folios/{folioId}/payments instead.</b> */
  pendingPayments?: PendingPaymentModel[];
  /** The list of allowances */
  allowances?: AllowanceModel[];
  balance: MonetaryValueModel;
  /**
   * Set to {true}, if the folio has been checked out on accounts receivable.
   * If you create an invoice from this folio, it will display the outstanding payments
   */
  checkedOutOnAccountsReceivable?: boolean;
  /** Set to {true} if this is a main folio for the reservation */
  isMainFolio?: boolean;
  /** Set to {true} if the folio has no unmoved [transitory] charges, unmoved payments, and allowances. */
  isEmpty?: boolean;
  /**
   * All folios that are related to this folio. Either because they belong to the same reservation, or because charges where moved
   * between them. This is only set on folios of type 'guest'
   */
  relatedFolios?: EmbeddedFolioModel[];
  /** All invoices that have been created for this folio. This is only set on folios of type 'guest' */
  relatedInvoices?: EmbeddedInvoiceModel[];
  /**
   * Depending on the state of the folio, certain warnings are shown.
   * This list includes all folio warnings.
   */
  folioWarnings?: string[];
  /**
   * Depending on the state of the folio, certain actions are allowed or not.
   * This list includes all actions you can perform on this folio.
   */
  allowedActions?: AllowedFolioAction[];
  /** The maximum payment that can be posted on this folio */
  allowedPayment?: number;
  /** The maximum allowance (gross) that can be posted on this folio */
  maximumAllowance?: number;
  /** Status of the folio */
  status: FolioStatus;
}

export interface EmbeddedPropertyModel {
  /** The property id */
  id: string;
  /** The code for the property that can be shown in reports and table views */
  code?: string;
  /** The name for the property */
  name?: string;
  /**
   * The description for the property
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
}

export interface PaymentModel {
  /** Id of the payment. This is unique within one folio. */
  id: string;
  /** The Payment Method. */
  method: PaymentMethod;
  amount: MonetaryValueModel;
  externalReference?: ExternalReference;
  /** Receipt for the payment. For payments done by the payment service provider integration, this is the same as the pspReference. */
  receipt?: string;
  /** The date when the payment was done<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  paymentDate?: Date;
  movedFrom?: EmbeddedFolioModel;
  movedTo?: EmbeddedFolioModel;
  /** A reason why move operation was performed */
  movedReason?: string;
  /** A link to the original payment in case of splitting payments */
  sourcePaymentId?: string;
}

export interface ExternalReference {
  /** The merchant reference ('order number') */
  merchantReference: string;
  /** The globally unique identifier of this payment in the reports of the payment service */
  pspReference: string;
}

export interface PendingPaymentModel {
  /** Id of the payment task. */
  id: string;
  amount: MonetaryValueModel;
  /** The terminal used for the payment. */
  terminalId?: string;
}

export interface Operation {
  /** Any object */
  value?: any;
  path?: string;
  op?: string;
  from?: string;
}

export interface CreateChargeModel {
  /** The service type, used by accounting to determine the correct revenue account */
  serviceType: CreateChargeServiceType;
  /** The VAT type, used by accounting to determine the correct vat amount and account */
  vatType: VatType;
  /** ID of the custom sub-account to post the charge to, used by accounting to determine the correct revenue account */
  subAccountId?: string;
  /** The name, article number, or other description of this charge */
  name: string;
  amount: MonetaryValueModel;
  /** Receipt for this transaction */
  receipt?: string;
  /**
   * The count of services provided. Defaults to 1.
   * NOTE: this field will become required 07.05.2020.
   */
  quantity?: number;
  /**
   * The business date of the charge. Defaults to the current date.
   * In some cases you might want to post the charges to the previous business date, this is only possible until 6 AM of the current day.
   */
  businessDate?: Date;
}

export interface AddedChargeModel {
  /** The id of the added charge */
  id: string;
  /** The fee charges ids */
  feeChargeIds?: string[];
}

export interface CreateTransitoryChargeModel {
  /** The name, article number, or other description of this item */
  name: string;
  amount: MonetaryValueModel;
  /** Receipt for this transaction */
  receipt?: string;
  /** Identifier used for grouping related charges together */
  groupId?: string;
  /** The service type. This is not used by accounting, but can be entered and stored on the charge. */
  serviceType?: CreateChargeServiceType;
  /**
   * The count of services provided. Defaults to 1.
   * NOTE: this field will become required 07.05.2020.
   */
  quantity?: number;
  /**
   * The business date of the charge. Defaults to the current date.
   * In some cases you might want to post the charges to the previous business date, this is only possible until 6 AM of the current day.
   */
  businessDate?: Date;
}

export interface CreatedSubResourceIdModel {
  id: string;
}

export interface MoveChargesRequest {
  /** ID of the target folio */
  targetFolioId: string;
  /** Description of why the move is performed */
  reason: string;
  /** The IDs of the charges that should be moved */
  chargeIds?: string[];
  /**
   * The IDs of the allowances that should be moved.
   * Only moving global allowances is supported
   */
  allowanceIds?: string[];
  /** The IDs of the transitory charges that should be moved */
  transitoryChargeIds?: string[];
}

export interface BulkMoveRequest {
  /** The list of actions to perform */
  items: BulkMoveItemRequest[];
  /** Description of why the move is performed */
  reason: string;
}

export interface BulkMoveItemRequest {
  /** ID of the source folio */
  sourceFolioId: string;
  /** ID of the target folio */
  targetFolioId: string;
  /** The IDs of the charges that should be moved */
  chargeIds?: string[];
}

export interface MoveAllChargesRequest {
  /** ID of the target folio */
  targetFolioId: string;
  /** Description of why the move is performed */
  reason: string;
}

export interface CreateAllowanceForChargeModel {
  /** Reason why this allowance is posted */
  reason: string;
  amount: MonetaryValueModel;
}

export interface CreateAllowanceForFolioModel {
  /** The service type, used by accounting to determine the correct revenue account */
  serviceType: CreateChargeServiceType;
  /** The VAT type, used by accounting to determine the correct vat amount and account */
  vatType: VatType;
  /** ID of the custom sub-account to post the allowance to, used by accounting to determine the correct revenue account */
  subAccountId?: string;
  /** Reason why this allowance is posted */
  reason: string;
  amount: MonetaryValueModel;
}

export interface CreateAllowanceBulkModel {
  /** The list of actions to perform */
  items: CreateAllowanceBulkItemModel[];
  /** Description of why allowances are added */
  reason: string;
}

export interface CreateAllowanceBulkItemModel {
  /** The ID of the charge */
  chargeId: string;
  amount: MonetaryValueModel;
}

export interface BulkAllowanceCreatedModel {
  /** Allowances that have been created */
  items: BulkAllowanceCreatedItemModel[];
}

export interface BulkAllowanceCreatedItemModel {
  /** The id of the created allowance */
  id: string;
  /** The id of the charge the allowance has been added to */
  sourceChargeId: string;
}

export interface MovePaymentsRequest {
  /** ID of the target folio */
  targetFolioId: string;
  /** Description of why the move is performed */
  reason: string;
  /** The IDs of the payments that should be moved */
  paymentIds: string[];
}

export interface CorrectFolioRequest {
  /** Description of why the correction is performed */
  reason: string;
  /** The IDs of the charges that should be moved */
  chargeIds?: string[];
  /**
   * The IDs of the allowances that should be moved
   * Only moving global allowances is supported
   */
  allowanceIds?: string[];
  /** The IDs of the transitory charges that should be moved */
  transitoryChargeIds?: string[];
}

export interface SplitChargeRequest {
  /** The percent to split charge (between 0 and 100) */
  percent?: number;
  amount?: MonetaryValueModel;
  /** How to split the charge: by percent value, or by absolute amount */
  type: SplitType;
}

export interface SplitPaymentRequest {
  /** The percent to split payment (between 0 and 100) */
  percent?: number;
  amount?: MonetaryValueModel;
  /** How to split the payment: by percent value, or by absolute amount */
  type: SplitType;
}

export interface PaymentListModel {
  /** List of payments */
  payments: FolioPaymentModel[];
  /** Total count of items */
  count: number;
}

export interface FolioPaymentModel {
  /** Id of the payment. This is unique within one folio */
  id: string;
  /** The payment method */
  method?: PaymentMethod;
  amount: MonetaryValueModel;
  externalReference?: ExternalReference;
  /** Receipt for the payment */
  receipt?: string;
  /** The date and time when the payment was created<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  paymentDate: Date;
  movedFrom?: EmbeddedFolioModel;
  movedTo?: EmbeddedFolioModel;
  /** A reason why the move operation was performed */
  movedReason?: string;
  /** A link to the original payment in case of splitting payments */
  sourcePaymentId?: string;
  /** Status of the payment */
  status: PaymentProcessingStatus;
  /** Human readable failure reason */
  failureReason?: string;
  /** Machine-readable failure code */
  failureCode?: FailureCode;
  /** Type of the payment */
  type: PaymentType;
  /** The date and time a payment link expires<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  expiresAt?: Date;
  /** Payment link description */
  description?: string;
  /** Payment link url */
  url?: string;
  /** The list of actions for this payment */
  actions?: ActionModelPaymentActionNotAllowedPaymentActionReason[];
}

export interface ActionModelPaymentActionNotAllowedPaymentActionReason {
  action: "Cancel";
  isAllowed: boolean;
  reasons?: ActionReasonModelNotAllowedPaymentActionReason[];
}

export interface ActionReasonModelNotAllowedPaymentActionReason {
  code: NotAllowedPaymentActionReason;
  message: string;
}

export interface CreateCustomPaymentRequest {
  /**
   * The payment method. Use 'CreditCard', if none of the specific credit cards types matches. 'Booking.com' only makes sense, if
   * the property (hotel) configured Booking.com > Finance to be 'Payments by Booking.com'
   */
  method: CreatePaymentMethod;
  /**
   * The optional receipt you want to store for the payment. It defaults to the reservation or external folio id.
   * This field is required if you are adding payment to the house account
   */
  receipt?: string;
  /**
   * The business date of the payment. Defaults to the current date.
   * In some cases you might want to post the payments to the previous business date, this is only possible until 6 AM of the current day.
   */
  businessDate?: Date;
  amount: MonetaryValueModel;
  /** List of charges and amount being covered by this payment. */
  paidCharges?: PaymentPaidChargesRequest[];
}

export interface PaymentPaidChargesRequest {
  /** The ID of the charge being paid */
  chargeId: string;
  /** The amount being covered with the payment. If not provided it is assumed that the payment is covering the full amount of the charge */
  amount: number;
}

export interface PaymentCreatedModel {
  id: string;
}

export interface CreateTerminalPaymentRequest {
  /** Terminal to be used for the payment */
  terminalId: string;
  amount: MonetaryValueModel;
  /** List of charges and amount being covered by this payment. */
  paidCharges?: PaymentPaidChargesRequest[];
}

export interface CreateAuthorizationPaymentRequest {
  /** Reference to the original authorization transaction */
  transactionReference: string;
  amount: MonetaryValueModel;
  /** List of charges and amount being covered by this payment. */
  paidCharges?: PaymentPaidChargesRequest[];
}

export interface CreateAccountPaymentRequest {
  amount: MonetaryValueModel;
  /** List of charges and amount being covered by this payment. */
  paidCharges?: PaymentPaidChargesRequest[];
}

export interface CreatePaymentLinkRequest {
  /** The date that the link expires<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  expiresAt: Date;
  /** The payer's country code. Used to provide suitable for the payer payment methods and use default country language */
  countryCode: string;
  /** Payment description. It will be shown on the payment form of the link */
  description?: string;
  /**
   * The email address of the payer or cardholder. It can be used to verify the identity of the payer and
   * allow to catch a fraudulent usage of the payment account if the email address does not match the one
   * on file at the bank
   */
  payerEmail?: string;
  amount: MonetaryValueModel;
  /** List of charges and amount being covered by this payment. */
  paidCharges?: PaymentPaidChargesRequest[];
}

export interface RefundListModel {
  /** List of refunds */
  refunds: RefundModel[];
  /** Total count of items */
  count: number;
}

export interface RefundModel {
  /** Id of the refund */
  id: string;
  /** The payment method */
  method: PaymentMethod;
  amount: MonetaryValueModel;
  externalReference?: ExternalReference;
  /** Receipt for the payment. For payments run through the apaleo payment services it is set to the pspReference */
  receipt?: string;
  /** The date when the refund was done<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  refundDate: Date;
  /** A link to the payment that the refund was done for */
  sourcePaymentId?: string;
  /** Status of the refund */
  status: PaymentProcessingStatus;
  failureReason?: string;
  /** Machine-readable failure code */
  failureCode?: FailureCode;
  movedFrom?: EmbeddedFolioModel;
  movedTo?: EmbeddedFolioModel;
  /** A reason why the move operation was performed */
  movedReason?: string;
}

export interface CreateFolioRefundRequest {
  /** The payment method the refund will be accounted to */
  method: CreatePaymentMethod;
  amount: MonetaryValueModel;
  /** The receipt for the refund */
  receipt?: string;
}

export interface RefundCreatedModel {
  id: string;
}

export interface CreatePaymentRefundRequest {
  amount: MonetaryValueModel;
}

export interface PreviewInvoiceModel {
  to?: InvoiceRecipientModel;
  /** Describes what will happen, when you try to create an invoice with the folio in the state it is in now. */
  createInvoiceAction: CreateInvoiceActionType;
  /** A warning about what would fail if you would try to create an invoice with the current folio. */
  createInvoiceWarning?: CreateInvoiceWarningModel;
  /** Date the invoice has been created */
  invoiceDate: Date;
  /** The folio this invoice was requested for */
  folioId: string;
  from: InvoiceSenderModel;
  commercialInformation: CommercialInfoModel;
  bankAccount?: BankAccountModel;
  /** Specification of the payment terms, as defined in the property */
  paymentTerms?: string;
  lineItems: InvoiceLineItemsModel;
  /** A list of all payments */
  payments?: InvoicePaymentModel[];
  outstandingPayment?: MonetaryValueModel;
  /** The subtotal, displaying net and tax amount for each VAT type */
  taxDetails?: TaxDetailModel[];
  total: MonetaryValueModel;
  stayInfo?: StayInfoModel;
  /** The ID of the property */
  propertyId: string;
  /** The country code of the property */
  propertyCountryCode: string;
  /** Language which was used to create the invoice */
  languageCode: string;
  company?: EmbeddedCompanyModel;
}

export interface InvoiceRecipientModel {
  name?: string;
  address?: NonStrictAddressModel;
  companyName?: string;
  companyTaxId?: string;
  reference?: string;
}

/** A warning about what would fail if you would try to create an invoice with the current folio. */
export interface CreateInvoiceWarningModel {
  /** The general classification of the warning, why an invoice would not be created if you would try to create it for the current folio. */
  type: CreateInvoiceWarningType;
  /** Optionally, additional information about the warning */
  message?: string;
}

export interface InvoiceSenderModel {
  name: string;
  address?: AddressModel;
}

export interface AddressModel {
  addressLine1: string;
  addressLine2?: string;
  postalCode: string;
  city: string;
  regionCode?: string;
  countryCode: string;
}

export interface CommercialInfoModel {
  registerEntry: string;
  taxId: string;
  managingDirectors?: string;
}

export interface BankAccountModel {
  iban?: string;
  bic?: string;
  bank?: string;
}

export interface InvoiceLineItemsModel {
  lineItems?: InvoiceLineItemModel[];
  subTotal: MonetaryValueModel;
}

export interface InvoiceLineItemModel {
  /** The date on which this item or service is delivered */
  date: Date;
  /** The description of the item or service */
  description: string;
  price: MonetaryValueModel;
  /**
   * The applied VAT type.
   * Is null when the InvoiceLineItemGroupingType != (NoGrouping)
   */
  vatType?: VatType;
  /**
   * The applied VAT percent
   * Is null when the InvoiceLineItemGroupingType != (NoGrouping)
   */
  vatPercent?: number;
  /** Whether this line item represents a no-show fee */
  isNoShowFee: boolean;
  /** Items which are included in the package, if there are any */
  subItems?: string[];
  /** Guest who the service has been provided to. Is defined only when the invoice has charges from multiple folios with different guests. */
  guest?: string;
  /** The count of services provided. Is defined only when the InvoiceLineItemGroupingType == NoGrouping */
  quantity?: number;
}

export interface InvoicePaymentModel {
  /** Id of the payment. This is unique within one folio. */
  id: string;
  /** The Payment Method type. */
  method: PaymentMethod;
  /** The Payment Method name translated in the requested language of the invoice */
  methodName: string;
  amount: MonetaryValueModel;
  /** The date when the payment was done<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  paymentDate?: Date;
}

export interface TaxDetailModel {
  vatType: VatType;
  vatPercent: number;
  net: MonetaryValueModel;
  tax: MonetaryValueModel;
}

export interface StayInfoModel {
  /** Name of the primary guest */
  guestName: string;
  /** The arrival date */
  arrivalDate: Date;
  /** The departure date */
  departureDate: Date;
  /** ID of the reservation this invoice is for, if any. */
  reservationId: string;
}

export interface InvoiceListModel {
  /** List of invoices. */
  invoices: InvoiceItemModel[];
  /** Total count of items */
  count: number;
}

export interface InvoiceItemModel {
  /** Invoice identifier */
  id: string;
  /** Invoice number */
  number: string;
  /** Invoice type */
  type: InvoiceType;
  /** Language which was used to create the invoice */
  languageCode: string;
  /** The folio for this invoice */
  folioId: string;
  /** The reservation for this invoice */
  reservationId?: string;
  /** The ID of the property */
  propertyId: string;
  /**
   * If the invoice is related to another invoice, this field contains related invoice number
   * For example, if the invoice has Cancellation type,
   * this field contains the number of invoice which is being cancelled
   */
  relatedInvoiceNumber?: string;
  outstandingPayment?: MonetaryValueModel;
  /** True, if this invoice had no outstanding payments or was settled. */
  paymentSettled: boolean;
  /** Date of creation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  created: Date;
  /** Name of the guest */
  guestName?: string;
  /** Company the guest specified */
  guestCompany?: string;
  /**
   * Depending on the state of the invoice, certain actions are allowed or not.
   * This list includes all actions you can perform on this invoice.
   */
  allowedActions?: AllowedInvoiceAction[];
  company?: EmbeddedCompanyModel;
}

export interface CreateInvoicePdfRequest {
  /** The language in which the invoice should be produced. */
  languageCode: string;
  /** The ID of the folio for which the invoice should be created. */
  folioId: string;
}

export interface InvoiceCreatedModel {
  /** The invoice id */
  id: string;
}

export interface InvoiceModel {
  /** Invoice identifier */
  id: string;
  /** Invoice number */
  number: string;
  /** Invoice type */
  type: InvoiceType;
  to: InvoiceRecipientModel;
  /** True, if this invoice had no outstanding payments or was settled. */
  paymentSettled: boolean;
  /** Date of creation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  created: Date;
  /**
   * If the invoice is related to another invoice, this field contains related invoice number
   * For example, if the invoice has Cancellation type,
   * this field contains the number of invoice which is being cancelled
   */
  relatedInvoiceNumber?: string;
  /**
   * Depending on the state of the invoice, certain actions are allowed or not.
   * This list includes all actions you can perform on this invoice.
   */
  allowedActions?: AllowedInvoiceAction[];
  /** Date the invoice has been created */
  invoiceDate: Date;
  /** The folio this invoice was requested for */
  folioId: string;
  from: InvoiceSenderModel;
  commercialInformation: CommercialInfoModel;
  bankAccount?: BankAccountModel;
  /** Specification of the payment terms, as defined in the property */
  paymentTerms?: string;
  lineItems: InvoiceLineItemsModel;
  /** A list of all payments */
  payments?: InvoicePaymentModel[];
  outstandingPayment?: MonetaryValueModel;
  /** The subtotal, displaying net and tax amount for each VAT type */
  taxDetails?: TaxDetailModel[];
  total: MonetaryValueModel;
  stayInfo?: StayInfoModel;
  /** The ID of the property */
  propertyId: string;
  /** The country code of the property */
  propertyCountryCode: string;
  /** Language which was used to create the invoice */
  languageCode: string;
  company?: EmbeddedCompanyModel;
}

export interface PayInvoiceRequest {
  /** The payment method used for paying the invoice. Used for accounting. */
  paymentMethod: CreatePaymentMethod;
  /** The receipt for the payment. Each transaction in accounting has a receipt set. */
  receipt: string;
}

export interface AccountingTransactionPairListModel {
  /** The list of aggregated transaction pairs */
  accountTransactionPairs: AccountingTransactionPairModel[];
}

export interface AccountingTransactionPairModel {
  /** Debited account number - <b>DEPRECATED: This field will be removed 01.03.2021. Use "DebitedAccount" instead</b> */
  debitedAccountNumber: string;
  /** Debited account name - <b>DEPRECATED: This field will be removed 01.03.2021. Use "DebitedAccount" instead</b> */
  debitedAccountName: string;
  /** Debited account type - <b>DEPRECATED: This field will be removed 01.03.2021. Use "DebitedAccount" instead</b> */
  debitedAccountType: FinancialAccountType;
  debitedAccount: ExportAccountModel;
  /** Credited account number - <b>DEPRECATED: This field will be removed 01.03.2021. Use "CreditedAccount" instead</b> */
  creditedAccountNumber: string;
  /** Credited account name - <b>DEPRECATED: This field will be removed 01.03.2021. Use "CreditedAccount" instead</b> */
  creditedAccountName: string;
  /** Credited account type - <b>DEPRECATED: This field will be removed 01.03.2021. Use "CreditedAccount" instead</b> */
  creditedAccountType: FinancialAccountType;
  creditedAccount: ExportAccountModel;
  amount: MonetaryValueModel;
}

export interface ExportAccountModel {
  /** The account name */
  name: string;
  /** The account number */
  number: string;
  /** The number of the parent account */
  parentNumber?: string;
  /** The account type */
  type: FinancialAccountType;
}

export interface AggregateTransactionListModel {
  /** Aggregated data for the main accounts. */
  aggregations: AggregateTransactionItemModel[];
  total: AggregatesTotalModel;
}

export interface AggregateTransactionItemModel {
  /** The account number - <b>DEPRECATED: This field will be removed 01.03.2021. Use "Account" instead</b> */
  accountNumber: string;
  /** Name of the account - <b>DEPRECATED: This field will be removed 01.03.2021. Use "Account" instead</b> */
  accountName: string;
  /** The account type - <b>DEPRECATED: This field will be removed 01.03.2021. Use "Account" instead</b> */
  accountType: FinancialAccountType;
  account: ExportAccountModel;
  creditedAmount: MonetaryValueModel;
  debitedAmount: MonetaryValueModel;
  balance: MonetaryValueModel;
}

export interface AggregatesTotalModel {
  creditedAmount: MonetaryValueModel;
  debitedAmount: MonetaryValueModel;
  balance: MonetaryValueModel;
}

export interface AccountingTransactionListModel {
  /** The list of transactions */
  transactions: AccountingTransactionModel[];
  /** Total count of items */
  count: number;
}

export interface AccountingTransactionModel {
  /** Timestamp with time zone information, when the booking was done<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  timestamp: Date;
  /** The business date when the booking was done */
  date: Date;
  /** Debited account name - <b>DEPRECATED: This field will be removed 01.03.2021. Use "DebitedAccount" instead</b> */
  debitedAccountName: string;
  /** The account being debited (The 'from' in 'book x from account 1 to account 2') - <b>DEPRECATED: This field will be removed 01.03.2021. Use "DebitedAccount" instead</b> */
  debitedAccountNumber: string;
  /** The account type being debited - <b>DEPRECATED: This field will be removed 01.03.2021. Use "DebitedAccount" instead</b> */
  debitedAccountType: FinancialAccountType;
  /** The parent account of the account being debited - <b>DEPRECATED: This field will be removed 01.03.2021. Use "DebitedAccount" instead</b> */
  debitedAccountParentNumber?: string;
  debitedAccount: ExportAccountModel;
  /** Credited account name - <b>DEPRECATED: This field will be removed 01.03.2021. Use "CreditedAccount" instead</b> */
  creditedAccountName: string;
  /** The account being credited (The 'to' in 'book x from account 1 to account 2') - <b>DEPRECATED: This field will be removed 01.03.2021. Use "CreditedAccount" instead</b> */
  creditedAccountNumber: string;
  /** The account type being credited - <b>DEPRECATED: This field will be removed 01.03.2021. Use "CreditedAccount" instead</b> */
  creditedAccountType: FinancialAccountType;
  /** The parent account of the account being credited - <b>DEPRECATED: This field will be removed 01.03.2021. Use "CreditedAccount" instead</b> */
  creditedAccountParentNumber?: string;
  creditedAccount: ExportAccountModel;
  /** The type of business transaction which triggered the booking */
  command: TransactionCommand;
  amount: MonetaryValueModel;
  receipt?: ReceiptModel;
  /** All transactions having the same number form one booking */
  entryNumber: string;
  /** The reference for the transactions, reservation id for guest folios, folio id for external folios, property code for the house folio */
  reference: string;
  /** Does this transaction belong to a reservation, a house or an external folio */
  referenceType: FolioType;
  /** All transactions triggered by the same business transaction share one group number */
  entryGroupNumber: string;
}

export interface ReceiptModel {
  /** The type of receipt. */
  type?: ReceiptType;
  /** The receipt number. */
  number: string;
}

export interface ExportGrossTransactionListModel {
  /** List of transactions with all details. */
  transactions: ExportGrossTransactionItemModel[];
}

export interface ExportGrossTransactionItemModel {
  /** Timestamp with time zone information, when the booking was done<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  timestamp: Date;
  /** The business date when the booking was done */
  date: Date;
  debitedAccount: ExportAccountModel;
  creditedAccount: ExportAccountModel;
  /** The type of business transaction which triggered the booking */
  command: TransactionCommand;
  /** The currency of the transaction */
  currency: string;
  /** The gross amount being booked */
  grossAmount: number;
  /** The net amount being booked */
  netAmount: number;
  /** The taxes which make up the difference between net and gross amount */
  taxes?: TaxAmountModel[];
  receipt: ReceiptModel;
  /** The original raw transaction entry number which got converted to these one or 2 lines. */
  sourceEntryNumber: string;
  /** The reference for the transactions, reservation id for guest folios, folio id for external folios, property code for the house folio */
  reference: string;
  /** Does this transaction belong to a reservation, a house or an external folio */
  referenceType: FolioType;
}

export interface TaxAmountModel {
  /** The VAT type */
  type: VatType;
  /** The currently valid percent to calculate the VAT */
  percent: number;
  /** The tax amount */
  amount: number;
}

export interface ChartOfAccountsModel {
  /** The predefined list of global accounts of a property's subledger */
  globalAccounts: SlimFinanceAccountModel[];
  /** The predefined list of guest specific accounts of a property's subledger. */
  guestAccounts: SlimFinanceAccountModel[];
  /** The predefined list of external accounts of a property's subledger. */
  externalAccounts: SlimFinanceAccountModel[];
}

export interface SlimFinanceAccountModel {
  /** The old account number. Unique identifier within one property. - <b>DEPRECATED: This field will be removed 01.03.2021. Use "AccountNumber" instead</b> */
  number: string;
  /** The account number. Unique identifier within one property. */
  accountNumber: string;
  /** The name of the account. */
  name: string;
  /** The type of account. */
  type: FinancialAccountType;
  /** Parent account number. Null for top-level accounts. */
  parentNumber?: string;
  /** Indicates whether this account has children / sub accounts or not. */
  hasChildren: boolean;
  /** Indicates whether this account is archived ot not. */
  isArchived: boolean;
  vat?: VatItemModel;
  /** Sub accounts for this accounts. */
  subAccounts?: SlimFinanceAccountModel[];
}

export interface VatItemModel {
  /** The VAT type */
  type: VatType;
  /** The currently valid percent to calculate the VAT */
  percent: number;
}

export interface FinanceAccountListModel {
  /** List of accounts in a property, having one specific parent. */
  accounts: SlimFinanceAccountModel[];
  /** Total count of items */
  count: number;
}

export interface FinanceAccountModel {
  /** The old account number. Unique identifier within one property. - <b>DEPRECATED: This field will be removed 01.03.2021. Use "AccountNumber" instead</b> */
  number: string;
  /** The account number. Unique identifier within one property. */
  accountNumber: string;
  /** The name of the account. */
  name: string;
  /** The type of account. */
  type: FinancialAccountType;
  /**
   * Indicates whether this account has children / sub accounts or not. The children can be retrieved via GET /accounts and querying
   * by parent.
   */
  hasChildren: boolean;
  /** Parent account number. Null for top-level accounts. */
  parentNumber?: string;
  /** Indicates whether this account is archived ot not. */
  isArchived: boolean;
  /** All transactions / bookings involving this account. */
  transactions?: AccountingTransactionModel[];
}

export interface CurrencyListModel {
  /** List of ISO currencies. */
  isoCurrencies: string[];
}

export interface PaymentMethodListModel {
  /** List of supported payment methods. */
  paymentMethods: CreatePaymentMethod[];
}

export interface ServiceTypeListModel {
  /** List of supported payment methods. */
  serviceTypes: ServiceType[];
}

export interface VatListModel {
  vatTypes?: VatItemModel[];
}

export interface SplitChargeResult {
  allowanceId?: string;
  firstChargeId?: string;
  secondChargeId?: string;
}

export interface SplitPaymentResult {
  refundId?: string;
  firstPaymentId?: string;
  secondPaymentId?: string;
}

/** Defines headers for ApaleoFinanceAPI_financeFoliosPost operation. */
export interface ApaleoFinanceAPIFinanceFoliosPostHeaders {
  /** The location of the created resource. */
  location?: string;
}

/** Defines headers for ApaleoFinanceAPI_financeFolioActionsByFolioIdCorrectPost operation. */
export interface ApaleoFinanceAPIFinanceFolioActionsByFolioIdCorrectPostHeaders {
  /** The location of the created resource. */
  location?: string;
}

/** Defines headers for ApaleoFinanceAPI_financeFoliosByFolioIdPaymentsPost operation. */
export interface ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsPostHeaders {
  /** The location of the created resource. */
  location?: string;
}

/** Defines headers for ApaleoFinanceAPI_financeFoliosByFolioIdPaymentsByTerminalPost operation. */
export interface ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByTerminalPostHeaders {
  /** The location of the created resource. */
  location?: string;
}

/** Defines headers for ApaleoFinanceAPI_financeFoliosByFolioIdPaymentsByAuthorizationPost operation. */
export interface ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByAuthorizationPostHeaders {
  /** The location of the created resource. */
  location?: string;
}

/** Defines headers for ApaleoFinanceAPI_financeFoliosByFolioIdPaymentsByPaymentAccountPost operation. */
export interface ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentAccountPostHeaders {
  /** The location of the created resource. */
  location?: string;
}

/** Defines headers for ApaleoFinanceAPI_financeFoliosByFolioIdPaymentsByLinkPost operation. */
export interface ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByLinkPostHeaders {
  /** The location of the created resource. */
  location?: string;
}

/** Defines headers for ApaleoFinanceAPI_financeFoliosByFolioIdRefundsPost operation. */
export interface ApaleoFinanceAPIFinanceFoliosByFolioIdRefundsPostHeaders {
  /** The location of the created resource. */
  location?: string;
}

/** Defines headers for ApaleoFinanceAPI_financeFoliosByFolioIdPaymentsByPaymentIdRefundsPost operation. */
export interface ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPostHeaders {
  /** The location of the created resource. */
  location?: string;
}

/** Defines headers for ApaleoFinanceAPI_financeInvoicesPost operation. */
export interface ApaleoFinanceAPIFinanceInvoicesPostHeaders {
  /** The location of the created resource. */
  location?: string;
}

/** Known values of {@link Get15ItemsItem} that the service accepts. */
export const enum KnownGet15ItemsItem {
  Charges = "charges",
  Allowances = "allowances",
  TransitoryCharges = "transitoryCharges",
  AllowedActions = "allowedActions",
  Company = "company",
  Warnings = "warnings"
}

/**
 * Defines values for Get15ItemsItem. \
 * {@link KnownGet15ItemsItem} can be used interchangeably with Get15ItemsItem,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **charges** \
 * **allowances** \
 * **transitoryCharges** \
 * **allowedActions** \
 * **company** \
 * **warnings**
 */
export type Get15ItemsItem = string;

/** Known values of {@link Get12ItemsItem} that the service accepts. */
export const enum KnownGet12ItemsItem {
  AllowedActions = "allowedActions",
  Company = "company"
}

/**
 * Defines values for Get12ItemsItem. \
 * {@link KnownGet12ItemsItem} can be used interchangeably with Get12ItemsItem,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **allowedActions** \
 * **company**
 */
export type Get12ItemsItem = string;
/** Defines values for FolioType. */
export type FolioType = "House" | "Guest" | "External";
/** Defines values for PersonTitle. */
export type PersonTitle = "Mr" | "Ms" | "Dr" | "Prof" | "Other";
/** Defines values for AllowedFolioAction. */
export type AllowedFolioAction =
  | "AddCharge"
  | "AddAllowance"
  | "AddCancellationFee"
  | "AddNoShowFee"
  | "AddPayment"
  | "AddRefund"
  | "CheckoutOnAr"
  | "Close"
  | "PostOpenCharges"
  | "CorrectFolio"
  | "ChangeAddress"
  | "ChangeAddressWithSimpleDebitor"
  | "Delete"
  | "Reopen"
  | "CreateInvoice"
  | "CreateAdvanceInvoice"
  | "CancelLastInvoice"
  | "CreateInvoiceWithSimpleDebitor"
  | "CreatePrepaymentNotice";
/** Defines values for FolioStatus. */
export type FolioStatus = "Open" | "Closed" | "ClosedWithInvoice";
/** Defines values for ServiceType. */
export type ServiceType =
  | "Other"
  | "Accommodation"
  | "FoodAndBeverages"
  | "CancellationFees"
  | "NoShow"
  | "CityTax";
/** Defines values for VatType. */
export type VatType =
  | "Null"
  | "VeryReduced"
  | "Reduced"
  | "Normal"
  | "Without"
  | "Special"
  | "ReducedCovid19"
  | "NormalCovid19";
/** Defines values for CreateFolioType. */
export type CreateFolioType = "Guest" | "External";
/** Defines values for PaymentMethod. */
export type PaymentMethod =
  | "Cash"
  | "BankTransfer"
  | "CreditCard"
  | "Invoice"
  | "Amex"
  | "VisaCredit"
  | "VisaDebit"
  | "MasterCard"
  | "MasterCardDebit"
  | "Maestro"
  | "GiroCard"
  | "DiscoverCard"
  | "Diners"
  | "Jcb"
  | "BookingCom"
  | "VPay"
  | "PayPal"
  | "Postcard"
  | "Reka"
  | "Twint"
  | "Lunchcheck"
  | "Voucher"
  | "ChinaUnionPay"
  | "Other"
  | "Cheque"
  | "Airbnb"
  | "HolidayCheck"
  | "PspCash"
  | "PspDebit"
  | "PspBanking"
  | "PspOpenInvoice"
  | "PspWallet";
/** Defines values for CreateChargeServiceType. */
export type CreateChargeServiceType =
  | "Other"
  | "Accommodation"
  | "FoodAndBeverages"
  | "CityTax";
/** Defines values for SplitType. */
export type SplitType = "ByPercent" | "ByAmount";
/** Defines values for PaymentProcessingStatus. */
export type PaymentProcessingStatus =
  | "Pending"
  | "Success"
  | "Failure"
  | "Canceled";
/** Defines values for FailureCode. */
export type FailureCode = "Failed" | "TimedOut";
/** Defines values for PaymentType. */
export type PaymentType =
  | "Custom"
  | "Terminal"
  | "PaymentAccount"
  | "Authorization"
  | "PaymentLink";
/** Defines values for NotAllowedPaymentActionReason. */
export type NotAllowedPaymentActionReason =
  | "CancelNotAllowedForPaymentNotInStatusPending"
  | "CancelNotAllowedForPaymentNotOfPaymentLinkType";
/** Defines values for CreatePaymentMethod. */
export type CreatePaymentMethod =
  | "Cash"
  | "BankTransfer"
  | "CreditCard"
  | "Amex"
  | "VisaCredit"
  | "VisaDebit"
  | "MasterCard"
  | "MasterCardDebit"
  | "Maestro"
  | "GiroCard"
  | "DiscoverCard"
  | "Diners"
  | "Jcb"
  | "BookingCom"
  | "VPay"
  | "PayPal"
  | "Postcard"
  | "Reka"
  | "Twint"
  | "Lunchcheck"
  | "Voucher"
  | "ChinaUnionPay"
  | "Other"
  | "Cheque"
  | "Airbnb"
  | "HolidayCheck";
/** Defines values for CreateInvoiceActionType. */
export type CreateInvoiceActionType =
  | "CannotCreateInvoice"
  | "CreatesInvoice"
  | "CreatesInvoiceAndClosesFolio"
  | "CreatesArInvoiceAndClosesFolio";
/** Defines values for CreateInvoiceWarningType. */
export type CreateInvoiceWarningType =
  | "InvoiceAlreadyExists"
  | "NotAllChargesPosted"
  | "DebitorDetailsMissing"
  | "InvoiceHasPendingPayments"
  | "NoCompanyFound"
  | "CompanyCannotCheckOutOnAr"
  | "IsHouseFolio"
  | "CannotCreateCompanyInvoiceForExternal"
  | "CheckOutOnArIsNotAllowed";
/** Defines values for InvoiceType. */
export type InvoiceType =
  | "Initial"
  | "Cancellation"
  | "Correction"
  | "Advance"
  | "AdvanceCancellation"
  | "AdvanceCorrection";
/** Defines values for AllowedInvoiceAction. */
export type AllowedInvoiceAction =
  | "CorrectAddress"
  | "CorrectCharges"
  | "MarkAsPaid"
  | "Cancel";
/** Defines values for FinancialAccountType. */
export type FinancialAccountType =
  | "Revenues"
  | "Payments"
  | "Liabilities"
  | "Receivables"
  | "Vat"
  | "House"
  | "AccountsReceivable"
  | "CityTaxes"
  | "TransitoryItems"
  | "VatOnLiabilities";
/** Defines values for AccountingSchema. */
export type AccountingSchema = "Simple" | "Extended";
/** Defines values for TransactionCommand. */
export type TransactionCommand =
  | "PostCharge"
  | "PostPayment"
  | "MoveLineItem"
  | "PostPrepayment"
  | "PostToAccountsReceivables"
  | "PostPrepaymentVat"
  | "System";
/** Defines values for ReceiptType. */
export type ReceiptType = "Custom" | "Reservation" | "Invoice" | "PspReference";

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceFoliosGetOptionalParams
  extends coreHttp.OperationOptions {
  /** Filter folio list by property IDs */
  propertyIds?: string[];
  /** Filter folio list by company IDs */
  companyIds?: string[];
  /** Filter folio list by reservation IDs */
  reservationIds?: string[];
  /** Filter folio list by booking IDs */
  bookingIds?: string[];
  /**
   * If set to {true}, only return empty folios (no unmoved [transitory] charges, no unmoved payments, no allowances).
   * If set to {false}, only return non-empty folios
   */
  isEmpty?: boolean;
  /**
   * If set to {true}, only return folios that have been checked out on accounts receivables
   * Otherwise, returns all.
   */
  checkedOutOnAccountsReceivable?: boolean;
  /** If set to {true}, closed folios are filtered out from the result collection */
  excludeClosed?: boolean;
  /** If set to {true}, only return folios that been invoices */
  hasInvoices?: boolean;
  /** The inclusive start time of the date of creation. Mostly useful for external folios<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  createdFrom?: Date;
  /** The exclusive end time of the date of creation. Mostly useful for external folios<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  createdTo?: Date;
  /** If set to {true}, only main folios are returned, otherwise all. */
  onlyMain?: boolean;
  /** The type of the folio */
  typeParam?: FolioType;
  /**
   * Allows filtering external folios by code.
   * Useful when you use external folios with custom codes.
   * Specifying this parameter will ignore the <b>Type</b> parameter and treat as if it would be set to "External" instead.
   */
  externalFolioCode?: string;
  /** Page number, starting from 1 and defaulting to 1. Results in 204 if there are no items on that page. */
  pageNumber?: number;
  /** Page size. If this is not set, the pageNumber will be ignored and all values returned. */
  pageSize?: number;
  /** List of all embedded resources that should be expanded in the response. Possible values are: charges, allowances, transitoryCharges, allowedActions, company, warnings. All other values will be silently ignored. */
  expand?: Get15ItemsItem[];
}

/** Contains response data for the financeFoliosGet operation. */
export type ApaleoFinanceAPIFinanceFoliosGetResponse = FolioListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: FolioListModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceFoliosPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/** Contains response data for the financeFoliosPost operation. */
export type ApaleoFinanceAPIFinanceFoliosPostResponse = ApaleoFinanceAPIFinanceFoliosPostHeaders &
  FolioCreatedModel & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: FolioCreatedModel;
      /** The parsed HTTP response headers. */
      parsedHeaders: ApaleoFinanceAPIFinanceFoliosPostHeaders;
    };
  };

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceFoliosCountGetOptionalParams
  extends coreHttp.OperationOptions {
  /** Filter folio list by property IDs */
  propertyIds?: string[];
  /** Filter folio list by company IDs */
  companyIds?: string[];
  /** Filter folio list by reservation IDs */
  reservationIds?: string[];
  /** Filter folio list by booking IDs */
  bookingIds?: string[];
  /**
   * If set to {true}, only return empty folios (no unmoved [transitory] charges, no unmoved payments, no allowances).
   * If set to {false}, only return non-empty folios
   */
  isEmpty?: boolean;
  /**
   * If set to {true}, only return folios that have been checked out on accounts receivables
   * Otherwise, returns all.
   */
  checkedOutOnAccountsReceivable?: boolean;
  /** If set to {true}, closed folios are filtered out from the result collection */
  excludeClosed?: boolean;
  /** If set to {true}, only return folios that been invoices */
  hasInvoices?: boolean;
  /** The inclusive start time of the date of creation. Mostly useful for external folios<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  createdFrom?: Date;
  /** The exclusive end time of the date of creation. Mostly useful for external folios<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  createdTo?: Date;
  /** If set to {true}, only main folios are returned, otherwise all. */
  onlyMain?: boolean;
  /** The type of the folio */
  typeParam?: FolioType;
  /**
   * Allows filtering external folios by code.
   * Useful when you use external folios with custom codes.
   * Specifying this parameter will ignore the <b>Type</b> parameter and treat as if it would be set to "External" instead.
   */
  externalFolioCode?: string;
}

/** Contains response data for the financeFoliosCountGet operation. */
export type ApaleoFinanceAPIFinanceFoliosCountGetResponse = CountModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: CountModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceFoliosByIdGetOptionalParams
  extends coreHttp.OperationOptions {
  /** List of all embedded resources that should be expanded in the response. Possible values are: folios. All other values will be silently ignored. */
  expand?: string[];
}

/** Contains response data for the financeFoliosByIdGet operation. */
export type ApaleoFinanceAPIFinanceFoliosByIdGetResponse = FolioModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: FolioModel;
  };
};

/** Contains response data for the financeFoliosByIdPatch operation. */
export type ApaleoFinanceAPIFinanceFoliosByIdPatchResponse = MessageItemCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: MessageItemCollection;
  };
};

/** Contains response data for the financeFoliosByIdDelete operation. */
export type ApaleoFinanceAPIFinanceFoliosByIdDeleteResponse = MessageItemCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: MessageItemCollection;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceFolioActionsByFolioIdChargesPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/** Contains response data for the financeFolioActionsByFolioIdChargesPost operation. */
export type ApaleoFinanceAPIFinanceFolioActionsByFolioIdChargesPostResponse = AddedChargeModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AddedChargeModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceFolioActionsByFolioIdTransitoryChargesPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/** Contains response data for the financeFolioActionsByFolioIdTransitoryChargesPost operation. */
export type ApaleoFinanceAPIFinanceFolioActionsByFolioIdTransitoryChargesPostResponse = CreatedSubResourceIdModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: CreatedSubResourceIdModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceFolioActionsByFolioIdCancellationFeePostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/** Contains response data for the financeFolioActionsByFolioIdCancellationFeePost operation. */
export type ApaleoFinanceAPIFinanceFolioActionsByFolioIdCancellationFeePostResponse = AddedChargeModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AddedChargeModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceFolioActionsByFolioIdNoShowFeePostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/** Contains response data for the financeFolioActionsByFolioIdNoShowFeePost operation. */
export type ApaleoFinanceAPIFinanceFolioActionsByFolioIdNoShowFeePostResponse = AddedChargeModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AddedChargeModel;
  };
};

/** Contains response data for the financeFolioActionsByFolioIdClosePut operation. */
export type ApaleoFinanceAPIFinanceFolioActionsByFolioIdClosePutResponse = MessageItemCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: MessageItemCollection;
  };
};

/** Contains response data for the financeFolioActionsByFolioIdReopenPut operation. */
export type ApaleoFinanceAPIFinanceFolioActionsByFolioIdReopenPutResponse = MessageItemCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: MessageItemCollection;
  };
};

/** Contains response data for the financeFolioActionsByFolioIdMoveChargesPut operation. */
export type ApaleoFinanceAPIFinanceFolioActionsByFolioIdMoveChargesPutResponse = MessageItemCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: MessageItemCollection;
  };
};

/** Contains response data for the financeFolioActionsBulkMovePut operation. */
export type ApaleoFinanceAPIFinanceFolioActionsBulkMovePutResponse = MessageItemCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: MessageItemCollection;
  };
};

/** Contains response data for the financeFolioActionsByFolioIdMoveAllChargesPut operation. */
export type ApaleoFinanceAPIFinanceFolioActionsByFolioIdMoveAllChargesPutResponse = MessageItemCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: MessageItemCollection;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceFolioActionsByFolioIdChargesByChargeIdAllowancesPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/** Contains response data for the financeFolioActionsByFolioIdChargesByChargeIdAllowancesPost operation. */
export type ApaleoFinanceAPIFinanceFolioActionsByFolioIdChargesByChargeIdAllowancesPostResponse = CreatedSubResourceIdModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: CreatedSubResourceIdModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceFolioActionsByFolioIdAllowancesPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/** Contains response data for the financeFolioActionsByFolioIdAllowancesPost operation. */
export type ApaleoFinanceAPIFinanceFolioActionsByFolioIdAllowancesPostResponse = CreatedSubResourceIdModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: CreatedSubResourceIdModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceFolioActionsByFolioIdBulkAllowancesPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/** Contains response data for the financeFolioActionsByFolioIdBulkAllowancesPost operation. */
export type ApaleoFinanceAPIFinanceFolioActionsByFolioIdBulkAllowancesPostResponse = BulkAllowanceCreatedModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: BulkAllowanceCreatedModel;
  };
};

/** Contains response data for the financeFolioActionsByFolioIdPostChargesPut operation. */
export type ApaleoFinanceAPIFinanceFolioActionsByFolioIdPostChargesPutResponse = MessageItemCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: MessageItemCollection;
  };
};

/** Contains response data for the financeFolioActionsByFolioIdMovePaymentsPut operation. */
export type ApaleoFinanceAPIFinanceFolioActionsByFolioIdMovePaymentsPutResponse = MessageItemCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: MessageItemCollection;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceFolioActionsByFolioIdCorrectPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/** Contains response data for the financeFolioActionsByFolioIdCorrectPost operation. */
export type ApaleoFinanceAPIFinanceFolioActionsByFolioIdCorrectPostResponse = ApaleoFinanceAPIFinanceFolioActionsByFolioIdCorrectPostHeaders &
  FolioCreatedModel & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: FolioCreatedModel;
      /** The parsed HTTP response headers. */
      parsedHeaders: ApaleoFinanceAPIFinanceFolioActionsByFolioIdCorrectPostHeaders;
    };
  };

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceFolioActionsByFolioIdChargesByChargeIdSplitPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/** Contains response data for the financeFolioActionsByFolioIdChargesByChargeIdSplitPost operation. */
export type ApaleoFinanceAPIFinanceFolioActionsByFolioIdChargesByChargeIdSplitPostResponse = MessageItemCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: MessageItemCollection;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceFolioActionsByFolioIdPaymentsByPaymentIdSplitPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/** Contains response data for the financeFolioActionsByFolioIdPaymentsByPaymentIdSplitPost operation. */
export type ApaleoFinanceAPIFinanceFolioActionsByFolioIdPaymentsByPaymentIdSplitPostResponse = MessageItemCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: MessageItemCollection;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsGetOptionalParams
  extends coreHttp.OperationOptions {
  /** Page number, starting from 1 and defaulting to 1. Results in 204 if there are no items on that page. */
  pageNumber?: number;
  /** Page size. If this is not set, the pageNumber will be ignored and all values returned. */
  pageSize?: number;
  /** Filter payments by one or more status. */
  statusCodes?: PaymentProcessingStatus[];
  /** List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored. */
  expand?: string[];
}

/** Contains response data for the financeFoliosByFolioIdPaymentsGet operation. */
export type ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsGetResponse = PaymentListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: PaymentListModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/** Contains response data for the financeFoliosByFolioIdPaymentsPost operation. */
export type ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsPostResponse = ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsPostHeaders &
  PaymentCreatedModel & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: PaymentCreatedModel;
      /** The parsed HTTP response headers. */
      parsedHeaders: ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsPostHeaders;
    };
  };

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentIdGetOptionalParams
  extends coreHttp.OperationOptions {
  /** List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored. */
  expand?: string[];
}

/** Contains response data for the financeFoliosByFolioIdPaymentsByPaymentIdGet operation. */
export type ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentIdGetResponse = FolioPaymentModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: FolioPaymentModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByTerminalPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/** Contains response data for the financeFoliosByFolioIdPaymentsByTerminalPost operation. */
export type ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByTerminalPostResponse = ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByTerminalPostHeaders &
  PaymentCreatedModel & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: PaymentCreatedModel;
      /** The parsed HTTP response headers. */
      parsedHeaders: ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByTerminalPostHeaders;
    };
  };

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByAuthorizationPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/** Contains response data for the financeFoliosByFolioIdPaymentsByAuthorizationPost operation. */
export type ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByAuthorizationPostResponse = ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByAuthorizationPostHeaders &
  PaymentCreatedModel & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: PaymentCreatedModel;
      /** The parsed HTTP response headers. */
      parsedHeaders: ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByAuthorizationPostHeaders;
    };
  };

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentAccountPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/** Contains response data for the financeFoliosByFolioIdPaymentsByPaymentAccountPost operation. */
export type ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentAccountPostResponse = ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentAccountPostHeaders &
  PaymentCreatedModel & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: PaymentCreatedModel;
      /** The parsed HTTP response headers. */
      parsedHeaders: ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentAccountPostHeaders;
    };
  };

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByLinkPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/** Contains response data for the financeFoliosByFolioIdPaymentsByLinkPost operation. */
export type ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByLinkPostResponse = ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByLinkPostHeaders &
  PaymentCreatedModel & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: PaymentCreatedModel;
      /** The parsed HTTP response headers. */
      parsedHeaders: ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByLinkPostHeaders;
    };
  };

/** Contains response data for the financeFoliosByFolioIdPaymentsByPaymentIdCancelPut operation. */
export type ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentIdCancelPutResponse = MessageItemCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: MessageItemCollection;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceFoliosByFolioIdRefundsGetOptionalParams
  extends coreHttp.OperationOptions {
  /** Page number, starting from 1 and defaulting to 1. Results in 204 if there are no items on that page. */
  pageNumber?: number;
  /** Page size. If this is not set, the pageNumber will be ignored and all values returned. */
  pageSize?: number;
  /** Filter refunds by one or more status */
  statusCodes?: PaymentProcessingStatus[];
}

/** Contains response data for the financeFoliosByFolioIdRefundsGet operation. */
export type ApaleoFinanceAPIFinanceFoliosByFolioIdRefundsGetResponse = RefundListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: RefundListModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceFoliosByFolioIdRefundsPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/** Contains response data for the financeFoliosByFolioIdRefundsPost operation. */
export type ApaleoFinanceAPIFinanceFoliosByFolioIdRefundsPostResponse = ApaleoFinanceAPIFinanceFoliosByFolioIdRefundsPostHeaders &
  RefundCreatedModel & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: RefundCreatedModel;
      /** The parsed HTTP response headers. */
      parsedHeaders: ApaleoFinanceAPIFinanceFoliosByFolioIdRefundsPostHeaders;
    };
  };

/** Contains response data for the financeFoliosByFolioIdRefundsByRefundIdGet operation. */
export type ApaleoFinanceAPIFinanceFoliosByFolioIdRefundsByRefundIdGetResponse = RefundModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: RefundModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/** Contains response data for the financeFoliosByFolioIdPaymentsByPaymentIdRefundsPost operation. */
export type ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPostResponse = ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPostHeaders &
  RefundCreatedModel & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: RefundCreatedModel;
      /** The parsed HTTP response headers. */
      parsedHeaders: ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPostHeaders;
    };
  };

/** Contains response data for the financeInvoicesPreviewPdfGet operation. */
export type ApaleoFinanceAPIFinanceInvoicesPreviewPdfGetResponse = {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse;
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceInvoicesPreviewGetOptionalParams
  extends coreHttp.OperationOptions {
  /** List of all embedded resources that should be expanded in the response. Possible values are: company. All other values will be silently ignored. */
  expand?: string[];
}

/** Contains response data for the financeInvoicesPreviewGet operation. */
export type ApaleoFinanceAPIFinanceInvoicesPreviewGetResponse = PreviewInvoiceModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: PreviewInvoiceModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceInvoicesGetOptionalParams
  extends coreHttp.OperationOptions {
  /** Filter by property IDs */
  propertyIds?: string[];
  /** Filter by company IDs */
  companyIds?: string[];
  /** Filter by reservation IDs */
  reservationIds?: string[];
  /**
   * If set to {true}, only return invoices with an open balance (AR)
   * Otherwise, returns all.
   */
  checkedOutOnAccountsReceivable?: boolean;
  /** Page number, starting from 1 and defaulting to 1. Results in 204 if there are no items on that page. */
  pageNumber?: number;
  /** Page size. If this is not set, the pageNumber will be ignored and all values returned. */
  pageSize?: number;
  /** The invoice number */
  numberParam?: string;
  /** Filter for the outstanding balance for invoices<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7 */
  outstandingPaymentFilter?: string[];
  /** Filter by invoice date<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7 */
  dateFilter?: string[];
  /** Filter by folio IDs */
  folioIds?: string[];
  /** Find invoices for a recipient name or company. Provide at least three characters. */
  nameSearch?: string;
  /**
   * If set to {true}, returns only invoices having no outstanding payments or marked as settled.
   * If set to {false}, returns only invoices with outstanding payment and not marked as settled.
   * If not set, returns all invoices.
   */
  paymentSettled?: boolean;
  /** List of all embedded resources that should be expanded in the response. Possible values are: allowedActions, company. All other values will be silently ignored. */
  expand?: Get12ItemsItem[];
}

/** Contains response data for the financeInvoicesGet operation. */
export type ApaleoFinanceAPIFinanceInvoicesGetResponse = InvoiceListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: InvoiceListModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceInvoicesPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/** Contains response data for the financeInvoicesPost operation. */
export type ApaleoFinanceAPIFinanceInvoicesPostResponse = ApaleoFinanceAPIFinanceInvoicesPostHeaders &
  InvoiceCreatedModel & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: InvoiceCreatedModel;
      /** The parsed HTTP response headers. */
      parsedHeaders: ApaleoFinanceAPIFinanceInvoicesPostHeaders;
    };
  };

/** Contains response data for the financeInvoicesByIdPdfGet operation. */
export type ApaleoFinanceAPIFinanceInvoicesByIdPdfGetResponse = {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse;
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceInvoicesByIdGetOptionalParams
  extends coreHttp.OperationOptions {
  /** List of all embedded resources that should be expanded in the response. Possible values are: company. All other values will be silently ignored. */
  expand?: string[];
}

/** Contains response data for the financeInvoicesByIdGet operation. */
export type ApaleoFinanceAPIFinanceInvoicesByIdGetResponse = InvoiceModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: InvoiceModel;
  };
};

/** Contains response data for the financeInvoiceActionsByIdPayPut operation. */
export type ApaleoFinanceAPIFinanceInvoiceActionsByIdPayPutResponse = MessageItemCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: MessageItemCollection;
  };
};

/** Contains response data for the financeInvoiceActionsByIdCancelPut operation. */
export type ApaleoFinanceAPIFinanceInvoiceActionsByIdCancelPutResponse = MessageItemCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: MessageItemCollection;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceAccountsAggregatePairsDailyPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
  /** Filter transactions by reference (reservation id/external folio id/property id for house folio). */
  reference?: string;
  /** Filter transactions by account number */
  accountNumber?: string;
  /** Filter transactions by type */
  accountType?: FinancialAccountType;
  /** Allows to override the default accounting schema. Only specify this, when you know what you are doing. */
  accountingSchema?: AccountingSchema;
  /** The language for the the report (2-letter ISO code) */
  languageCode?: string;
}

/** Contains response data for the financeAccountsAggregatePairsDailyPost operation. */
export type ApaleoFinanceAPIFinanceAccountsAggregatePairsDailyPostResponse = AccountingTransactionPairListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AccountingTransactionPairListModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceAccountsAggregateDailyPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
  /** Filter transactions by reference (reservation id/external folio id/property id for house folio). */
  reference?: string;
  /** Filter transactions by account number */
  accountNumber?: string;
  /** Filter transactions by type */
  accountType?: FinancialAccountType;
  /** Allows to override the default accounting schema. Only specify this, when you know what you are doing. */
  accountingSchema?: AccountingSchema;
  /** The language for the the report (2-letter ISO code) */
  languageCode?: string;
}

/** Contains response data for the financeAccountsAggregateDailyPost operation. */
export type ApaleoFinanceAPIFinanceAccountsAggregateDailyPostResponse = AggregateTransactionListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AggregateTransactionListModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceAccountsAggregatePostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
  /** Filter transactions by account number */
  accountNumber?: string;
  /** Filter transactions by type */
  accountType?: FinancialAccountType;
  /** Allows to override the default accounting schema. Only specify this, when you know what you are doing. */
  accountingSchema?: AccountingSchema;
  /** The language for the the report */
  languageCode?: string;
}

/** Contains response data for the financeAccountsAggregatePost operation. */
export type ApaleoFinanceAPIFinanceAccountsAggregatePostResponse = AggregateTransactionListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AggregateTransactionListModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceAccountsExportPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
  /** Filter transactions by account number */
  accountNumber?: string;
  /** Filter transactions by type */
  accountType?: FinancialAccountType;
  /** Allows to override the default accounting schema. Only specify this, when you know what you are doing. */
  accountingSchema?: AccountingSchema;
  /** The language for the the report */
  languageCode?: string;
}

/** Contains response data for the financeAccountsExportPost operation. */
export type ApaleoFinanceAPIFinanceAccountsExportPostResponse = AccountingTransactionListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AccountingTransactionListModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceAccountsExportDailyPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
  /** Filter transactions by reference (reservation id/external folio id/property id for house folio). */
  reference?: string;
  /** Filter transactions by account number */
  accountNumber?: string;
  /** Filter transactions by type */
  accountType?: FinancialAccountType;
  /** Allows to override the default accounting schema. Only specify this, when you know what you are doing. */
  accountingSchema?: AccountingSchema;
  /** The language for the the report (2-letter ISO code) */
  languageCode?: string;
}

/** Contains response data for the financeAccountsExportDailyPost operation. */
export type ApaleoFinanceAPIFinanceAccountsExportDailyPostResponse = AccountingTransactionListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AccountingTransactionListModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceAccountsExportGrossDailyPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
  /** Filter transactions by reference (reservation id/external folio id/property id for house folio). */
  reference?: string;
  /** Allows to override the default accounting schema. Only specify this, when you know what you are doing. */
  accountingSchema?: AccountingSchema;
}

/** Contains response data for the financeAccountsExportGrossDailyPost operation. */
export type ApaleoFinanceAPIFinanceAccountsExportGrossDailyPostResponse = ExportGrossTransactionListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ExportGrossTransactionListModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceAccountsSchemaGetOptionalParams
  extends coreHttp.OperationOptions {
  /** Allows to override the default accounting schema. Only specify this, when you know what you are doing. */
  accountingSchema?: AccountingSchema;
  /** The language for the the report */
  languageCode?: string;
  /** How many hierarchy levels to include (between 1 and 4, default is 1). */
  depth?: number;
  /** If set to true, also includes archived accounts. If not set, or set to false, it only returns non-archived accounts */
  includeArchived?: boolean;
}

/** Contains response data for the financeAccountsSchemaGet operation. */
export type ApaleoFinanceAPIFinanceAccountsSchemaGetResponse = ChartOfAccountsModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ChartOfAccountsModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceGlobalAccountsGetOptionalParams
  extends coreHttp.OperationOptions {
  /** Page number, starting from 1 and defaulting to 1. Results in 204 if there are no items on that page. */
  pageNumber?: number;
  /** Page size. If this is not set, the pageNumber will be ignored and all values returned. */
  pageSize?: number;
  /** Allows to override the default accounting schema */
  accountingSchema?: AccountingSchema;
  /** The language for the the report */
  languageCode?: string;
  /** If set to true, also includes archived accounts. If not set, or set to false, it only returns non-archived accounts */
  includeArchived?: boolean;
}

/** Contains response data for the financeGlobalAccountsGet operation. */
export type ApaleoFinanceAPIFinanceGlobalAccountsGetResponse = FinanceAccountListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: FinanceAccountListModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceGuestAccountsGetOptionalParams
  extends coreHttp.OperationOptions {
  /** Page number, starting from 1 and defaulting to 1. Results in 204 if there are no items on that page. */
  pageNumber?: number;
  /** Page size. If this is not set, the pageNumber will be ignored and all values returned. */
  pageSize?: number;
  /** The language for the the report */
  languageCode?: string;
  /** Filter account list by the parent account's number. */
  parent?: string;
}

/** Contains response data for the financeGuestAccountsGet operation. */
export type ApaleoFinanceAPIFinanceGuestAccountsGetResponse = FinanceAccountListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: FinanceAccountListModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceExternalAccountsGetOptionalParams
  extends coreHttp.OperationOptions {
  /** Page number, starting from 1 and defaulting to 1. Results in 204 if there are no items on that page. */
  pageNumber?: number;
  /** Page size. If this is not set, the pageNumber will be ignored and all values returned. */
  pageSize?: number;
  /** The language for the the report */
  languageCode?: string;
  /** Filter account list by the parent account's number. */
  parent?: string;
}

/** Contains response data for the financeExternalAccountsGet operation. */
export type ApaleoFinanceAPIFinanceExternalAccountsGetResponse = FinanceAccountListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: FinanceAccountListModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceAccountsByNumberGetOptionalParams
  extends coreHttp.OperationOptions {
  /** Allows to override the default accounting schema. Only specify this, when you know what you are doing. */
  accountingSchema?: AccountingSchema;
  /** The language for the the report */
  languageCode?: string;
  /** If set to true, also includes archived accounts. If not set, or set to false, it only returns non-archived accounts */
  includeArchived?: boolean;
  /** Limit how many transactions should be included in the view (between 0 and 50, defaults to 0). */
  transactionLimit?: number;
}

/** Contains response data for the financeAccountsByNumberGet operation. */
export type ApaleoFinanceAPIFinanceAccountsByNumberGetResponse = FinanceAccountModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: FinanceAccountModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceAccountsChildAccountsGetOptionalParams
  extends coreHttp.OperationOptions {
  /** Page number, starting from 1 and defaulting to 1. Results in 204 if there are no items on that page. */
  pageNumber?: number;
  /** Page size. If this is not set, the pageNumber will be ignored and all values returned. */
  pageSize?: number;
  /** Allows to override the default accounting schema */
  accountingSchema?: AccountingSchema;
  /** The language for the the report */
  languageCode?: string;
  /** If set to true, also includes archived accounts. If not set, or set to false, it only returns non-archived accounts */
  includeArchived?: boolean;
}

/** Contains response data for the financeAccountsChildAccountsGet operation. */
export type ApaleoFinanceAPIFinanceAccountsChildAccountsGetResponse = FinanceAccountListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: FinanceAccountListModel;
  };
};

/** Contains response data for the financeTypesCurrenciesGet operation. */
export type ApaleoFinanceAPIFinanceTypesCurrenciesGetResponse = CurrencyListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: CurrencyListModel;
  };
};

/** Contains response data for the financeTypesPaymentMethodsGet operation. */
export type ApaleoFinanceAPIFinanceTypesPaymentMethodsGetResponse = PaymentMethodListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: PaymentMethodListModel;
  };
};

/** Contains response data for the financeTypesServiceTypesGet operation. */
export type ApaleoFinanceAPIFinanceTypesServiceTypesGetResponse = ServiceTypeListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ServiceTypeListModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIFinanceTypesVatGetOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * If specified, returns only the VAT types that are in place for this specific date.
   * If nothing specified, returns all VAT types that existed and will exist for the country.
   */
  atDate?: Date;
}

/** Contains response data for the financeTypesVatGet operation. */
export type ApaleoFinanceAPIFinanceTypesVatGetResponse = VatListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: VatListModel;
  };
};

/** Optional parameters. */
export interface ApaleoFinanceAPIOptionalParams
  extends coreHttp.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
