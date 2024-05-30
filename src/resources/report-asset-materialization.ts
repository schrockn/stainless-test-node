// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as ReportAssetMaterializationAPI from './report-asset-materialization';

export class ReportAssetMaterialization extends APIResource {
  /**
   * Report Asset Materialization
   */
  create(body: ReportAssetMaterializationCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/v1/report_asset_materialization', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ReportAssetMaterializationCreateParams {
  asset_key: string;

  data_version?: string;

  description?: string;

  partition?: string;
}

export namespace ReportAssetMaterialization {
  export import ReportAssetMaterializationCreateParams = ReportAssetMaterializationAPI.ReportAssetMaterializationCreateParams;
}
