/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageReportsType } from "./UsageReportsType";
import { UsageSpecifiedCustomReportsAttributes } from "./UsageSpecifiedCustomReportsAttributes";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Response containing date and type for specified custom reports.
 */

export class UsageSpecifiedCustomReportsData {
  "attributes"?: UsageSpecifiedCustomReportsAttributes;
  /**
   * The date for specified custom reports.
   */
  "id"?: string;
  "type"?: UsageReportsType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "UsageSpecifiedCustomReportsAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "UsageReportsType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageSpecifiedCustomReportsData.attributeTypeMap;
  }

  public constructor() {}
}
