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
 * The number of synthetics tests run for each hour for a given organization.
 */
export class UsageSyntheticsHour {
  /**
   * Contains the number of Synthetics API tests run.
   */
  "checkCallsCount"?: number;
  /**
   * The hour for the usage.
   */
  "hour"?: Date;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "checkCallsCount",
      baseName: "check_calls_count",
      type: "number",
      format: "int64",
    },
    {
      name: "hour",
      baseName: "hour",
      type: "Date",
      format: "date-time",
    },
  ];

  static getAttributeTypeMap() {
    return UsageSyntheticsHour.attributeTypeMap;
  }

  public constructor() {}
}