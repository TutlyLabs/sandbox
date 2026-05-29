(this["csbJsonP"] = this["csbJsonP"] || []).push([["css-loader"],{

/***/ "../../node_modules/raw-loader/index.js!./src/sandbox/eval/transpilers/vue/v2/css-loader/client/css-base.js":
/***/ (function(module, exports) {

module.exports = "/* eslint-disable */\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function(item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  };\n\n  // import a list of modules into the list\n  list.i = function(modules, mediaQuery) {\n    if (typeof modules === 'string') modules = [[null, modules, '']];\n    var alreadyImportedModules = {};\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n      if (typeof id === 'number') alreadyImportedModules[id] = true;\n    }\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i];\n      // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      //  when a module is imported multiple times with different media queries.\n      //  I hope this will never occur (Hey this way we have smaller bundles)\n      if (typeof item[0] !== 'number' || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n        list.push(item);\n      }\n    }\n  };\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function(source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n\n    return [content]\n      .concat(sourceURLs)\n      .concat([sourceMapping])\n      .join('\\n');\n  }\n\n  return [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data =\n    'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n  return '/*# ' + data + ' */';\n}\n"

/***/ }),

/***/ "./src/sandbox/eval/transpilers/vue/v2/css-loader/loader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ transpile; });

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/raw-loader!./src/sandbox/eval/transpilers/vue/v2/css-loader/client/css-base.js
var css_base = __webpack_require__("../../node_modules/raw-loader/index.js!./src/sandbox/eval/transpilers/vue/v2/css-loader/client/css-base.js");
var css_base_default = /*#__PURE__*/__webpack_require__.n(css_base);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/vue/v2/css-loader/get-modules.ts
let core=null;/* harmony default export */ var get_modules = (/*#__PURE__*/(function(){var _ref=asyncToGenerator_default()(function*(code,loaderContext){if(!core){const Core=yield Promise.all(/* import() | css-modules-loader-core */[__webpack_require__.e("vendors~css-modules-loader-core"), __webpack_require__.e("css-modules-loader-core")]).then(__webpack_require__.t.bind(null, "../../node_modules/css-modules-loader-core/lib/index.js", 7)).then(x=>x.default);core=new Core();}const _yield$core$load=yield core.load(code,loaderContext.path,/*#__PURE__*/function(){var _ref2=asyncToGenerator_default()(function*(dependencyPath){yield loaderContext.addDependency(dependencyPath);const tModule=loaderContext.resolveTranspiledModule(dependencyPath);return tModule.source?tModule.source.compiledCode:tModule.module.code;});return function(_x3){return _ref2.apply(this,arguments);};}()),injectableSource=_yield$core$load.injectableSource,exportTokens=_yield$core$load.exportTokens;return{css:injectableSource,exportTokens};});return function(_x,_x2){return _ref.apply(this,arguments);};})());
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/vue/v2/css-loader/loader.ts
// @ts-ignore
const CSSBasePath='/node_modules/css-loader/css-base.js';const getStyleId=id=>id+'-css';// eslint-disable-line
function transpile(content,loaderContext){loaderContext.emitModule(CSSBasePath,css_base_default.a,'/',false,false);let result='';result+="exports = module.exports = require(\"".concat(CSSBasePath,"\")(false);\n\n");if(loaderContext.options.modules){return get_modules(content,loaderContext).then(_ref=>{let css=_ref.css,exportTokens=_ref.exportTokens;result+="exports.push([module.id, ".concat(JSON.stringify(css),", \"\"])\n\n");result+="exports.locals = ".concat(JSON.stringify(exportTokens),";");return Promise.resolve({transpiledCode:result});});}result+="exports.push([module.id, ".concat(JSON.stringify(content),", \"\"])");return Promise.resolve({transpiledCode:result});}

/***/ })

}]);
//# sourceMappingURL=css-loader.b354b789f.chunk.js.map