/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/styles.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/styles.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n    --main-bg-color: #0e0e0e;\\r\\n    --main-text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);\\r\\n\\r\\n    --bottom-menu-color: #1e1d1b;\\r\\n\\r\\n    --search-input-bg-color: #262629;\\r\\n}\\r\\n\\r\\n* {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    border: 0;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\n/* This prevents bouncing on Safari mobile and push-yu-update on Chrome mobile */\\r\\nhtml, body {\\r\\n    overscroll-behavior-y: none;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n    font-size: 16px;\\r\\n    font-family: Ubuntu, \\\"Droid Sans\\\", sans-serif;\\r\\n    height: 100vh;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\nbody > div {\\r\\n    display: flex;\\r\\n    flex-flow: column nowrap;\\r\\n    justify-content: flex-start;\\r\\n    align-items: flex-start;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n\\r\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://cocktails_app/./src/styles.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://cocktails_app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://cocktails_app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/icons/circle-plus.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/circle-plus.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"eb7dae287ad2e613fe4e3a1d7e16835c.svg\");\n\n//# sourceURL=webpack://cocktails_app/./src/assets/icons/circle-plus.svg?");

/***/ }),

/***/ "./src/assets/icons/cross.svg":
/*!************************************!*\
  !*** ./src/assets/icons/cross.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"6837248f26b4746bca22dce7c606b744.svg\");\n\n//# sourceURL=webpack://cocktails_app/./src/assets/icons/cross.svg?");

/***/ }),

/***/ "./src/assets/icons/house.svg":
/*!************************************!*\
  !*** ./src/assets/icons/house.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"cabdbaed4a865c86e30e165f1a445972.svg\");\n\n//# sourceURL=webpack://cocktails_app/./src/assets/icons/house.svg?");

/***/ }),

/***/ "./src/assets/icons/search.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/search.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"be1aa88c7405f7bb57db70c9cf2f6b6f.svg\");\n\n//# sourceURL=webpack://cocktails_app/./src/assets/icons/search.svg?");

/***/ }),

/***/ "./src/assets/icons/star.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/star.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"8f2f619ab052e2c2eb933e8b60ac316d.svg\");\n\n//# sourceURL=webpack://cocktails_app/./src/assets/icons/star.svg?");

/***/ }),

/***/ "./src/assets/icons/user-solid.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/user-solid.svg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"63a0a7054c9fb825770d484065dd440c.svg\");\n\n//# sourceURL=webpack://cocktails_app/./src/assets/icons/user-solid.svg?");

/***/ }),

/***/ "./src/assets/images/cocktail-example1.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/cocktail-example1.jpg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"e17dbcf18e4a157caa1b41def42e6702.jpg\");\n\n//# sourceURL=webpack://cocktails_app/./src/assets/images/cocktail-example1.jpg?");

/***/ }),

/***/ "./src/assets/images/mojito.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/mojito.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"fca28d76e2abf021a08b71eaf4393b4c.jpg\");\n\n//# sourceURL=webpack://cocktails_app/./src/assets/images/mojito.jpg?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./styles.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./styles.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/styles.css\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./styles.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/styles.css\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://cocktails_app/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://cocktails_app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://cocktails_app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://cocktails_app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://cocktails_app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://cocktails_app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://cocktails_app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Router.ts":
/*!***********************!*\
  !*** ./src/Router.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Router)\n/* harmony export */ });\nclass Router {\n    constructor() {\n        this.route = '';\n    }\n    switchPage(app, path) {\n        if (this.route === path) {\n            return;\n        }\n        this.route = path;\n        let newPage;\n        switch (this.route) {\n            case '/favourites':\n                newPage = document.createElement('x-favourites-cocktails-list');\n                break;\n            case '/home':\n                newPage = document.createElement('x-cocktail-page');\n                break;\n        }\n        app.changePage(newPage);\n    }\n    getCurrentRoute() {\n        return this.route;\n    }\n}\n\n\n//# sourceURL=webpack://cocktails_app/./src/Router.ts?");

/***/ }),

/***/ "./src/components/App/App.ts":
/*!***********************************!*\
  !*** ./src/components/App/App.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APP_EVENT_CHANGE_ROUTE\": () => (/* binding */ APP_EVENT_CHANGE_ROUTE),\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ \"./src/components/Component/index.ts\");\n/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Router */ \"./src/Router.ts\");\n\n\n// Primary\n// Todo ?????????????????????? ?????? ??????????????, ????????????????????, ?????????????????????? ?? ?????????????????? ???? ???????????? ??????????????????\n// Todo ???????????????? ?????? ???????????????? ???????????????? ?? ?????????????????? ????????????????\n// Secondary\n// Todo ???????????????? ????????????????\n// Todo ?????????????????????????????? ???? ?????????????????? \"flex: 0 1 auto;\"\n// Todo ?????????????????????? ?? ?????????????????? ?? shadow dom \"https://javascript.info/shadow-dom-events\"\n// Webpack\n// Todo ???????????? webpack-dev-server ?????????????? ??????????? ???????????? ?????????????? ?????????????\n// Todo ?????????????????????? ?? ???????????? ?????? ???????????????? ???????????????? ?? ????.\nconst APP_EVENT_CHANGE_ROUTE = 'APP_EVENT_CHANGE_ROUTE';\nclass App extends _Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(options) {\n        super(options);\n        this.router = new _Router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.cocktailsList = null;\n        this.pageContainer = null;\n    }\n    connectedCallback() {\n        this.pageContainer = this.shadowRoot.querySelector('.page-container');\n        this.shadowRoot.addEventListener(APP_EVENT_CHANGE_ROUTE, (e) => {\n            this.switchPage(e.detail.route);\n        });\n        this.switchPage('/home');\n    }\n    getTemplate() {\n        return `\r\n            <div class=\"page-container\"></div>\r\n        `;\n    }\n    getStyles() {\n        return `\r\n            :host * {\r\n                box-sizing: border-box;\r\n            }\r\n            \r\n            :host {\r\n                height: 100%;\r\n                width: 100%;\r\n            }\r\n            \r\n            :host > .page-container {\r\n                width: 100%;\r\n                height: 100%;\r\n            }\r\n        `;\n    }\n    switchPage(path) {\n        // Delegate switching work to router\n        this.router.switchPage(this, path);\n    }\n    changePage(page) {\n        if (this.pageContainer.firstChild) {\n            this.pageContainer.removeChild(this.pageContainer.firstElementChild);\n        }\n        this.pageContainer.append(page);\n    }\n}\ncustomElements.define('x-app', App);\n\n\n//# sourceURL=webpack://cocktails_app/./src/components/App/App.ts?");

/***/ }),

/***/ "./src/components/App/index.ts":
/*!*************************************!*\
  !*** ./src/components/App/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/components/App/App.ts\");\n\n\n\n//# sourceURL=webpack://cocktails_app/./src/components/App/index.ts?");

/***/ }),

/***/ "./src/components/BottomMenu/BottomMenu.ts":
/*!*************************************************!*\
  !*** ./src/components/BottomMenu/BottomMenu.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BottomMenu)\n/* harmony export */ });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ \"./src/components/Component/index.ts\");\n/* harmony import */ var _assets_icons_house_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icons/house.svg */ \"./src/assets/icons/house.svg\");\n/* harmony import */ var _assets_icons_search_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons/search.svg */ \"./src/assets/icons/search.svg\");\n/* harmony import */ var _assets_icons_circle_plus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons/circle-plus.svg */ \"./src/assets/icons/circle-plus.svg\");\n/* harmony import */ var _assets_icons_star_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/star.svg */ \"./src/assets/icons/star.svg\");\n/* harmony import */ var _assets_icons_user_solid_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/icons/user-solid.svg */ \"./src/assets/icons/user-solid.svg\");\n/* harmony import */ var _App_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../App/App */ \"./src/components/App/App.ts\");\n\n\n\n\n\n\n\nclass BottomMenu extends _Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(options) {\n        super(options);\n        this.onHomeBtnClick = this.onHomeBtnClick.bind(this);\n        this.onFavouritesBtnClick = this.onFavouritesBtnClick.bind(this);\n    }\n    connectedCallback() {\n        const homeBtn = this.shadowRoot.querySelector('[data-name=\"home-btn\"]');\n        homeBtn.addEventListener('click', this.onHomeBtnClick);\n        const favouritesBtn = this.shadowRoot.querySelector('[data-name=\"favourites-btn\"]');\n        favouritesBtn.addEventListener('click', this.onFavouritesBtnClick);\n    }\n    getTemplate() {\n        return `\r\n            <button data-name=\"home-btn\">\r\n                <img src=\"${_assets_icons_house_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]}\" alt=\"Home\">\r\n                <span>Home</span>\r\n            </button>\r\n            <button>\r\n                <img src=\"${_assets_icons_search_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}\" alt=\"Search\">\r\n                <span>Search</span>\r\n            </button>\r\n            <button>\r\n                <img src=\"${_assets_icons_circle_plus_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]}\" alt=\"Create\">\r\n                <span>Create</span>\r\n            </button>\r\n            <button data-name=\"favourites-btn\">\r\n                <img src=\"${_assets_icons_star_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"]}\" alt=\"Favourites\">\r\n                <span>Favourites</span>\r\n            </button>\r\n            <button>\r\n                <img src=\"${_assets_icons_user_solid_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]}\" alt=\"Profile\">\r\n                <span>Profile</span>\r\n            </button>\r\n        `;\n    }\n    getStyles() {\n        return `     \r\n            :host {\r\n                display: flex;\r\n                flex-flow: row nowrap;\r\n                justify-content: space-evenly;\r\n                align-items: center;\r\n                width: 100%;\r\n                padding: 14px 0;\r\n                background-color: var(--bottom-menu-color);\r\n                border-top: 1px solid gray;\r\n                z-index: 1;\r\n            }\r\n            \r\n            @media screen and (min-width: 1200px) {\r\n                :host {\r\n                    display: none;\r\n                }\r\n            }\r\n            \r\n            button {\r\n                display: flex;\r\n                flex-flow: column nowrap;\r\n                justify-content: center;\r\n                align-items: center;\r\n                background-color: transparent;\r\n                color: #636363;\r\n                font-size: 0.75rem;\r\n                text-shadow: var(--main-text-shadow);\r\n                text-align: center;\r\n                /* All children has the same width */\r\n                width: 0;\r\n                flex: 1 1 0px;\r\n                padding: 0;\r\n                border: 0;\r\n            }\r\n            \r\n            button > img {\r\n                width: 18px;\r\n                height: 18px;\r\n                margin-bottom: 4px;\r\n            }\r\n        `;\n    }\n    onHomeBtnClick(e) {\n        e.stopPropagation();\n        this.dispatchEvent(new CustomEvent(_App_App__WEBPACK_IMPORTED_MODULE_6__.APP_EVENT_CHANGE_ROUTE, {\n            bubbles: true,\n            composed: true,\n            detail: { route: '/home' }\n        }));\n    }\n    onFavouritesBtnClick(e) {\n        e.stopPropagation();\n        this.dispatchEvent(new CustomEvent(_App_App__WEBPACK_IMPORTED_MODULE_6__.APP_EVENT_CHANGE_ROUTE, {\n            bubbles: true,\n            composed: true,\n            detail: { route: '/favourites' }\n        }));\n    }\n}\ncustomElements.define('x-bottom-menu', BottomMenu);\n\n\n//# sourceURL=webpack://cocktails_app/./src/components/BottomMenu/BottomMenu.ts?");

/***/ }),

/***/ "./src/components/BottomMenu/index.ts":
/*!********************************************!*\
  !*** ./src/components/BottomMenu/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _BottomMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _BottomMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BottomMenu */ \"./src/components/BottomMenu/BottomMenu.ts\");\n\n\n\n//# sourceURL=webpack://cocktails_app/./src/components/BottomMenu/index.ts?");

/***/ }),

/***/ "./src/components/CocktailPage/CocktailPage.ts":
/*!*****************************************************!*\
  !*** ./src/components/CocktailPage/CocktailPage.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CocktailPage)\n/* harmony export */ });\n/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Page */ \"./src/components/Page/index.ts\");\n\nclass CocktailPage extends _Page__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(options) {\n        super(options);\n    }\n    getTemplate() {\n        return `\r\n            <x-side-menu></x-side-menu>\r\n        `;\n    }\n    getStyles() {\n        return super.getStyles().concat(`\r\n            :host {\r\n                background-color: yellow;\r\n            }\r\n        `);\n    }\n}\ncustomElements.define('x-cocktail-page', CocktailPage);\n\n\n//# sourceURL=webpack://cocktails_app/./src/components/CocktailPage/CocktailPage.ts?");

/***/ }),

/***/ "./src/components/CocktailPage/index.ts":
/*!**********************************************!*\
  !*** ./src/components/CocktailPage/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _CocktailPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _CocktailPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CocktailPage */ \"./src/components/CocktailPage/CocktailPage.ts\");\n\n\n\n//# sourceURL=webpack://cocktails_app/./src/components/CocktailPage/index.ts?");

/***/ }),

/***/ "./src/components/CocktailsList/CocktailsList.ts":
/*!*******************************************************!*\
  !*** ./src/components/CocktailsList/CocktailsList.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CocktailsList)\n/* harmony export */ });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ \"./src/components/Component/index.ts\");\n\nclass CocktailsList extends _Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(options) {\n        super(options);\n    }\n    getTemplate() {\n        return `\r\n            <slot></slot>\r\n        `;\n    }\n    getStyles() {\n        return `\r\n            :host {\r\n                display: grid;\r\n                grid-template-columns: 1fr 1fr;\r\n                grid-auto-rows: 220px;\r\n                gap: 10px;\r\n                width: 100%;\r\n                overflow: auto;\r\n                z-index: 0;\r\n                padding: 0 10px 14px;\r\n            }\r\n            \r\n            @media screen and (min-width: 1200px) {\r\n                :host {\r\n                    grid-template-columns: 260px 260px;\r\n                    grid-auto-rows: 400px;\r\n                    grid-auto-flow: row dense;\r\n                }\r\n            }\r\n        `;\n    }\n}\ncustomElements.define('x-cocktails-list', CocktailsList);\n\n\n//# sourceURL=webpack://cocktails_app/./src/components/CocktailsList/CocktailsList.ts?");

/***/ }),

/***/ "./src/components/CocktailsList/index.ts":
/*!***********************************************!*\
  !*** ./src/components/CocktailsList/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _CocktailsList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _CocktailsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CocktailsList */ \"./src/components/CocktailsList/CocktailsList.ts\");\n\n\n\n//# sourceURL=webpack://cocktails_app/./src/components/CocktailsList/index.ts?");

/***/ }),

/***/ "./src/components/CocktailsListItem/CocktailsListItem.ts":
/*!***************************************************************!*\
  !*** ./src/components/CocktailsListItem/CocktailsListItem.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CocktailsListItem)\n/* harmony export */ });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ \"./src/components/Component/index.ts\");\n\nclass CocktailsListItem extends _Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(options) {\n        super(options);\n    }\n    getTemplate() {\n        const imgSrc = this.getAttribute('img-src');\n        const description = this.getAttribute('description');\n        return `\r\n            <img src=\"${imgSrc}\" alt=\"Cocktail image\"/>\r\n            <span>${description}</span>\r\n        `;\n    }\n    getStyles() {\n        return `\r\n            :host {\r\n                display: flex;\r\n                flex-flow: column nowrap;\r\n                justify-content: flex-end;\r\n                align-items: flex-start;\r\n                position: relative;\r\n                border-radius: 20px;\r\n                padding: 10px 20px;\r\n            }\r\n        \r\n            img {\r\n                display: block;\r\n                position: absolute;\r\n                left: 0;\r\n                top: 0;\r\n                width: 100%;\r\n                height: 100%;\r\n                border-radius: inherit;\r\n                filter: opacity(0.75);\r\n                z-index: 0;\r\n            }\r\n        \r\n            span {\r\n                color: white;\r\n                font-size: 1.2rem;\r\n                text-shadow: var(--main-text-shadow);\r\n                text-align: left;\r\n                z-index: 1;\r\n                margin: 0;\r\n            }\r\n        `;\n    }\n}\ncustomElements.define('x-cocktails-list-item', CocktailsListItem);\n\n\n//# sourceURL=webpack://cocktails_app/./src/components/CocktailsListItem/CocktailsListItem.ts?");

/***/ }),

/***/ "./src/components/CocktailsListItem/index.ts":
/*!***************************************************!*\
  !*** ./src/components/CocktailsListItem/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _CocktailsListItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _CocktailsListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CocktailsListItem */ \"./src/components/CocktailsListItem/CocktailsListItem.ts\");\n\n\n\n//# sourceURL=webpack://cocktails_app/./src/components/CocktailsListItem/index.ts?");

/***/ }),

/***/ "./src/components/Component/Component.ts":
/*!***********************************************!*\
  !*** ./src/components/Component/Component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Component)\n/* harmony export */ });\nclass Component extends HTMLElement {\n    constructor(options) {\n        super();\n        this.options = options;\n        this.attachShadow({ mode: 'open' });\n        this.applyTemplate();\n        this.applyStyles();\n    }\n    getTemplate() {\n        return ``;\n    }\n    ;\n    getStyles() {\n        return ``;\n    }\n    ;\n    applyTemplate() {\n        const template = this.getTemplate().trim();\n        if (!template) {\n            return;\n        }\n        this.shadowRoot.innerHTML = template;\n    }\n    applyStyles() {\n        const cssText = this.getStyles().trim();\n        if (!cssText) {\n            return;\n        }\n        const styleSheet = document.createElement('style');\n        styleSheet.textContent = cssText;\n        this.shadowRoot.append(styleSheet);\n    }\n}\n\n\n//# sourceURL=webpack://cocktails_app/./src/components/Component/Component.ts?");

/***/ }),

/***/ "./src/components/Component/index.ts":
/*!*******************************************!*\
  !*** ./src/components/Component/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/components/Component/Component.ts\");\n\n\n\n//# sourceURL=webpack://cocktails_app/./src/components/Component/index.ts?");

/***/ }),

/***/ "./src/components/FavouritesCocktailsList/FavouritesCocktailsList.ts":
/*!***************************************************************************!*\
  !*** ./src/components/FavouritesCocktailsList/FavouritesCocktailsList.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FavouritesCocktailsList)\n/* harmony export */ });\n/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Page */ \"./src/components/Page/index.ts\");\n/* harmony import */ var _assets_images_cocktail_example1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/cocktail-example1.jpg */ \"./src/assets/images/cocktail-example1.jpg\");\n/* harmony import */ var _assets_images_mojito_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/mojito.jpg */ \"./src/assets/images/mojito.jpg\");\n\n\n\nconst MOCK_COCKTAILS_DATA = [\n    {\n        img: _assets_images_cocktail_example1_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        description: 'Orange fresh',\n    },\n    {\n        img: _assets_images_mojito_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        description: 'Mojito',\n    },\n    {\n        img: _assets_images_mojito_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        description: 'Mojito',\n    },\n    {\n        img: _assets_images_cocktail_example1_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        description: 'Orange fresh',\n    },\n    {\n        img: _assets_images_cocktail_example1_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        description: 'Orange fresh',\n    },\n    {\n        img: _assets_images_mojito_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        description: 'Mojito',\n    },\n    {\n        img: _assets_images_mojito_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        description: 'Mojito',\n    },\n    {\n        img: _assets_images_cocktail_example1_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        description: 'Orange fresh',\n    },\n    {\n        img: _assets_images_cocktail_example1_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        description: 'Orange fresh',\n    },\n    {\n        img: _assets_images_mojito_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        description: 'Mojito',\n    },\n    {\n        img: _assets_images_mojito_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        description: 'Mojito',\n    },\n    {\n        img: _assets_images_cocktail_example1_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        description: 'Orange fresh',\n    }\n];\nclass FavouritesCocktailsList extends _Page__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    static getListItems() {\n        const items = [];\n        for (let cocktailData of MOCK_COCKTAILS_DATA) {\n            items.push(`\r\n                <x-cocktails-list-item\r\n                    img-src=\"${cocktailData.img}\"\r\n                    description=\"${cocktailData.description}\"\r\n                ></x-cocktails-list-item>\r\n            `);\n        }\n        return items.join('');\n    }\n    constructor(options) {\n        super(options);\n    }\n    getTemplate() {\n        return `\r\n            <x-search-input></x-search-input>\r\n            <x-cocktails-list>\r\n                ${FavouritesCocktailsList.getListItems()}\r\n            </x-cocktails-list>\r\n            <x-bottom-menu></x-bottom-menu>\r\n        `;\n    }\n    getStyles() {\n        return super.getStyles().concat(`\r\n            :host > x-bottom-menu {\r\n                flex: 1 0 auto;\r\n            }\r\n            \r\n            :host > x-search-input {\r\n                flex: 1 0 auto;\r\n            }            \r\n            \r\n            :host > x-cocktails-list {\r\n                flex: 0 1 100%;\r\n            }\r\n        `);\n    }\n}\ncustomElements.define('x-favourites-cocktails-list', FavouritesCocktailsList);\n\n\n//# sourceURL=webpack://cocktails_app/./src/components/FavouritesCocktailsList/FavouritesCocktailsList.ts?");

/***/ }),

/***/ "./src/components/FavouritesCocktailsList/index.ts":
/*!*********************************************************!*\
  !*** ./src/components/FavouritesCocktailsList/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _FavouritesCocktailsList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _FavouritesCocktailsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FavouritesCocktailsList */ \"./src/components/FavouritesCocktailsList/FavouritesCocktailsList.ts\");\n\n\n\n//# sourceURL=webpack://cocktails_app/./src/components/FavouritesCocktailsList/index.ts?");

/***/ }),

/***/ "./src/components/Page/Page.ts":
/*!*************************************!*\
  !*** ./src/components/Page/Page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ \"./src/components/Component/index.ts\");\n\nclass Page extends _Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(options) {\n        super(options);\n    }\n    getStyles() {\n        return `\r\n            :host * {\r\n                box-sizing: border-box;\r\n            }\r\n            \r\n            :host {\r\n                display: flex;\r\n                flex-flow: column nowrap;\r\n                justify-content: flex-start;\r\n                align-items: flex-start;\r\n                background-color: var(--main-bg-color);\r\n                font-size: 1.5rem;\r\n                height: 100%;\r\n                width: 100%;\r\n            }\r\n        `;\n    }\n}\ncustomElements.define('x-page', Page);\n\n\n//# sourceURL=webpack://cocktails_app/./src/components/Page/Page.ts?");

/***/ }),

/***/ "./src/components/Page/index.ts":
/*!**************************************!*\
  !*** ./src/components/Page/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _Page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page */ \"./src/components/Page/Page.ts\");\n\n\n\n//# sourceURL=webpack://cocktails_app/./src/components/Page/index.ts?");

/***/ }),

/***/ "./src/components/SearchInput/SearchInput.ts":
/*!***************************************************!*\
  !*** ./src/components/SearchInput/SearchInput.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SearchInput)\n/* harmony export */ });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ \"./src/components/Component/index.ts\");\n/* harmony import */ var _assets_icons_cross_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icons/cross.svg */ \"./src/assets/icons/cross.svg\");\n\n\nconst SEARCH_INPUT_EVENT_RESET = 'SEARCH_INPUT_EVENT_RESET';\nclass SearchInput extends _Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(options) {\n        super(options);\n        this.resetBtn = null;\n        this.input = null;\n        this.onResetBtnClick = this.onResetBtnClick.bind(this);\n    }\n    connectedCallback() {\n        this.resetBtn = this.shadowRoot.querySelector('button');\n        this.input = this.shadowRoot.querySelector('input');\n        this.resetBtn.addEventListener('click', this.onResetBtnClick);\n    }\n    onResetBtnClick() {\n        this.input.value = '';\n        this.dispatchEvent(new CustomEvent(SEARCH_INPUT_EVENT_RESET, { bubbles: true, composed: true }));\n    }\n    getTemplate() {\n        return `\r\n            <div class=\"search-container\">\r\n                <input type=\"text\" placeholder=\"Search some cocktail...\" />\r\n                <button>\r\n                    <img src=\"${_assets_icons_cross_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]}\" alt=\"Reset\">\r\n                </button>\r\n            </div>\r\n        `;\n    }\n    getStyles() {\n        return `\r\n            :host * {\r\n                outline: 0;\r\n                border: 0;\r\n                padding: 0;\r\n                margin: 0;\r\n                box-sizing: border-box;\r\n            }\r\n            \r\n            :host {\r\n                display: flex;\r\n                flex-flow: row nowrap;\r\n                justify-content: flex-end;\r\n                align-items: center;\r\n                padding: 14px 10px;\r\n                width: 100%;\r\n                background-color: var(--main-bg-color);\r\n            }\r\n            \r\n            @media screen and (min-width: 1200px) {\r\n                :host {\r\n                    width: 500px;\r\n                }\r\n            }\r\n            \r\n            .search-container {\r\n                display: flex;\r\n                flex-flow: row nowrap;\r\n                justify-content: space-between;\r\n                align-items: center;\r\n                width: 100%;\r\n                border-radius: 10px;\r\n                background-color: var(--search-input-bg-color);\r\n                padding: 10px;\r\n            }\r\n            \r\n            .search-container > input {\r\n                flex: 1 1 100%;\r\n                color: white;\r\n                font-size: 1.1rem;\r\n                text-shadow: var(--main-text-shadow);\r\n                background-color: transparent;\r\n                margin-right: 10px;\r\n            }\r\n            \r\n            .search-container > input::placeholder {\r\n                color: gray;\r\n                text-shadow: var(--main-text-shadow);\r\n            }\r\n            \r\n            .search-container > button {\r\n                display: flex;\r\n                flex-flow: column nowrap;\r\n                justify-content: center;\r\n                align-items: center;\r\n                flex: 1 0 auto;\r\n                background-color: lightgray;\r\n                color: black;\r\n                width: 20px;\r\n                height: 20px;\r\n                border-radius: 50%;\r\n                padding: 4px;\r\n                font-size: 0.8rem;\r\n            }\r\n            \r\n            .search-container > button > img {\r\n                width: 100%;\r\n                height: 100%;\r\n            }\r\n        `;\n    }\n}\ncustomElements.define('x-search-input', SearchInput);\n\n\n//# sourceURL=webpack://cocktails_app/./src/components/SearchInput/SearchInput.ts?");

/***/ }),

/***/ "./src/components/SearchInput/index.ts":
/*!*********************************************!*\
  !*** ./src/components/SearchInput/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _SearchInput__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchInput */ \"./src/components/SearchInput/SearchInput.ts\");\n\n\n\n//# sourceURL=webpack://cocktails_app/./src/components/SearchInput/index.ts?");

/***/ }),

/***/ "./src/components/SideMenu/SideMenu.ts":
/*!*********************************************!*\
  !*** ./src/components/SideMenu/SideMenu.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SideMenu)\n/* harmony export */ });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ \"./src/components/Component/index.ts\");\n/* harmony import */ var _assets_icons_house_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icons/house.svg */ \"./src/assets/icons/house.svg\");\n/* harmony import */ var _assets_icons_search_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons/search.svg */ \"./src/assets/icons/search.svg\");\n/* harmony import */ var _assets_icons_circle_plus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons/circle-plus.svg */ \"./src/assets/icons/circle-plus.svg\");\n/* harmony import */ var _assets_icons_star_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/star.svg */ \"./src/assets/icons/star.svg\");\n/* harmony import */ var _assets_icons_user_solid_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/icons/user-solid.svg */ \"./src/assets/icons/user-solid.svg\");\n/* harmony import */ var _App_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../App/App */ \"./src/components/App/App.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\n\nclass TransitionAnimator {\n    constructor() {\n        this.enqueueAnimation = (fn) => {\n            requestAnimationFrame(() => requestAnimationFrame(() => {\n                fn();\n            }));\n        };\n    }\n    animate(options) {\n        const { target, type, startValue, endValue, easing, time } = options;\n        target.style.setProperty('transition', `${type} ${time} ${easing}`);\n        target.style.setProperty(`${type}`, `${startValue}`);\n        return new Promise((resolve) => {\n            const onTransitionEnd = () => {\n                target.removeEventListener('transitionend', onTransitionEnd);\n                target.style.removeProperty('transition');\n                resolve();\n            };\n            target.addEventListener('transitionend', onTransitionEnd);\n            const onAnimate = () => {\n                target.style.setProperty(`${type}`, `${endValue}`);\n            };\n            this.enqueueAnimation(onAnimate);\n        });\n    }\n}\nclass SideMenu extends _Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(options) {\n        super(options);\n        this.transitionAnimator = new TransitionAnimator();\n        this.classList.add('hide');\n        this.show = this.show.bind(this);\n        this.hide = this.hide.bind(this);\n    }\n    connectedCallback() {\n        const homeBtn = this.shadowRoot.querySelector('[data-name=\"home-btn\"]');\n        homeBtn.addEventListener('click', this.onHomeBtnClick);\n        const favouritesBtn = this.shadowRoot.querySelector('[data-name=\"favourites-btn\"]');\n        favouritesBtn.addEventListener('click', this.onFavouritesBtnClick);\n        this.animateTest().then(() => console.warn('Animation ended'));\n    }\n    getTemplate() {\n        return `\n            <button data-name=\"home-btn\">\n                <img src=\"${_assets_icons_house_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]}\" alt=\"Home\">\n                <span>Home</span>\n            </button>\n            <button>\n                <img src=\"${_assets_icons_search_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}\" alt=\"Search\">\n                <span>Search</span>\n            </button>\n            <button>\n                <img src=\"${_assets_icons_circle_plus_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]}\" alt=\"Create\">\n                <span>Create</span>\n            </button>\n            <button data-name=\"favourites-btn\">\n                <img src=\"${_assets_icons_star_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"]}\" alt=\"Favourites\">\n                <span>Favourites</span>\n            </button>\n            <button>\n                <img src=\"${_assets_icons_user_solid_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]}\" alt=\"Profile\">\n                <span>Profile</span>\n            </button>\n        `;\n    }\n    getStyles() {\n        return `\n            :host {\n                --btn-icon-size: 24px;\n            \n                display: flex;\n                flex-flow: column nowrap;\n                justify-content: flex-start;\n                align-items: flex-start;\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 90%;\n                height: 100%;\n                background-color: var(--bottom-menu-color);\n                box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n                z-index: 1;\n                \n                transition: all 0.25s ease-out;\n            }          \n            \n            :host(.hide) {\n                transform: translate(-100%, 0);\n            }\n            \n            button {\n                display: flex;\n                flex-flow: row nowrap;\n                justify-content: flex-start;\n                align-items: baseline;\n                background-color: transparent;\n                color: #636363;\n                font-size: 1.5rem;\n                text-shadow: var(--main-text-shadow);\n                text-align: center;\n                width: 100%;\n                padding: 20px;\n                border: 0;\n            }\n            \n            button > img {\n                width: var(--btn-icon-size);\n                height: var(--btn-icon-size);\n                margin-right: 10px;\n            }\n        `;\n    }\n    onHomeBtnClick(e) {\n        e.stopPropagation();\n        this.dispatchEvent(new CustomEvent(_App_App__WEBPACK_IMPORTED_MODULE_6__.APP_EVENT_CHANGE_ROUTE, {\n            bubbles: true,\n            composed: true,\n            detail: { route: '/home' }\n        }));\n    }\n    onFavouritesBtnClick(e) {\n        e.stopPropagation();\n        this.dispatchEvent(new CustomEvent(_App_App__WEBPACK_IMPORTED_MODULE_6__.APP_EVENT_CHANGE_ROUTE, {\n            bubbles: true,\n            composed: true,\n            detail: { route: '/favourites' }\n        }));\n    }\n    show() {\n        this.classList.remove('hide');\n    }\n    hide() {\n        this.classList.add('hide');\n    }\n    // Todo ???????????? ?? ?????????? ???? ??????????\n    animateTest() {\n        return __awaiter(this, void 0, void 0, function* () {\n            yield this.transitionAnimator.animate({\n                target: this,\n                type: 'transform',\n                startValue: 'translate(-100%, 0)',\n                endValue: 'translate(0, 0)',\n                easing: 'ease-out',\n                time: '0.25s'\n            });\n        });\n    }\n}\ncustomElements.define('x-side-menu', SideMenu);\n\n\n//# sourceURL=webpack://cocktails_app/./src/components/SideMenu/SideMenu.ts?");

/***/ }),

/***/ "./src/components/SideMenu/index.ts":
/*!******************************************!*\
  !*** ./src/components/SideMenu/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _SideMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _SideMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideMenu */ \"./src/components/SideMenu/SideMenu.ts\");\n\n\n\n//# sourceURL=webpack://cocktails_app/./src/components/SideMenu/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* reexport safe */ _components_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"BottomMenu\": () => (/* reexport safe */ _components_BottomMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"CocktailPage\": () => (/* reexport safe */ _components_CocktailPage__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   \"CocktailsList\": () => (/* reexport safe */ _components_CocktailsList__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"CocktailsListItem\": () => (/* reexport safe */ _components_CocktailsListItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"FavouritesCocktailsList\": () => (/* reexport safe */ _components_FavouritesCocktailsList__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   \"SearchInput\": () => (/* reexport safe */ _components_SearchInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"SideMenu\": () => (/* reexport safe */ _components_SideMenu__WEBPACK_IMPORTED_MODULE_7__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App */ \"./src/components/App/index.ts\");\n/* harmony import */ var _components_SearchInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SearchInput */ \"./src/components/SearchInput/index.ts\");\n/* harmony import */ var _components_BottomMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BottomMenu */ \"./src/components/BottomMenu/index.ts\");\n/* harmony import */ var _components_CocktailsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/CocktailsList */ \"./src/components/CocktailsList/index.ts\");\n/* harmony import */ var _components_CocktailsListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/CocktailsListItem */ \"./src/components/CocktailsListItem/index.ts\");\n/* harmony import */ var _components_FavouritesCocktailsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/FavouritesCocktailsList */ \"./src/components/FavouritesCocktailsList/index.ts\");\n/* harmony import */ var _components_CocktailPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/CocktailPage */ \"./src/components/CocktailPage/index.ts\");\n/* harmony import */ var _components_SideMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/SideMenu */ \"./src/components/SideMenu/index.ts\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n\n\n\n\n\nwindow.addEventListener('load', () => {\n    const root = document.querySelector('#root');\n    root.append(document.createElement('x-app'));\n});\n\n\n//# sourceURL=webpack://cocktails_app/./src/index.ts?");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("540968a350e12a2fb0bd")
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "cocktails_app:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
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
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatecocktails_app"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;