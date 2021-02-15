/**
 * Datadog API V1 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from "../http/http";

/**
 * Object containing the ordered list of log index names.
 */
export class LogsIndexesOrder {
  /**
   * Array of strings identifying by their name(s) the index(es) of your organization. Logs are tested against the query filter of each index one by one, following the order of the array. Logs are eventually stored in the first matching index.
   */
  "indexNames": Array<string>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "indexNames",
      baseName: "index_names",
      type: "Array<string>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return LogsIndexesOrder.attributeTypeMap;
  }

  public constructor() {}
}