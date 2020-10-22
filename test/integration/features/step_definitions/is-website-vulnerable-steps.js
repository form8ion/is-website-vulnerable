import {Then} from '@cucumber/cucumber';
import {assert} from 'chai';

Then('is-website-vulnerable is enabled', async function () {
  const {devDependencies} = this.results;

  assert.deepEqual(devDependencies, ['is-website-vulnerable']);
});
