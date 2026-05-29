(this["csbJsonP"] = this["csbJsonP"] || []).push([["vue-style-compiler"],{

/***/ "./src/sandbox/eval/transpilers/vue/v2/style-compiler/loader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/@babel/runtime/helpers/defineProperty.js");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/postcss/lib/postcss.js
var postcss = __webpack_require__("./node_modules/postcss/lib/postcss.js");
var postcss_default = /*#__PURE__*/__webpack_require__.n(postcss);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/postcss-import/index.js
var postcss_import = __webpack_require__("../../node_modules/postcss-import/index.js");
var postcss_import_default = /*#__PURE__*/__webpack_require__.n(postcss_import);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/path-browserify/index.js
var path_browserify = __webpack_require__("../../node_modules/path-browserify/index.js");

// EXTERNAL MODULE: ./src/sandbox/eval/utils/is-dependency-path.ts
var is_dependency_path = __webpack_require__("./src/sandbox/eval/utils/is-dependency-path.ts");

// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/vue/v2/style-compiler/plugins/trim.js
/* eslint-disable */const trim_postcss=__webpack_require__("./node_modules/postcss/lib/postcss.js");// eslint-disable-next-line no-unused-vars
/* harmony default export */ var trim = (trim_postcss.plugin('trim',function(opts){return function(css){css.walk(function(node){if(node.type==='rule'||node.type==='atrule'){node.raws.before=node.raws.after='\n';}});};}));
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/vue/v2/style-compiler/plugins/scope-id.js
/* eslint-disable */var scope_id_postcss=__webpack_require__("./node_modules/postcss/lib/postcss.js");var selectorParser=__webpack_require__("./node_modules/postcss-selector-parser/dist/index.js");/* harmony default export */ var scope_id = (scope_id_postcss.plugin('add-id',function(opts){return function(root){var keyframes=Object.create(null);root.each(function rewriteSelector(node){if(!node.selector){// handle media queries
if(node.type==='atrule'){if(node.name==='media'){node.each(rewriteSelector);}else if(node.name==='keyframes'){// register keyframes
keyframes[node.params]=node.params=node.params+'-'+opts.id;}}return;}node.selector=selectorParser(function(selectors){selectors.each(function(selector){var node=null;selector.each(function(n){// ">>>" combinator
if(n.type==='combinator'&&n.value==='>>>'){n.value=' ';n.spaces.before=n.spaces.after='';return false;}// /deep/ alias for >>>, since >>> doesn't work in SASS
if(n.type==='tag'&&n.value==='/deep/'){var next=n.next();if(next.type==='combinator'&&next.value===' '){next.remove();}n.remove();return false;}if(n.type!=='pseudo'&&n.type!=='combinator'){node=n;}});selector.insertAfter(node,selectorParser.attribute({attribute:opts.id}));});}).process(node.selector).result;});// If keyframes are found in this <style>, find and rewrite animation names
// in declarations.
// Caveat: this only works for keyframes and animation rules in the same
// <style> element.
if(Object.keys(keyframes).length){root.walkDecls(decl=>{// individual animation-name declaration
if(/-?animation-name$/.test(decl.prop)){decl.value=decl.value.split(',').map(v=>keyframes[v.trim()]||v.trim()).join(',');}// shorthand
if(/-?animation$/.test(decl.prop)){decl.value=decl.value.split(',').map(v=>{var vals=v.split(/\s+/);var name=vals[0];if(keyframes[name]){return[keyframes[name]].concat(vals.slice(1)).join(' ');}else{return v;}}).join(',');}});}};}));
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/vue/v2/style-compiler/loader.ts
function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){defineProperty_default()(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}function resolveCSSFile(_x,_x2,_x3){return _resolveCSSFile.apply(this,arguments);}function _resolveCSSFile(){_resolveCSSFile=asyncToGenerator_default()(function*(loaderContext,path,basePath){const isDependency=Object(is_dependency_path["a" /* isDependencyPath */])(path);if(isDependency){// First try to resolve the package.json, in case it has a style field
try{const pkgJson=yield loaderContext.resolveTranspiledModuleAsync(Object(path_browserify["join"])(path,'package.json'));const parsedPkg=JSON.parse(pkgJson.module.code);if(parsedPkg.style){const fullPath=Object(path_browserify["join"])(path,parsedPkg.style);return loaderContext.resolveTranspiledModuleAsync(fullPath);}}catch(e){/* Move to step 2 */}return loaderContext.resolveTranspiledModuleAsync(path);}const fullPath=path.charAt(0)==='/'?path:Object(path_browserify["join"])(basePath,path);return loaderContext.resolveTranspiledModuleAsync(fullPath);});return _resolveCSSFile.apply(this,arguments);}/* harmony default export */ var loader = __webpack_exports__["default"] = (function(_x4,_x5){return _ref.apply(this,arguments);});function _ref(){_ref=asyncToGenerator_default()(function*(code,loaderContext){const query=loaderContext.options;let vueOptions=loaderContext.options.__vueOptions__;if(!vueOptions){vueOptions=_objectSpread({},loaderContext.options.vue);}// TODO autoprefixer
const plugins=[postcss_import_default()({resolve:function(){var _ref2=asyncToGenerator_default()(function*(id,root){try{const result=yield resolveCSSFile(loaderContext,id.replace(/^~/,''),root);return result.module.path;}catch(e){return null;}});return function resolve(_x6,_x7){return _ref2.apply(this,arguments);};}(),load:function(){var _ref3=asyncToGenerator_default()(function*(filename){const tModule=yield loaderContext.resolveTranspiledModuleAsync(filename);return tModule.module.code;});return function load(_x8){return _ref3.apply(this,arguments);};}()}),trim];const options={to:loaderContext.path,from:loaderContext.path};// add plugin for vue-loader scoped css rewrite
if(query.scoped){plugins.push(scope_id({id:query.id}));}// source map
if(loaderContext.sourceMap&&vueOptions.cssSourceMap!==false// !loaderContext.map
){options.map={inline:false,annotation:false// prev: loaderContext.map,
};}// Explicitly give undefined if code is null, otherwise postcss crashses
const postcssResult=yield postcss_default()(plugins).process(code||'',options);if(postcssResult.messages){const messages=postcssResult.messages;yield Promise.all(messages.map(m=>{if(m.type==='dependency'){return loaderContext.addDependency(m.file);}return Promise.resolve();}));}const map=postcssResult.map&&postcssResult.map.toJSON();return{transpiledCode:postcssResult.css,sourceMap:map};});return _ref.apply(this,arguments);}

/***/ }),

/***/ "./src/sandbox/eval/utils/is-dependency-path.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isDependencyPath; });
const isDependencyPath=p=>/^(\w|@\w|@-)/.test(p);

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

/***/ })

}]);
//# sourceMappingURL=vue-style-compiler.177171261.chunk.js.map