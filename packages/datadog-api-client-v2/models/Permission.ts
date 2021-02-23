/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PermissionAttributes } from './PermissionAttributes';
import { PermissionsType } from './PermissionsType';
import { HttpFile } from '../http/http';

/**
* Permission object.
*/
export class Permission {
    'attributes'?: PermissionAttributes;
    /**
    * ID of the permission.
    */
    'id'?: string;
    'type': PermissionsType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "PermissionAttributes",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PermissionsType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Permission.attributeTypeMap;
    }
    
    public constructor() {
    }
}

