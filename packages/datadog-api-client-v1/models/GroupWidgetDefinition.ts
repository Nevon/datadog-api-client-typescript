/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { GroupWidgetDefinitionType } from './GroupWidgetDefinitionType';
import { Widget } from './Widget';
import { WidgetLayoutType } from './WidgetLayoutType';
import { HttpFile } from '../http/http';

/**
* The groups widget allows you to keep similar graphs together on your timeboard. Each group has a custom header, can hold one to many graphs, and is collapsible.
*/
export class GroupWidgetDefinition {
    'layoutType': WidgetLayoutType;
    /**
    * Title of the widget.
    */
    'title'?: string;
    'type': GroupWidgetDefinitionType;
    /**
    * List of widget groups.
    */
    'widgets': Array<Widget>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "layoutType",
            "baseName": "layout_type",
            "type": "WidgetLayoutType",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "GroupWidgetDefinitionType",
            "format": ""
        },
        {
            "name": "widgets",
            "baseName": "widgets",
            "type": "Array<Widget>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GroupWidgetDefinition.attributeTypeMap;
    }
    
    public constructor() {
    }
}

