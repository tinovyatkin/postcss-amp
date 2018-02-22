'use strict';

function removeDisallowedAtRules(root) {
    // See https://www.ampproject.org/docs/reference/validation_errors
    const disallowedAtRules = new Set([
        'charset',
        'import',
        'namespace',
        'supports',
        'document',
        'page',
        'viewport'
    ]);
    root.walkAtRules(rule => {
        if (disallowedAtRules.has(rule.name)) {
            rule.remove();
        }
    });
}

module.exports = removeDisallowedAtRules;
