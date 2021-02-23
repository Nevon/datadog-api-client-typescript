/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageProfilingHour } from './UsageProfilingHour';
import { HttpFile } from '../http/http';

/**
* Response containing the number of profiled hosts for each hour for a given organization.
*/
export class UsageProfilingResponse {
    /**
    * Get hourly usage for profiled hosts.
    */
    'usage'?: Array<UsageProfilingHour>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "usage",
            "baseName": "usage",
            "type": "Array<UsageProfilingHour>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UsageProfilingResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}

