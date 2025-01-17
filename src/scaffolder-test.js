import {assert} from 'chai';
import any from '@travi/any';

import scaffold from './scaffolder.js';

suite('scaffolder', () => {
  test('that `is-website-vulnerable` is enabled', async () => {
    const baseUrl = any.url();

    const {dependencies: {javascript: {development}}, scripts} = await scaffold({baseUrl});

    assert.deepEqual(development, ['is-website-vulnerable']);
    assert.deepEqual(scripts, {'test:served:vulnerable': `is-website-vulnerable ${baseUrl}`});
  });
});
