/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageAttributionPagination } from './UsageAttributionPagination';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* The object containing document metadata.
*/

export class UsageTopAvgMetricsMetadata {
    /**
    * The day value from the user request that contains the returned usage data. (If day was used the request)
    */
    'day'?: Date;
    /**
    * The month value from the user request that contains the returned usage data. (If month was used the request)
    */
    'month'?: Date;
    'pagination'?: UsageAttributionPagination;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "day": {
            "baseName": "day",
            "type": "Date",
            "format": "date-time"
        },
        "month": {
            "baseName": "month",
            "type": "Date",
            "format": "date-time"
        },
        "pagination": {
            "baseName": "pagination",
            "type": "UsageAttributionPagination",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return UsageTopAvgMetricsMetadata.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): UsageTopAvgMetricsMetadata {
      let res = new UsageTopAvgMetricsMetadata();

      res.day = ObjectSerializer.deserialize(data.day, "Date", "date-time")

      res.month = ObjectSerializer.deserialize(data.month, "Date", "date-time")

      res.pagination = ObjectSerializer.deserialize(data.pagination, "UsageAttributionPagination", "")


      return res;
    }

    static serialize(data: UsageTopAvgMetricsMetadata): {[key: string]: any} {
        let attributeTypes = UsageTopAvgMetricsMetadata.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.day = ObjectSerializer.serialize(data.day, "Date", "date-time")

        res.month = ObjectSerializer.serialize(data.month, "Date", "date-time")

        res.pagination = ObjectSerializer.serialize(data.pagination, "UsageAttributionPagination", "")

        return res
    }
    
    public constructor() {
    }
}



