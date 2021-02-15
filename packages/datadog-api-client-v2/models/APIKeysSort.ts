/**
 * Datadog API V2 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from "../http/http";

/**
 * Sorting options
 */
export type APIKeysSort =
  | "created_at"
  | "-created_at"
  | "last4"
  | "-last4"
  | "modified_at"
  | "-modified_at"
  | "name"
  | "-name";