import fs from "fs";
import path from "path";
import { getProperty, pathLookup } from "./templating";
import * as datadogApiClient from "../../index";

interface iOperationParameter {
  name: string;
  source: string;
  template: string;
}

interface iUndo {
  type: "safe" | "unsafe" | "idempotent";
  operationId: string;
  parameters: iOperationParameter[];
}

interface iUndoAction {
  tag: string;
  undo: iUndo;
}

const UndoActions: {
  [version: string]: { [operationId: string]: iUndoAction };
} = {};
for (const apiVersion of ["v1", "v2"]) {
  const content = fs
    .readFileSync(path.join(__dirname, `../${apiVersion}/undo.json`))
    .toString();
  UndoActions[apiVersion] = JSON.parse(content) as {
    [index: string]: iUndoAction;
  };
}

function buildUndoFor(
  apiVersion: string,
  operationUndo: iUndoAction,
  operationOrig: string,
  response: any
): { (): void } {
  return function (): void {
    const apiName = operationUndo.tag.replace(/\s/g, "");
    const operationName = operationUndo.undo.operationId.toOperationName();

    const api = getProperty(datadogApiClient, apiVersion);
    let configurationOpts = {
      authMethods: {
        apiKeyAuth: process.env.DD_TEST_CLIENT_API_KEY,
        appKeyAuth: process.env.DD_TEST_CLIENT_APP_KEY,
      },
      httpConfig: {compress: false}
    }
    if (process.env.DD_TEST_SITE) {
      let server = api.servers[2];
      let serverConf = server.getConfiguration();
      server.setVariables({"site": process.env.DD_TEST_SITE} as (typeof serverConf));
      (configurationOpts as any)['baseServer'] = server;
    }
    const configuration = api.createConfiguration(configurationOpts);
    const apiInstance = new (api as any)[`${apiName}Api`](configuration)

    // perform operation
    const opts: { [key: string]: any } = {};
    for (const p of operationUndo.undo.parameters) {
      let value: any;
      if (p.source !== undefined) {
        opts[p.name.toAttributeName()] = pathLookup(response, p.source);
      } else if (p.template !== undefined) {
        let data = JSON.parse(p.template.templated(response));
        let param: { [key: string]: any } = {};
        for (let [key, value] of Object.entries(data)) {
          param[key.toAttributeName()] = value
        }
        opts[p.name.toAttributeName()] = param;
      }
    }

    apiInstance[operationName](opts).then(
      () => { },
      (error: any) => {
        console.error(`could not undo operation ${operationOrig}: ${error}`)
      }
    );
  };
}

export { UndoActions, buildUndoFor };
