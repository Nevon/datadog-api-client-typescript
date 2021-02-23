/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { APIKeyCreateAttributes } from './APIKeyCreateAttributes';
import { APIKeysType } from './APIKeysType';
import { HttpFile } from '../http/http';

/**
* Object used to create an API key.
*/
export class APIKeyCreateData {
    'attributes': APIKeyCreateAttributes;
    'type': APIKeysType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "APIKeyCreateAttributes",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "APIKeysType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return APIKeyCreateData.attributeTypeMap;
    }
    
    public constructor() {
    }
}

