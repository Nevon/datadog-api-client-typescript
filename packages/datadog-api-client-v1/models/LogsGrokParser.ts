/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsGrokParserRules } from "./LogsGrokParserRules";
import { LogsGrokParserType } from "./LogsGrokParserType";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Create custom grok rules to parse the full message or [a specific attribute of your raw event](https://docs.datadoghq.com/logs/log_configuration/parsing/#advanced-settings). For more information, see the [parsing section](https://docs.datadoghq.com/logs/log_configuration/parsing).
 */

export class LogsGrokParser {
  "grok": LogsGrokParserRules;
  /**
   * Whether or not the processor is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Name of the processor.
   */
  "name"?: string;
  /**
   * List of sample logs to test this grok parser.
   */
  "samples"?: Array<string>;
  /**
   * Name of the log attribute to parse.
   */
  "source": string;
  "type": LogsGrokParserType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    grok: {
      baseName: "grok",
      type: "LogsGrokParserRules",
      required: true,
    },
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    samples: {
      baseName: "samples",
      type: "Array<string>",
    },
    source: {
      baseName: "source",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsGrokParserType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsGrokParser.attributeTypeMap;
  }

  public constructor() {}
}
