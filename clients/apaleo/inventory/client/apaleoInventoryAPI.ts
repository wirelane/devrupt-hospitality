import * as coreHttp from "@azure/core-http";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { ApaleoInventoryAPIContext } from "./apaleoInventoryAPIContext";
import {
  ApaleoInventoryAPIOptionalParams,
  ApaleoInventoryAPIInventoryPropertiesGetOptionalParams,
  ApaleoInventoryAPIInventoryPropertiesGetResponse,
  CreatePropertyModel,
  ApaleoInventoryAPIInventoryPropertiesPostOptionalParams,
  ApaleoInventoryAPIInventoryPropertiesPostResponse,
  ApaleoInventoryAPIInventoryPropertiesCountGetResponse,
  ApaleoInventoryAPIInventoryPropertiesByIdGetOptionalParams,
  ApaleoInventoryAPIInventoryPropertiesByIdGetResponse,
  Operation,
  ApaleoInventoryAPIInventoryPropertiesByIdPatchResponse,
  ApaleoInventoryAPIInventoryTypesCountriesGetResponse,
  ApaleoInventoryAPIInventoryUnitsByIdPatchResponse,
  ApaleoInventoryAPIInventoryUnitsByIdGetOptionalParams,
  ApaleoInventoryAPIInventoryUnitsByIdGetResponse,
  ApaleoInventoryAPIInventoryUnitsByIdDeleteResponse,
  ApaleoInventoryAPIInventoryUnitsPatchResponse,
  ApaleoInventoryAPIInventoryUnitsGetOptionalParams,
  ApaleoInventoryAPIInventoryUnitsGetResponse,
  CreateUnitModel,
  ApaleoInventoryAPIInventoryUnitsPostOptionalParams,
  ApaleoInventoryAPIInventoryUnitsPostResponse,
  ApaleoInventoryAPIInventoryUnitsCountGetOptionalParams,
  ApaleoInventoryAPIInventoryUnitsCountGetResponse,
  BulkCreateUnitsModel,
  ApaleoInventoryAPIInventoryUnitsBulkPostOptionalParams,
  ApaleoInventoryAPIInventoryUnitsBulkPostResponse,
  ApaleoInventoryAPIInventoryUnitAttributesByIdGetResponse,
  ApaleoInventoryAPIInventoryUnitAttributesByIdPatchResponse,
  ApaleoInventoryAPIInventoryUnitAttributesByIdDeleteResponse,
  ApaleoInventoryAPIInventoryUnitAttributesGetOptionalParams,
  ApaleoInventoryAPIInventoryUnitAttributesGetResponse,
  CreateUnitAttributeDefinitionModel,
  ApaleoInventoryAPIInventoryUnitAttributesPostOptionalParams,
  ApaleoInventoryAPIInventoryUnitAttributesPostResponse,
  CreateUnitGroupModel,
  ApaleoInventoryAPIInventoryUnitGroupsPostOptionalParams,
  ApaleoInventoryAPIInventoryUnitGroupsPostResponse,
  ApaleoInventoryAPIInventoryUnitGroupsGetOptionalParams,
  ApaleoInventoryAPIInventoryUnitGroupsGetResponse,
  ApaleoInventoryAPIInventoryUnitGroupsCountGetOptionalParams,
  ApaleoInventoryAPIInventoryUnitGroupsCountGetResponse,
  ApaleoInventoryAPIInventoryUnitGroupsByIdGetOptionalParams,
  ApaleoInventoryAPIInventoryUnitGroupsByIdGetResponse,
  ReplaceUnitGroupModel,
  ApaleoInventoryAPIInventoryUnitGroupsByIdPutResponse,
  ApaleoInventoryAPIInventoryUnitGroupsByIdDeleteResponse
} from "./models";

export class ApaleoInventoryAPI extends ApaleoInventoryAPIContext {
  /**
   * Initializes a new instance of the ApaleoInventoryAPI class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    $host: string,
    options?: ApaleoInventoryAPIOptionalParams
  ) {
    super(credentials, $host, options);
  }

  /**
   * Get the list of properties.<br>You need to be authorized (no particular scope required)
   * @param options The options parameters.
   */
  inventoryPropertiesGet(
    options?: ApaleoInventoryAPIInventoryPropertiesGetOptionalParams
  ): Promise<ApaleoInventoryAPIInventoryPropertiesGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryPropertiesGetOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryPropertiesGetResponse>;
  }

  /**
   * Use this call to create a new property.<br>You must have at least one of these scopes:
   * 'properties.create, setup.manage'.
   * @param body The definition of the property.
   * @param options The options parameters.
   */
  inventoryPropertiesPost(
    body: CreatePropertyModel,
    options?: ApaleoInventoryAPIInventoryPropertiesPostOptionalParams
  ): Promise<ApaleoInventoryAPIInventoryPropertiesPostResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryPropertiesPostOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryPropertiesPostResponse>;
  }

  /**
   * Return total count of properties<br>You need to be authorized (no particular scope required)
   * @param options The options parameters.
   */
  inventoryPropertiesCountGet(
    options?: coreHttp.OperationOptions
  ): Promise<ApaleoInventoryAPIInventoryPropertiesCountGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryPropertiesCountGetOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryPropertiesCountGetResponse>;
  }

  /**
   * Check if a property exists by id.<br>You need to be authorized (no particular scope required)
   * @param id The id of the property.
   * @param options The options parameters.
   */
  inventoryPropertiesByIdHead(
    id: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      id,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryPropertiesByIdHeadOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get a property by id.<br>You need to be authorized (no particular scope required)
   * @param id The id of the property.
   * @param options The options parameters.
   */
  inventoryPropertiesByIdGet(
    id: string,
    options?: ApaleoInventoryAPIInventoryPropertiesByIdGetOptionalParams
  ): Promise<ApaleoInventoryAPIInventoryPropertiesByIdGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      id,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryPropertiesByIdGetOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryPropertiesByIdGetResponse>;
  }

  /**
   * Here's a list of allowed operations:
   * - Replace Name
   * - Add, replace and remove Description
   * - Replace CompanyName
   * - Add, replace and remove ManagingDirectors
   * - Replace CommercialRegisterEntry
   * - Replace TaxId
   * - Replace Location
   * - Add, replace and remove BankAccount
   * - Replace PaymentTerms
   * - Set IsTemplate<br>You must have at least one of these scopes: 'properties.manage, setup.manage'.
   * @param id The id of the property.
   * @param body Define the list of operations to be applied to the resource. Learn more about JSON Patch
   *             here: http://jsonpatch.com/.
   * @param options The options parameters.
   */
  inventoryPropertiesByIdPatch(
    id: string,
    body: Operation[],
    options?: coreHttp.OperationOptions
  ): Promise<ApaleoInventoryAPIInventoryPropertiesByIdPatchResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      id,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryPropertiesByIdPatchOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryPropertiesByIdPatchResponse>;
  }

  /**
   * Returns a list of ISO country codes that could be used to create properties.
   * @param options The options parameters.
   */
  inventoryTypesCountriesGet(
    options?: coreHttp.OperationOptions
  ): Promise<ApaleoInventoryAPIInventoryTypesCountriesGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryTypesCountriesGetOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryTypesCountriesGetResponse>;
  }

  /**
   * Here's a list of allowed operations:
   * - Set unit condition
   * - Set unit description
   * - Set unit name
   * - Set unit unitGroupId
   * - Set unit maxPersons
   * - Add unit attribute
   * - Remove unit attribute<br>You must have at least one of these scopes: 'units.manage, setup.manage'.
   * @param id The id of the unit.
   * @param body Define the list of operations to be applied to the resource. Learn more about JSON Patch
   *             here: http://jsonpatch.com/.
   * @param options The options parameters.
   */
  inventoryUnitsByIdPatch(
    id: string,
    body: Operation[],
    options?: coreHttp.OperationOptions
  ): Promise<ApaleoInventoryAPIInventoryUnitsByIdPatchResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      id,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryUnitsByIdPatchOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryUnitsByIdPatchResponse>;
  }

  /**
   * Get a unit by id.<br>You must have at least one of these scopes: 'units.read, setup.read,
   * setup.manage'.
   * @param id The id of the unit.
   * @param options The options parameters.
   */
  inventoryUnitsByIdGet(
    id: string,
    options?: ApaleoInventoryAPIInventoryUnitsByIdGetOptionalParams
  ): Promise<ApaleoInventoryAPIInventoryUnitsByIdGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      id,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryUnitsByIdGetOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryUnitsByIdGetResponse>;
  }

  /**
   * Check if a unit exists by id.<br>You must have at least one of these scopes: 'units.read,
   * setup.read, setup.manage'.
   * @param id The id of the unit.
   * @param options The options parameters.
   */
  inventoryUnitsByIdHead(
    id: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      id,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryUnitsByIdHeadOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Use this call to delete a unit.<br>You must have at least one of these scopes: 'units.delete,
   * setup.manage'.
   * @param id The id of the unit.
   * @param options The options parameters.
   */
  inventoryUnitsByIdDelete(
    id: string,
    options?: coreHttp.OperationOptions
  ): Promise<ApaleoInventoryAPIInventoryUnitsByIdDeleteResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      id,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryUnitsByIdDeleteOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryUnitsByIdDeleteResponse>;
  }

  /**
   * Here's a list of allowed operations:
   * - Set unit condition
   * - Set unit description
   * - Set unit name
   * - Set unit unitGroupId
   * - Set unit maxPersons
   * - Add unit attribute
   * - Remove unit attribute<br>You must have at least one of these scopes: 'units.manage, setup.manage'.
   * @param unitIds Array of Patch0ItemsItem
   * @param body Define the list of operations to be applied to the resource. Learn more about JSON Patch
   *             here: http://jsonpatch.com/.
   * @param options The options parameters.
   */
  inventoryUnitsPatch(
    unitIds: string[],
    body: Operation[],
    options?: coreHttp.OperationOptions
  ): Promise<ApaleoInventoryAPIInventoryUnitsPatchResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      unitIds,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryUnitsPatchOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryUnitsPatchResponse>;
  }

  /**
   * Get the list of units.<br>You must have at least one of these scopes: 'units.read, setup.read,
   * setup.manage'.
   * @param options The options parameters.
   */
  inventoryUnitsGet(
    options?: ApaleoInventoryAPIInventoryUnitsGetOptionalParams
  ): Promise<ApaleoInventoryAPIInventoryUnitsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryUnitsGetOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryUnitsGetResponse>;
  }

  /**
   * Use this call to create a new unit.<br>You must have at least one of these scopes: 'units.create,
   * setup.manage'.
   * @param body The definition of the unit.
   * @param options The options parameters.
   */
  inventoryUnitsPost(
    body: CreateUnitModel,
    options?: ApaleoInventoryAPIInventoryUnitsPostOptionalParams
  ): Promise<ApaleoInventoryAPIInventoryUnitsPostResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryUnitsPostOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryUnitsPostResponse>;
  }

  /**
   * Returns number of units matching the filter criteria<br>You must have at least one of these scopes:
   * 'units.read, setup.read, setup.manage'.
   * @param options The options parameters.
   */
  inventoryUnitsCountGet(
    options?: ApaleoInventoryAPIInventoryUnitsCountGetOptionalParams
  ): Promise<ApaleoInventoryAPIInventoryUnitsCountGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryUnitsCountGetOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryUnitsCountGetResponse>;
  }

  /**
   * Use this call to create multiple units, following a naming rule.<br>You must have at least one of
   * these scopes: 'units.create, setup.manage'.
   * @param body The definition of the units.
   * @param options The options parameters.
   */
  inventoryUnitsBulkPost(
    body: BulkCreateUnitsModel,
    options?: ApaleoInventoryAPIInventoryUnitsBulkPostOptionalParams
  ): Promise<ApaleoInventoryAPIInventoryUnitsBulkPostResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryUnitsBulkPostOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryUnitsBulkPostResponse>;
  }

  /**
   * Get unit attribute by id<br>You must have at least one of these scopes: 'unitattributes.read,
   * setup.read, setup.manage'.
   * @param id The id of the unit attribute
   * @param options The options parameters.
   */
  inventoryUnitAttributesByIdGet(
    id: string,
    options?: coreHttp.OperationOptions
  ): Promise<ApaleoInventoryAPIInventoryUnitAttributesByIdGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      id,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryUnitAttributesByIdGetOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryUnitAttributesByIdGetResponse>;
  }

  /**
   * Here's a list of allowed operations:
   * - Replace / Remove Description<br>You must have at least one of these scopes:
   * 'unitattributes.manage, setup.manage'.
   * @param id Id of unit attribute
   * @param body Define the list of operations to be applied to the resource. Learn more about JSON Patch
   *             here: http://jsonpatch.com/.
   * @param options The options parameters.
   */
  inventoryUnitAttributesByIdPatch(
    id: string,
    body: Operation[],
    options?: coreHttp.OperationOptions
  ): Promise<ApaleoInventoryAPIInventoryUnitAttributesByIdPatchResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      id,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryUnitAttributesByIdPatchOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryUnitAttributesByIdPatchResponse>;
  }

  /**
   * Deletes unit attribute<br>You must have at least one of these scopes: 'unitattributes.delete,
   * setup.manage'.
   * @param id Id of unit attribute
   * @param options The options parameters.
   */
  inventoryUnitAttributesByIdDelete(
    id: string,
    options?: coreHttp.OperationOptions
  ): Promise<ApaleoInventoryAPIInventoryUnitAttributesByIdDeleteResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      id,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryUnitAttributesByIdDeleteOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryUnitAttributesByIdDeleteResponse>;
  }

  /**
   * Check if a unit attribute exists<br>You must have at least one of these scopes:
   * 'unitattributes.read, setup.read, setup.manage'.
   * @param id The id of the unit attribute.
   * @param options The options parameters.
   */
  inventoryUnitAttributesByIdHead(
    id: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      id,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryUnitAttributesByIdHeadOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get unit attribute list<br>You must have at least one of these scopes: 'unitattributes.read,
   * setup.read, setup.manage'.
   * @param options The options parameters.
   */
  inventoryUnitAttributesGet(
    options?: ApaleoInventoryAPIInventoryUnitAttributesGetOptionalParams
  ): Promise<ApaleoInventoryAPIInventoryUnitAttributesGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryUnitAttributesGetOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryUnitAttributesGetResponse>;
  }

  /**
   * Use this call to create a new unit attribute.<br>You must have at least one of these scopes:
   * 'unitattributes.create, setup.manage'.
   * @param body The unit attribute.
   * @param options The options parameters.
   */
  inventoryUnitAttributesPost(
    body: CreateUnitAttributeDefinitionModel,
    options?: ApaleoInventoryAPIInventoryUnitAttributesPostOptionalParams
  ): Promise<ApaleoInventoryAPIInventoryUnitAttributesPostResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryUnitAttributesPostOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryUnitAttributesPostResponse>;
  }

  /**
   * Use this call to create a new unit group.<br>You must have at least one of these scopes:
   * 'unitgroups.create, setup.manage'.
   * @param body The definition of the unit group.
   * @param options The options parameters.
   */
  inventoryUnitGroupsPost(
    body: CreateUnitGroupModel,
    options?: ApaleoInventoryAPIInventoryUnitGroupsPostOptionalParams
  ): Promise<ApaleoInventoryAPIInventoryUnitGroupsPostResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryUnitGroupsPostOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryUnitGroupsPostResponse>;
  }

  /**
   * Get the list of unit groups.<br>You must have at least one of these scopes: 'unitgroups.read,
   * setup.read, setup.manage'.
   * @param options The options parameters.
   */
  inventoryUnitGroupsGet(
    options?: ApaleoInventoryAPIInventoryUnitGroupsGetOptionalParams
  ): Promise<ApaleoInventoryAPIInventoryUnitGroupsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryUnitGroupsGetOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryUnitGroupsGetResponse>;
  }

  /**
   * Returns number of unit groups matching the filter criteria<br>You must have at least one of these
   * scopes: 'unitgroups.read, setup.read, setup.manage'.
   * @param options The options parameters.
   */
  inventoryUnitGroupsCountGet(
    options?: ApaleoInventoryAPIInventoryUnitGroupsCountGetOptionalParams
  ): Promise<ApaleoInventoryAPIInventoryUnitGroupsCountGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryUnitGroupsCountGetOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryUnitGroupsCountGetResponse>;
  }

  /**
   * Check if a unit group exists by id.<br>You must have at least one of these scopes: 'unitgroups.read,
   * setup.read, setup.manage'.
   * @param id The id of the unit group.
   * @param options The options parameters.
   */
  inventoryUnitGroupsByIdHead(
    id: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      id,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryUnitGroupsByIdHeadOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get a unit group by id.<br>You must have at least one of these scopes: 'unitgroups.read, setup.read,
   * setup.manage'.
   * @param id The id of the unit group.
   * @param options The options parameters.
   */
  inventoryUnitGroupsByIdGet(
    id: string,
    options?: ApaleoInventoryAPIInventoryUnitGroupsByIdGetOptionalParams
  ): Promise<ApaleoInventoryAPIInventoryUnitGroupsByIdGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      id,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryUnitGroupsByIdGetOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryUnitGroupsByIdGetResponse>;
  }

  /**
   * Use this call to modify a unit group.<br>You must have at least one of these scopes:
   * 'unitgroups.manage, setup.manage'.
   * @param id The id of the unit group.
   * @param body The definition of the unit group.
   * @param options The options parameters.
   */
  inventoryUnitGroupsByIdPut(
    id: string,
    body: ReplaceUnitGroupModel,
    options?: coreHttp.OperationOptions
  ): Promise<ApaleoInventoryAPIInventoryUnitGroupsByIdPutResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      id,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryUnitGroupsByIdPutOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryUnitGroupsByIdPutResponse>;
  }

  /**
   * Use this call to delete a unit group.<br>You must have at least one of these scopes:
   * 'unitgroups.delete, setup.manage'.
   * @param id The id of the unit group.
   * @param options The options parameters.
   */
  inventoryUnitGroupsByIdDelete(
    id: string,
    options?: coreHttp.OperationOptions
  ): Promise<ApaleoInventoryAPIInventoryUnitGroupsByIdDeleteResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      id,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      inventoryUnitGroupsByIdDeleteOperationSpec
    ) as Promise<ApaleoInventoryAPIInventoryUnitGroupsByIdDeleteResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const inventoryPropertiesGetOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/properties",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PropertyListModel
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [Parameters.pageNumber, Parameters.pageSize],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const inventoryPropertiesPostOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/properties",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.PropertyCreatedModel,
      headersMapper: Mappers.ApaleoInventoryAPIInventoryPropertiesPostHeaders
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body,
  urlParameters: [Parameters.$host],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.idempotencyKey
  ],
  mediaType: "json",
  serializer
};
const inventoryPropertiesCountGetOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/properties/$count",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CountModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const inventoryPropertiesByIdHeadOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/properties/{id}",
  httpMethod: "HEAD",
  responses: { 200: {}, 400: {}, 401: {}, 403: {}, 404: {}, 500: {}, 503: {} },
  urlParameters: [Parameters.$host, Parameters.id],
  serializer
};
const inventoryPropertiesByIdGetOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/properties/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PropertyModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [Parameters.languages],
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const inventoryPropertiesByIdPatchOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/properties/{id}",
  httpMethod: "PATCH",
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const inventoryTypesCountriesGetOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/types/countries",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CountryListModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const inventoryUnitsByIdPatchOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/units/{id}",
  httpMethod: "PATCH",
  responses: {
    200: {},
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const inventoryUnitsByIdGetOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/units/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UnitModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [Parameters.languages, Parameters.expand],
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const inventoryUnitsByIdHeadOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/units/{id}",
  httpMethod: "HEAD",
  responses: { 200: {}, 400: {}, 401: {}, 403: {}, 404: {}, 500: {}, 503: {} },
  urlParameters: [Parameters.$host, Parameters.id],
  serializer
};
const inventoryUnitsByIdDeleteOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/units/{id}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const inventoryUnitsPatchOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/units",
  httpMethod: "PATCH",
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body1,
  queryParameters: [Parameters.unitIds],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const inventoryUnitsGetOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/units",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UnitListModel
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [
    Parameters.pageNumber,
    Parameters.pageSize,
    Parameters.propertyId,
    Parameters.unitGroupId,
    Parameters.unitAttributeIds,
    Parameters.isOccupied,
    Parameters.maintenanceType,
    Parameters.condition,
    Parameters.expand1
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const inventoryUnitsPostOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/units",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.UnitCreatedModel,
      headersMapper: Mappers.ApaleoInventoryAPIInventoryUnitsPostHeaders
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body2,
  urlParameters: [Parameters.$host],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.idempotencyKey
  ],
  mediaType: "json",
  serializer
};
const inventoryUnitsCountGetOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/units/$count",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CountModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [
    Parameters.propertyId,
    Parameters.unitGroupId,
    Parameters.unitAttributeIds,
    Parameters.isOccupied,
    Parameters.maintenanceType,
    Parameters.condition
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const inventoryUnitsBulkPostOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/units/bulk",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {
      bodyMapper: Mappers.BulkUnitsCreatedModel,
      headersMapper: Mappers.ApaleoInventoryAPIInventoryUnitsBulkPostHeaders
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body3,
  urlParameters: [Parameters.$host],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.idempotencyKey
  ],
  mediaType: "json",
  serializer
};
const inventoryUnitAttributesByIdGetOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/unit-attributes/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UnitAttributeDefinitionModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const inventoryUnitAttributesByIdPatchOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/unit-attributes/{id}",
  httpMethod: "PATCH",
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const inventoryUnitAttributesByIdDeleteOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/unit-attributes/{id}",
  httpMethod: "DELETE",
  responses: {
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const inventoryUnitAttributesByIdHeadOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/unit-attributes/{id}",
  httpMethod: "HEAD",
  responses: { 200: {}, 400: {}, 401: {}, 403: {}, 404: {}, 500: {}, 503: {} },
  urlParameters: [Parameters.$host, Parameters.id],
  serializer
};
const inventoryUnitAttributesGetOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/unit-attributes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UnitAttributeDefinitionListModel
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [Parameters.pageNumber, Parameters.pageSize],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const inventoryUnitAttributesPostOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/unit-attributes",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.UnitAttributeDefinitionCreatedModel,
      headersMapper:
        Mappers.ApaleoInventoryAPIInventoryUnitAttributesPostHeaders
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body4,
  urlParameters: [Parameters.$host],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.idempotencyKey
  ],
  mediaType: "json",
  serializer
};
const inventoryUnitGroupsPostOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/unit-groups",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.UnitGroupCreatedModel,
      headersMapper: Mappers.ApaleoInventoryAPIInventoryUnitGroupsPostHeaders
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body5,
  urlParameters: [Parameters.$host],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.idempotencyKey
  ],
  mediaType: "json",
  serializer
};
const inventoryUnitGroupsGetOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/unit-groups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UnitGroupListModel
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [
    Parameters.pageNumber,
    Parameters.pageSize,
    Parameters.propertyId,
    Parameters.expand2
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const inventoryUnitGroupsCountGetOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/unit-groups/$count",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CountModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [Parameters.propertyId],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const inventoryUnitGroupsByIdHeadOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/unit-groups/{id}",
  httpMethod: "HEAD",
  responses: { 200: {}, 400: {}, 401: {}, 403: {}, 404: {}, 500: {}, 503: {} },
  urlParameters: [Parameters.$host, Parameters.id],
  serializer
};
const inventoryUnitGroupsByIdGetOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/unit-groups/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UnitGroupModel
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  queryParameters: [Parameters.languages, Parameters.expand2],
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const inventoryUnitGroupsByIdPutOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/unit-groups/{id}",
  httpMethod: "PUT",
  responses: {
    200: {},
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  requestBody: Parameters.body6,
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const inventoryUnitGroupsByIdDeleteOperationSpec: coreHttp.OperationSpec = {
  path: "/inventory/v1/unit-groups/{id}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection
    },
    500: {},
    503: {}
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
