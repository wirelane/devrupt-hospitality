import * as coreHttp from "@azure/core-http";

export interface ChargingPoint {
  /**
   * The internal ID of the EVSE (not to be displayed). The same value as `charging_point_id`. This value is generated by the Wirelane backend when the charge point is initially submitted.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The internal ID of the EVSE (not to be displayed). The same value as `id`. This value is generated by the Wirelane backend when the charge point is initially submitted.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly chargingPointId?: string;
  /** An optional user-defined ID to group different charging points into one logical station. Used for grouping in some apps. */
  chargingStationId?: string;
  /** The technical ID of the charge point connector. Shown to the user, and could be printed on the label (label code) */
  chargePointId: string;
  /** The EVSE ID used for roaming. */
  evseid?: string;
  displayId?: string;
  /** The owner of the charging station. */
  owner?: string;
  /** Name of the Emobility provider. [Deprecated] */
  emp?: string;
  /** Name of the Charge Point Operator */
  cpo?: string;
  /** Up to four types of plugs. */
  plugTypes?: ChargingPointPlugTypesItem[];
  /** Electricity type (AC or DC) */
  chargingType?: ChargingPointChargingType;
  /** Name of the charge point model */
  model?: string;
  /** The serial number */
  serialNumber?: string;
  /** Current in Ampere */
  current?: number;
  /** Power in kWh */
  power?: number;
  /** Voltage in V */
  voltage?: number;
  /** If this charging point supports reservations */
  reservable?: boolean;
  /** Authentication method for the charging point */
  authenticationTypes?: ChargingPointAuthenticationTypesItem[];
  /**
   * Status of the points. If one point in the station hits the requested status the entire station is returned.  (Comma Separated List)
   *   * FREE : Point is free.
   *   * IN_USE :  Point is used by a card (might also be reserved).
   *   * UNAVAILABLE : Point is unavailable right now. Might not be installed or broken.
   *   * UNKNOWN : The point status is unknonwn.
   *   * FAULTED : Point is faulted or temporary faulted.
   *   * RESERVED : The point is reserved.
   *   * CLOSED : The point status is closed (the point is not in use anymore).
   *
   */
  status?: ChargingPointStatus;
  /** In ISO 3166-1 alpha-2 */
  country?: string;
  city?: string;
  zipCode?: string;
  street?: string;
  houseNumber?: string;
  /** @deprecated - use availability instead. Label describing charging point availability. */
  openingHours?: string;
  /** Availability of charging point */
  availability?: ChargingPointAvailability;
  /** Timezone of charging point. */
  timezone?: string;
  /** The telephone number of the service hotline */
  serviceHotline?: string;
  /** Longitude of the charging point (WGS 84) */
  longitude?: number;
  /** Latitude of the charging point (WGS 84) */
  latitude?: number;
  /** Is returned when searching for charging points and providing a center */
  distance?: number;
  /**
   * ISO 8601
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly creationDate?: Date;
  /**
   * ISO 8601
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly updateDate?: Date;
  paymentUrl?: string;
  /**
   * If the charging point is using the Wirelane backend or a delegated backend, use "emc".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly chargingProvider?: string;
  chargingGroup?: ChargingPointGroup[];
}

export interface OpeningHours {
  /** Arbitrary label to give the availability. */
  label?: string;
  /** Is available 24/7. If true, Monday - Sunday times will be ignored. */
  open247?: boolean;
  /** Start and end time pairs reperesenting availability on Mondays. */
  monday?: string[];
  /** Start and end time pairs reperesenting availability on Tuesdays. */
  tuesday?: string[];
  /** Start and end time pairs reperesenting availability on Wednesdays. */
  wednesday?: string[];
  /** Start and end time pairs reperesenting availability on Thursdays. */
  thursday?: string[];
  /** Start and end time pairs reperesenting availability on Fridays. */
  friday?: string[];
  /** Start and end time pairs reperesenting availability on Saturdays. */
  saturday?: string[];
  /** Start and end time pairs reperesenting availability on Sundays. */
  sunday?: string[];
  /** Start and end time pairs reperesenting availability on specific dates. Dates in Y-m-d format. * can be used as year, month or day wildcards to represent recurring dates. */
  exceptionalOpenings?: any;
}

export interface ChargingPointGroup {
  /** The internal ID of the charging point group */
  id?: number;
  /** The group name */
  name?: string;
  owner?: string;
}

export interface HttpError {
  /** The error code describing the error */
  errorCode?: string;
  /** The human readable error message describing the error */
  errorMessage?: string;
}

/** Availability of charging point */
export type ChargingPointAvailability = OpeningHours & {};

/** Defines headers for WirelaneAPI_organizationFindChargingPoints operation. */
export interface WirelaneAPIOrganizationFindChargingPointsHeaders {
  /** Total number of items */
  xTotalCount?: number;
  /** Total number of pages */
  xTotalPages?: number;
}

/** Known values of {@link ChargingPointPlugTypesItem} that the service accepts. */
export const enum KnownChargingPointPlugTypesItem {
  Type1 = "TYPE_1",
  Type1Atch = "TYPE_1_ATCH",
  Type2 = "TYPE_2",
  Type2Atch = "TYPE_2_ATCH",
  Type3 = "TYPE_3",
  Type3Atch = "TYPE_3_ATCH",
  Chademo = "CHADEMO",
  CCS = "CCS",
  Schuko = "SCHUKO",
  Unknown = "UNKNOWN"
}

/**
 * Defines values for ChargingPointPlugTypesItem. \
 * {@link KnownChargingPointPlugTypesItem} can be used interchangeably with ChargingPointPlugTypesItem,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **TYPE_1** \
 * **TYPE_1_ATCH** \
 * **TYPE_2** \
 * **TYPE_2_ATCH** \
 * **TYPE_3** \
 * **TYPE_3_ATCH** \
 * **CHADEMO** \
 * **CCS** \
 * **SCHUKO** \
 * **UNKNOWN**
 */
export type ChargingPointPlugTypesItem = string;

/** Known values of {@link ChargingPointChargingType} that the service accepts. */
export const enum KnownChargingPointChargingType {
  AC = "AC",
  DC = "DC"
}

/**
 * Defines values for ChargingPointChargingType. \
 * {@link KnownChargingPointChargingType} can be used interchangeably with ChargingPointChargingType,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **AC** \
 * **DC**
 */
export type ChargingPointChargingType = string;

/** Known values of {@link ChargingPointAuthenticationTypesItem} that the service accepts. */
export const enum KnownChargingPointAuthenticationTypesItem {
  Card = "card",
  Remote = "remote",
  Direct = "direct"
}

/**
 * Defines values for ChargingPointAuthenticationTypesItem. \
 * {@link KnownChargingPointAuthenticationTypesItem} can be used interchangeably with ChargingPointAuthenticationTypesItem,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **card** \
 * **remote** \
 * **direct**
 */
export type ChargingPointAuthenticationTypesItem = string;

/** Known values of {@link ChargingPointStatus} that the service accepts. */
export const enum KnownChargingPointStatus {
  Free = "FREE",
  INUSE = "IN_USE",
  Unavailable = "UNAVAILABLE",
  Unknown = "UNKNOWN",
  Faulted = "FAULTED",
  Reserved = "RESERVED",
  Closed = "CLOSED"
}

/**
 * Defines values for ChargingPointStatus. \
 * {@link KnownChargingPointStatus} can be used interchangeably with ChargingPointStatus,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **FREE** \
 * **IN_USE** \
 * **UNAVAILABLE** \
 * **UNKNOWN** \
 * **FAULTED** \
 * **RESERVED** \
 * **CLOSED**
 */
export type ChargingPointStatus = string;

/** Known values of {@link Enum4} that the service accepts. */
export const enum KnownEnum4 {
  Evseid = "evseid",
  Status = "status",
  Latitude = "latitude",
  Longitude = "longitude",
  Power = "power",
  Voltage = "voltage",
  ChargingType = "chargingType",
  PlugType = "plugType",
  Country = "country",
  City = "city",
  ZipCode = "zipCode",
  CreationDate = "creationDate",
  UpdateDate = "updateDate",
  Distance = "distance"
}

/**
 * Defines values for Enum4. \
 * {@link KnownEnum4} can be used interchangeably with Enum4,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **evseid** \
 * **status** \
 * **latitude** \
 * **longitude** \
 * **power** \
 * **voltage** \
 * **chargingType** \
 * **plugType** \
 * **country** \
 * **city** \
 * **zipCode** \
 * **creationDate** \
 * **updateDate** \
 * **distance**
 */
export type Enum4 = string;

/** Known values of {@link Enum5} that the service accepts. */
export const enum KnownEnum5 {
  Asc = "asc",
  Desc = "desc"
}

/**
 * Defines values for Enum5. \
 * {@link KnownEnum5} can be used interchangeably with Enum5,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **asc** \
 * **desc**
 */
export type Enum5 = string;

/** Known values of {@link PlugTypesParameterItemsItem} that the service accepts. */
export const enum KnownPlugTypesParameterItemsItem {
  Type1 = "TYPE_1",
  Type1Atch = "TYPE_1_ATCH",
  Type2 = "TYPE_2",
  Type2Atch = "TYPE_2_ATCH",
  Type3 = "TYPE_3",
  Type3Atch = "TYPE_3_ATCH",
  Chademo = "CHADEMO",
  CCS = "CCS",
  Schuko = "SCHUKO",
  Unknown = "UNKNOWN"
}

/**
 * Defines values for PlugTypesParameterItemsItem. \
 * {@link KnownPlugTypesParameterItemsItem} can be used interchangeably with PlugTypesParameterItemsItem,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **TYPE_1** \
 * **TYPE_1_ATCH** \
 * **TYPE_2** \
 * **TYPE_2_ATCH** \
 * **TYPE_3** \
 * **TYPE_3_ATCH** \
 * **CHADEMO** \
 * **CCS** \
 * **SCHUKO** \
 * **UNKNOWN**
 */
export type PlugTypesParameterItemsItem = string;

/** Known values of {@link ChargingTypeParamItemsItem} that the service accepts. */
export const enum KnownChargingTypeParamItemsItem {
  AC = "AC",
  DC = "DC"
}

/**
 * Defines values for ChargingTypeParamItemsItem. \
 * {@link KnownChargingTypeParamItemsItem} can be used interchangeably with ChargingTypeParamItemsItem,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **AC** \
 * **DC**
 */
export type ChargingTypeParamItemsItem = string;

/** Known values of {@link AuthTypesParameterItemsItem} that the service accepts. */
export const enum KnownAuthTypesParameterItemsItem {
  Card = "card",
  Remote = "remote",
  Direct = "direct"
}

/**
 * Defines values for AuthTypesParameterItemsItem. \
 * {@link KnownAuthTypesParameterItemsItem} can be used interchangeably with AuthTypesParameterItemsItem,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **card** \
 * **remote** \
 * **direct**
 */
export type AuthTypesParameterItemsItem = string;

/** Known values of {@link Enum9} that the service accepts. */
export const enum KnownEnum9 {
  Id = "id",
  Evseid = "evseid",
  ChargingPointId = "charging_point_id",
  ChargePointId = "charge_point_id"
}

/**
 * Defines values for Enum9. \
 * {@link KnownEnum9} can be used interchangeably with Enum9,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **id** \
 * **evseid** \
 * **charging_point_id** \
 * **charge_point_id**
 */
export type Enum9 = string;

/** Known values of {@link Enum10} that the service accepts. */
export const enum KnownEnum10 {
  Id = "id",
  Evseid = "evseid",
  ChargingPointId = "charging_point_id",
  ChargePointId = "charge_point_id"
}

/**
 * Defines values for Enum10. \
 * {@link KnownEnum10} can be used interchangeably with Enum10,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **id** \
 * **evseid** \
 * **charging_point_id** \
 * **charge_point_id**
 */
export type Enum10 = string;

/** Contains response data for the organizationCreateChargingPoint operation. */
export type WirelaneAPIOrganizationCreateChargingPointResponse = ChargingPoint & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ChargingPoint;
  };
};

/** Contains response data for the organizationFindChargingPoints operation. */
export type WirelaneAPIOrganizationFindChargingPointsResponse = WirelaneAPIOrganizationFindChargingPointsHeaders &
  ChargingPoint[] & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: ChargingPoint[];
      /** The parsed HTTP response headers. */
      parsedHeaders: WirelaneAPIOrganizationFindChargingPointsHeaders;
    };
  };

/** Contains response data for the organizationFindChargingPoint operation. */
export type WirelaneAPIOrganizationFindChargingPointResponse = ChargingPoint & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ChargingPoint;
  };
};

/** Contains response data for the organizationUpdateChargingPoint operation. */
export type WirelaneAPIOrganizationUpdateChargingPointResponse = ChargingPoint & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ChargingPoint;
  };
};

/** Optional parameters. */
export interface WirelaneAPIOptionalParams
  extends coreHttp.ServiceClientOptions {
  /** Number of current page */
  page?: string;
  /** Number of items per page */
  pageSize?: string;
  /** Context search string */
  search?: string;
  /** Name for sort */
  orderBy?: Enum4;
  /** Key for order direction */
  orderDirection?: Enum5;
  /** Latitude */
  lat?: string;
  /** Longitude */
  lon?: string;
  /** Search distance in meters */
  distance?: string;
  /** Latitude */
  southWestLat?: string;
  /** Longitude */
  southWestLon?: string;
  /** Latitude */
  northEastLat?: string;
  /** Longitude */
  northEastLon?: string;
  /**
   * The plug types. (Comma Separated List)
   *   * TYPE_1
   *   * TYPE_1_ATCH : With cable attached
   *   * TYPE_2
   *   * TYPE_2_ATCH : With cable attached
   *   * TYPE_3
   *   * TYPE_3_ATCH : With cable attached
   *   * CHADEMO
   *   * CCS
   *   * SCHUKO
   *   * UNKNOWN
   *
   */
  plugTypes?: PlugTypesParameterItemsItem[];
  /**
   * Status of the points. If one point in the station hits the requested status the entire station is returned.  (Comma Separated List)
   *   * FREE : Point is free.
   *   * IN_USE :  Point is used by a card (might also be reserved).
   *   * UNAVAILABLE : Point is unavailable right now. Might not be installed or broken.
   *   * UNKNOWN : The point status is unknonwn.
   *   * FAULTED : Point is faulted or temporary faulted.
   *   * RESERVED : The point is reserved.
   *   * CLOSED : The point status is closed (the point is not in use anymore).
   *
   */
  status?: string[];
  /**
   * The charging type. (Comma Separated List)
   *   * AC
   *   * DC
   *
   */
  chargingType?: ChargingTypeParamItemsItem[];
  /**
   * The charging station authorization type. (Comma Separated List)
   *   * card
   *   * remote
   *   * direct
   *
   */
  authType?: AuthTypesParameterItemsItem[];
  /**
   * The charging speed. Greater than 0
   *
   */
  maxPower?: string;
  /** To exchange only infrastructure specific data */
  infrastructureOnly?: string;
  /** Search for specific point groups */
  pointGroups?: string[];
  /** Filter by list of evseids */
  evseid?: string[];
  /** Latitude for sortable */
  sortLat?: string;
  /** Longitude for sortable */
  sortLon?: string;
  /** To exchange only reservable points */
  reservable?: string;
  /** Filter by list of charging station id's */
  chargingStationId?: string[];
  /** Filter by list of owner_id */
  ownerId?: string[];
  /** Array of NotInPointGroupsParamItemsItem */
  notInPointGroups?: string[];
  /** Overrides client endpoint. */
  endpoint?: string;
}
