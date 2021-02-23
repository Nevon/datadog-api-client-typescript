/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ProcessSummariesMetaPage } from './ProcessSummariesMetaPage';
import { HttpFile } from '../http/http';

/**
* Response metadata object.
*/
export class ProcessSummariesMeta {
    'page'?: ProcessSummariesMetaPage;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "page",
            "baseName": "page",
            "type": "ProcessSummariesMetaPage",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProcessSummariesMeta.attributeTypeMap;
    }
    
    public constructor() {
    }
}

