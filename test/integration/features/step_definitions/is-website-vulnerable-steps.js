import {Then} from '@cucumber/cucumber';
import {assert} from 'chai';

Then('is-website-vulnerable is enabled', async function () {
  const {dependencies: {javascript: {development}}, scripts} = this.results;

  assert.deepEqual(development, ['is-website-vulnerable']);
  assert.deepEqual(scripts, {'test:served:vulnerable': `is-website-vulnerable ${this.baseUrl}`});
});
