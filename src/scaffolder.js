export default function scaffold({baseUrl}) {
  return {
    dependencies: {javascript: {development: ['is-website-vulnerable']}},
    scripts: {'test:served:vulnerable': `is-website-vulnerable ${baseUrl}`}
  };
}
