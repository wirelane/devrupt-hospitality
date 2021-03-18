import * as coreHttp from "@azure/core-http";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { WirelaneAPIContext } from "./wirelaneAPIContext";
import {
  WirelaneAPIOptionalParams,
  ChargingPoint,
  WirelaneAPIOrganizationCreateChargingPointResponse,
  WirelaneAPIOrganizationFindChargingPointsResponse,
  Enum9,
  WirelaneAPIOrganizationFindChargingPointResponse,
  Enum10,
  WirelaneAPIOrganizationUpdateChargingPointResponse
} from "./models";

export class WirelaneAPI extends WirelaneAPIContext {
  /**
   * Initializes a new instance of the WirelaneAPI class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    $host: string,
    options?: WirelaneAPIOptionalParams
  ) {
    super(credentials, $host, options);
  }

  /**
   * Create a charging point for the provider of the organization.
   * @param organizationId Organization ID
   * @param chargingPoint Create a charging point
   * @param options The options parameters.
   */
  organizationCreateChargingPoint(
    organizationId: string,
    chargingPoint: ChargingPoint,
    options?: coreHttp.OperationOptions
  ): Promise<WirelaneAPIOrganizationCreateChargingPointResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      organizationId,
      chargingPoint,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      organizationCreateChargingPointOperationSpec
    ) as Promise<WirelaneAPIOrganizationCreateChargingPointResponse>;
  }

  /**
   * Finding charging points for the account.
   *
   * @param organizationId Organization ID
   * @param options The options parameters.
   */
  organizationFindChargingPoints(
    organizationId: string,
    options?: coreHttp.OperationOptions
  ): Promise<WirelaneAPIOrganizationFindChargingPointsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      organizationId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      organizationFindChargingPointsOperationSpec
    ) as Promise<WirelaneAPIOrganizationFindChargingPointsResponse>;
  }

  /**
   * Get a single charging point by their charging point evseId
   *
   * @param organizationId Organization ID
   * @param pointTypeId Sets which field of ChargingPoint the `pointId` parameters refers to:
   *                      * `id` / `charging_point_id`: The internal ID of the EVSE
   *                      * `evseid`: The Roaming EVSE ID
   *                      * `charge_point_id`: The technical ID of the charge point connector. Shown to the user, and could
   *                    be printed on the label (label code)
   *
   * @param pointId The ID to search for. Note that not all characters indicated by the pattern are
   *                allowed for each type of ID; e.g., the asterisk is only allowed if an EVSE ID is provided.
   * @param options The options parameters.
   */
  organizationFindChargingPoint(
    organizationId: string,
    pointTypeId: Enum9,
    pointId: string,
    options?: coreHttp.OperationOptions
  ): Promise<WirelaneAPIOrganizationFindChargingPointResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      organizationId,
      pointTypeId,
      pointId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      organizationFindChargingPointOperationSpec
    ) as Promise<WirelaneAPIOrganizationFindChargingPointResponse>;
  }

  /**
   * Update a charging point for the provider of the organization.
   * @param organizationId Organization ID
   * @param pointTypeId Sets which field of ChargingPoint the `pointId` parameters refers to:
   *                      * `id` / `charging_point_id`: The internal ID of the EVSE
   *                      * `evseid`: The Roaming EVSE ID
   *                      * `charge_point_id`: The technical ID of the charge point connector. Shown to the user, and could
   *                    be printed on the label (label code)
   *
   * @param pointId The ID to search for. Note that not all characters indicated by the pattern are
   *                allowed for each type of ID; e.g., the asterisk is only allowed if an EVSE ID is provided.
   * @param chargingPoint Create a charging point
   * @param options The options parameters.
   */
  organizationUpdateChargingPoint(
    organizationId: string,
    pointTypeId: Enum10,
    pointId: string,
    chargingPoint: ChargingPoint,
    options?: coreHttp.OperationOptions
  ): Promise<WirelaneAPIOrganizationUpdateChargingPointResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      organizationId,
      pointTypeId,
      pointId,
      chargingPoint,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      organizationUpdateChargingPointOperationSpec
    ) as Promise<WirelaneAPIOrganizationUpdateChargingPointResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const organizationCreateChargingPointOperationSpec: coreHttp.OperationSpec = {
  path: "/organizations/id/{organizationId}/points",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ChargingPoint
    },
    400: {
      bodyMapper: Mappers.HttpError
    },
    401: {
      bodyMapper: Mappers.HttpError
    },
    404: {
      bodyMapper: Mappers.HttpError
    },
    500: {
      bodyMapper: Mappers.HttpError
    }
  },
  requestBody: Parameters.chargingPoint,
  urlParameters: [Parameters.$host, Parameters.organizationId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const organizationFindChargingPointsOperationSpec: coreHttp.OperationSpec = {
  path: "/organizations/id/{organizationId}/points",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "ChargingPoint" } }
        }
      },
      headersMapper: Mappers.WirelaneAPIOrganizationFindChargingPointsHeaders
    },
    400: {
      bodyMapper: Mappers.HttpError
    },
    401: {
      bodyMapper: Mappers.HttpError
    },
    403: {
      bodyMapper: Mappers.HttpError
    },
    404: {
      bodyMapper: Mappers.HttpError
    },
    406: {
      bodyMapper: Mappers.HttpError
    },
    429: {
      bodyMapper: Mappers.HttpError
    },
    500: {
      bodyMapper: Mappers.HttpError
    },
    503: {
      bodyMapper: Mappers.HttpError
    },
    default: {
      bodyMapper: Mappers.HttpError
    }
  },
  queryParameters: [
    Parameters.page,
    Parameters.pageSize,
    Parameters.search,
    Parameters.orderBy,
    Parameters.orderDirection,
    Parameters.lat,
    Parameters.lon,
    Parameters.distance,
    Parameters.southWestLat,
    Parameters.southWestLon,
    Parameters.northEastLat,
    Parameters.northEastLon,
    Parameters.plugTypes,
    Parameters.status,
    Parameters.chargingType,
    Parameters.authType,
    Parameters.maxPower,
    Parameters.infrastructureOnly,
    Parameters.pointGroups,
    Parameters.evseid,
    Parameters.sortLat,
    Parameters.sortLon,
    Parameters.reservable,
    Parameters.chargingStationId,
    Parameters.ownerId,
    Parameters.notInPointGroups
  ],
  urlParameters: [Parameters.$host, Parameters.organizationId],
  headerParameters: [Parameters.accept],
  serializer
};
const organizationFindChargingPointOperationSpec: coreHttp.OperationSpec = {
  path: "/organizations/id/{organizationId}/points/{pointTypeId}/{pointId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChargingPoint
    },
    400: {
      bodyMapper: Mappers.HttpError
    },
    401: {
      bodyMapper: Mappers.HttpError
    },
    403: {
      bodyMapper: Mappers.HttpError
    },
    404: {
      bodyMapper: Mappers.HttpError
    },
    406: {
      bodyMapper: Mappers.HttpError
    },
    429: {
      bodyMapper: Mappers.HttpError
    },
    500: {
      bodyMapper: Mappers.HttpError
    },
    503: {
      bodyMapper: Mappers.HttpError
    },
    default: {
      bodyMapper: Mappers.HttpError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.organizationId,
    Parameters.pointTypeId,
    Parameters.pointId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const organizationUpdateChargingPointOperationSpec: coreHttp.OperationSpec = {
  path: "/organizations/id/{organizationId}/points/{pointTypeId}/{pointId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ChargingPoint
    },
    400: {
      bodyMapper: Mappers.HttpError
    },
    401: {
      bodyMapper: Mappers.HttpError
    },
    404: {
      bodyMapper: Mappers.HttpError
    },
    500: {
      bodyMapper: Mappers.HttpError
    }
  },
  requestBody: Parameters.chargingPoint,
  urlParameters: [
    Parameters.$host,
    Parameters.organizationId,
    Parameters.pointId,
    Parameters.pointTypeId1
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
