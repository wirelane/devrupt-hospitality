import * as coreHttp from "@azure/core-http";
import {
  Enum4,
  Enum5,
  PlugTypesParameterItemsItem,
  ChargingTypeParamItemsItem,
  AuthTypesParameterItemsItem,
  WirelaneAPIOptionalParams
} from "./models";

const packageName = "WirelaneAPI";
const packageVersion = "1.0.0";

export class WirelaneAPIContext extends coreHttp.ServiceClient {
  $host: string;
  page?: string;
  pageSize?: string;
  search?: string;
  orderBy?: Enum4;
  orderDirection?: Enum5;
  lat?: string;
  lon?: string;
  distance?: string;
  southWestLat?: string;
  southWestLon?: string;
  northEastLat?: string;
  northEastLon?: string;
  plugTypes?: PlugTypesParameterItemsItem[];
  status?: string[];
  chargingType?: ChargingTypeParamItemsItem[];
  authType?: AuthTypesParameterItemsItem[];
  maxPower?: string;
  infrastructureOnly?: string;
  pointGroups?: string[];
  evseid?: string[];
  sortLat?: string;
  sortLon?: string;
  reservable?: string;
  chargingStationId?: string[];
  ownerId?: string[];
  notInPointGroups?: string[];

  /**
   * Initializes a new instance of the WirelaneAPIContext class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    $host: string,
    options?: WirelaneAPIOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if ($host === undefined) {
      throw new Error("'$host' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(credentials, options);

    this.requestContentType = "application/json; charset=utf-8";

    this.baseUri = options.endpoint || "{$host}";

    // Parameter assignments
    this.$host = $host;
  }
}
