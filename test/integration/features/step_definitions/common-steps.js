import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {After, When} from '@cucumber/cucumber';
import any from '@travi/any';
import stubbedFs from 'mock-fs';

const __dirname = dirname(fileURLToPath(import.meta.url));          // eslint-disable-line no-underscore-dangle
const stubbedNodeModules = stubbedFs.load(resolve(__dirname, '..', '..', '..', '..', 'node_modules'));

After(function () {
  stubbedFs.restore();
});

When('the project is scaffolded', async function () {
  // eslint-disable-next-line import/no-extraneous-dependencies,import/no-unresolved
  const {scaffold} = await import('@form8ion/is-website-vulnerable');
  this.baseUrl = any.url();

  stubbedFs({
    node_modules: stubbedNodeModules
  });

  this.results = await scaffold({baseUrl: this.baseUrl});
});
