/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogStreamWidgetDefinition } from './LogStreamWidgetDefinition';
import { NotebookCellTime } from './NotebookCellTime';
import { NotebookGraphSize } from './NotebookGraphSize';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* The attributes of a notebook `log_stream` cell.
*/

export class NotebookLogStreamCellAttributes {
    'definition': LogStreamWidgetDefinition;
    'graphSize'?: NotebookGraphSize;
    'time'?: NotebookCellTime;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "definition": {
            "baseName": "definition",
            "type": "LogStreamWidgetDefinition",
            "format": ""
        },
        "graphSize": {
            "baseName": "graph_size",
            "type": "NotebookGraphSize",
            "format": ""
        },
        "time": {
            "baseName": "time",
            "type": "NotebookCellTime",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return NotebookLogStreamCellAttributes.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): NotebookLogStreamCellAttributes {
      let res = new NotebookLogStreamCellAttributes();

      if (data.definition === undefined) {
          throw new TypeError("missing required attribute 'definition' on 'NotebookLogStreamCellAttributes' object");
      }
      res.definition = ObjectSerializer.deserialize(data.definition, "LogStreamWidgetDefinition", "")

      if (['xs', 's', 'm', 'l', 'xl', undefined].includes(data.graph_size)) {
          res.graphSize = data.graph_size;
      } else {
          throw TypeError(`invalid enum value ${ data.graph_size } for graph_size`);
      }

      res.time = ObjectSerializer.deserialize(data.time, "NotebookCellTime", "")


      return res;
    }

    static serialize(data: NotebookLogStreamCellAttributes): {[key: string]: any} {
        let attributeTypes = NotebookLogStreamCellAttributes.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        if (data.definition === undefined) {
            throw new TypeError("missing required attribute 'definition' on 'NotebookLogStreamCellAttributes' object");
        }
        res.definition = ObjectSerializer.serialize(data.definition, "LogStreamWidgetDefinition", "")

        if (['xs', 's', 'm', 'l', 'xl', undefined].includes(data.graphSize)) {
            res.graph_size = data.graphSize;
        } else {
            throw TypeError(`invalid enum value ${ data.graphSize } for graphSize`);
        }

        res.time = ObjectSerializer.serialize(data.time, "NotebookCellTime", "")

        return res
    }
    
    public constructor() {
    }
}



