/**
 * Get the latest Cloud Workload Security policy returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.CloudWorkloadSecurityApi(configuration);

apiInstance
  .downloadCloudWorkloadPolicyFile()
  .then((data: v2.HttpFile) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
