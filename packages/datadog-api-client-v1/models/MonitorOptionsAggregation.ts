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
 * Type of aggregation performed in the monitor query.
 */
export class MonitorOptionsAggregation {
  /**
   * Group to break down the monitor on.
   */
  "groupBy"?: string;
  /**
   * Metric name used in the monitor.
   */
  "metric"?: string;
  /**
   * Metric type used in the monitor.
   */
  "type"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "groupBy",
      baseName: "group_by",
      type: "string",
      format: "",
    },
    {
      name: "metric",
      baseName: "metric",
      type: "string",
      format: "",
    },
    {
      name: "type",
      baseName: "type",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return MonitorOptionsAggregation.attributeTypeMap;
  }

  public constructor() {}
}