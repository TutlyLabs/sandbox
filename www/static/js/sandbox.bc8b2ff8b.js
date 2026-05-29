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
/******/ 		"sandbox": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "static/js/" + ({"css-loader":"css-loader","vendors~css-modules-loader-core":"vendors~css-modules-loader-core","css-modules-loader-core":"css-modules-loader-core","vendors~postcss-compiler~vue-style-compiler":"vendors~postcss-compiler~vue-style-compiler","vendors~postcss-compiler":"vendors~postcss-compiler","postcss-compiler":"postcss-compiler","vendors~vue-style-compiler":"vendors~vue-style-compiler","vue-style-compiler":"vue-style-compiler","vendors~react-devtools-backend":"vendors~react-devtools-backend","vendors~vue-loader~vue-selector~vue-template-compiler":"vendors~vue-loader~vue-selector~vue-template-compiler","vendors~vue-template-compiler":"vendors~vue-template-compiler","vue-template-compiler":"vue-template-compiler","vue-loader":"vue-loader","vue-selector":"vue-selector"}[chunkId]||chunkId) + "." + {"0":"01b796e44","1":"1842e3e8f","2":"dfae37ef4","3":"6aab06823","6":"b064392c1","7":"d2149846f","8":"ec37f2faa","9":"3984d1a3b","css-loader":"b354b789f","vendors~css-modules-loader-core":"5424edd23","css-modules-loader-core":"3a496d40d","vendors~postcss-compiler~vue-style-compiler":"7c1f5a8ce","vendors~postcss-compiler":"dfecc98c0","postcss-compiler":"dd3889a1c","vendors~vue-style-compiler":"94007958a","vue-style-compiler":"177171261","vendors~react-devtools-backend":"9270bbc91","vendors~vue-loader~vue-selector~vue-template-compiler":"703b6cf22","vendors~vue-template-compiler":"72398d6bf","vue-template-compiler":"6ce2c8691","vue-loader":"254f580b8","vue-selector":"4b142dbf0"}[chunkId] + ".chunk.js"
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
/******/ 	deferredModules.push([0,"vendors~sandbox","default~sandbox~sandbox-startup"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/raw-loader/index.js!./src/sandbox/eval/transpilers/vue/v2/style-loader/addStylesClient.js":
/***/ (function(module, exports) {

module.exports = "/* eslint-disable */\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n  Modified by Evan You @yyx990803\n*/\n\nvar hasDocument = typeof document !== 'undefined';\n\nif (typeof DEBUG !== 'undefined' && DEBUG) {\n  if (!hasDocument) {\n    throw new Error(\n      'vue-style-loader cannot be used in a non-browser environment. ' +\n        \"Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.\"\n    );\n  }\n}\n\nvar listToStyles = require('./listToStyles');\n\n/*\n* type StyleObject = {\n*   id: number;\n*   parts: Array<StyleObjectPart>\n* }\n*\n* type StyleObjectPart = {\n*   css: string;\n*   media: string;\n*   sourceMap: ?string\n}\n*/\n\nvar stylesInDom = {\n  /*\n   *   [id: number]: {\n   *     id: number,\n   *     refs: number,\n   *     parts: Array<(obj?: StyleObjectPart) => void>\n   *   }\n   */\n};\n\nvar head =\n  hasDocument && (document.head || document.getElementsByTagName('head')[0]);\nvar singletonElement = null;\nvar singletonCounter = 0;\nvar isProduction = false;\nvar noop = function() {};\n\n// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n// tags it will allow on a page\nvar isOldIE =\n  typeof navigator !== 'undefined' &&\n  /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());\n\nmodule.exports = function(parentId, list, _isProduction) {\n  isProduction = _isProduction;\n\n  var styles = listToStyles(parentId, list);\n  addStylesToDom(styles);\n\n  return function update(newList) {\n    var mayRemove = [];\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n      domStyle.refs--;\n      mayRemove.push(domStyle);\n    }\n    if (newList) {\n      styles = listToStyles(parentId, newList);\n      addStylesToDom(styles);\n    } else {\n      styles = [];\n    }\n    for (var i = 0; i < mayRemove.length; i++) {\n      var domStyle = mayRemove[i];\n      if (domStyle.refs === 0) {\n        for (var j = 0; j < domStyle.parts.length; j++) {\n          domStyle.parts[j]();\n        }\n        delete stylesInDom[domStyle.id];\n      }\n    }\n  };\n};\n\nfunction addStylesToDom(styles /* Array<StyleObject> */) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    if (domStyle) {\n      domStyle.refs++;\n      for (var j = 0; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j]));\n      }\n      if (domStyle.parts.length > item.parts.length) {\n        domStyle.parts.length = item.parts.length;\n      }\n    } else {\n      var parts = [];\n      for (var j = 0; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j]));\n      }\n      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };\n    }\n  }\n}\n\nfunction createStyleElement() {\n  var styleElement = document.createElement('style');\n  styleElement.type = 'text/css';\n  head.appendChild(styleElement);\n  return styleElement;\n}\n\nfunction addStyle(obj /* StyleObjectPart */) {\n  var update, remove;\n  var styleElement = document.querySelector(\n    'style[data-vue-ssr-id~=\"' + obj.id + '\"]'\n  );\n\n  if (styleElement) {\n    if (isProduction) {\n      // has SSR styles and in production mode.\n      // simply do nothing.\n      return noop;\n    } else {\n      // has SSR styles but in dev mode.\n      // for some reason Chrome can't handle source map in server-rendered\n      // style tags - source maps in <style> only works if the style tag is\n      // created and inserted dynamically. So we remove the server rendered\n      // styles and inject new ones.\n      styleElement.parentNode.removeChild(styleElement);\n    }\n  }\n\n  if (isOldIE) {\n    // use singleton mode for IE9.\n    var styleIndex = singletonCounter++;\n    styleElement =\n      singletonElement || (singletonElement = createStyleElement());\n    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);\n  } else {\n    // use multi-style-tag mode in all other cases\n    styleElement = createStyleElement();\n    update = applyToTag.bind(null, styleElement);\n    remove = function() {\n      styleElement.parentNode.removeChild(styleElement);\n    };\n  }\n\n  update(obj);\n\n  return function updateStyle(newObj /* StyleObjectPart */) {\n    if (newObj) {\n      if (\n        newObj.css === obj.css &&\n        newObj.media === obj.media &&\n        newObj.sourceMap === obj.sourceMap\n      ) {\n        return;\n      }\n      update((obj = newObj));\n    } else {\n      remove();\n    }\n  };\n}\n\nvar replaceText = (function() {\n  var textStore = [];\n\n  return function(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n})();\n\nfunction applyToSingletonTag(styleElement, index, remove, obj) {\n  var css = remove ? '' : obj.css;\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = styleElement.childNodes;\n    if (childNodes[index]) styleElement.removeChild(childNodes[index]);\n    if (childNodes.length) {\n      styleElement.insertBefore(cssNode, childNodes[index]);\n    } else {\n      styleElement.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(styleElement, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    styleElement.setAttribute('media', media);\n  }\n\n  if (sourceMap) {\n    // https://developer.chrome.com/devtools/docs/javascript-debugging\n    // this makes source maps inside style tags work properly in Chrome\n    css += '\\n/*# sourceURL=' + sourceMap.sources[0] + ' */';\n    // http://stackoverflow.com/a/26603875\n    css +=\n      '\\n/*# sourceMappingURL=data:application/json;base64,' +\n      btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) +\n      ' */';\n  }\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/sandbox/eval/transpilers/vue/v2/style-loader/listToStyles.js":
/***/ (function(module, exports) {

module.exports = "/* eslint-disable */\n/**\n * Translates the list format produced by css-loader into something\n * easier to manipulate.\n */\nmodule.exports = function listToStyles(parentId, list) {\n  var styles = [];\n  var newStyles = {};\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      id: parentId + ':' + i,\n      css: css,\n      media: media,\n      sourceMap: sourceMap,\n    };\n    if (!newStyles[id]) {\n      styles.push((newStyles[id] = { id: id, parts: [part] }));\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n  return styles;\n};\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/sandbox/status-screen/indicator-screen.html":
/***/ (function(module, exports) {

module.exports = "<style>\n  body {\n    color: #fff;\n    font-family: 'Inter', sans-serif;\n    background: transparent;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  .container {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n  }\n\n  .text {\n    font-size: 0.8rem;\n    width: 100%;\n    font-weight: 400;\n    margin-left: 1rem;\n  }\n\n  .cube {\n    transform: translate(-34px, 15px) scale(0.25, 0.25);\n  }\n\n  .cube,\n  .cube * {\n    position: absolute;\n    width: 6rem;\n    height: 6rem;\n  }\n  .cube .sides * {\n    box-sizing: border-box;\n    border: 10px solid rgba(0,0,0,0.7);\n    border-radius: 8px;\n    background: rgba(255, 255, 255, 0.6);\n  }\n\n  @keyframes rotate {\n    0% {\n      transform: rotateX(-25.5deg) rotateY(45deg);\n    }\n\n    100% {\n      transform: rotateX(-25.5deg) rotateY(405deg);\n    }\n  }\n\n  .sides {\n    animation: rotate 0.8s linear infinite;\n    animation-fill-mode: forwards;\n    transform-style: preserve-3d;\n    transform: rotateX(-25.5deg) rotateY(45deg);\n  }\n\n  .cube .sides .top {\n    animation: top-animation 3s ease infinite;\n    animation-delay: 0ms;\n    transform: rotateX(90deg) translateZ(44px);\n    animation-fill-mode: forwards;\n    transform-origin: 50% 50%;\n  }\n\n  .cube .sides .bottom {\n    animation: bottom-animation 3s ease infinite;\n    animation-delay: 0ms;\n    transform: rotateX(-90deg) translateZ(44px);\n    animation-fill-mode: forwards;\n    transform-origin: 50% 50%;\n  }\n\n  .cube .sides .front {\n    animation: front-animation 3s ease infinite;\n    animation-delay: 100ms;\n    transform: rotateY(0deg) translateZ(44px);\n    animation-fill-mode: forwards;\n    transform-origin: 50% 50%;\n  }\n\n  .cube .sides .back {\n    animation: back-animation 3s ease infinite;\n    animation-delay: 100ms;\n    transform: rotateY(-180deg) translateZ(44px);\n    animation-fill-mode: forwards;\n    transform-origin: 50% 50%;\n  }\n\n  .cube .sides .left {\n    animation: left-animation 3s ease infinite;\n    animation-delay: 100ms;\n    transform: rotateY(-90deg) translateZ(44px);\n    animation-fill-mode: forwards;\n    transform-origin: 50% 50%;\n  }\n\n  .cube .sides .right {\n    animation: right-animation 3s ease infinite;\n    animation-delay: 100ms;\n    transform: rotateY(90deg) translateZ(44px);\n    animation-fill-mode: forwards;\n    transform-origin: 50% 50%;\n  }\n\n</style>\n<div class=\"container\">\n  <div class=\"cube\">\n    <div class=\"sides\">\n      <div class=\"top\"></div>\n      <div class=\"right\"></div>\n      <div class=\"bottom\"></div>\n      <div class=\"left\"></div>\n      <div class=\"front\"></div>\n      <div class=\"back\"></div>\n    </div>\n  </div>\n</div>\n<link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@200;400&display=swap\" rel=\"stylesheet\">\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/sandbox/status-screen/loading-screen.html":
/***/ (function(module, exports) {

module.exports = "<style>\n  body {\n    color: #fff;\n    font-family: 'Inter', sans-serif;\n    background: #151515;\n  }\n\n  .container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n  }\n\n  .text {\n    margin-top: 22rem;\n    font-size: 1rem;\n    width: 100%;\n    font-weight: 200;\n    text-align: center;\n  }\n\n  .cube,\n  .cube * {\n    position: absolute;\n    width: 6rem;\n    height: 6rem;\n  }\n  .cube .sides * {\n    box-sizing: border-box;\n    border: 0.12rem solid white;\n    border-radius: 0.25rem;\n    background: rgba(255, 255, 255, 0.1);\n  }\n\n  @keyframes rotate {\n    0% {\n      transform: rotateX(-37.5deg) rotateY(45deg);\n    }\n    50% {\n      transform: rotateX(-37.5deg) rotateY(405deg);\n    }\n    100% {\n      transform: rotateX(-37.5deg) rotateY(405deg);\n    }\n  }\n\n  .sides {\n    animation: rotate 3s ease infinite;\n    animation-delay: 0.8s;\n    transform-style: preserve-3d;\n    transform: rotateX(-37.5deg) rotateY(45deg);\n  }\n\n  .cube .sides .top {\n    animation: top-animation 3s ease infinite;\n    animation-delay: 0ms;\n    transform: rotateX(90deg) translateZ(96px);\n    animation-fill-mode: forwards;\n    transform-origin: 50% 50%;\n  }\n\n  @keyframes top-animation {\n    0% {\n      opacity: 1;\n      transform: rotateX(90deg) translateZ(100px);\n    }\n    20% {\n      opacity: 1;\n      transform: rotateX(90deg) translateZ(48px);\n    }\n    70% {\n      opacity: 1;\n      transform: rotateX(90deg) translateZ(48px);\n    }\n    90% {\n      opacity: 1;\n      transform: rotateX(90deg) translateZ(100px);\n    }\n    100% {\n      opacity: 1;\n      transform: rotateX(90deg) translateZ(100px);\n    }\n  }\n  .cube .sides .bottom {\n    animation: bottom-animation 3s ease infinite;\n    animation-delay: 0ms;\n    transform: rotateX(-90deg) translateZ(96px);\n    animation-fill-mode: forwards;\n    transform-origin: 50% 50%;\n  }\n\n  @keyframes bottom-animation {\n    0% {\n      opacity: 1;\n      transform: rotateX(-90deg) translateZ(100px);\n    }\n    20% {\n      opacity: 1;\n      transform: rotateX(-90deg) translateZ(48px);\n    }\n    70% {\n      opacity: 1;\n      transform: rotateX(-90deg) translateZ(48px);\n    }\n    90% {\n      opacity: 1;\n      transform: rotateX(-90deg) translateZ(100px);\n    }\n    100% {\n      opacity: 1;\n      transform: rotateX(-90deg) translateZ(100px);\n    }\n  }\n  .cube .sides .front {\n    animation: front-animation 3s ease infinite;\n    animation-delay: 100ms;\n    transform: rotateY(0deg) translateZ(96px);\n    animation-fill-mode: forwards;\n    transform-origin: 50% 50%;\n  }\n\n  @keyframes front-animation {\n    0% {\n      opacity: 1;\n      transform: rotateY(0deg) translateZ(96px);\n    }\n    20% {\n      opacity: 1;\n      transform: rotateY(0deg) translateZ(48px);\n    }\n    70% {\n      opacity: 1;\n      transform: rotateY(0deg) translateZ(48px);\n    }\n    90% {\n      opacity: 1;\n      transform: rotateY(0deg) translateZ(96px);\n    }\n    100% {\n      opacity: 1;\n      transform: rotateY(0deg) translateZ(96px);\n    }\n  }\n  .cube .sides .back {\n    animation: back-animation 3s ease infinite;\n    animation-delay: 100ms;\n    transform: rotateY(-180deg) translateZ(96px);\n    animation-fill-mode: forwards;\n    transform-origin: 50% 50%;\n  }\n\n  @keyframes back-animation {\n    0% {\n      opacity: 1;\n      transform: rotateY(-180deg) translateZ(96px);\n    }\n    20% {\n      opacity: 1;\n      transform: rotateY(-180deg) translateZ(48px);\n    }\n    70% {\n      opacity: 1;\n      transform: rotateY(-180deg) translateZ(48px);\n    }\n    90% {\n      opacity: 1;\n      transform: rotateY(-180deg) translateZ(96px);\n    }\n    100% {\n      opacity: 1;\n      transform: rotateY(-180deg) translateZ(96px);\n    }\n  }\n  .cube .sides .left {\n    animation: left-animation 3s ease infinite;\n    animation-delay: 100ms;\n    transform: rotateY(-90deg) translateZ(96px);\n    animation-fill-mode: forwards;\n    transform-origin: 50% 50%;\n  }\n\n  @keyframes left-animation {\n    0% {\n      opacity: 1;\n      transform: rotateY(-90deg) translateZ(96px);\n    }\n    20% {\n      opacity: 1;\n      transform: rotateY(-90deg) translateZ(48px);\n    }\n    70% {\n      opacity: 1;\n      transform: rotateY(-90deg) translateZ(48px);\n    }\n    90% {\n      opacity: 1;\n      transform: rotateY(-90deg) translateZ(96px);\n    }\n    100% {\n      opacity: 1;\n      transform: rotateY(-90deg) translateZ(96px);\n    }\n  }\n  .cube .sides .right {\n    animation: right-animation 3s ease infinite;\n    animation-delay: 100ms;\n    transform: rotateY(90deg) translateZ(96px);\n    animation-fill-mode: forwards;\n    transform-origin: 50% 50%;\n  }\n\n  @keyframes right-animation {\n    0% {\n      opacity: 1;\n      transform: rotateY(90deg) translateZ(96px);\n    }\n    20% {\n      opacity: 1;\n      transform: rotateY(90deg) translateZ(48px);\n    }\n    70% {\n      opacity: 1;\n      transform: rotateY(90deg) translateZ(48px);\n    }\n    90% {\n      opacity: 1;\n      transform: rotateY(90deg) translateZ(96px);\n    }\n    100% {\n      opacity: 1;\n      transform: rotateY(90deg) translateZ(96px);\n    }\n  }\n</style>\n<div class=\"container\">\n  <div class=\"cube\">\n    <div class=\"sides\">\n      <div class=\"top\"></div>\n      <div class=\"right\"></div>\n      <div class=\"bottom\"></div>\n      <div class=\"left\"></div>\n      <div class=\"front\"></div>\n      <div class=\"back\"></div>\n    </div>\n  </div>\n  <div class=\"text\">Downloading dependencies</div>\n</div>\n<link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@200;400&display=swap\" rel=\"stylesheet\">\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/sandbox/status-screen/run-on-click-screen.html":
/***/ (function(module, exports) {

module.exports = "<style>\n  body {\n    color: #fff;\n    font-family: 'Inter', sans-serif;\n    background: #151515;\n    cursor: pointer;\n    -webkit-font-smoothing: auto;\n    -moz-font-smoothing: auto;\n    -moz-osx-font-smoothing: grayscale;\n    font-smoothing: auto;\n    text-rendering: optimizeLegibility;\n    font-smooth: always;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-touch-callout: none;\n  }\n\n  .container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n  }\n\n  .text {\n    margin-top: 24rem;\n    font-size: 1rem;\n    line-height: 1.4;\n    width: 100%;\n    max-width: 600px;\n    font-weight: 400;\n    text-align: center;\n  }\n\n  .cube,\n  .cube * {\n    position: absolute;\n    width: 6rem;\n    height: 6rem;\n  }\n  .cube .sides * {\n    opacity: 0.1;\n    box-sizing: border-box;\n    border: 0.12rem solid white;\n    border-radius: 0.25rem;\n    background: rgba(255, 255, 255, 0.1);\n  }\n  .sides {\n    transform-style: preserve-3d;\n    transform: rotateX(-37.5deg) rotateY(45deg);\n  }\n\n  .cube .sides .top {\n    transform: rotateX(90deg) translateZ(48px);\n    transform-origin: 50% 50%;\n  }\n\n  .cube .sides .bottom {\n    transform: rotateX(-90deg) translateZ(48px);\n    transform-origin: 50% 50%;\n  }\n\n  .cube .sides .front {\n    transform: rotateY(0deg) translateZ(48px);\n    transform-origin: 50% 50%;\n  }\n\n  .cube .sides .back {\n    transform: rotateY(-180deg) translateZ(48px);\n    transform-origin: 50% 50%;\n  }\n  .cube .sides .left {\n    transform: rotateY(-90deg) translateZ(48px);\n    transform-origin: 50% 50%;\n  }\n\n  .cube .sides .right {\n    transform: rotateY(90deg) translateZ(48px);\n    transform-origin: 50% 50%;\n  }\n\n  .play {\n    position: absolute;\n    background-color: white;\n    text-align: left;\n  }\n  .play:before,\n  .play:after {\n    content: '';\n    position: absolute;\n    background-color: inherit;\n  }\n  .play,\n  .play:before,\n  .play:after {\n    width: 1rem;\n    height: 1rem;\n    border-top-right-radius: 30%;\n  }\n\n  .play {\n    transform: rotate(-90deg) skewX(-30deg) scale(1, 0.866);\n    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.24);\n  }\n  .play:before {\n    transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)\n      translate(0, -50%);\n  }\n  .play:after {\n    transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);\n  }\n</style>\n<div class=\"container\">\n  <div class=\"cube\">\n    <div class=\"sides\">\n      <div class=\"top\"></div>\n      <div class=\"right\"></div>\n      <div class=\"bottom\"></div>\n      <div class=\"left\"></div>\n      <div class=\"front\"></div>\n      <div class=\"back\"></div>\n    </div>\n  </div>\n  <div class=\"play\"></div>\n  <div class=\"text\">\n    <h1>Aw, Snap?</h1>\n    <p style=\"color:rgba(255,255,255,0.9)\">\n      We noticed that the sandbox didn't complete its last run. This could be\n      because of some code that crashed the browser. We paused execution so you\n      can check the code.\n    </p>\n    <p style=\"color:rgba(255,255,255,0.9)\">Click to continue execution</p>\n  </div>\n</div>\n<link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@200;400&display=swap\" rel=\"stylesheet\">\n"

/***/ }),

/***/ "../../node_modules/url-loader/dist/cjs.js?limit=false&name=sw.[hash:8].worker.js!./src/sandbox/worker/sw.no-webpack.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sw.80f6d573.worker.js";

/***/ }),

/***/ "../../node_modules/worker-loader/dist/cjs.js?name=coffee-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/coffee/coffee-worker.ts":
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "coffee-transpiler.11fc1a8f.worker.js");
};

/***/ }),

/***/ "../../node_modules/worker-loader/dist/cjs.js?name=less-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/less/less-worker.ts":
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "less-transpiler.d5f3a7b3.worker.js");
};

/***/ }),

/***/ "../../node_modules/worker-loader/dist/cjs.js?name=parcel-html-transpiler.[hash:8].worker.js!./src/sandbox/eval/presets/parcel/transpilers/html-worker.ts":
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "parcel-html-transpiler.dec75951.worker.js");
};

/***/ }),

/***/ "../../node_modules/worker-loader/dist/cjs.js?name=pug-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/pug/pug-worker.ts":
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "pug-transpiler.7a18bedc.worker.js");
};

/***/ }),

/***/ "../../node_modules/worker-loader/dist/cjs.js?name=sass-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/sass/worker/index.ts":
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "sass-transpiler.c9d7e5c9.worker.js");
};

/***/ }),

/***/ "../../node_modules/worker-loader/dist/cjs.js?name=stylus-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/stylus/stylus-worker.ts":
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "stylus-transpiler.1ba03b52.worker.js");
};

/***/ }),

/***/ "../../node_modules/worker-loader/dist/cjs.js?name=svelte-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/svelte/svelte-worker.ts":
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "svelte-transpiler.6a4dc218.worker.js");
};

/***/ }),

/***/ "../../node_modules/worker-loader/dist/cjs.js?name=typescript-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/typescript/typescript-worker.ts":
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "typescript-transpiler.d0edb53f.worker.js");
};

/***/ }),

/***/ "../../standalone-packages/codesandbox-browserfs/dist/shims/fs.js":
/***/ (function(module, exports) {

module.exports = BrowserFS.BFSRequire('fs');


/***/ }),

/***/ "../common/lib/forked-vendors/jsonlint.browser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
  This is a modified version of jsonlint lib.

  It removes some of the native bindings to make
  it safe to use in the browser.

  Original: https://github.com/zaach/jsonlint/blob/master/lib/jsonlint.js
*/

/* Jison generated parser */
var jsonlint = function () {
  var parser = {
    trace: function trace() {},
    yy: {},
    symbols_: {
      error: 2,
      JSONString: 3,
      STRING: 4,
      JSONNumber: 5,
      NUMBER: 6,
      JSONNullLiteral: 7,
      NULL: 8,
      JSONBooleanLiteral: 9,
      TRUE: 10,
      FALSE: 11,
      JSONText: 12,
      JSONValue: 13,
      EOF: 14,
      JSONObject: 15,
      JSONArray: 16,
      '{': 17,
      '}': 18,
      JSONMemberList: 19,
      JSONMember: 20,
      ':': 21,
      ',': 22,
      '[': 23,
      ']': 24,
      JSONElementList: 25,
      $accept: 0,
      $end: 1
    },
    terminals_: {
      2: 'error',
      4: 'STRING',
      6: 'NUMBER',
      8: 'NULL',
      10: 'TRUE',
      11: 'FALSE',
      14: 'EOF',
      17: '{',
      18: '}',
      21: ':',
      22: ',',
      23: '[',
      24: ']'
    },
    productions_: [0, [3, 1], [5, 1], [7, 1], [9, 1], [9, 1], [12, 2], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [15, 2], [15, 3], [20, 3], [19, 1], [19, 3], [16, 2], [16, 3], [25, 1], [25, 3]],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 1:
          // replace escaped characters with actual character
          this.$ = yytext.replace(/\\(\\|")/g, '$' + '1').replace(/\\n/g, '\n').replace(/\\r/g, '\r').replace(/\\t/g, '\t').replace(/\\v/g, '\v').replace(/\\f/g, '\f').replace(/\\b/g, '\b');
          break;
        case 2:
          this.$ = Number(yytext);
          break;
        case 3:
          this.$ = null;
          break;
        case 4:
          this.$ = true;
          break;
        case 5:
          this.$ = false;
          break;
        case 6:
          return this.$ = $$[$0 - 1];
          break;
        case 13:
          this.$ = {};
          break;
        case 14:
          this.$ = $$[$0 - 1];
          break;
        case 15:
          this.$ = [$$[$0 - 2], $$[$0]];
          break;
        case 16:
          this.$ = {};
          this.$[$$[$0][0]] = $$[$0][1];
          break;
        case 17:
          this.$ = $$[$0 - 2];
          $$[$0 - 2][$$[$0][0]] = $$[$0][1];
          break;
        case 18:
          this.$ = [];
          break;
        case 19:
          this.$ = $$[$0 - 1];
          break;
        case 20:
          this.$ = [$$[$0]];
          break;
        case 21:
          this.$ = $$[$0 - 2];
          $$[$0 - 2].push($$[$0]);
          break;
      }
    },
    table: [{
      3: 5,
      4: [1, 12],
      5: 6,
      6: [1, 13],
      7: 3,
      8: [1, 9],
      9: 4,
      10: [1, 10],
      11: [1, 11],
      12: 1,
      13: 2,
      15: 7,
      16: 8,
      17: [1, 14],
      23: [1, 15]
    }, {
      1: [3]
    }, {
      14: [1, 16]
    }, {
      14: [2, 7],
      18: [2, 7],
      22: [2, 7],
      24: [2, 7]
    }, {
      14: [2, 8],
      18: [2, 8],
      22: [2, 8],
      24: [2, 8]
    }, {
      14: [2, 9],
      18: [2, 9],
      22: [2, 9],
      24: [2, 9]
    }, {
      14: [2, 10],
      18: [2, 10],
      22: [2, 10],
      24: [2, 10]
    }, {
      14: [2, 11],
      18: [2, 11],
      22: [2, 11],
      24: [2, 11]
    }, {
      14: [2, 12],
      18: [2, 12],
      22: [2, 12],
      24: [2, 12]
    }, {
      14: [2, 3],
      18: [2, 3],
      22: [2, 3],
      24: [2, 3]
    }, {
      14: [2, 4],
      18: [2, 4],
      22: [2, 4],
      24: [2, 4]
    }, {
      14: [2, 5],
      18: [2, 5],
      22: [2, 5],
      24: [2, 5]
    }, {
      14: [2, 1],
      18: [2, 1],
      21: [2, 1],
      22: [2, 1],
      24: [2, 1]
    }, {
      14: [2, 2],
      18: [2, 2],
      22: [2, 2],
      24: [2, 2]
    }, {
      3: 20,
      4: [1, 12],
      18: [1, 17],
      19: 18,
      20: 19
    }, {
      3: 5,
      4: [1, 12],
      5: 6,
      6: [1, 13],
      7: 3,
      8: [1, 9],
      9: 4,
      10: [1, 10],
      11: [1, 11],
      13: 23,
      15: 7,
      16: 8,
      17: [1, 14],
      23: [1, 15],
      24: [1, 21],
      25: 22
    }, {
      1: [2, 6]
    }, {
      14: [2, 13],
      18: [2, 13],
      22: [2, 13],
      24: [2, 13]
    }, {
      18: [1, 24],
      22: [1, 25]
    }, {
      18: [2, 16],
      22: [2, 16]
    }, {
      21: [1, 26]
    }, {
      14: [2, 18],
      18: [2, 18],
      22: [2, 18],
      24: [2, 18]
    }, {
      22: [1, 28],
      24: [1, 27]
    }, {
      22: [2, 20],
      24: [2, 20]
    }, {
      14: [2, 14],
      18: [2, 14],
      22: [2, 14],
      24: [2, 14]
    }, {
      3: 20,
      4: [1, 12],
      20: 29
    }, {
      3: 5,
      4: [1, 12],
      5: 6,
      6: [1, 13],
      7: 3,
      8: [1, 9],
      9: 4,
      10: [1, 10],
      11: [1, 11],
      13: 30,
      15: 7,
      16: 8,
      17: [1, 14],
      23: [1, 15]
    }, {
      14: [2, 19],
      18: [2, 19],
      22: [2, 19],
      24: [2, 19]
    }, {
      3: 5,
      4: [1, 12],
      5: 6,
      6: [1, 13],
      7: 3,
      8: [1, 9],
      9: 4,
      10: [1, 10],
      11: [1, 11],
      13: 31,
      15: 7,
      16: 8,
      17: [1, 14],
      23: [1, 15]
    }, {
      18: [2, 17],
      22: [2, 17]
    }, {
      18: [2, 15],
      22: [2, 15]
    }, {
      22: [2, 21],
      24: [2, 21]
    }],
    defaultActions: {
      16: [2, 6]
    },
    parseError: function parseError(str, hash) {
      throw new Error(str);
    },
    parse: function parse(input) {
      var self = this,
        stack = [0],
        vstack = [null],
        // semantic value stack
        lstack = [],
        // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

      //this.reductionCount = this.shiftCount = 0;

      this.lexer.setInput(input);
      this.lexer.yy = this.yy;
      this.yy.lexer = this.lexer;
      if (typeof this.lexer.yylloc == 'undefined') this.lexer.yylloc = {};
      var yyloc = this.lexer.yylloc;
      lstack.push(yyloc);
      if (typeof this.yy.parseError === 'function') this.parseError = this.yy.parseError;
      function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
      }
      function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
          token = self.symbols_[token] || token;
        }
        return token;
      }
      var symbol,
        preErrorSymbol,
        state,
        action,
        a,
        r,
        yyval = {},
        p,
        len,
        newState,
        expected;
      while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
          action = this.defaultActions[state];
        } else {
          if (symbol == null) symbol = lex();
          // read action for current state and first input
          action = table[state] && table[state][symbol];
        }

        // handle parse error
        _handle_error: if (typeof action === 'undefined' || !action.length || !action[0]) {
          if (!recovering) {
            // Report error
            expected = [];
            for (p in table[state]) {
              if (this.terminals_[p] && p > 2) {
                expected.push("'" + this.terminals_[p] + "'");
              }
            }
            var errStr = '';
            if (this.lexer.showPosition) {
              errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ", got '" + this.terminals_[symbol] + "'";
            } else {
              errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == 1 /*EOF*/ ? 'end of input' : "'" + (this.terminals_[symbol] || symbol) + "'");
            }
            this.parseError(errStr, {
              text: this.lexer.match,
              token: this.terminals_[symbol] || symbol,
              line: this.lexer.yylineno,
              loc: yyloc,
              expected: expected
            });
          }

          // just recovered from another error
          if (recovering == 3) {
            if (symbol == EOF) {
              throw new Error(errStr || 'Parsing halted.');
            }

            // discard current lookahead and grab another
            yyleng = this.lexer.yyleng;
            yytext = this.lexer.yytext;
            yylineno = this.lexer.yylineno;
            yyloc = this.lexer.yylloc;
            symbol = lex();
          }

          // try to recover from error
          while (1) {
            // check for error recovery rule in this state
            if (TERROR.toString() in table[state]) {
              break;
            }
            if (state == 0) {
              throw new Error(errStr || 'Parsing halted.');
            }
            popStack(1);
            state = stack[stack.length - 1];
          }
          preErrorSymbol = symbol; // save the lookahead token
          symbol = TERROR; // insert generic error symbol as new lookahead
          state = stack[stack.length - 1];
          action = table[state] && table[state][TERROR];
          recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
          throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
          case 1:
            // shift
            //this.shiftCount++;

            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]); // push state
            symbol = null;
            if (!preErrorSymbol) {
              // normal execution/no error
              yyleng = this.lexer.yyleng;
              yytext = this.lexer.yytext;
              yylineno = this.lexer.yylineno;
              yyloc = this.lexer.yylloc;
              if (recovering > 0) recovering--;
            } else {
              // error just occurred, resume old lookahead f/ before error
              symbol = preErrorSymbol;
              preErrorSymbol = null;
            }
            break;
          case 2:
            // reduce
            //this.reductionCount++;

            len = this.productions_[action[1]][1];

            // perform semantic action
            yyval.$ = vstack[vstack.length - len]; // default to $$ = $1
            // default location, uses first token for firsts, last for lasts
            yyval._$ = {
              first_line: lstack[lstack.length - (len || 1)].first_line,
              last_line: lstack[lstack.length - 1].last_line,
              first_column: lstack[lstack.length - (len || 1)].first_column,
              last_column: lstack[lstack.length - 1].last_column
            };
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== 'undefined') {
              return r;
            }

            // pop off stack
            if (len) {
              stack = stack.slice(0, -1 * len * 2);
              vstack = vstack.slice(0, -1 * len);
              lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]); // push nonterminal (reduce)
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            // goto new state = table[STATE][NONTERMINAL]
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
          case 3:
            // accept
            return true;
        }
      }
      return true;
    }
  };
  /* Jison generated lexer */
  var lexer = function () {
    var lexer = {
      EOF: 1,
      parseError: function parseError(str, hash) {
        if (this.yy.parseError) {
          this.yy.parseError(str, hash);
        } else {
          throw new Error(str);
        }
      },
      setInput: function setInput(input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        };
        return this;
      },
      input: function input() {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
      },
      unput: function unput(ch) {
        this._input = ch + this._input;
        return this;
      },
      more: function more() {
        this._more = true;
        return this;
      },
      less: function less(n) {
        this._input = this.match.slice(n) + this._input;
      },
      pastInput: function pastInput() {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, '');
      },
      upcomingInput: function upcomingInput() {
        var next = this.match;
        if (next.length < 20) {
          next += this._input.substr(0, 20 - next.length);
        }
        return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, '');
      },
      showPosition: function showPosition() {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join('-');
        return pre + this.upcomingInput() + '\n' + c + '^';
      },
      next: function next() {
        if (this.done) {
          return this.EOF;
        }
        if (!this._input) this.done = true;
        var token, match, tempMatch, index, col, lines;
        if (!this._more) {
          this.yytext = '';
          this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
          tempMatch = this._input.match(this.rules[rules[i]]);
          if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
            match = tempMatch;
            index = i;
            if (!this.options.flex) break;
          }
        }
        if (match) {
          lines = match[0].match(/\n.*/g);
          if (lines) this.yylineno += lines.length;
          this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ? lines[lines.length - 1].length - 1 : this.yylloc.last_column + match[0].length
          };
          this.yytext += match[0];
          this.match += match[0];
          this.yyleng = this.yytext.length;
          this._more = false;
          this._input = this._input.slice(match[0].length);
          this.matched += match[0];
          token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
          if (this.done && this._input) this.done = false;
          if (token) return token;else return;
        }
        if (this._input === '') {
          return this.EOF;
        } else {
          this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
            text: '',
            token: null,
            line: this.yylineno
          });
        }
      },
      lex: function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
          return r;
        } else {
          return this.lex();
        }
      },
      begin: function begin(condition) {
        this.conditionStack.push(condition);
      },
      popState: function popState() {
        return this.conditionStack.pop();
      },
      _currentRules: function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
      },
      topState: function topState() {
        return this.conditionStack[this.conditionStack.length - 2];
      },
      pushState: function begin(condition) {
        this.begin(condition);
      }
    };
    lexer.options = {};
    lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
      var YYSTATE = YY_START;
      switch ($avoiding_name_collisions) {
        case 0 /* skip whitespace */:
          break;
        case 1:
          return 6;
          break;
        case 2:
          yy_.yytext = yy_.yytext.substr(1, yy_.yyleng - 2);
          return 4;
          break;
        case 3:
          return 17;
          break;
        case 4:
          return 18;
          break;
        case 5:
          return 23;
          break;
        case 6:
          return 24;
          break;
        case 7:
          return 22;
          break;
        case 8:
          return 21;
          break;
        case 9:
          return 10;
          break;
        case 10:
          return 11;
          break;
        case 11:
          return 8;
          break;
        case 12:
          return 14;
          break;
        case 13:
          return 'INVALID';
          break;
      }
    };
    lexer.rules = [/^(?:\s+)/, /^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/, /^(?:"(?:\\[\\"bfnrt/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/, /^(?:\{)/, /^(?:\})/, /^(?:\[)/, /^(?:\])/, /^(?:,)/, /^(?::)/, /^(?:true\b)/, /^(?:false\b)/, /^(?:null\b)/, /^(?:$)/, /^(?:.)/];
    lexer.conditions = {
      INITIAL: {
        rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        inclusive: true
      }
    };
    return lexer;
  }();
  parser.lexer = lexer;
  return parser;
}();
exports.parser = jsonlint;
exports.parse = function () {
  return jsonlint.parse.apply(jsonlint, arguments);
};

/***/ }),

/***/ "../common/lib/load-dynamic-polyfills.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
function requirePolyfills() {
    const promises = [];
    if (typeof Error.captureStackTrace === 'undefined') {
        promises.push(Promise.resolve().then(() => __importStar(__webpack_require__(/* webpackChunkName: 'error-polyfill' */ "../../node_modules/error-polyfill/index.js"))));
    }
    return Promise.all(promises);
}
exports.default = requirePolyfills;


/***/ }),

/***/ "../common/lib/prettify-default-config.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: false,
    trailingComma: 'none',
    bracketSpacing: true,
    jsxBracketSameLine: false,
};


/***/ }),

/***/ "../common/lib/registerServiceWorker.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
// In production, we register a service worker to serve assets from local cache.
Object.defineProperty(exports, "__esModule", { value: true });
exports.unregister = void 0;
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.
// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.
const isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
const isHttp = Boolean(window.location.protocol === 'http:');
function register(swUrl, opts = {}) {
    if ('serviceWorker' in navigator) {
        // The URL constructor is available in all browsers that support SW.
        // @ts-ignore
        const publicUrl = new URL(process.env.PUBLIC_URL || '/', window.location);
        if (publicUrl.origin !== window.location.origin) {
            // Our service worker won't work if PUBLIC_URL is on a different origin
            // from what our page is served on. This might happen if a CDN is used to
            // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
            return;
        }
        // window.addEventListener('load', () => {
        if (!isLocalhost && !isHttp) {
            // It's neither localhost nor http. Just register service worker
            registerValidSW(swUrl, opts);
        }
        else if (isLocalhost) {
            // This is running on localhost. Lets check if a service worker still exists or not.
            checkValidServiceWorker(swUrl, opts);
        }
    }
}
exports.default = register;
function registerValidSW(swUrl, { onUpdated, onInstalled } = {}) {
    navigator.serviceWorker
        .register(swUrl)
        .then(registration => {
        registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            installingWorker.onstatechange = () => {
                if (installingWorker.state === 'installed') {
                    if (navigator.serviceWorker.controller) {
                        // At this point, the old content will have been purged and
                        // the fresh content will have been added to the cache.
                        // It's the perfect time to display a "New content is
                        // available; please refresh." message in your web app.
                        if (onUpdated) {
                            onUpdated();
                        }
                    }
                    else if (onInstalled) {
                        // At this point, everything has been precached.
                        // It's the perfect time to display a
                        // "Content is cached for offline use." message.
                        onInstalled();
                    }
                }
                else if (installingWorker.state === 'redundant') {
                    if ('storage' in navigator && 'estimate' in navigator.storage) {
                        navigator.storage.estimate().then(results => {
                            const percentUsed = results.usage / results.quota;
                            // Let's assume that if we're using 95% of our quota, then this failure
                            // was due to quota exceeded errors.
                            // TODO: Hardcoding a threshold stinks.
                            if (percentUsed >= 0.95) {
                                // Get rid of the existing SW so that we're not stuck
                                // with the previously cached content.
                                registration.unregister();
                                // Let's assume that we have some way of doing this without inadvertantly
                                // blowing away storage being used on the origin by something other than
                                // our service worker.
                                // I don't think that the Clear-Site-Data: header helps here, unfortunately.
                                self.caches.keys().then(names => {
                                    names.forEach(name => {
                                        self.caches.delete(name);
                                    });
                                });
                                // TODO clear indexeddb
                            }
                        });
                    }
                    else {
                        // What about browsers that don't support navigator.storage.estimate()?
                        // There's no way of guessing why the service worker is redundant.
                    }
                }
            };
        };
    })
        .catch(error => {
        console.error('Error during service worker registration:', error);
    });
}
function checkValidServiceWorker(swUrl, { onUpdated, onInstalled }) {
    // Check if the service worker can be found. If it can't reload the page.
    fetch(swUrl)
        .then(response => {
        // Ensure service worker exists, and that we really are getting a JS file.
        if (response.status === 404 ||
            response.headers.get('content-type').indexOf('javascript') === -1) {
            // No service worker found. Probably a different app. Reload the page.
            navigator.serviceWorker.ready.then(registration => {
                registration.unregister().then(() => {
                    window.location.reload();
                });
            });
        }
        else {
            // Service worker found. Proceed as normal.
            registerValidSW(swUrl, { onUpdated, onInstalled });
        }
    })
        .catch(e => {
        // eslint-disable-next-line no-console
        console.log('No internet connection found. App is running in offline mode.', e);
    });
}
function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
            registration.unregister();
        });
    }
}
exports.unregister = unregister;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../../node_modules/process/browser.js")))

/***/ }),

/***/ "../common/lib/sandbox/modules.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inDirectory = exports.resolveDirectoryWrapped = exports.resolveModuleWrapped = exports.findCurrentModule = exports.findMainModule = exports.isMainModule = exports.getChildren = exports.getDirectoryPath = exports.getModulePath = exports.resolveModule = exports.getModulesInDirectory = exports.getModulesAndDirectoriesInDirectory = exports.resolveDirectory = void 0;
const memoize_1 = __importDefault(__webpack_require__("../../node_modules/lodash/memoize.js"));
const templates_1 = __importDefault(__webpack_require__("../common/lib/templates/index.js"));
const parse_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/parse.js"));
const compareTitle = (original, test, ignoredExtensions) => {
    if (original === test)
        return true;
    return ignoredExtensions.some(ext => original === `${test}.${ext}`);
};
const throwError = (path) => {
    throw new Error(`Cannot find module in ${path}`);
};
function resolveDirectory(_path, modules, directories, _startdirectoryShortid = undefined) {
    if (!_path) {
        return throwError('');
    }
    let path = _path;
    let startdirectoryShortid = _startdirectoryShortid;
    // If paths start with {{sandboxRoot}} we see them as root paths
    if (path.startsWith('{{sandboxRoot}}')) {
        startdirectoryShortid = undefined;
        path = _path.replace('{{sandboxRoot}}/', './');
    }
    // Split path
    const splitPath = path.replace(/^.\//, '').split('/').filter(Boolean);
    const foundDirectoryShortid = splitPath.reduce((dirId, pathPart, i) => {
        // Meaning this is the last argument, so the directory
        if (i === splitPath.length) {
            return dirId;
        }
        if (pathPart === '..') {
            // Find the parent
            const dir = directories.find(d => d.shortid === dirId);
            if (dir == null)
                throwError(path);
            return dir.directoryShortid;
        }
        const directoriesInDirectory = directories.filter(
        // eslint-disable-next-line eqeqeq
        m => m.directoryShortid == dirId);
        const nextDirectory = directoriesInDirectory.find(d => compareTitle(d.title, pathPart, []));
        if (nextDirectory == null)
            throwError(path);
        return nextDirectory.shortid;
    }, startdirectoryShortid);
    return directories.find(d => d.shortid === foundDirectoryShortid);
}
exports.resolveDirectory = resolveDirectory;
function getModulesAndDirectoriesInDirectory(directory, modules, directories) {
    const { path } = directory;
    const parentPath = `${path}/`;
    return {
        removedModules: modules.filter(moduleItem => moduleItem.path.startsWith(parentPath)),
        removedDirectories: directories.filter(directoryItem => directoryItem.path.startsWith(parentPath) && directoryItem !== directory),
    };
}
exports.getModulesAndDirectoriesInDirectory = getModulesAndDirectoriesInDirectory;
function getModulesInDirectory(_path, modules, directories, _startdirectoryShortid = undefined) {
    if (!_path)
        return throwError('');
    let path = _path;
    // If paths start with {{sandboxRoot}} we see them as root paths
    if (path.startsWith('{{sandboxRoot}}')) {
        path = _path.replace('{{sandboxRoot}}/', './');
    }
    // Split path
    const splitPath = path.replace(/^.\//, '').split('/').filter(Boolean);
    const dirPath = path.replace(/^.\//, '').split('/').filter(Boolean);
    dirPath.pop();
    const dir = resolveDirectory(dirPath.join('/') || '/', modules, directories, _startdirectoryShortid);
    const foundDirectoryShortid = dir ? dir.shortid : null;
    const lastPath = splitPath[splitPath.length - 1];
    const modulesInFoundDirectory = modules.filter(
    // eslint-disable-next-line eqeqeq
    m => m.directoryShortid == foundDirectoryShortid);
    return {
        modules: modulesInFoundDirectory,
        foundDirectoryShortid,
        lastPath,
        splitPath,
    };
}
exports.getModulesInDirectory = getModulesInDirectory;
/**
 * Convert the module path to a module
 */
const resolveModule = (path, modules, directories, startdirectoryShortid = undefined, ignoredExtensions = ['js', 'jsx', 'json']) => {
    const { modules: modulesInFoundDirectory, lastPath, splitPath, foundDirectoryShortid, } = getModulesInDirectory(path, modules, directories, startdirectoryShortid);
    // Find module with same name
    const foundModule = modulesInFoundDirectory.find(m => compareTitle(m.title, lastPath, ignoredExtensions));
    if (foundModule)
        return foundModule;
    // Check all directories in said directory for same name
    const directoriesInFoundDirectory = directories.filter(
    // eslint-disable-next-line eqeqeq
    m => m.directoryShortid == foundDirectoryShortid);
    const foundDirectory = directoriesInFoundDirectory.find(m => compareTitle(m.title, lastPath, ignoredExtensions));
    // If it refers to a directory
    if (foundDirectory) {
        // Find module named index
        const indexModule = modules.find(m => 
        // eslint-disable-next-line eqeqeq
        m.directoryShortid == foundDirectory.shortid &&
            compareTitle(m.title, 'index', ignoredExtensions));
        if (indexModule == null)
            throwError(path);
        return indexModule;
    }
    if (splitPath[splitPath.length - 1] === '') {
        // Last resort, check if there is something in the same folder called index
        const indexModule = modulesInFoundDirectory.find(m => compareTitle(m.title, 'index', ignoredExtensions));
        if (indexModule)
            return indexModule;
    }
    return throwError(path);
};
exports.resolveModule = resolveModule;
function findById(entities, id) {
    return entities.find(e => e.id === id);
}
function findByShortid(entities, shortid) {
    return entities.find(e => e.shortid === shortid);
}
const getPath = (arrayToLookIn, modules, directories, id) => {
    const module = findById(arrayToLookIn, id);
    if (!module)
        return '';
    let directory = findByShortid(directories, module.directoryShortid);
    let path = '/';
    if (directory == null && module.directoryShortid) {
        // Parent got deleted, return '';
        return '';
    }
    while (directory != null) {
        path = `/${directory.title}${path}`;
        const lastDirectoryShortid = directory.directoryShortid;
        directory = findByShortid(directories, directory.directoryShortid);
        // In this case it couldn't find the parent directory of this dir, so probably
        // deleted. we just return '' in that case
        if (!directory && lastDirectoryShortid) {
            return '';
        }
    }
    return `${path}${module.title}`;
};
const memoizeFunction = (modules, directories, id) => id +
    modules.map(m => m.id + m.title + m.directoryShortid).join(',') +
    directories.map(d => d.id + d.title + d.directoryShortid).join(',');
const getModulePath = (modules, directories, id) => getPath(modules, modules, directories, id);
exports.getModulePath = getModulePath;
const getDirectoryPath = (modules, directories, id) => getPath(directories, modules, directories, id);
exports.getDirectoryPath = getDirectoryPath;
exports.getChildren = (0, memoize_1.default)((modules = [], directories = [], id) => [
    ...directories.filter(d => d.directoryShortid === id),
    ...modules.filter(m => m.directoryShortid === id),
], memoizeFunction);
const isMainModule = (module, modules, directories, entry = 'index.js') => {
    const path = (0, exports.getModulePath)(modules, directories, module.id);
    return path.replace('/', '') === entry;
};
exports.isMainModule = isMainModule;
const findMainModule = (sandbox) => {
    const resolve = (0, exports.resolveModuleWrapped)(sandbox);
    // first attempt: try loading the first file that exists from
    // the list of possible defaults in the template defination
    const templateDefinition = (0, templates_1.default)(sandbox.template);
    const parsedConfigs = (0, parse_1.default)(sandbox.template, templateDefinition.configurationFiles, resolve, sandbox);
    const defaultOpenedFiles = templateDefinition.getDefaultOpenedFiles(parsedConfigs);
    const defaultOpenModule = defaultOpenedFiles
        .map(path => resolve(path))
        .find(module => Boolean(module));
    if (defaultOpenModule) {
        return defaultOpenModule;
    }
    // second attempt: try loading the entry file if it exists
    const entryModule = resolve(sandbox.entry);
    if (entryModule) {
        return entryModule;
    }
    // third attempt: give up and load the first file in the list
    return sandbox.modules[0];
};
exports.findMainModule = findMainModule;
const findCurrentModule = (modules, directories, modulePath = '', mainModule) => {
    // cleanPath, encode and replace first /
    const cleanPath = decodeURIComponent(modulePath).replace('/', '');
    let foundModule = null;
    try {
        foundModule = (0, exports.resolveModule)(cleanPath, modules, directories);
    }
    catch (e) {
        /* leave empty */
    }
    return (foundModule ||
        modules.find(m => m.id === modulePath) ||
        modules.find(m => m.shortid === modulePath) || // deep-links requires this
        mainModule);
};
exports.findCurrentModule = findCurrentModule;
const resolveModuleWrapped = sandbox => (path) => {
    try {
        return (0, exports.resolveModule)(path, sandbox.modules, sandbox.directories);
    }
    catch (e) {
        return undefined;
    }
};
exports.resolveModuleWrapped = resolveModuleWrapped;
const resolveDirectoryWrapped = sandbox => (path) => {
    try {
        return resolveDirectory(path, sandbox.modules, sandbox.directories);
    }
    catch (e) {
        return undefined;
    }
};
exports.resolveDirectoryWrapped = resolveDirectoryWrapped;
const inDirectoryMemoize = (directories, sourceShortid, destinationShortid) => sourceShortid +
    destinationShortid +
    directories.map(d => d.id + d.title + d.directoryShortid).join(',');
exports.inDirectory = (0, memoize_1.default)((directories, rootShortid, shortid) => {
    let directory = findByShortid(directories, shortid);
    while (directory) {
        if (directory.directoryShortid === rootShortid) {
            return true;
        }
        directory = findByShortid(directories, directory.directoryShortid);
    }
    return false;
}, inDirectoryMemoize);


/***/ }),

/***/ "../common/lib/templates/adonis.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
exports.default = new template_1.default('adonis', 'AdonisJs', 'https://adonisjs.com/', 'github/adonisjs/adonis-starter-codesandbox', (0, decorate_selector_1.decorateSelector)(() => '#fff'), {
    mainFile: ['/start/routes.js'],
    showOnHomePage: true,
    staticDeployment: false,
});


/***/ }),

/***/ "../common/lib/templates/angular.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __webpack_require__("../common/lib/utils/path.js");
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const configuration_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/index.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
function getAngularCLIEntries(parsed) {
    const entries = [];
    if (parsed) {
        const app = parsed.apps && parsed.apps[0];
        if (app && app.root && app.main) {
            entries.push((0, path_1.absolute)((0, path_1.join)(app.root, app.main)));
        }
    }
    return entries;
}
function getAngularJSONEntries(parsed) {
    const entries = [];
    if (parsed) {
        const { defaultProject } = parsed;
        const project = parsed.projects[defaultProject];
        if (project && project.architect) {
            const { build } = project.architect;
            if (build.options.main) {
                entries.push((0, path_1.absolute)((0, path_1.join)(project.root, build.options.main)));
            }
        }
    }
    return entries;
}
function getAngularCLIHTMLEntry(parsed) {
    if (parsed) {
        const app = parsed.apps && parsed.apps[0];
        if (app && app.root && app.index) {
            return [(0, path_1.absolute)((0, path_1.join)(app.root, app.index))];
        }
    }
    return [];
}
function getAngularJSONHTMLEntry(parsed) {
    if (parsed) {
        const { defaultProject } = parsed;
        const project = parsed.projects[defaultProject];
        if (project && project.architect) {
            const { build } = project.architect;
            if (build &&
                project.root != null &&
                build.options &&
                build.options.index) {
                return [(0, path_1.absolute)((0, path_1.join)(project.root, build.options.index))];
            }
        }
    }
    return [];
}
class AngularTemplate extends template_1.default {
    /**
     * Override entry file because of angular-cli
     */
    getEntries(configurationFiles) {
        let entries = [];
        try {
            if (!configurationFiles['angular-config'].generated) {
                const { parsed } = configurationFiles['angular-config'];
                entries = entries.concat(getAngularJSONEntries(parsed));
            }
            else {
                const { parsed } = configurationFiles['angular-cli'];
                entries = entries.concat(getAngularCLIEntries(parsed));
            }
        }
        catch (e) {
            console.warn(`${configurationFiles['angular-config'].path} is malformed: ${e.message}`);
        }
        if (configurationFiles.package.parsed &&
            configurationFiles.package.parsed.main) {
            entries.push((0, path_1.absolute)(configurationFiles.package.parsed.main));
        }
        entries.push('/src/main.ts');
        entries.push('/main.ts');
        return entries;
    }
    getHTMLEntries(configurationFiles) {
        let entries = [];
        if (!configurationFiles['angular-config'].generated) {
            const { parsed } = configurationFiles['angular-config'];
            entries = entries.concat(getAngularJSONHTMLEntry(parsed));
        }
        else if (configurationFiles['angular-cli']) {
            const { parsed } = configurationFiles['angular-cli'];
            entries = entries.concat(getAngularCLIHTMLEntry(parsed));
        }
        entries.push('/public/index.html');
        entries.push('/index.html');
        return entries;
    }
}
exports.default = new AngularTemplate('angular-cli', 'Angular', 'https://github.com/angular/angular', 'angular', (0, decorate_selector_1.decorateSelector)(() => '#DD0031'), {
    extraConfigurations: {
        '/.angular-cli.json': configuration_1.default.angularCli,
        '/angular.json': configuration_1.default.angularJSON,
        '/tsconfig.json': configuration_1.default.tsconfig,
    },
    staticDeployment: false,
    isTypescript: true,
    distDir: 'dist',
    showOnHomePage: true,
    popular: true,
    main: true,
});


/***/ }),

/***/ "../common/lib/templates/apollo-server.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
exports.default = new template_1.default('apollo', 'Apollo', 'https://www.apollographql.com/docs/apollo-server/', 'apollo-server', (0, decorate_selector_1.decorateSelector)(() => '#c4198b'), {
    staticDeployment: false,
    mainFile: ['/src/index.js'],
    showOnHomePage: true,
});


/***/ }),

/***/ "../common/lib/templates/babel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
const configuration_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/index.js"));
exports.default = new template_1.default('babel-repl', 'Babel', 'https://github.com/@babel/core', 'babel', (0, decorate_selector_1.decorateSelector)(() => '#F5DA55'), {
    extraConfigurations: {
        '/.babelrc': configuration_1.default.babelrc,
        '/babel-transpiler.json': configuration_1.default.babelTranspiler,
    },
});


/***/ }),

/***/ "../common/lib/templates/configuration/angular-cli/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    title: '.angular-cli.json',
    type: 'angular-cli',
    description: 'The configuration used for angular-cli, the cli to run angular projects.',
    moreInfoUrl: 'https://github.com/angular/angular-cli/wiki/angular-cli',
    getDefaultCode: () => JSON.stringify({
        apps: [
            {
                root: 'src',
                outDir: 'dist',
                index: 'index.html',
                main: 'main.ts',
                polyfills: 'polyfills.ts',
                styles: [],
                scripts: [],
            },
        ],
    }, null, 2),
    schema: 'https://raw.githubusercontent.com/angular/angular-cli/master/packages/@angular/cli/lib/config/schema.json',
};
exports.default = config;


/***/ }),

/***/ "../common/lib/templates/configuration/angular-json/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    title: 'angular.json',
    type: 'angular-config',
    description: 'The configuration used for angular-cli v6, the new cli to run angular projects.',
    moreInfoUrl: 'https://github.com/angular/angular-cli/wiki/angular-cli',
    partialSupportDisclaimer: `Only \`project.build\` field is supported.`,
    getDefaultCode: () => JSON.stringify({
        version: 1,
        newProjectRoot: 'projects',
        projects: {
            codesandbox: {
                root: '',
                sourceRoot: 'src',
                projectType: 'application',
                prefix: 'app',
                schematics: {},
                architect: {
                    build: {
                        builder: '@angular-devkit/build-angular:browser',
                        options: {
                            outputPath: 'dist/codesandbox',
                            index: 'src/index.html',
                            main: 'src/main.ts',
                            polyfills: 'src/polyfills.ts',
                            tsConfig: 'src/tsconfig.app.json',
                            assets: ['src/favicon.png', 'src/assets'],
                            styles: ['src/styles.css'],
                            scripts: [],
                        },
                        configurations: {
                            production: {
                                fileReplacements: [
                                    {
                                        replace: 'src/environments/environment.ts',
                                        with: 'src/environments/environment.prod.ts',
                                    },
                                ],
                                optimization: true,
                                outputHashing: 'all',
                                sourceMap: false,
                                extractCss: true,
                                namedChunks: false,
                                aot: true,
                                extractLicenses: true,
                                vendorChunk: false,
                                buildOptimizer: true,
                            },
                        },
                    },
                    serve: {
                        builder: '@angular-devkit/build-angular:dev-server',
                        options: {
                            browserTarget: 'codesandbox:build',
                        },
                        configurations: {
                            production: {
                                browserTarget: 'codesandbox:build:production',
                            },
                        },
                    },
                    'extract-i18n': {
                        builder: '@angular-devkit/build-angular:extract-i18n',
                        options: {
                            browserTarget: 'codesandbox:build',
                        },
                    },
                    test: {
                        builder: '@angular-devkit/build-angular:karma',
                        options: {
                            main: 'src/test.ts',
                            polyfills: 'src/polyfills.ts',
                            tsConfig: 'src/tsconfig.spec.json',
                            karmaConfig: 'src/karma.conf.js',
                            styles: ['src/styles.css'],
                            scripts: [],
                            assets: ['src/favicon.png', 'src/assets'],
                        },
                    },
                    lint: {
                        builder: '@angular-devkit/build-angular:tslint',
                        options: {
                            tsConfig: ['src/tsconfig.app.json', 'src/tsconfig.spec.json'],
                            exclude: ['**/node_modules/**'],
                        },
                    },
                },
            },
            'codesandbox-e2e': {
                root: 'e2e/',
                projectType: 'application',
                architect: {
                    e2e: {
                        builder: '@angular-devkit/build-angular:protractor',
                        options: {
                            protractorConfig: 'e2e/protractor.conf.js',
                            devServerTarget: 'codesandbox:serve',
                        },
                        configurations: {
                            production: {
                                devServerTarget: 'codesandbox:serve:production',
                            },
                        },
                    },
                    lint: {
                        builder: '@angular-devkit/build-angular:tslint',
                        options: {
                            tsConfig: 'e2e/tsconfig.e2e.json',
                            exclude: ['**/node_modules/**'],
                        },
                    },
                },
            },
        },
        defaultProject: 'codesandbox',
    }, null, 2),
    schema: 'https://raw.githubusercontent.com/angular/angular-cli/master/packages/angular/cli/lib/config/schema.json',
};
exports.default = config;


/***/ }),

/***/ "../common/lib/templates/configuration/babel-transpiler/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    title: 'babel-transpiler.json',
    type: 'babelTranspiler',
    description: 'Configuration for the Babel REPL.',
    moreInfoUrl: 'https://eslint.org/docs/user-guide/configuring',
    getDefaultCode: () => '{}',
};
exports.default = config;


/***/ }),

/***/ "../common/lib/templates/configuration/babelrc/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const is_babel_7_1 = __webpack_require__("../common/lib/utils/is-babel-7.js");
const is_preact_10_1 = __webpack_require__("../common/lib/utils/is-preact-10.js");
const JSX_PRAGMA = {
    react: 'React.createElement',
    preact: 'h',
};
const config = {
    title: '.babelrc',
    type: 'babel',
    description: 'Custom configuration for Babel, the transpiler we use.',
    moreInfoUrl: 'https://babeljs.io/docs/usage/babelrc/',
    getDefaultCode: (template, resolveModule) => {
        let isV7 = false;
        let isPreactV10 = false;
        try {
            const packageJSON = resolveModule('/package.json');
            const parsed = JSON.parse(packageJSON.code || '');
            isV7 = (0, is_babel_7_1.isBabel7)(parsed.dependencies, parsed.devDependencies);
            isPreactV10 = (0, is_preact_10_1.isPreact10)(parsed.dependencies, parsed.devDependencies);
        }
        catch (e) {
            console.error(e);
        }
        if (template === 'preact-cli') {
            if (isPreactV10) {
                return JSON.stringify({
                    presets: ['env', 'typescript'],
                    plugins: [
                        'syntax-dynamic-import',
                        'transform-object-assign',
                        ['proposal-decorators', { legacy: true }],
                        ['proposal-class-properties', { loose: true }],
                        'proposal-object-rest-spread',
                        'babel-plugin-macros',
                        ['transform-react-jsx', { pragma: 'h', pragmaFrag: 'Fragment' }],
                        [
                            'jsx-pragmatic',
                            {
                                module: 'preact',
                                export: 'h',
                                import: 'h',
                            },
                        ],
                    ],
                }, null, 2);
            }
            return JSON.stringify({
                presets: ['latest', 'stage-1'],
                plugins: [
                    'transform-object-assign',
                    'transform-decorators-legacy',
                    ['transform-react-jsx', { pragma: 'h' }],
                    [
                        'jsx-pragmatic',
                        {
                            module: 'preact',
                            export: 'h',
                            import: 'h',
                        },
                    ],
                ],
            }, null, 2);
        }
        if (template === 'vue-cli') {
            // TODO remove this
            /**
             * This hacky fix got added for vue cli templates that are v3, but don't have a config.
             *
             * We correctly detect v3 templates, so start using babel 7, but they don't work with the old version of babel config. We need to create a new one.
             *
             * Need to fix this ASAP and make vue-cli 3 a separate template.
             */
            if (isV7) {
                return JSON.stringify({
                    presets: [
                        [
                            'env',
                            {
                                modules: false,
                                targets: {
                                    browsers: ['>0.25%', 'not ie 11', 'not op_mini all'],
                                },
                            },
                        ],
                    ],
                    plugins: [
                        '@vue/babel-plugin-jsx',
                        '@babel/plugin-syntax-dynamic-import',
                        [
                            '@babel/plugin-proposal-decorators',
                            {
                                decoratorsBeforeExport: false,
                                legacy: false,
                            },
                        ],
                        [
                            '@babel/plugin-proposal-class-properties',
                            {
                                loose: false,
                            },
                        ],
                    ],
                });
            }
            return JSON.stringify({
                presets: [
                    [
                        'env',
                        {
                            modules: false,
                            targets: {
                                browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
                            },
                        },
                    ],
                    'stage-2',
                ],
                plugins: ['transform-vue-jsx', 'transform-runtime'],
                env: {
                    test: {
                        presets: ['env', 'stage-2'],
                        plugins: [
                            'transform-vue-jsx',
                            'transform-es2015-modules-commonjs',
                            'dynamic-import-node',
                        ],
                    },
                },
            }, null, 2);
        }
        if (template === 'parcel') {
            const presets = ['env'];
            const plugins = isV7
                ? ['transform-runtime']
                : [
                    [
                        'transform-runtime',
                        {
                            polyfill: false,
                            regenerator: true,
                        },
                    ],
                    'transform-object-rest-spread',
                ];
            const parserOpts = isV7 ? { plugins: ['dynamicImport'] } : {};
            const packageJSONModule = resolveModule('/package.json');
            if (packageJSONModule) {
                try {
                    const parsed = JSON.parse(packageJSONModule.code);
                    let pragma = null;
                    Object.keys(JSX_PRAGMA).forEach(dep => {
                        if ((parsed.dependencies && parsed.dependencies[dep]) ||
                            (parsed.devDependencies && parsed.devDependencies[dep])) {
                            pragma = JSX_PRAGMA[dep];
                        }
                    });
                    if (pragma !== null) {
                        // @ts-ignore
                        plugins.push(['transform-react-jsx', { pragma }]);
                    }
                }
                catch (e) {
                    /* do nothing */
                }
            }
            return JSON.stringify({ presets, plugins, parserOpts }, null, 2);
        }
        if (template === 'cxjs') {
            if (isV7) {
                return JSON.stringify({
                    presets: ['env'],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-proposal-object-rest-spread',
                        '@babel/plugin-proposal-function-bind',
                        'transform-cx-jsx',
                        '@babel/plugin-transform-parameters',
                        '@babel/plugin-syntax-dynamic-import',
                        [
                            '@babel/plugin-transform-react-jsx',
                            { pragma: 'VDOM.createElement' },
                        ],
                    ],
                }, null, 2);
            }
            return JSON.stringify({
                presets: [
                    [
                        'env',
                        {
                            targets: {
                                chrome: 50,
                                ie: 11,
                                ff: 30,
                                edge: 12,
                                safari: 9,
                            },
                            modules: false,
                            loose: true,
                            useBuiltIns: true,
                        },
                    ],
                    'stage-2',
                ],
                plugins: [
                    ['transform-cx-jsx'],
                    ['transform-react-jsx', { pragma: 'VDOM.createElement' }],
                    'transform-function-bind',
                    'transform-runtime',
                    'transform-regenerator',
                ],
            }, null, 2);
        }
        if (template === 'solid') {
            return JSON.stringify({
                presets: ['env', 'typescript', 'babel-preset-solid'],
                plugins: [
                    '@babel/plugin-syntax-dynamic-import',
                    'solid-refresh/babel',
                ],
            }, null, 2);
        }
        return JSON.stringify({ presets: [], plugins: [] }, null, 2);
    },
    schema: 'https://raw.githubusercontent.com/SchemaStore/schemastore/master/src/schemas/json/babelrc.json',
};
exports.default = config;


/***/ }),

/***/ "../common/lib/templates/configuration/custom-codesandbox/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    title: 'template.json',
    type: 'customTemplate',
    description: 'Configuration for the custom template',
    moreInfoUrl: 'https://codesandbox.io',
    getDefaultCode: () => JSON.stringify({
        templateName: 'custom',
        templateColor: '#aaa',
        sandpack: {
            defaultExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
            aliases: {},
            transpilers: {
                '\\.jsx?$': ['codesandbox:babel'],
                '\\.json$': ['codesandbox:json'],
            },
        },
    }, null, 2),
};
exports.default = config;


/***/ }),

/***/ "../common/lib/templates/configuration/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const package_json_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/package-json/index.js"));
const prettierRC_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/prettierRC/index.js"));
const sandbox_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/sandbox/index.js"));
const babelrc_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/babelrc/index.js"));
const now_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/now/index.js"));
const netlify_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/netlify/index.js"));
const angular_cli_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/angular-cli/index.js"));
const angular_json_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/angular-json/index.js"));
const tsconfig_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/tsconfig/index.js"));
const jsconfig_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/jsconfig/index.js"));
const babel_transpiler_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/babel-transpiler/index.js"));
const custom_codesandbox_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/custom-codesandbox/index.js"));
const configs = {
    babelrc: babelrc_1.default,
    babelTranspiler: babel_transpiler_1.default,
    packageJSON: package_json_1.default,
    prettierRC: prettierRC_1.default,
    sandboxConfig: sandbox_1.default,
    angularCli: angular_cli_1.default,
    angularJSON: angular_json_1.default,
    tsconfig: tsconfig_1.default,
    customCodeSandbox: custom_codesandbox_1.default,
    nowConfig: now_1.default,
    netlifyConfig: netlify_1.default,
    jsconfig: jsconfig_1.default,
};
exports.default = configs;


/***/ }),

/***/ "../common/lib/templates/configuration/jsconfig/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    title: 'jsconfig.json',
    type: 'jsconfig',
    description: 'Configuration for how the editor (and sometimes the bundler) reads and parses JavaScript.',
    moreInfoUrl: 'https://code.visualstudio.com/docs/languages/jsconfig',
    getDefaultCode: (template, resolveModule) => JSON.stringify({ compilerOptions: { baseUrl: '.' } }, null, 2),
    schema: 'https://raw.githubusercontent.com/SchemaStore/schemastore/master/src/schemas/json/jsconfig.json',
    partialSupportDisclaimer: `Only \`compilerOptions.baseUrl\` field is supported.`,
};
exports.default = config;


/***/ }),

/***/ "../common/lib/templates/configuration/netlify/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    title: 'netlify.toml',
    type: 'netlify',
    description: 'Configuration for your deployments in netlify.',
    moreInfoUrl: 'https://www.netlify.com/docs/netlify-toml-reference/',
    getDefaultCode: () => '',
};
exports.default = config;


/***/ }),

/***/ "../common/lib/templates/configuration/now/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    title: 'vercel.json',
    type: 'now',
    description: 'Configuration for your deployments on Vercel.',
    moreInfoUrl: 'https://vercel.com/docs/configuration#introduction/configuration-reference',
    getDefaultCode: () => JSON.stringify({}, null, 2),
};
exports.default = config;


/***/ }),

/***/ "../common/lib/templates/configuration/package-json/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFileFromSandbox = void 0;
const slugify_1 = __importDefault(__webpack_require__("../common/lib/utils/slugify.js"));
function generateFileFromSandbox(sandbox) {
    const jsonFile = {
        name: (0, slugify_1.default)(sandbox.title || sandbox.id),
        version: '1.0.0',
        description: sandbox.description || '',
        keywords: sandbox.tags,
        main: sandbox.entry,
        dependencies: sandbox.npmDependencies,
    };
    return JSON.stringify(jsonFile, null, 2);
}
exports.generateFileFromSandbox = generateFileFromSandbox;
const config = {
    title: 'package.json',
    type: 'package',
    description: 'Describes the overall configuration of your project.',
    moreInfoUrl: 'https://docs.npmjs.com/files/package.json',
    generateFileFromSandbox,
    schema: 'https://raw.githubusercontent.com/SchemaStore/schemastore/master/src/schemas/json/package.json',
};
exports.default = config;


/***/ }),

/***/ "../common/lib/templates/configuration/parse.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const markty_toml_1 = __importDefault(__webpack_require__("../../node_modules/markty-toml/dist/marktytoml.es.js"));
const jsonlint_browser_1 = __webpack_require__("../common/lib/forked-vendors/jsonlint.browser.js");
function stripJSONComments(jsonString) {
    return jsonString.replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => (g ? '' : m));
}
function getCode(template, module, sandbox, resolveModule, configurationFile) {
    if (module) {
        return { code: module.code, generated: false };
    }
    if (configurationFile.getDefaultCode) {
        return {
            code: configurationFile.getDefaultCode(template, resolveModule),
            generated: true,
        };
    }
    if (sandbox && configurationFile.generateFileFromSandbox) {
        return {
            code: configurationFile.generateFileFromSandbox(sandbox),
            generated: true,
        };
    }
    return { code: '', generated: false };
}
function titleIncludes(module, test) {
    if ('title' in module) {
        return module.title.includes(test);
    }
    if ('path' in module) {
        return module.path.includes(test);
    }
    return false;
}
/**
 * We convert all configuration file configs to an object with configuration per
 * type. This makes configs universal.
 */
function parseConfigurations(template, configurationFiles, resolveModule, sandbox) {
    const configurations = {};
    const paths = Object.keys(configurationFiles);
    for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const module = resolveModule(path);
        const configurationFile = configurationFiles[path];
        const baseObject = Object.assign({ path }, getCode(template, module, sandbox, resolveModule, configurationFile));
        const { code } = baseObject;
        if (code) {
            try {
                let parsed;
                // it goes here three times and the third time it doesn't have a title but a path
                // that took a while ffs
                // if toml do it with toml parser
                if (module && titleIncludes(module, 'toml')) {
                    // never throws
                    parsed = (0, markty_toml_1.default)(code);
                }
                else if (module && titleIncludes(module, 'tsconfig.json')) {
                    parsed = (0, jsonlint_browser_1.parse)(stripJSONComments(code));
                }
                else {
                    parsed = (0, jsonlint_browser_1.parse)(code);
                }
                configurations[configurationFile.type] = Object.assign(Object.assign({}, baseObject), { parsed });
            }
            catch (e) {
                configurations[configurationFile.type] = Object.assign(Object.assign({}, baseObject), { error: e });
            }
        }
    }
    return configurations;
}
exports.default = parseConfigurations;


/***/ }),

/***/ "../common/lib/templates/configuration/prettierRC/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prettify_default_config_1 = __importDefault(__webpack_require__("../common/lib/prettify-default-config.js"));
const config = {
    title: '.prettierrc',
    type: 'prettier',
    description: 'Defines how all files will be prettified by Prettier.',
    moreInfoUrl: 'https://prettier.io/docs/en/configuration.html',
    generateFileFromState: prettierConfig => JSON.stringify(Object.assign(Object.assign({}, prettify_default_config_1.default), (prettierConfig || {})), null, 2),
    schema: 'https://raw.githubusercontent.com/SchemaStore/schemastore/master/src/schemas/json/prettierrc.json',
};
exports.default = config;


/***/ }),

/***/ "../common/lib/templates/configuration/sandbox/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const url_generator_1 = __webpack_require__("../common/lib/utils/url-generator.js");
const config = {
    title: 'sandbox.config.json',
    type: 'sandbox',
    description: 'Configuration specific to the current sandbox.',
    moreInfoUrl: (0, url_generator_1.docsUrl)('/learn/browser-sandboxes/configuration#sandbox-configuration'),
    getDefaultCode: () => JSON.stringify({
        infiniteLoopProtection: true,
        hardReloadOnChange: false,
        view: 'browser',
    }, null, 2),
};
exports.default = config;


/***/ }),

/***/ "../common/lib/templates/configuration/tsconfig/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const JSX_PRAGMA = {
    react: 'React.createElement',
    preact: 'h',
};
const config = {
    title: 'tsconfig.json',
    type: 'typescript',
    description: 'Configuration for how TypeScript transpiles.',
    moreInfoUrl: 'http://www.typescriptlang.org/docs/handbook/tsconfig-json.html',
    getDefaultCode: (template, resolveModule) => {
        if (template === 'create-react-app-typescript') {
            return JSON.stringify({
                compilerOptions: {
                    outDir: 'build/dist',
                    module: 'esnext',
                    target: 'es5',
                    lib: ['es6', 'dom'],
                    sourceMap: true,
                    allowJs: true,
                    jsx: 'react',
                    moduleResolution: 'node',
                    rootDir: 'src',
                    forceConsistentCasingInFileNames: true,
                    noImplicitReturns: true,
                    noImplicitThis: true,
                    noImplicitAny: true,
                    strictNullChecks: true,
                    suppressImplicitAnyIndexErrors: true,
                    noUnusedLocals: true,
                },
                exclude: [
                    'node_modules',
                    'build',
                    'scripts',
                    'acceptance-tests',
                    'webpack',
                    'jest',
                    'src/setupTests.ts',
                ],
            }, null, 2);
        }
        if (template === 'parcel') {
            const tsconfig = {
                compilerOptions: {
                    module: 'commonjs',
                    jsx: 'preserve',
                    jsxFactory: undefined,
                    esModuleInterop: true,
                    sourceMap: true,
                    allowJs: true,
                    lib: ['es6', 'dom'],
                    rootDir: 'src',
                    moduleResolution: 'node',
                },
            };
            const packageJSONModule = resolveModule('/package.json');
            if (packageJSONModule) {
                try {
                    const parsed = JSON.parse(packageJSONModule.code);
                    let pragma = null;
                    Object.keys(JSX_PRAGMA).forEach(dep => {
                        if ((parsed.dependencies && parsed.dependencies[dep]) ||
                            (parsed.devDependencies && parsed.devDependencies[dep])) {
                            pragma = JSX_PRAGMA[dep];
                        }
                    });
                    if (pragma !== null) {
                        tsconfig.compilerOptions.jsx = 'react';
                        tsconfig.compilerOptions.jsxFactory = pragma;
                    }
                }
                catch (e) {
                    /* do nothing */
                }
            }
            return JSON.stringify(tsconfig, null, 2);
        }
        if (template === 'nest') {
            return JSON.stringify({
                compilerOptions: {
                    module: 'commonjs',
                    declaration: true,
                    noImplicitAny: false,
                    removeComments: true,
                    noLib: false,
                    allowSyntheticDefaultImports: true,
                    emitDecoratorMetadata: true,
                    experimentalDecorators: true,
                    target: 'es6',
                    sourceMap: true,
                    outDir: './dist',
                    baseUrl: './src',
                },
            }, null, 2);
        }
        if (template === '@dojo/cli-create-app') {
            return JSON.stringify({
                compilerOptions: {
                    declaration: false,
                    experimentalDecorators: true,
                    jsx: 'react',
                    jsxFactory: 'tsx',
                    lib: [
                        'dom',
                        'es5',
                        'es2015.promise',
                        'es2015.iterable',
                        'es2015.symbol',
                        'es2015.symbol.wellknown',
                    ],
                    module: 'commonjs',
                    moduleResolution: 'node',
                    noUnusedLocals: true,
                    outDir: '_build/',
                    removeComments: false,
                    importHelpers: true,
                    downLevelIteration: true,
                    sourceMap: true,
                    strict: true,
                    target: 'es5',
                },
            });
        }
        if (template === 'angular-cli') {
            return JSON.stringify({
                compileOnSave: false,
                compilerOptions: {
                    baseUrl: './',
                    outDir: './dist/out-tsc',
                    sourceMap: true,
                    declaration: false,
                    downlevelIteration: true,
                    experimentalDecorators: true,
                    moduleResolution: 'node',
                    importHelpers: true,
                    target: 'es2015',
                    module: 'es2020',
                    lib: ['es2018', 'dom'],
                },
            }, null, 2);
        }
        if (template === 'solid') {
            return JSON.stringify({
                compileOnSave: false,
                compilerOptions: {
                    strict: false,
                    module: 'ESNext',
                    target: 'ESNext',
                    jsx: 'preserve',
                    esModuleInterop: true,
                    sourceMap: true,
                    allowJs: true,
                    lib: ['es6', 'dom'],
                    rootDir: 'src',
                    moduleResolution: 'node',
                    jsxImportSource: 'solid-js',
                    types: ['solid-js', 'solid-js/web'],
                },
            }, null, 2);
        }
        return JSON.stringify({
            compilerOptions: {
                outDir: 'build/dist',
                module: 'esnext',
                target: 'es5',
                lib: ['es6', 'dom'],
                sourceMap: true,
                allowJs: true,
                jsx: 'react',
                moduleResolution: 'node',
                rootDir: 'src',
                forceConsistentCasingInFileNames: true,
                noImplicitReturns: true,
                noImplicitThis: true,
                noImplicitAny: true,
                strictNullChecks: true,
                suppressImplicitAnyIndexErrors: true,
                noUnusedLocals: true,
            },
        }, null, 2);
    },
    schema: 'https://raw.githubusercontent.com/SchemaStore/schemastore/master/src/schemas/json/tsconfig.json',
    partialSupportDisclaimer: `Only \`compilerOptions\` field is supported.`,
};
exports.default = config;


/***/ }),

/***/ "../common/lib/templates/custom.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
const configuration_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/index.js"));
exports.default = new template_1.default('custom', 'Custom', 'https://codesandbox.io', 'custom', (0, decorate_selector_1.decorateSelector)(() => '#F5DA55'), {
    extraConfigurations: {
        '/.codesandbox/template.json': configuration_1.default.customCodeSandbox,
    },
});


/***/ }),

/***/ "../common/lib/templates/cxjs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
const configuration_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/index.js"));
class CxJSTemplate extends template_1.default {
    getEntries() {
        return ['/app/index.js', '/src/index.js', '/index.html'];
    }
    getHTMLEntries() {
        return ['/app/index.html', '/src/index.html', '/index.html'];
    }
}
exports.default = new CxJSTemplate('cxjs', 'CxJS', 'https://cxjs.io/', 'github/codaxy/cxjs-codesandbox-template', (0, decorate_selector_1.decorateSelector)(() => '#11689f'), {
    showOnHomePage: true,
    showCube: false,
    extraConfigurations: {
        '/.babelrc': configuration_1.default.babelrc,
        '/tsconfig.json': configuration_1.default.tsconfig,
    },
    externalResourcesEnabled: false,
    distDir: 'dist',
});


/***/ }),

/***/ "../common/lib/templates/docusaurus.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocusaurusTemplate = void 0;
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
class DocusaurusTemplate extends template_1.default {
    // The file to open by the editor
    getDefaultOpenedFiles() {
        return ['/src/pages/index.js'];
    }
}
exports.DocusaurusTemplate = DocusaurusTemplate;
exports.default = new DocusaurusTemplate('docusaurus', 'Docusaurus', 'https://docusaurus.io/', 'github/facebook/docusaurus/tree/master/examples/classic', (0, decorate_selector_1.decorateSelector)(() => '#3ECC5F'), {
    mainFile: [],
    distDir: 'build',
    showOnHomePage: true,
});


/***/ }),

/***/ "../common/lib/templates/dojo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DojoTemplate = void 0;
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
const configuration_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/index.js"));
class DojoTemplate extends template_1.default {
    // eslint-disable-next-line no-unused-vars
    getHTMLEntries(configurationFiles) {
        return ['/src/index.html'];
    }
    getEntries(configurationFiles) {
        const entries = super.getEntries(configurationFiles);
        entries.push('/src/main.ts');
        return entries;
    }
}
exports.DojoTemplate = DojoTemplate;
exports.default = new DojoTemplate('@dojo/cli-create-app', 'Dojo', 'https://github.com/dojo/cli-create-app', 'github/dojo/dojo-codesandbox-template', (0, decorate_selector_1.decorateSelector)(() => '#D3471C'), {
    showOnHomePage: true,
    showCube: false,
    distDir: 'output/dist',
    isTypescript: true,
    githubPagesDeploy: false,
    extraConfigurations: {
        '/tsconfig.json': configuration_1.default.tsconfig,
    },
});


/***/ }),

/***/ "../common/lib/templates/ember.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
exports.default = new template_1.default('ember', 'Ember', 'https://emberjs.com/', 
/**
 * Ideally, we'd point to https://github.com/ember-cli/ember-new-output
 * but there are a few tweaks that must be addressed before then.
 *  - Auto-detection of ember-cli projects as node projects,
 *    without requiring a sandbox.config.json
 *    PR: https://github.com/codesandbox-app/codesandbox-importers/pull/16
 *  - Ember-CLI initial build chokes on empty app/styles/app.css file
 *  - A small livereload fix, for proper port detection through the CSB proxy stuff
 *    BUG: https://github.com/ember-cli/ember-cli/issues/8073
 *
 * Here is a complete diff of these changes, w.r.t. the code generated by
 * `ember new my-app`
 *
 * https://github.com/ember-cli/ember-new-output/compare/stable...NullVoxPopuli:stable
 */
'github/NullVoxPopuli/ember-new-output/tree/stable', (0, decorate_selector_1.decorateSelector)(() => '#E04E39'), {
    showOnHomePage: true,
    main: false,
    staticDeployment: false,
});


/***/ }),

/***/ "../common/lib/templates/esmodule-react.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
const configuration_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/index.js"));
const react_template_1 = __webpack_require__("../common/lib/templates/helpers/react-template.js");
exports.default = new react_template_1.ReactTemplate('esm-react', 'React - ESModules', 'https://github.com/facebookincubator/create-react-app', 'esm-react', (0, decorate_selector_1.decorateSelector)(() => '#61DAFB'), {
    showOnHomePage: false,
    popular: false,
    main: false,
    mainFile: ['/src/index.js', '/src/index.tsx', '/src/index.ts'],
    extraConfigurations: {
        '/jsconfig.json': configuration_1.default.jsconfig,
        '/tsconfig.json': configuration_1.default.tsconfig,
    },
});


/***/ }),

/***/ "../common/lib/templates/gatsby.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
const configuration_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/index.js"));
class GatsbyTemplate extends template_1.default {
    getViews() {
        const GATSBY_VIEWS = [
            {
                views: [
                    { id: 'codesandbox.browser' },
                    {
                        id: 'codesandbox.browser',
                        closeable: true,
                        options: {
                            url: '/___graphql',
                            title: 'GraphiQL',
                        },
                    },
                ],
            },
            {
                open: true,
                views: [
                    { id: 'codesandbox.terminal' },
                    { id: 'codesandbox.console' },
                    { id: 'codesandbox.problems' },
                ],
            },
        ];
        return GATSBY_VIEWS;
    }
}
exports.default = new GatsbyTemplate('gatsby', 'Gatsby', 'https://www.gatsbyjs.org/', 'github/gatsbyjs/gatsby-starter-default', (0, decorate_selector_1.decorateSelector)(() => '#8C65B3'), {
    extraConfigurations: {
        '/.babelrc': configuration_1.default.babelrc,
    },
    distDir: 'public',
    mainFile: ['/src/pages/index.js'],
    showOnHomePage: true,
    main: true,
    popular: true,
    showCube: false,
});


/***/ }),

/***/ "../common/lib/templates/gridsome.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
class GridsomeTemplate extends template_1.default {
    getViews() {
        const GRIDSOME_VIEWS = [
            {
                views: [
                    { id: 'codesandbox.browser' },
                    {
                        id: 'codesandbox.browser',
                        closeable: true,
                        options: {
                            url: '/___explore',
                            title: 'GraphiQL',
                        },
                    },
                ],
            },
            {
                open: true,
                views: [
                    { id: 'codesandbox.terminal' },
                    { id: 'codesandbox.console' },
                    { id: 'codesandbox.problems' },
                ],
            },
        ];
        return GRIDSOME_VIEWS;
    }
}
exports.default = new GridsomeTemplate('gridsome', 'Gridsome', 'https://gridsome.org/', 'github/SaraVieira/gridsome-starter-codesandbox', (0, decorate_selector_1.decorateSelector)(() => '#00a672'), {
    distDir: 'dist',
    mainFile: ['/src/pages/Index.vue'],
    showOnHomePage: true,
    main: true,
});


/***/ }),

/***/ "../common/lib/templates/helpers/react-template.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactTemplate = void 0;
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
class ReactTemplate extends template_1.default {
    getViews() {
        const REACT_VIEWS = [
            {
                views: [
                    { id: 'codesandbox.browser' },
                    { id: 'codesandbox.tests' },
                    {
                        id: 'codesandbox.terminalUpgrade',
                        hideOnEmbedPage: true,
                        hideOnPrem: true,
                    },
                ],
            },
            {
                views: [
                    { id: 'codesandbox.console' },
                    { id: 'codesandbox.problems' },
                    { id: 'codesandbox.react-devtools' },
                ],
            },
        ];
        return REACT_VIEWS;
    }
    getDefaultOpenedFiles(configurationFiles) {
        let entries = [];
        entries.push('/src/App.js');
        entries.push('/src/App.tsx');
        entries = entries.concat(this.getEntries(configurationFiles));
        return entries;
    }
}
exports.ReactTemplate = ReactTemplate;


/***/ }),

/***/ "../common/lib/templates/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.solid = exports.remix = exports.unibit = exports.quasar = exports.mdxDeck = exports.docusaurus = exports.vuepress = exports.gridsome = exports.styleguidist = exports.staticTemplate = exports.ember = exports.nest = exports.sapper = exports.vue = exports.svelte = exports.reason = exports.reactTs = exports.react = exports.preact = exports.parcel = exports.dojo = exports.cxjs = exports.babel = exports.esmReact = exports.node = exports.nuxt = exports.next = exports.marko = exports.gatsby = exports.apollo = exports.custom = exports.angular = exports.adonis = void 0;
const adonis_1 = __importDefault(__webpack_require__("../common/lib/templates/adonis.js"));
exports.adonis = adonis_1.default;
const angular_1 = __importDefault(__webpack_require__("../common/lib/templates/angular.js"));
exports.angular = angular_1.default;
const apollo_server_1 = __importDefault(__webpack_require__("../common/lib/templates/apollo-server.js"));
exports.apollo = apollo_server_1.default;
const babel_1 = __importDefault(__webpack_require__("../common/lib/templates/babel.js"));
exports.babel = babel_1.default;
const custom_1 = __importDefault(__webpack_require__("../common/lib/templates/custom.js"));
exports.custom = custom_1.default;
const cxjs_1 = __importDefault(__webpack_require__("../common/lib/templates/cxjs.js"));
exports.cxjs = cxjs_1.default;
const dojo_1 = __importDefault(__webpack_require__("../common/lib/templates/dojo.js"));
exports.dojo = dojo_1.default;
const ember_1 = __importDefault(__webpack_require__("../common/lib/templates/ember.js"));
exports.ember = ember_1.default;
const gatsby_1 = __importDefault(__webpack_require__("../common/lib/templates/gatsby.js"));
exports.gatsby = gatsby_1.default;
const gridsome_1 = __importDefault(__webpack_require__("../common/lib/templates/gridsome.js"));
exports.gridsome = gridsome_1.default;
const marko_1 = __importDefault(__webpack_require__("../common/lib/templates/marko.js"));
exports.marko = marko_1.default;
const mdx_deck_1 = __importDefault(__webpack_require__("../common/lib/templates/mdx-deck.js"));
exports.mdxDeck = mdx_deck_1.default;
const nest_1 = __importDefault(__webpack_require__("../common/lib/templates/nest.js"));
exports.nest = nest_1.default;
const next_1 = __importDefault(__webpack_require__("../common/lib/templates/next.js"));
exports.next = next_1.default;
const node_1 = __importDefault(__webpack_require__("../common/lib/templates/node.js"));
exports.node = node_1.default;
const nuxt_1 = __importDefault(__webpack_require__("../common/lib/templates/nuxt.js"));
exports.nuxt = nuxt_1.default;
const parcel_1 = __importDefault(__webpack_require__("../common/lib/templates/parcel.js"));
exports.parcel = parcel_1.default;
const preact_1 = __importDefault(__webpack_require__("../common/lib/templates/preact.js"));
exports.preact = preact_1.default;
const quasar_1 = __importDefault(__webpack_require__("../common/lib/templates/quasar.js"));
exports.quasar = quasar_1.default;
const react_1 = __importDefault(__webpack_require__("../common/lib/templates/react.js"));
exports.react = react_1.default;
const react_ts_1 = __importDefault(__webpack_require__("../common/lib/templates/react-ts.js"));
exports.reactTs = react_ts_1.default;
const reason_1 = __importDefault(__webpack_require__("../common/lib/templates/reason.js"));
exports.reason = reason_1.default;
const sapper_1 = __importDefault(__webpack_require__("../common/lib/templates/sapper.js"));
exports.sapper = sapper_1.default;
const static_1 = __importDefault(__webpack_require__("../common/lib/templates/static.js"));
exports.staticTemplate = static_1.default;
const styleguidist_1 = __importDefault(__webpack_require__("../common/lib/templates/styleguidist.js"));
exports.styleguidist = styleguidist_1.default;
const svelte_1 = __importDefault(__webpack_require__("../common/lib/templates/svelte.js"));
exports.svelte = svelte_1.default;
const unibit_1 = __importDefault(__webpack_require__("../common/lib/templates/unibit.js"));
exports.unibit = unibit_1.default;
const vue_1 = __importDefault(__webpack_require__("../common/lib/templates/vue.js"));
exports.vue = vue_1.default;
const vuepress_1 = __importDefault(__webpack_require__("../common/lib/templates/vuepress.js"));
exports.vuepress = vuepress_1.default;
const docusaurus_1 = __importDefault(__webpack_require__("../common/lib/templates/docusaurus.js"));
exports.docusaurus = docusaurus_1.default;
const esmodule_react_1 = __importDefault(__webpack_require__("../common/lib/templates/esmodule-react.js"));
exports.esmReact = esmodule_react_1.default;
const remix_1 = __importDefault(__webpack_require__("../common/lib/templates/remix.js"));
exports.remix = remix_1.default;
const solid_1 = __importDefault(__webpack_require__("../common/lib/templates/solid.js"));
exports.solid = solid_1.default;
function getDefinition(theme) {
    switch (theme) {
        case adonis_1.default.name:
            return adonis_1.default;
        case react_1.default.name:
            return react_1.default;
        case vue_1.default.name:
            return vue_1.default;
        case preact_1.default.name:
            return preact_1.default;
        case react_ts_1.default.name:
            return react_ts_1.default;
        case svelte_1.default.name:
            return svelte_1.default;
        case angular_1.default.name:
            return angular_1.default;
        case parcel_1.default.name:
            return parcel_1.default;
        case babel_1.default.name:
            return babel_1.default;
        case cxjs_1.default.name:
            return cxjs_1.default;
        case dojo_1.default.name:
            return dojo_1.default;
        case custom_1.default.name:
            return custom_1.default;
        case gatsby_1.default.name:
            return gatsby_1.default;
        case marko_1.default.name:
            return marko_1.default;
        case nuxt_1.default.name:
            return nuxt_1.default;
        case next_1.default.name:
            return next_1.default;
        case reason_1.default.name:
            return reason_1.default;
        case node_1.default.name:
            return node_1.default;
        case apollo_server_1.default.name:
            return apollo_server_1.default;
        case sapper_1.default.name:
            return sapper_1.default;
        case nest_1.default.name:
            return nest_1.default;
        case static_1.default.name:
            return static_1.default;
        case styleguidist_1.default.name:
            return styleguidist_1.default;
        case mdx_deck_1.default.name:
            return mdx_deck_1.default;
        case gridsome_1.default.name:
            return gridsome_1.default;
        case ember_1.default.name:
            return ember_1.default;
        case vuepress_1.default.name:
            return vuepress_1.default;
        case docusaurus_1.default.name:
            return docusaurus_1.default;
        case quasar_1.default.name:
            return quasar_1.default;
        case unibit_1.default.name:
            return unibit_1.default;
        case esmodule_react_1.default.name:
            return esmodule_react_1.default;
        case remix_1.default.name:
            return remix_1.default;
        case solid_1.default.name:
            return solid_1.default;
        default:
            return react_1.default;
    }
}
exports.default = getDefinition;


/***/ }),

/***/ "../common/lib/templates/marko.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
exports.default = new template_1.default('marko', 'Marko', 'https://markojs.com/', 'github/nm123github/marko-codesandbox', (0, decorate_selector_1.decorateSelector)(() => '#f5ac00'), {
    showOnHomePage: true,
    main: false,
    staticDeployment: false,
});


/***/ }),

/***/ "../common/lib/templates/mdx-deck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
exports.default = new template_1.default('mdx-deck', 'MDX Deck', 'https://github.com/jxnblk/mdx-deck', 'github/jxnblk/mdx-deck/tree/master/templates/basic', (0, decorate_selector_1.decorateSelector)(() => '#FAD961'), {
    distDir: 'dist',
    mainFile: ['deck.mdx'],
    showOnHomePage: true,
    githubPagesDeploy: false,
});


/***/ }),

/***/ "../common/lib/templates/nest.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
const configuration_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/index.js"));
exports.default = new template_1.default('nest', 'Nest', 'https://nestjs.com/', 'github/nestjs/typescript-starter', (0, decorate_selector_1.decorateSelector)(() => '#ed2945'), {
    extraConfigurations: {
        '/tsconfig.json': configuration_1.default.tsconfig,
    },
    mainFile: ['/src/main.ts'],
    showOnHomePage: true,
    staticDeployment: false,
});


/***/ }),

/***/ "../common/lib/templates/next.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
const configuration_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/index.js"));
exports.default = new template_1.default('next', 'Next.js', 'https://nextjs.org/', 'github/zeit/next.js/tree/master/examples/hello-world', (0, decorate_selector_1.decorateSelector)(() => '#ffffff'), {
    extraConfigurations: {
        '/.babelrc': configuration_1.default.babelrc,
    },
    distDir: 'out',
    staticDeployment: false,
    mainFile: ['/pages/index.js'],
    backgroundColor: (0, decorate_selector_1.decorateSelector)(() => '#000000'),
    showOnHomePage: true,
    main: true,
    popular: true,
    showCube: false,
});


/***/ }),

/***/ "../common/lib/templates/node.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
const url_generator_1 = __webpack_require__("../common/lib/utils/url-generator.js");
exports.default = new template_1.default('node', 'Node', (0, url_generator_1.docsUrl)('/learn/environment/vm'), 'node', (0, decorate_selector_1.decorateSelector)(() => '#66cc33'), {
    showOnHomePage: true,
    main: true,
    staticDeployment: false,
    popular: true,
    mainFile: ['/pages/index.vue', '/pages/index.js', '/src/pages/index.js'],
});


/***/ }),

/***/ "../common/lib/templates/nuxt.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
const configuration_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/index.js"));
exports.default = new template_1.default('nuxt', 'Nuxt.js', 'https://nuxtjs.org/', 'github/nuxt/codesandbox-nuxt', (0, decorate_selector_1.decorateSelector)(() => '#3B8070'), {
    extraConfigurations: {
        '/.babelrc': configuration_1.default.babelrc,
    },
    distDir: 'dist',
    popular: true,
    mainFile: ['/pages/index.vue'],
    showOnHomePage: true,
    main: true,
    showCube: false,
});


/***/ }),

/***/ "../common/lib/templates/parcel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParcelTemplate = void 0;
const path_1 = __webpack_require__("../common/lib/utils/path.js");
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
const configuration_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/index.js"));
class ParcelTemplate extends template_1.default {
    getEntries(configurationFiles) {
        const entries = [];
        if (typeof document !== 'undefined' && document.location.pathname !== '/') {
            // Push the location of the address bar, eg. when someone has a file
            // /2.html open, you actually want to have that as entry point instead
            // of index.html.
            entries.push(document.location.pathname);
        }
        entries.push(configurationFiles.package &&
            configurationFiles.package.parsed &&
            configurationFiles.package.parsed.main &&
            (0, path_1.absolute)(configurationFiles.package.parsed.main));
        entries.push('/index.html');
        entries.push('/src/index.html');
        return entries.filter(Boolean);
    }
    getHTMLEntries(configurationFiles) {
        const entries = this.getEntries(configurationFiles);
        return entries.filter(e => e.endsWith('.html'));
    }
    /**
     * The file to open by the editor
     */
    getDefaultOpenedFiles(configFiles) {
        let entries = [];
        entries.push('/index.js');
        entries.push('/src/index.js');
        entries.push('/index.ts');
        entries.push('/src/index.ts');
        entries = entries.concat(this.getEntries(configFiles));
        return entries;
    }
}
exports.ParcelTemplate = ParcelTemplate;
exports.default = new ParcelTemplate('parcel', 'Vanilla', 'https://parceljs.org/', 'vanilla', (0, decorate_selector_1.decorateSelector)(() => '#dfb07a'), {
    showOnHomePage: true,
    showCube: true,
    extraConfigurations: {
        '/.babelrc': configuration_1.default.babelrc,
        '/tsconfig.json': configuration_1.default.tsconfig,
    },
    externalResourcesEnabled: false,
    distDir: 'dist',
    main: true,
    isTypescript: true,
    popular: true,
});


/***/ }),

/***/ "../common/lib/templates/preact.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
const configuration_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/index.js"));
exports.default = new template_1.default('preact-cli', 'Preact', 'https://github.com/developit/preact-cli', 'preact', (0, decorate_selector_1.decorateSelector)(() => '#AD78DC'), {
    showOnHomePage: true,
    extraConfigurations: {
        '/.babelrc': configuration_1.default.babelrc,
    },
    defaultOpenedFile: ['/src/app.js'],
    githubPagesDeploy: false,
});


/***/ }),

/***/ "../common/lib/templates/quasar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
exports.default = new template_1.default('quasar', 'Quasar', 'https://quasar.dev/', 'github/quasarframework/quasar-codesandbox', (0, decorate_selector_1.decorateSelector)(() => '#43A4F2'), {
    mainFile: ['/src/pages/Index.vue'],
    showOnHomePage: true,
    staticDeployment: false,
});


/***/ }),

/***/ "../common/lib/templates/react-ts.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
const react_template_1 = __webpack_require__("../common/lib/templates/helpers/react-template.js");
const configuration_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/index.js"));
exports.default = new react_template_1.ReactTemplate('create-react-app-typescript', 'React + TS', 'https://github.com/wmonk/create-react-app-typescript', 'react-ts', (0, decorate_selector_1.decorateSelector)(() => '#009fff'), {
    isTypescript: true,
    showOnHomePage: false,
    extraConfigurations: {
        '/tsconfig.json': configuration_1.default.tsconfig,
    },
    mainFile: [
        '/src/index.js',
        '/src/index.tsx',
        '/src/index.ts',
        '/src/main.tsx',
        '/src/main.ts',
    ],
});


/***/ }),

/***/ "../common/lib/templates/react.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
const configuration_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/index.js"));
const react_template_1 = __webpack_require__("../common/lib/templates/helpers/react-template.js");
exports.default = new react_template_1.ReactTemplate('create-react-app', 'React', 'https://github.com/facebookincubator/create-react-app', 'new', (0, decorate_selector_1.decorateSelector)(() => '#61DAFB'), {
    showOnHomePage: true,
    popular: true,
    main: true,
    mainFile: [
        '/src/index.js',
        '/src/index.tsx',
        '/src/index.ts',
        '/src/main.tsx',
        '/src/main.ts',
        '/src/main.js',
    ],
    extraConfigurations: {
        '/jsconfig.json': configuration_1.default.jsconfig,
        '/tsconfig.json': configuration_1.default.tsconfig,
    },
});


/***/ }),

/***/ "../common/lib/templates/reason.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
exports.default = new template_1.default('reason', 'Reason', 'https://reasonml.github.io/reason-react/en/', 'reason', (0, decorate_selector_1.decorateSelector)(() => '#CB5747'), {
    showOnHomePage: true,
    main: false,
    staticDeployment: false,
    mainFile: ['/src/Main.re', 'App.re', 'Index.re'],
});


/***/ }),

/***/ "../common/lib/templates/remix.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
exports.default = new template_1.default('remix-starter', 'Remix', 'https://remix.run/', 'https://github.com/remix-run', (0, decorate_selector_1.decorateSelector)(() => '#ffffff'), {
    distDir: 'build',
    showOnHomePage: true,
    main: true,
    popular: true,
    showCube: false,
});


/***/ }),

/***/ "../common/lib/templates/sapper.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/index.js"));
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
const extendedSandboxConfig = Object.assign(Object.assign({}, configuration_1.default.sandboxConfig), { getDefaultCode: () => JSON.stringify({
        container: {
            port: 3000,
        },
    }, null, 2) });
exports.default = new template_1.default('sapper', 'Sapper', 'https://sapper.svelte.dev/', 'github/codesandbox-app/sapper-template', (0, decorate_selector_1.decorateSelector)(() => '#159497'), {
    extraConfigurations: {
        '/sandbox.config.json': extendedSandboxConfig,
    },
    staticDeployment: false,
    mainFile: ['/src/routes/index.html'],
    showOnHomePage: true,
});


/***/ }),

/***/ "../common/lib/templates/solid.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
const configuration_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/index.js"));
class SolidTemplate extends template_1.default {
    getEntries(configurationFiles) {
        const entries = super.getEntries(configurationFiles);
        entries.push('/src/index.tsx', '/src/index.jsx', '/src/App.tsx', '/src/App.jsx');
        return entries;
    }
    getHTMLEntries() {
        return ['/static/index.html', '/public/index.html', '/index.html'];
    }
}
exports.default = new SolidTemplate('solid', 'Solid JS', 'https://github.com/solidjs/solid', 'solid', (0, decorate_selector_1.decorateSelector)(() => '#2596be'), {
    showOnHomePage: false,
    extraConfigurations: {
        '/.babelrc': configuration_1.default.babelrc,
        '/tsconfig.json': configuration_1.default.tsconfig,
    },
    distDir: 'dist',
    main: true,
    popular: true,
    mainFile: [
        '/src/index.tsx',
        '/src/index.jsx',
        '/src/App.tsx',
        '/src/App.jsx',
    ],
});


/***/ }),

/***/ "../common/lib/templates/static.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
exports.default = new template_1.default('static', 'Static', 'https://developer.mozilla.org/en-US/docs/Learn/HTML', 'github/codesandbox-app/static-template', (0, decorate_selector_1.decorateSelector)(() => '#3AA855'), {
    showOnHomePage: true,
    distDir: './',
    main: false,
    mainFile: ['/index.html'],
});


/***/ }),

/***/ "../common/lib/templates/styleguidist.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
const configuration_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/index.js"));
exports.default = new template_1.default('styleguidist', 'Styleguidist', 'https://react-styleguidist.js.org/', 'github/styleguidist/example', (0, decorate_selector_1.decorateSelector)(() => '#25d8fc'), {
    extraConfigurations: {
        '/.babelrc': configuration_1.default.babelrc,
    },
    distDir: 'styleguide',
    mainFile: [],
    showOnHomePage: true,
    githubPagesDeploy: false,
});


/***/ }),

/***/ "../common/lib/templates/svelte.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
exports.default = new template_1.default('svelte', 'Svelte', 'https://svelte.dev', 'svelte', (0, decorate_selector_1.decorateSelector)(() => '#FF3E00'), {
    showOnHomePage: true,
    showCube: false,
    distDir: 'public',
    mainFile: ['/app.svelte'],
});


/***/ }),

/***/ "../common/lib/templates/template.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __webpack_require__("../common/lib/utils/path.js");
const configuration_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/index.js"));
const is_server_1 = __webpack_require__("../common/lib/templates/helpers/is-server.js");
const defaultConfigurations = {
    '/package.json': configuration_1.default.packageJSON,
    '/.prettierrc': configuration_1.default.prettierRC,
    '/sandbox.config.json': configuration_1.default.sandboxConfig,
    '/vercel.json': configuration_1.default.nowConfig,
    '/netlify.toml': configuration_1.default.netlifyConfig,
};
const CLIENT_VIEWS = [
    {
        views: [
            { id: 'codesandbox.browser' },
            { id: 'codesandbox.tests' },
            {
                id: 'codesandbox.terminalUpgrade',
                hideOnEmbedPage: true,
                hideOnPrem: true,
            },
        ],
    },
    {
        views: [{ id: 'codesandbox.console' }, { id: 'codesandbox.problems' }],
    },
];
const SERVER_VIEWS = [
    {
        views: [{ id: 'codesandbox.browser' }],
    },
    {
        open: true,
        views: [
            { id: 'codesandbox.terminal' },
            { id: 'codesandbox.console' },
            { id: 'codesandbox.problems' },
        ],
    },
];
class Template {
    constructor(name, niceName, url, shortid, color, options = {}) {
        /**
         * Alter the apiData to Vercel for making deployment work
         */
        this.alterDeploymentData = (apiData) => {
            const packageJSONFile = apiData.files.find(x => x.file === 'package.json');
            const parsedFile = JSON.parse(packageJSONFile.data);
            const newParsedFile = Object.assign(Object.assign({}, parsedFile), { devDependencies: Object.assign(Object.assign({}, parsedFile.devDependencies), { serve: '^10.1.1' }), scripts: Object.assign({ 'now-start': `cd ${this.distDir} && serve -s ./` }, parsedFile.scripts) });
            return Object.assign(Object.assign({}, apiData), { files: [
                    ...apiData.files.filter(x => x.file !== 'package.json'),
                    {
                        file: 'package.json',
                        data: JSON.stringify(newParsedFile, null, 2),
                    },
                ] });
        };
        this.name = name;
        this.niceName = niceName;
        this.url = url;
        this.shortid = shortid;
        this.color = color;
        this.popular = options.popular || false;
        this.isServer = (0, is_server_1.isServer)(this.name);
        this.main = options.main || false;
        this.showOnHomePage = options.showOnHomePage || false;
        this.distDir = options.distDir || 'build';
        this.configurationFiles = Object.assign(Object.assign({}, defaultConfigurations), (options.extraConfigurations || {}));
        this.isTypescript = options.isTypescript || false;
        this.externalResourcesEnabled =
            options.externalResourcesEnabled != null
                ? options.externalResourcesEnabled
                : true;
        this.mainFile = options.mainFile;
        this.staticDeployment = options.staticDeployment;
        this.githubPagesDeploy = options.githubPagesDeploy;
        this.backgroundColor = options.backgroundColor;
        this.showCube = options.showCube != null ? options.showCube : true;
        this.defaultOpenedFile = options.defaultOpenedFile || [];
    }
    // eslint-disable-next-line
    getMainFromPackage(pkg) {
        try {
            if (!pkg.main) {
                return undefined;
            }
            if (Array.isArray(pkg.main)) {
                return (0, path_1.absolute)(pkg.main[0]);
            }
            if (typeof pkg.main === 'string') {
                return (0, path_1.absolute)(pkg.main);
            }
        }
        catch (e) {
            // eslint-disable-next-line
            console.log(e);
        }
    }
    /**
     * Get possible entry files to evaluate, differs per template
     */
    getEntries(configurationFiles) {
        var _a;
        return [
            ((_a = configurationFiles.package) === null || _a === void 0 ? void 0 : _a.parsed) &&
                this.getMainFromPackage(configurationFiles.package.parsed),
            ...(this.mainFile || []),
            '/index.' + (this.isTypescript ? 'ts' : 'js'),
            '/src/index.' + (this.isTypescript ? 'ts' : 'js'),
            '/src/index.ts',
            '/src/index.tsx',
            '/src/index.js',
            '/src/pages/index.js',
            '/src/pages/index.vue',
            '/index.js',
            '/index.ts',
            '/index.tsx',
            '/README.md',
            '/package.json',
        ].filter(x => x);
    }
    /**
     * Files to be opened by default by the editor when opening the editor
     */
    getDefaultOpenedFiles(configurationFiles) {
        return [...this.defaultOpenedFile, ...this.getEntries(configurationFiles)];
    }
    /**
     * Get the views that are tied to the template
     */
    getViews(configurationFiles) {
        if (this.isServer) {
            return SERVER_VIEWS;
        }
        return CLIENT_VIEWS;
    }
    // eslint-disable-next-line no-unused-vars
    getHTMLEntries(configurationFiles) {
        return ['/public/index.html', '/index.html'];
    }
}
exports.default = Template;


/***/ }),

/***/ "../common/lib/templates/unibit.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
exports.default = new template_1.default('unibit', 'Unibit', 'https://www.stackbit.com', 'github/stackbithq/stackbit-theme-universal/tree/master/', (0, decorate_selector_1.decorateSelector)(() => '#3EB0FD'), {
    distDir: 'public',
    popular: true,
    mainFile: ['README.md'],
    showOnHomePage: true,
    main: false,
    showCube: false,
});


/***/ }),

/***/ "../common/lib/templates/vue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
const configuration_1 = __importDefault(__webpack_require__("../common/lib/templates/configuration/index.js"));
class VueTemplate extends template_1.default {
    getEntries(configurationFiles) {
        const entries = super.getEntries(configurationFiles);
        entries.push('/src/main.js');
        entries.push('/main.js');
        return entries;
    }
    getHTMLEntries() {
        return ['/static/index.html', '/public/index.html', '/index.html'];
    }
}
exports.default = new VueTemplate('vue-cli', 'Vue', 'https://github.com/vuejs/vue-cli', 'vue', (0, decorate_selector_1.decorateSelector)(() => '#41B883'), {
    showOnHomePage: true,
    extraConfigurations: {
        '/.babelrc': configuration_1.default.babelrc,
        '/tsconfig.json': configuration_1.default.tsconfig,
    },
    distDir: 'dist',
    main: true,
    popular: true,
    mainFile: ['/src/main.js', '/src/main.ts'],
});


/***/ }),

/***/ "../common/lib/templates/vuepress.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VuePressTemplate = void 0;
const template_1 = __importDefault(__webpack_require__("../common/lib/templates/template.js"));
const decorate_selector_1 = __webpack_require__("../common/lib/utils/decorate-selector.js");
class VuePressTemplate extends template_1.default {
    // The file to open by the editor
    getDefaultOpenedFiles() {
        return ['/README.md', '/guide/README.md'];
    }
}
exports.VuePressTemplate = VuePressTemplate;
exports.default = new VuePressTemplate('vuepress', 'VuePress', 'https://vuepress.vuejs.org/', 'github/vicbergquist/codesandbox-vuepress', (0, decorate_selector_1.decorateSelector)(() => '#4abf8a'), {
    mainFile: [],
    distDir: '.vuepress/dist',
    showOnHomePage: true,
});


/***/ }),

/***/ "../common/lib/utils/ci.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.formatVersion = exports.CSB_PKG_PROTOCOL = void 0;
exports.CSB_PKG_PROTOCOL = /https:\/\/pkg(-staging)?\.csb.dev/;
const formatVersion = (version) => {
    if (exports.CSB_PKG_PROTOCOL.test(version)) {
        const commitSha = version.match(/commit\/([\w\d]*)\//);
        if (commitSha && commitSha[1]) {
            return `csb:${commitSha[1]}`;
        }
    }
    return version;
};
exports.formatVersion = formatVersion;


/***/ }),

/***/ "../common/lib/utils/debug.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const global_1 = __webpack_require__("../common/lib/utils/global.js");
const shouldShowDebugger = () => {
    if (false) {}
    if (false) {}
    if (typeof document !== 'undefined' &&
        document.location.search.includes('debug')) {
        return true;
    }
    return false;
};
const getDebugger = () => {
    if (!shouldShowDebugger()) {
        const global = (0, global_1.getGlobal)();
        // Return a debugger that will log to sentry
        return (key) => (message) => {
            // Disable it for now, seems to affect performance. That's the last thing we want
            // from this (https://github.com/codesandbox/codesandbox-client/issues/1671)
            // TODO: move this to sentry
            if ( false || typeof global.Raven === 'object') {
                try {
                    global.Raven.captureBreadcrumb({
                        message: `${key} - ${message}`,
                        category: 'logging',
                    });
                }
                catch (e) {
                    console.error(e);
                }
            }
        };
    }
    // @ts-ignore
    const debug = __webpack_require__("../../node_modules/debug/src/browser.js"); // eslint-disable-line global-require
    // debug.enable('cs:*');
    // debug.disable('cs:cp-*');
    return debug;
};
exports.default = getDebugger();


/***/ }),

/***/ "../common/lib/utils/decorate-selector.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorateSelector = void 0;
const memoize_one_1 = __importDefault(__webpack_require__("../../node_modules/memoize-one/esm/index.js"));
const color_1 = __importDefault(__webpack_require__("../../node_modules/color/index.js"));
const colorMethods = [
    'negate',
    'lighten',
    'darken',
    'saturate',
    'desaturate',
    'greyscale',
    'whiten',
    'blacken',
    'clearer',
    'opaquer',
    'rotate', // hsl(60, 20%, 20%) -> hsl(330, 20%, 20%)
];
/**
 * Takes a selector that returns a color string and returns new decorated selector that calls the
 * original function to get the color and then modifies that color, ultimately returning another
 * color string.
 *
 * vy60q8l043
 */
const addModifier = (fn, method, ...modifierArgs) => (...args) => {
    if (method === 'clearer') {
        return ((0, color_1.default)(fn(...args))
            // @ts-ignore
            .lighten(...modifierArgs)
            .rgb()
            .string());
    }
    return (0, color_1.default)(fn(...args))[method](...modifierArgs)
        .rgb()
        .string();
};
/**
 * Add useful methods directly to selector function, as well as put an rgbString() call at the end
 * @param selector
 */
const decorateSelector = (selector) => {
    // add member functions to our selector
    colorMethods.forEach(method => {
        selector[method] = (0, memoize_one_1.default)((...args) => (0, exports.decorateSelector)(addModifier(selector, method, ...args)));
    });
    return selector;
};
exports.decorateSelector = decorateSelector;


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

/***/ "../common/lib/utils/dependencies.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAbsoluteDependencies = exports.getAbsoluteDependency = exports.isValidSemver = exports.isAbsoluteVersion = void 0;
const semver_1 = __webpack_require__("../../node_modules/semver/index.js");
function fetchWithRetries(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let err;
        for (let i = 0; i < 2; i++) {
            try {
                // eslint-disable-next-line
                return yield fetch(url).then(x => {
                    if (x.ok) {
                        return x.json();
                    }
                    throw new Error('Could not fetch ' + url);
                });
            }
            catch (e) {
                err = e;
            }
        }
        throw err;
    });
}
function fetchAllVersions(dep) {
    return __awaiter(this, void 0, void 0, function* () {
        return fetchWithRetries(`https://data.jsdelivr.com/v1/package/npm/${dep}`);
    });
}
/** Resolves version range from unpkg, use this as a fallback when jsdelivr fails */
const resolveVersionFromUnpkg = (dep, version) => {
    return fetchWithRetries(`https://unpkg.com/${dep}@${encodeURIComponent(version)}/package.json`).then(x => x.version);
};
function getLatestVersion(dep, version) {
    return __awaiter(this, void 0, void 0, function* () {
        // No need to resolve absolute versions...
        if (isAbsoluteVersion(version)) {
            return version;
        }
        try {
            // If it is not an absolute version (e.g. a tag like `next`), we don't want to fetch
            // using JSDelivr, because JSDelivr caches the response for a long time. Because of this,
            // when a tag updates to a new version, people won't see that update for a long time.
            // Instead, we download all possible versions from JSDelivr, and we check those versions
            // to see what's the maximum satisfying version. The API call is cached for only 10s.
            const allVersions = yield fetchAllVersions(dep);
            return (allVersions.tags[version] || (0, semver_1.maxSatisfying)(allVersions.versions, version));
        }
        catch (e) {
            return resolveVersionFromUnpkg(dep, version);
        }
    });
}
function isAbsoluteVersion(version) {
    return /(^\d+\.\d+\.\d+(-.*)?$)|(.+\/.+)/.test(version);
}
exports.isAbsoluteVersion = isAbsoluteVersion;
function isValidSemver(version) {
    return Boolean((0, semver_1.valid)(version));
}
exports.isValidSemver = isValidSemver;
function getAbsoluteDependency(depName, depVersion) {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            name: depName,
            version: yield getLatestVersion(depName, depVersion),
        };
    });
}
exports.getAbsoluteDependency = getAbsoluteDependency;
function getAbsoluteDependencies(dependencies) {
    return __awaiter(this, void 0, void 0, function* () {
        const nonAbsoluteDependencies = Object.keys(dependencies).filter(dep => !isAbsoluteVersion(dependencies[dep]));
        const newDependencies = Object.assign({}, dependencies);
        yield Promise.all(nonAbsoluteDependencies.map((dep) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { version } = yield getAbsoluteDependency(dep, newDependencies[dep]);
                newDependencies[dep] = version;
            }
            catch (e) {
                /* ignore */
            }
        })));
        return newDependencies;
    });
}
exports.getAbsoluteDependencies = getAbsoluteDependencies;


/***/ }),

/***/ "../common/lib/utils/global.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.commonPostMessage = exports.getGlobal = void 0;
const url_generator_1 = __webpack_require__("../common/lib/utils/url-generator.js");
function getGlobal() {
    try {
        if (typeof window !== 'undefined') {
            return window;
        }
        if (typeof self !== 'undefined') {
            const returnedGlobal = self;
            return returnedGlobal;
        }
        if (typeof global !== 'undefined') {
            return global;
        }
    }
    catch (e) {
        /* Couldn't find anything */
    }
    return {};
}
exports.getGlobal = getGlobal;
const global = getGlobal();
/**
 * A postmessage that works in main window and in worker.
 * It will send the message to the default origin.
 * @param message The message to send
 */
function commonPostMessage(message) {
    if (typeof Window !== 'undefined') {
        global.postMessage(message, (0, url_generator_1.protocolAndHost)());
    }
    else {
        global.postMessage(message);
    }
}
exports.commonPostMessage = commonPostMessage;


/***/ }),

/***/ "../common/lib/utils/is-babel-7.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBabel7 = void 0;
const semver_1 = __importDefault(__webpack_require__("../../node_modules/semver/index.js"));
function isCRAVersion2(dependencies, devDependencies) {
    const reactScriptsVersion = dependencies['react-scripts'] || devDependencies['react-scripts'];
    if (reactScriptsVersion) {
        return (/^[a-z]/.test(reactScriptsVersion) ||
            semver_1.default.intersects(reactScriptsVersion, '^2.0.0') ||
            semver_1.default.intersects(reactScriptsVersion, '^3.0.0') ||
            semver_1.default.intersects(reactScriptsVersion, '^4.0.0'));
    }
    return false;
}
function isBabel7(dependencies = {}, devDependencies = {}) {
    if (dependencies['@vue/cli-plugin-babel'] ||
        devDependencies['@vue/cli-plugin-babel']) {
        return true;
    }
    if (devDependencies['@babel/core'] || dependencies['@babel/core']) {
        return true;
    }
    if (dependencies.svelte || devDependencies.svelte) {
        const ver = dependencies.svelte || devDependencies.svelte;
        return semver_1.default.gte(semver_1.default.minVersion(ver), '3.0.0');
    }
    if ('typescript' in devDependencies && !dependencies['@angular/core']) {
        return true;
    }
    if (isCRAVersion2(dependencies, devDependencies)) {
        return true;
    }
    return false;
}
exports.isBabel7 = isBabel7;


/***/ }),

/***/ "../common/lib/utils/is-preact-10.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPreact10 = void 0;
const semver_1 = __importDefault(__webpack_require__("../../node_modules/semver/index.js"));
function isPreact10(dependencies, devDependencies) {
    const preactVersion = (dependencies || {}).preact || (devDependencies || {}).preact;
    if (preactVersion) {
        return (/^[a-z]/.test(preactVersion) ||
            semver_1.default.intersects(preactVersion, '>=10.0.0'));
    }
    return false;
}
exports.isPreact10 = isPreact10;


/***/ }),

/***/ "../common/lib/utils/is-url.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isUrl = void 0;
const URL_RE = /^https?:\/\/.+/;
function isUrl(url) {
    return URL_RE.test(url);
}
exports.isUrl = isUrl;


/***/ }),

/***/ "../common/lib/utils/metrics.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistMeasurements = exports.getMeasurements = exports.clearMeasurements = exports.getCumulativeMeasure = exports.endMeasure = exports.measure = exports.now = void 0;
const debug_1 = __importDefault(__webpack_require__("../common/lib/utils/debug.js"));
const global_1 = __webpack_require__("../common/lib/utils/global.js");
const debug = (0, debug_1.default)('cs:measurements');
const runningMeasurements = new Map();
let measurements = {};
const global = (0, global_1.getGlobal)();
if (typeof global.performance === 'undefined') {
    global.performance = {
        mark: () => { },
        now: () => Date.now(),
        measure: () => { },
    };
}
function now() {
    try {
        return performance.now();
    }
    catch (err) {
        console.warn(err);
        return 0;
    }
}
exports.now = now;
function measure(key) {
    try {
        performance.mark(`${key}_start`);
        const currentTime = now();
        runningMeasurements.set(key, currentTime);
        return currentTime;
    }
    catch (e) {
        console.warn(`Something went wrong while adding measure: ${e.message}`);
        return 0;
    }
}
exports.measure = measure;
function endMeasure(key, options = {}) {
    try {
        const { lastTime } = options;
        performance.mark(`${key}_end`);
        const lastMeasurement = typeof lastTime === 'undefined' ? runningMeasurements.get(key) : lastTime;
        if (typeof lastMeasurement === 'undefined') {
            console.warn(`Measurement for '${key}' was requested, but never was started`);
            return 0;
        }
        const nowMeasurement = performance.now();
        measurements[key] = nowMeasurement - lastMeasurement;
        if (!options.silent) {
            debug(`${options.displayName || key} Time: ${measurements[key].toFixed(2)}ms`);
        }
        const hadKey = runningMeasurements.delete(key);
        performance.measure(key, hadKey ? `${key}_start` : undefined, `${key}_end`);
        return measurements[key];
    }
    catch (e) {
        console.warn(`Something went wrong while adding measure: ${e.message}`);
        return 0;
    }
}
exports.endMeasure = endMeasure;
/**
 * Get the cumulative of a specific measurement by prefix. If you had for example these measurements:
 * - transpile-index.js
 * - transpile-test.js
 *
 * You can get the sum of these measurements with getCumulativeMeasure('transpile', 'Transpilation')
 */
function getCumulativeMeasure(prefix, options = {}) {
    const keys = Object.keys(measurements).filter(p => p.startsWith(prefix + '-'));
    const totalTime = keys.reduce((prev, key) => prev + measurements[key], 0);
    if (!options.silent) {
        debug(`${options.displayName || prefix} Total Time: ${totalTime.toFixed(2)}ms`);
        debug(`  Average Time: ${(totalTime / keys.length).toFixed(2)}ms`);
    }
    return totalTime;
}
exports.getCumulativeMeasure = getCumulativeMeasure;
function clearMeasurements() {
    measurements = {};
    runningMeasurements.clear();
}
exports.clearMeasurements = clearMeasurements;
function getMeasurements() {
    return measurements;
}
exports.getMeasurements = getMeasurements;
(0, global_1.getGlobal)().measurements = {
    clearMeasurements,
    getCumulativeMeasure,
    getMeasurements,
};
const MEASUREMENT_API = `https://col.csbops.io/data/sandpack`;
function persistMeasurements(data) {
    var _a;
    const body = [
        {
            measurement: 'load_times',
            tags: {
                browser: data.browser,
                cache_used: data.cacheUsed,
                version: data.version,
            },
            fields: {
                transpilation: measurements.transpilation,
                evaluation: measurements.evaluation,
                external_resources: measurements['external-resources'],
                compilation: measurements.compilation,
                boot: measurements.boot,
                total: measurements.total,
                dependencies: measurements.dependencies,
            },
        },
    ];
    if (false) {}
    // Self-host: skip external telemetry.
    if (true) {
        return Promise.resolve();
    }
    // Ignore external call for on-prem deploys
    // @ts-ignore
    if (((_a = window._env_) === null || _a === void 0 ? void 0 : _a.IS_ONPREM) === 'true') {
        return Promise.resolve();
    }
    return fetch(MEASUREMENT_API, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
}
exports.persistMeasurements = persistMeasurements;


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

/***/ "../common/lib/utils/slugify.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function slugify(text) {
    const a = 'àáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
    const b = 'aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';
    const p = new RegExp(a.split('').join('|'), 'g');
    /* eslint-disable */
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special chars
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
    /* eslint-enable */
}
exports.default = slugify;


/***/ }),

/***/ "../common/lib/version.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTimestamp = exports["default"] = void 0;
// This is .js for preval

var versionType = "PROD";
var versionNumber = Math.floor(1778847552458 / 1000);
var shortCommitSha = "080a1e7";
var getTimestamp = exports.getTimestamp = function getTimestamp(version) {
  return +version.split('-')[1];
};
var _default = exports["default"] = "PROD-1778847552-080a1e7";

/***/ }),

/***/ "../sandbox-hooks/errors/dependency-not-found-error.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/slicedToArray.js"), __webpack_require__("../codesandbox-api/dist/codesandbox.es5.js"), __webpack_require__("../sandbox-hooks/errors/sandbox-error.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _slicedToArray2, _codesandboxApi, _sandboxError) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.default = void 0;_slicedToArray2 = _interopRequireDefault(_slicedToArray2);_sandboxError = _interopRequireDefault(_sandboxError);


  class DependencyNotFoundError extends _sandboxError.default {
    constructor(dependencyName, fromPath) {
      super();

      this.type = 'dependency-not-found';
      this.severity = 'error';
      this.path = dependencyName;const _dependencyName$split =

        dependencyName.split('/'),_dependencyName$split2 = (0, _slicedToArray2.default)(_dependencyName$split, 2),root = _dependencyName$split2[0],second = _dependencyName$split2[1];

      // If the package starts with a @ it's scoped, we should add the second
      // part of the name in that case
      const parsedName = root.startsWith('@') ? "".concat(root, "/").concat(second) : root;
      this.suggestions = [
      {
        title: "Add ".concat(parsedName, " as dependency"),
        action: () => {
          (0, _codesandboxApi.dispatch)(_codesandboxApi.actions.source.dependencies.add(parsedName));
        }
      }];


      this.name = 'DependencyNotFoundError';
      this.message = "Could not find dependency: '".concat(parsedName, "'");

      if (fromPath) {
        this.message += " relative to '".concat(fromPath, "'");
      }
    }
  }_exports.default = DependencyNotFoundError;});

/***/ }),

/***/ "../sandbox-hooks/errors/index.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/defineProperty.js"), __webpack_require__("../codesandbox-api/dist/codesandbox.es5.js"), __webpack_require__("./src/sandbox/compile.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _defineProperty2, _codesandboxApi, _compile) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.default = showError;_defineProperty2 = _interopRequireDefault(_defineProperty2);function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {(0, _defineProperty2.default)(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}















  function buildErrorMessage(e) {
    const title = e.name;
    const message = e.message;
    let line = null;
    let column = null;
    if (!e.hideLine) {
      // Safari
      if (e.line != null) {
        line = e.line;

        // FF
      } else if (e.lineNumber != null) {
        line = e.lineNumber;

        // Chrome
      } else if (e.stack) {
        const matched = e.stack.match(/<anonymous>:(\d+):(\d+)/);
        if (matched) {
          line = matched[1];
          column = matched[2];
        } else {
          // Maybe it's a babel transpiler error
          const babelMatched = e.stack.match(/(\d+):(\d+)/);
          if (babelMatched) {
            line = babelMatched[1];
            column = babelMatched[2];
          }
        }
      }
    }

    return {
      path: e.tModule ? e.tModule.module.path : e.path,
      title,
      message,
      line: parseInt(line, 10),
      column: parseInt(column, 10),
      payload: e.payload || {},
      severity: e.severity || 'error'
    };
  }

  const wrappedResolveModule = (manager, path) => {
    try {
      return manager && manager.resolveTranspiledModuleSync(path, '/');
    } catch (e) {
      return null;
    }
  };

  function buildDynamicError(ref) {
    // TODO remove this logic for the SSE handler, move it to something more generic
    // like a file store
    const manager = (0, _compile.getCurrentManager)();

    const relevantFrame = ref.enhancedFrames.find((r) =>
    wrappedResolveModule(
      manager,
      (r._originalFileName || r.fileName || '').
      replace(location.origin, '').
      replace('file://', '')
    )
    );

    if (relevantFrame && manager) {
      const fileName = relevantFrame._originalFileName || relevantFrame.fileName;
      if (fileName) {
        const tModule = manager.resolveTranspiledModuleSync(
          fileName.replace(location.origin, '').replace('file://', ''),
          '/'
        );

        if (tModule) {
          const module = tModule.module;
          return {
            type: 'action',
            action: 'show-error',
            path: module.parent ? module.parent.path : module.path,
            title: ref.error.name,
            message: ref.error.message,
            line: relevantFrame._originalLineNumber,
            column: relevantFrame._originalColumnNumber,
            payload: {
              frames: ref.enhancedFrames
            },
            severity: 'error'
          };
        }
      }
    } else {
      const error = ref.error;
      const tModule =
      error.tModule ||
      wrappedResolveModule(
        manager,
        (error.fileName || '').
        replace(location.origin, '').
        replace('file://', '')
      );

      if (tModule) {
        const newError = _objectSpread(_objectSpread({},
        buildErrorMessage(error)), {}, {
          path: error.fileName,
          type: 'action',
          action: 'show-error' });


        return newError;
      }
    }

    return null;
  }

  const MAX_ERRORS_PER_SECOND = 10;
  const WARNING_INTERVAL_SECONDS = 10;
  let errorsSentLastSecond = 0;
  let lastWarningSent = 0;

  setInterval(() => {
    // Reset errors sent
    errorsSentLastSecond = 0;
  }, 1000);

  /* eslint-disable no-underscore-dangle */
  function showError(ref) {
    // We don't want to flood the editor with errors, because of this
    // we make sure to only send a max of MAX_ERRORS_PER_SECOND per second.
    if (++errorsSentLastSecond > MAX_ERRORS_PER_SECOND) {
      if (Date.now() - lastWarningSent > WARNING_INTERVAL_SECONDS * 1000) {
        console.warn(
          'Received too many errors in quick succession, not showing all errors in editor...'
        );
        lastWarningSent = Date.now();
      }

      return;
    }

    const errorToSend = buildDynamicError(ref);
    if (errorToSend) {
      (0, _codesandboxApi.dispatch)(
        _codesandboxApi.actions.error.show(errorToSend.title, errorToSend.message, {
          line: errorToSend.line,
          column: errorToSend.column,
          path: errorToSend.path,
          payload: errorToSend.payload
        })
      );
    } else {
      // Show based on error
      (0, _codesandboxApi.dispatch)(
        _codesandboxApi.actions.error.show(ref.error.name, ref.error.message, {
          line: ref.error.lineNumber,
          column: ref.error.columnNumber,
          path: ref.error.fileName,
          payload: {}
        })
      );
    }
  }});

/***/ }),

/***/ "../sandbox-hooks/errors/module-not-found-error.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/defineProperty.js"), __webpack_require__("../sandbox-hooks/errors/sandbox-error.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _defineProperty2, _sandboxError) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.default = void 0;_defineProperty2 = _interopRequireDefault(_defineProperty2);_sandboxError = _interopRequireDefault(_sandboxError);



  class ModuleNotFoundError extends _sandboxError.default {
    constructor(path, isDependency, currentPath) {
      super();(0, _defineProperty2.default)(this, "type",










      'module-not-found');(0, _defineProperty2.default)(this, "severity",
      'error');(0, _defineProperty2.default)(this, "path", void 0);(0, _defineProperty2.default)(this, "isDependency", void 0);this.path = path;this.isDependency = isDependency;this.name = 'ModuleNotFoundError';this.message = "Could not find module in path: '".concat(path, "'");if (currentPath) {this.message += " relative to '".concat(currentPath, "'");}}


  }_exports.default = ModuleNotFoundError;});

/***/ }),

/***/ "../sandbox-hooks/errors/sandbox-error.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.default = void 0; // import type { Module } from '@codesandbox/common/lib/types';

  // type Suggestion = {
  //   title: string,
  //   action: Function,
  // };

  const ErrorClass = Error;

  class SandboxError extends ErrorClass {
    // severity: 'error' | 'warning';
    // type: string;
    // module: Module;
    // payload: ?Object;
    // suggestions: Array<Suggestion>;

    constructor(error /*: ?Error */) {
      super(error ? error.message : null);

      this.suggestions = [];

      if (error) {
        this.fileName = error.fileName;
        this.description = error.description;
        this.message = error.message;
        this.name = error.name;
        this.stack = error.stack;
        this.number = error.number;
      }
    }
  }_exports.default = SandboxError;});

/***/ }),

/***/ "../sandbox-hooks/errors/transformers/index.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../codesandbox-api/dist/codesandbox.es5.js"), __webpack_require__("../sandbox-hooks/errors/transformers/raw-react-component-error.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _codesandboxApi, _rawReactComponentError) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.default = registerErrorTransformers;_rawReactComponentError = _interopRequireDefault(_rawReactComponentError);



  const transformers = [_rawReactComponentError.default];

  function registerErrorTransformers() {
    transformers.forEach((t) => (0, _codesandboxApi.registerErrorTransformer)(t));
  }});

/***/ }),

/***/ "../sandbox-hooks/errors/transformers/raw-react-component-error.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/slicedToArray.js"), __webpack_require__("../codesandbox-api/dist/codesandbox.es5.js"), __webpack_require__("../common/lib/utils/path.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _slicedToArray2, _codesandboxApi, _path) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.default = _default;_slicedToArray2 = _interopRequireDefault(_slicedToArray2);



  function findRawModule(module) {
    const rawModule = Array.from(module.dependencies).find(
      (m) => !/\.([\w]{2}|[\w]{3})$/.test(m.module.path)
    );

    if (rawModule) {
      return [module, rawModule];
    }

    // The error is thrown at the root, so we check for children components
    return Array.from(module.dependencies).reduce((foundResult, m) => {
      // We already found it, immediately return
      if (foundResult) return foundResult;

      return findRawModule(m);
    }, null);
  }

  /**
   * This transformer detects raw imports used as React component, when the module
   * is missing a file extension
   *
   * @export
   * @param {Error} error
   * @param {any} module
   * @returns
   */
  function _default(error, module) {
    if (
    error.message.includes(
      "Failed to execute 'createElement' on 'Document': The tag name provided "
    ))
    {
      const result = findRawModule(module);

      if (result) {const _result = (0, _slicedToArray2.default)(
            result, 2),sourceModule = _result[0],rawModule = _result[1];
        return {
          name: 'Raw import',
          message: "It seems like '".concat((0, _path.basename)(
            sourceModule.module.path
          ), "' is importing a raw module (").concat((0, _path.basename)(rawModule.module.path), ")"),
          suggestions: [
          {
            title: "Rename ".concat((0, _path.basename)(rawModule.module.path), " to ").concat((0, _path.basename)(
              rawModule.module.path
            ), ".js"),
            action: () => {
              (0, _codesandboxApi.dispatch)(
                _codesandboxApi.actions.source.modules.rename(
                  rawModule.module.path, "".concat(
                    (0, _path.basename)(rawModule.module.path), ".js")
                )
              );
            }
          }]

        };
      }
    }

    return null;
  }});

/***/ }),

/***/ "../sandbox-hooks/not-found-screen/index.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__("../sandbox-hooks/not-found-screen/overlay-manager.js"), __webpack_require__("../sandbox-hooks/preview-secret.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _asyncToGenerator2, _overlayManager, _previewSecret) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.show404 = show404;_asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);


  const HTML = "\n<style>\nbody {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #1d2022;\n  width: 100vw;\n  height: 100vh;\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  font-smooth: always;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n  min-height: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.4;\n  overflow: hidden;\n}\n\n.container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin: 0 auto;\n  max-width: 530px;\n  height: 100%;\n}\n\n.title {\n  color: #efefef;\n  font-size: 3rem;\n  width: 100%;\n  font-weight: 600;\n  text-align: center;\n  margin-bottom: 1rem;\n}\n.description {\n  color: #eeeeee;\n  font-size: 1.5rem;\n  width: 100%;\n  font-weight: 300;\n  text-align: center;\n  margin-top: 0;\n}\n\nbutton {\n  text-decoration: none;\n  color: #40a9f3;\n  outline: none;\n  border: none;\n  background: transparent;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n  font-size: 1em;\n}\n</style>\n\n<div class=\"container\">\n<h1 class=\"title\">404</h1>\n<p class=\"description\">\n  We could not find the sandbox you\u2019re looking for, did you try\n  <button id=\"sign-in-button\">signing in</button>?\n</p>\n</div>\n";function












































































  show404(_x) {return _show.apply(this, arguments);}function _show() {_show = (0, _asyncToGenerator2.default)(function* (sandboxId) {
      const windowRef = yield (0, _overlayManager.createOverlay)(HTML);

      windowRef.contentDocument.getElementById('sign-in-button').onclick = () => {
        (0, _previewSecret.requestPreviewSecretFromApp)(sandboxId);
      };
    });return _show.apply(this, arguments);}});

/***/ }),

/***/ "../sandbox-hooks/not-found-screen/overlay-manager.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _asyncToGenerator2) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.createOverlay = createOverlay;_exports.resetOverlay = resetOverlay;_asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);let iframeReference = null;

  function resetOverlay() {
    try {
      window.document.body.removeChild(iframeReference);
      iframeReference = null;
    } catch (e) {

      /* nothing */}
  }

  function createIframe() {
    return new Promise((resolve) => {
      if (iframeReference) {
        resolve(iframeReference);
      }

      const iframe = document.createElement('iframe');

      iframe.setAttribute(
        'style', "position: fixed; top: 0; left: 0; width: 100%; height: 100%; border: none; z-index: 214748366;"

      );
      iframe.setAttribute('id', 'not-found-frame');

      iframeReference = iframe;

      document.body.appendChild(iframe);

      if (iframe.contentDocument) {
        resolve(iframe);
      } else if (document.getElementById('not-found-frame')) {
        document.getElementById('not-found-frame').onload = () => {
          resolve(iframe);
        };
      } else {
        resolve(iframe);
      }
    });
  }function

  createOverlay(_x) {return _createOverlay.apply(this, arguments);}function _createOverlay() {_createOverlay = (0, _asyncToGenerator2.default)(function* (html) {
      const iframe = yield createIframe();

      const isMounted = !!document.getElementById('not-found-frame');
      if (!isMounted) {
        document.body.appendChild(iframe);
      }

      iframe.contentDocument.body.innerHTML = html;

      return iframe;
    });return _createOverlay.apply(this, arguments);}});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/components/additional.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/react-error-overlay/styles.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/dom/consumeEvent.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/dom/css.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/dom/enableTabClick.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _styles, _consumeEvent, _css, _enableTabClick) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.updateAdditional = updateAdditional; /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */













  function updateAdditional(
  document,
  additionalReference,
  currentError,
  totalErrors,
  switchCallback)
  {
    if (additionalReference.lastChild) {
      additionalReference.removeChild(additionalReference.lastChild);
    }

    if (totalErrors <= 1) {
      return;
    }

    const div = document.createElement('div');
    (0, _css.applyStyles)(div, _styles.additionalChildStyle);

    const group = document.createElement('span');
    (0, _css.applyStyles)(group, _styles.groupStyle);

    const left = document.createElement('button');
    (0, _css.applyStyles)(left, _styles.groupElemLeft);
    left.addEventListener('click', function (e) {
      (0, _consumeEvent.consumeEvent)(e);
      switchCallback(-1);
    });
    left.appendChild(document.createTextNode('←'));
    (0, _enableTabClick.enableTabClick)(left);

    const right = document.createElement('button');
    (0, _css.applyStyles)(right, _styles.groupElemRight);
    right.addEventListener('click', function (e) {
      (0, _consumeEvent.consumeEvent)(e);
      switchCallback(1);
    });
    right.appendChild(document.createTextNode('→'));
    (0, _enableTabClick.enableTabClick)(right);

    group.appendChild(left);
    group.appendChild(right);
    div.appendChild(group);

    const text = "".concat(currentError, " of ").concat(totalErrors, " errors on the page");
    div.appendChild(document.createTextNode(text));

    additionalReference.appendChild(div);
  }});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/components/close.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/react-error-overlay/styles.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/dom/css.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _styles, _css) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.createClose = createClose; /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */





  function createHint(document, hint, title) {
    const span = document.createElement('span');
    span.appendChild(document.createTextNode(hint));
    span.setAttribute('title', title);
    (0, _css.applyStyles)(span, _styles.hintStyle);
    return span;
  }


  function createClose(document, callback) {
    const hints = document.createElement('div');
    (0, _css.applyStyles)(hints, _styles.hintsStyle);

    const close = createHint(document, '×', 'Click or press Escape to dismiss.');
    close.addEventListener('click', () => callback());
    (0, _css.applyStyles)(close, _styles.closeButtonStyle);
    hints.appendChild(close);
    return hints;
  }});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/components/code.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/babel-code-frame/lib/index.js"), __webpack_require__("../../node_modules/react-dev-utils/ansiHTML.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/styles.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/dom/css.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _babelCodeFrame, _ansiHTML, _styles, _css) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.createCode = createCode;_babelCodeFrame = _interopRequireDefault(_babelCodeFrame);_ansiHTML = _interopRequireDefault(_ansiHTML); /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */














  function createCode(
  document,
  sourceLines,
  lineNum,
  columnNum,
  contextSize,
  main,
  onSourceClick)
  {
    const sourceCode = [];
    let whiteSpace = Infinity;
    sourceLines.forEach(function (e) {const
      text = e.content;
      const m = text.match(/^\s*/);
      if (text === '') {
        return;
      }
      if (m && m[0]) {
        whiteSpace = Math.min(whiteSpace, m[0].length);
      } else {
        whiteSpace = 0;
      }
    });
    sourceLines.forEach(function (e) {let
      text = e.content;const
      line = e.lineNumber;

      if (isFinite(whiteSpace)) {
        text = text.substring(whiteSpace);
      }
      sourceCode[line - 1] = text;
    });
    const ansiHighlight = (0, _babelCodeFrame.default)(
      sourceCode.join('\n'),
      lineNum,
      columnNum == null ? 0 : columnNum - (isFinite(whiteSpace) ? whiteSpace : 0),
      {
        forceColor: true,
        linesAbove: contextSize,
        linesBelow: contextSize
      }
    );
    const htmlHighlight = (0, _ansiHTML.default)(ansiHighlight);
    const code = document.createElement('code');
    code.innerHTML = htmlHighlight;
    (0, _css.applyStyles)(code, _styles.codeStyle);

    const ccn = code.childNodes;
    // eslint-disable-next-line
    oLoop: for (let index = 0; index < ccn.length; ++index) {
      const node = ccn[index];
      const ccn2 = node.childNodes;
      for (let index2 = 0; index2 < ccn2.length; ++index2) {
        const lineNode = ccn2[index2];
        const text = lineNode.innerText;
        if (text == null) {
          continue;
        }
        if (text.indexOf(' ' + lineNum + ' |') === -1) {
          continue;
        }
        // $FlowFixMe
        (0, _css.applyStyles)(node, main ? _styles.primaryErrorStyle : _styles.secondaryErrorStyle);
        // eslint-disable-next-line
        break oLoop;
      }
    }
    const pre = document.createElement('pre');
    (0, _css.applyStyles)(pre, main ? _styles.primaryPreStyle : _styles.secondaryPreStyle);
    pre.appendChild(code);

    if (typeof onSourceClick === 'function') {
      let handler = onSourceClick;
      pre.style.cursor = 'pointer';
      pre.addEventListener('click', function () {
        handler();
      });
    }

    return pre;
  }});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/components/footer.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/react-error-overlay/styles.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/dom/css.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _styles, _css) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.createFooter = createFooter; /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */





  function createFooter(document) {
    const div = document.createElement('div');
    (0, _css.applyStyles)(div, _styles.footerStyle);
    div.appendChild(
      document.createTextNode(
        'This screen is visible only in development. It will not appear if the app crashes in production.'
      )
    );
    div.appendChild(document.createElement('br'));
    div.appendChild(
      document.createTextNode(
        'Open your browser’s developer console to further inspect this error.'
      )
    );
    div.appendChild(document.createElement('br'));
    div.appendChild(
      document.createTextNode(
        'This error overlay is powered by `react-error-overlay` used in `create-react-app`.'
      )
    );
    return div;
  }});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/components/frame.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/defineProperty.js"), __webpack_require__("./src/sandbox/compile.ts"), __webpack_require__("../codesandbox-api/dist/codesandbox.es5.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/styles.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/dom/css.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/dom/enableTabClick.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/isInternalFile.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/components/code.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _defineProperty2, _compile, _codesandboxApi, _styles, _css, _enableTabClick, _isInternalFile, _code) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.createFrame = createFrame;_defineProperty2 = _interopRequireDefault(_defineProperty2);function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {(0, _defineProperty2.default)(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */




















  function getGroupToggle(
  document,
  omitsCount,
  omitBundle)
  {
    const omittedFrames = document.createElement('div');
    (0, _enableTabClick.enableTabClick)(omittedFrames);
    const text1 = document.createTextNode(
      '\u25B6 ' + omitsCount + ' stack frames were collapsed.'
    );
    omittedFrames.appendChild(text1);
    omittedFrames.addEventListener('click', function () {
      const hide = text1.textContent.match(/▲/);
      const list = document.getElementsByName('bundle-' + omitBundle);
      for (let index = 0; index < list.length; ++index) {
        const n = list[index];
        if (hide) {
          n.style.display = 'none';
        } else {
          n.style.display = '';
        }
      }
      if (hide) {
        text1.textContent = text1.textContent.replace(/▲/, '▶');
        text1.textContent = text1.textContent.replace(/expanded/, 'collapsed');
        (0, _css.applyStyles)(omittedFrames, _styles.omittedFramesCollapsedStyle);
      } else {
        text1.textContent = text1.textContent.replace(/▶/, '▲');
        text1.textContent = text1.textContent.replace(/collapsed/, 'expanded');
        (0, _css.applyStyles)(omittedFrames, _styles.omittedFramesExpandedStyle);
      }
    });
    (0, _css.applyStyles)(omittedFrames, _styles.omittedFramesCollapsedStyle);
    return omittedFrames;
  }

  function insertBeforeBundle(
  document,
  parent,
  omitsCount,
  omitBundle,
  actionElement)
  {
    const children = document.getElementsByName('bundle-' + omitBundle);
    if (children.length < 1) {
      return;
    }
    let first = children[0];
    while (first != null && first.parentNode !== parent) {
      first = first.parentNode;
    }
    const div = document.createElement('div');
    (0, _enableTabClick.enableTabClick)(div);
    div.setAttribute('name', 'bundle-' + omitBundle);
    const text = document.createTextNode(
      '\u25BC ' + omitsCount + ' stack frames were expanded.'
    );
    div.appendChild(text);
    div.addEventListener('click', function () {
      return actionElement.click();
    });
    (0, _css.applyStyles)(div, _styles.omittedFramesExpandedStyle);
    div.style.display = 'none';

    parent.insertBefore(div, first);
  }

  function frameDiv(
  document,
  functionName,
  url,
  internalUrl,
  onSourceClick)
  {
    const frame = document.createElement('div');
    const frameFunctionName = document.createElement('div');

    let cleanedFunctionName;
    if (!functionName || functionName === 'Object.<anonymous>') {
      cleanedFunctionName = '(anonymous function)';
    } else {
      cleanedFunctionName = functionName;
    }

    const cleanedUrl = url.replace('webpack://', '.');

    if (internalUrl) {
      (0, _css.applyStyles)(
        frameFunctionName, _objectSpread(_objectSpread({},
        _styles.functionNameStyle), _styles.depStyle)
      );
    } else {
      (0, _css.applyStyles)(frameFunctionName, _styles.functionNameStyle);
    }

    frameFunctionName.appendChild(document.createTextNode(cleanedFunctionName));
    frame.appendChild(frameFunctionName);

    const frameLink = document.createElement('div');
    (0, _css.applyStyles)(frameLink, _styles.linkStyle);
    const frameAnchor = document.createElement('a');
    (0, _css.applyStyles)(frameAnchor, _styles.anchorStyle);
    frameAnchor.appendChild(document.createTextNode(cleanedUrl));
    frameLink.appendChild(frameAnchor);
    frame.appendChild(frameLink);

    if (typeof onSourceClick === 'function') {
      const handler = onSourceClick;
      (0, _enableTabClick.enableTabClick)(frameAnchor);
      frameAnchor.style.cursor = 'pointer';
      frameAnchor.addEventListener('click', function () {
        handler();
      });
    }

    return frame;
  }

  function isBultinErrorName(errorName) {
    switch (errorName) {
      case 'EvalError':
      case 'InternalError':
      case 'RangeError':
      case 'ReferenceError':
      case 'SyntaxError':
      case 'TypeError':
      case 'URIError':
        return true;
      default:
        return false;
    }
  }

  function getPrettyURL(
  sourceFileName,
  sourceLineNumber,
  sourceColumnNumber,
  fileName,
  lineNumber,
  columnNumber,
  compiled)
  {
    let prettyURL;
    if (!compiled && sourceFileName && typeof sourceLineNumber === 'number') {
      // Remove everything up to the first /src/ or /node_modules/
      const trimMatch = /^[/|\\].*?[/|\\]((src|node_modules)[/|\\].*)/.exec(
        sourceFileName
      );
      if (trimMatch && trimMatch[1]) {
        prettyURL = trimMatch[1];
      } else {
        prettyURL = sourceFileName;
      }
      prettyURL += ':' + sourceLineNumber;
      // Note: we intentionally skip 0's because they're produced by cheap Webpack maps
      if (sourceColumnNumber) {
        prettyURL += ':' + sourceColumnNumber;
      }
    } else if (fileName && typeof lineNumber === 'number') {
      prettyURL = fileName + ':' + lineNumber;
      // Note: we intentionally skip 0's because they're produced by cheap Webpack maps
      if (columnNumber) {
        prettyURL += ':' + columnNumber;
      }
    } else {
      prettyURL = 'unknown';
    }
    return prettyURL;
  }

  function createFrame(
  document,
  frameSetting,
  frame,
  contextSize,
  critical,
  omits,
  omitBundle,
  parentContainer,
  lastElement,
  errorName)
  {const
    compiled = frameSetting.compiled;let
      functionName = frame.functionName,sourceFileName = frame._originalFileName;const

      fileName =






      frame.fileName,lineNumber = frame.lineNumber,columnNumber = frame.columnNumber,scriptLines = frame._scriptCode,sourceLineNumber = frame._originalLineNumber,sourceColumnNumber = frame._originalColumnNumber,sourceLines = frame._originalScriptCode;

    // TODO: find a better place for this.
    // Chrome has a bug with inferring function.name:
    // https://github.com/facebookincubator/create-react-app/issues/2097
    // Let's ignore a meaningless name we get for top-level modules.
    if (
    functionName === 'Object.friendlySyntaxErrorLabel' ||
    functionName === 'Object.exports.__esModule')
    {
      functionName = '(anonymous function)';
    }

    const prettyURL = getPrettyURL(
      sourceFileName,
      sourceLineNumber,
      sourceColumnNumber,
      fileName,
      lineNumber,
      columnNumber,
      compiled
    );

    let needsHidden = false;
    const isInternalUrl = (0, _isInternalFile.isInternalFile)(sourceFileName, fileName);
    const isThrownIntentionally = !isBultinErrorName(errorName);
    const shouldCollapse =
    isInternalUrl && (isThrownIntentionally || omits.hasReachedAppCode);

    if (!isInternalUrl) {
      omits.hasReachedAppCode = true;
    }

    if (shouldCollapse) {
      ++omits.value;
      needsHidden = true;
    }

    let collapseElement = null;
    if (!shouldCollapse || lastElement) {
      if (omits.value > 0) {
        const capV = omits.value;
        const omittedFrames = getGroupToggle(document, capV, omitBundle);
        window.requestAnimationFrame(() => {
          insertBeforeBundle(
            document,
            parentContainer,
            capV,
            omitBundle,
            omittedFrames
          );
        });
        if (lastElement && shouldCollapse) {
          collapseElement = omittedFrames;
        } else {
          parentContainer.appendChild(omittedFrames);
        }
        ++omits.bundle;
      }
      omits.value = 0;
    }

    let onSourceClick = null;
    if (sourceFileName) {
      // e.g. "/path-to-my-app/webpack/bootstrap eaddeb46b67d75e4dfc1"
      const isInternalWebpackBootstrapCode =
      sourceFileName.trim().indexOf(' ') !== -1;
      if (!isInternalWebpackBootstrapCode) {
        onSourceClick = () => {
          const manager = (0, _compile.getCurrentManager)();
          if (manager) {
            const tModule = manager.resolveTranspiledModuleSync(
              sourceFileName.replace(location.origin, '').replace('file://', ''),
              '/'
            );

            (0, _codesandboxApi.dispatch)(
              _codesandboxApi.actions.editor.openModule(
                // A module has a parent when it has been generated by a module,
                // Vue is an example of this: SFC's generate submodules
                tModule.module.parent ?
                tModule.module.parent.path :
                tModule.module.path,
                window.encodeURIComponent(sourceLineNumber || 1)
              )
            );
          }
        };
      }
    }

    const elem = frameDiv(
      document,
      functionName,
      prettyURL,
      shouldCollapse,
      onSourceClick
    );
    if (needsHidden) {
      (0, _css.applyStyles)(elem, _styles.hiddenStyle);
      elem.setAttribute('name', 'bundle-' + omitBundle);
    }

    let hasSource = false;
    if (!shouldCollapse) {
      if (
      compiled &&
      scriptLines &&
      scriptLines.length !== 0 &&
      lineNumber != null)
      {
        elem.appendChild(
          (0, _code.createCode)(
            document,
            scriptLines,
            lineNumber,
            columnNumber,
            contextSize,
            critical,
            onSourceClick
          )
        );
        hasSource = true;
      } else if (
      !compiled &&
      sourceLines &&
      sourceLines.length !== 0 &&
      sourceLineNumber != null)
      {
        elem.appendChild(
          (0, _code.createCode)(
            document,
            sourceLines,
            sourceLineNumber,
            sourceColumnNumber,
            contextSize,
            critical,
            onSourceClick
          )
        );
        hasSource = true;
      }
    }

    return { elem, hasSource, collapseElement };
  }});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/components/frames.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/react-error-overlay/utils/dom/css.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/styles.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/dom/enableTabClick.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/components/frame.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _css, _styles, _enableTabClick, _frame) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.createFrames = createFrames; /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */
















  function createFrameWrapper(
  document,
  parent,
  factory,
  lIndex,
  frameSettings,
  contextSize)
  {
    const fac = factory();
    if (fac == null) {
      return;
    }const
      hasSource = fac.hasSource,elem = fac.elem,collapseElement = fac.collapseElement;

    const elemWrapper = document.createElement('div');
    elemWrapper.appendChild(elem);

    if (hasSource) {
      const compiledDiv = document.createElement('div');
      (0, _enableTabClick.enableTabClick)(compiledDiv);
      (0, _css.applyStyles)(compiledDiv, _styles.toggleStyle);

      const o = frameSettings[lIndex];
      const compiledText = document.createTextNode(
        'View ' + (o && o.compiled ? 'source' : 'compiled')
      );
      compiledDiv.addEventListener('click', function () {
        if (o) {
          o.compiled = !o.compiled;
        }

        const next = createFrameWrapper(
          document,
          parent,
          factory,
          lIndex,
          frameSettings,
          contextSize
        );
        if (next != null) {
          parent.insertBefore(next, elemWrapper);
          parent.removeChild(elemWrapper);
        }
      });
      compiledDiv.appendChild(compiledText);
      elemWrapper.appendChild(compiledDiv);
    }

    if (collapseElement != null) {
      elemWrapper.appendChild(collapseElement);
    }

    return elemWrapper;
  }

  function createFrames(
  document,
  resolvedFrames,
  frameSettings,
  contextSize,
  errorName)
  {
    if (resolvedFrames.length !== frameSettings.length) {
      throw new Error(
        'You must give a frame settings array of identical length to resolved frames.'
      );
    }
    const trace = document.createElement('div');
    (0, _css.applyStyles)(trace, _styles.traceStyle);

    let index = 0;
    let critical = true;
    const omits = { value: 0, bundle: 1, hasReachedAppCode: false };
    resolvedFrames.forEach(function (frame) {
      const lIndex = index++;
      const elem = createFrameWrapper(
        document,
        trace,
        _frame.createFrame.bind(
          undefined,
          document,
          frameSettings[lIndex],
          frame,
          contextSize,
          critical,
          omits,
          omits.bundle,
          trace,
          index === resolvedFrames.length,
          errorName
        ),
        lIndex,
        frameSettings,
        contextSize
      );
      if (elem == null) {
        return;
      }
      critical = false;
      trace.appendChild(elem);
    });
    //TODO: fix this
    omits.value = 0;

    return trace;
  }});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/components/overlay.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("./src/sandbox/compile.ts"), __webpack_require__("../sandbox-hooks/react-error-overlay/styles.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/dom/css.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/components/additional.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/components/close.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/components/footer.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/components/frames.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/components/suggestions.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _compile, _styles, _css, _additional, _close, _footer, _frames, _suggestions) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.createOverlay = createOverlay; /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */






















  function createOverlay(
  document,
  error,
  name,
  message,
  frames,
  contextSize,
  currentError,
  totalErrors,
  switchCallback,
  closeCallback)



  {
    const frameSettings = frames.map(() => ({ compiled: false }));
    // Create overlay
    const overlay = document.createElement('div');
    (0, _css.applyStyles)(overlay, _styles.overlayStyle);

    // Create container
    const container = document.createElement('div');
    (0, _css.applyStyles)(container, _styles.containerStyle);
    overlay.appendChild(container);
    container.appendChild((0, _close.createClose)(document, closeCallback));

    // Create "Errors X of Y" in case of multiple errors
    const additional = document.createElement('div');
    (0, _additional.updateAdditional)(
      document,
      additional,
      currentError,
      totalErrors,
      switchCallback
    );
    container.appendChild(additional);

    // Create header
    const header = document.createElement('div');
    (0, _css.applyStyles)(header, _styles.headerStyle);

    const messageHeader = document.createElement('div');
    (0, _css.applyStyles)(messageHeader, _styles.messageHeaderStyle);

    // Make message prettier
    let finalMessage = message;

    finalMessage = finalMessage
    // TODO: maybe remove this prefix from fbjs?
    // It's just scaring people
    .replace(/^Invariant Violation:\s*/, '')
    // This is not helpful either:
    .replace(/^Warning:\s*/, '')
    // Break the actionable part to the next line.
    // AFAIK React 16+ should already do this.
    .replace(' Check the render method', '\n\nCheck the render method').
    replace(' Check your code at', '\n\nCheck your code at');

    // Put it in the DOM
    header.appendChild(document.createTextNode(name || ''));
    messageHeader.appendChild(document.createTextNode(finalMessage));

    container.appendChild(header);
    container.appendChild(messageHeader);

    // If the error has been transformed
    if (error.originalName || error.originalMessage) {
      const originalErrorContainer = document.createElement('div');
      const errorHeader = document.createElement('div');
      (0, _css.applyStyles)(errorHeader, _styles.originalHeaderStyle);
      errorHeader.appendChild(document.createTextNode('Original error:'));
      originalErrorContainer.appendChild(errorHeader);

      // Create header
      const originalMessageHeader = document.createElement('div');
      (0, _css.applyStyles)(originalMessageHeader, _styles.originalMessageHeaderStyle);

      originalMessageHeader.appendChild(
        document.createTextNode("".concat(
          error.originalName || '', ": ").concat(error.originalMessage)
        )
      );

      originalErrorContainer.appendChild(originalMessageHeader);
      messageHeader.appendChild(originalErrorContainer);
    }

    if (
    (0, _compile.areActionsEnabled)() &&
    error.suggestions &&
    error.suggestions.length > 0)
    {
      container.appendChild((0, _suggestions.createSuggestions)(error));
    }

    // Create trace
    container.appendChild(
      (0, _frames.createFrames)(document, frames, frameSettings, contextSize, name)
    );

    // Show message
    container.appendChild((0, _footer.createFooter)(document));

    return {
      overlay,
      additional
    };
  }});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/components/suggestions.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/react-error-overlay/utils/dom/css.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/styles.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _css, _styles) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.createSuggestions = createSuggestions;






  function createSuggestions(error) {
    const container = document.createElement('div');

    (0, _css.applyStyles)(container, _styles.suggestionsContainerStyle);

    const title = document.createElement('div');
    title.appendChild(document.createTextNode('Suggested solutions:'));
    (0, _css.applyStyles)(title, _styles.suggestionsTitleStyle);
    container.appendChild(title);

    error.suggestions.forEach((suggestion) => {
      const button = document.createElement('button');
      button.appendChild(document.createTextNode(suggestion.title));
      button.setAttribute('onmouseover', 'this.style.backgroundColor="#78CDF7"');
      button.setAttribute(
        'onmouseout', "this.style.backgroundColor=\"".concat(
          _styles.suggestionsButtonStyle['background-color'], "\"")
      );
      (0, _css.applyStyles)(button, _styles.suggestionsButtonStyle);

      button.addEventListener('click', (e) => {
        e.preventDefault();
        suggestion.action();
      });

      container.appendChild(button);
    });

    return container;
  }});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/effects/proxyConsole.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.permanentRegister = permanentRegister;_exports.registerReactStack = registerReactStack; /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */








  const reactFrameStack = [];



  // This is a stripped down barebones version of this proposal:
  // https://gist.github.com/sebmarkbage/bdefa100f19345229d526d0fdd22830f
  // We're implementing just enough to get the invalid element type warnings
  // to display the component stack in React 15.6+:
  // https://github.com/facebook/react/pull/9679
  // / TODO: a more comprehensive implementation.

  function registerReactStack() {
    if (typeof console !== 'undefined') {
      // $FlowFixMe
      console.reactStack = (frames) => reactFrameStack.push(frames);
      // $FlowFixMe
      console.reactStackEnd = (frames) => reactFrameStack.pop();

      return () => {
        // $FlowFixMe
        console.reactStack = undefined;
        // $FlowFixMe
        console.reactStackEnd = undefined;
      };
    }

    return () => {};
  }


  function permanentRegister(
  type,
  callback)
  {
    if (typeof console !== 'undefined') {
      const orig = console[type];
      if (typeof orig === 'function') {
        console[type] = function __stack_frame_overlay_proxy_console__() {
          try {
            const message = arguments[0];
            if (typeof message === 'string' && reactFrameStack.length > 0) {
              callback(message, reactFrameStack[reactFrameStack.length - 1]);
            }
          } catch (err) {
            // Warnings must never crash. Rethrow with a clean stack.
            setTimeout(function () {
              throw err;
            });
          }
          return orig.apply(this, arguments);
        };
      }
    }
  }});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/effects/stackTraceLimit.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.registerStackTraceLimit = registerStackTraceLimit; /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */


  const MAX_STACK_LENGTH = 50;

  function registerStackTraceLimit() {let limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MAX_STACK_LENGTH;
    try {
      Error.stackTraceLimit = limit;
    } catch (e) {

      // Not all browsers support this so we don't care if it errors
    }}});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/effects/unhandledError.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.registerUnhandledError = registerUnhandledError; /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */




  function errorHandler(callback, e) {
    if (!e.error) {
      return;
    }

    // $FlowFixMe
    const error = e.error;
    if (error instanceof Error) {
      callback(error);
    } else {
      // A non-error was thrown, we don't have a trace. :(
      // Look in your browser's devtools for more information
      callback(new Error(error));
    }
  }

  function registerUnhandledError(target, callback) {
    const boundErrorHandler = errorHandler.bind(undefined, callback);
    target.addEventListener('error', boundErrorHandler);
    return () => {
      target.removeEventListener('error', boundErrorHandler);
    };
  }});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/effects/unhandledRejection.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.registerUnhandledRejection = registerUnhandledRejection; /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */




  function registerUnhandledRejection(
  target,
  callback)
  {
    const rejectionHandler = (err) => {
      if (err == null || err.reason == null) {
        return callback(new Error('Unknown'));
      }const

      reason = err.reason;
      if (reason instanceof Error) {
        return callback(reason);
      }

      // A non-error was rejected, we don't have a trace :(
      // Look in your browser's devtools for more information
      return callback(new Error(reason));
    };

    target.addEventListener('unhandledrejection', rejectionHandler);

    return () => {
      target.removeEventListener('unhandledrejection', rejectionHandler);
    };
  }});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/listenToRuntimeErrors.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/react-error-overlay/effects/unhandledError.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/effects/unhandledRejection.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/effects/stackTraceLimit.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/effects/proxyConsole.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/warnings.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/getStackFrames.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _unhandledError, _unhandledRejection, _stackTraceLimit, _proxyConsole, _warnings, _getStackFrames) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.crashWithFrames = void 0;_exports.listenToRuntimeErrors = listenToRuntimeErrors; /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */













  const CONTEXT_SIZE = 3;








  const crashWithFrames = (crash) => function (
  error)

  {let unhandledRejection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    (0, _getStackFrames.getStackFrames)(error, unhandledRejection, CONTEXT_SIZE).
    then((stackFrames) => {
      crash({
        error,
        unhandledRejection,
        contextSize: CONTEXT_SIZE,
        stackFrames
      });
    }).
    catch((e) => {
      console.log('Could not get the stack frames of error:', e);
    });
  };_exports.crashWithFrames = crashWithFrames;

  function listenToRuntimeErrors(
  crash)

  {let filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/static/js/bundle.js';
    const crashWithFramesRunTime = crashWithFrames(crash);

    const unregisterError = (0, _unhandledError.registerUnhandledError)(window, (error) =>
    crashWithFramesRunTime(error, false)
    );
    const unregisterUnhandledRejection = (0, _unhandledRejection.registerUnhandledRejection)(
      window,
      (error) => crashWithFramesRunTime(error, true)
    );
    (0, _stackTraceLimit.registerStackTraceLimit)();
    const unregisterReactStack = (0, _proxyConsole.registerReactStack)();
    (0, _proxyConsole.permanentRegister)('error', (warning, stack) => {
      const data = (0, _warnings.massage)(warning, stack);
      crashWithFramesRunTime(
        // $FlowFixMe
        {
          message: data.message,
          stack: data.stack,
          __unmap_source: filename
        },
        false
      );
    });

    return () => {
      unregisterUnhandledRejection();
      unregisterError();
      unregisterReactStack();
    };
  }});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/overlay.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../codesandbox-api/dist/codesandbox.es5.js"), __webpack_require__("./src/sandbox/compile.ts"), __webpack_require__("../sandbox-hooks/react-error-overlay/listenToRuntimeErrors.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/errorRegister.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/styles.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/dom/css.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/components/overlay.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/components/additional.js"), __webpack_require__("../sandbox-hooks/errors/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _codesandboxApi, _compile, _listenToRuntimeErrors, _errorRegister, _styles, _css, _overlay, _additional, _errors) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.inject = inject;_exports.uninject = uninject;_exports.unmount = unmount;_errors = _interopRequireDefault(_errors); /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */






















  const CONTEXT_SIZE = 3;
  let iframeReference = null;
  let additionalReference = null;
  let errorReferences = [];
  let currReferenceIndex = -1;

  function render(
  name,
  message,
  resolvedFrames,
  error)
  {
    disposeCurrentView();

    const iframe = window.document.createElement('iframe');
    (0, _css.applyStyles)(iframe, _styles.iframeStyle);
    iframeReference = iframe;
    iframe.onload = () => {
      if (iframeReference == null) {
        return;
      }
      const w = iframeReference.contentWindow;
      const document = iframeReference.contentDocument;const _createOverlay =

        (0, _overlay.createOverlay)(
          document,
          error,
          name,
          message,
          resolvedFrames,
          CONTEXT_SIZE,
          currReferenceIndex + 1,
          errorReferences.length,
          (offset) => {
            switchError(offset);
          },
          () => {
            unmount();
          }
        ),overlay = _createOverlay.overlay,additional = _createOverlay.additional;
      if (w != null) {
        w.onkeydown = (event) => {
          keyEventHandler((type) => shortcutHandler(type), event);
        };
      }
      if (document.body != null) {
        document.body.style.margin = '0';
        // Keep popup within body boundaries for iOS Safari
        // $FlowFixMe
        document.body.style['max-width'] = '100vw';

        document.body.appendChild(overlay);
      }
      additionalReference = additional;
    };
    window.document.body.appendChild(iframe);
  }

  function renderErrorByIndex(index) {
    currReferenceIndex = index;const _getErrorRecord =

      (0, _errorRegister.getErrorRecord)(
        errorReferences[index]
      ),error = _getErrorRecord.error,unhandledRejection = _getErrorRecord.unhandledRejection,enhancedFrames = _getErrorRecord.enhancedFrames;

    if (unhandledRejection) {
      render(
        'Unhandled Rejection (' + error.name + ')',
        error.message,
        enhancedFrames,
        error
      );
    } else {
      render(error.name, error.message, enhancedFrames, error);
    }
  }

  const SHORTCUT_ESCAPE = 1;
  const SHORTCUT_LEFT = 2;
  const SHORTCUT_RIGHT = 3;

  function keyEventHandler(cb, event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
      cb(SHORTCUT_ESCAPE);
    } else if (event.key === 'Left' || event.key === 'ArrowLeft') {
      cb(SHORTCUT_LEFT);
    } else if (event.key === 'Right' || event.key === 'ArrowRight') {
      cb(SHORTCUT_RIGHT);
    }
  }

  function switchError(offset) {
    if (errorReferences.length === 0) {
      return;
    }

    let nextView = currReferenceIndex + offset;

    if (nextView < 0) {
      nextView = errorReferences.length - 1;
    } else if (nextView >= errorReferences.length) {
      nextView = 0;
    }

    renderErrorByIndex(nextView);
  }

  function disposeCurrentView(force) {
    // CodeSandbox already resets this, only do this if force is on
    if (force) {
      if (iframeReference == null) {
        return;
      }
      try {
        window.document.body.removeChild(iframeReference);
      } catch (e) {
        console.error(e);
      }
    }
    iframeReference = null;
    additionalReference = null;
  }

  function unmount() {let force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    disposeCurrentView(force);
    (0, _errorRegister.drain)();
    errorReferences = [];
    currReferenceIndex = -1;
  }

  function sendErrorsToEditor() {
    errorReferences.forEach((ref) => {
      const error = (0, _errorRegister.getErrorRecord)(ref);
      (0, _errors.default)(error);
    });
  }

  /**
   * Transforms the error with give transformers to codesandbox-api, this adds
   * suggestions and can alter the error name + message.
   */
  function transformErrors() {
    const manager = (0, _compile.getCurrentManager)();
    if (manager) {
      errorReferences.forEach((ref) => {
        const errRef = (0, _errorRegister.getErrorRecord)(ref);

        const relevantFrame = errRef.enhancedFrames.find((r) => {
          try {
            return (
              manager &&
              !!manager.resolveTranspiledModuleSync(
                (r._originalFileName || r.fileName || '').replace(
                  location.origin,
                  ''
                ),
                '/'
              ));

          } catch (e) {
            /* don't do anything */
            return false;
          }
        });let

        tModule = errRef.error.tModule;

        if (!tModule && relevantFrame) {
          const fileName =
          relevantFrame._originalFileName || relevantFrame.fileName || '';
          tModule = manager.resolveTranspiledModuleSync(
            fileName.replace(location.origin, ''),
            '/'
          );
        }

        if (!tModule) {
          return;
        }

        try {
          const transformation = (0, _codesandboxApi.transformError)(
            errRef.error,
            tModule,
            manager.getTranspiledModules()
          );

          if (transformation) {
            const newError = new Error(transformation.name || errRef.error.name);
            newError.message = transformation.message;
            newError.suggestions = transformation.suggestions;
            newError.originalName = errRef.error.name;
            newError.originalMessage = errRef.error.message;
            errRef.error = newError;
          }
        } catch (ex) {
          /* just catch */
          console.error(ex);
        }
      });
    }
  }

  function crash(
  error)


  {let unhandledRejection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;let renderErrorOverlay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (false) {}

    (0, _errorRegister.consume)(error, unhandledRejection, CONTEXT_SIZE).
    then((ref) => {
      if (ref == null) {
        return;
      }

      errorReferences.push(ref);

      sendErrorsToEditor();
      transformErrors();
      if (renderErrorOverlay) {
        if (iframeReference !== null && additionalReference !== null) {
          (0, _additional.updateAdditional)(
            iframeReference.contentDocument,
            additionalReference,
            currReferenceIndex + 1,
            errorReferences.length,
            (offset) => {
              switchError(offset);
            }
          );
        } else {
          if (errorReferences.length !== 1) {
            throw new Error('Something is *really* wrong.');
          }
          renderErrorByIndex(currReferenceIndex = 0);
        }
      }
    }).
    catch((e) => {
      console.log('Could not consume error:', e);
    });
  }

  function shortcutHandler(type) {
    switch (type) {
      case SHORTCUT_ESCAPE:{
          unmount();
          break;
        }
      case SHORTCUT_LEFT:{
          switchError(-1);
          break;
        }
      case SHORTCUT_RIGHT:{
          switchError(1);
          break;
        }
      default:{
          // TODO: this
          break;
        }
    }
  }

  let listenToRuntimeErrorsUnmounter;

  function unregisterErrorHandlers() {
    if (listenToRuntimeErrorsUnmounter) {
      listenToRuntimeErrorsUnmounter();
      listenToRuntimeErrorsUnmounter = null;
    }
  }

  function uninject(force) {
    unregisterErrorHandlers();
    unmount(force);
  }

  function inject() {let renderErrorOverlay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    // Remove existing listeners if there are any
    unregisterErrorHandlers();

    listenToRuntimeErrorsUnmounter = (0, _listenToRuntimeErrors.listenToRuntimeErrors)((error) => {
      crash(error.error, false, renderErrorOverlay);
    });
  }});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/styles.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/defineProperty.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _defineProperty2) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.traceStyle = _exports.toggleStyle = _exports.suggestionsTitleStyle = _exports.suggestionsContainerStyle = _exports.suggestionsButtonStyle = _exports.secondaryPreStyle = _exports.secondaryErrorStyle = _exports.primaryPreStyle = _exports.primaryErrorStyle = _exports.overlayStyle = _exports.originalMessageHeaderStyle = _exports.originalHeaderStyle = _exports.omittedFramesExpandedStyle = _exports.omittedFramesCollapsedStyle = _exports.messageHeaderStyle = _exports.linkStyle = _exports.iframeStyle = _exports.hintsStyle = _exports.hintStyle = _exports.hiddenStyle = _exports.headerStyle = _exports.groupStyle = _exports.groupElemRight = _exports.groupElemLeft = _exports.functionNameStyle = _exports.footerStyle = _exports.depStyle = _exports.containerStyle = _exports.codeStyle = _exports.closeButtonStyle = _exports.anchorStyle = _exports.additionalChildStyle = void 0;_defineProperty2 = _interopRequireDefault(_defineProperty2);function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {(0, _defineProperty2.default)(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */


  const black = '#293238',
    darkGray = '#878e91',
    red = '#ce1126',
    redTransparent = 'rgba(206, 17, 38, 0.05)',
    lightRed = '#fccfcf',
    yellow = '#fbf5b4',
    yellowTransparent = 'rgba(251, 245, 180, 0.3)',
    whiteTranslucent = 'rgba(244, 244, 244, 0.9)';

  const iframeStyle = _exports.iframeStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    border: 'none',
    'z-index': 2147483647 - 1 // below the compile error overlay
  };

  const overlayStyle = _exports.overlayStyle = {
    width: '100%',
    height: '100%',
    'box-sizing': 'border-box',
    'text-align': 'center',
    'background-color': whiteTranslucent,
    '-webkit-font-smoothing': 'antialiased',
    '-moz-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    'font-smoothing': 'antialiased',
    'text-rendering': 'optimizeLegibility',
    'font-smooth': 'always',
    '-webkit-tap-highlight-color': 'transparent',
    '-webkit-touch-callout': 'none'
  };

  const containerStyle = _exports.containerStyle = {
    position: 'relative',
    display: 'inline-flex',
    'flex-direction': 'column',
    height: '100%',
    width: '1024px',
    'max-width': '100%',
    'overflow-x': 'hidden',
    'overflow-y': 'auto',
    padding: '0.5rem',
    'box-sizing': 'border-box',
    'text-align': 'left',
    'font-family': 'Consolas, Menlo, monospace',
    'font-size': '11px',
    'white-space': 'pre-wrap',
    'word-break': 'break-word',
    'line-height': 1.5,
    color: black
  };

  const hintsStyle = _exports.hintsStyle = {
    color: darkGray
  };

  const hintStyle = _exports.hintStyle = {
    padding: '0.5em 1em',
    cursor: 'pointer'
  };

  const closeButtonStyle = _exports.closeButtonStyle = {
    color: black,
    'line-height': '1rem',
    'font-size': '1.5rem',
    padding: '1rem',
    cursor: 'pointer',
    position: 'absolute',
    right: 0,
    top: 0
  };

  const additionalChildStyle = _exports.additionalChildStyle = {
    'margin-bottom': '0.5rem'
  };

  const headerStyle = _exports.headerStyle = {
    'font-size': '2em',
    'font-family': 'Roboto, sans-serif',
    color: red,
    'white-space': 'pre-wrap',
    // Top bottom margin spaces header
    // Right margin revents overlap with close button
    margin: '0 2rem 0.5rem 0',
    flex: '0 0 auto',
    'max-height': '50%',
    overflow: 'auto',
    'font-weight': '400'
  };

  const messageHeaderStyle = _exports.messageHeaderStyle = _objectSpread(_objectSpread({},
  headerStyle), {}, {
    color: 'black',
    'font-weight': '300',
    'font-size': '1.5em',
    'font-family': 'Consolas, Menlo, monospace',
    margin: 0,
    'padding-bottom': '1rem',
    'border-bottom': '1px solid #ddd' });


  const originalHeaderStyle = _exports.originalHeaderStyle = {
    color: 'rgba(0, 0, 0, 0.7)',
    'font-size': '.75em',
    'padding-top': '1rem',
    'padding-bottom': '.5rem'
  };

  const originalMessageHeaderStyle = _exports.originalMessageHeaderStyle = {
    color: 'black',
    'font-size': '.875em',
    'font-family': 'Consolas, Menlo, monospace',
    margin: 0,
    'white-space': 'pre-wrap',
    overflow: 'auto'
  };

  const functionNameStyle = _exports.functionNameStyle = {};

  const linkStyle = _exports.linkStyle = {
    'font-size': '0.9em',
    'margin-bottom': '0.9em'
  };

  const anchorStyle = _exports.anchorStyle = {
    'text-decoration': 'none',
    color: darkGray
  };

  const traceStyle = _exports.traceStyle = {
    'font-size': '1em',
    flex: '0 1 auto',
    'min-height': '0px',
    overflow: 'auto',
    'padding-top': '1rem'
  };

  const depStyle = _exports.depStyle = {};

  const primaryErrorStyle = _exports.primaryErrorStyle = {
    'background-color': lightRed
  };

  const secondaryErrorStyle = _exports.secondaryErrorStyle = {
    'background-color': yellow
  };

  const omittedFramesCollapsedStyle = _exports.omittedFramesCollapsedStyle = {
    color: black,
    cursor: 'pointer',
    'margin-bottom': '1.5em'
  };

  const omittedFramesExpandedStyle = _exports.omittedFramesExpandedStyle = {
    color: black,
    cursor: 'pointer',
    'margin-bottom': '0.6em'
  };

  const _preStyle = {
    display: 'block',
    padding: '0.5em',
    'margin-top': '0.5em',
    'margin-bottom': '0.5em',
    'overflow-x': 'auto',
    'white-space': 'pre-wrap',
    'border-radius': '0.25rem'
  };
  const primaryPreStyle = _exports.primaryPreStyle = Object.assign({}, _preStyle, {
    'background-color': redTransparent
  });
  const secondaryPreStyle = _exports.secondaryPreStyle = Object.assign({}, _preStyle, {
    'background-color': yellowTransparent
  });

  const toggleStyle = _exports.toggleStyle = {
    'margin-bottom': '1.5em',
    color: darkGray,
    cursor: 'pointer'
  };

  const codeStyle = _exports.codeStyle = {
    'font-family': 'Consolas, Menlo, monospace'
  };

  const hiddenStyle = _exports.hiddenStyle = {
    display: 'none'
  };

  const groupStyle = _exports.groupStyle = {
    'margin-right': '1em'
  };

  const _groupElemStyle = {
    'background-color': redTransparent,
    color: red,
    border: 'none',
    'border-radius': '4px',
    padding: '3px 6px',
    cursor: 'pointer'
  };

  const groupElemLeft = _exports.groupElemLeft = Object.assign({}, _groupElemStyle, {
    'border-top-right-radius': '0px',
    'border-bottom-right-radius': '0px',
    'margin-right': '1px'
  });

  const groupElemRight = _exports.groupElemRight = Object.assign({}, _groupElemStyle, {
    'border-top-left-radius': '0px',
    'border-bottom-left-radius': '0px'
  });

  const footerStyle = _exports.footerStyle = {
    'font-family': 'sans-serif',
    color: darkGray,
    'margin-top': '0.5rem',
    flex: '0 0 auto'
  };

  const suggestionsContainerStyle = _exports.suggestionsContainerStyle = {
    'font-family': 'Roboto, sans-serif',
    'padding-top': '1rem'
  };

  const suggestionsTitleStyle = _exports.suggestionsTitleStyle = {
    'font-size': '1rem',
    'font-weight': '300'
  };

  const suggestionsButtonStyle = _exports.suggestionsButtonStyle = {
    transition: '0.3s ease all',
    'background-color': '#B6E7FF',
    color: 'rgba(0, 0, 0, 0.6)',
    padding: '0.5rem',
    margin: '.5rem 0',
    'margin-bottom': '.5rem',
    'font-size': '.75rem',
    'border-radius': '4px',
    'margin-right': '.5rem',
    border: '1px solid #6CAEDD',
    cursor: 'pointer'
  };});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/utils/dom/consumeEvent.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.consumeEvent = consumeEvent; /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */


  function consumeEvent(e) {
    e.preventDefault();
    if (typeof e.target.blur === 'function') {
      e.target.blur();
    }
  }});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/utils/dom/css.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.applyStyles = applyStyles;_exports.getHead = getHead;_exports.injectCss = injectCss;_exports.removeCss = removeCss; /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */


  let injectedCount = 0;
  const injectedCache = {};

  function getHead(document) {
    return document.head || document.getElementsByTagName('head')[0];
  }

  function injectCss(document, css) {
    const head = getHead(document);
    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);

    injectedCache[++injectedCount] = style;
    return injectedCount;
  }

  function removeCss(document, ref) {
    if (injectedCache[ref] == null) {
      return;
    }
    const head = getHead(document);
    head.removeChild(injectedCache[ref]);
    delete injectedCache[ref];
  }

  function applyStyles(element, styles) {
    element.setAttribute('style', '');
    for (const key in styles) {
      if (!styles.hasOwnProperty(key)) {
        continue;
      }
      // $FlowFixMe
      element.style[key] = styles[key];
    }
  }});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/utils/dom/enableTabClick.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.enableTabClick = enableTabClick; /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */


  function enableTabClick(node) {
    node.setAttribute('tabindex', '0');
    node.addEventListener('keydown', function (e) {const
        key = e.key,which = e.which,keyCode = e.keyCode;
      if (key === 'Enter' || which === 13 || keyCode === 13) {
        e.preventDefault();
        if (typeof e.target.click === 'function') {
          e.target.click();
        }
      }
    });
  }});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/utils/errorRegister.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/react-error-overlay/utils/parser.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/mapper.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/unmapper.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _parser, _mapper, _unmapper) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.consume = consume;_exports.drain = drain;_exports.getErrorRecord = getErrorRecord; /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */














  const recorded = [];

  let errorsConsumed = 0;

  function consume(
  error)


  {let unhandledRejection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;let contextSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
    const parsedFrames = (0, _parser.parse)(error);
    let enhancedFramesPromise;
    if (error.__unmap_source) {
      enhancedFramesPromise = (0, _unmapper.unmap)(
        // $FlowFixMe
        error.__unmap_source,
        parsedFrames,
        contextSize
      );
    } else {
      enhancedFramesPromise = (0, _mapper.map)(parsedFrames, contextSize);
    }
    return enhancedFramesPromise.then((enhancedFrames) => {
      // // We comment this out, because we always want to show errors
      // if (
      //   enhancedFrames
      //     .map(f => f._originalFileName)
      //     .filter(f => f != null && f.indexOf('node_modules') === -1).length === 0
      // ) {
      //   return null;
      // }
      enhancedFrames = enhancedFrames.filter(
        (_ref) => {let functionName = _ref.functionName;return (
            functionName == null ||
            functionName.indexOf('__stack_frame_overlay_proxy_console__') === -1);}
      );
      recorded[++errorsConsumed] = {
        error,
        unhandledRejection,
        contextSize,
        enhancedFrames
      };
      return errorsConsumed;
    });
  }

  function getErrorRecord(ref) {
    return recorded[ref];
  }

  function drain() {
    // $FlowFixMe
    const keys = Object.keys(recorded);
    for (let index = 0; index < keys.length; ++index) {
      delete recorded[keys[index]];
    }
  }});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/utils/getLinesAround.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/react-error-overlay/utils/stack-frame.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _stackFrame) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.default = void 0;_exports.getLinesAround = getLinesAround; /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */




  /**
   *
   * @param {number} line The line number to provide context around.
   * @param {number} count The number of lines you'd like for context.
   * @param {string[] | string} lines The source code.
   */
  function getLinesAround(
  line,
  count,
  lines)
  {
    if (typeof lines === 'string') {
      lines = lines.split('\n');
    }
    const result = [];
    for (
    let index = Math.max(0, line - 1 - count);
    index <= Math.min(lines.length - 1, line - 1 + count);
    ++index)
    {
      result.push(new _stackFrame.ScriptLine(index + 1, lines[index], index === line - 1));
    }
    return result;
  }var _default = _exports.default =


  getLinesAround;});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/utils/getSourceMap.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__("../../node_modules/@babel/runtime/helpers/defineProperty.js"), __webpack_require__("../../node_modules/source-map/source-map.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _asyncToGenerator2, _defineProperty2, _sourceMap) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.default = _exports.SourceMap = void 0;_exports.extractSourceMapUrl = extractSourceMapUrl;_exports.getSourceMap = getSourceMap;_asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);_defineProperty2 = _interopRequireDefault(_defineProperty2); /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */




  /**
   * A wrapped instance of a <code>{@link https://github.com/mozilla/source-map SourceMapConsumer}</code>.
   *
   * This exposes methods which will be indifferent to changes made in <code>{@link https://github.com/mozilla/source-map source-map}</code>.
   */
  class SourceMap {


    constructor(sourceMap) {(0, _defineProperty2.default)(this, "__source_map", void 0);
      this.__source_map = sourceMap;
    }

    /**
     * Returns the original code position for a generated code position.
     * @param {number} line The line of the generated code position.
     * @param {number} column The column of the generated code position.
     */
    getOriginalPosition(
    line,
    column)
    {const _this$__source_map$or =




        this.__source_map.originalPositionFor({
          line,
          column
        }),l = _this$__source_map$or.line,c = _this$__source_map$or.column,s = _this$__source_map$or.source;
      return { line: l, column: c, source: s };
    }

    /**
     * Returns the generated code position for an original position.
     * @param {string} source The source file of the original code position.
     * @param {number} line The line of the original code position.
     * @param {number} column The column of the original code position.
     */
    getGeneratedPosition(
    source,
    line,
    column)
    {const _this$__source_map$ge =
        this.__source_map.generatedPositionFor({
          source,
          line,
          column
        }),l = _this$__source_map$ge.line,c = _this$__source_map$ge.column;
      return {
        line: l,
        column: c
      };
    }

    /**
     * Returns the code for a given source file name.
     * @param {string} sourceName The name of the source file.
     */
    getSource(sourceName) {
      return this.__source_map.sourceContentFor(sourceName);
    }

    getSources() {
      return this.__source_map.sources;
    }
  }_exports.SourceMap = SourceMap;

  function extractSourceMapUrl(fileUri, fileContents) {
    const regex = /\/\/[#@] ?sourceMappingURL=([^\s'"]+)\s*$/gm;
    let match = null;
    for (;;) {
      let next = regex.exec(fileContents);
      if (next == null) {
        break;
      }
      match = next;
    }
    if (!(match && match[1])) {
      return Promise.reject("Cannot find a source map directive for ".concat(fileUri, "."));
    }
    return Promise.resolve(match[1].toString());
  }

  /**
   * Returns an instance of <code>{@link SourceMap}</code> for a given fileUri and fileContents.
   * @param {string} fileUri The URI of the source file.
   * @param {string} fileContents The contents of the source file.
   */function
  getSourceMap(_x, _x2) {return _getSourceMap.apply(this, arguments);}function _getSourceMap() {_getSourceMap = (0, _asyncToGenerator2.default)(function* (
    fileUri,
    fileContents)
    {
      let sm = yield extractSourceMapUrl(fileUri, fileContents);
      if (sm.indexOf('data:') === 0) {
        const base64 = /^data:application\/json;([\w=:"-]+;)*base64,/;
        const match2 = sm.match(base64);
        if (!match2) {
          throw new Error(
            'Sorry, non-base64 inline source-map encoding is not supported.'
          );
        }
        sm = sm.substring(match2[0].length);
        sm = window.atob(sm);
        sm = JSON.parse(sm);
        return new SourceMap(new _sourceMap.SourceMapConsumer(sm));
      } else {
        const index = fileUri.lastIndexOf('/');
        const url = fileUri.substring(0, index + 1) + sm;
        const obj = yield fetch(url).then((res) => res.json());
        return new SourceMap(new _sourceMap.SourceMapConsumer(obj));
      }
    });return _getSourceMap.apply(this, arguments);}var _default = _exports.default =


  getSourceMap;});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/utils/getStackFrames.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/parser.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/mapper.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/unmapper.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _asyncToGenerator2, _parser, _mapper, _unmapper) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.getStackFrames = getStackFrames;_asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2); /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */function







  getStackFrames(_x) {return _getStackFrames.apply(this, arguments);}function _getStackFrames() {_getStackFrames = (0, _asyncToGenerator2.default)(function* (
    error)


    {let unhandledRejection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;let contextSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
      const parsedFrames = (0, _parser.parse)(error);
      let enhancedFrames;
      // $FlowFixMe
      if (error.__unmap_source) {
        enhancedFrames = yield (0, _unmapper.unmap)(
          // $FlowFixMe
          error.__unmap_source,
          parsedFrames,
          contextSize
        );
      } else {
        enhancedFrames = yield (0, _mapper.map)(parsedFrames, contextSize);
      }

      if (
      enhancedFrames.
      map((f) => f._originalFileName).
      filter((f) => f != null && f.indexOf('node_modules') === -1).length === 0)
      {
        return null;
      }

      return enhancedFrames.filter((_ref) => {let functionName = _ref.functionName;return (
          functionName == null || functionName.indexOf('__stack_frame_overlay_proxy_console__') === -1);}
      );
    });return _getStackFrames.apply(this, arguments);}});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/utils/isInternalFile.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.isInternalFile = isInternalFile; /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */


  function isInternalFile(sourceFileName, fileName) {
    return (
      sourceFileName == null ||
      sourceFileName === '' ||
      sourceFileName.indexOf('/~/') !== -1 ||
      sourceFileName.indexOf('/node_modules/') !== -1 ||
      sourceFileName.trim().indexOf(' ') !== -1 ||
      fileName == null ||
      fileName === '');

  }});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/utils/mapper.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__("./src/sandbox/compile.ts"), __webpack_require__("../../node_modules/settle-promise/lib/index.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/stack-frame.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/getSourceMap.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/getLinesAround.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _asyncToGenerator2, _compile, _settlePromise, _stackFrame, _getSourceMap, _getLinesAround) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.default = void 0;_exports.map = map;_asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);_stackFrame = _interopRequireDefault(_stackFrame); /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  // TODO change this







  /**
   * Enhances a set of <code>StackFrame</code>s with their original positions and code (when available).
   * @param {StackFrame[]} frames A set of <code>StackFrame</code>s which contain (generated) code positions.
   * @param {number} [contextLines=3] The number of lines to provide before and after the line specified in the <code>StackFrame</code>.
   */function
  map(_x) {return _map.apply(this, arguments);}function _map() {_map = (0, _asyncToGenerator2.default)(function* (
    frames)

    {let contextLines = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
      const cache = {};
      const files = [];
      frames.forEach((frame) => {const
        fileName = frame.fileName;
        if (fileName == null) {
          return;
        }
        if (files.indexOf(fileName) !== -1) {
          return;
        }
        files.push(fileName);
      });
      yield (0, _settlePromise.settle)(
        files.map( /*#__PURE__*/function () {var _ref = (0, _asyncToGenerator2.default)(function* (fileName) {
            const manager = (0, _compile.getCurrentManager)();
            if (manager != null && !fileName.startsWith('webpack')) {
              let transpiledModule;
              if (fileName.includes('?')) {
                transpiledModule = manager.getTranspiledModuleByHash(
                  fileName.split('?')[1]
                );
              } else {
                transpiledModule = yield manager.resolveTranspiledModule(
                  fileName.replace(location.origin, ''),
                  '/'
                );
              }

              if (transpiledModule) {
                const fileSource =
                transpiledModule.source && transpiledModule.source.compiledCode;

                const map = yield (0, _getSourceMap.getSourceMap)(fileName, fileSource);

                cache[fileName] = { fileSource, map };
              }
            }
          });return function (_x2) {return _ref.apply(this, arguments);};}())
      );
      return frames.map((frame) => {const
          functionName = frame.functionName,fileName = frame.fileName,lineNumber = frame.lineNumber,columnNumber = frame.columnNumber;const _ref2 =
          cache[fileName] || {},map = _ref2.map,fileSource = _ref2.fileSource;
        if (map == null || lineNumber == null) {
          return frame;
        }const _map$getOriginalPosit =
          map.getOriginalPosition(
            lineNumber,
            columnNumber
          ),source = _map$getOriginalPosit.source,line = _map$getOriginalPosit.line,column = _map$getOriginalPosit.column;
        const originalSource = source == null ? [] : map.getSource(source);
        return new _stackFrame.default(
          functionName,
          fileName,
          lineNumber,
          columnNumber,
          (0, _getLinesAround.getLinesAround)(lineNumber, contextLines, fileSource),
          functionName,
          source,
          line,
          column,
          (0, _getLinesAround.getLinesAround)(line, contextLines, originalSource)
        );
      });
    });return _map.apply(this, arguments);}var _default = _exports.default =


  map;});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/utils/parser.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/react-error-overlay/utils/stack-frame.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _stackFrame) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.default = void 0;_exports.parse = parseError;_stackFrame = _interopRequireDefault(_stackFrame); /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */




  const regexExtractLocation = /\(?(.+?)(?::(\d+))?(?::(\d+))?\)?$/;

  // $FlowFixMe
  function extractLocation(token) {
    return (
      regexExtractLocation.
      exec(token)
      // $FlowFixMe
      .slice(1).
      map((v) => {
        const p = Number(v);
        if (!isNaN(p)) {
          return p;
        }
        return v;
      }));

  }

  const regexValidFrame_Chrome = /^\s*(at|in)\s.+(:\d+)/;
  const regexValidFrame_FireFox = /(^|@)\S+:\d+|.+line\s+\d+\s+>\s+(eval|Function).+/;

  function parseStack(stack) {
    const frames = stack.
    filter(
      (e) => regexValidFrame_Chrome.test(e) || regexValidFrame_FireFox.test(e)
    ).
    map((e) => {
      if (regexValidFrame_FireFox.test(e)) {
        // Strip eval, we don't care about it
        let isEval = false;
        if (/ > (eval|Function)/.test(e)) {
          e = e.replace(
            / line (\d+)(?: > eval line \d+)* > (eval|Function):\d+:\d+/g,
            ':$1'
          );
          isEval = true;
        }
        const data = e.split(/[@]/g);
        const last = data.pop();
        return new _stackFrame.default(
          data.join('@') || (isEval ? 'eval' : null),
          ...extractLocation(last)
        );
      } else {
        // Strip eval, we don't care about it
        if (e.indexOf('(eval ') !== -1) {
          e = e.replace(/(\(eval at [^()]*)|(\),.*$)/g, '');
        }
        if (e.indexOf('(at ') !== -1) {
          e = e.replace(/\(at /, '(');
        }
        const data = e.trim().split(/\s+/g).slice(1);
        const last = data.pop();
        return new _stackFrame.default(data.join(' ') || null, ...extractLocation(last));
      }
    });
    return frames;
  }

  /**
   * Turns an <code>Error</code>, or similar object, into a set of <code>StackFrame</code>s.
   * @alias parse
   */
  function parseError(error) {
    if (error == null) {
      throw new Error('You cannot pass a null object.');
    }
    if (typeof error === 'string') {
      return parseStack(error.split('\n'));
    }
    if (Array.isArray(error)) {
      return parseStack(error);
    }
    if (typeof error.stack === 'string') {
      return parseStack(error.stack.split('\n'));
    }
    throw new Error('The error you provided does not contain a stack trace.');
  }var _default = _exports.default =


  parseError;});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/utils/stack-frame.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/defineProperty.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _defineProperty2) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.default = _exports.StackFrame = _exports.ScriptLine = void 0;_defineProperty2 = _interopRequireDefault(_defineProperty2); /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */



  /** A container holding a script line. */
  class ScriptLine {
    /** The line number of this line of source. */

    /** The content (or value) of this line of source. */

    /** Whether or not this line should be highlighted. Particularly useful for error reporting with context. */


    constructor(lineNumber, content) {let highlight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;(0, _defineProperty2.default)(this, "lineNumber", void 0);(0, _defineProperty2.default)(this, "content", void 0);(0, _defineProperty2.default)(this, "highlight", void 0);
      this.lineNumber = lineNumber;
      this.content = content;
      this.highlight = highlight;
    }
  }

  /**
   * A representation of a stack frame.
   */_exports.ScriptLine = ScriptLine;
  class StackFrame {













    constructor()










    {let functionName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;let fileName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;let lineNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;let columnNumber = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;let scriptCode = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;let sourceFunctionName = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;let sourceFileName = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;let sourceLineNumber = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;let sourceColumnNumber = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;let sourceScriptCode = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;(0, _defineProperty2.default)(this, "functionName", void 0);(0, _defineProperty2.default)(this, "fileName", void 0);(0, _defineProperty2.default)(this, "lineNumber", void 0);(0, _defineProperty2.default)(this, "columnNumber", void 0);(0, _defineProperty2.default)(this, "_originalFunctionName", void 0);(0, _defineProperty2.default)(this, "_originalFileName", void 0);(0, _defineProperty2.default)(this, "_originalLineNumber", void 0);(0, _defineProperty2.default)(this, "_originalColumnNumber", void 0);(0, _defineProperty2.default)(this, "_scriptCode", void 0);(0, _defineProperty2.default)(this, "_originalScriptCode", void 0);
      this.functionName = functionName;

      this.fileName = fileName;
      this.lineNumber = lineNumber;
      this.columnNumber = columnNumber;

      this._originalFunctionName = sourceFunctionName;
      this._originalFileName = sourceFileName;
      this._originalLineNumber = sourceLineNumber;
      this._originalColumnNumber = sourceColumnNumber;

      this._scriptCode = scriptCode;
      this._originalScriptCode = sourceScriptCode;
    }

    /**
     * Returns the name of this function.
     */
    getFunctionName() {
      return this.functionName;
    }

    /**
     * Returns the source of the frame.
     * This contains the file name, line number, and column number when available.
     */
    getSource() {
      let str = '';
      if (this.fileName != null) {
        str += this.fileName + ':';
      }
      if (this.lineNumber != null) {
        str += this.lineNumber + ':';
      }
      if (this.columnNumber != null) {
        str += this.columnNumber + ':';
      }
      return str.slice(0, -1);
    }

    /**
     * Returns a pretty version of this stack frame.
     */
    toString() {
      const f = this.getFunctionName();
      if (f == null) {
        return this.getSource();
      }
      return "".concat(f, " (").concat(this.getSource(), ")");
    }
  }_exports.StackFrame = StackFrame;var _default = _exports.default =


  StackFrame;});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/utils/unmapper.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/stack-frame.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/getSourceMap.js"), __webpack_require__("../sandbox-hooks/react-error-overlay/utils/getLinesAround.js"), __webpack_require__("../../node_modules/path-browserify/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _asyncToGenerator2, _stackFrame, _getSourceMap, _getLinesAround, _path) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.default = void 0;_exports.unmap = unmap;_asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);_stackFrame = _interopRequireDefault(_stackFrame);_path = _interopRequireDefault(_path); /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */







  function count(search, string) {
    // Count starts at -1 becuse a do-while loop always runs at least once
    let count = -1,
      index = -1;
    do {
      // First call or the while case evaluated true, meaning we have to make
      // count 0 or we found a character
      ++count;
      // Find the index of our search string, starting after the previous index
      index = string.indexOf(search, index + 1);
    } while (index !== -1);
    return count;
  }

  /**
   * Turns a set of mapped <code>StackFrame</code>s back into their generated code position and enhances them with code.
   * @param {string} fileUri The URI of the <code>bundle.js</code> file.
   * @param {StackFrame[]} frames A set of <code>StackFrame</code>s which are already mapped and missing their generated positions.
   * @param {number} [fileContents=3] The number of lines to provide before and after the line specified in the <code>StackFrame</code>.
   */function
  unmap(_x, _x2) {return _unmap.apply(this, arguments);}function _unmap() {_unmap = (0, _asyncToGenerator2.default)(function* (
    _fileUri,
    frames)

    {let contextLines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
      let fileContents = typeof _fileUri === 'object' ? _fileUri.contents : null;
      let fileUri = typeof _fileUri === 'object' ? _fileUri.uri : _fileUri;
      if (fileContents == null) {
        fileContents = yield fetch(fileUri).then((res) => res.text());
      }
      const map = yield (0, _getSourceMap.getSourceMap)(fileUri, fileContents);
      return frames.map((frame) => {const

          functionName =



          frame.functionName,lineNumber = frame.lineNumber,columnNumber = frame.columnNumber,_originalLineNumber = frame._originalLineNumber;
        if (_originalLineNumber != null) {
          return frame;
        }let
        fileName = frame.fileName;
        if (fileName) {
          fileName = _path.default.normalize(fileName);
        }
        if (fileName == null) {
          return frame;
        }
        const fN = fileName;
        const source = map.
        getSources().
        map((s) => s.replace(/[\\]+/g, '/')).
        filter((p) => {
          p = _path.default.normalize(p);
          const i = p.lastIndexOf(fN);
          return i !== -1 && i === p.length - fN.length;
        }).
        map((p) => ({
          token: p,
          seps: count(_path.default.sep, _path.default.normalize(p)),
          penalties: count('node_modules', p) + count('~', p)
        })).
        sort((a, b) => {
          const s = Math.sign(a.seps - b.seps);
          if (s !== 0) {
            return s;
          }
          return Math.sign(a.penalties - b.penalties);
        });
        if (source.length < 1 || lineNumber == null) {
          return new _stackFrame.default(
            null,
            null,
            null,
            null,
            null,
            functionName,
            fN,
            lineNumber,
            columnNumber,
            null
          );
        }
        const sourceT = source[0].token;const _map$getGeneratedPosi =
          map.getGeneratedPosition(
            sourceT,
            lineNumber,
            // $FlowFixMe
            columnNumber
          ),line = _map$getGeneratedPosi.line,column = _map$getGeneratedPosi.column;
        const originalSource = map.getSource(sourceT);
        return new _stackFrame.default(
          functionName,
          fileUri,
          line,
          column || null,
          (0, _getLinesAround.getLinesAround)(line, contextLines, fileContents || []),
          functionName,
          fN,
          lineNumber,
          columnNumber,
          (0, _getLinesAround.getLinesAround)(lineNumber, contextLines, originalSource)
        );
      });
    });return _unmap.apply(this, arguments);}var _default = _exports.default =


  unmap;});

/***/ }),

/***/ "../sandbox-hooks/react-error-overlay/utils/warnings.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.massage = massage; /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */




  function stripInlineStacktrace(message) {
    return message.
    split('\n').
    filter((line) => !line.match(/^\s*in/)).
    join('\n'); // "  in Foo"
  }

  function massage(
  warning,
  frames)
  {
    let message = stripInlineStacktrace(warning);

    // Reassemble the stack with full filenames provided by React
    let stack = '';
    let lastFilename;
    let lastLineNumber;
    for (let index = 0; index < frames.length; ++index) {const _frames$index =
        frames[index],fileName = _frames$index.fileName,lineNumber = _frames$index.lineNumber;
      if (fileName == null || lineNumber == null) {
        continue;
      }

      // TODO: instead, collapse them in the UI
      if (
      fileName === lastFilename &&
      typeof lineNumber === 'number' &&
      typeof lastLineNumber === 'number' &&
      Math.abs(lineNumber - lastLineNumber) < 3)
      {
        continue;
      }
      lastFilename = fileName;
      lastLineNumber = lineNumber;let

      name = frames[index].name;
      name = name || '(anonymous function)';
      stack += "in ".concat(name, " (at ").concat(fileName, ":").concat(lineNumber, ")\n");
    }

    return { message, stack };
  }});

/***/ }),

/***/ "../sandpack-core/lib/cache.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clearIndexedDBCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return saveCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteAPICache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ignoreNextCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return consumeCache; });
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var localforage_driver_memory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/localforage-driver-memory/_bundle/umd.js");
/* harmony import */ var localforage_driver_memory__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(localforage_driver_memory__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _codesandbox_common_lib_utils_debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../common/lib/utils/debug.js");
/* harmony import */ var _codesandbox_common_lib_utils_debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_codesandbox_common_lib_utils_debug__WEBPACK_IMPORTED_MODULE_2__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Responsible for consuming and syncing with the server/local cache



const debug = _codesandbox_common_lib_utils_debug__WEBPACK_IMPORTED_MODULE_2___default()('cs:compiler:cache');
const host = "/sandpack";
localforage__WEBPACK_IMPORTED_MODULE_0___default.a.defineDriver(localforage_driver_memory__WEBPACK_IMPORTED_MODULE_1__);
localforage__WEBPACK_IMPORTED_MODULE_0___default.a.setDriver([
    localforage__WEBPACK_IMPORTED_MODULE_0___default.a.INDEXEDDB,
    localforage__WEBPACK_IMPORTED_MODULE_0___default.a.LOCALSTORAGE,
    localforage__WEBPACK_IMPORTED_MODULE_0___default.a.WEBSQL,
    localforage_driver_memory__WEBPACK_IMPORTED_MODULE_1__["_driver"],
]);
const MAX_CACHE_SIZE = 1024 * 1024 * 20;
let APICacheUsed = false;
try {
    localforage__WEBPACK_IMPORTED_MODULE_0___default.a.config({
        name: 'CodeSandboxApp',
        storeName: 'sandboxes',
        description: 'Cached transpilations of the sandboxes, for faster initialization time.',
    });
    // Prewarm store
    localforage__WEBPACK_IMPORTED_MODULE_0___default.a.keys();
}
catch (e) {
    console.warn('Problems initializing IndexedDB store.');
    console.warn(e);
}
function shouldSaveOnlineCache(firstRun, changes) {
    if (!firstRun || changes > 0) {
        return false;
    }
    if (!window.__SANDBOX_DATA__) {
        return true;
    }
    return false;
}
function clearIndexedDBCache() {
    return localforage__WEBPACK_IMPORTED_MODULE_0___default.a.clear();
}
function saveCache(managerModuleToTranspile, manager, changes, firstRun) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!manager.id) {
            return Promise.resolve(false);
        }
        const managerState = Object.assign({}, (yield manager.serialize({
            entryPath: managerModuleToTranspile
                ? managerModuleToTranspile.path
                : null,
            optimizeForSize: true,
        })));
        try {
            if (false) {}
            yield localforage__WEBPACK_IMPORTED_MODULE_0___default.a.setItem(manager.id, managerState);
        }
        catch (e) {
            if (false) {}
            manager.clearCache();
        }
        if (shouldSaveOnlineCache(firstRun, changes)) {
            const stringifiedManagerState = JSON.stringify(managerState);
            if (stringifiedManagerState.length > MAX_CACHE_SIZE) {
                return Promise.resolve(false);
            }
            debug('Saving cache of ' +
                (stringifiedManagerState.length / 1024).toFixed(2) +
                'kb to CodeSandbox API');
            return window
                .fetch(`${host}/api/v1/sandboxes/${manager.id}/cache`, {
                method: 'POST',
                body: JSON.stringify({
                    version: manager.version,
                    data: stringifiedManagerState,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(x => x.json())
                .catch(e => {
                if (false) {}
            });
        }
        return Promise.resolve(false);
    });
}
function deleteAPICache(sandboxId, version) {
    if (APICacheUsed && !true) {
        debug('Deleting cache of API');
        return window
            .fetch(`${host}/api/v1/sandboxes/${sandboxId}/cache`, {
            method: 'DELETE',
            body: JSON.stringify({
                version,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(x => x.json())
            .catch(e => {
            console.error('Something went wrong while deleting cache.');
            console.error(e);
        });
    }
    return Promise.resolve(false);
}
function findCacheToUse(cache1, cache2) {
    if (!cache1 && !cache2) {
        return null;
    }
    if (cache1 && !cache2) {
        return cache1;
    }
    if (cache2 && !cache1) {
        return cache2;
    }
    return cache2.timestamp > cache1.timestamp ? cache2 : cache1;
}
function ignoreNextCache() {
    try {
        localStorage.setItem('ignoreCache', 'true');
    }
    catch (e) {
        console.warn(e);
    }
}
function consumeCache(manager) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!manager.id) {
            return false;
        }
        try {
            const shouldIgnoreCache = localStorage.getItem('ignoreCache') ||
                localStorage.getItem('ignoreCacheDev');
            if (shouldIgnoreCache) {
                localStorage.removeItem('ignoreCache');
                return false;
            }
            const cacheData = window.__SANDBOX_DATA__;
            const localData = yield localforage__WEBPACK_IMPORTED_MODULE_0___default.a.getItem(manager.id);
            const cache = findCacheToUse(cacheData && cacheData.data, localData);
            if (cache) {
                if (cache.version === manager.version) {
                    if (cache === localData) {
                        APICacheUsed = false;
                    }
                    else {
                        APICacheUsed = true;
                    }
                    debug(`Loading cache from ${cache === localData ? 'IndexedDB' : 'API'}`, cache);
                    yield manager.load(cache);
                    return true;
                }
            }
            return false;
        }
        catch (e) {
            console.warn('Problems consuming cache');
            console.warn(e);
            return false;
        }
    });
}


/***/ }),

/***/ "../sandpack-core/lib/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ manager_Manager; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ lib_transpiler["a" /* Transpiler */]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ preset_Preset; });

// UNUSED EXPORTS: TranspiledModule, getModuleUrl

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/lodash-es/values.js + 1 modules
var values = __webpack_require__("../../node_modules/lodash-es/values.js");

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/lodash-es/uniq.js + 9 modules
var uniq = __webpack_require__("../../node_modules/lodash-es/uniq.js");

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/lodash-es/flattenDeep.js
var flattenDeep = __webpack_require__("../../node_modules/lodash-es/flattenDeep.js");

// EXTERNAL MODULE: ../codesandbox-api/dist/codesandbox.es5.js
var codesandbox_es5 = __webpack_require__("../codesandbox-api/dist/codesandbox.es5.js");

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/standalone-packages/codesandbox-browserfs/dist/shims/fs.js
var fs = __webpack_require__("../../standalone-packages/codesandbox-browserfs/dist/shims/fs.js");
var fs_default = /*#__PURE__*/__webpack_require__.n(fs);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/gensync/index.js
var gensync = __webpack_require__("../../node_modules/gensync/index.js");
var gensync_default = /*#__PURE__*/__webpack_require__.n(gensync);

// EXTERNAL MODULE: ../common/lib/utils/path.js
var utils_path = __webpack_require__("../common/lib/utils/path.js");

// EXTERNAL MODULE: ../common/lib/utils/is-url.js
var is_url = __webpack_require__("../common/lib/utils/is-url.js");

// EXTERNAL MODULE: ../common/lib/utils/debug.js
var debug = __webpack_require__("../common/lib/utils/debug.js");
var debug_default = /*#__PURE__*/__webpack_require__.n(debug);

// EXTERNAL MODULE: ../common/lib/utils/global.js
var utils_global = __webpack_require__("../common/lib/utils/global.js");

// EXTERNAL MODULE: ../common/lib/utils/metrics.js
var metrics = __webpack_require__("../common/lib/utils/metrics.js");

// EXTERNAL MODULE: ../sandbox-hooks/errors/dependency-not-found-error.js
var dependency_not_found_error = __webpack_require__("../sandbox-hooks/errors/dependency-not-found-error.js");
var dependency_not_found_error_default = /*#__PURE__*/__webpack_require__.n(dependency_not_found_error);

// EXTERNAL MODULE: ../sandbox-hooks/errors/module-not-found-error.js
var module_not_found_error = __webpack_require__("../sandbox-hooks/errors/module-not-found-error.js");
var module_not_found_error_default = /*#__PURE__*/__webpack_require__.n(module_not_found_error);

// EXTERNAL MODULE: ../sandpack-core/lib/resolver/resolver.js + 7 modules
var resolver = __webpack_require__("../sandpack-core/lib/resolver/resolver.js");

// CONCATENATED MODULE: ../sandpack-core/lib/utils/benchmark.js
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const benchmark_debug = debug_default()('cs:compiler:benchmarks');
const printTranspilationMeasurements = (results) => {
    benchmark_debug(`Total ${results.total.toFixed(2)}ms`);
    benchmark_debug(`  Transpiling ${results.transpile.toFixed(2)}ms`);
    benchmark_debug(`  Resolving ${results.resolving.toFixed(2)}ms`);
    benchmark_debug(`  Converting ES ${results.esConverting.toFixed(2)}ms`);
};
function generateBenchmarkInterface(manager) {
    return {
        transpilation: (n = 10, path = '/src/index.js') => __awaiter(this, void 0, void 0, function* () {
            const module = yield manager.resolveModuleAsync({
                path,
            });
            const times = [];
            for (let i = 0; i < n; i++) {
                manager.clearTranspilationCache();
                manager.cachedPaths = {};
                Object(metrics["clearMeasurements"])();
                Object(metrics["measure"])('transpilation');
                // eslint-disable-next-line
                yield manager.transpileModules(module);
                const total = Object(metrics["endMeasure"])('transpilation', { silent: true });
                times.push({
                    total,
                    resolving: Object(metrics["getCumulativeMeasure"])('resolve', { silent: true }),
                    esConverting: Object(metrics["getCumulativeMeasure"])('esconvert', { silent: true }),
                    transpile: Object(metrics["getCumulativeMeasure"])('transpile', { silent: true }),
                });
            }
            const averageResults = times.reduce((result, entry) => ({
                total: result.total + entry.total / n,
                esConverting: result.esConverting + entry.esConverting / n,
                resolving: result.resolving + entry.resolving / n,
                transpile: result.transpile + entry.transpile / n,
            }), { total: 0, esConverting: 0, resolving: 0, transpile: 0 });
            printTranspilationMeasurements(averageResults);
        }),
        getLastTranspilationMeasurements() {
            printTranspilationMeasurements({
                total: Object(metrics["getMeasurements"])().transpilation,
                resolving: Object(metrics["getCumulativeMeasure"])('resolve', { silent: true }),
                esConverting: Object(metrics["getCumulativeMeasure"])('esconvert', { silent: true }),
                transpile: Object(metrics["getCumulativeMeasure"])('transpile', { silent: true }),
            });
        },
    };
}

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/@babel/runtime/helpers/interopRequireWildcard.js
var interopRequireWildcard = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
var interopRequireWildcard_default = /*#__PURE__*/__webpack_require__.n(interopRequireWildcard);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/hash-sum/hash-sum.js
var hash_sum = __webpack_require__("../../node_modules/hash-sum/hash-sum.js");
var hash_sum_default = /*#__PURE__*/__webpack_require__.n(hash_sum);

// CONCATENATED MODULE: ../sandpack-core/lib/transpiled-module/errors/module-error.js
// Babel bug workaround (https://github.com/babel/babel/issues/8061)
const ErrorClass = Error;
class ModuleError extends ErrorClass {
    constructor(module, err) {
        super();
        this.name = 'ModuleError';
        this.path = err.fileName || module.module.path;
        this.message = err.message;
        this.error = err;
        this.stack = err.stack;
    }
}

// CONCATENATED MODULE: ../sandpack-core/lib/transpiled-module/errors/module-warning.js
class ModuleWarning extends Error {
    constructor(module, warning) {
        super();
        this.name = 'ModuleWarning';
        this.path = warning.fileName || module.module.path;
        this.message = warning.message;
        this.warning = warning.message;
        this.lineNumber = warning.lineNumber;
        this.columnNumber = warning.columnNumber;
        this.severity = warning.severity || 'warning';
        this.source = warning.source;
    }
    serialize() {
        return {
            name: 'ModuleWarning',
            message: this.message,
            fileName: this.path,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            source: this.source,
            severity: this.severity,
        };
    }
}

// CONCATENATED MODULE: ../sandpack-core/lib/runner/dependency-resolver.js
// @ts-ignore

/**
 * Converts a dependency string to an actual dependency
 *
 * @param {string} dependencyPath
 * @param {Object} externals
 * @returns
 */
function getDependency(dependencyPath) {
    if (dependencyPath === 'codesandbox-api') {
        // eslint-disable-next-line
        return __webpack_require__("../codesandbox-api/dist/codesandbox.es5.js");
    }
    throw new dependency_not_found_error_default.a(dependencyPath);
}

// CONCATENATED MODULE: ../sandpack-core/lib/runner/utils/process.js
/* eslint-disable */
// from https://unpkg.com/process@0.11.10/browser.js
const process_process = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
let cachedSetTimeout;
let cachedClearTimeout;
let queue = [];
let draining = false;
let currentQueue;
let queueIndex = -1;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        }
        else {
            cachedSetTimeout = defaultSetTimout;
        }
    }
    catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        }
        else {
            cachedClearTimeout = defaultClearTimeout;
        }
    }
    catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        // normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) &&
        setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    }
    catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        }
        catch (e) {
            // eslint-disable-line no-shadow
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            // @ts-ignore
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        // normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) &&
        clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    }
    catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        }
        catch (e) {
            // eslint-disable-line no-shadow
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            // @ts-ignore
            return cachedClearTimeout.call(this, marker);
        }
    }
}
function drainQueue() {
    if (draining) {
        return;
    }
    // eslint-disable-next-line no-use-before-define
    const timeout = runTimeout(cleanUpNextTick);
    draining = true;
    let len = queue.length;
    while (len) {
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
function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    }
    else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}
// v8 likes predictible objects
function Item(fun, array) {
    // @ts-ignore
    this.fun = fun;
    // @ts-ignore
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process_process.nextTick = function (fun) {
    const args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (let i = 1; i < arguments.length; i++) {
            // eslint-disable-next-line prefer-rest-params
            args[i - 1] = arguments[i];
        }
    }
    // @ts-ignore
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};
process_process.title = 'browser';
process_process.browser = true;
process_process.env = {};
process_process.argv = [];
process_process.version = ''; // empty string to avoid regexp issues
process_process.versions = {};
function process_noop() { }
process_process.on = process_noop;
process_process.addListener = process_noop;
process_process.once = process_noop;
process_process.off = process_noop;
process_process.removeListener = process_noop;
process_process.removeAllListeners = process_noop;
process_process.emit = process_noop;
process_process.prependListener = process_noop;
process_process.prependOnceListener = process_noop;
process_process.listeners = function () {
    return [];
};
process_process.binding = function () {
    throw new Error('process.binding is not supported');
};
process_process.cwd = function () {
    return '/';
};
process_process.chdir = function () {
    throw new Error('process.chdir is not supported');
};
process_process.umask = function () {
    return 0;
};
function build(env) {
    process_process.env = Object.assign({ NODE_ENV: 'development' }, env);
    return process_process;
}

// CONCATENATED MODULE: ../sandpack-core/lib/runner/eval.js
/* eslint-disable no-eval */

const g = typeof window === 'undefined' ? self : window;
const hasGlobalDeclaration = /^const global/m;
/* eslint-disable no-unused-vars */
/* harmony default export */ var runner_eval = (function (code, require, module, env = {}, globals = {}, { asUMD = false } = {}) {
    const { exports } = module;
    const global = g;
    const process = build(env);
    // @ts-ignore
    g.global = global;
    const allGlobals = Object.assign({ require,
        module,
        exports,
        process,
        global }, globals);
    if (asUMD) {
        delete allGlobals.module;
        delete allGlobals.exports;
        delete allGlobals.global;
    }
    if (hasGlobalDeclaration.test(code)) {
        delete allGlobals.global;
    }
    const allGlobalKeys = Object.keys(allGlobals);
    const globalsCode = allGlobalKeys.length ? allGlobalKeys.join(', ') : '';
    const globalsValues = allGlobalKeys.map(k => allGlobals[k]);
    try {
        const newCode = `(function $csb$eval(` + globalsCode + `) {` + code + `\n})`;
        // @ts-ignore
        (0, eval)(newCode).apply(allGlobals.global, globalsValues);
        return module.exports;
    }
    catch (e) {
        let error = e;
        if (typeof e === 'string') {
            error = new Error(e);
        }
        error.isEvalError = true;
        throw error;
    }
});
/* eslint-enable no-unused-vars */

// CONCATENATED MODULE: ../sandpack-core/lib/transpiled-module/hmr.js
class HMR {
    constructor() {
        this.data = {};
        this.dirty = false;
        this.selfAccepted = false;
        this.invalidated = false;
    }
    callDisposeHandler() {
        if (this.disposeHandler) {
            this.data = {};
            this.disposeHandler(this.data);
            this.disposeHandler = undefined;
        }
    }
    callAcceptCallback() {
        if (this.callback) {
            this.callback();
        }
    }
    setAcceptCallback(callback) {
        this.callback = callback;
        this.setSelfAccepted(false);
    }
    setDisposeHandler(callback) {
        this.disposeHandler = callback;
    }
    setSelfAccepted(selfAccepted) {
        this.selfAccepted = selfAccepted;
        if (selfAccepted) {
            this.data = {};
        }
    }
    setType(type) {
        this.type = type;
    }
    setDirty(dirty) {
        this.dirty = dirty;
    }
    isDirty() {
        return this.dirty;
    }
    /**
     * Returns whether this module should reset the compilation of its parents
     */
    isHot() {
        return this.type === 'accept';
    }
    isDeclined(isEntry) {
        if (this.type === 'decline') {
            return true;
        }
        return !this.isHot() && isEntry;
    }
    /**
     * Setting the module to invalidated means that we MUST evaluate it again, which means
     * that we throw away its compilation and hmrConfig, and we're going to force a second evaluation
     * once this has been run.
     */
    setInvalidated(invalidated) {
        this.invalidated = invalidated;
    }
}

// CONCATENATED MODULE: ../sandpack-core/lib/transpiled-module/utils/query-path.js

const isFilePath = (path) => /^\.?\/.*/.test(path) || Object(is_url["isUrl"])(path);
const splitQueryFromPath = (path) => {
    if (path.includes('!') && !isFilePath(path)) {
        const parts = path.split('!');
        let modulePathIndex = [...parts]
            .reverse()
            .findIndex(v => isFilePath(v));
        if (modulePathIndex < 0) {
            modulePathIndex = parts.length - 1;
        }
        else {
            modulePathIndex = parts.length - modulePathIndex - 1;
        }
        const modulePath = parts.splice(modulePathIndex).join('!');
        return {
            queryPath: parts.join('!'),
            modulePath,
        };
    }
    if (path.includes('?')) {
        const queryPath = path.split('?');
        const query = queryPath.pop();
        return {
            queryPath: '?' + query,
            modulePath: queryPath.join('?'),
        };
    }
    return {
        queryPath: '',
        modulePath: path,
    };
};

// CONCATENATED MODULE: ../sandpack-core/lib/transpiled-module/module-url.js

function getModuleUrl(path) {
    if (Object(is_url["isUrl"])(path)) {
        return path;
    }
    return new URL(path, window.location.href).href;
}

// EXTERNAL MODULE: ../sandpack-core/lib/utils/delay.js
var delay = __webpack_require__("../sandpack-core/lib/utils/delay.js");

// CONCATENATED MODULE: ../sandpack-core/lib/transpiled-module/transpiled-module.js
var transpiled_module_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// eslint-disable-next-line max-classes-per-file














const transpiled_module_debug = debug_default()('cs:compiler:transpiled-module');
class ModuleSource {
    constructor(fileName, compiledCode, sourceMap, sourceEqualsCompiled = false) {
        this.fileName = fileName;
        this.compiledCode = compiledCode;
        this.sourceMap = sourceMap;
        this.sourceEqualsCompiled = sourceEqualsCompiled;
    }
}
class transpiled_module_TranspiledModule {
    /**
     * Create a new TranspiledModule, a transpiled module is a module that contains
     * all info for transpilation and compilation. Note that there can be multiple
     * transpiled modules for 1 module, since a same module can have different loaders
     * attached using queries.
     * @param {*} module
     * @param {*} query A webpack query, eg: "url-loader?mimetype=image/png"
     */
    constructor(module, query = '') {
        this.previousSource = null;
        this.source = null;
        this.compilation = null;
        this.isTestFile = false;
        /**
         * Set how this module handles HMR. The default is undefined, which means
         * that we handle the HMR like CodeSandbox does.
         */
        this.hmrConfig = null;
        this.hasMissingDependencies = false;
        this.createSourceForAsset = (name, content, sourceMap) => new ModuleSource(name, content, sourceMap);
        this.logWarnings = () => {
            if (this.warnings.length) {
                this.warnings.forEach(warning => {
                    console.warn(warning.message); // eslint-disable-line no-console
                    Object(codesandbox_es5["dispatch"])(codesandbox_es5["actions"].correction.show(warning.message, {
                        line: warning.lineNumber,
                        column: warning.columnNumber,
                        path: warning.path,
                        source: warning.source,
                        severity: warning.severity || 'warning',
                    }));
                });
            }
        };
        this.isCompilationCached = (globals) => {
            if (!this.compilation || !this.compilation.exports) {
                return false;
            }
            if (this.compilation.globals === globals) {
                return true;
            }
            return false;
        };
        this.module = module;
        this.query = query;
        this.errors = [];
        this.warnings = [];
        this.childModules = [];
        this.transpilationDependencies = new Set();
        this.dependencies = new Set();
        this.asyncDependencies = [];
        this.transpilationInitiators = new Set();
        this.initiators = new Set();
        this.isEntry = false;
        this.isTestFile = false;
        this.hash = hash_sum_default()(`${this.module.path}:${this.query}`);
    }
    getId() {
        return `${this.module.path}:${this.query}`;
    }
    dispose(manager) {
        if (this.hmrConfig) {
            // If this is a hot module we fully reload the application, same as Webpack v2.
            manager.markHardReload();
        }
        this.reset();
        // Reset parents
        this.initiators.forEach(tModule => {
            tModule.resetTranspilation();
        });
        // There are no other modules calling this module, so we run a function on
        // all transpilers that clears side effects if there are any. Example:
        // Remove CSS styles from the dom.
        manager.preset.getLoaders(this.module, manager, this.query).forEach(t => {
            if (t.transpiler.cleanModule) {
                t.transpiler.cleanModule(this.getLoaderContext(manager, t.options));
            }
        });
        manager.removeTranspiledModule(this);
    }
    reset() {
        // We don't reset the compilation if itself and its parents if HMR is
        // accepted for this module. We only mark it as changed so we can properly
        // handle the update in the evaluation.
        this.childModules.forEach(m => {
            m.reset();
        });
        this.childModules = [];
        this.resetTranspilation();
        this.setIsEntry(false);
        this.setIsTestFile(false);
    }
    resetTranspilation() {
        Array.from(this.transpilationInitiators)
            .filter(t => t.source)
            .forEach(dep => {
            dep.resetTranspilation();
        });
        this.previousSource = this.source;
        this.source = null;
        this.errors = [];
        this.warnings = [];
        Array.from(this.dependencies).forEach(t => {
            t.initiators.delete(this);
        });
        // Don't do it for transpilation dependencies, since those cannot be traced back since we also reset transpilation of them.
        this.dependencies.clear();
        this.transpilationDependencies.clear();
        this.asyncDependencies = [];
    }
    resetCompilation() {
        if (this.compilation) {
            this.compilation = null;
        }
        if (this.hmrConfig && this.hmrConfig.isHot()) {
            this.hmrConfig.setDirty(true);
        }
        else {
            Array.from(this.initiators)
                .filter(t => t.compilation)
                .forEach(initiator => {
                initiator.resetCompilation();
            });
            Array.from(this.transpilationInitiators)
                .filter(t => t.compilation)
                .forEach(dep => {
                dep.resetCompilation();
            });
            // If this is an entry we want all direct entries to be reset as well.
            // Entries generally have side effects
            if (this.isEntry) {
                Array.from(this.dependencies)
                    .filter(t => t.compilation && t.isEntry)
                    .forEach(dep => {
                    dep.resetCompilation();
                });
            }
        }
    }
    /**
     * Determines if this is a module that should be transpiled if updated. If this
     * is a transpilationDependency that's updated then it should not get transpiled, but the parent should.
     */
    shouldTranspile() {
        return (!this.source &&
            !this.isTestFile &&
            !(this.initiators.size === 0 && this.transpilationInitiators.size > 0));
    }
    addDependency(manager, depPath, options = {}, isTranspilationDep = false) {
        return transpiled_module_awaiter(this, void 0, void 0, function* () {
            if (depPath.startsWith('codesandbox-api')) {
                return;
            }
            try {
                const tModule = yield manager.resolveTranspiledModule(depPath, options && options.isAbsolute ? '/' : this.module.path);
                if (isTranspilationDep) {
                    this.transpilationDependencies.add(tModule);
                    tModule.transpilationInitiators.add(this);
                }
                else {
                    this.dependencies.add(tModule);
                    tModule.initiators.add(this);
                }
                if (options.isEntry) {
                    tModule.setIsEntry(true);
                }
            }
            catch (e) {
                if (e.type === 'module-not-found' && e.isDependency) {
                    const { queryPath } = splitQueryFromPath(depPath);
                    this.asyncDependencies.push(manager.downloadDependency(e.path, this, queryPath));
                }
                else {
                    // When a custom file resolver is given to the manager we will try
                    // to resolve using this file resolver. If that fails we will still
                    // mark the dependency as having missing deps.
                    if (manager.fileResolver) {
                        this.asyncDependencies.push(
                        // eslint-disable-next-line
                        new Promise((resolve) => transpiled_module_awaiter(this, void 0, void 0, function* () {
                            try {
                                const tModule = yield manager.resolveTranspiledModule(depPath, options && options.isAbsolute ? '/' : this.module.path, undefined);
                                if (isTranspilationDep) {
                                    this.transpilationDependencies.add(tModule);
                                    tModule.transpilationInitiators.add(this);
                                }
                                else {
                                    this.dependencies.add(tModule);
                                    tModule.initiators.add(this);
                                }
                                if (options.isEntry) {
                                    tModule.setIsEntry(true);
                                }
                                resolve(tModule);
                            }
                            catch (err) {
                                if (false) {}
                                this.hasMissingDependencies = true;
                            }
                        })));
                        return;
                    }
                    // Don't throw the error, we want to throw this error during evaluation
                    // so we get the correct line as error
                    // ... Thank you so much for this younger Ives, you saved me here.
                    if (false) {}
                    this.hasMissingDependencies = true;
                }
            }
        });
    }
    update(module) {
        if (this.module.path !== module.path || this.module.code !== module.code) {
            this.module = module;
            this.resetTranspilation();
        }
        return this;
    }
    getLoaderContext(manager, transpilerOptions = {}) {
        return {
            emitWarning: warning => {
                this.warnings.push(new ModuleWarning(this, warning));
            },
            emitError: error => {
                this.errors.push(new ModuleError(this, error));
            },
            emitModule: (path, code, directoryPath = utils_path["dirname"](this.module.path), overwrite = true, isChild = true) => {
                const queryPath = path.split('!');
                // pop() mutates queryPath, queryPath is now just the loaders
                const modulePath = queryPath.pop();
                const moduleCopy = {
                    path: utils_path["join"](directoryPath, modulePath),
                    parent: this.module,
                    code,
                };
                let transpiledModule;
                if (overwrite) {
                    try {
                        transpiledModule = manager.getTranspiledModule(moduleCopy, queryPath.join('!'));
                        transpiledModule.update(moduleCopy);
                    }
                    catch (e) {
                        /* Nothing is here, just continue */
                    }
                }
                transpiledModule =
                    transpiledModule ||
                        manager.addTranspiledModule(moduleCopy, queryPath.join('!'));
                if (isChild) {
                    this.childModules.push(transpiledModule);
                }
                this.dependencies.add(transpiledModule);
                transpiledModule.initiators.add(this);
                return transpiledModule;
            },
            // Add an explicit transpilation dependency, this is needed for loaders
            // that include the source of another file by themselves, we need to
            // force transpilation to rebuild the file
            addTranspilationDependency: (depPath, options) => this.addDependency(manager, depPath, options, true),
            addDependency: (depPath, options = {}) => this.addDependency(manager, depPath, options),
            addDependenciesInDirectory: (folderPath, options = {}) => {
                const tModules = manager.resolveTranspiledModulesInDirectory(folderPath, options && options.isAbsolute ? '/' : this.module.path);
                tModules.forEach(tModule => {
                    this.dependencies.add(tModule);
                    tModule.initiators.add(this);
                    if (options.isEntry) {
                        tModule.setIsEntry(true);
                    }
                });
            },
            resolveTranspiledModule: (depPath, options = {}) => manager.resolveTranspiledModuleSync(depPath, options.isAbsolute ? '/' : this.module.path, options.ignoredExtensions),
            resolveTranspiledModuleAsync: (depPath, options = {}) => manager.resolveTranspiledModuleAsync(depPath, options.isAbsolute ? undefined : this, options.ignoredExtensions),
            getModules: () => manager.getModules(),
            options: Object.assign({ context: utils_path["dirname"](this.module.path), configurations: manager.configurations }, transpilerOptions),
            webpack: true,
            sourceMap: true,
            target: 'web',
            _module: this,
            path: this.module.path,
            url: this.module.url ? this.module.url : getModuleUrl(this.module.path),
            template: manager.preset.name,
            remainingRequests: '',
            sandboxId: manager.id,
            resourceQuery: this.query,
            getLoaderQuery: (module) => manager.preset.getQuery(module, manager),
        };
    }
    /**
     * Mark the transpiled module as entry (or not), this is needed to let the
     * cleanup know that this module can have no initiators, but is still required.
     * @param {*} isEntry
     */
    setIsEntry(isEntry) {
        this.isEntry = isEntry;
    }
    /**
     * Mark if this is a test file. If this is a test file we know that we don't
     * need to do any refresh or fixing when an error is thrown by the module. It's
     * not a vital module after all.
     */
    setIsTestFile(isTestFile) {
        this.isTestFile = isTestFile;
    }
    /**
     * Transpile the module, it takes in all loaders from the default loaders +
     * query string and passes the result from loader to loader. During transpilation
     * dependencies can be added, these dependencies will be transpiled concurrently
     * after the initial transpilation finished.
     * @param {*} manager
     */
    _transpile(manager) {
        return transpiled_module_awaiter(this, void 0, void 0, function* () {
            this.hasMissingDependencies = false;
            // Remove this module from the initiators of old deps, so we can populate a
            // fresh cache
            this.dependencies.forEach(tModule => {
                tModule.initiators.delete(this);
            });
            this.transpilationDependencies.forEach(tModule => {
                tModule.transpilationInitiators.delete(this);
            });
            this.childModules.forEach(tModule => {
                tModule.dispose(manager);
            });
            this.dependencies.clear();
            this.transpilationDependencies.clear();
            this.childModules.length = 0;
            this.errors = [];
            this.warnings = [];
            let code = this.module.code || '';
            let finalSourceMap = null;
            const { requires } = this.module;
            if (requires != null && this.query === '') {
                // We now know that this has been transpiled on the server, so we shortcut
                const loaderContext = this.getLoaderContext(manager, {});
                // These are precomputed requires, for npm dependencies
                yield Promise.all(requires.map(r => {
                    if (r.indexOf('glob:') === 0) {
                        const reGlob = r.replace('glob:', '');
                        loaderContext.addDependenciesInDirectory(reGlob);
                        return Promise.resolve();
                    }
                    return loaderContext.addDependency(r);
                }));
                // eslint-disable-next-line
                code = this.module.code;
            }
            else {
                const transpilers = manager.preset.getLoaders(this.module, manager, this.query);
                for (let i = 0; i < transpilers.length; i += 1) {
                    const transpilerConfig = transpilers[i];
                    const loaderContext = this.getLoaderContext(manager, transpilerConfig.options || {});
                    loaderContext.remainingRequests = transpilers
                        .slice(i + 1)
                        .map(transpiler => transpiler.transpiler.name)
                        .concat([this.module.path])
                        .join('!');
                    const measureKey = `transpile-${transpilerConfig.transpiler.name}-${this.getId()}`;
                    try {
                        Object(metrics["measure"])(measureKey);
                        const { transpiledCode, sourceMap,
                        // eslint-disable-next-line no-await-in-loop
                         } = yield transpilerConfig.transpiler.transpile(code, loaderContext);
                        Object(metrics["endMeasure"])(measureKey, { silent: true });
                        if (this.errors.length) {
                            throw this.errors[0];
                        }
                        code = transpiledCode;
                        finalSourceMap = sourceMap;
                    }
                    catch (e) {
                        e.fileName = loaderContext.path;
                        e.tModule = this;
                        this.resetTranspilation();
                        // Compilation should also be reset, since the code will be different now
                        // we don't have a transpilation.
                        this.resetCompilation();
                        manager.clearCache();
                        throw e;
                    }
                }
                this.logWarnings();
            }
            this.source = new ModuleSource(this.module.path, code, finalSourceMap, code === this.module.code);
            if (this.previousSource &&
                this.previousSource.compiledCode !== this.source.compiledCode) {
                const hasHMR = manager.preset
                    .getLoaders(this.module, manager, this.query)
                    .some(t => t.transpiler.HMREnabled == null ? true : t.transpiler.HMREnabled);
                if (!hasHMR) {
                    manager.markHardReload();
                }
                else {
                    this.resetCompilation();
                }
            }
            yield Promise.all(this.asyncDependencies.map((p) => transpiled_module_awaiter(this, void 0, void 0, function* () {
                try {
                    const tModule = yield p;
                    this.dependencies.add(tModule);
                    tModule.initiators.add(this);
                }
                catch (e) {
                    /* let this handle at evaluation */
                }
            })));
            this.asyncDependencies = [];
            yield Promise.all([
                ...Array.from(this.transpilationInitiators).map(t => t.transpile(manager)),
                ...Array.from(this.dependencies).map(t => t.transpile(manager)),
            ]);
            return this;
        });
    }
    transpile(manager) {
        // TODO: Rework this into
        // - A queue that does code transpilation per module
        // - This function adds this module and all it's dependencies to that queue
        // - await all the transpilations of this queue and returning when it's all done
        if (this.source) {
            return Promise.resolve(this);
        }
        const id = this.getId();
        if (manager.transpileJobs[id]) {
            if (manager.transpileJobs[id] === true) {
                // Is currently being transpiled, and the promise hasn't been set yet
                // because it is working on executing the promise. This rare case only
                // happens when we have a dependency loop, which could result in a
                // StackTraceOverflow. Dependency loop: A -> B -> C -> A -> B -> C
                // eslint-disable-next-line no-async-promise-executor
                return new Promise((resolve, reject) => transpiled_module_awaiter(this, void 0, void 0, function* () {
                    while (!this.source && manager.transpileJobs[id] === true) {
                        // eslint-disable-next-line
                        yield Object(delay["a" /* default */])(10);
                    }
                    const foundTranspileJob = manager.transpileJobs[id];
                    if (foundTranspileJob !== true) {
                        try {
                            const result = yield foundTranspileJob;
                            resolve(result);
                        }
                        catch (err) {
                            reject(err);
                        }
                    }
                    else {
                        resolve(this);
                    }
                }));
            }
            return manager.transpileJobs[id];
        }
        manager.transpileJobs[id] = true;
        // eslint-disable-next-line
        return (manager.transpileJobs[id] = this._transpile(manager)).finally(() => {
            delete manager.transpileJobs[id];
        });
    }
    /** Transpile current module and ensure the surrounding tree (dependencies and initiators) are also transpiled */
    transpileTree(manager) {
        return transpiled_module_awaiter(this, void 0, void 0, function* () {
            yield this.transpile(manager);
            yield manager.verifyTreeTranspiled();
            return this;
        });
    }
    evaluate(manager, { asUMD = false, force = false, globals, } = {}, initiator) {
        // empty module
        if (this.module.path === '/node_modules/empty/index.js') {
            return {};
        }
        // Just let the browser reload...
        if (manager.isReloading) {
            return {};
        }
        if (this.source == null) {
            if (this.module.path.startsWith('/node_modules') &&
                !this.module.path.endsWith('.vue')) {
                if (false) {}
                const code = this.module.path.endsWith('.json')
                    ? `module.exports = JSON.parse(${JSON.stringify(this.module.code)})`
                    : this.module.code;
                this.source = new ModuleSource(this.module.path, code, null);
                if (initiator) {
                    initiator.dependencies.add(this);
                    this.initiators.add(initiator);
                }
            }
            else {
                // This scenario only happens when we are in an inconsistent state, the quickest way to solve
                // this state is to just hard reload everything.
                manager.clearCache();
                throw new Error(`${this.getId()} hasn't been transpiled yet.`);
            }
        }
        const localModule = this.module;
        if (manager.webpackHMR) {
            if (!this.compilation) {
                const shouldReloadPage = this.hmrConfig
                    ? this.hmrConfig.isDeclined(this.isEntry)
                    : this.isEntry && !this.isTestFile;
                if (shouldReloadPage) {
                    if (manager.isFirstLoad) {
                        // We're in a reload loop! Ignore all caches!
                        manager.isReloading = true;
                        manager.clearCache();
                        manager.deleteAPICache().then(() => {
                            manager.reload();
                        });
                    }
                    else {
                        manager.reload();
                    }
                    return {};
                }
            }
            else if (!this.isTestFile &&
                (!this.hmrConfig || !this.hmrConfig.isDirty())) {
                return this.compilation.exports;
            }
        }
        else if (this.isCompilationCached(globals) &&
            !this.isEntry &&
            this.compilation) {
            return this.compilation.exports;
        }
        if (this.hmrConfig) {
            /* eslint-disable no-param-reassign */
            manager.setHmrStatus('dispose');
            // Call module.hot.dispose handler
            // https://webpack.js.org/api/hot-module-replacement/#dispose-or-adddisposehandler-
            this.hmrConfig.callDisposeHandler();
            manager.setHmrStatus('idle');
            /* eslint-enable */
        }
        const hotData = this.hmrConfig ? this.hmrConfig.data : undefined;
        this.compilation =
            this.compilation ||
                {
                    id: this.getId(),
                    exports: {},
                    globals,
                    hot: {
                        accept: (path, cb) => {
                            if (typeof path === 'undefined' ||
                                (typeof path !== 'string' && !Array.isArray(path))) {
                                // Self mark hot
                                this.hmrConfig = this.hmrConfig || new HMR();
                                if (this.hmrConfig) {
                                    const { hmrConfig } = this;
                                    hmrConfig.setType('accept');
                                    hmrConfig.setSelfAccepted(true);
                                }
                            }
                            else {
                                const paths = typeof path === 'string' ? [path] : path;
                                paths.forEach((p) => transpiled_module_awaiter(this, void 0, void 0, function* () {
                                    const tModule = yield manager.resolveTranspiledModule(p, this.module.path);
                                    tModule.hmrConfig = tModule.hmrConfig || new HMR();
                                    const { hmrConfig } = tModule;
                                    hmrConfig.setType('accept');
                                    hmrConfig.setAcceptCallback(cb);
                                }));
                            }
                            manager.enableWebpackHMR();
                        },
                        decline: (path) => {
                            if (typeof path === 'undefined') {
                                this.hmrConfig = this.hmrConfig || new HMR();
                                this.hmrConfig.setType('decline');
                                this.resetCompilation();
                            }
                            else {
                                const paths = typeof path === 'string' ? [path] : path;
                                paths.forEach((p) => transpiled_module_awaiter(this, void 0, void 0, function* () {
                                    const tModule = yield manager.resolveTranspiledModule(p, this.module.path);
                                    tModule.hmrConfig = tModule.hmrConfig || new HMR();
                                    tModule.hmrConfig.setType('decline');
                                    tModule.resetCompilation();
                                }));
                            }
                            manager.enableWebpackHMR();
                        },
                        dispose: (cb) => {
                            this.hmrConfig = this.hmrConfig || new HMR();
                            this.hmrConfig.setDisposeHandler(cb);
                        },
                        invalidate: () => {
                            this.hmrConfig = this.hmrConfig || new HMR();
                            // We have to bubble up, so reset compilation of parents
                            Array.from(this.initiators)
                                .filter(t => t.compilation)
                                .forEach(dep => {
                                dep.resetCompilation();
                            });
                            this.hmrConfig.setInvalidated(true);
                        },
                        data: hotData,
                        status: () => manager.hmrStatus,
                        addStatusHandler: manager.addStatusHandler,
                        removeStatusHandler: manager.removeStatusHandler,
                    },
                };
        if (this.compilation.hot && hotData) {
            this.compilation.hot.data = hotData;
        }
        const transpiledModule = this;
        try {
            // eslint-disable-next-line no-inner-declarations
            function require(path) {
                if (path === '') {
                    throw new Error('Cannot import an empty path');
                }
                const usedPath = manager.getPresetAliasedPath(path);
                const bfsModule = BrowserFS.BFSRequire(usedPath);
                if (path === 'os') {
                    const os = require('os-browserify');
                    os.homedir = () => '/home/sandbox';
                    return os;
                }
                if (bfsModule) {
                    return bfsModule;
                }
                if (path === 'module') {
                    return class NodeModule {
                        constructor() {
                            this.filename = undefined;
                            this.id = undefined;
                            this.loaded = false;
                        }
                        static _resolveFilename(toPath, module) {
                            if (module.filename == null) {
                                throw new Error('Module has no filename');
                            }
                            const m = manager.resolveModule({
                                path: toPath,
                                parentPath: module.filename,
                            });
                            return m.path;
                        }
                        static _nodeModulePaths() {
                            return [];
                        }
                    };
                }
                // So it must be a dependency
                if (path.startsWith('codesandbox-api')) {
                    return getDependency(path);
                }
                const requiredTranspiledModule = manager.resolveTranspiledModuleSync(path, localModule.path);
                // Check if this module has been evaluated before, if so return the exports
                // of that compilation
                const cache = requiredTranspiledModule.compilation;
                return requiredTranspiledModule.isCompilationCached(globals)
                    ? cache.exports
                    : manager.evaluateTranspiledModule(requiredTranspiledModule, transpiledModule, { force, globals });
            }
            // @ts-ignore
            require.resolve = function resolve(path) {
                const foundModule = manager.resolveModule({
                    path,
                    parentPath: localModule.path,
                });
                return foundModule.path;
            };
            const usedGlobals = globals || {};
            usedGlobals.__dirname = utils_path["dirname"](this.module.path);
            usedGlobals.__filename = this.module.path;
            usedGlobals.$csbImport = (path) => manager
                .evaluate(path, this)
                .then(result => interopRequireWildcard_default()(result));
            const code = this.source.compiledCode +
                `\n//# sourceURL=${location.origin}${this.module.path}${this.query ? `?${this.hash}` : ''}`;
            const exports = runner_eval(code, require, this.compilation, manager.envVariables, usedGlobals, { asUMD });
            /* eslint-disable no-param-reassign */
            manager.setHmrStatus('apply');
            const { hmrConfig } = this;
            if (hmrConfig && hmrConfig.isHot()) {
                hmrConfig.setDirty(false);
                hmrConfig.callAcceptCallback();
            }
            manager.setHmrStatus('idle');
            /* eslint-enable */
            return exports;
        }
        catch (e) {
            e.tModule = e.tModule || transpiledModule;
            this.resetCompilation();
            throw e;
        }
    }
    postTranspile(manager) {
        if (this.initiators.size === 0 &&
            this.transpilationInitiators.size === 0 &&
            !this.isEntry &&
            !manager.isFirstLoad &&
            // Don't delete stubbed modules, they are here for a reason, most probably
            // because they are aliased with a browser field
            !this.module.stubbed) {
            // Remove the module from the transpiler if it's not used anymore
            transpiled_module_debug(`Removing '${this.getId()}' from manager.`);
            this.dispose(manager);
        }
    }
    postEvaluate(manager) {
        // Question: do we need to disable this for HMR projects?
        // For non cacheable transpilers we remove the cached evaluation
        if (manager.preset
            .getLoaders(this.module, manager, this.query)
            .some(t => t.transpiler.cacheable == null ? false : !t.transpiler.cacheable)) {
            transpiled_module_debug(`Removing '${this.getId()}' cache as it's not cacheable.`);
            this.compilation = null;
        }
    }
    serialize(optimizeForSize = true) {
        return transpiled_module_awaiter(this, void 0, void 0, function* () {
            const sourceEqualsCompiled = Boolean(this.source && this.source.sourceEqualsCompiled);
            const serializableObject = {
                query: this.query,
                module: this.module,
                isEntry: this.isEntry,
                isTestFile: this.isTestFile,
                sourceEqualsCompiled,
                childModules: this.childModules.map(m => m.getId()),
                dependencies: Array.from(this.dependencies).map(m => m.getId()),
                initiators: Array.from(this.initiators).map(m => m.getId()),
                transpilationDependencies: Array.from(this.transpilationDependencies).map(m => m.getId()),
                transpilationInitiators: Array.from(this.transpilationInitiators).map(m => m.getId()),
                asyncDependencies: yield Promise.all(Array.from(this.asyncDependencies).map(m => m.then(x => x.getId()))),
                warnings: this.warnings.map(war => war.serialize()),
                hasMissingDependencies: this.hasMissingDependencies,
                source: null,
            };
            const isNpmDependency = this.module.path.startsWith('/node_modules/');
            const canOptimizeSize = sourceEqualsCompiled && optimizeForSize;
            // Don't cache source if it didn't change, also don't cache changed source from npm
            // dependencies as we can compile those really quickly.
            const shouldCacheTranspiledSource = !canOptimizeSize && !isNpmDependency;
            if (shouldCacheTranspiledSource) {
                // source can be null if module is not transpiled, i.e. included in other transpiled module (for example .scss files)
                serializableObject.source = this.source || null;
            }
            return serializableObject;
        });
    }
    load(data, state, manager) {
        return transpiled_module_awaiter(this, void 0, void 0, function* () {
            this.query = data.query;
            this.module = data.module;
            this.isEntry = data.isEntry;
            this.isTestFile = data.isTestFile;
            this.hasMissingDependencies = data.hasMissingDependencies;
            if (data.sourceEqualsCompiled) {
                this.source = new ModuleSource(this.module.path, this.module.code, null, true);
            }
            else {
                // source can be null if module is not transpiled, i.e. included in other transpiled module (for example .scss files)
                this.source = data.source || null;
            }
            const getModule = (depId) => {
                if (state[depId]) {
                    return state[depId];
                }
                const [path, ...queryParts] = depId.split(':');
                const query = queryParts.join(':');
                const { module } = manager.transpiledModules[path];
                return manager.getTranspiledModule(module, query);
            };
            const loadModule = (depId, initiator = false, transpilation = false) => {
                const tModule = getModule(depId);
                if (initiator) {
                    if (transpilation) {
                        tModule.transpilationDependencies.add(this);
                    }
                    else {
                        tModule.dependencies.add(this);
                    }
                }
                else if (transpilation) {
                    tModule.transpilationInitiators.add(this);
                }
                else {
                    tModule.initiators.add(this);
                }
                return tModule;
            };
            data.dependencies.forEach((depId) => {
                this.dependencies.add(loadModule(depId));
            });
            data.childModules.forEach((depId) => {
                this.childModules.push(loadModule(depId));
            });
            data.initiators.forEach((depId) => {
                this.initiators.add(loadModule(depId, true));
            });
            data.transpilationDependencies.forEach((depId) => {
                this.transpilationDependencies.add(loadModule(depId, false, true));
            });
            data.transpilationInitiators.forEach((depId) => {
                this.transpilationInitiators.add(loadModule(depId, true, true));
            });
            data.asyncDependencies.forEach((depId) => {
                this.asyncDependencies.push(Promise.resolve(loadModule(depId)));
            });
            this.warnings =
                data.warnings.map(war => new ModuleWarning(this, war)) || [];
            this.logWarnings();
        });
    }
}

// EXTERNAL MODULE: ../sandpack-core/lib/npm/dynamic/fetch-npm-module.js
var fetch_npm_module = __webpack_require__("../sandpack-core/lib/npm/dynamic/fetch-npm-module.js");

// CONCATENATED MODULE: ../sandpack-core/lib/npm/get-core-libraries.js
/* harmony default export */ var get_core_libraries = ({
    assert: 'assert/assert.js',
    buffer: 'buffer/index.js',
    child_process: null,
    cluster: null,
    console: 'console-browserify/index.js',
    constants: 'constants-browserify/constants.json',
    crypto: 'crypto-browserify/index.js',
    dgram: null,
    dns: null,
    domain: 'domain-browser/index.js',
    events: 'events/events.js',
    fs: null,
    http: 'stream-http/index.js',
    https: 'https-browserify/index.js',
    module: null,
    net: null,
    os: 'os-browserify/browser.js',
    path: 'path-browserify/index.js',
    punycode: 'punycode/punycode.js',
    process: 'process/browser.js',
    querystring: 'querystring-es3/index.js',
    readline: null,
    repl: null,
    stream: 'stream-browserify/index.js',
    _stream_duplex: 'readable-stream/duplex.js',
    _stream_passthrough: 'readable-stream/passthrough.js',
    _stream_readable: 'readable-stream/readable.js',
    _stream_transform: 'readable-stream/transform.js',
    _stream_writable: 'readable-stream/writable.js',
    sys: 'util/util.js',
    timers: 'timers-browserify/main.js',
    tls: null,
    tty: 'tty-browserify/index.js',
    url: 'url/url.js',
    util: 'util/util.js',
    vm: 'vm-browserify/index.js',
    zlib: 'browserify-zlib/src/index.js',
});

// EXTERNAL MODULE: ../sandpack-core/lib/npm/dependencies-to-query.js
var dependencies_to_query = __webpack_require__("../sandpack-core/lib/npm/dependencies-to-query.js");

// EXTERNAL MODULE: ../sandpack-core/lib/utils/get-dependency-name.js
var get_dependency_name = __webpack_require__("../sandpack-core/lib/utils/get-dependency-name.js");

// EXTERNAL MODULE: ../sandpack-core/lib/cache.js
var lib_cache = __webpack_require__("../sandpack-core/lib/cache.js");

// EXTERNAL MODULE: ../sandpack-core/lib/npm/dynamic/fetch-protocols/index.js + 7 modules
var fetch_protocols = __webpack_require__("../sandpack-core/lib/npm/dynamic/fetch-protocols/index.js");

// EXTERNAL MODULE: ../sandpack-core/lib/npm/dynamic/fetch-protocols/utils/tar-store.js
var tar_store = __webpack_require__("../sandpack-core/lib/npm/dynamic/fetch-protocols/utils/tar-store.js");

// CONCATENATED MODULE: ../sandpack-core/lib/npm/dynamic/fetch-protocols/file.js
var file_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Remove the ./ or / from the start
 */
function normalizePath(path) {
    return path.replace(/^\.\//, '').replace(/^\//, '');
}
class file_FileFetcher {
    constructor(manager) {
        this.manager = manager;
        this.tarStore = new tar_store["a" /* TarStore */]();
    }
    getUrlFromFileProtocol(version) {
        return file_awaiter(this, void 0, void 0, function* () {
            const tarLocation = normalizePath(version.replace(/^file:/, ''));
            const module = this.manager.transpiledModules['/' + tarLocation];
            if (!module) {
                throw new Error(`Could not find ${version} while resolving dependency`);
            }
            return module.module.code;
        });
    }
    file(name, version, path) {
        return file_awaiter(this, void 0, void 0, function* () {
            const url = yield this.getUrlFromFileProtocol(version);
            return this.tarStore.file(name, url, path);
        });
    }
    meta(name, version) {
        return file_awaiter(this, void 0, void 0, function* () {
            const url = yield this.getUrlFromFileProtocol(version);
            return this.tarStore.meta(name, url);
        });
    }
}

// EXTERNAL MODULE: ../sandpack-core/lib/utils/extensions.js
var extensions = __webpack_require__("../sandpack-core/lib/utils/extensions.js");

// EXTERNAL MODULE: ../sandpack-core/lib/npm/dynamic/fetch-protocols/utils.js
var utils = __webpack_require__("../sandpack-core/lib/npm/dynamic/fetch-protocols/utils.js");

// CONCATENATED MODULE: ../sandpack-core/lib/utils/esmodule-url.js

// TODO: Figure out node_modules, ie read pkg.json from ESModule file tree, would need some major refactoring...
function getESModuleUrl(parent, path) {
    if (Object(is_url["isUrl"])(path)) {
        return path;
    }
    if (path.startsWith('/node_modules/')) {
        return null;
    }
    if (Object(is_url["isUrl"])(parent) && (path[0] === '.' || path[0] === '/')) {
        return new URL(path, parent).href;
    }
    return null;
}

// CONCATENATED MODULE: ../sandpack-core/lib/manager.js
var manager_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

























const NODE_LIBS = ['dgram', 'net', 'tls', 'fs', 'module', 'child_process'];
// For these dependencies we don't want to follow along with the `browser` field
const SKIPPED_BROWSER_FIELD_DEPENDENCIES = [
    'babel-core',
    '@babel/core',
].reduce((result, next) => (Object.assign(Object.assign({}, result), { [`/node_modules/${next}/package.json`]: true })), {});
const SHIMMED_MODULE = {
    path: utils_path["join"]('/node_modules', 'empty', 'index.js'),
    code: `// empty`,
    requires: [],
};
const getShimmedModuleFromPath = (currentPath, path) => (Object.assign(Object.assign({}, SHIMMED_MODULE), { path: utils_path["join"](utils_path["dirname"](currentPath), path) }));
const manager_debug = debug_default()('cs:compiler:manager');
function triggerFileWatch(path, type) {
    try {
        // @ts-ignore
        fs_default.a.getFSModule().fileWatcher.triggerWatch(path, type);
    }
    catch (e) {
        /* ignore */
    }
}
function fetchRemoteModule(url) {
    return manager_awaiter(this, void 0, void 0, function* () {
        try {
            const r = yield Object(utils["a" /* fetchWithRetries */])(url);
            if (!r.ok) {
                throw new Error(`Fetching ESModule return error status ${r.status}`);
            }
            const content = yield r.text();
            return {
                url: r.url,
                content,
            };
        }
        catch (err) {
            console.error(err);
            throw new module_not_found_error_default.a(url, true);
        }
    });
}
class manager_Manager {
    constructor(id, preset, modules, options, cb) {
        this.envVariables = {};
        this.manifest = {
            contents: {},
            dependencies: [],
            dependencyDependencies: {},
            dependencyAliases: {},
        };
        this.hmrStatus = 'idle';
        this.isReloading = false;
        this.bfsWrapper = {
            getTranspiledModules: () => this.transpiledModules,
            addModule: (module) => {
                this.addModule(module);
            },
            removeModule: (module) => {
                this.removeModule(module);
            },
            moveModule: (module, newPath) => {
                this.moveModule(module, newPath);
            },
            updateModule: (module) => {
                this.updateModule(module);
            },
        };
        this._isFileSync = (p) => {
            if (this.stage === 'transpilation') {
                // In transpilation phase we can afford to download the file if not found,
                // because we're async. That's why we also include the meta here.
                return Boolean(this.transpiledModules[p] || fetch_npm_module["a" /* combinedMetas */][p]);
            }
            return Boolean(this.transpiledModules[p]);
        };
        this._isFileAsync = (p) => {
            const exists = this._isFileSync(p);
            if (exists) {
                return Promise.resolve(true);
            }
            if (this.fileResolver) {
                return this.fileResolver.isFile(p);
            }
            return Promise.resolve(false);
        };
        this.isFile = gensync_default()({
            sync: this._isFileSync,
            async: this._isFileAsync,
        });
        this._readFileSync = (p) => {
            if (!this.transpiledModules[p]) {
                const err = new Error('Could not find ' + p);
                // @ts-ignore
                err.code = 'ENOENT';
                throw err;
            }
            return this.transpiledModules[p].module.code;
        };
        this._readFileAsync = (p) => {
            try {
                const content = this._readFileSync(p);
                return Promise.resolve(content);
            }
            catch (err) {
                if (this.fileResolver) {
                    return this.fileResolver
                        .readFile(p)
                        .then(code => {
                        this.addModule({ path: p, code });
                        return code;
                    })
                        .catch(() => {
                        throw err;
                    });
                }
                return Promise.reject(err);
            }
        };
        this.readFile = gensync_default()({
            sync: this._readFileSync,
            async: this._readFileAsync,
        });
        this.setStage = (stage) => {
            this.stage = stage;
        };
        this.resolveTranspiledModuleAsync = (path, currentTModule, ignoredExtensions) => manager_awaiter(this, void 0, void 0, function* () {
            const tModule = currentTModule || this.getTranspiledModule(this.modules['/package.json']); // Get arbitrary file from root
            try {
                const transpiledModule = yield this.resolveTranspiledModule(path, tModule.module.path, ignoredExtensions);
                return transpiledModule;
            }
            catch (e) {
                if (e.type === 'module-not-found' && e.isDependency) {
                    const { queryPath } = splitQueryFromPath(path);
                    return this.downloadDependency(e.path, tModule, queryPath, ignoredExtensions);
                }
                throw e;
            }
        });
        this.setHmrStatus = (status) => {
            this.hmrStatusChangeListeners.forEach(v => {
                v(status);
            });
            this.hmrStatus = status;
        };
        this.addStatusHandler = (cb) => {
            this.hmrStatusChangeListeners.add(cb);
        };
        this.removeStatusHandler = (cb) => {
            this.hmrStatusChangeListeners.delete(cb);
        };
        this.id = id;
        this.preset = preset;
        this.transpiledModules = {};
        this.cachedPaths = {};
        this.transpileJobs = {};
        this.webpackHMR = false;
        this.hardReload = false;
        this.hmrStatus = 'idle';
        this.hmrStatusChangeListeners = new Set();
        this.isFirstLoad = true;
        this.transpiledModulesByHash = {};
        this.configurations = {};
        this.stage = 'transpilation';
        this.version = options.versionIdentifier;
        this.esmodules = new Map();
        this.resolverCache = new Map();
        this.reactDevTools = options.reactDevTools;
        /**
         * Contribute the file fetcher, which needs the manager to resolve the files
         */
        Object(fetch_protocols["c" /* prependToContributedProtocols */])([
            {
                condition: (name, version) => version.startsWith('file:'),
                protocol: new file_FileFetcher(this),
            },
        ]);
        this.modules = modules;
        Object.keys(modules).forEach(k => this.addModule(modules[k]));
        Object(utils_global["getGlobal"])().manager = this;
        if (false) {}
        BrowserFS.configure({
            fs: 'CodeSandboxFS',
            options: {
                manager: this.bfsWrapper,
            },
        }, () => {
            if (cb) {
                cb();
            }
        });
        if (options.hasFileResolver) {
            this.setupFileResolver();
        }
    }
    reload() {
        this.isReloading = true;
        if (typeof window !== 'undefined') {
            window.location.reload();
        }
    }
    prependNpmProtocolDefinition(protocol) {
        Object(fetch_protocols["c" /* prependToContributedProtocols */])([protocol]);
    }
    // Call this whenever the file structure or modules change, so before each compilation...
    resetResolverCache() {
        this.cachedPaths = {};
        this.resolverCache = new Map();
    }
    evaluate(path, baseTModule) {
        return manager_awaiter(this, void 0, void 0, function* () {
            const tModule = yield this.resolveTranspiledModuleAsync(path, baseTModule, this.preset.ignoredExtensions);
            yield tModule.transpile(this);
            return tModule.evaluate(this);
        });
    }
    setupFileResolver() {
        const protocol = new codesandbox_es5["Protocol"]('file-resolver', () => true, window.parent);
        this.fileResolver = {
            protocol,
            isFile: (path) => protocol.sendMessage({ m: 'isFile', p: path }),
            readFile: (path) => protocol.sendMessage({ m: 'readFile', p: path }),
        };
    }
    resetAllModules() {
        this.getTranspiledModules().forEach(t => {
            t.resetTranspilation();
            t.resetCompilation();
        });
    }
    setManifest(manifest) {
        this.manifest = manifest || {
            contents: {},
            dependencies: [],
            dependencyDependencies: {},
            dependencyAliases: {},
        };
        Object.keys(this.manifest.contents).forEach(path => {
            const module = {
                path,
                code: this.manifest.contents[path].content,
            };
            if (SKIPPED_BROWSER_FIELD_DEPENDENCIES[path]) {
                const pJsonCode = JSON.parse(this.manifest.contents[path].content);
                // eslint-disable-next-line
                delete pJsonCode.browser;
                module.code = JSON.stringify(pJsonCode, null, 2);
            }
            this.addModule(module);
        });
        manager_debug(`Loaded manifest.`);
    }
    evaluateModule(module, { force = false, globals } = {}) {
        // Do a hard reload
        if (this.hardReload && !this.isFirstLoad) {
            this.reload();
            return {};
        }
        // Page is reloading, skip further evaluation
        if (this.isReloading) {
            return {};
        }
        // Evaluate the *changed* HMR modules first
        this.getTranspiledModules()
            .filter(t => t.hmrConfig && t.hmrConfig.isDirty())
            .forEach(t => t.evaluate(this));
        const transpiledModule = this.getTranspiledModule(module);
        if (force && transpiledModule.compilation) {
            transpiledModule.compilation = null;
        }
        try {
            const exports = this.evaluateTranspiledModule(transpiledModule, undefined, { force, globals });
            if (this.webpackHMR) {
                // Check if any module has been invalidated, because in that case we need to
                // restart evaluation.
                const invalidatedModules = this.getTranspiledModules().filter(t => {
                    var _a;
                    if ((_a = t.hmrConfig) === null || _a === void 0 ? void 0 : _a.invalidated) {
                        t.compilation = null;
                        t.hmrConfig = null;
                        return true;
                    }
                    return false;
                });
                if (invalidatedModules.length > 0) {
                    return this.evaluateModule(module, { force, globals });
                }
            }
            this.setHmrStatus('idle');
            return exports;
        }
        finally {
            // Run post evaluate
            this.getTranspiledModules().forEach(t => t.postEvaluate(this));
        }
    }
    evaluateTranspiledModule(transpiledModule, initiator, { force = false, globals } = {}) {
        if (force && transpiledModule.compilation) {
            transpiledModule.compilation = null;
        }
        return transpiledModule.evaluate(this, { force, globals }, initiator);
    }
    addModule(module) {
        this.transpiledModules[module.path] = this.transpiledModules[module.path] || { module, tModules: {} };
        triggerFileWatch(module.path, 'rename');
    }
    addTranspiledModule(module, query = '') {
        if (this.transpiledModules[module.path] &&
            this.transpiledModules[module.path].tModules[query] &&
            this.transpiledModules[module.path].module.code === module.code) {
            // fix: loaderContext.emitModule() may replace tModule directly
            return this.transpiledModules[module.path].tModules[query];
        }
        if (!this.transpiledModules[module.path]) {
            this.addModule(module);
        }
        this.transpiledModules[module.path].module = module;
        const transpiledModule = new transpiled_module_TranspiledModule(module, query);
        this.transpiledModules[module.path].tModules[query] = transpiledModule;
        this.transpiledModulesByHash[transpiledModule.hash] = transpiledModule;
        return transpiledModule;
    }
    getTranspiledModuleByHash(hash) {
        return this.transpiledModulesByHash[hash];
    }
    /**
     * Get Transpiled Module from the registry, if there is no transpiled module
     * in the registry it will create a new one.
     *
     * @param {Module} module
     * @param {string} query A webpack like syntax (!url-loader)
     */
    getTranspiledModule(module, query = '') {
        const moduleObject = this.transpiledModules[module.path];
        if (!moduleObject) {
            this.addModule(module);
        }
        let transpiledModule = this.transpiledModules[module.path].tModules[query];
        if (!transpiledModule) {
            transpiledModule = this.addTranspiledModule(module, query);
        }
        return transpiledModule;
    }
    /**
     * One module can have multiple transpiled modules, because modules can be
     * required in different ways. For example, require(`babel-loader!./Test.vue`) isn't
     * the same as require(`./Test.vue`).
     *
     * This will return all transpiled modules, with different configurations associated one module.
     * @param {*} module
     */
    getTranspiledModulesByModule(module) {
        return this.transpiledModules[module.path]
            ? Object(values["a" /* default */])(this.transpiledModules[module.path].tModules)
            : [];
    }
    getTranspiledModules() {
        return Object(values["a" /* default */])(this.transpiledModulesByHash);
    }
    removeTranspiledModule(tModule) {
        delete this.transpiledModulesByHash[tModule.hash];
        delete this.transpiledModules[tModule.module.path].tModules[tModule.query];
    }
    removeModule(module) {
        // File structure changed, reset resolver cache
        this.resetResolverCache();
        const existingModule = this.transpiledModules[module.path];
        Object(values["a" /* default */])(existingModule.tModules).forEach(m => {
            m.dispose(this);
            this.removeTranspiledModule(m);
        });
        delete this.transpiledModules[module.path];
        triggerFileWatch(module.path, 'rename');
        this.markHardReload();
    }
    moveModule(module, newPath) {
        this.removeModule(module);
        this.addModule(Object.assign(Object.assign({}, module), { path: newPath }));
    }
    setEnvironmentVariables() {
        if (this.transpiledModules['/.env'] && this.preset.hasDotEnv) {
            const envCode = this.transpiledModules['/.env'].module.code;
            this.envVariables = {};
            try {
                envCode.split('\n').forEach(envLine => {
                    const [name, ...val] = envLine.split('=');
                    this.envVariables[name] = val.join('=').replace(/^('|")|('|")$/g, '');
                });
            }
            catch (e) {
                console.error(e);
            }
        }
    }
    /**
     * Will transpile this module and all eventual children (requires) that go with it
     * @param {*} entry
     */
    transpileModules(entry, isTestFile = false) {
        return manager_awaiter(this, void 0, void 0, function* () {
            this.setHmrStatus('check');
            this.setEnvironmentVariables();
            const transpiledModule = this.getTranspiledModule(entry);
            transpiledModule.setIsEntry(true);
            transpiledModule.setIsTestFile(isTestFile);
            const result = yield transpiledModule.transpile(this);
            this.getTranspiledModules().forEach(t => t.postTranspile(this));
            return result;
        });
    }
    verifyTreeTranspiled() {
        const promises = [];
        for (const tModule of this.getTranspiledModules()) {
            promises.push(tModule.transpile(this));
        }
        return Promise.all(promises);
    }
    clearCompiledCache() {
        this.getTranspiledModules().map(tModule => tModule.resetCompilation());
    }
    clearTranspilationCache() {
        this.getTranspiledModules().map(tModule => tModule.resetTranspilation());
    }
    getModules() {
        return Object(values["a" /* default */])(this.transpiledModules).map(t => t.module);
    }
    /**
     * The packager returns a list of dependencies that require a different path
     * of their subdependencies.
     *
     * An example:
     * if react requires lodash v3, and react-dom requires lodash v4. We add them
     * both to the bundle, and rewrite paths for lodash v3 to `lodash/3.0.0/`. Then
     * we specify that when react resolves `lodash` it should resolve `lodash/3.0.0`.
     *
     * @param {string} path
     * @param {string} currentPath
     * @returns
     * @memberof Manager
     */
    getAliasedDependencyPath(path, currentPath) {
        const isDependency = /^(\w|@\w|@-)/.test(path);
        if (!isDependency) {
            return path;
        }
        const isCurrentPathDependency = currentPath.startsWith('/node_modules');
        if (!isCurrentPathDependency) {
            return path;
        }
        const dependencyName = Object(get_dependency_name["b" /* getDependencyName */])(path);
        const currentDependencyName = Object(get_dependency_name["b" /* getDependencyName */])(currentPath.replace('/node_modules/', ''));
        // There's a case where an aliased dependency requests itself. Eg. @babel/runtime/7.13.1 has an import
        // of @babel/runtime. We know that this dependency needs to be @babel/runtime/7.13.1, so we do an explicit
        // check for this here.
        if (currentDependencyName.startsWith(dependencyName + '/')) {
            // Okay, we now know for sure that the current dependency is aliased, and the imported dependency is the same
            const aliasedVersion = Object(get_dependency_name["a" /* getAliasVersion */])(currentPath.replace('/node_modules/', ''));
            if (aliasedVersion) {
                return path.replace(dependencyName, dependencyName + '/' + aliasedVersion);
            }
        }
        if (currentDependencyName &&
            dependencyName &&
            this.manifest.dependencyAliases[currentDependencyName] &&
            this.manifest.dependencyAliases[currentDependencyName][dependencyName]) {
            const aliasedDependencyName = this.manifest.dependencyAliases[currentDependencyName][dependencyName];
            return path.replace(dependencyName, aliasedDependencyName);
        }
        return path;
    }
    /**
     * Set the manager to use Webpack HMR, this changes how modules are hot reloaded
     * and how the manager cleans up the website.
     *
     * @memberof Manager
     */
    enableWebpackHMR() {
        this.webpackHMR = true;
    }
    getPresetAliasedPath(path) {
        return this.preset
            .getAliasedPath(path)
            .replace(/.*\{\{sandboxRoot\}\}/, '');
    }
    getModuleDirectories() {
        var _a, _b;
        if (this.moduleDirectoriesCache) {
            return this.moduleDirectoriesCache;
        }
        const baseTSCompilerConfig = [
            this.configurations.typescript,
            this.configurations.jsconfig,
        ].find(config => config && config.generated !== true);
        let baseUrl = (_b = (_a = baseTSCompilerConfig === null || baseTSCompilerConfig === void 0 ? void 0 : baseTSCompilerConfig.parsed) === null || _a === void 0 ? void 0 : _a.compilerOptions) === null || _b === void 0 ? void 0 : _b.baseUrl;
        // TODO: we need to extract our resolver to a plugin system and use the TypeScript resolver
        // if we see a tsconfig. A `.` doesn't work and messes up resolving.
        if (baseUrl === '.') {
            baseUrl = undefined;
        }
        this.moduleDirectoriesCache = [
            'node_modules',
            baseUrl,
            this.envVariables.NODE_PATH,
        ].filter(Boolean);
        return this.moduleDirectoriesCache;
    }
    downloadESModule(url) {
        return manager_awaiter(this, void 0, void 0, function* () {
            const mod = this.esmodules.get(url) || fetchRemoteModule(url);
            this.esmodules.set(url, mod);
            return mod;
        });
    }
    // ALWAYS KEEP THIS METHOD IN SYNC WITH SYNC VERSION
    resolveModuleAsync(opts) {
        return manager_awaiter(this, void 0, void 0, function* () {
            const { path, query = '', defaultExtensions = extensions["a" /* DEFAULT_EXTENSIONS */] } = opts;
            let parentPath = opts.parentPath || '/index.js';
            const esmoduleUrl = getESModuleUrl(parentPath, path);
            // Handle ESModule import
            if (esmoduleUrl) {
                if (!this.preset.experimentalEsmSupport) {
                    throw new Error('ESModules url imports are only supported in the experimental ESModule preset.');
                }
                const fullUrl = `${esmoduleUrl}?${query}`;
                const cachedModule = this.transpiledModules[fullUrl];
                if (cachedModule) {
                    return cachedModule.module;
                }
                const downloadResult = yield this.downloadESModule(fullUrl);
                this.addModule({
                    path: fullUrl,
                    url: downloadResult.url,
                    code: downloadResult.content || '',
                    downloaded: true,
                });
                return this.transpiledModules[fullUrl].module;
            }
            // This handles the imports of node_modules from remote ESModules
            // In the future we should probably resolve these from a pkg.json the ESModule provides...
            if (Object(is_url["isUrl"])(parentPath) && !esmoduleUrl) {
                // eslint-disable-next-line no-param-reassign
                parentPath = '/package.json';
            }
            const dirredPath = utils_path["dirname"](parentPath);
            if (this.cachedPaths[dirredPath] === undefined) {
                this.cachedPaths[dirredPath] = {};
            }
            const cachedPath = this.cachedPaths[dirredPath][path];
            let resolvedPath;
            if (cachedPath && this.transpiledModules[cachedPath]) {
                resolvedPath = cachedPath;
            }
            else {
                const measureKey = `resolve-async:${path}::${parentPath}::${query}`;
                const measureStartTime = Object(metrics["now"])();
                const presetAliasedPath = this.getPresetAliasedPath(path);
                const aliasedPath = this.getAliasedDependencyPath(presetAliasedPath, parentPath);
                const shimmedPath = get_core_libraries[aliasedPath] || aliasedPath;
                if (NODE_LIBS.indexOf(shimmedPath) > -1) {
                    this.cachedPaths[dirredPath][path] = shimmedPath;
                    return getShimmedModuleFromPath(parentPath, path);
                }
                try {
                    resolvedPath = yield Object(resolver["b" /* resolveAsync */])(shimmedPath, {
                        filename: parentPath,
                        extensions: defaultExtensions.map(ext => '.' + ext),
                        isFile: this.isFile,
                        readFile: this.readFile,
                        moduleDirectories: this.getModuleDirectories(),
                        resolverCache: this.resolverCache,
                    });
                    Object(metrics["endMeasure"])(measureKey, { silent: true, lastTime: measureStartTime });
                    this.cachedPaths[dirredPath][path] = resolvedPath;
                    if (resolvedPath === '//empty.js') {
                        return getShimmedModuleFromPath(parentPath, path);
                    }
                    if (!this.transpiledModules[resolvedPath]) {
                        try {
                            const remoteFileContent = yield this.readFile.async(resolvedPath);
                            this.addModule({
                                path: resolvedPath,
                                code: remoteFileContent || '',
                            });
                        }
                        catch (err) {
                            throw new Error(`Could not find '${resolvedPath}' in local files.`);
                        }
                    }
                }
                catch (err) {
                    if (this.cachedPaths[dirredPath] &&
                        this.cachedPaths[dirredPath][path]) {
                        delete this.cachedPaths[dirredPath][path];
                    }
                    let connectedPath = shimmedPath;
                    if (connectedPath.indexOf('/node_modules') !== 0) {
                        connectedPath = /^(\w|@\w|@-)/.test(shimmedPath)
                            ? utils_path["join"]('/node_modules', shimmedPath)
                            : utils_path["join"](utils_path["dirname"](parentPath), shimmedPath);
                    }
                    const isDependency = connectedPath.includes('/node_modules/');
                    connectedPath = connectedPath.replace('/node_modules/', '');
                    if (!isDependency) {
                        throw new module_not_found_error_default.a(shimmedPath, false, parentPath);
                    }
                    const dependencyName = Object(get_dependency_name["b" /* getDependencyName */])(connectedPath);
                    // TODO: fix the stack hack
                    if (dependencyName &&
                        (this.manifest.dependencies.find(d => d.name === dependencyName) ||
                            this.manifest.dependencyDependencies[dependencyName] ||
                            this.manifest.contents[`/node_modules/${dependencyName}/package.json`])) {
                        throw new module_not_found_error_default.a(connectedPath, true, parentPath);
                    }
                    else {
                        throw new dependency_not_found_error_default.a(connectedPath, parentPath);
                    }
                }
            }
            if (resolvedPath === '//empty.js') {
                return getShimmedModuleFromPath(parentPath, path);
            }
            return this.transpiledModules[resolvedPath].module;
        });
    }
    // ALWAYS KEEP THIS METHOD IN SYNC WITH ASYNC VERSION
    resolveModule({ path, parentPath = '/', query = '', defaultExtensions = extensions["a" /* DEFAULT_EXTENSIONS */], }) {
        const esmoduleUrl = getESModuleUrl(parentPath, path);
        // Handle ESModule import
        if (esmoduleUrl) {
            if (!this.preset.experimentalEsmSupport) {
                throw new Error('ESModules url imports are only supported in the experimental ESModule preset.');
            }
            const fullUrl = `${esmoduleUrl}?${query}`;
            const cachedModule = this.transpiledModules[fullUrl];
            if (cachedModule) {
                return cachedModule.module;
            }
            throw new Error(`Cannot download ESModule dependencies synchronously: ${fullUrl}`);
        }
        // This handles the imports of node_modules from remote ESModules
        // In the future we should probably resolve these from a pkg.json the ESModule provides...
        if (Object(is_url["isUrl"])(parentPath) && !esmoduleUrl) {
            // eslint-disable-next-line no-param-reassign
            parentPath = '/package.json';
        }
        const dirredPath = utils_path["dirname"](parentPath);
        if (this.cachedPaths[dirredPath] === undefined) {
            this.cachedPaths[dirredPath] = {};
        }
        const cachedPath = this.cachedPaths[dirredPath][path];
        let resolvedPath;
        if (cachedPath && this.transpiledModules[cachedPath]) {
            resolvedPath = cachedPath;
        }
        else {
            const measureKey = `resolve-sync:${path}:${parentPath}`;
            const measureStartTime = Object(metrics["now"])();
            const presetAliasedPath = this.getPresetAliasedPath(path);
            const aliasedPath = this.getAliasedDependencyPath(presetAliasedPath, parentPath);
            const shimmedPath = get_core_libraries[aliasedPath] || aliasedPath;
            if (NODE_LIBS.indexOf(shimmedPath) > -1) {
                this.cachedPaths[dirredPath][path] = shimmedPath;
                return getShimmedModuleFromPath(parentPath, path);
            }
            try {
                resolvedPath = Object(resolver["c" /* resolveSync */])(shimmedPath, {
                    filename: parentPath,
                    extensions: defaultExtensions.map(ext => '.' + ext),
                    isFile: this.isFile,
                    readFile: this.readFile,
                    moduleDirectories: this.getModuleDirectories(),
                    resolverCache: this.resolverCache,
                });
                Object(metrics["endMeasure"])(measureKey, { silent: true, lastTime: measureStartTime });
                this.cachedPaths[dirredPath][path] = resolvedPath;
                if (resolvedPath === '//empty.js') {
                    return getShimmedModuleFromPath(parentPath, path);
                }
                if (!this.transpiledModules[resolvedPath]) {
                    throw new Error(`Could not find '${resolvedPath}' in local files.`);
                }
            }
            catch (e) {
                // MAKE SURE TO SYNC THIS WITH ASYNC VERSION
                if (this.cachedPaths[dirredPath] &&
                    this.cachedPaths[dirredPath][path]) {
                    delete this.cachedPaths[dirredPath][path];
                }
                let connectedPath = shimmedPath;
                if (connectedPath.indexOf('/node_modules') !== 0) {
                    connectedPath = /^(\w|@\w|@-)/.test(shimmedPath)
                        ? utils_path["join"]('/node_modules', shimmedPath)
                        : utils_path["join"](utils_path["dirname"](parentPath), shimmedPath);
                }
                const isDependency = connectedPath.includes('/node_modules/');
                connectedPath = connectedPath.replace('/node_modules/', '');
                if (!isDependency) {
                    throw new module_not_found_error_default.a(shimmedPath, false, parentPath);
                }
                const dependencyName = Object(get_dependency_name["b" /* getDependencyName */])(connectedPath);
                // TODO: fix the stack hack
                if (dependencyName &&
                    (this.manifest.dependencies.find(d => d.name === dependencyName) ||
                        this.manifest.dependencyDependencies[dependencyName] ||
                        this.manifest.contents[`/node_modules/${dependencyName}/package.json`])) {
                    throw new module_not_found_error_default.a(connectedPath, true, parentPath);
                }
                else {
                    throw new dependency_not_found_error_default.a(connectedPath, parentPath);
                }
            }
        }
        if (resolvedPath === '//empty.js') {
            return getShimmedModuleFromPath(parentPath, path);
        }
        return this.transpiledModules[resolvedPath].module;
    }
    downloadDependency(path, currentTModule, query = '', ignoredExtensions = this.preset.ignoredExtensions) {
        return Object(fetch_npm_module["d" /* fetchModule */])(path, currentTModule, this, ignoredExtensions).then(module => {
            this.resetResolverCache();
            return this.getTranspiledModule(module, query);
        });
    }
    updateModule(m) {
        this.transpiledModules[m.path].module = m;
        triggerFileWatch(m.path, 'change');
        return this.getTranspiledModulesByModule(m).map(tModule => {
            tModule.update(m);
            return tModule;
        });
    }
    /**
     * Resolve the transpiled module from the path, note that the path can actually
     * include loaders. That's why we're focussing on first extracting this query
     * @param {*} path
     * @param {*} currentPath
     */
    resolveTranspiledModule(path, currentPath, ignoredExtensions) {
        return manager_awaiter(this, void 0, void 0, function* () {
            if (path.startsWith('webpack:')) {
                throw new Error('Cannot resolve webpack path');
            }
            const { queryPath, modulePath } = splitQueryFromPath(path);
            const resolvedModule = yield this.resolveModuleAsync({
                path: modulePath,
                parentPath: currentPath,
                query: queryPath,
                defaultExtensions: ignoredExtensions || this.preset.ignoredExtensions,
            });
            return this.getTranspiledModule(resolvedModule, queryPath);
        });
    }
    /**
     * Resolve the transpiled module from the path, note that the path can actually
     * include loaders. That's why we're focussing on first extracting this query
     * @param {*} path
     * @param {*} currentPath
     */
    resolveTranspiledModuleSync(path, currentPath, ignoredExtensions) {
        if (path.startsWith('webpack:')) {
            throw new Error('Cannot resolve webpack path');
        }
        const { queryPath, modulePath } = splitQueryFromPath(path);
        const resolvedModule = this.resolveModule({
            path: modulePath,
            parentPath: currentPath,
            query: queryPath,
            defaultExtensions: ignoredExtensions || this.preset.ignoredExtensions,
        });
        return this.getTranspiledModule(resolvedModule, queryPath);
    }
    resolveTranspiledModulesInDirectory(path, currentPath) {
        const { queryPath, modulePath } = splitQueryFromPath(path);
        const joinedPath = utils_path["join"](utils_path["dirname"](currentPath), modulePath);
        return Object.keys(this.transpiledModules)
            .filter(p => p.startsWith(joinedPath))
            .map(m => this.getTranspiledModule(this.transpiledModules[m].module, queryPath));
    }
    updateConfigurations(configurations) {
        const configsUpdated = this.configurations
            ? JSON.stringify(configurations) !== JSON.stringify(this.configurations)
            : false;
        if (configsUpdated) {
            this.resetAllModules();
        }
        this.configurations = configurations;
    }
    /**
     * Find all changed, added and deleted modules. Update trees and
     * delete caches accordingly
     */
    updateData(modules) {
        return manager_awaiter(this, void 0, void 0, function* () {
            this.transpileJobs = {};
            this.hardReload = false;
            this.modules = modules;
            const addedModules = [];
            const updatedModules = [];
            // File structure likely changed, reset resolver cache
            this.resetResolverCache();
            Object.keys(modules).forEach(k => {
                const module = modules[k];
                const mirrorModule = this.transpiledModules[k];
                if (!mirrorModule) {
                    addedModules.push(module);
                }
                else if (mirrorModule.module.code !== module.code) {
                    updatedModules.push(module);
                }
            });
            this.getModules().forEach(m => {
                if (!m.path.startsWith('/node_modules') &&
                    m.path !== '/var/task/node_modules/browser-resolve/empty.js' &&
                    !Object(is_url["isUrl"])(m.path) &&
                    !modules[m.path] &&
                    !m.parent // not an emitted module
                ) {
                    this.removeModule(m);
                }
            });
            addedModules.forEach(m => {
                this.addTranspiledModule(m);
            });
            const modulesToUpdate = Object(uniq["a" /* default */])([
                ...addedModules,
                ...updatedModules,
            ]);
            // We eagerly transpile changed files,
            // this way we don't have to traverse the whole
            // dependency graph each time a file changes
            const tModulesToUpdate = modulesToUpdate.map(m => this.updateModule(m));
            if (tModulesToUpdate.length > 0 && this.configurations.sandbox) {
                this.hardReload =
                    this.hardReload ||
                        this.configurations.sandbox.parsed.hardReloadOnChange;
            }
            const modulesWithErrors = this.getTranspiledModules().filter(t => {
                if (t.hasMissingDependencies) {
                    t.resetTranspilation();
                }
                return t.errors.length > 0 || t.hasMissingDependencies;
            });
            const flattenedTModulesToUpdate = Object(flattenDeep["a" /* default */])([
                tModulesToUpdate,
                modulesWithErrors,
            ]);
            const allModulesToUpdate = Object(uniq["a" /* default */])(flattenedTModulesToUpdate);
            const transpiledModulesToUpdate = allModulesToUpdate.filter(m => !m.isTestFile);
            // Reset test files, but don't transpile. We want to do that in the test runner
            // so we can catch any errors
            allModulesToUpdate
                .filter(m => m.isTestFile)
                .forEach(m => {
                m.resetTranspilation();
            });
            manager_debug(`Generated update diff, updating ${transpiledModulesToUpdate.length} modules.`, transpiledModulesToUpdate);
            const transpilationResults = yield Promise.all(transpiledModulesToUpdate
                .map(tModule => {
                if (tModule.shouldTranspile()) {
                    return tModule.transpile(this);
                }
                return Promise.resolve(false);
            })
                .filter(Boolean));
            return transpilationResults;
        });
    }
    /**
     * Mark that the next evaluation should first have a location.reload() before
     * continuing
     */
    markHardReload() {
        this.setHmrStatus('fail');
        this.hardReload = true;
    }
    serialize({ entryPath, optimizeForSize, } = {
        optimizeForSize: true,
    }) {
        return manager_awaiter(this, void 0, void 0, function* () {
            const serializedTModules = {};
            yield Promise.all(Object.keys(this.transpiledModules).map(path => Promise.all(Object.keys(this.transpiledModules[path].tModules).map((query) => manager_awaiter(this, void 0, void 0, function* () {
                const tModule = this.transpiledModules[path].tModules[query];
                if (!this.manifest.contents[tModule.module.path] ||
                    tModule.module.downloaded) {
                    // Only save modules that are not precomputed
                    serializedTModules[tModule.getId()] = yield tModule.serialize(optimizeForSize);
                }
            })))));
            const dependenciesQuery = this.getDependencyQuery();
            const meta = {};
            Object.keys(fetch_npm_module["a" /* combinedMetas */] || {}).forEach(p => {
                const dir = utils_path["dirname"](p.replace('/node_modules', ''));
                meta[dir] = meta[dir] || [];
                meta[dir].push(utils_path["basename"](p));
            });
            return {
                transpiledModules: serializedTModules,
                cachedPaths: this.cachedPaths,
                version: this.version,
                timestamp: new Date().getTime(),
                configurations: this.configurations,
                entry: entryPath,
                meta,
                dependenciesQuery,
            };
        });
    }
    getDependencyQuery() {
        if (!this.manifest || !this.manifest.dependencies) {
            return '';
        }
        const normalizedDependencies = {};
        this.manifest.dependencies.forEach(dep => {
            normalizedDependencies[dep.name] = dep.version;
        });
        return Object(dependencies_to_query["a" /* default */])(normalizedDependencies);
    }
    load(data) {
        return manager_awaiter(this, void 0, void 0, function* () {
            try {
                if (data) {
                    this.clearCache();
                    const { transpiledModules: serializedTModules, cachedPaths, version: cacheVersion, configurations, dependenciesQuery, meta, } = data;
                    // Only use the cache if the cached version was cached with the same
                    // version of the compiler and dependencies haven't changed
                    if (cacheVersion === this.version &&
                        dependenciesQuery === this.getDependencyQuery()) {
                        const newCombinedMetas = {};
                        Object.keys(meta).forEach(dir => {
                            meta[dir].forEach(file => {
                                newCombinedMetas[`/node_modules` + dir + '/' + file] = true;
                            });
                        });
                        Object(fetch_npm_module["e" /* setCombinedMetas */])(newCombinedMetas);
                        this.cachedPaths = cachedPaths;
                        this.configurations = configurations;
                        const tModules = {};
                        // First create tModules for all the saved modules, so we have references
                        Object.keys(serializedTModules).forEach(id => {
                            const sTModule = serializedTModules[id];
                            const tModule = this.addTranspiledModule(sTModule.module, sTModule.query);
                            tModules[id] = tModule;
                        });
                        yield Promise.all(Object.keys(tModules).map(id => {
                            const tModule = tModules[id];
                            return tModule.load(serializedTModules[id], tModules, this);
                        }));
                        manager_debug(`Loaded cache.`);
                    }
                }
            }
            catch (e) {
                if (false) {}
            }
            this.clearCache();
        });
    }
    dispose() {
        if (this.preset) {
            this.preset.getTranspilers().forEach(t => {
                if (t.dispose) {
                    t.dispose();
                }
            });
            if (this.fileResolver) {
                this.fileResolver.protocol.dispose();
            }
        }
    }
    deleteAPICache() {
        Object(lib_cache["d" /* ignoreNextCache */])();
        if (!this.id) {
            return Promise.resolve();
        }
        return Object(lib_cache["c" /* deleteAPICache */])(this.id, this.version);
    }
    clearCache() {
        return manager_awaiter(this, void 0, void 0, function* () {
            try {
                this.moduleDirectoriesCache = undefined;
                yield Object(lib_cache["a" /* clearIndexedDBCache */])();
            }
            catch (ex) {
                if (false) {}
            }
        });
    }
    /**
     * Get information about all transpilers currently registered for this manager
     */
    getTranspilerContext() {
        return manager_awaiter(this, void 0, void 0, function* () {
            const info = {};
            const data = yield Promise.all(this.preset
                .getTranspilers()
                .map(t => t
                .getTranspilerContext(this)
                .then(context => ({ name: t.name, data: context }))));
            data.forEach(t => {
                info[t.name] = t.data;
            });
            return info;
        });
    }
}

// CONCATENATED MODULE: ../sandpack-core/lib/transpiled-module/index.js



// EXTERNAL MODULE: ../sandpack-core/lib/transpiler/index.js + 1 modules
var lib_transpiler = __webpack_require__("../sandpack-core/lib/transpiler/index.js");

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/lodash-es/orderBy.js + 10 modules
var orderBy = __webpack_require__("../../node_modules/lodash-es/orderBy.js");

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/querystring-es3/index.js
var querystring_es3 = __webpack_require__("../../node_modules/querystring-es3/index.js");
var querystring_es3_default = /*#__PURE__*/__webpack_require__.n(querystring_es3);

// EXTERNAL MODULE: ../sandpack-core/lib/transpiler/transpilers/webpack/index.js
var webpack = __webpack_require__("../sandpack-core/lib/transpiler/transpilers/webpack/index.js");

// CONCATENATED MODULE: ../sandpack-core/lib/preset/preset.js
var preset_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



/**
 * This is essentially where it all comes together. The manager is responsible for
 * doing evaluation and transpilation using the Transpiler and Loader classes.
 *
 * You can build presets with this, for example the create-react-app template
 * could create a new instance of this and register all desired loaders.
 *
 * Note that this manager should never have state besides the transpilers and
 * the loaders, the only responsibility is to activate the right transpilers
 * and loaders.
 */
class preset_Preset {
    constructor(name, ignoredExtensions, alias, { hasDotEnv, processDependencies, setup, teardown, htmlDisabled, preEvaluate, } = {}) {
        this.experimentalEsmSupport = false;
        this.preTranspilers = [];
        this.postTranspilers = [
        // { transpiler: csbDynamicImportTranspiler },
        ];
        this.setAdditionalAliases = (aliases) => {
            this.alias = Object.assign(Object.assign({}, this.defaultAliases), aliases);
            this.aliasedPathCache = {};
        };
        this.reset = () => {
            this.loaders = [];
        };
        this.resetTranspilers = () => {
            this._transpilers.clear();
            this.loaders.length = 0;
        };
        this.aliasedPathCache = {};
        this.parseOptions = (options) => {
            if (options == null) {
                return {};
            }
            try {
                return JSON.parse(options);
            }
            catch (e) {
                return querystring_es3_default.a.parse(options);
            }
        };
        this.loaders = [];
        this._transpilers = new Map();
        this.name = name;
        this.hasDotEnv = hasDotEnv || false;
        this.alias = alias || {};
        this.aliasedPathCache = {};
        this.defaultAliases = alias || {};
        this.ignoredExtensions = ignoredExtensions || ['js', 'jsx', 'json', 'mjs'];
        const noop = () => { };
        this.processDependencies = processDependencies || ((deps) => preset_awaiter(this, void 0, void 0, function* () { return deps; }));
        this.setup = setup || noop;
        this.teardown = teardown || noop;
        this.preEvaluate = preEvaluate || noop;
        this.htmlDisabled = htmlDisabled || false;
        this.postTranspilers.forEach(transpiler => {
            this.addTranspiler(transpiler.transpiler);
        });
    }
    addTranspiler(t) {
        // TODO: Should this overwrite or skip?
        if (this._transpilers.has(t.name))
            return;
        this._transpilers.set(t.name, t);
    }
    getTranspiler(name) {
        return this._transpilers.get(name);
    }
    getTranspilers() {
        return Array.from(this._transpilers.values());
    }
    /**
     * Checks if there is an alias given for the path, if there is it will return
     * the altered path, otherwise it will just return the known path.
     */
    getAliasedPath(path) {
        const aliasCache = this.aliasedPathCache[path];
        if (aliasCache === null) {
            return path;
        }
        if (aliasCache) {
            return aliasCache;
        }
        const aliases = Object.keys(this.alias);
        const exactAliases = aliases.filter(a => a.endsWith('$'));
        const exactFoundAlias = exactAliases.find(a => {
            const alias = a.slice(0, -1);
            if (path === alias) {
                return true;
            }
            return false;
        });
        if (exactFoundAlias) {
            this.aliasedPathCache[path] = this.alias[exactFoundAlias];
            return this.alias[exactFoundAlias];
        }
        const pathParts = path.split('/');
        // Find matching aliases
        const foundAlias = Object(orderBy["a" /* default */])(aliases, a => -a.split('/').length).find(a => {
            const parts = a.split('/');
            return parts.every((p, i) => pathParts[i] === p);
        });
        if (foundAlias) {
            const replacedPath = path.replace(foundAlias, this.alias[foundAlias]);
            this.aliasedPathCache[path] = replacedPath;
            // if an alias is found we will replace the path with the alias
            return replacedPath;
        }
        this.aliasedPathCache[path] = null;
        return path;
    }
    registerTranspiler(test, transpilers, prepend = false) {
        const transpilerObject = {
            test,
            transpilers,
        };
        if (prepend) {
            this.loaders.unshift(transpilerObject);
        }
        else {
            this.loaders.push(transpilerObject);
        }
        transpilers.forEach(t => this.addTranspiler(t.transpiler));
        return this.loaders;
    }
    /**
     * Get transpilers from the given query, the query is webpack like:
     * eg. !babel-loader!./test.js
     */
    getLoaders(module, evaluator, query = '') {
        const loader = this.loaders.find(t => t.test(module));
        // Starting !, drop all transpilers
        const transpilers = query.startsWith('!') // eslint-disable-line no-nested-ternary
            ? []
            : loader
                ? loader.transpilers
                : [];
        // Remove "" values
        const transpilerNames = query.split('!').filter(Boolean);
        const extraTranspilers = transpilerNames
            .map(loaderName => loaderName.split('?'))
            .filter(([name]) => !!name)
            .map(([name, options]) => {
            let transpiler = this.getTranspiler(name);
            if (!transpiler) {
                const webpackLoader = new webpack["a" /* WebpackTranspiler */](name, evaluator);
                // If the loader is not installed, we try to run the webpack loader.
                this.addTranspiler(webpackLoader);
                transpiler = webpackLoader;
            }
            const parsedOptions = this.parseOptions(options);
            return { transpiler, options: parsedOptions };
        })
            .reverse(); // Reverse, because webpack is also in reverse order
        const finalTranspilers = [
            ...this.preTranspilers,
            ...transpilers,
            ...extraTranspilers,
            ...this.postTranspilers,
        ];
        return finalTranspilers;
    }
    /**
     * Get the query syntax of the module
     */
    getQuery(module, evaluator, query = '') {
        const loaders = this.getLoaders(module, evaluator, query).reverse();
        return `!${loaders
            .map(t => {
            const configStringified = querystring_es3_default.a.encode(t.options);
            const loaderQuery = configStringified ? '?' + configStringified : '';
            return t.transpiler.name + loaderQuery;
        })
            .join('!')}`;
    }
}

// CONCATENATED MODULE: ../sandpack-core/lib/preset/index.js


// CONCATENATED MODULE: ../sandpack-core/lib/index.js






/***/ }),

/***/ "../sandpack-core/lib/npm/dependencies-to-query.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return normalizeVersion; });
/* unused harmony export dependencyToQuery */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dependenciesToQuery; });
const VERSION_RE = /(\d+)(\.\d+)?(\.\d+)?(-[^\s+]+)?/;
function normalizeVersion(version) {
    const matches = version.match(VERSION_RE);
    if (!(matches === null || matches === void 0 ? void 0 : matches.length)) {
        // Invalid semver or a string like `latest` which is also an invalid semver but someone introduced it for some reason...
        return version;
    }
    return matches[0];
}
function dependencyToQuery(name, version) {
    return encodeURIComponent(`${name}@${normalizeVersion(version)}`);
}
function dependenciesToQuery(dependencies) {
    return Object.keys(dependencies)
        .sort()
        .map(name => dependencyToQuery(name, dependencies[name]))
        .join('+');
}


/***/ }),

/***/ "../sandpack-core/lib/npm/dynamic/fetch-npm-module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return combinedMetas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setCombinedMetas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return downloadAllDependencyFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return downloadDependency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fetchModule; });
/* harmony import */ var _codesandbox_common_lib_utils_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../common/lib/utils/path.js");
/* harmony import */ var _codesandbox_common_lib_utils_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_codesandbox_common_lib_utils_path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gensync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/gensync/index.js");
/* harmony import */ var gensync__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gensync__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sandbox_hooks_errors_dependency_not_found_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../sandbox-hooks/errors/dependency-not-found-error.js");
/* harmony import */ var sandbox_hooks_errors_dependency_not_found_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sandbox_hooks_errors_dependency_not_found_error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fetch_protocols__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../sandpack-core/lib/npm/dynamic/fetch-protocols/index.js");
/* harmony import */ var _utils_get_dependency_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../sandpack-core/lib/utils/get-dependency-name.js");
/* harmony import */ var _utils_extensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../sandpack-core/lib/utils/extensions.js");
/* harmony import */ var _resolver_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../sandpack-core/lib/resolver/resolver.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







// dependencyAndVersion => P<Meta>
const metas = new Map();
let combinedMetas = {}; // eslint-disable-line
const normalizedMetas = {};
// path => P<Module>
const packages = new Map();
function prependRootPath(meta, rootPath) {
    const newMeta = {};
    Object.keys(meta).forEach(path => {
        newMeta[rootPath + path] = meta[path];
    });
    return newMeta;
}
function setCombinedMetas(givenCombinedMetas) {
    combinedMetas = givenCombinedMetas;
}
// Strips the version of a path, eg. test/1.3.0 -> test
const ALIAS_REGEX = /\/\d*\.\d*\.\d*.*?(\/|$)/;
/*
 * Resolve name and version from npm aliases
 * e.g. "react": "npm:preact-compat@16.0.0"
 */
const resolveNPMAlias = (name, version) => {
    const IS_ALIAS = /^npm:/;
    if (!version.match(IS_ALIAS)) {
        return [name, version];
    }
    const parts = version.match(/^npm:(.+)@(.+)/);
    return [parts[1], parts[2]];
};
function getMeta(name, packageJSONPath, version, useFallback = false) {
    const [depName, depVersion] = resolveNPMAlias(name, version);
    const nameWithoutAlias = depName.replace(ALIAS_REGEX, '');
    const id = `${packageJSONPath || depName}@${depVersion}`;
    const foundMeta = metas.get(id);
    if (foundMeta) {
        return foundMeta.then(x => ({
            meta: x,
            fromCache: true,
        }));
    }
    const protocol = Object(_fetch_protocols__WEBPACK_IMPORTED_MODULE_3__[/* getFetchProtocol */ "a"])(depName, depVersion, useFallback);
    const newMeta = protocol.meta(nameWithoutAlias, depVersion).catch(e => {
        metas.delete(id);
        throw e;
    });
    metas.set(id, newMeta);
    return newMeta.then(x => ({
        meta: x,
        fromCache: false,
    }));
}
const downloadedAllDependencies = new Set();
/**
 * If the protocol supports it, download all files of the dependency
 * at once. It's an optimization.
 */
function downloadAllDependencyFiles(name, version) {
    return __awaiter(this, void 0, void 0, function* () {
        if (downloadedAllDependencies.has(`${name}@${version}`)) {
            return null;
        }
        downloadedAllDependencies.add(`${name}@${version}`);
        const [depName, depVersion] = resolveNPMAlias(name, version);
        const nameWithoutAlias = depName.replace(ALIAS_REGEX, '');
        const protocol = Object(_fetch_protocols__WEBPACK_IMPORTED_MODULE_3__[/* getFetchProtocol */ "a"])(depName, depVersion);
        if (protocol.massFiles) {
            // If the protocol supports returning many files at once, we opt for that instead.
            return protocol.massFiles(nameWithoutAlias, depVersion);
        }
        return null;
    });
}
const packagesToInvalidate = new Set();
function invalidatePendingPackages(manager) {
    for (const pkgName of packagesToInvalidate) {
        Object(_resolver_resolver__WEBPACK_IMPORTED_MODULE_6__[/* invalidatePackageFromCache */ "a"])(pkgName, manager.resolverCache);
        packagesToInvalidate.delete(pkgName);
    }
}
function downloadDependency(name, version, path) {
    const [depName, depVersion] = resolveNPMAlias(name, version);
    const id = depName + depVersion + path;
    const foundPkg = packages.get(id);
    if (foundPkg) {
        return foundPkg;
    }
    packagesToInvalidate.add(depName);
    const relativePath = path
        .replace(new RegExp(`.*${_codesandbox_common_lib_utils_path__WEBPACK_IMPORTED_MODULE_0__["join"]('/node_modules', depName)}`.replace('/', '\\/')), '')
        .replace(/#/g, '%23');
    const nameWithoutAlias = depName.replace(ALIAS_REGEX, '');
    const protocol = Object(_fetch_protocols__WEBPACK_IMPORTED_MODULE_3__[/* getFetchProtocol */ "a"])(depName, depVersion);
    const newPkg = protocol
        .file(nameWithoutAlias, depVersion, relativePath)
        .catch(() => __awaiter(this, void 0, void 0, function* () {
        const fallbackProtocol = Object(_fetch_protocols__WEBPACK_IMPORTED_MODULE_3__[/* getFetchProtocol */ "a"])(nameWithoutAlias, depVersion, true);
        return fallbackProtocol.file(nameWithoutAlias, depVersion, relativePath);
    }))
        .then(code => ({
        path,
        code,
        downloaded: true,
    }));
    packages.set(id, newPkg);
    return newPkg;
}
function resolvePath(path, currentTModule, manager, defaultExtensions = _utils_extensions__WEBPACK_IMPORTED_MODULE_5__[/* DEFAULT_EXTENSIONS */ "a"], meta = {}, ignoreDepNameVersion = '') {
    invalidatePendingPackages(manager);
    const currentPath = currentTModule.module.path;
    const isFile = gensync__WEBPACK_IMPORTED_MODULE_1___default()({
        sync: (p) => Boolean(manager.transpiledModules[p]) || Boolean(meta[p]),
    });
    const readFile = gensync__WEBPACK_IMPORTED_MODULE_1___default()({
        sync: () => {
            throw new Error('Sync not supported for readFile');
        },
        async: (p) => __awaiter(this, void 0, void 0, function* () {
            try {
                const tModule = yield manager.resolveTranspiledModule(p, '/', []);
                tModule.initiators.add(currentTModule);
                currentTModule.dependencies.add(tModule);
                return tModule.module.code;
            }
            catch (e) {
                const depPath = p.replace(/.*\/node_modules\//, '');
                const depName = Object(_utils_get_dependency_name__WEBPACK_IMPORTED_MODULE_4__[/* getDependencyName */ "b"])(depPath);
                // To prevent infinite loops we keep track of which dependencies have been requested before.
                if ((!manager.transpiledModules[p] && !meta[p]) ||
                    ignoreDepNameVersion === depName) {
                    const err = new Error('Could not find ' + p);
                    // @ts-ignore
                    err.code = 'ENOENT';
                    throw err;
                }
                // eslint-disable-next-line
                const subDepVersionVersionInfo = yield getDependencyVersion(currentTModule, manager, depName);
                if (subDepVersionVersionInfo) {
                    const { version: subDepVersion } = subDepVersionVersionInfo;
                    try {
                        const module = yield downloadDependency(depName, subDepVersion, p).finally(() => {
                            packagesToInvalidate.add(depName);
                            invalidatePendingPackages(manager);
                        });
                        if (module) {
                            manager.addModule(module);
                            const tModule = manager.addTranspiledModule(module, '');
                            tModule.initiators.add(currentTModule);
                            currentTModule.dependencies.add(tModule);
                            return module.code;
                        }
                    }
                    catch (er) {
                        // Let it throw the error
                    }
                }
                throw e;
            }
        }),
    });
    return Object(_resolver_resolver__WEBPACK_IMPORTED_MODULE_6__[/* resolveAsync */ "b"])(path, {
        resolverCache: manager.resolverCache,
        filename: currentPath,
        extensions: defaultExtensions.map(ext => '.' + ext),
        moduleDirectories: ['node_modules', manager.envVariables.NODE_PATH].filter(Boolean),
        isFile,
        readFile,
    });
}
function getDependencyVersion(currentTModule, manager, dependencyName) {
    return __awaiter(this, void 0, void 0, function* () {
        const { manifest } = manager;
        try {
            const filepath = _codesandbox_common_lib_utils_path__WEBPACK_IMPORTED_MODULE_0__["join"](dependencyName, 'package.json');
            const foundPackageJSONPath = yield resolvePath(filepath, currentTModule, manager, [], {}, dependencyName);
            // If the dependency is in the root we get it from the manifest, as the manifest
            // contains all the versions that we really wanted to resolve in the first place.
            // An example of this is csb.dev packages, the package.json version doesn't say the
            // actual version, but the semver it relates to. In this case we really want to have
            // the actual url
            if (foundPackageJSONPath ===
                _codesandbox_common_lib_utils_path__WEBPACK_IMPORTED_MODULE_0__["join"]('/node_modules', dependencyName, 'package.json')) {
                const rootDependency = manifest.dependencies.find(dep => dep.name === dependencyName);
                if (rootDependency) {
                    return {
                        packageJSONPath: foundPackageJSONPath,
                        version: rootDependency.version,
                    };
                }
            }
            const packageJSON = manager.transpiledModules[foundPackageJSONPath] &&
                manager.transpiledModules[foundPackageJSONPath].module.code;
            const { version } = JSON.parse(packageJSON);
            const savedDepDep = manifest.dependencyDependencies[dependencyName];
            if (savedDepDep &&
                savedDepDep.resolved === version &&
                savedDepDep.semver.startsWith('https://')) {
                return {
                    packageJSONPath: foundPackageJSONPath,
                    version: savedDepDep.semver,
                };
            }
            if (packageJSON !== '//empty.js') {
                return { packageJSONPath: foundPackageJSONPath, version };
            }
        }
        catch (e) {
            /* do nothing */
        }
        let version = null;
        if (manifest.dependencyDependencies[dependencyName]) {
            if (manifest.dependencyDependencies[dependencyName].semver.startsWith('https://')) {
                version = manifest.dependencyDependencies[dependencyName].semver;
            }
            else {
                version = manifest.dependencyDependencies[dependencyName].resolved;
            }
        }
        else {
            const dep = manifest.dependencies.find(m => m.name === dependencyName);
            if (dep) {
                // eslint-disable-next-line
                version = dep.version;
            }
        }
        if (version) {
            return { packageJSONPath: null, version };
        }
        return null;
    });
}
function fetchModule(path, currentTModule, manager, defaultExtensions = _utils_extensions__WEBPACK_IMPORTED_MODULE_5__[/* DEFAULT_EXTENSIONS */ "a"]) {
    return __awaiter(this, void 0, void 0, function* () {
        const currentPath = currentTModule.module.path;
        // Get the last part of the path as dependency name for paths like
        // instantsearch.js/node_modules/lodash/sum.js
        // In this case we want to get the lodash dependency info
        const dependencyName = Object(_utils_get_dependency_name__WEBPACK_IMPORTED_MODULE_4__[/* getDependencyName */ "b"])(path.replace(/.*\/node_modules\//, ''));
        packagesToInvalidate.add(dependencyName);
        invalidatePendingPackages(manager);
        const versionInfo = yield getDependencyVersion(currentTModule, manager, dependencyName);
        if (versionInfo === null) {
            throw new sandbox_hooks_errors_dependency_not_found_error__WEBPACK_IMPORTED_MODULE_2___default.a(path);
        }
        const { packageJSONPath, version } = versionInfo;
        let meta;
        try {
            meta = yield getMeta(dependencyName, packageJSONPath, version);
        }
        catch (e) {
            // Use fallback
            meta = yield getMeta(dependencyName, packageJSONPath, version, true);
        }
        const rootPath = packageJSONPath
            ? _codesandbox_common_lib_utils_path__WEBPACK_IMPORTED_MODULE_0__["dirname"](packageJSONPath)
            : _codesandbox_common_lib_utils_path__WEBPACK_IMPORTED_MODULE_0__["join"]('/node_modules', dependencyName);
        const normalizedCacheKey = dependencyName + rootPath;
        const normalizedMeta = normalizedMetas[normalizedCacheKey] || prependRootPath(meta.meta, rootPath);
        if (!normalizedMetas[normalizedCacheKey]) {
            normalizedMetas[normalizedCacheKey] = normalizedMeta;
        }
        else if (!meta.fromCache) {
            combinedMetas = Object.assign(Object.assign({}, combinedMetas), normalizedMeta);
        }
        packagesToInvalidate.add(dependencyName);
        invalidatePendingPackages(manager);
        const foundPath = yield resolvePath(path, currentTModule, manager, defaultExtensions, normalizedMeta);
        if (foundPath === '//empty.js') {
            // Mark the path of the module as the real module, because during evaluation
            // we don't have meta to find which modules are browser modules and we still
            // need to return an empty module for browser modules.
            const isDependency = /^(\w|@\w|@-)/.test(path);
            const fullFilePath = isDependency
                ? _codesandbox_common_lib_utils_path__WEBPACK_IMPORTED_MODULE_0__["join"]('/node_modules', path)
                : _codesandbox_common_lib_utils_path__WEBPACK_IMPORTED_MODULE_0__["join"](currentPath, path);
            return {
                path: fullFilePath,
                code: 'module.exports = {};',
                requires: [],
                stubbed: true,
            };
        }
        return downloadDependency(dependencyName, version, foundPath).finally(() => {
            packagesToInvalidate.add(dependencyName);
            invalidatePendingPackages(manager);
        });
    });
}


/***/ }),

/***/ "../sandpack-core/lib/npm/dynamic/fetch-protocols/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ preloadedProtocols; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ prependToContributedProtocols; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ getFetchProtocol; });

// UNUSED EXPORTS: setContributedProtocols

// EXTERNAL MODULE: ../common/lib/utils/ci.js
var ci = __webpack_require__("../common/lib/utils/ci.js");

// EXTERNAL MODULE: ../sandpack-core/lib/npm/dynamic/fetch-protocols/utils/tar-store.js
var tar_store = __webpack_require__("../sandpack-core/lib/npm/dynamic/fetch-protocols/utils/tar-store.js");

// CONCATENATED MODULE: ../sandpack-core/lib/npm/dynamic/fetch-protocols/csb.js
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function getTarballUrl(url) {
    return url.replace(/\/_pkg.tgz$/, '');
}
class csb_CsbFetcher {
    constructor() {
        this.tarStore = new tar_store["a" /* TarStore */]();
    }
    file(name, version, path) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = getTarballUrl(version);
            return this.tarStore.file(name, url, path);
        });
    }
    meta(name, version) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = getTarballUrl(version);
            return this.tarStore.meta(name, url);
        });
    }
}

// EXTERNAL MODULE: ../sandpack-core/lib/npm/dynamic/fetch-protocols/utils.js
var utils = __webpack_require__("../sandpack-core/lib/npm/dynamic/fetch-protocols/utils.js");

// CONCATENATED MODULE: ../sandpack-core/lib/npm/dynamic/fetch-protocols/unpkg.js
var unpkg_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function normalize(files, fileObject = {}) {
    for (let i = 0; i < files.length; i += 1) {
        const { files: childFiles, type, path } = files[i];
        if (type === 'file') {
            const absolutePath = path;
            fileObject[absolutePath] = true; // eslint-disable-line no-param-reassign
        }
        if (childFiles) {
            normalize(childFiles, fileObject);
        }
    }
    return fileObject;
}
class unpkg_UnpkgFetcher {
    file(name, version, path) {
        return unpkg_awaiter(this, void 0, void 0, function* () {
            const url = `https://unpkg.com/${name}@${version}${path}`;
            const result = yield Object(utils["a" /* fetchWithRetries */])(url).then(x => x.text());
            return result;
        });
    }
    meta(name, version) {
        return unpkg_awaiter(this, void 0, void 0, function* () {
            const url = `https://unpkg.com/${name}@${version}/?meta`;
            const result = yield Object(utils["a" /* fetchWithRetries */])(url).then(x => x.json());
            return normalize(result.files, {});
        });
    }
}

// EXTERNAL MODULE: ../sandpack-core/lib/npm/dynamic/fetch-npm-module.js
var fetch_npm_module = __webpack_require__("../sandpack-core/lib/npm/dynamic/fetch-npm-module.js");

// CONCATENATED MODULE: ../sandpack-core/lib/npm/dynamic/fetch-protocols/jsdelivr/utils.js
function normalizeJSDelivr(files, fileObject = {}) {
    for (let i = 0; i < files.length; i += 1) {
        fileObject[files[i].name] = true; // eslint-disable-line no-param-reassign
    }
    return fileObject;
}

// CONCATENATED MODULE: ../sandpack-core/lib/npm/dynamic/fetch-protocols/jsdelivr/jsdelivr-npm.js
var jsdelivr_npm_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class jsdelivr_npm_JSDelivrNPMFetcher {
    file(name, version, path) {
        return jsdelivr_npm_awaiter(this, void 0, void 0, function* () {
            const url = `https://cdn.jsdelivr.net/npm/${name}@${version}${path}`;
            const result = yield Object(utils["a" /* fetchWithRetries */])(url).then(x => x.text());
            return result;
        });
    }
    meta(name, version) {
        return jsdelivr_npm_awaiter(this, void 0, void 0, function* () {
            // if it's a tag it won't work, so we fetch latest version otherwise
            const latestVersion = /^\d/.test(version)
                ? version
                : JSON.parse((yield Object(fetch_npm_module["c" /* downloadDependency */])(name, version, '/package.json')).code).version;
            const url = `https://data.jsdelivr.com/v1/package/npm/${name}@${latestVersion}/flat`;
            const result = yield Object(utils["a" /* fetchWithRetries */])(url).then(x => x.json());
            return normalizeJSDelivr(result.files, {});
        });
    }
}

// CONCATENATED MODULE: ../sandpack-core/lib/npm/dynamic/fetch-protocols/jsdelivr/jsdelivr-gh.js
var jsdelivr_gh_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


/**
 * Converts urls like "https://github.com/user/repo.git" to "user/repo".
 */
const GH_RE = /^(((https:\/\/)|(git(\+(ssh|https))?:\/\/(.*@)?))(www\.)?github\.com(\/|:))?(([^\s#/]*)\/([^\s#/]*))(#(.*))?$/;
function convertGitHubURLToVersion(ghUrl) {
    const result = ghUrl.match(GH_RE);
    if (result && result[10]) {
        const repo = result[10];
        const version = result[14];
        const cleanedRepo = repo.replace(/\.git$/, '');
        if (version) {
            return `${cleanedRepo}@${version}`;
        }
        return cleanedRepo;
    }
    return ghUrl;
}
function isGithubDependency(ghUrl) {
    return GH_RE.test(ghUrl);
}
class jsdelivr_gh_JSDelivrGHFetcher {
    file(name, version, path) {
        return jsdelivr_gh_awaiter(this, void 0, void 0, function* () {
            const url = `https://cdn.jsdelivr.net/gh/${convertGitHubURLToVersion(version)}${path}`;
            const result = yield Object(utils["a" /* fetchWithRetries */])(url).then(x => x.text());
            return result;
        });
    }
    meta(name, version) {
        return jsdelivr_gh_awaiter(this, void 0, void 0, function* () {
            // Split the repo and requested version
            const [repo, repoVersion] = convertGitHubURLToVersion(version).split('@');
            // Fetch repo meta from GitHub
            // If the version is not specified, we use the default_branch from the repo meta
            let metaBranch = repoVersion;
            if (!metaBranch) {
                metaBranch = yield fetch(`https://api.github.com/repos/${repo}`)
                    .then(x => x.json())
                    .then(x => x.default_branch);
            }
            // We get the sha of the requested version
            const sha = yield fetch(`https://api.github.com/repos/${repo}/commits/${metaBranch}`)
                .then(x => x.json())
                .then(x => x.sha);
            const url = `https://data.jsdelivr.com/v1/package/gh/${repo}@${sha}/flat`;
            const result = yield Object(utils["a" /* fetchWithRetries */])(url).then(x => x.json());
            return normalizeJSDelivr(result.files, {});
        });
    }
}

// CONCATENATED MODULE: ../sandpack-core/lib/npm/dynamic/fetch-protocols/tar.js
var tar_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function isTarDependency(uri) {
    try {
        const url = new URL(uri);
        return url.protocol === 'http:' || url.protocol === 'https:';
    }
    catch (err) {
        // do nothing...
    }
    return false;
}
class tar_TarFetcher {
    constructor() {
        this.tarStore = new tar_store["a" /* TarStore */]();
    }
    file(name, version, path) {
        return tar_awaiter(this, void 0, void 0, function* () {
            return this.tarStore.file(name, version, path);
        });
    }
    meta(name, version) {
        return tar_awaiter(this, void 0, void 0, function* () {
            return this.tarStore.meta(name, version);
        });
    }
}

// CONCATENATED MODULE: ../sandpack-core/lib/npm/dynamic/fetch-protocols/gist.js
var gist_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function gist_normalize(files) {
    const normalizedResponse = {};
    const fileNames = Object.keys(files);
    for (let i = 0; i < fileNames.length; i += 1) {
        const fileName = fileNames[i];
        const absolutePath = '/' + fileName;
        normalizedResponse[absolutePath] = true; // eslint-disable-line no-param-reassign
    }
    return normalizedResponse;
}
class gist_GistFetcher {
    constructor() {
        this.fetchedGists = {};
    }
    getAPIURl(version) {
        const gistId = version.replace(/.*\//, '');
        return 'https://api.github.com/gists/' + gistId;
    }
    fetchGist(version) {
        return gist_awaiter(this, void 0, void 0, function* () {
            if (this.fetchedGists[version]) {
                return this.fetchedGists[version];
            }
            const url = this.getAPIURl(version);
            const result = yield Object(utils["a" /* fetchWithRetries */])(url).then(x => x.json());
            this.fetchedGists[version] = result;
            return result;
        });
    }
    file(name, version, path) {
        return gist_awaiter(this, void 0, void 0, function* () {
            const result = yield this.fetchGist(version);
            const file = result.files[path.replace(/^\//, '')];
            if (!file) {
                throw new Error('File not found: ' + path);
            }
            if (file.truncated) {
                return Object(utils["a" /* fetchWithRetries */])(file.raw_url).then(t => t.text());
            }
            return file.content;
        });
    }
    meta(name, version) {
        return gist_awaiter(this, void 0, void 0, function* () {
            const result = yield this.fetchGist(version);
            return gist_normalize(result.files);
        });
    }
}

// CONCATENATED MODULE: ../sandpack-core/lib/npm/dynamic/fetch-protocols/index.js







let contributedProtocols = [];
const preloadedProtocols = {
    jsdelivr: new jsdelivr_npm_JSDelivrNPMFetcher(),
    unpkg: new unpkg_UnpkgFetcher(),
};
const protocols = [
    {
        protocol: new gist_GistFetcher(),
        condition: (name, version) => version.startsWith('gist:'),
    },
    {
        protocol: new csb_CsbFetcher(),
        condition: (name, version) => ci["CSB_PKG_PROTOCOL"].test(version),
    },
    {
        protocol: new jsdelivr_gh_JSDelivrGHFetcher(),
        condition: (name, version) => isGithubDependency(version),
    },
    /**
     * npmjs.cf has been deprecated, while registry.npmjs.org has CORS supports now:
     *
     * - npmjs.cf depreacation notice: https://github.com/npmjs-cf/meta/issues/8
     * - npm registry CORS support: https://github.com/npm/feedback/discussions/117#discussioncomment-2691120
     */
    // {
    //   protocol: new ProtocolTransformer(new TarFetcher(), (name, version) => [
    //     name,
    //     version.replace(
    //       'https://registry.npmjs.org/',
    //       'https://registry.npmjs.cf/'
    //     ),
    //   ]),
    //   condition: (name, version) =>
    //     version.startsWith('https://registry.npmjs.org/'),
    // },
    {
        protocol: new tar_TarFetcher(),
        condition: (name, version) => isTarDependency(version),
    },
    {
        protocol: preloadedProtocols.unpkg,
        condition: (_name, _version, useFallback) => useFallback,
    },
    { protocol: preloadedProtocols.jsdelivr, condition: () => true },
];
function setContributedProtocols(newProtocols) {
    contributedProtocols = newProtocols;
    return contributedProtocols;
}
function prependToContributedProtocols(newProtocols) {
    contributedProtocols.unshift(...newProtocols);
    return contributedProtocols;
}
function getFetchProtocol(depName, depVersion, useFallback = false) {
    var _a;
    const runCondition = (p) => p.condition(depName, depVersion, useFallback);
    return (((_a = contributedProtocols.find(runCondition)) === null || _a === void 0 ? void 0 : _a.protocol) ||
        protocols.find(runCondition).protocol);
}


/***/ }),

/***/ "../sandpack-core/lib/npm/dynamic/fetch-protocols/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchWithRetries; });
/* harmony import */ var _codesandbox_common_lib_utils_delay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../common/lib/utils/delay.js");
/* harmony import */ var _codesandbox_common_lib_utils_delay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_codesandbox_common_lib_utils_delay__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function fetchWithRetries(url, retries = 2, requestInit) {
    return __awaiter(this, void 0, void 0, function* () {
        const doFetch = () => window.fetch(url, requestInit).then(x => {
            if (x.ok) {
                return x;
            }
            const error = new Error(`Could not fetch ${url}`);
            error.responseObject = x;
            throw error;
        });
        let lastTryTime = 0;
        for (let i = 0; i < retries; i++) {
            if (Date.now() - lastTryTime < 3000) {
                // Ensure that we at least wait 3s before retrying a request to prevent rate limits
                // eslint-disable-next-line
                yield _codesandbox_common_lib_utils_delay__WEBPACK_IMPORTED_MODULE_0___default()(3000 - (Date.now() - lastTryTime));
            }
            try {
                lastTryTime = Date.now();
                // eslint-disable-next-line
                return yield doFetch();
            }
            catch (e) {
                console.error(e);
                if (i === retries - 1) {
                    throw e;
                }
            }
        }
        throw new Error('Could not fetch');
    });
}


/***/ }),

/***/ "../sandpack-core/lib/npm/dynamic/fetch-protocols/utils/tar-store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarStore; });
/* harmony import */ var isomorphic_untar_gzip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/isomorphic-untar-gzip/lib/browser.js");
/* harmony import */ var isomorphic_untar_gzip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_untar_gzip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../sandpack-core/lib/npm/dynamic/fetch-protocols/utils.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


/**
 * Responsible for fetching, caching and converting tars to a structure that sandpack
 * understands and can use
 */
class TarStore {
    constructor() {
        this.fetchedTars = {};
    }
    generateKey(name, version) {
        return name + '||' + version;
    }
    normalizeTar(tarContents) {
        const normalized = {};
        tarContents.forEach(tar => {
            /**
             * TODO: it's necessary to encode the font files as base64,
             * otherwise they will be corrupted when fetched by the sandpack service worker.
             *
             * Ideally, in the future, we should use ArrayBuffer instead of strings
             */
            const encode = tar.name.endsWith('.woff2') ||
                tar.name.endsWith('.woff') ||
                tar.name.endsWith('.ttf')
                ? 'base64'
                : undefined;
            normalized[tar.name.replace(/^[^/]+/, '')] = {
                content: Buffer.from(tar.buffer).toString(encode),
            };
        });
        return normalized;
    }
    fetchTar(name, version, requestInit) {
        const tarKey = this.generateKey(name, version);
        this.fetchedTars[tarKey] = (() => __awaiter(this, void 0, void 0, function* () {
            const file = yield Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* fetchWithRetries */ "a"])(version, 6, requestInit).then(x => x.arrayBuffer());
            const untarredFile = yield isomorphic_untar_gzip__WEBPACK_IMPORTED_MODULE_0___default()(file);
            const normalizedTar = this.normalizeTar(untarredFile);
            return normalizedTar;
        }))();
        return this.fetchedTars[tarKey];
    }
    file(name, url, path, requestInit) {
        return __awaiter(this, void 0, void 0, function* () {
            const tarKey = this.generateKey(name, url);
            const tar = yield (this.fetchedTars[tarKey] ||
                this.fetchTar(name, url, requestInit));
            return tar[path].content;
        });
    }
    meta(name, url, requestInit) {
        return __awaiter(this, void 0, void 0, function* () {
            const tarKey = this.generateKey(name, url);
            const tar = yield (this.fetchedTars[tarKey] ||
                this.fetchTar(name, url, requestInit));
            const meta = {};
            Object.keys(tar).forEach(path => {
                meta[path] = true;
            });
            return meta;
        });
    }
    massFiles(name, url, requestInit) {
        return __awaiter(this, void 0, void 0, function* () {
            const tarKey = this.generateKey(name, url);
            const tar = yield (this.fetchedTars[tarKey] ||
                this.fetchTar(name, url, requestInit));
            return Object.keys(tar).map(path => ({
                path,
                code: tar[path].content,
                downloaded: true,
            }));
        });
    }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../../node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../sandpack-core/lib/resolver/resolver.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ invalidatePackageFromCache; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ resolveSync; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ resolveAsync; });

// UNUSED EXPORTS: normalizeModuleSpecifier, resolver

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/gensync/index.js
var gensync = __webpack_require__("../../node_modules/gensync/index.js");
var gensync_default = /*#__PURE__*/__webpack_require__.n(gensync);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/micromatch/index.js
var micromatch = __webpack_require__("../../node_modules/micromatch/index.js");
var micromatch_default = /*#__PURE__*/__webpack_require__.n(micromatch);

// EXTERNAL MODULE: ../common/lib/utils/path.js
var path = __webpack_require__("../common/lib/utils/path.js");

// CONCATENATED MODULE: ../sandpack-core/lib/resolver/errors/ModuleNotFound.js
class ModuleNotFoundError extends Error {
    constructor(filepath, parent) {
        super(`Cannot find module '${filepath}' from '${parent}'`);
        this.code = 'MODULE_NOT_FOUND';
        this.parent = parent;
        this.filepath = filepath;
    }
}

// CONCATENATED MODULE: ../sandpack-core/lib/resolver/utils/alias.js

function normalizeAliasFilePath(specifier, pkgRoot, 
// This can be set to false to fallback to returning the specifier in case it can be a node_module
isFilePath = true) {
    if (specifier[0] === '/') {
        return specifier;
    }
    if (specifier[0] === '.' || isFilePath) {
        return path["join"](pkgRoot, specifier);
    }
    return specifier;
}

// CONCATENATED MODULE: ../sandpack-core/lib/resolver/utils/exports.js

// exports keys, sorted from high to low priority
const EXPORTS_KEYS = ['browser', 'development', 'default', 'import', 'require'];
function normalizePackageExport(filepath, pkgRoot) {
    return normalizeAliasFilePath(filepath.replace(/\*/g, '$1'), pkgRoot);
}
function extractPathFromExport(exportValue, pkgRoot, checkedExportKeys = EXPORTS_KEYS) {
    if (!exportValue) {
        return false;
    }
    if (typeof exportValue === 'string') {
        return normalizePackageExport(exportValue, pkgRoot);
    }
    if (Array.isArray(exportValue)) {
        const foundPaths = exportValue
            .map(v => extractPathFromExport(v, pkgRoot))
            .filter(Boolean);
        if (!foundPaths.length) {
            return false;
        }
        return foundPaths[0];
    }
    if (typeof exportValue === 'object') {
        for (const key of checkedExportKeys) {
            const exportFilename = exportValue[key];
            if (exportFilename !== undefined) {
                if (typeof exportFilename === 'string') {
                    return normalizePackageExport(exportFilename, pkgRoot);
                }
                return extractPathFromExport(exportFilename, pkgRoot, checkedExportKeys);
            }
        }
        return false;
    }
    throw new Error(`Unsupported export type ${typeof exportValue}`);
}

// CONCATENATED MODULE: ../sandpack-core/lib/resolver/utils/constants.js
const EMPTY_SHIM = '//empty.js';

// CONCATENATED MODULE: ../sandpack-core/lib/resolver/utils/pkg-json.js



// alias/exports/main keys, sorted from high to low priority
const MAIN_PKG_FIELDS = ['module', 'browser', 'main', 'jsnext:main'];
const PKG_ALIAS_FIELDS = ['browser', 'alias'];
const COMMONJS_EXPORT_KEYS = ['browser', 'development', 'default', 'require'];
function forceCommonJs(name, version) {
    return name === 'chevrotain' && version.startsWith('10.');
}
// See https://webpack.js.org/guides/package-exports/ for a good reference on how this should work
// We aren't completely spec compliant but we're trying to match it as close as possible without nuking performance
function processPackageJSON(content, pkgRoot) {
    if (!content || typeof content !== 'object') {
        return { aliases: {}, hasExports: false };
    }
    const aliases = {};
    const hasExports = content.exports && pkgRoot !== '/';
    // If there are exports it should have a main field configured
    if (!hasExports) {
        for (const mainField of MAIN_PKG_FIELDS) {
            if (typeof content[mainField] === 'string') {
                aliases[pkgRoot] = normalizeAliasFilePath(content[mainField], pkgRoot);
                break;
            }
        }
    }
    // load exports if it's not the root pkg.json
    if (hasExports) {
        if (typeof content.exports === 'string') {
            aliases[pkgRoot] = normalizeAliasFilePath(content.exports, pkgRoot);
        }
        else if (typeof content.exports === 'object') {
            const exportKeys = Object.keys(content.exports);
            if (!exportKeys[0].startsWith('.')) {
                const checkedExportKeys = forceCommonJs(content.name, content.version)
                    ? COMMONJS_EXPORT_KEYS
                    : undefined;
                const resolvedExport = extractPathFromExport(content.exports, pkgRoot, checkedExportKeys);
                if (!resolvedExport) {
                    throw new Error(`Could not find a valid export for ${pkgRoot}`);
                }
                aliases[pkgRoot] = resolvedExport;
            }
            else {
                for (const exportKey of exportKeys) {
                    const exportValue = extractPathFromExport(content.exports[exportKey], pkgRoot);
                    const normalizedKey = normalizeAliasFilePath(exportKey, pkgRoot);
                    aliases[normalizedKey] = exportValue || EMPTY_SHIM;
                }
            }
        }
    }
    // These aliases should happen as a seperate pass from exports
    // but let's just give it a higher priority for now, we can refactor it later
    if (content.browser === false) {
        aliases[pkgRoot] = EMPTY_SHIM;
    }
    for (const aliasFieldKey of PKG_ALIAS_FIELDS) {
        const aliasField = content[aliasFieldKey];
        if (typeof aliasField === 'object') {
            for (const key of Object.keys(aliasField)) {
                const val = aliasField[key] || EMPTY_SHIM;
                const normalizedKey = normalizeAliasFilePath(key, pkgRoot, false);
                const normalizedValue = normalizeAliasFilePath(val, pkgRoot, false);
                aliases[normalizedKey] = normalizedValue;
                if (aliasFieldKey !== 'browser') {
                    aliases[`${normalizedKey}/*`] = `${normalizedValue}/$1`;
                }
            }
        }
    }
    return { aliases, hasExports };
}

// CONCATENATED MODULE: ../sandpack-core/lib/resolver/utils/fs.js

function* isFile(filepath, isFileFn) {
    if (filepath === EMPTY_SHIM) {
        return true;
    }
    return yield* isFileFn(filepath);
}
function getParentDirectories(filepath, rootDir = '/') {
    const parts = filepath.split('/');
    const directories = [];
    while (parts.length > 0) {
        const directory = parts.join('/') || '/';
        // Test /foo vs /foo-something - /foo-something is not in rootDir
        if (directory.length < rootDir.length || !directory.startsWith(rootDir)) {
            break;
        }
        directories.push(directory);
        parts.pop();
    }
    return directories;
}

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/strip-json-comments/index.js
var strip_json_comments = __webpack_require__("../../node_modules/strip-json-comments/index.js");
var strip_json_comments_default = /*#__PURE__*/__webpack_require__.n(strip_json_comments);

// CONCATENATED MODULE: ../sandpack-core/lib/resolver/utils/tsconfig.js


function processTSConfig(content) {
    var _a;
    const parsed = ((_a = JSON.parse(strip_json_comments_default()(content))) === null || _a === void 0 ? void 0 : _a.compilerOptions) || {};
    if (parsed.baseUrl) {
        const paths = {};
        if (parsed.paths) {
            for (const p of Object.keys(parsed.paths)) {
                paths[p] = parsed.paths[p].map((val) => {
                    return path["join"]('/', parsed.baseUrl, val).replace(/\*/g, '');
                });
            }
        }
        return {
            baseUrl: path["join"]('/', parsed.baseUrl),
            paths,
        };
    }
    return null;
}
function getPotentialPathsFromTSConfig(moduleSpecifier, config) {
    const res = [];
    for (const p of Object.keys(config.paths)) {
        if (p.endsWith('*')) {
            const prefix = p.substring(0, p.length - 1);
            if (moduleSpecifier.startsWith(prefix)) {
                const suffix = moduleSpecifier.substr(prefix.length);
                for (const alias of config.paths[p]) {
                    res.push(alias + suffix);
                }
            }
        }
        else if (moduleSpecifier === p) {
            res.push(...config.paths[p]);
        }
    }
    res.push(path["join"](config.baseUrl, moduleSpecifier));
    return res;
}

// CONCATENATED MODULE: ../sandpack-core/lib/resolver/resolver.js
/* eslint-disable no-else-return */
/* eslint-disable no-continue */







function invalidatePackageFromCache(pkgName, cache) {
    const lowerPkgName = pkgName.toLowerCase();
    for (const [key] of cache) {
        if (key.toLowerCase().includes(lowerPkgName)) {
            cache.delete(key);
        }
    }
}
function normalizeResolverOptions(opts) {
    const normalizedModuleDirectories = opts.moduleDirectories
        ? new Set(opts.moduleDirectories.map(p => (p[0] === '/' ? p.substring(1) : p)))
        : new Set();
    normalizedModuleDirectories.add('node_modules');
    return {
        filename: opts.filename,
        extensions: [...new Set(['', ...opts.extensions])],
        isFile: opts.isFile,
        readFile: opts.readFile,
        moduleDirectories: [...normalizedModuleDirectories],
        resolverCache: opts.resolverCache || new Map(),
        pkgJson: opts.pkgJson,
    };
}
function* loadPackageJSON(directory, opts) {
    const packageFilePath = path["join"](directory, 'package.json');
    let packageContent = opts.resolverCache.get(packageFilePath);
    if (packageContent === undefined) {
        try {
            packageContent = processPackageJSON(JSON.parse(yield* opts.readFile(packageFilePath)), path["dirname"](packageFilePath));
            opts.resolverCache.set(packageFilePath, packageContent);
        }
        catch (err) {
            opts.resolverCache.set(packageFilePath, false);
        }
    }
    if (packageContent) {
        return {
            filepath: packageFilePath,
            content: packageContent,
        };
    }
    return null;
}
function* loadNearestPackageJSON(filepath, opts, rootDir = '/') {
    const directories = getParentDirectories(filepath, rootDir);
    for (const directory of directories) {
        const foundPackageJSON = yield* loadPackageJSON(directory, opts);
        if (foundPackageJSON) {
            return foundPackageJSON;
        }
    }
    return null;
}
function resolveFile(filepath, dir) {
    switch (filepath[0]) {
        case '.':
            return path["join"](dir, filepath);
        case '/':
            return filepath;
        default:
            // is a node module
            return filepath;
    }
}
function resolveAlias(pkgJson, filename) {
    const aliases = pkgJson.content.aliases;
    let relativeFilepath = filename;
    let aliasedPath = relativeFilepath;
    let count = 0;
    do {
        relativeFilepath = aliasedPath;
        // Simply check to ensure we don't infinitely alias files due to a misconfiguration of a package/user
        if (count > 5) {
            throw new Error('Could not resolve file due to a cyclic alias');
        }
        count++;
        // Check for direct matches
        if (aliases[relativeFilepath]) {
            aliasedPath = aliases[relativeFilepath];
            continue;
        }
        for (const aliasKey of Object.keys(aliases)) {
            if (!aliasKey.includes('*')) {
                continue;
            }
            const re = micromatch_default.a.makeRe(aliasKey, { capture: true });
            if (re.test(relativeFilepath)) {
                const val = aliases[aliasKey];
                aliasedPath = relativeFilepath.replace(re, val);
                if (aliasedPath.startsWith(relativeFilepath)) {
                    const newAddition = aliasedPath.substr(relativeFilepath.length);
                    if (!newAddition.includes('/') &&
                        relativeFilepath.endsWith(newAddition)) {
                        aliasedPath = relativeFilepath;
                    }
                }
                break;
            }
        }
        // No new aliased path
        break;
    } while (relativeFilepath !== aliasedPath);
    return aliasedPath || relativeFilepath;
}
function* resolveModule(moduleSpecifier, opts) {
    const dirPath = path["dirname"](opts.filename);
    const filename = resolveFile(moduleSpecifier, dirPath);
    const isAbsoluteFilename = filename[0] === '/';
    const pkgJson = opts.pkgJson ||
        (yield* findPackageJSON(isAbsoluteFilename ? filename : opts.filename, opts));
    return resolveAlias(pkgJson, filename);
}
const extractPkgSpecifierParts = (specifier) => {
    const parts = specifier.split('/');
    const pkgName = parts[0][0] === '@' ? parts.splice(0, 2).join('/') : parts.shift();
    return {
        pkgName,
        filepath: parts.join('/'),
    };
};
function* resolveNodeModule(moduleSpecifier, opts) {
    const pkgSpecifierParts = extractPkgSpecifierParts(moduleSpecifier);
    const directories = getParentDirectories(opts.filename);
    for (const modulesPath of opts.moduleDirectories) {
        for (const directory of directories) {
            const rootDir = path["join"](directory, modulesPath, pkgSpecifierParts.pkgName);
            try {
                const pkgFilePath = path["join"](rootDir, pkgSpecifierParts.filepath);
                const rootPkgJson = yield* loadPackageJSON(rootDir, opts);
                const pkgJson = rootPkgJson && rootPkgJson.content.hasExports
                    ? rootPkgJson
                    : yield* loadNearestPackageJSON(pkgFilePath, opts, rootDir);
                if (pkgJson) {
                    try {
                        return yield* resolve(pkgFilePath, Object.assign(Object.assign({}, opts), { filename: pkgJson.filepath, pkgJson }));
                    }
                    catch (err) {
                        if (!pkgSpecifierParts.filepath) {
                            return yield* resolve(path["join"](pkgFilePath, 'index'), Object.assign(Object.assign({}, opts), { filename: pkgJson.filepath }));
                        }
                        throw err;
                    }
                }
            }
            catch (err) {
                // Handle multiple duplicates of a node_module across the tree
                if (directory.length > 1) {
                    return yield* resolveNodeModule(moduleSpecifier, Object.assign(Object.assign({}, opts), { filename: path["dirname"](directory) }));
                }
                throw err;
            }
        }
    }
    throw new ModuleNotFoundError(moduleSpecifier, opts.filename);
}
function* findPackageJSON(filepath, opts) {
    let pkg = yield* loadNearestPackageJSON(filepath, opts);
    if (!pkg) {
        pkg = yield* loadNearestPackageJSON('/index', opts);
        if (!pkg) {
            return {
                filepath: '/package.json',
                content: {
                    aliases: {},
                    hasExports: false,
                },
            };
        }
    }
    return pkg;
}
function* expandFile(filepath, opts, expandCount = 0) {
    const pkg = yield* findPackageJSON(filepath, opts);
    if (expandCount > 5) {
        throw new Error('Cyclic alias detected');
    }
    for (const ext of opts.extensions) {
        const f = filepath + ext;
        const aliasedPath = resolveAlias(pkg, f);
        if (aliasedPath === f) {
            const exists = yield* isFile(f, opts.isFile);
            if (exists) {
                return f;
            }
        }
        else {
            const expanded = yield* expandFile(aliasedPath, Object.assign(Object.assign({}, opts), { extensions: [''] }), expandCount + 1);
            if (expanded) {
                return expanded;
            }
        }
    }
    return null;
}
function normalizeModuleSpecifier(specifier) {
    const normalized = specifier.replace(/(\/|\\)+/g, '/');
    if (normalized.endsWith('/')) {
        return normalized.substring(0, normalized.length - 1);
    }
    return normalized;
}
const TS_CONFIG_CACHE_KEY = '__root_tsconfig';
function* getTSConfig(opts) {
    const cachedConfig = opts.resolverCache.get(TS_CONFIG_CACHE_KEY);
    if (cachedConfig != null) {
        return cachedConfig;
    }
    let config = false;
    try {
        const contents = yield* opts.readFile('/tsconfig.json');
        const processed = processTSConfig(contents);
        if (processed) {
            config = processed;
        }
    }
    catch (err) {
        try {
            const contents = yield* opts.readFile('/jsconfig.json');
            const processed = processTSConfig(contents);
            if (processed) {
                config = processed;
            }
        }
        catch (_a) {
            // do nothing
        }
    }
    opts.resolverCache.set(TS_CONFIG_CACHE_KEY, config);
    return config;
}
function* resolve(moduleSpecifier, inputOpts, skipIndexExpansion = false) {
    const normalizedSpecifier = normalizeModuleSpecifier(moduleSpecifier);
    const opts = normalizeResolverOptions(inputOpts);
    const modulePath = yield* resolveModule(normalizedSpecifier, opts);
    if (modulePath[0] !== '/') {
        // This isn't a node module, we can attempt to resolve using a tsconfig/jsconfig
        if (!opts.filename.includes('/node_modules')) {
            const parsedTSConfig = yield* getTSConfig(opts);
            if (parsedTSConfig) {
                const potentialPaths = getPotentialPathsFromTSConfig(modulePath, parsedTSConfig);
                for (const potentialPath of potentialPaths) {
                    try {
                        return yield* resolve(potentialPath, opts);
                    }
                    catch (_a) {
                        // do nothing, it's probably a node_module in this case
                    }
                }
            }
        }
        try {
            const resolved = yield* resolveNodeModule(modulePath, opts);
            return resolved;
        }
        catch (e) {
            throw new ModuleNotFoundError(normalizedSpecifier, opts.filename);
        }
    }
    let foundFile = yield* expandFile(modulePath, opts);
    if (!foundFile && !skipIndexExpansion) {
        foundFile = yield* expandFile(path["join"](modulePath, 'index'), opts);
        // In case alias adds an extension, we retry the entire resolution with an added /index
        // This is mostly a hack I guess, but it works for now, so many edge-cases
        if (!foundFile) {
            try {
                const parts = moduleSpecifier.split('/');
                if (!parts.length || !parts[parts.length - 1].startsWith('index')) {
                    foundFile = yield* resolve(moduleSpecifier + '/index', opts, true);
                }
            }
            catch (err) {
                // should throw ModuleNotFound for original specifier, not new one
            }
        }
    }
    if (!foundFile) {
        throw new ModuleNotFoundError(modulePath, opts.filename);
    }
    return foundFile;
}
const resolver = gensync_default()(resolve);
const resolveSync = resolver.sync;
const resolveAsync = resolver.async;


/***/ }),

/***/ "../sandpack-core/lib/sandpack-secret.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSandpackSecret; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return removeSandpackSecret; });
/* unused harmony export setSandpackSecret */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getProtocolAndHostWithSSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return requestSandpackSecretFromApp; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const SANDPACK_SECRET_COOKIE_NAME = 'csb_sandpack_secret';
const getSandpackSecret = () => document.cookie.replace(new RegExp(`(?:(?:^|.*;\\s*)${SANDPACK_SECRET_COOKIE_NAME}\\s*\\=\\s*([^;]*).*$)|^.*$`), '$1');
const removeSandpackSecret = () => {
    document.cookie = `${SANDPACK_SECRET_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;samesite=none;secure;partitioned`;
};
const setSandpackSecret = (secret) => {
    if (secret === null) {
        return;
    }
    const cookieValue = getSandpackSecret();
    if ((cookieValue && !secret) ||
        (secret && !cookieValue) ||
        cookieValue !== secret) {
        if (secret) {
            document.cookie = `${SANDPACK_SECRET_COOKIE_NAME}=${secret};samesite=none;secure;partitioned`;
            setTimeout(() => {
                location.reload();
            }, 1000);
        }
        else {
            removeSandpackSecret();
        }
    }
};
function getPopupOffset({ width, height }) {
    const wLeft = window.screenLeft ? window.screenLeft : window.screenX;
    const wTop = window.screenTop ? window.screenTop : window.screenY;
    const left = wLeft + window.innerWidth / 2 - width / 2;
    const top = wTop + window.innerHeight / 2 - height / 2;
    return { top, left };
}
function getPopupSize() {
    return { width: 1020, height: 618 };
}
function getPopupDimensions() {
    const { width, height } = getPopupSize();
    const { top, left } = getPopupOffset({ width, height });
    return `width=${width},height=${height},top=${top},left=${left}`;
}
function getProtocolAndHostWithSSE() {
    if (document.location.host.startsWith('localhost')) {
        return 'http://localhost:3000';
    }
    if (document.location.host.endsWith('.io')) {
        return 'https://codesandbox.io';
    }
    return 'https://codesandbox.stream';
}
const requestSandpackSecretFromApp = (teamId, host = getProtocolAndHostWithSSE()) => __awaiter(void 0, void 0, void 0, function* () {
    const parentDomain = (() => {
        /**
         * It gets the all ancestor browsing context of the parent, in reverse order.
         *
         * Note: ancestorOrigins is not supported by Firefox: https://bugzilla.mozilla.org/show_bug.cgi?id=1085214
         * so it default to `document.referrer`
         */
        if (document.location.ancestorOrigins) {
            return document.location.ancestorOrigins[document.location.ancestorOrigins.length - 1];
        }
        return document.referrer;
    })();
    return new Promise(resolve => {
        const popup = window.open(host + '/auth/sandpack/' + teamId, '', `scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no, ${getPopupDimensions()}`);
        setInterval(() => {
            if (popup) {
                popup.postMessage({ $type: 'request-sandpack-secret', parentDomain }, host);
            }
        }, 500);
        const listener = (e) => {
            if (e.data && e.data.$type === 'sandpack-secret') {
                setSandpackSecret(e.data.token);
                window.removeEventListener('message', listener);
                if (popup) {
                    popup.close();
                }
                resolve(e.data.token);
            }
        };
        window.addEventListener('message', listener);
    });
});


/***/ }),

/***/ "../sandpack-core/lib/transpiler/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Transpiler; });

// CONCATENATED MODULE: ../sandpack-core/lib/transpiler/transpiler.js
class Transpiler {
    constructor(name) {
        this.cacheable = true;
        this.name = name;
        this.HMREnabled = true;
    }
    initialize() { }
    dispose() { }
    cleanModule(loaderContext) { }
    /* eslint-enable */
    transpile(code, loaderContext) {
        return this.doTranspilation(code, loaderContext);
    }
    /**
     * Get custom info of the current transpiler, this is open for implementation
     * per transpiler
     */
    getTranspilerContext(manager) {
        return Promise.resolve({
            name: this.name,
            HMREnabled: this.HMREnabled,
            cacheable: this.cacheable,
        });
    }
}

// CONCATENATED MODULE: ../sandpack-core/lib/transpiler/index.js



/***/ }),

/***/ "../sandpack-core/lib/transpiler/transpilers/webpack/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebpackTranspiler; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../sandpack-core/lib/transpiler/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * This is a compatibility loader that acts as bridge between webpack loaders and sandpack
 * transpilers. It's a best effort on making webpack loaders work dynamically in Sandpack.
 */
class WebpackTranspiler extends ___WEBPACK_IMPORTED_MODULE_0__[/* Transpiler */ "a"] {
    constructor(webpackLoader, evaluator) {
        super(webpackLoader);
        this.webpackLoader = evaluator.evaluate(webpackLoader);
    }
    doTranspilation(code, loaderContext) {
        return __awaiter(this, void 0, void 0, function* () {
            const loader = yield this.webpackLoader;
            const asyncFunc = () => (err, result) => {
                if (err) {
                    throw err;
                }
                return result;
            };
            // Todo; this whole conversion from http strings to buffers should be done on the CodeSandbox
            // side in a pre-transpiler. Ideally code like this should be unaware of the implementation
            // details of http strings, and just work with buffers instead.
            const codeIsHttp = code.startsWith('http');
            const webpackCode = codeIsHttp
                ? yield fetch(loaderContext._module.module.code)
                    .then(x => x.arrayBuffer())
                    .then(buffer => Buffer.from(buffer))
                : Buffer.from(code);
            const webpackLoaderContext = Object.assign(Object.assign({}, loaderContext), { async: asyncFunc });
            const webpackResult = yield loader.apply(webpackLoaderContext, [
                loader.raw ? webpackCode : webpackCode.toString('utf-8'),
            ]);
            return {
                transpiledCode: webpackResult,
            };
        });
    }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../../node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../sandpack-core/lib/transpiler/utils/loader-utils/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ../sandpack-core/lib/transpiler/utils/loader-utils/parse-query.js
/* eslint-disable */
const specialValues = {
    null: null,
    true: true,
    false: false,
};
function parseQuery(query) {
    if (query.substr(0, 1) !== '?') {
        throw new Error("A valid query string passed to parseQuery should begin with '?'");
    }
    query = query.substr(1);
    if (!query) {
        return {};
    }
    if (query.substr(0, 1) === '{' && query.substr(-1) === '}') {
        return JSON.parse(query);
    }
    const queryArgs = query.split(/[,&]/g);
    const result = {};
    queryArgs.forEach(arg => {
        const idx = arg.indexOf('=');
        if (idx >= 0) {
            let name = arg.substr(0, idx);
            let value = decodeURIComponent(arg.substr(idx + 1));
            if (specialValues.hasOwnProperty(value)) {
                // @ts-ignore Reapplying new value with different type is weird for TS
                value = specialValues[value];
            }
            if (name.substr(-2) === '[]') {
                name = decodeURIComponent(name.substr(0, name.length - 2));
                if (!Array.isArray(result[name]))
                    result[name] = [];
                result[name].push(value);
            }
            else {
                name = decodeURIComponent(name);
                result[name] = value;
            }
        }
        else {
            if (arg.substr(0, 1) === '-') {
                result[decodeURIComponent(arg.substr(1))] = false;
            }
            else if (arg.substr(0, 1) === '+') {
                result[decodeURIComponent(arg.substr(1))] = true;
            }
            else {
                result[decodeURIComponent(arg)] = true;
            }
        }
    });
    return result;
}

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/path-browserify/index.js
var path_browserify = __webpack_require__("../../node_modules/path-browserify/index.js");
var path_browserify_default = /*#__PURE__*/__webpack_require__.n(path_browserify);

// CONCATENATED MODULE: ../sandpack-core/lib/transpiler/utils/loader-utils/stringify-request.js

const matchRelativePath = /^\.\.?[/\\]/;
function isAbsolutePath(str) {
    return str.startsWith('/');
}
function isRelativePath(str) {
    return matchRelativePath.test(str);
}
function stringifyRequest(loaderContext, request) {
    const splitted = request.split('!');
    const context = loaderContext.options && loaderContext.options.context;
    return JSON.stringify(splitted
        .map(part => {
        // First, separate singlePath from query, because the query might contain paths again
        const splittedPart = part.match(/^(.*?)(\?.*)/);
        let singlePath = splittedPart ? splittedPart[1] : part;
        const query = splittedPart ? splittedPart[2] : '';
        if (isAbsolutePath(singlePath) && context) {
            singlePath = path_browserify_default.a.relative(context, singlePath);
            if (isAbsolutePath(singlePath)) {
                // If singlePath still matches an absolute path, singlePath was on a different drive than context.
                // In this case, we leave the path platform-specific without replacing any separators.
                // @see https://github.com/webpack/loader-utils/pull/14
                return singlePath + query;
            }
            if (isRelativePath(singlePath) === false) {
                // Ensure that the relative path starts at least with ./ otherwise it would be a request into the modules directory (like node_modules).
                singlePath = './' + singlePath;
            }
        }
        return singlePath.replace(/\\/g, '/') + query;
    })
        .join('!'));
}

// CONCATENATED MODULE: ../sandpack-core/lib/transpiler/utils/loader-utils/get-remaining-request.js
function getRemainingRequest(loaderContext) {
    return loaderContext.remainingRequests;
}

// CONCATENATED MODULE: ../sandpack-core/lib/transpiler/utils/loader-utils/get-options.js
function getOptions(loaderContext) {
    return loaderContext.options;
}

// CONCATENATED MODULE: ../sandpack-core/lib/transpiler/utils/loader-utils/index.js




/* harmony default export */ var loader_utils = __webpack_exports__["a"] = ({
    getRemainingRequest: getRemainingRequest,
    parseQuery: parseQuery,
    stringifyRequest: stringifyRequest,
    getOptions: getOptions,
});


/***/ }),

/***/ "../sandpack-core/lib/utils/delay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (delay = 1000) {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    });
});


/***/ }),

/***/ "../sandpack-core/lib/utils/extensions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_EXTENSIONS; });
const DEFAULT_EXTENSIONS = ['mjs', 'js', 'jsx', 'json'];


/***/ }),

/***/ "../sandpack-core/lib/utils/get-dependency-name.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDependencyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAliasVersion; });
function getDependencyName(path) {
    const dependencyParts = path.split('/');
    let dependencyName = dependencyParts.shift();
    if (path.startsWith('@')) {
        dependencyName += `/${dependencyParts.shift()}`;
    }
    if (dependencyParts[0] && /^\d+\.\d+\.\d+.*$/.test(dependencyParts[0])) {
        // Make sure to include the aliased version if it's part of it
        dependencyName += `/${dependencyParts.shift()}`;
    }
    return dependencyName;
}
function getAliasVersion(path) {
    const name = getDependencyName(path);
    const split = name.split('/');
    const expectedSplitLength = name.startsWith('@') ? 3 : 2;
    if (split.length !== expectedSplitLength) {
        return null;
    }
    const version = split.pop();
    return version;
}


/***/ }),

/***/ "./config/polyfills.js":
/***/ (function(module, exports, __webpack_require__) {

const g = typeof window === 'undefined' ? self : window;

// fetch() polyfill for making API calls.
__webpack_require__("../../node_modules/whatwg-fetch/fetch.js");

g.cosmiconfig = {};
g.prettier = {};
g.jsdom = {
  JSDOM: {
    // IE11 support
    // eslint-disable-next-line object-shorthand
    fragment: function fragment(htmlString) {
      // eslint-disable-next-line no-var
      var div = document.createElement('div');
      div.innerHTML = htmlString.trim();

      // Change this to div.childNodes to support multiple top-level nodes
      return div;
    },
  },
};


/***/ }),

/***/ "./config/stubs/lru-cache.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = LRUCache;

// This will be a proper iterable 'Map' in engines that support it,
// or a fakey-fake PseudoMap in older versions.
var Map = __webpack_require__("../../node_modules/pseudomap/map.js");
var util = __webpack_require__("../../node_modules/util/util.js");

// A linked list to keep track of recently-used-ness
var Yallist = __webpack_require__("./node_modules/yallist/yallist.js");

// use symbols if possible, otherwise just _props
var hasSymbol = typeof Symbol === 'function';
var makeSymbol;
if (hasSymbol) {
  makeSymbol = function(key) {
    return Symbol(key);
  };
} else {
  makeSymbol = function(key) {
    return '_' + key;
  };
}

var MAX = makeSymbol('max');
var LENGTH = makeSymbol('length');
var LENGTH_CALCULATOR = makeSymbol('lengthCalculator');
var ALLOW_STALE = makeSymbol('allowStale');
var MAX_AGE = makeSymbol('maxAge');
var DISPOSE = makeSymbol('dispose');
var NO_DISPOSE_ON_SET = makeSymbol('noDisposeOnSet');
var LRU_LIST = makeSymbol('lruList');
var CACHE = makeSymbol('cache');

function naiveLength() {
  return 1;
}

// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
function LRUCache(options) {
  if (!(this instanceof LRUCache)) {
    return new LRUCache(options);
  }

  if (typeof options === 'number') {
    options = { max: options };
  }

  if (!options) {
    options = {};
  }

  var max = (this[MAX] = options.max);
  // Kind of weird to have a default max of Infinity, but oh well.
  if (!max || !(typeof max === 'number') || max <= 0) {
    this[MAX] = Infinity;
  }

  var lc = options.length || naiveLength;
  if (typeof lc !== 'function') {
    lc = naiveLength;
  }
  this[LENGTH_CALCULATOR] = lc;

  this[ALLOW_STALE] = options.stale || false;
  this[MAX_AGE] = options.maxAge || 0;
  this[DISPOSE] = options.dispose;
  this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
  this.reset();
}

// resize the cache when the max changes.
Object.defineProperty(LRUCache.prototype, 'max', {
  set: function(mL) {
    if (!mL || !(typeof mL === 'number') || mL <= 0) {
      mL = Infinity;
    }
    this[MAX] = mL;
    trim(this);
  },
  get: function() {
    return this[MAX];
  },
  enumerable: true,
});

Object.defineProperty(LRUCache.prototype, 'allowStale', {
  set: function(allowStale) {
    this[ALLOW_STALE] = !!allowStale;
  },
  get: function() {
    return this[ALLOW_STALE];
  },
  enumerable: true,
});

Object.defineProperty(LRUCache.prototype, 'maxAge', {
  set: function(mA) {
    if (!mA || !(typeof mA === 'number') || mA < 0) {
      mA = 0;
    }
    this[MAX_AGE] = mA;
    trim(this);
  },
  get: function() {
    return this[MAX_AGE];
  },
  enumerable: true,
});

// resize the cache when the lengthCalculator changes.
Object.defineProperty(LRUCache.prototype, 'lengthCalculator', {
  set: function(lC) {
    if (typeof lC !== 'function') {
      lC = naiveLength;
    }
    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC;
      this[LENGTH] = 0;
      this[LRU_LIST].forEach(function(hit) {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
        this[LENGTH] += hit.length;
      }, this);
    }
    trim(this);
  },
  get: function() {
    return this[LENGTH_CALCULATOR];
  },
  enumerable: true,
});

Object.defineProperty(LRUCache.prototype, 'length', {
  get: function() {
    return this[LENGTH];
  },
  enumerable: true,
});

Object.defineProperty(LRUCache.prototype, 'itemCount', {
  get: function() {
    return this[LRU_LIST].length;
  },
  enumerable: true,
});

LRUCache.prototype.rforEach = function(fn, thisp) {
  thisp = thisp || this;
  for (var walker = this[LRU_LIST].tail; walker !== null; ) {
    var prev = walker.prev;
    forEachStep(this, fn, walker, thisp);
    walker = prev;
  }
};

function forEachStep(self, fn, node, thisp) {
  var hit = node.value;
  if (isStale(self, hit)) {
    del(self, node);
    if (!self[ALLOW_STALE]) {
      hit = undefined;
    }
  }
  if (hit) {
    fn.call(thisp, hit.value, hit.key, self);
  }
}

LRUCache.prototype.forEach = function(fn, thisp) {
  thisp = thisp || this;
  for (var walker = this[LRU_LIST].head; walker !== null; ) {
    var next = walker.next;
    forEachStep(this, fn, walker, thisp);
    walker = next;
  }
};

LRUCache.prototype.keys = function() {
  return this[LRU_LIST].toArray().map(function(k) {
    return k.key;
  }, this);
};

LRUCache.prototype.values = function() {
  return this[LRU_LIST].toArray().map(function(k) {
    return k.value;
  }, this);
};

LRUCache.prototype.reset = function() {
  if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
    this[LRU_LIST].forEach(function(hit) {
      this[DISPOSE](hit.key, hit.value);
    }, this);
  }

  this[CACHE] = new Map(); // hash of items by key
  this[LRU_LIST] = new Yallist(); // list of items in order of use recency
  this[LENGTH] = 0; // length of items in the list
};

LRUCache.prototype.dump = function() {
  return this[LRU_LIST].map(function(hit) {
    if (!isStale(this, hit)) {
      return {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0),
      };
    }
  }, this)
    .toArray()
    .filter(function(h) {
      return h;
    });
};

LRUCache.prototype.dumpLru = function() {
  return this[LRU_LIST];
};

LRUCache.prototype.inspect = function(n, opts) {
  var str = 'LRUCache {';
  var extras = false;

  var as = this[ALLOW_STALE];
  if (as) {
    str += '\n  allowStale: true';
    extras = true;
  }

  var max = this[MAX];
  if (max && max !== Infinity) {
    if (extras) {
      str += ',';
    }
    str += '\n  max: ' + util.inspect(max, opts);
    extras = true;
  }

  var maxAge = this[MAX_AGE];
  if (maxAge) {
    if (extras) {
      str += ',';
    }
    str += '\n  maxAge: ' + util.inspect(maxAge, opts);
    extras = true;
  }

  var lc = this[LENGTH_CALCULATOR];
  if (lc && lc !== naiveLength) {
    if (extras) {
      str += ',';
    }
    str += '\n  length: ' + util.inspect(this[LENGTH], opts);
    extras = true;
  }

  var didFirst = false;
  this[LRU_LIST].forEach(function(item) {
    if (didFirst) {
      str += ',\n  ';
    } else {
      if (extras) {
        str += ',\n';
      }
      didFirst = true;
      str += '\n  ';
    }
    var key = util
      .inspect(item.key)
      .split('\n')
      .join('\n  ');
    var val = { value: item.value };
    if (item.maxAge !== maxAge) {
      val.maxAge = item.maxAge;
    }
    if (lc !== naiveLength) {
      val.length = item.length;
    }
    if (isStale(this, item)) {
      val.stale = true;
    }

    val = util
      .inspect(val, opts)
      .split('\n')
      .join('\n  ');
    str += key + ' => ' + val;
  });

  if (didFirst || extras) {
    str += '\n';
  }
  str += '}';

  return str;
};

LRUCache.prototype.set = function(key, value, maxAge) {
  maxAge = maxAge || this[MAX_AGE];

  var now = maxAge ? Date.now() : 0;
  var len = this[LENGTH_CALCULATOR](value, key);

  if (this[CACHE].has(key)) {
    if (len > this[MAX]) {
      del(this, this[CACHE].get(key));
      return false;
    }

    var node = this[CACHE].get(key);
    var item = node.value;

    // dispose of the old one before overwriting
    // split out into 2 ifs for better coverage tracking
    if (this[DISPOSE]) {
      if (!this[NO_DISPOSE_ON_SET]) {
        this[DISPOSE](key, item.value);
      }
    }

    item.now = now;
    item.maxAge = maxAge;
    item.value = value;
    this[LENGTH] += len - item.length;
    item.length = len;
    this.get(key);
    trim(this);
    return true;
  }

  var hit = new Entry(key, value, len, now, maxAge);

  // oversized objects fall out of cache automatically.
  if (hit.length > this[MAX]) {
    if (this[DISPOSE]) {
      this[DISPOSE](key, value);
    }
    return false;
  }

  this[LENGTH] += hit.length;
  this[LRU_LIST].unshift(hit);
  this[CACHE].set(key, this[LRU_LIST].head);
  trim(this);
  return true;
};

LRUCache.prototype.has = function(key) {
  if (!this[CACHE].has(key)) return false;
  var hit = this[CACHE].get(key).value;
  if (isStale(this, hit)) {
    return false;
  }
  return true;
};

LRUCache.prototype.get = function(key) {
  return get(this, key, true);
};

LRUCache.prototype.peek = function(key) {
  return get(this, key, false);
};

LRUCache.prototype.pop = function() {
  var node = this[LRU_LIST].tail;
  if (!node) return null;
  del(this, node);
  return node.value;
};

LRUCache.prototype.del = function(key) {
  del(this, this[CACHE].get(key));
};

LRUCache.prototype.load = function(arr) {
  // reset the cache
  this.reset();

  var now = Date.now();
  // A previous serialized cache has the most recent items first
  for (var l = arr.length - 1; l >= 0; l--) {
    var hit = arr[l];
    var expiresAt = hit.e || 0;
    if (expiresAt === 0) {
      // the item was created without expiration in a non aged cache
      this.set(hit.k, hit.v);
    } else {
      var maxAge = expiresAt - now;
      // dont add already expired items
      if (maxAge > 0) {
        this.set(hit.k, hit.v, maxAge);
      }
    }
  }
};

LRUCache.prototype.prune = function() {
  var self = this;
  this[CACHE].forEach(function(value, key) {
    get(self, key, false);
  });
};

function get(self, key, doUse) {
  var node = self[CACHE].get(key);
  if (node) {
    var hit = node.value;
    if (isStale(self, hit)) {
      del(self, node);
      if (!self[ALLOW_STALE]) hit = undefined;
    } else {
      if (doUse) {
        self[LRU_LIST].unshiftNode(node);
      }
    }
    if (hit) hit = hit.value;
  }
  return hit;
}

function isStale(self, hit) {
  if (!hit || (!hit.maxAge && !self[MAX_AGE])) {
    return false;
  }
  var stale = false;
  var diff = Date.now() - hit.now;
  if (hit.maxAge) {
    stale = diff > hit.maxAge;
  } else {
    stale = self[MAX_AGE] && diff > self[MAX_AGE];
  }
  return stale;
}

function trim(self) {
  if (self[LENGTH] > self[MAX]) {
    for (
      var walker = self[LRU_LIST].tail;
      self[LENGTH] > self[MAX] && walker !== null;

    ) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      var prev = walker.prev;
      del(self, walker);
      walker = prev;
    }
  }
}

function del(self, node) {
  if (node) {
    var hit = node.value;
    if (self[DISPOSE]) {
      self[DISPOSE](hit.key, hit.value);
    }
    self[LENGTH] -= hit.length;
    self[CACHE].delete(hit.key);
    self[LRU_LIST].removeNode(node);
  }
}

// classy, since V8 prefers predictable objects.
function Entry(key, value, length, now, maxAge) {
  this.key = key;
  this.value = value;
  this.length = length;
  this.now = now;
  this.maxAge = maxAge || 0;
}


/***/ }),

/***/ "./src/sandbox/compile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "areActionsEnabled", function() { return /* binding */ areActionsEnabled; });
__webpack_require__.d(__webpack_exports__, "getCurrentManager", function() { return /* binding */ getCurrentManager; });
__webpack_require__.d(__webpack_exports__, "getHTMLParts", function() { return /* binding */ getHTMLParts; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ queueTask; });

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/@babel/runtime/helpers/toArray.js
var toArray = __webpack_require__("../../node_modules/@babel/runtime/helpers/toArray.js");
var toArray_default = /*#__PURE__*/__webpack_require__.n(toArray);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/@babel/runtime/helpers/defineProperty.js");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../common/lib/templates/configuration/parse.js
var parse = __webpack_require__("../common/lib/templates/configuration/parse.js");
var parse_default = /*#__PURE__*/__webpack_require__.n(parse);

// EXTERNAL MODULE: ../common/lib/templates/index.js
var templates = __webpack_require__("../common/lib/templates/index.js");
var templates_default = /*#__PURE__*/__webpack_require__.n(templates);

// EXTERNAL MODULE: ../common/lib/utils/debug.js
var utils_debug = __webpack_require__("../common/lib/utils/debug.js");
var debug_default = /*#__PURE__*/__webpack_require__.n(utils_debug);

// EXTERNAL MODULE: ../common/lib/utils/is-babel-7.js
var is_babel_7 = __webpack_require__("../common/lib/utils/is-babel-7.js");

// EXTERNAL MODULE: ../common/lib/utils/path.js
var utils_path = __webpack_require__("../common/lib/utils/path.js");

// EXTERNAL MODULE: ../common/lib/version.js
var lib_version = __webpack_require__("../common/lib/version.js");
var version_default = /*#__PURE__*/__webpack_require__.n(lib_version);

// EXTERNAL MODULE: ../codesandbox-api/dist/codesandbox.es5.js
var codesandbox_es5 = __webpack_require__("../codesandbox-api/dist/codesandbox.es5.js");

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/lodash-es/flatten.js
var flatten = __webpack_require__("../../node_modules/lodash-es/flatten.js");

// EXTERNAL MODULE: ../sandbox-hooks/errors/transformers/index.js
var transformers = __webpack_require__("../sandbox-hooks/errors/transformers/index.js");
var transformers_default = /*#__PURE__*/__webpack_require__.n(transformers);

// EXTERNAL MODULE: ../sandbox-hooks/react-error-overlay/overlay.js
var overlay = __webpack_require__("../sandbox-hooks/react-error-overlay/overlay.js");

// EXTERNAL MODULE: ../sandpack-core/lib/cache.js
var cache = __webpack_require__("../sandpack-core/lib/cache.js");

// EXTERNAL MODULE: ../common/lib/utils/metrics.js
var metrics = __webpack_require__("../common/lib/utils/metrics.js");

// EXTERNAL MODULE: ../sandpack-core/lib/index.js + 17 modules
var lib = __webpack_require__("../sandpack-core/lib/index.js");

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/lodash-es/pickBy.js + 11 modules
var pickBy = __webpack_require__("../../node_modules/lodash-es/pickBy.js");

// EXTERNAL MODULE: ../sandpack-core/lib/npm/dynamic/fetch-protocols/index.js + 7 modules
var fetch_protocols = __webpack_require__("../sandpack-core/lib/npm/dynamic/fetch-protocols/index.js");

// EXTERNAL MODULE: ../sandpack-core/lib/npm/dependencies-to-query.js
var dependencies_to_query = __webpack_require__("../sandpack-core/lib/npm/dependencies-to-query.js");

// CONCATENATED MODULE: ../sandpack-core/lib/npm/dynamic/resolutions.js
/**
 * Parse input strings like `package-1/package-2` to an array of packages
 */
function parsePackagePath(input) {
    return input.match(/(@[^/]+\/)?([^/]+)/g) || [];
}
const WRONG_PATTERNS = /\/$|\/{2,}|\*+$/;
const GLOBAL_NESTED_DEP_PATTERN = '**/';
function isValidPackagePath(input) {
    return !WRONG_PATTERNS.test(input);
}
function parsePatternInfo(globPattern, range) {
    if (!isValidPackagePath(globPattern)) {
        console.warn('invalidResolutionName');
        return null;
    }
    const directories = parsePackagePath(globPattern);
    const name = directories.pop();
    // For legacy support of resolutions, replace `name` with `**/name`
    if (name === globPattern) {
        // eslint-disable-next-line
        globPattern = `${GLOBAL_NESTED_DEP_PATTERN}${name}`;
    }
    return {
        name,
        range,
        globPattern,
        pattern: `${name}@${range}`,
    };
}
function parseResolutions(resolutions) {
    if (!resolutions) {
        return [];
    }
    const keys = Object.keys(resolutions);
    return keys
        .map(key => parsePatternInfo(key, resolutions[key]))
        .filter(Boolean);
}

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/minimatch/minimatch.js
var minimatch = __webpack_require__("../../node_modules/minimatch/minimatch.js");
var minimatch_default = /*#__PURE__*/__webpack_require__.n(minimatch);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/semver/index.js
var semver = __webpack_require__("../../node_modules/semver/index.js");

// EXTERNAL MODULE: ../common/lib/utils/dependencies.js
var utils_dependencies = __webpack_require__("../common/lib/utils/dependencies.js");

// EXTERNAL MODULE: ../sandpack-core/lib/npm/dynamic/fetch-npm-module.js
var fetch_npm_module = __webpack_require__("../sandpack-core/lib/npm/dynamic/fetch-npm-module.js");

// CONCATENATED MODULE: ../sandpack-core/lib/npm/dynamic/resolve-dependency.js
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function getPackageJSON(dep, version) {
    return __awaiter(this, void 0, void 0, function* () {
        const m = yield Object(fetch_npm_module["c" /* downloadDependency */])(dep, version, '/package.json');
        return m.code;
    });
}
function getLatestVersionForSemver(dep, version) {
    return __awaiter(this, void 0, void 0, function* () {
        if (Object(utils_dependencies["isAbsoluteVersion"])(version)) {
            return Promise.resolve(version);
        }
        const p = yield getPackageJSON(dep, version);
        return JSON.parse(p).version;
    });
}
function getAbsoluteVersion(originalDep, depName, depVersion, parsedResolutions) {
    // Try getting it from the resolutions field first, if that doesn't work
    // we try to get the latest version from the semver.
    const applicableResolutions = parsedResolutions[depName];
    if (applicableResolutions) {
        const modulePath = [originalDep, depName].join('/');
        const { range } = applicableResolutions.find(({ globPattern }) => minimatch_default()(modulePath, globPattern)) || {};
        if (range) {
            if (semver["valid"](range)) {
                return getLatestVersionForSemver(depName, range);
            }
            return Promise.resolve(range);
        }
    }
    return getLatestVersionForSemver(depName, depVersion);
}
function getDependencyDependencies(dep, version, parsedResolutions, peerDependencyResult = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const packageJSONCode = yield getPackageJSON(dep, version);
        const packageJSON = JSON.parse(packageJSONCode);
        yield Promise.all(Object.keys(packageJSON.dependencies || {}).map((depName) => __awaiter(this, void 0, void 0, function* () {
            const depVersion = packageJSON.dependencies[depName];
            if (peerDependencyResult[depName]) {
                if (peerDependencyResult[depName].parents.indexOf(dep) === -1) {
                    peerDependencyResult[depName].parents.push(dep);
                }
                return;
            }
            const absoluteVersion = yield getAbsoluteVersion(dep, depName, depVersion, parsedResolutions);
            // In case inbetween the peer dependency result has been added already
            if (peerDependencyResult[depName]) {
                if (peerDependencyResult[depName].parents.indexOf(dep) === -1) {
                    peerDependencyResult[depName].parents.push(dep);
                }
            }
            else {
                // eslint-disable-next-line
                peerDependencyResult[depName] = {
                    semver: depVersion,
                    resolved: absoluteVersion,
                    parents: [dep],
                    entries: [],
                };
                yield getDependencyDependencies(depName, absoluteVersion, parsedResolutions, peerDependencyResult);
            }
        })));
        return peerDependencyResult;
    });
}
function resolveDependencyInfo(dep, version, parsedResolutions) {
    return __awaiter(this, void 0, void 0, function* () {
        const IS_ALIAS = /^npm:/;
        const packageJSONCode = yield getPackageJSON(dep, version);
        const packageJSON = JSON.parse(packageJSONCode);
        const response = {
            contents: {},
            dependency: {
                name: dep,
                version,
            },
            peerDependencies: {},
            dependencyDependencies: {},
            dependencyAliases: {},
        };
        const resolutionsByPackage = {};
        parsedResolutions.forEach(res => {
            resolutionsByPackage[res.name] = resolutionsByPackage[res.name] || [];
            resolutionsByPackage[res.name].push(res);
        });
        response.peerDependencies = packageJSON.peerDependencies || {};
        response.dependencyDependencies = yield getDependencyDependencies(dep, version, resolutionsByPackage);
        response.contents = {
            [`/node_modules/${dep}/package.json`]: {
                content: packageJSONCode,
            },
        };
        const allFiles = yield Object(fetch_npm_module["b" /* downloadAllDependencyFiles */])(dep, version);
        if (allFiles) {
            allFiles.forEach(file => {
                response.contents[`/node_modules/${dep}${file.path}`] = {
                    content: file.code,
                };
            });
        }
        yield Promise.all(Object.keys(response.dependencyDependencies).map((packageName) => __awaiter(this, void 0, void 0, function* () {
            let packageVersion = response.dependencyDependencies[packageName].resolved;
            // If the package is a remote module or is an alias we use the semver as the version for fetching
            const pkgSemver = response.dependencyDependencies[packageName].semver;
            if (pkgSemver && (pkgSemver.match(IS_ALIAS) || pkgSemver.includes('/'))) {
                packageVersion = pkgSemver;
            }
            const pkgJson = yield getPackageJSON(packageName, packageVersion);
            response.contents[`/node_modules/${packageName}/package.json`] = {
                content: pkgJson,
            };
        })));
        return response;
    });
}

// EXTERNAL MODULE: ../sandpack-core/lib/utils/delay.js
var delay = __webpack_require__("../sandpack-core/lib/utils/delay.js");

// CONCATENATED MODULE: ../sandpack-core/lib/npm/preloaded/fetch-dependencies.js
var fetch_dependencies_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const RETRY_COUNT = 60;
const MAX_RETRY_DELAY = 10000;
const fetch_dependencies_debug = debug_default()('cs:sandbox:packager');
const VERSION = 2;
// eslint-disable-next-line
const DEV_URLS = {
    packager: 'https://xi5p9f7czk.execute-api.eu-west-1.amazonaws.com/dev/packages',
    bucket: 'https://dev-packager-packages.codesandbox.io',
};
// eslint-disable-next-line
const PROD_URLS = {
    packager: 'https://aiwi8rnkp5.execute-api.eu-west-1.amazonaws.com/prod/packages',
    bucket: 'https://prod-packager-packages.codesandbox.io',
};
const URLS = PROD_URLS;
const BUCKET_URL = URLS.bucket;
const PACKAGER_URL = URLS.packager;
function callApi(url, method = 'GET') {
    return fetch(url, {
        method,
    })
        .then((response) => fetch_dependencies_awaiter(this, void 0, void 0, function* () {
        if (!response.ok) {
            const error = new Error(response.statusText || '' + response.status);
            try {
                // @ts-ignore
                error.response = yield response.text();
            }
            catch (err) {
                console.error(err);
            }
            // @ts-ignore
            error.statusCode = response.status;
            throw error;
        }
        return response;
    }))
        .then(response => response.json());
}
/**
 * Request the packager, if retries > RETRY_COUNT it will throw if something goes wrong
 * otherwise it will retry again with an incremented retry
 *
 * @param {string} query The dependencies to call
 */
function requestPackager(url, method = 'GET', retries = 0) {
    return fetch_dependencies_awaiter(this, void 0, void 0, function* () {
        // eslint-disable-next-line no-constant-condition
        fetch_dependencies_debug(`Trying to call packager for ${retries} time`);
        try {
            const manifest = yield callApi(url, method);
            return manifest;
        }
        catch (err) {
            console.error({ err });
            // If it's a 403 or network error, we retry the fetch
            if (err.response && err.statusCode !== 403) {
                throw new Error(err.response.error);
            }
            // 403 status code means the bundler is still bundling
            if (retries < RETRY_COUNT) {
                const msDelay = Math.min(MAX_RETRY_DELAY, 1000 * retries + Math.round(Math.random() * 1000));
                console.warn(`Retrying package fetch in ${msDelay}ms`);
                yield Object(delay["a" /* default */])(msDelay);
                return requestPackager(url, method, retries + 1);
            }
            throw err;
        }
    });
}
function getDependency(depName, depVersion) {
    return fetch_dependencies_awaiter(this, void 0, void 0, function* () {
        let version = depVersion;
        try {
            const { version: absoluteVersion } = yield Object(utils_dependencies["getAbsoluteDependency"])(depName, depVersion);
            version = absoluteVersion;
        }
        catch (e) {
            /* Ignore this, not critical */
        }
        const normalizedVersion = Object(dependencies_to_query["b" /* normalizeVersion */])(version);
        const dependencyUrl = Object(dependencies_to_query["a" /* default */])({ [depName]: normalizedVersion });
        const fullUrl = `${BUCKET_URL}/v${VERSION}/packages/${depName}/${normalizedVersion}.json`;
        try {
            const bucketManifest = yield callApi(fullUrl);
            return bucketManifest;
        }
        catch (e) {
            // The dep has not been generated yet...
            const packagerRequestUrl = `${PACKAGER_URL}/${dependencyUrl}`;
            yield requestPackager(packagerRequestUrl, 'POST');
            return requestPackager(fullUrl);
        }
    });
}

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/lodash-es/uniq.js + 9 modules
var uniq = __webpack_require__("../../node_modules/lodash-es/uniq.js");

// CONCATENATED MODULE: ../sandpack-core/lib/npm/merge-dependency.js



const VERSIONED_MODULE_RE = /^.+\/\d+\.\d+\.\d+\/.+$/;
function safeSemverGt(v1, v2) {
    try {
        return semver["gt"](v1, v2);
    }
    catch (_a) {
        return true;
    }
}
/**
 * Compare two sorted string arrays
 *
 * @param {string[]} s1
 * @param {string[]} s2
 * @returns
 */
function isEqual(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            return false;
        }
    }
    return true;
}
/**
 * Replaces the start of a key with a new string
 *
 * @param {{ [key: string]: string }} paths
 * @param {string} oldName
 * @param {string} newName
 */
function replacePaths(paths, oldName, newName) {
    Object.keys(paths).forEach(al => {
        if (al.startsWith(`${oldName}/`) || al === oldName) {
            paths[al.replace(oldName, newName)] =
                typeof paths[al] === 'string'
                    ? paths[al].replace(oldName, newName)
                    : paths[al];
            delete paths[al];
        }
    });
}
function replaceDependencyInfo(res, depDepName, newDepDep) {
    // Don't change anything if the module is already part of a sub-folder
    // in this case pkg.json won't contain the requested version...
    const pkgJSONPath = `/node_modules/${depDepName}/package.json`;
    if (!res.contents[pkgJSONPath]) {
        throw new Error(`Dependency ${depDepName} not found`);
    }
    const parsedPkgJson = JSON.parse(res.contents[pkgJSONPath].content);
    if (parsedPkgJson.version !== newDepDep.resolved) {
        return false;
    }
    if (false) {}
    // Remap dependency
    const newPath = `${depDepName}/${newDepDep.resolved}`;
    replacePaths(res.contents, `/node_modules/${depDepName}`, `/node_modules/${newPath}`);
    res.dependencyDependencies[newPath] = res.dependencyDependencies[depDepName];
    delete res.dependencyDependencies[depDepName];
    // eslint-disable-next-line
    for (const n of Object.keys(res.dependencyDependencies)) {
        res.dependencyDependencies[n].parents = res.dependencyDependencies[n].parents.map(p => (p === depDepName ? newPath : p));
    }
    res.dependencyAliases = res.dependencyAliases || {};
    newDepDep.parents.forEach(p => {
        res.dependencyAliases[p] = res.dependencyAliases[p] || {};
        res.dependencyAliases[p][depDepName] = newPath;
    });
    replacePaths(res.dependencyAliases, depDepName, newPath);
    return true;
}
const intersects = (v1, v2) => {
    if (v1 === v2) {
        return true;
    }
    try {
        // Semver doesn't see ^6.0.0-beta.8 intersecting with 6.0.0-beta.8. So we explicitly check for that case.
        if (Object(utils_dependencies["isAbsoluteVersion"])(v1) !== Object(utils_dependencies["isAbsoluteVersion"])(v2)) {
            const min1 = semver["minVersion"](v1);
            const min2 = semver["minVersion"](v2);
            if (min1 && min2 && min1.raw === min2.raw) {
                return true;
            }
        }
    }
    catch (e) {
        // Do nothing
    }
    try {
        return semver["intersects"](v1, v2);
    }
    catch (e) {
        return false;
    }
};
function mergeDependencies(responses) {
    // For consistency between requests
    const sortedResponses = responses.sort((a, b) => a.dependency.name.localeCompare(b.dependency.name));
    const response = {
        contents: {},
        dependencies: sortedResponses.map(r => r.dependency),
        dependencyAliases: {},
        dependencyDependencies: {},
    };
    // eslint-disable-next-line
    for (const r of sortedResponses) {
        for (let i = 0; i < Object.keys(r.dependencyDependencies).length; i++) {
            const depDepName = Object.keys(r.dependencyDependencies)[i];
            const newDepDep = r.dependencyDependencies[depDepName];
            const rootDependency = response.dependencies.find(d => d.name === depDepName);
            if (rootDependency) {
                // packages that require themselves?
                if (r.dependency.name !== depDepName) {
                    if (!intersects(rootDependency.version, newDepDep.semver)) {
                        // If a root dependency is in conflict with a child dependency, we always
                        // go for the root dependency
                        if (replaceDependencyInfo(r, depDepName, newDepDep)) {
                            // Start from the beginning, to make sure everything is correct
                            i = -1;
                        }
                    }
                    else {
                        // Remove the contents so we don't overwrite the root version's content
                        const pathPrefix = `/node_modules/${depDepName}/`;
                        Object.keys(r.contents).forEach(p => {
                            if (p.startsWith(pathPrefix) && !VERSIONED_MODULE_RE.test(p)) {
                                delete r.contents[p];
                            }
                        });
                    }
                }
                // TODO: Also remove contents for conflicts in transient dependencies?
            }
            else if (response.dependencyDependencies[depDepName]) {
                const exDepDep = response.dependencyDependencies[depDepName];
                // Determine which version is newer, needed for some checks later.
                const [newerVersionDepDep, olderVersionDepDep] = safeSemverGt(newDepDep.resolved, exDepDep.resolved)
                    ? [newDepDep, exDepDep]
                    : [exDepDep, newDepDep];
                if (exDepDep.resolved === newDepDep.resolved) {
                    exDepDep.parents = Object(uniq["a" /* default */])([...exDepDep.parents, ...newDepDep.parents]);
                    exDepDep.entries = Object(uniq["a" /* default */])([...exDepDep.entries, ...newDepDep.entries]);
                }
                else if (intersects(exDepDep.semver, newDepDep.semver) &&
                    (isEqual(exDepDep.entries, newDepDep.entries) ||
                        olderVersionDepDep.entries.length === 0) // Meaning that the existing dependency is not called from other dependencies, so safe to replace with the newer version.
                ) {
                    response.dependencyDependencies[depDepName] = newerVersionDepDep;
                    response.dependencyDependencies[depDepName].parents = Object(uniq["a" /* default */])([
                        ...exDepDep.parents,
                        ...newDepDep.parents,
                    ]);
                }
                else if (replaceDependencyInfo(r, depDepName, newDepDep)) {
                    // Start from the beginning, to make sure everything is correct
                    i = -1;
                }
            }
            else {
                response.dependencyDependencies[depDepName] =
                    r.dependencyDependencies[depDepName];
            }
        }
        response.dependencyAliases = Object.assign(Object.assign({}, response.dependencyAliases), r.dependencyAliases);
        response.contents = Object.assign(Object.assign({}, response.contents), r.contents);
    }
    return response;
}

// EXTERNAL MODULE: ../sandpack-core/lib/sandpack-secret.js
var sandpack_secret = __webpack_require__("../sandpack-core/lib/sandpack-secret.js");

// CONCATENATED MODULE: ../sandpack-core/lib/npm/index.js
var npm_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









let loadedDependencyCombination = null;
let npm_manifest = null;
const PRELOADED_PROTOCOLS = [
    fetch_protocols["b" /* preloadedProtocols */].jsdelivr,
    fetch_protocols["b" /* preloadedProtocols */].unpkg,
];
/**
 * Depending on the dependency version we decide whether we can load a prebundled bundle (generated
 * in a lambda) or use a dynamic version of fetching the dependency.
 */
function shouldFetchDynamically(depName, depVersion) {
    const fetchProtocol = Object(fetch_protocols["a" /* getFetchProtocol */])(depName, depVersion);
    return !PRELOADED_PROTOCOLS.includes(fetchProtocol);
}
/**
 * Some dependencies have a space in their version for some reason, this is invalid and we
 * ignore them. This is what yarn does as well.
 */
function removeSpacesFromDependencies(dependencies) {
    const newDeps = {};
    Object.keys(dependencies).forEach(depName => {
        const [version] = dependencies[depName].split(' ');
        newDeps[depName] = version;
    });
    return newDeps;
}
/**
 * Split the dependencies between whether they should be loaded from dynamically or from an endpoint
 * that has the dependency already prebundled.
 */
function splitDependencies(dependencies, forceFetchDynamically) {
    if (forceFetchDynamically) {
        return { dynamicDependencies: dependencies, prebundledDependencies: {} };
    }
    const dynamicDependencies = {};
    const prebundledDependencies = {};
    Object.keys(dependencies).forEach(depName => {
        const version = dependencies[depName];
        if (shouldFetchDynamically(depName, version)) {
            dynamicDependencies[depName] = version;
        }
        else {
            prebundledDependencies[depName] = version;
        }
    });
    return { dynamicDependencies, prebundledDependencies };
}
function getDependenciesFromSources(dependencies, resolutions, forceFetchDynamically, updateProgress) {
    return npm_awaiter(this, void 0, void 0, function* () {
        try {
            const parsedResolutions = parseResolutions(resolutions);
            const remainingDependencies = Object.keys(dependencies);
            const totalDependencies = remainingDependencies.length;
            const depsWithNodeLibs = removeSpacesFromDependencies(Object.assign({ 'node-libs-browser': '2.2.0' }, dependencies));
            const { dynamicDependencies, prebundledDependencies } = splitDependencies(depsWithNodeLibs, forceFetchDynamically);
            const updateLoadScreen = (depName) => {
                const progress = totalDependencies - remainingDependencies.length;
                const total = totalDependencies;
                updateProgress({
                    done: progress,
                    total,
                    remainingDependencies,
                    dependencyName: depName,
                });
            };
            const dynamicPromise = Promise.all(Object.keys(dynamicDependencies).map(depName => resolveDependencyInfo(depName, depsWithNodeLibs[depName], parsedResolutions).finally(() => {
                remainingDependencies.splice(remainingDependencies.indexOf(depName), 1);
                updateLoadScreen(depName);
            })));
            const prebundledPromise = Promise.all(Object.keys(prebundledDependencies).map(depName => getDependency(depName, depsWithNodeLibs[depName])
                .then(d => {
                // Unfortunately we've let this through in our system, some dependencies will just be { error: string }.
                // The bug has been fixed, but dependencies have been cached, we have to filter them out and fetch them
                // dynamically.
                // @ts-ignore not possible anymore
                if (d.error) {
                    return resolveDependencyInfo(depName, depsWithNodeLibs[depName], parsedResolutions);
                }
                return d;
            })
                .finally(() => {
                remainingDependencies.splice(remainingDependencies.indexOf(depName), 1);
                updateLoadScreen(depName);
            })));
            const [dynamicLoadedDependencies, prebundledLoadedDependencies,] = yield Promise.all([dynamicPromise, prebundledPromise]);
            return mergeDependencies([
                ...dynamicLoadedDependencies,
                ...prebundledLoadedDependencies,
            ]);
        }
        catch (err) {
            if (Object(sandpack_secret["b" /* getSandpackSecret */])()) {
                Object(sandpack_secret["c" /* removeSandpackSecret */])();
            }
            err.message = `Could not fetch dependencies, please try again in a couple seconds: ${err.message}`;
            Object(codesandbox_es5["dispatch"])(codesandbox_es5["actions"].notifications.show(err.message, 'error'));
            throw err;
        }
    });
}
/**
 * This fetches the manifest and dependencies from our packager or dynamic sources
 * @param {*} dependencies
 */
function loadDependencies(dependencies, updateProgress, { disableExternalConnection = false, resolutions = undefined, } = {}) {
    return npm_awaiter(this, void 0, void 0, function* () {
        let isNewCombination = false;
        if (Object.keys(dependencies).length !== 0) {
            // We filter out all @types, as they are not of any worth to the bundler
            const dependenciesWithoutTypings = Object(pickBy["a" /* default */])(dependencies, (val, key) => !(key.includes && key.includes('@types')));
            const depQuery = Object(dependencies_to_query["a" /* default */])(dependenciesWithoutTypings);
            if (loadedDependencyCombination !== depQuery) {
                isNewCombination = true;
                const data = yield getDependenciesFromSources(dependenciesWithoutTypings, resolutions, disableExternalConnection, updateProgress);
                // Mark that the last requested url is this
                loadedDependencyCombination = depQuery;
                npm_manifest = data;
            }
        }
        else {
            npm_manifest = null;
        }
        return { manifest: npm_manifest, isNewCombination };
    });
}

// EXTERNAL MODULE: ../sandpack-core/lib/npm/dynamic/fetch-protocols/utils.js
var utils = __webpack_require__("../sandpack-core/lib/npm/dynamic/fetch-protocols/utils.js");

// EXTERNAL MODULE: ../sandpack-core/lib/npm/dynamic/fetch-protocols/utils/tar-store.js
var tar_store = __webpack_require__("../sandpack-core/lib/npm/dynamic/fetch-protocols/utils/tar-store.js");

// CONCATENATED MODULE: ../sandpack-core/lib/npm/dynamic/fetch-protocols/npm-registry.js
var npm_registry_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const NPM_REGISTRY_ACCEPT_HEADER = 'application/vnd.npm.install-v1+json; q=1.0, application/json; q=0.8, */*';
function join(a, b) {
    if (a.endsWith('/')) {
        return a + b;
    }
    return a + '/' + b;
}
class npm_registry_NpmRegistryFetcher {
    constructor(registryLocation, config) {
        this.registryLocation = registryLocation;
        this.tarStore = new tar_store["a" /* TarStore */]();
        this.packageMetadata = new Map();
        this.proxyEnabled = false;
        this.condition = (name, version) => {
            if (this.scopeWhitelist) {
                return this.scopeWhitelist.some(scope => {
                    const [scopeName] = name.split('/');
                    return scopeName === scope;
                });
            }
            return true;
        };
        this.proxyUrl = config.proxyUrl;
        this.scopeWhitelist = config.scopeWhitelist;
        this.authToken = config.authToken;
        this.provideTarballUrl = config.provideTarballUrl;
        this.proxyEnabled = config.proxyEnabled;
        this.authType = config.authType || 'Bearer';
    }
    getProxiedUrl(url) {
        if (this.proxyUrl) {
            return this.proxyUrl + '?registryurl=' + url;
        }
        return url;
    }
    getTarballUrl(name, version, tarballUrl) {
        if (this.provideTarballUrl) {
            return this.provideTarballUrl(name, version, tarballUrl);
        }
        return this.getProxiedUrl(tarballUrl);
    }
    getPackageUrl(name) {
        const encodedName = name.replace('/', '%2f');
        return this.getProxiedUrl(join(this.registryLocation, encodedName));
    }
    getRequestInit() {
        const headers = new Headers();
        headers.append('Accept', NPM_REGISTRY_ACCEPT_HEADER);
        headers.append('Content-Type', 'application/json');
        /**
         * Private packages conditionals:
         * 1. Explicit token: if `authToken` is provide, add it to the header
         * 2. Proxy disabled: then it's a custom registry, so do not anything
         * 3. Proxy is enabled and team-id is provide: it's a private package provided by CSB
         */
        if (this.authToken) {
            // Custom registry url
            headers.append('Authorization', `${this.authType} ${this.authToken}`);
        }
        else if (Object(sandpack_secret["b" /* getSandpackSecret */])()) {
            // CSB proxy
            headers.append('Authorization', `Bearer ${Object(sandpack_secret["b" /* getSandpackSecret */])()}`);
        }
        return {
            method: 'get',
            headers,
            mode: 'cors',
            credentials: this.proxyEnabled ? 'include' : undefined,
        };
    }
    fetchRegistry(url) {
        return Object(utils["a" /* fetchWithRetries */])(url, 3, this.getRequestInit())
            .then(x => x.json())
            .catch((e) => npm_registry_awaiter(this, void 0, void 0, function* () {
            var _a;
            let errorMessage = 'Make sure the right auth token and URL are set';
            if (e.responseObject) {
                const res = yield e.responseObject.json();
                if (res.error) {
                    errorMessage = res.error;
                }
                else if ((_a = res.errors) === null || _a === void 0 ? void 0 : _a.detail) {
                    errorMessage = res.errors.detail[0];
                }
            }
            return Promise.reject(new Error(`Could not fetch from registry. ${errorMessage}.`));
        }));
    }
    getPackageMetadata(name) {
        return npm_registry_awaiter(this, void 0, void 0, function* () {
            if (!this.packageMetadata.has(name)) {
                this.packageMetadata.set(name, this.fetchRegistry(this.getPackageUrl(name)));
            }
            return this.packageMetadata.get(name);
        });
    }
    getAbsoluteVersion(name, version) {
        return npm_registry_awaiter(this, void 0, void 0, function* () {
            if (Object(semver["valid"])(version)) {
                return version;
            }
            const metadata = yield this.getPackageMetadata(name);
            if (metadata['dist-tags'] && metadata['dist-tags'][version]) {
                return metadata['dist-tags'][version];
            }
            const versions = Object.keys(metadata.versions).reverse();
            const foundVersion = versions.find(absoluteVersion => Object(semver["satisfies"])(absoluteVersion, version));
            if (!foundVersion) {
                throw new Error(`Can't find version that satisfies ${name}@${version}`);
            }
            return foundVersion;
        });
    }
    getVersionInfo(name, version) {
        return npm_registry_awaiter(this, void 0, void 0, function* () {
            const absoluteVersion = yield this.getAbsoluteVersion(name, version);
            const metadata = yield this.getPackageMetadata(name);
            const versionInfo = metadata.versions[absoluteVersion];
            if (!versionInfo) {
                throw new Error(`Version '${version}' is not available on the registry for '${name}'`);
            }
            return versionInfo;
        });
    }
    file(name, version, path) {
        return npm_registry_awaiter(this, void 0, void 0, function* () {
            const versionInfo = yield this.getVersionInfo(name, version);
            const tarball = this.getTarballUrl(name, versionInfo.version, versionInfo.dist.tarball);
            return this.tarStore.file(name, tarball, path, this.getRequestInit());
        });
    }
    meta(name, version) {
        return npm_registry_awaiter(this, void 0, void 0, function* () {
            const versionInfo = yield this.getVersionInfo(name, version);
            const tarball = this.getTarballUrl(name, versionInfo.version, versionInfo.dist.tarball);
            return this.tarStore.meta(name, tarball, this.getRequestInit());
        });
    }
    massFiles(name, version) {
        return npm_registry_awaiter(this, void 0, void 0, function* () {
            const versionInfo = yield this.getVersionInfo(name, version);
            const tarball = this.getTarballUrl(name, versionInfo.version, versionInfo.dist.tarball);
            return this.tarStore.massFiles(name, tarball, this.getRequestInit());
        });
    }
}

// CONCATENATED MODULE: ./src/sandbox/boilerplates/index.ts
function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){defineProperty_default()(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}let cachedBoilerplates=[];function evalBoilerplates(_x){return _evalBoilerplates.apply(this,arguments);}function _evalBoilerplates(){_evalBoilerplates=asyncToGenerator_default()(function*(boilerplates){cachedBoilerplates=yield Promise.all(boilerplates.map(/*#__PURE__*/function(){var _ref=asyncToGenerator_default()(function*(boilerplate){const fakeModule={path:"/boilerplate-".concat(boilerplate.condition).concat(boilerplate.extension),code:boilerplate.code};const manager=getCurrentManager();const tModule=manager.getTranspiledModule(fakeModule);const module=yield tModule.transpile(manager).then(()=>tModule.evaluate(manager,{force:true}));return _objectSpread(_objectSpread({},boilerplate),{},{module});});return function(_x2){return _ref.apply(this,arguments);};}()));});return _evalBoilerplates.apply(this,arguments);}function getBoilerplates(){return cachedBoilerplates;}function findBoilerplate(module){const boilerplates=getBoilerplates();const boilerplate=boilerplates.find(b=>{const regex=new RegExp(b.condition);return regex.test(module.path);});if(boilerplate==null){throw new Error("No boilerplate found for ".concat(module.path,", you can create one in the future"));}return boilerplate;}
// CONCATENATED MODULE: ./src/sandbox/boilerplates/default-boilerplates.ts
const JS={id:'js',extension:'.js',condition:'.jsx?$',code:"\nimport React from 'react';\nimport { render } from 'react-dom';\nexport default function(module) {\n  let root = document.getElementById('root');\n\n  if (!root) {\n    root = document.createElement('div');\n    root.id = 'root';\n    document.body.appendChild(root);\n  }\n\n  render(React.createElement(module.default), root);\n}\n"};const HTML={id:'html',extension:'.html',condition:'.html$',code:"\nexport default function(module) {\n  document.body.innerHTML = module\n}\n"};const TS={id:'ts',extension:'.ts',condition:'.tsx?$',code:"\nimport * as React from 'react';\nimport { render } from 'react-dom';\nexport default function(module) {\n  const node = document.createElement('div');\n  document.body.appendChild(node);\n  render(React.createElement(module.default), node);\n}\n"};/* harmony default export */ var default_boilerplates = ([JS,HTML,TS]);
// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/codesandbox-import-utils/lib/api/define.js
var define = __webpack_require__("../../node_modules/codesandbox-import-utils/lib/api/define.js");

// CONCATENATED MODULE: ./src/sandbox/codesandbox-overlay/index.ts
function codesandbox_overlay_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function codesandbox_overlay_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?codesandbox_overlay_ownKeys(Object(t),!0).forEach(function(r){defineProperty_default()(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):codesandbox_overlay_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}function createOverlay(modules){const normalized=Object.keys(modules).reduce((prev,next)=>codesandbox_overlay_objectSpread(codesandbox_overlay_objectSpread({},prev),{},{[next.replace('/','')]:{content:modules[next].code,isBinary:false}}),{});const parameters=Object(define["getParameters"])({files:normalized});return new Promise(resolve=>{const iframe=document.createElement('iframe');iframe.setAttribute('style',"transition: 0.3s ease background-color; position: fixed; bottom: 8px; right: 8px; height: 40px; width: 196px; background-color: rgba(0, 0, 0, 0.6); border-radius: 4px; border: 0; outline: 0; z-index: 214748366;");iframe.setAttribute('onmouseover',"this.style.backgroundColor='rgba(0, 0, 0, 0.7)';");iframe.setAttribute('onmouseout',"this.style.backgroundColor='rgba(0, 0, 0, 0.6)';");iframe.onload=()=>{iframe.contentDocument.body.innerHTML="\n        <form\n          action=\"https://codesandbox.io/api/v1/sandboxes/define\"\n          method=\"POST\"\n          target=\"_blank\"\n          style=\"cursor:pointer;\"\n        >\n        <input\n          type=\"hidden\"\n          name=\"parameters\"\n          value=\"".concat(parameters,"\"\n        />\n          <div style=\"display:flex;align-items:center\" onclick=\"javascript:document.forms[0].submit();\">\n            <svg style=\"width:24px;height:24px;margin-right:8px;\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"1024px\"\n              height=\"1024px\" viewBox=\"0 0 1024 1024\" enable-background=\"new 0 0 1024 1024\" xml:space=\"preserve\">\n              <g id=\"Layer_1\">\n                <polyline\n                  fill=\"#FFFFFF\"\n                  points=\"719.001,851 719.001,639.848 902,533.802 902,745.267 719.001,851\"\n                />\n                <polyline\n                  fill=\"#FFFFFF\"\n                  points=\"302.082,643.438 122.167,539.135 122.167,747.741 302.082,852.573 302.082,643.438\"\n                />\n                <polyline\n                  fill=\"#FFFFFF\"\n                  points=\"511.982,275.795 694.939,169.633 512.06,63 328.436,169.987 511.982,275.795\"\n                />\n              </g>\n              <g id=\"Layer_2\">\n                <polyline\n                  fill=\"none\"\n                  stroke=\"#FFFFFF\"\n                  stroke-width=\"80\"\n                  stroke-miterlimit=\"10\"\n                  points=\"899,287.833 509,513 509,963\"\n                />\n                <line\n                  fill=\"none\"\n                  stroke=\"#FFFFFF\"\n                  stroke-width=\"80\"\n                  stroke-miterlimit=\"10\"\n                  x1=\"122.167\"\n                  y1=\"289\"\n                  x2=\"511.5\"\n                  y2=\"513\"\n                />\n                <polygon\n                  fill=\"none\"\n                  stroke=\"#FFFFFF\"\n                  stroke-width=\"80\"\n                  stroke-miterlimit=\"10\"\n                  points=\"121,739.083 510.917,963.042 901,738.333 901,288 511,62 121,289\"\n                />\n              </g>\n          </svg>\n          <div style=\"font-size:.875rem; font-weight: 300; color: white; font-family: sans-serif\">Open in CodeSandbox</div>\n        </div>\n      </form>\n      ");resolve();};document.body.appendChild(iframe);});}
// EXTERNAL MODULE: ../common/lib/utils/is-preact-10.js
var is_preact_10 = __webpack_require__("../common/lib/utils/is-preact-10.js");

// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/style/utils/insert-css.ts
const wrapper=function(id,css){let webpackHMREnabled=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;return"\nfunction createStyleNode(id, content) {\n  var styleNode =\n    document.getElementById(id) || document.createElement('style');\n\n  styleNode.setAttribute('id', id);\n  styleNode.type = 'text/css';\n  if (styleNode.styleSheet) {\n    styleNode.styleSheet.cssText = content;\n  } else {\n    styleNode.innerHTML = '';\n    styleNode.appendChild(document.createTextNode(content));\n  }\n  document.head.appendChild(styleNode);\n}\n\ncreateStyleNode(\n  ".concat(JSON.stringify(id),",\n  ").concat(JSON.stringify(css),"\n);\n\n").concat(webpackHMREnabled?'module.hot.accept()':'',"\n");};/* harmony default export */ var insert_css = (function(id,css,webpackHMREnabled){const result=wrapper(id,css||'',webpackHMREnabled);return result;});
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/style/utils/to-definition.ts
function toDefinition(classes){return Object.keys(classes).reduce((previous,className)=>previous+"export const ".concat(className,": string;\n"),'');}
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/style/get-modules.ts
let core=null;/* harmony default export */ var get_modules = (/*#__PURE__*/(function(){var _ref=asyncToGenerator_default()(function*(code,loaderContext){if(!core){const Core=yield Promise.all(/* import() | css-modules-loader-core */[__webpack_require__.e("vendors~css-modules-loader-core"), __webpack_require__.e("css-modules-loader-core")]).then(__webpack_require__.t.bind(null, "../../node_modules/css-modules-loader-core/lib/index.js", 7)).then(x=>x.default);core=new Core();}const depPromises=[];const _yield$core$load=yield core.load(code,loaderContext.path,dependencyPath=>{depPromises.push(loaderContext.addDependency(dependencyPath));const tModule=loaderContext.resolveTranspiledModule(dependencyPath);return tModule.source?tModule.source.compiledCode:tModule.module.code;}),injectableSource=_yield$core$load.injectableSource,exportTokens=_yield$core$load.exportTokens;yield Promise.all(depPromises);return{css:injectableSource,exportTokens};});return function(_x,_x2){return _ref.apply(this,arguments);};})());
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/style/index.ts
const getStyleId=id=>id+'-css';// eslint-disable-line
class style_StyleTranspiler extends lib["c" /* Transpiler */]{constructor(){super('style-loader');this.cacheable=false;}cleanModule(loaderContext){const id=getStyleId(loaderContext._module.getId());const element=document.getElementById(id);if(element!=null&&element.parentNode!=null){element.parentNode.removeChild(element);}}doTranspilation(code,loaderContext){const id=getStyleId(loaderContext._module.getId());const path=loaderContext.path;if(loaderContext.options.module){return get_modules(code,loaderContext).then(_ref=>{let css=_ref.css,exportTokens=_ref.exportTokens;let result=insert_css(id,css,loaderContext.options.hmrEnabled);result+="\nmodule.exports=".concat(JSON.stringify(exportTokens),";");Object(codesandbox_es5["dispatch"])({type:'add-extra-lib',path,code:toDefinition(exportTokens)});return Promise.resolve({transpiledCode:result});});}const result=insert_css(id,code,loaderContext.options.hmrEnabled);return Promise.resolve({transpiledCode:result});}}const transpiler=new style_StyleTranspiler();/* harmony default export */ var style = (transpiler);
// EXTERNAL MODULE: ../common/lib/utils/is-url.js
var is_url = __webpack_require__("../common/lib/utils/is-url.js");

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/worker-loader/dist/cjs.js?name=babel-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/babel/worker/index.ts
var babel_worker = __webpack_require__("../../node_modules/worker-loader/dist/cjs.js?name=babel-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/babel/worker/index.ts");
var worker_default = /*#__PURE__*/__webpack_require__.n(babel_worker);

// EXTERNAL MODULE: ../common/lib/utils/delay.js
var utils_delay = __webpack_require__("../common/lib/utils/delay.js");
var delay_default = /*#__PURE__*/__webpack_require__.n(utils_delay);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("../../node_modules/@babel/runtime/helpers/slicedToArray.js");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

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

// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/worker-transpiler/worker-manager.ts
function worker_manager_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function worker_manager_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?worker_manager_ownKeys(Object(t),!0).forEach(function(r){defineProperty_default()(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):worker_manager_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}const worker_manager_debug=debug_default()('cs:compiler:worker-manager');var WorkerStatus;(function(WorkerStatus){WorkerStatus[WorkerStatus["Initializing"]=0]="Initializing";WorkerStatus[WorkerStatus["Ready"]=1]="Ready";})(WorkerStatus||(WorkerStatus={}));class worker_manager_WorkerManager{// Options
// Worker farm state
constructor(name,workerFactory){let options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};defineProperty_default()(this,"firstLoadPromise",null);defineProperty_default()(this,"pendingCalls",[]);defineProperty_default()(this,"activeCalls",new Map());defineProperty_default()(this,"callId",0);defineProperty_default()(this,"functions",new Map());defineProperty_default()(this,"name",void 0);defineProperty_default()(this,"workerFactory",void 0);defineProperty_default()(this,"maxWorkerCount",void 0);defineProperty_default()(this,"hasFS",void 0);defineProperty_default()(this,"maxConcurrency",void 0);defineProperty_default()(this,"workerCount",0);defineProperty_default()(this,"workers",new Map());const _options$hasFS=options.hasFS,hasFS=_options$hasFS===void 0?false:_options$hasFS,_options$preload=options.preload,preload=_options$preload===void 0?false:_options$preload,_options$maxConcurren=options.maxConcurrency,maxConcurrency=_options$maxConcurren===void 0?25:_options$maxConcurren,_options$maxWorkerCou=options.maxWorkerCount,maxWorkerCount=_options$maxWorkerCou===void 0?navigator.hardwareConcurrency:_options$maxWorkerCou;this.name=name;this.maxWorkerCount=maxWorkerCount;this.workerFactory=workerFactory;this.maxConcurrency=maxConcurrency;this.hasFS=hasFS;if(preload){this.initialize();}}initialize(){for(let i=this.workerCount;i<this.maxWorkerCount;i++){const p=this.loadWorker().catch(console.error);if(!this.firstLoadPromise){this.firstLoadPromise=p;}}}dispose(){this.workers.forEach(w=>w.worker.terminate());this.workers=new Map();this.workerCount=0;}handleWorkerReady(workerData){worker_manager_debug("Loaded '".concat(this.name,"' worker in ").concat(Date.now()-workerData.startedAt,"ms"));workerData.status=WorkerStatus.Ready;this.executeRemainingTasks();}handleMessage(workerData,msg){switch(msg.type){case'ready':this.handleWorkerReady(workerData);break;case'request':this.handleCallRequest(workerData.worker,msg);break;case'response':this.handleCallResponse(msg);break;}}loadWorker(){var _this=this;return asyncToGenerator_default()(function*(){if(_this.workerCount>=_this.maxWorkerCount){return Promise.resolve();}if(_this.firstLoadPromise){yield _this.firstLoadPromise;}const workerId=_this.workerCount++;const startedAt=Date.now();const worker=yield _this.workerFactory();return new Promise((resolve,reject)=>{try{const workerdata={workerId,status:WorkerStatus.Initializing,startedAt,activeCalls:0,worker};_this.workers.set(workerId,workerdata);worker.addEventListener('message',evt=>{const data=evt.data;if(typeof data==='object'){if(data.codesandbox){if(data.type==='worker_started'){resolve();}else{_this.handleMessage(workerdata,data);}}else if(!data.browserfsMessage)console.warn("Invalid message from worker ".concat(_this.name,"#").concat(workerId),data);}});// TODO: Move this to onReady, not sure why that doesn't work...
if(_this.hasFS){// Register file system that syncs with filesystem in manager
// @ts-ignore
BrowserFS.FileSystem.WorkerFS.attachRemoteListener(workerdata.worker);workerdata.worker.postMessage({type:'initialize-fs',codesandbox:true});}worker.postMessage({type:'ping',codesandbox:true});}catch(err){reject(err);}});})();}executeRemainingTasks(){if(!this.pendingCalls.length){return;}this.initialize();for(const _ref of this.workers){var _ref2=slicedToArray_default()(_ref,2);const workerId=_ref2[0];const worker=_ref2[1];if(worker.status===WorkerStatus.Ready){while(worker.activeCalls<this.maxConcurrency){const pendingCall=this.pendingCalls.shift();if(!pendingCall){break;}const idx=this.callId++;const message={type:'request',codesandbox:true,idx,method:pendingCall.method,data:pendingCall.data};this.activeCalls.set(idx,worker_manager_objectSpread(worker_manager_objectSpread({},pendingCall),{},{workerId}));worker.activeCalls+=1;worker.worker.postMessage(message);}}}}registerFunction(method,fn){this.functions.set(method,fn);}handleCallResponse(msg){const foundCall=this.activeCalls.get(msg.idx);if(foundCall){if(!msg.isError){foundCall.resolve(msg.data);}else{foundCall.reject(parseWorkerError(msg.data));}if(foundCall.workerId!=null){const foundWorker=this.workers.get(foundCall.workerId);if(!foundWorker){console.warn('Worker not found for call:',foundCall);}else{foundWorker.activeCalls-=1;}this.executeRemainingTasks();}}else{console.warn('Could not find call for:',msg);}}handleCallRequest(worker,msg){var _this2=this;return asyncToGenerator_default()(function*(){try{const fn=_this2.functions.get(msg.method);if(!fn){throw new Error("Could not find registered child function for call \"".concat(msg.method,"\""));}const result=yield fn(msg.data);worker.postMessage({type:'response',codesandbox:true,idx:msg.idx,data:result});}catch(err){worker.postMessage({type:'response',codesandbox:true,idx:msg.idx,isError:true,data:buildWorkerError(err)});}})();}callFn(_ref3){let method=_ref3.method,data=_ref3.data;return new Promise((resolve,reject)=>{this.pendingCalls.push({method,data,resolve,reject});this.executeRemainingTasks();});}}
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/worker-transpiler/transpiler.ts
function transpiler_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function transpiler_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?transpiler_ownKeys(Object(t),!0).forEach(function(r){defineProperty_default()(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):transpiler_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}// A transpiler that uses web workers for concurrent transpilation on multiple threads
class transpiler_WorkerTranspiler extends lib["c" /* Transpiler */]{constructor(name,workerFactory,options){var _this;super(name);_this=this;defineProperty_default()(this,"workerManager",void 0);defineProperty_default()(this,"loaderContextId",0);defineProperty_default()(this,"loaderContexts",new Map());this.workerManager=new worker_manager_WorkerManager(name,workerFactory,options);this.workerManager.registerFunction('resolve-fs',data=>{const loaderContext=this.loaderContexts.get(data.loaderContextId);if(!loaderContext){console.warn('Could not find loader context for resolve-fs',data);throw new Error('Could not find loader context');}const modules=loaderContext.getModules();return{modules};});this.workerManager.registerFunction('resolve-async-transpiled-module',/*#__PURE__*/function(){var _ref=asyncToGenerator_default()(function*(data){const loaderContext=_this.loaderContexts.get(data.loaderContextId);if(!loaderContext){console.warn('Could not find loader context for resolve-async-transpiled-module',data);throw new Error('Could not find loader context');}try{const tModule=yield loaderContext.resolveTranspiledModuleAsync(data.path,data.options);return{found:true,path:tModule.module.path,code:tModule.module.code};}catch(err){return{found:false};}});return function(_x){return _ref.apply(this,arguments);};}());this.workerManager.registerFunction('add-dependency',/*#__PURE__*/function(){var _ref2=asyncToGenerator_default()(function*(data){const loaderContext=_this.loaderContexts.get(data.loaderContextId);if(!loaderContext){console.warn('Could not find loader context for add-dependency',data);throw new Error('Could not find loader context');}if(data.isGlob){loaderContext.addDependenciesInDirectory(data.path,{isAbsolute:data.isAbsolute,isEntry:data.isEntry});}else{yield loaderContext.addDependency(data.path,{isAbsolute:data.isAbsolute,isEntry:data.isEntry});}});return function(_x2){return _ref2.apply(this,arguments);};}());this.workerManager.registerFunction('add-transpilation-dependency',/*#__PURE__*/function(){var _ref3=asyncToGenerator_default()(function*(data){const loaderContext=_this.loaderContexts.get(data.loaderContextId);if(!loaderContext){console.warn('Could not find loader context for add-transpilation-dependency',data);throw new Error('Could not find loader context');}yield loaderContext.addTranspilationDependency(data.path,{isAbsolute:data.isAbsolute,isEntry:data.isEntry});});return function(_x3){return _ref3.apply(this,arguments);};}());this.workerManager.registerFunction('clear-warnings',data=>{Object(codesandbox_es5["dispatch"])(codesandbox_es5["actions"].correction.clear(data.path,data.source));});this.workerManager.registerFunction('warning',data=>{const loaderContext=this.loaderContexts.get(data.loaderContextId);if(!loaderContext){console.warn('Could not find loader context for warning',data);throw new Error('Could not find loader context');}loaderContext.emitWarning(data.warning);});}initialize(){this.workerManager.initialize();}dispose(){this.workerManager.dispose();}registerLoaderContext(loaderContext){const cid=this.loaderContextId++;this.loaderContexts.set(cid,loaderContext);return cid;}cleanupLoaderContext(loaderContextId){this.loaderContexts.delete(loaderContextId);}queueCompileFn(data,loaderContext){var _this2=this;return asyncToGenerator_default()(function*(){const loaderContextId=_this2.registerLoaderContext(loaderContext);const result=yield _this2.workerManager.callFn({method:'compile',data:transpiler_objectSpread(transpiler_objectSpread({},data),{},{loaderContextId})});_this2.cleanupLoaderContext(loaderContextId);return result;})();}getTranspilerContext(manager){var _superprop_getGetTranspilerContext=()=>super.getTranspilerContext,_this3=this;return asyncToGenerator_default()(function*(){return _superprop_getGetTranspilerContext().call(_this3,manager).then(x=>transpiler_objectSpread(transpiler_objectSpread({},x),{},{worker:true,// TODO: Actually see where this is used and update where applicable...
hasFS:_this3.workerManager.hasFS,workerCount:_this3.workerManager.workerCount,initialized:Boolean(_this3.workerManager.workers.size)}));})();}}/* harmony default export */ var worker_transpiler_transpiler = (transpiler_WorkerTranspiler);
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/babel/babel-parser.ts
function babel_parser_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function babel_parser_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?babel_parser_ownKeys(Object(t),!0).forEach(function(r){defineProperty_default()(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):babel_parser_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}const DEFAULT_BABEL_CONFIG={presets:['env','react'],plugins:[]};/**
 * Parses the .babelrc if it exists, if it doesn't it will return a default config
 */function getBabelConfig(config,loaderOptions,path){let isV7=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;const resolvedConfig=config||DEFAULT_BABEL_CONFIG;if(loaderOptions.disableCodeSandboxPlugins){return resolvedConfig;}const finalConfig=babel_parser_objectSpread(babel_parser_objectSpread({},resolvedConfig),{},{sourceMaps:'inline',sourceFileName:path,filename:path});const commonjsPluginName=isV7?'transform-modules-commonjs':'transform-es2015-modules-commonjs';if(finalConfig.plugins){if(finalConfig.plugins.indexOf(commonjsPluginName)===-1){finalConfig.plugins=[...finalConfig.plugins,commonjsPluginName];}}else{finalConfig.plugins=[commonjsPluginName];}return finalConfig;}
// EXTERNAL MODULE: ./node_modules/estree-walker/src/estree-walker.js
var estree_walker = __webpack_require__("./node_modules/estree-walker/src/estree-walker.js");

// CONCATENATED MODULE: ./src/sandbox/eval/utils/is-es-module.ts
const expr=/(;|^|}|\s)(import|export)(\s|{|"|\*)/gm;function isESModule(code){expr.lastIndex=0;return code.indexOf('export default')!==-1||expr.test(code);}
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/babel/ast/syntax.ts
const Syntax={ArrayExpression:'ArrayExpression',ArrayPattern:'ArrayPattern',ArrowFunctionExpression:'ArrowFunctionExpression',AssignmentExpression:'AssignmentExpression',AssignmentPattern:'AssignmentPattern',AwaitExpression:'AwaitExpression',BinaryExpression:'BinaryExpression',BlockStatement:'BlockStatement',BreakStatement:'BreakStatement',CallExpression:'CallExpression',CatchClause:'CatchClause',ClassBody:'ClassBody',ClassDeclaration:'ClassDeclaration',ClassExpression:'ClassExpression',ConditionalExpression:'ConditionalExpression',ContinueStatement:'ContinueStatement',DebuggerStatement:'DebuggerStatement',DoWhileStatement:'DoWhileStatement',EmptyStatement:'EmptyStatement',ExportAllDeclaration:'ExportAllDeclaration',ExportDefaultDeclaration:'ExportDefaultDeclaration',ExportNamedDeclaration:'ExportNamedDeclaration',ExportSpecifier:'ExportSpecifier',ExpressionStatement:'ExpressionStatement',ForInStatement:'ForInStatement',ForOfStatement:'ForOfStatement',ForStatement:'ForStatement',FunctionDeclaration:'FunctionDeclaration',FunctionExpression:'FunctionExpression',Identifier:'Identifier',IfStatement:'IfStatement',Import:'Import',ImportDeclaration:'ImportDeclaration',ImportDefaultSpecifier:'ImportDefaultSpecifier',ImportNamespaceSpecifier:'ImportNamespaceSpecifier',ImportSpecifier:'ImportSpecifier',ImportExpression:'ImportExpression',LabeledStatement:'LabeledStatement',Literal:'Literal',LogicalExpression:'LogicalExpression',MemberExpression:'MemberExpression',MetaProperty:'MetaProperty',MethodDefinition:'MethodDefinition',NewExpression:'NewExpression',ObjectExpression:'ObjectExpression',ObjectPattern:'ObjectPattern',Program:'Program',Property:'Property',RestElement:'RestElement',ReturnStatement:'ReturnStatement',SequenceExpression:'SequenceExpression',SpreadElement:'SpreadElement',Super:'Super',SwitchCase:'SwitchCase',SwitchStatement:'SwitchStatement',TaggedTemplateExpression:'TaggedTemplateExpression',TemplateElement:'TemplateElement',TemplateLiteral:'TemplateLiteral',ThisExpression:'ThisExpression',ThrowStatement:'ThrowStatement',TryStatement:'TryStatement',UnaryExpression:'UnaryExpression',UpdateExpression:'UpdateExpression',VariableDeclaration:'VariableDeclaration',VariableDeclarator:'VariableDeclarator',WhileStatement:'WhileStatement',WithStatement:'WithStatement',YieldExpression:'YieldExpression',JSXElement:'JSXElement',ExportNamespaceSpecifier:'ExportNamespaceSpecifier'};
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/babel/ast/syntax-info.ts
const ESM_TYPES=new Set([Syntax.ImportDeclaration,Syntax.ExportAllDeclaration,Syntax.ExportDefaultDeclaration,Syntax.ExportNamedDeclaration,Syntax.ExportSpecifier]);function getSyntaxInfoFromAst(ast){const syntaxInfo={jsx:false,esm:false,dynamicImports:false};Object(estree_walker["a" /* walk */])(ast.program,{enter(node){// TODO: Figure out if we can exit the walk entirely
// Just skip everything if we already know it's esm and jsx
if(syntaxInfo.jsx&&syntaxInfo.esm&&syntaxInfo.dynamicImports){this.skip();return;}if(ESM_TYPES.has(node.type)){syntaxInfo.esm=true;// Imports cannot contain JSX
if(node.type===Syntax.ImportDeclaration){this.skip();}return;}if(node.type===Syntax.JSXElement){syntaxInfo.jsx=true;this.skip();}if(node.type===Syntax.ImportExpression){syntaxInfo.dynamicImports=true;this.skip();}}});return syntaxInfo;}const JSXSyntax=/\n(.*?)<[A-z](.|\n)*?\/?>/;function checkComment(match){const startOfLine=match[1];// If it's in a comment or string, we're extremely aggressive here because
// transpiling is absolutely our last resort.
if(startOfLine.indexOf('//')>-1||startOfLine.indexOf('*')>-1||startOfLine.indexOf("'")>-1||startOfLine.indexOf('"')>-1||startOfLine.indexOf('`')>-1){return false;}return true;}function getSyntaxInfoFromCode(code,path){// Use getters so we can evaluate lazily
const syntax={get jsx(){const jsxMatch=code.match(JSXSyntax);return jsxMatch&&checkComment(jsxMatch);},get esm(){return isESModule(code);},get dynamicImports(){return code.includes('import(');}};if(path.endsWith('.min.js')){// This needs no transpiling and often fools our JSX check with <a etc...
return{jsx:false,esm:false,dynamicImports:false};}return syntax;}
// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/escope/lib/index.js
var escope_lib = __webpack_require__("../../node_modules/escope/lib/index.js");

// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/babel/ast/ast-node-utils.ts
function generateRequireStatement(varName,requirePath){// Generates `var $varName = require('$requirePath');
return{type:Syntax.VariableDeclaration,declarations:[{type:Syntax.VariableDeclarator,id:{type:Syntax.Identifier,name:varName},init:{type:Syntax.CallExpression,callee:{type:Syntax.Identifier,name:'require'},arguments:[{type:Syntax.Literal,value:requirePath}]}}],kind:'var'};}/**
 * Generates:
 * ```js
 * Object.keys($varName).forEach(function (key) {
 *   if (key === "default" || key === "__esModule") return;
 *   if (Object.prototype.hasOwnProperty.call(exports, key)) return;
 *   Object.defineProperty(exports, key, {
 *     enumerable: true,
 *     configurable: true,
 *     get: function get() {
 *       return $varName[key];
 *     }
 *   });
 * });
 * ```
 */function generateAllExportsIterator(varName){return{type:Syntax.ExpressionStatement,expression:{type:Syntax.CallExpression,callee:{type:Syntax.MemberExpression,computed:false,object:{type:Syntax.CallExpression,callee:{type:Syntax.MemberExpression,computed:false,object:{type:Syntax.Identifier,name:'Object'},property:{type:Syntax.Identifier,name:'keys'}},arguments:[{type:Syntax.Identifier,name:varName}]},property:{type:Syntax.Identifier,name:'forEach'}},arguments:[{type:Syntax.FunctionExpression,id:null,params:[{type:Syntax.Identifier,name:'key'}],body:{type:Syntax.BlockStatement,body:[{type:Syntax.IfStatement,test:{type:Syntax.LogicalExpression,operator:'||',left:{type:Syntax.BinaryExpression,operator:'===',left:{type:Syntax.Identifier,name:'key'},right:{type:Syntax.Literal,value:'default',raw:'"default"'}},right:{type:Syntax.BinaryExpression,operator:'===',left:{type:Syntax.Identifier,name:'key'},right:{type:Syntax.Literal,value:'__esModule',raw:'"__esModule"'}}},consequent:{type:Syntax.ReturnStatement,argument:null},alternate:null},{type:Syntax.IfStatement,test:{type:Syntax.CallExpression,callee:{type:Syntax.MemberExpression,object:{type:Syntax.MemberExpression,object:{type:Syntax.MemberExpression,object:{type:Syntax.Identifier,name:'Object'},computed:false,property:{type:Syntax.Identifier,name:'prototype'}},computed:false,property:{type:Syntax.Identifier,name:'hasOwnProperty'}},computed:false,property:{type:Syntax.Identifier,name:'call'}},arguments:[{type:Syntax.Identifier,name:'exports'},{type:Syntax.Identifier,name:'key'}]},consequent:{type:Syntax.ReturnStatement,argument:null},alternate:null},generateExportGetter({type:Syntax.Identifier,name:'key'},{type:Syntax.MemberExpression,computed:true,object:{type:Syntax.Identifier,name:varName},property:{type:Syntax.Identifier,name:'key'}})]},generator:false,expression:false,async:false}]}};}/**
 * exports.$exportName = $varName.$exportName;
 */function generateExportStatement(varName,exportName){return{type:Syntax.ExpressionStatement,expression:{type:Syntax.AssignmentExpression,operator:'=',left:{type:Syntax.MemberExpression,computed:false,object:{type:Syntax.Identifier,name:'exports'},property:{type:Syntax.Identifier,name:exportName}},right:{type:Syntax.Identifier,name:varName}}};}/**
 * Object.defineProperty(exports, { __esModule: true })
 */function generateEsModuleSpecifier(){return{type:Syntax.ExpressionStatement,expression:{type:Syntax.CallExpression,callee:{type:Syntax.MemberExpression,computed:false,object:{type:Syntax.Identifier,name:'Object'},property:{type:Syntax.Identifier,name:'defineProperty'}},arguments:[{type:Syntax.Identifier,name:'exports'},{type:Syntax.Literal,value:'__esModule',raw:'"__esModule"'},{type:Syntax.ObjectExpression,properties:[{type:Syntax.Property,key:{type:Syntax.Identifier,name:'value'},computed:false,value:{type:Syntax.Literal,value:true,raw:'true'},kind:'init',method:false,shorthand:false}]}]}};}/**
 * Object.defineProperty(exports, $exportName, {
 *   enumerable: true,
 *   configurable: true,
 *   get: function get() {
 *     return $localName;
 *   }
 * })
 */function generateExportGetter(exportObj,local){return{type:Syntax.ExpressionStatement,expression:{type:Syntax.CallExpression,callee:{type:Syntax.MemberExpression,computed:false,object:{type:Syntax.Identifier,name:'Object'},property:{type:Syntax.Identifier,name:'defineProperty'}},arguments:[{type:Syntax.Identifier,name:'exports'},exportObj,{type:Syntax.ObjectExpression,properties:[{type:Syntax.Property,key:{type:Syntax.Identifier,name:'enumerable'},computed:false,value:{type:Syntax.Literal,value:true,raw:'true'},kind:'init',method:false,shorthand:false},{type:Syntax.Property,key:{type:Syntax.Identifier,name:'configurable'},computed:false,value:{type:Syntax.Literal,value:true,raw:'true'},kind:'init',method:false,shorthand:false},{type:Syntax.Property,key:{type:Syntax.Identifier,name:'get'},computed:false,value:{type:Syntax.FunctionExpression,id:{type:Syntax.Identifier,name:'$csbGet'},generator:false,async:false,params:[],body:{type:Syntax.BlockStatement,body:[{type:Syntax.ReturnStatement,argument:local}]}},kind:'init',method:false,shorthand:false}]}]}};}function generateInteropRequire(){return{type:Syntax.FunctionDeclaration,params:[{type:Syntax.Identifier,name:'obj'}],body:{type:Syntax.BlockStatement,body:[{type:Syntax.ReturnStatement,argument:{type:Syntax.ConditionalExpression,test:{type:Syntax.LogicalExpression,left:{type:Syntax.Identifier,name:'obj'},right:{type:Syntax.MemberExpression,object:{type:Syntax.Identifier,name:'obj'},computed:false,property:{type:Syntax.Identifier,name:'__esModule'}},operator:'&&'},consequent:{type:Syntax.Identifier,name:'obj'},alternate:{type:Syntax.ObjectExpression,properties:[{type:Syntax.Property,key:{type:Syntax.Identifier,name:'default'},value:{type:Syntax.Identifier,name:'obj'},kind:'init',computed:false,method:false,shorthand:false}]}}}]},async:false,generator:false,id:{type:Syntax.Identifier,name:'$_csb__interopRequireDefault'}};}function generateInteropRequireExpression(argument,localName){return{type:Syntax.VariableDeclaration,kind:'var',declarations:[{type:Syntax.VariableDeclarator,init:{type:Syntax.CallExpression,callee:{type:Syntax.Identifier,name:'$_csb__interopRequireDefault'},arguments:[argument]},id:{type:Syntax.Identifier,name:localName}}]};}
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/babel/ast/convert-esmodule.ts
function convert_esmodule_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function convert_esmodule_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?convert_esmodule_ownKeys(Object(t),!0).forEach(function(r){defineProperty_default()(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):convert_esmodule_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}// This code is written to be performant, that's why we opted to ignore these linting issues
/* eslint-disable no-loop-func, no-continue */function generateVariableName(input){const v=input.replace(/[^A-Za-z0-9]+/g,'_');return v.substr(v.length-36);}/**
 * Converts esmodule code to commonjs code, built to be as fast as possible
 */function convertEsModule(ast){const program=ast.program;ast.isDirty=true;const usedVarNames={};const varsToRename={};const trackedExports={};/**
   * All names we export, used to predefine the exports at the start
   */const exportNames=new Set();const getVarName=name=>{let usedName=name.replace(/(\s|\.|-|@|\?|&|=|{|})/g,'');while(usedVarNames[usedName]){usedName+='_';}usedVarNames[usedName]=true;return usedName;};let i=0;let importOffset=0;function addNodeInImportSpace(oldPosition,node){program.body.splice(oldPosition,1);program.body.splice(importOffset,0,node);importOffset++;}let addedSpecifier=false;function addEsModuleSpecifier(){if(addedSpecifier){return;}addedSpecifier=true;program.body.unshift(generateEsModuleSpecifier());// Make sure imports will stay after this
importOffset++;i++;}let addedDefaultInterop=false;function addDefaultInterop(){if(addedDefaultInterop){return;}addedDefaultInterop=true;program.body.push(generateInteropRequire());}/**
   * Adds the export identifiers (exports.a = exports.b = exports.c = void 0)
   */function addExportVoids(){const exportNamesArray=[...exportNames];while(exportNamesArray.length!==0){// We need to chunk the exports by 50, otherwise this line will get too long
// and the visitor will create a Maximum call stack size exceeded error
const exportNamesToUse=exportNamesArray.splice(0,50);const totalNode={type:Syntax.ExpressionStatement,expression:{type:Syntax.AssignmentExpression,operator:'='}};let currentNode=totalNode.expression;while(exportNamesToUse.length>0){const exportName=exportNamesToUse.pop();currentNode.left={type:Syntax.MemberExpression,object:{type:Syntax.Identifier,name:'exports'},property:{type:Syntax.Identifier,name:exportName}};if(exportNamesToUse.length){// @ts-expect-error This will be filled in in the next loop
currentNode.right={type:Syntax.AssignmentExpression,operator:'='};currentNode=currentNode.right;}else{currentNode.right={type:Syntax.UnaryExpression,operator:'void',prefix:true,argument:{type:Syntax.Literal,value:0}};}}// @ts-expect-error TS thinks this is a partial type, but by now it's full
program.body.unshift(totalNode);}}// If there is a declaration of `exports` (`var exports = []`), we need to rename this
// variable as it's a reserved keyword
let exportsDefined=false;Object(estree_walker["a" /* walk */])(program,{enter(node,parent){if(node.type===Syntax.VariableDeclaration){// We don't rename exports vars in functions, only on root level
if(parent.type===Syntax.BlockStatement&&exportsDefined===false){this.skip();}}else if(node.type===Syntax.VariableDeclarator){const declNode=node;if(declNode.id.type===Syntax.Identifier&&declNode.id.name==='exports'){exportsDefined=true;}}else if(node.type===Syntax.Identifier&&exportsDefined){const idNode=node;if(idNode.name==='exports'){idNode.name='__$csb_exports';this.replace(idNode);}}else if(!exportsDefined&&parent!=null){// Skip, we don't need to go deeper now
this.skip();}}});for(;i<program.body.length;i++){const statement=program.body[i];if(statement.type===Syntax.ExportAllDeclaration){// export * from './test';
// TO:
// const _csb = require('./test');
// Object.keys(_csb).forEach(key => {
//   if (key === 'default' || key === '__esModule')
//     return;
//   exports[key] = _csb[key])
// }
addEsModuleSpecifier();const source=statement.source;if(typeof source.value!=='string'){continue;}const varName=getVarName("$csb__".concat(generateVariableName(source.value)));addNodeInImportSpace(i,generateRequireStatement(varName,source.value));program.body.push(generateAllExportsIterator(varName));}else if(statement.type===Syntax.ExportNamedDeclaration){// export { a } from './test';
// TO:
// const _csb = require('./test');
// exports.a = _csb.a;
addEsModuleSpecifier();if(statement.source){// export { ... } from ''
const source=statement.source;if(typeof source.value!=='string'){continue;}const varName=getVarName("$csb__".concat(generateVariableName(source.value)));if(statement.specifiers.length===1&&statement.specifiers[0].type===Syntax.ExportSpecifier&&statement.specifiers[0].local.name==='default'){// In this case there's a default re-export. So we need to wrap it in a interopRequireDefault to make sure
// that default is exposed.
addDefaultInterop();addNodeInImportSpace(i,generateInteropRequireExpression({type:Syntax.CallExpression,callee:{type:Syntax.Identifier,name:'require'},arguments:[{type:Syntax.Literal,value:source.value}]},varName));}else{addNodeInImportSpace(i,generateRequireStatement(varName,source.value));}if(statement.specifiers.length){statement.specifiers.forEach(specifier=>{if(specifier.type===Syntax.ExportSpecifier){exportNames.add(specifier.exported.name);program.body.splice(importOffset++,0,generateExportGetter({type:Syntax.Literal,value:specifier.exported.name},{type:Syntax.MemberExpression,object:{type:Syntax.Identifier,name:varName},property:{type:Syntax.Identifier,name:specifier.local.name}}));}else if(specifier.type===Syntax.ExportNamespaceSpecifier){program.body.splice(importOffset++,0,generateExportGetter({type:Syntax.Literal,value:specifier.specifier.name},{type:Syntax.Identifier,name:varName}));}i++;});}}else if(statement.declaration){// First remove the export statement
program.body[i]=statement.declaration;if(statement.declaration.type===Syntax.FunctionDeclaration||statement.declaration.type===Syntax.ClassDeclaration){// export function test() {}
const varName=statement.declaration.id.name;i++;// Add to start of the file, after the defineModule for __esModule. This way this export is already
// defined before requiring other modules. This is only possible for function exports.
const positionToInsert=statement.declaration.type===Syntax.FunctionDeclaration?1:i;program.body.splice(positionToInsert,0,generateExportStatement(varName,varName));exportNames.add(varName);}else{// export const a = {}
const declaration=statement.declaration;program.body.splice(i,1,declaration,// @ts-ignore
...Object(flatten["a" /* default */])(declaration.declarations.map(node=>{if(node.id.type===Syntax.ObjectPattern){// export const { a } = c;
return Object(flatten["a" /* default */])(node.id.properties.map(property=>{if(property.type!==Syntax.Property||property.value.type!==Syntax.Identifier){return false;}exportNames.add(property.value.name);trackedExports[property.value.name]=property.value.name;return generateExportStatement(property.value.name,property.value.name);})).filter(Boolean);}if(node.id.type===Syntax.Identifier){trackedExports[node.id.name]=node.id.name;exportNames.add(node.id.name);return generateExportStatement(node.id.name,node.id.name);}if(node.id.type===Syntax.ArrayPattern){// export const [a, b] = c;
return Object(flatten["a" /* default */])(node.id.elements.map(property=>{if(property.type!==Syntax.Identifier){return false;}exportNames.add(property.name);trackedExports[property.name]=property.name;return generateExportStatement(property.name,property.name);})).filter(Boolean);}return null;})).filter(Boolean));}}else if(statement.specifiers){program.body.splice(i,1);i--;statement.specifiers.forEach(specifier=>{if(specifier.type===Syntax.ExportSpecifier){i++;exportNames.add(specifier.exported.name);program.body.unshift(generateExportGetter({type:Syntax.Literal,value:specifier.exported.name},{type:Syntax.Identifier,name:specifier.local.name}));// Make sure that nothing can get inbetween this
importOffset++;}});}}else if(statement.type===Syntax.ExportDefaultDeclaration){addEsModuleSpecifier();// export default function() {}
// export default class A {}
const varName=getVarName("$csb__default");// First remove the export statement
if(statement.declaration){if(statement.declaration.type===Syntax.FunctionDeclaration){// @ts-ignore
statement.declaration.type=Syntax.FunctionExpression;}else if(statement.declaration.type===Syntax.ClassDeclaration){// @ts-ignore
statement.declaration.type=Syntax.ClassExpression;}const newDeclaration=statement.declaration;// Create a var with the export
if(statement.declaration.type===Syntax.ClassExpression||statement.declaration.type===Syntax.FunctionExpression){if(!statement.declaration.id){// If the function or class has no name, we give it to it
statement.declaration.id={type:Syntax.Identifier,name:varName};}program.body[i]=statement.declaration;i++;program.body.splice(i,0,generateExportStatement(statement.declaration.id.name,'default'));}else{program.body[i]={type:Syntax.VariableDeclaration,kind:'var',declarations:[{type:Syntax.VariableDeclarator,id:{type:Syntax.Identifier,name:varName},init:newDeclaration}]};i++;program.body.splice(i,0,generateExportStatement(varName,'default'));}if(newDeclaration.type===Syntax.ClassDeclaration||newDeclaration.type===Syntax.FunctionExpression){trackedExports[newDeclaration.id.name]='default';}}}else if(statement.type===Syntax.ImportDeclaration){// @ts-ignore Wrong typing in lib?
const source=statement.source;if(typeof source.value!=='string'){continue;}const varName=getVarName("$csb__".concat(generateVariableName(source.value)));addNodeInImportSpace(i,generateRequireStatement(varName,source.value));statement.specifiers.reverse().forEach(specifier=>{let localName;let importName;if(specifier.type===Syntax.ImportSpecifier){// import {Test} from 'test';
// const _test = require('test');
// var Test = _test.Test;
// Mark that we need to rename all references to this variable
// to the new require statement. This will happen in the second pass.
varsToRename[specifier.local.name]=[varName,specifier.imported.name];return;}i++;if(specifier.type===Syntax.ImportDefaultSpecifier){// import Test from 'test';
// const _test = require('test');
// var Test = interopRequireDefault(_test).default;
localName=specifier.local.name;importName='default';addDefaultInterop();program.body.splice(// After the require statement
importOffset,0,generateInteropRequireExpression({type:Syntax.Identifier,name:varName},localName));varsToRename[localName]=[localName,'default'];importOffset++;return;}if(specifier.type===Syntax.ImportNamespaceSpecifier){// import * as Test from 'test';
// const _test = require('test');
// var Test = _test;
localName=specifier.local.name;importName=null;}// insert in index 1 instead of 0 to be after the interopRequireDefault
program.body.splice(importOffset,0,{type:Syntax.VariableDeclaration,kind:'var',declarations:[{type:Syntax.VariableDeclarator,id:{type:Syntax.Identifier,name:localName},init:importName?{type:Syntax.MemberExpression,computed:false,object:{type:Syntax.Identifier,name:varName},property:{type:Syntax.Identifier,name:importName}}:{type:Syntax.Identifier,name:varName}}]});importOffset++;});}}// console.log(exportNames);
if(Object.keys(varsToRename).length>0||Object.keys(trackedExports).length>0){// Convert all the object shorthands to not shorthands, needed later when we rename variables so we
// don't change to the key literals
Object(estree_walker["a" /* walk */])(program,{enter(node,parent,prop,index){if(node.type===Syntax.Property){const property=node;if(property.shorthand&&property.value.type!==Syntax.AssignmentPattern// Not a default initializer
){property.value=convert_esmodule_objectSpread({},property.key);property.shorthand=false;}}}});// A second pass where we rename all references to imports that were marked before.
const scopeManager=escope_lib["analyze"](program,{ecmaVersion:6});scopeManager.acquire(program);scopeManager.scopes.forEach(scope=>{scope.references.forEach(ref=>{// If the variable cannot be resolved, it must be the var that we had
// just changed.
if(Object.prototype.hasOwnProperty.call(varsToRename,ref.identifier.name)&&ref.resolved===null&&!ref.writeExpr){ref.identifier.name="(0, ".concat(varsToRename[ref.identifier.name].join('.'),")");}if(Object.prototype.hasOwnProperty.call(trackedExports,ref.identifier.name)&&ref.isWrite()&&ref.resolved===null&&!ref.init){const name=trackedExports[ref.identifier.name];if(ref.isRead()){// If it's both a read and a write (e.g. --num), we need to go a level higher
// However, that information is not available here, and we don't have an easy way
// to fix it. Because of this, we bail out from this fast converter, and rely on Babel
// to convert to commonjs.
throw new Error("Can't convert read + write exports");}else{ref.identifier.name="exports.".concat(name," = ").concat(ref.identifier.name);}}});});scopeManager.detach();}addExportVoids();}
// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/meriyah/dist/meriyah.umd.js
var meriyah_umd = __webpack_require__("../../node_modules/meriyah/dist/meriyah.umd.js");

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/astring/dist/astring.mjs
var astring = __webpack_require__("../../node_modules/astring/dist/astring.mjs");

// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/babel/ast/generator-jsx.ts
/**
 * Derived from https://unpkg.com/browse/astring-jsx@1.0.1/index.js
 *//* harmony default export */ var generator_jsx = ({// <div></div>
JSXElement(node,state){state.write('<');this[node.openingElement.type](node.openingElement,state);if(node.closingElement){state.write('>');for(let i=0;i<node.children.length;i++){const child=node.children[i];this[child.type](child,state);}state.write('</');this[node.closingElement.type](node.closingElement,state);state.write('>');}else{state.write(' />');}},// <div>
JSXOpeningElement:function JSXOpeningElement(node,state){this[node.name.type](node.name,state);for(let i=0;i<node.attributes.length;i++){const attr=node.attributes[i];this[attr.type](attr,state);}},// </div>
JSXClosingElement:function JSXOpeningElement(node,state){this[node.name.type](node.name,state);},// div
JSXIdentifier:function JSXOpeningElement(node,state){state.write(node.name);},// Member.Expression
JSXMemberExpression:function JSXMemberExpression(node,state){this[node.object.type](node.object,state);state.write('.');this[node.property.type](node.property,state);},// attr="something"
JSXAttribute:function JSXAttribute(node,state){state.write(' ');this[node.name.type](node.name,state);state.write('=');this[node.value.type](node.value,state);},// namespaced:attr="something"
JSXNamespacedName:function JSXNamespacedName(node,state){this[node.namespace.type](node.namespace,state);state.write(':');this[node.name.type](node.name,state);},// {expression}
JSXExpressionContainer:function JSXExpressionContainer(node,state){state.write('{');this[node.expression.type](node.expression,state);state.write('}');},JSXText(node,state){state.write(node.value);}});
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/babel/ast/generator.ts
function generator_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function generator_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?generator_ownKeys(Object(t),!0).forEach(function(r){defineProperty_default()(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):generator_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}// Enables parenthesis regardless of precedence
const NEEDS_PARENTHESES=17;const EXPRESSIONS_PRECEDENCE={// Definitions
ArrayExpression:20,TaggedTemplateExpression:20,ThisExpression:20,Identifier:20,Literal:18,TemplateLiteral:20,Super:20,SequenceExpression:20,// Operations
MemberExpression:19,CallExpression:19,NewExpression:19,// Other definitions
ArrowFunctionExpression:NEEDS_PARENTHESES,ClassExpression:NEEDS_PARENTHESES,FunctionExpression:NEEDS_PARENTHESES,ObjectExpression:NEEDS_PARENTHESES,// Other operations
UpdateExpression:16,UnaryExpression:15,BinaryExpression:14,LogicalExpression:13,ConditionalExpression:4,AssignmentExpression:3,AwaitExpression:2,YieldExpression:2,RestElement:1};/**
 * Add support for next syntax
 */const customGenerator=generator_objectSpread(generator_objectSpread({},astring["a" /* GENERATOR */]),{},{FieldDefinition(node,state){// Support class fields
if(node.static){state.write('static ');}state.write(node.key.name);state.write(' = ');this[node.value.type](node.value,state);},ImportExpression(node,state){// Convert import() to $csbImport()
state.write('$csbImport(');this[node.source.type](node.source,state);state.write(')');},UnaryExpression(node,state){if(node.prefix){state.write(node.operator);if(node.operator.length>1){state.write(' ');}if(EXPRESSIONS_PRECEDENCE[node.argument.type]<EXPRESSIONS_PRECEDENCE.UnaryExpression){state.write('(');this[node.argument.type](node.argument,state);state.write(')');}else{state.write(' ');this[node.argument.type](node.argument,state);}}else{// FIXME: This case never occurs
this[node.argument.type](node.argument,state);state.write(node.operator);}}},generator_jsx);
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/babel/ast/utils.ts
function parseModule(code){return{isDirty:false,program:meriyah_umd["parseModule"](code,{next:true,raw:true,jsx:true})};}function generateCode(ast){const finalCode=astring["b" /* generate */](ast.program,{generator:customGenerator});return"\"use strict\";\n".concat(finalCode);}
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/babel/ast/collect-dependencies.ts
function collectDependenciesFromAST(ast){const deps=new Set();Object(estree_walker["a" /* walk */])(ast.program,{enter(node){// @ts-ignore
if(node.type===Syntax.CallExpression&&node.callee.name==='require'){// @ts-ignore
if(node.arguments.length&&node.arguments[0].value){// @ts-ignore
deps.add(node.arguments[0].value);}this.skip();}}});return Array.from(deps);}
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/babel/ast/rewrite-meta.ts
// This code is written to be performant, that's why we opted to ignore these linting issues
/* eslint-disable no-loop-func, no-continue */const CSB_IMPORT_META_NAME='$csb__import_meta';function rewriteImportMeta(ast,meta){let hasImportMeta=false;Object(estree_walker["a" /* walk */])(ast.program,{enter(node){if(node.type===Syntax.MemberExpression){if(node.object.type===Syntax.MetaProperty&&node.object.meta.name==='import'){node.object={type:Syntax.Identifier,name:CSB_IMPORT_META_NAME};hasImportMeta=true;this.skip();}}}});if(hasImportMeta){ast.program.body.unshift({type:Syntax.VariableDeclaration,kind:'var',declarations:[{type:Syntax.VariableDeclarator,id:{type:Syntax.Identifier,name:CSB_IMPORT_META_NAME},init:{type:Syntax.ObjectExpression,properties:[{type:Syntax.Property,kind:'init',computed:false,shorthand:false,method:false,key:{type:Syntax.Identifier,name:'url'},value:{type:Syntax.Literal,value:meta.url,raw:JSON.stringify(meta.url)}}]}}]});}}
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/babel/index.ts
function babel_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function babel_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?babel_ownKeys(Object(t),!0).forEach(function(r){defineProperty_default()(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):babel_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}/* eslint-enable import/default *//* eslint-disable import/default */ // @ts-ignore
const MAX_WORKER_ITERS=100;const WORKER_COUNT= true?1:undefined;function addCollectedDependencies(loaderContext,deps){return Promise.all(deps.map(/*#__PURE__*/function(){var _ref=asyncToGenerator_default()(function*(dep){if(dep.isGlob){loaderContext.addDependenciesInDirectory(dep.path,{isAbsolute:dep.isAbsolute,isEntry:dep.isEntry});}else{yield loaderContext.addDependency(dep.path,{isAbsolute:dep.isAbsolute,isEntry:dep.isEntry});}});return function(_x){return _ref.apply(this,arguments);};}()));}// Right now this is in a worker, but when we're going to allow custom plugins
// we need to move this out of the worker again, because the config needs
// to support custom plugins
class babel_BabelTranspiler extends worker_transpiler_transpiler{constructor(){super('babel-loader',/*#__PURE__*/ // @ts-ignore
asyncToGenerator_default()(function*(){let iteration=0;while(typeof globalThis.babelworkers==='undefined'){if(iteration>=MAX_WORKER_ITERS){throw new Error('Could not load Babel worker');}yield delay_default()(50);// eslint-disable-line
iteration++;}if(globalThis.babelworkers.length===0){return worker_default()();}// We set these up in startup.ts.
return globalThis.babelworkers.pop();}),{maxWorkerCount:WORKER_COUNT,preload:true});defineProperty_default()(this,"worker",void 0);defineProperty_default()(this,"startupWorkersInitialized",false);}doTranspilation(code,loaderContext){var _this=this;return asyncToGenerator_default()(function*(){const path=loaderContext.path;const isNodeModule=path.startsWith('/node_modules')||Object(is_url["isUrl"])(path);/**
     * We should never transpile babel-standalone, because it relies on code that runs
     * in non-strict mode. Transpiling this code would add a "use strict;" piece, which
     * would then break the code (because it expects `this` to be global). No transpiler
     * can fix this, and because of this we need to just specifically ignore this file.
     */if(path==='/node_modules/babel-standalone/babel.js'){return{transpiledCode:code};}// Check if we can take a shortcut, we have a custom pipeline for transforming
// node_modules to commonjs and collecting deps
if(loaderContext.options.simpleRequire||isNodeModule){try{const ast=parseModule(code);const syntaxInfo=getSyntaxInfoFromAst(ast);if(!syntaxInfo.jsx){// If the code is ESM we transform it to commonjs and return it
if(syntaxInfo.esm||syntaxInfo.dynamicImports){Object(metrics["measure"])("esconvert-".concat(path));if(syntaxInfo.esm){convertEsModule(ast);}// We collect requires instead of doing this in convertESModule as some modules also use require
// Which is actually invalid but we probably don't wanna break anyone's code if it works in other bundlers...
const deps=collectDependenciesFromAST(ast);yield addCollectedDependencies(loaderContext,deps.map(d=>({path:d})));rewriteImportMeta(ast,{url:loaderContext.url});Object(metrics["endMeasure"])("esconvert-".concat(path),{silent:true});return{transpiledCode:generateCode(ast)};}// If the code is commonjs and does not contain any more jsx, we generate and return the code.
Object(metrics["measure"])("dep-collection-".concat(path));const deps=collectDependenciesFromAST(ast);yield addCollectedDependencies(loaderContext,deps.map(d=>({path:d})));Object(metrics["endMeasure"])("dep-collection-".concat(path),{silent:true});return{transpiledCode:code};}}catch(err){// do not log this in production, it confuses our users
if(false){}}}const configs=loaderContext.options.configurations;const foundConfig=configs.babel&&configs.babel.parsed;const loaderOptions=loaderContext.options||{};const dependencies=configs.package&&configs.package.parsed&&configs.package.parsed.dependencies||{};const devDependencies=configs.package&&configs.package.parsed&&configs.package.parsed.devDependencies||{};const isV7=loaderContext.options.isV7||Object(is_babel_7["isBabel7"])(dependencies,devDependencies);const hasMacros=Object.keys(dependencies).some(d=>d.indexOf('macro')>-1||d.indexOf('codegen')>-1);const babelConfig=getBabelConfig(foundConfig||loaderOptions.config,loaderOptions,path,isV7);const _yield$_this$queueCom=yield _this.queueCompileFn({code,config:babelConfig,path,loaderOptions,babelTranspilerOptions:configs&&configs.babelTranspiler&&configs.babelTranspiler.parsed,sandboxOptions:configs&&configs.sandbox&&configs.sandbox.parsed,version:isV7?7:6,hasMacros},loaderContext),transpiledCode=_yield$_this$queueCom.code,foundDependencies=_yield$_this$queueCom.dependencies;yield addCollectedDependencies(loaderContext,foundDependencies);return{transpiledCode};})();}getTranspilerContext(manager){var _superprop_getGetTranspilerContext=()=>super.getTranspilerContext,_this2=this;return asyncToGenerator_default()(function*(){const baseConfig=yield _superprop_getGetTranspilerContext().call(_this2,manager);const babelTranspilerOptions=manager.configurations&&manager.configurations.babelTranspiler&&manager.configurations.babelTranspiler.parsed;const result=yield _this2.workerManager.callFn({method:'get-babel-context',data:{transpilerOptions:babelTranspilerOptions}});const version=result.version,availablePlugins=result.availablePlugins,availablePresets=result.availablePresets;return babel_objectSpread(babel_objectSpread({},baseConfig),{},{babelVersion:version,availablePlugins,availablePresets,babelTranspilerOptions});})();}}const babel_transpiler=new babel_BabelTranspiler();/* harmony default export */ var babel = (babel_transpiler);
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/json/index.ts
class json_JSONTranspiler extends lib["c" /* Transpiler */]{doTranspilation(code){const result="\n      module.exports = JSON.parse(".concat(JSON.stringify(code||''),")\n    ");return Promise.resolve({transpiledCode:result});}}const json_transpiler=new json_JSONTranspiler('json-loader');/* harmony default export */ var json = (json_transpiler);
// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/worker-loader/dist/cjs.js?name=sass-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/sass/worker/index.ts
var sass_worker = __webpack_require__("../../node_modules/worker-loader/dist/cjs.js?name=sass-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/sass/worker/index.ts");
var sass_worker_default = /*#__PURE__*/__webpack_require__.n(sass_worker);

// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/sass/index.ts
// @ts-ignore
class sass_SassTranspiler extends worker_transpiler_transpiler{constructor(){super('sass-loader',sass_worker_default.a,{maxWorkerCount:1,hasFS:true});defineProperty_default()(this,"worker",void 0);this.cacheable=false;}doTranspilation(code,loaderContext){var _this=this;return asyncToGenerator_default()(function*(){if(!code){return{transpiledCode:''};}const indentedSyntax=loaderContext.options.indentedSyntax==null?loaderContext.path.endsWith('.sass'):true;const _yield$_this$queueCom=yield _this.queueCompileFn({code,path:loaderContext.path,indentedSyntax},loaderContext),transpiledCode=_yield$_this$queueCom.transpiledCode,transpilationDependencies=_yield$_this$queueCom.transpilationDependencies;yield Promise.all(transpilationDependencies.map(dep=>loaderContext.addTranspilationDependency(dep.path,dep.options||{})));return{transpiledCode};})();}}const sass_transpiler=new sass_SassTranspiler();/* harmony default export */ var sass = (sass_transpiler);
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/react-refresh/refresh-transpiler.ts
const HELPER_PATH='/node_modules/csbbust/refresh-helper.js';const HELPER_CODE="\nconst RefreshRuntime = require('react-refresh/runtime');\n\nfunction debounce(fn, delay) {\n  var handle;\n  return () => {\n    clearTimeout(handle);\n    handle = setTimeout(fn, delay);\n  };\n}\n\nconst enqueueUpdate = debounce(() => {\n  try {\n    RefreshRuntime.performReactRefresh();\n  } catch (e) {\n    module.hot.decline();\n    throw e;\n  }\n}, 30);\n\nfunction isReactRefreshBoundary(moduleExports) {\n  if (Object.keys(RefreshRuntime).length === 0) {\n    return false;\n  }\n\n  if (RefreshRuntime.isLikelyComponentType(moduleExports)) {\n    return true;\n  }\n\n  if (moduleExports == null || typeof moduleExports !== 'object') {\n    /** Exit if we can't iterate over exports. */\n    return false;\n  }\n\n  let hasExports = false;\n  let areAllExportsComponents = true;\n  for (const key in moduleExports) {\n    hasExports = true;\n\n    if (key === '__esModule') {\n      continue;\n    }\n\n    const desc = Object.getOwnPropertyDescriptor(moduleExports, key);\n    if (desc && desc.get) {\n      /** Don't invoke getters as they may have side effects. */\n      return false;\n    }\n\n    const exportValue = moduleExports[key];\n    if (!RefreshRuntime.isLikelyComponentType(exportValue)) {\n      areAllExportsComponents = false;\n    }\n  }\n  \n  return hasExports && areAllExportsComponents;\n};\n\n/** When this signature changes, it's unsafe to stop at this refresh boundary. */\nfunction getRefreshBoundarySignature(moduleExports) {\n  const signature = [];\n  signature.push(RefreshRuntime.getFamilyByType(moduleExports));\n  if (moduleExports == null || typeof moduleExports !== 'object') {\n    /** Exit if we can't iterate over exports. */\n    /** (This is important for legacy environments.) */\n    return signature;\n  }\n\n  for (const key in moduleExports) {\n    if (key === '__esModule') {\n      continue;\n    }\n\n    const desc = Object.getOwnPropertyDescriptor(moduleExports, key);\n    if (desc && desc.get) {\n      continue;\n    }\n\n    const exportValue = moduleExports[key];\n    signature.push(key);\n    signature.push(RefreshRuntime.getFamilyByType(exportValue));\n  }\n\n  return signature;\n};\n\nfunction shouldInvalidateReactRefreshBoundary(\n  prevExports,\n  nextExports,\n) {\n  const prevSignature = getRefreshBoundarySignature(prevExports);\n  const nextSignature = getRefreshBoundarySignature(nextExports);\n  if (prevSignature.length !== nextSignature.length) {\n    return true;\n  }\n  \n  for (let i = 0; i < nextSignature.length; i++) {\n    if (prevSignature[i] !== nextSignature[i]) {\n      return true;\n    }\n  }\n\n  return false;\n};\n\nvar registerExportsForReactRefresh = (moduleExports, moduleID) => {\n  RefreshRuntime.register(moduleExports, moduleID + ' %exports%');\n  if (moduleExports == null || typeof moduleExports !== 'object') {\n    /** Exit if we can't iterate over exports. */\n    /** (This is important for legacy environments.) */\n    return;\n  }\n  for (const key in moduleExports) {\n    const desc = Object.getOwnPropertyDescriptor(moduleExports, key);\n    if (desc && desc.get) {\n      /** Don't invoke getters as they may have side effects. */\n      continue;\n    }\n    const exportValue = moduleExports[key];\n    const typeID = moduleID + ' %exports% ' + key;\n    RefreshRuntime.register(exportValue, typeID);\n  }\n};\n\nfunction prelude(module) {\n  window.$RefreshReg$ = (type, id) => {\n    /** Note module.id is webpack-specific, this may vary in other bundlers */\n    const fullId = module.id + ' ' + id;\n    RefreshRuntime.register(type, fullId);\n  }\n    \n  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;\n}\n\nfunction postlude(module) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n  if (isReactRefreshBoundary(module.exports)) {\n    registerExportsForReactRefresh(module.exports, module.id);\n    const currentExports = { ...module.exports };\n\n    module.hot.dispose(function hotDisposeCallback(data) {\n      data.prevExports = currentExports;\n    });\n\n    if (isHotUpdate && shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n      module.hot.invalidate();\n    } else {\n      module.hot.accept();\n    }\n\n    enqueueUpdate();\n  } else if (isHotUpdate && isReactRefreshBoundary(prevExports)) {\n    module.hot.invalidate();\n  }\n}\n\nmodule.exports = {\n  enqueueUpdate,\n  isReactRefreshBoundary,\n  registerExportsForReactRefresh,\n  shouldInvalidateReactRefreshBoundary,\n  prelude,\n  postlude,\n};\n".trim();const prelude="var _csbRefreshUtils = require(\"".concat(HELPER_PATH,"\");\nvar prevRefreshReg = window.$RefreshReg$;\nvar prevRefreshSig = window.$RefreshSig$;\n_csbRefreshUtils.prelude(module);\ntry {").replace(/[\n]+/gm,'');const postlude="_csbRefreshUtils.postlude(module);\n} finally {\n  window.$RefreshReg$ = prevRefreshReg;\n  window.$RefreshSig$ = prevRefreshSig;\n}".replace(/[\n]+/gm,'');/**
 * This is the compressed version of the code in the comment above. We compress the code
 * to a single line so we don't mess with the source mapping when showing errors.
 */const getWrapperCode=sourceCode=>prelude+sourceCode+'\n'+postlude;class refresh_transpiler_RefreshTranspiler extends lib["c" /* Transpiler */]{constructor(){super('react-refresh-loader');}doTranspilation(code,loaderContext){return asyncToGenerator_default()(function*(){yield loaderContext.addDependency('react-refresh/runtime');loaderContext.emitModule(HELPER_PATH,HELPER_CODE,'/',false,false);const newCode=getWrapperCode(code);return{transpiledCode:newCode||''};})();}}const refresh_transpiler_transpiler=new refresh_transpiler_RefreshTranspiler();/* harmony default export */ var refresh_transpiler = (refresh_transpiler_transpiler);
// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/worker-loader/dist/cjs.js?name=less-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/less/less-worker.ts
var less_worker = __webpack_require__("../../node_modules/worker-loader/dist/cjs.js?name=less-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/less/less-worker.ts");
var less_worker_default = /*#__PURE__*/__webpack_require__.n(less_worker);

// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/less/index.ts
function less_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function less_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?less_ownKeys(Object(t),!0).forEach(function(r){defineProperty_default()(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):less_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}/* eslint-disable import/default */ // @ts-ignore
/* eslint-enable import/default */class less_LessTranspiler extends worker_transpiler_transpiler{constructor(){super('less-loader',less_worker_default.a,{maxWorkerCount:1});defineProperty_default()(this,"worker",void 0);this.cacheable=false;}doTranspilation(code,loaderContext){var _this=this;return asyncToGenerator_default()(function*(){const modules=loaderContext.getModules();const lessModules=modules.filter(m=>/.*\.(css|less)$/.test(m.path));const files=lessModules.reduce((interMediateFiles,module)=>less_objectSpread(less_objectSpread({},interMediateFiles),{},{[module.path]:module.code}),{});const path=loaderContext.path;files[path]=code;const _yield$_this$queueCom=yield _this.queueCompileFn({code,files,path},loaderContext),transpiledCode=_yield$_this$queueCom.css,transpilationDependencies=_yield$_this$queueCom.transpilationDependencies;yield Promise.all(transpilationDependencies.map(dep=>loaderContext.addTranspilationDependency(dep.path,dep.options||{})));return{transpiledCode};})();}}const less_transpiler=new less_LessTranspiler();/* harmony default export */ var less = (less_transpiler);
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/postcss/index.ts
const FEATURE_REGEX=/@import|@url/;/**
 * Mainly responsible for inlining css imports
 */class postcss_PostCSSCompiler extends lib["c" /* Transpiler */]{constructor(){super('postcss-compiler');}doTranspilation(code,loaderContext){if(!FEATURE_REGEX.test(code)){return Promise.resolve({transpiledCode:code});}return Promise.all(/* import() | postcss-compiler */[__webpack_require__.e("vendors~postcss-compiler~vue-style-compiler"), __webpack_require__.e(0), __webpack_require__.e("vendors~postcss-compiler"), __webpack_require__.e("postcss-compiler")]).then(__webpack_require__.bind(null, "./src/sandbox/eval/transpilers/postcss/loader.ts")).then(loader=>loader.default(code,loaderContext));}}const postcss_transpiler=new postcss_PostCSSCompiler();/* harmony default export */ var postcss = (postcss_transpiler);
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/svgr/index.ts
class svgr_SVGRTranspiler extends lib["c" /* Transpiler */]{constructor(){super('svgr-loader');}doTranspilation(code,loaderContext){return asyncToGenerator_default()(function*(){const _yield$import=yield Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, "./src/sandbox/eval/transpilers/svgr/transpiler.ts")),svgrTransform=_yield$import.svgrTransform;// We follow CRA behaviour, so the code with the component is not the default
// export, this forces that.
const codeIsHttp=loaderContext._module.module.code.startsWith('http');let downloadedCode=code;if(codeIsHttp){yield fetch(code).then(res=>res.text()).then(r=>{downloadedCode=r;});}const result=yield svgrTransform(loaderContext.path,downloadedCode);return{transpiledCode:result};})();}}const svgr_transpiler=new svgr_SVGRTranspiler();/* harmony default export */ var svgr = (svgr_transpiler);
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/react-svg/index.ts
class react_svg_ReactSVGTranspiler extends lib["c" /* Transpiler */]{constructor(){super('react-svg-loader');}doTranspilation(code,loaderContext){return asyncToGenerator_default()(function*(){const transpiledCode="import link from ".concat(JSON.stringify("!base64-loader!".concat(loaderContext.path)),";")+"export default link;"+"export const Url = link;"+"export { default as ReactComponent } from ".concat(JSON.stringify("!babel-loader!svgr-loader!".concat(loaderContext.path)),";");return{transpiledCode};})();}}const react_svg_transpiler=new react_svg_ReactSVGTranspiler();/* harmony default export */ var react_svg = (react_svg_transpiler);
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/raw/index.ts
class raw_RawTranspiler extends lib["c" /* Transpiler */]{constructor(){super('raw-loader');}doTranspilation(code){return Promise.resolve({transpiledCode:"\n      module.exports = ".concat(JSON.stringify(code),";")});}}const raw_transpiler=new raw_RawTranspiler();/* harmony default export */ var raw = (raw_transpiler);
// EXTERNAL MODULE: ./node_modules/semver/semver.js
var semver_semver = __webpack_require__("./node_modules/semver/semver.js");
var semver_semver_default = /*#__PURE__*/__webpack_require__.n(semver_semver);

// CONCATENATED MODULE: ./src/sandbox/eval/presets/create-react-app/utils.ts
function isMinimalSemverVersion(version,minimalVersion){try{return semver_semver_default.a.gte(version,minimalVersion);}catch(e){// Semver couldn't be parsed, we assume that we're on the bleeding edge now, so true.
return true;}}function isMinimalReactDomVersion(_x,_x2){return _isMinimalReactDomVersion.apply(this,arguments);}function _isMinimalReactDomVersion(){_isMinimalReactDomVersion=asyncToGenerator_default()(function*(version,minimalVersion){return isMinimalAbsoluteVersion('react-dom',version,minimalVersion);});return _isMinimalReactDomVersion.apply(this,arguments);}function isMinimalReactVersion(_x3,_x4){return _isMinimalReactVersion.apply(this,arguments);}function _isMinimalReactVersion(){_isMinimalReactVersion=asyncToGenerator_default()(function*(version,minimalVersion){return isMinimalAbsoluteVersion('react',version,minimalVersion);});return _isMinimalReactVersion.apply(this,arguments);}function isMinimalAbsoluteVersion(_x5,_x6,_x7){return _isMinimalAbsoluteVersion.apply(this,arguments);}/**
 * Decide whether React Refresh hot module reloading strategy is supported by React
 */function _isMinimalAbsoluteVersion(){_isMinimalAbsoluteVersion=asyncToGenerator_default()(function*(name,version,minimalVersion){if(version){const absoluteDependencies=yield Object(utils_dependencies["getAbsoluteDependencies"])({[name]:version});return absoluteDependencies[name].startsWith('0.0.0')||isMinimalSemverVersion(absoluteDependencies[name],minimalVersion);}return false;});return _isMinimalAbsoluteVersion.apply(this,arguments);}function hasRefresh(_x8){return _hasRefresh.apply(this,arguments);}function _hasRefresh(){_hasRefresh=asyncToGenerator_default()(function*(dependencies){const hasReactRefresh=dependencies.find(n=>n.name==='react-refresh');if(hasReactRefresh){const reactDom=dependencies.find(dep=>dep.name==='react-dom');if(reactDom){return isMinimalReactDomVersion(reactDom.version,'16.9.0');}}return false;});return _hasRefresh.apply(this,arguments);}function supportsNewReactTransform(){return _supportsNewReactTransform.apply(this,arguments);}function _supportsNewReactTransform(){_supportsNewReactTransform=asyncToGenerator_default()(function*(){let dependencies=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};let devDependencies=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};const react=dependencies.react||devDependencies.react;if(react){return isMinimalReactVersion(react,'17.0.0');}return false;});return _supportsNewReactTransform.apply(this,arguments);}const aliases={// Directly match react-native to react-native-web.
// Attempt to use react-native internals shouldn't work on web.
'react-native$':'react-native-web',// Alias core react-native internals to react-native-web equivalents
'react-native/Libraries/EventEmitter/RCTDeviceEventEmitter$':'react-native-web/dist/vendor/react-native/NativeEventEmitter/RCTDeviceEventEmitter','react-native/Libraries/vendor/emitter/EventEmitter$':'react-native-web/dist/vendor/react-native/emitter/EventEmitter','react-native/Libraries/vendor/emitter/EventSubscriptionVendor$':'react-native-web/dist/vendor/react-native/emitter/EventSubscriptionVendor','react-native/Libraries/EventEmitter/NativeEventEmitter$':'react-native-web/dist/vendor/react-native/NativeEventEmitter',// Alias core react-native asset management internals to unimodule equivalents.
'react-native/Libraries/Image/AssetSourceResolver$':'expo-asset/build/AssetSourceResolver','react-native/Libraries/Image/assetPathUtils$':'expo-asset/build/Image/assetPathUtils','react-native/Libraries/Image/resolveAssetSource$':'expo-asset/build/resolveAssetSource'};
// CONCATENATED MODULE: ./src/sandbox/eval/presets/create-react-app/utils/initLegacyDevTools.ts
function initializeReactDevToolsLegacy(){return _initializeReactDevToolsLegacy.apply(this,arguments);}function _initializeReactDevToolsLegacy(){_initializeReactDevToolsLegacy=asyncToGenerator_default()(function*(){if(!window.opener){const _yield$import=yield __webpack_require__.e(/* import() | react-devtools-backend */ "vendors~react-devtools-backend").then(__webpack_require__.t.bind(null, "../../node_modules/react-devtools-inline_legacy/backend.js", 7)),initializeDevTools=_yield$import.initialize,activate=_yield$import.activate;// The dispatch needs to happen before initializing, so that the backend can already listen
Object(codesandbox_es5["dispatch"])({type:'activate-react-devtools'});// @ts-ignore
if(typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__!=='undefined'){try{// @ts-ignore We need to make sure that the existing chrome extension doesn't interfere
delete window.__REACT_DEVTOOLS_GLOBAL_HOOK__;}catch(e){/* ignore */}}// Call this before importing React (or any other packages that might import React).
initializeDevTools(window);activate(window);}});return _initializeReactDevToolsLegacy.apply(this,arguments);}
// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/uuid/dist/esm-browser/v1.js + 4 modules
var esm_browser_v1 = __webpack_require__("../../node_modules/uuid/dist/esm-browser/v1.js");

// CONCATENATED MODULE: ./src/sandbox/eval/presets/create-react-app/utils/initLatestDevTools.ts
function initializeReactDevToolsLatest(){return _initializeReactDevToolsLatest.apply(this,arguments);}function _initializeReactDevToolsLatest(){_initializeReactDevToolsLatest=asyncToGenerator_default()(function*(){if(!window.opener){const uid=Object(esm_browser_v1["a" /* default */])();const wall={listen(listener){window.addEventListener('message',event=>{if(event.data.uid===uid){listener(event.data);}});},send(event,payload){window.parent.postMessage({event,payload,uid},'*');}};const _yield$import=yield __webpack_require__.e(/* import() | react-devtools-backend */ "vendors~react-devtools-backend").then(__webpack_require__.t.bind(null, "../../node_modules/react-devtools-inline/backend.js", 7)),activateBackend=_yield$import.activate,createBackendBridge=_yield$import.createBridge,initializeBackend=_yield$import.initialize;// The dispatch needs to happen before initializing, so that the backend can already listen
Object(codesandbox_es5["dispatch"])({type:'activate-react-devtools',uid});// @ts-ignore
if(typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__!=='undefined'){try{// @ts-ignore We need to make sure that the existing chrome extension doesn't interfere
delete window.__REACT_DEVTOOLS_GLOBAL_HOOK__;}catch(e){/* ignore */}}// Call this before importing React (or any other packages that might import React).
initializeBackend(window);activateBackend(window,{bridge:createBackendBridge(window,wall)});}});return _initializeReactDevToolsLatest.apply(this,arguments);}
// CONCATENATED MODULE: ./src/sandbox/eval/presets/create-react-app/utils/createRefreshEntry.ts
/**
 * When using React Refresh we need to evaluate some code before 'react-dom' is initialized
 * (https://github.com/facebook/react/issues/16604#issuecomment-528663101) this is the code.
 */function createRefreshEntry(_x){return _createRefreshEntry.apply(this,arguments);}function _createRefreshEntry(){_createRefreshEntry=asyncToGenerator_default()(function*(manager){const entryModule={path:'/node_modules/__csb/react-dom-entrypoint.js',code:"if (typeof window !== 'undefined') {\nconst runtime = require('react-refresh/runtime');\nruntime.injectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => type => type;\n}\n"};manager.addModule(entryModule);const tEntryModule=manager.getTranspiledModule(entryModule);tEntryModule.setIsEntry(true);yield tEntryModule.transpile(manager).then(()=>tEntryModule.evaluate(manager,{force:true}));});return _createRefreshEntry.apply(this,arguments);}
// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/path-browserify/index.js
var path_browserify = __webpack_require__("../../node_modules/path-browserify/index.js");

// EXTERNAL MODULE: ./src/sandbox/eval/transpilers/base64/mimes.json
var mimes = __webpack_require__("./src/sandbox/eval/transpilers/base64/mimes.json");

// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/base64/index.ts
// @ts-ignore
function getMimeType(filePath){const extension=Object(path_browserify["extname"])(filePath).slice(1);return mimes[extension];}function createDataUri(_x){return _createDataUri.apply(this,arguments);}function _createDataUri(){_createDataUri=asyncToGenerator_default()(function*(blob){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.readAsDataURL(blob);reader.onloadend=()=>{const base64data=reader.result;resolve(base64data.toString());};reader.onerror=err=>{reject(err);};});});return _createDataUri.apply(this,arguments);}class base64_Base64Transpiler extends lib["c" /* Transpiler */]{constructor(){super('base64-loader');}doTranspilation(code,loaderContext){return asyncToGenerator_default()(function*(){let uri='#';if(typeof code==='string'&&Object(is_url["isUrl"])(code)){uri=code;}else{const blob=typeof code==='string'?new Blob([code],{type:getMimeType(loaderContext.path)}):code;uri=yield createDataUri(blob);}return{transpiledCode:"module.exports = \"".concat(uri,"\"")};})();}}const base64_transpiler=new base64_Base64Transpiler();/* harmony default export */ var base64 = (base64_transpiler);
// CONCATENATED MODULE: ./src/sandbox/eval/presets/create-react-app/index.ts
function create_react_app_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function create_react_app_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?create_react_app_ownKeys(Object(t),!0).forEach(function(r){defineProperty_default()(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):create_react_app_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}const BASE_REACT_BABEL_PLUGINS=['transform-flow-strip-types',['proposal-decorators',{legacy:true}],['proposal-class-properties',{loose:true}],'@babel/plugin-transform-react-jsx-source','babel-plugin-macros',['transform-runtime',{corejs:false,helpers:true,regenerator:true}],'syntax-dynamic-import'];const BASE_REACT_PRESETS_CONFIG=[['env',{// This is incompatible with the official target
// but sandpack does not even run on ie9 so no point in doing more transforms
targets:'>1%, not ie 11',// Users cannot override this behavior because this Babel
// configuration is highly tuned for ES5 support
ignoreBrowserslistConfig:true,// If users import all core-js they're probably not concerned with
// bundle size. We shouldn't rely on magic to try and shrink it.
useBuiltIns:false,// Do not transform modules to CJS
modules:false,// Enable loose transforms, these are enabled for proposal-class-properties
loose:true}],'typescript'];const CLASSIC_REACT_BABEL_CONFIG={plugins:[...BASE_REACT_BABEL_PLUGINS],presets:[...BASE_REACT_PRESETS_CONFIG,['react',{runtime:'classic'}]]};const NEW_REACT_BABEL_CONFIG={plugins:[...BASE_REACT_BABEL_PLUGINS],presets:[...BASE_REACT_PRESETS_CONFIG,['react',{runtime:'automatic'}]]};function reactPreset(_x){return _reactPreset.apply(this,arguments);}function _reactPreset(){_reactPreset=asyncToGenerator_default()(function*(pkg){const debug=debug_default()('cs:compiler:cra');let initialized=false;let refreshInitialized=false;const newReactTransform=yield supportsNewReactTransform(pkg.dependencies,pkg.devDependencies);const babelConfig=newReactTransform?NEW_REACT_BABEL_CONFIG:CLASSIC_REACT_BABEL_CONFIG;const preset=new lib["b" /* Preset */]('create-react-app',['web.mjs','mjs','web.js','js','web.ts','ts','web.tsx','tsx','json','web.jsx','jsx','web.cjs','cjs'],aliases,{hasDotEnv:true,processDependencies:function(){var _ref=asyncToGenerator_default()(function*(originalDeps){const deps=create_react_app_objectSpread({},originalDeps);if(deps['react-dom']&&isMinimalReactDomVersion(deps['react-dom'],'16.9.0')){deps['react-refresh']='0.9.0';}if(!deps['@babel/core']){deps['@babel/core']='^7.3.3';}if(!deps['@babel/runtime']){deps['@babel/runtime']='^7.3.4';}// Don't delete babel-runtime, some dependencies rely on it...
// delete deps['babel-runtime'];
delete deps['babel-core'];return deps;});return function processDependencies(_x2){return _ref.apply(this,arguments);};}(),setup:function(){var _ref2=asyncToGenerator_default()(function*(manager){const dependencies=manager.manifest.dependencies;const isRefresh=yield hasRefresh(dependencies);if(!initialized||refreshInitialized!==isRefresh){initialized=true;refreshInitialized=isRefresh;preset.resetTranspilers();preset.registerTranspiler(module=>/^https?:\/\/.*/.test(module.path),[{transpiler:babel,options:{}}]);if(isRefresh){debug('Refresh is enabled, registering additional transpiler');// Add react refresh babel plugin for non-node_modules
preset.registerTranspiler(module=>/^(?!\/node_modules\/).*\.(((m|c)?jsx?)|tsx)$/.test(module.path),[{transpiler:babel,options:{isV7:true,config:create_react_app_objectSpread(create_react_app_objectSpread({},babelConfig),{},{plugins:[...babelConfig.plugins,['react-refresh/babel',{skipEnvCheck:true}]]})}},{transpiler:refresh_transpiler}]);}else{debug('Refresh is disabled');}preset.registerTranspiler(module=>{return /\.(m|c)?(t|j)sx?$/.test(module.path)&&!module.path.endsWith('.d.ts');},[{transpiler:babel,options:{isV7:true,compileNodeModulesWithEnv:true,config:babelConfig}}]);// svgr is required for the react-svg-transpiler
preset.addTranspiler(svgr);preset.registerTranspiler(module=>/\.svg$/.test(module.path),[{transpiler:react_svg},{transpiler:babel}]);preset.registerTranspiler(module=>/\.less$/.test(module.path),[{transpiler:less},{transpiler:postcss},{transpiler:style,options:{hmrEnabled:true}}]);preset.registerTranspiler(module=>/\.module\.s[c|a]ss$/.test(module.path),[{transpiler:sass},{transpiler:postcss},{transpiler:style,options:{module:true,hmrEnabled:isRefresh}}]);preset.registerTranspiler(module=>/\.module\.css$/.test(module.path),[{transpiler:postcss},{transpiler:style,options:{module:true,hmrEnabled:isRefresh}}]);preset.registerTranspiler(module=>/\.css$/.test(module.path),[{transpiler:postcss},{transpiler:style,options:{hmrEnabled:isRefresh}}]);preset.registerTranspiler(module=>/\.s[c|a]ss$/.test(module.path),[{transpiler:sass},{transpiler:postcss},{transpiler:style,options:{hmrEnabled:isRefresh}}]);preset.registerTranspiler(module=>/\.json$/.test(module.path),[{transpiler:json}]);preset.registerTranspiler(module=>/\.html$/.test(module.path),[{transpiler:raw}]);preset.registerTranspiler(()=>true,[{transpiler:base64}]);// Try to preload jsx-runtime
manager.resolveTranspiledModuleAsync('react/jsx-runtime').then(x=>{x.transpile(manager);}).catch(()=>{/* Ignore */});}});return function setup(_x3){return _ref2.apply(this,arguments);};}(),preEvaluate:function(){var _ref3=asyncToGenerator_default()(function*(manager){if(manager.isFirstLoad&&manager.reactDevTools){if(manager.reactDevTools==='latest'){yield initializeReactDevToolsLatest();}else if(manager.reactDevTools==='legacy'){yield initializeReactDevToolsLegacy();}}if(yield hasRefresh(manager.manifest.dependencies)){yield createRefreshEntry(manager);}});return function preEvaluate(_x4){return _ref3.apply(this,arguments);};}()});return preset;});return _reactPreset.apply(this,arguments);}
// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/worker-loader/dist/cjs.js?name=typescript-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/typescript/typescript-worker.ts
var typescript_worker = __webpack_require__("../../node_modules/worker-loader/dist/cjs.js?name=typescript-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/typescript/typescript-worker.ts");
var typescript_worker_default = /*#__PURE__*/__webpack_require__.n(typescript_worker);

// CONCATENATED MODULE: ./src/sandbox/eval/utils/get-dependencies.ts
function get_dependencies_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function get_dependencies_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?get_dependencies_ownKeys(Object(t),!0).forEach(function(r){defineProperty_default()(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):get_dependencies_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}function getDependenciesFromConfig(configurations){if(configurations&&configurations.package&&configurations.package.parsed){return get_dependencies_objectSpread(get_dependencies_objectSpread({},configurations.package.parsed.devDependencies),configurations.package.parsed.dependencies);}return{};}
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/typescript/index.ts
/* eslint-disable import/default */ // @ts-ignore
/* eslint-enable import/default */class typescript_TypeScriptTranspiler extends worker_transpiler_transpiler{constructor(){super('ts-loader',typescript_worker_default.a,{maxWorkerCount:3});defineProperty_default()(this,"worker",void 0);}doTranspilation(code,loaderContext){var _this=this;return asyncToGenerator_default()(function*(){const path=loaderContext.path;let foundConfig=null;let typescriptVersion='3.4.1';if(loaderContext.options.configurations&&loaderContext.options.configurations.typescript&&loaderContext.options.configurations.typescript.parsed){foundConfig=loaderContext.options.configurations.typescript.parsed;}const dependencies=getDependenciesFromConfig(loaderContext.options.configurations);if(dependencies&&dependencies.typescript){typescriptVersion=dependencies.typescript;}const _yield$_this$queueCom=yield _this.queueCompileFn({code,path,config:foundConfig,typescriptVersion},loaderContext),transpiledCode=_yield$_this$queueCom.transpiledCode,foundDependencies=_yield$_this$queueCom.foundDependencies;yield Promise.all(foundDependencies.map(/*#__PURE__*/function(){var _ref=asyncToGenerator_default()(function*(dep){if(dep.isGlob){loaderContext.addDependenciesInDirectory(dep.path,{isAbsolute:dep.isAbsolute,isEntry:dep.isEntry});}else{yield loaderContext.addDependency(dep.path,{isAbsolute:dep.isAbsolute,isEntry:dep.isEntry});}});return function(_x){return _ref.apply(this,arguments);};}()));return{transpiledCode};})();}}const typescript_transpiler=new typescript_TypeScriptTranspiler();/* harmony default export */ var typescript = (typescript_transpiler);
// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/worker-loader/dist/cjs.js?name=stylus-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/stylus/stylus-worker.ts
var stylus_worker = __webpack_require__("../../node_modules/worker-loader/dist/cjs.js?name=stylus-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/stylus/stylus-worker.ts");
var stylus_worker_default = /*#__PURE__*/__webpack_require__.n(stylus_worker);

// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/stylus/index.ts
/* eslint-disable import/default */ /* eslint-disable import/no-named-as-default-member */ /* eslint-disable import/no-named-as-default */ // @ts-ignore
/* eslint-enable import/default */class stylus_StylusTranspiler extends worker_transpiler_transpiler{constructor(){super('stylus-loader',stylus_worker_default.a,{maxWorkerCount:1});defineProperty_default()(this,"worker",void 0);this.cacheable=false;}doTranspilation(code,loaderContext){var _this=this;return asyncToGenerator_default()(function*(){const path=loaderContext.path;const _yield$_this$queueCom=yield _this.queueCompileFn({code,path},loaderContext),transpiledCode=_yield$_this$queueCom.transpiledCode;return{transpiledCode};})();}}const stylus_transpiler=new stylus_StylusTranspiler();/* harmony default export */ var stylus = (stylus_transpiler);
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/noop/index.ts
class noop_NoopTranspiler extends lib["c" /* Transpiler */]{constructor(){super('noop-loader');}doTranspilation(code){return Promise.resolve({transpiledCode:code||''});}}const noop_transpiler=new noop_NoopTranspiler();/* harmony default export */ var noop = (noop_transpiler);
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/binary/index.ts
/**
 * Just fetches a file from the interwebs and converts it to a blob
 *
 * @class BinaryTranspiler
 * @extends {Transpiler}
 */class binary_BinaryTranspiler extends lib["c" /* Transpiler */]{constructor(){super('binary-loader');}doTranspilation(code,loaderContext){return fetch(code).then(res=>res.blob()).then(blob=>({transpiledCode:blob}));}}const binary_transpiler=new binary_BinaryTranspiler();/* harmony default export */ var binary = (binary_transpiler);
// EXTERNAL MODULE: ../sandpack-core/lib/transpiler/index.js + 1 modules
var lib_transpiler = __webpack_require__("../sandpack-core/lib/transpiler/index.js");

// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/vue/v2/index.ts
class v2_VueTranspiler extends lib_transpiler["a" /* Transpiler */]{constructor(){super('vue-loader');}doTranspilation(code,loaderContext){return asyncToGenerator_default()(function*(){const loader=yield Promise.all(/* import() | vue-loader */[__webpack_require__.e("vendors~vue-loader~vue-selector~vue-template-compiler"), __webpack_require__.e("vue-loader")]).then(__webpack_require__.bind(null, "./src/sandbox/eval/transpilers/vue/v2/loader.ts"));const transpiledCode=yield loader.default(code,loaderContext);return{transpiledCode};})();}}const v2_transpiler=new v2_VueTranspiler();/* harmony default export */ var vue_v2 = (v2_transpiler);
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/vue/v2/template-compiler/index.ts
class template_compiler_VueTemplateTranspiler extends lib["c" /* Transpiler */]{constructor(){super('vue-template-compiler');}doTranspilation(code,loaderContext){return asyncToGenerator_default()(function*(){const loader=yield Promise.all(/* import() | vue-template-compiler */[__webpack_require__.e("vendors~vue-loader~vue-selector~vue-template-compiler"), __webpack_require__.e("vendors~vue-template-compiler"), __webpack_require__.e("vue-template-compiler")]).then(__webpack_require__.bind(null, "./src/sandbox/eval/transpilers/vue/v2/template-compiler/loader.ts"));const transpiledCode=yield loader.default(code,loaderContext);return{transpiledCode};})();}}const template_compiler_transpiler=new template_compiler_VueTemplateTranspiler();/* harmony default export */ var template_compiler = (template_compiler_transpiler);
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/vue/v2/style-compiler/index.ts
class style_compiler_VueStyleCompiler extends lib["c" /* Transpiler */]{constructor(){super('vue-style-compiler');}doTranspilation(code,loaderContext){return Promise.all(/* import() | vue-style-compiler */[__webpack_require__.e("vendors~postcss-compiler~vue-style-compiler"), __webpack_require__.e("vendors~vue-style-compiler"), __webpack_require__.e("vue-style-compiler")]).then(__webpack_require__.bind(null, "./src/sandbox/eval/transpilers/vue/v2/style-compiler/loader.ts")).then(loader=>loader.default(code,loaderContext));}}const style_compiler_transpiler=new style_compiler_VueStyleCompiler();/* harmony default export */ var style_compiler = (style_compiler_transpiler);
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/vue/v2/selector/index.ts
class selector_VueSelector extends lib_transpiler["a" /* Transpiler */]{constructor(){super('vue-selector');}doTranspilation(content,loaderContext){return Promise.all(/* import() | vue-selector */[__webpack_require__.e("vendors~vue-loader~vue-selector~vue-template-compiler"), __webpack_require__.e("vue-selector")]).then(__webpack_require__.bind(null, "./src/sandbox/eval/transpilers/vue/v2/selector/loader.ts")).then(loader=>loader.default(content,loaderContext));}}const selector_transpiler=new selector_VueSelector();/* harmony default export */ var selector = (selector_transpiler);
// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/hash-sum/hash-sum.js
var hash_sum = __webpack_require__("../../node_modules/hash-sum/hash-sum.js");
var hash_sum_default = /*#__PURE__*/__webpack_require__.n(hash_sum);

// EXTERNAL MODULE: ../sandpack-core/lib/transpiler/utils/loader-utils/index.js + 4 modules
var loader_utils = __webpack_require__("../sandpack-core/lib/transpiler/utils/loader-utils/index.js");

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/raw-loader!./src/sandbox/eval/transpilers/vue/v2/style-loader/addStylesClient.js
var addStylesClient = __webpack_require__("../../node_modules/raw-loader/index.js!./src/sandbox/eval/transpilers/vue/v2/style-loader/addStylesClient.js");
var addStylesClient_default = /*#__PURE__*/__webpack_require__.n(addStylesClient);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/raw-loader!./src/sandbox/eval/transpilers/vue/v2/style-loader/listToStyles.js
var listToStyles = __webpack_require__("../../node_modules/raw-loader/index.js!./src/sandbox/eval/transpilers/vue/v2/style-loader/listToStyles.js");
var listToStyles_default = /*#__PURE__*/__webpack_require__.n(listToStyles);

// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/vue/v2/style-loader/loader.ts
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/// @ts-ignore
// @ts-ignore
const addStylesClientPath='/node_modules/vue-style-loader/addStylesClient.js';const listToStylesPath='/node_modules/vue-style-loader/listToStyles.js';/* harmony default export */ var loader = (function(_x,_x2){return loader_ref.apply(this,arguments);});function loader_ref(){loader_ref=asyncToGenerator_default()(function*(content,loaderContext){loaderContext.emitModule(addStylesClientPath,addStylesClient_default.a,'/',false,false);loaderContext.emitModule(listToStylesPath,listToStyles_default.a,'/',false,false);const request=loader_utils["a" /* default */].stringifyRequest(loaderContext,loaderContext._module.query.replace('vue-style-loader!','')+'!'+loaderContext.path);yield loaderContext.addDependency(JSON.parse(request));const id=JSON.stringify(hash_sum_default()(request));const code=['// style-loader: Adds some css to the DOM by adding a <style> tag','','// load the styles',"var content = require(".concat(request,")"),// content list format is [id, css, media, sourceMap]
"if(typeof content === 'string') content = [[module.id, content, '']];",'if(content.locals) module.exports = content.locals;','','// add the styles to the DOM',"var update = require(\"".concat(addStylesClientPath,"\")(").concat(id,", content, false);"),'// Hot Module Replacement','if(module.hot) {',' // When the styles change, update the <style> tags',' if(!content.locals) {',"   module.hot.accept(".concat(request,", function() {"),"     var newContent = require(".concat(request,");"),"     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];",'     update(newContent);','   });',' }',' // When the module is disposed, remove the <style> tags',' module.hot.dispose(function() { update(); });','}'].join('\n');return code;});return loader_ref.apply(this,arguments);}
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/vue/v2/style-loader/index.ts
class style_loader_VueStyleLoader extends lib["c" /* Transpiler */]{constructor(){super('vue-style-loader');}doTranspilation(content,loaderContext){return asyncToGenerator_default()(function*(){const transpiledCode=yield loader(content,loaderContext);return{transpiledCode};})();}}const style_loader_transpiler=new style_loader_VueStyleLoader();/* harmony default export */ var style_loader = (style_loader_transpiler);
// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/vue/v2/css-loader/index.ts
// This is the most advanced compiler, I wanted to get it working in sync first,
// but will eventually move to async.
class css_loader_CSSTranspiler extends lib_transpiler["a" /* Transpiler */]{constructor(){super('css-loader');}doTranspilation(code,loaderContext){return __webpack_require__.e(/* import() | css-loader */ "css-loader").then(__webpack_require__.bind(null, "./src/sandbox/eval/transpilers/vue/v2/css-loader/loader.ts")).then(loader=>loader.default(code,loaderContext));}}const css_loader_transpiler=new css_loader_CSSTranspiler();/* harmony default export */ var css_loader = (css_loader_transpiler);
// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/worker-loader/dist/cjs.js?name=pug-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/pug/pug-worker.ts
var pug_worker = __webpack_require__("../../node_modules/worker-loader/dist/cjs.js?name=pug-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/pug/pug-worker.ts");
var pug_worker_default = /*#__PURE__*/__webpack_require__.n(pug_worker);

// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/pug/index.ts
/* eslint-disable import/default */ // @ts-ignore
/* eslint-enable import/default */class pug_PugTranspiler extends worker_transpiler_transpiler{constructor(){super('pug-loader',pug_worker_default.a,{maxWorkerCount:1});defineProperty_default()(this,"worker",void 0);this.cacheable=false;}doTranspilation(code,loaderContext){const path=loaderContext.path;return this.queueCompileFn({code,path},loaderContext);}}const pug_transpiler=new pug_PugTranspiler();/* harmony default export */ var pug = (pug_transpiler);
// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/worker-loader/dist/cjs.js?name=coffee-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/coffee/coffee-worker.ts
var coffee_worker = __webpack_require__("../../node_modules/worker-loader/dist/cjs.js?name=coffee-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/coffee/coffee-worker.ts");
var coffee_worker_default = /*#__PURE__*/__webpack_require__.n(coffee_worker);

// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/coffee/index.ts
/* eslint-disable import/default */ // @ts-ignore
/* eslint-enable import/default */class coffee_CoffeeTranspiler extends worker_transpiler_transpiler{constructor(){super('coffee-loader',coffee_worker_default.a,{maxWorkerCount:1});defineProperty_default()(this,"worker",void 0);this.cacheable=false;}doTranspilation(code,loaderContext){var _this=this;return asyncToGenerator_default()(function*(){const _yield$_this$queueCom=yield _this.queueCompileFn({code,path:loaderContext.path},loaderContext),transpiledCode=_yield$_this$queueCom.code;return{transpiledCode};})();}}const coffee_transpiler=new coffee_CoffeeTranspiler();/* harmony default export */ var coffee = (coffee_transpiler);
// CONCATENATED MODULE: ./src/sandbox/eval/presets/vue-cli/v2.ts
function initialize(vuePreset){vuePreset.setAdditionalAliases({vue$:'vue/dist/vue.common.js'});const sassWithConfig={transpiler:sass,config:{}};const lessWithConfig={transpiler:less,config:{}};const stylusWithConfig={transpiler:stylus,config:{}};/**
   * Registers transpilers for all different combinations
   *
   * @returns
   */function registerStyleTranspilers(){const styles={css:[],scss:[sassWithConfig],sass:[sassWithConfig],less:[lessWithConfig],styl:[stylusWithConfig]};return Object.keys(styles).forEach(type=>{vuePreset.registerTranspiler(module=>new RegExp("\\.".concat(type,"$")).test(module.path),[...styles[type],{transpiler:style}]);});}vuePreset.registerTranspiler(module=>/\.(m|c)?jsx?$/.test(module.path),[{transpiler:babel}]);vuePreset.registerTranspiler(module=>/\.m?tsx?$/.test(module.path),[{transpiler:typescript},{transpiler:babel}]);vuePreset.registerTranspiler(module=>/\.json$/.test(module.path),[{transpiler:json}]);vuePreset.registerTranspiler(module=>/\.vue$/.test(module.path),[{transpiler:vue_v2}]);vuePreset.registerTranspiler(module=>/\.coffee$/.test(module.path),[{transpiler:coffee},{transpiler:babel}]);registerStyleTranspilers();vuePreset.registerTranspiler(()=>false,[{transpiler:template_compiler}]);vuePreset.registerTranspiler(()=>false,[{transpiler:style_compiler}]);vuePreset.registerTranspiler(()=>false,[{transpiler:selector}]);vuePreset.registerTranspiler(()=>false,[{transpiler:style_loader}]);vuePreset.registerTranspiler(()=>false,[{transpiler:css_loader}]);vuePreset.registerTranspiler(module=>/\.png$/.test(module.path),[{transpiler:binary},{transpiler:base64}]);vuePreset.registerTranspiler(module=>/\.svg$/.test(module.path),[{transpiler:base64}]);vuePreset.registerTranspiler(module=>/!noop/.test(module.path),[{transpiler:noop}]);vuePreset.registerTranspiler(()=>true,[{transpiler:raw}]);vuePreset.registerTranspiler(module=>/\.pug$/.test(module.path),[{transpiler:pug}]);return vuePreset;}
// CONCATENATED MODULE: ./src/sandbox/eval/presets/vue-cli/v3.ts
function v3_initialize(_x){return _initialize.apply(this,arguments);}function _initialize(){_initialize=asyncToGenerator_default()(function*(vuePreset){const _yield$import=yield Promise.all(/* import() */[__webpack_require__.e(8), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, "../vue3-transpiler/lib/transpilers/index.js")),stylePostLoader=_yield$import.stylePostLoader,vueLoader=_yield$import.vueLoader,templateLoader=_yield$import.templateLoader;const sassWithConfig={transpiler:sass,options:{indentedSyntax:true}};const scssWithConfig={transpiler:sass,options:{}};const lessWithConfig={transpiler:less,options:{}};const stylusWithConfig={transpiler:stylus,options:{}};/**
   * Registers transpilers for all different combinations
   *
   * @returns
   */function registerStyleTranspilers(){const styles={css:[],scss:[scssWithConfig],sass:[sassWithConfig],less:[lessWithConfig],styl:[stylusWithConfig]};return Object.keys(styles).forEach(type=>{vuePreset.registerTranspiler(module=>new RegExp("\\.".concat(type,"$")).test(module.path),[...styles[type],{transpiler:style,options:{hmrEnabled:true}}]);});}vuePreset.registerTranspiler(module=>/\.(m|c)?jsx?$/.test(module.path),[{transpiler:babel}]);vuePreset.registerTranspiler(module=>/\.m?tsx?$/.test(module.path),[{transpiler:typescript},{transpiler:babel}]);vuePreset.registerTranspiler(module=>/\.json$/.test(module.path),[{transpiler:json}]);vuePreset.registerTranspiler(module=>/\.vue$/.test(module.path),[{transpiler:vueLoader},{transpiler:babel}]);vuePreset.registerTranspiler(module=>/\.coffee$/.test(module.path),[{transpiler:coffee},{transpiler:babel}]);registerStyleTranspilers();vuePreset.registerTranspiler(()=>false,[{transpiler:templateLoader}]);vuePreset.registerTranspiler(()=>false,[{transpiler:stylePostLoader}]);vuePreset.registerTranspiler(module=>/\.png$/.test(module.path),[{transpiler:binary},{transpiler:base64}]);vuePreset.registerTranspiler(module=>/!noop/.test(module.path),[{transpiler:noop}]);vuePreset.registerTranspiler(()=>true,[{transpiler:raw}]);vuePreset.registerTranspiler(module=>/\.pug$/.test(module.path),[{transpiler:pug}]);return vuePreset;});return _initialize.apply(this,arguments);}
// CONCATENATED MODULE: ./src/sandbox/eval/presets/vue-cli/index.ts
function vue_cli_isMinimalSemverVersion(version,minimalVersion){try{return semver_semver_default.a.gte(version,minimalVersion);}catch(e){// Semver couldn't be parsed, we assume that we're on the bleeding edge now, so true.
return true;}}const getFileNameFromVm=vm=>{if(vm){let options=vm||{};if(typeof vm==='function'&&vm.cid!=null){options=vm.options;}else if(vm._isVue){options=vm.$options||vm.constructor.options;}return options.__file;}return undefined;};function vue_cli_initialize(){const vuePreset=new lib["b" /* Preset */]('vue-cli',['vue','json','js','ts'],{'@':'{{sandboxRoot}}/src'},{setup:function(){var _ref=asyncToGenerator_default()(function*(manager){const dependencies=manager.manifest.dependencies;const vue=dependencies.find(dep=>dep.name==='vue');const isV3=vue&&vue_cli_isMinimalSemverVersion(vue.version,'3.0.0');try{const tModule=yield manager.resolveTranspiledModule('@vue/babel-plugin-jsx','/package.json',[]);yield tModule.transpile(manager);}catch(e){console.error(e);// Ignore
}if(isV3){yield v3_initialize(vuePreset);}else{initialize(vuePreset);}try{const vueModule=yield manager.resolveTranspiledModule('vue','/');yield vueModule.transpileTree(manager);const Vue=vueModule.evaluate(manager);if(Vue){Vue.config.warnHandler=(msg,vm,trace)=>{console.error('[Vue warn]: '+msg+trace);const file=getFileNameFromVm(vm);Object(codesandbox_es5["dispatch"])(codesandbox_es5["actions"].correction.show(msg,{line:1,column:1,path:file,severity:'warning',source:'Vue'}));};}}catch(e){/* ignore */}});return function setup(_x){return _ref.apply(this,arguments);};}()});return vuePreset;}
// CONCATENATED MODULE: ./src/sandbox/eval/presets/preact-cli/transpilers/async.ts
/**
 * This transpiler actually does nothing but return the code that was given,
 * this happens since our code is already in the browser, we don't need to
 * dynamically load it
 *
 * @class AsyncTranspiler
 * @extends {NoopTranspiler}
 */class async_AsyncTranspiler extends noop_NoopTranspiler{constructor(){super();this.name='async';}}const async_transpiler=new async_AsyncTranspiler();/* harmony default export */ var transpilers_async = (async_transpiler);
// CONCATENATED MODULE: ./src/sandbox/eval/presets/preact-cli/v8.ts
function PreactPresetV8(){const preactPreset=new lib["b" /* Preset */]('preact-cli',['js','jsx','ts','tsx','json','less','scss','sass','styl','css'],{preact$:'preact',// preact-compat aliases for supporting React dependencies:
react:'preact-compat','react-dom':'preact-compat','create-react-class':'preact-compat/lib/create-react-class','react-addons-css-transition-group':'preact-css-transition-group'});preactPreset.registerTranspiler(module=>/\.m?jsx?$/.test(module.path),[{transpiler:babel,options:{isV7:false,compileNodeModulesWithEnv:true// config is derived from babelrc at packages/common/src/templates/configuration/babelrc/index.ts
}}]);// For these routes we need to enable css modules
const cssModulesPaths=['/src/components','/components','/src/routes','/routes'];const cssModulesRegex=extension=>new RegExp("^(".concat(cssModulesPaths.join('|'),")\\/.*\\.").concat(extension,"$"));const cssTypes={css:[],'s[a|c]ss':[{transpiler:sass}],less:[{transpiler:less}],styl:[{transpiler:stylus}]};Object.keys(cssTypes).forEach(cssType=>{preactPreset.registerTranspiler(module=>cssModulesRegex(cssType).test(module.path),[...cssTypes[cssType],{transpiler:style,options:{module:true}}]);preactPreset.registerTranspiler(module=>new RegExp("\\.".concat(cssType,"$")).test(module.path),[...cssTypes[cssType],{transpiler:style}]);});preactPreset.registerTranspiler(module=>/\.json/.test(module.path),[{transpiler:json}]);// Support for !async statements
preactPreset.registerTranspiler(()=>false/* never load without explicit statement */,[{transpiler:transpilers_async}]);preactPreset.registerTranspiler(()=>true,[{transpiler:raw}]);return preactPreset;}
// CONCATENATED MODULE: ./src/sandbox/eval/presets/preact-cli/preset.ts
function PreactPreset(){const preactPreset=new lib["b" /* Preset */]('preact-cli',['js','jsx','ts','tsx','json','less','scss','sass','styl','css'],{preact$:'preact',// preact-compat aliases for supporting React dependencies:
react:'preact/compat','react-dom':'preact/compat','create-react-class':'preact/compat/lib/create-react-class','react-addons-css-transition-group':'preact-css-transition-group'});preactPreset.registerTranspiler(module=>/\.(m|c)?(t|j)sx?$/.test(module.path),[{transpiler:babel,options:{isV7:true,compileNodeModulesWithEnv:true// config is derived from babelrc at packages/common/src/templates/configuration/babelrc/index.ts
}}]);// For these routes we need to enable css modules
const cssModulesPaths=['/src/components','/components','/src/routes','/routes'];const cssModulesRegex=extension=>new RegExp("^(".concat(cssModulesPaths.join('|'),")\\/.*\\.").concat(extension,"$"));const cssTypes={css:[],'s[a|c]ss':[{transpiler:sass}],less:[{transpiler:less}],styl:[{transpiler:stylus}]};Object.keys(cssTypes).forEach(cssType=>{preactPreset.registerTranspiler(module=>cssModulesRegex(cssType).test(module.path),[...cssTypes[cssType],{transpiler:style,options:{module:true}}]);preactPreset.registerTranspiler(module=>new RegExp("\\.".concat(cssType,"$")).test(module.path),[...cssTypes[cssType],{transpiler:style}]);});preactPreset.registerTranspiler(module=>/\.json/.test(module.path),[{transpiler:json}]);// Support for !async statements
preactPreset.registerTranspiler(()=>false/* never load without explicit statement */,[{transpiler:transpilers_async}]);preactPreset.registerTranspiler(()=>true,[{transpiler:raw}]);return preactPreset;}
// CONCATENATED MODULE: ./src/sandbox/eval/presets/preact-cli/index.ts

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/worker-loader/dist/cjs.js?name=svelte-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/svelte/svelte-worker.ts
var svelte_worker = __webpack_require__("../../node_modules/worker-loader/dist/cjs.js?name=svelte-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/svelte/svelte-worker.ts");
var svelte_worker_default = /*#__PURE__*/__webpack_require__.n(svelte_worker);

// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/svelte/index.ts
/* eslint-disable import/default */ // @ts-ignore
/* eslint-enable import/default */class svelte_SvelteTranspiler extends worker_transpiler_transpiler{constructor(){super('svelte-loader',svelte_worker_default.a,{maxWorkerCount:2});defineProperty_default()(this,"worker",void 0);}doTranspilation(code,loaderContext){var _this=this;return asyncToGenerator_default()(function*(){const packageJSON=loaderContext.options.configurations.package;const svelte=packageJSON&&packageJSON.parsed&&packageJSON.parsed.devDependencies&&packageJSON.parsed.devDependencies.svelte&&semver_semver_default.a.coerce(packageJSON.parsed.devDependencies.svelte)||semver_semver_default.a.coerce(packageJSON.parsed.dependencies.svelte);const path=loaderContext.path;Object(codesandbox_es5["dispatch"])(codesandbox_es5["actions"].correction.clear(path,'svelte'));const _yield$_this$queueCom=yield _this.queueCompileFn({code,path,version:(svelte||{}).version},loaderContext),transpiledCode=_yield$_this$queueCom.transpiledCode,warnings=_yield$_this$queueCom.warnings;if(warnings===null||warnings===void 0?void 0:warnings.length){warnings.forEach(loaderContext.emitWarning);}return{transpiledCode};})();}}const svelte_transpiler=new svelte_SvelteTranspiler();/* harmony default export */ var transpilers_svelte = (svelte_transpiler);
// CONCATENATED MODULE: ./src/sandbox/eval/presets/svelte/index.ts
const babelOptions={isV7:true,config:{presets:[],plugins:[],parserOpts:{plugins:['dynamicImport','objectRestSpread']}}};function svelte_initialize(){const sveltePreset=new lib["b" /* Preset */]('svelte',['js','cjs','mjs','jsx','svelte'],{});sveltePreset.registerTranspiler(module=>/\.(m|c)?jsx?$/.test(module.path),[{transpiler:babel,options:babelOptions}]);sveltePreset.registerTranspiler(module=>/\.css$/.test(module.path),[{transpiler:postcss},{transpiler:style,options:{hmrEnabled:false}}]);sveltePreset.registerTranspiler(module=>/\.s[c|a]ss$/.test(module.path),[{transpiler:sass},{transpiler:postcss},{transpiler:style,options:{hmrEnabled:false}}]);sveltePreset.registerTranspiler(module=>/\.svelte$/.test(module.path),[{transpiler:transpilers_svelte},{transpiler:babel,options:babelOptions}]);sveltePreset.registerTranspiler(module=>/\.html$/.test(module.path),[{transpiler:transpilers_svelte},{transpiler:babel,options:babelOptions}]);sveltePreset.registerTranspiler(module=>/\.json/.test(module.path),[{transpiler:json}]);sveltePreset.registerTranspiler(()=>true,[{transpiler:raw}]);return sveltePreset;}
// CONCATENATED MODULE: ../sandpack-core/lib/transpiler/transpilers/csb-dynamic-import/dynamic-import/index.js
const importRegex = /(^|\s)(import)\s*\(/g;
function convertDynamicImport(code) {
    return code.replace(importRegex, ' $csbImport(');
}

// CONCATENATED MODULE: ../sandpack-core/lib/transpiler/transpilers/csb-dynamic-import/index.js


/**
 * This transpiler is run after all modules, to enable specific CodeSandbox features
 *
 * @class CodeSandbox
 * @extends {Transpiler}
 */
class csb_dynamic_import_CodeSandboxDynamicImports extends lib_transpiler["a" /* Transpiler */] {
    constructor() {
        super('codesandbox-dynamic-imports-loader');
    }
    doTranspilation(code, loaderContext) {
        const newCode = convertDynamicImport(code);
        return { transpiledCode: newCode };
    }
}
const csb_dynamic_import_transpiler = new csb_dynamic_import_CodeSandboxDynamicImports();

/* harmony default export */ var csb_dynamic_import = (csb_dynamic_import_transpiler);

// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/angular2-template/index.ts
/* eslint-disable */// using: regex, capture groups, and capture group variables.
const templateUrlRegex=/templateUrl\s*:(\s*['"`](.*?)['"`]\s*([,}]))/gm;const stylesRegex=/styleUrls *:(\s*\[[^\]]*?\])/g;const stringRegex=/(['`"])((?:[^\\]\\\1|.)*?)\1/g;function replaceStringsWithRequires(string,extensionConfig,addDependency){let depPromises=[];let result=string.replace(stringRegex,(match,quote,url)=>{if(url.charAt(0)!=='.'){// eslint-disable-next-line
url='./'+url;}const urlParts=url.split('.');const extension=urlParts[urlParts.length-1];const transpilers=extensionConfig[extension]||[];const finalUrl="!raw-loader!".concat(transpilers.map(t=>t.transpiler.name).join('!'),"!").concat(url);depPromises.push(addDependency(finalUrl,{isAbsolute:false}));return"require('"+finalUrl+"')";});return{result,depPromises};}/**
 * Converts Angular statements to css/html to require statements. Taken from
 * https://github.com/TheLarkInn/angular2-template-loader/blob/master/index.js
 *
 * @class Angular2Transpiler
 * @extends {Transpiler}
 */class angular2_template_Angular2Transpiler extends lib["c" /* Transpiler */]{constructor(){super('binary-loader');}doTranspilation(code,loaderContext){return asyncToGenerator_default()(function*(){const styleProperty='styles';const templateProperty='template';let promises=[];const newSource=code.replace(templateUrlRegex,(match,url)=>{// replace: templateUrl: './path/to/template.html'
// with: template: require('./path/to/template.html')
// or: templateUrl: require('./path/to/template.html')
// if `keepUrl` query parameter is set to true.
let _replaceStringsWithRe=replaceStringsWithRequires(url,loaderContext.options.preTranspilers,loaderContext.addDependency),result=_replaceStringsWithRe.result,depPromises=_replaceStringsWithRe.depPromises;promises.push(...depPromises);return templateProperty+':'+result;}).replace(stylesRegex,(match,urls)=>{// replace: stylesUrl: ['./foo.css', "./baz.css", "./index.component.css"]
// with: styles: [require('./foo.css'), require("./baz.css"), require("./index.component.css")]
// or: styleUrls: [require('./foo.css'), require("./baz.css"), require("./index.component.css")]
// if `keepUrl` query parameter is set to true.
let _replaceStringsWithRe2=replaceStringsWithRequires(urls,loaderContext.options.preTranspilers,loaderContext.addDependency),result=_replaceStringsWithRe2.result,depPromises=_replaceStringsWithRe2.depPromises;promises.push(...depPromises);return styleProperty+':'+result;});yield Promise.all(promises);return{transpiledCode:newSource};})();}}const angular2_template_transpiler=new angular2_template_Angular2Transpiler();/* harmony default export */ var angular2_template = (angular2_template_transpiler);
// CONCATENATED MODULE: ./src/sandbox/eval/presets/angular-cli/index.ts
let polyfillsLoaded=false;function addAngularJSONPolyfills(_x){return _addAngularJSONPolyfills.apply(this,arguments);}function _addAngularJSONPolyfills(){_addAngularJSONPolyfills=asyncToGenerator_default()(function*(manager){const parsed=manager.configurations['angular-config'].parsed;const defaultProject=parsed.defaultProject;if(!defaultProject||!parsed.projects){return;}const project=parsed.projects[defaultProject];if(project&&project.architect){const build=project.architect.build;if(build.options){if(project.root&&build.options.polyfill){const polyfillLocation=Object(utils_path["absolute"])(Object(utils_path["join"])(project.root,build.options.polyfill));const polyfills=yield manager.resolveModuleAsync({path:polyfillLocation});yield manager.transpileModules(polyfills);manager.evaluateModule(polyfills);}}}});return _addAngularJSONPolyfills.apply(this,arguments);}function addAngularCLIPolyfills(_x2){return _addAngularCLIPolyfills.apply(this,arguments);}function _addAngularCLIPolyfills(){_addAngularCLIPolyfills=asyncToGenerator_default()(function*(manager){const parsed=manager.configurations['angular-cli'].parsed;if(parsed.apps&&parsed.apps[0]){const app=parsed.apps[0];if(app.root&&app.polyfills){const polyfillLocation=Object(utils_path["absolute"])(Object(utils_path["join"])(app.root,app.polyfills));const polyfills=yield manager.resolveModuleAsync({path:polyfillLocation});yield manager.transpileModules(polyfills);manager.evaluateModule(polyfills);}}});return _addAngularCLIPolyfills.apply(this,arguments);}function addAngularJSONResources(_x3){return _addAngularJSONResources.apply(this,arguments);}function _addAngularJSONResources(){_addAngularJSONResources=asyncToGenerator_default()(function*(manager){const parsed=manager.configurations['angular-config'].parsed;const defaultProject=parsed.defaultProject;if(!defaultProject||!parsed.projects){return;}const project=parsed.projects[defaultProject];if(project&&project.architect){const build=project.architect.build;if(build.options){const _build$options=build.options,_build$options$styles=_build$options.styles,styles=_build$options$styles===void 0?[]:_build$options$styles,_build$options$script=_build$options.scripts,scripts=_build$options$script===void 0?[]:_build$options$script;/* eslint-disable no-await-in-loop */for(let i=0;i<styles.length;i++){const p=styles[i];const finalPath=Object(utils_path["absolute"])(Object(utils_path["join"])(project.root,p.input||p));const tModule=yield manager.resolveTranspiledModuleAsync(finalPath,null);yield tModule.transpile(manager);tModule.setIsEntry(true);tModule.evaluate(manager);}const scriptTModules=yield Promise.all(scripts.map(/*#__PURE__*/function(){var _ref2=asyncToGenerator_default()(function*(p){const finalPath=Object(utils_path["absolute"])(Object(utils_path["join"])(project.root,p));const tModule=yield manager.resolveTranspiledModuleAsync(finalPath,null);tModule.setIsEntry(true);return tModule.transpile(manager);});return function(_x6){return _ref2.apply(this,arguments);};}()));scriptTModules.forEach(t=>{t.evaluate(manager,{asUMD:true});});}}});return _addAngularJSONResources.apply(this,arguments);}const getPathFromResource=(root,p)=>{const nodeModuleRegex=/(^\.\/)?node_modules\//;if(/(^\.\/)?node_modules/.test(p)){// If starts with node_modules or ./node_modules
return p.replace(nodeModuleRegex,'');}return Object(utils_path["absolute"])(Object(utils_path["join"])(root||'src',p));};function addAngularCLIResources(_x4){return _addAngularCLIResources.apply(this,arguments);}function _addAngularCLIResources(){_addAngularCLIResources=asyncToGenerator_default()(function*(manager){const parsed=manager.configurations['angular-cli'].parsed;if(parsed.apps&&parsed.apps[0]){const app=parsed.apps[0];const _app$styles=app.styles,styles=_app$styles===void 0?[]:_app$styles,_app$scripts=app.scripts,scripts=_app$scripts===void 0?[]:_app$scripts;/* eslint-disable no-await-in-loop */for(let i=0;i<styles.length;i++){const p=styles[i];const finalPath=getPathFromResource(app.root,p.input||p);const tModule=yield manager.resolveTranspiledModuleAsync(finalPath,null);yield tModule.transpile(manager);tModule.setIsEntry(true);tModule.evaluate(manager);}/* eslint-enable no-await-in-loop */const scriptTModules=yield Promise.all(scripts.map(/*#__PURE__*/function(){var _ref3=asyncToGenerator_default()(function*(p){const finalPath=getPathFromResource(app.root,p);const tModule=yield manager.resolveTranspiledModuleAsync(finalPath,null);tModule.setIsEntry(true);return tModule.transpile(manager);});return function(_x7){return _ref3.apply(this,arguments);};}()));scriptTModules.forEach(t=>{t.evaluate(manager,{asUMD:true});});if(app.environmentSource&&app.environments&&app.environments.dev){manager.preset.setAdditionalAliases({[app.environmentSource]:app.environments.dev});}}});return _addAngularCLIResources.apply(this,arguments);}function angular_cli_initialize(){const preset=new lib["b" /* Preset */]('angular-cli',['web.ts','ts','json','web.tsx','tsx','js','cjs'],{},{setup:function(){var _ref=asyncToGenerator_default()(function*(manager){if(!polyfillsLoaded){const zone=yield manager.resolveModuleAsync({path:'zone.js'});yield manager.transpileModules(zone);manager.evaluateModule(zone);if(!manager.configurations['angular-config'].generated){yield addAngularJSONPolyfills(manager);}else{yield addAngularCLIPolyfills(manager);}polyfillsLoaded=true;}if(!manager.configurations['angular-config'].generated){yield addAngularJSONResources(manager);}else{yield addAngularCLIResources(manager);}});return function setup(_x5){return _ref.apply(this,arguments);};}(),processDependencies:deps=>{if(!deps['@babel/core']){deps['@babel/core']='^7.3.3';}if(!deps['@babel/runtime']){deps['@babel/runtime']='^7.3.4';}// Don't delete babel-runtime, some dependencies rely on it...
// delete deps['babel-runtime'];
delete deps['babel-core'];return Promise.resolve(deps);}});const postcssWithConfig={transpiler:postcss,options:{}};const sassWithConfig={transpiler:sass,options:{}};const lessWithConfig={transpiler:less,options:{}};const stylusWithConfig={transpiler:stylus,options:{}};const styles={css:[postcssWithConfig],scss:[sassWithConfig,postcssWithConfig],sass:[sassWithConfig,postcssWithConfig],less:[lessWithConfig],styl:[stylusWithConfig]};/**
   * Registers transpilers for all different combinations
   *
   * @returns
   */function registerStyleTranspilers(){return Object.keys(styles).forEach(type=>{preset.registerTranspiler(module=>new RegExp("\\.".concat(type,"$")).test(module.path),[...styles[type],{transpiler:style,options:{}}]);});}registerStyleTranspilers();preset.registerTranspiler(module=>/\.tsx?$/.test(module.path),[{transpiler:angular2_template,options:{preTranspilers:styles}},{transpiler:typescript},{transpiler:csb_dynamic_import}]);preset.registerTranspiler(module=>/\.(m|c)?js$/.test(module.path),[{transpiler:babel,options:{isV7:true,config:{presets:[['env',{// These targets rougly match csb itself
targets:'>1%, not ie 11',// Users cannot override this behavior because this Babel
// configuration is highly tuned for ES5 support
ignoreBrowserslistConfig:true,// If users import all core-js they're probably not concerned with
// bundle size. We shouldn't rely on magic to try and shrink it.
useBuiltIns:false,// Do not transform modules to CJS
modules:false}]],plugins:[['proposal-decorators',{legacy:true}]]}}}]);preset.registerTranspiler(module=>/\.json$/.test(module.path),[{transpiler:json}]);preset.registerTranspiler(()=>true,[{transpiler:raw}]);return preset;}
// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/worker-loader/dist/cjs.js?name=parcel-html-transpiler.[hash:8].worker.js!./src/sandbox/eval/presets/parcel/transpilers/html-worker.ts
var html_worker = __webpack_require__("../../node_modules/worker-loader/dist/cjs.js?name=parcel-html-transpiler.[hash:8].worker.js!./src/sandbox/eval/presets/parcel/transpilers/html-worker.ts");
var html_worker_default = /*#__PURE__*/__webpack_require__.n(html_worker);

// CONCATENATED MODULE: ./src/sandbox/eval/presets/parcel/transpilers/html-transpiler.ts
// @ts-ignore
class html_transpiler_HTMLTranspiler extends worker_transpiler_transpiler{constructor(){super('html-loader',html_worker_default.a,{maxWorkerCount:1});this.HMREnabled=false;}doTranspilation(code,loaderContext){var _this=this;return asyncToGenerator_default()(function*(){const _yield$_this$queueCom=yield _this.queueCompileFn({code},loaderContext),transpiledCode=_yield$_this$queueCom.transpiledCode,foundDependencies=_yield$_this$queueCom.foundDependencies;yield Promise.all(foundDependencies.map(dep=>loaderContext.addDependency(dep.path,{isAbsolute:dep.isAbsolute,isEntry:dep.isEntry})));return{transpiledCode};})();}}const html_transpiler_transpiler=new html_transpiler_HTMLTranspiler();/* harmony default export */ var html_transpiler = (html_transpiler_transpiler);
// CONCATENATED MODULE: ./src/sandbox/eval/presets/parcel/index.ts
function parcel_initialize(){const parcelPreset=new lib["b" /* Preset */]('parcel',['js','mjs','cjs','jsx','ts','tsx','json','less','scss','sass','styl','css','vue'],{},{htmlDisabled:true,setup:manager=>{const packageJSON=manager.configurations.package;if(packageJSON&&packageJSON.parsed&&packageJSON.parsed.alias){manager.preset.setAdditionalAliases(packageJSON.parsed.alias);}}});parcelPreset.registerTranspiler(module=>/\.coffee$/.test(module.path),[{transpiler:coffee},{transpiler:babel}]);parcelPreset.registerTranspiler(module=>/\.(m|c)?jsx?$/.test(module.path),[{transpiler:babel,options:{dynamicCSSModules:true}}]);parcelPreset.registerTranspiler(module=>/\.tsx?$/.test(module.path),[{transpiler:typescript},{transpiler:babel,options:{dynamicCSSModules:true}}]);parcelPreset.registerTranspiler(module=>/\.pug$/.test(module.path),[{transpiler:pug},{transpiler:html_transpiler}]);parcelPreset.registerTranspiler(module=>/\.html$/.test(module.path),[{transpiler:html_transpiler}]);parcelPreset.registerTranspiler(module=>/\.css$/.test(module.path),[{transpiler:postcss},{transpiler:style}]);parcelPreset.registerTranspiler(module=>/\.s[c|a]ss$/.test(module.path),[{transpiler:sass},{transpiler:postcss},{transpiler:style}]);parcelPreset.registerTranspiler(module=>/\.json$/.test(module.path),[{transpiler:json}]);// VUE START
parcelPreset.registerTranspiler(module=>/\.vue$/.test(module.path),[{transpiler:vue_v2}]);parcelPreset.registerTranspiler(()=>false,[{transpiler:template_compiler}]);parcelPreset.registerTranspiler(()=>false,[{transpiler:style_compiler}]);parcelPreset.registerTranspiler(()=>false,[{transpiler:selector}]);parcelPreset.registerTranspiler(()=>false,[{transpiler:style_loader}]);parcelPreset.registerTranspiler(()=>false,[{transpiler:css_loader}]);// VUE END
const sassWithConfig={transpiler:sass,options:{}};const lessWithConfig={transpiler:less,options:{}};const stylusWithConfig={transpiler:stylus,options:{}};const styles={css:[],scss:[sassWithConfig],sass:[sassWithConfig],less:[lessWithConfig],styl:[stylusWithConfig]};/**
   * Registers transpilers for all different combinations
   *
   * @returns
   */function registerStyleTranspilers(){return Object.keys(styles).forEach(type=>{parcelPreset.registerTranspiler(module=>new RegExp("\\.".concat(type,"$")).test(module.path),[...styles[type],{transpiler:style}]);});}registerStyleTranspilers();parcelPreset.registerTranspiler(()=>true,[{transpiler:raw}]);parcelPreset.registerTranspiler(()=>false,[{transpiler:noop}]);return parcelPreset;}
// CONCATENATED MODULE: ./src/sandbox/eval/presets/babel-repl/index.ts
function babel_repl_initialize(){const babelPreset=new lib["b" /* Preset */]('babel-repl',['js','jsx','ts','tsx','json'],{},{});babelPreset.registerTranspiler(module=>/\.jsx?$/.test(module.path),[{transpiler:babel,options:{disableCodeSandboxPlugins:true}}]);babelPreset.registerTranspiler(module=>/\.json$/.test(module.path),[{transpiler:json}]);babelPreset.registerTranspiler(()=>true,[{transpiler:raw}]);return babelPreset;}
// CONCATENATED MODULE: ./src/sandbox/eval/presets/cxjs/index.ts
function cxjs_initialize(){const cxjsPreset=new lib["b" /* Preset */]('cxjs',['js','jsx','ts','tsx','json','less','scss','sass','styl','css'],{},{});cxjsPreset.registerTranspiler(module=>/\.(c|m)?jsx?$/.test(module.path),[{transpiler:babel,options:{dynamicCSSModules:true,compileNodeModulesWithEnv:true,config:{presets:['es2015','react','stage-0'],plugins:['transform-async-to-generator','transform-object-rest-spread','transform-decorators-legacy','transform-class-properties',// Polyfills the runtime needed for async/await and generators
['transform-runtime',{helpers:false,polyfill:false,regenerator:true}],['transform-regenerator',{// Async functions are converted to generators by babel-preset-env
async:false}]]}}}]);cxjsPreset.registerTranspiler(module=>/\.tsx?$/.test(module.path),[{transpiler:typescript},{transpiler:csb_dynamic_import}]);cxjsPreset.registerTranspiler(module=>/\.css$/.test(module.path),[{transpiler:style}]);cxjsPreset.registerTranspiler(module=>/\.json$/.test(module.path),[{transpiler:json}]);const sassWithConfig={transpiler:sass,options:{}};const lessWithConfig={transpiler:less,options:{}};const stylusWithConfig={transpiler:stylus,options:{}};const styles={css:[],scss:[sassWithConfig],sass:[sassWithConfig],less:[lessWithConfig],styl:[stylusWithConfig]};/**
   * Registers transpilers for all different combinations
   *
   * @returns
   */function registerStyleTranspilers(){return Object.keys(styles).forEach(type=>{cxjsPreset.registerTranspiler(module=>new RegExp("\\.".concat(type,"$")).test(module.path),[...styles[type],{transpiler:style}]);});}registerStyleTranspilers();cxjsPreset.registerTranspiler(()=>true,[{transpiler:raw}]);return cxjsPreset;}
// EXTERNAL MODULE: ./node_modules/strip-ansi/index.js
var strip_ansi = __webpack_require__("./node_modules/strip-ansi/index.js");
var strip_ansi_default = /*#__PURE__*/__webpack_require__.n(strip_ansi);

// CONCATENATED MODULE: ./src/sandbox/eval/transpilers/reason/index.ts
function reason_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function reason_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?reason_ownKeys(Object(t),!0).forEach(function(r){defineProperty_default()(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):reason_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}function addScript(src){return new Promise(resolve=>{const s=document.createElement('script');s.setAttribute('src',src);document.body.appendChild(s);s.onload=()=>{resolve(undefined);};});}const IGNORED_DEPENDENCIES=['ReactDOMRe','ReasonReact'];function getModuleName(path){const moduleParts=Object(path_browserify["basename"])(path).split('.');moduleParts.pop();const unCapitalizedModuleName=moduleParts.join('.');return unCapitalizedModuleName[0].toUpperCase()+unCapitalizedModuleName.slice(1);}const cachedDependencies=new Map();const global=window;function getDependencyList(modules,list,module){const cache=cachedDependencies.get(module.path);const listFunction=module.path.endsWith('.re')?global.ocaml.reason_list_dependencies:global.ocaml.list_dependencies;const deps=cache||listFunction(module.code).filter(x=>IGNORED_DEPENDENCIES.indexOf(x)===-1).filter(x=>!list.has(x));if(!cache){// Didn't get it from the cache
deps.shift();// Remove the first 0 value
}if(module.path.startsWith('/node_modules')){cachedDependencies.set(module.path,deps);}deps.forEach(dep=>{const foundModule=modules.find(x=>x.moduleName===dep&&!x.path.endsWith('.rei'));if(foundModule){getDependencyList(modules,list,foundModule);}});list.add(module);}class reason_ReasonTranspiler extends lib["c" /* Transpiler */]{constructor(){super('reason-loader');}doTranspilation(code,loaderContext){return asyncToGenerator_default()(function*(){if(!global.ocaml){yield addScript('https://cdn.jsdelivr.net/gh/jaredly/reason-react@more-docs/docs/bucklescript.js');yield addScript('https://reason.surge.sh/bucklescript-deps.js');yield addScript('https://unpkg.com/reason@3.3.4/refmt.js');}const reasonModules=loaderContext.getModules().filter(x=>x.path.endsWith('.re')||x.path.endsWith('.rei')||x.path.endsWith('.ml')).map(x=>reason_objectSpread(reason_objectSpread({},x),{},{moduleName:getModuleName(x.path)}));const mainReasonModule=reasonModules.find(m=>m.path===loaderContext._module.module.path);const modulesToAdd=new Set();getDependencyList(reasonModules,modulesToAdd,mainReasonModule);const modulesToAddArr=Array.from(modulesToAdd);yield Promise.all(modulesToAddArr.map(/*#__PURE__*/function(){var _ref=asyncToGenerator_default()(function*(m){if(m.path!==loaderContext._module.module.path){yield loaderContext.addTranspilationDependency(m.path,{});}});return function(_x){return _ref.apply(this,arguments);};}()));const newCode=modulesToAddArr.map(x=>{const usedCode=x.path.endsWith('.re')?x.code:global.printRE(global.parseML(x.code));const moduleName=x.moduleName;const typesPath=Object(path_browserify["join"])(Object(path_browserify["dirname"])(x.path),Object(path_browserify["basename"])(x.path,'.re')+'.rei');const typesModule=reasonModules.find(module=>module.path===typesPath);let reasonCode="module ".concat(moduleName);if(typesModule){reasonCode+=": {\n".concat(typesModule.code,"\n}");}reasonCode+=" = {\n#1 ".concat(moduleName,"\n").concat(usedCode,"\n};");return reasonCode;}).join('\n\n');const _global$ocaml$reason_=global.ocaml.reason_compile_super_errors(newCode),js_code=_global$ocaml$reason_.js_code,errorMessage=_global$ocaml$reason_.js_error_msg,row=_global$ocaml$reason_.row,column=_global$ocaml$reason_.column,text=_global$ocaml$reason_.text;if(errorMessage){const error=new Error(strip_ansi_default()(text));error.name='Reason Compile Error';// @ts-ignore
error.fileName=loaderContext._module.module.path;// @ts-ignore
error.lineNumber=row+1;// @ts-ignore
error.columnNumber=column;throw error;}return{transpiledCode:js_code};})();}}const reason_transpiler=new reason_ReasonTranspiler();/* harmony default export */ var reason = (reason_transpiler);
// CONCATENATED MODULE: ./src/sandbox/eval/presets/reason/reason-remap.ts
/* harmony default export */ var reason_remap = ({'stdlib/reasonReact':'@jaredly/reason-react/lib/js/src/ReasonReact.js','stdlib/reasonReactOptimizedCreateClass':'@jaredly/reason-react/lib/js/src/ReasonReactOptimizedCreateClass.js','stdlib/reactEventRe':'@jaredly/reason-react/lib/js/src/ReactEventRe.js','stdlib/reactDOMServerRe':'@jaredly/reason-react/lib/js/src/ReactDOMServerRe.js','stdlib/reactDOMRe':'@jaredly/reason-react/lib/js/src/ReactDOMRe.js','stdlib/belt_MutableSet':'@jaredly/bs-core/lib/js/belt_MutableSet.js','stdlib/belt_MutableStack':'@jaredly/bs-core/lib/js/belt_MutableStack.js','stdlib/js_unsafe':'@jaredly/bs-core/lib/js/js_unsafe.js','stdlib/caml_string':'@jaredly/bs-core/lib/js/caml_string.js','stdlib/belt_internalMapString':'@jaredly/bs-core/lib/js/belt_internalMapString.js','stdlib/belt_Id':'@jaredly/bs-core/lib/js/belt_Id.js','stdlib/caml_module':'@jaredly/bs-core/lib/js/caml_module.js','stdlib/js_internal':'@jaredly/bs-core/lib/js/js_internal.js','stdlib/char':'@jaredly/bs-core/lib/js/char.js','stdlib/js':'@jaredly/bs-core/lib/js/js.js','stdlib/caml_gc':'@jaredly/bs-core/lib/js/caml_gc.js','stdlib/js_null':'@jaredly/bs-core/lib/js/js_null.js','stdlib/belt_HashMapString':'@jaredly/bs-core/lib/js/belt_HashMapString.js','stdlib/int64':'@jaredly/bs-core/lib/js/int64.js','stdlib/sort':'@jaredly/bs-core/lib/js/sort.js','stdlib/belt_SortArrayInt':'@jaredly/bs-core/lib/js/belt_SortArrayInt.js','stdlib/caml_basic':'@jaredly/bs-core/lib/js/caml_basic.js','stdlib/js_result':'@jaredly/bs-core/lib/js/js_result.js','stdlib/caml_utils':'@jaredly/bs-core/lib/js/caml_utils.js','stdlib/js_promise':'@jaredly/bs-core/lib/js/js_promise.js','stdlib/js_obj':'@jaredly/bs-core/lib/js/js_obj.js','stdlib/belt_Map':'@jaredly/bs-core/lib/js/belt_Map.js','stdlib/js_console':'@jaredly/bs-core/lib/js/js_console.js','stdlib/caml_backtrace':'@jaredly/bs-core/lib/js/caml_backtrace.js','stdlib/oo':'@jaredly/bs-core/lib/js/oo.js','stdlib/caml_hash':'@jaredly/bs-core/lib/js/caml_hash.js','stdlib/belt_SortArray':'@jaredly/bs-core/lib/js/belt_SortArray.js','stdlib/random':'@jaredly/bs-core/lib/js/random.js','stdlib/stream':'@jaredly/bs-core/lib/js/stream.js','stdlib/belt_SetDict':'@jaredly/bs-core/lib/js/belt_SetDict.js','stdlib/caml_int32':'@jaredly/bs-core/lib/js/caml_int32.js','stdlib/format':'@jaredly/bs-core/lib/js/format.js','stdlib/stringLabels':'@jaredly/bs-core/lib/js/stringLabels.js','stdlib/belt_MutableSetString':'@jaredly/bs-core/lib/js/belt_MutableSetString.js','stdlib/stdLabels':'@jaredly/bs-core/lib/js/stdLabels.js','stdlib/caml_lexer':'@jaredly/bs-core/lib/js/caml_lexer.js','stdlib/printf':'@jaredly/bs-core/lib/js/printf.js','stdlib/unixLabels':'@jaredly/bs-core/lib/js/unixLabels.js','stdlib/bs_obj':'@jaredly/bs-core/lib/js/bs_obj.js','stdlib/moreLabels':'@jaredly/bs-core/lib/js/moreLabels.js','stdlib/js_mapperRt':'@jaredly/bs-core/lib/js/js_mapperRt.js','stdlib/belt_Set':'@jaredly/bs-core/lib/js/belt_Set.js','stdlib/js_types':'@jaredly/bs-core/lib/js/js_types.js','stdlib/caml_oo':'@jaredly/bs-core/lib/js/caml_oo.js','stdlib/belt_internalMapInt':'@jaredly/bs-core/lib/js/belt_internalMapInt.js','stdlib/pervasives':'@jaredly/bs-core/lib/js/pervasives.js','stdlib/scanf':'@jaredly/bs-core/lib/js/scanf.js','stdlib/std_exit':'@jaredly/bs-core/lib/js/std_exit.js','stdlib/belt':'@jaredly/bs-core/lib/js/belt.js','stdlib/caml_parser':'@jaredly/bs-core/lib/js/caml_parser.js','stdlib/js_cast':'@jaredly/bs-core/lib/js/js_cast.js','stdlib/belt_internalAVLset':'@jaredly/bs-core/lib/js/belt_internalAVLset.js','stdlib/belt_HashSetInt':'@jaredly/bs-core/lib/js/belt_HashSetInt.js','stdlib/belt_MutableMapString':'@jaredly/bs-core/lib/js/belt_MutableMapString.js','stdlib/caml_array':'@jaredly/bs-core/lib/js/caml_array.js','stdlib/belt_MutableSetInt':'@jaredly/bs-core/lib/js/belt_MutableSetInt.js','stdlib/digest':'@jaredly/bs-core/lib/js/digest.js','stdlib/marshal':'@jaredly/bs-core/lib/js/marshal.js','stdlib/belt_List':'@jaredly/bs-core/lib/js/belt_List.js','stdlib/caml_weak':'@jaredly/bs-core/lib/js/caml_weak.js','stdlib/js_string':'@jaredly/bs-core/lib/js/js_string.js','stdlib/callback':'@jaredly/bs-core/lib/js/callback.js','stdlib/queue':'@jaredly/bs-core/lib/js/queue.js','stdlib/camlinternalMod':'@jaredly/bs-core/lib/js/camlinternalMod.js','stdlib/caml_bytes':'@jaredly/bs-core/lib/js/caml_bytes.js','stdlib/camlinternalFormatBasics':'@jaredly/bs-core/lib/js/camlinternalFormatBasics.js','stdlib/belt_MutableMap':'@jaredly/bs-core/lib/js/belt_MutableMap.js','stdlib/belt_internalSetInt':'@jaredly/bs-core/lib/js/belt_internalSetInt.js','stdlib/belt_Array':'@jaredly/bs-core/lib/js/belt_Array.js','stdlib/caml_io':'@jaredly/bs-core/lib/js/caml_io.js','stdlib/camlinternalLazy':'@jaredly/bs-core/lib/js/camlinternalLazy.js','stdlib/gc':'@jaredly/bs-core/lib/js/gc.js','stdlib/belt_HashSetString':'@jaredly/bs-core/lib/js/belt_HashSetString.js','stdlib/belt_internalBuckets':'@jaredly/bs-core/lib/js/belt_internalBuckets.js','stdlib/belt_HashMapInt':'@jaredly/bs-core/lib/js/belt_HashMapInt.js','stdlib/parsing':'@jaredly/bs-core/lib/js/parsing.js','stdlib/js_list':'@jaredly/bs-core/lib/js/js_list.js','stdlib/belt_MutableMapInt':'@jaredly/bs-core/lib/js/belt_MutableMapInt.js','stdlib/bs_string':'@jaredly/bs-core/lib/js/bs_string.js','stdlib/caml_primitive':'@jaredly/bs-core/lib/js/caml_primitive.js','stdlib/belt_internalSetString':'@jaredly/bs-core/lib/js/belt_internalSetString.js','stdlib/js_boolean':'@jaredly/bs-core/lib/js/js_boolean.js','stdlib/list':'@jaredly/bs-core/lib/js/list.js','stdlib/js_float':'@jaredly/bs-core/lib/js/js_float.js','stdlib/js_int':'@jaredly/bs-core/lib/js/js_int.js','stdlib/unix':'@jaredly/bs-core/lib/js/unix.js','stdlib/js_int64':'@jaredly/bs-core/lib/js/js_int64.js','stdlib/set':'@jaredly/bs-core/lib/js/set.js','stdlib/array':'@jaredly/bs-core/lib/js/array.js','stdlib/arrayLabels':'@jaredly/bs-core/lib/js/arrayLabels.js','stdlib/bytes':'@jaredly/bs-core/lib/js/bytes.js','stdlib/caml_queue':'@jaredly/bs-core/lib/js/caml_queue.js','stdlib/caml_missing_polyfill':'@jaredly/bs-core/lib/js/caml_missing_polyfill.js','stdlib/lazy':'@jaredly/bs-core/lib/js/lazy.js','stdlib/node':'@jaredly/bs-core/lib/js/node.js','stdlib/string':'@jaredly/bs-core/lib/js/string.js','stdlib/block':'@jaredly/bs-core/lib/js/block.js','stdlib/js_math':'@jaredly/bs-core/lib/js/js_math.js','stdlib/js_dict':'@jaredly/bs-core/lib/js/js_dict.js','stdlib/arg':'@jaredly/bs-core/lib/js/arg.js','stdlib/belt_MapInt':'@jaredly/bs-core/lib/js/belt_MapInt.js','stdlib/belt_internalAVLtree':'@jaredly/bs-core/lib/js/belt_internalAVLtree.js','stdlib/belt_HashMap':'@jaredly/bs-core/lib/js/belt_HashMap.js','stdlib/js_global':'@jaredly/bs-core/lib/js/js_global.js','stdlib/belt_MutableQueue':'@jaredly/bs-core/lib/js/belt_MutableQueue.js','stdlib/js_null_undefined':'@jaredly/bs-core/lib/js/js_null_undefined.js','stdlib/js_option':'@jaredly/bs-core/lib/js/js_option.js','stdlib/caml_format':'@jaredly/bs-core/lib/js/caml_format.js','stdlib/printexc':'@jaredly/bs-core/lib/js/printexc.js','stdlib/genlex':'@jaredly/bs-core/lib/js/genlex.js','stdlib/caml_exceptions':'@jaredly/bs-core/lib/js/caml_exceptions.js','stdlib/weak':'@jaredly/bs-core/lib/js/weak.js','stdlib/sys':'@jaredly/bs-core/lib/js/sys.js','stdlib/filename':'@jaredly/bs-core/lib/js/filename.js','stdlib/caml_obj':'@jaredly/bs-core/lib/js/caml_obj.js','stdlib/belt_MapDict':'@jaredly/bs-core/lib/js/belt_MapDict.js','stdlib/complex':'@jaredly/bs-core/lib/js/complex.js','stdlib/js_exn':'@jaredly/bs-core/lib/js/js_exn.js','stdlib/hashtbl':'@jaredly/bs-core/lib/js/hashtbl.js','stdlib/belt_MapString':'@jaredly/bs-core/lib/js/belt_MapString.js','stdlib/js_json':'@jaredly/bs-core/lib/js/js_json.js','stdlib/js_vector':'@jaredly/bs-core/lib/js/js_vector.js','stdlib/js_date':'@jaredly/bs-core/lib/js/js_date.js','stdlib/belt_SetInt':'@jaredly/bs-core/lib/js/belt_SetInt.js','stdlib/caml_sys':'@jaredly/bs-core/lib/js/caml_sys.js','stdlib/js_nativeint':'@jaredly/bs-core/lib/js/js_nativeint.js','stdlib/js_undefined':'@jaredly/bs-core/lib/js/js_undefined.js','stdlib/caml_int64':'@jaredly/bs-core/lib/js/caml_int64.js','stdlib/caml_md5':'@jaredly/bs-core/lib/js/caml_md5.js','stdlib/caml_oo_curry':'@jaredly/bs-core/lib/js/caml_oo_curry.js','stdlib/belt_SetString':'@jaredly/bs-core/lib/js/belt_SetString.js','stdlib/caml_float':'@jaredly/bs-core/lib/js/caml_float.js','stdlib/bigarray':'@jaredly/bs-core/lib/js/bigarray.js','stdlib/caml_builtin_exceptions':'@jaredly/bs-core/lib/js/caml_builtin_exceptions.js','stdlib/obj':'@jaredly/bs-core/lib/js/obj.js','stdlib/js_typed_array':'@jaredly/bs-core/lib/js/js_typed_array.js','stdlib/map':'@jaredly/bs-core/lib/js/map.js','stdlib/int32':'@jaredly/bs-core/lib/js/int32.js','stdlib/listLabels':'@jaredly/bs-core/lib/js/listLabels.js','stdlib/belt_Range':'@jaredly/bs-core/lib/js/belt_Range.js','stdlib/belt_Option':'@jaredly/bs-core/lib/js/belt_Option.js','stdlib/js_array':'@jaredly/bs-core/lib/js/js_array.js','stdlib/camlinternalFormat':'@jaredly/bs-core/lib/js/camlinternalFormat.js','stdlib/nativeint':'@jaredly/bs-core/lib/js/nativeint.js','stdlib/lexing':'@jaredly/bs-core/lib/js/lexing.js','stdlib/js_primitive':'@jaredly/bs-core/lib/js/js_primitive.js','stdlib/camlinternalOO':'@jaredly/bs-core/lib/js/camlinternalOO.js','stdlib/belt_SortArrayString':'@jaredly/bs-core/lib/js/belt_SortArrayString.js','stdlib/buffer':'@jaredly/bs-core/lib/js/buffer.js','stdlib/bytesLabels':'@jaredly/bs-core/lib/js/bytesLabels.js','stdlib/belt_internalBucketsType':'@jaredly/bs-core/lib/js/belt_internalBucketsType.js','stdlib/curry':'@jaredly/bs-core/lib/js/curry.js','stdlib/belt_internalSetBuckets':'@jaredly/bs-core/lib/js/belt_internalSetBuckets.js','stdlib/belt_HashSet':'@jaredly/bs-core/lib/js/belt_HashSet.js','stdlib/stack':'@jaredly/bs-core/lib/js/stack.js','bs-platform':'@jaredly/bs-core'});
// CONCATENATED MODULE: ./src/sandbox/eval/presets/reason/index.ts
function reason_initialize(){const preset=new lib["b" /* Preset */]('reason',['web.js','js','re','json','web.jsx','jsx'],reason_remap,{hasDotEnv:true});preset.registerTranspiler(module=>/\.css$/.test(module.path),[{transpiler:style}]);preset.registerTranspiler(module=>/\.(m|c)?jsx?$/.test(module.path),[{transpiler:babel}]);preset.registerTranspiler(module=>/\.json$/.test(module.path),[{transpiler:json}]);preset.registerTranspiler(module=>/\.re$/.test(module.path),[{transpiler:reason},{transpiler:babel,options:{simpleRequire:true}}]);preset.registerTranspiler(()=>true,[{transpiler:raw}]);return preset;}
// CONCATENATED MODULE: ./src/sandbox/eval/presets/dojo/transpilers/style.ts
function style_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function style_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?style_ownKeys(Object(t),!0).forEach(function(r){defineProperty_default()(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):style_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}const style_getStyleId=id=>id+'-css';class style_DojoStyleTranspiler extends style_StyleTranspiler{doTranspilation(code,loaderContext){return asyncToGenerator_default()(function*(){const id=style_getStyleId(loaderContext._module.getId());const path=loaderContext.path;let modules=loaderContext.getModules();let result=modules.find(module=>module.path==="".concat(path,".js"));if(!result&&path.indexOf('/node_modules/')>-1){try{yield loaderContext.resolveTranspiledModuleAsync("".concat(path,".js"),{ignoredExtensions:[]});}catch{// Do nothing
}}modules=loaderContext.getModules();result=modules.find(module=>module.path==="".concat(path,".js"));if(result){return{transpiledCode:"".concat(insert_css(id,code),"\n").concat(result.code)};}const _modules$find=modules.find(module=>module.path==='/package.json'),packageJson=_modules$find.code;const _JSON$parse=JSON.parse(packageJson),packageName=_JSON$parse.name;const _exec=/\/([^/.]*)[^/]*$/.exec(path),_exec2=slicedToArray_default()(_exec,2),baseName=_exec2[1];const key="".concat(packageName,"/").concat(baseName);const _yield$getModules=yield get_modules(code,loaderContext),css=_yield$getModules.css,exportTokens=_yield$getModules.exportTokens;let cssResult=insert_css(id,css);cssResult+="\nmodule.exports=".concat(JSON.stringify(style_objectSpread({' _key':key},exportTokens)),";");Object(codesandbox_es5["dispatch"])({type:'add-extra-lib',path,code:toDefinition(exportTokens)});return{transpiledCode:cssResult};})();}}const style_transpiler=new style_DojoStyleTranspiler();/* harmony default export */ var transpilers_style = (style_transpiler);
// CONCATENATED MODULE: ./src/sandbox/eval/presets/dojo/index.ts
function dojo_initialize(){const preset=new lib["b" /* Preset */]('@dojo/cli-create-app',['ts','tsx','js','json'],{},{setup:function(){var _ref=asyncToGenerator_default()(function*(manager){const stylesPath=Object(utils_path["absolute"])(Object(utils_path["join"])('src','main.css'));try{const tModule=yield manager.resolveTranspiledModuleAsync(stylesPath,null);yield tModule.transpile(manager);tModule.setIsEntry(true);tModule.evaluate(manager);}catch(e){if(e.type==='module-not-found'){// Do nothing
}else{throw e;}}});return function setup(_x){return _ref.apply(this,arguments);};}()});preset.registerTranspiler(module=>/\.tsx?$/.test(module.path),[{transpiler:typescript},{transpiler:csb_dynamic_import}]);preset.registerTranspiler(module=>/\.(c|m)?jsx?$/.test(module.path),[{transpiler:babel,options:{isV7:true,config:{parserOpts:{plugins:['objectRestSpread']}}}}]);preset.registerTranspiler(module=>/\.json$/.test(module.path),[{transpiler:json}]);preset.registerTranspiler(module=>/\.m\.css$/.test(module.path),[{transpiler:transpilers_style}]);preset.registerTranspiler(module=>/\.css$/.test(module.path),[{transpiler:style}]);preset.registerTranspiler(()=>true,[{transpiler:raw}]);return preset;}
// CONCATENATED MODULE: ./src/sandbox/eval/presets/custom/index.ts
const transpilerMap={'codesandbox:raw':raw,'codesandbox:json':json,'codesandbox:babel':babel};function registerTranspilers(_x,_x2,_x3){return _registerTranspilers.apply(this,arguments);}function _registerTranspilers(){_registerTranspilers=asyncToGenerator_default()(function*(manager,preset,transpilerConfig){const savedTranspilers={};const configModule=yield manager.resolveTranspiledModule('/.codesandbox/template.json','/',[]);configModule.setIsEntry(true);const initializers=yield Promise.all(Object.keys(transpilerConfig).map(/*#__PURE__*/function(){var _ref2=asyncToGenerator_default()(function*(expression){const transpilers=transpilerConfig[expression];const evaluatedTranspilers=yield Promise.all(transpilers.map(/*#__PURE__*/function(){var _ref3=asyncToGenerator_default()(function*(t){if(savedTranspilers[t]){return savedTranspilers[t];}if(t.startsWith('codesandbox:')){const transpiler=transpilerMap[t];if(!transpiler){throw new Error("Could not register custom transpiler: ".concat(t," is unknown to Sandpack."));}return{transpiler};}const tModule=yield manager.resolveTranspiledModule(t,'/.codesandbox/template.json',[]);if(tModule.shouldTranspile()){tModule.initiators.add(configModule);configModule.dependencies.add(tModule);yield tModule.transpile(manager);}const transpiler=tModule.compilation?tModule.compilation.exports:tModule.evaluate(manager);savedTranspilers[t]=transpiler;return{transpiler};});return function(_x6){return _ref3.apply(this,arguments);};}()));return()=>{const regex=new RegExp(expression);preset.registerTranspiler(module=>regex.test(module.path),evaluatedTranspilers);};});return function(_x5){return _ref2.apply(this,arguments);};}()));preset.resetTranspilers();initializers.forEach(x=>x());});return _registerTranspilers.apply(this,arguments);}function custom_initialize(){let initialized=false;const customPreset=new lib["b" /* Preset */]('custom',undefined,undefined,{setup:function(){var _ref=asyncToGenerator_default()(function*(manager){// if (updatedModules.some(m => m.module.path.startsWith('/.codesandbox'))) {
//   initialized = false;
//   manager.clearCompiledCache();
//   manager.clearCache();
// }
if(!initialized){// eslint-disable-next-line no-console
console.log('Initializing custom template');customPreset.resetTranspilers();// Our JS/JSON transpiler to transpile the transpilers
customPreset.registerTranspiler(m=>/\.jsx?$/.test(m.path),[{transpiler:babel}]);customPreset.registerTranspiler(m=>/\.json$/.test(m.path),[{transpiler:json}]);const customConfig=manager.configurations.customTemplate&&manager.configurations.customTemplate.parsed;if(!customConfig){throw new Error('No configuration specified for the custom template');}const sandpack=customConfig.sandpack;if(sandpack){customPreset.defaultAliases=sandpack.defaultAliases||[];if(sandpack.transpilers){yield registerTranspilers(manager,customPreset,sandpack.transpilers);}}customPreset.registerTranspiler(()=>true,[{transpiler:raw}]);initialized=true;}});return function setup(_x4){return _ref.apply(this,arguments);};}()});return customPreset;}
// CONCATENATED MODULE: ./src/sandbox/eval/presets/solid/index.ts
function solid_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function solid_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?solid_ownKeys(Object(t),!0).forEach(function(r){defineProperty_default()(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):solid_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}function solid_initialize(){const solidPreset=new lib["b" /* Preset */]('solid',['js','mjs','cjs','jsx','ts','tsx','json','less','scss','sass','styl','css'],{},{processDependencies:function(){var _ref=asyncToGenerator_default()(function*(originalDeps){const deps=solid_objectSpread({},originalDeps);if(!deps['solid-refresh']){deps['solid-refresh']='^0.5.2';}if(!deps['babel-preset-solid']){deps['babel-preset-solid']='^1.2.0';}if(!deps['@babel/core']){deps['@babel/core']='^7.15.8';}if(!deps['@babel/plugin-syntax-dynamic-import']){deps['@babel/plugin-syntax-dynamic-import']='^7.8.3';}if(!deps['@babel/runtime']){deps['@babel/runtime']='^7.17.9';}if(!deps['@babel/preset-typescript']){deps['@babel/preset-typescript']='^7.16.7';}// No babel 6 support
delete deps['babel-core'];return deps;});return function processDependencies(_x){return _ref.apply(this,arguments);};}()});solidPreset.registerTranspiler(module=>/\.coffee$/.test(module.path),[{transpiler:coffee},{transpiler:babel,options:{isV7:true}}]);solidPreset.registerTranspiler(module=>/\.(m|c)?(t|j)sx?$/.test(module.path),[{transpiler:babel,options:{isV7:true,dynamicCSSModules:true}}]);solidPreset.registerTranspiler(module=>/\.css$/.test(module.path),[{transpiler:postcss},{transpiler:style}]);solidPreset.registerTranspiler(module=>/\.s[c|a]ss$/.test(module.path),[{transpiler:sass},{transpiler:postcss},{transpiler:style}]);solidPreset.registerTranspiler(module=>/\.json$/.test(module.path),[{transpiler:json}]);const sassWithConfig={transpiler:sass,options:{}};const lessWithConfig={transpiler:less,options:{}};const stylusWithConfig={transpiler:stylus,options:{}};const styles={css:[],scss:[sassWithConfig],sass:[sassWithConfig],less:[lessWithConfig],styl:[stylusWithConfig]};/**
   * Registers transpilers for all different combinations
   *
   * @returns
   */function registerStyleTranspilers(){return Object.keys(styles).forEach(type=>{solidPreset.registerTranspiler(module=>new RegExp("\\.".concat(type,"$")).test(module.path),[...styles[type],{transpiler:style}]);});}registerStyleTranspilers();solidPreset.registerTranspiler(()=>true,[{transpiler:raw}]);solidPreset.registerTranspiler(()=>false,[{transpiler:noop}]);return solidPreset;}
// CONCATENATED MODULE: ./src/sandbox/eval/index.ts
/* eslint-disable import/no-named-as-default-member, import/default, import/no-named-as-default */function getPreset(_x,_x2){return _getPreset.apply(this,arguments);}function _getPreset(){_getPreset=asyncToGenerator_default()(function*(template,pkg){switch(template){case templates["esmReact"].name:case templates["reactTs"].name:case templates["react"].name:{const preset=yield reactPreset(pkg);if(template===templates["esmReact"].name){preset.experimentalEsmSupport=true;}return preset;}case templates["preact"].name:if(Object(is_preact_10["isPreact10"])(pkg.dependencies,pkg.devDependencies)){return PreactPreset();}return PreactPresetV8();case templates["reason"].name:return reason_initialize();case templates["vue"].name:return vue_cli_initialize();case templates["svelte"].name:return svelte_initialize();case templates["angular"].name:return angular_cli_initialize();case templates["parcel"].name:return parcel_initialize();case templates["babel"].name:return babel_repl_initialize();case templates["cxjs"].name:return cxjs_initialize();case templates["dojo"].name:return dojo_initialize();case templates["solid"].name:return solid_initialize();case templates["custom"].name:return custom_initialize();default:return reactPreset(pkg);}});return _getPreset.apply(this,arguments);}
// CONCATENATED MODULE: ./src/sandbox/external-resources.ts
function getExternalResourcesConcatenation(resources){return resources.join('');}/* eslint-disable no-cond-assign */function clearExternalResources(){let el=null;// eslint-disable-next-line no-cond-assign
while(el=document.getElementById('external-css')){el.remove();}// eslint-disable-next-line no-cond-assign
while(el=document.getElementById('external-js')){el.remove();}}/* eslint-enable */function createExternalCSSLink(resource){const link=document.createElement('link');link.id='external-css';link.rel='stylesheet';link.type='text/css';link.href=resource;link.media='all';return link;}function addCSS(resource){const head=document.getElementsByTagName('head')[0];const link=createExternalCSSLink(resource);head.appendChild(link);return link;}function createExternalJSLink(resource){const script=document.createElement('script');script.setAttribute('src',resource);script.async=false;script.setAttribute('id','external-js');return script;}function addJS(resource){const script=createExternalJSLink(resource);document.head.appendChild(script);return script;}function resourceIsCss(resource){const match=resource.match(/\.([^.]*)$/);return match&&match[1]==='css'||resource.includes('fonts.googleapis');}function addResource(resource){const el=resourceIsCss(resource)?addCSS(resource):addJS(resource);return new Promise(r=>{el.onload=r;el.onerror=r;});}function waitForLoaded(){return new Promise(resolve=>{if(document.readyState!=='complete'){window.addEventListener('load',resolve);}else{resolve(null);}});}let cachedExternalResources='';function handleExternalResources(_x){return _handleExternalResources.apply(this,arguments);}function _handleExternalResources(){_handleExternalResources=asyncToGenerator_default()(function*(externalResources){const extResString=getExternalResourcesConcatenation(externalResources);if(extResString!==cachedExternalResources){clearExternalResources();yield Promise.all(externalResources.map(addResource));cachedExternalResources=extResString;return waitForLoaded();}return Promise.resolve();});return _handleExternalResources.apply(this,arguments);}
// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/raw-loader!./src/sandbox/status-screen/indicator-screen.html
var indicator_screen = __webpack_require__("../../node_modules/raw-loader/index.js!./src/sandbox/status-screen/indicator-screen.html");
var indicator_screen_default = /*#__PURE__*/__webpack_require__.n(indicator_screen);

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/raw-loader!./src/sandbox/status-screen/loading-screen.html
var loading_screen = __webpack_require__("../../node_modules/raw-loader/index.js!./src/sandbox/status-screen/loading-screen.html");
var loading_screen_default = /*#__PURE__*/__webpack_require__.n(loading_screen);

// CONCATENATED MODULE: ./src/sandbox/status-screen/overlay-manager.ts
let iframeReference=null;let iframeRenderedAt=0;function resetOverlay(){try{// We add a delay to unmounting the iframe if the iframe has only just
// appeared. We want to do this, because we want to prevent a flicker for
// the user, which is a bad perceivement.
const delay=Date.now()-iframeRenderedAt>1000?0:1000;/**
     * To make sure no iframe rendered between now and the clear we do
     * after a timeout, we keep track of the last rendered at and compare
     * it before clearing the iframe
     */const lastIframeRenderedAt=iframeRenderedAt;setTimeout(()=>{if(iframeReference&&lastIframeRenderedAt===iframeRenderedAt){iframeReference.style.opacity='0';setTimeout(()=>{if(iframeReference.parentNode){document.body.removeChild(iframeReference);}},500);}},delay);}catch(e){/* nothing */}}const setIframeStyle=(iframe,showFullScreen)=>{iframe.setAttribute('style',showFullScreen?"position: fixed; top: 0; left: 0; width: 100%; height: 100%; border: none; z-index: 214748366;opacity: 1;transition: opacity 0.15s ease-in;":"position: fixed; top: 10px; left: 10px; height: 45px; width: 45px; border-radius: 2px; border: none; z-index: 214748366; opacity: 0;transition: opacity 0.15s ease-in;");};function createIframe(showFullScreen){return new Promise(resolve=>{iframeRenderedAt=Date.now();if(iframeReference){document.body.appendChild(iframeReference);requestAnimationFrame(()=>{iframeReference.style.opacity='1';});setIframeStyle(iframeReference,showFullScreen);resolve(iframeReference);return;}const iframe=document.createElement('iframe');setIframeStyle(iframe,showFullScreen);iframe.setAttribute('id','frame');iframeReference=iframe;document.body.appendChild(iframe);requestAnimationFrame(()=>{iframe.style.opacity='1';});if(iframe.contentDocument){resolve(iframe);}else if(document.getElementById('frame')){document.getElementById('frame').onload=()=>{resolve(iframe);};}else{resolve(iframe);}});}function overlay_manager_createOverlay(_x,_x2){return _createOverlay.apply(this,arguments);}function _createOverlay(){_createOverlay=asyncToGenerator_default()(function*(html,showFullScreen){const iframe=yield createIframe(showFullScreen);const isMounted=!!document.getElementById('frame');if(!isMounted){document.body.appendChild(iframe);}iframe.contentDocument.body.innerHTML=html;return iframe;});return _createOverlay.apply(this,arguments);}
// CONCATENATED MODULE: ./src/sandbox/status-screen/index.ts
// @ts-ignore
// This is the loading screen
// @ts-ignore
let currentScreen=null;let loadTimeoutID=null;let status_screen_iframeReference=null;function changeText(text){if(status_screen_iframeReference){if(status_screen_iframeReference.contentDocument&&status_screen_iframeReference.contentDocument.getElementsByClassName('text')&&status_screen_iframeReference.contentDocument.getElementsByClassName('text').item(0)){status_screen_iframeReference.contentDocument.getElementsByClassName('text').item(0).textContent=text;}}}function resetScreen(){currentScreen=null;status_screen_iframeReference=null;resetOverlay();clearTimeout(loadTimeoutID);loadTimeoutID=null;}function setScreen(screen){const showFullScreen=typeof screen.showFullScreen==='undefined'?true:screen.showFullScreen;if(!status_screen_iframeReference){if(!loadTimeoutID){// Give the illusion of faster loading by showing the loader screen later
loadTimeoutID=window.setTimeout(/*#__PURE__*/asyncToGenerator_default()(function*(){if(!status_screen_iframeReference&&currentScreen){status_screen_iframeReference=yield overlay_manager_createOverlay(showFullScreen?loading_screen_default.a:indicator_screen_default.a,showFullScreen);}if(currentScreen){changeText(currentScreen.text);}loadTimeoutID=null;}),showFullScreen?1000:0);}}else if(currentScreen){changeText(screen.text);}currentScreen=screen;}
// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/raw-loader!./src/sandbox/status-screen/run-on-click-screen.html
var run_on_click_screen = __webpack_require__("../../node_modules/raw-loader/index.js!./src/sandbox/status-screen/run-on-click-screen.html");
var run_on_click_screen_default = /*#__PURE__*/__webpack_require__.n(run_on_click_screen);

// CONCATENATED MODULE: ./src/sandbox/status-screen/run-on-click.ts
// @ts-ignore
function showRunOnClick(){return _showRunOnClick.apply(this,arguments);}function _showRunOnClick(){_showRunOnClick=asyncToGenerator_default()(function*(){const iframe=yield overlay_manager_createOverlay(run_on_click_screen_default.a,true);iframe.contentDocument.body.addEventListener('click',()=>{document.location.reload();});});return _showRunOnClick.apply(this,arguments);}
// EXTERNAL MODULE: ./src/sandbox/index.ts
var sandbox = __webpack_require__("./src/sandbox/index.ts");

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/outvariant/lib/index.mjs
var outvariant_lib = __webpack_require__("../../node_modules/outvariant/lib/index.mjs");

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/url-loader/dist/cjs.js?limit=false&name=sw.[hash:8].worker.js!./src/sandbox/worker/sw.no-webpack.js
var sw_no_webpack = __webpack_require__("../../node_modules/url-loader/dist/cjs.js?limit=false&name=sw.[hash:8].worker.js!./src/sandbox/worker/sw.no-webpack.js");
var sw_no_webpack_default = /*#__PURE__*/__webpack_require__.n(sw_no_webpack);

// CONCATENATED MODULE: ./src/sandbox/worker/types.ts
const CHANNEL_NAME='$CSB_RELAY';
// CONCATENATED MODULE: ./src/sandbox/worker/utils.ts
/* eslint-disable no-console */// @ts-ignore
const DEBUG="production"==='development';const worker_utils_debug=function(){if(DEBUG)console.debug(...arguments);};function getServiceWorker(){return _getServiceWorker.apply(this,arguments);}function _getServiceWorker(){_getServiceWorker=asyncToGenerator_default()(function*(){Object(outvariant_lib["a" /* invariant */])('serviceWorker'in navigator,'Failed to start the relay Service Worker: Service Worker API is not supported in this browser');/**
   * Registers the relay Service Worker anew.
   */const registerWorker=/*#__PURE__*/function(){var _ref=asyncToGenerator_default()(function*(){const registration=yield navigator.serviceWorker.register(sw_no_webpack_default.a,{scope:'/'});return getWorkerInstance(registration);});return function registerWorker(){return _ref.apply(this,arguments);};}();// Unregisters irrelevant worker registrations.
const registrations=yield navigator.serviceWorker.getRegistrations();worker_utils_debug('[sw:register] all registrations',location,registrations);yield Promise.all(// @ts-ignore
registrations.map(registration=>{const worker=getWorkerInstance(registration);// Unregister any worker that shouldn't be there.
if(worker&&new URL(worker.scriptURL).pathname!==sw_no_webpack_default.a){worker_utils_debug('[sw:register] found irrelevant worker registration, unregistering...',worker,registration);return registration.unregister();}return Promise.resolve();}));// Get the existing Service Worker controller, if any.
const controller=navigator.serviceWorker.controller;// No controller means the relay does not have any Service Worker registered.
if(!controller){worker_utils_debug('[sw:register] relay is not controlled by a worker, registering a new worker...');return registerWorker();}if(controller){worker_utils_debug('[sw:register] found a crontoller',controller);}// If the controller has the same script as the expected worker,
// this means the correct worker is already handling the page.
if(new URL(controller.scriptURL).pathname===sw_no_webpack_default.a){worker_utils_debug('[sw:register] relay is controlled by the correct worker',controller.scriptURL);return controller;}const _yield$Promise$all=yield Promise.all([navigator.serviceWorker.getRegistration(controller.scriptURL),navigator.serviceWorker.getRegistration(sw_no_webpack_default.a)]),_yield$Promise$all2=slicedToArray_default()(_yield$Promise$all,2),controllerRegistration=_yield$Promise$all2[0],registration=_yield$Promise$all2[1];worker_utils_debug('[sw:register] controller registration:',controllerRegistration);worker_utils_debug('[sw:register] worker registration:',registration);// If there's no registration associated with the correct worker,
// unregister whichever existing controller and register the worker anew.
if(!registration){worker_utils_debug('[sw:register] no registration found for "%s", unregistering controller and registering a new worker...',sw_no_webpack_default.a);yield controllerRegistration===null||controllerRegistration===void 0?void 0:controllerRegistration.unregister();return registerWorker();}// Waiting registration means the correct worker is queued but
// hasn't been installed/activated yet. Promote it by updating.
if(registration.waiting){worker_utils_debug('[sw:register] found waiting registration, promoting...');yield registration.update();const worker=getWorkerInstance(registration);Object(outvariant_lib["a" /* invariant */])(worker,'Failed to retrieve the worker instance after promotion: worked does not exist');Object(outvariant_lib["a" /* invariant */])(registration.active,'Failed to promove a waiting Service Worker: expected the worker state to be "active" but got "%s"',worker.state);return worker;}return null;});return _getServiceWorker.apply(this,arguments);}function getWorkerInstance(registration){return registration.installing||registration.waiting||registration.active;}/**
 * Establish a ping/pong messages between the client and the worker.
 * This prevent their communication from becoming idle, which causes
 * some browsers to terminate the worker after a period of inactivity.
 */function preventStaleTermination(worker){const keepaliveInterval=setInterval(()=>{const pingMessage={$channel:CHANNEL_NAME,$type:'worker/ping'};worker.postMessage(pingMessage);},5000);navigator.serviceWorker.addEventListener('message',event=>{if(event.data.$type==='worker/pong'){worker_utils_debug('[sw:register] ping/pong');}});worker.addEventListener('statechange',()=>{// Stop the keepalive if the worker becomes redundant
// (e.g. get unregistered or force-reloaded).
if(worker.state==='redundant'){worker_utils_debug('[sw:register] Stop the keepalive');clearInterval(keepaliveInterval);}});}
// CONCATENATED MODULE: ./src/sandbox/worker/promise.ts
/**
 * Copied from https://github.com/open-draft/deferred-promise 
 * because the current Babel configuration doesn't support static block in classes
 */function createDeferredExecutor(){const executor=(resolve,reject)=>{executor.state='pending';executor.resolve=data=>{if(executor.state!=='pending'){return;}executor.result=data;const onFulfilled=value=>{executor.state='fulfilled';return value;};// eslint-disable-next-line
return resolve(data instanceof Promise?data:Promise.resolve(data).then(onFulfilled));};executor.reject=reason=>{if(executor.state!=='pending'){return;}queueMicrotask(()=>{executor.state='rejected';});// eslint-disable-next-line
return reject(executor.rejectionReason=reason);};};return executor;}class promise_DeferredPromise extends Promise{constructor(){let executor=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;const deferredExecutor=createDeferredExecutor();super((originalResolve,originalReject)=>{deferredExecutor(originalResolve,originalReject);// eslint-disable-next-line
executor===null||executor===void 0?void 0:executor(deferredExecutor.resolve,deferredExecutor.reject);});defineProperty_default()(this,"executor",void 0);defineProperty_default()(this,"resolve",void 0);defineProperty_default()(this,"reject",void 0);this.executor=deferredExecutor;this.resolve=this.executor.resolve;this.reject=this.executor.reject;}get state(){return this.executor.state;}get rejectionReason(){return this.executor.rejectionReason;}then(onFulfilled,onRejected){return this.decorate(super.then(onFulfilled,onRejected));}catch(onRejected){return this.decorate(super.catch(onRejected));}finally(onfinally){return this.decorate(super.finally(onfinally));}decorate(promise){return Object.defineProperties(promise,{resolve:{configurable:true,value:this.resolve},reject:{configurable:true,value:this.reject}});}}
// CONCATENATED MODULE: ./src/sandbox/worker/index.ts
// Create a message channel for communication with the Service Worker.
const workerChannel=new MessageChannel();const workerReadyPromise=new promise_DeferredPromise();workerReadyPromise.then(worker=>{worker_utils_debug('[relay] worker is ready, initializing MessageChannel...');// Always post the initial MessageChannel message to the worker
// as soon as the worker is ready. This is done once.
const workerInitMessage={$channel:CHANNEL_NAME,$type:'worker/init'};worker.postMessage(workerInitMessage,[workerChannel.port2]);return worker;});const parentPortPromise=new promise_DeferredPromise();window.addEventListener('message',event=>{if(event.data.$type==='preview/init'){const parentPort=event.ports[0];parentPort.onmessage=/*#__PURE__*/function(){var _ref=asyncToGenerator_default()(function*(evt){if(typeof evt.data==='object'&&evt.data.$channel===CHANNEL_NAME&&evt.data.$type==='preview/response'){const msg=evt.data;workerChannel.port1.postMessage(msg);}});return function(_x){return _ref.apply(this,arguments);};}();parentPortPromise.resolve(parentPort);}});workerChannel.port1.onmessage=/*#__PURE__*/function(){var _ref2=asyncToGenerator_default()(function*(event){const data=event.data;// console.debug("incoming message from the worker", event.data);
if(data.$channel===CHANNEL_NAME){// Pause the message handling until the parent has taken control of the preview.
const port=yield parentPortPromise;// Route all data to the parent.
const message=data;port.postMessage(message);}});return function(_x2){return _ref2.apply(this,arguments);};}();function startServiceWorker(){return _startServiceWorker.apply(this,arguments);}function _startServiceWorker(){_startServiceWorker=asyncToGenerator_default()(function*(){const worker=yield getServiceWorker().catch(error=>{console.error('[relay] Failed to ensure the relay has a Service Worker registered. See details below.');console.error(error);});yield navigator.serviceWorker.ready;Object(outvariant_lib["a" /* invariant */])(worker,'[relay] Failed to retrieve the worker instance: worker not found');preventStaleTermination(worker);// if (process.env.NODE_ENV === 'development') {
//   window.addEventListener('beforeunload', async () => {
//     const registrations = await navigator.serviceWorker.getRegistrations();
//     for (const registration of registrations) {
//       // eslint-disable-next-line no-await-in-loop
//       await registration.unregister();
//     }
//     debug('[relay] Unregister all SW');
//   });
// }
window.addEventListener('beforeunload',/*#__PURE__*/asyncToGenerator_default()(function*(){const message={$channel:CHANNEL_NAME,$type:'worker/invalidate-port'};worker_utils_debug('[relay] Invalidating port...');worker.postMessage(message);}));workerReadyPromise.resolve(worker);worker_utils_debug('[relay] Worker ready');// Wait until the parent sends the init event
// via the MessageChannel, acknowledging that it recognized the relay.
const parentPort=yield parentPortPromise;worker_utils_debug('[relay] Parent port received',parentPort);const readyMessage={$channel:CHANNEL_NAME,$type:'preview/ready'};parentPort.postMessage(readyMessage);});return _startServiceWorker.apply(this,arguments);}
// CONCATENATED MODULE: ./src/sandbox/compile.ts
function compile_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function compile_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?compile_ownKeys(Object(t),!0).forEach(function(r){defineProperty_default()(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):compile_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}/* eslint-disable import/no-cycle */let compile_manager=null;let actionsEnabled=false;const compile_debug=debug_default()('cs:compiler');function areActionsEnabled(){return actionsEnabled;}function getCurrentManager(){return compile_manager;}function getHTMLParts(html){if(html.includes('<body>')){const bodyMatcher=/<body.*>([\s\S]*)<\/body>/m;const headMatcher=/<head>([\s\S]*)<\/head>/m;const headMatch=html.match(headMatcher);const bodyMatch=html.match(bodyMatcher);const head=headMatch&&headMatch[1]?headMatch[1]:'';const body=bodyMatch&&bodyMatch[1]?bodyMatch[1]:html;return{body,head};}return{head:'',body:html};}let testRunner;function sendTestCount(modules){const tests=testRunner.findTests(modules);Object(codesandbox_es5["dispatch"])({type:'test',event:'test_count',count:tests.length});// Triggers sandpack-react's watchMode run.
Object(codesandbox_es5["dispatch"])({type:'test',event:'initialize_tests'});}let firstLoad=true;let hadError=false;let lastHeadHTML=null;let lastBodyHTML=null;let lastHeight=0;let changedModuleCount=0;let usedCache=false;// TODO make devDependencies lazy loaded by the packager
const WHITELISTED_DEV_DEPENDENCIES=['redux-devtools','redux-devtools-dock-monitor','redux-devtools-log-monitor','redux-logger','enzyme','react-addons-test-utils','react-test-renderer','identity-obj-proxy','react-refresh'];const BABEL_DEPENDENCIES=['babel-preset-env','babel-preset-latest','babel-preset-es2015','babel-preset-es2015-loose','babel-preset-es2016','babel-preset-es2017','babel-preset-react','babel-preset-stage-0','babel-preset-stage-1','babel-preset-stage-2','babel-preset-stage-3'];// Dependencies that we actually don't need, we will replace this by a dynamic
// system in the future
const PREINSTALLED_DEPENDENCIES=['web-vitals',// Blocked by ad blockers :(
'react-scripts','react-scripts-ts','parcel-bundler','babel-plugin-check-es2015-constants','babel-plugin-external-helpers','babel-plugin-inline-replace-variables','babel-plugin-syntax-async-functions','babel-plugin-syntax-async-generators','babel-plugin-syntax-class-constructor-call','babel-plugin-syntax-class-properties','babel-plugin-syntax-decorators','babel-plugin-syntax-do-expressions','babel-plugin-syntax-exponentiation-operator','babel-plugin-syntax-export-extensions','babel-plugin-syntax-flow','babel-plugin-syntax-function-bind','babel-plugin-syntax-function-sent','babel-plugin-syntax-jsx','babel-plugin-syntax-object-rest-spread','babel-plugin-syntax-trailing-function-commas','babel-plugin-transform-async-functions','babel-plugin-transform-async-to-generator','babel-plugin-transform-async-to-module-method','babel-plugin-transform-class-constructor-call','babel-plugin-transform-class-properties','babel-plugin-transform-decorators','babel-plugin-transform-decorators-legacy','babel-plugin-transform-do-expressions','babel-plugin-transform-es2015-arrow-functions','babel-plugin-transform-es2015-block-scoped-functions','babel-plugin-transform-es2015-block-scoping','babel-plugin-transform-es2015-classes','babel-plugin-transform-es2015-computed-properties','babel-plugin-transform-es2015-destructuring','babel-plugin-transform-es2015-duplicate-keys','babel-plugin-transform-es2015-for-of','babel-plugin-transform-es2015-function-name','babel-plugin-transform-es2015-instanceof','babel-plugin-transform-es2015-literals','babel-plugin-transform-es2015-modules-amd','babel-plugin-transform-es2015-modules-commonjs','babel-plugin-transform-es2015-modules-systemjs','babel-plugin-transform-es2015-modules-umd','babel-plugin-transform-es2015-object-super','babel-plugin-transform-es2015-parameters','babel-plugin-transform-es2015-shorthand-properties','babel-plugin-transform-es2015-spread','babel-plugin-transform-es2015-sticky-regex','babel-plugin-transform-es2015-template-literals','babel-plugin-transform-es2015-typeof-symbol','babel-plugin-transform-es2015-unicode-regex','babel-plugin-transform-es3-member-expression-literals','babel-plugin-transform-es3-property-literals','babel-plugin-transform-es5-property-mutators','babel-plugin-transform-eval','babel-plugin-transform-exponentiation-operator','babel-plugin-transform-export-extensions','babel-plugin-transform-flow-comments','babel-plugin-transform-flow-strip-types','babel-plugin-transform-function-bind','babel-plugin-transform-jscript','babel-plugin-transform-object-assign','babel-plugin-transform-object-rest-spread','babel-plugin-transform-object-set-prototype-of-to-assign','babel-plugin-transform-proto-to-assign','babel-plugin-transform-react-constant-elements','babel-plugin-transform-react-display-name','babel-plugin-transform-react-inline-elements','babel-plugin-transform-react-jsx','babel-plugin-transform-react-jsx-compat','babel-plugin-transform-react-jsx-self','babel-plugin-transform-react-jsx-source','babel-plugin-transform-regenerator','babel-plugin-transform-runtime','babel-plugin-transform-strict-mode','babel-plugin-undeclared-variables-check','babel-plugin-dynamic-import-node','babel-plugin-detective','babel-plugin-transform-prevent-infinite-loops','babel-plugin-transform-vue-jsx','flow-bin',...BABEL_DEPENDENCIES];function getDependencies(parsedPackage,templateDefinition,configurations){const _parsedPackage$depend=parsedPackage.dependencies,d=_parsedPackage$depend===void 0?{}:_parsedPackage$depend,_parsedPackage$peerDe=parsedPackage.peerDependencies,peerDependencies=_parsedPackage$peerDe===void 0?{}:_parsedPackage$peerDe,_parsedPackage$devDep=parsedPackage.devDependencies,devDependencies=_parsedPackage$devDep===void 0?{}:_parsedPackage$devDep;let returnedDependencies=compile_objectSpread({},peerDependencies);const foundWhitelistedDevDependencies=[...WHITELISTED_DEV_DEPENDENCIES];// Add all babel plugins/presets to whitelisted dependencies
if(configurations&&configurations.babel&&configurations.babel.parsed){Object(flatten["a" /* default */])(configurations.babel.parsed.presets||[]).filter(p=>typeof p==='string').forEach(p=>{const _p$split=p.split('/'),_p$split2=toArray_default()(_p$split),first=_p$split2[0],parts=_p$split2.slice(1);const prefixedName=p.startsWith('@')?first+'/babel-preset-'+parts.join('/'):"babel-preset-".concat(p);foundWhitelistedDevDependencies.push(p);foundWhitelistedDevDependencies.push(prefixedName);});Object(flatten["a" /* default */])(configurations.babel.parsed.plugins||[]).filter(p=>typeof p==='string').forEach(p=>{const _p$split3=p.split('/'),_p$split4=toArray_default()(_p$split3),first=_p$split4[0],parts=_p$split4.slice(1);const prefixedName=p.startsWith('@')?first+'/babel-plugin-'+parts.join('/'):"babel-plugin-".concat(p);foundWhitelistedDevDependencies.push(p);foundWhitelistedDevDependencies.push(prefixedName);});}Object.keys(d).forEach(dep=>{if(dep==='reason-react'){return;// is replaced
}returnedDependencies[dep]=d[dep];});Object.keys(devDependencies).forEach(dep=>{if(foundWhitelistedDevDependencies.indexOf(dep)>-1){// Skip @vue/babel-preset-app
if(dep==='@vue/babel-preset-app'){return;}returnedDependencies[dep]=devDependencies[dep];}});if(d.vue){returnedDependencies['@vue/babel-plugin-jsx']='1.0.6';}const sandpackConfig=configurations.customTemplate&&configurations.customTemplate.parsed&&configurations.customTemplate.parsed.sandpack||{};const preinstalledDependencies=sandpackConfig.preInstalledDependencies==null?PREINSTALLED_DEPENDENCIES:sandpackConfig.preInstalledDependencies;if(templateDefinition.name==='reason'){returnedDependencies=compile_objectSpread(compile_objectSpread({},returnedDependencies),{},{'@jaredly/bs-core':'3.0.0-alpha.2','@jaredly/reason-react':'0.3.4'});}// Always include this, because most sandboxes need this with babel6 and the
// packager will only include the package.json for it.
if(Object(is_babel_7["isBabel7"])(d,devDependencies)){// Don't pin this version, because other dependencies installed by the sandbox might need
// @babel/runtime as well, multiple versions of @babel/runtime will lead to problems.
returnedDependencies['@babel/runtime']=returnedDependencies['@babel/runtime']||'^7.3.1';}else{returnedDependencies['babel-runtime']=returnedDependencies['babel-runtime']||'6.26.0';}returnedDependencies['node-libs-browser']='2.2.1';preinstalledDependencies.forEach(dep=>{if(returnedDependencies[dep]){delete returnedDependencies[dep];}});return returnedDependencies;}function initializeManager(_x,_x2,_x3,_x4){return _initializeManager.apply(this,arguments);}function _initializeManager(){_initializeManager=asyncToGenerator_default()(function*(sandboxId,template,modules,configurations){let _ref=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{},_ref$hasFileResolver=_ref.hasFileResolver,hasFileResolver=_ref$hasFileResolver===void 0?false:_ref$hasFileResolver,_ref$customNpmRegistr=_ref.customNpmRegistries,customNpmRegistries=_ref$customNpmRegistr===void 0?[]:_ref$customNpmRegistr,reactDevTools=_ref.reactDevTools,teamId=_ref.teamId;const newManager=new lib["a" /* Manager */](sandboxId,yield getPreset(template,configurations.package.parsed),modules,{hasFileResolver,versionIdentifier:sandbox["SCRIPT_VERSION"],reactDevTools});/**
   * If a team-id is provided, we can mount a registryUrl and proxy
   * dependencies request through CSB proxy
   */if(teamId){const sandpackToken=Object(sandpack_secret["b" /* getSandpackSecret */])();if(!sandpackToken){Object(codesandbox_es5["dispatch"])({type:'action',action:'show-error',message:'NPM_REGISTRY_UNAUTHENTICATED_REQUEST'});throw new Error('NPM_REGISTRY_UNAUTHENTICATED_REQUEST');}const domain=Object(sandpack_secret["a" /* getProtocolAndHostWithSSE */])();const responseRegistry=yield fetch("".concat(domain,"/api/v1/sandpack/registry"),{headers:{Authorization:"Bearer ".concat(sandpackToken)}}).catch(()=>{Object(sandpack_secret["c" /* removeSandpackSecret */])();throw new Error('NPM_REGISTRY_UNAUTHENTICATED_REQUEST');});const registry=yield responseRegistry.json();customNpmRegistries.push({enabledScopes:registry.enabled_scopes,limitToScopes:registry.limit_to_scopes,proxyEnabled:registry.proxy_enabled,registryUrl:registry.registry_url||"".concat(domain,"/api/v1/sandpack/registry/"),registryAuthToken:registry.registry_auth_key||sandpackToken,registryAuthType:registry.auth_type});}// Add the custom registered npm registries
for(const registry of customNpmRegistries){if(!registry.registryUrl){throw new Error('Unable to fetch required dependency: neither a `registryUrl` nor a `codesandboxTeamId` was provided.');}const cleanUrl=registry.registryUrl.replace(/\/$/,'');const options={proxyEnabled:registry.proxyEnabled};if(registry.limitToScopes){options.scopeWhitelist=registry.enabledScopes;}// In case the API is not including the field yet
if(typeof registry.proxyEnabled==='undefined'){registry.proxyEnabled=true;}if(registry.proxyEnabled){// With our custom proxy on the server we want to handle downloading
// the tarball. So we proxy it.
options.provideTarballUrl=(name,version)=>"".concat(cleanUrl,"/").concat(name.replace('/','%2f'),"/").concat(version);}if(registry.registryAuthToken){options.authToken=registry.registryAuthToken;}const protocol=new npm_registry_NpmRegistryFetcher(cleanUrl,options);newManager.prependNpmProtocolDefinition({protocol,condition:protocol.condition});}return newManager;});return _initializeManager.apply(this,arguments);}function updateManager(_x5,_x6){return _updateManager.apply(this,arguments);}function _updateManager(){_updateManager=asyncToGenerator_default()(function*(managerModules,configurations){compile_manager.updateConfigurations(configurations);yield compile_manager.preset.setup(compile_manager);return compile_manager.updateData(managerModules).then(x=>{changedModuleCount=x.length;return x;});});return _updateManager.apply(this,arguments);}function getDocumentHeight(){const _document=document,body=_document.body;const html=document.documentElement;return Math.max(body.scrollHeight,body.offsetHeight,html.offsetHeight);}function sendResize(){const height=getDocumentHeight();if(lastHeight!==height){Object(codesandbox_es5["dispatch"])({type:'resize',height});}lastHeight=height;}function initializeDOMMutationListener(){if(typeof window==='undefined'||typeof window.MutationObserver!=='function'){return;}// Listen on document body for any change that could trigger a resize of the content
// When a change is found, the sendResize function will determine if a message is dispatched
const observer=new MutationObserver(sendResize);observer.observe(document,{attributes:true,childList:true,subtree:true});window.addEventListener('unload',()=>{observer.disconnect();});}let resizePollingTimer;function resizePolling(){clearInterval(resizePollingTimer);resizePollingTimer=setInterval(sendResize,500);window.addEventListener('unload',()=>{clearInterval(resizePollingTimer);});}function onWindowResize(){window.addEventListener('resize',sendResize);window.addEventListener('unload',()=>{window.removeEventListener('resize',sendResize);});}function overrideDocumentClose(){const oldClose=window.document.close;window.document.close=function close(){try{for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}oldClose.call(document,args);}finally{Object(overlay["inject"])();Object(codesandbox_es5["reattach"])();}};}overrideDocumentClose();function compile(_x7){return _compile.apply(this,arguments);}function _compile(){_compile=asyncToGenerator_default()(function*(opts){const sandboxId=opts.sandboxId,modules=opts.modules,externalResources=opts.externalResources,_opts$customNpmRegist=opts.customNpmRegistries,customNpmRegistries=_opts$customNpmRegist===void 0?[]:_opts$customNpmRegist,hasActions=opts.hasActions,_opts$isModuleView=opts.isModuleView,isModuleView=_opts$isModuleView===void 0?false:_opts$isModuleView,template=opts.template,entry=opts.entry,showOpenInCodeSandbox=opts.showOpenInCodeSandbox,_opts$showLoadingScre=opts.showLoadingScreen,showLoadingScreen=_opts$showLoadingScre===void 0?true:_opts$showLoadingScre,_opts$showErrorScreen=opts.showErrorScreen,showErrorScreen=_opts$showErrorScreen===void 0?true:_opts$showErrorScreen,_opts$skipEval=opts.skipEval,skipEval=_opts$skipEval===void 0?false:_opts$skipEval,_opts$hasFileResolver=opts.hasFileResolver,hasFileResolver=_opts$hasFileResolver===void 0?false:_opts$hasFileResolver,_opts$disableDependen=opts.disableDependencyPreprocessing,disableDependencyPreprocessing=_opts$disableDependen===void 0?false:_opts$disableDependen,_opts$clearConsoleDis=opts.clearConsoleDisabled,clearConsoleDisabled=_opts$clearConsoleDis===void 0?false:_opts$clearConsoleDis,reactDevTools=opts.reactDevTools,teamId=opts.teamId,_opts$experimental_en=opts.experimental_enableServiceWorker,experimental_enableServiceWorker=_opts$experimental_en===void 0?false:_opts$experimental_en;if(experimental_enableServiceWorker){yield startServiceWorker();}if(firstLoad){// Clear the console on first load, but don't clear the console on HMR updates
if(!clearConsoleDisabled){// @ts-ignore Chrome behaviour
console.clear('__internal__');// eslint-disable-line no-console
Object(codesandbox_es5["dispatch"])({type:'clear-console'});}}Object(codesandbox_es5["dispatch"])({type:'start',firstLoad});metrics["measure"]('compilation');const startTime=Date.now();try{Object(overlay["uninject"])(compile_manager&&compile_manager.webpackHMR?true:hadError);Object(overlay["inject"])(showErrorScreen);Object(codesandbox_es5["clearErrorTransformers"])();transformers_default()();}catch(e){console.error(e);}hadError=false;actionsEnabled=hasActions;let managerModuleToTranspile=null;try{const templateDefinition=templates_default()(template);const configurations=parse_default()(template,templateDefinition.configurationFiles,path=>modules[path]);const errors=Object.keys(configurations).map(c=>configurations[c]).filter(x=>x.error);if(errors.length){const e=new Error("We weren't able to parse: '".concat(errors[0].path,"': ").concat(errors[0].error.message));// @ts-ignore
e.fileName=errors[0].path;throw e;}const packageJSON=modules['/package.json'];if(!packageJSON){throw new Error('Could not find package.json');}const parsedPackageJSON=configurations.package.parsed;Object(codesandbox_es5["dispatch"])({type:'status',status:'installing-dependencies'});compile_manager=compile_manager||(yield initializeManager(sandboxId,template,modules,configurations,{hasFileResolver,customNpmRegistries,reactDevTools,teamId}));let dependencies=getDependencies(parsedPackageJSON,templateDefinition,configurations);Object(codesandbox_es5["dispatch"])({type:'dependencies',data:{state:'downloading_manifest'}});dependencies=yield compile_manager.preset.processDependencies(dependencies);metrics["measure"]('dependencies');if(firstLoad&&showLoadingScreen){setScreen({type:'loading',showFullScreen:firstLoad,text:'Installing Dependencies'});}const _yield$loadDependenci=yield loadDependencies(dependencies,_ref2=>{let done=_ref2.done,total=_ref2.total,remainingDependencies=_ref2.remainingDependencies,dependencyName=_ref2.dependencyName;Object(codesandbox_es5["dispatch"])({type:'dependencies',data:{state:'downloaded_module',total,progress:done,name:dependencyName}});if(!showLoadingScreen){return;}const progress=total-done;if(done===total){return;}if(progress<=6){setScreen({type:'loading',showFullScreen:firstLoad,text:"Installing Dependencies ".concat(progress,"/").concat(total," (").concat(remainingDependencies.join(','),")")});}else{setScreen({type:'loading',showFullScreen:firstLoad,text:"Installing Dependencies ".concat(progress,"/").concat(total)});}},{disableExternalConnection:disableDependencyPreprocessing,resolutions:parsedPackageJSON.resolutions}),manifest=_yield$loadDependenci.manifest,isNewCombination=_yield$loadDependenci.isNewCombination;metrics["endMeasure"]('dependencies',{displayName:'Dependencies'});const shouldReloadManager=isNewCombination&&!firstLoad||compile_manager.id!==sandboxId;if(shouldReloadManager){// Just reset the whole manager if it's a new combination
compile_manager.dispose();compile_manager=yield initializeManager(sandboxId,template,modules,configurations,{hasFileResolver,reactDevTools});}if(shouldReloadManager||firstLoad){// Now initialize the data the manager can only use once dependencies are loaded
compile_manager.setManifest(manifest);// We save the state of transpiled modules, and load it here again. Gives
// faster initial loads.
usedCache=yield Object(cache["b" /* consumeCache */])(compile_manager);}metrics["measure"]('transpilation');const updatedModules=(yield updateManager(modules,configurations))||[];const possibleEntries=templateDefinition.getEntries(configurations);const foundMain=isModuleView?entry:possibleEntries.find(p=>Boolean(modules[p]));if(!foundMain){throw new Error("Could not find entry file: ".concat(possibleEntries[0],". You can specify one in package.json by defining a `main` property."));}const main=Object(utils_path["absolute"])(foundMain);managerModuleToTranspile=modules[main];if(showLoadingScreen){setScreen({type:'loading',text:'Transpiling Modules...',showFullScreen:firstLoad});}Object(codesandbox_es5["dispatch"])({type:'dependencies',data:{state:'starting'}});Object(codesandbox_es5["dispatch"])({type:'status',status:'transpiling'});compile_manager.setStage('transpilation');yield compile_manager.verifyTreeTranspiled();yield compile_manager.transpileModules(managerModuleToTranspile);metrics["endMeasure"]('transpilation',{displayName:'Transpilation'});Object(codesandbox_es5["dispatch"])({type:'status',status:'evaluating'});compile_manager.setStage('evaluation');if(!skipEval){resetScreen();try{// We set it as a time value for people that run two sandboxes on one computer
// they execute at the same time and we don't want them to conflict, so we check
// if the message was set a second ago
if(firstLoad&&localStorage.getItem('running')&&Date.now()-+localStorage.getItem('running')>8000&&!true){localStorage.removeItem('running');showRunOnClick();return;}localStorage.setItem('running',''+Date.now());}catch(e){/* no */}yield compile_manager.preset.preEvaluate(compile_manager,updatedModules);if(!compile_manager.webpackHMR){const htmlEntries=templateDefinition.getHTMLEntries(configurations);const htmlModulePath=htmlEntries.find(p=>Boolean(modules[p]));const htmlModule=modules[htmlModulePath];let html=template==='vue-cli'?'<div id="app"></div>':'<div id="root"></div>';if(htmlModule&&htmlModule.code){html=htmlModule.code;}const _getHTMLParts=getHTMLParts(html),head=_getHTMLParts.head,body=_getHTMLParts.body;if(lastHeadHTML&&lastHeadHTML!==head){document.location.reload();}if(compile_manager&&lastBodyHTML&&lastBodyHTML!==body){compile_manager.clearCompiledCache();}// Whether the server has provided the HTML file. If that isn't the case
// we have to fall back to setting `document.body.innerHTML`, which isn't
// preferred.
const serverProvidedHTML=modules[htmlEntries[0]]||compile_manager.preset.htmlDisabled;// If it has the loading screen element, it definitely didn't server-render
const isLoadingScreen=Boolean(document.getElementById('csb-loading-screen'));if(!serverProvidedHTML||!firstLoad||isLoadingScreen||false||true){// The HTML is loaded from the server as a static file, no need to set the innerHTML of the body
// on the first run. However, if there's no server to provide the static file (in the case of a local server
// or sandpack), then do it anyways.
document.body.innerHTML=body;// Add head tags or anything that comes from the template
// This way, title and other meta tags will overwrite whatever the bundler <head> tag has.
// At this point, the original head was parsed and the files loaded / preloaded.
// TODO: figure out a way to fix this without overriding head changes done by the bundler
// Original issue: https://github.com/codesandbox/sandpack/issues/32
// if (document.head && head) {
//   document.head.innerHTML = head;
// }
}lastBodyHTML=body;lastHeadHTML=head;}metrics["measure"]('external-resources');yield handleExternalResources(externalResources);metrics["endMeasure"]('external-resources',{displayName:'External Resources'});const oldHTML=document.body.innerHTML;metrics["measure"]('evaluation');const evalled=compile_manager.evaluateModule(managerModuleToTranspile,{force:isModuleView});metrics["endMeasure"]('evaluation',{displayName:'Evaluation'});const domChanged=!compile_manager.preset.htmlDisabled&&oldHTML!==document.body.innerHTML;if(isModuleView&&!domChanged&&!managerModuleToTranspile.path.endsWith('.html')){const isReact=managerModuleToTranspile.code&&managerModuleToTranspile.code.includes('React');if(isReact&&evalled){// initiate boilerplates
if(getBoilerplates().length===0){try{yield evalBoilerplates(default_boilerplates);}catch(e){// eslint-disable-next-line no-console
console.log("Couldn't load all boilerplates: "+e.message);}}const boilerplate=findBoilerplate(managerModuleToTranspile);if(boilerplate){try{boilerplate.module.default(evalled);}catch(e){console.error(e);}}}}}yield compile_manager.preset.teardown(compile_manager,updatedModules);if(firstLoad&&showOpenInCodeSandbox){createOverlay(modules);}compile_debug("Total time: ".concat(Date.now()-startTime,"ms"));metrics["endMeasure"]('compilation',{displayName:'Compilation'});metrics["endMeasure"]('total',{displayName:'Total',lastTime:0});Object(codesandbox_es5["dispatch"])({type:'success'});Object(cache["e" /* saveCache */])(managerModuleToTranspile,compile_manager,changedModuleCount,firstLoad);setTimeout(/*#__PURE__*/asyncToGenerator_default()(function*(){try{const jestLiteModule=yield Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, "./src/sandbox/eval/tests/jest-lite.ts"));const TestRunner=jestLiteModule.default;testRunner=testRunner||new TestRunner(compile_manager);sendTestCount(modules);}catch(e){if(false){}}}),600);}catch(e){// eslint-disable-next-line no-console
console.log('Error in sandbox:');console.error(e);if(compile_manager){compile_manager.clearCache();if(firstLoad&&changedModuleCount===0){yield Object(cache["c" /* deleteAPICache */])(compile_manager.id,sandbox["SCRIPT_VERSION"]);}}const event=new Event('error');// @ts-ignore
event.error=e;window.dispatchEvent(event);hadError=true;}finally{setTimeout(()=>{try{// Set a timeout so there's a chance that we also catch runtime errors
localStorage.removeItem('running');}catch(e){/* no */}},600);if(compile_manager){const managerState=compile_objectSpread({},yield compile_manager.serialize({optimizeForSize:false}));delete managerState.cachedPaths;managerState.entry=managerModuleToTranspile?managerModuleToTranspile.path:null;Object(codesandbox_es5["dispatch"])({type:'state',state:managerState});compile_manager.isFirstLoad=false;}if(firstLoad){metrics["persistMeasurements"]({sandboxId,cacheUsed:usedCache,browser:navigator.userAgent,version:version_default.a}).catch(()=>{/* Do nothing with the error */});}}if(!hadError&&firstLoad){initializeDOMMutationListener();}onWindowResize();resizePolling();sendResize();firstLoad=false;Object(codesandbox_es5["dispatch"])({type:'status',status:'idle'});Object(codesandbox_es5["dispatch"])({type:'done',compilatonError:hadError});if(typeof window.__puppeteer__==='function'){setTimeout(()=>{// Give everything some time to evaluate
window.__puppeteer__({type:'done',compilatonError:hadError});},100);}});return _compile.apply(this,arguments);}const tasks=[];let runningTask=null;function executeTaskIfAvailable(){return _executeTaskIfAvailable.apply(this,arguments);}/**
 * We want to ensure that no tasks (commands from the editor) are run in parallel,
 * this could result in state inconsistency. That's why we execute tasks after eachother,
 * and if there are 3 tasks we will remove the second task, this one is unnecessary as it is not the
 * latest version.
 */function _executeTaskIfAvailable(){_executeTaskIfAvailable=asyncToGenerator_default()(function*(){if(tasks.length){runningTask=tasks.pop();yield compile(runningTask).catch(console.error);runningTask=null;executeTaskIfAvailable();}});return _executeTaskIfAvailable.apply(this,arguments);}function queueTask(data){// If same task is running, ignore it.
if(runningTask&&JSON.stringify(runningTask)===JSON.stringify(data)){return;}tasks[0]=data;if(!runningTask){executeTaskIfAvailable();}}

/***/ }),

/***/ "./src/sandbox/eval/transpilers/base64/mimes.json":
/***/ (function(module) {

module.exports = JSON.parse("{\"bmp\":\"image/x-ms-bmp\",\"cgm\":\"image/cgm\",\"g3\":\"image/g3fax\",\"gif\":\"image/gif\",\"ief\":\"image/ief\",\"jpeg\":\"image/jpeg\",\"jpg\":\"image/jpeg\",\"jpe\":\"image/jpeg\",\"ktx\":\"image/ktx\",\"png\":\"image/png\",\"btif\":\"image/prs.btif\",\"sgi\":\"image/sgi\",\"svg\":\"image/svg+xml\",\"svgz\":\"image/svg+xml\",\"tiff\":\"image/tiff\",\"tif\":\"image/tiff\",\"psd\":\"image/vnd.adobe.photoshop\",\"uvi\":\"image/vnd.dece.graphic\",\"uvvi\":\"image/vnd.dece.graphic\",\"uvg\":\"image/vnd.dece.graphic\",\"uvvg\":\"image/vnd.dece.graphic\",\"djvu\":\"image/vnd.djvu\",\"djv\":\"image/vnd.djvu\",\"sub\":\"image/vnd.dvb.subtitle\",\"dwg\":\"image/vnd.dwg\",\"dxf\":\"image/vnd.dxf\",\"fbs\":\"image/vnd.fastbidsheet\",\"fpx\":\"image/vnd.fpx\",\"fst\":\"image/vnd.fst\",\"mmr\":\"image/vnd.fujixerox.edmics-mmr\",\"rlc\":\"image/vnd.fujixerox.edmics-rlc\",\"txt\":\"text/plain\",\"md\":\"text/plain\",\"mdi\":\"image/vnd.ms-modi\",\"wdp\":\"image/vnd.ms-photo\",\"npx\":\"image/vnd.net-fpx\",\"wbmp\":\"image/vnd.wap.wbmp\",\"xif\":\"image/vnd.xiff\",\"webp\":\"image/webp\",\"3ds\":\"image/x-3ds\",\"ras\":\"image/x-cmu-raster\",\"cmx\":\"image/x-cmx\",\"fh\":\"image/x-freehand\",\"fhc\":\"image/x-freehand\",\"fh4\":\"image/x-freehand\",\"fh5\":\"image/x-freehand\",\"fh7\":\"image/x-freehand\",\"ico\":\"image/x-icon\",\"jng\":\"image/x-jng\",\"sid\":\"image/x-mrsid-image\",\"pcx\":\"image/x-pcx\",\"pic\":\"image/x-pict\",\"pct\":\"image/x-pict\",\"pnm\":\"image/x-portable-anymap\",\"pbm\":\"image/x-portable-bitmap\",\"pgm\":\"image/x-portable-graymap\",\"ppm\":\"image/x-portable-pixmap\",\"rgb\":\"image/x-rgb\",\"tga\":\"image/x-tga\",\"xbm\":\"image/x-xbitmap\",\"xpm\":\"image/x-xpixmap\",\"xwd\":\"image/x-xwindowdump\"}");

/***/ }),

/***/ "./src/sandbox/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCRIPT_VERSION", function() { return SCRIPT_VERSION; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var humps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/humps/humps.js");
/* harmony import */ var humps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(humps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var codesandbox_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../codesandbox-api/dist/codesandbox.es5.js");
/* harmony import */ var _codesandbox_common_lib_utils_debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../common/lib/utils/debug.js");
/* harmony import */ var _codesandbox_common_lib_utils_debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_codesandbox_common_lib_utils_debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _codesandbox_common_lib_registerServiceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../common/lib/registerServiceWorker.js");
/* harmony import */ var _codesandbox_common_lib_registerServiceWorker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_codesandbox_common_lib_registerServiceWorker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _codesandbox_common_lib_load_dynamic_polyfills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../common/lib/load-dynamic-polyfills.js");
/* harmony import */ var _codesandbox_common_lib_load_dynamic_polyfills__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_codesandbox_common_lib_load_dynamic_polyfills__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _codesandbox_common_lib_sandbox_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../common/lib/sandbox/modules.js");
/* harmony import */ var _codesandbox_common_lib_sandbox_modules__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_codesandbox_common_lib_sandbox_modules__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _codesandbox_common_lib_utils_metrics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../common/lib/utils/metrics.js");
/* harmony import */ var _codesandbox_common_lib_utils_metrics__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_codesandbox_common_lib_utils_metrics__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _codesandbox_common_lib_templates_configuration_package_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../common/lib/templates/configuration/package-json/index.js");
/* harmony import */ var _codesandbox_common_lib_templates_configuration_package_json__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_codesandbox_common_lib_templates_configuration_package_json__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _codesandbox_common_lib_utils_url_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../common/lib/utils/url-generator.js");
/* harmony import */ var _codesandbox_common_lib_utils_url_generator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_codesandbox_common_lib_utils_url_generator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var sandbox_hooks_preview_secret__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../sandbox-hooks/preview-secret.js");
/* harmony import */ var sandbox_hooks_preview_secret__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sandbox_hooks_preview_secret__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var sandbox_hooks_not_found_screen__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../sandbox-hooks/not-found-screen/index.js");
/* harmony import */ var sandbox_hooks_not_found_screen__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sandbox_hooks_not_found_screen__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var sandpack_core_lib_sandpack_secret__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../sandpack-core/lib/sandpack-secret.js");
/* harmony import */ var _compile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/sandbox/compile.ts");
const withServiceWorker=!true;const debug=_codesandbox_common_lib_utils_debug__WEBPACK_IMPORTED_MODULE_3___default()('cs:sandbox');const SCRIPT_VERSION=// @ts-ignore
document.currentScript&&document.currentScript.src;debug('Booting sandbox v2');Object(_codesandbox_common_lib_utils_metrics__WEBPACK_IMPORTED_MODULE_7__["endMeasure"])('boot',{lastTime:0,displayName:'Boot'});_codesandbox_common_lib_load_dynamic_polyfills__WEBPACK_IMPORTED_MODULE_5___default()().then(()=>{if(withServiceWorker){_codesandbox_common_lib_registerServiceWorker__WEBPACK_IMPORTED_MODULE_4___default()('/sandbox-service-worker.js',{});}function sendReady(){Object(codesandbox_api__WEBPACK_IMPORTED_MODULE_2__["dispatch"])({type:'initialized',url:document.location.href});}let isInitializationCompile=true;function handleMessage(_x,_x2){return _handleMessage.apply(this,arguments);}function _handleMessage(){_handleMessage=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(function*(data,source){if(source){if(data.type==='compile'){// In sandpack we always broadcast a compile message from every manager whenever 1 frame reconnects.
// We do this because the initialized message does comes before the handshake is done, so there's no channel id.
// To prevent every mounted frame from recompiling, we explicitly flag that this compilation is meant to be the
// first compilation done by the frame. This way we can ensure that only the new frame, that
// hasn't compiled yet, will respond to the compile call. This currently is Sandpack specific.
if(data.isInitializationCompile!==undefined&&data.isInitializationCompile===true&&!isInitializationCompile){return;}Object(_compile__WEBPACK_IMPORTED_MODULE_13__["default"])(data);isInitializationCompile=false;}else if(data.type==='get-transpiler-context'){const manager=Object(_compile__WEBPACK_IMPORTED_MODULE_13__["getCurrentManager"])();if(manager){const context=yield manager.getTranspilerContext();Object(codesandbox_api__WEBPACK_IMPORTED_MODULE_2__["dispatch"])({type:'transpiler-context',data:context});}else{Object(codesandbox_api__WEBPACK_IMPORTED_MODULE_2__["dispatch"])({type:'transpiler-context',data:{}});}}else if(data.type==='get-modules'){const manager=Object(_compile__WEBPACK_IMPORTED_MODULE_13__["getCurrentManager"])();if(manager){Object(codesandbox_api__WEBPACK_IMPORTED_MODULE_2__["dispatch"])({type:'all-modules',data:manager.getModules()});}}else if(data.type==='sign-in'){yield Object(sandpack_core_lib_sandpack_secret__WEBPACK_IMPORTED_MODULE_12__[/* requestSandpackSecretFromApp */ "d"])(data.teamId);window.location.reload();}else if(data.type==='sign-out'){Object(sandpack_core_lib_sandpack_secret__WEBPACK_IMPORTED_MODULE_12__[/* removeSandpackSecret */ "c"])();window.location.reload();}}});return _handleMessage.apply(this,arguments);}if(!codesandbox_api__WEBPACK_IMPORTED_MODULE_2__["isStandalone"]){Object(codesandbox_api__WEBPACK_IMPORTED_MODULE_2__["listen"])(handleMessage);sendReady();}if( false||codesandbox_api__WEBPACK_IMPORTED_MODULE_2__["isStandalone"]){// We need to fetch the sandbox ourselves...
const id=Object(_codesandbox_common_lib_utils_url_generator__WEBPACK_IMPORTED_MODULE_9__["getSandboxId"])();window.fetch("/api/v1/sandboxes/".concat(id),{headers:{Accept:'application/json',Authorization:"Basic ".concat(Object(sandbox_hooks_preview_secret__WEBPACK_IMPORTED_MODULE_10__["getPreviewSecret"])())},credentials:'include',mode:'cors'}).then(res=>{if(res.status===404){Object(sandbox_hooks_not_found_screen__WEBPACK_IMPORTED_MODULE_11__["show404"])(id);}return res.json();}).then(res=>{const camelized=Object(humps__WEBPACK_IMPORTED_MODULE_1__["camelizeKeys"])(res);camelized.data.npmDependencies=res.data.npm_dependencies;return camelized;}).then(x=>{const moduleObject={};// We convert the modules to a format the manager understands
x.data.modules.forEach(m=>{const path=Object(_codesandbox_common_lib_sandbox_modules__WEBPACK_IMPORTED_MODULE_6__["getModulePath"])(x.data.modules,x.data.directories,m.id);moduleObject[path]={path,code:m.code};});if(!moduleObject['/package.json']){moduleObject['/package.json']={code:Object(_codesandbox_common_lib_templates_configuration_package_json__WEBPACK_IMPORTED_MODULE_8__["generateFileFromSandbox"])(x.data),path:'/package.json'};}const data={sandboxId:id,modules:moduleObject,entry:'/'+x.data.entry,externalResources:x.data.externalResources,dependencies:x.data.npmDependencies,customNpmRegistries:x.data.npmRegistries,hasActions:false,template:x.data.template,version:3,disableDependencyPreprocessing:document.location.search.includes('csb-dynamic-download')};Object(_compile__WEBPACK_IMPORTED_MODULE_13__["default"])(data);});}});/**
 * For tracking purpose
 */document.addEventListener('click',()=>{Object(codesandbox_api__WEBPACK_IMPORTED_MODULE_2__["dispatch"])({type:'document-focus'});});

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./config/polyfills.js");
module.exports = __webpack_require__("./src/sandbox/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=sandbox.bc8b2ff8b.js.map