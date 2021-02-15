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

import { SyntheticsTestConfig } from "./SyntheticsTestConfig";
import { HttpFile } from "../http/http";

/**
 * Object describing the browser test configuration.
 */
export class SyntheticsBrowserTestResultFullCheck {
  "config": SyntheticsTestConfig;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "config",
      baseName: "config",
      type: "SyntheticsTestConfig",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return SyntheticsBrowserTestResultFullCheck.attributeTypeMap;
  }

  public constructor() {}
}