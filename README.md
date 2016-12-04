# PostCSS Amp [![NPM version](http://img.shields.io/npm/v/postcss-amp.svg)](https://www.npmjs.org/package/postcss-amp) [![Build Status](https://travis-ci.org/tinovyatkin/postcss-amp.svg?branch=master)](https://travis-ci.org/tinovyatkin/postcss-amp)


> [PostCSS] plugin to convert CSS according Accelerated Mobile Pages requirements ![amp-logo](https://www.ampproject.org/static/img/logo-blue.svg).

AMP CSS requirements: https://github.com/tinovyatkin/postcss-amp

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/tinovyatkin/postcss-amp.svg
[ci]:      https://travis-ci.org/tinovyatkin/postcss-amp

```css
.foo * {
    /* universal selector is banned in AMP */
    color: red;
}
i-amp-el {
    /* elements starting with i-amp- are banned
}
.boo {
    filter: gray(.5); /* filter is banned */
    color: red !important; /* important is banned */
}
```

```css
.boo {
  /* all banned elements stripped */
  color: red;
}
```

## Usage

```js
postcss([ require('postcss-amp') ])
```

See [PostCSS] docs for examples for your environment.
