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

import { IncidentFieldAttributesSingleValueType } from "./IncidentFieldAttributesSingleValueType";
import { HttpFile } from "../http/http";

/**
 * A field with a single value selected.
 */
export class IncidentFieldAttributesSingleValue {
  "type"?: IncidentFieldAttributesSingleValueType;
  /**
   * The single value selected for this field.
   */
  "value"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "type",
      baseName: "type",
      type: "IncidentFieldAttributesSingleValueType",
      format: "",
    },
    {
      name: "value",
      baseName: "value",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return IncidentFieldAttributesSingleValue.attributeTypeMap;
  }

  public constructor() {}
}