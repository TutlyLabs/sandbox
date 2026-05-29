(this["csbJsonP"] = this["csbJsonP"] || []).push([["postcss-compiler"],{

/***/ "../../standalone-packages/codesandbox-browserfs/dist/shims/buffer.js":
/***/ (function(module, exports) {

module.exports = BrowserFS.BFSRequire('buffer');


/***/ }),

/***/ "./node_modules/postcss-url/src/type sync recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./copy": "./node_modules/postcss-url/src/type/copy.js",
	"./copy.js": "./node_modules/postcss-url/src/type/copy.js",
	"./custom": "./node_modules/postcss-url/src/type/custom.js",
	"./custom.js": "./node_modules/postcss-url/src/type/custom.js",
	"./inline": "./node_modules/postcss-url/src/type/inline.js",
	"./inline.js": "./node_modules/postcss-url/src/type/inline.js",
	"./rebase": "./node_modules/postcss-url/src/type/rebase.js",
	"./rebase.js": "./node_modules/postcss-url/src/type/rebase.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/postcss-url/src/type sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/sandbox/eval/transpilers/postcss/loader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var postcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/postcss/lib/postcss.js");
/* harmony import */ var postcss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(postcss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var postcss_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/postcss-import/index.js");
/* harmony import */ var postcss_import__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(postcss_import__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var postcss_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/postcss-url/src/index.js");
/* harmony import */ var postcss_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(postcss_url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sandbox_eval_utils_is_dependency_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/sandbox/eval/utils/is-dependency-path.ts");
function resolveCSSFile(_x,_x2,_x3){return _resolveCSSFile.apply(this,arguments);}function _resolveCSSFile(){_resolveCSSFile=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(function*(loaderContext,path,basePath){const isDependency=Object(sandbox_eval_utils_is_dependency_path__WEBPACK_IMPORTED_MODULE_5__[/* isDependencyPath */ "a"])(path);if(isDependency){// First try to resolve the package.json, in case it has a style field
try{const pkgJson=yield loaderContext.resolveTranspiledModuleAsync(Object(path__WEBPACK_IMPORTED_MODULE_4__["join"])(path,'package.json'));const parsedPkg=JSON.parse(pkgJson.module.code);if(parsedPkg.style){const fullPath=Object(path__WEBPACK_IMPORTED_MODULE_4__["join"])(path,parsedPkg.style);return loaderContext.resolveTranspiledModuleAsync(fullPath);}}catch(e){/* Move to step 2 */}return loaderContext.resolveTranspiledModuleAsync(path);}const fullPath=path.charAt(0)==='/'?path:Object(path__WEBPACK_IMPORTED_MODULE_4__["join"])(basePath,path);return loaderContext.resolveTranspiledModuleAsync(fullPath);});return _resolveCSSFile.apply(this,arguments);}/* harmony default export */ __webpack_exports__["default"] = (function(_x4,_x5){return _ref.apply(this,arguments);});function _ref(){_ref=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(function*(code,loaderContext){const plugins=[postcss_import__WEBPACK_IMPORTED_MODULE_2___default()({resolve:function(){var _ref2=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(function*(id,root){try{// Angular specific, remove the ~ from the path to determine if it's a dependency
const sanitizedPath=id.replace(/^~/,'');const result=yield resolveCSSFile(loaderContext,sanitizedPath,root);return result.module.path;}catch(e){return null;}});return function resolve(_x6,_x7){return _ref2.apply(this,arguments);};}(),load:function(){var _ref3=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(function*(filename){const tModule=yield loaderContext.resolveTranspiledModuleAsync(filename);return tModule.module.code;});return function load(_x8){return _ref3.apply(this,arguments);};}()}),postcss_url__WEBPACK_IMPORTED_MODULE_3___default()({url:'rebase'})];const options={to:loaderContext.path,from:loaderContext.path,map:{inline:true,annotation:true}};// Explicitly give undefined if code is null, otherwise postcss crashes
const result=yield postcss__WEBPACK_IMPORTED_MODULE_1___default()(plugins).process(code===null?undefined:code,options);if(result.messages){const messages=result.messages;yield Promise.all(messages.map(/*#__PURE__*/function(){var _ref4=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(function*(m){if(m.type==='dependency'){yield loaderContext.addDependency(m.file);}});return function(_x9){return _ref4.apply(this,arguments);};}()));}const map=result.map&&result.map.toJSON();return{transpiledCode:result.css,sourceMap:map};});return _ref.apply(this,arguments);}

/***/ }),

/***/ "./src/sandbox/eval/utils/is-dependency-path.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isDependencyPath; });
const isDependencyPath=p=>/^(\w|@\w|@-)/.test(p);

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=postcss-compiler.dd3889a1c.chunk.js.map