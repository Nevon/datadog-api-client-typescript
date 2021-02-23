/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SLOHistoryMetricsSeriesMetadataUnit } from './SLOHistoryMetricsSeriesMetadataUnit';
import { HttpFile } from '../http/http';

/**
* Query metadata.
*/
export class SLOHistoryMetricsSeriesMetadata {
    /**
    * Query aggregator function.
    */
    'aggr'?: string;
    /**
    * Query expression.
    */
    'expression'?: string;
    /**
    * Query metric used.
    */
    'metric'?: string;
    /**
    * Query index from original combined query.
    */
    'queryIndex'?: number;
    /**
    * Query scope.
    */
    'scope'?: string;
    /**
    * An array of metric units that contains up to two unit objects. For example, bytes represents one unit object and bytes per second represents two unit objects. If a metric query only has one unit object, the second array element is null.
    */
    'unit'?: Array<SLOHistoryMetricsSeriesMetadataUnit>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "aggr",
            "baseName": "aggr",
            "type": "string",
            "format": ""
        },
        {
            "name": "expression",
            "baseName": "expression",
            "type": "string",
            "format": ""
        },
        {
            "name": "metric",
            "baseName": "metric",
            "type": "string",
            "format": ""
        },
        {
            "name": "queryIndex",
            "baseName": "query_index",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "string",
            "format": ""
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "Array<SLOHistoryMetricsSeriesMetadataUnit>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SLOHistoryMetricsSeriesMetadata.attributeTypeMap;
    }
    
    public constructor() {
    }
}

