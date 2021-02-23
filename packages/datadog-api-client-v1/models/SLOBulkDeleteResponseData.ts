/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* An array of service level objective objects.
*/
export class SLOBulkDeleteResponseData {
    /**
    * An array of service level objective object IDs that indicates which objects that were completely deleted.
    */
    'deleted'?: Array<string>;
    /**
    * An array of service level objective object IDs that indicates which objects that were modified (objects for which at least one threshold was deleted, but that were not completely deleted).
    */
    'updated'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SLOBulkDeleteResponseData.attributeTypeMap;
    }
    
    public constructor() {
    }
}

