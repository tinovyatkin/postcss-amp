# PostCSS Amp [![NPM version](http://img.shields.io/npm/v/postcss-amp.svg)](https://www.npmjs.org/package/postcss-amp) [![Build Status](https://travis-ci.org/tinovyatkin/postcss-amp.svg?branch=master)](https://travis-ci.org/tinovyatkin/postcss-amp)


> PostCSS plugin to convert CSS according Accelerated Mobile Pages requirements.

<img src="https://status.ampproject.org/static/img/logo-blue.svg" style="float: left; margin-right: 20px" />

AMP CSS requirements: <https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/style_pages/>

<hr/>


Input:

```css
i-amp-el {
    /* elements starting with i-amp- are banned
}
.boo {
    filter: gray(.5); /* filter is banned */
    color: red !important; /* important is banned */
}
```

Output:

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

See PostCSS docs for examples for your environment.
