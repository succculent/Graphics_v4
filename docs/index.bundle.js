/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/normalize.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box; /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}", "",{"version":3,"sources":["webpack://./src/normalize.css"],"names":[],"mappings":"AAAA,2DAA2D;;AAE3D;;;;EAIE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,0BAA0B,EAAE,MAAM;EAClC,8BAA8B,EAAE,MAAM;AACxC;;AAEA;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;+EAC+E;;AAE/E;;;;;EAKE;;AAEF;;;;;;;;;;;;;EAaE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;;;EAIE,qBAAqB,EAAE,MAAM;EAC7B,wBAAwB,EAAE,MAAM;AAClC;;AAEA;;;EAGE;;AAEF;EACE,aAAa;EACb,SAAS;AACX;;AAEA;;;EAGE;;AAEF;;EAEE,aAAa;AACf;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;EAEE;;AAEF;;EAEE,UAAU;AACZ;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,yBAAyB;AAC3B;;AAEA;;EAEE;;AAEF;;EAEE,iBAAiB;AACnB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;;EAEE;;AAEF;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,gBAAgB;AAClB;;AAEA;;EAEE;;AAEF;EACE,4BAA4B;EAC5B,uBAAuB;EACvB,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;;;;EAIE,iCAAiC;EACjC,cAAc;AAChB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE;;AAEF;;;;;EAKE,cAAc,EAAE,MAAM;EACtB,aAAa,EAAE,MAAM;EACrB,SAAS,EAAE,MAAM;AACnB;;AAEA;;EAEE;;AAEF;EACE,iBAAiB;AACnB;;AAEA;;;;;EAKE;;AAEF;;EAEE,oBAAoB;AACtB;;AAEA;;;;;;EAME;;AAEF;;;;EAIE,0BAA0B,EAAE,MAAM;EAClC,eAAe,EAAE,MAAM;AACzB;;AAEA;;EAEE;;AAEF;;EAEE,eAAe;AACjB;;AAEA;;EAEE;;AAEF;;EAEE,SAAS;EACT,UAAU;AACZ;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB;AACrB;;AAEA;;;;;;EAME;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;;;EAIE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;;EAIE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,4BAA4B;EAC5B,+BAA+B,EAAE,MAAM;EACvC,uBAAuB;AACzB;;AAEA;;;;EAIE;;AAEF;;EAEE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,yBAAyB;EACzB,aAAa;EACb,8BAA8B;AAChC;;AAEA;;;EAGE;;AAEF;EACE,SAAS,EAAE,MAAM;EACjB,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,iBAAiB;AACnB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;;EAEE,UAAU;AACZ","sourcesContent":["/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box; /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/skeleton.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/skeleton.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n* Skeleton V2.0.4\n* Copyright 2014, Dave Gamache\n* www.getskeleton.com\n* Free to use under the MIT license.\n* http://www.opensource.org/licenses/mit-license.php\n* 12/29/2014\n*/\n\n\n/* Table of contents\n––––––––––––––––––––––––––––––––––––––––––––––––––\n- Grid\n- Base Styles\n- Typography\n- Links\n- Buttons\n- Forms\n- Lists\n- Code\n- Tables\n- Spacing\n- Utilities\n- Clearing\n- Media Queries\n*/\n\n\n/* Grid\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box; }\n.column,\n.columns {\n  width: 100%;\n  float: left;\n  box-sizing: border-box; }\n\n/* For devices larger than 400px */\n@media (min-width: 400px) {\n  .container {\n    width: 85%;\n    padding: 0; }\n}\n\n/* For devices larger than 550px */\n@media (min-width: 550px) {\n  .container {\n    width: 80%; }\n  .column,\n  .columns {\n    margin-left: 4%; }\n  .column:first-child,\n  .columns:first-child {\n    margin-left: 0; }\n\n  .one.column,\n  .one.columns                    { width: 4.66666666667%; }\n  .two.columns                    { width: 13.3333333333%; }\n  .three.columns                  { width: 22%;            }\n  .four.columns                   { width: 30.6666666667%; }\n  .five.columns                   { width: 39.3333333333%; }\n  .six.columns                    { width: 48%;            }\n  .seven.columns                  { width: 56.6666666667%; }\n  .eight.columns                  { width: 65.3333333333%; }\n  .nine.columns                   { width: 74.0%;          }\n  .ten.columns                    { width: 82.6666666667%; }\n  .eleven.columns                 { width: 91.3333333333%; }\n  .twelve.columns                 { width: 100%; margin-left: 0; }\n\n  .one-third.column               { width: 30.6666666667%; }\n  .two-thirds.column              { width: 65.3333333333%; }\n\n  .one-half.column                { width: 48%; }\n\n  /* Offsets */\n  .offset-by-one.column,\n  .offset-by-one.columns          { margin-left: 8.66666666667%; }\n  .offset-by-two.column,\n  .offset-by-two.columns          { margin-left: 17.3333333333%; }\n  .offset-by-three.column,\n  .offset-by-three.columns        { margin-left: 26%;            }\n  .offset-by-four.column,\n  .offset-by-four.columns         { margin-left: 34.6666666667%; }\n  .offset-by-five.column,\n  .offset-by-five.columns         { margin-left: 43.3333333333%; }\n  .offset-by-six.column,\n  .offset-by-six.columns          { margin-left: 52%;            }\n  .offset-by-seven.column,\n  .offset-by-seven.columns        { margin-left: 60.6666666667%; }\n  .offset-by-eight.column,\n  .offset-by-eight.columns        { margin-left: 69.3333333333%; }\n  .offset-by-nine.column,\n  .offset-by-nine.columns         { margin-left: 78.0%;          }\n  .offset-by-ten.column,\n  .offset-by-ten.columns          { margin-left: 86.6666666667%; }\n  .offset-by-eleven.column,\n  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }\n\n  .offset-by-one-third.column,\n  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }\n  .offset-by-two-thirds.column,\n  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }\n\n  .offset-by-one-half.column,\n  .offset-by-one-half.columns     { margin-left: 52%; }\n\n}\n\n\n/* Base Styles\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/* NOTE\nhtml is set to 62.5% so that all the REM measurements throughout Skeleton\nare based on 10px sizing. So basically 1.5rem = 15px :) */\nhtml {\n  font-size: 62.5%; }\nbody {\n  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #222; }\n\n\n/* Typography\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300; }\nh1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}\nh2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\nh3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\nh4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }\nh5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\nh6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }\n\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 { font-size: 5.0rem; }\n  h2 { font-size: 4.2rem; }\n  h3 { font-size: 3.6rem; }\n  h4 { font-size: 3.0rem; }\n  h5 { font-size: 2.4rem; }\n  h6 { font-size: 1.5rem; }\n}\n\np {\n  margin-top: 0; }\n\n\n/* Links\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\na {\n  color: #1EAEDB; }\na:hover {\n  color: #0FA0CE; }\n\n\n/* Buttons\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box; }\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0; }\n.button.button-primary,\nbutton.button-primary,\ninput[type=\"submit\"].button-primary,\ninput[type=\"reset\"].button-primary,\ninput[type=\"button\"].button-primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0; }\n.button.button-primary:hover,\nbutton.button-primary:hover,\ninput[type=\"submit\"].button-primary:hover,\ninput[type=\"reset\"].button-primary:hover,\ninput[type=\"button\"].button-primary:hover,\n.button.button-primary:focus,\nbutton.button-primary:focus,\ninput[type=\"submit\"].button-primary:focus,\ninput[type=\"reset\"].button-primary:focus,\ninput[type=\"button\"].button-primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB; }\n\n\n/* Forms\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea,\nselect {\n  height: 38px;\n  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */\n  background-color: #fff;\n  border: 1px solid #D1D1D1;\n  border-radius: 4px;\n  box-shadow: none;\n  box-sizing: border-box; }\n/* Removes awkward default styles on some inputs for iOS */\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\ntextarea {\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\ninput[type=\"email\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"password\"]:focus,\ntextarea:focus,\nselect:focus {\n  border: 1px solid #33C3F0;\n  outline: 0; }\nlabel,\nlegend {\n  display: block;\n  margin-bottom: .5rem;\n  font-weight: 600; }\nfieldset {\n  padding: 0;\n  border-width: 0; }\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  display: inline; }\nlabel > .label-body {\n  display: inline-block;\n  margin-left: .5rem;\n  font-weight: normal; }\n\n\n/* Lists\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nul {\n  list-style: circle inside; }\nol {\n  list-style: decimal inside; }\nol, ul {\n  padding-left: 0;\n  margin-top: 0; }\nul ul,\nul ol,\nol ol,\nol ul {\n  margin: 1.5rem 0 1.5rem 3rem;\n  font-size: 90%; }\nli {\n  margin-bottom: 1rem; }\n\n\n/* Code\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ncode {\n  padding: .2rem .5rem;\n  margin: 0 .2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #F1F1F1;\n  border: 1px solid #E1E1E1;\n  border-radius: 4px; }\npre > code {\n  display: block;\n  padding: 1rem 1.5rem;\n  white-space: pre; }\n\n\n/* Tables\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nth,\ntd {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid #E1E1E1; }\nth:first-child,\ntd:first-child {\n  padding-left: 0; }\nth:last-child,\ntd:last-child {\n  padding-right: 0; }\n\n\n/* Spacing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nbutton,\n.button {\n  margin-bottom: 1rem; }\ninput,\ntextarea,\nselect,\nfieldset {\n  margin-bottom: 1.5rem; }\npre,\nblockquote,\ndl,\nfigure,\ntable,\np,\nul,\nol,\nform {\n  margin-bottom: 2.5rem; }\n\n\n/* Utilities\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.u-full-width {\n  width: 100%;\n  box-sizing: border-box; }\n.u-max-full-width {\n  max-width: 100%;\n  box-sizing: border-box; }\n.u-pull-right {\n  float: right; }\n.u-pull-left {\n  float: left; }\n\n\n/* Misc\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nhr {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  border-width: 0;\n  border-top: 1px solid #E1E1E1; }\n\n\n/* Clearing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n/* Self Clearing Goodness */\n.container:after,\n.row:after,\n.u-cf {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n\n/* Media Queries\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/*\nNote: The best way to structure the use of media queries is to create the queries\nnear the relevant code. For example, if you wanted to change the styles for buttons\non small devices, paste the mobile query code up in the buttons section and style it\nthere.\n*/\n\n\n/* Larger than mobile */\n@media (min-width: 400px) {}\n\n/* Larger than phablet (also point when grid becomes active) */\n@media (min-width: 550px) {}\n\n/* Larger than tablet */\n@media (min-width: 750px) {}\n\n/* Larger than desktop */\n@media (min-width: 1000px) {}\n\n/* Larger than Desktop HD */\n@media (min-width: 1200px) {}\n", "",{"version":3,"sources":["webpack://./src/skeleton.css"],"names":[],"mappings":"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","sourcesContent":["/*\n* Skeleton V2.0.4\n* Copyright 2014, Dave Gamache\n* www.getskeleton.com\n* Free to use under the MIT license.\n* http://www.opensource.org/licenses/mit-license.php\n* 12/29/2014\n*/\n\n\n/* Table of contents\n––––––––––––––––––––––––––––––––––––––––––––––––––\n- Grid\n- Base Styles\n- Typography\n- Links\n- Buttons\n- Forms\n- Lists\n- Code\n- Tables\n- Spacing\n- Utilities\n- Clearing\n- Media Queries\n*/\n\n\n/* Grid\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box; }\n.column,\n.columns {\n  width: 100%;\n  float: left;\n  box-sizing: border-box; }\n\n/* For devices larger than 400px */\n@media (min-width: 400px) {\n  .container {\n    width: 85%;\n    padding: 0; }\n}\n\n/* For devices larger than 550px */\n@media (min-width: 550px) {\n  .container {\n    width: 80%; }\n  .column,\n  .columns {\n    margin-left: 4%; }\n  .column:first-child,\n  .columns:first-child {\n    margin-left: 0; }\n\n  .one.column,\n  .one.columns                    { width: 4.66666666667%; }\n  .two.columns                    { width: 13.3333333333%; }\n  .three.columns                  { width: 22%;            }\n  .four.columns                   { width: 30.6666666667%; }\n  .five.columns                   { width: 39.3333333333%; }\n  .six.columns                    { width: 48%;            }\n  .seven.columns                  { width: 56.6666666667%; }\n  .eight.columns                  { width: 65.3333333333%; }\n  .nine.columns                   { width: 74.0%;          }\n  .ten.columns                    { width: 82.6666666667%; }\n  .eleven.columns                 { width: 91.3333333333%; }\n  .twelve.columns                 { width: 100%; margin-left: 0; }\n\n  .one-third.column               { width: 30.6666666667%; }\n  .two-thirds.column              { width: 65.3333333333%; }\n\n  .one-half.column                { width: 48%; }\n\n  /* Offsets */\n  .offset-by-one.column,\n  .offset-by-one.columns          { margin-left: 8.66666666667%; }\n  .offset-by-two.column,\n  .offset-by-two.columns          { margin-left: 17.3333333333%; }\n  .offset-by-three.column,\n  .offset-by-three.columns        { margin-left: 26%;            }\n  .offset-by-four.column,\n  .offset-by-four.columns         { margin-left: 34.6666666667%; }\n  .offset-by-five.column,\n  .offset-by-five.columns         { margin-left: 43.3333333333%; }\n  .offset-by-six.column,\n  .offset-by-six.columns          { margin-left: 52%;            }\n  .offset-by-seven.column,\n  .offset-by-seven.columns        { margin-left: 60.6666666667%; }\n  .offset-by-eight.column,\n  .offset-by-eight.columns        { margin-left: 69.3333333333%; }\n  .offset-by-nine.column,\n  .offset-by-nine.columns         { margin-left: 78.0%;          }\n  .offset-by-ten.column,\n  .offset-by-ten.columns          { margin-left: 86.6666666667%; }\n  .offset-by-eleven.column,\n  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }\n\n  .offset-by-one-third.column,\n  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }\n  .offset-by-two-thirds.column,\n  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }\n\n  .offset-by-one-half.column,\n  .offset-by-one-half.columns     { margin-left: 52%; }\n\n}\n\n\n/* Base Styles\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/* NOTE\nhtml is set to 62.5% so that all the REM measurements throughout Skeleton\nare based on 10px sizing. So basically 1.5rem = 15px :) */\nhtml {\n  font-size: 62.5%; }\nbody {\n  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #222; }\n\n\n/* Typography\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300; }\nh1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}\nh2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\nh3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\nh4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }\nh5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\nh6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }\n\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 { font-size: 5.0rem; }\n  h2 { font-size: 4.2rem; }\n  h3 { font-size: 3.6rem; }\n  h4 { font-size: 3.0rem; }\n  h5 { font-size: 2.4rem; }\n  h6 { font-size: 1.5rem; }\n}\n\np {\n  margin-top: 0; }\n\n\n/* Links\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\na {\n  color: #1EAEDB; }\na:hover {\n  color: #0FA0CE; }\n\n\n/* Buttons\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box; }\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0; }\n.button.button-primary,\nbutton.button-primary,\ninput[type=\"submit\"].button-primary,\ninput[type=\"reset\"].button-primary,\ninput[type=\"button\"].button-primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0; }\n.button.button-primary:hover,\nbutton.button-primary:hover,\ninput[type=\"submit\"].button-primary:hover,\ninput[type=\"reset\"].button-primary:hover,\ninput[type=\"button\"].button-primary:hover,\n.button.button-primary:focus,\nbutton.button-primary:focus,\ninput[type=\"submit\"].button-primary:focus,\ninput[type=\"reset\"].button-primary:focus,\ninput[type=\"button\"].button-primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB; }\n\n\n/* Forms\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea,\nselect {\n  height: 38px;\n  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */\n  background-color: #fff;\n  border: 1px solid #D1D1D1;\n  border-radius: 4px;\n  box-shadow: none;\n  box-sizing: border-box; }\n/* Removes awkward default styles on some inputs for iOS */\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\ntextarea {\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\ninput[type=\"email\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"password\"]:focus,\ntextarea:focus,\nselect:focus {\n  border: 1px solid #33C3F0;\n  outline: 0; }\nlabel,\nlegend {\n  display: block;\n  margin-bottom: .5rem;\n  font-weight: 600; }\nfieldset {\n  padding: 0;\n  border-width: 0; }\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  display: inline; }\nlabel > .label-body {\n  display: inline-block;\n  margin-left: .5rem;\n  font-weight: normal; }\n\n\n/* Lists\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nul {\n  list-style: circle inside; }\nol {\n  list-style: decimal inside; }\nol, ul {\n  padding-left: 0;\n  margin-top: 0; }\nul ul,\nul ol,\nol ol,\nol ul {\n  margin: 1.5rem 0 1.5rem 3rem;\n  font-size: 90%; }\nli {\n  margin-bottom: 1rem; }\n\n\n/* Code\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ncode {\n  padding: .2rem .5rem;\n  margin: 0 .2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #F1F1F1;\n  border: 1px solid #E1E1E1;\n  border-radius: 4px; }\npre > code {\n  display: block;\n  padding: 1rem 1.5rem;\n  white-space: pre; }\n\n\n/* Tables\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nth,\ntd {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid #E1E1E1; }\nth:first-child,\ntd:first-child {\n  padding-left: 0; }\nth:last-child,\ntd:last-child {\n  padding-right: 0; }\n\n\n/* Spacing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nbutton,\n.button {\n  margin-bottom: 1rem; }\ninput,\ntextarea,\nselect,\nfieldset {\n  margin-bottom: 1.5rem; }\npre,\nblockquote,\ndl,\nfigure,\ntable,\np,\nul,\nol,\nform {\n  margin-bottom: 2.5rem; }\n\n\n/* Utilities\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.u-full-width {\n  width: 100%;\n  box-sizing: border-box; }\n.u-max-full-width {\n  max-width: 100%;\n  box-sizing: border-box; }\n.u-pull-right {\n  float: right; }\n.u-pull-left {\n  float: left; }\n\n\n/* Misc\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nhr {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  border-width: 0;\n  border-top: 1px solid #E1E1E1; }\n\n\n/* Clearing\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n\n/* Self Clearing Goodness */\n.container:after,\n.row:after,\n.u-cf {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n\n/* Media Queries\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/*\nNote: The best way to structure the use of media queries is to create the queries\nnear the relevant code. For example, if you wanted to change the styles for buttons\non small devices, paste the mobile query code up in the buttons section and style it\nthere.\n*/\n\n\n/* Larger than mobile */\n@media (min-width: 400px) {}\n\n/* Larger than phablet (also point when grid becomes active) */\n@media (min-width: 550px) {}\n\n/* Larger than tablet */\n@media (min-width: 750px) {}\n\n/* Larger than desktop */\n@media (min-width: 1000px) {}\n\n/* Larger than Desktop HD */\n@media (min-width: 1200px) {}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody\n{\n  overflow: hidden;\n  background-color: rgb( 255, 255, 255 );\n  margin: 0;\n  padding: 0;\n}\n\n.webgl\n{\n  outline: none;\n  image-rendering: optimizeSpeed;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n}\n\n.tsCanvas\n{\n  z-index: 2;\n  mix-blend-mode: screen;\n  opacity: 0.15;\n}\n\n.AV\n{\n  z-index: 1;\n  mix-blend-mode: difference;\n  \n}\n\n.box {\n  position: absolute;\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  color: white;\n  mix-blend-mode: difference;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 100vh;\n  width: 100vw;\n  font-size:medium;\n}\n\n.links {\n  z-index: 5;\n  position: absolute;\n  bottom: 1%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: white;\n  mix-blend-mode: difference;\n  font-size: small;\n  width: 100vw;\n}\n\n.hidden {\n  display: none;\n}\n\n.visible {\n  display: flex;\n  z-index: 4;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,gBAAgB;EAChB,sCAAsC;EACtC,SAAS;EACT,UAAU;AACZ;;AAEA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;;EAEE,UAAU;EACV,sBAAsB;EACtB,aAAa;AACf;;AAEA;;EAEE,UAAU;EACV,0BAA0B;;AAE5B;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,0BAA0B;EAC1B,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,0BAA0B;EAC1B,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,UAAU;AACZ","sourcesContent":["html,\nbody\n{\n  overflow: hidden;\n  background-color: rgb( 255, 255, 255 );\n  margin: 0;\n  padding: 0;\n}\n\n.webgl\n{\n  outline: none;\n  image-rendering: optimizeSpeed;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n}\n\n.tsCanvas\n{\n  z-index: 2;\n  mix-blend-mode: screen;\n  opacity: 0.15;\n}\n\n.AV\n{\n  z-index: 1;\n  mix-blend-mode: difference;\n  \n}\n\n.box {\n  position: absolute;\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  color: white;\n  mix-blend-mode: difference;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 100vh;\n  width: 100vw;\n  font-size:medium;\n}\n\n.links {\n  z-index: 5;\n  position: absolute;\n  bottom: 1%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: white;\n  mix-blend-mode: difference;\n  font-size: small;\n  width: 100vw;\n}\n\n.hidden {\n  display: none;\n}\n\n.visible {\n  display: flex;\n  z-index: 4;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/icons/github-logo.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/github-logo.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "4e92767e49445b3cc89e9e99bc47e550.svg");

/***/ }),

/***/ "./src/assets/icons/insta-logo.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/insta-logo.svg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "83f6628ce9bb70f5e4fda5d4ec93a583.svg");

/***/ }),

/***/ "./src/assets/icons/linked-logo.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/linked-logo.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "c7edb0f3cd867a03828551d841262eb6.svg");

/***/ }),

/***/ "./src/assets/icons/soundcloud-backup.svg":
/*!************************************************!*\
  !*** ./src/assets/icons/soundcloud-backup.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "37b17a162b3037fcccd318bd71d669b2.svg");

/***/ }),

/***/ "./src/assets/icons/spotify-logo.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/spotify-logo.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "15852f22eb5c291b05779102bfe7529d.svg");

/***/ }),

/***/ "./src/assets/icons/twitter-logo.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/twitter-logo.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "dc521708b2cfa62bcafd55beebe73caf.svg");

/***/ }),

/***/ "./src/assets/song1.mp3":
/*!******************************!*\
  !*** ./src/assets/song1.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "4bfd31218ae4f1ddbb16d03a56b65dfa.mp3");

/***/ }),

/***/ "./src/assets/song10.mp3":
/*!*******************************!*\
  !*** ./src/assets/song10.mp3 ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b2314a44eb7dda7d61b14deaf487a864.mp3");

/***/ }),

/***/ "./src/assets/song2.mp3":
/*!******************************!*\
  !*** ./src/assets/song2.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "9fc3afa075601d3a5b373d3fc194e824.mp3");

/***/ }),

/***/ "./src/assets/song3.mp3":
/*!******************************!*\
  !*** ./src/assets/song3.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "20d89a79f7f8d0b97c6246d184f51e68.mp3");

/***/ }),

/***/ "./src/assets/song4.mp3":
/*!******************************!*\
  !*** ./src/assets/song4.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "97c9a940b25bb358a9b4cbd2f384f748.mp3");

/***/ }),

/***/ "./src/assets/song5.mp3":
/*!******************************!*\
  !*** ./src/assets/song5.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d116f3dc77bf725d7a842dd07a5f874c.mp3");

/***/ }),

/***/ "./src/assets/song6.mp3":
/*!******************************!*\
  !*** ./src/assets/song6.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "2c41e531b69f6181dc6393c9e4279049.mp3");

/***/ }),

/***/ "./src/assets/song7.mp3":
/*!******************************!*\
  !*** ./src/assets/song7.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "5e6e256ca36c276552e098d7849eba30.mp3");

/***/ }),

/***/ "./src/assets/song8.mp3":
/*!******************************!*\
  !*** ./src/assets/song8.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b1460f4961fee987efd2edd4bcd1c665.mp3");

/***/ }),

/***/ "./src/assets/song9.mp3":
/*!******************************!*\
  !*** ./src/assets/song9.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "3163a2bd165cbebd57008f53fcd4b6f1.mp3");

/***/ }),

/***/ "./src/normalize.css":
/*!***************************!*\
  !*** ./src/normalize.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/skeleton.css":
/*!**************************!*\
  !*** ./src/skeleton.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./skeleton.css */ "./node_modules/css-loader/dist/cjs.js!./src/skeleton.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/shaders/backgroundFrag.glsl":
/*!*****************************************!*\
  !*** ./src/shaders/backgroundFrag.glsl ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "uniform float uTime;\nuniform float uResX;\nuniform float uResY;\nvarying vec3 vPosition;\n\n//snoise2\n\nvec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }\n\nfloat snoise2(vec2 v){\n  const vec4 C = vec4(0.211324865405187, 0.366025403784439,\n           -0.577350269189626, 0.024390243902439);\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n  vec2 i1;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n  i = mod(i, 289.0);\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n  + i.x + vec3(0.0, i1.x, 1.0 ));\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),\n    dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\n//snoise4\nfloat scale = 0.5;\nvec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\nfloat mod289(float x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\nvec4 permute(vec4 x) { return mod289(((x*34.0)+10.0)*x); }\n\nfloat permute(float x) { return mod289(((x*34.0)+10.0)*x); }\n\nvec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }\n\nfloat taylorInvSqrt(float r) { return 1.79284291400159 - 0.85373472095314 * r; }\n\nvec4 grad4(float j, vec4 ip) {\n  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n  vec4 p,s;\n\n  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n  s = vec4(lessThan(p, vec4(0.0)));\n  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; \n\n  return p;\n}\n\t\t\t\t\t\t\n#define F4 0.309016994374947451\n\nfloat snoise(vec4 v) {\n  const vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4\n                        0.276393202250021,  // 2 * G4\n                        0.414589803375032,  // 3 * G4\n                       -0.447213595499958); // -1 + 4 * G4\n\n  vec4 i  = floor(v + dot(v, vec4(F4)) );\n  vec4 x0 = v -   i + dot(i, C.xxxx);\n  vec4 i0;\n  vec3 isX = step( x0.yzw, x0.xxx );\n  vec3 isYZ = step( x0.zww, x0.yyz );\n  i0.x = isX.x + isX.y + isX.z;\n  i0.yzw = 1.0 - isX;\n  i0.y += isYZ.x + isYZ.y;\n  i0.zw += 1.0 - isYZ.xy;\n  i0.z += isYZ.z;\n  i0.w += 1.0 - isYZ.z;\n  vec4 i3 = clamp( i0, 0.0, 1.0 );\n  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n  vec4 x1 = x0 - i1 + C.xxxx;\n  vec4 x2 = x0 - i2 + C.yyyy;\n  vec4 x3 = x0 - i3 + C.zzzz;\n  vec4 x4 = x0 + C.wwww;\n  i = mod289(i); \n  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n  vec4 j1 = permute( permute( permute( permute (\n             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n  vec4 p0 = grad4(j0,   ip);\n  vec4 p1 = grad4(j1.x, ip);\n  vec4 p2 = grad4(j1.y, ip);\n  vec4 p3 = grad4(j1.z, ip);\n  vec4 p4 = grad4(j1.w, ip);\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n  p4 *= taylorInvSqrt(dot(p4,p4));\n  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\n  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\n  m0 = m0 * m0;\n  m1 = m1 * m1;\n  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\n               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;\n}\n\nvoid main()\n{\n  float nTime = uTime * 0.5;\n  float V = snoise(vec4(vPosition * scale * 2.0, cos(nTime)));\n  float V1 = snoise(1.2+(cos(0.25*nTime))*0.25* vec4(vPosition * scale * 20.0, sin(nTime)));\n  float V2 = snoise2(sin(nTime)*0.77*vec2(V1, sin(0.5*nTime)));\n  float V3 = snoise2(sin(0.5*nTime)*30.9*vec2(V2, cos(0.2*nTime)));\n  float V5 = snoise2(0.30*vec2(V3, sin(0.3*nTime)));\n  float r = snoise(vec4(vPosition, cos(nTime)));\n  float g = snoise(vec4(vPosition, cos(nTime + 0.1)));\n  float b = snoise(vec4(vPosition, cos(nTime + 0.2)));\n  float a = snoise(vec4(vPosition, sin(nTime)));\n  vec4 color1 = vec4(V, V, V, min(V+0.3, 1.0));\n  vec4 color2 = vec4(r, min(g+0.05, 1.0), b, min(a+0.1, 1.0));\n  vec4 color3 = vec4(min(V5-0.2, 1.0), min(V5-0.2, 1.0), min(V5-0.2, 1.0), min(V5+0.4, 1.0));\n  vec4 color = color1*0.45 + color2*0.05 + color3*0.50;\n  gl_FragColor = color;\n}"

/***/ }),

/***/ "./src/shaders/backgroundVert.glsl":
/*!*****************************************!*\
  !*** ./src/shaders/backgroundVert.glsl ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "varying vec3 vPosition;\n\nvoid main() {\n    vPosition = normalize(position);\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n}"

/***/ }),

/***/ "./src/shaders/fragmentCirlces.glsl":
/*!******************************************!*\
  !*** ./src/shaders/fragmentCirlces.glsl ***!
  \******************************************/
/***/ ((module) => {

module.exports = "uniform float uTime;\nuniform float uResX;\nuniform float uResY;\nvarying vec3 vPosition;\n\n//snoise2\n\nvec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }\n\nfloat snoise2(vec2 v){\n  const vec4 C = vec4(0.211324865405187, 0.366025403784439,\n           -0.577350269189626, 0.024390243902439);\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n  vec2 i1;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n  i = mod(i, 289.0);\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n  + i.x + vec3(0.0, i1.x, 1.0 ));\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),\n    dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\nvoid main()\n{\n  float scale = 0.5;\n  float nTime = uTime * 0.5;\n  float xy = snoise(vPosition.xy);\n  float yz = snoise(vPosition.yz);\n  float zx = snoise(vPosition.zx);\n  float V = snoise2(vec2((xy + yz + zx) * scale * 2.0, cos(nTime)));\n  float V1 = snoise2(1.2+(cos(0.25*nTime))*0.25* vec2((vPosition.x + vPosition.y + vPosition.z) * scale * 20.0, sin(nTime)));\n  float V2 = snoise2(sin(nTime)*0.77*vec2(V1, sin(0.5*nTime)));\n  float V3 = snoise2(sin(0.5*nTime)*30.9*vec2(V2, cos(0.2*nTime)));\n  float V5 = snoise2(0.30*vec2(V3, sin(0.3*nTime)));\n  float r = snoise2(vec2(vPosition.x + vPosition.y + vPosition.z, cos(nTime)));\n  float g = snoise2(vec2(vPosition.x + vPosition.y + vPosition.z, cos(nTime + 0.1)));\n  float b = snoise2(vec2(vPosition.x + vPosition.y + vPosition.z, cos(nTime + 0.2)));\n  float a = snoise2(vec2(vPosition.x + vPosition.y + vPosition.z, sin(nTime)));\n  vec4 color1 = vec4(V, V, V, min(V+0.3, 1.0));\n  vec4 color2 = vec4(r, min(g+0.05, 1.0), b, min(a+0.1, 1.0));\n  vec4 color3 = vec4(min(V5-0.2, 1.0), min(V5-0.2, 1.0), min(V5-0.2, 1.0), min(V5+0.4, 1.0));\n  vec4 color = color1*0.45 + color2*0.05 + color3*0.50;\n  gl_FragColor = color;\n}"

/***/ }),

/***/ "./src/shaders/fragmentFairy.glsl":
/*!****************************************!*\
  !*** ./src/shaders/fragmentFairy.glsl ***!
  \****************************************/
/***/ ((module) => {

module.exports = "uniform float uTime;\nuniform float uResX;\nuniform float uResY;\nuniform float uFFT[ 1020 ];\n\n//snoise2\n\nvec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }\n\nfloat snoise(vec2 v){\n  const vec4 C = vec4(0.211324865405187, 0.366025403784439,\n           -0.577350269189626, 0.024390243902439);\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n  vec2 i1;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n  i = mod(i, 289.0);\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n  + i.x + vec3(0.0, i1.x, 1.0 ));\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),\n    dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\nvoid main(){\n\n    //constants\n\n    vec2 st = gl_FragCoord.xy/vec2 ( uResX * 2.0 , uResY * 2.0 );\n    vec2 center = st - vec2 ( 0.5, 0.5 );\n    vec2 topR = st - vec2 ( 1.0, 1.0 );\n    vec2 botL = st - vec2 ( 0.0, 0.0 );\n    vec2 botR = st - vec2 ( 0.0, 1.0 );\n    vec2 topL = st - vec2 ( 1.0, 0.0 );\n\n    vec3 color1 = vec3 ( 1.0, 0.0, 0.5 ); //hot pink\n    vec3 color2 = vec3 ( 1.0, 0.5, 0.5 ); //peach\n    vec3 color3 = vec3 ( 1.0, 0.5, 0.2 ); //orange\n    vec3 color4 = vec3 ( 1.0, 0.7, 0.8 ); //light pink\n    vec3 color5 = vec3 ( 0.0, 0.4, 0.1 ); //forest green\n    vec3 color6 = vec3 ( 0.0, 0.2, 0.5 ); //blue\n    vec3 color7 = vec3 ( 0.0, 0.4, 0.0 ); //green\n    \n    float fft1 = cos ( uFFT[ 100 ] * 0.01 ) * 5.0;\n    float fft2 = cos ( uFFT[ 200 ] * 0.1 ) * 0.3;\n    float fft3 = cos ( uFFT[ 300 ] * 0.01 ) * 5.0;\n    float fft4 = cos ( uFFT[ 400 ] * 0.01 ) * 5.0;\n    float fft5 = cos ( uFFT[ 500 ] * 0.01 ) * 5.5;\n    float fft6 = cos ( uFFT[ 600 ] * 0.01 ) * 5.5;\n    float fft7 = uFFT[ 100 ];\n    float fft8 = uFFT[ 250 ];\n    float fft9 = cos ( uFFT[ 400 ] * 0.05 ) * 1.5;\n    float fft10 = uFFT[ 550 ];\n    float fft11 = uFFT[ 700 ];\n\n    float t1 = cos ( uTime );\n    float t2 = cos ( uTime * 0.1 );\n    float t3 = cos ( uTime * 0.01 );\n    float t4 = cos ( uTime * 0.1 ) + sin ( uTime * 0.2 );\n\n    float noise1 = snoise ( vec2 ( fft7 * 0.1, uTime * 0.01 ) );\n    float noise2 = snoise ( fft8 * cos ( fft8 * t3 ) * vec2 ( st.x, st.y ) );\n    float noise3 = snoise ( vec2 ( noise1, noise2 ) );\n    float noise4 = snoise ( vec2 ( noise3, st.x + st.y ) );\n    float noise5 = snoise ( vec2 ( noise4, fft8 * 0.1 ) );\n    float noise6 = snoise ( vec2 ( noise5, center.x + center.y ) );\n\n    //color4\n\n    float leafBase = 0.1;\n    float leavesTop = cos ( atan ( topR.y / topR.x ) * fft7 );\n    leavesTop *= cos ( atan ( center.y / center.x ) * fft8 );\n    leavesTop *= cos ( atan ( botR.y / botR.x ) * fft10 );\n    leavesTop *= cos ( atan ( topL.y / topL.x ) * fft11 );\n    leavesTop *= cos ( t4 + atan ( botL.y / botL.x ) * fft5 );\n    float leaves1 = leafBase + leavesTop;\n    color4 *= smoothstep ( leaves1, leaves1 + fft2, length ( center ) );\n    color1 *= smoothstep ( leaves1, leaves1 + fft2, length ( center ) );\n    color7 *= smoothstep ( leaves1, leaves1 + 0.1 + fft2, length ( center ) );\n\n    //color5\n\n    color5.y *= noise6;\n    color5.z *= noise6;\n\n    //color6\n\n    color6.y *= noise5;\n    color6.z *= noise5;\n\n    //final color\n\n    vec3 colorNoise = color6 + color5;\n    vec3 color = normalize ( exp2 ( colorNoise ) + exp2 ( color4 ) - color1 + color7 );\n    // color = min( color, color7 );\n    gl_FragColor = vec4( color, 1.0 );\n}"

/***/ }),

/***/ "./src/shaders/fragmentVoronoi.glsl":
/*!******************************************!*\
  !*** ./src/shaders/fragmentVoronoi.glsl ***!
  \******************************************/
/***/ ((module) => {

module.exports = "uniform float uTime;\nuniform float uResX;\nuniform float uResY;\nuniform float uFFT[ 1020 ];\n\nvec3 hash3( vec2 p )\n{\n    vec3 q = vec3( dot(p,vec2(127.1,311.7)), \n\t\t\t\t   dot(p,vec2(269.5,183.3)), \n\t\t\t\t   dot(p,vec2(419.2,371.9)) );\n\treturn fract(sin(q * uFFT[100] * 0.001)*43758.5453);\n}\n\nfloat voronoise( in vec2 p, float u, float v )\n{\n\tfloat k = 1.0+63.0*pow(1.0-v,6.0);\n\n    vec2 i = floor(p);\n    vec2 f = fract(p);\n    \n\tvec2 a = vec2(0.0,0.0);\n    for( int y=-2; y<=2; y++ )\n    for( int x=-2; x<=2; x++ )\n    {\n        vec2  g = vec2( x, y );\n\t\tvec3  o = hash3( i + g )*vec3(u,u,1.0);\n\t\tvec2  d = g - f + o.xy;\n\t\tfloat w = pow( 1.0-smoothstep(0.0,1.414,length(d)), k );\n\t\ta += vec2(o.z*w,w);\n    }\n\t\n    return a.x/a.y;\n}\n\nvoid main() {\n    vec3 red = vec3(1.0, 1.0, 1.0);\n    vec3 blue = vec3(0.0, 0.0, 1.0);\n    vec2 uv = gl_FragCoord.xy / vec2(uResX, uResY);\n    float one = uFFT[400];\n    float two = cos(cos(uTime)) * uFFT[100];\n\tfloat f = voronoise( (10.0 + one * 0.01) * uv, two * 0.1, sin(cos(sin(uTime)) * uFFT[800] * 0.001));\n    float f2 = voronoise( (3.0 * one * 0.01) * uv, two * 0.1, sin(cos(sin(uTime)) * uFFT[800] * 0.01));\n    float f3 = voronoise( (40.0 * one * 0.1) * uv, two * 0.3, sin(cos(sin(uTime)) * uFFT[800] * 0.02));\n    vec3 color = red;\n    vec3 lerpVec = blue-red;\n    lerpVec = lerpVec / length(lerpVec);\n    color += lerpVec * (f + 0.1);\n    color.g += f2;\n    color.b += f3;\n    color = color / length(color);\n    gl_FragColor = vec4(color, 1.0);\n}"

/***/ }),

/***/ "./src/shaders/vertexCirlces.glsl":
/*!****************************************!*\
  !*** ./src/shaders/vertexCirlces.glsl ***!
  \****************************************/
/***/ ((module) => {

module.exports = "varying vec3 vPosition;\n\nvoid main() {\n    vPosition = normalize(position);\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n}"

/***/ }),

/***/ "./src/shaders/vertexFairy.glsl":
/*!**************************************!*\
  !*** ./src/shaders/vertexFairy.glsl ***!
  \**************************************/
/***/ ((module) => {

module.exports = "void main() {\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position ,1.0);\n}"

/***/ }),

/***/ "./src/shaders/vertexVoronoi.glsl":
/*!****************************************!*\
  !*** ./src/shaders/vertexVoronoi.glsl ***!
  \****************************************/
/***/ ((module) => {

module.exports = "void main(){\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position ,1.0);\n}"

/***/ }),

/***/ "./src/Components/Audio.js":
/*!*********************************!*\
  !*** ./src/Components/Audio.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AudioInstance)
/* harmony export */ });
class AudioInstance
{
    /*
     * fftSize must be a power of 2
     */
    constructor( fftSize )
    {
        this.audio = new Audio( );
        this.audioCtx = new AudioContext( );
        this.analyser = this.audioCtx.createAnalyser( );
        this.fft = fftSize;
        this.analyser.fftSize = fftSize;
        this.data = new Uint8Array( this.analyser.frequencyBinCount );
        this.pauseFlag = false;
    }
    destructor( )
    {
        this.audioCtx.close( );
    } 
    loadTrack( song )
    {
        this.audioCtx.close( );
        this.audioCtx = new AudioContext( );
        this.analyser = this.audioCtx.createAnalyser( );
        this.analyser.fftSize = this.fft;
        this.audio.autoplay = true;
        this.audio.src = song;
        this.audio.loop = true;
        this.source = this.audioCtx.createMediaElementSource( this.audio );
        this.source.connect( this.analyser );
        this.source.connect( this.audioCtx.destination );
    }
    onTick( )
    {
        this.analyser.getByteFrequencyData( this.data );
    }
    toggleAudio( ) {
        if (this.pauseFlag) {
            this.audioCtx.resume(); // Resume the AudioContext
            this.pauseFlag = !this.pauseFlag;
        }
        else {
            this.audioCtx.suspend(); // Pause the AudioContext
            this.pauseFlag = !this.pauseFlag;
        }
    }
};

/***/ }),

/***/ "./src/Components/Camera.js":
/*!**********************************!*\
  !*** ./src/Components/Camera.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Camera)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


class Camera
{
    constructor( )
    {
        
    }
    createCamera1( diameter, sizes ) {
        //camera
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 1000 );
        this.camera.position.set( diameter + 5, diameter + 5, diameter + 5 );
        this.camera.lookAt( 0, 0, 0 );

        //other variables
        this.flagNew = -1;
        this.cameraSpeed = 0.5;
        this.cameraAngularSpeed = Math.PI/8.0;
        this.secondsPerClip = 7.5;
        this.diameter = diameter;
    }
    resize( sizes )
    {
        this.camera.aspect = sizes.width / sizes.height;
        this.camera.updateProjectionMatrix( );
    }
    tick1( elapsedTime, deltaTime ) {
        this.moveCamera( elapsedTime, deltaTime );
    }
    moveCamera( elapsedTime, deltaTime )
    {
        var switchStatement = Math.floor(6.0 + ( elapsedTime / this.secondsPerClip ) ) % 8 ;
        var flag = false;
        if (this.flagNew != switchStatement) flag = true;
        switch( switchStatement ) {
        //glitchy circlular motion about z-axis with radius of "diameter"
        case 0:
            if(flag) {
                this.camera.position.set( 1.2 * this.diameter, 0, 4 );
                this.camera.lookAt( 0, 0, 0 );
            }
            var theta = this.cameraAngularSpeed * deltaTime + Math.atan( this.camera.position.y / this.camera.position.x );
            this.camera.position.x = 1.2 * this.diameter * Math.cos( theta );
            this.camera.position.y = 1.2 * this.diameter * Math.sin( theta );
            this.camera.lookAt( 0, 0, 0 );
            break;
        //still looking at scene from a side and slightly above
        case 4:
            this.camera.position.set( 1.5 * this.diameter, 2, 0 );
            this.camera.lookAt( 0, 0, 0 );
            break;
        //straight line through the scene parallel to z-axis
        case 2:
            if(flag) {
                this.camera.position.set( 1, 2, -2 * this.diameter);
                this.camera.lookAt( 0, 0, 0 );
            }
            this.camera.position.z += 5.0 * this.cameraSpeed * deltaTime;
            this.camera.lookAt( 0, 0, 0 );
            break;
        //zooming away from the center
        case 3:
            if(flag) {
                this.camera.position.set( 0.0, 1.0, 0.0 );
                this.camera.lookAt( 0, 0, 0 );
            }
            var theta = this.cameraAngularSpeed * deltaTime + Math.atan( this.camera.position.z / this.camera.position.x );
            this.camera.position.x += 5.0 * this.cameraSpeed * deltaTime;
            this.camera.position.z += 5.0 * this.cameraSpeed * deltaTime;
            break;
        //semi - birdseye view not changing
        case 1:
            this.camera.position.set( 0, 0.3 * this.diameter, 23 );
            this.camera.lookAt( 0, 0, 0 );
            break;
        //sprial motion about the x-axis
        case 5:
            if(flag) {
                this.camera.position.set( 1.5 * this.diameter, this.diameter, 0);
                this.camera.lookAt( 0, 0, 0 );
            }
            var theta = this.cameraAngularSpeed * deltaTime + Math.atan( this.camera.position.y / this.camera.position.z );
            this.camera.position.x -= this.cameraSpeed * deltaTime;
            this.camera.position.y = this.diameter * Math.sin( theta );
            this.camera.position.z = this.diameter * Math.cos( theta );
            this.camera.lookAt( 0, 0, 0 );
            break;
        //scrolling
        case 6:
            if(flag) {
                this.camera.position.set( -3, this.diameter, -3);
                this.camera.lookAt( 0, this.diameter, 0 );
            }
            this.camera.position.y -= 8.0 * this.cameraSpeed * deltaTime;
            break;
        //real circlular motion about y-axis with radius of "this.diameter" //fix
        case 7:
            if(flag) {
                this.camera.position.set( 1, 2, 0 );
                this.camera.lookAt( 0, 0, 0 );
            }
            var theta = 3.0 * this.cameraAngularSpeed * deltaTime + Math.atan2( this.camera.position.z, this.camera.position.x );
            var radiusXZ = Math.sqrt(this.camera.position.x * this.camera.position.x + this.camera.position.z * this.camera.position.z);
            this.camera.position.z = (radiusXZ + ( 5.0 * deltaTime * this.cameraSpeed ) ) * Math.sin( theta );
            this.camera.position.x = (radiusXZ + ( 5.0 * deltaTime * this.cameraSpeed ) ) * Math.cos( theta );
            this.camera.position.y += 4.0 * this.cameraSpeed * deltaTime;
            this.camera.lookAt( 0, 0, 0 );
            break;
        }
        this.flagNew = switchStatement;
    }
    createCamera2( sizes )
    {
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera( 75, sizes.width / sizes.height, 1, 100 );
        this.camera.position.set( -50, -50, -50 );
        this.camera.lookAt( 0, 0, 0 );
    }
    createCamera3( sizes ) {
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 1000 );
        this.camera.position.set( 0, 0, -20 );
        this.camera.lookAt( 0, 0, 0 );
    }
    createCameraT( sizes ) {
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, sizes.width / sizes.height, 11, 100);
        this.camera.lookAt(0,0,0);
        this.camera.position.x = 0;
        this.camera.position.y = 0;
        this.camera.position.z = -20;
    }
};

/***/ }),

/***/ "./src/Components/Lights.js":
/*!**********************************!*\
  !*** ./src/Components/Lights.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Lights)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


class Lights
{
    constructor( diameter )
    {
        this.diameter = diameter
    }
    lights1( scene )
    {
        //sun
        var sun = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight( 0xffffff, 0.9 );
        sun.position.set( 2 * this.diameter, 5 * this.diameter, 0 );
        sun.castShadow = true;
        scene.add( sun );

        //ambient light
        var ambient = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight( 0xffffff, 0.3 );
        scene.add( ambient );

        //hem
        var hem = new three__WEBPACK_IMPORTED_MODULE_0__.HemisphereLight( 'orange', 'purple' );
        hem.rotateX(Math.PI/2);
        scene.add( hem );
    }
    lights3( scene )
    {       
        //sun 1
        var sun1 = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight( 0xffffff, 0.6 );
        sun1.position.set( 20, 0, -30 );
        sun1.castShadow = true;
        scene.add( sun1 );

        //sun 2
        var sun2 = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight( 0xffffff, 0.6 );
        sun2.position.set( -20, 0, -30 );
        sun2.castShadow = true;
        scene.add( sun2 );

        //hem
        var hem = new three__WEBPACK_IMPORTED_MODULE_0__.HemisphereLight( 'orange', 'purple', 1.0 );
        scene.add( hem );
    }
};

/***/ }),

/***/ "./src/Components/Objects.js":
/*!***********************************!*\
  !*** ./src/Components/Objects.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Objects)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _shaders_vertexFairy_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shaders/vertexFairy.glsl */ "./src/shaders/vertexFairy.glsl");
/* harmony import */ var _shaders_vertexFairy_glsl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shaders_vertexFairy_glsl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shaders_fragmentFairy_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaders/fragmentFairy.glsl */ "./src/shaders/fragmentFairy.glsl");
/* harmony import */ var _shaders_fragmentFairy_glsl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shaders_fragmentFairy_glsl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shaders_vertexCirlces_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shaders/vertexCirlces.glsl */ "./src/shaders/vertexCirlces.glsl");
/* harmony import */ var _shaders_vertexCirlces_glsl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shaders_vertexCirlces_glsl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shaders_fragmentCirlces_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shaders/fragmentCirlces.glsl */ "./src/shaders/fragmentCirlces.glsl");
/* harmony import */ var _shaders_fragmentCirlces_glsl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shaders_fragmentCirlces_glsl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shaders_vertexVoronoi_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shaders/vertexVoronoi.glsl */ "./src/shaders/vertexVoronoi.glsl");
/* harmony import */ var _shaders_vertexVoronoi_glsl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shaders_vertexVoronoi_glsl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shaders_fragmentVoronoi_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shaders/fragmentVoronoi.glsl */ "./src/shaders/fragmentVoronoi.glsl");
/* harmony import */ var _shaders_fragmentVoronoi_glsl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shaders_fragmentVoronoi_glsl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shaders_backgroundVert_glsl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shaders/backgroundVert.glsl */ "./src/shaders/backgroundVert.glsl");
/* harmony import */ var _shaders_backgroundVert_glsl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shaders_backgroundVert_glsl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shaders_backgroundFrag_glsl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shaders/backgroundFrag.glsl */ "./src/shaders/backgroundFrag.glsl");
/* harmony import */ var _shaders_backgroundFrag_glsl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_shaders_backgroundFrag_glsl__WEBPACK_IMPORTED_MODULE_7__);










class Objects
{
    constructor() 
    {

    }
    //SCENE 1
    objects1( scene )
    {
        var boxGeometry = new three__WEBPACK_IMPORTED_MODULE_8__.BoxGeometry( 1, 1, 1 );
        var boxMaterial1 = new three__WEBPACK_IMPORTED_MODULE_8__.MeshPhongMaterial( );
        this.cubes = [ ];
        var color1 = new three__WEBPACK_IMPORTED_MODULE_8__.Color( 1.0, 0.0, 0.5 ); //hot pink
        var color2 = new three__WEBPACK_IMPORTED_MODULE_8__.Color( 0.0, 0.6, 0.2 ); //forest green
        this.squaresRadius = 25;
        for( var j = -1 * this.squaresRadius; j < this.squaresRadius; j += 1 ) {
            for( var i = -1 * this.squaresRadius; i < this.squaresRadius; i += 1 ) {
                var temp = new three__WEBPACK_IMPORTED_MODULE_8__.Mesh( boxGeometry , boxMaterial1 );
                temp.position.set( i, 0, j );
                var iScale = ( i + this.squaresRadius ) / ( 2 * this.squaresRadius ); //0 to 1 scale for i value
                var jScale = ( j + this.squaresRadius ) / ( 2 * this.squaresRadius ); //0 to 1 scale for j value
                var iScaleNorm = iScale / ( jScale );
                var jScaleNorm = jScale / ( iScale );
                temp.material.color.r = color1.r * iScaleNorm + color2.r * jScaleNorm;
                temp.material.color.g = color1.g * ( iScaleNorm/1.5 ) + color2.g * ( jScaleNorm * 1.5 );
                temp.material.color.b = color1.b * iScaleNorm + color2.b * jScaleNorm;
                temp.castShadow = true;
                temp.receiveShadow = true;
                this.cubes.push( temp );
            }
        }
        for ( let index in this.cubes ) { scene.add( this.cubes[ index ] ); };
    }
    tick1( A, deltaTime ) {
        this.cubes.forEach( ( e, i ) => {
            e.scale.y = A.data[ i % ( this.squaresRadius * this.squaresRadius ) ] / 10 + 1;
            e.rotateY( deltaTime * Math.PI/4 * A.data[ i % ( this.squaresRadius * this.squaresRadius ) ] * 0.05 );
        });
    }
    //SCENE 2
    objects2( scene, sizes, A )
    {
        var planeGeometry = new three__WEBPACK_IMPORTED_MODULE_8__.PlaneGeometry( sizes.width/2, sizes.height/2 );
        this.planeMaterial = new three__WEBPACK_IMPORTED_MODULE_8__.ShaderMaterial({
            vertexShader: (_shaders_vertexFairy_glsl__WEBPACK_IMPORTED_MODULE_0___default()),
            fragmentShader: (_shaders_fragmentFairy_glsl__WEBPACK_IMPORTED_MODULE_1___default()),
            uniforms: {
                uTime: {value: 0.0},
                uResY: {value: sizes.height},
                uResX: {value: sizes.width},
                uFFT: { type: "fv1",  value: A.data }
            },
        });
        this.planeMaterial.needsUpdate = true;
        this.plane = new three__WEBPACK_IMPORTED_MODULE_8__.Mesh( planeGeometry, this.planeMaterial );
        this.plane.lookAt(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(-0.7, -0.7, -0.7));
        scene.add( this.plane );
    }
    resize2( sizes ) {
        this.planeMaterial.uniforms.uResY.value = sizes.height;
        this.planeMaterial.uniforms.uResX.value = sizes.width;
    }
    tick2( A, elapsedTime )
    {
        this.planeMaterial.uniforms.uTime.value = elapsedTime;
        this.planeMaterial.uniforms.uFFT.value = A.data;
    }
    //SCENE 3
    objects3( scene )
    {
        var boxGeometry = new three__WEBPACK_IMPORTED_MODULE_8__.OctahedronGeometry( 1, 0 );
        var boxMaterial = new three__WEBPACK_IMPORTED_MODULE_8__.MeshPhongMaterial( );
        this.cubes = [ ];
        var color = new three__WEBPACK_IMPORTED_MODULE_8__.Color( 0.0, 0.6, 0.2 ); //forest green
        for( let i = 0; i < 40; i++ ) {
            for( let j = 0; j < 20; j++) {
                let temp = new three__WEBPACK_IMPORTED_MODULE_8__.Mesh( boxGeometry , boxMaterial );
                temp.position.set( i + Math.random( ) / 2 - 20, j + Math.random( ) / 2 - 10, Math.random( ) * 15 - 15 );
                temp.rotateX( Math.random( ) );
                temp.rotateY( Math.random( ) );
                temp.rotateZ( Math.random( ) );
                temp.material.color.r = color.r + ( Math.random( ) / 8) ;
                temp.material.color.g = color.g + ( Math.random( ) / 2) - 0.4 ;
                temp.material.color.b = color.b + ( Math.random( ) / 8) ;
                temp.castShadow = true;
                temp.receiveShadow = true;
                this.cubes.push( [ temp, false, temp.position.z, temp.position.x, temp.position.y ] );
            }
        }
        for ( let index in this.cubes ) { scene.add( this.cubes[ index ][ 0 ] ); };
    }
    tick3( A, deltaTime )
    {
        this.cubes.forEach( ( e, i ) => {
            let dataValue =  A.data[ i % 1024 ];
            if ( e[ 1 ] ) {
                this.triggerCube( e );
            }
            else if ( dataValue > 120 ) {
                e[ 0 ].position.z -= 7;
                e[ 1 ] = true;
            }
            e[ 0 ].rotateX( deltaTime * Math.PI/4 * dataValue * 0.1);
            e[ 0 ].rotateY( deltaTime * Math.PI/6 * dataValue * 0.1);
            e[ 0 ].rotateZ( deltaTime * Math.PI/2 * dataValue * 0.1);
        });
    }
    triggerCube( e ) {
        if( e[ 0 ].position.z >= e[ 2 ] ) {
            e[ 1 ] = false;
            return;
        }
        e[ 0 ].position.z += 0.01;
    }
    //SCENE 4
    objects4( scene, sizes, A )
    {
        var planeGeometry = new three__WEBPACK_IMPORTED_MODULE_8__.PlaneGeometry( sizes.width/2, sizes.height/2 );
        this.planeMaterial = new three__WEBPACK_IMPORTED_MODULE_8__.ShaderMaterial({
            vertexShader: (_shaders_vertexCirlces_glsl__WEBPACK_IMPORTED_MODULE_2___default()),
            fragmentShader: (_shaders_fragmentCirlces_glsl__WEBPACK_IMPORTED_MODULE_3___default()),
            uniforms: {
                uTime: {value: 0.0},
                uResY: {value: sizes.height},
                uResX: {value: sizes.width},
            },
        });
        this.planeMaterial.needsUpdate = true;
        this.plane = new three__WEBPACK_IMPORTED_MODULE_8__.Mesh( planeGeometry, this.planeMaterial );
        this.plane.lookAt(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(-0.7, -0.7, -0.7));
        scene.add( this.plane );
    }
    tick4( A, elapsedTime )
    {
        this.planeMaterial.uniforms.uTime.value = elapsedTime;
    }
    //SCENE 5
    createCircle( r, d )
    {
        let geometry = new three__WEBPACK_IMPORTED_MODULE_8__.CircleGeometry( r, d );
        return geometry;
    }
    objects5( scene )
    {
        this.colors = [ 0xffff00, 0xff00ff, 0x00ffff, 0xff0000, 0x00ff00, 0x0000ff, 0xffffff];
        this.cubes = [ ];
        for ( let i = 0; i < 40; i++ ) {
            let r = 27 - Math.random()*5;
            let d = 64 - Math.random()*32;
            let geometry = this.createCircle( r,  d );
            let material = new three__WEBPACK_IMPORTED_MODULE_8__.MeshBasicMaterial( { wireframe: true, wireframeLinewidth: 2.0, color: this.colors[ i % 7 ] } );
            let temp = new three__WEBPACK_IMPORTED_MODULE_8__.Mesh( geometry, material );
            temp.geometry.verticesNeedUpdate = true;
            temp.geometry.dynamic = true;
            scene.add( temp );
            this.cubes.push( [ temp, r, d ] );
        }
    }
    tick5( A, deltaTime )
    {
        this.cubes.forEach( ( e, i ) => {
            let dataValue =  A.data[ (i * 25) % 1024 ];
            e[0].rotateX( deltaTime * Math.PI/4 * dataValue * 0.01 );
            e[0].rotateY( deltaTime * Math.PI/6 * dataValue * 0.01 );
            e[0].rotateZ( deltaTime * Math.PI/2 * dataValue * 0.01 );
            let r = (dataValue - e[1] ) * deltaTime;
            let geometry = this.createCircle( r , e[2] );
            let material = new three__WEBPACK_IMPORTED_MODULE_8__.MeshBasicMaterial( { wireframe: true, wireframeLinewidth: 2.0, color: this.colors[ i % 7 ] } );
            this.cubes[i] = new three__WEBPACK_IMPORTED_MODULE_8__.Mesh( geometry, material );
        });
    }
    //SCENE 6
    objects6( scene, sizes, A )
    {
        var planeGeometry = new three__WEBPACK_IMPORTED_MODULE_8__.PlaneGeometry( sizes.width/2, sizes.height/2 );
        this.planeMaterial = new three__WEBPACK_IMPORTED_MODULE_8__.ShaderMaterial({
            vertexShader: (_shaders_vertexVoronoi_glsl__WEBPACK_IMPORTED_MODULE_4___default()),
            fragmentShader: (_shaders_fragmentVoronoi_glsl__WEBPACK_IMPORTED_MODULE_5___default()),
            uniforms: {
                uTime: {value: 0.0},
                uResY: {value: sizes.height},
                uResX: {value: sizes.width},
                uFFT: { type: "fv1",  value: A.data }
            },
        });
        this.planeMaterial.needsUpdate = true;
        this.plane = new three__WEBPACK_IMPORTED_MODULE_8__.Mesh( planeGeometry, this.planeMaterial );
        this.plane.lookAt(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(-0.7, -0.7, -0.7));
        scene.add( this.plane );
    }
    tick6( A, elapsedTime )
    {
        this.planeMaterial.uniforms.uTime.value = elapsedTime;
        this.planeMaterial.uniforms.uFFT.value = A.data;
    }
    objectsT( scene, sizes, A )
    {
        this.material = new three__WEBPACK_IMPORTED_MODULE_8__.ShaderMaterial({
            vertexShader: (_shaders_backgroundVert_glsl__WEBPACK_IMPORTED_MODULE_6___default()),
            fragmentShader: (_shaders_backgroundFrag_glsl__WEBPACK_IMPORTED_MODULE_7___default()),
            uniforms: {
                uTime: {value: 0.0},
                uResY: {value: sizes.height},
                uResX: {value: sizes.width},
            },
            side: three__WEBPACK_IMPORTED_MODULE_8__.DoubleSide,
        });
        this.material.needsUpdate = true;
        // this.name = 
        this.geometry = new three__WEBPACK_IMPORTED_MODULE_8__.SphereGeometry(50);
        this.plane = new three__WEBPACK_IMPORTED_MODULE_8__.Mesh(this.geometry, this.material);
        scene.add( this.plane )
    }
    resizeT( sizes )
    {
        this.material.uniforms.uResY.value = sizes.height;
        this.material.uniforms.uResX.value = sizes.width;
    }
    tickT( A, deltaTime, elapsedTime )
    {
        this.material.uniforms.uTime.value = elapsedTime;
    }
};

/***/ }),

/***/ "./src/Components/Renderer.js":
/*!************************************!*\
  !*** ./src/Components/Renderer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Renderer)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


class Renderer
{
    constructor( canvas, sizes )
    {
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({
            canvas: canvas,
            alpha: true
        });
        this.renderer.shadowMap.enabled = true;
        this.renderer.setSize( sizes.width, sizes.height );
        this.renderer.setPixelRatio( Math.min( window.devicePixelRatio, 2 )); //reconsider for performance issues
        this.renderer.setClearAlpha(0x000000, 0);
    }
    resize( sizes )
    {
        this.renderer.setSize( sizes.width, sizes.height );
        this.renderer.setPixelRatio( Math.min( window.devicePixelRatio, 2 )); //reconsider for performance issues
    }
    render( scene, camera )
    {
        this.renderer.render( scene, camera );
    }
};

/***/ }),

/***/ "./src/Scenes/scene1.js":
/*!******************************!*\
  !*** ./src/Scenes/scene1.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ scene1)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Components_Objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Objects.js */ "./src/Components/Objects.js");
/* harmony import */ var _Components_Camera_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Camera.js */ "./src/Components/Camera.js");
/* harmony import */ var _Components_Lights_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Lights.js */ "./src/Components/Lights.js");





class scene1
{
    constructor( sizes, A )
    {
        //member variables
        this.diameter = 30;
        //create scene
        this.scene = new three__WEBPACK_IMPORTED_MODULE_3__.Scene( );
        this.scene.background = new three__WEBPACK_IMPORTED_MODULE_3__.Color( 0.1, 0.1, 0.1 );
        //create objects
        this.O = new _Components_Objects_js__WEBPACK_IMPORTED_MODULE_0__["default"]( );
        this.O.objects1( this.scene );
        //create camera
        this.C = new _Components_Camera_js__WEBPACK_IMPORTED_MODULE_1__["default"]( );
        this.C.createCamera1( this.diameter, sizes );
        //add lights
        this.L = new _Components_Lights_js__WEBPACK_IMPORTED_MODULE_2__["default"]( this.diameter );
        this.L.lights1( this.scene );
    }
    resize( sizes )
    {
        // Update camera
        this.C.resize( sizes );
    }
    tick( deltaTime, elapsedTime, A )
    {
        //update camera position
        this.C.tick1( elapsedTime, deltaTime );
        //cubes
        this.O.tick1( A, deltaTime );
    }
};

/***/ }),

/***/ "./src/Scenes/scene2.js":
/*!******************************!*\
  !*** ./src/Scenes/scene2.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ scene2)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Components_Objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Objects.js */ "./src/Components/Objects.js");
/* harmony import */ var _Components_Camera_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Camera.js */ "./src/Components/Camera.js");




class scene2
{
    constructor( sizes, A )
    {
        //create scene
        this.scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene( );
        this.scene.background = new three__WEBPACK_IMPORTED_MODULE_2__.Color( 0.5, 0.5, 0.5 );
        //create objects
        this.O = new _Components_Objects_js__WEBPACK_IMPORTED_MODULE_0__["default"]( );
        this.O.objects2( this.scene, sizes, A );
        //create camera
        this.C = new _Components_Camera_js__WEBPACK_IMPORTED_MODULE_1__["default"]( );
        this.C.createCamera2( sizes );
    }
    resize( sizes )
    {
        // Update camera
        this.C.resize( sizes );
        // Update uniforms
        this.O.resize2( sizes );
    }
    tick( deltaTime, elapsedTime, A )
    {
        // uniforms
        this.O.tick2( A, elapsedTime );
    }
};

/***/ }),

/***/ "./src/Scenes/scene3.js":
/*!******************************!*\
  !*** ./src/Scenes/scene3.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ scene3)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Components_Objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Objects.js */ "./src/Components/Objects.js");
/* harmony import */ var _Components_Camera_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Camera.js */ "./src/Components/Camera.js");
/* harmony import */ var _Components_Lights_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Lights.js */ "./src/Components/Lights.js");





class scene3
{
    constructor( sizes, A )
    {
        //member variables

        //create scene
        this.scene = new three__WEBPACK_IMPORTED_MODULE_3__.Scene( );
        this.scene.background = new three__WEBPACK_IMPORTED_MODULE_3__.Color( 0.0, 0.0, 0.05 );
        // this.scene.background = new THREE.Color( 1.0, 0.5, 0.05 );
        //create objects
        this.O = new _Components_Objects_js__WEBPACK_IMPORTED_MODULE_0__["default"]( );
        this.O.objects3( this.scene );
        //create camera
        this.C = new _Components_Camera_js__WEBPACK_IMPORTED_MODULE_1__["default"]( );
        this.C.createCamera3( sizes );
        //add lights
        this.L = new _Components_Lights_js__WEBPACK_IMPORTED_MODULE_2__["default"]( this.diameter );
        this.L.lights3( this.scene );
    }
    resize( sizes )
    {
        // Update camera
        this.C.resize( sizes );
    }
    tick( deltaTime, elapsedTime, A )
    {
        //cubes
        this.O.tick3( A, deltaTime );
    }
};

/***/ }),

/***/ "./src/Scenes/scene4.js":
/*!******************************!*\
  !*** ./src/Scenes/scene4.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ scene4)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Components_Objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Objects.js */ "./src/Components/Objects.js");
/* harmony import */ var _Components_Camera_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Camera.js */ "./src/Components/Camera.js");




class scene4
{
    constructor( sizes, A )
    {
        //create scene
        this.scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene( );
        this.scene.background = new three__WEBPACK_IMPORTED_MODULE_2__.Color( 0.5, 0.5, 0.5 );
        //create objects
        this.O = new _Components_Objects_js__WEBPACK_IMPORTED_MODULE_0__["default"]( );
        this.O.objects4( this.scene, sizes, A );
        //create camera
        this.C = new _Components_Camera_js__WEBPACK_IMPORTED_MODULE_1__["default"]( );
        this.C.createCamera2( sizes );
    }
    resize( sizes )
    {
        // Update camera
        this.C.resize( sizes );
        // Update uniforms
        this.O.resize2( sizes );
    }
    tick( deltaTime, elapsedTime, A )
    {
        // uniforms
        this.O.tick4( A, elapsedTime );
    }
};

/***/ }),

/***/ "./src/Scenes/scene5.js":
/*!******************************!*\
  !*** ./src/Scenes/scene5.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ scene5)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Components_Objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Objects.js */ "./src/Components/Objects.js");
/* harmony import */ var _Components_Camera_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Camera.js */ "./src/Components/Camera.js");
/* harmony import */ var _Components_Lights_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Lights.js */ "./src/Components/Lights.js");





class scene5
{
    constructor( sizes, A )
    {
        //member variables

        //create scene
        this.scene = new three__WEBPACK_IMPORTED_MODULE_3__.Scene( );
        this.scene.background = new three__WEBPACK_IMPORTED_MODULE_3__.Color( 0.5, 0.5, 0.5 );
        //create objects
        this.O = new _Components_Objects_js__WEBPACK_IMPORTED_MODULE_0__["default"]( );
        this.O.objects5( this.scene );
        //create camera
        this.C = new _Components_Camera_js__WEBPACK_IMPORTED_MODULE_1__["default"]( );
        this.C.createCamera3( sizes );
        //add lights
        this.L = new _Components_Lights_js__WEBPACK_IMPORTED_MODULE_2__["default"]( this.diameter );
        this.L.lights3( this.scene );
    }
    resize( sizes )
    {
        // Update camera
        this.C.resize( sizes );
    }
    tick( deltaTime, elapsedTime, A )
    {
        this.O.tick5( A, deltaTime );
    }
};

/***/ }),

/***/ "./src/Scenes/scene6.js":
/*!******************************!*\
  !*** ./src/Scenes/scene6.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ scene6)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Components_Objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Objects.js */ "./src/Components/Objects.js");
/* harmony import */ var _Components_Camera_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Camera.js */ "./src/Components/Camera.js");




class scene6
{
    constructor( sizes, A )
    {
        //create scene
        this.scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene( );
        this.scene.background = new three__WEBPACK_IMPORTED_MODULE_2__.Color( 0.5, 0.5, 0.5 );
        //create objects
        this.O = new _Components_Objects_js__WEBPACK_IMPORTED_MODULE_0__["default"]( );
        this.O.objects6( this.scene, sizes, A );
        //create camera
        this.C = new _Components_Camera_js__WEBPACK_IMPORTED_MODULE_1__["default"]( );
        this.C.createCamera2( sizes );
    }
    resize( sizes )
    {
        // Update camera
        this.C.resize( sizes );
        // Update uniforms
        this.O.resize2( sizes );
    }
    tick( deltaTime, elapsedTime, A )
    {
        // uniforms
        this.O.tick6( A, elapsedTime );
    }
};

/***/ }),

/***/ "./src/Scenes/titlescene.js":
/*!**********************************!*\
  !*** ./src/Scenes/titlescene.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ titlescene)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Components_Objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Objects.js */ "./src/Components/Objects.js");
/* harmony import */ var _Components_Camera_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Camera.js */ "./src/Components/Camera.js");




class titlescene
{
    constructor( sizes, A )
    {
        //create scene
        this.scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene( );
        this.scene.background = new three__WEBPACK_IMPORTED_MODULE_2__.Color( 0.8, 0.8, 0.8 );
        //create objects
        this.O = new _Components_Objects_js__WEBPACK_IMPORTED_MODULE_0__["default"]( );
        this.O.objectsT( this.scene, sizes, A );
        //create camera
        this.C = new _Components_Camera_js__WEBPACK_IMPORTED_MODULE_1__["default"]( );
        this.C.createCameraT( sizes );
    }
    resize( sizes )
    {
        // Update camera
        this.C.resize( sizes );
        // Update uniforms
        this.O.resizeT( sizes );
    }
    tick( deltaTime, elapsedTime, A )
    {
        // uniforms
        this.O.tickT( A, deltaTime, elapsedTime );
    }
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _skeleton_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skeleton.css */ "./src/skeleton.css");
/* harmony import */ var _normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./normalize.css */ "./src/normalize.css");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _assets_song1_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/song1.mp3 */ "./src/assets/song1.mp3");
/* harmony import */ var _assets_song2_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/song2.mp3 */ "./src/assets/song2.mp3");
/* harmony import */ var _assets_song3_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/song3.mp3 */ "./src/assets/song3.mp3");
/* harmony import */ var _assets_song4_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/song4.mp3 */ "./src/assets/song4.mp3");
/* harmony import */ var _assets_song5_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/song5.mp3 */ "./src/assets/song5.mp3");
/* harmony import */ var _assets_song6_mp3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/song6.mp3 */ "./src/assets/song6.mp3");
/* harmony import */ var _assets_song7_mp3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/song7.mp3 */ "./src/assets/song7.mp3");
/* harmony import */ var _assets_song8_mp3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/song8.mp3 */ "./src/assets/song8.mp3");
/* harmony import */ var _assets_song9_mp3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/song9.mp3 */ "./src/assets/song9.mp3");
/* harmony import */ var _assets_song10_mp3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/song10.mp3 */ "./src/assets/song10.mp3");
/* harmony import */ var _assets_icons_github_logo_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/icons/github-logo.svg */ "./src/assets/icons/github-logo.svg");
/* harmony import */ var _assets_icons_insta_logo_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/icons/insta-logo.svg */ "./src/assets/icons/insta-logo.svg");
/* harmony import */ var _assets_icons_soundcloud_backup_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/icons/soundcloud-backup.svg */ "./src/assets/icons/soundcloud-backup.svg");
/* harmony import */ var _assets_icons_linked_logo_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/icons/linked-logo.svg */ "./src/assets/icons/linked-logo.svg");
/* harmony import */ var _assets_icons_twitter_logo_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/icons/twitter-logo.svg */ "./src/assets/icons/twitter-logo.svg");
/* harmony import */ var _assets_icons_spotify_logo_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/icons/spotify-logo.svg */ "./src/assets/icons/spotify-logo.svg");
/* harmony import */ var _Components_Audio_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Components/Audio.js */ "./src/Components/Audio.js");
/* harmony import */ var _Components_Renderer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Components/Renderer.js */ "./src/Components/Renderer.js");
/* harmony import */ var _Scenes_scene1_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Scenes/scene1.js */ "./src/Scenes/scene1.js");
/* harmony import */ var _Scenes_scene2_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Scenes/scene2.js */ "./src/Scenes/scene2.js");
/* harmony import */ var _Scenes_scene3_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Scenes/scene3.js */ "./src/Scenes/scene3.js");
/* harmony import */ var _Scenes_scene4_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Scenes/scene4.js */ "./src/Scenes/scene4.js");
/* harmony import */ var _Scenes_scene5_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Scenes/scene5.js */ "./src/Scenes/scene5.js");
/* harmony import */ var _Scenes_scene6_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Scenes/scene6.js */ "./src/Scenes/scene6.js");
/* harmony import */ var _Scenes_titlescene_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Scenes/titlescene.js */ "./src/Scenes/titlescene.js");






















 









function createLink(url, txt, icon) {
    var link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    if (txt != null) link.innerText = txt;
    else {
      var icon = document.createElement('img');
      icon.src = icon;
      link.appendChild(icon);
    }
    return link
}

function component() {
    /*
     * Page Setup
     */
    const element = document.createElement( 'div' );

    var title_sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    var sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    //glsl background
    var canvas = document.createElement( 'canvas' );

    //sections
    var inst = document.createElement( 'div' );
    var me = document.createElement( 'div' );

    //ts - comment this out when ready
    var tsCanvas = document.createElement( 'canvas' );

    //me
    // links - me
    var links = document.createElement( 'div' );
    // Resume link
    var githubLink = createLink( 'https://drive.google.com/file/d/1Qh7QOlZFFLYxZgJqM85K4HkvnbGtgqqT/view?usp=sharing', 'Resume', null );
    links.appendChild(githubLink);
    // GitHub link
    var githubLink = createLink( 'https://github.com/succculent', null, _assets_icons_github_logo_svg__WEBPACK_IMPORTED_MODULE_14__["default"] );
    links.appendChild(githubLink);
    // LinkedIn
    var linkedInLink = createLink( 'https://www.linkedin.com/in/ada-toydemir/', null, _assets_icons_linked_logo_svg__WEBPACK_IMPORTED_MODULE_17__["default"]);
    links.appendChild(linkedInLink);
    // Instagram link
    var instagramLink = createLink( 'https://www.instagram.com/simulacrum_._/', null, _assets_icons_insta_logo_svg__WEBPACK_IMPORTED_MODULE_15__["default"]);
    links.appendChild(instagramLink);
    // Twitter link
    var twitterLink = createLink( 'https://twitter.com/__simulacrum', null, _assets_icons_twitter_logo_svg__WEBPACK_IMPORTED_MODULE_18__["default"] );
    links.appendChild(twitterLink);
    // SoundCloud link
    var soundcloudLink = createLink( 'https://soundcloud.com/music-simulacrum', null, _assets_icons_soundcloud_backup_svg__WEBPACK_IMPORTED_MODULE_16__["default"] );
    links.appendChild(soundcloudLink);
    // Spotify link
    var spotifyLink = createLink( 'https://open.spotify.com/user/1273607190?si=48a04ac4d7d047da', null, _assets_icons_spotify_logo_svg__WEBPACK_IMPORTED_MODULE_19__["default"] );
    links.appendChild(spotifyLink);
    // about - me
    var about = document.createElement( 'p' );
    about.innerText = "Ada Toydemir";

    //inst
    var desc1 = document.createElement( 'p' );
    desc1.innerText = 'use SPACE to play/pause music\n';
    var desc2 = document.createElement( 'p' );
    desc2.innerText = 'use UP and DOWN to cycle tracks\n';
    var desc3 = document.createElement( 'p' );
    desc3.innerText = 'use RIGHT and LEFT to cycle visuals\n';
    inst.appendChild(desc1);
    inst.appendChild(desc2);
    inst.appendChild(desc3);

    //classes
    canvas.classList.add( 'webgl' );
    canvas.classList.add( 'AV' );
    tsCanvas.classList.add( 'webgl' );
    tsCanvas.classList.add( 'tsCanvas' );
    inst.classList.add( 'box' );
    about.classList.add( 'box' );
    about.classList.add( 'hidden' );
    links.classList.add( 'links' );

    //append sections
    element.append( canvas );
    element.append( tsCanvas );
    element.append( inst );
    element.append( about );
    element.append( links );

    let A = new _Components_Audio_js__WEBPACK_IMPORTED_MODULE_20__["default"]( 2048 );
    let songs = [ _assets_song1_mp3__WEBPACK_IMPORTED_MODULE_4__["default"], _assets_song2_mp3__WEBPACK_IMPORTED_MODULE_5__["default"], _assets_song3_mp3__WEBPACK_IMPORTED_MODULE_6__["default"], _assets_song4_mp3__WEBPACK_IMPORTED_MODULE_7__["default"], _assets_song5_mp3__WEBPACK_IMPORTED_MODULE_8__["default"], _assets_song6_mp3__WEBPACK_IMPORTED_MODULE_9__["default"], _assets_song7_mp3__WEBPACK_IMPORTED_MODULE_10__["default"], _assets_song8_mp3__WEBPACK_IMPORTED_MODULE_11__["default"], _assets_song9_mp3__WEBPACK_IMPORTED_MODULE_12__["default"], _assets_song10_mp3__WEBPACK_IMPORTED_MODULE_13__["default"] ];
    let curSongIndex = 0;
    A.loadTrack( songs[curSongIndex] );
    element.appendChild( A.audio );

    let scen1 = new _Scenes_scene1_js__WEBPACK_IMPORTED_MODULE_22__["default"]( sizes, A );
    let scen2 = new _Scenes_scene2_js__WEBPACK_IMPORTED_MODULE_23__["default"]( sizes, A );
    let scen3 = new _Scenes_scene3_js__WEBPACK_IMPORTED_MODULE_24__["default"]( sizes, A );
    let scen6 = new _Scenes_scene6_js__WEBPACK_IMPORTED_MODULE_27__["default"]( sizes, A );
    let titc = new _Scenes_titlescene_js__WEBPACK_IMPORTED_MODULE_28__["default"]( title_sizes, A );
    let scenes = [ scen1, scen2, scen3, scen6 ];
    let curSceneIndex = 0;
    let curScene = scenes[ curSceneIndex ];

    let R = new _Components_Renderer_js__WEBPACK_IMPORTED_MODULE_21__["default"]( canvas, sizes );
    let R2 = new _Components_Renderer_js__WEBPACK_IMPORTED_MODULE_21__["default"]( tsCanvas, title_sizes );

    window.addEventListener( 'resize', ( ) =>
    {
        title_sizes.width = window.innerWidth;
        title_sizes.height = window.innerHeight;
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;
        curScene.resize( sizes );
        titc.resize( title_sizes );
    });

    window.addEventListener( "keydown", function ( event ) {
        if ( event.defaultPrevented ) {
          return; // Do nothing if the event was already processed
        }
        switch ( event.key ) {
          case "ArrowDown":
            if ( curSongIndex == 0 ) curSongIndex = songs.length - 1;
            else curSongIndex--;
            A.loadTrack( songs[curSongIndex] );
            if (!desc2.classList.contains('hidden')) desc2.classList.add('hidden');
            break;
          case "ArrowUp":
            curSongIndex = ( curSongIndex + 1 ) % songs.length;
            A.loadTrack( songs[curSongIndex] );
            if (!desc2.classList.contains('hidden')) desc2.classList.add('hidden');
            break;
          case "ArrowLeft":
            if ( curSceneIndex == 0 ) curSceneIndex = scenes.length - 1;
            else curSceneIndex--;
            curScene = scenes[ curSceneIndex ];
            if (!desc3.classList.contains('hidden')) desc3.classList.add('hidden');
            break;
          case "ArrowRight":
            curSceneIndex = ( curSceneIndex + 1 ) % scenes.length;
            curScene = scenes[ curSceneIndex ];
            if (!desc3.classList.contains('hidden')) desc3.classList.add('hidden');
            break;
          case " ":
            A.toggleAudio( );
            if (!desc1.classList.contains('hidden')) desc1.classList.add('hidden');
          default:
            return; // Quit when this doesn't handle the key event.
        }
        // Cancel the default action to avoid it being handled twice
        event.preventDefault();
    }, true);

    const clock = new three__WEBPACK_IMPORTED_MODULE_29__.Clock( );
    const tick = ( ) =>
    {   
        var deltaTime = clock.getDelta( );
        var elapsedTime = clock.getElapsedTime( );
        A.onTick( );
        R.render( curScene.scene, curScene.C.camera );
        R2.render( titc.scene, titc.C.camera );
        curScene.tick( deltaTime, elapsedTime, A );
        titc.tick( deltaTime, elapsedTime, A );

        if ( desc3.classList.contains('hidden') && desc2.classList.contains('hidden') && desc1.classList.contains('hidden') && about.classList.contains('hidden')) {
          about.classList.remove('hidden');
          about.classList.add('visible');
        }

        window.requestAnimationFrame( tick );
    };
    tick( );

    return element;
}

document.body.appendChild( component() );

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgraphics"] = self["webpackChunkgraphics"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-c51587"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYXBoaWNzLy4vc3JjL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vZ3JhcGhpY3MvLi9zcmMvc2tlbGV0b24uY3NzIiwid2VicGFjazovL2dyYXBoaWNzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ncmFwaGljcy8uL3NyYy9hc3NldHMvaWNvbnMvZ2l0aHViLWxvZ28uc3ZnIiwid2VicGFjazovL2dyYXBoaWNzLy4vc3JjL2Fzc2V0cy9pY29ucy9pbnN0YS1sb2dvLnN2ZyIsIndlYnBhY2s6Ly9ncmFwaGljcy8uL3NyYy9hc3NldHMvaWNvbnMvbGlua2VkLWxvZ28uc3ZnIiwid2VicGFjazovL2dyYXBoaWNzLy4vc3JjL2Fzc2V0cy9pY29ucy9zb3VuZGNsb3VkLWJhY2t1cC5zdmciLCJ3ZWJwYWNrOi8vZ3JhcGhpY3MvLi9zcmMvYXNzZXRzL2ljb25zL3Nwb3RpZnktbG9nby5zdmciLCJ3ZWJwYWNrOi8vZ3JhcGhpY3MvLi9zcmMvYXNzZXRzL2ljb25zL3R3aXR0ZXItbG9nby5zdmciLCJ3ZWJwYWNrOi8vZ3JhcGhpY3MvLi9zcmMvYXNzZXRzL3NvbmcxLm1wMyIsIndlYnBhY2s6Ly9ncmFwaGljcy8uL3NyYy9hc3NldHMvc29uZzEwLm1wMyIsIndlYnBhY2s6Ly9ncmFwaGljcy8uL3NyYy9hc3NldHMvc29uZzIubXAzIiwid2VicGFjazovL2dyYXBoaWNzLy4vc3JjL2Fzc2V0cy9zb25nMy5tcDMiLCJ3ZWJwYWNrOi8vZ3JhcGhpY3MvLi9zcmMvYXNzZXRzL3Nvbmc0Lm1wMyIsIndlYnBhY2s6Ly9ncmFwaGljcy8uL3NyYy9hc3NldHMvc29uZzUubXAzIiwid2VicGFjazovL2dyYXBoaWNzLy4vc3JjL2Fzc2V0cy9zb25nNi5tcDMiLCJ3ZWJwYWNrOi8vZ3JhcGhpY3MvLi9zcmMvYXNzZXRzL3Nvbmc3Lm1wMyIsIndlYnBhY2s6Ly9ncmFwaGljcy8uL3NyYy9hc3NldHMvc29uZzgubXAzIiwid2VicGFjazovL2dyYXBoaWNzLy4vc3JjL2Fzc2V0cy9zb25nOS5tcDMiLCJ3ZWJwYWNrOi8vZ3JhcGhpY3MvLi9zcmMvbm9ybWFsaXplLmNzcz82ODU2Iiwid2VicGFjazovL2dyYXBoaWNzLy4vc3JjL3NrZWxldG9uLmNzcz8zZWZjIiwid2VicGFjazovL2dyYXBoaWNzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2dyYXBoaWNzLy4vc3JjL3NoYWRlcnMvYmFja2dyb3VuZEZyYWcuZ2xzbCIsIndlYnBhY2s6Ly9ncmFwaGljcy8uL3NyYy9zaGFkZXJzL2JhY2tncm91bmRWZXJ0Lmdsc2wiLCJ3ZWJwYWNrOi8vZ3JhcGhpY3MvLi9zcmMvc2hhZGVycy9mcmFnbWVudENpcmxjZXMuZ2xzbCIsIndlYnBhY2s6Ly9ncmFwaGljcy8uL3NyYy9zaGFkZXJzL2ZyYWdtZW50RmFpcnkuZ2xzbCIsIndlYnBhY2s6Ly9ncmFwaGljcy8uL3NyYy9zaGFkZXJzL2ZyYWdtZW50Vm9yb25vaS5nbHNsIiwid2VicGFjazovL2dyYXBoaWNzLy4vc3JjL3NoYWRlcnMvdmVydGV4Q2lybGNlcy5nbHNsIiwid2VicGFjazovL2dyYXBoaWNzLy4vc3JjL3NoYWRlcnMvdmVydGV4RmFpcnkuZ2xzbCIsIndlYnBhY2s6Ly9ncmFwaGljcy8uL3NyYy9zaGFkZXJzL3ZlcnRleFZvcm9ub2kuZ2xzbCIsIndlYnBhY2s6Ly9ncmFwaGljcy8uL3NyYy9Db21wb25lbnRzL0F1ZGlvLmpzIiwid2VicGFjazovL2dyYXBoaWNzLy4vc3JjL0NvbXBvbmVudHMvQ2FtZXJhLmpzIiwid2VicGFjazovL2dyYXBoaWNzLy4vc3JjL0NvbXBvbmVudHMvTGlnaHRzLmpzIiwid2VicGFjazovL2dyYXBoaWNzLy4vc3JjL0NvbXBvbmVudHMvT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly9ncmFwaGljcy8uL3NyYy9Db21wb25lbnRzL1JlbmRlcmVyLmpzIiwid2VicGFjazovL2dyYXBoaWNzLy4vc3JjL1NjZW5lcy9zY2VuZTEuanMiLCJ3ZWJwYWNrOi8vZ3JhcGhpY3MvLi9zcmMvU2NlbmVzL3NjZW5lMi5qcyIsIndlYnBhY2s6Ly9ncmFwaGljcy8uL3NyYy9TY2VuZXMvc2NlbmUzLmpzIiwid2VicGFjazovL2dyYXBoaWNzLy4vc3JjL1NjZW5lcy9zY2VuZTQuanMiLCJ3ZWJwYWNrOi8vZ3JhcGhpY3MvLi9zcmMvU2NlbmVzL3NjZW5lNS5qcyIsIndlYnBhY2s6Ly9ncmFwaGljcy8uL3NyYy9TY2VuZXMvc2NlbmU2LmpzIiwid2VicGFjazovL2dyYXBoaWNzLy4vc3JjL1NjZW5lcy90aXRsZXNjZW5lLmpzIiwid2VicGFjazovL2dyYXBoaWNzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2dyYXBoaWNzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dyYXBoaWNzL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vZ3JhcGhpY3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ3JhcGhpY3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dyYXBoaWNzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZ3JhcGhpY3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ncmFwaGljcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dyYXBoaWNzL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vZ3JhcGhpY3Mvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZ3JhcGhpY3Mvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZ3JhcGhpY3Mvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9ncmFwaGljcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZ3JhcGhpY3Mvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjMuMC4yIHwgTUlUIExpY2Vuc2UgfCBnaXQuaW8vbm9ybWFsaXplICovXFxuXFxuLyoqXFxuICogMS4gU2V0IGRlZmF1bHQgZm9udCBmYW1pbHkgdG8gc2Fucy1zZXJpZi5cXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcXG4gKiAgICB1c2VyIHpvb20uXFxuICovXFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgLyogMSAqL1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4uXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXkgZGVmaW5pdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBhbnkgSFRNTDUgZWxlbWVudCBpbiBJRSA4LzkuXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBkZXRhaWxzYCBvciBgc3VtbWFyeWAgaW4gSUUgMTAvMTFcXG4gKiBhbmQgRmlyZWZveC5cXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYG1haW5gIGluIElFIDExLlxcbiAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tYWluLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDgvOS5cXG4gKiAyLiBOb3JtYWxpemUgdmVydGljYWwgYWxpZ25tZW50IG9mIGBwcm9ncmVzc2AgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxuYXVkaW8sXFxuY2FudmFzLFxcbnByb2dyZXNzLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXFxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cXG4gKi9cXG5cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgW2hpZGRlbl1gIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLlxcbiAqIEhpZGUgdGhlIGB0ZW1wbGF0ZWAgZWxlbWVudCBpbiBJRSA4LzkvMTEsIFNhZmFyaSwgYW5kIEZpcmVmb3ggPCAyMi5cXG4gKi9cXG5cXG5baGlkZGVuXSxcXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBMaW5rc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogSW1wcm92ZSByZWFkYWJpbGl0eSB3aGVuIGZvY3VzZWQgYW5kIGFsc28gbW91c2UgaG92ZXJlZCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYTphY3RpdmUsXFxuYTpob3ZlciB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS8xMC8xMSwgU2FmYXJpLCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGUgc2V0IHRvIGBib2xkZXJgIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIFNhZmFyaSBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmRmbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgdmFyaWFibGUgYGgxYCBmb250LXNpemUgYW5kIG1hcmdpbiB3aXRoaW4gYHNlY3Rpb25gIGFuZCBgYXJ0aWNsZWBcXG4gKiBjb250ZXh0cyBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LlxcbiAqL1xcblxcbm1hcmsge1xcbiAgYmFja2dyb3VuZDogI2ZmMDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBhbmQgdmFyaWFibGUgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgYWZmZWN0aW5nIGBsaW5lLWhlaWdodGAgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDgvOS8xMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IG92ZXJmbG93IG5vdCBoaWRkZW4gaW4gSUUgOS8xMC8xMS5cXG4gKi9cXG5cXG5zdmc6bm90KDpyb290KSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA4LzkgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAxZW0gNDBweDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBkaWZmZXJlbmNlcyBiZXR3ZWVuIEZpcmVmb3ggYW5kIG90aGVyIGJyb3dzZXJzLlxcbiAqL1xcblxcbmhyIHtcXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQ29udGFpbiBvdmVyZmxvdyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIG9kZCBgZW1gLXVuaXQgZm9udCBzaXplIHJlbmRlcmluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxucHJlLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBLbm93biBsaW1pdGF0aW9uOiBieSBkZWZhdWx0LCBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYIGFsbG93IHZlcnkgbGltaXRlZFxcbiAqIHN0eWxpbmcgb2YgYHNlbGVjdGAsIHVubGVzcyBhIGBib3JkZXJgIHByb3BlcnR5IGlzIHNldC5cXG4gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQuXFxuICogICAgS25vd24gaXNzdWU6IGFmZmVjdHMgY29sb3Igb2YgZGlzYWJsZWQgZWxlbWVudHMuXFxuICogMi4gQ29ycmVjdCBmb250IHByb3BlcnRpZXMgbm90IGJlaW5nIGluaGVyaXRlZC5cXG4gKiAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxuICBtYXJnaW46IDA7IC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgb3ZlcmZsb3dgIHNldCB0byBgaGlkZGVuYCBpbiBJRSA4LzkvMTAvMTEuXFxuICovXFxuXFxuYnV0dG9uIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3gsIElFIDgvOS8xMC8xMSwgYW5kIE9wZXJhLlxcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cXG4gKi9cXG5cXG5idXR0b24sXFxuaHRtbCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSwgLyogMSAqL1xcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDIgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqL1xcblxcbmJ1dHRvbltkaXNhYmxlZF0sXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggNCsuXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgRmlyZWZveCA0KyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cXG4gKi9cXG5cXG5pbnB1dCB7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKipcXG4gKiBJdCdzIHJlY29tbWVuZGVkIHRoYXQgeW91IGRvbid0IGF0dGVtcHQgdG8gc3R5bGUgdGhlc2UgZWxlbWVudHMuXFxuICogRmlyZWZveCdzIGltcGxlbWVudGF0aW9uIGRvZXNuJ3QgcmVzcGVjdCBib3gtc2l6aW5nLCBwYWRkaW5nLCBvciB3aWR0aC5cXG4gKlxcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YCBpbiBJRSA4LzkvMTAuXFxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBGaXggdGhlIGN1cnNvciBzdHlsZSBmb3IgQ2hyb21lJ3MgaW5jcmVtZW50L2RlY3JlbWVudCBidXR0b25zLiBGb3IgY2VydGFpblxcbiAqIGBmb250LXNpemVgIHZhbHVlcyBvZiB0aGUgYGlucHV0YCwgaXQgY2F1c2VzIHRoZSBjdXJzb3Igc3R5bGUgb2YgdGhlXFxuICogZGVjcmVtZW50IGJ1dHRvbiB0byBjaGFuZ2UgZnJvbSBgZGVmYXVsdGAgdG8gYHRleHRgLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXFxuICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgYW5kIENocm9tZVxcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMiAqL1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgYW5kIENocm9tZSBvbiBPUyBYLlxcbiAqIFNhZmFyaSAoYnV0IG5vdCBDaHJvbWUpIGNsaXBzIHRoZSBjYW5jZWwgYnV0dG9uIHdoZW4gdGhlIHNlYXJjaCBpbnB1dCBoYXNcXG4gKiBwYWRkaW5nIChhbmQgYHRleHRmaWVsZGAgYXBwZWFyYW5jZSkuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXG4gIG1hcmdpbjogMCAycHg7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgYGNvbG9yYCBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDgvOS8xMC8xMS5cXG4gKiAyLiBSZW1vdmUgcGFkZGluZyBzbyBwZW9wbGUgYXJlbid0IGNhdWdodCBvdXQgaWYgdGhleSB6ZXJvIG91dCBmaWVsZHNldHMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJvcmRlcjogMDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgOC85LzEwLzExLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBEb24ndCBpbmhlcml0IHRoZSBgZm9udC13ZWlnaHRgIChhcHBsaWVkIGJ5IGEgcnVsZSBhYm92ZSkuXFxuICogTk9URTogdGhlIGRlZmF1bHQgY2Fubm90IHNhZmVseSBiZSBjaGFuZ2VkIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFguXFxuICovXFxuXFxub3B0Z3JvdXAge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIFRhYmxlc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcbiAqL1xcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxudGQsXFxudGgge1xcbiAgcGFkZGluZzogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkRBQTJEOztBQUUzRDs7OztFQUlFOztBQUVGO0VBQ0UsdUJBQXVCLEVBQUUsTUFBTTtFQUMvQiwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLDhCQUE4QixFQUFFLE1BQU07QUFDeEM7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7K0VBQytFOztBQUUvRTs7Ozs7RUFLRTs7QUFFRjs7Ozs7Ozs7Ozs7OztFQWFFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGOzs7O0VBSUUscUJBQXFCLEVBQUUsTUFBTTtFQUM3Qix3QkFBd0IsRUFBRSxNQUFNO0FBQ2xDOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7OztFQUdFOztBQUVGOztFQUVFLGFBQWE7QUFDZjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOztFQUVFOztBQUVGOztFQUVFLFVBQVU7QUFDWjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsU0FBUztBQUNYOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSxpQ0FBaUM7RUFDakMsY0FBYztBQUNoQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjs7Ozs7RUFLRTs7QUFFRjs7Ozs7RUFLRSxjQUFjLEVBQUUsTUFBTTtFQUN0QixhQUFhLEVBQUUsTUFBTTtFQUNyQixTQUFTLEVBQUUsTUFBTTtBQUNuQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7Ozs7RUFLRTs7QUFFRjs7RUFFRSxvQkFBb0I7QUFDdEI7O0FBRUE7Ozs7OztFQU1FOztBQUVGOzs7O0VBSUUsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxlQUFlLEVBQUUsTUFBTTtBQUN6Qjs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOzs7Ozs7RUFNRTs7QUFFRjs7RUFFRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ3BCOztBQUVBOzs7O0VBSUU7O0FBRUY7O0VBRUUsWUFBWTtBQUNkOztBQUVBOzs7O0VBSUU7O0FBRUY7RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLDRCQUE0QjtFQUM1QiwrQkFBK0IsRUFBRSxNQUFNO0VBQ3ZDLHVCQUF1QjtBQUN6Qjs7QUFFQTs7OztFQUlFOztBQUVGOztFQUVFLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLFVBQVUsRUFBRSxNQUFNO0FBQ3BCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHYzLjAuMiB8IE1JVCBMaWNlbnNlIHwgZ2l0LmlvL25vcm1hbGl6ZSAqL1xcblxcbi8qKlxcbiAqIDEuIFNldCBkZWZhdWx0IGZvbnQgZmFtaWx5IHRvIHNhbnMtc2VyaWYuXFxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXFxuICogICAgdXNlciB6b29tLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IC8qIDEgKi9cXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5IGRlZmluaXRpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYW55IEhUTUw1IGVsZW1lbnQgaW4gSUUgOC85LlxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBgZGV0YWlsc2Agb3IgYHN1bW1hcnlgIGluIElFIDEwLzExXFxuICogYW5kIEZpcmVmb3guXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBtYWluYCBpbiBJRSAxMS5cXG4gKi9cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWFpbixcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uLFxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA4LzkuXFxuICogMi4gTm9ybWFsaXplIHZlcnRpY2FsIGFsaWdubWVudCBvZiBgcHJvZ3Jlc3NgIGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbmF1ZGlvLFxcbmNhbnZhcyxcXG5wcm9ncmVzcyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxcbiAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXFxuICovXFxuXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgYFtoaWRkZW5dYCBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS8xMC5cXG4gKiBIaWRlIHRoZSBgdGVtcGxhdGVgIGVsZW1lbnQgaW4gSUUgOC85LzExLCBTYWZhcmksIGFuZCBGaXJlZm94IDwgMjIuXFxuICovXFxuXFxuW2hpZGRlbl0sXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogTGlua3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIGZyb20gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmE6YWN0aXZlLFxcbmE6aG92ZXIge1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAvMTEsIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxlIHNldCB0byBgYm9sZGVyYCBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBTYWZhcmkgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5kZm4ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHZhcmlhYmxlIGBoMWAgZm9udC1zaXplIGFuZCBtYXJnaW4gd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgXFxuICogY29udGV4dHMgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cXG4gKi9cXG5cXG5tYXJrIHtcXG4gIGJhY2tncm91bmQ6ICNmZjA7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYW5kIHZhcmlhYmxlIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGFmZmVjdGluZyBgbGluZS1oZWlnaHRgIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA4LzkvMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCBvdmVyZmxvdyBub3QgaGlkZGVuIGluIElFIDkvMTAvMTEuXFxuICovXFxuXFxuc3ZnOm5vdCg6cm9vdCkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgOC85IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMWVtIDQwcHg7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgZGlmZmVyZW5jZXMgYmV0d2VlbiBGaXJlZm94IGFuZCBvdGhlciBicm93c2Vycy5cXG4gKi9cXG5cXG5ociB7XFxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIENvbnRhaW4gb3ZlcmZsb3cgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBvZGQgYGVtYC11bml0IGZvbnQgc2l6ZSByZW5kZXJpbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnByZSxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogS25vd24gbGltaXRhdGlvbjogYnkgZGVmYXVsdCwgQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWCBhbGxvdyB2ZXJ5IGxpbWl0ZWRcXG4gKiBzdHlsaW5nIG9mIGBzZWxlY3RgLCB1bmxlc3MgYSBgYm9yZGVyYCBwcm9wZXJ0eSBpcyBzZXQuXFxuICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkLlxcbiAqICAgIEtub3duIGlzc3VlOiBhZmZlY3RzIGNvbG9yIG9mIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqIDIuIENvcnJlY3QgZm9udCBwcm9wZXJ0aWVzIG5vdCBiZWluZyBpbmhlcml0ZWQuXFxuICogMy4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbiAgbWFyZ2luOiAwOyAvKiAzICovXFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgYG92ZXJmbG93YCBzZXQgdG8gYGhpZGRlbmAgaW4gSUUgOC85LzEwLzExLlxcbiAqL1xcblxcbmJ1dHRvbiB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxcbiAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgYHRleHQtdHJhbnNmb3JtYCB2YWx1ZXMuXFxuICogQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94LCBJRSA4LzkvMTAvMTEsIGFuZCBPcGVyYS5cXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2BcXG4gKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cXG4gKiAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXFxuICogMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcXG4gKiAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXFxuICovXFxuXFxuYnV0dG9uLFxcbmh0bWwgaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0sIC8qIDEgKi9cXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cXG4gKi9cXG5cXG5idXR0b25bZGlzYWJsZWRdLFxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDQrLlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIEZpcmVmb3ggNCsgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXFxuICogdGhlIFVBIHN0eWxlc2hlZXQuXFxuICovXFxuXFxuaW5wdXQge1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLyoqXFxuICogSXQncyByZWNvbW1lbmRlZCB0aGF0IHlvdSBkb24ndCBhdHRlbXB0IHRvIHN0eWxlIHRoZXNlIGVsZW1lbnRzLlxcbiAqIEZpcmVmb3gncyBpbXBsZW1lbnRhdGlvbiBkb2Vzbid0IHJlc3BlY3QgYm94LXNpemluZywgcGFkZGluZywgb3Igd2lkdGguXFxuICpcXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAgaW4gSUUgOC85LzEwLlxcbiAqIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkvMTAuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogRml4IHRoZSBjdXJzb3Igc3R5bGUgZm9yIENocm9tZSdzIGluY3JlbWVudC9kZWNyZW1lbnQgYnV0dG9ucy4gRm9yIGNlcnRhaW5cXG4gKiBgZm9udC1zaXplYCB2YWx1ZXMgb2YgdGhlIGBpbnB1dGAsIGl0IGNhdXNlcyB0aGUgY3Vyc29yIHN0eWxlIG9mIHRoZVxcbiAqIGRlY3JlbWVudCBidXR0b24gdG8gY2hhbmdlIGZyb20gYGRlZmF1bHRgIHRvIGB0ZXh0YC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZHJlc3MgYGFwcGVhcmFuY2VgIHNldCB0byBgc2VhcmNoZmllbGRgIGluIFNhZmFyaSBhbmQgQ2hyb21lLlxcbiAqIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIGFuZCBDaHJvbWVcXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDIgKi9cXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIGFuZCBDaHJvbWUgb24gT1MgWC5cXG4gKiBTYWZhcmkgKGJ1dCBub3QgQ2hyb21lKSBjbGlwcyB0aGUgY2FuY2VsIGJ1dHRvbiB3aGVuIHRoZSBzZWFyY2ggaW5wdXQgaGFzXFxuICogcGFkZGluZyAoYW5kIGB0ZXh0ZmllbGRgIGFwcGVhcmFuY2UpLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XFxuICBtYXJnaW46IDAgMnB4O1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGBjb2xvcmAgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA4LzkvMTAvMTEuXFxuICogMi4gUmVtb3ZlIHBhZGRpbmcgc28gcGVvcGxlIGFyZW4ndCBjYXVnaHQgb3V0IGlmIHRoZXkgemVybyBvdXQgZmllbGRzZXRzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3JkZXI6IDA7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDgvOS8xMC8xMS5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogRG9uJ3QgaW5oZXJpdCB0aGUgYGZvbnQtd2VpZ2h0YCAoYXBwbGllZCBieSBhIHJ1bGUgYWJvdmUpLlxcbiAqIE5PVEU6IHRoZSBkZWZhdWx0IGNhbm5vdCBzYWZlbHkgYmUgY2hhbmdlZCBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYLlxcbiAqL1xcblxcbm9wdGdyb3VwIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBUYWJsZXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cXG4gKi9cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbnRkLFxcbnRoIHtcXG4gIHBhZGRpbmc6IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuKiBTa2VsZXRvbiBWMi4wLjRcXG4qIENvcHlyaWdodCAyMDE0LCBEYXZlIEdhbWFjaGVcXG4qIHd3dy5nZXRza2VsZXRvbi5jb21cXG4qIEZyZWUgdG8gdXNlIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cXG4qIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXFxuKiAxMi8yOS8yMDE0XFxuKi9cXG5cXG5cXG4vKiBUYWJsZSBvZiBjb250ZW50c1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xcbi0gR3JpZFxcbi0gQmFzZSBTdHlsZXNcXG4tIFR5cG9ncmFwaHlcXG4tIExpbmtzXFxuLSBCdXR0b25zXFxuLSBGb3Jtc1xcbi0gTGlzdHNcXG4tIENvZGVcXG4tIFRhYmxlc1xcbi0gU3BhY2luZ1xcbi0gVXRpbGl0aWVzXFxuLSBDbGVhcmluZ1xcbi0gTWVkaWEgUXVlcmllc1xcbiovXFxuXFxuXFxuLyogR3JpZFxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDk2MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuLmNvbHVtbixcXG4uY29sdW1ucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi8qIEZvciBkZXZpY2VzIGxhcmdlciB0aGFuIDQwMHB4ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgcGFkZGluZzogMDsgfVxcbn1cXG5cXG4vKiBGb3IgZGV2aWNlcyBsYXJnZXIgdGhhbiA1NTBweCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA4MCU7IH1cXG4gIC5jb2x1bW4sXFxuICAuY29sdW1ucyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0JTsgfVxcbiAgLmNvbHVtbjpmaXJzdC1jaGlsZCxcXG4gIC5jb2x1bW5zOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4gIC5vbmUuY29sdW1uLFxcbiAgLm9uZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA0LjY2NjY2NjY2NjY3JTsgfVxcbiAgLnR3by5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAxMy4zMzMzMzMzMzMzJTsgfVxcbiAgLnRocmVlLmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAyMiU7ICAgICAgICAgICAgfVxcbiAgLmZvdXIuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAzMC42NjY2NjY2NjY3JTsgfVxcbiAgLmZpdmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAzOS4zMzMzMzMzMzMzJTsgfVxcbiAgLnNpeC5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA0OCU7ICAgICAgICAgICAgfVxcbiAgLnNldmVuLmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA1Ni42NjY2NjY2NjY3JTsgfVxcbiAgLmVpZ2h0LmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA2NS4zMzMzMzMzMzMzJTsgfVxcbiAgLm5pbmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA3NC4wJTsgICAgICAgICAgfVxcbiAgLnRlbi5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA4Mi42NjY2NjY2NjY3JTsgfVxcbiAgLmVsZXZlbi5jb2x1bW5zICAgICAgICAgICAgICAgICB7IHdpZHRoOiA5MS4zMzMzMzMzMzMzJTsgfVxcbiAgLnR3ZWx2ZS5jb2x1bW5zICAgICAgICAgICAgICAgICB7IHdpZHRoOiAxMDAlOyBtYXJnaW4tbGVmdDogMDsgfVxcblxcbiAgLm9uZS10aGlyZC5jb2x1bW4gICAgICAgICAgICAgICB7IHdpZHRoOiAzMC42NjY2NjY2NjY3JTsgfVxcbiAgLnR3by10aGlyZHMuY29sdW1uICAgICAgICAgICAgICB7IHdpZHRoOiA2NS4zMzMzMzMzMzMzJTsgfVxcblxcbiAgLm9uZS1oYWxmLmNvbHVtbiAgICAgICAgICAgICAgICB7IHdpZHRoOiA0OCU7IH1cXG5cXG4gIC8qIE9mZnNldHMgKi9cXG4gIC5vZmZzZXQtYnktb25lLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktb25lLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogOC42NjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktdHdvLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdHdvLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogMTcuMzMzMzMzMzMzMyU7IH1cXG4gIC5vZmZzZXQtYnktdGhyZWUuY29sdW1uLFxcbiAgLm9mZnNldC1ieS10aHJlZS5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiAyNiU7ICAgICAgICAgICAgfVxcbiAgLm9mZnNldC1ieS1mb3VyLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZm91ci5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktZml2ZS5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LWZpdmUuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDQzLjMzMzMzMzMzMzMlOyB9XFxuICAub2Zmc2V0LWJ5LXNpeC5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXNpeC5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDUyJTsgICAgICAgICAgICB9XFxuICAub2Zmc2V0LWJ5LXNldmVuLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktc2V2ZW4uY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogNjAuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktZWlnaHQuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1laWdodC5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTsgfVxcbiAgLm9mZnNldC1ieS1uaW5lLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktbmluZS5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogNzguMCU7ICAgICAgICAgIH1cXG4gIC5vZmZzZXQtYnktdGVuLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdGVuLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogODYuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktZWxldmVuLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZWxldmVuLmNvbHVtbnMgICAgICAgeyBtYXJnaW4tbGVmdDogOTUuMzMzMzMzMzMzMyU7IH1cXG5cXG4gIC5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbnMgICAgeyBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXR3by10aGlyZHMuY29sdW1ucyAgIHsgbWFyZ2luLWxlZnQ6IDY5LjMzMzMzMzMzMzMlOyB9XFxuXFxuICAub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktb25lLWhhbGYuY29sdW1ucyAgICAgeyBtYXJnaW4tbGVmdDogNTIlOyB9XFxuXFxufVxcblxcblxcbi8qIEJhc2UgU3R5bGVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLyogTk9URVxcbmh0bWwgaXMgc2V0IHRvIDYyLjUlIHNvIHRoYXQgYWxsIHRoZSBSRU0gbWVhc3VyZW1lbnRzIHRocm91Z2hvdXQgU2tlbGV0b25cXG5hcmUgYmFzZWQgb24gMTBweCBzaXppbmcuIFNvIGJhc2ljYWxseSAxLjVyZW0gPSAxNXB4IDopICovXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlOyB9XFxuYm9keSB7XFxuICBmb250LXNpemU6IDEuNWVtOyAvKiBjdXJyZW50bHkgZW1zIGNhdXNlIGNocm9tZSBidWcgbWlzaW50ZXJwcmV0aW5nIHJlbXMgb24gYm9keSBlbGVtZW50ICovXFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIFxcXCJIZWx2ZXRpY2FOZXVlXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMjIyOyB9XFxuXFxuXFxuLyogVHlwb2dyYXBoeVxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBmb250LXdlaWdodDogMzAwOyB9XFxuaDEgeyBmb250LXNpemU6IDQuMHJlbTsgbGluZS1oZWlnaHQ6IDEuMjsgIGxldHRlci1zcGFjaW5nOiAtLjFyZW07fVxcbmgyIHsgZm9udC1zaXplOiAzLjZyZW07IGxpbmUtaGVpZ2h0OiAxLjI1OyBsZXR0ZXItc3BhY2luZzogLS4xcmVtOyB9XFxuaDMgeyBmb250LXNpemU6IDMuMHJlbTsgbGluZS1oZWlnaHQ6IDEuMzsgIGxldHRlci1zcGFjaW5nOiAtLjFyZW07IH1cXG5oNCB7IGZvbnQtc2l6ZTogMi40cmVtOyBsaW5lLWhlaWdodDogMS4zNTsgbGV0dGVyLXNwYWNpbmc6IC0uMDhyZW07IH1cXG5oNSB7IGZvbnQtc2l6ZTogMS44cmVtOyBsaW5lLWhlaWdodDogMS41OyAgbGV0dGVyLXNwYWNpbmc6IC0uMDVyZW07IH1cXG5oNiB7IGZvbnQtc2l6ZTogMS41cmVtOyBsaW5lLWhlaWdodDogMS42OyAgbGV0dGVyLXNwYWNpbmc6IDA7IH1cXG5cXG4vKiBMYXJnZXIgdGhhbiBwaGFibGV0ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XFxuICBoMSB7IGZvbnQtc2l6ZTogNS4wcmVtOyB9XFxuICBoMiB7IGZvbnQtc2l6ZTogNC4ycmVtOyB9XFxuICBoMyB7IGZvbnQtc2l6ZTogMy42cmVtOyB9XFxuICBoNCB7IGZvbnQtc2l6ZTogMy4wcmVtOyB9XFxuICBoNSB7IGZvbnQtc2l6ZTogMi40cmVtOyB9XFxuICBoNiB7IGZvbnQtc2l6ZTogMS41cmVtOyB9XFxufVxcblxcbnAge1xcbiAgbWFyZ2luLXRvcDogMDsgfVxcblxcblxcbi8qIExpbmtzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuYSB7XFxuICBjb2xvcjogIzFFQUVEQjsgfVxcbmE6aG92ZXIge1xcbiAgY29sb3I6ICMwRkEwQ0U7IH1cXG5cXG5cXG4vKiBCdXR0b25zXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLmJ1dHRvbixcXG5idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDM4cHg7XFxuICBwYWRkaW5nOiAwIDMwcHg7XFxuICBjb2xvcjogIzU1NTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogMzhweDtcXG4gIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbi5idXR0b246aG92ZXIsXFxuYnV0dG9uOmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl06aG92ZXIsXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl06aG92ZXIsXFxuLmJ1dHRvbjpmb2N1cyxcXG5idXR0b246Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTpmb2N1cyB7XFxuICBjb2xvcjogIzMzMztcXG4gIGJvcmRlci1jb2xvcjogIzg4ODtcXG4gIG91dGxpbmU6IDA7IH1cXG4uYnV0dG9uLmJ1dHRvbi1wcmltYXJ5LFxcbmJ1dHRvbi5idXR0b24tcHJpbWFyeSxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXS5idXR0b24tcHJpbWFyeSxcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLmJ1dHRvbi1wcmltYXJ5LFxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLmJ1dHRvbi1wcmltYXJ5IHtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzQzNGMDtcXG4gIGJvcmRlci1jb2xvcjogIzMzQzNGMDsgfVxcbi5idXR0b24uYnV0dG9uLXByaW1hcnk6aG92ZXIsXFxuYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0uYnV0dG9uLXByaW1hcnk6aG92ZXIsXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0uYnV0dG9uLXByaW1hcnk6aG92ZXIsXFxuLmJ1dHRvbi5idXR0b24tcHJpbWFyeTpmb2N1cyxcXG5idXR0b24uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXS5idXR0b24tcHJpbWFyeTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXS5idXR0b24tcHJpbWFyeTpmb2N1cyB7XFxuICBjb2xvcjogI0ZGRjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxRUFFREI7XFxuICBib3JkZXItY29sb3I6ICMxRUFFREI7IH1cXG5cXG5cXG4vKiBGb3Jtc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInRlbFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInVybFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl0sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGhlaWdodDogMzhweDtcXG4gIHBhZGRpbmc6IDZweCAxMHB4OyAvKiBUaGUgNnB4IHZlcnRpY2FsbHkgY2VudGVycyB0ZXh0IG9uIEZGLCBpZ25vcmVkIGJ5IFdlYmtpdCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEMUQxRDE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbi8qIFJlbW92ZXMgYXdrd2FyZCBkZWZhdWx0IHN0eWxlcyBvbiBzb21lIGlucHV0cyBmb3IgaU9TICovXFxuaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidGVsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidXJsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXSxcXG50ZXh0YXJlYSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7IH1cXG50ZXh0YXJlYSB7XFxuICBtaW4taGVpZ2h0OiA2NXB4O1xcbiAgcGFkZGluZy10b3A6IDZweDtcXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7IH1cXG5pbnB1dFt0eXBlPVxcXCJlbWFpbFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJ0ZWxcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJ1cmxcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdOmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbnNlbGVjdDpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzNDM0YwO1xcbiAgb3V0bGluZTogMDsgfVxcbmxhYmVsLFxcbmxlZ2VuZCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDsgfVxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXItd2lkdGg6IDA7IH1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgZGlzcGxheTogaW5saW5lOyB9XFxubGFiZWwgPiAubGFiZWwtYm9keSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogLjVyZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsOyB9XFxuXFxuXFxuLyogTGlzdHNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBjaXJjbGUgaW5zaWRlOyB9XFxub2wge1xcbiAgbGlzdC1zdHlsZTogZGVjaW1hbCBpbnNpZGU7IH1cXG5vbCwgdWwge1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgbWFyZ2luLXRvcDogMDsgfVxcbnVsIHVsLFxcbnVsIG9sLFxcbm9sIG9sLFxcbm9sIHVsIHtcXG4gIG1hcmdpbjogMS41cmVtIDAgMS41cmVtIDNyZW07XFxuICBmb250LXNpemU6IDkwJTsgfVxcbmxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXG5cXG5cXG4vKiBDb2RlXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuY29kZSB7XFxuICBwYWRkaW5nOiAuMnJlbSAuNXJlbTtcXG4gIG1hcmdpbjogMCAuMnJlbTtcXG4gIGZvbnQtc2l6ZTogOTAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJhY2tncm91bmQ6ICNGMUYxRjE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRTFFMUUxO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4OyB9XFxucHJlID4gY29kZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgd2hpdGUtc3BhY2U6IHByZTsgfVxcblxcblxcbi8qIFRhYmxlc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbnRoLFxcbnRkIHtcXG4gIHBhZGRpbmc6IDEycHggMTVweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UxRTFFMTsgfVxcbnRoOmZpcnN0LWNoaWxkLFxcbnRkOmZpcnN0LWNoaWxkIHtcXG4gIHBhZGRpbmctbGVmdDogMDsgfVxcbnRoOmxhc3QtY2hpbGQsXFxudGQ6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwOyB9XFxuXFxuXFxuLyogU3BhY2luZ1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmJ1dHRvbixcXG4uYnV0dG9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5zZWxlY3QsXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtOyB9XFxucHJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZmlndXJlLFxcbnRhYmxlLFxcbnAsXFxudWwsXFxub2wsXFxuZm9ybSB7XFxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07IH1cXG5cXG5cXG4vKiBVdGlsaXRpZXNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG4udS1mdWxsLXdpZHRoIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbi51LW1heC1mdWxsLXdpZHRoIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4udS1wdWxsLXJpZ2h0IHtcXG4gIGZsb2F0OiByaWdodDsgfVxcbi51LXB1bGwtbGVmdCB7XFxuICBmbG9hdDogbGVmdDsgfVxcblxcblxcbi8qIE1pc2NcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5ociB7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMy41cmVtO1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFMUUxRTE7IH1cXG5cXG5cXG4vKiBDbGVhcmluZ1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcblxcbi8qIFNlbGYgQ2xlYXJpbmcgR29vZG5lc3MgKi9cXG4uY29udGFpbmVyOmFmdGVyLFxcbi5yb3c6YWZ0ZXIsXFxuLnUtY2Yge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGNsZWFyOiBib3RoOyB9XFxuXFxuXFxuLyogTWVkaWEgUXVlcmllc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi8qXFxuTm90ZTogVGhlIGJlc3Qgd2F5IHRvIHN0cnVjdHVyZSB0aGUgdXNlIG9mIG1lZGlhIHF1ZXJpZXMgaXMgdG8gY3JlYXRlIHRoZSBxdWVyaWVzXFxubmVhciB0aGUgcmVsZXZhbnQgY29kZS4gRm9yIGV4YW1wbGUsIGlmIHlvdSB3YW50ZWQgdG8gY2hhbmdlIHRoZSBzdHlsZXMgZm9yIGJ1dHRvbnNcXG5vbiBzbWFsbCBkZXZpY2VzLCBwYXN0ZSB0aGUgbW9iaWxlIHF1ZXJ5IGNvZGUgdXAgaW4gdGhlIGJ1dHRvbnMgc2VjdGlvbiBhbmQgc3R5bGUgaXRcXG50aGVyZS5cXG4qL1xcblxcblxcbi8qIExhcmdlciB0aGFuIG1vYmlsZSAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge31cXG5cXG4vKiBMYXJnZXIgdGhhbiBwaGFibGV0IChhbHNvIHBvaW50IHdoZW4gZ3JpZCBiZWNvbWVzIGFjdGl2ZSkgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHt9XFxuXFxuLyogTGFyZ2VyIHRoYW4gdGFibGV0ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDc1MHB4KSB7fVxcblxcbi8qIExhcmdlciB0aGFuIGRlc2t0b3AgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7fVxcblxcbi8qIExhcmdlciB0aGFuIERlc2t0b3AgSEQgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7fVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9za2VsZXRvbi5jc3NcIl0s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Y2VzQ29udGVudFwiOltcIi8qXFxuKiBTa2VsZXRvbiBWMi4wLjRcXG4qIENvcHlyaWdodCAyMDE0LCBEYXZlIEdhbWFjaGVcXG4qIHd3dy5nZXRza2VsZXRvbi5jb21cXG4qIEZyZWUgdG8gdXNlIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cXG4qIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXFxuKiAxMi8yOS8yMDE0XFxuKi9cXG5cXG5cXG4vKiBUYWJsZSBvZiBjb250ZW50c1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xcbi0gR3JpZFxcbi0gQmFzZSBTdHlsZXNcXG4tIFR5cG9ncmFwaHlcXG4tIExpbmtzXFxuLSBCdXR0b25zXFxuLSBGb3Jtc1xcbi0gTGlzdHNcXG4tIENvZGVcXG4tIFRhYmxlc1xcbi0gU3BhY2luZ1xcbi0gVXRpbGl0aWVzXFxuLSBDbGVhcmluZ1xcbi0gTWVkaWEgUXVlcmllc1xcbiovXFxuXFxuXFxuLyogR3JpZFxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDk2MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuLmNvbHVtbixcXG4uY29sdW1ucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi8qIEZvciBkZXZpY2VzIGxhcmdlciB0aGFuIDQwMHB4ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgcGFkZGluZzogMDsgfVxcbn1cXG5cXG4vKiBGb3IgZGV2aWNlcyBsYXJnZXIgdGhhbiA1NTBweCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA4MCU7IH1cXG4gIC5jb2x1bW4sXFxuICAuY29sdW1ucyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0JTsgfVxcbiAgLmNvbHVtbjpmaXJzdC1jaGlsZCxcXG4gIC5jb2x1bW5zOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4gIC5vbmUuY29sdW1uLFxcbiAgLm9uZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA0LjY2NjY2NjY2NjY3JTsgfVxcbiAgLnR3by5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAxMy4zMzMzMzMzMzMzJTsgfVxcbiAgLnRocmVlLmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAyMiU7ICAgICAgICAgICAgfVxcbiAgLmZvdXIuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAzMC42NjY2NjY2NjY3JTsgfVxcbiAgLmZpdmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAzOS4zMzMzMzMzMzMzJTsgfVxcbiAgLnNpeC5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA0OCU7ICAgICAgICAgICAgfVxcbiAgLnNldmVuLmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA1Ni42NjY2NjY2NjY3JTsgfVxcbiAgLmVpZ2h0LmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA2NS4zMzMzMzMzMzMzJTsgfVxcbiAgLm5pbmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA3NC4wJTsgICAgICAgICAgfVxcbiAgLnRlbi5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA4Mi42NjY2NjY2NjY3JTsgfVxcbiAgLmVsZXZlbi5jb2x1bW5zICAgICAgICAgICAgICAgICB7IHdpZHRoOiA5MS4zMzMzMzMzMzMzJTsgfVxcbiAgLnR3ZWx2ZS5jb2x1bW5zICAgICAgICAgICAgICAgICB7IHdpZHRoOiAxMDAlOyBtYXJnaW4tbGVmdDogMDsgfVxcblxcbiAgLm9uZS10aGlyZC5jb2x1bW4gICAgICAgICAgICAgICB7IHdpZHRoOiAzMC42NjY2NjY2NjY3JTsgfVxcbiAgLnR3by10aGlyZHMuY29sdW1uICAgICAgICAgICAgICB7IHdpZHRoOiA2NS4zMzMzMzMzMzMzJTsgfVxcblxcbiAgLm9uZS1oYWxmLmNvbHVtbiAgICAgICAgICAgICAgICB7IHdpZHRoOiA0OCU7IH1cXG5cXG4gIC8qIE9mZnNldHMgKi9cXG4gIC5vZmZzZXQtYnktb25lLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktb25lLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogOC42NjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktdHdvLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdHdvLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogMTcuMzMzMzMzMzMzMyU7IH1cXG4gIC5vZmZzZXQtYnktdGhyZWUuY29sdW1uLFxcbiAgLm9mZnNldC1ieS10aHJlZS5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiAyNiU7ICAgICAgICAgICAgfVxcbiAgLm9mZnNldC1ieS1mb3VyLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZm91ci5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktZml2ZS5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LWZpdmUuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDQzLjMzMzMzMzMzMzMlOyB9XFxuICAub2Zmc2V0LWJ5LXNpeC5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXNpeC5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDUyJTsgICAgICAgICAgICB9XFxuICAub2Zmc2V0LWJ5LXNldmVuLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktc2V2ZW4uY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogNjAuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktZWlnaHQuY29sdW1uLFxcbiAgLm9mZnNldC1ieS1laWdodC5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTsgfVxcbiAgLm9mZnNldC1ieS1uaW5lLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktbmluZS5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogNzguMCU7ICAgICAgICAgIH1cXG4gIC5vZmZzZXQtYnktdGVuLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktdGVuLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogODYuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktZWxldmVuLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktZWxldmVuLmNvbHVtbnMgICAgICAgeyBtYXJnaW4tbGVmdDogOTUuMzMzMzMzMzMzMyU7IH1cXG5cXG4gIC5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbnMgICAgeyBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7IH1cXG4gIC5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW4sXFxuICAub2Zmc2V0LWJ5LXR3by10aGlyZHMuY29sdW1ucyAgIHsgbWFyZ2luLWxlZnQ6IDY5LjMzMzMzMzMzMzMlOyB9XFxuXFxuICAub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbixcXG4gIC5vZmZzZXQtYnktb25lLWhhbGYuY29sdW1ucyAgICAgeyBtYXJnaW4tbGVmdDogNTIlOyB9XFxuXFxufVxcblxcblxcbi8qIEJhc2UgU3R5bGVzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLyogTk9URVxcbmh0bWwgaXMgc2V0IHRvIDYyLjUlIHNvIHRoYXQgYWxsIHRoZSBSRU0gbWVhc3VyZW1lbnRzIHRocm91Z2hvdXQgU2tlbGV0b25cXG5hcmUgYmFzZWQgb24gMTBweCBzaXppbmcuIFNvIGJhc2ljYWxseSAxLjVyZW0gPSAxNXB4IDopICovXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlOyB9XFxuYm9keSB7XFxuICBmb250LXNpemU6IDEuNWVtOyAvKiBjdXJyZW50bHkgZW1zIGNhdXNlIGNocm9tZSBidWcgbWlzaW50ZXJwcmV0aW5nIHJlbXMgb24gYm9keSBlbGVtZW50ICovXFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIFxcXCJIZWx2ZXRpY2FOZXVlXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMjIyOyB9XFxuXFxuXFxuLyogVHlwb2dyYXBoeVxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBmb250LXdlaWdodDogMzAwOyB9XFxuaDEgeyBmb250LXNpemU6IDQuMHJlbTsgbGluZS1oZWlnaHQ6IDEuMjsgIGxldHRlci1zcGFjaW5nOiAtLjFyZW07fVxcbmgyIHsgZm9udC1zaXplOiAzLjZyZW07IGxpbmUtaGVpZ2h0OiAxLjI1OyBsZXR0ZXItc3BhY2luZzogLS4xcmVtOyB9XFxuaDMgeyBmb250LXNpemU6IDMuMHJlbTsgbGluZS1oZWlnaHQ6IDEuMzsgIGxldHRlci1zcGFjaW5nOiAtLjFyZW07IH1cXG5oNCB7IGZvbnQtc2l6ZTogMi40cmVtOyBsaW5lLWhlaWdodDogMS4zNTsgbGV0dGVyLXNwYWNpbmc6IC0uMDhyZW07IH1cXG5oNSB7IGZvbnQtc2l6ZTogMS44cmVtOyBsaW5lLWhlaWdodDogMS41OyAgbGV0dGVyLXNwYWNpbmc6IC0uMDVyZW07IH1cXG5oNiB7IGZvbnQtc2l6ZTogMS41cmVtOyBsaW5lLWhlaWdodDogMS42OyAgbGV0dGVyLXNwYWNpbmc6IDA7IH1cXG5cXG4vKiBMYXJnZXIgdGhhbiBwaGFibGV0ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XFxuICBoMSB7IGZvbnQtc2l6ZTogNS4wcmVtOyB9XFxuICBoMiB7IGZvbnQtc2l6ZTogNC4ycmVtOyB9XFxuICBoMyB7IGZvbnQtc2l6ZTogMy42cmVtOyB9XFxuICBoNCB7IGZvbnQtc2l6ZTogMy4wcmVtOyB9XFxuICBoNSB7IGZvbnQtc2l6ZTogMi40cmVtOyB9XFxuICBoNiB7IGZvbnQtc2l6ZTogMS41cmVtOyB9XFxufVxcblxcbnAge1xcbiAgbWFyZ2luLXRvcDogMDsgfVxcblxcblxcbi8qIExpbmtzXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuYSB7XFxuICBjb2xvcjogIzFFQUVEQjsgfVxcbmE6aG92ZXIge1xcbiAgY29sb3I6ICMwRkEwQ0U7IH1cXG5cXG5cXG4vKiBCdXR0b25zXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuLmJ1dHRvbixcXG5idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDM4cHg7XFxuICBwYWRkaW5nOiAwIDMwcHg7XFxuICBjb2xvcjogIzU1NTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogMzhweDtcXG4gIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbi5idXR0b246aG92ZXIsXFxuYnV0dG9uOmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl06aG92ZXIsXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl06aG92ZXIsXFxuLmJ1dHRvbjpmb2N1cyxcXG5idXR0b246Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTpmb2N1cyB7XFxuICBjb2xvcjogIzMzMztcXG4gIGJvcmRlci1jb2xvcjogIzg4ODtcXG4gIG91dGxpbmU6IDA7IH1cXG4uYnV0dG9uLmJ1dHRvbi1wcmltYXJ5LFxcbmJ1dHRvbi5idXR0b24tcHJpbWFyeSxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXS5idXR0b24tcHJpbWFyeSxcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLmJ1dHRvbi1wcmltYXJ5LFxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLmJ1dHRvbi1wcmltYXJ5IHtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzQzNGMDtcXG4gIGJvcmRlci1jb2xvcjogIzMzQzNGMDsgfVxcbi5idXR0b24uYnV0dG9uLXByaW1hcnk6aG92ZXIsXFxuYnV0dG9uLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLFxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0uYnV0dG9uLXByaW1hcnk6aG92ZXIsXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0uYnV0dG9uLXByaW1hcnk6aG92ZXIsXFxuLmJ1dHRvbi5idXR0b24tcHJpbWFyeTpmb2N1cyxcXG5idXR0b24uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0uYnV0dG9uLXByaW1hcnk6Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXS5idXR0b24tcHJpbWFyeTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXS5idXR0b24tcHJpbWFyeTpmb2N1cyB7XFxuICBjb2xvcjogI0ZGRjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxRUFFREI7XFxuICBib3JkZXItY29sb3I6ICMxRUFFREI7IH1cXG5cXG5cXG4vKiBGb3Jtc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInRlbFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInVybFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl0sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGhlaWdodDogMzhweDtcXG4gIHBhZGRpbmc6IDZweCAxMHB4OyAvKiBUaGUgNnB4IHZlcnRpY2FsbHkgY2VudGVycyB0ZXh0IG9uIEZGLCBpZ25vcmVkIGJ5IFdlYmtpdCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEMUQxRDE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbi8qIFJlbW92ZXMgYXdrd2FyZCBkZWZhdWx0IHN0eWxlcyBvbiBzb21lIGlucHV0cyBmb3IgaU9TICovXFxuaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidGVsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwidXJsXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXSxcXG50ZXh0YXJlYSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7IH1cXG50ZXh0YXJlYSB7XFxuICBtaW4taGVpZ2h0OiA2NXB4O1xcbiAgcGFkZGluZy10b3A6IDZweDtcXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7IH1cXG5pbnB1dFt0eXBlPVxcXCJlbWFpbFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJ0ZWxcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJ1cmxcXFwiXTpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdOmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbnNlbGVjdDpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzNDM0YwO1xcbiAgb3V0bGluZTogMDsgfVxcbmxhYmVsLFxcbmxlZ2VuZCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDsgfVxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXItd2lkdGg6IDA7IH1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgZGlzcGxheTogaW5saW5lOyB9XFxubGFiZWwgPiAubGFiZWwtYm9keSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogLjVyZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsOyB9XFxuXFxuXFxuLyogTGlzdHNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBjaXJjbGUgaW5zaWRlOyB9XFxub2wge1xcbiAgbGlzdC1zdHlsZTogZGVjaW1hbCBpbnNpZGU7IH1cXG5vbCwgdWwge1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgbWFyZ2luLXRvcDogMDsgfVxcbnVsIHVsLFxcbnVsIG9sLFxcbm9sIG9sLFxcbm9sIHVsIHtcXG4gIG1hcmdpbjogMS41cmVtIDAgMS41cmVtIDNyZW07XFxuICBmb250LXNpemU6IDkwJTsgfVxcbmxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXG5cXG5cXG4vKiBDb2RlXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxuY29kZSB7XFxuICBwYWRkaW5nOiAuMnJlbSAuNXJlbTtcXG4gIG1hcmdpbjogMCAuMnJlbTtcXG4gIGZvbnQtc2l6ZTogOTAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJhY2tncm91bmQ6ICNGMUYxRjE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRTFFMUUxO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4OyB9XFxucHJlID4gY29kZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgd2hpdGUtc3BhY2U6IHByZTsgfVxcblxcblxcbi8qIFRhYmxlc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbnRoLFxcbnRkIHtcXG4gIHBhZGRpbmc6IDEycHggMTVweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UxRTFFMTsgfVxcbnRoOmZpcnN0LWNoaWxkLFxcbnRkOmZpcnN0LWNoaWxkIHtcXG4gIHBhZGRpbmctbGVmdDogMDsgfVxcbnRoOmxhc3QtY2hpbGQsXFxudGQ6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwOyB9XFxuXFxuXFxuLyogU3BhY2luZ1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbmJ1dHRvbixcXG4uYnV0dG9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5zZWxlY3QsXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtOyB9XFxucHJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZmlndXJlLFxcbnRhYmxlLFxcbnAsXFxudWwsXFxub2wsXFxuZm9ybSB7XFxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07IH1cXG5cXG5cXG4vKiBVdGlsaXRpZXNcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG4udS1mdWxsLXdpZHRoIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbi51LW1heC1mdWxsLXdpZHRoIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4udS1wdWxsLXJpZ2h0IHtcXG4gIGZsb2F0OiByaWdodDsgfVxcbi51LXB1bGwtbGVmdCB7XFxuICBmbG9hdDogbGVmdDsgfVxcblxcblxcbi8qIE1pc2NcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXG5ociB7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMy41cmVtO1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFMUUxRTE7IH1cXG5cXG5cXG4vKiBDbGVhcmluZ1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcblxcbi8qIFNlbGYgQ2xlYXJpbmcgR29vZG5lc3MgKi9cXG4uY29udGFpbmVyOmFmdGVyLFxcbi5yb3c6YWZ0ZXIsXFxuLnUtY2Yge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGNsZWFyOiBib3RoOyB9XFxuXFxuXFxuLyogTWVkaWEgUXVlcmllc1xcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcbi8qXFxuTm90ZTogVGhlIGJlc3Qgd2F5IHRvIHN0cnVjdHVyZSB0aGUgdXNlIG9mIG1lZGlhIHF1ZXJpZXMgaXMgdG8gY3JlYXRlIHRoZSBxdWVyaWVzXFxubmVhciB0aGUgcmVsZXZhbnQgY29kZS4gRm9yIGV4YW1wbGUsIGlmIHlvdSB3YW50ZWQgdG8gY2hhbmdlIHRoZSBzdHlsZXMgZm9yIGJ1dHRvbnNcXG5vbiBzbWFsbCBkZXZpY2VzLCBwYXN0ZSB0aGUgbW9iaWxlIHF1ZXJ5IGNvZGUgdXAgaW4gdGhlIGJ1dHRvbnMgc2VjdGlvbiBhbmQgc3R5bGUgaXRcXG50aGVyZS5cXG4qL1xcblxcblxcbi8qIExhcmdlciB0aGFuIG1vYmlsZSAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge31cXG5cXG4vKiBMYXJnZXIgdGhhbiBwaGFibGV0IChhbHNvIHBvaW50IHdoZW4gZ3JpZCBiZWNvbWVzIGFjdGl2ZSkgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHt9XFxuXFxuLyogTGFyZ2VyIHRoYW4gdGFibGV0ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDc1MHB4KSB7fVxcblxcbi8qIExhcmdlciB0aGFuIGRlc2t0b3AgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7fVxcblxcbi8qIExhcmdlciB0aGFuIERlc2t0b3AgSEQgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7fVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keVxcbntcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoIDI1NSwgMjU1LCAyNTUgKTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi53ZWJnbFxcbntcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBpbWFnZS1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLnRzQ2FudmFzXFxue1xcbiAgei1pbmRleDogMjtcXG4gIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XFxuICBvcGFjaXR5OiAwLjE1O1xcbn1cXG5cXG4uQVZcXG57XFxuICB6LWluZGV4OiAxO1xcbiAgbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XFxuICBcXG59XFxuXFxuLmJveCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogd2hpdGU7XFxuICBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBmb250LXNpemU6bWVkaXVtO1xcbn1cXG5cXG4ubGlua3Mge1xcbiAgei1pbmRleDogNTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgei1pbmRleDogNDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0UsZ0JBQWdCO0VBQ2hCLHNDQUFzQztFQUN0QyxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBOztFQUVFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsMEJBQTBCOztBQUU1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxuYm9keVxcbntcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoIDI1NSwgMjU1LCAyNTUgKTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi53ZWJnbFxcbntcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBpbWFnZS1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLnRzQ2FudmFzXFxue1xcbiAgei1pbmRleDogMjtcXG4gIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XFxuICBvcGFjaXR5OiAwLjE1O1xcbn1cXG5cXG4uQVZcXG57XFxuICB6LWluZGV4OiAxO1xcbiAgbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XFxuICBcXG59XFxuXFxuLmJveCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogd2hpdGU7XFxuICBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBmb250LXNpemU6bWVkaXVtO1xcbn1cXG5cXG4ubGlua3Mge1xcbiAgei1pbmRleDogNTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgei1pbmRleDogNDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0ZTkyNzY3ZTQ5NDQ1YjNjYzg5ZTllOTliYzQ3ZTU1MC5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODNmNjYyOGNlOWJiNzBmNWU0ZmRhNWQ0ZWM5M2E1ODMuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImM3ZWRiMGYzY2Q4NjdhMDM4Mjg1NTFkODQxMjYyZWI2LnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzN2IxN2ExNjJiMzAzN2ZjY2NkMzE4YmQ3MWQ2NjliMi5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTU4NTJmMjJlYjVjMjkxYjA1Nzc5MTAyYmZlNzUyOWQuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRjNTIxNzA4YjJjZmE2MmJjYWZkNTViZWViZTczY2FmLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0YmZkMzEyMThhZTRmMWRkYmIxNmQwM2E1NmI2NWRmYS5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjIzMTRhNDRlYjdkZGE3ZDYxYjE0ZGVhZjQ4N2E4NjQubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjlmYzNhZmEwNzU2MDFkM2E1YjM3M2QzZmMxOTRlODI0Lm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyMGQ4OWE3OWY3ZjhkMGI5N2M2MjQ2ZDE4NGY1MWU2OC5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTdjOWE5NDBiMjViYjM1OGE5YjRjYmQyZjM4NGY3NDgubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQxMTZmM2RjNzdiZjcyNWQ3YTg0MmRkMDdhNWY4NzRjLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyYzQxZTUzMWI2OWY2MTgxZGM2MzkzYzllNDI3OTA0OS5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWU2ZTI1NmNhMzZjMjc2NTUyZTA5OGQ3ODQ5ZWJhMzAubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImIxNDYwZjQ5NjFmZWU5ODdlZmQyZWRkNGJjZDFjNjY1Lm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzMTYzYTJiZDE2NWNiZWJkNTcwMDhmNTNmY2Q0YjZmMS5tcDNcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9za2VsZXRvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NrZWxldG9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJ1bmlmb3JtIGZsb2F0IHVUaW1lO1xcbnVuaWZvcm0gZmxvYXQgdVJlc1g7XFxudW5pZm9ybSBmbG9hdCB1UmVzWTtcXG52YXJ5aW5nIHZlYzMgdlBvc2l0aW9uO1xcblxcbi8vc25vaXNlMlxcblxcbnZlYzMgcGVybXV0ZSh2ZWMzIHgpIHsgcmV0dXJuIG1vZCgoKHgqMzQuMCkrMS4wKSp4LCAyODkuMCk7IH1cXG5cXG5mbG9hdCBzbm9pc2UyKHZlYzIgdil7XFxuICBjb25zdCB2ZWM0IEMgPSB2ZWM0KDAuMjExMzI0ODY1NDA1MTg3LCAwLjM2NjAyNTQwMzc4NDQzOSxcXG4gICAgICAgICAgIC0wLjU3NzM1MDI2OTE4OTYyNiwgMC4wMjQzOTAyNDM5MDI0MzkpO1xcbiAgdmVjMiBpICA9IGZsb29yKHYgKyBkb3QodiwgQy55eSkgKTtcXG4gIHZlYzIgeDAgPSB2IC0gICBpICsgZG90KGksIEMueHgpO1xcbiAgdmVjMiBpMTtcXG4gIGkxID0gKHgwLnggPiB4MC55KSA/IHZlYzIoMS4wLCAwLjApIDogdmVjMigwLjAsIDEuMCk7XFxuICB2ZWM0IHgxMiA9IHgwLnh5eHkgKyBDLnh4eno7XFxuICB4MTIueHkgLT0gaTE7XFxuICBpID0gbW9kKGksIDI4OS4wKTtcXG4gIHZlYzMgcCA9IHBlcm11dGUoIHBlcm11dGUoIGkueSArIHZlYzMoMC4wLCBpMS55LCAxLjAgKSlcXG4gICsgaS54ICsgdmVjMygwLjAsIGkxLngsIDEuMCApKTtcXG4gIHZlYzMgbSA9IG1heCgwLjUgLSB2ZWMzKGRvdCh4MCx4MCksIGRvdCh4MTIueHkseDEyLnh5KSxcXG4gICAgZG90KHgxMi56dyx4MTIuencpKSwgMC4wKTtcXG4gIG0gPSBtKm0gO1xcbiAgbSA9IG0qbSA7XFxuICB2ZWMzIHggPSAyLjAgKiBmcmFjdChwICogQy53d3cpIC0gMS4wO1xcbiAgdmVjMyBoID0gYWJzKHgpIC0gMC41O1xcbiAgdmVjMyBveCA9IGZsb29yKHggKyAwLjUpO1xcbiAgdmVjMyBhMCA9IHggLSBveDtcXG4gIG0gKj0gMS43OTI4NDI5MTQwMDE1OSAtIDAuODUzNzM0NzIwOTUzMTQgKiAoIGEwKmEwICsgaCpoICk7XFxuICB2ZWMzIGc7XFxuICBnLnggID0gYTAueCAgKiB4MC54ICArIGgueCAgKiB4MC55O1xcbiAgZy55eiA9IGEwLnl6ICogeDEyLnh6ICsgaC55eiAqIHgxMi55dztcXG4gIHJldHVybiAxMzAuMCAqIGRvdChtLCBnKTtcXG59XFxuXFxuLy9zbm9pc2U0XFxuZmxvYXQgc2NhbGUgPSAwLjU7XFxudmVjNCBtb2QyODkodmVjNCB4KSB7IHJldHVybiB4IC0gZmxvb3IoeCAqICgxLjAgLyAyODkuMCkpICogMjg5LjA7IH1cXG5cXG5mbG9hdCBtb2QyODkoZmxvYXQgeCkgeyByZXR1cm4geCAtIGZsb29yKHggKiAoMS4wIC8gMjg5LjApKSAqIDI4OS4wOyB9XFxuXFxudmVjNCBwZXJtdXRlKHZlYzQgeCkgeyByZXR1cm4gbW9kMjg5KCgoeCozNC4wKSsxMC4wKSp4KTsgfVxcblxcbmZsb2F0IHBlcm11dGUoZmxvYXQgeCkgeyByZXR1cm4gbW9kMjg5KCgoeCozNC4wKSsxMC4wKSp4KTsgfVxcblxcbnZlYzQgdGF5bG9ySW52U3FydCh2ZWM0IHIpIHsgcmV0dXJuIDEuNzkyODQyOTE0MDAxNTkgLSAwLjg1MzczNDcyMDk1MzE0ICogcjsgfVxcblxcbmZsb2F0IHRheWxvckludlNxcnQoZmxvYXQgcikgeyByZXR1cm4gMS43OTI4NDI5MTQwMDE1OSAtIDAuODUzNzM0NzIwOTUzMTQgKiByOyB9XFxuXFxudmVjNCBncmFkNChmbG9hdCBqLCB2ZWM0IGlwKSB7XFxuICBjb25zdCB2ZWM0IG9uZXMgPSB2ZWM0KDEuMCwgMS4wLCAxLjAsIC0xLjApO1xcbiAgdmVjNCBwLHM7XFxuXFxuICBwLnh5eiA9IGZsb29yKCBmcmFjdCAodmVjMyhqKSAqIGlwLnh5eikgKiA3LjApICogaXAueiAtIDEuMDtcXG4gIHAudyA9IDEuNSAtIGRvdChhYnMocC54eXopLCBvbmVzLnh5eik7XFxuICBzID0gdmVjNChsZXNzVGhhbihwLCB2ZWM0KDAuMCkpKTtcXG4gIHAueHl6ID0gcC54eXogKyAocy54eXoqMi4wIC0gMS4wKSAqIHMud3d3OyBcXG5cXG4gIHJldHVybiBwO1xcbn1cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXG4jZGVmaW5lIEY0IDAuMzA5MDE2OTk0Mzc0OTQ3NDUxXFxuXFxuZmxvYXQgc25vaXNlKHZlYzQgdikge1xcbiAgY29uc3QgdmVjNCAgQyA9IHZlYzQoIDAuMTM4MTk2NjAxMTI1MDExLCAgLy8gKDUgLSBzcXJ0KDUpKS8yMCAgRzRcXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjI3NjM5MzIwMjI1MDAyMSwgIC8vIDIgKiBHNFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuNDE0NTg5ODAzMzc1MDMyLCAgLy8gMyAqIEc0XFxuICAgICAgICAgICAgICAgICAgICAgICAtMC40NDcyMTM1OTU0OTk5NTgpOyAvLyAtMSArIDQgKiBHNFxcblxcbiAgdmVjNCBpICA9IGZsb29yKHYgKyBkb3QodiwgdmVjNChGNCkpICk7XFxuICB2ZWM0IHgwID0gdiAtICAgaSArIGRvdChpLCBDLnh4eHgpO1xcbiAgdmVjNCBpMDtcXG4gIHZlYzMgaXNYID0gc3RlcCggeDAueXp3LCB4MC54eHggKTtcXG4gIHZlYzMgaXNZWiA9IHN0ZXAoIHgwLnp3dywgeDAueXl6ICk7XFxuICBpMC54ID0gaXNYLnggKyBpc1gueSArIGlzWC56O1xcbiAgaTAueXp3ID0gMS4wIC0gaXNYO1xcbiAgaTAueSArPSBpc1laLnggKyBpc1laLnk7XFxuICBpMC56dyArPSAxLjAgLSBpc1laLnh5O1xcbiAgaTAueiArPSBpc1laLno7XFxuICBpMC53ICs9IDEuMCAtIGlzWVouejtcXG4gIHZlYzQgaTMgPSBjbGFtcCggaTAsIDAuMCwgMS4wICk7XFxuICB2ZWM0IGkyID0gY2xhbXAoIGkwLTEuMCwgMC4wLCAxLjAgKTtcXG4gIHZlYzQgaTEgPSBjbGFtcCggaTAtMi4wLCAwLjAsIDEuMCApO1xcbiAgdmVjNCB4MSA9IHgwIC0gaTEgKyBDLnh4eHg7XFxuICB2ZWM0IHgyID0geDAgLSBpMiArIEMueXl5eTtcXG4gIHZlYzQgeDMgPSB4MCAtIGkzICsgQy56enp6O1xcbiAgdmVjNCB4NCA9IHgwICsgQy53d3d3O1xcbiAgaSA9IG1vZDI4OShpKTsgXFxuICBmbG9hdCBqMCA9IHBlcm11dGUoIHBlcm11dGUoIHBlcm11dGUoIHBlcm11dGUoaS53KSArIGkueikgKyBpLnkpICsgaS54KTtcXG4gIHZlYzQgajEgPSBwZXJtdXRlKCBwZXJtdXRlKCBwZXJtdXRlKCBwZXJtdXRlIChcXG4gICAgICAgICAgICAgaS53ICsgdmVjNChpMS53LCBpMi53LCBpMy53LCAxLjAgKSlcXG4gICAgICAgICAgICsgaS56ICsgdmVjNChpMS56LCBpMi56LCBpMy56LCAxLjAgKSlcXG4gICAgICAgICAgICsgaS55ICsgdmVjNChpMS55LCBpMi55LCBpMy55LCAxLjAgKSlcXG4gICAgICAgICAgICsgaS54ICsgdmVjNChpMS54LCBpMi54LCBpMy54LCAxLjAgKSk7XFxuICB2ZWM0IGlwID0gdmVjNCgxLjAvMjk0LjAsIDEuMC80OS4wLCAxLjAvNy4wLCAwLjApIDtcXG4gIHZlYzQgcDAgPSBncmFkNChqMCwgICBpcCk7XFxuICB2ZWM0IHAxID0gZ3JhZDQoajEueCwgaXApO1xcbiAgdmVjNCBwMiA9IGdyYWQ0KGoxLnksIGlwKTtcXG4gIHZlYzQgcDMgPSBncmFkNChqMS56LCBpcCk7XFxuICB2ZWM0IHA0ID0gZ3JhZDQoajEudywgaXApO1xcbiAgdmVjNCBub3JtID0gdGF5bG9ySW52U3FydCh2ZWM0KGRvdChwMCxwMCksIGRvdChwMSxwMSksIGRvdChwMiwgcDIpLCBkb3QocDMscDMpKSk7XFxuICBwMCAqPSBub3JtLng7XFxuICBwMSAqPSBub3JtLnk7XFxuICBwMiAqPSBub3JtLno7XFxuICBwMyAqPSBub3JtLnc7XFxuICBwNCAqPSB0YXlsb3JJbnZTcXJ0KGRvdChwNCxwNCkpO1xcbiAgdmVjMyBtMCA9IG1heCgwLjYgLSB2ZWMzKGRvdCh4MCx4MCksIGRvdCh4MSx4MSksIGRvdCh4Mix4MikpLCAwLjApO1xcbiAgdmVjMiBtMSA9IG1heCgwLjYgLSB2ZWMyKGRvdCh4Myx4MyksIGRvdCh4NCx4NCkgICAgICAgICAgICApLCAwLjApO1xcbiAgbTAgPSBtMCAqIG0wO1xcbiAgbTEgPSBtMSAqIG0xO1xcbiAgcmV0dXJuIDQ5LjAgKiAoIGRvdChtMCptMCwgdmVjMyggZG90KCBwMCwgeDAgKSwgZG90KCBwMSwgeDEgKSwgZG90KCBwMiwgeDIgKSkpXFxuICAgICAgICAgICAgICAgKyBkb3QobTEqbTEsIHZlYzIoIGRvdCggcDMsIHgzICksIGRvdCggcDQsIHg0ICkgKSApICkgO1xcbn1cXG5cXG52b2lkIG1haW4oKVxcbntcXG4gIGZsb2F0IG5UaW1lID0gdVRpbWUgKiAwLjU7XFxuICBmbG9hdCBWID0gc25vaXNlKHZlYzQodlBvc2l0aW9uICogc2NhbGUgKiAyLjAsIGNvcyhuVGltZSkpKTtcXG4gIGZsb2F0IFYxID0gc25vaXNlKDEuMisoY29zKDAuMjUqblRpbWUpKSowLjI1KiB2ZWM0KHZQb3NpdGlvbiAqIHNjYWxlICogMjAuMCwgc2luKG5UaW1lKSkpO1xcbiAgZmxvYXQgVjIgPSBzbm9pc2UyKHNpbihuVGltZSkqMC43Nyp2ZWMyKFYxLCBzaW4oMC41Km5UaW1lKSkpO1xcbiAgZmxvYXQgVjMgPSBzbm9pc2UyKHNpbigwLjUqblRpbWUpKjMwLjkqdmVjMihWMiwgY29zKDAuMipuVGltZSkpKTtcXG4gIGZsb2F0IFY1ID0gc25vaXNlMigwLjMwKnZlYzIoVjMsIHNpbigwLjMqblRpbWUpKSk7XFxuICBmbG9hdCByID0gc25vaXNlKHZlYzQodlBvc2l0aW9uLCBjb3MoblRpbWUpKSk7XFxuICBmbG9hdCBnID0gc25vaXNlKHZlYzQodlBvc2l0aW9uLCBjb3MoblRpbWUgKyAwLjEpKSk7XFxuICBmbG9hdCBiID0gc25vaXNlKHZlYzQodlBvc2l0aW9uLCBjb3MoblRpbWUgKyAwLjIpKSk7XFxuICBmbG9hdCBhID0gc25vaXNlKHZlYzQodlBvc2l0aW9uLCBzaW4oblRpbWUpKSk7XFxuICB2ZWM0IGNvbG9yMSA9IHZlYzQoViwgViwgViwgbWluKFYrMC4zLCAxLjApKTtcXG4gIHZlYzQgY29sb3IyID0gdmVjNChyLCBtaW4oZyswLjA1LCAxLjApLCBiLCBtaW4oYSswLjEsIDEuMCkpO1xcbiAgdmVjNCBjb2xvcjMgPSB2ZWM0KG1pbihWNS0wLjIsIDEuMCksIG1pbihWNS0wLjIsIDEuMCksIG1pbihWNS0wLjIsIDEuMCksIG1pbihWNSswLjQsIDEuMCkpO1xcbiAgdmVjNCBjb2xvciA9IGNvbG9yMSowLjQ1ICsgY29sb3IyKjAuMDUgKyBjb2xvcjMqMC41MDtcXG4gIGdsX0ZyYWdDb2xvciA9IGNvbG9yO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJ2YXJ5aW5nIHZlYzMgdlBvc2l0aW9uO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgdlBvc2l0aW9uID0gbm9ybWFsaXplKHBvc2l0aW9uKTtcXG4gICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwxLjApO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJ1bmlmb3JtIGZsb2F0IHVUaW1lO1xcbnVuaWZvcm0gZmxvYXQgdVJlc1g7XFxudW5pZm9ybSBmbG9hdCB1UmVzWTtcXG52YXJ5aW5nIHZlYzMgdlBvc2l0aW9uO1xcblxcbi8vc25vaXNlMlxcblxcbnZlYzMgcGVybXV0ZSh2ZWMzIHgpIHsgcmV0dXJuIG1vZCgoKHgqMzQuMCkrMS4wKSp4LCAyODkuMCk7IH1cXG5cXG5mbG9hdCBzbm9pc2UyKHZlYzIgdil7XFxuICBjb25zdCB2ZWM0IEMgPSB2ZWM0KDAuMjExMzI0ODY1NDA1MTg3LCAwLjM2NjAyNTQwMzc4NDQzOSxcXG4gICAgICAgICAgIC0wLjU3NzM1MDI2OTE4OTYyNiwgMC4wMjQzOTAyNDM5MDI0MzkpO1xcbiAgdmVjMiBpICA9IGZsb29yKHYgKyBkb3QodiwgQy55eSkgKTtcXG4gIHZlYzIgeDAgPSB2IC0gICBpICsgZG90KGksIEMueHgpO1xcbiAgdmVjMiBpMTtcXG4gIGkxID0gKHgwLnggPiB4MC55KSA/IHZlYzIoMS4wLCAwLjApIDogdmVjMigwLjAsIDEuMCk7XFxuICB2ZWM0IHgxMiA9IHgwLnh5eHkgKyBDLnh4eno7XFxuICB4MTIueHkgLT0gaTE7XFxuICBpID0gbW9kKGksIDI4OS4wKTtcXG4gIHZlYzMgcCA9IHBlcm11dGUoIHBlcm11dGUoIGkueSArIHZlYzMoMC4wLCBpMS55LCAxLjAgKSlcXG4gICsgaS54ICsgdmVjMygwLjAsIGkxLngsIDEuMCApKTtcXG4gIHZlYzMgbSA9IG1heCgwLjUgLSB2ZWMzKGRvdCh4MCx4MCksIGRvdCh4MTIueHkseDEyLnh5KSxcXG4gICAgZG90KHgxMi56dyx4MTIuencpKSwgMC4wKTtcXG4gIG0gPSBtKm0gO1xcbiAgbSA9IG0qbSA7XFxuICB2ZWMzIHggPSAyLjAgKiBmcmFjdChwICogQy53d3cpIC0gMS4wO1xcbiAgdmVjMyBoID0gYWJzKHgpIC0gMC41O1xcbiAgdmVjMyBveCA9IGZsb29yKHggKyAwLjUpO1xcbiAgdmVjMyBhMCA9IHggLSBveDtcXG4gIG0gKj0gMS43OTI4NDI5MTQwMDE1OSAtIDAuODUzNzM0NzIwOTUzMTQgKiAoIGEwKmEwICsgaCpoICk7XFxuICB2ZWMzIGc7XFxuICBnLnggID0gYTAueCAgKiB4MC54ICArIGgueCAgKiB4MC55O1xcbiAgZy55eiA9IGEwLnl6ICogeDEyLnh6ICsgaC55eiAqIHgxMi55dztcXG4gIHJldHVybiAxMzAuMCAqIGRvdChtLCBnKTtcXG59XFxuXFxudm9pZCBtYWluKClcXG57XFxuICBmbG9hdCBzY2FsZSA9IDAuNTtcXG4gIGZsb2F0IG5UaW1lID0gdVRpbWUgKiAwLjU7XFxuICBmbG9hdCB4eSA9IHNub2lzZSh2UG9zaXRpb24ueHkpO1xcbiAgZmxvYXQgeXogPSBzbm9pc2UodlBvc2l0aW9uLnl6KTtcXG4gIGZsb2F0IHp4ID0gc25vaXNlKHZQb3NpdGlvbi56eCk7XFxuICBmbG9hdCBWID0gc25vaXNlMih2ZWMyKCh4eSArIHl6ICsgengpICogc2NhbGUgKiAyLjAsIGNvcyhuVGltZSkpKTtcXG4gIGZsb2F0IFYxID0gc25vaXNlMigxLjIrKGNvcygwLjI1Km5UaW1lKSkqMC4yNSogdmVjMigodlBvc2l0aW9uLnggKyB2UG9zaXRpb24ueSArIHZQb3NpdGlvbi56KSAqIHNjYWxlICogMjAuMCwgc2luKG5UaW1lKSkpO1xcbiAgZmxvYXQgVjIgPSBzbm9pc2UyKHNpbihuVGltZSkqMC43Nyp2ZWMyKFYxLCBzaW4oMC41Km5UaW1lKSkpO1xcbiAgZmxvYXQgVjMgPSBzbm9pc2UyKHNpbigwLjUqblRpbWUpKjMwLjkqdmVjMihWMiwgY29zKDAuMipuVGltZSkpKTtcXG4gIGZsb2F0IFY1ID0gc25vaXNlMigwLjMwKnZlYzIoVjMsIHNpbigwLjMqblRpbWUpKSk7XFxuICBmbG9hdCByID0gc25vaXNlMih2ZWMyKHZQb3NpdGlvbi54ICsgdlBvc2l0aW9uLnkgKyB2UG9zaXRpb24ueiwgY29zKG5UaW1lKSkpO1xcbiAgZmxvYXQgZyA9IHNub2lzZTIodmVjMih2UG9zaXRpb24ueCArIHZQb3NpdGlvbi55ICsgdlBvc2l0aW9uLnosIGNvcyhuVGltZSArIDAuMSkpKTtcXG4gIGZsb2F0IGIgPSBzbm9pc2UyKHZlYzIodlBvc2l0aW9uLnggKyB2UG9zaXRpb24ueSArIHZQb3NpdGlvbi56LCBjb3MoblRpbWUgKyAwLjIpKSk7XFxuICBmbG9hdCBhID0gc25vaXNlMih2ZWMyKHZQb3NpdGlvbi54ICsgdlBvc2l0aW9uLnkgKyB2UG9zaXRpb24ueiwgc2luKG5UaW1lKSkpO1xcbiAgdmVjNCBjb2xvcjEgPSB2ZWM0KFYsIFYsIFYsIG1pbihWKzAuMywgMS4wKSk7XFxuICB2ZWM0IGNvbG9yMiA9IHZlYzQociwgbWluKGcrMC4wNSwgMS4wKSwgYiwgbWluKGErMC4xLCAxLjApKTtcXG4gIHZlYzQgY29sb3IzID0gdmVjNChtaW4oVjUtMC4yLCAxLjApLCBtaW4oVjUtMC4yLCAxLjApLCBtaW4oVjUtMC4yLCAxLjApLCBtaW4oVjUrMC40LCAxLjApKTtcXG4gIHZlYzQgY29sb3IgPSBjb2xvcjEqMC40NSArIGNvbG9yMiowLjA1ICsgY29sb3IzKjAuNTA7XFxuICBnbF9GcmFnQ29sb3IgPSBjb2xvcjtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwidW5pZm9ybSBmbG9hdCB1VGltZTtcXG51bmlmb3JtIGZsb2F0IHVSZXNYO1xcbnVuaWZvcm0gZmxvYXQgdVJlc1k7XFxudW5pZm9ybSBmbG9hdCB1RkZUWyAxMDIwIF07XFxuXFxuLy9zbm9pc2UyXFxuXFxudmVjMyBwZXJtdXRlKHZlYzMgeCkgeyByZXR1cm4gbW9kKCgoeCozNC4wKSsxLjApKngsIDI4OS4wKTsgfVxcblxcbmZsb2F0IHNub2lzZSh2ZWMyIHYpe1xcbiAgY29uc3QgdmVjNCBDID0gdmVjNCgwLjIxMTMyNDg2NTQwNTE4NywgMC4zNjYwMjU0MDM3ODQ0MzksXFxuICAgICAgICAgICAtMC41NzczNTAyNjkxODk2MjYsIDAuMDI0MzkwMjQzOTAyNDM5KTtcXG4gIHZlYzIgaSAgPSBmbG9vcih2ICsgZG90KHYsIEMueXkpICk7XFxuICB2ZWMyIHgwID0gdiAtICAgaSArIGRvdChpLCBDLnh4KTtcXG4gIHZlYzIgaTE7XFxuICBpMSA9ICh4MC54ID4geDAueSkgPyB2ZWMyKDEuMCwgMC4wKSA6IHZlYzIoMC4wLCAxLjApO1xcbiAgdmVjNCB4MTIgPSB4MC54eXh5ICsgQy54eHp6O1xcbiAgeDEyLnh5IC09IGkxO1xcbiAgaSA9IG1vZChpLCAyODkuMCk7XFxuICB2ZWMzIHAgPSBwZXJtdXRlKCBwZXJtdXRlKCBpLnkgKyB2ZWMzKDAuMCwgaTEueSwgMS4wICkpXFxuICArIGkueCArIHZlYzMoMC4wLCBpMS54LCAxLjAgKSk7XFxuICB2ZWMzIG0gPSBtYXgoMC41IC0gdmVjMyhkb3QoeDAseDApLCBkb3QoeDEyLnh5LHgxMi54eSksXFxuICAgIGRvdCh4MTIuencseDEyLnp3KSksIDAuMCk7XFxuICBtID0gbSptIDtcXG4gIG0gPSBtKm0gO1xcbiAgdmVjMyB4ID0gMi4wICogZnJhY3QocCAqIEMud3d3KSAtIDEuMDtcXG4gIHZlYzMgaCA9IGFicyh4KSAtIDAuNTtcXG4gIHZlYzMgb3ggPSBmbG9vcih4ICsgMC41KTtcXG4gIHZlYzMgYTAgPSB4IC0gb3g7XFxuICBtICo9IDEuNzkyODQyOTE0MDAxNTkgLSAwLjg1MzczNDcyMDk1MzE0ICogKCBhMCphMCArIGgqaCApO1xcbiAgdmVjMyBnO1xcbiAgZy54ICA9IGEwLnggICogeDAueCAgKyBoLnggICogeDAueTtcXG4gIGcueXogPSBhMC55eiAqIHgxMi54eiArIGgueXogKiB4MTIueXc7XFxuICByZXR1cm4gMTMwLjAgKiBkb3QobSwgZyk7XFxufVxcblxcbnZvaWQgbWFpbigpe1xcblxcbiAgICAvL2NvbnN0YW50c1xcblxcbiAgICB2ZWMyIHN0ID0gZ2xfRnJhZ0Nvb3JkLnh5L3ZlYzIgKCB1UmVzWCAqIDIuMCAsIHVSZXNZICogMi4wICk7XFxuICAgIHZlYzIgY2VudGVyID0gc3QgLSB2ZWMyICggMC41LCAwLjUgKTtcXG4gICAgdmVjMiB0b3BSID0gc3QgLSB2ZWMyICggMS4wLCAxLjAgKTtcXG4gICAgdmVjMiBib3RMID0gc3QgLSB2ZWMyICggMC4wLCAwLjAgKTtcXG4gICAgdmVjMiBib3RSID0gc3QgLSB2ZWMyICggMC4wLCAxLjAgKTtcXG4gICAgdmVjMiB0b3BMID0gc3QgLSB2ZWMyICggMS4wLCAwLjAgKTtcXG5cXG4gICAgdmVjMyBjb2xvcjEgPSB2ZWMzICggMS4wLCAwLjAsIDAuNSApOyAvL2hvdCBwaW5rXFxuICAgIHZlYzMgY29sb3IyID0gdmVjMyAoIDEuMCwgMC41LCAwLjUgKTsgLy9wZWFjaFxcbiAgICB2ZWMzIGNvbG9yMyA9IHZlYzMgKCAxLjAsIDAuNSwgMC4yICk7IC8vb3JhbmdlXFxuICAgIHZlYzMgY29sb3I0ID0gdmVjMyAoIDEuMCwgMC43LCAwLjggKTsgLy9saWdodCBwaW5rXFxuICAgIHZlYzMgY29sb3I1ID0gdmVjMyAoIDAuMCwgMC40LCAwLjEgKTsgLy9mb3Jlc3QgZ3JlZW5cXG4gICAgdmVjMyBjb2xvcjYgPSB2ZWMzICggMC4wLCAwLjIsIDAuNSApOyAvL2JsdWVcXG4gICAgdmVjMyBjb2xvcjcgPSB2ZWMzICggMC4wLCAwLjQsIDAuMCApOyAvL2dyZWVuXFxuICAgIFxcbiAgICBmbG9hdCBmZnQxID0gY29zICggdUZGVFsgMTAwIF0gKiAwLjAxICkgKiA1LjA7XFxuICAgIGZsb2F0IGZmdDIgPSBjb3MgKCB1RkZUWyAyMDAgXSAqIDAuMSApICogMC4zO1xcbiAgICBmbG9hdCBmZnQzID0gY29zICggdUZGVFsgMzAwIF0gKiAwLjAxICkgKiA1LjA7XFxuICAgIGZsb2F0IGZmdDQgPSBjb3MgKCB1RkZUWyA0MDAgXSAqIDAuMDEgKSAqIDUuMDtcXG4gICAgZmxvYXQgZmZ0NSA9IGNvcyAoIHVGRlRbIDUwMCBdICogMC4wMSApICogNS41O1xcbiAgICBmbG9hdCBmZnQ2ID0gY29zICggdUZGVFsgNjAwIF0gKiAwLjAxICkgKiA1LjU7XFxuICAgIGZsb2F0IGZmdDcgPSB1RkZUWyAxMDAgXTtcXG4gICAgZmxvYXQgZmZ0OCA9IHVGRlRbIDI1MCBdO1xcbiAgICBmbG9hdCBmZnQ5ID0gY29zICggdUZGVFsgNDAwIF0gKiAwLjA1ICkgKiAxLjU7XFxuICAgIGZsb2F0IGZmdDEwID0gdUZGVFsgNTUwIF07XFxuICAgIGZsb2F0IGZmdDExID0gdUZGVFsgNzAwIF07XFxuXFxuICAgIGZsb2F0IHQxID0gY29zICggdVRpbWUgKTtcXG4gICAgZmxvYXQgdDIgPSBjb3MgKCB1VGltZSAqIDAuMSApO1xcbiAgICBmbG9hdCB0MyA9IGNvcyAoIHVUaW1lICogMC4wMSApO1xcbiAgICBmbG9hdCB0NCA9IGNvcyAoIHVUaW1lICogMC4xICkgKyBzaW4gKCB1VGltZSAqIDAuMiApO1xcblxcbiAgICBmbG9hdCBub2lzZTEgPSBzbm9pc2UgKCB2ZWMyICggZmZ0NyAqIDAuMSwgdVRpbWUgKiAwLjAxICkgKTtcXG4gICAgZmxvYXQgbm9pc2UyID0gc25vaXNlICggZmZ0OCAqIGNvcyAoIGZmdDggKiB0MyApICogdmVjMiAoIHN0LngsIHN0LnkgKSApO1xcbiAgICBmbG9hdCBub2lzZTMgPSBzbm9pc2UgKCB2ZWMyICggbm9pc2UxLCBub2lzZTIgKSApO1xcbiAgICBmbG9hdCBub2lzZTQgPSBzbm9pc2UgKCB2ZWMyICggbm9pc2UzLCBzdC54ICsgc3QueSApICk7XFxuICAgIGZsb2F0IG5vaXNlNSA9IHNub2lzZSAoIHZlYzIgKCBub2lzZTQsIGZmdDggKiAwLjEgKSApO1xcbiAgICBmbG9hdCBub2lzZTYgPSBzbm9pc2UgKCB2ZWMyICggbm9pc2U1LCBjZW50ZXIueCArIGNlbnRlci55ICkgKTtcXG5cXG4gICAgLy9jb2xvcjRcXG5cXG4gICAgZmxvYXQgbGVhZkJhc2UgPSAwLjE7XFxuICAgIGZsb2F0IGxlYXZlc1RvcCA9IGNvcyAoIGF0YW4gKCB0b3BSLnkgLyB0b3BSLnggKSAqIGZmdDcgKTtcXG4gICAgbGVhdmVzVG9wICo9IGNvcyAoIGF0YW4gKCBjZW50ZXIueSAvIGNlbnRlci54ICkgKiBmZnQ4ICk7XFxuICAgIGxlYXZlc1RvcCAqPSBjb3MgKCBhdGFuICggYm90Ui55IC8gYm90Ui54ICkgKiBmZnQxMCApO1xcbiAgICBsZWF2ZXNUb3AgKj0gY29zICggYXRhbiAoIHRvcEwueSAvIHRvcEwueCApICogZmZ0MTEgKTtcXG4gICAgbGVhdmVzVG9wICo9IGNvcyAoIHQ0ICsgYXRhbiAoIGJvdEwueSAvIGJvdEwueCApICogZmZ0NSApO1xcbiAgICBmbG9hdCBsZWF2ZXMxID0gbGVhZkJhc2UgKyBsZWF2ZXNUb3A7XFxuICAgIGNvbG9yNCAqPSBzbW9vdGhzdGVwICggbGVhdmVzMSwgbGVhdmVzMSArIGZmdDIsIGxlbmd0aCAoIGNlbnRlciApICk7XFxuICAgIGNvbG9yMSAqPSBzbW9vdGhzdGVwICggbGVhdmVzMSwgbGVhdmVzMSArIGZmdDIsIGxlbmd0aCAoIGNlbnRlciApICk7XFxuICAgIGNvbG9yNyAqPSBzbW9vdGhzdGVwICggbGVhdmVzMSwgbGVhdmVzMSArIDAuMSArIGZmdDIsIGxlbmd0aCAoIGNlbnRlciApICk7XFxuXFxuICAgIC8vY29sb3I1XFxuXFxuICAgIGNvbG9yNS55ICo9IG5vaXNlNjtcXG4gICAgY29sb3I1LnogKj0gbm9pc2U2O1xcblxcbiAgICAvL2NvbG9yNlxcblxcbiAgICBjb2xvcjYueSAqPSBub2lzZTU7XFxuICAgIGNvbG9yNi56ICo9IG5vaXNlNTtcXG5cXG4gICAgLy9maW5hbCBjb2xvclxcblxcbiAgICB2ZWMzIGNvbG9yTm9pc2UgPSBjb2xvcjYgKyBjb2xvcjU7XFxuICAgIHZlYzMgY29sb3IgPSBub3JtYWxpemUgKCBleHAyICggY29sb3JOb2lzZSApICsgZXhwMiAoIGNvbG9yNCApIC0gY29sb3IxICsgY29sb3I3ICk7XFxuICAgIC8vIGNvbG9yID0gbWluKCBjb2xvciwgY29sb3I3ICk7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoIGNvbG9yLCAxLjAgKTtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwidW5pZm9ybSBmbG9hdCB1VGltZTtcXG51bmlmb3JtIGZsb2F0IHVSZXNYO1xcbnVuaWZvcm0gZmxvYXQgdVJlc1k7XFxudW5pZm9ybSBmbG9hdCB1RkZUWyAxMDIwIF07XFxuXFxudmVjMyBoYXNoMyggdmVjMiBwIClcXG57XFxuICAgIHZlYzMgcSA9IHZlYzMoIGRvdChwLHZlYzIoMTI3LjEsMzExLjcpKSwgXFxuXFx0XFx0XFx0XFx0ICAgZG90KHAsdmVjMigyNjkuNSwxODMuMykpLCBcXG5cXHRcXHRcXHRcXHQgICBkb3QocCx2ZWMyKDQxOS4yLDM3MS45KSkgKTtcXG5cXHRyZXR1cm4gZnJhY3Qoc2luKHEgKiB1RkZUWzEwMF0gKiAwLjAwMSkqNDM3NTguNTQ1Myk7XFxufVxcblxcbmZsb2F0IHZvcm9ub2lzZSggaW4gdmVjMiBwLCBmbG9hdCB1LCBmbG9hdCB2IClcXG57XFxuXFx0ZmxvYXQgayA9IDEuMCs2My4wKnBvdygxLjAtdiw2LjApO1xcblxcbiAgICB2ZWMyIGkgPSBmbG9vcihwKTtcXG4gICAgdmVjMiBmID0gZnJhY3QocCk7XFxuICAgIFxcblxcdHZlYzIgYSA9IHZlYzIoMC4wLDAuMCk7XFxuICAgIGZvciggaW50IHk9LTI7IHk8PTI7IHkrKyApXFxuICAgIGZvciggaW50IHg9LTI7IHg8PTI7IHgrKyApXFxuICAgIHtcXG4gICAgICAgIHZlYzIgIGcgPSB2ZWMyKCB4LCB5ICk7XFxuXFx0XFx0dmVjMyAgbyA9IGhhc2gzKCBpICsgZyApKnZlYzModSx1LDEuMCk7XFxuXFx0XFx0dmVjMiAgZCA9IGcgLSBmICsgby54eTtcXG5cXHRcXHRmbG9hdCB3ID0gcG93KCAxLjAtc21vb3Roc3RlcCgwLjAsMS40MTQsbGVuZ3RoKGQpKSwgayApO1xcblxcdFxcdGEgKz0gdmVjMihvLnoqdyx3KTtcXG4gICAgfVxcblxcdFxcbiAgICByZXR1cm4gYS54L2EueTtcXG59XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICB2ZWMzIHJlZCA9IHZlYzMoMS4wLCAxLjAsIDEuMCk7XFxuICAgIHZlYzMgYmx1ZSA9IHZlYzMoMC4wLCAwLjAsIDEuMCk7XFxuICAgIHZlYzIgdXYgPSBnbF9GcmFnQ29vcmQueHkgLyB2ZWMyKHVSZXNYLCB1UmVzWSk7XFxuICAgIGZsb2F0IG9uZSA9IHVGRlRbNDAwXTtcXG4gICAgZmxvYXQgdHdvID0gY29zKGNvcyh1VGltZSkpICogdUZGVFsxMDBdO1xcblxcdGZsb2F0IGYgPSB2b3Jvbm9pc2UoICgxMC4wICsgb25lICogMC4wMSkgKiB1diwgdHdvICogMC4xLCBzaW4oY29zKHNpbih1VGltZSkpICogdUZGVFs4MDBdICogMC4wMDEpKTtcXG4gICAgZmxvYXQgZjIgPSB2b3Jvbm9pc2UoICgzLjAgKiBvbmUgKiAwLjAxKSAqIHV2LCB0d28gKiAwLjEsIHNpbihjb3Moc2luKHVUaW1lKSkgKiB1RkZUWzgwMF0gKiAwLjAxKSk7XFxuICAgIGZsb2F0IGYzID0gdm9yb25vaXNlKCAoNDAuMCAqIG9uZSAqIDAuMSkgKiB1diwgdHdvICogMC4zLCBzaW4oY29zKHNpbih1VGltZSkpICogdUZGVFs4MDBdICogMC4wMikpO1xcbiAgICB2ZWMzIGNvbG9yID0gcmVkO1xcbiAgICB2ZWMzIGxlcnBWZWMgPSBibHVlLXJlZDtcXG4gICAgbGVycFZlYyA9IGxlcnBWZWMgLyBsZW5ndGgobGVycFZlYyk7XFxuICAgIGNvbG9yICs9IGxlcnBWZWMgKiAoZiArIDAuMSk7XFxuICAgIGNvbG9yLmcgKz0gZjI7XFxuICAgIGNvbG9yLmIgKz0gZjM7XFxuICAgIGNvbG9yID0gY29sb3IgLyBsZW5ndGgoY29sb3IpO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGNvbG9yLCAxLjApO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJ2YXJ5aW5nIHZlYzMgdlBvc2l0aW9uO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgdlBvc2l0aW9uID0gbm9ybWFsaXplKHBvc2l0aW9uKTtcXG4gICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwxLjApO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJ2b2lkIG1haW4oKSB7XFxuICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24gLDEuMCk7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcInZvaWQgbWFpbigpe1xcbiAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uICwxLjApO1xcbn1cIiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvSW5zdGFuY2VcbntcbiAgICAvKlxuICAgICAqIGZmdFNpemUgbXVzdCBiZSBhIHBvd2VyIG9mIDJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciggZmZ0U2l6ZSApXG4gICAge1xuICAgICAgICB0aGlzLmF1ZGlvID0gbmV3IEF1ZGlvKCApO1xuICAgICAgICB0aGlzLmF1ZGlvQ3R4ID0gbmV3IEF1ZGlvQ29udGV4dCggKTtcbiAgICAgICAgdGhpcy5hbmFseXNlciA9IHRoaXMuYXVkaW9DdHguY3JlYXRlQW5hbHlzZXIoICk7XG4gICAgICAgIHRoaXMuZmZ0ID0gZmZ0U2l6ZTtcbiAgICAgICAgdGhpcy5hbmFseXNlci5mZnRTaXplID0gZmZ0U2l6ZTtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IFVpbnQ4QXJyYXkoIHRoaXMuYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQgKTtcbiAgICAgICAgdGhpcy5wYXVzZUZsYWcgPSBmYWxzZTtcbiAgICB9XG4gICAgZGVzdHJ1Y3RvciggKVxuICAgIHtcbiAgICAgICAgdGhpcy5hdWRpb0N0eC5jbG9zZSggKTtcbiAgICB9IFxuICAgIGxvYWRUcmFjayggc29uZyApXG4gICAge1xuICAgICAgICB0aGlzLmF1ZGlvQ3R4LmNsb3NlKCApO1xuICAgICAgICB0aGlzLmF1ZGlvQ3R4ID0gbmV3IEF1ZGlvQ29udGV4dCggKTtcbiAgICAgICAgdGhpcy5hbmFseXNlciA9IHRoaXMuYXVkaW9DdHguY3JlYXRlQW5hbHlzZXIoICk7XG4gICAgICAgIHRoaXMuYW5hbHlzZXIuZmZ0U2l6ZSA9IHRoaXMuZmZ0O1xuICAgICAgICB0aGlzLmF1ZGlvLmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdWRpby5zcmMgPSBzb25nO1xuICAgICAgICB0aGlzLmF1ZGlvLmxvb3AgPSB0cnVlO1xuICAgICAgICB0aGlzLnNvdXJjZSA9IHRoaXMuYXVkaW9DdHguY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKCB0aGlzLmF1ZGlvICk7XG4gICAgICAgIHRoaXMuc291cmNlLmNvbm5lY3QoIHRoaXMuYW5hbHlzZXIgKTtcbiAgICAgICAgdGhpcy5zb3VyY2UuY29ubmVjdCggdGhpcy5hdWRpb0N0eC5kZXN0aW5hdGlvbiApO1xuICAgIH1cbiAgICBvblRpY2soIClcbiAgICB7XG4gICAgICAgIHRoaXMuYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoIHRoaXMuZGF0YSApO1xuICAgIH1cbiAgICB0b2dnbGVBdWRpbyggKSB7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlRmxhZykge1xuICAgICAgICAgICAgdGhpcy5hdWRpb0N0eC5yZXN1bWUoKTsgLy8gUmVzdW1lIHRoZSBBdWRpb0NvbnRleHRcbiAgICAgICAgICAgIHRoaXMucGF1c2VGbGFnID0gIXRoaXMucGF1c2VGbGFnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hdWRpb0N0eC5zdXNwZW5kKCk7IC8vIFBhdXNlIHRoZSBBdWRpb0NvbnRleHRcbiAgICAgICAgICAgIHRoaXMucGF1c2VGbGFnID0gIXRoaXMucGF1c2VGbGFnO1xuICAgICAgICB9XG4gICAgfVxufTsiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhXG57XG4gICAgY29uc3RydWN0b3IoIClcbiAgICB7XG4gICAgICAgIFxuICAgIH1cbiAgICBjcmVhdGVDYW1lcmExKCBkaWFtZXRlciwgc2l6ZXMgKSB7XG4gICAgICAgIC8vY2FtZXJhXG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKCA3NSwgc2l6ZXMud2lkdGggLyBzaXplcy5oZWlnaHQsIDAuMSwgMTAwMCApO1xuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoIGRpYW1ldGVyICsgNSwgZGlhbWV0ZXIgKyA1LCBkaWFtZXRlciArIDUgKTtcbiAgICAgICAgdGhpcy5jYW1lcmEubG9va0F0KCAwLCAwLCAwICk7XG5cbiAgICAgICAgLy9vdGhlciB2YXJpYWJsZXNcbiAgICAgICAgdGhpcy5mbGFnTmV3ID0gLTE7XG4gICAgICAgIHRoaXMuY2FtZXJhU3BlZWQgPSAwLjU7XG4gICAgICAgIHRoaXMuY2FtZXJhQW5ndWxhclNwZWVkID0gTWF0aC5QSS84LjA7XG4gICAgICAgIHRoaXMuc2Vjb25kc1BlckNsaXAgPSA3LjU7XG4gICAgICAgIHRoaXMuZGlhbWV0ZXIgPSBkaWFtZXRlcjtcbiAgICB9XG4gICAgcmVzaXplKCBzaXplcyApXG4gICAge1xuICAgICAgICB0aGlzLmNhbWVyYS5hc3BlY3QgPSBzaXplcy53aWR0aCAvIHNpemVzLmhlaWdodDtcbiAgICAgICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCggKTtcbiAgICB9XG4gICAgdGljazEoIGVsYXBzZWRUaW1lLCBkZWx0YVRpbWUgKSB7XG4gICAgICAgIHRoaXMubW92ZUNhbWVyYSggZWxhcHNlZFRpbWUsIGRlbHRhVGltZSApO1xuICAgIH1cbiAgICBtb3ZlQ2FtZXJhKCBlbGFwc2VkVGltZSwgZGVsdGFUaW1lIClcbiAgICB7XG4gICAgICAgIHZhciBzd2l0Y2hTdGF0ZW1lbnQgPSBNYXRoLmZsb29yKDYuMCArICggZWxhcHNlZFRpbWUgLyB0aGlzLnNlY29uZHNQZXJDbGlwICkgKSAlIDggO1xuICAgICAgICB2YXIgZmxhZyA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5mbGFnTmV3ICE9IHN3aXRjaFN0YXRlbWVudCkgZmxhZyA9IHRydWU7XG4gICAgICAgIHN3aXRjaCggc3dpdGNoU3RhdGVtZW50ICkge1xuICAgICAgICAvL2dsaXRjaHkgY2lyY2x1bGFyIG1vdGlvbiBhYm91dCB6LWF4aXMgd2l0aCByYWRpdXMgb2YgXCJkaWFtZXRlclwiXG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGlmKGZsYWcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoIDEuMiAqIHRoaXMuZGlhbWV0ZXIsIDAsIDQgKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5sb29rQXQoIDAsIDAsIDAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0aGV0YSA9IHRoaXMuY2FtZXJhQW5ndWxhclNwZWVkICogZGVsdGFUaW1lICsgTWF0aC5hdGFuKCB0aGlzLmNhbWVyYS5wb3NpdGlvbi55IC8gdGhpcy5jYW1lcmEucG9zaXRpb24ueCApO1xuICAgICAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueCA9IDEuMiAqIHRoaXMuZGlhbWV0ZXIgKiBNYXRoLmNvcyggdGhldGEgKTtcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSAxLjIgKiB0aGlzLmRpYW1ldGVyICogTWF0aC5zaW4oIHRoZXRhICk7XG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5sb29rQXQoIDAsIDAsIDAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvL3N0aWxsIGxvb2tpbmcgYXQgc2NlbmUgZnJvbSBhIHNpZGUgYW5kIHNsaWdodGx5IGFib3ZlXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnNldCggMS41ICogdGhpcy5kaWFtZXRlciwgMiwgMCApO1xuICAgICAgICAgICAgdGhpcy5jYW1lcmEubG9va0F0KCAwLCAwLCAwICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy9zdHJhaWdodCBsaW5lIHRocm91Z2ggdGhlIHNjZW5lIHBhcmFsbGVsIHRvIHotYXhpc1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBpZihmbGFnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24uc2V0KCAxLCAyLCAtMiAqIHRoaXMuZGlhbWV0ZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLmxvb2tBdCggMCwgMCwgMCApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiArPSA1LjAgKiB0aGlzLmNhbWVyYVNwZWVkICogZGVsdGFUaW1lO1xuICAgICAgICAgICAgdGhpcy5jYW1lcmEubG9va0F0KCAwLCAwLCAwICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy96b29taW5nIGF3YXkgZnJvbSB0aGUgY2VudGVyXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGlmKGZsYWcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoIDAuMCwgMS4wLCAwLjAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5sb29rQXQoIDAsIDAsIDAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0aGV0YSA9IHRoaXMuY2FtZXJhQW5ndWxhclNwZWVkICogZGVsdGFUaW1lICsgTWF0aC5hdGFuKCB0aGlzLmNhbWVyYS5wb3NpdGlvbi56IC8gdGhpcy5jYW1lcmEucG9zaXRpb24ueCApO1xuICAgICAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueCArPSA1LjAgKiB0aGlzLmNhbWVyYVNwZWVkICogZGVsdGFUaW1lO1xuICAgICAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiArPSA1LjAgKiB0aGlzLmNhbWVyYVNwZWVkICogZGVsdGFUaW1lO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vc2VtaSAtIGJpcmRzZXllIHZpZXcgbm90IGNoYW5naW5nXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnNldCggMCwgMC4zICogdGhpcy5kaWFtZXRlciwgMjMgKTtcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLmxvb2tBdCggMCwgMCwgMCApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vc3ByaWFsIG1vdGlvbiBhYm91dCB0aGUgeC1heGlzXG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIGlmKGZsYWcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoIDEuNSAqIHRoaXMuZGlhbWV0ZXIsIHRoaXMuZGlhbWV0ZXIsIDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLmxvb2tBdCggMCwgMCwgMCApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRoZXRhID0gdGhpcy5jYW1lcmFBbmd1bGFyU3BlZWQgKiBkZWx0YVRpbWUgKyBNYXRoLmF0YW4oIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgLyB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ICk7XG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi54IC09IHRoaXMuY2FtZXJhU3BlZWQgKiBkZWx0YVRpbWU7XG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gdGhpcy5kaWFtZXRlciAqIE1hdGguc2luKCB0aGV0YSApO1xuICAgICAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IHRoaXMuZGlhbWV0ZXIgKiBNYXRoLmNvcyggdGhldGEgKTtcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLmxvb2tBdCggMCwgMCwgMCApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vc2Nyb2xsaW5nXG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIGlmKGZsYWcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoIC0zLCB0aGlzLmRpYW1ldGVyLCAtMyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEubG9va0F0KCAwLCB0aGlzLmRpYW1ldGVyLCAwICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55IC09IDguMCAqIHRoaXMuY2FtZXJhU3BlZWQgKiBkZWx0YVRpbWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy9yZWFsIGNpcmNsdWxhciBtb3Rpb24gYWJvdXQgeS1heGlzIHdpdGggcmFkaXVzIG9mIFwidGhpcy5kaWFtZXRlclwiIC8vZml4XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgIGlmKGZsYWcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoIDEsIDIsIDAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5sb29rQXQoIDAsIDAsIDAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0aGV0YSA9IDMuMCAqIHRoaXMuY2FtZXJhQW5ndWxhclNwZWVkICogZGVsdGFUaW1lICsgTWF0aC5hdGFuMiggdGhpcy5jYW1lcmEucG9zaXRpb24ueiwgdGhpcy5jYW1lcmEucG9zaXRpb24ueCApO1xuICAgICAgICAgICAgdmFyIHJhZGl1c1haID0gTWF0aC5zcXJ0KHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggKiB0aGlzLmNhbWVyYS5wb3NpdGlvbi54ICsgdGhpcy5jYW1lcmEucG9zaXRpb24ueiAqIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnopO1xuICAgICAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IChyYWRpdXNYWiArICggNS4wICogZGVsdGFUaW1lICogdGhpcy5jYW1lcmFTcGVlZCApICkgKiBNYXRoLnNpbiggdGhldGEgKTtcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggPSAocmFkaXVzWFogKyAoIDUuMCAqIGRlbHRhVGltZSAqIHRoaXMuY2FtZXJhU3BlZWQgKSApICogTWF0aC5jb3MoIHRoZXRhICk7XG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ICs9IDQuMCAqIHRoaXMuY2FtZXJhU3BlZWQgKiBkZWx0YVRpbWU7XG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5sb29rQXQoIDAsIDAsIDAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmxhZ05ldyA9IHN3aXRjaFN0YXRlbWVudDtcbiAgICB9XG4gICAgY3JlYXRlQ2FtZXJhMiggc2l6ZXMgKVxuICAgIHtcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoIDc1LCBzaXplcy53aWR0aCAvIHNpemVzLmhlaWdodCwgMSwgMTAwICk7XG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnNldCggLTUwLCAtNTAsIC01MCApO1xuICAgICAgICB0aGlzLmNhbWVyYS5sb29rQXQoIDAsIDAsIDAgKTtcbiAgICB9XG4gICAgY3JlYXRlQ2FtZXJhMyggc2l6ZXMgKSB7XG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKCA3NSwgc2l6ZXMud2lkdGggLyBzaXplcy5oZWlnaHQsIDAuMSwgMTAwMCApO1xuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoIDAsIDAsIC0yMCApO1xuICAgICAgICB0aGlzLmNhbWVyYS5sb29rQXQoIDAsIDAsIDAgKTtcbiAgICB9XG4gICAgY3JlYXRlQ2FtZXJhVCggc2l6ZXMgKSB7XG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCBzaXplcy53aWR0aCAvIHNpemVzLmhlaWdodCwgMTEsIDEwMCk7XG4gICAgICAgIHRoaXMuY2FtZXJhLmxvb2tBdCgwLDAsMCk7XG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggPSAwO1xuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gMDtcbiAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IC0yMDtcbiAgICB9XG59OyIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWdodHNcbntcbiAgICBjb25zdHJ1Y3RvciggZGlhbWV0ZXIgKVxuICAgIHtcbiAgICAgICAgdGhpcy5kaWFtZXRlciA9IGRpYW1ldGVyXG4gICAgfVxuICAgIGxpZ2h0czEoIHNjZW5lIClcbiAgICB7XG4gICAgICAgIC8vc3VuXG4gICAgICAgIHZhciBzdW4gPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCggMHhmZmZmZmYsIDAuOSApO1xuICAgICAgICBzdW4ucG9zaXRpb24uc2V0KCAyICogdGhpcy5kaWFtZXRlciwgNSAqIHRoaXMuZGlhbWV0ZXIsIDAgKTtcbiAgICAgICAgc3VuLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgICAgICBzY2VuZS5hZGQoIHN1biApO1xuXG4gICAgICAgIC8vYW1iaWVudCBsaWdodFxuICAgICAgICB2YXIgYW1iaWVudCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoIDB4ZmZmZmZmLCAwLjMgKTtcbiAgICAgICAgc2NlbmUuYWRkKCBhbWJpZW50ICk7XG5cbiAgICAgICAgLy9oZW1cbiAgICAgICAgdmFyIGhlbSA9IG5ldyBUSFJFRS5IZW1pc3BoZXJlTGlnaHQoICdvcmFuZ2UnLCAncHVycGxlJyApO1xuICAgICAgICBoZW0ucm90YXRlWChNYXRoLlBJLzIpO1xuICAgICAgICBzY2VuZS5hZGQoIGhlbSApO1xuICAgIH1cbiAgICBsaWdodHMzKCBzY2VuZSApXG4gICAgeyAgICAgICBcbiAgICAgICAgLy9zdW4gMVxuICAgICAgICB2YXIgc3VuMSA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KCAweGZmZmZmZiwgMC42ICk7XG4gICAgICAgIHN1bjEucG9zaXRpb24uc2V0KCAyMCwgMCwgLTMwICk7XG4gICAgICAgIHN1bjEuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgICAgIHNjZW5lLmFkZCggc3VuMSApO1xuXG4gICAgICAgIC8vc3VuIDJcbiAgICAgICAgdmFyIHN1bjIgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCggMHhmZmZmZmYsIDAuNiApO1xuICAgICAgICBzdW4yLnBvc2l0aW9uLnNldCggLTIwLCAwLCAtMzAgKTtcbiAgICAgICAgc3VuMi5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICAgICAgc2NlbmUuYWRkKCBzdW4yICk7XG5cbiAgICAgICAgLy9oZW1cbiAgICAgICAgdmFyIGhlbSA9IG5ldyBUSFJFRS5IZW1pc3BoZXJlTGlnaHQoICdvcmFuZ2UnLCAncHVycGxlJywgMS4wICk7XG4gICAgICAgIHNjZW5lLmFkZCggaGVtICk7XG4gICAgfVxufTsiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcbmltcG9ydCB2ZXJ0ZXhGYWlyeSBmcm9tICcuLi9zaGFkZXJzL3ZlcnRleEZhaXJ5Lmdsc2wnXG5pbXBvcnQgZnJhZ21lbnRGYWlyeSBmcm9tICcuLi9zaGFkZXJzL2ZyYWdtZW50RmFpcnkuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXhDaXJjbGVzIGZyb20gJy4uL3NoYWRlcnMvdmVydGV4Q2lybGNlcy5nbHNsJ1xuaW1wb3J0IGZyYWdtZW50Q2lyY2xlcyBmcm9tICcuLi9zaGFkZXJzL2ZyYWdtZW50Q2lybGNlcy5nbHNsJ1xuaW1wb3J0IHZlcnRleFZvcm9ub2kgZnJvbSAnLi4vc2hhZGVycy92ZXJ0ZXhWb3Jvbm9pLmdsc2wnXG5pbXBvcnQgZnJhZ21lbnRWb3Jvbm9pIGZyb20gJy4uL3NoYWRlcnMvZnJhZ21lbnRWb3Jvbm9pLmdsc2wnXG5pbXBvcnQgQlZTIGZyb20gJy4uL3NoYWRlcnMvYmFja2dyb3VuZFZlcnQuZ2xzbCdcbmltcG9ydCBCRlMgZnJvbSAnLi4vc2hhZGVycy9iYWNrZ3JvdW5kRnJhZy5nbHNsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RzXG57XG4gICAgY29uc3RydWN0b3IoKSBcbiAgICB7XG5cbiAgICB9XG4gICAgLy9TQ0VORSAxXG4gICAgb2JqZWN0czEoIHNjZW5lIClcbiAgICB7XG4gICAgICAgIHZhciBib3hHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMSwgMSwgMSApO1xuICAgICAgICB2YXIgYm94TWF0ZXJpYWwxID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKCApO1xuICAgICAgICB0aGlzLmN1YmVzID0gWyBdO1xuICAgICAgICB2YXIgY29sb3IxID0gbmV3IFRIUkVFLkNvbG9yKCAxLjAsIDAuMCwgMC41ICk7IC8vaG90IHBpbmtcbiAgICAgICAgdmFyIGNvbG9yMiA9IG5ldyBUSFJFRS5Db2xvciggMC4wLCAwLjYsIDAuMiApOyAvL2ZvcmVzdCBncmVlblxuICAgICAgICB0aGlzLnNxdWFyZXNSYWRpdXMgPSAyNTtcbiAgICAgICAgZm9yKCB2YXIgaiA9IC0xICogdGhpcy5zcXVhcmVzUmFkaXVzOyBqIDwgdGhpcy5zcXVhcmVzUmFkaXVzOyBqICs9IDEgKSB7XG4gICAgICAgICAgICBmb3IoIHZhciBpID0gLTEgKiB0aGlzLnNxdWFyZXNSYWRpdXM7IGkgPCB0aGlzLnNxdWFyZXNSYWRpdXM7IGkgKz0gMSApIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IG5ldyBUSFJFRS5NZXNoKCBib3hHZW9tZXRyeSAsIGJveE1hdGVyaWFsMSApO1xuICAgICAgICAgICAgICAgIHRlbXAucG9zaXRpb24uc2V0KCBpLCAwLCBqICk7XG4gICAgICAgICAgICAgICAgdmFyIGlTY2FsZSA9ICggaSArIHRoaXMuc3F1YXJlc1JhZGl1cyApIC8gKCAyICogdGhpcy5zcXVhcmVzUmFkaXVzICk7IC8vMCB0byAxIHNjYWxlIGZvciBpIHZhbHVlXG4gICAgICAgICAgICAgICAgdmFyIGpTY2FsZSA9ICggaiArIHRoaXMuc3F1YXJlc1JhZGl1cyApIC8gKCAyICogdGhpcy5zcXVhcmVzUmFkaXVzICk7IC8vMCB0byAxIHNjYWxlIGZvciBqIHZhbHVlXG4gICAgICAgICAgICAgICAgdmFyIGlTY2FsZU5vcm0gPSBpU2NhbGUgLyAoIGpTY2FsZSApO1xuICAgICAgICAgICAgICAgIHZhciBqU2NhbGVOb3JtID0galNjYWxlIC8gKCBpU2NhbGUgKTtcbiAgICAgICAgICAgICAgICB0ZW1wLm1hdGVyaWFsLmNvbG9yLnIgPSBjb2xvcjEuciAqIGlTY2FsZU5vcm0gKyBjb2xvcjIuciAqIGpTY2FsZU5vcm07XG4gICAgICAgICAgICAgICAgdGVtcC5tYXRlcmlhbC5jb2xvci5nID0gY29sb3IxLmcgKiAoIGlTY2FsZU5vcm0vMS41ICkgKyBjb2xvcjIuZyAqICggalNjYWxlTm9ybSAqIDEuNSApO1xuICAgICAgICAgICAgICAgIHRlbXAubWF0ZXJpYWwuY29sb3IuYiA9IGNvbG9yMS5iICogaVNjYWxlTm9ybSArIGNvbG9yMi5iICogalNjYWxlTm9ybTtcbiAgICAgICAgICAgICAgICB0ZW1wLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRlbXAucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdWJlcy5wdXNoKCB0ZW1wICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICggbGV0IGluZGV4IGluIHRoaXMuY3ViZXMgKSB7IHNjZW5lLmFkZCggdGhpcy5jdWJlc1sgaW5kZXggXSApOyB9O1xuICAgIH1cbiAgICB0aWNrMSggQSwgZGVsdGFUaW1lICkge1xuICAgICAgICB0aGlzLmN1YmVzLmZvckVhY2goICggZSwgaSApID0+IHtcbiAgICAgICAgICAgIGUuc2NhbGUueSA9IEEuZGF0YVsgaSAlICggdGhpcy5zcXVhcmVzUmFkaXVzICogdGhpcy5zcXVhcmVzUmFkaXVzICkgXSAvIDEwICsgMTtcbiAgICAgICAgICAgIGUucm90YXRlWSggZGVsdGFUaW1lICogTWF0aC5QSS80ICogQS5kYXRhWyBpICUgKCB0aGlzLnNxdWFyZXNSYWRpdXMgKiB0aGlzLnNxdWFyZXNSYWRpdXMgKSBdICogMC4wNSApO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy9TQ0VORSAyXG4gICAgb2JqZWN0czIoIHNjZW5lLCBzaXplcywgQSApXG4gICAge1xuICAgICAgICB2YXIgcGxhbmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KCBzaXplcy53aWR0aC8yLCBzaXplcy5oZWlnaHQvMiApO1xuICAgICAgICB0aGlzLnBsYW5lTWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xuICAgICAgICAgICAgdmVydGV4U2hhZGVyOiB2ZXJ0ZXhGYWlyeSxcbiAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBmcmFnbWVudEZhaXJ5LFxuICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICB1VGltZToge3ZhbHVlOiAwLjB9LFxuICAgICAgICAgICAgICAgIHVSZXNZOiB7dmFsdWU6IHNpemVzLmhlaWdodH0sXG4gICAgICAgICAgICAgICAgdVJlc1g6IHt2YWx1ZTogc2l6ZXMud2lkdGh9LFxuICAgICAgICAgICAgICAgIHVGRlQ6IHsgdHlwZTogXCJmdjFcIiwgIHZhbHVlOiBBLmRhdGEgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucGxhbmVNYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucGxhbmUgPSBuZXcgVEhSRUUuTWVzaCggcGxhbmVHZW9tZXRyeSwgdGhpcy5wbGFuZU1hdGVyaWFsICk7XG4gICAgICAgIHRoaXMucGxhbmUubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKC0wLjcsIC0wLjcsIC0wLjcpKTtcbiAgICAgICAgc2NlbmUuYWRkKCB0aGlzLnBsYW5lICk7XG4gICAgfVxuICAgIHJlc2l6ZTIoIHNpemVzICkge1xuICAgICAgICB0aGlzLnBsYW5lTWF0ZXJpYWwudW5pZm9ybXMudVJlc1kudmFsdWUgPSBzaXplcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMucGxhbmVNYXRlcmlhbC51bmlmb3Jtcy51UmVzWC52YWx1ZSA9IHNpemVzLndpZHRoO1xuICAgIH1cbiAgICB0aWNrMiggQSwgZWxhcHNlZFRpbWUgKVxuICAgIHtcbiAgICAgICAgdGhpcy5wbGFuZU1hdGVyaWFsLnVuaWZvcm1zLnVUaW1lLnZhbHVlID0gZWxhcHNlZFRpbWU7XG4gICAgICAgIHRoaXMucGxhbmVNYXRlcmlhbC51bmlmb3Jtcy51RkZULnZhbHVlID0gQS5kYXRhO1xuICAgIH1cbiAgICAvL1NDRU5FIDNcbiAgICBvYmplY3RzMyggc2NlbmUgKVxuICAgIHtcbiAgICAgICAgdmFyIGJveEdlb21ldHJ5ID0gbmV3IFRIUkVFLk9jdGFoZWRyb25HZW9tZXRyeSggMSwgMCApO1xuICAgICAgICB2YXIgYm94TWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoICk7XG4gICAgICAgIHRoaXMuY3ViZXMgPSBbIF07XG4gICAgICAgIHZhciBjb2xvciA9IG5ldyBUSFJFRS5Db2xvciggMC4wLCAwLjYsIDAuMiApOyAvL2ZvcmVzdCBncmVlblxuICAgICAgICBmb3IoIGxldCBpID0gMDsgaSA8IDQwOyBpKysgKSB7XG4gICAgICAgICAgICBmb3IoIGxldCBqID0gMDsgaiA8IDIwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IG5ldyBUSFJFRS5NZXNoKCBib3hHZW9tZXRyeSAsIGJveE1hdGVyaWFsICk7XG4gICAgICAgICAgICAgICAgdGVtcC5wb3NpdGlvbi5zZXQoIGkgKyBNYXRoLnJhbmRvbSggKSAvIDIgLSAyMCwgaiArIE1hdGgucmFuZG9tKCApIC8gMiAtIDEwLCBNYXRoLnJhbmRvbSggKSAqIDE1IC0gMTUgKTtcbiAgICAgICAgICAgICAgICB0ZW1wLnJvdGF0ZVgoIE1hdGgucmFuZG9tKCApICk7XG4gICAgICAgICAgICAgICAgdGVtcC5yb3RhdGVZKCBNYXRoLnJhbmRvbSggKSApO1xuICAgICAgICAgICAgICAgIHRlbXAucm90YXRlWiggTWF0aC5yYW5kb20oICkgKTtcbiAgICAgICAgICAgICAgICB0ZW1wLm1hdGVyaWFsLmNvbG9yLnIgPSBjb2xvci5yICsgKCBNYXRoLnJhbmRvbSggKSAvIDgpIDtcbiAgICAgICAgICAgICAgICB0ZW1wLm1hdGVyaWFsLmNvbG9yLmcgPSBjb2xvci5nICsgKCBNYXRoLnJhbmRvbSggKSAvIDIpIC0gMC40IDtcbiAgICAgICAgICAgICAgICB0ZW1wLm1hdGVyaWFsLmNvbG9yLmIgPSBjb2xvci5iICsgKCBNYXRoLnJhbmRvbSggKSAvIDgpIDtcbiAgICAgICAgICAgICAgICB0ZW1wLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRlbXAucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdWJlcy5wdXNoKCBbIHRlbXAsIGZhbHNlLCB0ZW1wLnBvc2l0aW9uLnosIHRlbXAucG9zaXRpb24ueCwgdGVtcC5wb3NpdGlvbi55IF0gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKCBsZXQgaW5kZXggaW4gdGhpcy5jdWJlcyApIHsgc2NlbmUuYWRkKCB0aGlzLmN1YmVzWyBpbmRleCBdWyAwIF0gKTsgfTtcbiAgICB9XG4gICAgdGljazMoIEEsIGRlbHRhVGltZSApXG4gICAge1xuICAgICAgICB0aGlzLmN1YmVzLmZvckVhY2goICggZSwgaSApID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhVmFsdWUgPSAgQS5kYXRhWyBpICUgMTAyNCBdO1xuICAgICAgICAgICAgaWYgKCBlWyAxIF0gKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyQ3ViZSggZSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIGRhdGFWYWx1ZSA+IDEyMCApIHtcbiAgICAgICAgICAgICAgICBlWyAwIF0ucG9zaXRpb24ueiAtPSA3O1xuICAgICAgICAgICAgICAgIGVbIDEgXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlWyAwIF0ucm90YXRlWCggZGVsdGFUaW1lICogTWF0aC5QSS80ICogZGF0YVZhbHVlICogMC4xKTtcbiAgICAgICAgICAgIGVbIDAgXS5yb3RhdGVZKCBkZWx0YVRpbWUgKiBNYXRoLlBJLzYgKiBkYXRhVmFsdWUgKiAwLjEpO1xuICAgICAgICAgICAgZVsgMCBdLnJvdGF0ZVooIGRlbHRhVGltZSAqIE1hdGguUEkvMiAqIGRhdGFWYWx1ZSAqIDAuMSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0cmlnZ2VyQ3ViZSggZSApIHtcbiAgICAgICAgaWYoIGVbIDAgXS5wb3NpdGlvbi56ID49IGVbIDIgXSApIHtcbiAgICAgICAgICAgIGVbIDEgXSA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVbIDAgXS5wb3NpdGlvbi56ICs9IDAuMDE7XG4gICAgfVxuICAgIC8vU0NFTkUgNFxuICAgIG9iamVjdHM0KCBzY2VuZSwgc2l6ZXMsIEEgKVxuICAgIHtcbiAgICAgICAgdmFyIHBsYW5lR2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSggc2l6ZXMud2lkdGgvMiwgc2l6ZXMuaGVpZ2h0LzIgKTtcbiAgICAgICAgdGhpcy5wbGFuZU1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcbiAgICAgICAgICAgIHZlcnRleFNoYWRlcjogdmVydGV4Q2lyY2xlcyxcbiAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBmcmFnbWVudENpcmNsZXMsXG4gICAgICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgICAgICAgIHVUaW1lOiB7dmFsdWU6IDAuMH0sXG4gICAgICAgICAgICAgICAgdVJlc1k6IHt2YWx1ZTogc2l6ZXMuaGVpZ2h0fSxcbiAgICAgICAgICAgICAgICB1UmVzWDoge3ZhbHVlOiBzaXplcy53aWR0aH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wbGFuZU1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wbGFuZSA9IG5ldyBUSFJFRS5NZXNoKCBwbGFuZUdlb21ldHJ5LCB0aGlzLnBsYW5lTWF0ZXJpYWwgKTtcbiAgICAgICAgdGhpcy5wbGFuZS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoLTAuNywgLTAuNywgLTAuNykpO1xuICAgICAgICBzY2VuZS5hZGQoIHRoaXMucGxhbmUgKTtcbiAgICB9XG4gICAgdGljazQoIEEsIGVsYXBzZWRUaW1lIClcbiAgICB7XG4gICAgICAgIHRoaXMucGxhbmVNYXRlcmlhbC51bmlmb3Jtcy51VGltZS52YWx1ZSA9IGVsYXBzZWRUaW1lO1xuICAgIH1cbiAgICAvL1NDRU5FIDVcbiAgICBjcmVhdGVDaXJjbGUoIHIsIGQgKVxuICAgIHtcbiAgICAgICAgbGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkNpcmNsZUdlb21ldHJ5KCByLCBkICk7XG4gICAgICAgIHJldHVybiBnZW9tZXRyeTtcbiAgICB9XG4gICAgb2JqZWN0czUoIHNjZW5lIClcbiAgICB7XG4gICAgICAgIHRoaXMuY29sb3JzID0gWyAweGZmZmYwMCwgMHhmZjAwZmYsIDB4MDBmZmZmLCAweGZmMDAwMCwgMHgwMGZmMDAsIDB4MDAwMGZmLCAweGZmZmZmZl07XG4gICAgICAgIHRoaXMuY3ViZXMgPSBbIF07XG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IDQwOyBpKysgKSB7XG4gICAgICAgICAgICBsZXQgciA9IDI3IC0gTWF0aC5yYW5kb20oKSo1O1xuICAgICAgICAgICAgbGV0IGQgPSA2NCAtIE1hdGgucmFuZG9tKCkqMzI7XG4gICAgICAgICAgICBsZXQgZ2VvbWV0cnkgPSB0aGlzLmNyZWF0ZUNpcmNsZSggciwgIGQgKTtcbiAgICAgICAgICAgIGxldCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyB3aXJlZnJhbWU6IHRydWUsIHdpcmVmcmFtZUxpbmV3aWR0aDogMi4wLCBjb2xvcjogdGhpcy5jb2xvcnNbIGkgJSA3IF0gfSApO1xuICAgICAgICAgICAgbGV0IHRlbXAgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG4gICAgICAgICAgICB0ZW1wLmdlb21ldHJ5LnZlcnRpY2VzTmVlZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB0ZW1wLmdlb21ldHJ5LmR5bmFtaWMgPSB0cnVlO1xuICAgICAgICAgICAgc2NlbmUuYWRkKCB0ZW1wICk7XG4gICAgICAgICAgICB0aGlzLmN1YmVzLnB1c2goIFsgdGVtcCwgciwgZCBdICk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGljazUoIEEsIGRlbHRhVGltZSApXG4gICAge1xuICAgICAgICB0aGlzLmN1YmVzLmZvckVhY2goICggZSwgaSApID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhVmFsdWUgPSAgQS5kYXRhWyAoaSAqIDI1KSAlIDEwMjQgXTtcbiAgICAgICAgICAgIGVbMF0ucm90YXRlWCggZGVsdGFUaW1lICogTWF0aC5QSS80ICogZGF0YVZhbHVlICogMC4wMSApO1xuICAgICAgICAgICAgZVswXS5yb3RhdGVZKCBkZWx0YVRpbWUgKiBNYXRoLlBJLzYgKiBkYXRhVmFsdWUgKiAwLjAxICk7XG4gICAgICAgICAgICBlWzBdLnJvdGF0ZVooIGRlbHRhVGltZSAqIE1hdGguUEkvMiAqIGRhdGFWYWx1ZSAqIDAuMDEgKTtcbiAgICAgICAgICAgIGxldCByID0gKGRhdGFWYWx1ZSAtIGVbMV0gKSAqIGRlbHRhVGltZTtcbiAgICAgICAgICAgIGxldCBnZW9tZXRyeSA9IHRoaXMuY3JlYXRlQ2lyY2xlKCByICwgZVsyXSApO1xuICAgICAgICAgICAgbGV0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IHdpcmVmcmFtZTogdHJ1ZSwgd2lyZWZyYW1lTGluZXdpZHRoOiAyLjAsIGNvbG9yOiB0aGlzLmNvbG9yc1sgaSAlIDcgXSB9ICk7XG4gICAgICAgICAgICB0aGlzLmN1YmVzW2ldID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy9TQ0VORSA2XG4gICAgb2JqZWN0czYoIHNjZW5lLCBzaXplcywgQSApXG4gICAge1xuICAgICAgICB2YXIgcGxhbmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KCBzaXplcy53aWR0aC8yLCBzaXplcy5oZWlnaHQvMiApO1xuICAgICAgICB0aGlzLnBsYW5lTWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xuICAgICAgICAgICAgdmVydGV4U2hhZGVyOiB2ZXJ0ZXhWb3Jvbm9pLFxuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGZyYWdtZW50Vm9yb25vaSxcbiAgICAgICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICAgICAgdVRpbWU6IHt2YWx1ZTogMC4wfSxcbiAgICAgICAgICAgICAgICB1UmVzWToge3ZhbHVlOiBzaXplcy5oZWlnaHR9LFxuICAgICAgICAgICAgICAgIHVSZXNYOiB7dmFsdWU6IHNpemVzLndpZHRofSxcbiAgICAgICAgICAgICAgICB1RkZUOiB7IHR5cGU6IFwiZnYxXCIsICB2YWx1ZTogQS5kYXRhIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBsYW5lTWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnBsYW5lID0gbmV3IFRIUkVFLk1lc2goIHBsYW5lR2VvbWV0cnksIHRoaXMucGxhbmVNYXRlcmlhbCApO1xuICAgICAgICB0aGlzLnBsYW5lLmxvb2tBdChuZXcgVEhSRUUuVmVjdG9yMygtMC43LCAtMC43LCAtMC43KSk7XG4gICAgICAgIHNjZW5lLmFkZCggdGhpcy5wbGFuZSApO1xuICAgIH1cbiAgICB0aWNrNiggQSwgZWxhcHNlZFRpbWUgKVxuICAgIHtcbiAgICAgICAgdGhpcy5wbGFuZU1hdGVyaWFsLnVuaWZvcm1zLnVUaW1lLnZhbHVlID0gZWxhcHNlZFRpbWU7XG4gICAgICAgIHRoaXMucGxhbmVNYXRlcmlhbC51bmlmb3Jtcy51RkZULnZhbHVlID0gQS5kYXRhO1xuICAgIH1cbiAgICBvYmplY3RzVCggc2NlbmUsIHNpemVzLCBBIClcbiAgICB7XG4gICAgICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xuICAgICAgICAgICAgdmVydGV4U2hhZGVyOiBCVlMsXG4gICAgICAgICAgICBmcmFnbWVudFNoYWRlcjogQkZTLFxuICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICB1VGltZToge3ZhbHVlOiAwLjB9LFxuICAgICAgICAgICAgICAgIHVSZXNZOiB7dmFsdWU6IHNpemVzLmhlaWdodH0sXG4gICAgICAgICAgICAgICAgdVJlc1g6IHt2YWx1ZTogc2l6ZXMud2lkdGh9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5uYW1lID0gXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoNTApO1xuICAgICAgICB0aGlzLnBsYW5lID0gbmV3IFRIUkVFLk1lc2godGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XG4gICAgICAgIHNjZW5lLmFkZCggdGhpcy5wbGFuZSApXG4gICAgfVxuICAgIHJlc2l6ZVQoIHNpemVzIClcbiAgICB7XG4gICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudVJlc1kudmFsdWUgPSBzaXplcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudVJlc1gudmFsdWUgPSBzaXplcy53aWR0aDtcbiAgICB9XG4gICAgdGlja1QoIEEsIGRlbHRhVGltZSwgZWxhcHNlZFRpbWUgKVxuICAgIHtcbiAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy51VGltZS52YWx1ZSA9IGVsYXBzZWRUaW1lO1xuICAgIH1cbn07IiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyXG57XG4gICAgY29uc3RydWN0b3IoIGNhbnZhcywgc2l6ZXMgKVxuICAgIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgICAgICAgIGNhbnZhczogY2FudmFzLFxuICAgICAgICAgICAgYWxwaGE6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUoIHNpemVzLndpZHRoLCBzaXplcy5oZWlnaHQgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKCBNYXRoLm1pbiggd2luZG93LmRldmljZVBpeGVsUmF0aW8sIDIgKSk7IC8vcmVjb25zaWRlciBmb3IgcGVyZm9ybWFuY2UgaXNzdWVzXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJBbHBoYSgweDAwMDAwMCwgMCk7XG4gICAgfVxuICAgIHJlc2l6ZSggc2l6ZXMgKVxuICAgIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKCBzaXplcy53aWR0aCwgc2l6ZXMuaGVpZ2h0ICk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyggTWF0aC5taW4oIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLCAyICkpOyAvL3JlY29uc2lkZXIgZm9yIHBlcmZvcm1hbmNlIGlzc3Vlc1xuICAgIH1cbiAgICByZW5kZXIoIHNjZW5lLCBjYW1lcmEgKVxuICAgIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBjYW1lcmEgKTtcbiAgICB9XG59OyIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuaW1wb3J0IE9iamVjdHMgZnJvbSAnLi4vQ29tcG9uZW50cy9PYmplY3RzLmpzJ1xuaW1wb3J0IENhbWVyYSBmcm9tICcuLi9Db21wb25lbnRzL0NhbWVyYS5qcydcbmltcG9ydCBMaWdodHMgZnJvbSAnLi4vQ29tcG9uZW50cy9MaWdodHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNjZW5lMVxue1xuICAgIGNvbnN0cnVjdG9yKCBzaXplcywgQSApXG4gICAge1xuICAgICAgICAvL21lbWJlciB2YXJpYWJsZXNcbiAgICAgICAgdGhpcy5kaWFtZXRlciA9IDMwO1xuICAgICAgICAvL2NyZWF0ZSBzY2VuZVxuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCApO1xuICAgICAgICB0aGlzLnNjZW5lLmJhY2tncm91bmQgPSBuZXcgVEhSRUUuQ29sb3IoIDAuMSwgMC4xLCAwLjEgKTtcbiAgICAgICAgLy9jcmVhdGUgb2JqZWN0c1xuICAgICAgICB0aGlzLk8gPSBuZXcgT2JqZWN0cyggKTtcbiAgICAgICAgdGhpcy5PLm9iamVjdHMxKCB0aGlzLnNjZW5lICk7XG4gICAgICAgIC8vY3JlYXRlIGNhbWVyYVxuICAgICAgICB0aGlzLkMgPSBuZXcgQ2FtZXJhKCApO1xuICAgICAgICB0aGlzLkMuY3JlYXRlQ2FtZXJhMSggdGhpcy5kaWFtZXRlciwgc2l6ZXMgKTtcbiAgICAgICAgLy9hZGQgbGlnaHRzXG4gICAgICAgIHRoaXMuTCA9IG5ldyBMaWdodHMoIHRoaXMuZGlhbWV0ZXIgKTtcbiAgICAgICAgdGhpcy5MLmxpZ2h0czEoIHRoaXMuc2NlbmUgKTtcbiAgICB9XG4gICAgcmVzaXplKCBzaXplcyApXG4gICAge1xuICAgICAgICAvLyBVcGRhdGUgY2FtZXJhXG4gICAgICAgIHRoaXMuQy5yZXNpemUoIHNpemVzICk7XG4gICAgfVxuICAgIHRpY2soIGRlbHRhVGltZSwgZWxhcHNlZFRpbWUsIEEgKVxuICAgIHtcbiAgICAgICAgLy91cGRhdGUgY2FtZXJhIHBvc2l0aW9uXG4gICAgICAgIHRoaXMuQy50aWNrMSggZWxhcHNlZFRpbWUsIGRlbHRhVGltZSApO1xuICAgICAgICAvL2N1YmVzXG4gICAgICAgIHRoaXMuTy50aWNrMSggQSwgZGVsdGFUaW1lICk7XG4gICAgfVxufTsiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcbmltcG9ydCBPYmplY3RzIGZyb20gJy4uL0NvbXBvbmVudHMvT2JqZWN0cy5qcydcbmltcG9ydCBDYW1lcmEgZnJvbSAnLi4vQ29tcG9uZW50cy9DYW1lcmEuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNjZW5lMlxue1xuICAgIGNvbnN0cnVjdG9yKCBzaXplcywgQSApXG4gICAge1xuICAgICAgICAvL2NyZWF0ZSBzY2VuZVxuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCApO1xuICAgICAgICB0aGlzLnNjZW5lLmJhY2tncm91bmQgPSBuZXcgVEhSRUUuQ29sb3IoIDAuNSwgMC41LCAwLjUgKTtcbiAgICAgICAgLy9jcmVhdGUgb2JqZWN0c1xuICAgICAgICB0aGlzLk8gPSBuZXcgT2JqZWN0cyggKTtcbiAgICAgICAgdGhpcy5PLm9iamVjdHMyKCB0aGlzLnNjZW5lLCBzaXplcywgQSApO1xuICAgICAgICAvL2NyZWF0ZSBjYW1lcmFcbiAgICAgICAgdGhpcy5DID0gbmV3IENhbWVyYSggKTtcbiAgICAgICAgdGhpcy5DLmNyZWF0ZUNhbWVyYTIoIHNpemVzICk7XG4gICAgfVxuICAgIHJlc2l6ZSggc2l6ZXMgKVxuICAgIHtcbiAgICAgICAgLy8gVXBkYXRlIGNhbWVyYVxuICAgICAgICB0aGlzLkMucmVzaXplKCBzaXplcyApO1xuICAgICAgICAvLyBVcGRhdGUgdW5pZm9ybXNcbiAgICAgICAgdGhpcy5PLnJlc2l6ZTIoIHNpemVzICk7XG4gICAgfVxuICAgIHRpY2soIGRlbHRhVGltZSwgZWxhcHNlZFRpbWUsIEEgKVxuICAgIHtcbiAgICAgICAgLy8gdW5pZm9ybXNcbiAgICAgICAgdGhpcy5PLnRpY2syKCBBLCBlbGFwc2VkVGltZSApO1xuICAgIH1cbn07IiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5pbXBvcnQgT2JqZWN0cyBmcm9tICcuLi9Db21wb25lbnRzL09iamVjdHMuanMnXG5pbXBvcnQgQ2FtZXJhIGZyb20gJy4uL0NvbXBvbmVudHMvQ2FtZXJhLmpzJ1xuaW1wb3J0IExpZ2h0cyBmcm9tICcuLi9Db21wb25lbnRzL0xpZ2h0cy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2NlbmUzXG57XG4gICAgY29uc3RydWN0b3IoIHNpemVzLCBBIClcbiAgICB7XG4gICAgICAgIC8vbWVtYmVyIHZhcmlhYmxlc1xuXG4gICAgICAgIC8vY3JlYXRlIHNjZW5lXG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoICk7XG4gICAgICAgIHRoaXMuc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBUSFJFRS5Db2xvciggMC4wLCAwLjAsIDAuMDUgKTtcbiAgICAgICAgLy8gdGhpcy5zY2VuZS5iYWNrZ3JvdW5kID0gbmV3IFRIUkVFLkNvbG9yKCAxLjAsIDAuNSwgMC4wNSApO1xuICAgICAgICAvL2NyZWF0ZSBvYmplY3RzXG4gICAgICAgIHRoaXMuTyA9IG5ldyBPYmplY3RzKCApO1xuICAgICAgICB0aGlzLk8ub2JqZWN0czMoIHRoaXMuc2NlbmUgKTtcbiAgICAgICAgLy9jcmVhdGUgY2FtZXJhXG4gICAgICAgIHRoaXMuQyA9IG5ldyBDYW1lcmEoICk7XG4gICAgICAgIHRoaXMuQy5jcmVhdGVDYW1lcmEzKCBzaXplcyApO1xuICAgICAgICAvL2FkZCBsaWdodHNcbiAgICAgICAgdGhpcy5MID0gbmV3IExpZ2h0cyggdGhpcy5kaWFtZXRlciApO1xuICAgICAgICB0aGlzLkwubGlnaHRzMyggdGhpcy5zY2VuZSApO1xuICAgIH1cbiAgICByZXNpemUoIHNpemVzIClcbiAgICB7XG4gICAgICAgIC8vIFVwZGF0ZSBjYW1lcmFcbiAgICAgICAgdGhpcy5DLnJlc2l6ZSggc2l6ZXMgKTtcbiAgICB9XG4gICAgdGljayggZGVsdGFUaW1lLCBlbGFwc2VkVGltZSwgQSApXG4gICAge1xuICAgICAgICAvL2N1YmVzXG4gICAgICAgIHRoaXMuTy50aWNrMyggQSwgZGVsdGFUaW1lICk7XG4gICAgfVxufTsiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcbmltcG9ydCBPYmplY3RzIGZyb20gJy4uL0NvbXBvbmVudHMvT2JqZWN0cy5qcydcbmltcG9ydCBDYW1lcmEgZnJvbSAnLi4vQ29tcG9uZW50cy9DYW1lcmEuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNjZW5lNFxue1xuICAgIGNvbnN0cnVjdG9yKCBzaXplcywgQSApXG4gICAge1xuICAgICAgICAvL2NyZWF0ZSBzY2VuZVxuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCApO1xuICAgICAgICB0aGlzLnNjZW5lLmJhY2tncm91bmQgPSBuZXcgVEhSRUUuQ29sb3IoIDAuNSwgMC41LCAwLjUgKTtcbiAgICAgICAgLy9jcmVhdGUgb2JqZWN0c1xuICAgICAgICB0aGlzLk8gPSBuZXcgT2JqZWN0cyggKTtcbiAgICAgICAgdGhpcy5PLm9iamVjdHM0KCB0aGlzLnNjZW5lLCBzaXplcywgQSApO1xuICAgICAgICAvL2NyZWF0ZSBjYW1lcmFcbiAgICAgICAgdGhpcy5DID0gbmV3IENhbWVyYSggKTtcbiAgICAgICAgdGhpcy5DLmNyZWF0ZUNhbWVyYTIoIHNpemVzICk7XG4gICAgfVxuICAgIHJlc2l6ZSggc2l6ZXMgKVxuICAgIHtcbiAgICAgICAgLy8gVXBkYXRlIGNhbWVyYVxuICAgICAgICB0aGlzLkMucmVzaXplKCBzaXplcyApO1xuICAgICAgICAvLyBVcGRhdGUgdW5pZm9ybXNcbiAgICAgICAgdGhpcy5PLnJlc2l6ZTIoIHNpemVzICk7XG4gICAgfVxuICAgIHRpY2soIGRlbHRhVGltZSwgZWxhcHNlZFRpbWUsIEEgKVxuICAgIHtcbiAgICAgICAgLy8gdW5pZm9ybXNcbiAgICAgICAgdGhpcy5PLnRpY2s0KCBBLCBlbGFwc2VkVGltZSApO1xuICAgIH1cbn07IiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5pbXBvcnQgT2JqZWN0cyBmcm9tICcuLi9Db21wb25lbnRzL09iamVjdHMuanMnXG5pbXBvcnQgQ2FtZXJhIGZyb20gJy4uL0NvbXBvbmVudHMvQ2FtZXJhLmpzJ1xuaW1wb3J0IExpZ2h0cyBmcm9tICcuLi9Db21wb25lbnRzL0xpZ2h0cy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2NlbmU1XG57XG4gICAgY29uc3RydWN0b3IoIHNpemVzLCBBIClcbiAgICB7XG4gICAgICAgIC8vbWVtYmVyIHZhcmlhYmxlc1xuXG4gICAgICAgIC8vY3JlYXRlIHNjZW5lXG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoICk7XG4gICAgICAgIHRoaXMuc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBUSFJFRS5Db2xvciggMC41LCAwLjUsIDAuNSApO1xuICAgICAgICAvL2NyZWF0ZSBvYmplY3RzXG4gICAgICAgIHRoaXMuTyA9IG5ldyBPYmplY3RzKCApO1xuICAgICAgICB0aGlzLk8ub2JqZWN0czUoIHRoaXMuc2NlbmUgKTtcbiAgICAgICAgLy9jcmVhdGUgY2FtZXJhXG4gICAgICAgIHRoaXMuQyA9IG5ldyBDYW1lcmEoICk7XG4gICAgICAgIHRoaXMuQy5jcmVhdGVDYW1lcmEzKCBzaXplcyApO1xuICAgICAgICAvL2FkZCBsaWdodHNcbiAgICAgICAgdGhpcy5MID0gbmV3IExpZ2h0cyggdGhpcy5kaWFtZXRlciApO1xuICAgICAgICB0aGlzLkwubGlnaHRzMyggdGhpcy5zY2VuZSApO1xuICAgIH1cbiAgICByZXNpemUoIHNpemVzIClcbiAgICB7XG4gICAgICAgIC8vIFVwZGF0ZSBjYW1lcmFcbiAgICAgICAgdGhpcy5DLnJlc2l6ZSggc2l6ZXMgKTtcbiAgICB9XG4gICAgdGljayggZGVsdGFUaW1lLCBlbGFwc2VkVGltZSwgQSApXG4gICAge1xuICAgICAgICB0aGlzLk8udGljazUoIEEsIGRlbHRhVGltZSApO1xuICAgIH1cbn07IiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5pbXBvcnQgT2JqZWN0cyBmcm9tICcuLi9Db21wb25lbnRzL09iamVjdHMuanMnXG5pbXBvcnQgQ2FtZXJhIGZyb20gJy4uL0NvbXBvbmVudHMvQ2FtZXJhLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzY2VuZTZcbntcbiAgICBjb25zdHJ1Y3Rvciggc2l6ZXMsIEEgKVxuICAgIHtcbiAgICAgICAgLy9jcmVhdGUgc2NlbmVcbiAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSggKTtcbiAgICAgICAgdGhpcy5zY2VuZS5iYWNrZ3JvdW5kID0gbmV3IFRIUkVFLkNvbG9yKCAwLjUsIDAuNSwgMC41ICk7XG4gICAgICAgIC8vY3JlYXRlIG9iamVjdHNcbiAgICAgICAgdGhpcy5PID0gbmV3IE9iamVjdHMoICk7XG4gICAgICAgIHRoaXMuTy5vYmplY3RzNiggdGhpcy5zY2VuZSwgc2l6ZXMsIEEgKTtcbiAgICAgICAgLy9jcmVhdGUgY2FtZXJhXG4gICAgICAgIHRoaXMuQyA9IG5ldyBDYW1lcmEoICk7XG4gICAgICAgIHRoaXMuQy5jcmVhdGVDYW1lcmEyKCBzaXplcyApO1xuICAgIH1cbiAgICByZXNpemUoIHNpemVzIClcbiAgICB7XG4gICAgICAgIC8vIFVwZGF0ZSBjYW1lcmFcbiAgICAgICAgdGhpcy5DLnJlc2l6ZSggc2l6ZXMgKTtcbiAgICAgICAgLy8gVXBkYXRlIHVuaWZvcm1zXG4gICAgICAgIHRoaXMuTy5yZXNpemUyKCBzaXplcyApO1xuICAgIH1cbiAgICB0aWNrKCBkZWx0YVRpbWUsIGVsYXBzZWRUaW1lLCBBIClcbiAgICB7XG4gICAgICAgIC8vIHVuaWZvcm1zXG4gICAgICAgIHRoaXMuTy50aWNrNiggQSwgZWxhcHNlZFRpbWUgKTtcbiAgICB9XG59OyIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuaW1wb3J0IE9iamVjdHMgZnJvbSAnLi4vQ29tcG9uZW50cy9PYmplY3RzLmpzJ1xuaW1wb3J0IENhbWVyYSBmcm9tICcuLi9Db21wb25lbnRzL0NhbWVyYS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGl0bGVzY2VuZVxue1xuICAgIGNvbnN0cnVjdG9yKCBzaXplcywgQSApXG4gICAge1xuICAgICAgICAvL2NyZWF0ZSBzY2VuZVxuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCApO1xuICAgICAgICB0aGlzLnNjZW5lLmJhY2tncm91bmQgPSBuZXcgVEhSRUUuQ29sb3IoIDAuOCwgMC44LCAwLjggKTtcbiAgICAgICAgLy9jcmVhdGUgb2JqZWN0c1xuICAgICAgICB0aGlzLk8gPSBuZXcgT2JqZWN0cyggKTtcbiAgICAgICAgdGhpcy5PLm9iamVjdHNUKCB0aGlzLnNjZW5lLCBzaXplcywgQSApO1xuICAgICAgICAvL2NyZWF0ZSBjYW1lcmFcbiAgICAgICAgdGhpcy5DID0gbmV3IENhbWVyYSggKTtcbiAgICAgICAgdGhpcy5DLmNyZWF0ZUNhbWVyYVQoIHNpemVzICk7XG4gICAgfVxuICAgIHJlc2l6ZSggc2l6ZXMgKVxuICAgIHtcbiAgICAgICAgLy8gVXBkYXRlIGNhbWVyYVxuICAgICAgICB0aGlzLkMucmVzaXplKCBzaXplcyApO1xuICAgICAgICAvLyBVcGRhdGUgdW5pZm9ybXNcbiAgICAgICAgdGhpcy5PLnJlc2l6ZVQoIHNpemVzICk7XG4gICAgfVxuICAgIHRpY2soIGRlbHRhVGltZSwgZWxhcHNlZFRpbWUsIEEgKVxuICAgIHtcbiAgICAgICAgLy8gdW5pZm9ybXNcbiAgICAgICAgdGhpcy5PLnRpY2tUKCBBLCBkZWx0YVRpbWUsIGVsYXBzZWRUaW1lICk7XG4gICAgfVxufTsiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc2tlbGV0b24uY3NzJztcbmltcG9ydCAnLi9ub3JtYWxpemUuY3NzJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuaW1wb3J0IHNvbmcxIGZyb20gJy4vYXNzZXRzL3NvbmcxLm1wMydcbmltcG9ydCBzb25nMiBmcm9tICcuL2Fzc2V0cy9zb25nMi5tcDMnXG5pbXBvcnQgc29uZzMgZnJvbSAnLi9hc3NldHMvc29uZzMubXAzJ1xuaW1wb3J0IHNvbmc0IGZyb20gJy4vYXNzZXRzL3Nvbmc0Lm1wMydcbmltcG9ydCBzb25nNSBmcm9tICcuL2Fzc2V0cy9zb25nNS5tcDMnXG5pbXBvcnQgc29uZzYgZnJvbSAnLi9hc3NldHMvc29uZzYubXAzJ1xuaW1wb3J0IHNvbmc3IGZyb20gJy4vYXNzZXRzL3Nvbmc3Lm1wMydcbmltcG9ydCBzb25nOCBmcm9tICcuL2Fzc2V0cy9zb25nOC5tcDMnXG5pbXBvcnQgc29uZzkgZnJvbSAnLi9hc3NldHMvc29uZzkubXAzJ1xuaW1wb3J0IHNvbmcxMCBmcm9tICcuL2Fzc2V0cy9zb25nMTAubXAzJ1xuaW1wb3J0IGdpdEljb24gZnJvbSAnLi9hc3NldHMvaWNvbnMvZ2l0aHViLWxvZ28uc3ZnJ1xuaW1wb3J0IGluc3RhSWNvbiBmcm9tICcuL2Fzc2V0cy9pY29ucy9pbnN0YS1sb2dvLnN2ZydcbmltcG9ydCBzb3VuZEljb24gZnJvbSAnLi9hc3NldHMvaWNvbnMvc291bmRjbG91ZC1iYWNrdXAuc3ZnJ1xuaW1wb3J0IGxpbmtlZEljb24gZnJvbSAnLi9hc3NldHMvaWNvbnMvbGlua2VkLWxvZ28uc3ZnJ1xuaW1wb3J0IHR3aXR0ZXJJY29uIGZyb20gJy4vYXNzZXRzL2ljb25zL3R3aXR0ZXItbG9nby5zdmcnXG5pbXBvcnQgc3BvdGlmeUljb24gZnJvbSAnLi9hc3NldHMvaWNvbnMvc3BvdGlmeS1sb2dvLnN2ZydcbmltcG9ydCBBdWRpb0luc3RhbmNlIGZyb20gJy4vQ29tcG9uZW50cy9BdWRpby5qcydcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL0NvbXBvbmVudHMvUmVuZGVyZXIuanMnIFxuaW1wb3J0IHNjZW5lMSBmcm9tICcuL1NjZW5lcy9zY2VuZTEuanMnXG5pbXBvcnQgc2NlbmUyIGZyb20gJy4vU2NlbmVzL3NjZW5lMi5qcydcbmltcG9ydCBzY2VuZTMgZnJvbSAnLi9TY2VuZXMvc2NlbmUzLmpzJ1xuaW1wb3J0IHNjZW5lNCBmcm9tICcuL1NjZW5lcy9zY2VuZTQuanMnXG5pbXBvcnQgc2NlbmU1IGZyb20gJy4vU2NlbmVzL3NjZW5lNS5qcydcbmltcG9ydCBzY2VuZTYgZnJvbSAnLi9TY2VuZXMvc2NlbmU2LmpzJ1xuaW1wb3J0IHRpdGxlc2NlbmUgZnJvbSAnLi9TY2VuZXMvdGl0bGVzY2VuZS5qcydcblxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rKHVybCwgdHh0LCBpY29uKSB7XG4gICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluay5ocmVmID0gdXJsO1xuICAgIGxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgaWYgKHR4dCAhPSBudWxsKSBsaW5rLmlubmVyVGV4dCA9IHR4dDtcbiAgICBlbHNlIHtcbiAgICAgIHZhciBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBpY29uLnNyYyA9IGljb247XG4gICAgICBsaW5rLmFwcGVuZENoaWxkKGljb24pO1xuICAgIH1cbiAgICByZXR1cm4gbGlua1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gICAgLypcbiAgICAgKiBQYWdlIFNldHVwXG4gICAgICovXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG5cbiAgICB2YXIgdGl0bGVfc2l6ZXMgPSB7XG4gICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIH07XG5cbiAgICB2YXIgc2l6ZXMgPSB7XG4gICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIH07XG5cbiAgICAvL2dsc2wgYmFja2dyb3VuZFxuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xuXG4gICAgLy9zZWN0aW9uc1xuICAgIHZhciBpbnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcbiAgICB2YXIgbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXG4gICAgLy90cyAtIGNvbW1lbnQgdGhpcyBvdXQgd2hlbiByZWFkeVxuICAgIHZhciB0c0NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XG5cbiAgICAvL21lXG4gICAgLy8gbGlua3MgLSBtZVxuICAgIHZhciBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG4gICAgLy8gUmVzdW1lIGxpbmtcbiAgICB2YXIgZ2l0aHViTGluayA9IGNyZWF0ZUxpbmsoICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFRaDdRT2xaRkZMWXhaZ0pxTTg1SzRIa3ZuYkd0Z3FxVC92aWV3P3VzcD1zaGFyaW5nJywgJ1Jlc3VtZScsIG51bGwgKTtcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcbiAgICAvLyBHaXRIdWIgbGlua1xuICAgIHZhciBnaXRodWJMaW5rID0gY3JlYXRlTGluayggJ2h0dHBzOi8vZ2l0aHViLmNvbS9zdWNjY3VsZW50JywgbnVsbCwgZ2l0SWNvbiApO1xuICAgIGxpbmtzLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuICAgIC8vIExpbmtlZEluXG4gICAgdmFyIGxpbmtlZEluTGluayA9IGNyZWF0ZUxpbmsoICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYWRhLXRveWRlbWlyLycsIG51bGwsIGxpbmtlZEljb24pO1xuICAgIGxpbmtzLmFwcGVuZENoaWxkKGxpbmtlZEluTGluayk7XG4gICAgLy8gSW5zdGFncmFtIGxpbmtcbiAgICB2YXIgaW5zdGFncmFtTGluayA9IGNyZWF0ZUxpbmsoICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3NpbXVsYWNydW1fLl8vJywgbnVsbCwgaW5zdGFJY29uKTtcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChpbnN0YWdyYW1MaW5rKTtcbiAgICAvLyBUd2l0dGVyIGxpbmtcbiAgICB2YXIgdHdpdHRlckxpbmsgPSBjcmVhdGVMaW5rKCAnaHR0cHM6Ly90d2l0dGVyLmNvbS9fX3NpbXVsYWNydW0nLCBudWxsLCB0d2l0dGVySWNvbiApO1xuICAgIGxpbmtzLmFwcGVuZENoaWxkKHR3aXR0ZXJMaW5rKTtcbiAgICAvLyBTb3VuZENsb3VkIGxpbmtcbiAgICB2YXIgc291bmRjbG91ZExpbmsgPSBjcmVhdGVMaW5rKCAnaHR0cHM6Ly9zb3VuZGNsb3VkLmNvbS9tdXNpYy1zaW11bGFjcnVtJywgbnVsbCwgc291bmRJY29uICk7XG4gICAgbGlua3MuYXBwZW5kQ2hpbGQoc291bmRjbG91ZExpbmspO1xuICAgIC8vIFNwb3RpZnkgbGlua1xuICAgIHZhciBzcG90aWZ5TGluayA9IGNyZWF0ZUxpbmsoICdodHRwczovL29wZW4uc3BvdGlmeS5jb20vdXNlci8xMjczNjA3MTkwP3NpPTQ4YTA0YWM0ZDdkMDQ3ZGEnLCBudWxsLCBzcG90aWZ5SWNvbiApO1xuICAgIGxpbmtzLmFwcGVuZENoaWxkKHNwb3RpZnlMaW5rKTtcbiAgICAvLyBhYm91dCAtIG1lXG4gICAgdmFyIGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3AnICk7XG4gICAgYWJvdXQuaW5uZXJUZXh0ID0gXCJBZGEgVG95ZGVtaXJcIjtcblxuICAgIC8vaW5zdFxuICAgIHZhciBkZXNjMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdwJyApO1xuICAgIGRlc2MxLmlubmVyVGV4dCA9ICd1c2UgU1BBQ0UgdG8gcGxheS9wYXVzZSBtdXNpY1xcbic7XG4gICAgdmFyIGRlc2MyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3AnICk7XG4gICAgZGVzYzIuaW5uZXJUZXh0ID0gJ3VzZSBVUCBhbmQgRE9XTiB0byBjeWNsZSB0cmFja3NcXG4nO1xuICAgIHZhciBkZXNjMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdwJyApO1xuICAgIGRlc2MzLmlubmVyVGV4dCA9ICd1c2UgUklHSFQgYW5kIExFRlQgdG8gY3ljbGUgdmlzdWFsc1xcbic7XG4gICAgaW5zdC5hcHBlbmRDaGlsZChkZXNjMSk7XG4gICAgaW5zdC5hcHBlbmRDaGlsZChkZXNjMik7XG4gICAgaW5zdC5hcHBlbmRDaGlsZChkZXNjMyk7XG5cbiAgICAvL2NsYXNzZXNcbiAgICBjYW52YXMuY2xhc3NMaXN0LmFkZCggJ3dlYmdsJyApO1xuICAgIGNhbnZhcy5jbGFzc0xpc3QuYWRkKCAnQVYnICk7XG4gICAgdHNDYW52YXMuY2xhc3NMaXN0LmFkZCggJ3dlYmdsJyApO1xuICAgIHRzQ2FudmFzLmNsYXNzTGlzdC5hZGQoICd0c0NhbnZhcycgKTtcbiAgICBpbnN0LmNsYXNzTGlzdC5hZGQoICdib3gnICk7XG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCggJ2JveCcgKTtcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCAnaGlkZGVuJyApO1xuICAgIGxpbmtzLmNsYXNzTGlzdC5hZGQoICdsaW5rcycgKTtcblxuICAgIC8vYXBwZW5kIHNlY3Rpb25zXG4gICAgZWxlbWVudC5hcHBlbmQoIGNhbnZhcyApO1xuICAgIGVsZW1lbnQuYXBwZW5kKCB0c0NhbnZhcyApO1xuICAgIGVsZW1lbnQuYXBwZW5kKCBpbnN0ICk7XG4gICAgZWxlbWVudC5hcHBlbmQoIGFib3V0ICk7XG4gICAgZWxlbWVudC5hcHBlbmQoIGxpbmtzICk7XG5cbiAgICBsZXQgQSA9IG5ldyBBdWRpb0luc3RhbmNlKCAyMDQ4ICk7XG4gICAgbGV0IHNvbmdzID0gWyBzb25nMSwgc29uZzIsIHNvbmczLCBzb25nNCwgc29uZzUsIHNvbmc2LCBzb25nNywgc29uZzgsIHNvbmc5LCBzb25nMTAgXTtcbiAgICBsZXQgY3VyU29uZ0luZGV4ID0gMDtcbiAgICBBLmxvYWRUcmFjayggc29uZ3NbY3VyU29uZ0luZGV4XSApO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoIEEuYXVkaW8gKTtcblxuICAgIGxldCBzY2VuMSA9IG5ldyBzY2VuZTEoIHNpemVzLCBBICk7XG4gICAgbGV0IHNjZW4yID0gbmV3IHNjZW5lMiggc2l6ZXMsIEEgKTtcbiAgICBsZXQgc2NlbjMgPSBuZXcgc2NlbmUzKCBzaXplcywgQSApO1xuICAgIGxldCBzY2VuNiA9IG5ldyBzY2VuZTYoIHNpemVzLCBBICk7XG4gICAgbGV0IHRpdGMgPSBuZXcgdGl0bGVzY2VuZSggdGl0bGVfc2l6ZXMsIEEgKTtcbiAgICBsZXQgc2NlbmVzID0gWyBzY2VuMSwgc2NlbjIsIHNjZW4zLCBzY2VuNiBdO1xuICAgIGxldCBjdXJTY2VuZUluZGV4ID0gMDtcbiAgICBsZXQgY3VyU2NlbmUgPSBzY2VuZXNbIGN1clNjZW5lSW5kZXggXTtcblxuICAgIGxldCBSID0gbmV3IFJlbmRlcmVyKCBjYW52YXMsIHNpemVzICk7XG4gICAgbGV0IFIyID0gbmV3IFJlbmRlcmVyKCB0c0NhbnZhcywgdGl0bGVfc2l6ZXMgKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgKCApID0+XG4gICAge1xuICAgICAgICB0aXRsZV9zaXplcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aXRsZV9zaXplcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHNpemVzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHNpemVzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgY3VyU2NlbmUucmVzaXplKCBzaXplcyApO1xuICAgICAgICB0aXRjLnJlc2l6ZSggdGl0bGVfc2l6ZXMgKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcImtleWRvd25cIiwgZnVuY3Rpb24gKCBldmVudCApIHtcbiAgICAgICAgaWYgKCBldmVudC5kZWZhdWx0UHJldmVudGVkICkge1xuICAgICAgICAgIHJldHVybjsgLy8gRG8gbm90aGluZyBpZiB0aGUgZXZlbnQgd2FzIGFscmVhZHkgcHJvY2Vzc2VkXG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICggZXZlbnQua2V5ICkge1xuICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgIGlmICggY3VyU29uZ0luZGV4ID09IDAgKSBjdXJTb25nSW5kZXggPSBzb25ncy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgZWxzZSBjdXJTb25nSW5kZXgtLTtcbiAgICAgICAgICAgIEEubG9hZFRyYWNrKCBzb25nc1tjdXJTb25nSW5kZXhdICk7XG4gICAgICAgICAgICBpZiAoIWRlc2MyLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIGRlc2MyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAgIGN1clNvbmdJbmRleCA9ICggY3VyU29uZ0luZGV4ICsgMSApICUgc29uZ3MubGVuZ3RoO1xuICAgICAgICAgICAgQS5sb2FkVHJhY2soIHNvbmdzW2N1clNvbmdJbmRleF0gKTtcbiAgICAgICAgICAgIGlmICghZGVzYzIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkgZGVzYzIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICBpZiAoIGN1clNjZW5lSW5kZXggPT0gMCApIGN1clNjZW5lSW5kZXggPSBzY2VuZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGVsc2UgY3VyU2NlbmVJbmRleC0tO1xuICAgICAgICAgICAgY3VyU2NlbmUgPSBzY2VuZXNbIGN1clNjZW5lSW5kZXggXTtcbiAgICAgICAgICAgIGlmICghZGVzYzMuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkgZGVzYzMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgY3VyU2NlbmVJbmRleCA9ICggY3VyU2NlbmVJbmRleCArIDEgKSAlIHNjZW5lcy5sZW5ndGg7XG4gICAgICAgICAgICBjdXJTY2VuZSA9IHNjZW5lc1sgY3VyU2NlbmVJbmRleCBdO1xuICAgICAgICAgICAgaWYgKCFkZXNjMy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSBkZXNjMy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCIgXCI6XG4gICAgICAgICAgICBBLnRvZ2dsZUF1ZGlvKCApO1xuICAgICAgICAgICAgaWYgKCFkZXNjMS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSBkZXNjMS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuOyAvLyBRdWl0IHdoZW4gdGhpcyBkb2Vzbid0IGhhbmRsZSB0aGUga2V5IGV2ZW50LlxuICAgICAgICB9XG4gICAgICAgIC8vIENhbmNlbCB0aGUgZGVmYXVsdCBhY3Rpb24gdG8gYXZvaWQgaXQgYmVpbmcgaGFuZGxlZCB0d2ljZVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sIHRydWUpO1xuXG4gICAgY29uc3QgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soICk7XG4gICAgY29uc3QgdGljayA9ICggKSA9PlxuICAgIHsgICBcbiAgICAgICAgdmFyIGRlbHRhVGltZSA9IGNsb2NrLmdldERlbHRhKCApO1xuICAgICAgICB2YXIgZWxhcHNlZFRpbWUgPSBjbG9jay5nZXRFbGFwc2VkVGltZSggKTtcbiAgICAgICAgQS5vblRpY2soICk7XG4gICAgICAgIFIucmVuZGVyKCBjdXJTY2VuZS5zY2VuZSwgY3VyU2NlbmUuQy5jYW1lcmEgKTtcbiAgICAgICAgUjIucmVuZGVyKCB0aXRjLnNjZW5lLCB0aXRjLkMuY2FtZXJhICk7XG4gICAgICAgIGN1clNjZW5lLnRpY2soIGRlbHRhVGltZSwgZWxhcHNlZFRpbWUsIEEgKTtcbiAgICAgICAgdGl0Yy50aWNrKCBkZWx0YVRpbWUsIGVsYXBzZWRUaW1lLCBBICk7XG5cbiAgICAgICAgaWYgKCBkZXNjMy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpICYmIGRlc2MyLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykgJiYgZGVzYzEuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSAmJiBhYm91dC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgICAgYWJvdXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggdGljayApO1xuICAgIH07XG4gICAgdGljayggKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBjb21wb25lbnQoKSApOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2dyYXBoaWNzXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2dyYXBoaWNzXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9hcGlfanMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX3NvdXItYzUxNTg3XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=