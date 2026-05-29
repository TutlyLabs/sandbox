/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"sandbox-startup": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "static/js/" + ({}[chunkId]||chunkId) + "." + {"4":"257942984","5":"a2722b3c2"}[chunkId] + ".chunk.js"
/******/ 	}
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
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = this["csbJsonP"] = this["csbJsonP"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/sandbox/startup.ts","vendors~sandbox-startup","default~sandbox~sandbox-startup"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../sandbox-hooks/console/index.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__("../codesandbox-api/dist/codesandbox.es5.js"), __webpack_require__("../../node_modules/console-feed/lib/Hook/index.js"), __webpack_require__("../../node_modules/console-feed/lib/Transform/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _asyncToGenerator2, _codesandboxApi, _Hook, _Transform) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.default = setupConsole;_asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);_Hook = _interopRequireDefault(_Hook);



  function setupConsole() {
    (0, _Hook.default)(window.console, /*#__PURE__*/function () {var _ref = (0, _asyncToGenerator2.default)(function* (log) {
        yield _codesandboxApi.iframeHandshake;
        (0, _codesandboxApi.dispatch)({
          type: 'console',
          log
        });
      });return function (_x) {return _ref.apply(this, arguments);};}());

    function handleMessage(data, source) {
      if (source) {
        if (data.type === 'evaluate') {
          let result = null;
          let error = false;
          try {
            // Attempt to wrap command in parentheses, fixing issues
            // where directly returning objects results in unexpected
            // behaviour.
            if (data.command && data.command.charAt(0) === '{') {
              try {
                const wrapped = "(".concat(data.command, ")");
                // `new Function` is used to validate Javascript syntax
                // eslint-disable-next-line
                const validate = new Function(wrapped);
                data.command = wrapped;
              } catch (e) {

                // We shouldn't wrap the expression
              }}

            result = (0, eval)(data.command); // eslint-disable-line no-eval
          } catch (e) {
            result = e;
            error = true;
          }

          try {
            (0, _codesandboxApi.dispatch)({
              type: 'eval-result',
              error,
              result: (0, _Transform.Encode)(result)
            });
          } catch (e) {
            console.error(e);
          }
        }
      }
    }

    return (0, _codesandboxApi.listen)(handleMessage);
  }

  const isIFramePreview = window.top !== window.self;

  const insideCodeSandboxPreview =
  window.location.host.endsWith('csb.app') ||
  window.location.host.endsWith('csb.dev');

  // Only run this script in editor context
  if (isIFramePreview && insideCodeSandboxPreview) {
    // This is a temporary fix for deprecating the V1 editor. We need to load both V1 and V2 preview protocol
    // and this is the simplest way to achieve that. Later everything will be V2 preview protocol
    (function LoadV2PreviewProtocol() {
      const script = document.createElement('script');
      script.src = 'https://codesandbox.io/p/preview-protocol.js';
      script.async = true;
      script.defer = true;
      (document.head || document.documentElement).prepend(script);
    })();

    // This script is used to enable Chrome DevTools functionality
    (function ChromeDevtools() {
      const script = document.createElement('script');
      script.src = 'https://codesandbox.io/p/chrome-devtool/protocol/index.js';

      script.onload = () => {
        const devtoolProtocol = window.chobitsu;
        if (devtoolProtocol) {
          window.addEventListener('message', (event) => {const _event$data =
              event.data,type = _event$data.type,data = _event$data.data;

            if (type === 'FROM_DEVTOOL') {
              devtoolProtocol.sendRawMessage(data);
            }
          });

          devtoolProtocol.setOnMessage((data) => {
            if (data.includes('"id":"tmp')) {
              return;
            }

            window.parent.postMessage({ type: 'TO_DEVTOOL', data }, '*');
          });

          devtoolProtocol.sendRawMessage("{\"id\":5,\"method\":\"Runtime.enable\",\"params\":{}}"

          );
        }
      };

      (document.head || document.documentElement).prepend(script);
    })();
  }});

/***/ }),

/***/ "../sandbox-hooks/screenshot.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../codesandbox-api/dist/codesandbox.es5.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _codesandboxApi) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.default = setupScreenshotListener;

  function setupScreenshotListener() {
    let existingCursor;
    (0, _codesandboxApi.listen)((data) => {
      if (data.type === 'take-screenshot') {
        Promise.all(/* import() */[__webpack_require__.e(5), __webpack_require__.e(4)]).then(__webpack_require__.t.bind(null, "../sandbox-hooks/html2canvas-lib/index.js", 7)).then((lib) => {
          const html2canvas = lib.default;

          html2canvas(document.documentElement, {
            useCORS: (isSameOrigin) => {
              // When it is a public sandbox the image url will be redirected to a
              // cross origin url, so we need to force CORS
              if (!data.data.isPrivateSandbox && isSameOrigin) {
                return true;
              }

              // By default we do not use cors, which means cross origin images will use the proxy
              return false;
            },
            proxy: 'https://h2c-proxy.csb.dev/',
            logging: false,
            allowTaint: false
          }).then((canvas) => {
            const scrollCroppedCanvas = document.createElement('canvas');
            const cropScrollLeft = document.documentElement.scrollLeft;
            const cropScrollTop = document.documentElement.scrollTop;

            scrollCroppedCanvas.width = canvas.width - cropScrollLeft;
            scrollCroppedCanvas.height = canvas.height - cropScrollTop;
            scrollCroppedCanvas.
            getContext('2d').
            drawImage(
              canvas,
              cropScrollLeft,
              cropScrollTop,
              scrollCroppedCanvas.width,
              scrollCroppedCanvas.height,
              0,
              0,
              scrollCroppedCanvas.width,
              scrollCroppedCanvas.height
            );

            (0, _codesandboxApi.dispatch)({
              type: 'screenshot-generated',
              screenshot: scrollCroppedCanvas.toDataURL()
            });
          });
        });
      } else if (data.type === 'show-screenshot-cursor') {
        existingCursor = document.documentElement.style.cursor;
        document.documentElement.style.cursor = "url('data:image/svg+xml;utf8,<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16H0V8Z\" fill=\"%23FF3B30\"/></svg>'), auto";
      } else if (data.type === 'hide-screenshot-cursor') {
        document.documentElement.style.cursor = existingCursor;
      }
    });

    const listener = (event) => {
      if (
      event.key === 's' &&
      event.shiftKey && (
      event.metaKey || event.ctrlKey))
      {
        event.preventDefault();
        (0, _codesandboxApi.dispatch)({
          type: 'screenshot-requested-from-preview'
        });
      }
    };
    window.addEventListener('keydown', listener);
  }});

/***/ }),

/***/ "../sandbox-hooks/url-listeners.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../codesandbox-api/dist/codesandbox.es5.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _codesandboxApi) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.default = setupHistoryListeners;

  const origHistoryProto = window.history.__proto__; // eslint-disable-line no-proto
  const historyList = [];
  let historyPosition = -1;
  let disableNextHashChange = false;

  function sendUrlChange(url) {
    (0, _codesandboxApi.dispatch)({
      type: 'urlchange',
      url,
      back: historyPosition > 0,
      forward: historyPosition < historyList.length - 1
    });
  }

  function pushHistory(url, state) {
    // remove "future" locations
    historyList.splice(historyPosition + 1);
    historyList.push({ url, state });
    historyPosition = historyList.length - 1;
  }

  function pathWithHash(location) {
    return "".concat(location.pathname).concat(location.hash);
  }

  function setupHistoryListeners() {
    function handleMessage(data, source) {
      if (source) {
        if (data.type === 'urlback') {
          history.back();
        } else if (data.type === 'urlforward') {
          history.forward();
        } else if (data.type === 'refresh') {
          document.location.reload();
        }
      }
    }
    Object.assign(window.history, {
      go(delta) {
        const newPos = historyPosition + delta;
        if (newPos >= 0 && newPos <= historyList.length - 1) {
          historyPosition = newPos;const _historyList$historyP =
            historyList[historyPosition],url = _historyList$historyP.url,state = _historyList$historyP.state;
          const oldURL = document.location.href;
          origHistoryProto.replaceState.call(window.history, state, '', url);
          const newURL = document.location.href;
          sendUrlChange(newURL);
          window.dispatchEvent(new PopStateEvent('popstate', { state }));
          if (newURL.indexOf('#') !== -1) {
            disableNextHashChange = true;
            window.dispatchEvent(
              new HashChangeEvent('hashchange', { oldURL, newURL })
            );
          }
        }
      },

      back() {
        window.history.go(-1);
      },

      forward() {
        window.history.go(1);
      },

      pushState(state, title, url) {
        origHistoryProto.replaceState.call(window.history, state, title, url);
        pushHistory(url, state);
        sendUrlChange(document.location.href);
      },

      replaceState(state, title, url) {
        origHistoryProto.replaceState.call(window.history, state, title, url);
        historyList[historyPosition] = { state, url };
        sendUrlChange(document.location.href);
      }
    });

    Object.defineProperties(window.history, {
      length: {
        get() {
          return historyList.length;
        },
        configurable: true
      },

      state: {
        get() {
          return historyList[historyPosition].state;
        },
        configurable: true
      }
    });

    window.addEventListener('hashchange', () => {
      if (!disableNextHashChange) {
        const url = pathWithHash(document.location);
        pushHistory(url, null);
        sendUrlChange(document.location.href);
      } else {
        disableNextHashChange = false;
      }
    });

    pushHistory(pathWithHash(document.location), null);

    setTimeout(() => {
      sendUrlChange(document.location.href);
    });
    return (0, _codesandboxApi.listen)(handleMessage);
  }});

/***/ }),

/***/ "./src/sandbox/startup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/worker-loader/dist/cjs.js?name=babel-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/babel/worker/index.ts
var worker = __webpack_require__("../../node_modules/worker-loader/dist/cjs.js?name=babel-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/babel/worker/index.ts");
var worker_default = /*#__PURE__*/__webpack_require__.n(worker);

// EXTERNAL MODULE: ../sandbox-hooks/console/index.js
var console = __webpack_require__("../sandbox-hooks/console/index.js");
var console_default = /*#__PURE__*/__webpack_require__.n(console);

// EXTERNAL MODULE: ../sandbox-hooks/url-listeners.js
var url_listeners = __webpack_require__("../sandbox-hooks/url-listeners.js");
var url_listeners_default = /*#__PURE__*/__webpack_require__.n(url_listeners);

// EXTERNAL MODULE: ../sandbox-hooks/screenshot.js
var screenshot = __webpack_require__("../sandbox-hooks/screenshot.js");
var screenshot_default = /*#__PURE__*/__webpack_require__.n(screenshot);

// EXTERNAL MODULE: ../sandbox-hooks/preview-secret.js
var preview_secret = __webpack_require__("../sandbox-hooks/preview-secret.js");

// EXTERNAL MODULE: ../codesandbox-api/dist/codesandbox.es5.js
var codesandbox_es5 = __webpack_require__("../codesandbox-api/dist/codesandbox.es5.js");

// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/babel/babel-version.ts
const BABEL7_VERSION='7.21.8';
// CONCATENATED MODULE: ./src/sandbox/startup.ts
/* eslint-disable import/default */ // @ts-ignore
/* eslint-enable import/default */// Prefetch file as it's not used quickly enough to use preload without warnings
function prefetchScript(url){const preloadLink=document.createElement('link');preloadLink.href=url;preloadLink.rel='prefetch';preloadLink.as='script';document.head.appendChild(preloadLink);}prefetchScript("".concat("/sandpack"||false,"/static/js/babel.").concat(BABEL7_VERSION,".min.js"));// Preload first babel worker, this will ensure the worker is in the browser cache when we need it
globalThis.babelworkers=[worker_default()()];if(!codesandbox_es5["isStandalone"]){// Means we're in the editor
url_listeners_default()();console_default()();Object(preview_secret["listenForPreviewSecret"])();screenshot_default()();}

/***/ })

/******/ });
//# sourceMappingURL=sandbox-startup.c82ce7064.js.map