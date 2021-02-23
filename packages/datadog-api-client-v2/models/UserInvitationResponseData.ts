/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UserInvitationDataAttributes } from './UserInvitationDataAttributes';
import { UserInvitationsType } from './UserInvitationsType';
import { HttpFile } from '../http/http';

/**
* Object of a user invitation returned by the API.
*/
export class UserInvitationResponseData {
    'attributes'?: UserInvitationDataAttributes;
    /**
    * ID of the user invitation.
    */
    'id'?: string;
    'type'?: UserInvitationsType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "UserInvitationDataAttributes",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "UserInvitationsType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserInvitationResponseData.attributeTypeMap;
    }
    
    public constructor() {
    }
}

