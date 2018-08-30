/* eslint-disable max-len */
const run = require('./test-common')

/* Removes !important */
it('removes !important', () => {
  return run('a { color: red !important; }', 'a { color: red; }', {})
})

/* Removes -amp- classes selectors */
it('removes -amp- classes selectors', () => {
  return run('test .-amp-cozel { color: red; }', '', {})
})

/* Removes i-amp- tag names selectors */
it('removes i-amp- tag names selectors', () => {
  return run('.test i-amp-cozel { color: red; };i-amp-dd { color: green; }',
    '', {})
})

it('removes behavior, -moz-binding and filter properties', () => {
  return run('a { behavior: none; -moz-binding: inherit; filter: grayscale(50); }',
    '', {})
})

it('removes non-GPU transition', () => {
  return run('a { transition: opacity(.5); }; b { transition: skew(.5) };',
    'a { transition: opacity(.5); };', {})
})
