import * as coreHttp from "@azure/core-http";

export const PropertyListModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PropertyListModel",
    modelProperties: {
      properties: {
        serializedName: "properties",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PropertyItemModel"
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

export const PropertyItemModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PropertyItemModel",
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
        required: true,
        type: {
          name: "String"
        }
      },
      propertyTemplateId: {
        serializedName: "propertyTemplateId",
        type: {
          name: "String"
        }
      },
      isTemplate: {
        serializedName: "isTemplate",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      companyName: {
        serializedName: "companyName",
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
      },
      commercialRegisterEntry: {
        serializedName: "commercialRegisterEntry",
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
      location: {
        serializedName: "location",
        type: {
          name: "Composite",
          className: "AddressModel"
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
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      timeZone: {
        serializedName: "timeZone",
        required: true,
        type: {
          name: "String"
        }
      },
      currencyCode: {
        serializedName: "currencyCode",
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

export const CreatePropertyModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreatePropertyModel",
    modelProperties: {
      code: {
        constraints: {
          Pattern: new RegExp("^[a-zA-Z0-9_]*$"),
          MaxLength: 10,
          MinLength: 3
        },
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      companyName: {
        serializedName: "companyName",
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
      },
      commercialRegisterEntry: {
        serializedName: "commercialRegisterEntry",
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
      description: {
        serializedName: "description",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "Composite",
          className: "CreateAddressModel"
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
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      timeZone: {
        serializedName: "timeZone",
        required: true,
        type: {
          name: "String"
        }
      },
      defaultCheckInTime: {
        serializedName: "defaultCheckInTime",
        required: true,
        type: {
          name: "String"
        }
      },
      defaultCheckOutTime: {
        serializedName: "defaultCheckOutTime",
        required: true,
        type: {
          name: "String"
        }
      },
      currencyCode: {
        serializedName: "currencyCode",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreateAddressModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateAddressModel",
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
      countryCode: {
        constraints: {
          MaxLength: 2,
          MinLength: 2
        },
        serializedName: "countryCode",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PropertyCreatedModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PropertyCreatedModel",
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

export const PropertyModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PropertyModel",
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
        required: true,
        type: {
          name: "String"
        }
      },
      propertyTemplateId: {
        serializedName: "propertyTemplateId",
        type: {
          name: "String"
        }
      },
      isTemplate: {
        serializedName: "isTemplate",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      companyName: {
        serializedName: "companyName",
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
      },
      commercialRegisterEntry: {
        serializedName: "commercialRegisterEntry",
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
      location: {
        serializedName: "location",
        type: {
          name: "Composite",
          className: "AddressModel"
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
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      timeZone: {
        serializedName: "timeZone",
        required: true,
        type: {
          name: "String"
        }
      },
      currencyCode: {
        serializedName: "currencyCode",
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

export const CountryListModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CountryListModel",
    modelProperties: {
      countryCodes: {
        serializedName: "countryCodes",
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

export const UnitModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UnitModel",
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
      description: {
        serializedName: "description",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      property: {
        serializedName: "property",
        type: {
          name: "Composite",
          className: "EmbeddedPropertyModel"
        }
      },
      unitGroup: {
        serializedName: "unitGroup",
        type: {
          name: "Composite",
          className: "EmbeddedUnitGroupModel"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Composite",
          className: "UnitStatusModel"
        }
      },
      maxPersons: {
        serializedName: "maxPersons",
        required: true,
        type: {
          name: "Number"
        }
      },
      created: {
        serializedName: "created",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "UnitAttributeModel"
            }
          }
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

export const EmbeddedUnitGroupModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmbeddedUnitGroupModel",
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
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UnitStatusModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UnitStatusModel",
    modelProperties: {
      isOccupied: {
        serializedName: "isOccupied",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      condition: {
        serializedName: "condition",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["Clean", "CleanToBeInspected", "Dirty"]
        }
      },
      maintenance: {
        serializedName: "maintenance",
        type: {
          name: "Composite",
          className: "UnitMaintenanceModel"
        }
      }
    }
  }
};

export const UnitMaintenanceModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UnitMaintenanceModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      from: {
        serializedName: "from",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      to: {
        serializedName: "to",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["OutOfService", "OutOfOrder", "OutOfInventory"]
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UnitAttributeModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UnitAttributeModel",
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
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UnitListModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UnitListModel",
    modelProperties: {
      units: {
        serializedName: "units",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "UnitItemModel"
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

export const UnitItemModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UnitItemModel",
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
      description: {
        serializedName: "description",
        required: true,
        type: {
          name: "String"
        }
      },
      property: {
        serializedName: "property",
        type: {
          name: "Composite",
          className: "EmbeddedPropertyModel"
        }
      },
      unitGroup: {
        serializedName: "unitGroup",
        type: {
          name: "Composite",
          className: "EmbeddedUnitGroupModel"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Composite",
          className: "UnitItemStatusModel"
        }
      },
      maxPersons: {
        serializedName: "maxPersons",
        required: true,
        type: {
          name: "Number"
        }
      },
      created: {
        serializedName: "created",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "UnitAttributeModel"
            }
          }
        }
      }
    }
  }
};

export const UnitItemStatusModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UnitItemStatusModel",
    modelProperties: {
      isOccupied: {
        serializedName: "isOccupied",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      condition: {
        serializedName: "condition",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["Clean", "CleanToBeInspected", "Dirty"]
        }
      },
      maintenance: {
        serializedName: "maintenance",
        type: {
          name: "Composite",
          className: "UnitItemMaintenanceModel"
        }
      }
    }
  }
};

export const UnitItemMaintenanceModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UnitItemMaintenanceModel",
    modelProperties: {
      id: {
        serializedName: "id",
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
          allowedValues: ["OutOfService", "OutOfOrder", "OutOfInventory"]
        }
      }
    }
  }
};

export const CreateUnitModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateUnitModel",
    modelProperties: {
      propertyId: {
        serializedName: "propertyId",
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
      description: {
        serializedName: "description",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      unitGroupId: {
        serializedName: "unitGroupId",
        type: {
          name: "String"
        }
      },
      maxPersons: {
        constraints: {
          InclusiveMaximum: 2147483647,
          InclusiveMinimum: 1
        },
        serializedName: "maxPersons",
        required: true,
        type: {
          name: "Number"
        }
      },
      condition: {
        serializedName: "condition",
        type: {
          name: "Enum",
          allowedValues: ["Clean", "CleanToBeInspected", "Dirty"]
        }
      },
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CreateUnitAttributeModel"
            }
          }
        }
      }
    }
  }
};

export const CreateUnitAttributeModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateUnitAttributeModel",
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

export const UnitCreatedModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UnitCreatedModel",
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

export const BulkCreateUnitsModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BulkCreateUnitsModel",
    modelProperties: {
      propertyId: {
        serializedName: "propertyId",
        required: true,
        type: {
          name: "String"
        }
      },
      names: {
        serializedName: "names",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      description: {
        serializedName: "description",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      unitGroupId: {
        serializedName: "unitGroupId",
        type: {
          name: "String"
        }
      },
      maxPersons: {
        constraints: {
          InclusiveMaximum: 2147483647,
          InclusiveMinimum: 1
        },
        serializedName: "maxPersons",
        required: true,
        type: {
          name: "Number"
        }
      },
      condition: {
        serializedName: "condition",
        type: {
          name: "Enum",
          allowedValues: ["Clean", "CleanToBeInspected", "Dirty"]
        }
      },
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CreateUnitAttributeModel"
            }
          }
        }
      }
    }
  }
};

export const BulkUnitsCreatedModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BulkUnitsCreatedModel",
    modelProperties: {
      ids: {
        serializedName: "ids",
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

export const UnitAttributeDefinitionModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UnitAttributeDefinitionModel",
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
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UnitAttributeDefinitionListModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UnitAttributeDefinitionListModel",
    modelProperties: {
      unitAttributes: {
        serializedName: "unitAttributes",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "UnitAttributeDefinitionModel"
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

export const CreateUnitAttributeDefinitionModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateUnitAttributeDefinitionModel",
    modelProperties: {
      name: {
        constraints: {
          MaxLength: 50,
          MinLength: 1
        },
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UnitAttributeDefinitionCreatedModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UnitAttributeDefinitionCreatedModel",
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

export const CreateUnitGroupModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateUnitGroupModel",
    modelProperties: {
      code: {
        constraints: {
          Pattern: new RegExp("^[a-zA-Z0-9_]*$"),
          MaxLength: 10,
          MinLength: 3
        },
        serializedName: "code",
        required: true,
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
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      description: {
        serializedName: "description",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      maxPersons: {
        constraints: {
          InclusiveMaximum: 2147483647,
          InclusiveMinimum: 1
        },
        serializedName: "maxPersons",
        required: true,
        type: {
          name: "Number"
        }
      },
      rank: {
        constraints: {
          InclusiveMaximum: 2147483647,
          InclusiveMinimum: 1
        },
        serializedName: "rank",
        type: {
          name: "Number"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: ["BedRoom", "MeetingRoom", "EventSpace", "ParkingLot"]
        }
      }
    }
  }
};

export const UnitGroupCreatedModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UnitGroupCreatedModel",
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

export const UnitGroupListModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UnitGroupListModel",
    modelProperties: {
      unitGroups: {
        serializedName: "unitGroups",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "UnitGroupItemModel"
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

export const UnitGroupItemModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UnitGroupItemModel",
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
      description: {
        serializedName: "description",
        required: true,
        type: {
          name: "String"
        }
      },
      memberCount: {
        serializedName: "memberCount",
        required: true,
        type: {
          name: "Number"
        }
      },
      maxPersons: {
        serializedName: "maxPersons",
        type: {
          name: "Number"
        }
      },
      rank: {
        serializedName: "rank",
        type: {
          name: "Number"
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "BedRoom",
            "MeetingRoom",
            "EventSpace",
            "ParkingLot",
            "Other"
          ]
        }
      },
      property: {
        serializedName: "property",
        type: {
          name: "Composite",
          className: "EmbeddedPropertyModel"
        }
      }
    }
  }
};

export const UnitGroupModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UnitGroupModel",
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
        required: true,
        type: {
          name: "String"
        }
      },
      property: {
        serializedName: "property",
        type: {
          name: "Composite",
          className: "EmbeddedPropertyModel"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      memberCount: {
        serializedName: "memberCount",
        required: true,
        type: {
          name: "Number"
        }
      },
      description: {
        serializedName: "description",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      maxPersons: {
        serializedName: "maxPersons",
        required: true,
        type: {
          name: "Number"
        }
      },
      rank: {
        serializedName: "rank",
        type: {
          name: "Number"
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "BedRoom",
            "MeetingRoom",
            "EventSpace",
            "ParkingLot",
            "Other"
          ]
        }
      }
    }
  }
};

export const ReplaceUnitGroupModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ReplaceUnitGroupModel",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      description: {
        serializedName: "description",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      maxPersons: {
        serializedName: "maxPersons",
        type: {
          name: "Number"
        }
      },
      rank: {
        constraints: {
          InclusiveMaximum: 2147483647,
          InclusiveMinimum: 1
        },
        serializedName: "rank",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ApaleoInventoryAPIInventoryPropertiesPostHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApaleoInventoryAPIInventoryPropertiesPostHeaders",
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

export const ApaleoInventoryAPIInventoryUnitsPostHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApaleoInventoryAPIInventoryUnitsPostHeaders",
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

export const ApaleoInventoryAPIInventoryUnitsBulkPostHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApaleoInventoryAPIInventoryUnitsBulkPostHeaders",
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

export const ApaleoInventoryAPIInventoryUnitAttributesPostHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApaleoInventoryAPIInventoryUnitAttributesPostHeaders",
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

export const ApaleoInventoryAPIInventoryUnitGroupsPostHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApaleoInventoryAPIInventoryUnitGroupsPostHeaders",
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
