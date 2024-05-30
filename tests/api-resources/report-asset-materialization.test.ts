// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DagsterPlusRest from 'dagster-plus-rest';
import { Response } from 'node-fetch';

const dagsterPlusRest = new DagsterPlusRest({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource reportAssetMaterialization', () => {
  test('create: only required params', async () => {
    const responsePromise = dagsterPlusRest.reportAssetMaterialization.create({
      asset_key: 'string',
      partition: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await dagsterPlusRest.reportAssetMaterialization.create({
      asset_key: 'string',
      partition: 'string',
      data_version: 'string',
      description: 'string',
    });
  });
});
