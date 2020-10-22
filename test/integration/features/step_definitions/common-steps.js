import {resolve} from 'path';
import {After, When} from '@cucumber/cucumber';
import stubbedFs from 'mock-fs';

const stubbedNodeModules = stubbedFs.load(resolve(__dirname, '..', '..', '..', '..', 'node_modules'));

After(function () {
  stubbedFs.restore();
});

When('the project is scaffolded', async function () {
  // eslint-disable-next-line import/no-extraneous-dependencies,import/no-unresolved
  const scaffolder = require('@form8ion/is-website-vulnerable');
  const {scaffold} = scaffolder;

  stubbedFs({
    node_modules: stubbedNodeModules
  });

  await scaffold();
});
