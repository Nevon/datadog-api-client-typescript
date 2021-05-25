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
import { NotebookDistributionCellAttributes } from './NotebookDistributionCellAttributes';
import { NotebookGraphSize } from './NotebookGraphSize';
import { NotebookHeatMapCellAttributes } from './NotebookHeatMapCellAttributes';
import { NotebookLogStreamCellAttributes } from './NotebookLogStreamCellAttributes';
import { NotebookMarkdownCellAttributes } from './NotebookMarkdownCellAttributes';
import { NotebookSplitBy } from './NotebookSplitBy';
import { NotebookTimeseriesCellAttributes } from './NotebookTimeseriesCellAttributes';
import { NotebookToplistCellAttributes } from './NotebookToplistCellAttributes';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* The attributes of a notebook cell response. Valid cell types are `markdown`, `timeseries`, `toplist`, `heatmap`, `distribution`, `log_stream`. [More information on each graph visualization type.](https://docs.datadoghq.com/dashboards/widgets/)
*/

export type NotebookCellResponseAttributes = NotebookDistributionCellAttributes | NotebookHeatMapCellAttributes | NotebookLogStreamCellAttributes | NotebookMarkdownCellAttributes | NotebookTimeseriesCellAttributes | NotebookToplistCellAttributes;