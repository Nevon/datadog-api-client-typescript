/**
 * Datadog API V2 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Log } from "./Log";
import { LogsListResponseLinks } from "./LogsListResponseLinks";
import { LogsResponseMetadata } from "./LogsResponseMetadata";
import { HttpFile } from "../http/http";

/**
 * Response object with all logs matching the request and pagination information.
 */
export class LogsListResponse {
  /**
   * Array of logs matching the request.
   */
  "data"?: Array<Log>;
  "links"?: LogsListResponseLinks;
  "meta"?: LogsResponseMetadata;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "data",
      baseName: "data",
      type: "Array<Log>",
      format: "",
    },
    {
      name: "links",
      baseName: "links",
      type: "LogsListResponseLinks",
      format: "",
    },
    {
      name: "meta",
      baseName: "meta",
      type: "LogsResponseMetadata",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return LogsListResponse.attributeTypeMap;
  }

  public constructor() {}
}