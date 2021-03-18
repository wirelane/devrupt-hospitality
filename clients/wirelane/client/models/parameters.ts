import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
  QueryCollectionFormat
} from "@azure/core-http";
import { ChargingPoint as ChargingPointMapper } from "../models/mappers";

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

export const chargingPoint: OperationParameter = {
  parameterPath: "chargingPoint",
  mapper: ChargingPointMapper
};

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

export const organizationId: OperationURLParameter = {
  parameterPath: "organizationId",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-_]+$")
    },
    serializedName: "organizationId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const page: OperationQueryParameter = {
  parameterPath: "page",
  mapper: {
    defaultValue: "1",
    constraints: {
      Pattern: new RegExp("^[0-9]*$")
    },
    serializedName: "page",
    type: {
      name: "String"
    }
  }
};

export const pageSize: OperationQueryParameter = {
  parameterPath: "pageSize",
  mapper: {
    defaultValue: "50",
    constraints: {
      Pattern: new RegExp("^[0-9]*$")
    },
    serializedName: "page_size",
    type: {
      name: "String"
    }
  }
};

export const search: OperationQueryParameter = {
  parameterPath: "search",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-ZÀ-ÿ0-9-_*.,\\x27\\x20]+$")
    },
    serializedName: "search",
    type: {
      name: "String"
    }
  }
};

export const orderBy: OperationQueryParameter = {
  parameterPath: "orderBy",
  mapper: {
    serializedName: "order_by",
    type: {
      name: "String"
    }
  }
};

export const orderDirection: OperationQueryParameter = {
  parameterPath: "orderDirection",
  mapper: {
    serializedName: "order_direction",
    type: {
      name: "String"
    }
  }
};

export const lat: OperationQueryParameter = {
  parameterPath: "lat",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-+]?[0-9]*.?[0-9]+$")
    },
    serializedName: "lat",
    type: {
      name: "String"
    }
  }
};

export const lon: OperationQueryParameter = {
  parameterPath: "lon",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-+]?[0-9]*.?[0-9]+$")
    },
    serializedName: "lon",
    type: {
      name: "String"
    }
  }
};

export const distance: OperationQueryParameter = {
  parameterPath: "distance",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[0-9]*$")
    },
    serializedName: "distance",
    type: {
      name: "String"
    }
  }
};

export const southWestLat: OperationQueryParameter = {
  parameterPath: "southWestLat",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-+]?[0-9]*.?[0-9]+$")
    },
    serializedName: "south_west_lat",
    type: {
      name: "String"
    }
  }
};

export const southWestLon: OperationQueryParameter = {
  parameterPath: "southWestLon",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-+]?[0-9]*.?[0-9]+$")
    },
    serializedName: "south_west_lon",
    type: {
      name: "String"
    }
  }
};

export const northEastLat: OperationQueryParameter = {
  parameterPath: "northEastLat",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-+]?[0-9]*.?[0-9]+$")
    },
    serializedName: "north_east_lat",
    type: {
      name: "String"
    }
  }
};

export const northEastLon: OperationQueryParameter = {
  parameterPath: "northEastLon",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-+]?[0-9]*.?[0-9]+$")
    },
    serializedName: "north_east_lon",
    type: {
      name: "String"
    }
  }
};

export const plugTypes: OperationQueryParameter = {
  parameterPath: "plugTypes",
  mapper: {
    serializedName: "plug_types",
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

export const status: OperationQueryParameter = {
  parameterPath: "status",
  mapper: {
    serializedName: "status",
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

export const chargingType: OperationQueryParameter = {
  parameterPath: "chargingType",
  mapper: {
    serializedName: "charging_type",
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

export const authType: OperationQueryParameter = {
  parameterPath: "authType",
  mapper: {
    serializedName: "auth_type",
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

export const maxPower: OperationQueryParameter = {
  parameterPath: "maxPower",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-+]?[0-9]*.?[0-9]+$")
    },
    serializedName: "max_power",
    type: {
      name: "String"
    }
  }
};

export const infrastructureOnly: OperationQueryParameter = {
  parameterPath: "infrastructureOnly",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[0-1]{1}$")
    },
    serializedName: "infrastructure_only",
    type: {
      name: "String"
    }
  }
};

export const pointGroups: OperationQueryParameter = {
  parameterPath: "pointGroups",
  mapper: {
    serializedName: "point_groups",
    type: {
      name: "Sequence",
      element: {
        constraints: {
          Pattern: new RegExp("^[0-9]+$")
        },
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: QueryCollectionFormat.Csv
};

export const evseid: OperationQueryParameter = {
  parameterPath: "evseid",
  mapper: {
    serializedName: "evseid",
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

export const sortLat: OperationQueryParameter = {
  parameterPath: "sortLat",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-+]?[0-9]*.?[0-9]+$")
    },
    serializedName: "sort_lat",
    type: {
      name: "String"
    }
  }
};

export const sortLon: OperationQueryParameter = {
  parameterPath: "sortLon",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-+]?[0-9]*.?[0-9]+$")
    },
    serializedName: "sort_lon",
    type: {
      name: "String"
    }
  }
};

export const reservable: OperationQueryParameter = {
  parameterPath: "reservable",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[0-1]{1}$")
    },
    serializedName: "reservable",
    type: {
      name: "String"
    }
  }
};

export const chargingStationId: OperationQueryParameter = {
  parameterPath: "chargingStationId",
  mapper: {
    serializedName: "charging_station_id",
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

export const ownerId: OperationQueryParameter = {
  parameterPath: "ownerId",
  mapper: {
    serializedName: "owner_id",
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

export const notInPointGroups: OperationQueryParameter = {
  parameterPath: "notInPointGroups",
  mapper: {
    serializedName: "not_in_point_groups",
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

export const pointTypeId: OperationURLParameter = {
  parameterPath: "pointTypeId",
  mapper: {
    serializedName: "pointTypeId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const pointId: OperationURLParameter = {
  parameterPath: "pointId",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-_*]+$")
    },
    serializedName: "pointId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const pointTypeId1: OperationURLParameter = {
  parameterPath: "pointTypeId",
  mapper: {
    serializedName: "pointTypeId",
    required: true,
    type: {
      name: "String"
    }
  }
};
