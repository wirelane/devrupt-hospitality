import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
  QueryCollectionFormat
} from "@azure/core-http";
import {
  CreateFolioModel as CreateFolioModelMapper,
  CreateChargeModel as CreateChargeModelMapper,
  CreateTransitoryChargeModel as CreateTransitoryChargeModelMapper,
  MonetaryValueModel as MonetaryValueModelMapper,
  MoveChargesRequest as MoveChargesRequestMapper,
  BulkMoveRequest as BulkMoveRequestMapper,
  MoveAllChargesRequest as MoveAllChargesRequestMapper,
  CreateAllowanceForChargeModel as CreateAllowanceForChargeModelMapper,
  CreateAllowanceForFolioModel as CreateAllowanceForFolioModelMapper,
  CreateAllowanceBulkModel as CreateAllowanceBulkModelMapper,
  MovePaymentsRequest as MovePaymentsRequestMapper,
  CorrectFolioRequest as CorrectFolioRequestMapper,
  SplitChargeRequest as SplitChargeRequestMapper,
  SplitPaymentRequest as SplitPaymentRequestMapper,
  CreateCustomPaymentRequest as CreateCustomPaymentRequestMapper,
  CreateTerminalPaymentRequest as CreateTerminalPaymentRequestMapper,
  CreateAuthorizationPaymentRequest as CreateAuthorizationPaymentRequestMapper,
  CreateAccountPaymentRequest as CreateAccountPaymentRequestMapper,
  CreatePaymentLinkRequest as CreatePaymentLinkRequestMapper,
  CreateFolioRefundRequest as CreateFolioRefundRequestMapper,
  CreatePaymentRefundRequest as CreatePaymentRefundRequestMapper,
  CreateInvoicePdfRequest as CreateInvoicePdfRequestMapper,
  PayInvoiceRequest as PayInvoiceRequestMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const propertyIds: OperationQueryParameter = {
  parameterPath: ["options", "propertyIds"],
  mapper: {
    serializedName: "propertyIds",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: QueryCollectionFormat.Csv
};

export const companyIds: OperationQueryParameter = {
  parameterPath: ["options", "companyIds"],
  mapper: {
    serializedName: "companyIds",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: QueryCollectionFormat.Csv
};

export const reservationIds: OperationQueryParameter = {
  parameterPath: ["options", "reservationIds"],
  mapper: {
    serializedName: "reservationIds",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: QueryCollectionFormat.Csv
};

export const bookingIds: OperationQueryParameter = {
  parameterPath: ["options", "bookingIds"],
  mapper: {
    serializedName: "bookingIds",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: QueryCollectionFormat.Csv
};

export const isEmpty: OperationQueryParameter = {
  parameterPath: ["options", "isEmpty"],
  mapper: {
    serializedName: "isEmpty",
    type: {
      name: "Boolean"
    }
  }
};

export const checkedOutOnAccountsReceivable: OperationQueryParameter = {
  parameterPath: ["options", "checkedOutOnAccountsReceivable"],
  mapper: {
    serializedName: "checkedOutOnAccountsReceivable",
    type: {
      name: "Boolean"
    }
  }
};

export const excludeClosed: OperationQueryParameter = {
  parameterPath: ["options", "excludeClosed"],
  mapper: {
    serializedName: "excludeClosed",
    type: {
      name: "Boolean"
    }
  }
};

export const hasInvoices: OperationQueryParameter = {
  parameterPath: ["options", "hasInvoices"],
  mapper: {
    serializedName: "hasInvoices",
    type: {
      name: "Boolean"
    }
  }
};

export const createdFrom: OperationQueryParameter = {
  parameterPath: ["options", "createdFrom"],
  mapper: {
    serializedName: "createdFrom",
    type: {
      name: "DateTime"
    }
  }
};

export const createdTo: OperationQueryParameter = {
  parameterPath: ["options", "createdTo"],
  mapper: {
    serializedName: "createdTo",
    type: {
      name: "DateTime"
    }
  }
};

export const onlyMain: OperationQueryParameter = {
  parameterPath: ["options", "onlyMain"],
  mapper: {
    serializedName: "onlyMain",
    type: {
      name: "Boolean"
    }
  }
};

export const typeParam: OperationQueryParameter = {
  parameterPath: ["options", "typeParam"],
  mapper: {
    serializedName: "type",
    type: {
      name: "Enum",
      allowedValues: ["House", "Guest", "External"]
    }
  }
};

export const externalFolioCode: OperationQueryParameter = {
  parameterPath: ["options", "externalFolioCode"],
  mapper: {
    serializedName: "externalFolioCode",
    type: {
      name: "String"
    }
  }
};

export const pageNumber: OperationQueryParameter = {
  parameterPath: ["options", "pageNumber"],
  mapper: {
    defaultValue: 1,
    serializedName: "pageNumber",
    type: {
      name: "Number"
    }
  }
};

export const pageSize: OperationQueryParameter = {
  parameterPath: ["options", "pageSize"],
  mapper: {
    defaultValue: 100,
    serializedName: "pageSize",
    type: {
      name: "Number"
    }
  }
};

export const expand: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "expand",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: QueryCollectionFormat.Csv
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: CreateFolioModelMapper
};

export const idempotencyKey: OperationParameter = {
  parameterPath: ["options", "idempotencyKey"],
  mapper: {
    serializedName: "Idempotency-Key",
    type: {
      name: "String"
    }
  }
};

export const id: OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    serializedName: "id",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const expand1: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "expand",
    type: {
      name: "Sequence",
      element: {
        defaultValue: "folios",
        isConstant: true,
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: QueryCollectionFormat.Csv
};

export const body1: OperationParameter = {
  parameterPath: "body",
  mapper: {
    serializedName: "body",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Composite",
          className: "Operation"
        }
      }
    }
  }
};

export const body2: OperationParameter = {
  parameterPath: "body",
  mapper: CreateChargeModelMapper
};

export const folioId: OperationURLParameter = {
  parameterPath: "folioId",
  mapper: {
    serializedName: "folioId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body3: OperationParameter = {
  parameterPath: "body",
  mapper: CreateTransitoryChargeModelMapper
};

export const body4: OperationParameter = {
  parameterPath: "body",
  mapper: MonetaryValueModelMapper
};

export const body5: OperationParameter = {
  parameterPath: "body",
  mapper: MoveChargesRequestMapper
};

export const body6: OperationParameter = {
  parameterPath: "body",
  mapper: BulkMoveRequestMapper
};

export const body7: OperationParameter = {
  parameterPath: "body",
  mapper: MoveAllChargesRequestMapper
};

export const body8: OperationParameter = {
  parameterPath: "body",
  mapper: CreateAllowanceForChargeModelMapper
};

export const chargeId: OperationURLParameter = {
  parameterPath: "chargeId",
  mapper: {
    serializedName: "chargeId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body9: OperationParameter = {
  parameterPath: "body",
  mapper: CreateAllowanceForFolioModelMapper
};

export const body10: OperationParameter = {
  parameterPath: "body",
  mapper: CreateAllowanceBulkModelMapper
};

export const body11: OperationParameter = {
  parameterPath: "body",
  mapper: MovePaymentsRequestMapper
};

export const body12: OperationParameter = {
  parameterPath: "body",
  mapper: CorrectFolioRequestMapper
};

export const body13: OperationParameter = {
  parameterPath: "body",
  mapper: SplitChargeRequestMapper
};

export const body14: OperationParameter = {
  parameterPath: "body",
  mapper: SplitPaymentRequestMapper
};

export const paymentId: OperationURLParameter = {
  parameterPath: "paymentId",
  mapper: {
    serializedName: "paymentId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const statusCodes: OperationQueryParameter = {
  parameterPath: ["options", "statusCodes"],
  mapper: {
    serializedName: "statusCodes",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Enum",
          allowedValues: ["Pending", "Success", "Failure", "Canceled"]
        }
      }
    }
  },
  collectionFormat: QueryCollectionFormat.Csv
};

export const expand2: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "expand",
    type: {
      name: "Sequence",
      element: {
        defaultValue: "actions",
        isConstant: true,
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: QueryCollectionFormat.Csv
};

export const body15: OperationParameter = {
  parameterPath: "body",
  mapper: CreateCustomPaymentRequestMapper
};

export const body16: OperationParameter = {
  parameterPath: "body",
  mapper: CreateTerminalPaymentRequestMapper
};

export const body17: OperationParameter = {
  parameterPath: "body",
  mapper: CreateAuthorizationPaymentRequestMapper
};

export const body18: OperationParameter = {
  parameterPath: "body",
  mapper: CreateAccountPaymentRequestMapper
};

export const body19: OperationParameter = {
  parameterPath: "body",
  mapper: CreatePaymentLinkRequestMapper
};

export const body20: OperationParameter = {
  parameterPath: "body",
  mapper: CreateFolioRefundRequestMapper
};

export const refundId: OperationURLParameter = {
  parameterPath: "refundId",
  mapper: {
    serializedName: "refundId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body21: OperationParameter = {
  parameterPath: "body",
  mapper: CreatePaymentRefundRequestMapper
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/pdf, application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const languageCode: OperationQueryParameter = {
  parameterPath: "languageCode",
  mapper: {
    serializedName: "languageCode",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const folioId1: OperationQueryParameter = {
  parameterPath: "folioId",
  mapper: {
    serializedName: "folioId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const expand3: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "expand",
    type: {
      name: "Sequence",
      element: {
        defaultValue: "company",
        isConstant: true,
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: QueryCollectionFormat.Csv
};

export const numberParam: OperationQueryParameter = {
  parameterPath: ["options", "numberParam"],
  mapper: {
    serializedName: "number",
    type: {
      name: "String"
    }
  }
};

export const outstandingPaymentFilter: OperationQueryParameter = {
  parameterPath: ["options", "outstandingPaymentFilter"],
  mapper: {
    serializedName: "outstandingPaymentFilter",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: QueryCollectionFormat.Csv
};

export const dateFilter: OperationQueryParameter = {
  parameterPath: ["options", "dateFilter"],
  mapper: {
    serializedName: "dateFilter",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: QueryCollectionFormat.Csv
};

export const folioIds: OperationQueryParameter = {
  parameterPath: ["options", "folioIds"],
  mapper: {
    serializedName: "folioIds",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: QueryCollectionFormat.Csv
};

export const nameSearch: OperationQueryParameter = {
  parameterPath: ["options", "nameSearch"],
  mapper: {
    serializedName: "nameSearch",
    type: {
      name: "String"
    }
  }
};

export const paymentSettled: OperationQueryParameter = {
  parameterPath: ["options", "paymentSettled"],
  mapper: {
    serializedName: "paymentSettled",
    type: {
      name: "Boolean"
    }
  }
};

export const expand4: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "expand",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: QueryCollectionFormat.Csv
};

export const body22: OperationParameter = {
  parameterPath: "body",
  mapper: CreateInvoicePdfRequestMapper
};

export const body23: OperationParameter = {
  parameterPath: "body",
  mapper: PayInvoiceRequestMapper
};

export const propertyId: OperationQueryParameter = {
  parameterPath: "propertyId",
  mapper: {
    serializedName: "propertyId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const fromParam: OperationQueryParameter = {
  parameterPath: "fromParam",
  mapper: {
    serializedName: "from",
    required: true,
    type: {
      name: "Date"
    }
  }
};

export const to: OperationQueryParameter = {
  parameterPath: "to",
  mapper: {
    serializedName: "to",
    required: true,
    type: {
      name: "Date"
    }
  }
};

export const reference: OperationQueryParameter = {
  parameterPath: ["options", "reference"],
  mapper: {
    serializedName: "reference",
    type: {
      name: "String"
    }
  }
};

export const accountNumber: OperationQueryParameter = {
  parameterPath: ["options", "accountNumber"],
  mapper: {
    serializedName: "accountNumber",
    type: {
      name: "String"
    }
  }
};

export const accountType: OperationQueryParameter = {
  parameterPath: ["options", "accountType"],
  mapper: {
    serializedName: "accountType",
    type: {
      name: "Enum",
      allowedValues: [
        "Revenues",
        "Payments",
        "Liabilities",
        "Receivables",
        "Vat",
        "House",
        "AccountsReceivable",
        "CityTaxes",
        "TransitoryItems",
        "VatOnLiabilities"
      ]
    }
  }
};

export const accountingSchema: OperationQueryParameter = {
  parameterPath: ["options", "accountingSchema"],
  mapper: {
    serializedName: "accountingSchema",
    type: {
      name: "Enum",
      allowedValues: ["Simple", "Extended"]
    }
  }
};

export const languageCode1: OperationQueryParameter = {
  parameterPath: ["options", "languageCode"],
  mapper: {
    serializedName: "languageCode",
    type: {
      name: "String"
    }
  }
};

export const fromParam1: OperationQueryParameter = {
  parameterPath: "fromParam",
  mapper: {
    serializedName: "from",
    required: true,
    type: {
      name: "DateTime"
    }
  }
};

export const to1: OperationQueryParameter = {
  parameterPath: "to",
  mapper: {
    serializedName: "to",
    required: true,
    type: {
      name: "DateTime"
    }
  }
};

export const depth: OperationQueryParameter = {
  parameterPath: ["options", "depth"],
  mapper: {
    constraints: {
      InclusiveMaximum: 2147483647,
      InclusiveMinimum: 1
    },
    serializedName: "depth",
    type: {
      name: "Number"
    }
  }
};

export const includeArchived: OperationQueryParameter = {
  parameterPath: ["options", "includeArchived"],
  mapper: {
    serializedName: "includeArchived",
    type: {
      name: "Boolean"
    }
  }
};

export const parent: OperationQueryParameter = {
  parameterPath: "parent",
  mapper: {
    serializedName: "parent",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const reservationId: OperationQueryParameter = {
  parameterPath: "reservationId",
  mapper: {
    serializedName: "reservationId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parent1: OperationQueryParameter = {
  parameterPath: ["options", "parent"],
  mapper: {
    serializedName: "parent",
    type: {
      name: "String"
    }
  }
};

export const numberParam1: OperationURLParameter = {
  parameterPath: "numberParam",
  mapper: {
    serializedName: "number",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const transactionLimit: OperationQueryParameter = {
  parameterPath: ["options", "transactionLimit"],
  mapper: {
    constraints: {
      InclusiveMaximum: 100,
      InclusiveMinimum: 0
    },
    serializedName: "transactionLimit",
    type: {
      name: "Number"
    }
  }
};

export const isoCountryCode: OperationQueryParameter = {
  parameterPath: "isoCountryCode",
  mapper: {
    serializedName: "isoCountryCode",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const atDate: OperationQueryParameter = {
  parameterPath: ["options", "atDate"],
  mapper: {
    serializedName: "atDate",
    type: {
      name: "Date"
    }
  }
};
