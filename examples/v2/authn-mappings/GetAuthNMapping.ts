/**
 * Get an AuthN Mapping by UUID returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.AuthNMappingsApi(configuration);

// there is a valid "authn_mapping" in the system
let AUTHN_MAPPING_DATA_ID = process.env.AUTHN_MAPPING_DATA_ID as string;

let params: v2.AuthNMappingsApiGetAuthNMappingRequest = {
  authnMappingId: AUTHN_MAPPING_DATA_ID,
};

apiInstance
  .getAuthNMapping(params)
  .then((data: v2.AuthNMappingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
