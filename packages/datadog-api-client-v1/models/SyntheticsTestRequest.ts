/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HTTPMethod } from "./HTTPMethod";
import { SyntheticsBasicAuth } from "./SyntheticsBasicAuth";
import { SyntheticsTestRequestCertificate } from "./SyntheticsTestRequestCertificate";
import { SyntheticsTestRequestProxy } from "./SyntheticsTestRequestProxy";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Object describing the Synthetic test request.
 */

export class SyntheticsTestRequest {
  /**
   * Allows loading insecure content for an HTTP request in a multistep test step.
   */
  "allowInsecure"?: boolean;
  "basicAuth"?: SyntheticsBasicAuth;
  /**
   * Body to include in the test.
   */
  "body"?: string;
  "certificate"?: SyntheticsTestRequestCertificate;
  /**
   * DNS server to use for DNS tests.
   */
  "dnsServer"?: string;
  /**
   * DNS server port to use for DNS tests.
   */
  "dnsServerPort"?: number;
  /**
   * Specifies whether or not the request follows redirects.
   */
  "followRedirects"?: boolean;
  /**
   * Headers to include when performing the test.
   */
  "headers"?: { [key: string]: string };
  /**
   * Host name to perform the test with.
   */
  "host"?: string;
  /**
   * Message to send for UDP or WebSocket tests.
   */
  "message"?: string;
  "method"?: HTTPMethod;
  /**
   * Determines whether or not to save the response body.
   */
  "noSavingResponseBody"?: boolean;
  /**
   * Number of pings to use per test.
   */
  "numberOfPackets"?: number;
  /**
   * Port to use when performing the test.
   */
  "port"?: number;
  "proxy"?: SyntheticsTestRequestProxy;
  /**
   * Query to use for the test.
   */
  "query"?: any;
  /**
   * For SSL tests, it specifies on which server you want to initiate the TLS handshake, allowing the server to present one of multiple possible certificates on the same IP address and TCP port number.
   */
  "servername"?: string;
  /**
   * Turns on a traceroute probe to discover all gateways along the path to the host destination.
   */
  "shouldTrackHops"?: boolean;
  /**
   * Timeout in seconds for the test.
   */
  "timeout"?: number;
  /**
   * URL to perform the test with.
   */
  "url"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    allowInsecure: {
      baseName: "allow_insecure",
      type: "boolean",
    },
    basicAuth: {
      baseName: "basicAuth",
      type: "SyntheticsBasicAuth",
    },
    body: {
      baseName: "body",
      type: "string",
    },
    certificate: {
      baseName: "certificate",
      type: "SyntheticsTestRequestCertificate",
    },
    dnsServer: {
      baseName: "dnsServer",
      type: "string",
    },
    dnsServerPort: {
      baseName: "dnsServerPort",
      type: "number",
      format: "int32",
    },
    followRedirects: {
      baseName: "follow_redirects",
      type: "boolean",
    },
    headers: {
      baseName: "headers",
      type: "{ [key: string]: string; }",
    },
    host: {
      baseName: "host",
      type: "string",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    method: {
      baseName: "method",
      type: "HTTPMethod",
    },
    noSavingResponseBody: {
      baseName: "noSavingResponseBody",
      type: "boolean",
    },
    numberOfPackets: {
      baseName: "numberOfPackets",
      type: "number",
      format: "int32",
    },
    port: {
      baseName: "port",
      type: "number",
      format: "int64",
    },
    proxy: {
      baseName: "proxy",
      type: "SyntheticsTestRequestProxy",
    },
    query: {
      baseName: "query",
      type: "any",
    },
    servername: {
      baseName: "servername",
      type: "string",
    },
    shouldTrackHops: {
      baseName: "shouldTrackHops",
      type: "boolean",
    },
    timeout: {
      baseName: "timeout",
      type: "number",
      format: "double",
    },
    url: {
      baseName: "url",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsTestRequest.attributeTypeMap;
  }

  public constructor() {}
}
