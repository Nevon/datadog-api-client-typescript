/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Organization } from './Organization';
import { HttpFile } from '../http/http';

/**
* Response with the list of organizations.
*/
export class OrganizationListResponse {
    /**
    * Array of organization objects.
    */
    'orgs'?: Array<Organization>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "orgs",
            "baseName": "orgs",
            "type": "Array<Organization>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrganizationListResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}

