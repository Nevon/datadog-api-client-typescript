/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsBrowserTestResultShort } from './SyntheticsBrowserTestResultShort';
import { HttpFile } from '../http/http';

/**
* Object with the latest Synthetic browser test run.
*/
export class SyntheticsGetBrowserTestLatestResultsResponse {
    /**
    * Timestamp of the latest browser test run.
    */
    'lastTimestampFetched'?: number;
    /**
    * Result of the latest browser test run.
    */
    'results'?: Array<SyntheticsBrowserTestResultShort>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "lastTimestampFetched",
            "baseName": "last_timestamp_fetched",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<SyntheticsBrowserTestResultShort>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SyntheticsGetBrowserTestLatestResultsResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}

