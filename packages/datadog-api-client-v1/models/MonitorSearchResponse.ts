/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MonitorSearchResponseCounts } from "./MonitorSearchResponseCounts";
import { MonitorSearchResponseMetadata } from "./MonitorSearchResponseMetadata";
import { MonitorSearchResult } from "./MonitorSearchResult";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The response form a monitor search.
 */

export class MonitorSearchResponse {
  "counts"?: MonitorSearchResponseCounts;
  "metadata"?: MonitorSearchResponseMetadata;
  /**
   * The list of found monitors.
   */
  "monitors"?: Array<MonitorSearchResult>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    counts: {
      baseName: "counts",
      type: "MonitorSearchResponseCounts",
      format: "",
    },
    metadata: {
      baseName: "metadata",
      type: "MonitorSearchResponseMetadata",
      format: "",
    },
    monitors: {
      baseName: "monitors",
      type: "Array<MonitorSearchResult>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return MonitorSearchResponse.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): MonitorSearchResponse {
    const res = new MonitorSearchResponse();

    res.counts = ObjectSerializer.deserialize(
      data.counts,
      "MonitorSearchResponseCounts",
      ""
    );

    res.metadata = ObjectSerializer.deserialize(
      data.metadata,
      "MonitorSearchResponseMetadata",
      ""
    );

    res.monitors = ObjectSerializer.deserialize(
      data.monitors,
      "Array<MonitorSearchResult>",
      ""
    );

    return res;
  }

  static serialize(data: MonitorSearchResponse): { [key: string]: any } {
    const attributeTypes = MonitorSearchResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.counts = ObjectSerializer.serialize(
      data.counts,
      "MonitorSearchResponseCounts",
      ""
    );

    res.metadata = ObjectSerializer.serialize(
      data.metadata,
      "MonitorSearchResponseMetadata",
      ""
    );

    res.monitors = ObjectSerializer.serialize(
      data.monitors,
      "Array<MonitorSearchResult>",
      ""
    );

    return res;
  }

  public constructor() {}
}