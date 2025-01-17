/**
 * Get all Cloud Workload Security Agent rules returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.CloudWorkloadSecurityApi(configuration);

apiInstance
  .listCloudWorkloadSecurityAgentRules()
  .then((data: v2.CloudWorkloadSecurityAgentRulesListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
