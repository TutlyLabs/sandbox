(this["csbJsonP"] = this["csbJsonP"] || []).push([["vue-template-compiler"],{

/***/ "./src/sandbox/eval/transpilers/vue/v2/template-compiler/loader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/vue-template-es2015-compiler/index.js
var vue_template_es2015_compiler = __webpack_require__("../../node_modules/vue-template-es2015-compiler/index.js");
var vue_template_es2015_compiler_default = /*#__PURE__*/__webpack_require__.n(vue_template_es2015_compiler);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/vue-template-compiler/browser.js
var browser = __webpack_require__("../../node_modules/vue-template-compiler/browser.js");

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/raw-loader!/Users/uday/Desktop/projects/codesandbox-client/node_modules/vue-hot-reload-api/dist/index.js
var dist = __webpack_require__("../../node_modules/raw-loader/index.js!../../node_modules/vue-hot-reload-api/dist/index.js");
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/@babel/runtime/helpers/defineProperty.js");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/vue/v2/template-compiler/modules/transform-require.ts
function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){defineProperty_default()(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}/* eslint-disable */ // vue compiler module for transforming `<tag>:<attribute>` to `require`
var defaultOptions={img:'src',image:'xlink:href'};/* harmony default export */ var transform_require = ((userOptions,addDependency)=>{var options=userOptions?_objectSpread(_objectSpread({},defaultOptions),{},{userOptions}):defaultOptions;return{postTransformNode:node=>transform(node,options,addDependency)};});function transform(node,options,addDependency){for(var tag in options){if(node.tag===tag&&node.attrs){var attributes=options[tag];if(typeof attributes==='string'){node.attrs.some(attr=>rewrite(attr,attributes,addDependency));}else if(Array.isArray(attributes)){attributes.forEach(item=>node.attrs.some(attr=>rewrite(attr,item,addDependency)));}}}}function rewrite(attr,name,addDependency){if(attr.name===name){var value=attr.value;var isStatic=value.charAt(0)==='"'&&value.charAt(value.length-1)==='"';if(!isStatic){return;}var firstChar=value.charAt(1);if(firstChar==='.'||firstChar==='~'){if(firstChar==='~'){value='"'+value.slice(2);}// get dependency the quotes
attr.value="require(".concat(value,")");addDependency(JSON.parse(value));}return true;}}
// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("../../node_modules/@babel/runtime/helpers/slicedToArray.js");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/vue/v2/template-compiler/modules/transform-srcset.ts
/* eslint-disable */ // vue compiler module for transforming `img:srcset` to a number of `require`s
/* harmony default export */ var transform_srcset = (function(){return{postTransformNode:node=>transform_srcset_transform(node)};});function transform_srcset_transform(node){const tags=['img','source'];if(tags.indexOf(node.tag)!==-1&&node.attrs){node.attrs.forEach(attr=>{if(attr.name==='srcset'){// same logic as in transform-require.js
var value=attr.value;var isStatic=value.charAt(0)==='"'&&value.charAt(value.length-1)==='"';if(!isStatic){return;}// http://w3c.github.io/html/semantics-embedded-content.html#ref-for-image-candidate-string-5
const escapedSpaceCharacters=/( |\\t|\\n|\\f|\\r)+/g;const imageCandidates=value.substr(1,value.length-2).split(',').map(s=>{// The attribute value arrives here with all whitespace, except normal spaces, represented by escape sequences
const _s$replace$trim$split=s.replace(escapedSpaceCharacters,' ').trim().split(' ',2),_s$replace$trim$split2=slicedToArray_default()(_s$replace$trim$split,2),url=_s$replace$trim$split2[0],descriptor=_s$replace$trim$split2[1];return{require:urlToRequire(url),descriptor:descriptor};});let code='';imageCandidates.forEach((o,i,a)=>{code+=o.require+' + " '+o.descriptor+(i<a.length-1?', " + ':'"');});attr.value=code;}});}}function urlToRequire(url){// same logic as in transform-require.js
var firstChar=url.charAt(0);if(firstChar==='.'||firstChar==='~'){if(firstChar==='~'){var secondChar=url.charAt(1);url='"'+url.slice(secondChar==='/'?2:1);}return"require(\"".concat(url,"\")");}}
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/vue/v2/template-compiler/loader.ts
/* eslint-disable no-use-before-define */// @ts-ignore
// @ts-ignore
// eslint-disable-next-line
const hotReloadAPIPath='!noop-loader!/node_modules/vue-hot-reload-api.js';/* harmony default export */ var loader = __webpack_exports__["default"] = (function(_x,_x2){return _ref.apply(this,arguments);});function _ref(){_ref=asyncToGenerator_default()(function*(html,loaderContext){loaderContext.emitModule(hotReloadAPIPath,dist_default.a,'/',false,false);const options=loaderContext.options;const vueOptions=options.vueOptions||{};const needsHotReload=true;const depPromises=[];const addDependency=p=>{depPromises.push(loaderContext.addDependency(p));};const defaultModules=[transform_require(options.transformRequire,addDependency),transform_srcset()];const userModules=vueOptions.compilerModules||options.compilerModules;const compilerOptions={preserveWhitespace:options.preserveWhitespace,modules:defaultModules.concat(userModules||[]),directives:vueOptions.compilerDirectives||options.compilerDirectives||{},// @ts-ignore
comments:options.hasComment,// @ts-ignore
scopeId:options.hasScoped?options.id:null};const compiled=browser["compile"](html,compilerOptions);// tips
if(compiled.tips&&compiled.tips.length){compiled.tips.forEach(tip=>{loaderContext.emitWarning({name:'vue-warning',message:typeof tip==='string'?tip:'',fileName:loaderContext._module.module.parent?loaderContext._module.module.parent.path:loaderContext.path,lineNumber:1,columnNumber:1,source:'vue-template-compiler'});});}let code;if(compiled.errors&&compiled.errors.length){loaderContext.emitError(new Error("\n  Error compiling template:\n".concat(pad(html),"\n")+compiled.errors.map(e=>"  - ".concat(e)).join('\n')+'\n'));code='module.exports={render:function(){},staticRenderFns:[]}';}else{const bubleOptions=options.buble;const stripWith=bubleOptions.transforms.stripWith!==false;const stripWithFunctional=bubleOptions.transforms.stripWithFunctional;const staticRenderFns=compiled.staticRenderFns.map(fn=>toFunction(fn,stripWithFunctional));code=vue_template_es2015_compiler_default()('var render = '+toFunction(compiled.render,stripWithFunctional)+'\n'+'var staticRenderFns = ['+staticRenderFns.join(',')+']',bubleOptions)+'\n';// mark with stripped (this enables Vue to use correct runtime proxy detection)
if(stripWith){code+="render._withStripped = true\n";}const exports="{ render: render, staticRenderFns: staticRenderFns }";code+="module.exports = ".concat(exports);}// hot-reload
if(needsHotReload){const exportsName=vueOptions.esModule?'esExports':'module.exports';code+='\nif (module.hot) {\n'+'  module.hot.accept()\n'+'  if (module.hot.data) {\n'+'    require("'+hotReloadAPIPath+'")'+'      .rerender("'+options.id+'", '+exportsName+')\n'+'  }\n'+'}';}yield Promise.all(depPromises);return code;});return _ref.apply(this,arguments);}function toFunction(code,stripWithFunctional){return'function ('+(stripWithFunctional?'_h,_vm':'')+') {'+code+'}';}function pad(html){return html.split(/\r?\n/).map(line=>"  ".concat(line)).join('\n');}

/***/ })

}]);
//# sourceMappingURL=vue-template-compiler.6ce2c8691.chunk.js.map