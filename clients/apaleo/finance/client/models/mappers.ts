import * as coreHttp from "@azure/core-http";

export const FolioListModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FolioListModel",
    modelProperties: {
      folios: {
        serializedName: "folios",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FolioItemModel"
            }
          }
        }
      },
      count: {
        serializedName: "count",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const FolioItemModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FolioItemModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      created: {
        serializedName: "created",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      updated: {
        serializedName: "updated",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: ["House", "Guest", "External"]
        }
      },
      debitor: {
        serializedName: "debitor",
        type: {
          name: "Composite",
          className: "FolioDebitorModel"
        }
      },
      closingDate: {
        serializedName: "closingDate",
        type: {
          name: "Date"
        }
      },
      isMainFolio: {
        serializedName: "isMainFolio",
        type: {
          name: "Boolean"
        }
      },
      isEmpty: {
        serializedName: "isEmpty",
        type: {
          name: "Boolean"
        }
      },
      reservation: {
        serializedName: "reservation",
        type: {
          name: "Composite",
          className: "EmbeddedReservationModel"
        }
      },
      company: {
        serializedName: "company",
        type: {
          name: "Composite",
          className: "EmbeddedCompanyModel"
        }
      },
      balance: {
        serializedName: "balance",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      checkedOutOnAccountsReceivable: {
        serializedName: "checkedOutOnAccountsReceivable",
        type: {
          name: "Boolean"
        }
      },
      folioWarnings: {
        serializedName: "folioWarnings",
        type: {
          name: "Sequence",
          element: {
            defaultValue: "IncompleteBillingAddress",
            isConstant: true,
            type: {
              name: "String"
            }
          }
        }
      },
      allowedActions: {
        serializedName: "allowedActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Enum",
              allowedValues: [
                "AddCharge",
                "AddAllowance",
                "AddCancellationFee",
                "AddNoShowFee",
                "AddPayment",
                "AddRefund",
                "CheckoutOnAr",
                "Close",
                "PostOpenCharges",
                "CorrectFolio",
                "ChangeAddress",
                "ChangeAddressWithSimpleDebitor",
                "Delete",
                "Reopen",
                "CreateInvoice",
                "CreateAdvanceInvoice",
                "CancelLastInvoice",
                "CreateInvoiceWithSimpleDebitor",
                "CreatePrepaymentNotice"
              ]
            }
          }
        }
      },
      relatedInvoices: {
        serializedName: "relatedInvoices",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EmbeddedInvoiceModel"
            }
          }
        }
      },
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["Open", "Closed", "ClosedWithInvoice"]
        }
      },
      charges: {
        serializedName: "charges",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChargeModel"
            }
          }
        }
      },
      allowances: {
        serializedName: "allowances",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AllowanceModel"
            }
          }
        }
      },
      transitoryCharges: {
        serializedName: "transitoryCharges",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TransitoryChargeModel"
            }
          }
        }
      }
    }
  }
};

export const FolioDebitorModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FolioDebitorModel",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "Enum",
          allowedValues: ["Mr", "Ms", "Dr", "Prof", "Other"]
        }
      },
      firstName: {
        serializedName: "firstName",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      address: {
        serializedName: "address",
        type: {
          name: "Composite",
          className: "NonStrictAddressModel"
        }
      },
      company: {
        serializedName: "company",
        type: {
          name: "Composite",
          className: "CompanyInfoModel"
        }
      },
      reference: {
        constraints: {
          MaxLength: 80
        },
        serializedName: "reference",
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NonStrictAddressModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NonStrictAddressModel",
    modelProperties: {
      addressLine1: {
        serializedName: "addressLine1",
        type: {
          name: "String"
        }
      },
      addressLine2: {
        serializedName: "addressLine2",
        type: {
          name: "String"
        }
      },
      postalCode: {
        serializedName: "postalCode",
        type: {
          name: "String"
        }
      },
      city: {
        serializedName: "city",
        type: {
          name: "String"
        }
      },
      regionCode: {
        serializedName: "regionCode",
        type: {
          name: "String"
        }
      },
      countryCode: {
        serializedName: "countryCode",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CompanyInfoModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CompanyInfoModel",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      taxId: {
        serializedName: "taxId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EmbeddedReservationModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmbeddedReservationModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      bookingId: {
        serializedName: "bookingId",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EmbeddedCompanyModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmbeddedCompanyModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      canCheckOutOnAr: {
        serializedName: "canCheckOutOnAr",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const MonetaryValueModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MonetaryValueModel",
    modelProperties: {
      amount: {
        serializedName: "amount",
        required: true,
        type: {
          name: "Number"
        }
      },
      currency: {
        serializedName: "currency",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EmbeddedInvoiceModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmbeddedInvoiceModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ChargeModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChargeModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      serviceType: {
        serializedName: "serviceType",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Other",
            "Accommodation",
            "FoodAndBeverages",
            "CancellationFees",
            "NoShow",
            "CityTax"
          ]
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      translatedNames: {
        serializedName: "translatedNames",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      isPosted: {
        serializedName: "isPosted",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      serviceDate: {
        serializedName: "serviceDate",
        required: true,
        type: {
          name: "Date"
        }
      },
      created: {
        serializedName: "created",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      movedFrom: {
        serializedName: "movedFrom",
        type: {
          name: "Composite",
          className: "EmbeddedFolioModel"
        }
      },
      movedTo: {
        serializedName: "movedTo",
        type: {
          name: "Composite",
          className: "EmbeddedFolioModel"
        }
      },
      movedReason: {
        serializedName: "movedReason",
        type: {
          name: "String"
        }
      },
      amount: {
        serializedName: "amount",
        type: {
          name: "Composite",
          className: "AmountModel"
        }
      },
      receipt: {
        serializedName: "receipt",
        type: {
          name: "String"
        }
      },
      groupId: {
        serializedName: "groupId",
        type: {
          name: "String"
        }
      },
      subAccountId: {
        serializedName: "subAccountId",
        type: {
          name: "String"
        }
      },
      quantity: {
        serializedName: "quantity",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const EmbeddedFolioModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmbeddedFolioModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      debitor: {
        serializedName: "debitor",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AmountModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AmountModel",
    modelProperties: {
      grossAmount: {
        serializedName: "grossAmount",
        required: true,
        type: {
          name: "Number"
        }
      },
      netAmount: {
        serializedName: "netAmount",
        required: true,
        type: {
          name: "Number"
        }
      },
      vatType: {
        serializedName: "vatType",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Null",
            "VeryReduced",
            "Reduced",
            "Normal",
            "Without",
            "Special",
            "ReducedCovid19",
            "NormalCovid19"
          ]
        }
      },
      vatPercent: {
        serializedName: "vatPercent",
        required: true,
        type: {
          name: "Number"
        }
      },
      currency: {
        serializedName: "currency",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AllowanceModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AllowanceModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      amount: {
        serializedName: "amount",
        type: {
          name: "Composite",
          className: "AmountModel"
        }
      },
      reason: {
        serializedName: "reason",
        required: true,
        type: {
          name: "String"
        }
      },
      serviceType: {
        serializedName: "serviceType",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Other",
            "Accommodation",
            "FoodAndBeverages",
            "CancellationFees",
            "NoShow",
            "CityTax"
          ]
        }
      },
      serviceDate: {
        serializedName: "serviceDate",
        required: true,
        type: {
          name: "Date"
        }
      },
      created: {
        serializedName: "created",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      movedFrom: {
        serializedName: "movedFrom",
        type: {
          name: "Composite",
          className: "EmbeddedFolioModel"
        }
      },
      movedTo: {
        serializedName: "movedTo",
        type: {
          name: "Composite",
          className: "EmbeddedFolioModel"
        }
      },
      movedReason: {
        serializedName: "movedReason",
        type: {
          name: "String"
        }
      },
      sourceChargeId: {
        serializedName: "sourceChargeId",
        type: {
          name: "String"
        }
      },
      subAccountId: {
        serializedName: "subAccountId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TransitoryChargeModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TransitoryChargeModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      amount: {
        serializedName: "amount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      serviceType: {
        serializedName: "serviceType",
        type: {
          name: "Enum",
          allowedValues: [
            "Other",
            "Accommodation",
            "FoodAndBeverages",
            "CancellationFees",
            "NoShow",
            "CityTax"
          ]
        }
      },
      serviceDate: {
        serializedName: "serviceDate",
        required: true,
        type: {
          name: "Date"
        }
      },
      created: {
        serializedName: "created",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      receipt: {
        serializedName: "receipt",
        type: {
          name: "String"
        }
      },
      movedFrom: {
        serializedName: "movedFrom",
        type: {
          name: "Composite",
          className: "EmbeddedFolioModel"
        }
      },
      movedTo: {
        serializedName: "movedTo",
        type: {
          name: "Composite",
          className: "EmbeddedFolioModel"
        }
      },
      movedReason: {
        serializedName: "movedReason",
        type: {
          name: "String"
        }
      },
      quantity: {
        serializedName: "quantity",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const MessageItemCollection: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MessageItemCollection",
    modelProperties: {
      messages: {
        serializedName: "messages",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const CreateFolioModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateFolioModel",
    modelProperties: {
      reservationId: {
        serializedName: "reservationId",
        type: {
          name: "String"
        }
      },
      companyId: {
        serializedName: "companyId",
        type: {
          name: "String"
        }
      },
      debitor: {
        serializedName: "debitor",
        type: {
          name: "Composite",
          className: "FolioDebitorModel"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: ["Guest", "External"]
        }
      },
      propertyId: {
        serializedName: "propertyId",
        type: {
          name: "String"
        }
      },
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FolioCreatedModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FolioCreatedModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CountModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CountModel",
    modelProperties: {
      count: {
        serializedName: "count",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const FolioModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FolioModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      created: {
        serializedName: "created",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      updated: {
        serializedName: "updated",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: ["House", "Guest", "External"]
        }
      },
      debitor: {
        serializedName: "debitor",
        type: {
          name: "Composite",
          className: "FolioDebitorModel"
        }
      },
      closingDate: {
        serializedName: "closingDate",
        type: {
          name: "Date"
        }
      },
      reservation: {
        serializedName: "reservation",
        type: {
          name: "Composite",
          className: "EmbeddedReservationModel"
        }
      },
      company: {
        serializedName: "company",
        type: {
          name: "Composite",
          className: "EmbeddedCompanyModel"
        }
      },
      property: {
        serializedName: "property",
        type: {
          name: "Composite",
          className: "EmbeddedPropertyModel"
        }
      },
      charges: {
        serializedName: "charges",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChargeModel"
            }
          }
        }
      },
      transitoryCharges: {
        serializedName: "transitoryCharges",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TransitoryChargeModel"
            }
          }
        }
      },
      payments: {
        serializedName: "payments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PaymentModel"
            }
          }
        }
      },
      pendingPayments: {
        serializedName: "pendingPayments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PendingPaymentModel"
            }
          }
        }
      },
      allowances: {
        serializedName: "allowances",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AllowanceModel"
            }
          }
        }
      },
      balance: {
        serializedName: "balance",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      checkedOutOnAccountsReceivable: {
        serializedName: "checkedOutOnAccountsReceivable",
        type: {
          name: "Boolean"
        }
      },
      isMainFolio: {
        serializedName: "isMainFolio",
        type: {
          name: "Boolean"
        }
      },
      isEmpty: {
        serializedName: "isEmpty",
        type: {
          name: "Boolean"
        }
      },
      relatedFolios: {
        serializedName: "relatedFolios",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EmbeddedFolioModel"
            }
          }
        }
      },
      relatedInvoices: {
        serializedName: "relatedInvoices",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EmbeddedInvoiceModel"
            }
          }
        }
      },
      folioWarnings: {
        serializedName: "folioWarnings",
        type: {
          name: "Sequence",
          element: {
            defaultValue: "IncompleteBillingAddress",
            isConstant: true,
            type: {
              name: "String"
            }
          }
        }
      },
      allowedActions: {
        serializedName: "allowedActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Enum",
              allowedValues: [
                "AddCharge",
                "AddAllowance",
                "AddCancellationFee",
                "AddNoShowFee",
                "AddPayment",
                "AddRefund",
                "CheckoutOnAr",
                "Close",
                "PostOpenCharges",
                "CorrectFolio",
                "ChangeAddress",
                "ChangeAddressWithSimpleDebitor",
                "Delete",
                "Reopen",
                "CreateInvoice",
                "CreateAdvanceInvoice",
                "CancelLastInvoice",
                "CreateInvoiceWithSimpleDebitor",
                "CreatePrepaymentNotice"
              ]
            }
          }
        }
      },
      allowedPayment: {
        serializedName: "allowedPayment",
        type: {
          name: "Number"
        }
      },
      maximumAllowance: {
        serializedName: "maximumAllowance",
        type: {
          name: "Number"
        }
      },
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["Open", "Closed", "ClosedWithInvoice"]
        }
      }
    }
  }
};

export const EmbeddedPropertyModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmbeddedPropertyModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PaymentModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PaymentModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      method: {
        serializedName: "method",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Cash",
            "BankTransfer",
            "CreditCard",
            "Invoice",
            "Amex",
            "VisaCredit",
            "VisaDebit",
            "MasterCard",
            "MasterCardDebit",
            "Maestro",
            "GiroCard",
            "DiscoverCard",
            "Diners",
            "Jcb",
            "BookingCom",
            "VPay",
            "PayPal",
            "Postcard",
            "Reka",
            "Twint",
            "Lunchcheck",
            "Voucher",
            "ChinaUnionPay",
            "Other",
            "Cheque",
            "Airbnb",
            "HolidayCheck",
            "PspCash",
            "PspDebit",
            "PspBanking",
            "PspOpenInvoice",
            "PspWallet"
          ]
        }
      },
      amount: {
        serializedName: "amount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      externalReference: {
        serializedName: "externalReference",
        type: {
          name: "Composite",
          className: "ExternalReference"
        }
      },
      receipt: {
        serializedName: "receipt",
        type: {
          name: "String"
        }
      },
      paymentDate: {
        serializedName: "paymentDate",
        type: {
          name: "DateTime"
        }
      },
      movedFrom: {
        serializedName: "movedFrom",
        type: {
          name: "Composite",
          className: "EmbeddedFolioModel"
        }
      },
      movedTo: {
        serializedName: "movedTo",
        type: {
          name: "Composite",
          className: "EmbeddedFolioModel"
        }
      },
      movedReason: {
        serializedName: "movedReason",
        type: {
          name: "String"
        }
      },
      sourcePaymentId: {
        serializedName: "sourcePaymentId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExternalReference: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExternalReference",
    modelProperties: {
      merchantReference: {
        serializedName: "merchantReference",
        required: true,
        type: {
          name: "String"
        }
      },
      pspReference: {
        serializedName: "pspReference",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PendingPaymentModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PendingPaymentModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      amount: {
        serializedName: "amount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      terminalId: {
        serializedName: "terminalId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "any"
        }
      },
      path: {
        serializedName: "path",
        type: {
          name: "String"
        }
      },
      op: {
        serializedName: "op",
        type: {
          name: "String"
        }
      },
      from: {
        serializedName: "from",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreateChargeModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateChargeModel",
    modelProperties: {
      serviceType: {
        serializedName: "serviceType",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Other",
            "Accommodation",
            "FoodAndBeverages",
            "CityTax"
          ]
        }
      },
      vatType: {
        serializedName: "vatType",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Null",
            "VeryReduced",
            "Reduced",
            "Normal",
            "Without",
            "Special",
            "ReducedCovid19",
            "NormalCovid19"
          ]
        }
      },
      subAccountId: {
        serializedName: "subAccountId",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      amount: {
        serializedName: "amount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      receipt: {
        serializedName: "receipt",
        type: {
          name: "String"
        }
      },
      quantity: {
        serializedName: "quantity",
        type: {
          name: "Number"
        }
      },
      businessDate: {
        serializedName: "businessDate",
        type: {
          name: "Date"
        }
      }
    }
  }
};

export const AddedChargeModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddedChargeModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      feeChargeIds: {
        serializedName: "feeChargeIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const CreateTransitoryChargeModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateTransitoryChargeModel",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      amount: {
        serializedName: "amount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      receipt: {
        serializedName: "receipt",
        type: {
          name: "String"
        }
      },
      groupId: {
        serializedName: "groupId",
        type: {
          name: "String"
        }
      },
      serviceType: {
        serializedName: "serviceType",
        type: {
          name: "Enum",
          allowedValues: [
            "Other",
            "Accommodation",
            "FoodAndBeverages",
            "CityTax"
          ]
        }
      },
      quantity: {
        serializedName: "quantity",
        type: {
          name: "Number"
        }
      },
      businessDate: {
        serializedName: "businessDate",
        type: {
          name: "Date"
        }
      }
    }
  }
};

export const CreatedSubResourceIdModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreatedSubResourceIdModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MoveChargesRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MoveChargesRequest",
    modelProperties: {
      targetFolioId: {
        serializedName: "targetFolioId",
        required: true,
        type: {
          name: "String"
        }
      },
      reason: {
        serializedName: "reason",
        required: true,
        type: {
          name: "String"
        }
      },
      chargeIds: {
        serializedName: "chargeIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      allowanceIds: {
        serializedName: "allowanceIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      transitoryChargeIds: {
        serializedName: "transitoryChargeIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const BulkMoveRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BulkMoveRequest",
    modelProperties: {
      items: {
        serializedName: "items",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BulkMoveItemRequest"
            }
          }
        }
      },
      reason: {
        serializedName: "reason",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BulkMoveItemRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BulkMoveItemRequest",
    modelProperties: {
      sourceFolioId: {
        serializedName: "sourceFolioId",
        required: true,
        type: {
          name: "String"
        }
      },
      targetFolioId: {
        serializedName: "targetFolioId",
        required: true,
        type: {
          name: "String"
        }
      },
      chargeIds: {
        serializedName: "chargeIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const MoveAllChargesRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MoveAllChargesRequest",
    modelProperties: {
      targetFolioId: {
        serializedName: "targetFolioId",
        required: true,
        type: {
          name: "String"
        }
      },
      reason: {
        serializedName: "reason",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreateAllowanceForChargeModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateAllowanceForChargeModel",
    modelProperties: {
      reason: {
        serializedName: "reason",
        required: true,
        type: {
          name: "String"
        }
      },
      amount: {
        serializedName: "amount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      }
    }
  }
};

export const CreateAllowanceForFolioModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateAllowanceForFolioModel",
    modelProperties: {
      serviceType: {
        serializedName: "serviceType",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Other",
            "Accommodation",
            "FoodAndBeverages",
            "CityTax"
          ]
        }
      },
      vatType: {
        serializedName: "vatType",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Null",
            "VeryReduced",
            "Reduced",
            "Normal",
            "Without",
            "Special",
            "ReducedCovid19",
            "NormalCovid19"
          ]
        }
      },
      subAccountId: {
        serializedName: "subAccountId",
        type: {
          name: "String"
        }
      },
      reason: {
        serializedName: "reason",
        required: true,
        type: {
          name: "String"
        }
      },
      amount: {
        serializedName: "amount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      }
    }
  }
};

export const CreateAllowanceBulkModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateAllowanceBulkModel",
    modelProperties: {
      items: {
        serializedName: "items",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CreateAllowanceBulkItemModel"
            }
          }
        }
      },
      reason: {
        serializedName: "reason",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreateAllowanceBulkItemModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateAllowanceBulkItemModel",
    modelProperties: {
      chargeId: {
        serializedName: "chargeId",
        required: true,
        type: {
          name: "String"
        }
      },
      amount: {
        serializedName: "amount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      }
    }
  }
};

export const BulkAllowanceCreatedModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BulkAllowanceCreatedModel",
    modelProperties: {
      items: {
        serializedName: "items",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BulkAllowanceCreatedItemModel"
            }
          }
        }
      }
    }
  }
};

export const BulkAllowanceCreatedItemModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BulkAllowanceCreatedItemModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      sourceChargeId: {
        serializedName: "sourceChargeId",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MovePaymentsRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MovePaymentsRequest",
    modelProperties: {
      targetFolioId: {
        serializedName: "targetFolioId",
        required: true,
        type: {
          name: "String"
        }
      },
      reason: {
        serializedName: "reason",
        required: true,
        type: {
          name: "String"
        }
      },
      paymentIds: {
        serializedName: "paymentIds",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const CorrectFolioRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CorrectFolioRequest",
    modelProperties: {
      reason: {
        serializedName: "reason",
        required: true,
        type: {
          name: "String"
        }
      },
      chargeIds: {
        serializedName: "chargeIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      allowanceIds: {
        serializedName: "allowanceIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      transitoryChargeIds: {
        serializedName: "transitoryChargeIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const SplitChargeRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SplitChargeRequest",
    modelProperties: {
      percent: {
        serializedName: "percent",
        type: {
          name: "Number"
        }
      },
      amount: {
        serializedName: "amount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["ByPercent", "ByAmount"]
        }
      }
    }
  }
};

export const SplitPaymentRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SplitPaymentRequest",
    modelProperties: {
      percent: {
        serializedName: "percent",
        type: {
          name: "Number"
        }
      },
      amount: {
        serializedName: "amount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["ByPercent", "ByAmount"]
        }
      }
    }
  }
};

export const PaymentListModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PaymentListModel",
    modelProperties: {
      payments: {
        serializedName: "payments",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FolioPaymentModel"
            }
          }
        }
      },
      count: {
        serializedName: "count",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const FolioPaymentModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FolioPaymentModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      method: {
        serializedName: "method",
        type: {
          name: "Enum",
          allowedValues: [
            "Cash",
            "BankTransfer",
            "CreditCard",
            "Invoice",
            "Amex",
            "VisaCredit",
            "VisaDebit",
            "MasterCard",
            "MasterCardDebit",
            "Maestro",
            "GiroCard",
            "DiscoverCard",
            "Diners",
            "Jcb",
            "BookingCom",
            "VPay",
            "PayPal",
            "Postcard",
            "Reka",
            "Twint",
            "Lunchcheck",
            "Voucher",
            "ChinaUnionPay",
            "Other",
            "Cheque",
            "Airbnb",
            "HolidayCheck",
            "PspCash",
            "PspDebit",
            "PspBanking",
            "PspOpenInvoice",
            "PspWallet"
          ]
        }
      },
      amount: {
        serializedName: "amount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      externalReference: {
        serializedName: "externalReference",
        type: {
          name: "Composite",
          className: "ExternalReference"
        }
      },
      receipt: {
        serializedName: "receipt",
        type: {
          name: "String"
        }
      },
      paymentDate: {
        serializedName: "paymentDate",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      movedFrom: {
        serializedName: "movedFrom",
        type: {
          name: "Composite",
          className: "EmbeddedFolioModel"
        }
      },
      movedTo: {
        serializedName: "movedTo",
        type: {
          name: "Composite",
          className: "EmbeddedFolioModel"
        }
      },
      movedReason: {
        serializedName: "movedReason",
        type: {
          name: "String"
        }
      },
      sourcePaymentId: {
        serializedName: "sourcePaymentId",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["Pending", "Success", "Failure", "Canceled"]
        }
      },
      failureReason: {
        serializedName: "failureReason",
        type: {
          name: "String"
        }
      },
      failureCode: {
        serializedName: "failureCode",
        type: {
          name: "Enum",
          allowedValues: ["Failed", "TimedOut"]
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Custom",
            "Terminal",
            "PaymentAccount",
            "Authorization",
            "PaymentLink"
          ]
        }
      },
      expiresAt: {
        serializedName: "expiresAt",
        type: {
          name: "DateTime"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      actions: {
        serializedName: "actions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ActionModelPaymentActionNotAllowedPaymentActionReason"
            }
          }
        }
      }
    }
  }
};

export const ActionModelPaymentActionNotAllowedPaymentActionReason: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ActionModelPaymentActionNotAllowedPaymentActionReason",
    modelProperties: {
      action: {
        defaultValue: "Cancel",
        isConstant: true,
        serializedName: "action",
        type: {
          name: "String"
        }
      },
      isAllowed: {
        serializedName: "isAllowed",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      reasons: {
        serializedName: "reasons",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ActionReasonModelNotAllowedPaymentActionReason"
            }
          }
        }
      }
    }
  }
};

export const ActionReasonModelNotAllowedPaymentActionReason: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ActionReasonModelNotAllowedPaymentActionReason",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "CancelNotAllowedForPaymentNotInStatusPending",
            "CancelNotAllowedForPaymentNotOfPaymentLinkType"
          ]
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreateCustomPaymentRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateCustomPaymentRequest",
    modelProperties: {
      method: {
        serializedName: "method",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Cash",
            "BankTransfer",
            "CreditCard",
            "Amex",
            "VisaCredit",
            "VisaDebit",
            "MasterCard",
            "MasterCardDebit",
            "Maestro",
            "GiroCard",
            "DiscoverCard",
            "Diners",
            "Jcb",
            "BookingCom",
            "VPay",
            "PayPal",
            "Postcard",
            "Reka",
            "Twint",
            "Lunchcheck",
            "Voucher",
            "ChinaUnionPay",
            "Other",
            "Cheque",
            "Airbnb",
            "HolidayCheck"
          ]
        }
      },
      receipt: {
        serializedName: "receipt",
        type: {
          name: "String"
        }
      },
      businessDate: {
        serializedName: "businessDate",
        type: {
          name: "Date"
        }
      },
      amount: {
        serializedName: "amount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      paidCharges: {
        serializedName: "paidCharges",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PaymentPaidChargesRequest"
            }
          }
        }
      }
    }
  }
};

export const PaymentPaidChargesRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PaymentPaidChargesRequest",
    modelProperties: {
      chargeId: {
        serializedName: "chargeId",
        required: true,
        type: {
          name: "String"
        }
      },
      amount: {
        serializedName: "amount",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const PaymentCreatedModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PaymentCreatedModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreateTerminalPaymentRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateTerminalPaymentRequest",
    modelProperties: {
      terminalId: {
        serializedName: "terminalId",
        required: true,
        type: {
          name: "String"
        }
      },
      amount: {
        serializedName: "amount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      paidCharges: {
        serializedName: "paidCharges",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PaymentPaidChargesRequest"
            }
          }
        }
      }
    }
  }
};

export const CreateAuthorizationPaymentRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateAuthorizationPaymentRequest",
    modelProperties: {
      transactionReference: {
        serializedName: "transactionReference",
        required: true,
        type: {
          name: "String"
        }
      },
      amount: {
        serializedName: "amount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      paidCharges: {
        serializedName: "paidCharges",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PaymentPaidChargesRequest"
            }
          }
        }
      }
    }
  }
};

export const CreateAccountPaymentRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateAccountPaymentRequest",
    modelProperties: {
      amount: {
        serializedName: "amount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      paidCharges: {
        serializedName: "paidCharges",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PaymentPaidChargesRequest"
            }
          }
        }
      }
    }
  }
};

export const CreatePaymentLinkRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreatePaymentLinkRequest",
    modelProperties: {
      expiresAt: {
        serializedName: "expiresAt",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      countryCode: {
        serializedName: "countryCode",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        constraints: {
          MaxLength: 280
        },
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      payerEmail: {
        serializedName: "payerEmail",
        type: {
          name: "String"
        }
      },
      amount: {
        serializedName: "amount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      paidCharges: {
        serializedName: "paidCharges",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PaymentPaidChargesRequest"
            }
          }
        }
      }
    }
  }
};

export const RefundListModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RefundListModel",
    modelProperties: {
      refunds: {
        serializedName: "refunds",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RefundModel"
            }
          }
        }
      },
      count: {
        serializedName: "count",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const RefundModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RefundModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      method: {
        serializedName: "method",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Cash",
            "BankTransfer",
            "CreditCard",
            "Invoice",
            "Amex",
            "VisaCredit",
            "VisaDebit",
            "MasterCard",
            "MasterCardDebit",
            "Maestro",
            "GiroCard",
            "DiscoverCard",
            "Diners",
            "Jcb",
            "BookingCom",
            "VPay",
            "PayPal",
            "Postcard",
            "Reka",
            "Twint",
            "Lunchcheck",
            "Voucher",
            "ChinaUnionPay",
            "Other",
            "Cheque",
            "Airbnb",
            "HolidayCheck",
            "PspCash",
            "PspDebit",
            "PspBanking",
            "PspOpenInvoice",
            "PspWallet"
          ]
        }
      },
      amount: {
        serializedName: "amount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      externalReference: {
        serializedName: "externalReference",
        type: {
          name: "Composite",
          className: "ExternalReference"
        }
      },
      receipt: {
        serializedName: "receipt",
        type: {
          name: "String"
        }
      },
      refundDate: {
        serializedName: "refundDate",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      sourcePaymentId: {
        serializedName: "sourcePaymentId",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["Pending", "Success", "Failure", "Canceled"]
        }
      },
      failureReason: {
        serializedName: "failureReason",
        type: {
          name: "String"
        }
      },
      failureCode: {
        serializedName: "failureCode",
        type: {
          name: "Enum",
          allowedValues: ["Failed", "TimedOut"]
        }
      },
      movedFrom: {
        serializedName: "movedFrom",
        type: {
          name: "Composite",
          className: "EmbeddedFolioModel"
        }
      },
      movedTo: {
        serializedName: "movedTo",
        type: {
          name: "Composite",
          className: "EmbeddedFolioModel"
        }
      },
      movedReason: {
        serializedName: "movedReason",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreateFolioRefundRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateFolioRefundRequest",
    modelProperties: {
      method: {
        serializedName: "method",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Cash",
            "BankTransfer",
            "CreditCard",
            "Amex",
            "VisaCredit",
            "VisaDebit",
            "MasterCard",
            "MasterCardDebit",
            "Maestro",
            "GiroCard",
            "DiscoverCard",
            "Diners",
            "Jcb",
            "BookingCom",
            "VPay",
            "PayPal",
            "Postcard",
            "Reka",
            "Twint",
            "Lunchcheck",
            "Voucher",
            "ChinaUnionPay",
            "Other",
            "Cheque",
            "Airbnb",
            "HolidayCheck"
          ]
        }
      },
      amount: {
        serializedName: "amount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      receipt: {
        serializedName: "receipt",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RefundCreatedModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RefundCreatedModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreatePaymentRefundRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreatePaymentRefundRequest",
    modelProperties: {
      amount: {
        serializedName: "amount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      }
    }
  }
};

export const PreviewInvoiceModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PreviewInvoiceModel",
    modelProperties: {
      to: {
        serializedName: "to",
        type: {
          name: "Composite",
          className: "InvoiceRecipientModel"
        }
      },
      createInvoiceAction: {
        serializedName: "createInvoiceAction",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "CannotCreateInvoice",
            "CreatesInvoice",
            "CreatesInvoiceAndClosesFolio",
            "CreatesArInvoiceAndClosesFolio"
          ]
        }
      },
      createInvoiceWarning: {
        serializedName: "createInvoiceWarning",
        type: {
          name: "Composite",
          className: "CreateInvoiceWarningModel"
        }
      },
      invoiceDate: {
        serializedName: "invoiceDate",
        required: true,
        type: {
          name: "Date"
        }
      },
      folioId: {
        serializedName: "folioId",
        required: true,
        type: {
          name: "String"
        }
      },
      from: {
        serializedName: "from",
        type: {
          name: "Composite",
          className: "InvoiceSenderModel"
        }
      },
      commercialInformation: {
        serializedName: "commercialInformation",
        type: {
          name: "Composite",
          className: "CommercialInfoModel"
        }
      },
      bankAccount: {
        serializedName: "bankAccount",
        type: {
          name: "Composite",
          className: "BankAccountModel"
        }
      },
      paymentTerms: {
        serializedName: "paymentTerms",
        type: {
          name: "String"
        }
      },
      lineItems: {
        serializedName: "lineItems",
        type: {
          name: "Composite",
          className: "InvoiceLineItemsModel"
        }
      },
      payments: {
        serializedName: "payments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "InvoicePaymentModel"
            }
          }
        }
      },
      outstandingPayment: {
        serializedName: "outstandingPayment",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      taxDetails: {
        serializedName: "taxDetails",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TaxDetailModel"
            }
          }
        }
      },
      total: {
        serializedName: "total",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      stayInfo: {
        serializedName: "stayInfo",
        type: {
          name: "Composite",
          className: "StayInfoModel"
        }
      },
      propertyId: {
        serializedName: "propertyId",
        required: true,
        type: {
          name: "String"
        }
      },
      propertyCountryCode: {
        serializedName: "propertyCountryCode",
        required: true,
        type: {
          name: "String"
        }
      },
      languageCode: {
        serializedName: "languageCode",
        required: true,
        type: {
          name: "String"
        }
      },
      company: {
        serializedName: "company",
        type: {
          name: "Composite",
          className: "EmbeddedCompanyModel"
        }
      }
    }
  }
};

export const InvoiceRecipientModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceRecipientModel",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      address: {
        serializedName: "address",
        type: {
          name: "Composite",
          className: "NonStrictAddressModel"
        }
      },
      companyName: {
        serializedName: "companyName",
        type: {
          name: "String"
        }
      },
      companyTaxId: {
        serializedName: "companyTaxId",
        type: {
          name: "String"
        }
      },
      reference: {
        serializedName: "reference",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreateInvoiceWarningModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateInvoiceWarningModel",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "InvoiceAlreadyExists",
            "NotAllChargesPosted",
            "DebitorDetailsMissing",
            "InvoiceHasPendingPayments",
            "NoCompanyFound",
            "CompanyCannotCheckOutOnAr",
            "IsHouseFolio",
            "CannotCreateCompanyInvoiceForExternal",
            "CheckOutOnArIsNotAllowed"
          ]
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const InvoiceSenderModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceSenderModel",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      address: {
        serializedName: "address",
        type: {
          name: "Composite",
          className: "AddressModel"
        }
      }
    }
  }
};

export const AddressModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddressModel",
    modelProperties: {
      addressLine1: {
        serializedName: "addressLine1",
        required: true,
        type: {
          name: "String"
        }
      },
      addressLine2: {
        serializedName: "addressLine2",
        type: {
          name: "String"
        }
      },
      postalCode: {
        serializedName: "postalCode",
        required: true,
        type: {
          name: "String"
        }
      },
      city: {
        serializedName: "city",
        required: true,
        type: {
          name: "String"
        }
      },
      regionCode: {
        serializedName: "regionCode",
        type: {
          name: "String"
        }
      },
      countryCode: {
        serializedName: "countryCode",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CommercialInfoModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommercialInfoModel",
    modelProperties: {
      registerEntry: {
        serializedName: "registerEntry",
        required: true,
        type: {
          name: "String"
        }
      },
      taxId: {
        serializedName: "taxId",
        required: true,
        type: {
          name: "String"
        }
      },
      managingDirectors: {
        serializedName: "managingDirectors",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BankAccountModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BankAccountModel",
    modelProperties: {
      iban: {
        serializedName: "iban",
        type: {
          name: "String"
        }
      },
      bic: {
        serializedName: "bic",
        type: {
          name: "String"
        }
      },
      bank: {
        serializedName: "bank",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const InvoiceLineItemsModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceLineItemsModel",
    modelProperties: {
      lineItems: {
        serializedName: "lineItems",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "InvoiceLineItemModel"
            }
          }
        }
      },
      subTotal: {
        serializedName: "subTotal",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      }
    }
  }
};

export const InvoiceLineItemModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceLineItemModel",
    modelProperties: {
      date: {
        serializedName: "date",
        required: true,
        type: {
          name: "Date"
        }
      },
      description: {
        serializedName: "description",
        required: true,
        type: {
          name: "String"
        }
      },
      price: {
        serializedName: "price",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      vatType: {
        serializedName: "vatType",
        type: {
          name: "Enum",
          allowedValues: [
            "Null",
            "VeryReduced",
            "Reduced",
            "Normal",
            "Without",
            "Special",
            "ReducedCovid19",
            "NormalCovid19"
          ]
        }
      },
      vatPercent: {
        serializedName: "vatPercent",
        type: {
          name: "Number"
        }
      },
      isNoShowFee: {
        serializedName: "isNoShowFee",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      subItems: {
        serializedName: "subItems",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      guest: {
        serializedName: "guest",
        type: {
          name: "String"
        }
      },
      quantity: {
        serializedName: "quantity",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const InvoicePaymentModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoicePaymentModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      method: {
        serializedName: "method",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Cash",
            "BankTransfer",
            "CreditCard",
            "Invoice",
            "Amex",
            "VisaCredit",
            "VisaDebit",
            "MasterCard",
            "MasterCardDebit",
            "Maestro",
            "GiroCard",
            "DiscoverCard",
            "Diners",
            "Jcb",
            "BookingCom",
            "VPay",
            "PayPal",
            "Postcard",
            "Reka",
            "Twint",
            "Lunchcheck",
            "Voucher",
            "ChinaUnionPay",
            "Other",
            "Cheque",
            "Airbnb",
            "HolidayCheck",
            "PspCash",
            "PspDebit",
            "PspBanking",
            "PspOpenInvoice",
            "PspWallet"
          ]
        }
      },
      methodName: {
        serializedName: "methodName",
        required: true,
        type: {
          name: "String"
        }
      },
      amount: {
        serializedName: "amount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      paymentDate: {
        serializedName: "paymentDate",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const TaxDetailModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TaxDetailModel",
    modelProperties: {
      vatType: {
        serializedName: "vatType",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Null",
            "VeryReduced",
            "Reduced",
            "Normal",
            "Without",
            "Special",
            "ReducedCovid19",
            "NormalCovid19"
          ]
        }
      },
      vatPercent: {
        serializedName: "vatPercent",
        required: true,
        type: {
          name: "Number"
        }
      },
      net: {
        serializedName: "net",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      tax: {
        serializedName: "tax",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      }
    }
  }
};

export const StayInfoModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StayInfoModel",
    modelProperties: {
      guestName: {
        serializedName: "guestName",
        required: true,
        type: {
          name: "String"
        }
      },
      arrivalDate: {
        serializedName: "arrivalDate",
        required: true,
        type: {
          name: "Date"
        }
      },
      departureDate: {
        serializedName: "departureDate",
        required: true,
        type: {
          name: "Date"
        }
      },
      reservationId: {
        serializedName: "reservationId",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const InvoiceListModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceListModel",
    modelProperties: {
      invoices: {
        serializedName: "invoices",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "InvoiceItemModel"
            }
          }
        }
      },
      count: {
        serializedName: "count",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const InvoiceItemModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceItemModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      number: {
        serializedName: "number",
        required: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Initial",
            "Cancellation",
            "Correction",
            "Advance",
            "AdvanceCancellation",
            "AdvanceCorrection"
          ]
        }
      },
      languageCode: {
        serializedName: "languageCode",
        required: true,
        type: {
          name: "String"
        }
      },
      folioId: {
        serializedName: "folioId",
        required: true,
        type: {
          name: "String"
        }
      },
      reservationId: {
        serializedName: "reservationId",
        type: {
          name: "String"
        }
      },
      propertyId: {
        serializedName: "propertyId",
        required: true,
        type: {
          name: "String"
        }
      },
      relatedInvoiceNumber: {
        serializedName: "relatedInvoiceNumber",
        type: {
          name: "String"
        }
      },
      outstandingPayment: {
        serializedName: "outstandingPayment",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      paymentSettled: {
        serializedName: "paymentSettled",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      created: {
        serializedName: "created",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      guestName: {
        serializedName: "guestName",
        type: {
          name: "String"
        }
      },
      guestCompany: {
        serializedName: "guestCompany",
        type: {
          name: "String"
        }
      },
      allowedActions: {
        serializedName: "allowedActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Enum",
              allowedValues: [
                "CorrectAddress",
                "CorrectCharges",
                "MarkAsPaid",
                "Cancel"
              ]
            }
          }
        }
      },
      company: {
        serializedName: "company",
        type: {
          name: "Composite",
          className: "EmbeddedCompanyModel"
        }
      }
    }
  }
};

export const CreateInvoicePdfRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateInvoicePdfRequest",
    modelProperties: {
      languageCode: {
        serializedName: "languageCode",
        required: true,
        type: {
          name: "String"
        }
      },
      folioId: {
        serializedName: "folioId",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const InvoiceCreatedModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceCreatedModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const InvoiceModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InvoiceModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      number: {
        serializedName: "number",
        required: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Initial",
            "Cancellation",
            "Correction",
            "Advance",
            "AdvanceCancellation",
            "AdvanceCorrection"
          ]
        }
      },
      to: {
        serializedName: "to",
        type: {
          name: "Composite",
          className: "InvoiceRecipientModel"
        }
      },
      paymentSettled: {
        serializedName: "paymentSettled",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      created: {
        serializedName: "created",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      relatedInvoiceNumber: {
        serializedName: "relatedInvoiceNumber",
        type: {
          name: "String"
        }
      },
      allowedActions: {
        serializedName: "allowedActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Enum",
              allowedValues: [
                "CorrectAddress",
                "CorrectCharges",
                "MarkAsPaid",
                "Cancel"
              ]
            }
          }
        }
      },
      invoiceDate: {
        serializedName: "invoiceDate",
        required: true,
        type: {
          name: "Date"
        }
      },
      folioId: {
        serializedName: "folioId",
        required: true,
        type: {
          name: "String"
        }
      },
      from: {
        serializedName: "from",
        type: {
          name: "Composite",
          className: "InvoiceSenderModel"
        }
      },
      commercialInformation: {
        serializedName: "commercialInformation",
        type: {
          name: "Composite",
          className: "CommercialInfoModel"
        }
      },
      bankAccount: {
        serializedName: "bankAccount",
        type: {
          name: "Composite",
          className: "BankAccountModel"
        }
      },
      paymentTerms: {
        serializedName: "paymentTerms",
        type: {
          name: "String"
        }
      },
      lineItems: {
        serializedName: "lineItems",
        type: {
          name: "Composite",
          className: "InvoiceLineItemsModel"
        }
      },
      payments: {
        serializedName: "payments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "InvoicePaymentModel"
            }
          }
        }
      },
      outstandingPayment: {
        serializedName: "outstandingPayment",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      taxDetails: {
        serializedName: "taxDetails",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TaxDetailModel"
            }
          }
        }
      },
      total: {
        serializedName: "total",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      stayInfo: {
        serializedName: "stayInfo",
        type: {
          name: "Composite",
          className: "StayInfoModel"
        }
      },
      propertyId: {
        serializedName: "propertyId",
        required: true,
        type: {
          name: "String"
        }
      },
      propertyCountryCode: {
        serializedName: "propertyCountryCode",
        required: true,
        type: {
          name: "String"
        }
      },
      languageCode: {
        serializedName: "languageCode",
        required: true,
        type: {
          name: "String"
        }
      },
      company: {
        serializedName: "company",
        type: {
          name: "Composite",
          className: "EmbeddedCompanyModel"
        }
      }
    }
  }
};

export const PayInvoiceRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PayInvoiceRequest",
    modelProperties: {
      paymentMethod: {
        serializedName: "paymentMethod",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Cash",
            "BankTransfer",
            "CreditCard",
            "Amex",
            "VisaCredit",
            "VisaDebit",
            "MasterCard",
            "MasterCardDebit",
            "Maestro",
            "GiroCard",
            "DiscoverCard",
            "Diners",
            "Jcb",
            "BookingCom",
            "VPay",
            "PayPal",
            "Postcard",
            "Reka",
            "Twint",
            "Lunchcheck",
            "Voucher",
            "ChinaUnionPay",
            "Other",
            "Cheque",
            "Airbnb",
            "HolidayCheck"
          ]
        }
      },
      receipt: {
        serializedName: "receipt",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AccountingTransactionPairListModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AccountingTransactionPairListModel",
    modelProperties: {
      accountTransactionPairs: {
        serializedName: "accountTransactionPairs",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AccountingTransactionPairModel"
            }
          }
        }
      }
    }
  }
};

export const AccountingTransactionPairModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AccountingTransactionPairModel",
    modelProperties: {
      debitedAccountNumber: {
        serializedName: "debitedAccountNumber",
        required: true,
        type: {
          name: "String"
        }
      },
      debitedAccountName: {
        serializedName: "debitedAccountName",
        required: true,
        type: {
          name: "String"
        }
      },
      debitedAccountType: {
        serializedName: "debitedAccountType",
        required: true,
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
      },
      debitedAccount: {
        serializedName: "debitedAccount",
        type: {
          name: "Composite",
          className: "ExportAccountModel"
        }
      },
      creditedAccountNumber: {
        serializedName: "creditedAccountNumber",
        required: true,
        type: {
          name: "String"
        }
      },
      creditedAccountName: {
        serializedName: "creditedAccountName",
        required: true,
        type: {
          name: "String"
        }
      },
      creditedAccountType: {
        serializedName: "creditedAccountType",
        required: true,
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
      },
      creditedAccount: {
        serializedName: "creditedAccount",
        type: {
          name: "Composite",
          className: "ExportAccountModel"
        }
      },
      amount: {
        serializedName: "amount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      }
    }
  }
};

export const ExportAccountModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExportAccountModel",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      number: {
        serializedName: "number",
        required: true,
        type: {
          name: "String"
        }
      },
      parentNumber: {
        serializedName: "parentNumber",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        required: true,
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
    }
  }
};

export const AggregateTransactionListModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AggregateTransactionListModel",
    modelProperties: {
      aggregations: {
        serializedName: "aggregations",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AggregateTransactionItemModel"
            }
          }
        }
      },
      total: {
        serializedName: "total",
        type: {
          name: "Composite",
          className: "AggregatesTotalModel"
        }
      }
    }
  }
};

export const AggregateTransactionItemModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AggregateTransactionItemModel",
    modelProperties: {
      accountNumber: {
        serializedName: "accountNumber",
        required: true,
        type: {
          name: "String"
        }
      },
      accountName: {
        serializedName: "accountName",
        required: true,
        type: {
          name: "String"
        }
      },
      accountType: {
        serializedName: "accountType",
        required: true,
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
      },
      account: {
        serializedName: "account",
        type: {
          name: "Composite",
          className: "ExportAccountModel"
        }
      },
      creditedAmount: {
        serializedName: "creditedAmount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      debitedAmount: {
        serializedName: "debitedAmount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      balance: {
        serializedName: "balance",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      }
    }
  }
};

export const AggregatesTotalModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AggregatesTotalModel",
    modelProperties: {
      creditedAmount: {
        serializedName: "creditedAmount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      debitedAmount: {
        serializedName: "debitedAmount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      balance: {
        serializedName: "balance",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      }
    }
  }
};

export const AccountingTransactionListModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AccountingTransactionListModel",
    modelProperties: {
      transactions: {
        serializedName: "transactions",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AccountingTransactionModel"
            }
          }
        }
      },
      count: {
        serializedName: "count",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AccountingTransactionModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AccountingTransactionModel",
    modelProperties: {
      timestamp: {
        serializedName: "timestamp",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      date: {
        serializedName: "date",
        required: true,
        type: {
          name: "Date"
        }
      },
      debitedAccountName: {
        serializedName: "debitedAccountName",
        required: true,
        type: {
          name: "String"
        }
      },
      debitedAccountNumber: {
        serializedName: "debitedAccountNumber",
        required: true,
        type: {
          name: "String"
        }
      },
      debitedAccountType: {
        serializedName: "debitedAccountType",
        required: true,
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
      },
      debitedAccountParentNumber: {
        serializedName: "debitedAccountParentNumber",
        type: {
          name: "String"
        }
      },
      debitedAccount: {
        serializedName: "debitedAccount",
        type: {
          name: "Composite",
          className: "ExportAccountModel"
        }
      },
      creditedAccountName: {
        serializedName: "creditedAccountName",
        required: true,
        type: {
          name: "String"
        }
      },
      creditedAccountNumber: {
        serializedName: "creditedAccountNumber",
        required: true,
        type: {
          name: "String"
        }
      },
      creditedAccountType: {
        serializedName: "creditedAccountType",
        required: true,
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
      },
      creditedAccountParentNumber: {
        serializedName: "creditedAccountParentNumber",
        type: {
          name: "String"
        }
      },
      creditedAccount: {
        serializedName: "creditedAccount",
        type: {
          name: "Composite",
          className: "ExportAccountModel"
        }
      },
      command: {
        serializedName: "command",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "PostCharge",
            "PostPayment",
            "MoveLineItem",
            "PostPrepayment",
            "PostToAccountsReceivables",
            "PostPrepaymentVat",
            "System"
          ]
        }
      },
      amount: {
        serializedName: "amount",
        type: {
          name: "Composite",
          className: "MonetaryValueModel"
        }
      },
      receipt: {
        serializedName: "receipt",
        type: {
          name: "Composite",
          className: "ReceiptModel"
        }
      },
      entryNumber: {
        serializedName: "entryNumber",
        required: true,
        type: {
          name: "String"
        }
      },
      reference: {
        serializedName: "reference",
        required: true,
        type: {
          name: "String"
        }
      },
      referenceType: {
        serializedName: "referenceType",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["House", "Guest", "External"]
        }
      },
      entryGroupNumber: {
        serializedName: "entryGroupNumber",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ReceiptModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ReceiptModel",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: ["Custom", "Reservation", "Invoice", "PspReference"]
        }
      },
      number: {
        serializedName: "number",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExportGrossTransactionListModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExportGrossTransactionListModel",
    modelProperties: {
      transactions: {
        serializedName: "transactions",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ExportGrossTransactionItemModel"
            }
          }
        }
      }
    }
  }
};

export const ExportGrossTransactionItemModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExportGrossTransactionItemModel",
    modelProperties: {
      timestamp: {
        serializedName: "timestamp",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      date: {
        serializedName: "date",
        required: true,
        type: {
          name: "Date"
        }
      },
      debitedAccount: {
        serializedName: "debitedAccount",
        type: {
          name: "Composite",
          className: "ExportAccountModel"
        }
      },
      creditedAccount: {
        serializedName: "creditedAccount",
        type: {
          name: "Composite",
          className: "ExportAccountModel"
        }
      },
      command: {
        serializedName: "command",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "PostCharge",
            "PostPayment",
            "MoveLineItem",
            "PostPrepayment",
            "PostToAccountsReceivables",
            "PostPrepaymentVat",
            "System"
          ]
        }
      },
      currency: {
        serializedName: "currency",
        required: true,
        type: {
          name: "String"
        }
      },
      grossAmount: {
        serializedName: "grossAmount",
        required: true,
        type: {
          name: "Number"
        }
      },
      netAmount: {
        serializedName: "netAmount",
        required: true,
        type: {
          name: "Number"
        }
      },
      taxes: {
        serializedName: "taxes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TaxAmountModel"
            }
          }
        }
      },
      receipt: {
        serializedName: "receipt",
        type: {
          name: "Composite",
          className: "ReceiptModel"
        }
      },
      sourceEntryNumber: {
        serializedName: "sourceEntryNumber",
        required: true,
        type: {
          name: "String"
        }
      },
      reference: {
        serializedName: "reference",
        required: true,
        type: {
          name: "String"
        }
      },
      referenceType: {
        serializedName: "referenceType",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["House", "Guest", "External"]
        }
      }
    }
  }
};

export const TaxAmountModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TaxAmountModel",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Null",
            "VeryReduced",
            "Reduced",
            "Normal",
            "Without",
            "Special",
            "ReducedCovid19",
            "NormalCovid19"
          ]
        }
      },
      percent: {
        serializedName: "percent",
        required: true,
        type: {
          name: "Number"
        }
      },
      amount: {
        serializedName: "amount",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ChartOfAccountsModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChartOfAccountsModel",
    modelProperties: {
      globalAccounts: {
        serializedName: "globalAccounts",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SlimFinanceAccountModel"
            }
          }
        }
      },
      guestAccounts: {
        serializedName: "guestAccounts",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SlimFinanceAccountModel"
            }
          }
        }
      },
      externalAccounts: {
        serializedName: "externalAccounts",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SlimFinanceAccountModel"
            }
          }
        }
      }
    }
  }
};

export const SlimFinanceAccountModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SlimFinanceAccountModel",
    modelProperties: {
      number: {
        serializedName: "number",
        required: true,
        type: {
          name: "String"
        }
      },
      accountNumber: {
        serializedName: "accountNumber",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        required: true,
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
      },
      parentNumber: {
        serializedName: "parentNumber",
        type: {
          name: "String"
        }
      },
      hasChildren: {
        serializedName: "hasChildren",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      isArchived: {
        serializedName: "isArchived",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      vat: {
        serializedName: "vat",
        type: {
          name: "Composite",
          className: "VatItemModel"
        }
      },
      subAccounts: {
        serializedName: "subAccounts",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SlimFinanceAccountModel"
            }
          }
        }
      }
    }
  }
};

export const VatItemModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VatItemModel",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Null",
            "VeryReduced",
            "Reduced",
            "Normal",
            "Without",
            "Special",
            "ReducedCovid19",
            "NormalCovid19"
          ]
        }
      },
      percent: {
        serializedName: "percent",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const FinanceAccountListModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FinanceAccountListModel",
    modelProperties: {
      accounts: {
        serializedName: "accounts",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SlimFinanceAccountModel"
            }
          }
        }
      },
      count: {
        serializedName: "count",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const FinanceAccountModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FinanceAccountModel",
    modelProperties: {
      number: {
        serializedName: "number",
        required: true,
        type: {
          name: "String"
        }
      },
      accountNumber: {
        serializedName: "accountNumber",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        required: true,
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
      },
      hasChildren: {
        serializedName: "hasChildren",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      parentNumber: {
        serializedName: "parentNumber",
        type: {
          name: "String"
        }
      },
      isArchived: {
        serializedName: "isArchived",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      transactions: {
        serializedName: "transactions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AccountingTransactionModel"
            }
          }
        }
      }
    }
  }
};

export const CurrencyListModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CurrencyListModel",
    modelProperties: {
      isoCurrencies: {
        serializedName: "isoCurrencies",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const PaymentMethodListModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PaymentMethodListModel",
    modelProperties: {
      paymentMethods: {
        serializedName: "paymentMethods",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Enum",
              allowedValues: [
                "Cash",
                "BankTransfer",
                "CreditCard",
                "Amex",
                "VisaCredit",
                "VisaDebit",
                "MasterCard",
                "MasterCardDebit",
                "Maestro",
                "GiroCard",
                "DiscoverCard",
                "Diners",
                "Jcb",
                "BookingCom",
                "VPay",
                "PayPal",
                "Postcard",
                "Reka",
                "Twint",
                "Lunchcheck",
                "Voucher",
                "ChinaUnionPay",
                "Other",
                "Cheque",
                "Airbnb",
                "HolidayCheck"
              ]
            }
          }
        }
      }
    }
  }
};

export const ServiceTypeListModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceTypeListModel",
    modelProperties: {
      serviceTypes: {
        serializedName: "serviceTypes",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Enum",
              allowedValues: [
                "Other",
                "Accommodation",
                "FoodAndBeverages",
                "CancellationFees",
                "NoShow",
                "CityTax"
              ]
            }
          }
        }
      }
    }
  }
};

export const VatListModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VatListModel",
    modelProperties: {
      vatTypes: {
        serializedName: "vatTypes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VatItemModel"
            }
          }
        }
      }
    }
  }
};

export const SplitChargeResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SplitChargeResult",
    modelProperties: {
      allowanceId: {
        serializedName: "allowanceId",
        type: {
          name: "String"
        }
      },
      firstChargeId: {
        serializedName: "firstChargeId",
        type: {
          name: "String"
        }
      },
      secondChargeId: {
        serializedName: "secondChargeId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SplitPaymentResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SplitPaymentResult",
    modelProperties: {
      refundId: {
        serializedName: "refundId",
        type: {
          name: "String"
        }
      },
      firstPaymentId: {
        serializedName: "firstPaymentId",
        type: {
          name: "String"
        }
      },
      secondPaymentId: {
        serializedName: "secondPaymentId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApaleoFinanceAPIFinanceFoliosPostHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApaleoFinanceAPIFinanceFoliosPostHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApaleoFinanceAPIFinanceFolioActionsByFolioIdCorrectPostHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApaleoFinanceAPIFinanceFolioActionsByFolioIdCorrectPostHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsPostHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsPostHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByTerminalPostHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByTerminalPostHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByAuthorizationPostHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByAuthorizationPostHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentAccountPostHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentAccountPostHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByLinkPostHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByLinkPostHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApaleoFinanceAPIFinanceFoliosByFolioIdRefundsPostHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApaleoFinanceAPIFinanceFoliosByFolioIdRefundsPostHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPostHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ApaleoFinanceAPIFinanceFoliosByFolioIdPaymentsByPaymentIdRefundsPostHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApaleoFinanceAPIFinanceInvoicesPostHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApaleoFinanceAPIFinanceInvoicesPostHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};
