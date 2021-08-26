/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsBrowserTestConfig } from "./SyntheticsBrowserTestConfig";
import { SyntheticsBrowserTestType } from "./SyntheticsBrowserTestType";
import { SyntheticsStep } from "./SyntheticsStep";
import { SyntheticsTestOptions } from "./SyntheticsTestOptions";
import { SyntheticsTestPauseStatus } from "./SyntheticsTestPauseStatus";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Object containing details about a Synthetic browser test.
 */

export class SyntheticsBrowserTest {
  "config"?: SyntheticsBrowserTestConfig;
  /**
   * Array of locations used to run the test.
   */
  "locations"?: Array<string>;
  /**
   * Notification message associated with the test. Message can either be text or an empty string.
   */
  "message": string;
  /**
   * The associated monitor ID.
   */
  "monitorId"?: number;
  /**
   * Name of the test.
   */
  "name"?: string;
  "options"?: SyntheticsTestOptions;
  /**
   * The public ID of the test.
   */
  "publicId"?: string;
  "status"?: SyntheticsTestPauseStatus;
  /**
   * The steps of the test.
   */
  "steps"?: Array<SyntheticsStep>;
  /**
   * Array of tags attached to the test.
   */
  "tags"?: Array<string>;
  "type"?: SyntheticsBrowserTestType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    config: {
      baseName: "config",
      type: "SyntheticsBrowserTestConfig",
      format: "",
    },
    locations: {
      baseName: "locations",
      type: "Array<string>",
      format: "",
    },
    message: {
      baseName: "message",
      type: "string",
      format: "",
    },
    monitorId: {
      baseName: "monitor_id",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    options: {
      baseName: "options",
      type: "SyntheticsTestOptions",
      format: "",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
      format: "",
    },
    status: {
      baseName: "status",
      type: "SyntheticsTestPauseStatus",
      format: "",
    },
    steps: {
      baseName: "steps",
      type: "Array<SyntheticsStep>",
      format: "",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      format: "",
    },
    type: {
      baseName: "type",
      type: "SyntheticsBrowserTestType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsBrowserTest.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): SyntheticsBrowserTest {
    const res = new SyntheticsBrowserTest();

    res.config = ObjectSerializer.deserialize(
      data.config,
      "SyntheticsBrowserTestConfig",
      ""
    );

    res.locations = ObjectSerializer.deserialize(
      data.locations,
      "Array<string>",
      ""
    );

    if (data.message === undefined) {
      throw new TypeError(
        "missing required attribute 'message' on 'SyntheticsBrowserTest' object"
      );
    }
    res.message = ObjectSerializer.deserialize(data.message, "string", "");

    res.monitorId = ObjectSerializer.deserialize(
      data.monitor_id,
      "number",
      "int64"
    );

    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    res.options = ObjectSerializer.deserialize(
      data.options,
      "SyntheticsTestOptions",
      ""
    );

    res.publicId = ObjectSerializer.deserialize(data.public_id, "string", "");

    if (["live", "paused", undefined].includes(data.status)) {
      res.status = data.status;
    } else {
      const raw = new SyntheticsBrowserTest();
      raw.unparsedObject = data;
      return raw;
    }

    res.steps = ObjectSerializer.deserialize(
      data.steps,
      "Array<SyntheticsStep>",
      ""
    );

    res.tags = ObjectSerializer.deserialize(data.tags, "Array<string>", "");

    if (["browser", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new SyntheticsBrowserTest();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: SyntheticsBrowserTest): { [key: string]: any } {
    const attributeTypes = SyntheticsBrowserTest.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.config = ObjectSerializer.serialize(
      data.config,
      "SyntheticsBrowserTestConfig",
      ""
    );

    res.locations = ObjectSerializer.serialize(
      data.locations,
      "Array<string>",
      ""
    );

    if (data.message === undefined) {
      throw new TypeError(
        "missing required attribute 'message' on 'SyntheticsBrowserTest' object"
      );
    }
    res.message = ObjectSerializer.serialize(data.message, "string", "");

    res.monitor_id = ObjectSerializer.serialize(
      data.monitorId,
      "number",
      "int64"
    );

    res.name = ObjectSerializer.serialize(data.name, "string", "");

    res.options = ObjectSerializer.serialize(
      data.options,
      "SyntheticsTestOptions",
      ""
    );

    res.public_id = ObjectSerializer.serialize(data.publicId, "string", "");

    if (["live", "paused", undefined].includes(data.status)) {
      res.status = data.status;
    } else {
      throw TypeError(`invalid enum value ${data.status} for status`);
    }

    res.steps = ObjectSerializer.serialize(
      data.steps,
      "Array<SyntheticsStep>",
      ""
    );

    res.tags = ObjectSerializer.serialize(data.tags, "Array<string>", "");

    if (["browser", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}