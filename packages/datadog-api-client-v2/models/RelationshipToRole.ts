/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RelationshipToRoleData } from './RelationshipToRoleData';
import { HttpFile } from '../http/http';

/**
* Relationship to role.
*/
export class RelationshipToRole {
    'data'?: RelationshipToRoleData;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "RelationshipToRoleData",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RelationshipToRole.attributeTypeMap;
    }
    
    public constructor() {
    }
}

