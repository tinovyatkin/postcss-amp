const postcss = require('postcss');

const plugin = require('./');

function run(input, output, opts = {}) {
  return postcss([plugin(opts)])
    .process(input, { from: undefined })
    .then(result => {
      expect(result.css).toEqual(output);
      expect(result.warnings().length).toBe(0);
    });
}

module.exports = run;
