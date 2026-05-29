(this["csbJsonP"] = this["csbJsonP"] || []).push([[7],{

/***/ "../../standalone-packages/codesandbox-browserfs/dist/shims/buffer.js":
/***/ (function(module, exports) {

module.exports = BrowserFS.BFSRequire('buffer');


/***/ }),

/***/ "../common/lib/utils/jest-lite.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.messages = void 0;
var messages;
(function (messages) {
    messages["INITIALIZE"] = "initialize_tests";
    messages["ADD_FILE"] = "add_file";
    messages["REMOVE_FILE"] = "remove_file";
    messages["FILE_ERROR"] = "file_error";
    messages["TOTAL_TEST_START"] = "total_test_start";
    messages["TOTAL_TEST_END"] = "total_test_end";
    messages["TEST_START"] = "test_start";
    messages["TEST_END"] = "test_end";
    messages["DESCRIBE_START"] = "describe_start";
    messages["DESCRIBE_END"] = "describe_end";
    messages["ADD_TEST"] = "add_test";
})(messages || (exports.messages = messages = {}));


/***/ }),

/***/ "./src/sandbox/eval/tests/jest-lite.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "messages", function() { return /* reexport */ jest_lite["messages"]; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ jest_lite_TestRunner; });

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("../../node_modules/@babel/runtime/helpers/slicedToArray.js");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/@babel/runtime/helpers/defineProperty.js");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../codesandbox-api/dist/codesandbox.es5.js
var codesandbox_es5 = __webpack_require__("../codesandbox-api/dist/codesandbox.es5.js");

// EXTERNAL MODULE: ../common/lib/templates/index.js
var templates = __webpack_require__("../common/lib/templates/index.js");

// EXTERNAL MODULE: ../common/lib/utils/jest-lite.js
var jest_lite = __webpack_require__("../common/lib/utils/jest-lite.js");

// EXTERNAL MODULE: ./node_modules/expect/build/index.js
var build = __webpack_require__("./node_modules/expect/build/index.js");
var build_default = /*#__PURE__*/__webpack_require__.n(build);

// EXTERNAL MODULE: ./node_modules/jest-mock/build-es5/index.js
var build_es5 = __webpack_require__("./node_modules/jest-mock/build-es5/index.js");
var build_es5_default = /*#__PURE__*/__webpack_require__.n(build_es5);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/jest-circus/build/index.js
var jest_circus_build = __webpack_require__("../../node_modules/jest-circus/build/index.js");
var jest_circus_build_default = /*#__PURE__*/__webpack_require__.n(jest_circus_build);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/jest-circus/build/utils.js
var utils = __webpack_require__("../../node_modules/jest-circus/build/utils.js");

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/path-browserify/index.js
var path_browserify = __webpack_require__("../../node_modules/path-browserify/index.js");
var path_browserify_default = /*#__PURE__*/__webpack_require__.n(path_browserify);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/jest-each/build/index.js
var jest_each_build = __webpack_require__("../../node_modules/jest-each/build/index.js");

// EXTERNAL MODULE: ./node_modules/jest-snapshot/build/index.js
var jest_snapshot_build = __webpack_require__("./node_modules/jest-snapshot/build/index.js");

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/jest-circus/build/state.js
var state = __webpack_require__("../../node_modules/jest-circus/build/state.js");

// EXTERNAL MODULE: ../sandbox-hooks/react-error-overlay/utils/parser.js
var parser = __webpack_require__("../sandbox-hooks/react-error-overlay/utils/parser.js");

// EXTERNAL MODULE: ../sandbox-hooks/react-error-overlay/utils/mapper.js
var mapper = __webpack_require__("../sandbox-hooks/react-error-overlay/utils/mapper.js");

// CONCATENATED MODULE: ./src/sandbox/eval/tests/run-circus.ts
/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */ /* eslint-disable no-use-before-define, no-restricted-syntax, no-await-in-loop */const currentDescribeBlocks=[];const run=/*#__PURE__*/function(){var _ref=asyncToGenerator_default()(function*(){const _getState=Object(state["getState"])(),rootDescribeBlock=_getState.rootDescribeBlock;currentDescribeBlocks.length=0;Object(state["dispatch"])({name:'run_start'});yield _runTestsForDescribeBlock(rootDescribeBlock);Object(state["dispatch"])({name:'run_finish'});return Object(utils["makeTestResults"])(Object(state["getState"])().rootDescribeBlock);});return function run(){return _ref.apply(this,arguments);};}();const _setGlobalState=test=>{const _expect$getState=build_default.a.getState(),currentTestPath=_expect$getState.testPath;const _test$name$split=test.name.split(':#:'),_test$name$split2=slicedToArray_default()(_test$name$split,2),testPath=_test$name$split2[0],testName=_test$name$split2[1];// remove root block
const _ref2=[...currentDescribeBlocks],describeBlocks=_ref2.slice(1);const describeName=describeBlocks.length>0?describeBlocks.join(' ')+' ':'';const currentTestName=describeName+testName;const update={currentTestName};if(testPath==null||currentTestPath!==testPath){// @ts-ignore
update.snapshotState=new jest_snapshot_build["SnapshotState"](testPath,{expand:true,updateSnapshot:'none'});update.testPath=testPath;}build_default.a.setState(update);};const _runTestsForDescribeBlock=/*#__PURE__*/function(){var _ref3=asyncToGenerator_default()(function*(describeBlock){currentDescribeBlocks.push(describeBlock.name);Object(state["dispatch"])({describeBlock,name:'run_describe_start'});const _getAllHooksForDescri=Object(utils["getAllHooksForDescribe"])(describeBlock),beforeAll=_getAllHooksForDescri.beforeAll,afterAll=_getAllHooksForDescri.afterAll;for(const hook of beforeAll){_callHook(hook);}for(const test of describeBlock.tests){yield _runTest(test);}for(const child of describeBlock.children){yield _runTestsForDescribeBlock(child);}for(const hook of afterAll){_callHook(hook);}Object(state["dispatch"])({describeBlock,name:'run_describe_finish'});currentDescribeBlocks.pop();});return function _runTestsForDescribeBlock(_x){return _ref3.apply(this,arguments);};}();const _runTest=/*#__PURE__*/function(){var _ref4=asyncToGenerator_default()(function*(test){const testContext=Object.create(null);const isSkipped=test.mode==='skip'||Object(state["getState"])().hasFocusedTests&&test.mode!=='only';if(isSkipped){Object(state["dispatch"])({name:'test_skip',test});return;}const _getEachHooksForTest=Object(utils["getEachHooksForTest"])(test),afterEach=_getEachHooksForTest.afterEach,beforeEach=_getEachHooksForTest.beforeEach;for(const hook of beforeEach){yield _callHook(hook,testContext);}yield _callTest(test,testContext);for(const hook of afterEach){yield _callHook(hook,testContext);}});return function _runTest(_x2){return _ref4.apply(this,arguments);};}();const _callHook=(hook,testContext)=>{Object(state["dispatch"])({hook,name:'hook_start'});const _getState2=Object(state["getState"])(),timeout=_getState2.testTimeout;return Object(utils["callAsyncFn"])(hook.fn,testContext,{isHook:true,timeout}).then(()=>Object(state["dispatch"])({hook,name:'hook_success'})).catch(error=>Object(state["dispatch"])({error,hook,name:'hook_failure'}));};const _callTest=/*#__PURE__*/function(){var _ref5=asyncToGenerator_default()(function*(test,testContext){Object(state["dispatch"])({name:'test_start',test});const _getState3=Object(state["getState"])(),timeout=_getState3.testTimeout;if(!test.fn){throw Error("Tests with no 'fn' should have 'mode' set to 'skipped'");}_setGlobalState(test);return Object(utils["callAsyncFn"])(test.fn,testContext,{isHook:false,timeout}).then(()=>Object(state["dispatch"])({name:'test_success',test})).catch(error=>Object(state["dispatch"])({error,name:'test_failure',test}));});return function _callTest(_x3,_x4){return _ref5.apply(this,arguments);};}();/* harmony default export */ var run_circus = (run);
// CONCATENATED MODULE: ./src/sandbox/eval/tests/jest-lite.ts
function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){defineProperty_default()(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}build_default.a.extend({toMatchSnapshot: jest_snapshot_build["toMatchSnapshot"],toThrowErrorMatchingSnapshot: jest_snapshot_build["toThrowErrorMatchingSnapshot"]});build_default.a.addSnapshotSerializer=jest_snapshot_build["addSerializer"];function addScript(src){return new Promise((resolve,reject)=>{const s=document.createElement('script');s.setAttribute('src',src);document.body.appendChild(s);s.onload=()=>{resolve();};s.onerror=error=>{reject(error);};});}let jsdomPromise=null;/**
 * Load JSDOM while the sandbox loads. Before we run a test we make sure that this has been loaded.
 */const getJSDOM=()=>{let jsdomPath="".concat("/sandpack"||false,"/static/js/jsdom-16.3.0.min.js");if(navigator.userAgent.indexOf('jsdom')!==-1&&"production"==='test'){jsdomPath='file://'+path_browserify_default.a.resolve('./static/js/jsdom-16.3.0.min.js');}jsdomPromise=jsdomPromise||addScript(jsdomPath);return jsdomPromise;};function resetTestState(){const ROOT_DESCRIBE_BLOCK=Object(utils["makeDescribe"])(state["ROOT_DESCRIBE_BLOCK_NAME"]);const INITIAL_STATE={currentDescribeBlock:ROOT_DESCRIBE_BLOCK,expand:undefined,hasFocusedTests:false,rootDescribeBlock:ROOT_DESCRIBE_BLOCK,testTimeout:5000};build_default.a.setState({assertionCalls:0,expectedAssertionsNumber:null,isExpectingAssertions:false,suppressedErrors:[],testPath:null,currentTestName:null,snapshotState:null});Object(state["setState"])(INITIAL_STATE);}class jest_lite_TestRunner{constructor(manager){var _this=this;defineProperty_default()(this,"tests",void 0);defineProperty_default()(this,"ranTests",void 0);defineProperty_default()(this,"manager",void 0);defineProperty_default()(this,"watching",true);defineProperty_default()(this,"LOCALHOST_URL",'http://localhost');defineProperty_default()(this,"dom",void 0);defineProperty_default()(this,"oldWindow",{});defineProperty_default()(this,"oldEnvVars",void 0);defineProperty_default()(this,"handleMessage",/*#__PURE__*/function(){var _ref=asyncToGenerator_default()(function*(message){switch(message.name){case'test_start':{const test=yield _this.testToCodeSandbox(message.test);return _this.sendMessage(jest_lite["messages"].TEST_START,{test});}case'test_failure':case'test_success':{const _expect$getState=build_default.a.getState(),suppressedErrors=_expect$getState.suppressedErrors;if(suppressedErrors&&suppressedErrors.length){/* eslint-disable no-param-reassign */message.test.errors=suppressedErrors;message.test.status='fail';/* eslint-enable no-param-reassign */build_default.a.setState({suppressedErrors:[]});}const test=yield _this.testToCodeSandbox(message.test);if(test.errors){test.errors.forEach(err=>{if(err.mappedErrors&&err.mappedErrors.length){const mappedErrors=err.mappedErrors;const _mappedErrors=slicedToArray_default()(mappedErrors,1),mappedError=_mappedErrors[0];Object(codesandbox_es5["dispatch"])(codesandbox_es5["actions"].error.show(err.name||'Jest Error',err.message,{line:mappedError._originalLineNumber,column:mappedError._originalColumnNumber,path:test.path,payload:{},source:'jest'}));}});}try{return _this.sendMessage(jest_lite["messages"].TEST_END,{test});}catch(e){const error=yield _this.errorToCodeSandbox(e);return _this.sendMessage(jest_lite["messages"].FILE_ERROR,{path:test.path,error});}}case'start_describe_definition':{return _this.sendMessage(jest_lite["messages"].DESCRIBE_START,{blockName:message.blockName});}case'finish_describe_definition':{return _this.sendMessage(jest_lite["messages"].DESCRIBE_END);}case'add_test':{const _message$testName$spl=message.testName.split(':#:'),_message$testName$spl2=slicedToArray_default()(_message$testName$spl,2),testPath=_message$testName$spl2[0],testName=_message$testName$spl2[1];return _this.sendMessage(jest_lite["messages"].ADD_TEST,{testName,path:testPath,mode:message.mode});}default:{return null;}}});return function(_x){return _ref.apply(this,arguments);};}());defineProperty_default()(this,"handleCodeSandboxMessage",message=>{switch(message.type){case'set-test-watching':this.watching=message.watching;if(message.watching===true){this.ranTests.clear();this.runTests(true);}break;case'run-all-tests':this.ranTests.clear();this.runTests(true);break;case'run-tests':{const testPath=message.path;this.ranTests.delete(testPath);this.runTests();break;}}});defineProperty_default()(this,"reportError",()=>{});this.manager=manager;this.ranTests=new Set();Object(state["addEventHandler"])(this.handleMessage);Object(codesandbox_es5["listen"])(this.handleCodeSandboxMessage);this.sendMessage(jest_lite["messages"].INITIALIZE);}getRuntimeGlobals(module){const test=(testName,fn)=>Object(state["dispatch"])({fn,name:'add_test',testName:"".concat(module.path,":#:").concat(testName)});const skip=(testName,fn)=>Object(state["dispatch"])({fn,mode:'skip',name:'add_test',testName:"".concat(module.path,":#:").concat(testName)});const only=(testName,fn)=>{Object(state["dispatch"])({fn,mode:'only',name:'add_test',testName:"".concat(module.path,":#:").concat(testName)});};test.each=Object(jest_each_build["bind"])(test);skip.each=Object(jest_each_build["bind"])(skip);only.each=Object(jest_each_build["bind"])(only);test.only=only;test.skip=skip;const it=test;return _objectSpread(_objectSpread({},jest_circus_build_default.a),{},{test,jest:build_es5_default.a,it,expect: build_default.a});}/**
   * In this function we actually set some globals on the global window. This is because there are modules out
   * there that try to overwrite some globals that we try to set. For example, this code won't work:
   *
   * ```js
   * const test = 5;
   * ```
   *
   * if we add test to the scope in the function:
   *
   * ```ts
   * function evaluate(test) {
   *   const test = 5; // <- Error!
   * }
   * ```
   *
   * Because of this, we have to put these globals on the global window. The big disadvantage of this is that
   * we cannot run these tests in parallel. If we would want to do that we could introduce the globals in separate
   * scope (separate function) that wraps the inner function, like this:
   *
   * ```ts
   * (function jestGlobals(test) {
   *   (function evaluate() {
   *     const test = 5; // <- No Error!
   *   })()
   * })
   * ```
   *
   * Right now we're making sure to clean the globals up in teardown
   *
   * Related issue: https://github.com/codesandbox/codesandbox-client/issues/4922
   */setTestGlobals(module){const jsdomWindow=this.dom.window.document.defaultView;const jsdomDocument=jsdomWindow.document;// Set the modules that are not set on JSDOM
jsdomWindow.Date=Date;jsdomWindow.fetch=fetch;const jestRuntimeGlobals=this.getRuntimeGlobals(module);const globals={document:jsdomDocument,window:jsdomWindow,global:jsdomWindow,// When calling `Event` we don't want the native `Event` but the JSDOM version
Event:jsdomWindow.Event};Object.keys(jestRuntimeGlobals).forEach(globalKey=>{window[globalKey]=jestRuntimeGlobals[globalKey];});return globals;}static isTest(testPath){const endsWith=['.test.js','.test.ts','.test.tsx','.test.jsx','.spec.js','.spec.ts','.spec.tsx','.spec.jsx'];if(testPath.includes('__tests__')&&(testPath.endsWith('.js')||testPath.endsWith('.ts')||testPath.endsWith('.tsx'))){return true;}return endsWith.filter(ext=>testPath.endsWith(ext)).length>0;}findTests(modules){if(this.tests){this.tests.forEach(t=>{if(!modules[t.path]){// A removed test
this.sendMessage(jest_lite["messages"].REMOVE_FILE,{path:t.path});}});}this.tests=Object.keys(modules).filter(jest_lite_TestRunner.isTest).map(p=>modules[p]);return this.tests;}/* istanbul ignore next */transpileTests(){var _this2=this;return asyncToGenerator_default()(function*(){return Promise.all((_this2.tests||[]).map(/*#__PURE__*/function(){var _ref2=asyncToGenerator_default()(function*(t){const tModule=_this2.manager.getTranspiledModule(t,'');if(tModule.source&&tModule.compilation&&_this2.ranTests.has(t.path)){// We cached this test, don't run it again. We only run tests of changed
// files
return null;}_this2.sendMessage(jest_lite["messages"].ADD_FILE,{path:t.path});try{yield _this2.manager.transpileModules(t,true);if(!tModule.source){_this2.ranTests.delete(t.path);}return t;}catch(e){const error=yield _this2.errorToCodeSandbox(e);_this2.ranTests.delete(t.path);_this2.sendMessage(jest_lite["messages"].FILE_ERROR,{path:t.path,error});return null;}});return function(_x2){return _ref2.apply(this,arguments);};}()));})();}sendMessage(event){let message=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};Object(codesandbox_es5["dispatch"])(_objectSpread({type:'test',event},message));}initJSDOM(){var _this3=this;return asyncToGenerator_default()(function*(){yield getJSDOM();const JSDOM=window.JSDOM.JSDOM;let url=document.location.origin;if(url==='null'){url=_this3.LOCALHOST_URL;}_this3.dom=new JSDOM('<!DOCTYPE html>',{pretendToBeVisual:true,url});// If there's code accessing globals (e.g. `getComputedStyle`), it will
// use the global window instead. We can't change a global, but we can override
// values over it.
const GLOBAL_OVERRIDE_KEYS=['getComputedStyle'];GLOBAL_OVERRIDE_KEYS.forEach(key=>{_this3.oldWindow[key]=window[key];window[key]=_this3.dom.window[key];});})();}setup(){var _this4=this;return asyncToGenerator_default()(function*(){_this4.oldEnvVars=_objectSpread({},_this4.manager.envVariables);_this4.manager.envVariables.NODE_ENV='test';})();}teardown(){var _this5=this;return asyncToGenerator_default()(function*(){const global=_this5.dom.window.document.defaultView;global.close();Object.defineProperty(global,'document',{value:null});_this5.dom=null;_this5.manager.envVariables=_this5.oldEnvVars;// Put back the old globals of the window after tests have run
Object.keys(_this5.oldWindow).forEach(key=>{window[key]=_this5.oldWindow[key];});_this5.oldWindow={};// @ts-expect-error We don't have the module, but the module is only used in a lazy context
const jestRuntimeGlobals=_this5.getRuntimeGlobals();Object.keys(jestRuntimeGlobals).forEach(globalKey=>{delete window[globalKey];});})();}/* istanbul ignore next */runTests(){var _this6=this;let force=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;return asyncToGenerator_default()(function*(){if(!_this6.watching&&!force){return;}yield _this6.initJSDOM();_this6.sendMessage(jest_lite["messages"].TOTAL_TEST_START);let testModules=[];try{if(_this6.manager.preset.name===templates["react"].name){try{testModules=[yield _this6.manager.resolveModuleAsync({path:'./src/setupTests.js'})];}catch(e){testModules=[yield _this6.manager.resolveModuleAsync({path:'./src/setupTests.ts'})];}}else if(_this6.manager.preset.name===templates["reactTs"].name){testModules=[yield _this6.manager.resolveModuleAsync({path:'./src/setupTests.ts'})];}else if(_this6.manager.configurations.package){const parsed=_this6.manager.configurations.package.parsed;if(parsed&&parsed.jest&&parsed.jest.setupFilesAfterEnv){testModules=yield Promise.all(parsed.jest.setupFilesAfterEnv.map(setupPath=>_this6.manager.resolveModuleAsync({path:setupPath})));}}}catch(e){/* ignore */}if(testModules.length){yield Promise.all(testModules.map(testSetup=>_this6.manager.transpileModules(testSetup,true)));}if(_this6.manager.modules){_this6.findTests(_this6.manager.modules);}// $FlowIssue
const tests=(yield _this6.transpileTests()).filter(t=>t);resetTestState();yield _this6.setup();yield Promise.all(tests.map(/*#__PURE__*/function(){var _ref3=asyncToGenerator_default()(function*(t){Object(codesandbox_es5["dispatch"])(codesandbox_es5["actions"].error.clear(t.path,'jest'));try{if(testModules.length){testModules.forEach(module=>{_this6.manager.evaluateModule(module,{force:true,globals:_this6.setTestGlobals(module)});});}_this6.manager.evaluateModule(t,{force:true,globals:_this6.setTestGlobals(t)});_this6.ranTests.add(t.path);}catch(e){_this6.ranTests.delete(t.path);const error=yield _this6.errorToCodeSandbox(e);_this6.sendMessage(jest_lite["messages"].FILE_ERROR,{path:t.path,error});}});return function(_x3){return _ref3.apply(this,arguments);};}()));yield run_circus();yield _this6.teardown();setTimeout(()=>{_this6.sendMessage(jest_lite["messages"].TOTAL_TEST_END);});})();}errorToCodeSandbox(error){return asyncToGenerator_default()(function*(){const parsedError=Object(parser["parse"])(error);const mappedErrors=yield Object(mapper["map"])(parsedError);return{name:error.name,message:error.message,stack:error.stack,matcherResult:Boolean(error.matcherResult),mappedErrors};})();}getDescribeBlocks(test){let t=test;const blocks=[];while(t.parent!=null){blocks.push(t.parent.name);t=t.parent;}// Remove ROOT_DESCRIBE_BLOCK
blocks.pop();return blocks.reverse();}testToCodeSandbox(test){var _this7=this;return asyncToGenerator_default()(function*(){const _test$name$split=test.name.split(':#:'),_test$name$split2=slicedToArray_default()(_test$name$split,2),testPath=_test$name$split2[0],name=_test$name$split2[1];const errors=yield Promise.all(test.errors.map(_this7.errorToCodeSandbox));return{name,path:testPath,duration:test.duration,status:test.status||'running',errors,blocks:_this7.getDescribeBlocks(test)};})();}// We stub this, because old versions of CodeSandbox still needs this
}

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=7.d2149846f.chunk.js.map