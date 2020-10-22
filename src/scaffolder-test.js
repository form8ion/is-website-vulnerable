import scaffold from './scaffolder';

suite('scaffolder', () => {
  test('that `is-website-vulnerable` is enabled', async () => {
    await scaffold();
  });
});
