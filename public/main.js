/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/application.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/application.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Lato:wght@100;300;400;700;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote,\\npre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small,\\nstrong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label,\\nlegend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas,\\ndetails, figcaption, figure, footer, header, hgroup, menu, nav, section,\\nsummary, time, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  outline: 0;\\n  font-size: 100%;\\n  vertical-align: baseline;\\n  background: transparent;\\n}\\n\\nhtml, body, div, span, object, iframe, p, blockquote,\\npre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small,\\nstrong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label,\\nlegend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas,\\ndetails, figcaption, figure, footer, header, hgroup, menu, nav, section,\\nsummary, time, mark, audio, video {\\n  font-family: \\\"Lato\\\", sans-serif;\\n}\\n\\nh1, h2, h3, h4, h5, h6 {\\n  font-family: \\\"Dancing Script\\\", cursive;\\n}\\n\\nbody {\\n  line-height: 1;\\n  margin: 0;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\ncode {\\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \\\"Courier New\\\", monospace;\\n}\\n\\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\\n  display: block;\\n}\\n\\nnav ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\n\\na {\\n  margin: 0;\\n  padding: 0;\\n  font-size: 100%;\\n  vertical-align: baseline;\\n  background: transparent;\\n}\\n\\ndel {\\n  text-decoration: line-through;\\n}\\n\\nabbr[title], dfn[title] {\\n  border-bottom: 1px dotted;\\n  cursor: help;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput, select {\\n  vertical-align: middle;\\n}\\n\\n#root {\\n  background: #FFFDF4;\\n}\\n\\n#root > h1 {\\n  font-weight: 700;\\n  font-size: 50px;\\n  color: #376171;\\n  text-shadow: 1px 1px 1px rgba(22, 28, 29, 0.75);\\n}\\n\\n.cards-list {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-around;\\n}\\n\\n#card {\\n  width: 240px;\\n  height: 336px;\\n  position: relative;\\n  border: 1px solid #161C1D;\\n  border-radius: 20px;\\n  overflow: hidden;\\n  background-repeat: repeat;\\n  box-shadow: 0 0 10px rgba(22, 28, 29, 0.75);\\n}\\n\\n.card-tint {\\n  position: absolute;\\n  opacity: 0.2;\\n  height: 100%;\\n  width: 100%;\\n  left: 0;\\n  bottom: 0;\\n  top: 0;\\n  right: 0;\\n}\\n\\n.card-back {\\n  position: absolute;\\n  align-self: center;\\n  background-size: 120%;\\n  background-repeat: no-repeat;\\n  opacity: 0.95;\\n  left: -10%;\\n  bottom: 25%;\\n  top: 15%;\\n  right: 0;\\n}\\n\\n.card-back-header {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: center;\\n  transform: rotate(-10deg);\\n  position: absolute;\\n  width: 100%;\\n  bottom: 45%;\\n  top: 32%;\\n  left: -5%;\\n  right: -5%;\\n}\\n\\n.card-back-header > h2 {\\n  margin-left: 60%;\\n  color: #FFFDF4;\\n  font-size: 235%;\\n  text-shadow: 1px 1px rgba(22, 28, 29, 0.75);\\n  font-weight: 700;\\n  width: 100%;\\n}\\n\\n.card-back-header > h2:first-child {\\n  text-indent: -10%;\\n  margin-bottom: -4%;\\n}\\n\\n.card-back-header > h2:last-child {\\n  text-indent: 10%;\\n}\\n\\n.card-image {\\n  position: absolute;\\n  width: 100%;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  top: auto;\\n  z-index: 1;\\n}\\n\\n.card-symbol {\\n  position: absolute;\\n  width: 25%;\\n  top: 2.5%;\\n  left: 0;\\n  right: auto;\\n  bottom: auto;\\n  z-index: 0;\\n}\\n\\n.card-abilities {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-content: flex-start;\\n  position: absolute;\\n  width: 115%;\\n  height: 15%;\\n  bottom: 0;\\n  left: -15%;\\n  right: 0;\\n  top: auto;\\n  background-repeat: no-repeat;\\n  background-size: 105% 95%;\\n  padding: 0;\\n  z-index: 2;\\n  padding-top: 5%;\\n  padding-bottom: 5%;\\n  opacity: 90%;\\n}\\n\\n.card-abilities > li {\\n  font-size: 80%;\\n  color: #FFFDF4;\\n  text-indent: -5%;\\n  padding-left: 24%;\\n  padding-right: 4%;\\n  margin: 0;\\n  text-shadow: 0.25px 0.25px 0px rgba(255, 253, 244, 0.75);\\n}\\n\\n.card-abilities > li:last-child:not(:first-child) {\\n  padding-top: 2.5%;\\n}\\n\\n.card-header {\\n  position: absolute;\\n  transform: rotate(180deg);\\n  margin: 0;\\n  padding: 0;\\n  right: 2.5%;\\n  top: 5%;\\n  bottom: auto;\\n  left: auto;\\n  font-size: 285%;\\n  text-shadow: 0.25px 0.25px 0.5px rgba(22, 28, 29, 0.75);\\n  font-weight: 700;\\n  z-index: 0;\\n  writing-mode: vertical-lr;\\n}\\n\\n#card.captain .card-tint {\\n  background-color: #376171;\\n}\\n\\n#card.duke .card-tint {\\n  background-color: #8A317B;\\n}\\n\\n#card.ambassador .card-tint {\\n  background-color: #4C9870;\\n}\\n\\n#card.contessa .card-tint {\\n  background-color: #9B332A;\\n}\\n\\n#card.assassin .card-tint {\\n  background-color: #161C1D;\\n}\\n\\n#card.face-down .card-tint {\\n  background-color: #376171;\\n  opacity: 0.6;\\n}\\n\\n#card.captain .card-header {\\n  color: #376171;\\n}\\n\\n#card.duke .card-header {\\n  color: #8A317B;\\n}\\n\\n#card.ambassador .card-header {\\n  color: #4C9870;\\n}\\n\\n#card.contessa .card-header {\\n  color: #9B332A;\\n}\\n\\n#card.assassin .card-header {\\n  color: #161C1D;\\n}\\n\\n.turn-controls {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-around;\\n  align-items: baseline;\\n  list-style: none;\\n}\\n\\n.turn-control-list-item {\\n  width: 50px;\\n  height: 50px;\\n  position: relative;\\n  padding: 0;\\n  border-radius: 30px;\\n  cursor: pointer;\\n  border: 2px solid #161C1D;\\n}\\n\\n.turn-action-icon {\\n  width: 90%;\\n  height: 90%;\\n  position: absolute;\\n  background-size: 100% 100%;\\n  background-repeat: no-repeat;\\n  top: 5%;\\n  bottom: 5%;\\n  left: 5%;\\n  right: 5%;\\n  border-radius: 30px;\\n}\\n\\n.turn-control-list-item .tooltip-text {\\n  visibility: hidden;\\n  width: 200%;\\n  background-color: #161C1D;\\n  color: #FFFDF4;\\n  text-align: center;\\n  padding: 5px 0;\\n  border-radius: 6px;\\n  position: absolute;\\n  z-index: 2;\\n  bottom: 110%;\\n  left: 50%;\\n  margin-left: -100%;\\n}\\n\\n.turn-control-list-item:hover .tooltip-text {\\n  visibility: visible;\\n}\\n\\n.tooltip-text > p:first-child {\\n  font-weight: 700;\\n  font-size: 90%;\\n}\\n\\n.tooltip-text > p:last-child {\\n  font-size: 75%;\\n}\\n\\n#game {\\n  padding-top: 3%;\\n  width: 80%;\\n  height: 100%;\\n  max-height: 2000px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: center;\\n  position: relative;\\n}\\n\\n#player-one {\\n  display: flex;\\n  width: 60%;\\n  flex-direction: row;\\n  justify-content: center;\\n  margin-left: -20%;\\n  margin-bottom: -13%;\\n}\\n\\n#player-two {\\n  display: flex;\\n  width: 60%;\\n  flex-direction: row;\\n  justify-content: center;\\n  margin-left: -20%;\\n  margin-top: -13%;\\n}\\n\\n#court {\\n  display: flex;\\n  width: 100%;\\n  flex-direction: row-reverse;\\n  justify-content: center;\\n  align-items: center;\\n  margin-left: 70%;\\n}\\n\\n.player-cards {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-evenly;\\n  width: 100%;\\n  height: 350px;\\n}\\n\\n.player-coins {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-evenly;\\n  width: 86px;\\n}\\n\\n.treasury {\\n  position: relative;\\n}\\n\\n.coin {\\n  width: 40px;\\n  height: 43px;\\n  background-size: 100% 100%;\\n}\\n\\n.player-coins .coin {\\n  width: 80px;\\n  height: 86px;\\n  background-size: 100% 100%;\\n}\\n\\n#game-controls {\\n  position: absolute;\\n  left: 5%;\\n  top: 25%;\\n  bottom: 25%;\\n  right: auto;\\n}\\n\\n#game-controls > ul {\\n  display: flex;\\n  flex-direction: column;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/application.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/application.scss":
/*!******************************!*\
  !*** ./src/application.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./application.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/application.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/application.scss?");

/***/ }),

/***/ "./src/characters/ambassador.js":
/*!**************************************!*\
  !*** ./src/characters/ambassador.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar img = __webpack_require__(/*! ../images/characters/ambassador.png */ \"./src/images/characters/ambassador.png\");\n\nvar symbol = __webpack_require__(/*! ../images/symbols/ambassador.png */ \"./src/images/symbols/ambassador.png\");\n\nvar brush = __webpack_require__(/*! ../images/brush-stroke/ambassador.png */ \"./src/images/brush-stroke/ambassador.png\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  character: 'Ambassador',\n  image: img[\"default\"],\n  symbol: symbol[\"default\"],\n  action: 'Exchange',\n  effect: 'Exchange cards with Court Deck',\n  counteraction: 'Blocks stealing',\n  brushStroke: brush[\"default\"],\n  backgroundColor: 'rgba(76, 152, 112, 0.5)'\n});\n\n//# sourceURL=webpack:///./src/characters/ambassador.js?");

/***/ }),

/***/ "./src/characters/assassin.js":
/*!************************************!*\
  !*** ./src/characters/assassin.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar img = __webpack_require__(/*! ../images/characters/assassin.png */ \"./src/images/characters/assassin.png\");\n\nvar symbol = __webpack_require__(/*! ../images/symbols/assassin.png */ \"./src/images/symbols/assassin.png\");\n\nvar brush = __webpack_require__(/*! ../images/brush-stroke/assassin.png */ \"./src/images/brush-stroke/assassin.png\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  character: 'Assassin',\n  image: img[\"default\"],\n  symbol: symbol[\"default\"],\n  action: 'Assassinate',\n  effect: 'Pay 3 coins to assassinate another player',\n  counteraction: '',\n  brushStroke: brush[\"default\"],\n  backgroundColor: 'rgba(22, 28, 29, 0.5)'\n});\n\n//# sourceURL=webpack:///./src/characters/assassin.js?");

/***/ }),

/***/ "./src/characters/captain.js":
/*!***********************************!*\
  !*** ./src/characters/captain.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar img = __webpack_require__(/*! ../images/characters/captain.png */ \"./src/images/characters/captain.png\");\n\nvar symbol = __webpack_require__(/*! ../images/symbols/captain.png */ \"./src/images/symbols/captain.png\");\n\nvar brush = __webpack_require__(/*! ../images/brush-stroke/captain.png */ \"./src/images/brush-stroke/captain.png\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  character: 'Captain',\n  image: img[\"default\"],\n  symbol: symbol[\"default\"],\n  action: 'Steal',\n  effect: 'Take 2 coins from another player',\n  counteraction: 'Blocks stealing',\n  brushStroke: brush[\"default\"],\n  backgroundColor: 'rgba(55, 97, 113, 0.5)'\n});\n\n//# sourceURL=webpack:///./src/characters/captain.js?");

/***/ }),

/***/ "./src/characters/contessa.js":
/*!************************************!*\
  !*** ./src/characters/contessa.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar img = __webpack_require__(/*! ../images/characters/contessa.png */ \"./src/images/characters/contessa.png\");\n\nvar symbol = __webpack_require__(/*! ../images/symbols/contessa.png */ \"./src/images/symbols/contessa.png\");\n\nvar brush = __webpack_require__(/*! ../images/brush-stroke/contessa.png */ \"./src/images/brush-stroke/contessa.png\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  character: 'Contessa',\n  image: img[\"default\"],\n  symbol: symbol[\"default\"],\n  action: '',\n  effect: '',\n  counteraction: 'Blocks assassination',\n  brushStroke: brush[\"default\"],\n  backgroundColor: 'rgba(155, 51, 42, 0.5)'\n});\n\n//# sourceURL=webpack:///./src/characters/contessa.js?");

/***/ }),

/***/ "./src/characters/duke.js":
/*!********************************!*\
  !*** ./src/characters/duke.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar img = __webpack_require__(/*! ../images/characters/duke.png */ \"./src/images/characters/duke.png\");\n\nvar symbol = __webpack_require__(/*! ../images/symbols/duke.png */ \"./src/images/symbols/duke.png\");\n\nvar brush = __webpack_require__(/*! ../images/brush-stroke/duke.png */ \"./src/images/brush-stroke/duke.png\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  character: 'Duke',\n  image: img[\"default\"],\n  symbol: symbol[\"default\"],\n  action: 'Tax',\n  effect: 'Take 3 coins from Treasury',\n  counteraction: 'Blocks Foreign Aid',\n  brushStroke: brush[\"default\"],\n  backgroundColor: 'rgba(138, 49, 123, 0.5)'\n});\n\n//# sourceURL=webpack:///./src/characters/duke.js?");

/***/ }),

/***/ "./src/game/card.js":
/*!**************************!*\
  !*** ./src/game/card.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Card; });\n/* harmony import */ var _util_create_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/create_card */ \"./src/util/create_card.js\");\n/* harmony import */ var _util_create_face_down_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/create_face_down_card */ \"./src/util/create_face_down_card.js\");\n/* harmony import */ var _characters_duke__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../characters/duke */ \"./src/characters/duke.js\");\n/* harmony import */ var _characters_assassin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../characters/assassin */ \"./src/characters/assassin.js\");\n/* harmony import */ var _characters_ambassador__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../characters/ambassador */ \"./src/characters/ambassador.js\");\n/* harmony import */ var _characters_captain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../characters/captain */ \"./src/characters/captain.js\");\n/* harmony import */ var _characters_contessa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../characters/contessa */ \"./src/characters/contessa.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\n\nvar cardBack = __webpack_require__(/*! ../images//brush-stroke/card_back.png */ \"./src/images/brush-stroke/card_back.png\");\n\nvar paper = __webpack_require__(/*! ../images/paper_texture.png */ \"./src/images/paper_texture.png\");\n\nvar renderOptionsMap = {\n  Duke: _characters_duke__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  Assassin: _characters_assassin__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  Ambassador: _characters_ambassador__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  Captain: _characters_captain__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  Contessa: _characters_contessa__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n};\n\nvar Card = /*#__PURE__*/function () {\n  function Card(character) {\n    _classCallCheck(this, Card);\n\n    this.faceUp = false;\n    this.character = character;\n    this.options = renderOptionsMap[character];\n    this.action = renderOptionsMap[character].action;\n    this.effect = renderOptionsMap[character].effect;\n    this.counteraction = renderOptionsMap[character].counteraction;\n  }\n\n  _createClass(Card, [{\n    key: \"flipDown\",\n    value: function flipDown() {\n      this.faceUp = false;\n    }\n  }, {\n    key: \"flipUp\",\n    value: function flipUp() {\n      this.faceUp = true;\n    }\n  }, {\n    key: \"render\",\n    value: function render(deckCount, idx) {\n      if (deckCount) {\n        return Object(_util_create_face_down_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(deckCount, idx);\n      } else {\n        if (this.faceUp) {\n          return Object(_util_create_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.options);\n        } else {\n          return Object(_util_create_face_down_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        }\n      }\n    }\n  }]);\n\n  return Card;\n}();\n\n\n\n//# sourceURL=webpack:///./src/game/card.js?");

/***/ }),

/***/ "./src/game/court_deck.js":
/*!********************************!*\
  !*** ./src/game/court_deck.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CourtDeck; });\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ \"./src/game/card.js\");\n/* harmony import */ var _util_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/create_element */ \"./src/util/create_element.js\");\n/* harmony import */ var _util_create_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/create_card */ \"./src/util/create_card.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar CourtDeck = /*#__PURE__*/function () {\n  function CourtDeck() {\n    _classCallCheck(this, CourtDeck);\n\n    this.deck = this.buildDeck();\n    this.shuffle();\n  }\n\n  _createClass(CourtDeck, [{\n    key: \"buildDeck\",\n    value: function buildDeck() {\n      var deck = [];\n      ['Duke', 'Assassin', 'Ambassador', 'Captain', 'Contessa'].forEach(function (character) {\n        [1, 2, 3].forEach(function (_) {\n          var newCard = new _card__WEBPACK_IMPORTED_MODULE_0__[\"default\"](character);\n          deck.push(newCard);\n        });\n      });\n      return deck;\n    }\n  }, {\n    key: \"shuffle\",\n    value: function shuffle() {\n      for (var i = this.deck.length - 1; i > 0; i--) {\n        var j = Math.floor(Math.random() * i);\n        var temp = this.deck[i];\n        this.deck[i] = this.deck[j];\n        this.deck[j] = temp;\n      }\n    }\n  }, {\n    key: \"deal\",\n    value: function deal(num) {\n      var dealtCards = this.deck.slice(0, num);\n      this.deck = this.deck.slice(num);\n      this.shuffle();\n      return dealtCards;\n    }\n  }, {\n    key: \"returnCard\",\n    value: function returnCard(card) {\n      this.deck.push(card);\n      this.shuffle();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var deckCount = this.deck.length;\n      return _util_create_element__WEBPACK_IMPORTED_MODULE_1__[\"default\"].apply(void 0, ['div', {\n        \"class\": 'court-deck',\n        style: \"\\n          display: grid;\\n          grid-template-columns: repeat(\".concat((deckCount + 1) * 3, \", 2px);\\n          grid-template-rows: 336px;\\n          max-width: \").concat((deckCount + 1) * 3, \"px;\\n        \")\n      }].concat(_toConsumableArray(this.deck.map(function (card, idx) {\n        return card.render(deckCount, idx);\n      }))));\n    }\n  }]);\n\n  return CourtDeck;\n}();\n\n\n\n//# sourceURL=webpack:///./src/game/court_deck.js?");

/***/ }),

/***/ "./src/game/game.js":
/*!**************************!*\
  !*** ./src/game/game.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _court_deck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./court_deck */ \"./src/game/court_deck.js\");\n/* harmony import */ var _treasury__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./treasury */ \"./src/game/treasury.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/game/player.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    this.courtDeck = new _court_deck__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.treasury = new _treasury__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.players = [new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](1, this), new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](2, this)];\n    this.currentPlayer = null;\n    this.currentTarget = null;\n  }\n\n  _createClass(Game, [{\n    key: \"startGame\",\n    value: function startGame() {\n      this.players.forEach(function (player) {\n        return player.setOpponent();\n      });\n      this.playerOne = this.players[0];\n      this.playerTwo = this.players[1];\n      this.currentPlayer = this.playerOne;\n      this.currentTarget = this.playerTwo;\n      this.playerOne.flipAllCardsUp();\n    }\n  }, {\n    key: \"switchTurns\",\n    value: function switchTurns() {\n      this.currentPlayer = this.players[(this.players.indexOf(this.currentPlayer) + 1) % 2];\n      this.currentTarget = this.players[(this.players.indexOf(this.currentTarget) + 1) % 2];\n    }\n  }, {\n    key: \"turnStepOne\",\n    value: function turnStepOne(action, _ref) {\n      var wasBlocked = _ref.wasBlocked,\n          wasChallenged = _ref.wasChallenged;\n      if (['Income', 'Coup'].includes(action)) return action;\n      if (wasBlocked) return;\n\n      if (wasChallenged) {\n        var proven = this.currentPlayer.prove(action);\n\n        if (proven) {\n          return action;\n        } else {\n          return;\n        }\n      }\n    }\n  }, {\n    key: \"turnStepTwo\",\n    value: function turnStepTwo(action) {\n      switch (action) {\n        case 'Income':\n          this.currentPlayer.income();\n          return action;\n\n        case 'Foreign Aid':\n          this.currentPlayer.foreignAid();\n          return action;\n\n        case 'Coup':\n          this.currentPlayer.coup(); // this.promptKillIndex()\n          //   .then(idx => this.currentTarget.receiveCoup(idx));\n\n          return action;\n\n        case 'Tax':\n          this.currentPlayer.tax();\n          return action;\n\n        case 'Assassinate':\n          this.currentPlayer.assassinate(); // this.promptKillIndex()\n          //   .then(idx => this.currentTarget.receiveAssassinate(idx));\n\n          return action;\n\n        case 'Steal':\n          this.currentPlayer.steal();\n          this.currentTarget.receiveSteal();\n          return action;\n\n        case 'Exchange':\n          this.currentPlayer.exchangePartOne(); // this.promptExchangeIndices()\n          //   .then(([idx1, idx2]) => this.currentPlayer.exchangePartTwo(idx1, idx2));\n\n          return action;\n\n        default:\n          return action;\n      }\n    }\n  }, {\n    key: \"turnStepThree\",\n    value: function turnStepThree(action, _ref2) {\n      var idx1 = _ref2.idx1,\n          idx2 = _ref2.idx2;\n\n      switch (action) {\n        case 'Exchange':\n          this.currentPlayer.exchangePartTwo(idx1, idx2);\n          return;\n\n        case 'Coup':\n          this.currentTarget.receiveCoup(idx1);\n          return;\n\n        case 'Assassinate':\n          this.currentTarget.receiveAssassinate(idx1);\n          return;\n\n        case 'Steal':\n          this.currentTarget.receiveSteal();\n          return;\n\n        default:\n          return;\n      }\n    }\n  }, {\n    key: \"gameOver\",\n    value: function gameOver() {\n      return this.playerOne.cards.length === 0 || this.playerTwo.cards.length === 0;\n    }\n  }, {\n    key: \"winner\",\n    value: function winner() {\n      if (this.gameOver()) {\n        return [this.playerOne, this.playerTwo].filter(function (player) {\n          return player.cards.length > 0;\n        })[0];\n      } else {\n        return null;\n      }\n    }\n  }]);\n\n  return Game;\n}();\n\n\n\n//# sourceURL=webpack:///./src/game/game.js?");

/***/ }),

/***/ "./src/game/player.js":
/*!****************************!*\
  !*** ./src/game/player.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _util_create_coin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/create_coin */ \"./src/util/create_coin.js\");\n/* harmony import */ var _util_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/create_element */ \"./src/util/create_element.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Player = /*#__PURE__*/function () {\n  function Player(idx, game) {\n    _classCallCheck(this, Player);\n\n    this.idx = idx;\n    this.game = game;\n    this.opponent = null;\n    this.cards = game.courtDeck.deal(2);\n    this.coins = game.treasury.dispense(2);\n    console.log(idx, this.coins, this.cards);\n  }\n\n  _createClass(Player, [{\n    key: \"setOpponent\",\n    value: function setOpponent() {\n      this.opponent = this.game.players[(this.idx + 1) % 2];\n    }\n  }, {\n    key: \"flipAllCardsUp\",\n    value: function flipAllCardsUp() {\n      this.cards.forEach(function (card) {\n        return card.flipUp();\n      });\n    }\n  }, {\n    key: \"flipAllCardsDown\",\n    value: function flipAllCardsDown() {\n      this.cards.forEach(function (card) {\n        return card.flipDown();\n      });\n    }\n  }, {\n    key: \"returnInfleunce\",\n    value: function returnInfleunce(idx) {\n      var dead = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      var lostCard = this.cards[idx];\n      this.cards = [].concat(_toConsumableArray(this.cards.slice(0, idx)), _toConsumableArray(this.cards.slice(idx + 1)));\n\n      if (dead) {\n        this.game.faceUpCards.push(lostCard);\n      } else {\n        this.game.courtDeck.returnCard(lostCard);\n      }\n    }\n  }, {\n    key: \"pay\",\n    value: function pay(num) {\n      this.coins -= this.game.treasury.collect(num);\n    }\n  }, {\n    key: \"block\",\n    value: function block() {\n      return true;\n    }\n  }, {\n    key: \"challenge\",\n    value: function challenge() {\n      return true;\n    }\n  }, {\n    key: \"prove\",\n    value: function prove(action) {\n      var proven;\n      var handIndex = this.cards.map(function (card) {\n        return card.action;\n      }).indexOf(action);\n\n      if (handIndex > -1) {\n        proven = true;\n        this.returnInfleunce(handIndex, false);\n        this.cards = [].concat(_toConsumableArray(this.cards), _toConsumableArray(this.game.courtDeck.deal(1)));\n      } else {\n        proven = false;\n      }\n\n      return proven;\n    }\n  }, {\n    key: \"income\",\n    value: function income() {\n      this.coins += this.game.treasury.dispense(1);\n    }\n  }, {\n    key: \"foreignAid\",\n    value: function foreignAid() {\n      this.coins += this.game.treasury.dispense(2);\n    }\n  }, {\n    key: \"coup\",\n    value: function coup() {\n      this.coins -= this.game.treasury.collect(7);\n    }\n  }, {\n    key: \"receiveCoup\",\n    value: function receiveCoup(idx) {\n      this.returnInfleunce(idx, true);\n    }\n  }, {\n    key: \"tax\",\n    value: function tax() {\n      this.coins += this.game.treasury.dispense(3);\n    }\n  }, {\n    key: \"assassinate\",\n    value: function assassinate() {\n      this.coins -= this.game.treasury.collect(3);\n    }\n  }, {\n    key: \"receiveAssassinate\",\n    value: function receiveAssassinate(idx) {\n      this.returnInfleunce(idx, true);\n    }\n  }, {\n    key: \"steal\",\n    value: function steal() {\n      this.coins += Math.min(2, this.opponent.coins);\n    }\n  }, {\n    key: \"receiveSteal\",\n    value: function receiveSteal() {\n      this.coins -= Math.min(2, this.coins);\n    }\n  }, {\n    key: \"exchangePartOne\",\n    value: function exchangePartOne() {\n      this.cards = [].concat(_toConsumableArray(this.cards), _toConsumableArray(this.game.courtDeck.deal(2)));\n    }\n  }, {\n    key: \"exchangePartTwo\",\n    value: function exchangePartTwo(idx1, idx2) {\n      this.returnInfleunce(idx1, false);\n      this.returnInfleunce(idx2, false);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var hand = _util_create_element__WEBPACK_IMPORTED_MODULE_1__[\"default\"].apply(void 0, ['div', {\n        \"class\": 'player-cards'\n      }].concat(_toConsumableArray(this.cards.map(function (card) {\n        return card.render();\n      }))));\n      var coinsArray = new Array(this.coins).fill(1).map(function (_) {\n        return Object(_util_create_coin__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      });\n      var coins = _util_create_element__WEBPACK_IMPORTED_MODULE_1__[\"default\"].apply(void 0, ['div', {\n        \"class\": 'player-coins'\n      }].concat(_toConsumableArray(coinsArray)));\n      return [hand, coins];\n    }\n  }]);\n\n  return Player;\n}();\n\n\n\n//# sourceURL=webpack:///./src/game/player.js?");

/***/ }),

/***/ "./src/game/treasury.js":
/*!******************************!*\
  !*** ./src/game/treasury.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Treasury; });\n/* harmony import */ var _util_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/create_element */ \"./src/util/create_element.js\");\n/* harmony import */ var _util_create_coin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/create_coin */ \"./src/util/create_coin.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Treasury = /*#__PURE__*/function () {\n  function Treasury() {\n    _classCallCheck(this, Treasury);\n\n    this.coins = 50;\n  }\n\n  _createClass(Treasury, [{\n    key: \"dispense\",\n    value: function dispense(num) {\n      this.coins -= num;\n      return num;\n    }\n  }, {\n    key: \"collect\",\n    value: function collect(num) {\n      this.coins += num;\n      return num;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var coinsArray = new Array(this.coins).fill(1).map(function (_) {\n        return Object(_util_create_coin__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(160);\n      });\n      var coins = _util_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apply(void 0, ['div', {\n        \"class\": 'treasury',\n        style: 'width: 200px; height: 200px;'\n      }].concat(_toConsumableArray(coinsArray)));\n      return coins;\n    }\n  }]);\n\n  return Treasury;\n}();\n\n\n\n//# sourceURL=webpack:///./src/game/treasury.js?");

/***/ }),

/***/ "./src/images/brush-stroke/ambassador.png":
/*!************************************************!*\
  !*** ./src/images/brush-stroke/ambassador.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/d2044d1685fd141f7b4d09575afd0432.png\");\n\n//# sourceURL=webpack:///./src/images/brush-stroke/ambassador.png?");

/***/ }),

/***/ "./src/images/brush-stroke/assassin.png":
/*!**********************************************!*\
  !*** ./src/images/brush-stroke/assassin.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/679e6ef582a2b86803559fb167e0a080.png\");\n\n//# sourceURL=webpack:///./src/images/brush-stroke/assassin.png?");

/***/ }),

/***/ "./src/images/brush-stroke/captain.png":
/*!*********************************************!*\
  !*** ./src/images/brush-stroke/captain.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/a483d4fbe8f82f8a9da085edb7923db0.png\");\n\n//# sourceURL=webpack:///./src/images/brush-stroke/captain.png?");

/***/ }),

/***/ "./src/images/brush-stroke/card_back.png":
/*!***********************************************!*\
  !*** ./src/images/brush-stroke/card_back.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/e3e68fca021e03e427b7630367dcff8e.png\");\n\n//# sourceURL=webpack:///./src/images/brush-stroke/card_back.png?");

/***/ }),

/***/ "./src/images/brush-stroke/contessa.png":
/*!**********************************************!*\
  !*** ./src/images/brush-stroke/contessa.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/ad6c3d4120d84e91fe2fa8e0c34ce14c.png\");\n\n//# sourceURL=webpack:///./src/images/brush-stroke/contessa.png?");

/***/ }),

/***/ "./src/images/brush-stroke/duke.png":
/*!******************************************!*\
  !*** ./src/images/brush-stroke/duke.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/195f23fa974f8e22897acbebec101bfd.png\");\n\n//# sourceURL=webpack:///./src/images/brush-stroke/duke.png?");

/***/ }),

/***/ "./src/images/characters/ambassador.png":
/*!**********************************************!*\
  !*** ./src/images/characters/ambassador.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/a0cb3358617b702f6d4ddd43abf58347.png\");\n\n//# sourceURL=webpack:///./src/images/characters/ambassador.png?");

/***/ }),

/***/ "./src/images/characters/assassin.png":
/*!********************************************!*\
  !*** ./src/images/characters/assassin.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/d0e8717e8737cc342905aa2bd4158e2b.png\");\n\n//# sourceURL=webpack:///./src/images/characters/assassin.png?");

/***/ }),

/***/ "./src/images/characters/captain.png":
/*!*******************************************!*\
  !*** ./src/images/characters/captain.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/be8adb2b012037af4cf2aea4c73f1b6f.png\");\n\n//# sourceURL=webpack:///./src/images/characters/captain.png?");

/***/ }),

/***/ "./src/images/characters/contessa.png":
/*!********************************************!*\
  !*** ./src/images/characters/contessa.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/08e1444ebd00db5e4b65abb5a032461a.png\");\n\n//# sourceURL=webpack:///./src/images/characters/contessa.png?");

/***/ }),

/***/ "./src/images/characters/duke.png":
/*!****************************************!*\
  !*** ./src/images/characters/duke.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/6d272f1c1989175b778e044450018a47.png\");\n\n//# sourceURL=webpack:///./src/images/characters/duke.png?");

/***/ }),

/***/ "./src/images/coin.png":
/*!*****************************!*\
  !*** ./src/images/coin.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/d957055b76ebcaf80630ac0c9673a930.png\");\n\n//# sourceURL=webpack:///./src/images/coin.png?");

/***/ }),

/***/ "./src/images/intersection_texture.png":
/*!*********************************************!*\
  !*** ./src/images/intersection_texture.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/28f141b14d7e2d55c3cc2edd8156318e.png\");\n\n//# sourceURL=webpack:///./src/images/intersection_texture.png?");

/***/ }),

/***/ "./src/images/paper_texture.png":
/*!**************************************!*\
  !*** ./src/images/paper_texture.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/e49b2c34ab9f46339007dfa6dcf9a9e6.png\");\n\n//# sourceURL=webpack:///./src/images/paper_texture.png?");

/***/ }),

/***/ "./src/images/symbols/ambassador.png":
/*!*******************************************!*\
  !*** ./src/images/symbols/ambassador.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/0c3aa56fe2cc1399291301b2b67db064.png\");\n\n//# sourceURL=webpack:///./src/images/symbols/ambassador.png?");

/***/ }),

/***/ "./src/images/symbols/assassin.png":
/*!*****************************************!*\
  !*** ./src/images/symbols/assassin.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/b285e51992619f898f72a7fd1200fed4.png\");\n\n//# sourceURL=webpack:///./src/images/symbols/assassin.png?");

/***/ }),

/***/ "./src/images/symbols/captain.png":
/*!****************************************!*\
  !*** ./src/images/symbols/captain.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/fee2bd21682e8c753d123fb84a89ad2d.png\");\n\n//# sourceURL=webpack:///./src/images/symbols/captain.png?");

/***/ }),

/***/ "./src/images/symbols/contessa.png":
/*!*****************************************!*\
  !*** ./src/images/symbols/contessa.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/2de44a6d1cfd8d7616486fdf7f624cd1.png\");\n\n//# sourceURL=webpack:///./src/images/symbols/contessa.png?");

/***/ }),

/***/ "./src/images/symbols/coup.png":
/*!*************************************!*\
  !*** ./src/images/symbols/coup.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/ac0dd81c762922e253180effd0d6770b.png\");\n\n//# sourceURL=webpack:///./src/images/symbols/coup.png?");

/***/ }),

/***/ "./src/images/symbols/duke.png":
/*!*************************************!*\
  !*** ./src/images/symbols/duke.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/9bf2208e5f9e0daa74ff53789e241f36.png\");\n\n//# sourceURL=webpack:///./src/images/symbols/duke.png?");

/***/ }),

/***/ "./src/images/symbols/foreign_aid.png":
/*!********************************************!*\
  !*** ./src/images/symbols/foreign_aid.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/ed3f481c5f87f86391a6b6742353f81a.png\");\n\n//# sourceURL=webpack:///./src/images/symbols/foreign_aid.png?");

/***/ }),

/***/ "./src/images/symbols/income.png":
/*!***************************************!*\
  !*** ./src/images/symbols/income.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/0907f3264a1c9577429fc39e257672be.png\");\n\n//# sourceURL=webpack:///./src/images/symbols/income.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _application_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application.scss */ \"./src/application.scss\");\n/* harmony import */ var _application_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_application_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/create_element */ \"./src/util/create_element.js\");\n/* harmony import */ var _util_create_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/create_card */ \"./src/util/create_card.js\");\n/* harmony import */ var _characters_duke__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters/duke */ \"./src/characters/duke.js\");\n/* harmony import */ var _characters_assassin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./characters/assassin */ \"./src/characters/assassin.js\");\n/* harmony import */ var _characters_ambassador__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters/ambassador */ \"./src/characters/ambassador.js\");\n/* harmony import */ var _characters_captain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characters/captain */ \"./src/characters/captain.js\");\n/* harmony import */ var _characters_contessa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./characters/contessa */ \"./src/characters/contessa.js\");\n/* harmony import */ var _render_gameplay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./render/gameplay */ \"./src/render/gameplay.js\");\n/* harmony import */ var _game_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game/card */ \"./src/game/card.js\");\n\n\n\n\n\n\n\n\n\n // const dukeCard = createCard(dukeOptions);\n// const assassinCard = createCard(assassinOptions);\n// const ambassadorCard = createCard(ambassadorOptions);\n// const captainCard = createCard(captainOptions);\n// const contessaCard = createCard(contessaOptions);\n// const cardsList = ['Duke', 'Assassin', 'Ambassador', 'Captain', 'Contessa'].map(character => {\n//   let cCard = new Card(character);\n//   cCard.flipUp();\n//   return cCard.render();\n// });\n// let fCard = new Card('Duke');\n// const faceDownCard = fCard.render();\n// cardsList.unshift(faceDownCard);\n// const cardInstance = new Card('Captain');\n// const dynamicCard = cardInstance.render();\n// const cards = createElement('div', { class: 'cards-list' }, ...cardsList);\n\nvar root = Object(_util_create_element__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', {\n  id: 'root'\n});\ndocument.body.appendChild(root);\nwindow.parent.document.body.style.zoom = 0.9;\nvar g = new _render_gameplay__WEBPACK_IMPORTED_MODULE_8__[\"default\"](root);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/render/game_controls.js":
/*!*************************************!*\
  !*** ./src/render/game_controls.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/create_element */ \"./src/util/create_element.js\");\n/* harmony import */ var _util_turn_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/turn_control */ \"./src/util/turn_control.js\");\n/* harmony import */ var _characters_duke__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../characters/duke */ \"./src/characters/duke.js\");\n/* harmony import */ var _characters_assassin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../characters/assassin */ \"./src/characters/assassin.js\");\n/* harmony import */ var _characters_ambassador__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../characters/ambassador */ \"./src/characters/ambassador.js\");\n/* harmony import */ var _characters_captain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../characters/captain */ \"./src/characters/captain.js\");\n/* harmony import */ var _characters_contessa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../characters/contessa */ \"./src/characters/contessa.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\n\n\nvar incomeSymbol = __webpack_require__(/*! ../images/symbols/income.png */ \"./src/images/symbols/income.png\");\n\nvar foreignAidSymbol = __webpack_require__(/*! ../images/symbols/foreign_aid.png */ \"./src/images/symbols/foreign_aid.png\");\n\nvar coupSymbol = __webpack_require__(/*! ../images/symbols/coup.png */ \"./src/images/symbols/coup.png\"); // character: 'Ambassador',\n//   image: img.default,\n//     symbol: symbol.default,\n//       action: 'Exchange',\n//         effect: 'Exchange cards with Court Deck',\n//           counteraction: 'Blocks stealing',\n//             brushStroke: brush.default,\n\n\nvar characterOptions = [_characters_duke__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _characters_assassin__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _characters_ambassador__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _characters_captain__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\nvar constOptions = [{\n  action: 'Income',\n  symbol: incomeSymbol[\"default\"],\n  effect: 'Take 1 Coin',\n  backgroundColor: 'rgba(218, 166, 65, 0.5)'\n}, {\n  action: 'Foreign Aid',\n  symbol: foreignAidSymbol[\"default\"],\n  effect: 'Take 2 Coins',\n  backgroundColor: 'rgba(138, 49, 123, 0.5)'\n}, {\n  action: 'Coup',\n  symbol: coupSymbol[\"default\"],\n  effect: 'Pay 7 coins to coup another player',\n  backgroundColor: 'rgba(55, 97, 113, 0.5)'\n}];\nvar allOptions = [].concat(constOptions, characterOptions);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (currentPlayer, turnActions) {\n  var playerActions = currentPlayer.cards.map(function (card) {\n    return card.action;\n  });\n  return _util_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apply(void 0, ['ul', {\n    \"class\": 'turn-controls'\n  }].concat(_toConsumableArray(allOptions.map(function (option, idx) {\n    if (option.action === 'Coup' && currentPlayer.coins < 7) return;\n    if (option.action === 'Assassinate' && currentPlayer.coins < 3) return;\n    return _util_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apply(void 0, ['li', {\n      \"class\": 'turn-control-list-item',\n      onClick: function onClick() {\n        return turnActions[option.action]();\n      },\n      style: \"background-color: \".concat(idx < 2 || idx === 2 && currentPlayer.coins >= 7 || idx > 2 && playerActions.includes(option.action) ? option.backgroundColor : 'transparent')\n    }].concat(_toConsumableArray(Object(_util_turn_control__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(option.symbol, option.action, option.effect))));\n  }))));\n});\n\n//# sourceURL=webpack:///./src/render/game_controls.js?");

/***/ }),

/***/ "./src/render/gameplay.js":
/*!********************************!*\
  !*** ./src/render/gameplay.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gameplay; });\n/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/game */ \"./src/game/game.js\");\n/* harmony import */ var _util_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/create_element */ \"./src/util/create_element.js\");\n/* harmony import */ var _game_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_controls */ \"./src/render/game_controls.js\");\n/* harmony import */ var _util_dom_nodes_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/dom_nodes_util */ \"./src/util/dom_nodes_util.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n // this.turnActions = {\n//   'Income': () => this.game.playerOne.income(),\n//   'Foreign Aid': () => this.renderAll(),\n//   'Coup': () => null,\n//   'Tax': () => null,\n//   'Assassinate': () => null,\n//   'Exchange': () => null,\n//   'Steal': () => null,\n//   '': () => null,\n// }\n\nvar Gameplay = /*#__PURE__*/function () {\n  function Gameplay(rootEl) {\n    var _this = this;\n\n    _classCallCheck(this, Gameplay);\n\n    this.rootEl = rootEl;\n    rootEl.innerHTML = '';\n    this.gameRoot = Object(_util_create_element__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', {\n      id: 'game'\n    });\n    rootEl.appendChild(this.gameRoot);\n    this.areas = {};\n    ['game-controls', 'player-one', 'court', 'player-two'].forEach(function (id) {\n      var area = Object(_util_create_element__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', {\n        id: id\n      });\n\n      _this.gameRoot.appendChild(area);\n\n      _this.areas[id] = area;\n      return;\n    });\n    this.turnActions = {\n      'Income': function Income() {\n        return _this.game.playerOne.income();\n      },\n      'Foreign Aid': function ForeignAid() {\n        return _this.renderAll();\n      },\n      'Coup': function Coup() {\n        return null;\n      },\n      'Tax': function Tax() {\n        return null;\n      },\n      'Assassinate': function Assassinate() {\n        return null;\n      },\n      'Exchange': function Exchange() {\n        return null;\n      },\n      'Steal': function Steal() {\n        return null;\n      },\n      '': function _() {\n        return null;\n      }\n    };\n    this.renderAll();\n  }\n\n  _createClass(Gameplay, [{\n    key: \"runGame\",\n    value: function runGame() {\n      this.game = new _game_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      this.game.startGame();\n      this.renderAll();\n    }\n  }, {\n    key: \"renderCourt\",\n    value: function renderCourt() {\n      var _this2 = this;\n\n      var courtRendered = [this.game.courtDeck.render(), this.game.treasury.render()];\n      Object(_util_dom_nodes_util__WEBPACK_IMPORTED_MODULE_3__[\"removeAllChildNodes\"])(this.areas['court']);\n      courtRendered.forEach(function (child) {\n        return _this2.areas['court'].appendChild(child);\n      }); // this.areas['court'].replaceWith(createElement('div', { id: 'court' }, this.game.courtDeck.render(), this.game.treasury.render()))\n      // return createElement('div', { class: 'court' }, this.game.courtDeck.render(), this.game.treasury.render());\n    }\n  }, {\n    key: \"renderPlayerOne\",\n    value: function renderPlayerOne() {\n      var _this3 = this;\n\n      var playerOneRendered = this.game.playerOne.render();\n      Object(_util_dom_nodes_util__WEBPACK_IMPORTED_MODULE_3__[\"removeAllChildNodes\"])(this.areas['player-one']);\n      playerOneRendered.forEach(function (child) {\n        return _this3.areas['player-one'].appendChild(child);\n      });\n    }\n  }, {\n    key: \"renderPlayerTwo\",\n    value: function renderPlayerTwo() {\n      var _this4 = this;\n\n      var playerTwoRendered = this.game.playerTwo.render();\n      Object(_util_dom_nodes_util__WEBPACK_IMPORTED_MODULE_3__[\"removeAllChildNodes\"])(this.areas['player-two']);\n      playerTwoRendered.forEach(function (child) {\n        return _this4.areas['player-two'].appendChild(child);\n      });\n    }\n  }, {\n    key: \"renderControls\",\n    value: function renderControls() {\n      this.areas['game-controls'].replaceWith(Object(_util_create_element__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', {\n        id: 'game-controls'\n      }, Object(_game_controls__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.game.currentPlayer, this.turnActions)));\n    }\n  }, {\n    key: \"renderAll\",\n    value: function renderAll() {\n      var _this5 = this;\n\n      // debugger\n      if (this.game) {\n        this.renderControls();\n        this.renderCourt();\n        this.renderPlayerTwo();\n        this.renderPlayerOne();\n      } else {\n        this.areas['game-controls'].appendChild(Object(_util_create_element__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('buttton', {\n          id: 'start-game',\n          text: 'Start Game',\n          onClick: function onClick() {\n            return _this5.runGame();\n          }\n        }));\n      } // this.rootEl.innerHTML = '';\n      // this.rootEl.appendChild(createElement('div',\n      //   { id: 'game' },\n      //   this.renderCurrentTarget(), this.renderCourt(), this.renderCurrentPlayer()\n      // ));\n\n    }\n  }]);\n\n  return Gameplay;\n}();\n\n\n\n//# sourceURL=webpack:///./src/render/gameplay.js?");

/***/ }),

/***/ "./src/util/create_card.js":
/*!*********************************!*\
  !*** ./src/util/create_card.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_element */ \"./src/util/create_element.js\");\n\n\nvar paper = __webpack_require__(/*! ../images/paper_texture.png */ \"./src/images/paper_texture.png\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var character = _ref.character,\n      image = _ref.image,\n      symbol = _ref.symbol,\n      effect = _ref.effect,\n      counteraction = _ref.counteraction,\n      brushStroke = _ref.brushStroke;\n  var characterImage = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', {\n    \"class\": 'card-image',\n    src: image\n  });\n  var characterSymbol = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', {\n    \"class\": 'card-symbol',\n    src: symbol\n  });\n  var characterName = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h2', {\n    \"class\": 'card-header',\n    text: character\n  });\n  var characterEffect = effect ? Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', {\n    \"class\": 'card-effect',\n    text: effect\n  }) : null;\n  var characterCounter = counteraction ? Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', {\n    \"class\": 'card-counter',\n    text: counteraction\n  }) : null;\n  var abilities = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('ul', {\n    \"class\": 'card-abilities',\n    style: \"background-image: url(\\\"\".concat(brushStroke, \"\\\");\")\n  }, characterEffect, characterCounter);\n  var cardTint = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n    \"class\": 'card-tint'\n  });\n  var card = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n    \"class\": character.toLowerCase(),\n    id: 'card',\n    style: \"background-image: url(\\\"\".concat(paper[\"default\"], \"\\\");\")\n  }, cardTint, characterName, characterImage, characterSymbol, abilities);\n  return card;\n});\n\n//# sourceURL=webpack:///./src/util/create_card.js?");

/***/ }),

/***/ "./src/util/create_coin.js":
/*!*********************************!*\
  !*** ./src/util/create_coin.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_element */ \"./src/util/create_element.js\");\n\n\nvar coinImg = __webpack_require__(/*! ../images/coin.png */ \"./src/images/coin.png\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (boxSize) {\n  var coin;\n\n  if (boxSize) {\n    coin = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n      \"class\": 'coin',\n      id: \"coin-\".concat(Math.random()),\n      style: \"background-image: url(\\\"\".concat(coinImg[\"default\"], \"\\\");\\n            position: absolute;\\n            left: \").concat(Math.random() * boxSize, \"px;\\n            top: \").concat(Math.random() * boxSize, \"px;\")\n    });\n  } else {\n    coin = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n      \"class\": 'coin',\n      id: \"coin-\".concat(Math.random()),\n      style: \"background-image: url(\\\"\".concat(coinImg[\"default\"], \"\\\");\")\n    });\n  }\n\n  return coin;\n});\n\n//# sourceURL=webpack:///./src/util/create_coin.js?");

/***/ }),

/***/ "./src/util/create_element.js":
/*!************************************!*\
  !*** ./src/util/create_element.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (tag, props) {\n  var element = document.createElement(tag);\n  Object.entries(props || {}).forEach(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        name = _ref2[0],\n        value = _ref2[1];\n\n    if (name === 'text') {\n      element.innerHTML = value;\n    } else if (name.startsWith('on') && name.toLowerCase() in window) {\n      element.addEventListener(name.toLowerCase().substring(2), value);\n    } else {\n      element.setAttribute(name, value.toString());\n    }\n  });\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  children.forEach(function (child) {\n    if (!child) return;\n    element.appendChild(child);\n  });\n  return element;\n});\n\n//# sourceURL=webpack:///./src/util/create_element.js?");

/***/ }),

/***/ "./src/util/create_face_down_card.js":
/*!*******************************************!*\
  !*** ./src/util/create_face_down_card.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_element */ \"./src/util/create_element.js\");\n\n\nvar cardBack = __webpack_require__(/*! ../images//brush-stroke/card_back.png */ \"./src/images/brush-stroke/card_back.png\");\n\nvar intersection = __webpack_require__(/*! ../images/intersection_texture.png */ \"./src/images/intersection_texture.png\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (deckCount, idx) {\n  var img = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n    \"class\": 'card-back',\n    style: \"background-image: url(\\\"\".concat(cardBack[\"default\"], \"\\\");\")\n  });\n  var headerOne = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h2', {\n    text: 'Coup'\n  });\n  var headerTwo = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h2', {\n    text: 'de Tim'\n  });\n  var header = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n    \"class\": 'card-back-header'\n  }, headerOne, headerTwo);\n  var tint = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n    \"class\": 'card-tint'\n  });\n  var card;\n\n  if (deckCount) {\n    var colStart = idx * 3 + 1;\n    var colEnd = colStart + 5;\n    card = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n      \"class\": 'face-down',\n      id: 'card',\n      style: \"\\n          background-image: url(\\\"\".concat(intersection[\"default\"], \"\\\");\\n          grid-row-start: 1;\\n          grid-column: \").concat(colStart, \" / \").concat(colEnd, \";\\n          \")\n    }, tint, img, header);\n  } else {\n    card = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n      \"class\": 'face-down',\n      id: 'card',\n      style: \"background-image: url(\\\"\".concat(intersection[\"default\"], \"\\\");\")\n    }, tint, img, header);\n  }\n\n  return card;\n});\n\n//# sourceURL=webpack:///./src/util/create_face_down_card.js?");

/***/ }),

/***/ "./src/util/dom_nodes_util.js":
/*!************************************!*\
  !*** ./src/util/dom_nodes_util.js ***!
  \************************************/
/*! exports provided: removeAllChildNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeAllChildNodes\", function() { return removeAllChildNodes; });\nvar removeAllChildNodes = function removeAllChildNodes(parent) {\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n};\n\n//# sourceURL=webpack:///./src/util/dom_nodes_util.js?");

/***/ }),

/***/ "./src/util/turn_control.js":
/*!**********************************!*\
  !*** ./src/util/turn_control.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_element */ \"./src/util/create_element.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (symbol, action, effect) {\n  var tooltipAction = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', {\n    \"class\": 'tooltip-action',\n    text: action\n  });\n  var tooltipEffect = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', {\n    \"class\": 'tooltip-effect',\n    text: effect\n  });\n  var tooltipText = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n    \"class\": 'tooltip-text'\n  }, tooltipAction, tooltipEffect);\n  return [Object(_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n    \"class\": 'turn-action-icon',\n    style: \"background-image: url(\\\"\".concat(symbol, \"\\\");\")\n  }), tooltipText];\n});\n\n//# sourceURL=webpack:///./src/util/turn_control.js?");

/***/ })

/******/ });