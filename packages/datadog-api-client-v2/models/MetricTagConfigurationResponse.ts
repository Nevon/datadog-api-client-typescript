/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MetricTagConfiguration } from "./MetricTagConfiguration";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Response object which includes a single metric's tag configuration.
 */

export class MetricTagConfigurationResponse {
  "data"?: MetricTagConfiguration;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    data: {
      baseName: "data",
      type: "MetricTagConfiguration",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return MetricTagConfigurationResponse.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): MetricTagConfigurationResponse {
    const res = new MetricTagConfigurationResponse();

    res.data = ObjectSerializer.deserialize(
      data.data,
      "MetricTagConfiguration",
      ""
    );

    return res;
  }

  static serialize(
    data: MetricTagConfigurationResponse
  ): { [key: string]: any } {
    const attributeTypes = MetricTagConfigurationResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.data = ObjectSerializer.serialize(
      data.data,
      "MetricTagConfiguration",
      ""
    );

    return res;
  }

  public constructor() {}
}