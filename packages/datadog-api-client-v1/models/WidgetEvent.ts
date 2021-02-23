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
* Event overlay control options.  See the dedicated [Events JSON schema documentation](https://docs.datadoghq.com/dashboards/graphing_json/widget_json/#events-schema) to learn how to build the `<EVENTS_SCHEMA>`.
*/
export class WidgetEvent {
    /**
    * Query definition.
    */
    'q': string;
    /**
    * The execution method for multi-value filters.
    */
    'tagsExecution'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "q",
            "baseName": "q",
            "type": "string",
            "format": ""
        },
        {
            "name": "tagsExecution",
            "baseName": "tags_execution",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WidgetEvent.attributeTypeMap;
    }
    
    public constructor() {
    }
}

