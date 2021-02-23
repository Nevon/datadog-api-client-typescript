/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsUserAgentParserType } from './LogsUserAgentParserType';
import { HttpFile } from '../http/http';

/**
* The User-Agent parser takes a User-Agent attribute and extracts the OS, browser, device, and other user data. It recognizes major bots like the Google Bot, Yahoo Slurp, and Bing.
*/
export class LogsUserAgentParser {
    /**
    * Whether or not the processor is enabled.
    */
    'isEnabled'?: boolean;
    /**
    * Define if the source attribute is URL encoded or not.
    */
    'isEncoded'?: boolean;
    /**
    * Name of the processor.
    */
    'name'?: string;
    /**
    * Array of source attributes.
    */
    'sources': Array<string>;
    /**
    * Name of the parent attribute that contains all the extracted details from the `sources`.
    */
    'target': string;
    'type': LogsUserAgentParserType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isEnabled",
            "baseName": "is_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isEncoded",
            "baseName": "is_encoded",
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
            "name": "target",
            "baseName": "target",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "LogsUserAgentParserType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LogsUserAgentParser.attributeTypeMap;
    }
    
    public constructor() {
    }
}

