/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FunnelSource } from "./FunnelSource";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Updated funnel widget.
 */

export class FunnelQuery {
  "dataSource": FunnelSource;
  /**
   * The widget query.
   */
  "queryString": string;
  /**
   * List of funnel steps.
   */
  "steps": Array<any>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    dataSource: {
      baseName: "data_source",
      type: "FunnelSource",
      format: "",
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      format: "",
    },
    steps: {
      baseName: "steps",
      type: "Array<any>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return FunnelQuery.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): FunnelQuery {
    const res = new FunnelQuery();

    if (data.data_source === undefined) {
      throw new TypeError(
        "missing required attribute 'data_source' on 'FunnelQuery' object"
      );
    }
    if (["rum", undefined].includes(data.data_source)) {
      res.dataSource = data.data_source;
    } else {
      const raw = new FunnelQuery();
      raw.unparsedObject = data;
      return raw;
    }

    if (data.query_string === undefined) {
      throw new TypeError(
        "missing required attribute 'query_string' on 'FunnelQuery' object"
      );
    }
    res.queryString = ObjectSerializer.deserialize(
      data.query_string,
      "string",
      ""
    );

    if (data.steps === undefined) {
      throw new TypeError(
        "missing required attribute 'steps' on 'FunnelQuery' object"
      );
    }
    res.steps = ObjectSerializer.deserialize(data.steps, "Array<any>", "");

    return res;
  }

  static serialize(data: FunnelQuery): { [key: string]: any } {
    const attributeTypes = FunnelQuery.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.dataSource === undefined) {
      throw new TypeError(
        "missing required attribute 'data_source' on 'FunnelQuery' object"
      );
    }
    if (["rum", undefined].includes(data.dataSource)) {
      res.data_source = data.dataSource;
    } else {
      throw TypeError(`invalid enum value ${data.dataSource} for dataSource`);
    }

    if (data.queryString === undefined) {
      throw new TypeError(
        "missing required attribute 'query_string' on 'FunnelQuery' object"
      );
    }
    res.query_string = ObjectSerializer.serialize(
      data.queryString,
      "string",
      ""
    );

    if (data.steps === undefined) {
      throw new TypeError(
        "missing required attribute 'steps' on 'FunnelQuery' object"
      );
    }
    res.steps = ObjectSerializer.serialize(data.steps, "Array<any>", "");

    return res;
  }

  public constructor() {}
}