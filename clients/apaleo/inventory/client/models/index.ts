import * as coreHttp from "@azure/core-http";

export interface PropertyListModel {
  /** List of properties */
  properties: PropertyItemModel[];
  /** Total count of items */
  count: number;
}

export interface PropertyItemModel {
  /** The property id */
  id: string;
  /** The code for the property that can be shown in reports and table views */
  code: string;
  /** The id of the property used as a template while creating the property */
  propertyTemplateId?: string;
  /** Whether the property can be used as a template for other properties */
  isTemplate: boolean;
  /** The name for the property */
  name: string;
  /** The description for the property */
  description?: string;
  /** The legal name of the company running the property. */
  companyName: string;
  /** The managing director(s) of the company, as they should appear on invoices */
  managingDirectors?: string;
  /** The entry in the Commercial Register of the company running the property, as it should appear on invoices */
  commercialRegisterEntry: string;
  /** The Tax-ID of the company running the property, as it should appear on invoices */
  taxId: string;
  location: AddressModel;
  bankAccount?: BankAccountModel;
  /** The payment terms used for all rate plans */
  paymentTerms: { [propertyName: string]: string };
  /**
   * The time zone name of the property from the IANA Time Zone Database.
   * (see: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
   */
  timeZone: string;
  /** The currency a property works with. */
  currencyCode: string;
  /** Date of creation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  created: Date;
}

export interface AddressModel {
  addressLine1: string;
  addressLine2?: string;
  postalCode: string;
  city: string;
  countryCode: string;
}

export interface BankAccountModel {
  iban?: string;
  bic?: string;
  bank?: string;
}

export interface MessageItemCollection {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly messages?: string[];
}

export interface CreatePropertyModel {
  /** The code for the property that can be shown in reports and table views */
  code: string;
  /** The name for the property */
  name: { [propertyName: string]: string };
  /** The legal name of the company running the property. */
  companyName: string;
  /** The managing director(s) of the company, as they should appear on invoices */
  managingDirectors?: string;
  /** The entry in the Commercial Reigster of the company running the property, as it should appear on invoices */
  commercialRegisterEntry: string;
  /** The Tax-ID of the company running the property, as it should appear on invoices */
  taxId: string;
  /** The description for the property */
  description?: { [propertyName: string]: string };
  location: CreateAddressModel;
  bankAccount?: BankAccountModel;
  /** The payment terms used for all rate plans */
  paymentTerms: { [propertyName: string]: string };
  /**
   * The time zone name of the property from the IANA Time Zone Database.
   * (see: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
   */
  timeZone: string;
  /** The default check-in time<br />A time (without fractional second part) as defined in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  defaultCheckInTime: string;
  /** The default check-out time<br />A time (without fractional second part) as defined in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  defaultCheckOutTime: string;
  /** The currency a property works with. */
  currencyCode: string;
}

export interface CreateAddressModel {
  addressLine1: string;
  addressLine2?: string;
  postalCode: string;
  city: string;
  /** The country code, in ISO 3166-1 alpha-2 code */
  countryCode: string;
}

export interface PropertyCreatedModel {
  /** The property id */
  id: string;
}

export interface CountModel {
  count: number;
}

/** With this request you can create a new property */
export interface PropertyModel {
  /** The property id */
  id: string;
  /** The code for the property that can be shown in reports and table views */
  code: string;
  /** The id of the property used as a template while creating the property */
  propertyTemplateId?: string;
  /** Whether the property can be used as a template for other properties */
  isTemplate: boolean;
  /** The name for the property */
  name: { [propertyName: string]: string };
  /** The description for the property */
  description?: { [propertyName: string]: string };
  /** The legal name of the company running the property. */
  companyName: string;
  /** The managing director(s) of the company, as they should appear on invoices */
  managingDirectors?: string;
  /** The entry in the Commercial Register of the company running the property, as it should appear on invoices */
  commercialRegisterEntry: string;
  /** The Tax-ID of the company running the property, as it should appear on invoices */
  taxId: string;
  location: AddressModel;
  bankAccount?: BankAccountModel;
  /** The payment terms used for all rate plans */
  paymentTerms: { [propertyName: string]: string };
  /**
   * The time zone name of the property from the IANA Time Zone Database.
   * (see: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
   */
  timeZone: string;
  /** The currency a property works with. */
  currencyCode: string;
  /** Date of creation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  created: Date;
}

export interface Operation {
  /** Any object */
  value?: any;
  path?: string;
  op?: string;
  from?: string;
}

export interface CountryListModel {
  /** List of ISO country codes. */
  countryCodes: string[];
}

export interface UnitModel {
  /** The unit id */
  id: string;
  /** The name for the unit */
  name: string;
  /** The description for the unit */
  description: { [propertyName: string]: string };
  property: EmbeddedPropertyModel;
  unitGroup?: EmbeddedUnitGroupModel;
  status: UnitStatusModel;
  /** Maximum number of persons for the unit */
  maxPersons: number;
  /** Date of creation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  created: Date;
  /** Collection of user defined attributes of unit */
  attributes?: UnitAttributeModel[];
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

export interface EmbeddedUnitGroupModel {
  /** The unit group id */
  id: string;
  /** The code for the unit group that can be shown in reports and table views */
  code?: string;
  /** The name for the unit group */
  name?: string;
  /** The description for the unit group */
  description?: string;
}

export interface UnitStatusModel {
  isOccupied: boolean;
  condition: UnitCondition;
  maintenance?: UnitMaintenanceModel;
}

export interface UnitMaintenanceModel {
  /** The id for the scheduled maintenance */
  id: string;
  /** Date and time the scheduled maintenance window starts<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  from: Date;
  /** Date and time the scheduled maintenance window ends<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  to: Date;
  /**
   * The type of maintenance that is planned for the unit. A small repair (OutOfService),
   * a bigger disfunction that does not allow to sell the unit (OutOfOrder) or is it
   * even under construction and should reduce the house count (OutOfInventory)
   */
  type: MaintenanceType;
  /** The description text for the maintenance */
  description?: string;
}

export interface UnitAttributeModel {
  /** Id of unit attribute */
  id: string;
  /** The name of the unit attribute */
  name: string;
  /** Description of unit attribute */
  description?: string;
}

export interface UnitListModel {
  /** List of units */
  units: UnitItemModel[];
  /** Total count of items */
  count: number;
}

export interface UnitItemModel {
  /** The unit id */
  id: string;
  /** The name for the unit */
  name: string;
  /** The description for the unit */
  description: string;
  property: EmbeddedPropertyModel;
  unitGroup?: EmbeddedUnitGroupModel;
  status: UnitItemStatusModel;
  /** Maximum number of persons for the unit */
  maxPersons: number;
  /** Date of creation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a> */
  created: Date;
  /** Collection of user defined attributes of unit */
  attributes?: UnitAttributeModel[];
}

export interface UnitItemStatusModel {
  isOccupied: boolean;
  condition: UnitCondition;
  maintenance?: UnitItemMaintenanceModel;
}

export interface UnitItemMaintenanceModel {
  /** The id for the scheduled maintenance */
  id: string;
  /**
   * The type of maintenance that is planned for the unit. A small repair (OutOfService),
   * a bigger disfunction that does not allow to sell the unit (OutOfOrder) or is it
   * even under construction and should reduce the house count (OutOfInventory)
   */
  type: MaintenanceType;
}

export interface CreateUnitModel {
  /** The id of the property where the unit will be created */
  propertyId: string;
  /** The name for the unit */
  name: string;
  /** The description for the unit */
  description: { [propertyName: string]: string };
  /** The id of the unit group */
  unitGroupId?: string;
  /** Maximum number of persons for the unit */
  maxPersons: number;
  /** Condition of the unit */
  condition?: UnitCondition;
  /** Collection of user defined attributes of unit */
  attributes?: CreateUnitAttributeModel[];
}

export interface CreateUnitAttributeModel {
  /** Id of unit attribute */
  id: string;
}

export interface UnitCreatedModel {
  /** The unit id */
  id: string;
}

export interface BulkCreateUnitsModel {
  /** The id of the property where the units will be created */
  propertyId: string;
  /** The list of unit names */
  names: string[];
  /** The description, used for all units */
  description: { [propertyName: string]: string };
  /** The id of the unit group used for all units */
  unitGroupId?: string;
  /** Maximum number of persons for the units */
  maxPersons: number;
  /** Condition of the unit */
  condition?: UnitCondition;
  /** Collection of user defined attributes of unit */
  attributes?: CreateUnitAttributeModel[];
}

export interface BulkUnitsCreatedModel {
  /** The unit ids */
  ids: string[];
}

export interface UnitAttributeDefinitionModel {
  /** The id of the unit attribute */
  id: string;
  /** The name of the unit attribute */
  name: string;
  /** The description of the unit attribute */
  description?: string;
}

export interface UnitAttributeDefinitionListModel {
  /** List of unit attributes */
  unitAttributes: UnitAttributeDefinitionModel[];
  /** Total count of items */
  count: number;
}

export interface CreateUnitAttributeDefinitionModel {
  /** The name of the unit attribute */
  name: string;
  /** The description of the unit attribute */
  description?: string;
}

export interface UnitAttributeDefinitionCreatedModel {
  /** The unit attribute id */
  id: string;
}

export interface CreateUnitGroupModel {
  /** The code for the unit group that can be shown in reports and table views */
  code: string;
  /** The id of the property where unit group will be created */
  propertyId: string;
  /** The name for the unit group */
  name: { [propertyName: string]: string };
  /** The description for the unit group */
  description: { [propertyName: string]: string };
  /** Maximum number of persons for the unit group */
  maxPersons: number;
  /**
   * The unit group rank
   * Restrictions:
   * - Should be greater or equal to one
   */
  rank?: number;
  /** The unit group type */
  type?: LimitedUnitGroupType;
}

export interface UnitGroupCreatedModel {
  /** The unit group id */
  id: string;
}

export interface UnitGroupListModel {
  /** List of unit groups */
  unitGroups: UnitGroupItemModel[];
  /** Total count of items */
  count: number;
}

export interface UnitGroupItemModel {
  /** The unit group id */
  id: string;
  /** The code for the unit group that can be shown in reports and table views */
  code: string;
  /** The name for the unit group */
  name: string;
  /** The description for the unit group */
  description: string;
  /** Number of units in this group */
  memberCount: number;
  /** Maximum number of persons for the unit group */
  maxPersons?: number;
  /** The unit group rank */
  rank?: number;
  /** The unit group type */
  type: UnitGroupType;
  property: EmbeddedPropertyModel;
}

/** With this request you can create a new property */
export interface UnitGroupModel {
  /** The unit group id */
  id: string;
  /** The code for the unit group that can be shown in reports and table views */
  code: string;
  property: EmbeddedPropertyModel;
  /** The name for the unit group */
  name: { [propertyName: string]: string };
  /** Number of units in this group */
  memberCount: number;
  /** The description for the unit group */
  description: { [propertyName: string]: string };
  /** Maximum number of persons for the unit group */
  maxPersons: number;
  /** The unit group rank */
  rank?: number;
  /** The unit group type */
  type: UnitGroupType;
}

export interface ReplaceUnitGroupModel {
  /** The name for the unit group */
  name: { [propertyName: string]: string };
  /** The description for the unit group */
  description: { [propertyName: string]: string };
  /**
   * Maximum number of persons for the unit group.
   * If this value is increased, the surcharges for the related rate plans must be specified in order for the rate plans to be sellable for the new possible occupancies.
   */
  maxPersons?: number;
  /**
   * The unit group rank
   * Restrictions:
   * - Should be greater or equal to one
   */
  rank?: number;
}

/** Defines headers for ApaleoInventoryAPI_inventoryPropertiesPost operation. */
export interface ApaleoInventoryAPIInventoryPropertiesPostHeaders {
  /** The location of the created resource. */
  location?: string;
}

/** Defines headers for ApaleoInventoryAPI_inventoryUnitsPost operation. */
export interface ApaleoInventoryAPIInventoryUnitsPostHeaders {
  /** The location of the created resource. */
  location?: string;
}

/** Defines headers for ApaleoInventoryAPI_inventoryUnitsBulkPost operation. */
export interface ApaleoInventoryAPIInventoryUnitsBulkPostHeaders {
  /** The location of the created resource. */
  location?: string;
}

/** Defines headers for ApaleoInventoryAPI_inventoryUnitAttributesPost operation. */
export interface ApaleoInventoryAPIInventoryUnitAttributesPostHeaders {
  /** The location of the created resource. */
  location?: string;
}

/** Defines headers for ApaleoInventoryAPI_inventoryUnitGroupsPost operation. */
export interface ApaleoInventoryAPIInventoryUnitGroupsPostHeaders {
  /** The location of the created resource. */
  location?: string;
}

/** Known values of {@link Get2ItemsItem} that the service accepts. */
export const enum KnownGet2ItemsItem {
  Property = "property",
  UnitGroup = "unitGroup"
}

/**
 * Defines values for Get2ItemsItem. \
 * {@link KnownGet2ItemsItem} can be used interchangeably with Get2ItemsItem,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **property** \
 * **unitGroup**
 */
export type Get2ItemsItem = string;

/** Known values of {@link Get8ItemsItem} that the service accepts. */
export const enum KnownGet8ItemsItem {
  Property = "property",
  UnitGroup = "unitGroup"
}

/**
 * Defines values for Get8ItemsItem. \
 * {@link KnownGet8ItemsItem} can be used interchangeably with Get8ItemsItem,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **property** \
 * **unitGroup**
 */
export type Get8ItemsItem = string;
/** Defines values for UnitCondition. */
export type UnitCondition = "Clean" | "CleanToBeInspected" | "Dirty";
/** Defines values for MaintenanceType. */
export type MaintenanceType = "OutOfService" | "OutOfOrder" | "OutOfInventory";
/** Defines values for LimitedUnitGroupType. */
export type LimitedUnitGroupType =
  | "BedRoom"
  | "MeetingRoom"
  | "EventSpace"
  | "ParkingLot";
/** Defines values for UnitGroupType. */
export type UnitGroupType =
  | "BedRoom"
  | "MeetingRoom"
  | "EventSpace"
  | "ParkingLot"
  | "Other";

/** Optional parameters. */
export interface ApaleoInventoryAPIInventoryPropertiesGetOptionalParams
  extends coreHttp.OperationOptions {
  /** Page number, starting from 1 and defaulting to 1. Results in 204 if there are no items on that page. */
  pageNumber?: number;
  /** Page size. If this is not set, the pageNumber will be ignored and all values returned. */
  pageSize?: number;
}

/** Contains response data for the inventoryPropertiesGet operation. */
export type ApaleoInventoryAPIInventoryPropertiesGetResponse = PropertyListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: PropertyListModel;
  };
};

/** Optional parameters. */
export interface ApaleoInventoryAPIInventoryPropertiesPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/** Contains response data for the inventoryPropertiesPost operation. */
export type ApaleoInventoryAPIInventoryPropertiesPostResponse = ApaleoInventoryAPIInventoryPropertiesPostHeaders &
  PropertyCreatedModel & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: PropertyCreatedModel;
      /** The parsed HTTP response headers. */
      parsedHeaders: ApaleoInventoryAPIInventoryPropertiesPostHeaders;
    };
  };

/** Contains response data for the inventoryPropertiesCountGet operation. */
export type ApaleoInventoryAPIInventoryPropertiesCountGetResponse = CountModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: CountModel;
  };
};

/** Optional parameters. */
export interface ApaleoInventoryAPIInventoryPropertiesByIdGetOptionalParams
  extends coreHttp.OperationOptions {
  /** 'all' or comma separated list of two-letter language codes (ISO Alpha-2) */
  languages?: string[];
}

/** Contains response data for the inventoryPropertiesByIdGet operation. */
export type ApaleoInventoryAPIInventoryPropertiesByIdGetResponse = PropertyModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: PropertyModel;
  };
};

/** Contains response data for the inventoryPropertiesByIdPatch operation. */
export type ApaleoInventoryAPIInventoryPropertiesByIdPatchResponse = MessageItemCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: MessageItemCollection;
  };
};

/** Contains response data for the inventoryTypesCountriesGet operation. */
export type ApaleoInventoryAPIInventoryTypesCountriesGetResponse = CountryListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: CountryListModel;
  };
};

/** Contains response data for the inventoryUnitsByIdPatch operation. */
export type ApaleoInventoryAPIInventoryUnitsByIdPatchResponse = MessageItemCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: MessageItemCollection;
  };
};

/** Optional parameters. */
export interface ApaleoInventoryAPIInventoryUnitsByIdGetOptionalParams
  extends coreHttp.OperationOptions {
  /** 'all' or comma separated list of two-letter language codes (ISO Alpha-2) */
  languages?: string[];
  /** List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup. All other values will be silently ignored. */
  expand?: Get2ItemsItem[];
}

/** Contains response data for the inventoryUnitsByIdGet operation. */
export type ApaleoInventoryAPIInventoryUnitsByIdGetResponse = UnitModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: UnitModel;
  };
};

/** Contains response data for the inventoryUnitsByIdDelete operation. */
export type ApaleoInventoryAPIInventoryUnitsByIdDeleteResponse = MessageItemCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: MessageItemCollection;
  };
};

/** Contains response data for the inventoryUnitsPatch operation. */
export type ApaleoInventoryAPIInventoryUnitsPatchResponse = MessageItemCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: MessageItemCollection;
  };
};

/** Optional parameters. */
export interface ApaleoInventoryAPIInventoryUnitsGetOptionalParams
  extends coreHttp.OperationOptions {
  /** Page number, starting from 1 and defaulting to 1. Results in 204 if there are no items on that page. */
  pageNumber?: number;
  /** Page size. If this is not set, the pageNumber will be ignored and all values returned. */
  pageSize?: number;
  /** Return units for specific property */
  propertyId?: string;
  /** Return units for the specific unit group */
  unitGroupId?: string;
  /** Return units with the specific unit attributes */
  unitAttributeIds?: string[];
  /** Return only occupied or vacant units */
  isOccupied?: boolean;
  /** Return units with the specific maintenance type */
  maintenanceType?: MaintenanceType;
  /** Return units with a specific condition */
  condition?: UnitCondition;
  /** List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup. All other values will be silently ignored. */
  expand?: Get8ItemsItem[];
}

/** Contains response data for the inventoryUnitsGet operation. */
export type ApaleoInventoryAPIInventoryUnitsGetResponse = UnitListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: UnitListModel;
  };
};

/** Optional parameters. */
export interface ApaleoInventoryAPIInventoryUnitsPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/** Contains response data for the inventoryUnitsPost operation. */
export type ApaleoInventoryAPIInventoryUnitsPostResponse = ApaleoInventoryAPIInventoryUnitsPostHeaders &
  UnitCreatedModel & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: UnitCreatedModel;
      /** The parsed HTTP response headers. */
      parsedHeaders: ApaleoInventoryAPIInventoryUnitsPostHeaders;
    };
  };

/** Optional parameters. */
export interface ApaleoInventoryAPIInventoryUnitsCountGetOptionalParams
  extends coreHttp.OperationOptions {
  /** Return units for specific property */
  propertyId?: string;
  /** Return units for the specific unit group */
  unitGroupId?: string;
  /** Return units with the specific unit attributes */
  unitAttributeIds?: string[];
  /** Return only occupied or vacant units */
  isOccupied?: boolean;
  /** Return units with the specific maintenance type */
  maintenanceType?: MaintenanceType;
  /** Return units with a specific condition */
  condition?: UnitCondition;
}

/** Contains response data for the inventoryUnitsCountGet operation. */
export type ApaleoInventoryAPIInventoryUnitsCountGetResponse = CountModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: CountModel;
  };
};

/** Optional parameters. */
export interface ApaleoInventoryAPIInventoryUnitsBulkPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/** Contains response data for the inventoryUnitsBulkPost operation. */
export type ApaleoInventoryAPIInventoryUnitsBulkPostResponse = ApaleoInventoryAPIInventoryUnitsBulkPostHeaders &
  BulkUnitsCreatedModel & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: BulkUnitsCreatedModel;
      /** The parsed HTTP response headers. */
      parsedHeaders: ApaleoInventoryAPIInventoryUnitsBulkPostHeaders;
    };
  };

/** Contains response data for the inventoryUnitAttributesByIdGet operation. */
export type ApaleoInventoryAPIInventoryUnitAttributesByIdGetResponse = UnitAttributeDefinitionModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: UnitAttributeDefinitionModel;
  };
};

/** Contains response data for the inventoryUnitAttributesByIdPatch operation. */
export type ApaleoInventoryAPIInventoryUnitAttributesByIdPatchResponse = MessageItemCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: MessageItemCollection;
  };
};

/** Contains response data for the inventoryUnitAttributesByIdDelete operation. */
export type ApaleoInventoryAPIInventoryUnitAttributesByIdDeleteResponse = MessageItemCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: MessageItemCollection;
  };
};

/** Optional parameters. */
export interface ApaleoInventoryAPIInventoryUnitAttributesGetOptionalParams
  extends coreHttp.OperationOptions {
  /** Page number, starting from 1 and defaulting to 1. Results in 204 if there are no items on that page. */
  pageNumber?: number;
  /** Page size. If this is not set, the pageNumber will be ignored and all values returned. */
  pageSize?: number;
}

/** Contains response data for the inventoryUnitAttributesGet operation. */
export type ApaleoInventoryAPIInventoryUnitAttributesGetResponse = UnitAttributeDefinitionListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: UnitAttributeDefinitionListModel;
  };
};

/** Optional parameters. */
export interface ApaleoInventoryAPIInventoryUnitAttributesPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/** Contains response data for the inventoryUnitAttributesPost operation. */
export type ApaleoInventoryAPIInventoryUnitAttributesPostResponse = ApaleoInventoryAPIInventoryUnitAttributesPostHeaders &
  UnitAttributeDefinitionCreatedModel & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: UnitAttributeDefinitionCreatedModel;
      /** The parsed HTTP response headers. */
      parsedHeaders: ApaleoInventoryAPIInventoryUnitAttributesPostHeaders;
    };
  };

/** Optional parameters. */
export interface ApaleoInventoryAPIInventoryUnitGroupsPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/** Contains response data for the inventoryUnitGroupsPost operation. */
export type ApaleoInventoryAPIInventoryUnitGroupsPostResponse = ApaleoInventoryAPIInventoryUnitGroupsPostHeaders &
  UnitGroupCreatedModel & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: UnitGroupCreatedModel;
      /** The parsed HTTP response headers. */
      parsedHeaders: ApaleoInventoryAPIInventoryUnitGroupsPostHeaders;
    };
  };

/** Optional parameters. */
export interface ApaleoInventoryAPIInventoryUnitGroupsGetOptionalParams
  extends coreHttp.OperationOptions {
  /** Page number, starting from 1 and defaulting to 1. Results in 204 if there are no items on that page. */
  pageNumber?: number;
  /** Page size. If this is not set, the pageNumber will be ignored and all values returned. */
  pageSize?: number;
  /** Return unit groups for specific property */
  propertyId?: string;
  /** List of all embedded resources that should be expanded in the response. Possible values are: property. All other values will be silently ignored. */
  expand?: string[];
}

/** Contains response data for the inventoryUnitGroupsGet operation. */
export type ApaleoInventoryAPIInventoryUnitGroupsGetResponse = UnitGroupListModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: UnitGroupListModel;
  };
};

/** Optional parameters. */
export interface ApaleoInventoryAPIInventoryUnitGroupsCountGetOptionalParams
  extends coreHttp.OperationOptions {
  /** Return unit groups for specific property */
  propertyId?: string;
}

/** Contains response data for the inventoryUnitGroupsCountGet operation. */
export type ApaleoInventoryAPIInventoryUnitGroupsCountGetResponse = CountModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: CountModel;
  };
};

/** Optional parameters. */
export interface ApaleoInventoryAPIInventoryUnitGroupsByIdGetOptionalParams
  extends coreHttp.OperationOptions {
  /** 'all' or comma separated list of two-letter language codes (ISO Alpha-2) */
  languages?: string[];
  /** List of all embedded resources that should be expanded in the response. Possible values are: property. All other values will be silently ignored. */
  expand?: string[];
}

/** Contains response data for the inventoryUnitGroupsByIdGet operation. */
export type ApaleoInventoryAPIInventoryUnitGroupsByIdGetResponse = UnitGroupModel & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: UnitGroupModel;
  };
};

/** Contains response data for the inventoryUnitGroupsByIdPut operation. */
export type ApaleoInventoryAPIInventoryUnitGroupsByIdPutResponse = MessageItemCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: MessageItemCollection;
  };
};

/** Contains response data for the inventoryUnitGroupsByIdDelete operation. */
export type ApaleoInventoryAPIInventoryUnitGroupsByIdDeleteResponse = MessageItemCollection & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: MessageItemCollection;
  };
};

/** Optional parameters. */
export interface ApaleoInventoryAPIOptionalParams
  extends coreHttp.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
