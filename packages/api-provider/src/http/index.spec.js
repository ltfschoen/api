// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { TEST_HTTP_URL } from '../../test/mockHttp';

import createHttp from './index';

describe('Http', () => {
  let http;

  beforeEach(() => {
    http = createHttp(TEST_HTTP_URL);
  });

  it('always returns isConnected true', () => {
    expect(http.isConnected()).toEqual(true);
  });

  it('does not (yet) support subscribe', () => {
    return http.subscribe().catch((error) => {
      expect(error.message).toMatch(/has not been implemented/);
    });
  });

  it('does not (yet) support unsubscribe', () => {
    return http.unsubscribe().catch((error) => {
      expect(error.message).toMatch(/has not been implemented/);
    });
  });
});
