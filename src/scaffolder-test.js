import {assert} from 'chai';
import scaffold from './scaffolder';

suite('scaffolder', () => {
  test('that `is-website-vulnerable` is enabled', async () => {
    const {devDependencies} = await scaffold();

    assert.deepEqual(devDependencies, ['is-website-vulnerable']);
  });
});
