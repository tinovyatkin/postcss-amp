/* eslint-disable max-len */
const run = require('./test-common');

/* Removes disallowed at-rules */
it('removes @charset', () => {
  return run('@charset "utf-8";', '', {});
});

it('removes @import', () => {
  return run('@import "test.css" screen, projection;', '', {});
});

it('removes @namespace', () => {
  return run('@namespace url(http://www.w3.org/1999/xhtml);', '', {});
});

it('removes @document', () => {
  return run(
    '@document url("https://www.example.com/") { h1 { color: green; } }',
    '',
    {}
  );
});
it('removes @viewport', () => {
  return run('@viewport { width: device-width; }', '', {});
});

it('removes @-ms-viewport', () => {
  return run('@-ms-viewport { width: device-width; }', '', {});
});
