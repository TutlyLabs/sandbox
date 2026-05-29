(this["csbJsonP"] = this["csbJsonP"] || []).push([["vue-selector"],{

/***/ "./src/sandbox/eval/transpilers/vue/v2/parser.js":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */const compiler=__webpack_require__("../../node_modules/vue-template-compiler/browser.js");const cache=__webpack_require__("./config/stubs/lru-cache.js")(100);const hash=__webpack_require__("../../node_modules/hash-sum/hash-sum.js");const SourceMapGenerator=__webpack_require__("../../node_modules/source-map/source-map.js").SourceMapGenerator;const splitRE=/\r?\n/g;const emptyRE=/^(?:\/\/)?\s*$/;module.exports=function(content,filename,needMap,sourceRoot){const cacheKey=hash(filename+content);// source-map cache busting for hot-reloadded modules
const filenameWithHash=filename+'?'+cacheKey;let output=cache.get(cacheKey);if(output)return output;output=compiler.parseComponent(content,{pad:'line'});if(needMap){if(output.script&&!output.script.src){output.script.map=generateSourceMap(filenameWithHash,content,output.script.content,sourceRoot);}if(output.styles){output.styles.forEach(style=>{if(!style.src){style.map=generateSourceMap(filenameWithHash,content,style.content,sourceRoot);}});}}cache.set(cacheKey,output);return output;};function generateSourceMap(filename,source,generated,sourceRoot){const map=new SourceMapGenerator({sourceRoot});map.setSourceContent(filename,source);generated.split(splitRE).forEach((line,index)=>{if(!emptyRE.test(line)){map.addMapping({source:filename,original:{line:index+1,column:0},generated:{line:index+1,column:0}});}});return map.toJSON();}

/***/ }),

/***/ "./src/sandbox/eval/transpilers/vue/v2/selector/loader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/sandbox/eval/transpilers/vue/v2/parser.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony default export */ __webpack_exports__["default"] = (function(code,loaderContext){const query=loaderContext.options;const context=query.context;let filename=path__WEBPACK_IMPORTED_MODULE_0___default.a.basename(loaderContext.path);filename=filename.substring(0,filename.lastIndexOf(path__WEBPACK_IMPORTED_MODULE_0___default.a.extname(filename)))+'.vue';const sourceRoot=path__WEBPACK_IMPORTED_MODULE_0___default.a.dirname(path__WEBPACK_IMPORTED_MODULE_0___default.a.relative(context,loaderContext.path));const parts=_parser__WEBPACK_IMPORTED_MODULE_1___default()(code,filename,false,sourceRoot,query.bustCache);let part=parts[query.type];if(Array.isArray(part)){part=part[query.index];}return Promise.resolve({transpiledCode:part?part.content:''});});

/***/ })

}]);
//# sourceMappingURL=vue-selector.4b142dbf0.chunk.js.map