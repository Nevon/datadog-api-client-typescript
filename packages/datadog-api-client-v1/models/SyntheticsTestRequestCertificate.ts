/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsTestRequestCertificateItem } from "./SyntheticsTestRequestCertificateItem";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Client certificate to use when performing the test request.
 */

export class SyntheticsTestRequestCertificate {
  "cert"?: SyntheticsTestRequestCertificateItem;
  "key"?: SyntheticsTestRequestCertificateItem;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    cert: {
      baseName: "cert",
      type: "SyntheticsTestRequestCertificateItem",
    },
    key: {
      baseName: "key",
      type: "SyntheticsTestRequestCertificateItem",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsTestRequestCertificate.attributeTypeMap;
  }

  public constructor() {}
}
