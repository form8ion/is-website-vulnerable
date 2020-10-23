import {Then} from '@cucumber/cucumber';
import {assert} from 'chai';

Then('is-website-vulnerable is enabled', async function () {
  const {devDependencies, scripts} = this.results;

  assert.deepEqual(devDependencies, ['is-website-vulnerable']);
  assert.deepEqual(scripts, {'test:served:vulnerable': `is-website-vulnerable ${this.baseUrl}`});
});
