import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
  QueryCollectionFormat
} from "@azure/core-http";
import {
  CreatePropertyModel as CreatePropertyModelMapper,
  CreateUnitModel as CreateUnitModelMapper,
  BulkCreateUnitsModel as BulkCreateUnitsModelMapper,
  CreateUnitAttributeDefinitionModel as CreateUnitAttributeDefinitionModelMapper,
  CreateUnitGroupModel as CreateUnitGroupModelMapper,
  ReplaceUnitGroupModel as ReplaceUnitGroupModelMapper
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
  mapper: CreatePropertyModelMapper
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

export const languages: OperationQueryParameter = {
  parameterPath: ["options", "languages"],
  mapper: {
    serializedName: "languages",
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

export const unitIds: OperationQueryParameter = {
  parameterPath: "unitIds",
  mapper: {
    serializedName: "unitIds",
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
  collectionFormat: QueryCollectionFormat.Csv
};

export const propertyId: OperationQueryParameter = {
  parameterPath: ["options", "propertyId"],
  mapper: {
    serializedName: "propertyId",
    type: {
      name: "String"
    }
  }
};

export const unitGroupId: OperationQueryParameter = {
  parameterPath: ["options", "unitGroupId"],
  mapper: {
    serializedName: "unitGroupId",
    type: {
      name: "String"
    }
  }
};

export const unitAttributeIds: OperationQueryParameter = {
  parameterPath: ["options", "unitAttributeIds"],
  mapper: {
    serializedName: "unitAttributeIds",
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

export const isOccupied: OperationQueryParameter = {
  parameterPath: ["options", "isOccupied"],
  mapper: {
    serializedName: "isOccupied",
    type: {
      name: "Boolean"
    }
  }
};

export const maintenanceType: OperationQueryParameter = {
  parameterPath: ["options", "maintenanceType"],
  mapper: {
    serializedName: "maintenanceType",
    type: {
      name: "Enum",
      allowedValues: ["OutOfService", "OutOfOrder", "OutOfInventory"]
    }
  }
};

export const condition: OperationQueryParameter = {
  parameterPath: ["options", "condition"],
  mapper: {
    serializedName: "condition",
    type: {
      name: "Enum",
      allowedValues: ["Clean", "CleanToBeInspected", "Dirty"]
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
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: QueryCollectionFormat.Csv
};

export const body2: OperationParameter = {
  parameterPath: "body",
  mapper: CreateUnitModelMapper
};

export const body3: OperationParameter = {
  parameterPath: "body",
  mapper: BulkCreateUnitsModelMapper
};

export const body4: OperationParameter = {
  parameterPath: "body",
  mapper: CreateUnitAttributeDefinitionModelMapper
};

export const body5: OperationParameter = {
  parameterPath: "body",
  mapper: CreateUnitGroupModelMapper
};

export const expand2: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "expand",
    type: {
      name: "Sequence",
      element: {
        defaultValue: "property",
        isConstant: true,
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: QueryCollectionFormat.Csv
};

export const body6: OperationParameter = {
  parameterPath: "body",
  mapper: ReplaceUnitGroupModelMapper
};
