// #### Import
// remark-usage-ignore-next
import stubbedFs from 'mock-fs';
import {scaffold} from './lib/index.js';

// remark-usage-ignore-next
stubbedFs();

// #### Execute

(async () => {
  await scaffold({baseUrl: 'http://localhost:9876'});
})();
