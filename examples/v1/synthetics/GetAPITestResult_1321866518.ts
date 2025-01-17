/**
 * Get an API test result returns result with failure object
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

// there is a "synthetics_api_test_with_wrong_dns" in the system
let SYNTHETICS_API_TEST_WITH_WRONG_DNS_PUBLIC_ID = process.env
  .SYNTHETICS_API_TEST_WITH_WRONG_DNS_PUBLIC_ID as string;

// the "synthetics_api_test_with_wrong_dns" is triggered
let SYNTHETICS_API_TEST_WITH_WRONG_DNS_RESULT_RESULTS_0_RESULT_ID = process.env
  .SYNTHETICS_API_TEST_WITH_WRONG_DNS_RESULT_RESULTS_0_RESULT_ID as string;

let params: v1.SyntheticsApiGetAPITestResultRequest = {
  publicId: SYNTHETICS_API_TEST_WITH_WRONG_DNS_PUBLIC_ID,
  resultId: SYNTHETICS_API_TEST_WITH_WRONG_DNS_RESULT_RESULTS_0_RESULT_ID,
};

apiInstance
  .getAPITestResult(params)
  .then((data: v1.SyntheticsAPITestResultFull) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
