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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Lato:wght@100;300;400;700;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote,\\npre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small,\\nstrong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label,\\nlegend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas,\\ndetails, figcaption, figure, footer, header, hgroup, menu, nav, section,\\nsummary, time, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  outline: 0;\\n  font-size: 100%;\\n  vertical-align: baseline;\\n  background: transparent;\\n}\\n\\nhtml, body, div, span, object, iframe, p, blockquote,\\npre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small,\\nstrong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label,\\nlegend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas,\\ndetails, figcaption, figure, footer, header, hgroup, menu, nav, section,\\nsummary, time, mark, audio, video {\\n  font-family: \\\"Lato\\\", sans-serif;\\n}\\n\\nh1, h2, h3, h4, h5, h6 {\\n  font-family: \\\"Dancing Script\\\", cursive;\\n}\\n\\nbody {\\n  line-height: 1;\\n  margin: 0;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\ncode {\\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \\\"Courier New\\\", monospace;\\n}\\n\\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\\n  display: block;\\n}\\n\\nnav ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\n\\na {\\n  margin: 0;\\n  padding: 0;\\n  font-size: 100%;\\n  vertical-align: baseline;\\n  background: transparent;\\n}\\n\\ndel {\\n  text-decoration: line-through;\\n}\\n\\nabbr[title], dfn[title] {\\n  border-bottom: 1px dotted;\\n  cursor: help;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput, select {\\n  vertical-align: middle;\\n}\\n\\n#root {\\n  background: #FFFDF4;\\n}\\n\\n#root > h1 {\\n  font-weight: 700;\\n  font-size: 50px;\\n  color: #376171;\\n  text-shadow: 1px 1px 1px rgba(22, 28, 29, 0.75);\\n}\\n\\n.cards-list {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n#card {\\n  width: 240px;\\n  height: 336px;\\n  position: relative;\\n  border: 2px solid #161C1D;\\n  border-radius: 25px;\\n  overflow: hidden;\\n}\\n\\n.card-image {\\n  position: absolute;\\n  width: 100%;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  top: auto;\\n}\\n\\n.card-symbol {\\n  position: absolute;\\n  width: 25%;\\n  top: 2.5%;\\n  left: 0;\\n  right: auto;\\n  bottom: auto;\\n  z-index: 2;\\n}\\n\\n.card-abilities {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-content: flex-start;\\n  position: absolute;\\n  width: 115%;\\n  height: 15%;\\n  bottom: 0;\\n  left: -15%;\\n  right: 0;\\n  top: auto;\\n  background-repeat: no-repeat;\\n  background-size: 110% 95%;\\n  padding: 0;\\n  z-index: 1;\\n  padding-top: 5%;\\n  padding-bottom: 5%;\\n}\\n\\n.card-abilities > li {\\n  font-size: 12px;\\n  color: #FFFDF4;\\n  padding-left: 20%;\\n  padding-right: 2.5%;\\n  margin: 0;\\n}\\n\\n.card-header {\\n  position: absolute;\\n  margin: 0;\\n  padding: 0;\\n  right: 2.5%;\\n  top: 5%;\\n  bottom: auto;\\n  left: auto;\\n  font-size: 40px;\\n  text-shadow: 0.25px 0.25px 3px rgba(22, 28, 29, 0.75);\\n}\\n\\n#card.captain .card-header {\\n  color: #376171;\\n}\\n\\n#card.duke .card-header {\\n  color: #8A317B;\\n}\\n\\n#card.ambassador .card-header {\\n  color: #4C9870;\\n}\\n\\n#card.contessa .card-header {\\n  color: #9B332A;\\n}\\n\\n#card.assassin .card-header {\\n  color: #161C1D;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/application.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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
eval("__webpack_require__.r(__webpack_exports__);\nvar img = __webpack_require__(/*! ../images/characters/ambassador.png */ \"./src/images/characters/ambassador.png\");\n\nvar symbol = __webpack_require__(/*! ../images/symbols/ambassador.png */ \"./src/images/symbols/ambassador.png\");\n\nvar brush = __webpack_require__(/*! ../images/brush-stroke/ambassador.png */ \"./src/images/brush-stroke/ambassador.png\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  character: 'Ambassador',\n  image: img[\"default\"],\n  symbol: symbol[\"default\"],\n  action: 'Exchange',\n  effect: 'Exchange cards with Court Deck',\n  counteraction: 'Blocks stealing',\n  brushStroke: brush[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/characters/ambassador.js?");

/***/ }),

/***/ "./src/characters/assassin.js":
/*!************************************!*\
  !*** ./src/characters/assassin.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar img = __webpack_require__(/*! ../images/characters/assassin.png */ \"./src/images/characters/assassin.png\");\n\nvar symbol = __webpack_require__(/*! ../images/symbols/assassin.png */ \"./src/images/symbols/assassin.png\");\n\nvar brush = __webpack_require__(/*! ../images/brush-stroke/assassin.png */ \"./src/images/brush-stroke/assassin.png\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  character: 'Assassin',\n  image: img[\"default\"],\n  symbol: symbol[\"default\"],\n  action: 'Assassinate',\n  effect: 'Pay 3 coins to assassinate another player',\n  counteraction: '',\n  brushStroke: brush[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/characters/assassin.js?");

/***/ }),

/***/ "./src/characters/captain.js":
/*!***********************************!*\
  !*** ./src/characters/captain.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar img = __webpack_require__(/*! ../images/characters/captain.png */ \"./src/images/characters/captain.png\");\n\nvar symbol = __webpack_require__(/*! ../images/symbols/captain.png */ \"./src/images/symbols/captain.png\");\n\nvar brush = __webpack_require__(/*! ../images/brush-stroke/captain.png */ \"./src/images/brush-stroke/captain.png\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  character: 'Captain',\n  image: img[\"default\"],\n  symbol: symbol[\"default\"],\n  action: 'Steal',\n  effect: 'Take 2 coins from another player',\n  counteraction: 'Blocks stealing',\n  brushStroke: brush[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/characters/captain.js?");

/***/ }),

/***/ "./src/characters/contessa.js":
/*!************************************!*\
  !*** ./src/characters/contessa.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar img = __webpack_require__(/*! ../images/characters/contessa.png */ \"./src/images/characters/contessa.png\");\n\nvar symbol = __webpack_require__(/*! ../images/symbols/contessa.png */ \"./src/images/symbols/contessa.png\");\n\nvar brush = __webpack_require__(/*! ../images/brush-stroke/contessa.png */ \"./src/images/brush-stroke/contessa.png\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  character: 'Contessa',\n  image: img[\"default\"],\n  symbol: symbol[\"default\"],\n  action: '',\n  effect: '',\n  counteraction: 'Blocks assassination',\n  brushStroke: brush[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/characters/contessa.js?");

/***/ }),

/***/ "./src/characters/duke.js":
/*!********************************!*\
  !*** ./src/characters/duke.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar img = __webpack_require__(/*! ../images/characters/duke.png */ \"./src/images/characters/duke.png\");\n\nvar symbol = __webpack_require__(/*! ../images/symbols/duke.png */ \"./src/images/symbols/duke.png\");\n\nvar brush = __webpack_require__(/*! ../images/brush-stroke/duke.png */ \"./src/images/brush-stroke/duke.png\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  character: 'Duke',\n  image: img[\"default\"],\n  symbol: symbol[\"default\"],\n  action: 'Tax',\n  effect: 'Take 3 coins from Treasury',\n  counteraction: 'Blocks Foreign Aid',\n  brushStroke: brush[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/characters/duke.js?");

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

/***/ "./src/images/symbols/duke.png":
/*!*************************************!*\
  !*** ./src/images/symbols/duke.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/9bf2208e5f9e0daa74ff53789e241f36.png\");\n\n//# sourceURL=webpack:///./src/images/symbols/duke.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _application_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application.scss */ \"./src/application.scss\");\n/* harmony import */ var _application_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_application_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/createElement */ \"./src/util/createElement.js\");\n/* harmony import */ var _util_createCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/createCard */ \"./src/util/createCard.js\");\n/* harmony import */ var _characters_duke__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters/duke */ \"./src/characters/duke.js\");\n/* harmony import */ var _characters_assassin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./characters/assassin */ \"./src/characters/assassin.js\");\n/* harmony import */ var _characters_ambassador__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters/ambassador */ \"./src/characters/ambassador.js\");\n/* harmony import */ var _characters_captain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characters/captain */ \"./src/characters/captain.js\");\n/* harmony import */ var _characters_contessa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./characters/contessa */ \"./src/characters/contessa.js\");\n\n\n\n\n\n\n\n\nvar header = Object(_util_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('h1', {\n  text: 'Coup de Tim'\n});\nvar dukeCard = Object(_util_createCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_characters_duke__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar assassinCard = Object(_util_createCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_characters_assassin__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar ambassadorCard = Object(_util_createCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_characters_ambassador__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nvar captainCard = Object(_util_createCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_characters_captain__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nvar contessaCard = Object(_util_createCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_characters_contessa__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\nvar cards = Object(_util_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', {\n  \"class\": 'cards-list'\n}, dukeCard, assassinCard, ambassadorCard, captainCard, contessaCard);\nvar root = Object(_util_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', {\n  id: 'root'\n}, header, cards);\ndocument.body.appendChild(root);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/util/createCard.js":
/*!********************************!*\
  !*** ./src/util/createCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/util/createElement.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var character = _ref.character,\n      image = _ref.image,\n      symbol = _ref.symbol,\n      effect = _ref.effect,\n      counteraction = _ref.counteraction,\n      brushStroke = _ref.brushStroke;\n  var characterImage = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', {\n    \"class\": 'card-image',\n    src: image\n  });\n  var characterSymbol = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', {\n    \"class\": 'card-symbol',\n    src: symbol\n  });\n  var characterName = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h2', {\n    \"class\": 'card-header',\n    text: character\n  });\n  var characterEffect = effect ? Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', {\n    \"class\": 'card-effect',\n    text: effect\n  }) : null;\n  var characterCounter = counteraction ? Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', {\n    \"class\": 'card-counter',\n    text: counteraction\n  }) : null;\n  var abilities = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('ul', {\n    \"class\": 'card-abilities',\n    style: \"background-image: url(\\\"\".concat(brushStroke, \"\\\");\")\n  }, characterEffect, characterCounter);\n  var card = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n    \"class\": character.toLowerCase(),\n    id: 'card'\n  }, characterName, characterImage, characterSymbol, abilities);\n  return card;\n});\n\n//# sourceURL=webpack:///./src/util/createCard.js?");

/***/ }),

/***/ "./src/util/createElement.js":
/*!***********************************!*\
  !*** ./src/util/createElement.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (tag, props) {\n  var element = document.createElement(tag);\n  Object.entries(props || {}).forEach(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        name = _ref2[0],\n        value = _ref2[1];\n\n    if (name === 'text') {\n      element.innerHTML = value;\n    } else if (name.startsWith('on') && name.toLowerCase() in window) {\n      element.addEventListener(name.toLowerCase().substring(2), value);\n    } else {\n      element.setAttribute(name, value.toString());\n    }\n  });\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  for (var _i2 = 0, _children = children; _i2 < _children.length; _i2++) {\n    var child = _children[_i2];\n    if (!child) continue;\n    element.appendChild(child);\n  }\n\n  return element;\n});\n\n//# sourceURL=webpack:///./src/util/createElement.js?");

/***/ })

/******/ });