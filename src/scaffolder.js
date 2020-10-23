export default function ({baseUrl}) {
  return {
    devDependencies: ['is-website-vulnerable'],
    scripts: {'test:served:vulnerable': `is-website-vulnerable ${baseUrl}`}
  };
}
