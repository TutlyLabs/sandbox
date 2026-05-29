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
/******/ 	__webpack_require__.p = "/sandpack/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../node_modules/thread-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!./src/sandbox/eval/transpilers/stylus/stylus-worker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/defineProperty.js":
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__("../../node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/toPrimitive.js":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("../../node_modules/@babel/runtime/helpers/typeof.js")["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/toPropertyKey.js":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("../../node_modules/@babel/runtime/helpers/typeof.js")["default"];
var toPrimitive = __webpack_require__("../../node_modules/@babel/runtime/helpers/toPrimitive.js");
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/typeof.js":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../node_modules/thread-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!./src/sandbox/eval/transpilers/stylus/stylus-worker.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/@babel/runtime/helpers/defineProperty.js");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ../sandpack-core/lib/transpiler/utils/worker-error-handler.js
class FileError extends Error {
}
function buildWorkerError(error) {
    return {
        name: error.name,
        message: error.message,
        fileName: error.fileName,
        lineNumber: error.lineNumber,
        columnNumber: error.columnNumber,
    };
}
function parseWorkerError(error) {
    const reconstructedError = new FileError(error.message);
    reconstructedError.name = error.name;
    reconstructedError.columnNumber = error.columnNumber;
    reconstructedError.fileName = error.fileName;
    reconstructedError.lineNumber = error.lineNumber;
    return reconstructedError;
}

// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/worker-transpiler/child-handler.ts
class child_handler_ChildHandler{constructor(name){defineProperty_default()(this,"name",void 0);defineProperty_default()(this,"functions",new Map());defineProperty_default()(this,"pendingCalls",new Map());defineProperty_default()(this,"callId",0);defineProperty_default()(this,"isReady",false);defineProperty_default()(this,"initializeFS",void 0);defineProperty_default()(this,"queuedMessages",[]);this.name=name;self.addEventListener('message',evt=>{this.handleMessage(evt.data).catch(console.error);});self.postMessage({type:'worker_started',codesandbox:true});}registerFunction(method,fn){this.functions.set(method,fn);}registerFSInitializer(newInitializeFS){this.initializeFS=newInitializeFS;}handleMessage(msg){var _this=this;return asyncToGenerator_default()(function*(){if(typeof msg!=='object'||!msg.codesandbox){if(!msg.browserfsMessage){console.warn("Invalid message from main thread to ".concat(_this.name),msg);}return;}if(!_this.isReady){_this.queuedMessages.push(msg);return;}switch(msg.type){case'ping':if(_this.isReady){yield _this.emitReady();}break;case'request':yield _this.handleCallRequest(msg);break;case'response':yield _this.handleCallResponse(msg);break;case'initialize-fs':if(!_this.initializeFS){throw new Error("initializeFS is undefined for ".concat(_this.name));}yield _this.initializeFS();break;}})();}handleCallResponse(msg){const foundCall=this.pendingCalls.get(msg.idx);if(foundCall){if(!msg.isError){foundCall.resolve(msg.data);}else{foundCall.reject(parseWorkerError(msg.data));}}}handleCallRequest(msg){var _this2=this;return asyncToGenerator_default()(function*(){try{const fn=_this2.functions.get(msg.method);if(!fn){throw new Error("Could not find registered child function for call ".concat(_this2.name,"#").concat(msg.method));}const result=yield fn(msg.data);self.postMessage({type:'response',codesandbox:true,idx:msg.idx,data:result});}catch(err){console.error(err);self.postMessage({type:'response',codesandbox:true,idx:msg.idx,isError:true,data:buildWorkerError(err)});}})();}callFn(_ref){let method=_ref.method,data=_ref.data;const idx=this.callId++;const message={type:'request',codesandbox:true,idx,method,data};return new Promise((resolve,reject)=>{this.pendingCalls.set(idx,{method,data,resolve,reject});self.postMessage(message);});}emitReady(){this.isReady=true;this.queuedMessages.forEach(msg=>{console.warn('Run queued message',msg);this.handleMessage(msg).catch(console.error);});self.postMessage({type:'ready',codesandbox:true});}}
// CONCATENATED MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/thread-loader/dist/cjs.js??ref--9-0!/Users/uday/Desktop/projects/codesandbox-client/node_modules/babel-loader/lib??ref--9-1!./src/sandbox/eval/transpilers/stylus/stylus-worker.ts
const childHandler=new child_handler_ChildHandler('stylus-worker');self.importScripts("".concat("/sandpack"||false,"/static/js/stylus.min.js"));function compile(_x){return _compile.apply(this,arguments);}function _compile(){_compile=asyncToGenerator_default()(function*(data){const code=data.code,path=data.path;const transpiledCode=yield new Promise((resolve,reject)=>{stylus.render(code,{filename:path},(err,css)=>{if(err){return reject(err);}return resolve(css);});});return{transpiledCode};});return _compile.apply(this,arguments);}childHandler.registerFunction('compile',compile);childHandler.emitReady();

/***/ })

/******/ });
//# sourceMappingURL=stylus-transpiler.1ba03b52.worker.js.map