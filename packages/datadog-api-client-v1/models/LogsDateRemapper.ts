/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsDateRemapperType } from './LogsDateRemapperType';
import { HttpFile } from '../http/http';

/**
* As Datadog receives logs, it timestamps them using the value(s) from any of these default attributes.    - `timestamp`   - `date`   - `_timestamp`   - `Timestamp`   - `eventTime`   - `published_date`    If your logs put their dates in an attribute not in this list,   use the log date Remapper Processor to define their date attribute as the official log timestamp.   The recognized date formats are ISO8601, UNIX (the milliseconds EPOCH format), and RFC3164.    **Note:** If your logs don’t contain any of the default attributes   and you haven’t defined your own date attribute, Datadog timestamps   the logs with the date it received them.    If multiple log date remapper processors can be applied to a given log,   only the first one (according to the pipelines order) is taken into account.
*/
export class LogsDateRemapper {
    /**
    * Whether or not the processor is enabled.
    */
    'isEnabled'?: boolean;
    /**
    * Name of the processor.
    */
    'name'?: string;
    /**
    * Array of source attributes.
    */
    'sources': Array<string>;
    'type': LogsDateRemapperType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isEnabled",
            "baseName": "is_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "sources",
            "baseName": "sources",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "LogsDateRemapperType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LogsDateRemapper.attributeTypeMap;
    }
    
    public constructor() {
    }
}

