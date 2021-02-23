/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FormulaAndFunctionMetricAggregation } from './FormulaAndFunctionMetricAggregation';
import { FormulaAndFunctionProcessQueryDataSource } from './FormulaAndFunctionProcessQueryDataSource';
import { QuerySortOrder } from './QuerySortOrder';
import { TimeSeriesFormulaAndFunctionEventQueryDefinition } from './TimeSeriesFormulaAndFunctionEventQueryDefinition';
import { TimeSeriesFormulaAndFunctionEventQueryDefinitionCompute } from './TimeSeriesFormulaAndFunctionEventQueryDefinitionCompute';
import { TimeSeriesFormulaAndFunctionEventQueryDefinitionSearch } from './TimeSeriesFormulaAndFunctionEventQueryDefinitionSearch';
import { TimeSeriesFormulaAndFunctionEventQueryGroupBy } from './TimeSeriesFormulaAndFunctionEventQueryGroupBy';
import { TimeSeriesFormulaAndFunctionMetricQueryDefinition } from './TimeSeriesFormulaAndFunctionMetricQueryDefinition';
import { TimeSeriesFormulaAndFunctionProcessQueryDefinition } from './TimeSeriesFormulaAndFunctionProcessQueryDefinition';
import { HttpFile } from '../http/http';

/**
* A formula and function query.
*/
export class FormulaAndFunctionQueryDefinition {
    'aggregator'?: FormulaAndFunctionMetricAggregation;
    'dataSource': FormulaAndFunctionProcessQueryDataSource;
    /**
    * Name of query for use in formulas.
    */
    'name'?: string;
    /**
    * Metrics query definition.
    */
    'query': string;
    'compute': TimeSeriesFormulaAndFunctionEventQueryDefinitionCompute;
    /**
    * Group by options.
    */
    'groupBy'?: Array<TimeSeriesFormulaAndFunctionEventQueryGroupBy>;
    /**
    * An array of index names to query in the stream. Omit or use `[]` to query all indexes at once.
    */
    'indexes'?: Array<string>;
    'search'?: TimeSeriesFormulaAndFunctionEventQueryDefinitionSearch;
    /**
    * Whether to normalize the CPU percentages.
    */
    'isNormalizedCpu'?: boolean;
    /**
    * Number of hits to return.
    */
    'limit'?: number;
    /**
    * Process metric name.
    */
    'metric': string;
    'sort'?: QuerySortOrder;
    /**
    * An array of tags to filter by.
    */
    'tagFilters'?: Array<string>;
    /**
    * Text to use as filter.
    */
    'textFilter'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "aggregator",
            "baseName": "aggregator",
            "type": "FormulaAndFunctionMetricAggregation",
            "format": ""
        },
        {
            "name": "dataSource",
            "baseName": "data_source",
            "type": "FormulaAndFunctionProcessQueryDataSource",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "query",
            "baseName": "query",
            "type": "string",
            "format": ""
        },
        {
            "name": "compute",
            "baseName": "compute",
            "type": "TimeSeriesFormulaAndFunctionEventQueryDefinitionCompute",
            "format": ""
        },
        {
            "name": "groupBy",
            "baseName": "group_by",
            "type": "Array<TimeSeriesFormulaAndFunctionEventQueryGroupBy>",
            "format": ""
        },
        {
            "name": "indexes",
            "baseName": "indexes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "search",
            "baseName": "search",
            "type": "TimeSeriesFormulaAndFunctionEventQueryDefinitionSearch",
            "format": ""
        },
        {
            "name": "isNormalizedCpu",
            "baseName": "is_normalized_cpu",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "metric",
            "baseName": "metric",
            "type": "string",
            "format": ""
        },
        {
            "name": "sort",
            "baseName": "sort",
            "type": "QuerySortOrder",
            "format": ""
        },
        {
            "name": "tagFilters",
            "baseName": "tag_filters",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "textFilter",
            "baseName": "text_filter",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FormulaAndFunctionQueryDefinition.attributeTypeMap;
    }
    
    public constructor() {
    }
}

