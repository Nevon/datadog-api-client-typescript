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
* The page count for the current pagination.
*/
export class UsageAttributionPagination {
    /**
    * Maximum amount of records to be returned.
    */
    'limit'?: number;
    /**
    * Records to be skipped before beginning to return.
    */
    'offset'?: number;
    /**
    * Direction to sort by.
    */
    'sortDirection'?: string;
    /**
    * Field to sort by.
    */
    'sortName'?: string;
    /**
    * Total number of records.
    */
    'totalNumberOfRecords'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "sortDirection",
            "baseName": "sort_direction",
            "type": "string",
            "format": ""
        },
        {
            "name": "sortName",
            "baseName": "sort_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalNumberOfRecords",
            "baseName": "total_number_of_records",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return UsageAttributionPagination.attributeTypeMap;
    }
    
    public constructor() {
    }
}

