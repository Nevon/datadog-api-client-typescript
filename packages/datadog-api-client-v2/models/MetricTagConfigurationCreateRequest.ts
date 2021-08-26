/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MetricTagConfigurationCreateData } from "./MetricTagConfigurationCreateData";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Request object that includes the metric that you would like to configure tags for.
 */

export class MetricTagConfigurationCreateRequest {
  "data": MetricTagConfigurationCreateData;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    data: {
      baseName: "data",
      type: "MetricTagConfigurationCreateData",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return MetricTagConfigurationCreateRequest.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): MetricTagConfigurationCreateRequest {
    const res = new MetricTagConfigurationCreateRequest();

    if (data.data === undefined) {
      throw new TypeError(
        "missing required attribute 'data' on 'MetricTagConfigurationCreateRequest' object"
      );
    }
    res.data = ObjectSerializer.deserialize(
      data.data,
      "MetricTagConfigurationCreateData",
      ""
    );

    return res;
  }

  static serialize(
    data: MetricTagConfigurationCreateRequest
  ): { [key: string]: any } {
    const attributeTypes = MetricTagConfigurationCreateRequest.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.data === undefined) {
      throw new TypeError(
        "missing required attribute 'data' on 'MetricTagConfigurationCreateRequest' object"
      );
    }
    res.data = ObjectSerializer.serialize(
      data.data,
      "MetricTagConfigurationCreateData",
      ""
    );

    return res;
  }

  public constructor() {}
}