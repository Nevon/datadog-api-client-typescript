/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RelationshipToPermissions } from "./RelationshipToPermissions";
import { RelationshipToUsers } from "./RelationshipToUsers";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Relationships of the role object.
 */

export class RoleRelationships {
  "permissions"?: RelationshipToPermissions;
  "users"?: RelationshipToUsers;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    permissions: {
      baseName: "permissions",
      type: "RelationshipToPermissions",
    },
    users: {
      baseName: "users",
      type: "RelationshipToUsers",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RoleRelationships.attributeTypeMap;
  }

  public constructor() {}
}
