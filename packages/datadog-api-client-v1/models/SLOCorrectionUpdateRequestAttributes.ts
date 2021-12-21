/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SLOCorrectionCategory } from "./SLOCorrectionCategory";

export class SLOCorrectionUpdateRequestAttributes {
  "category"?: SLOCorrectionCategory;
  /**
   * Description of the correction being made.
   */
  "description"?: string;
  /**
   * Length of time (in seconds) for a specified `rrule` recurring SLO correction.
   */
  "duration"?: number;
  /**
   * Ending time of the correction in epoch seconds.
   */
  "end"?: number;
  /**
   * The recurrence rules as defined in the iCalendar RFC 5545. The supported rules for SLO corrections are `FREQ`, `INTERVAL`, `COUNT` and `UNTIL`.
   */
  "rrule"?: string;
  /**
   * Starting time of the correction in epoch seconds.
   */
  "start"?: number;
  /**
   * The timezone to display in the UI for the correction times (defaults to \"UTC\").
   */
  "timezone"?: string;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    category: {
      baseName: "category",
      type: "SLOCorrectionCategory",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    duration: {
      baseName: "duration",
      type: "number",

      format: "int64",
    },
    end: {
      baseName: "end",
      type: "number",

      format: "int64",
    },
    rrule: {
      baseName: "rrule",
      type: "string",
    },
    start: {
      baseName: "start",
      type: "number",

      format: "int64",
    },
    timezone: {
      baseName: "timezone",
      type: "string",
    },
  };

  static getAttributeTypeMap() {
    return SLOCorrectionUpdateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
