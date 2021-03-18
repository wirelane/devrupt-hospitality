import * as coreHttp from "@azure/core-http";

export const ChargingPoint: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChargingPoint",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      chargingPointId: {
        serializedName: "charging_point_id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      chargingStationId: {
        serializedName: "charging_station_id",
        type: {
          name: "String"
        }
      },
      chargePointId: {
        serializedName: "charge_point_id",
        required: true,
        type: {
          name: "String"
        }
      },
      evseid: {
        serializedName: "evseid",
        type: {
          name: "String"
        }
      },
      displayId: {
        serializedName: "display_id",
        type: {
          name: "String"
        }
      },
      owner: {
        serializedName: "owner",
        type: {
          name: "String"
        }
      },
      emp: {
        serializedName: "emp",
        type: {
          name: "String"
        }
      },
      cpo: {
        serializedName: "cpo",
        type: {
          name: "String"
        }
      },
      plugTypes: {
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
      chargingType: {
        serializedName: "charging_type",
        type: {
          name: "String"
        }
      },
      model: {
        serializedName: "model",
        type: {
          name: "String"
        }
      },
      serialNumber: {
        serializedName: "serial_number",
        type: {
          name: "String"
        }
      },
      current: {
        serializedName: "current",
        type: {
          name: "Number"
        }
      },
      power: {
        serializedName: "power",
        type: {
          name: "Number"
        }
      },
      voltage: {
        serializedName: "voltage",
        type: {
          name: "Number"
        }
      },
      reservable: {
        serializedName: "reservable",
        type: {
          name: "Boolean"
        }
      },
      authenticationTypes: {
        serializedName: "authentication_types",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      country: {
        serializedName: "country",
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
      zipCode: {
        serializedName: "zip_code",
        type: {
          name: "String"
        }
      },
      street: {
        serializedName: "street",
        type: {
          name: "String"
        }
      },
      houseNumber: {
        serializedName: "house_number",
        type: {
          name: "String"
        }
      },
      openingHours: {
        serializedName: "opening_hours",
        type: {
          name: "String"
        }
      },
      availability: {
        serializedName: "availability",
        type: {
          name: "Composite",
          className: "ChargingPointAvailability"
        }
      },
      timezone: {
        serializedName: "timezone",
        type: {
          name: "String"
        }
      },
      serviceHotline: {
        serializedName: "service_hotline",
        type: {
          name: "String"
        }
      },
      longitude: {
        serializedName: "longitude",
        type: {
          name: "Number"
        }
      },
      latitude: {
        serializedName: "latitude",
        type: {
          name: "Number"
        }
      },
      distance: {
        serializedName: "distance",
        type: {
          name: "Number"
        }
      },
      creationDate: {
        serializedName: "creation_date",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      updateDate: {
        serializedName: "update_date",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      paymentUrl: {
        serializedName: "payment_url",
        type: {
          name: "String"
        }
      },
      chargingProvider: {
        serializedName: "charging_provider",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      chargingGroup: {
        serializedName: "charging_group",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChargingPointGroup"
            }
          }
        }
      }
    }
  }
};

export const OpeningHours: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OpeningHours",
    modelProperties: {
      label: {
        serializedName: "label",
        type: {
          name: "String"
        }
      },
      open247: {
        serializedName: "open247",
        type: {
          name: "Boolean"
        }
      },
      monday: {
        serializedName: "monday",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      tuesday: {
        serializedName: "tuesday",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      wednesday: {
        serializedName: "wednesday",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      thursday: {
        serializedName: "thursday",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      friday: {
        serializedName: "friday",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      saturday: {
        serializedName: "saturday",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      sunday: {
        serializedName: "sunday",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      exceptionalOpenings: {
        serializedName: "exceptionalOpenings",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ChargingPointGroup: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChargingPointGroup",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      owner: {
        serializedName: "owner",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HttpError: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "HttpError",
    modelProperties: {
      errorCode: {
        serializedName: "error_code",
        type: {
          name: "String"
        }
      },
      errorMessage: {
        serializedName: "error_message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ChargingPointAvailability: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChargingPointAvailability",
    modelProperties: {
      ...OpeningHours.type.modelProperties
    }
  }
};

export const WirelaneAPIOrganizationFindChargingPointsHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WirelaneAPIOrganizationFindChargingPointsHeaders",
    modelProperties: {
      xTotalCount: {
        serializedName: "x-total-count",
        type: {
          name: "Number"
        }
      },
      xTotalPages: {
        serializedName: "x-total-pages",
        type: {
          name: "Number"
        }
      }
    }
  }
};
