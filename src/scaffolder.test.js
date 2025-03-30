import any from '@travi/any';
import {describe, it, expect} from 'vitest';

import scaffold from './scaffolder.js';

describe('scaffold', () => {
  it('should enable `is-website-vulnerable`', async () => {
    const baseUrl = any.url();

    const {dependencies: {javascript: {development}}, scripts} = await scaffold({baseUrl});

    expect(development).toEqual(['is-website-vulnerable']);
    expect(scripts).toEqual({'test:served:vulnerable': `is-website-vulnerable ${baseUrl}`});
  });
});
