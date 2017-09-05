'use strict';

const { plugin } = require('postcss');

module.exports = plugin('postcss-amp', () => {
    // Work with options here

    return (root) => {
        // Remove !important
        root.walkDecls(decl => {
          	decl.important = false;
        });
        // Removes selectors
        root.walkRules(/\.-amp-|^i-amp|\si-amp/, selector => {
            selector.parent.removeChild(selector);
        });
        // Removing properties
        root.walkDecls(/behavior|-moz-binding|filter/, decl => {
            const { parent } = decl;
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
                const { parent } = decl;
                parent.removeChild(decl);
                // remove whole selector if it empty
                if (!parent.nodes.length) parent.parent.removeChild(parent);
            }
        });
    };
});
