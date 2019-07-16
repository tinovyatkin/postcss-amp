'use strict'

// See https://www.ampproject.org/docs/reference/validation_errors

const disallowedAtRules = new Set([
  'charset',
  'import',
  'namespace',
  'document',
  'page',
  'viewport',
  '-ms-viewport'
])

function removeDisallowedAtRules (root) {
  root.walkAtRules(rule => {
    if (disallowedAtRules.has(rule.name)) {
      rule.remove()
    }
  })
}

module.exports = removeDisallowedAtRules
