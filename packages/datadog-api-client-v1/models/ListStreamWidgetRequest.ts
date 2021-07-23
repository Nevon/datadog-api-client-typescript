/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ListStreamColumn } from "./ListStreamColumn";
import { ListStreamQuery } from "./ListStreamQuery";
import { ListStreamResponseFormat } from "./ListStreamResponseFormat";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Updated list stream widget.
 */

export class ListStreamWidgetRequest {
  /**
   * Widget columns.
   */
  "columns": Array<ListStreamColumn>;
  "query": ListStreamQuery;
  "responseFormat": ListStreamResponseFormat;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    columns: {
      baseName: "columns",
      type: "Array<ListStreamColumn>",
      format: "",
    },
    query: {
      baseName: "query",
      type: "ListStreamQuery",
      format: "",
    },
    responseFormat: {
      baseName: "response_format",
      type: "ListStreamResponseFormat",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return ListStreamWidgetRequest.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): ListStreamWidgetRequest {
    const res = new ListStreamWidgetRequest();

    if (data.columns === undefined) {
      throw new TypeError(
        "missing required attribute 'columns' on 'ListStreamWidgetRequest' object"
      );
    }
    res.columns = ObjectSerializer.deserialize(
      data.columns,
      "Array<ListStreamColumn>",
      ""
    );

    if (data.query === undefined) {
      throw new TypeError(
        "missing required attribute 'query' on 'ListStreamWidgetRequest' object"
      );
    }
    res.query = ObjectSerializer.deserialize(data.query, "ListStreamQuery", "");

    if (data.response_format === undefined) {
      throw new TypeError(
        "missing required attribute 'response_format' on 'ListStreamWidgetRequest' object"
      );
    }
    if (["event_list", undefined].includes(data.response_format)) {
      res.responseFormat = data.response_format;
    } else {
      throw TypeError(
        `invalid enum value ${data.response_format} for response_format`
      );
    }

    return res;
  }

  static serialize(data: ListStreamWidgetRequest): { [key: string]: any } {
    const attributeTypes = ListStreamWidgetRequest.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data.columns === undefined) {
      throw new TypeError(
        "missing required attribute 'columns' on 'ListStreamWidgetRequest' object"
      );
    }
    res.columns = ObjectSerializer.serialize(
      data.columns,
      "Array<ListStreamColumn>",
      ""
    );

    if (data.query === undefined) {
      throw new TypeError(
        "missing required attribute 'query' on 'ListStreamWidgetRequest' object"
      );
    }
    res.query = ObjectSerializer.serialize(data.query, "ListStreamQuery", "");

    if (data.responseFormat === undefined) {
      throw new TypeError(
        "missing required attribute 'response_format' on 'ListStreamWidgetRequest' object"
      );
    }
    if (["event_list", undefined].includes(data.responseFormat)) {
      res.response_format = data.responseFormat;
    } else {
      throw TypeError(
        `invalid enum value ${data.responseFormat} for responseFormat`
      );
    }

    return res;
  }

  public constructor() {}
}