/**
 * Schedule a downtime once a year
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

let params: v1.DowntimesApiCreateDowntimeRequest = {
  body: {
    message: "Example-Schedule_a_downtime_once_a_year",
    recurrence: {
      period: 1,
      type: "years",
    },
    scope: ["*"],
    start: new Date().getTime() / 1000,
    end: new Date(new Date().getTime() / 1000 + 1 * 3600).getTime() / 1000,
    timezone: "Etc/UTC",
  },
};

apiInstance
  .createDowntime(params)
  .then((data: v1.Downtime) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
