(this["csbJsonP"] = this["csbJsonP"] || []).push([[9],{

/***/ "../../node_modules/@svgr/core/lib sync recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../node_modules/@svgr/core/lib sync recursive";

/***/ }),

/***/ "./src/sandbox/eval/transpilers/svgr/transpiler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgrTransform", function() { return svgrTransform; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svgr_plugin_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/@svgr/plugin-jsx/lib/index.js");
/* harmony import */ var _svgr_plugin_jsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svgr_plugin_jsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svgr_core_lib_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/@svgr/core/lib/state.js");
/* harmony import */ var _svgr_core_lib_state__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_svgr_core_lib_state__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _svgr_core_lib_plugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/@svgr/core/lib/plugins.js");
/* harmony import */ var _svgr_core_lib_plugins__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_svgr_core_lib_plugins__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}const DEFAULT_CONFIG={dimensions:true,expandProps:'end',icon:false,native:false,typescript:false,memo:false,ref:false,replaceAttrValues:null,svgProps:null,template:null,titleProp:false,runtimeConfig:true,plugins:null,namedExport:'ReactComponent'};function svgrTransform(_x,_x2){return _svgrTransform.apply(this,arguments);}function _svgrTransform(){_svgrTransform=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(function*(filePath,inputCode){const config=_objectSpread({},DEFAULT_CONFIG);const state={caller:{name:'@codesandbox/svgr-loader',defaultPlugins:[_svgr_plugin_jsx__WEBPACK_IMPORTED_MODULE_2___default.a]},filePath};const expandedState=Object(_svgr_core_lib_state__WEBPACK_IMPORTED_MODULE_3__["expandState"])(state);const plugins=Object(_svgr_core_lib_plugins__WEBPACK_IMPORTED_MODULE_4__["getPlugins"])(config,state).map(_svgr_core_lib_plugins__WEBPACK_IMPORTED_MODULE_4__["resolvePlugin"]);let code=String(inputCode).replace('\0','');// eslint-disable-next-line no-restricted-syntax
for(const plugin of plugins){code=plugin(code,config,expandedState);}return code;});return _svgrTransform.apply(this,arguments);}

/***/ })

}]);
//# sourceMappingURL=9.3984d1a3b.chunk.js.map