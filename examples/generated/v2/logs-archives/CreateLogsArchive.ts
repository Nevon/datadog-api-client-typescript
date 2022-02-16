import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsArchivesApi(configuration);

let params: v2.LogsArchivesApiCreateLogsArchiveRequest = {
  // LogsArchiveCreateRequest | The definition of the new archive.
  body: {
    data: {
      attributes: {
        destination: {
          container: "container-name",
          integration: {
            clientId: "aaaaaaaa-1a1a-1a1a-1a1a-aaaaaaaaaaaa",
            tenantId: "aaaaaaaa-1a1a-1a1a-1a1a-aaaaaaaaaaaa",
          },
          path: "path_example",
          region: "region_example",
          storageAccount: "account-name",
          type: "azure",
        },
        includeTags: false,
        name: "Nginx Archive",
        query: "source:nginx",
        rehydrationTags: ["team:intake", "team:app"],
      },
      type: "archives",
    },
  },
};

apiInstance
  .createLogsArchive(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));