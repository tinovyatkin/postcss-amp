'use strict';

const { plugin } = require('postcss');

const removeDisallowedAtRules = require('./at-rules');

module.exports = plugin('postcss-amp', () => {
  // Work with options here

  return root => {
    // Remove !important
    root.walkDecls(decl => {
      decl.important = false;
    });
    // Removes selectors
    root.walkRules(/\.-amp-|^i-amp|\si-amp/, selector => {
      selector.parent.removeChild(selector);
    });
    // Removing properties
    root.walkDecls(/behavior|-moz-binding/, decl => {
      let { parent } = decl;
      parent.removeChild(decl);
      // remove whole selector if it empty
      if (!parent.nodes.length) parent.parent.removeChild(parent);
    });
    // Restricted styles

    /* transition property
            Only GPU-accelerated properties (currently opacity,
            transform and -vendorPrefix-transform). */
    root.walkDecls(/transition/, decl => {
      if (!/opacity|transform/.test(decl.value)) {
        let { parent } = decl;
        parent.removeChild(decl);
        // remove whole selector if it empty
        if (!parent.nodes.length) parent.parent.removeChild(parent);
      }
    });

    // Remove disallowed at-rules
    removeDisallowedAtRules(root);
  };
});
