/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WebhooksIntegrationEncoding } from "./WebhooksIntegrationEncoding";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Update request of a Webhooks integration object.  *All properties are optional.*
 */

export class WebhooksIntegrationUpdateRequest {
  /**
   * If `null`, uses no header. If given a JSON payload, these will be headers attached to your webhook.
   */
  "customHeaders"?: string;
  "encodeAs"?: WebhooksIntegrationEncoding;
  /**
   * The name of the webhook. It corresponds with `<WEBHOOK_NAME>`. Learn more on how to use it in [monitor notifications](https://docs.datadoghq.com/monitors/notifications).
   */
  "name"?: string;
  /**
   * If `null`, uses the default payload. If given a JSON payload, the webhook returns the payload specified by the given payload. [Webhooks variable usage](https://docs.datadoghq.com/integrations/webhooks/#usage).
   */
  "payload"?: string;
  /**
   * URL of the webhook.
   */
  "url"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    customHeaders: {
      baseName: "custom_headers",
      type: "string",
      format: "",
    },
    encodeAs: {
      baseName: "encode_as",
      type: "WebhooksIntegrationEncoding",
      format: "",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    payload: {
      baseName: "payload",
      type: "string",
      format: "",
    },
    url: {
      baseName: "url",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return WebhooksIntegrationUpdateRequest.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): WebhooksIntegrationUpdateRequest {
    const res = new WebhooksIntegrationUpdateRequest();

    res.customHeaders = ObjectSerializer.deserialize(
      data.custom_headers,
      "string",
      ""
    );

    if (["json", "form", undefined].includes(data.encode_as)) {
      res.encodeAs = data.encode_as;
    } else {
      const raw = new WebhooksIntegrationUpdateRequest();
      raw.unparsedObject = data;
      return raw;
    }

    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    res.payload = ObjectSerializer.deserialize(data.payload, "string", "");

    res.url = ObjectSerializer.deserialize(data.url, "string", "");

    return res;
  }

  static serialize(
    data: WebhooksIntegrationUpdateRequest
  ): { [key: string]: any } {
    const attributeTypes = WebhooksIntegrationUpdateRequest.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.custom_headers = ObjectSerializer.serialize(
      data.customHeaders,
      "string",
      ""
    );

    if (["json", "form", undefined].includes(data.encodeAs)) {
      res.encode_as = data.encodeAs;
    } else {
      throw TypeError(`invalid enum value ${data.encodeAs} for encodeAs`);
    }

    res.name = ObjectSerializer.serialize(data.name, "string", "");

    res.payload = ObjectSerializer.serialize(data.payload, "string", "");

    res.url = ObjectSerializer.serialize(data.url, "string", "");

    return res;
  }

  public constructor() {}
}