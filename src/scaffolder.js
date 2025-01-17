export default function ({baseUrl}) {
  return {
    dependencies: {javascript: {development: ['is-website-vulnerable']}},
    scripts: {'test:served:vulnerable': `is-website-vulnerable ${baseUrl}`}
  };
}
