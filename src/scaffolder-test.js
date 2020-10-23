import {assert} from 'chai';
import any from '@travi/any';
import scaffold from './scaffolder';

suite('scaffolder', () => {
  test('that `is-website-vulnerable` is enabled', async () => {
    const baseUrl = any.url();

    const {devDependencies, scripts} = await scaffold({baseUrl});

    assert.deepEqual(devDependencies, ['is-website-vulnerable']);
    assert.deepEqual(scripts, {'test:served:vulnerable': `is-website-vulnerable ${baseUrl}`});
  });
});
