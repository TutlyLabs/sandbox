/******/ (function(modules) { // webpackBootstrap
/******/ 	this["webpackChunk"] = function webpackChunkCallback(chunkIds, moreModules) {
/******/ 		for(var moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		while(chunkIds.length)
/******/ 			installedChunks[chunkIds.pop()] = 1;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "1" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 1
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/ 		promises.push(Promise.resolve().then(function() {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				importScripts(__webpack_require__.p + "" + chunkId + ".sass-transpiler." + "c9d7e5c9" + ".worker.js");
/******/ 			}
/******/ 		}));
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../node_modules/thread-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!./src/sandbox/eval/transpilers/sass/worker/index.ts");
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

/***/ "../../node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../node_modules/thread-loader/dist/cjs.js?!../../node_modules/babel-loader/lib/index.js?!./src/sandbox/eval/transpilers/sass/worker/index.ts":
/***/ (function(module, exports, __webpack_require__) {

self.importScripts("".concat("/sandpack","/static/browserfs12/browserfs.min.js"));self.process=self.BrowserFS.BFSRequire('process');// @ts-ignore
self.Buffer=self.BrowserFS.BFSRequire('buffer').Buffer;__webpack_require__("./src/sandbox/eval/transpilers/sass/worker/sass-worker.ts");

/***/ }),

/***/ "../common/lib/utils/delay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function delay(timeout = 1000) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
exports.default = delay;


/***/ }),

/***/ "../common/lib/utils/path.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.relative = exports.resolve = exports.extname = exports.absolute = exports.basename = exports.dirname = exports.join = exports.normalize = exports.isAbsolute = void 0;
/* eslint-disable no-param-reassign */
/* eslint-disable no-continue */
const splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;
function splitPath(filename) {
    return splitPathRe.exec(filename).slice(1);
}
// resolves . and .. elements in a path array with directory names there
// must be no slashes or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
    const res = [];
    for (let i = 0; i < parts.length; i += 1) {
        const p = parts[i];
        // ignore empty parts
        if (!p || p === '.')
            continue; // eslint-disable-line no-continue
        if (p === '..') {
            if (res.length && res[res.length - 1] !== '..') {
                res.pop();
            }
            else if (allowAboveRoot) {
                res.push('..');
            }
        }
        else {
            res.push(p);
        }
    }
    return res;
}
function isAbsolute(path) {
    return path.charAt(0) === '/';
}
exports.isAbsolute = isAbsolute;
function normalize(path) {
    const isAbs = isAbsolute(path);
    const trailingSlash = path && path[path.length - 1] === '/';
    let newPath = path;
    // Normalize the path
    newPath = normalizeArray(newPath.split('/'), !isAbs).join('/');
    if (!newPath && !isAbs) {
        newPath = '.';
    }
    if (newPath && trailingSlash) {
        newPath += '/';
    }
    return (isAbs ? '/' : '') + newPath;
}
exports.normalize = normalize;
function join(...paths) {
    let path = '';
    for (let i = 0; i < paths.length; i += 1) {
        const segment = paths[i];
        if (typeof segment !== 'string') {
            throw new TypeError('Arguments to path.join must be strings');
        }
        if (segment) {
            if (!path) {
                path += segment;
            }
            else {
                path += `/${segment}`;
            }
        }
    }
    return normalize(path);
}
exports.join = join;
function dirname(path) {
    const result = splitPath(path);
    const root = result[0];
    let dir = result[1];
    if (!root && !dir) {
        // No dirname whatsoever
        return '.';
    }
    if (dir) {
        // It has a dirname, strip trailing slash
        dir = dir.substr(0, dir.length - 1);
    }
    return root + dir;
}
exports.dirname = dirname;
function basename(p, ext = '') {
    // Special case: Normalize will modify this to '.'
    if (p === '') {
        return p;
    }
    // Normalize the string first to remove any weirdness.
    const path = normalize(p);
    // Get the last part of the string.
    const sections = path.split('/');
    const lastPart = sections[sections.length - 1];
    // Special case: If it's empty, then we have a string like so: foo/
    // Meaning, 'foo' is guaranteed to be a directory.
    if (lastPart === '' && sections.length > 1) {
        return sections[sections.length - 2];
    }
    // Remove the extension, if need be.
    if (ext.length > 0) {
        const lastPartExt = lastPart.substr(lastPart.length - ext.length);
        if (lastPartExt === ext) {
            return lastPart.substr(0, lastPart.length - ext.length);
        }
    }
    return lastPart;
}
exports.basename = basename;
function absolute(path) {
    if (path.startsWith('/')) {
        return path;
    }
    if (path.startsWith('./')) {
        return path.replace('./', '/');
    }
    return '/' + path;
}
exports.absolute = absolute;
function assertPath(path) {
    if (typeof path !== 'string') {
        throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
    }
}
function extname(path) {
    assertPath(path);
    let startDot = -1;
    let startPart = 0;
    let end = -1;
    let matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    let preDotState = 0;
    for (let i = path.length - 1; i >= 0; --i) {
        const code = path.charCodeAt(i);
        if (code === 47) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
                startPart = i + 1;
                break;
            }
            // eslint-disable-next-line
            continue;
        }
        if (end === -1) {
            // We saw the first non-path separator, mark this as the end of our
            // extension
            matchedSlash = false;
            end = i + 1;
        }
        if (code === 46 /* . */) {
            // If this is our first dot, mark it as the start of our extension
            if (startDot === -1)
                startDot = i;
            else if (preDotState !== 1)
                preDotState = 1;
        }
        else if (startDot !== -1) {
            // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
    }
    if (startDot === -1 ||
        end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed path component is exactly '..'
        (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)) {
        return '';
    }
    return path.slice(startDot, end);
}
exports.extname = extname;
function resolve(...args) {
    let resolvedPath = '';
    let resolvedAbsolute = false;
    for (let i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
        const path = i >= 0 ? args[i] : process.cwd();
        // Skip empty and invalid entries
        if (typeof path !== 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
        }
        else if (!path) {
            continue;
        }
        resolvedPath = path + '/' + resolvedPath;
        resolvedAbsolute = path[0] === '/';
    }
    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)
    // Normalize the path
    resolvedPath = normalizeArray(resolvedPath.split('/'), !resolvedAbsolute).join('/');
    return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
}
exports.resolve = resolve;
function trimArray(arr) {
    const lastIndex = arr.length - 1;
    let start = 0;
    for (; start <= lastIndex; start++) {
        if (arr[start])
            break;
    }
    let end = lastIndex;
    for (; end >= 0; end--) {
        if (arr[end])
            break;
    }
    if (start === 0 && end === lastIndex)
        return arr;
    if (start > end)
        return [];
    return arr.slice(start, end + 1);
}
function relative(from, to) {
    from = resolve(from).substr(1);
    to = resolve(to).substr(1);
    const fromParts = trimArray(from.split('/'));
    const toParts = trimArray(to.split('/'));
    const length = Math.min(fromParts.length, toParts.length);
    let samePartsLength = length;
    for (let i = 0; i < length; i++) {
        if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
        }
    }
    let outputParts = [];
    for (let i = samePartsLength; i < fromParts.length; i++) {
        outputParts.push('..');
    }
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join('/');
}
exports.relative = relative;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../../node_modules/process/browser.js")))

/***/ }),

/***/ "./src/sandbox/eval/transpilers/sass/worker/sass-worker.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ../common/lib/utils/delay.js
var delay = __webpack_require__("../common/lib/utils/delay.js");
var delay_default = /*#__PURE__*/__webpack_require__.n(delay);

// EXTERNAL MODULE: ../common/lib/utils/path.js
var utils_path = __webpack_require__("../common/lib/utils/path.js");

// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/sass/worker/resolver.ts
// Extensions without `.`, resolver expects it like this
const POTENTIAL_EXTENSIONS=['scss','sass','css'];// Re-implementation of sass.js's `getPathVariations`, dart-sass does not implement this and we have some extra logic on top
function getPathVariations(filename){const hasExtension=!!utils_path["extname"](filename);const extensions=hasExtension?['']:POTENTIAL_EXTENSIONS.map(ext=>'.'+ext);const pathVariations=[];// eslint-disable-next-line no-unused-vars
for(const ext of extensions){pathVariations.push(utils_path["join"](filename+ext));pathVariations.push(utils_path["join"]('_'+filename+ext));}if(!hasExtension){// eslint-disable-next-line no-unused-vars
for(const ext of extensions){pathVariations.push(utils_path["join"](filename,'index'+ext));pathVariations.push(utils_path["join"](filename,'_index'+ext));}}return pathVariations;}function getPossibleSassPaths(directories,filepath){if(filepath[0]==='~'){// eslint-disable-next-line no-param-reassign
directories=['/node_modules'];// eslint-disable-next-line no-param-reassign
filepath=filepath.substr(1);}else if(filepath[0]!=='.'&&filepath[0]!=='/'){directories.push('/node_modules');}return directories.map(directory=>utils_path["join"](directory,filepath));}function resolveAsyncModule(_x){return _resolveAsyncModule.apply(this,arguments);}function _resolveAsyncModule(){_resolveAsyncModule=asyncToGenerator_default()(function*(opts){const path=opts.path,_opts$options=opts.options,options=_opts$options===void 0?{}:_opts$options,loaderContextId=opts.loaderContextId,childHandler=opts.childHandler;const resolvedModule=yield childHandler.callFn({method:'resolve-async-transpiled-module',data:{path,options,loaderContextId}});if(!resolvedModule.found){throw new Error("Module ".concat(path," not found."));}return resolvedModule;});return _resolveAsyncModule.apply(this,arguments);}function existsPromise(opts){const fs=opts.fs,filepath=opts.filepath,loaderContextId=opts.loaderContextId,childHandler=opts.childHandler;return new Promise(r=>{fs.stat(filepath,/*#__PURE__*/function(){var _ref=asyncToGenerator_default()(function*(err,stats){if(err||stats.isDirectory()){if(stats&&stats.isDirectory()){r(false);return;}// We try to download it
try{const resolvedModule=yield resolveAsyncModule({path:filepath,options:{isAbsolute:filepath.startsWith('/'),ignoredExtensions:POTENTIAL_EXTENSIONS},loaderContextId,childHandler});const ext=utils_path["extname"](resolvedModule.path).substring(1);if(POTENTIAL_EXTENSIONS.indexOf(ext)===-1){r(false);return;}try{fs.mkdirSync(utils_path["dirname"](resolvedModule.path),{recursive:true});}catch(e){/* noop */}try{fs.writeFileSync(resolvedModule.path,resolvedModule.code);}catch(e){/* noop */}r(resolvedModule.path);}catch(e){r(false);}}else{r(filepath);}});return function(_x2,_x3){return _ref.apply(this,arguments);};}());});}function resolvePotentialPath(_x4){return _resolvePotentialPath.apply(this,arguments);}function _resolvePotentialPath(){_resolvePotentialPath=asyncToGenerator_default()(function*(opts){const fs=opts.fs,potentialPath=opts.potentialPath,loaderContextId=opts.loaderContextId,childHandler=opts.childHandler;try{const pathDirName=utils_path["dirname"](potentialPath);const pathVariations=getPathVariations(utils_path["basename"](potentialPath)).map(variation=>utils_path["join"](pathDirName,variation));// Try the first one first, that's often the right one and this way we don't spam
// the main thread.
const firstPath=pathVariations.shift();const firstFoundFilePath=yield existsPromise({fs,filepath:firstPath,loaderContextId,childHandler});if(firstFoundFilePath){return firstPath;}for(const path of pathVariations){// eslint-disable-next-line no-await-in-loop
const result=yield existsPromise({fs,filepath:path,loaderContextId,childHandler});if(result){return path;}}return null;}catch(err){return null;}});return _resolvePotentialPath.apply(this,arguments);}function getFilePathFromUrl(val){try{const parsed=new URL(val);return parsed.pathname;}catch(err){return val;}}function getFilePathsFromUrls(urls){return urls.map(getFilePathFromUrl);}/* Re-implementation of sass importer
Imports are resolved by trying, in order:
  * Loading a file relative to the file in which the `@import` appeared.
  * Each custom importer.
  * Loading a file relative to the current working directory.
  * Each load path in `includePaths`
  * Each load path specified in the `SASS_PATH` environment variable, which should be semicolon-separated on Windows and colon-separated elsewhere.
See: https://sass-lang.com/documentation/js-api#importer
See also: https://github.com/sass/dart-sass/blob/006e6aa62f2417b5267ad5cdb5ba050226fab511/lib/src/importer/node/implementation.dart
*/function resolveSassUrl(_x5){return _resolveSassUrl.apply(this,arguments);}function _resolveSassUrl(){_resolveSassUrl=asyncToGenerator_default()(function*(opts){const _opts$includePaths=opts.includePaths,includePaths=_opts$includePaths===void 0?[]:_opts$includePaths,_opts$env=opts.env,env=_opts$env===void 0?{}:_opts$env,fs=opts.fs,resolutionCache=opts.resolutionCache,loaderContextId=opts.loaderContextId,childHandler=opts.childHandler;let url=opts.url,previous=opts.previous;if(loaderContextId==null){throw new Error('Loader context id is required');}url=getFilePathFromUrl(url);previous=getFilePathFromUrl(previous);let paths=[utils_path["dirname"](previous)];if(includePaths){paths.push(...includePaths);}if(env.SASS_PATH){paths.push(...env.SASS_PATH.split(':'));}paths=getFilePathsFromUrls(paths);const potentialPaths=getPossibleSassPaths(paths,url);// eslint-disable-next-line no-unused-vars
for(const potentialPath of potentialPaths){if(resolutionCache[potentialPath]){return resolutionCache[potentialPath];}resolutionCache[potentialPath]=resolvePotentialPath({fs,potentialPath,loaderContextId,childHandler});// eslint-disable-next-line no-await-in-loop
const resolvedPath=yield resolutionCache[potentialPath];if(resolvedPath){return resolvedPath;}}return null;});return _resolveSassUrl.apply(this,arguments);}
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
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/utils/fs.ts
function getModulesFromMainThread(_x){return _getModulesFromMainThread.apply(this,arguments);}function _getModulesFromMainThread(){_getModulesFromMainThread=asyncToGenerator_default()(function*(opts){const childHandler=opts.childHandler,loaderContextId=opts.loaderContextId;if(loaderContextId==null){throw new Error('Loader context id is required');}const _yield$childHandler$c=yield childHandler.callFn({method:'resolve-fs',data:{loaderContextId}}),modules=_yield$childHandler$c.modules;return modules;});return _getModulesFromMainThread.apply(this,arguments);}
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/sass/worker/sass-worker.ts
// @ts-ignore
self.window=self;let libPromise=null;function fetchSassLibrary(){return _fetchSassLibrary.apply(this,arguments);}function _fetchSassLibrary(){_fetchSassLibrary=asyncToGenerator_default()(function*(){if(!libPromise){// @ts-ignore
libPromise=__webpack_require__.e(/* import() */ 0).then(__webpack_require__.t.bind(null, "../browser-dart-sass/lib/index.js", 7)).then(x=>x.default);}return libPromise;});return _fetchSassLibrary.apply(this,arguments);}let fsInitialized=false;let fsLoading=false;const sass_worker_childHandler=new child_handler_ChildHandler('sass-worker');function initFS(_x){return _initFS.apply(this,arguments);}function _initFS(){_initFS=asyncToGenerator_default()(function*(loaderContextId){if(!fsLoading&&!fsInitialized){yield initializeBrowserFS(loaderContextId);}else if(!fsInitialized){while(!fsInitialized){yield delay_default()(50);// eslint-disable-line
}}});return _initFS.apply(this,arguments);}function compileSass(_x2){return _compileSass.apply(this,arguments);}function _compileSass(){_compileSass=asyncToGenerator_default()(function*(opts){const code=opts.code,path=opts.path,indentedSyntax=opts.indentedSyntax,loaderContextId=opts.loaderContextId;const Sass=yield fetchSassLibrary();yield initFS(loaderContextId);// @ts-ignore
// eslint-disable-next-line
const fs=BrowserFS.BFSRequire('fs');// TODO: Invalidate this in a smarter way
// we reset the found file cache and resolution cache in case one of the imports/filenames changed
const foundFileCache={};const resolutionCache={};const transpilationDependencies=[];const readFile=filepath=>{if(!foundFileCache[filepath]){foundFileCache[filepath]=new Promise((promiseResolve,promiseReject)=>{fs.readFile(filepath,{},/*#__PURE__*/function(){var _ref=asyncToGenerator_default()(function*(error,data){if(error){// Try to download it
const module=yield resolveAsyncModule({path:filepath,loaderContextId:opts.loaderContextId,childHandler: sass_worker_childHandler,options:{isAbsolute:false,ignoredExtensions:['.sass','.css','.scss']}});if(module){promiseResolve(module.code);return;}promiseReject(error);return;}promiseResolve(data.toString());});return function(_x4,_x5){return _ref.apply(this,arguments);};}());});}return foundFileCache[filepath];};const importer=/*#__PURE__*/function(){var _ref2=asyncToGenerator_default()(function*(url,prev){try{const previous=prev==='stdin'?path:prev;// request.path sometimes returns a partially resolved path
// See: https://github.com/codesandbox/codesandbox-client/issues/4865
const foundPath=yield resolveSassUrl({url,previous,fs,resolutionCache,loaderContextId,childHandler: sass_worker_childHandler});if(!foundPath){throw new Error("Could not resolve ".concat(url));}transpilationDependencies.push({path:foundPath,options:{isAbsolute:true}});const contents=yield readFile(foundPath);return{file:foundPath,contents,isIndentedSyntax:foundPath.endsWith('sass')};}catch(err){err.message="Could not resolve ".concat(url,": ").concat(err.message);throw err;}});return function importer(_x6,_x7){return _ref2.apply(this,arguments);};}();const transpilationResult=yield new Promise((resolve,reject)=>{Sass.render({data:code,importer:(url,prev,done)=>{importer(url,prev).then(result=>{done(result);}).catch(err=>{done(err);});},sourceMapEmbed:true,indentedSyntax},(err,result)=>{if(err){return reject(err);}return resolve(result);});});const transpiledCode=transpilationResult.css.toString();return{transpiledCode,transpilationDependencies};});return _compileSass.apply(this,arguments);}function initializeBrowserFS(_x3){return _initializeBrowserFS.apply(this,arguments);}function _initializeBrowserFS(){_initializeBrowserFS=asyncToGenerator_default()(function*(loaderContextId){fsLoading=true;const modules=yield getModulesFromMainThread({childHandler: sass_worker_childHandler,loaderContextId});const tModules={};modules.forEach(module=>{tModules[module.path]={module};});const bfsWrapper={getTranspiledModules:()=>tModules,addModule:()=>{},removeModule:()=>{},moveModule:()=>{},updateModule:()=>{}};return new Promise(resolvePromise=>{// @ts-ignore
BrowserFS.configure({fs:'OverlayFS',options:{writable:{fs:'InMemory'},readable:{fs:'CodeSandboxFS',options:{manager:bfsWrapper}}}},err=>{if(err){console.error(err);return;}fsLoading=false;fsInitialized=true;resolvePromise(null);// BrowserFS is initialized and ready-to-use!
});});});return _initializeBrowserFS.apply(this,arguments);}sass_worker_childHandler.registerFunction('compile',compileSass);sass_worker_childHandler.registerFSInitializer(()=>{});sass_worker_childHandler.emitReady();

/***/ })

/******/ });
//# sourceMappingURL=sass-transpiler.c9d7e5c9.worker.js.map