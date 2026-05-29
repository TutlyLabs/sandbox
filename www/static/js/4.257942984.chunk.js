(this["csbJsonP"] = this["csbJsonP"] || []).push([[4],{

/***/ "../sandbox-hooks/html2canvas-lib/core/bitwise.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.contains = void 0;const contains = (bit, value) => (bit & value) !== 0;_exports.contains = contains;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/core/cache-storage.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/core/features.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/core/logger.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _asyncToGenerator2, _features, _logger) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.CacheStorage = _exports.Cache = void 0;_asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);


  class CacheStorage {
    static create(name, options) {
      return CacheStorage._caches[name] = new Cache(name, options);
    }

    static destroy(name) {
      delete CacheStorage._caches[name];
    }

    static open(name) {
      const cache = CacheStorage._caches[name];
      if (typeof cache !== 'undefined') {
        return cache;
      }
      throw new Error("Cache with key \"".concat(name, "\" not found"));
    }

    static getOrigin(url) {
      const link = CacheStorage._link;
      if (!link) {
        return 'about:blank';
      }
      link.href = url;
      link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
      return link.protocol + link.hostname + link.port;
    }

    static isSameOrigin(src) {
      return CacheStorage.getOrigin(src) === CacheStorage._origin;
    }

    static setContext(window) {
      CacheStorage._link = window.document.createElement('a');
      CacheStorage._origin = CacheStorage.getOrigin(window.location.href);
    }

    static getInstance() {
      const current = CacheStorage._current;
      if (current === null) {
        throw new Error("No cache instance attached");
      }
      return current;
    }

    static attachInstance(cache) {
      CacheStorage._current = cache;
    }

    static detachInstance() {
      CacheStorage._current = null;
    }
  }_exports.CacheStorage = CacheStorage;
  CacheStorage._caches = {};
  CacheStorage._origin = 'about:blank';
  CacheStorage._current = null;
  class Cache {
    constructor(id, options) {
      this.id = id;
      this._options = options;
      this._cache = {};
    }

    addImage(src) {
      const result = Promise.resolve();
      if (this.has(src)) {
        return result;
      }
      if (isBlobImage(src) || isRenderable(src)) {
        this._cache[src] = this.loadImage(src);
        return result;
      }
      return result;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    match(src) {
      return this._cache[src];
    }

    loadImage(key) {var _this = this;return (0, _asyncToGenerator2.default)(function* () {
        const isSameOrigin = CacheStorage.isSameOrigin(key);
        const useCORS =
        // MODIFY: Use Boolean to check for either "true" or a function
        !isInlineImage(key) && _this._options.useCORS(isSameOrigin) && _features.FEATURES.SUPPORT_CORS_IMAGES;
        const useProxy = !isInlineImage(key) &&
        !isSameOrigin &&
        typeof _this._options.proxy === 'string' &&
        _features.FEATURES.SUPPORT_CORS_XHR &&
        !useCORS;
        if (!isSameOrigin && _this._options.allowTaint === false && !isInlineImage(key) && !useProxy && !useCORS) {
          return;
        }
        let src = key;

        if (useProxy) {
          src = yield _this.proxy(src);
        }

        _logger.Logger.getInstance(_this.id).debug("Added image ".concat(key.substring(0, 256)));
        return yield new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          // ios safari 10.3 taints canvas with data urls unless crossOrigin is set to anonymous
          if (isInlineBase64Image(src) ||
          // MODIFY: Check for function and evaluate
          typeof _this._options.useCORS === 'function' && _this._options.useCORS(isSameOrigin) ||
          useCORS) {
            img.crossOrigin = 'anonymous';
          }
          img.src = src;
          if (img.complete === true) {
            // Inline XML images may fail to parse, throwing an Error later on
            setTimeout(() => resolve(img), 500);
          }
          if (_this._options.imageTimeout > 0) {
            setTimeout(() => reject("Timed out (".concat(_this._options.imageTimeout, "ms) loading image")), _this._options.imageTimeout);
          }
        });})();
    }

    has(key) {
      return typeof this._cache[key] !== 'undefined';
    }

    keys() {
      return Promise.resolve(Object.keys(this._cache));
    }

    proxy(src) {
      const proxy = this._options.proxy;
      if (!proxy) {
        throw new Error('No proxy defined');
      }
      const key = src.substring(0, 256);
      return new Promise((resolve, reject) => {
        const responseType = _features.FEATURES.SUPPORT_RESPONSE_TYPE ? 'blob' : 'text';
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
          if (xhr.status === 200) {
            if (responseType === 'text') {
              resolve(xhr.response);
            } else
            {
              const reader = new FileReader();
              reader.addEventListener('load', () => resolve(reader.result), false);
              reader.addEventListener('error', (e) => reject(e), false);
              reader.readAsDataURL(xhr.response);
            }
          } else
          {
            reject("Failed to proxy resource ".concat(key, " with status code ").concat(xhr.status));
          }
        };
        xhr.onerror = reject;
        xhr.open('GET', "".concat(proxy, "?url=").concat(encodeURIComponent(src), "&responseType=").concat(responseType));
        if (responseType !== 'text' && xhr instanceof XMLHttpRequest) {
          xhr.responseType = responseType;
        }
        if (this._options.imageTimeout) {
          const timeout = this._options.imageTimeout;
          xhr.timeout = timeout;
          xhr.ontimeout = () => reject("Timed out (".concat(timeout, "ms) proxying ").concat(key));
        }
        xhr.send();
      });
    }
  }_exports.Cache = Cache;
  const INLINE_SVG = /^data:image\/svg\+xml/i;
  const INLINE_BASE64 = /^data:image\/.*;base64,/i;
  const INLINE_IMG = /^data:image\/.*/i;
  const isRenderable = (src) => _features.FEATURES.SUPPORT_SVG_DRAWING || !isSVG(src);
  const isInlineImage = (src) => INLINE_IMG.test(src);
  const isInlineBase64Image = (src) => INLINE_BASE64.test(src);
  const isBlobImage = (src) => src.substr(0, 4) === 'blob';
  const isSVG = (src) => src.substr(-3).toLowerCase() === 'svg' || INLINE_SVG.test(src);});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/core/features.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.loadSerializedSVG = _exports.createForeignObjectSVG = _exports.FEATURES = void 0;const testRangeBounds = (document) => {
    const TEST_HEIGHT = 123;
    if (document.createRange) {
      const range = document.createRange();
      if (range.getBoundingClientRect) {
        const testElement = document.createElement('boundtest');
        testElement.style.height = "".concat(TEST_HEIGHT, "px");
        testElement.style.display = 'block';
        document.body.appendChild(testElement);
        range.selectNode(testElement);
        const rangeBounds = range.getBoundingClientRect();
        const rangeHeight = Math.round(rangeBounds.height);
        document.body.removeChild(testElement);
        if (rangeHeight === TEST_HEIGHT) {
          return true;
        }
      }
    }
    return false;
  };
  const testCORS = () => typeof new Image().crossOrigin !== 'undefined';
  const testResponseType = () => typeof new XMLHttpRequest().responseType === 'string';
  const testSVG = (document) => {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return false;
    }
    img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      ctx.drawImage(img, 0, 0);
      canvas.toDataURL();
    }
    catch (e) {
      return false;
    }
    return true;
  };
  const isGreenPixel = (data) => data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
  const testForeignObject = (document) => {
    const canvas = document.createElement('canvas');
    const size = 100;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return Promise.reject(false);
    }
    ctx.fillStyle = 'rgb(0, 255, 0)';
    ctx.fillRect(0, 0, size, size);
    const img = new Image();
    const greenImageSrc = canvas.toDataURL();
    img.src = greenImageSrc;
    const svg = createForeignObjectSVG(size, size, 0, 0, img);
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, size, size);
    return loadSerializedSVG(svg).
    then((img) => {
      ctx.drawImage(img, 0, 0);
      const data = ctx.getImageData(0, 0, size, size).data;
      ctx.fillStyle = 'red';
      ctx.fillRect(0, 0, size, size);
      const node = document.createElement('div');
      node.style.backgroundImage = "url(".concat(greenImageSrc, ")");
      node.style.height = "".concat(size, "px");
      // Firefox 55 does not render inline <img /> tags
      return isGreenPixel(data) ?
      loadSerializedSVG(createForeignObjectSVG(size, size, 0, 0, node)) :
      Promise.reject(false);
    }).
    then((img) => {
      ctx.drawImage(img, 0, 0);
      // Edge does not render background-images
      return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
    }).
    catch(() => false);
  };
  const createForeignObjectSVG = (width, height, x, y, node) => {
    const xmlns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(xmlns, 'svg');
    const foreignObject = document.createElementNS(xmlns, 'foreignObject');
    svg.setAttributeNS(null, 'width', width.toString());
    svg.setAttributeNS(null, 'height', height.toString());
    foreignObject.setAttributeNS(null, 'width', '100%');
    foreignObject.setAttributeNS(null, 'height', '100%');
    foreignObject.setAttributeNS(null, 'x', x.toString());
    foreignObject.setAttributeNS(null, 'y', y.toString());
    foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');
    svg.appendChild(foreignObject);
    foreignObject.appendChild(node);
    return svg;
  };_exports.createForeignObjectSVG = createForeignObjectSVG;
  const loadSerializedSVG = (svg) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = "data:image/svg+xml;charset=utf-8,".concat(encodeURIComponent(new XMLSerializer().serializeToString(svg)));
    });
  };_exports.loadSerializedSVG = loadSerializedSVG;
  const FEATURES = _exports.FEATURES = {
    get SUPPORT_RANGE_BOUNDS() {
      'use strict';
      const value = testRangeBounds(document);
      Object.defineProperty(FEATURES, 'SUPPORT_RANGE_BOUNDS', { value });
      return value;
    },
    get SUPPORT_SVG_DRAWING() {
      'use strict';
      const value = testSVG(document);
      Object.defineProperty(FEATURES, 'SUPPORT_SVG_DRAWING', { value });
      return value;
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
      'use strict';
      const value = typeof Array.from === 'function' && typeof window.fetch === 'function' ?
      testForeignObject(document) :
      Promise.resolve(false);
      Object.defineProperty(FEATURES, 'SUPPORT_FOREIGNOBJECT_DRAWING', { value });
      return value;
    },
    get SUPPORT_CORS_IMAGES() {
      'use strict';
      const value = testCORS();
      Object.defineProperty(FEATURES, 'SUPPORT_CORS_IMAGES', { value });
      return value;
    },
    get SUPPORT_RESPONSE_TYPE() {
      'use strict';
      const value = testResponseType();
      Object.defineProperty(FEATURES, 'SUPPORT_RESPONSE_TYPE', { value });
      return value;
    },
    get SUPPORT_CORS_XHR() {
      'use strict';
      const value = ('withCredentials' in new XMLHttpRequest());
      Object.defineProperty(FEATURES, 'SUPPORT_CORS_XHR', { value });
      return value;
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/core/logger.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.Logger = void 0;class Logger {
    constructor(_ref) {let id = _ref.id,enabled = _ref.enabled;
      this.id = id;
      this.enabled = enabled;
      this.start = Date.now();
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    debug() {
      if (this.enabled) {for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
        // eslint-disable-next-line no-console
        if (typeof window !== 'undefined' && window.console && typeof console.debug === 'function') {
          // eslint-disable-next-line no-console
          console.debug(this.id, "".concat(this.getTime(), "ms"), ...args);
        } else
        {
          this.info(...args);
        }
      }
    }
    getTime() {
      return Date.now() - this.start;
    }
    static create(options) {
      Logger.instances[options.id] = new Logger(options);
    }
    static destroy(id) {
      delete Logger.instances[id];
    }
    static getInstance(id) {
      const instance = Logger.instances[id];
      if (typeof instance === 'undefined') {
        throw new Error("No logger instance found with id ".concat(id));
      }
      return instance;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    info() {
      if (this.enabled) {
        // eslint-disable-next-line no-console
        if (typeof window !== 'undefined' && window.console && typeof console.info === 'function') {for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {args[_key2] = arguments[_key2];}
          // eslint-disable-next-line no-console
          console.info(this.id, "".concat(this.getTime(), "ms"), ...args);
        }
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error() {
      if (this.enabled) {for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {args[_key3] = arguments[_key3];}
        // eslint-disable-next-line no-console
        if (typeof window !== 'undefined' && window.console && typeof console.error === 'function') {
          // eslint-disable-next-line no-console
          console.error(this.id, "".concat(this.getTime(), "ms"), ...args);
        } else
        {
          this.info(...args);
        }
      }
    }
  }_exports.Logger = Logger;
  Logger.instances = {};});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/core/util.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.SMALL_IMAGE = void 0;const SMALL_IMAGE = _exports.SMALL_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.PropertyDescriptorParsingType = void 0;var PropertyDescriptorParsingType;
  (function (PropertyDescriptorParsingType) {
    PropertyDescriptorParsingType[PropertyDescriptorParsingType["VALUE"] = 0] = "VALUE";
    PropertyDescriptorParsingType[PropertyDescriptorParsingType["LIST"] = 1] = "LIST";
    PropertyDescriptorParsingType[PropertyDescriptorParsingType["IDENT_VALUE"] = 2] = "IDENT_VALUE";
    PropertyDescriptorParsingType[PropertyDescriptorParsingType["TYPE_VALUE"] = 3] = "TYPE_VALUE";
    PropertyDescriptorParsingType[PropertyDescriptorParsingType["TOKEN_VALUE"] = 4] = "TOKEN_VALUE";
  })(PropertyDescriptorParsingType || (_exports.PropertyDescriptorParsingType = PropertyDescriptorParsingType = {}));});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/index.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/background-clip.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/background-color.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/background-image.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/background-origin.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/background-position.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/background-repeat.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/background-size.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/border-color.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/border-radius.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/border-style.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/border-width.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/color.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/display.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/float.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/letter-spacing.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/line-break.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/line-height.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/list-style-image.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/list-style-position.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/list-style-type.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/margin.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/overflow.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/overflow-wrap.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/padding.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/text-align.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/position.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/text-shadow.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/text-transform.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/transform.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/transform-origin.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/visibility.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/word-break.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/z-index.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/tokenizer.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/color.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/angle.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/image.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/opacity.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/text-decoration-color.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/text-decoration-line.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/length-percentage.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/font-family.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/font-size.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/length.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/font-weight.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/font-variant.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/font-style.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/core/bitwise.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/content.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/counter-increment.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/counter-reset.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/quotes.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/box-shadow.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor, _backgroundClip, _backgroundColor, _backgroundImage, _backgroundOrigin, _backgroundPosition, _backgroundRepeat, _backgroundSize, _borderColor, _borderRadius, _borderStyle, _borderWidth, _color, _display, _float, _letterSpacing, _lineBreak, _lineHeight, _listStyleImage, _listStylePosition, _listStyleType, _margin, _overflow, _overflowWrap, _padding, _textAlign, _position, _textShadow, _textTransform, _transform, _transformOrigin, _visibility, _wordBreak, _zIndex, _parser, _tokenizer, _color2, _angle, _image, _opacity, _textDecorationColor, _textDecorationLine, _lengthPercentage, _fontFamily, _fontSize, _length, _fontWeight, _fontVariant, _fontStyle, _bitwise, _content, _counterIncrement, _counterReset, _quotes, _boxShadow) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.CSSParsedPseudoDeclaration = _exports.CSSParsedDeclaration = _exports.CSSParsedCounterDeclaration = void 0;






















































  class CSSParsedDeclaration {
    constructor(declaration) {
      this.backgroundClip = parse(_backgroundClip.backgroundClip, declaration.backgroundClip);
      this.backgroundColor = parse(_backgroundColor.backgroundColor, declaration.backgroundColor);
      this.backgroundImage = parse(_backgroundImage.backgroundImage, declaration.backgroundImage);
      this.backgroundOrigin = parse(_backgroundOrigin.backgroundOrigin, declaration.backgroundOrigin);
      this.backgroundPosition = parse(_backgroundPosition.backgroundPosition, declaration.backgroundPosition);
      this.backgroundRepeat = parse(_backgroundRepeat.backgroundRepeat, declaration.backgroundRepeat);
      this.backgroundSize = parse(_backgroundSize.backgroundSize, declaration.backgroundSize);
      this.borderTopColor = parse(_borderColor.borderTopColor, declaration.borderTopColor);
      this.borderRightColor = parse(_borderColor.borderRightColor, declaration.borderRightColor);
      this.borderBottomColor = parse(_borderColor.borderBottomColor, declaration.borderBottomColor);
      this.borderLeftColor = parse(_borderColor.borderLeftColor, declaration.borderLeftColor);
      this.borderTopLeftRadius = parse(_borderRadius.borderTopLeftRadius, declaration.borderTopLeftRadius);
      this.borderTopRightRadius = parse(_borderRadius.borderTopRightRadius, declaration.borderTopRightRadius);
      this.borderBottomRightRadius = parse(_borderRadius.borderBottomRightRadius, declaration.borderBottomRightRadius);
      this.borderBottomLeftRadius = parse(_borderRadius.borderBottomLeftRadius, declaration.borderBottomLeftRadius);
      this.borderTopStyle = parse(_borderStyle.borderTopStyle, declaration.borderTopStyle);
      this.borderRightStyle = parse(_borderStyle.borderRightStyle, declaration.borderRightStyle);
      this.borderBottomStyle = parse(_borderStyle.borderBottomStyle, declaration.borderBottomStyle);
      this.borderLeftStyle = parse(_borderStyle.borderLeftStyle, declaration.borderLeftStyle);
      this.borderTopWidth = parse(_borderWidth.borderTopWidth, declaration.borderTopWidth);
      this.borderRightWidth = parse(_borderWidth.borderRightWidth, declaration.borderRightWidth);
      this.borderBottomWidth = parse(_borderWidth.borderBottomWidth, declaration.borderBottomWidth);
      this.borderLeftWidth = parse(_borderWidth.borderLeftWidth, declaration.borderLeftWidth);
      this.boxShadow = parse(_boxShadow.boxShadow, declaration.boxShadow);
      this.color = parse(_color.color, declaration.color);
      this.display = parse(_display.display, declaration.display);
      this.float = parse(_float.float, declaration.cssFloat);
      this.fontFamily = parse(_fontFamily.fontFamily, declaration.fontFamily);
      this.fontSize = parse(_fontSize.fontSize, declaration.fontSize);
      this.fontStyle = parse(_fontStyle.fontStyle, declaration.fontStyle);
      this.fontVariant = parse(_fontVariant.fontVariant, declaration.fontVariant);
      this.fontWeight = parse(_fontWeight.fontWeight, declaration.fontWeight);
      this.letterSpacing = parse(_letterSpacing.letterSpacing, declaration.letterSpacing);
      this.lineBreak = parse(_lineBreak.lineBreak, declaration.lineBreak);
      this.lineHeight = parse(_lineHeight.lineHeight, declaration.lineHeight);
      this.listStyleImage = parse(_listStyleImage.listStyleImage, declaration.listStyleImage);
      this.listStylePosition = parse(_listStylePosition.listStylePosition, declaration.listStylePosition);
      this.listStyleType = parse(_listStyleType.listStyleType, declaration.listStyleType);
      this.marginTop = parse(_margin.marginTop, declaration.marginTop);
      this.marginRight = parse(_margin.marginRight, declaration.marginRight);
      this.marginBottom = parse(_margin.marginBottom, declaration.marginBottom);
      this.marginLeft = parse(_margin.marginLeft, declaration.marginLeft);
      this.opacity = parse(_opacity.opacity, declaration.opacity);
      const overflowTuple = parse(_overflow.overflow, declaration.overflow);
      this.overflowX = overflowTuple[0];
      this.overflowY = overflowTuple[overflowTuple.length > 1 ? 1 : 0];
      this.overflowWrap = parse(_overflowWrap.overflowWrap, declaration.overflowWrap);
      this.paddingTop = parse(_padding.paddingTop, declaration.paddingTop);
      this.paddingRight = parse(_padding.paddingRight, declaration.paddingRight);
      this.paddingBottom = parse(_padding.paddingBottom, declaration.paddingBottom);
      this.paddingLeft = parse(_padding.paddingLeft, declaration.paddingLeft);
      this.position = parse(_position.position, declaration.position);
      this.textAlign = parse(_textAlign.textAlign, declaration.textAlign);
      this.textDecorationColor = parse(_textDecorationColor.textDecorationColor, declaration.textDecorationColor || declaration.color);
      this.textDecorationLine = parse(_textDecorationLine.textDecorationLine, declaration.textDecorationLine);
      this.textShadow = parse(_textShadow.textShadow, declaration.textShadow);
      this.textTransform = parse(_textTransform.textTransform, declaration.textTransform);
      this.transform = parse(_transform.transform, declaration.transform);
      this.transformOrigin = parse(_transformOrigin.transformOrigin, declaration.transformOrigin);
      this.visibility = parse(_visibility.visibility, declaration.visibility);
      this.wordBreak = parse(_wordBreak.wordBreak, declaration.wordBreak);
      this.zIndex = parse(_zIndex.zIndex, declaration.zIndex);
    }
    isVisible() {
      return this.display > 0 && this.opacity > 0 && this.visibility === _visibility.VISIBILITY.VISIBLE;
    }
    isTransparent() {
      return (0, _color2.isTransparent)(this.backgroundColor);
    }
    isTransformed() {
      return this.transform !== null;
    }
    isPositioned() {
      return this.position !== _position.POSITION.STATIC;
    }
    isPositionedWithZIndex() {
      return this.isPositioned() && !this.zIndex.auto;
    }
    isFloating() {
      return this.float !== _float.FLOAT.NONE;
    }
    isInlineLevel() {
      return (0, _bitwise.contains)(this.display, 4 /* INLINE */) ||
      (0, _bitwise.contains)(this.display, 33554432 /* INLINE_BLOCK */) ||
      (0, _bitwise.contains)(this.display, 268435456 /* INLINE_FLEX */) ||
      (0, _bitwise.contains)(this.display, 536870912 /* INLINE_GRID */) ||
      (0, _bitwise.contains)(this.display, 67108864 /* INLINE_LIST_ITEM */) ||
      (0, _bitwise.contains)(this.display, 134217728 /* INLINE_TABLE */);
    }
  }_exports.CSSParsedDeclaration = CSSParsedDeclaration;
  class CSSParsedPseudoDeclaration {
    constructor(declaration) {
      this.content = parse(_content.content, declaration.content);
      this.quotes = parse(_quotes.quotes, declaration.quotes);
    }
  }_exports.CSSParsedPseudoDeclaration = CSSParsedPseudoDeclaration;
  class CSSParsedCounterDeclaration {
    constructor(declaration) {
      this.counterIncrement = parse(_counterIncrement.counterIncrement, declaration.counterIncrement);
      this.counterReset = parse(_counterReset.counterReset, declaration.counterReset);
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _exports.CSSParsedCounterDeclaration = CSSParsedCounterDeclaration;const parse = (descriptor, style) => {
    const tokenizer = new _tokenizer.Tokenizer();
    const value = style !== null && typeof style !== 'undefined' ? style.toString() : descriptor.initialValue;
    tokenizer.write(value);
    const parser = new _parser.Parser(tokenizer.read());
    switch (descriptor.type) {
      case _IPropertyDescriptor.PropertyDescriptorParsingType.IDENT_VALUE:
        const token = parser.parseComponentValue();
        return descriptor.parse((0, _parser.isIdentToken)(token) ? token.value : descriptor.initialValue);
      case _IPropertyDescriptor.PropertyDescriptorParsingType.VALUE:
        return descriptor.parse(parser.parseComponentValue());
      case _IPropertyDescriptor.PropertyDescriptorParsingType.LIST:
        return descriptor.parse(parser.parseComponentValues());
      case _IPropertyDescriptor.PropertyDescriptorParsingType.TOKEN_VALUE:
        return parser.parseComponentValue();
      case _IPropertyDescriptor.PropertyDescriptorParsingType.TYPE_VALUE:
        switch (descriptor.format) {
          case 'angle':
            return _angle.angle.parse(parser.parseComponentValue());
          case 'color':
            return _color2.color.parse(parser.parseComponentValue());
          case 'image':
            return _image.image.parse(parser.parseComponentValue());
          case 'length':
            const length = parser.parseComponentValue();
            return (0, _length.isLength)(length) ? length : _lengthPercentage.ZERO_LENGTH;
          case 'length-percentage':
            const value = parser.parseComponentValue();
            return (0, _lengthPercentage.isLengthPercentage)(value) ? value : _lengthPercentage.ZERO_LENGTH;
        }
    }
    throw new Error("Attempting to parse unsupported css format type ".concat(descriptor.format));
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/layout/bounds.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.parseDocumentSize = _exports.parseBounds = _exports.Bounds = void 0;class Bounds {
    constructor(x, y, w, h) {
      this.left = x;
      this.top = y;
      this.width = w;
      this.height = h;
    }
    add(x, y, w, h) {
      return new Bounds(this.left + x, this.top + y, this.width + w, this.height + h);
    }
    static fromClientRect(clientRect) {
      return new Bounds(clientRect.left, clientRect.top, clientRect.width, clientRect.height);
    }
  }_exports.Bounds = Bounds;
  const parseBounds = (node) => {
    return Bounds.fromClientRect(node.getBoundingClientRect());
  };_exports.parseBounds = parseBounds;
  const parseDocumentSize = (document) => {
    const body = document.body;
    const documentElement = document.documentElement;
    if (!body || !documentElement) {
      throw new Error("Unable to get document size");
    }
    const width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));
    const height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));
    return new Bounds(0, 0, width, height);
  };_exports.parseDocumentSize = parseDocumentSize;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/layout/text.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/overflow-wrap.js"), __webpack_require__("../../node_modules/css-line-break/dist/css-line-break.es5.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/layout/bounds.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/core/features.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _overflowWrap, _cssLineBreak, _bounds, _features) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.parseTextBounds = _exports.TextBounds = void 0;



  class TextBounds {
    constructor(text, bounds) {
      this.text = text;
      this.bounds = bounds;
    }
  }_exports.TextBounds = TextBounds;
  const parseTextBounds = (value, styles, node) => {
    const textList = breakText(value, styles);
    const textBounds = [];
    let offset = 0;
    textList.forEach((text) => {
      if (styles.textDecorationLine.length || text.trim().length > 0) {
        if (_features.FEATURES.SUPPORT_RANGE_BOUNDS) {
          textBounds.push(new TextBounds(text, getRangeBounds(node, offset, text.length)));
        } else
        {
          const replacementNode = node.splitText(text.length);
          textBounds.push(new TextBounds(text, getWrapperBounds(node)));
          node = replacementNode;
        }
      } else
      if (!_features.FEATURES.SUPPORT_RANGE_BOUNDS) {
        node = node.splitText(text.length);
      }
      offset += text.length;
    });
    return textBounds;
  };_exports.parseTextBounds = parseTextBounds;
  const getWrapperBounds = (node) => {
    const ownerDocument = node.ownerDocument;
    if (ownerDocument) {
      const wrapper = ownerDocument.createElement('html2canvaswrapper');
      wrapper.appendChild(node.cloneNode(true));
      const parentNode = node.parentNode;
      if (parentNode) {
        parentNode.replaceChild(wrapper, node);
        const bounds = (0, _bounds.parseBounds)(wrapper);
        if (wrapper.firstChild) {
          parentNode.replaceChild(wrapper.firstChild, wrapper);
        }
        return bounds;
      }
    }
    return new _bounds.Bounds(0, 0, 0, 0);
  };
  const getRangeBounds = (node, offset, length) => {
    const ownerDocument = node.ownerDocument;
    if (!ownerDocument) {
      throw new Error('Node has no owner document');
    }
    const range = ownerDocument.createRange();
    range.setStart(node, offset);
    range.setEnd(node, offset + length);
    return _bounds.Bounds.fromClientRect(range.getBoundingClientRect());
  };
  const breakText = (value, styles) => {
    return styles.letterSpacing !== 0 ? (0, _cssLineBreak.toCodePoints)(value).map((i) => (0, _cssLineBreak.fromCodePoint)(i)) : breakWords(value, styles);
  };
  const breakWords = (str, styles) => {
    const breaker = (0, _cssLineBreak.LineBreaker)(str, {
      lineBreak: styles.lineBreak,
      wordBreak: styles.overflowWrap === _overflowWrap.OVERFLOW_WRAP.BREAK_WORD ? 'break-word' : styles.wordBreak
    });
    const words = [];
    let bk;
    while (!(bk = breaker.next()).done) {
      if (bk.value) {
        words.push(bk.value.slice());
      }
    }
    return words;
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/background-clip.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor, _parser) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.backgroundClip = _exports.BACKGROUND_CLIP = void 0;

  var BACKGROUND_CLIP;
  (function (BACKGROUND_CLIP) {
    BACKGROUND_CLIP[BACKGROUND_CLIP["BORDER_BOX"] = 0] = "BORDER_BOX";
    BACKGROUND_CLIP[BACKGROUND_CLIP["PADDING_BOX"] = 1] = "PADDING_BOX";
    BACKGROUND_CLIP[BACKGROUND_CLIP["CONTENT_BOX"] = 2] = "CONTENT_BOX";
  })(BACKGROUND_CLIP || (_exports.BACKGROUND_CLIP = BACKGROUND_CLIP = {}));
  const backgroundClip = _exports.backgroundClip = {
    name: 'background-clip',
    initialValue: 'border-box',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.LIST,
    parse: (tokens) => {
      return tokens.map((token) => {
        if ((0, _parser.isIdentToken)(token)) {
          switch (token.value) {
            case 'padding-box':
              return BACKGROUND_CLIP.PADDING_BOX;
            case 'content-box':
              return BACKGROUND_CLIP.CONTENT_BOX;
          }
        }
        return BACKGROUND_CLIP.BORDER_BOX;
      });
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/background-color.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.backgroundColor = void 0;
  const backgroundColor = _exports.backgroundColor = {
    name: "background-color",
    initialValue: 'transparent',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.TYPE_VALUE,
    format: 'color'
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/background-image.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/tokenizer.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/image.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _tokenizer, _image, _IPropertyDescriptor, _parser) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.backgroundImage = void 0;



  const backgroundImage = _exports.backgroundImage = {
    name: 'background-image',
    initialValue: 'none',
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.LIST,
    prefix: false,
    parse: (tokens) => {
      if (tokens.length === 0) {
        return [];
      }
      const first = tokens[0];
      if (first.type === _tokenizer.TokenType.IDENT_TOKEN && first.value === 'none') {
        return [];
      }
      return tokens.filter((value) => (0, _parser.nonFunctionArgSeparator)(value) && (0, _image.isSupportedImage)(value)).map(_image.image.parse);
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/background-origin.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor, _parser) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.backgroundOrigin = void 0;

  const backgroundOrigin = _exports.backgroundOrigin = {
    name: 'background-origin',
    initialValue: 'border-box',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.LIST,
    parse: (tokens) => {
      return tokens.map((token) => {
        if ((0, _parser.isIdentToken)(token)) {
          switch (token.value) {
            case 'padding-box':
              return 1 /* PADDING_BOX */;
            case 'content-box':
              return 2 /* CONTENT_BOX */;
          }
        }
        return 0 /* BORDER_BOX */;
      });
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/background-position.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/length-percentage.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor, _parser, _lengthPercentage) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.backgroundPosition = void 0;


  const backgroundPosition = _exports.backgroundPosition = {
    name: 'background-position',
    initialValue: '0% 0%',
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.LIST,
    prefix: false,
    parse: (tokens) => {
      return (0, _parser.parseFunctionArgs)(tokens).
      map((values) => values.filter(_lengthPercentage.isLengthPercentage)).
      map(_lengthPercentage.parseLengthPercentageTuple);
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/background-repeat.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor, _parser) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.backgroundRepeat = _exports.BACKGROUND_REPEAT = void 0;

  var BACKGROUND_REPEAT;
  (function (BACKGROUND_REPEAT) {
    BACKGROUND_REPEAT[BACKGROUND_REPEAT["REPEAT"] = 0] = "REPEAT";
    BACKGROUND_REPEAT[BACKGROUND_REPEAT["NO_REPEAT"] = 1] = "NO_REPEAT";
    BACKGROUND_REPEAT[BACKGROUND_REPEAT["REPEAT_X"] = 2] = "REPEAT_X";
    BACKGROUND_REPEAT[BACKGROUND_REPEAT["REPEAT_Y"] = 3] = "REPEAT_Y";
  })(BACKGROUND_REPEAT || (_exports.BACKGROUND_REPEAT = BACKGROUND_REPEAT = {}));
  const backgroundRepeat = _exports.backgroundRepeat = {
    name: 'background-repeat',
    initialValue: 'repeat',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.LIST,
    parse: (tokens) => {
      return (0, _parser.parseFunctionArgs)(tokens).
      map((values) => values.
      filter(_parser.isIdentToken).
      map((token) => token.value).
      join(' ')).
      map(parseBackgroundRepeat);
    }
  };
  const parseBackgroundRepeat = (value) => {
    switch (value) {
      case 'no-repeat':
        return BACKGROUND_REPEAT.NO_REPEAT;
      case 'repeat-x':
      case 'repeat no-repeat':
        return BACKGROUND_REPEAT.REPEAT_X;
      case 'repeat-y':
      case 'no-repeat repeat':
        return BACKGROUND_REPEAT.REPEAT_Y;
      case 'repeat':
      default:
        return BACKGROUND_REPEAT.REPEAT;
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/background-size.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/length-percentage.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor, _parser, _lengthPercentage) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.backgroundSize = _exports.BACKGROUND_SIZE = void 0;


  var BACKGROUND_SIZE;
  (function (BACKGROUND_SIZE) {
    BACKGROUND_SIZE["AUTO"] = "auto";
    BACKGROUND_SIZE["CONTAIN"] = "contain";
    BACKGROUND_SIZE["COVER"] = "cover";
  })(BACKGROUND_SIZE || (_exports.BACKGROUND_SIZE = BACKGROUND_SIZE = {}));
  const backgroundSize = _exports.backgroundSize = {
    name: 'background-size',
    initialValue: '0',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.LIST,
    parse: (tokens) => {
      return (0, _parser.parseFunctionArgs)(tokens).map((values) => values.filter(isBackgroundSizeInfoToken));
    }
  };
  const isBackgroundSizeInfoToken = (value) => (0, _parser.isIdentToken)(value) || (0, _lengthPercentage.isLengthPercentage)(value);});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/border-color.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.borderTopColor = _exports.borderRightColor = _exports.borderLeftColor = _exports.borderBottomColor = void 0;
  const borderColorForSide = (side) => ({
    name: "border-".concat(side, "-color"),
    initialValue: 'transparent',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.TYPE_VALUE,
    format: 'color'
  });
  const borderTopColor = _exports.borderTopColor = borderColorForSide('top');
  const borderRightColor = _exports.borderRightColor = borderColorForSide('right');
  const borderBottomColor = _exports.borderBottomColor = borderColorForSide('bottom');
  const borderLeftColor = _exports.borderLeftColor = borderColorForSide('left');});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/border-radius.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/length-percentage.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor, _lengthPercentage) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.borderTopRightRadius = _exports.borderTopLeftRadius = _exports.borderBottomRightRadius = _exports.borderBottomLeftRadius = void 0;

  const borderRadiusForSide = (side) => ({
    name: "border-radius-".concat(side),
    initialValue: '0 0',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.LIST,
    parse: (tokens) => (0, _lengthPercentage.parseLengthPercentageTuple)(tokens.filter(_lengthPercentage.isLengthPercentage))
  });
  const borderTopLeftRadius = _exports.borderTopLeftRadius = borderRadiusForSide('top-left');
  const borderTopRightRadius = _exports.borderTopRightRadius = borderRadiusForSide('top-right');
  const borderBottomRightRadius = _exports.borderBottomRightRadius = borderRadiusForSide('bottom-right');
  const borderBottomLeftRadius = _exports.borderBottomLeftRadius = borderRadiusForSide('bottom-left');});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/border-style.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.borderTopStyle = _exports.borderRightStyle = _exports.borderLeftStyle = _exports.borderBottomStyle = _exports.BORDER_STYLE = void 0;
  var BORDER_STYLE;
  (function (BORDER_STYLE) {
    BORDER_STYLE[BORDER_STYLE["NONE"] = 0] = "NONE";
    BORDER_STYLE[BORDER_STYLE["SOLID"] = 1] = "SOLID";
  })(BORDER_STYLE || (_exports.BORDER_STYLE = BORDER_STYLE = {}));
  const borderStyleForSide = (side) => ({
    name: "border-".concat(side, "-style"),
    initialValue: 'solid',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.IDENT_VALUE,
    parse: (style) => {
      switch (style) {
        case 'none':
          return BORDER_STYLE.NONE;
      }
      return BORDER_STYLE.SOLID;
    }
  });
  const borderTopStyle = _exports.borderTopStyle = borderStyleForSide('top');
  const borderRightStyle = _exports.borderRightStyle = borderStyleForSide('right');
  const borderBottomStyle = _exports.borderBottomStyle = borderStyleForSide('bottom');
  const borderLeftStyle = _exports.borderLeftStyle = borderStyleForSide('left');});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/border-width.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor, _parser) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.borderTopWidth = _exports.borderRightWidth = _exports.borderLeftWidth = _exports.borderBottomWidth = void 0;

  const borderWidthForSide = (side) => ({
    name: "border-".concat(side, "-width"),
    initialValue: '0',
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.VALUE,
    prefix: false,
    parse: (token) => {
      if ((0, _parser.isDimensionToken)(token)) {
        return token.number;
      }
      return 0;
    }
  });
  const borderTopWidth = _exports.borderTopWidth = borderWidthForSide('top');
  const borderRightWidth = _exports.borderRightWidth = borderWidthForSide('right');
  const borderBottomWidth = _exports.borderBottomWidth = borderWidthForSide('bottom');
  const borderLeftWidth = _exports.borderLeftWidth = borderWidthForSide('left');});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/box-shadow.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/length-percentage.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/color.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/length.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor, _parser, _lengthPercentage, _color, _length) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.boxShadow = void 0;




  const boxShadow = _exports.boxShadow = {
    name: 'box-shadow',
    initialValue: 'none',
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.LIST,
    prefix: false,
    parse: (tokens) => {
      if (tokens.length === 1 && (0, _parser.isIdentWithValue)(tokens[0], 'none')) {
        return [];
      }
      return (0, _parser.parseFunctionArgs)(tokens).map((values) => {
        const shadow = {
          color: 0x000000ff,
          offsetX: _lengthPercentage.ZERO_LENGTH,
          offsetY: _lengthPercentage.ZERO_LENGTH,
          blur: _lengthPercentage.ZERO_LENGTH,
          spread: _lengthPercentage.ZERO_LENGTH,
          inset: false
        };
        let c = 0;
        for (let i = 0; i < values.length; i++) {
          const token = values[i];
          if ((0, _parser.isIdentWithValue)(token, 'inset')) {
            shadow.inset = true;
          } else
          if ((0, _length.isLength)(token)) {
            if (c === 0) {
              shadow.offsetX = token;
            } else
            if (c === 1) {
              shadow.offsetY = token;
            } else
            if (c === 2) {
              shadow.blur = token;
            } else
            {
              shadow.spread = token;
            }
            c++;
          } else
          {
            shadow.color = _color.color.parse(token);
          }
        }
        return shadow;
      });
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/color.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.color = void 0;
  const color = _exports.color = {
    name: "color",
    initialValue: 'transparent',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.TYPE_VALUE,
    format: 'color'
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/content.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/tokenizer.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _tokenizer, _IPropertyDescriptor) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.content = void 0;

  const content = _exports.content = {
    name: 'content',
    initialValue: 'none',
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.LIST,
    prefix: false,
    parse: (tokens) => {
      if (tokens.length === 0) {
        return [];
      }
      const first = tokens[0];
      if (first.type === _tokenizer.TokenType.IDENT_TOKEN && first.value === 'none') {
        return [];
      }
      return tokens;
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/counter-increment.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/tokenizer.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor, _parser, _tokenizer) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.counterIncrement = void 0;


  const counterIncrement = _exports.counterIncrement = {
    name: 'counter-increment',
    initialValue: 'none',
    prefix: true,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.LIST,
    parse: (tokens) => {
      if (tokens.length === 0) {
        return null;
      }
      const first = tokens[0];
      if (first.type === _tokenizer.TokenType.IDENT_TOKEN && first.value === 'none') {
        return null;
      }
      const increments = [];
      const filtered = tokens.filter(_parser.nonWhiteSpace);
      for (let i = 0; i < filtered.length; i++) {
        const counter = filtered[i];
        const next = filtered[i + 1];
        if (counter.type === _tokenizer.TokenType.IDENT_TOKEN) {
          const increment = next && (0, _parser.isNumberToken)(next) ? next.number : 1;
          increments.push({ counter: counter.value, increment });
        }
      }
      return increments;
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/counter-reset.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor, _parser) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.counterReset = void 0;

  const counterReset = _exports.counterReset = {
    name: 'counter-reset',
    initialValue: 'none',
    prefix: true,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.LIST,
    parse: (tokens) => {
      if (tokens.length === 0) {
        return [];
      }
      const resets = [];
      const filtered = tokens.filter(_parser.nonWhiteSpace);
      for (let i = 0; i < filtered.length; i++) {
        const counter = filtered[i];
        const next = filtered[i + 1];
        if ((0, _parser.isIdentToken)(counter) && counter.value !== 'none') {
          const reset = next && (0, _parser.isNumberToken)(next) ? next.number : 0;
          resets.push({ counter: counter.value, reset });
        }
      }
      return resets;
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/display.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor, _parser) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.display = void 0;

  const display = _exports.display = {
    name: 'display',
    initialValue: 'inline-block',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.LIST,
    parse: (tokens) => {
      return tokens.filter(_parser.isIdentToken).reduce((bit, token) => {
        return bit | parseDisplayValue(token.value);
      }, 0 /* NONE */);
    }
  };
  const parseDisplayValue = (display) => {
    switch (display) {
      case 'block':
        return 2 /* BLOCK */;
      case 'inline':
        return 4 /* INLINE */;
      case 'run-in':
        return 8 /* RUN_IN */;
      case 'flow':
        return 16 /* FLOW */;
      case 'flow-root':
        return 32 /* FLOW_ROOT */;
      case 'table':
        return 64 /* TABLE */;
      case 'flex':
      case '-webkit-flex':
        return 128 /* FLEX */;
      case 'grid':
      case '-ms-grid':
        return 256 /* GRID */;
      case 'ruby':
        return 512 /* RUBY */;
      case 'subgrid':
        return 1024 /* SUBGRID */;
      case 'list-item':
        return 2048 /* LIST_ITEM */;
      case 'table-row-group':
        return 4096 /* TABLE_ROW_GROUP */;
      case 'table-header-group':
        return 8192 /* TABLE_HEADER_GROUP */;
      case 'table-footer-group':
        return 16384 /* TABLE_FOOTER_GROUP */;
      case 'table-row':
        return 32768 /* TABLE_ROW */;
      case 'table-cell':
        return 65536 /* TABLE_CELL */;
      case 'table-column-group':
        return 131072 /* TABLE_COLUMN_GROUP */;
      case 'table-column':
        return 262144 /* TABLE_COLUMN */;
      case 'table-caption':
        return 524288 /* TABLE_CAPTION */;
      case 'ruby-base':
        return 1048576 /* RUBY_BASE */;
      case 'ruby-text':
        return 2097152 /* RUBY_TEXT */;
      case 'ruby-base-container':
        return 4194304 /* RUBY_BASE_CONTAINER */;
      case 'ruby-text-container':
        return 8388608 /* RUBY_TEXT_CONTAINER */;
      case 'contents':
        return 16777216 /* CONTENTS */;
      case 'inline-block':
        return 33554432 /* INLINE_BLOCK */;
      case 'inline-list-item':
        return 67108864 /* INLINE_LIST_ITEM */;
      case 'inline-table':
        return 134217728 /* INLINE_TABLE */;
      case 'inline-flex':
        return 268435456 /* INLINE_FLEX */;
      case 'inline-grid':
        return 536870912 /* INLINE_GRID */;
    }
    return 0 /* NONE */;
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/float.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.float = _exports.FLOAT = void 0;
  var FLOAT;
  (function (FLOAT) {
    FLOAT[FLOAT["NONE"] = 0] = "NONE";
    FLOAT[FLOAT["LEFT"] = 1] = "LEFT";
    FLOAT[FLOAT["RIGHT"] = 2] = "RIGHT";
    FLOAT[FLOAT["INLINE_START"] = 3] = "INLINE_START";
    FLOAT[FLOAT["INLINE_END"] = 4] = "INLINE_END";
  })(FLOAT || (_exports.FLOAT = FLOAT = {}));
  const float = _exports.float = {
    name: 'float',
    initialValue: 'none',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.IDENT_VALUE,
    parse: (float) => {
      switch (float) {
        case 'left':
          return FLOAT.LEFT;
        case 'right':
          return FLOAT.RIGHT;
        case 'inline-start':
          return FLOAT.INLINE_START;
        case 'inline-end':
          return FLOAT.INLINE_END;
      }
      return FLOAT.NONE;
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/font-family.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/tokenizer.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor, _tokenizer) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.fontFamily = void 0;

  const fontFamily = _exports.fontFamily = {
    name: "font-family",
    initialValue: '',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.LIST,
    parse: (tokens) => {
      const accumulator = [];
      const results = [];
      tokens.forEach((token) => {
        switch (token.type) {
          case _tokenizer.TokenType.IDENT_TOKEN:
          case _tokenizer.TokenType.STRING_TOKEN:
            accumulator.push(token.value);
            break;
          case _tokenizer.TokenType.NUMBER_TOKEN:
            accumulator.push(token.number.toString());
            break;
          case _tokenizer.TokenType.COMMA_TOKEN:
            results.push(accumulator.join(' '));
            accumulator.length = 0;
            break;
        }
      });
      if (accumulator.length) {
        results.push(accumulator.join(' '));
      }
      return results.map((result) => result.indexOf(' ') === -1 ? result : "'".concat(result, "'"));
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/font-size.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.fontSize = void 0;
  const fontSize = _exports.fontSize = {
    name: "font-size",
    initialValue: '0',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.TYPE_VALUE,
    format: 'length'
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/font-style.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.fontStyle = _exports.FONT_STYLE = void 0;
  var FONT_STYLE;
  (function (FONT_STYLE) {
    FONT_STYLE["NORMAL"] = "normal";
    FONT_STYLE["ITALIC"] = "italic";
    FONT_STYLE["OBLIQUE"] = "oblique";
  })(FONT_STYLE || (_exports.FONT_STYLE = FONT_STYLE = {}));
  const fontStyle = _exports.fontStyle = {
    name: 'font-style',
    initialValue: 'normal',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.IDENT_VALUE,
    parse: (overflow) => {
      switch (overflow) {
        case 'oblique':
          return FONT_STYLE.OBLIQUE;
        case 'italic':
          return FONT_STYLE.ITALIC;
        case 'normal':
        default:
          return FONT_STYLE.NORMAL;
      }
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/font-variant.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor, _parser) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.fontVariant = void 0;

  const fontVariant = _exports.fontVariant = {
    name: 'font-variant',
    initialValue: 'none',
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.LIST,
    prefix: false,
    parse: (tokens) => {
      return tokens.filter(_parser.isIdentToken).map((token) => token.value);
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/font-weight.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor, _parser) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.fontWeight = void 0;

  const fontWeight = _exports.fontWeight = {
    name: 'font-weight',
    initialValue: 'normal',
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.VALUE,
    prefix: false,
    parse: (token) => {
      if ((0, _parser.isNumberToken)(token)) {
        return token.number;
      }
      if ((0, _parser.isIdentToken)(token)) {
        switch (token.value) {
          case 'bold':
            return 700;
          case 'normal':
          default:
            return 400;
        }
      }
      return 400;
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/letter-spacing.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/tokenizer.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor, _tokenizer) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.letterSpacing = void 0;

  const letterSpacing = _exports.letterSpacing = {
    name: 'letter-spacing',
    initialValue: '0',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.VALUE,
    parse: (token) => {
      if (token.type === _tokenizer.TokenType.IDENT_TOKEN && token.value === 'normal') {
        return 0;
      }
      if (token.type === _tokenizer.TokenType.NUMBER_TOKEN) {
        return token.number;
      }
      if (token.type === _tokenizer.TokenType.DIMENSION_TOKEN) {
        return token.number;
      }
      return 0;
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/line-break.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.lineBreak = _exports.LINE_BREAK = void 0;
  var LINE_BREAK;
  (function (LINE_BREAK) {
    LINE_BREAK["NORMAL"] = "normal";
    LINE_BREAK["STRICT"] = "strict";
  })(LINE_BREAK || (_exports.LINE_BREAK = LINE_BREAK = {}));
  const lineBreak = _exports.lineBreak = {
    name: 'line-break',
    initialValue: 'normal',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.IDENT_VALUE,
    parse: (lineBreak) => {
      switch (lineBreak) {
        case 'strict':
          return LINE_BREAK.STRICT;
        case 'normal':
        default:
          return LINE_BREAK.NORMAL;
      }
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/line-height.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/tokenizer.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/length-percentage.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor, _parser, _tokenizer, _lengthPercentage) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.lineHeight = _exports.computeLineHeight = void 0;



  const lineHeight = _exports.lineHeight = {
    name: 'line-height',
    initialValue: 'normal',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.TOKEN_VALUE
  };
  const computeLineHeight = (token, fontSize) => {
    if ((0, _parser.isIdentToken)(token) && token.value === 'normal') {
      return 1.2 * fontSize;
    } else
    if (token.type === _tokenizer.TokenType.NUMBER_TOKEN) {
      return fontSize * token.number;
    } else
    if ((0, _lengthPercentage.isLengthPercentage)(token)) {
      return (0, _lengthPercentage.getAbsoluteValue)(token, fontSize);
    }
    return fontSize;
  };_exports.computeLineHeight = computeLineHeight;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/list-style-image.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/tokenizer.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/image.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _tokenizer, _image, _IPropertyDescriptor) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.listStyleImage = void 0;


  const listStyleImage = _exports.listStyleImage = {
    name: 'list-style-image',
    initialValue: 'none',
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.VALUE,
    prefix: false,
    parse: (token) => {
      if (token.type === _tokenizer.TokenType.IDENT_TOKEN && token.value === 'none') {
        return null;
      }
      return _image.image.parse(token);
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/list-style-position.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.listStylePosition = _exports.LIST_STYLE_POSITION = void 0;
  var LIST_STYLE_POSITION;
  (function (LIST_STYLE_POSITION) {
    LIST_STYLE_POSITION[LIST_STYLE_POSITION["INSIDE"] = 0] = "INSIDE";
    LIST_STYLE_POSITION[LIST_STYLE_POSITION["OUTSIDE"] = 1] = "OUTSIDE";
  })(LIST_STYLE_POSITION || (_exports.LIST_STYLE_POSITION = LIST_STYLE_POSITION = {}));
  const listStylePosition = _exports.listStylePosition = {
    name: 'list-style-position',
    initialValue: 'outside',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.IDENT_VALUE,
    parse: (position) => {
      switch (position) {
        case 'inside':
          return LIST_STYLE_POSITION.INSIDE;
        case 'outside':
        default:
          return LIST_STYLE_POSITION.OUTSIDE;
      }
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/list-style-type.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.listStyleType = _exports.LIST_STYLE_TYPE = void 0;
  var LIST_STYLE_TYPE;
  (function (LIST_STYLE_TYPE) {
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["NONE"] = -1] = "NONE";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["DISC"] = 0] = "DISC";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["CIRCLE"] = 1] = "CIRCLE";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["SQUARE"] = 2] = "SQUARE";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["DECIMAL"] = 3] = "DECIMAL";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["CJK_DECIMAL"] = 4] = "CJK_DECIMAL";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["DECIMAL_LEADING_ZERO"] = 5] = "DECIMAL_LEADING_ZERO";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["LOWER_ROMAN"] = 6] = "LOWER_ROMAN";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["UPPER_ROMAN"] = 7] = "UPPER_ROMAN";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["LOWER_GREEK"] = 8] = "LOWER_GREEK";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["LOWER_ALPHA"] = 9] = "LOWER_ALPHA";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["UPPER_ALPHA"] = 10] = "UPPER_ALPHA";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["ARABIC_INDIC"] = 11] = "ARABIC_INDIC";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["ARMENIAN"] = 12] = "ARMENIAN";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["BENGALI"] = 13] = "BENGALI";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["CAMBODIAN"] = 14] = "CAMBODIAN";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["CJK_EARTHLY_BRANCH"] = 15] = "CJK_EARTHLY_BRANCH";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["CJK_HEAVENLY_STEM"] = 16] = "CJK_HEAVENLY_STEM";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["CJK_IDEOGRAPHIC"] = 17] = "CJK_IDEOGRAPHIC";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["DEVANAGARI"] = 18] = "DEVANAGARI";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["ETHIOPIC_NUMERIC"] = 19] = "ETHIOPIC_NUMERIC";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["GEORGIAN"] = 20] = "GEORGIAN";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["GUJARATI"] = 21] = "GUJARATI";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["GURMUKHI"] = 22] = "GURMUKHI";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["HEBREW"] = 22] = "HEBREW";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["HIRAGANA"] = 23] = "HIRAGANA";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["HIRAGANA_IROHA"] = 24] = "HIRAGANA_IROHA";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["JAPANESE_FORMAL"] = 25] = "JAPANESE_FORMAL";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["JAPANESE_INFORMAL"] = 26] = "JAPANESE_INFORMAL";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["KANNADA"] = 27] = "KANNADA";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["KATAKANA"] = 28] = "KATAKANA";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["KATAKANA_IROHA"] = 29] = "KATAKANA_IROHA";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["KHMER"] = 30] = "KHMER";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["KOREAN_HANGUL_FORMAL"] = 31] = "KOREAN_HANGUL_FORMAL";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["KOREAN_HANJA_FORMAL"] = 32] = "KOREAN_HANJA_FORMAL";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["KOREAN_HANJA_INFORMAL"] = 33] = "KOREAN_HANJA_INFORMAL";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["LAO"] = 34] = "LAO";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["LOWER_ARMENIAN"] = 35] = "LOWER_ARMENIAN";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["MALAYALAM"] = 36] = "MALAYALAM";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["MONGOLIAN"] = 37] = "MONGOLIAN";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["MYANMAR"] = 38] = "MYANMAR";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["ORIYA"] = 39] = "ORIYA";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["PERSIAN"] = 40] = "PERSIAN";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["SIMP_CHINESE_FORMAL"] = 41] = "SIMP_CHINESE_FORMAL";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["SIMP_CHINESE_INFORMAL"] = 42] = "SIMP_CHINESE_INFORMAL";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["TAMIL"] = 43] = "TAMIL";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["TELUGU"] = 44] = "TELUGU";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["THAI"] = 45] = "THAI";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["TIBETAN"] = 46] = "TIBETAN";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["TRAD_CHINESE_FORMAL"] = 47] = "TRAD_CHINESE_FORMAL";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["TRAD_CHINESE_INFORMAL"] = 48] = "TRAD_CHINESE_INFORMAL";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["UPPER_ARMENIAN"] = 49] = "UPPER_ARMENIAN";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["DISCLOSURE_OPEN"] = 50] = "DISCLOSURE_OPEN";
    LIST_STYLE_TYPE[LIST_STYLE_TYPE["DISCLOSURE_CLOSED"] = 51] = "DISCLOSURE_CLOSED";
  })(LIST_STYLE_TYPE || (_exports.LIST_STYLE_TYPE = LIST_STYLE_TYPE = {}));
  const listStyleType = _exports.listStyleType = {
    name: 'list-style-type',
    initialValue: 'none',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.IDENT_VALUE,
    parse: (type) => {
      switch (type) {
        case 'disc':
          return LIST_STYLE_TYPE.DISC;
        case 'circle':
          return LIST_STYLE_TYPE.CIRCLE;
        case 'square':
          return LIST_STYLE_TYPE.SQUARE;
        case 'decimal':
          return LIST_STYLE_TYPE.DECIMAL;
        case 'cjk-decimal':
          return LIST_STYLE_TYPE.CJK_DECIMAL;
        case 'decimal-leading-zero':
          return LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO;
        case 'lower-roman':
          return LIST_STYLE_TYPE.LOWER_ROMAN;
        case 'upper-roman':
          return LIST_STYLE_TYPE.UPPER_ROMAN;
        case 'lower-greek':
          return LIST_STYLE_TYPE.LOWER_GREEK;
        case 'lower-alpha':
          return LIST_STYLE_TYPE.LOWER_ALPHA;
        case 'upper-alpha':
          return LIST_STYLE_TYPE.UPPER_ALPHA;
        case 'arabic-indic':
          return LIST_STYLE_TYPE.ARABIC_INDIC;
        case 'armenian':
          return LIST_STYLE_TYPE.ARMENIAN;
        case 'bengali':
          return LIST_STYLE_TYPE.BENGALI;
        case 'cambodian':
          return LIST_STYLE_TYPE.CAMBODIAN;
        case 'cjk-earthly-branch':
          return LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH;
        case 'cjk-heavenly-stem':
          return LIST_STYLE_TYPE.CJK_HEAVENLY_STEM;
        case 'cjk-ideographic':
          return LIST_STYLE_TYPE.CJK_IDEOGRAPHIC;
        case 'devanagari':
          return LIST_STYLE_TYPE.DEVANAGARI;
        case 'ethiopic-numeric':
          return LIST_STYLE_TYPE.ETHIOPIC_NUMERIC;
        case 'georgian':
          return LIST_STYLE_TYPE.GEORGIAN;
        case 'gujarati':
          return LIST_STYLE_TYPE.GUJARATI;
        case 'gurmukhi':
          return LIST_STYLE_TYPE.GURMUKHI;
        case 'hebrew':
          return LIST_STYLE_TYPE.HEBREW;
        case 'hiragana':
          return LIST_STYLE_TYPE.HIRAGANA;
        case 'hiragana-iroha':
          return LIST_STYLE_TYPE.HIRAGANA_IROHA;
        case 'japanese-formal':
          return LIST_STYLE_TYPE.JAPANESE_FORMAL;
        case 'japanese-informal':
          return LIST_STYLE_TYPE.JAPANESE_INFORMAL;
        case 'kannada':
          return LIST_STYLE_TYPE.KANNADA;
        case 'katakana':
          return LIST_STYLE_TYPE.KATAKANA;
        case 'katakana-iroha':
          return LIST_STYLE_TYPE.KATAKANA_IROHA;
        case 'khmer':
          return LIST_STYLE_TYPE.KHMER;
        case 'korean-hangul-formal':
          return LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL;
        case 'korean-hanja-formal':
          return LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL;
        case 'korean-hanja-informal':
          return LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL;
        case 'lao':
          return LIST_STYLE_TYPE.LAO;
        case 'lower-armenian':
          return LIST_STYLE_TYPE.LOWER_ARMENIAN;
        case 'malayalam':
          return LIST_STYLE_TYPE.MALAYALAM;
        case 'mongolian':
          return LIST_STYLE_TYPE.MONGOLIAN;
        case 'myanmar':
          return LIST_STYLE_TYPE.MYANMAR;
        case 'oriya':
          return LIST_STYLE_TYPE.ORIYA;
        case 'persian':
          return LIST_STYLE_TYPE.PERSIAN;
        case 'simp-chinese-formal':
          return LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL;
        case 'simp-chinese-informal':
          return LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL;
        case 'tamil':
          return LIST_STYLE_TYPE.TAMIL;
        case 'telugu':
          return LIST_STYLE_TYPE.TELUGU;
        case 'thai':
          return LIST_STYLE_TYPE.THAI;
        case 'tibetan':
          return LIST_STYLE_TYPE.TIBETAN;
        case 'trad-chinese-formal':
          return LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL;
        case 'trad-chinese-informal':
          return LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL;
        case 'upper-armenian':
          return LIST_STYLE_TYPE.UPPER_ARMENIAN;
        case 'disclosure-open':
          return LIST_STYLE_TYPE.DISCLOSURE_OPEN;
        case 'disclosure-closed':
          return LIST_STYLE_TYPE.DISCLOSURE_CLOSED;
        case 'none':
        default:
          return LIST_STYLE_TYPE.NONE;
      }
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/margin.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.marginTop = _exports.marginRight = _exports.marginLeft = _exports.marginBottom = void 0;
  const marginForSide = (side) => ({
    name: "margin-".concat(side),
    initialValue: '0',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.TOKEN_VALUE
  });
  const marginTop = _exports.marginTop = marginForSide('top');
  const marginRight = _exports.marginRight = marginForSide('right');
  const marginBottom = _exports.marginBottom = marginForSide('bottom');
  const marginLeft = _exports.marginLeft = marginForSide('left');});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/opacity.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor, _parser) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.opacity = void 0;

  const opacity = _exports.opacity = {
    name: 'opacity',
    initialValue: '1',
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.VALUE,
    prefix: false,
    parse: (token) => {
      if ((0, _parser.isNumberToken)(token)) {
        return token.number;
      }
      return 1;
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/overflow-wrap.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.overflowWrap = _exports.OVERFLOW_WRAP = void 0;
  var OVERFLOW_WRAP;
  (function (OVERFLOW_WRAP) {
    OVERFLOW_WRAP["NORMAL"] = "normal";
    OVERFLOW_WRAP["BREAK_WORD"] = "break-word";
  })(OVERFLOW_WRAP || (_exports.OVERFLOW_WRAP = OVERFLOW_WRAP = {}));
  const overflowWrap = _exports.overflowWrap = {
    name: 'overflow-wrap',
    initialValue: 'normal',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.IDENT_VALUE,
    parse: (overflow) => {
      switch (overflow) {
        case 'break-word':
          return OVERFLOW_WRAP.BREAK_WORD;
        case 'normal':
        default:
          return OVERFLOW_WRAP.NORMAL;
      }
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/overflow.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor, _parser) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.overflow = _exports.OVERFLOW = void 0;

  var OVERFLOW;
  (function (OVERFLOW) {
    OVERFLOW[OVERFLOW["VISIBLE"] = 0] = "VISIBLE";
    OVERFLOW[OVERFLOW["HIDDEN"] = 1] = "HIDDEN";
    OVERFLOW[OVERFLOW["SCROLL"] = 2] = "SCROLL";
    OVERFLOW[OVERFLOW["AUTO"] = 3] = "AUTO";
  })(OVERFLOW || (_exports.OVERFLOW = OVERFLOW = {}));
  const overflow = _exports.overflow = {
    name: 'overflow',
    initialValue: 'visible',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.LIST,
    parse: (tokens) => {
      return tokens.filter(_parser.isIdentToken).map((overflow) => {
        switch (overflow.value) {
          case 'hidden':
            return OVERFLOW.HIDDEN;
          case 'scroll':
            return OVERFLOW.SCROLL;
          case 'auto':
            return OVERFLOW.AUTO;
          case 'visible':
          default:
            return OVERFLOW.VISIBLE;
        }
      });
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/padding.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.paddingTop = _exports.paddingRight = _exports.paddingLeft = _exports.paddingBottom = void 0;
  const paddingForSide = (side) => ({
    name: "padding-".concat(side),
    initialValue: '0',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.TYPE_VALUE,
    format: 'length-percentage'
  });
  const paddingTop = _exports.paddingTop = paddingForSide('top');
  const paddingRight = _exports.paddingRight = paddingForSide('right');
  const paddingBottom = _exports.paddingBottom = paddingForSide('bottom');
  const paddingLeft = _exports.paddingLeft = paddingForSide('left');});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/position.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.position = _exports.POSITION = void 0;
  var POSITION;
  (function (POSITION) {
    POSITION[POSITION["STATIC"] = 0] = "STATIC";
    POSITION[POSITION["RELATIVE"] = 1] = "RELATIVE";
    POSITION[POSITION["ABSOLUTE"] = 2] = "ABSOLUTE";
    POSITION[POSITION["FIXED"] = 3] = "FIXED";
    POSITION[POSITION["STICKY"] = 4] = "STICKY";
  })(POSITION || (_exports.POSITION = POSITION = {}));
  const position = _exports.position = {
    name: 'position',
    initialValue: 'static',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.IDENT_VALUE,
    parse: (position) => {
      switch (position) {
        case 'relative':
          return POSITION.RELATIVE;
        case 'absolute':
          return POSITION.ABSOLUTE;
        case 'fixed':
          return POSITION.FIXED;
        case 'sticky':
          return POSITION.STICKY;
      }
      return POSITION.STATIC;
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/quotes.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/tokenizer.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor, _parser, _tokenizer) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.quotes = _exports.getQuote = void 0;


  const quotes = _exports.quotes = {
    name: 'quotes',
    initialValue: 'none',
    prefix: true,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.LIST,
    parse: (tokens) => {
      if (tokens.length === 0) {
        return null;
      }
      const first = tokens[0];
      if (first.type === _tokenizer.TokenType.IDENT_TOKEN && first.value === 'none') {
        return null;
      }
      const quotes = [];
      const filtered = tokens.filter(_parser.isStringToken);
      if (filtered.length % 2 !== 0) {
        return null;
      }
      for (let i = 0; i < filtered.length; i += 2) {
        const open = filtered[i].value;
        const close = filtered[i + 1].value;
        quotes.push({ open, close });
      }
      return quotes;
    }
  };
  const getQuote = (quotes, depth, open) => {
    if (!quotes) {
      return '';
    }
    const quote = quotes[Math.min(depth, quotes.length - 1)];
    if (!quote) {
      return '';
    }
    return open ? quote.open : quote.close;
  };_exports.getQuote = getQuote;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/text-align.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.textAlign = _exports.TEXT_ALIGN = void 0;
  var TEXT_ALIGN;
  (function (TEXT_ALIGN) {
    TEXT_ALIGN[TEXT_ALIGN["LEFT"] = 0] = "LEFT";
    TEXT_ALIGN[TEXT_ALIGN["CENTER"] = 1] = "CENTER";
    TEXT_ALIGN[TEXT_ALIGN["RIGHT"] = 2] = "RIGHT";
  })(TEXT_ALIGN || (_exports.TEXT_ALIGN = TEXT_ALIGN = {}));
  const textAlign = _exports.textAlign = {
    name: 'text-align',
    initialValue: 'left',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.IDENT_VALUE,
    parse: (textAlign) => {
      switch (textAlign) {
        case 'right':
          return TEXT_ALIGN.RIGHT;
        case 'center':
        case 'justify':
          return TEXT_ALIGN.CENTER;
        case 'left':
        default:
          return TEXT_ALIGN.LEFT;
      }
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/text-decoration-color.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.textDecorationColor = void 0;
  const textDecorationColor = _exports.textDecorationColor = {
    name: "text-decoration-color",
    initialValue: 'transparent',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.TYPE_VALUE,
    format: 'color'
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/text-decoration-line.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor, _parser) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.textDecorationLine = void 0;

  const textDecorationLine = _exports.textDecorationLine = {
    name: 'text-decoration-line',
    initialValue: 'none',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.LIST,
    parse: (tokens) => {
      return tokens.
      filter(_parser.isIdentToken).
      map((token) => {
        switch (token.value) {
          case 'underline':
            return 1 /* UNDERLINE */;
          case 'overline':
            return 2 /* OVERLINE */;
          case 'line-through':
            return 3 /* LINE_THROUGH */;
          case 'none':
            return 4 /* BLINK */;
        }
        return 0 /* NONE */;
      }).
      filter((line) => line !== 0 /* NONE */);
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/text-shadow.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/length-percentage.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/color.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/length.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor, _parser, _lengthPercentage, _color, _length) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.textShadow = void 0;




  const textShadow = _exports.textShadow = {
    name: 'text-shadow',
    initialValue: 'none',
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.LIST,
    prefix: false,
    parse: (tokens) => {
      if (tokens.length === 1 && (0, _parser.isIdentWithValue)(tokens[0], 'none')) {
        return [];
      }
      return (0, _parser.parseFunctionArgs)(tokens).map((values) => {
        const shadow = {
          color: _color.COLORS.TRANSPARENT,
          offsetX: _lengthPercentage.ZERO_LENGTH,
          offsetY: _lengthPercentage.ZERO_LENGTH,
          blur: _lengthPercentage.ZERO_LENGTH
        };
        let c = 0;
        for (let i = 0; i < values.length; i++) {
          const token = values[i];
          if ((0, _length.isLength)(token)) {
            if (c === 0) {
              shadow.offsetX = token;
            } else
            if (c === 1) {
              shadow.offsetY = token;
            } else
            {
              shadow.blur = token;
            }
            c++;
          } else
          {
            shadow.color = _color.color.parse(token);
          }
        }
        return shadow;
      });
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/text-transform.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.textTransform = _exports.TEXT_TRANSFORM = void 0;
  var TEXT_TRANSFORM;
  (function (TEXT_TRANSFORM) {
    TEXT_TRANSFORM[TEXT_TRANSFORM["NONE"] = 0] = "NONE";
    TEXT_TRANSFORM[TEXT_TRANSFORM["LOWERCASE"] = 1] = "LOWERCASE";
    TEXT_TRANSFORM[TEXT_TRANSFORM["UPPERCASE"] = 2] = "UPPERCASE";
    TEXT_TRANSFORM[TEXT_TRANSFORM["CAPITALIZE"] = 3] = "CAPITALIZE";
  })(TEXT_TRANSFORM || (_exports.TEXT_TRANSFORM = TEXT_TRANSFORM = {}));
  const textTransform = _exports.textTransform = {
    name: 'text-transform',
    initialValue: 'none',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.IDENT_VALUE,
    parse: (textTransform) => {
      switch (textTransform) {
        case 'uppercase':
          return TEXT_TRANSFORM.UPPERCASE;
        case 'lowercase':
          return TEXT_TRANSFORM.LOWERCASE;
        case 'capitalize':
          return TEXT_TRANSFORM.CAPITALIZE;
      }
      return TEXT_TRANSFORM.NONE;
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/transform-origin.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/length-percentage.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/tokenizer.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor, _lengthPercentage, _tokenizer) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.transformOrigin = void 0;


  const DEFAULT_VALUE = {
    type: _tokenizer.TokenType.PERCENTAGE_TOKEN,
    number: 50,
    flags: _tokenizer.FLAG_INTEGER
  };
  const DEFAULT = [DEFAULT_VALUE, DEFAULT_VALUE];
  const transformOrigin = _exports.transformOrigin = {
    name: 'transform-origin',
    initialValue: '50% 50%',
    prefix: true,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.LIST,
    parse: (tokens) => {
      const origins = tokens.filter(_lengthPercentage.isLengthPercentage);
      if (origins.length !== 2) {
        return DEFAULT;
      }
      return [origins[0], origins[1]];
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/transform.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js"), __webpack_require__("../../node_modules/@babel/runtime/helpers/slicedToArray.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/tokenizer.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _objectDestructuringEmpty2, _slicedToArray2, _IPropertyDescriptor, _tokenizer) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.transform = void 0;_objectDestructuringEmpty2 = _interopRequireDefault(_objectDestructuringEmpty2);_slicedToArray2 = _interopRequireDefault(_slicedToArray2);

  const transform = _exports.transform = {
    name: 'transform',
    initialValue: 'none',
    prefix: true,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.VALUE,
    parse: (token) => {
      if (token.type === _tokenizer.TokenType.IDENT_TOKEN && token.value === 'none') {
        return null;
      }
      if (token.type === _tokenizer.TokenType.FUNCTION) {
        const transformFunction = SUPPORTED_TRANSFORM_FUNCTIONS[token.name];
        if (typeof transformFunction === 'undefined') {
          throw new Error("Attempting to parse an unsupported transform function \"".concat(token.name, "\""));
        }
        return transformFunction(token.values);
      }
      return null;
    }
  };
  const matrix = (args) => {
    const values = args.filter((arg) => arg.type === _tokenizer.TokenType.NUMBER_TOKEN).map((arg) => arg.number);
    return values.length === 6 ? values : null;
  };
  // doesn't support 3D transforms at the moment
  const matrix3d = (args) => {
    const values = args.filter((arg) => arg.type === _tokenizer.TokenType.NUMBER_TOKEN).map((arg) => arg.number);const _values = (0, _slicedToArray2.default)(
        values, 16),a1 = _values[0],b1 = _values[1];(0, _objectDestructuringEmpty2.default)(_values[2]);(0, _objectDestructuringEmpty2.default)(_values[3]);const a2 = _values[4],b2 = _values[5];(0, _objectDestructuringEmpty2.default)(_values[6]);(0, _objectDestructuringEmpty2.default)(_values[7]);(0, _objectDestructuringEmpty2.default)(_values[8]);(0, _objectDestructuringEmpty2.default)(_values[9]);(0, _objectDestructuringEmpty2.default)(_values[10]);(0, _objectDestructuringEmpty2.default)(_values[11]);const a4 = _values[12],b4 = _values[13];(0, _objectDestructuringEmpty2.default)(_values[14]);(0, _objectDestructuringEmpty2.default)(_values[15]);
    return values.length === 16 ? [a1, b1, a2, b2, a4, b4] : null;
  };
  const SUPPORTED_TRANSFORM_FUNCTIONS = {
    matrix: matrix,
    matrix3d: matrix3d
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/visibility.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.visibility = _exports.VISIBILITY = void 0;
  var VISIBILITY;
  (function (VISIBILITY) {
    VISIBILITY[VISIBILITY["VISIBLE"] = 0] = "VISIBLE";
    VISIBILITY[VISIBILITY["HIDDEN"] = 1] = "HIDDEN";
    VISIBILITY[VISIBILITY["COLLAPSE"] = 2] = "COLLAPSE";
  })(VISIBILITY || (_exports.VISIBILITY = VISIBILITY = {}));
  const visibility = _exports.visibility = {
    name: 'visible',
    initialValue: 'none',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.IDENT_VALUE,
    parse: (visibility) => {
      switch (visibility) {
        case 'hidden':
          return VISIBILITY.HIDDEN;
        case 'collapse':
          return VISIBILITY.COLLAPSE;
        case 'visible':
        default:
          return VISIBILITY.VISIBLE;
      }
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/word-break.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.wordBreak = _exports.WORD_BREAK = void 0;
  var WORD_BREAK;
  (function (WORD_BREAK) {
    WORD_BREAK["NORMAL"] = "normal";
    WORD_BREAK["BREAK_ALL"] = "break-all";
    WORD_BREAK["KEEP_ALL"] = "keep-all";
  })(WORD_BREAK || (_exports.WORD_BREAK = WORD_BREAK = {}));
  const wordBreak = _exports.wordBreak = {
    name: 'word-break',
    initialValue: 'normal',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.IDENT_VALUE,
    parse: (wordBreak) => {
      switch (wordBreak) {
        case 'break-all':
          return WORD_BREAK.BREAK_ALL;
        case 'keep-all':
          return WORD_BREAK.KEEP_ALL;
        case 'normal':
        default:
          return WORD_BREAK.NORMAL;
      }
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/property-descriptors/z-index.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/IPropertyDescriptor.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/tokenizer.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _IPropertyDescriptor, _parser, _tokenizer) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.zIndex = void 0;


  const zIndex = _exports.zIndex = {
    name: 'z-index',
    initialValue: 'auto',
    prefix: false,
    type: _IPropertyDescriptor.PropertyDescriptorParsingType.VALUE,
    parse: (token) => {
      if (token.type === _tokenizer.TokenType.IDENT_TOKEN) {
        return { auto: true, order: 0 };
      }
      if ((0, _parser.isNumberToken)(token)) {
        return { auto: false, order: token.number };
      }
      throw new Error("Invalid z-index number parsed");
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/syntax/parser.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/tokenizer.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _tokenizer) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.parseFunctionArgs = _exports.nonWhiteSpace = _exports.nonFunctionArgSeparator = _exports.isStringToken = _exports.isNumberToken = _exports.isIdentWithValue = _exports.isIdentToken = _exports.isDimensionToken = _exports.Parser = void 0;
  class Parser {
    constructor(tokens) {
      this._tokens = tokens;
    }
    static create(value) {
      const tokenizer = new _tokenizer.Tokenizer();
      tokenizer.write(value);
      return new Parser(tokenizer.read());
    }
    static parseValue(value) {
      return Parser.create(value).parseComponentValue();
    }
    static parseValues(value) {
      return Parser.create(value).parseComponentValues();
    }
    parseComponentValue() {
      let token = this.consumeToken();
      while (token.type === _tokenizer.TokenType.WHITESPACE_TOKEN) {
        token = this.consumeToken();
      }
      if (token.type === _tokenizer.TokenType.EOF_TOKEN) {
        throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      }
      this.reconsumeToken(token);
      const value = this.consumeComponentValue();
      do {
        token = this.consumeToken();
      } while (token.type === _tokenizer.TokenType.WHITESPACE_TOKEN);
      if (token.type === _tokenizer.TokenType.EOF_TOKEN) {
        return value;
      }
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    }
    parseComponentValues() {
      const values = [];
      while (true) {
        let value = this.consumeComponentValue();
        if (value.type === _tokenizer.TokenType.EOF_TOKEN) {
          return values;
        }
        values.push(value);
        values.push();
      }
    }
    consumeComponentValue() {
      const token = this.consumeToken();
      switch (token.type) {
        case _tokenizer.TokenType.LEFT_CURLY_BRACKET_TOKEN:
        case _tokenizer.TokenType.LEFT_SQUARE_BRACKET_TOKEN:
        case _tokenizer.TokenType.LEFT_PARENTHESIS_TOKEN:
          return this.consumeSimpleBlock(token.type);
        case _tokenizer.TokenType.FUNCTION_TOKEN:
          return this.consumeFunction(token);
      }
      return token;
    }
    consumeSimpleBlock(type) {
      const block = { type, values: [] };
      let token = this.consumeToken();
      while (true) {
        if (token.type === _tokenizer.TokenType.EOF_TOKEN || isEndingTokenFor(token, type)) {
          return block;
        }
        this.reconsumeToken(token);
        block.values.push(this.consumeComponentValue());
        token = this.consumeToken();
      }
    }
    consumeFunction(functionToken) {
      const cssFunction = {
        name: functionToken.value,
        values: [],
        type: _tokenizer.TokenType.FUNCTION
      };
      while (true) {
        const token = this.consumeToken();
        if (token.type === _tokenizer.TokenType.EOF_TOKEN || token.type === _tokenizer.TokenType.RIGHT_PARENTHESIS_TOKEN) {
          return cssFunction;
        }
        this.reconsumeToken(token);
        cssFunction.values.push(this.consumeComponentValue());
      }
    }
    consumeToken() {
      const token = this._tokens.shift();
      return typeof token === 'undefined' ? _tokenizer.EOF_TOKEN : token;
    }
    reconsumeToken(token) {
      this._tokens.unshift(token);
    }
  }_exports.Parser = Parser;
  const isDimensionToken = (token) => token.type === _tokenizer.TokenType.DIMENSION_TOKEN;_exports.isDimensionToken = isDimensionToken;
  const isNumberToken = (token) => token.type === _tokenizer.TokenType.NUMBER_TOKEN;_exports.isNumberToken = isNumberToken;
  const isIdentToken = (token) => token.type === _tokenizer.TokenType.IDENT_TOKEN;_exports.isIdentToken = isIdentToken;
  const isStringToken = (token) => token.type === _tokenizer.TokenType.STRING_TOKEN;_exports.isStringToken = isStringToken;
  const isIdentWithValue = (token, value) => isIdentToken(token) && token.value === value;_exports.isIdentWithValue = isIdentWithValue;
  const nonWhiteSpace = (token) => token.type !== _tokenizer.TokenType.WHITESPACE_TOKEN;_exports.nonWhiteSpace = nonWhiteSpace;
  const nonFunctionArgSeparator = (token) => token.type !== _tokenizer.TokenType.WHITESPACE_TOKEN && token.type !== _tokenizer.TokenType.COMMA_TOKEN;_exports.nonFunctionArgSeparator = nonFunctionArgSeparator;
  const parseFunctionArgs = (tokens) => {
    const args = [];
    let arg = [];
    tokens.forEach((token) => {
      if (token.type === _tokenizer.TokenType.COMMA_TOKEN) {
        if (arg.length === 0) {
          throw new Error("Error parsing function args, zero tokens for arg");
        }
        args.push(arg);
        arg = [];
        return;
      }
      if (token.type !== _tokenizer.TokenType.WHITESPACE_TOKEN) {
        arg.push(token);
      }
    });
    if (arg.length) {
      args.push(arg);
    }
    return args;
  };_exports.parseFunctionArgs = parseFunctionArgs;
  const isEndingTokenFor = (token, type) => {
    if (type === _tokenizer.TokenType.LEFT_CURLY_BRACKET_TOKEN && token.type === _tokenizer.TokenType.RIGHT_CURLY_BRACKET_TOKEN) {
      return true;
    }
    if (type === _tokenizer.TokenType.LEFT_SQUARE_BRACKET_TOKEN && token.type === _tokenizer.TokenType.RIGHT_SQUARE_BRACKET_TOKEN) {
      return true;
    }
    return type === _tokenizer.TokenType.LEFT_PARENTHESIS_TOKEN && token.type === _tokenizer.TokenType.RIGHT_PARENTHESIS_TOKEN;
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/syntax/tokenizer.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/slicedToArray.js"), __webpack_require__("../../node_modules/css-line-break/dist/css-line-break.es5.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _slicedToArray2, _cssLineBreak) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.Tokenizer = _exports.TokenType = _exports.FLAG_UNRESTRICTED = _exports.FLAG_NUMBER = _exports.FLAG_INTEGER = _exports.FLAG_ID = _exports.EOF_TOKEN = void 0;_slicedToArray2 = _interopRequireDefault(_slicedToArray2); // https://www.w3.org/TR/css-syntax-3

  var TokenType;
  (function (TokenType) {
    TokenType[TokenType["STRING_TOKEN"] = 0] = "STRING_TOKEN";
    TokenType[TokenType["BAD_STRING_TOKEN"] = 1] = "BAD_STRING_TOKEN";
    TokenType[TokenType["LEFT_PARENTHESIS_TOKEN"] = 2] = "LEFT_PARENTHESIS_TOKEN";
    TokenType[TokenType["RIGHT_PARENTHESIS_TOKEN"] = 3] = "RIGHT_PARENTHESIS_TOKEN";
    TokenType[TokenType["COMMA_TOKEN"] = 4] = "COMMA_TOKEN";
    TokenType[TokenType["HASH_TOKEN"] = 5] = "HASH_TOKEN";
    TokenType[TokenType["DELIM_TOKEN"] = 6] = "DELIM_TOKEN";
    TokenType[TokenType["AT_KEYWORD_TOKEN"] = 7] = "AT_KEYWORD_TOKEN";
    TokenType[TokenType["PREFIX_MATCH_TOKEN"] = 8] = "PREFIX_MATCH_TOKEN";
    TokenType[TokenType["DASH_MATCH_TOKEN"] = 9] = "DASH_MATCH_TOKEN";
    TokenType[TokenType["INCLUDE_MATCH_TOKEN"] = 10] = "INCLUDE_MATCH_TOKEN";
    TokenType[TokenType["LEFT_CURLY_BRACKET_TOKEN"] = 11] = "LEFT_CURLY_BRACKET_TOKEN";
    TokenType[TokenType["RIGHT_CURLY_BRACKET_TOKEN"] = 12] = "RIGHT_CURLY_BRACKET_TOKEN";
    TokenType[TokenType["SUFFIX_MATCH_TOKEN"] = 13] = "SUFFIX_MATCH_TOKEN";
    TokenType[TokenType["SUBSTRING_MATCH_TOKEN"] = 14] = "SUBSTRING_MATCH_TOKEN";
    TokenType[TokenType["DIMENSION_TOKEN"] = 15] = "DIMENSION_TOKEN";
    TokenType[TokenType["PERCENTAGE_TOKEN"] = 16] = "PERCENTAGE_TOKEN";
    TokenType[TokenType["NUMBER_TOKEN"] = 17] = "NUMBER_TOKEN";
    TokenType[TokenType["FUNCTION"] = 18] = "FUNCTION";
    TokenType[TokenType["FUNCTION_TOKEN"] = 19] = "FUNCTION_TOKEN";
    TokenType[TokenType["IDENT_TOKEN"] = 20] = "IDENT_TOKEN";
    TokenType[TokenType["COLUMN_TOKEN"] = 21] = "COLUMN_TOKEN";
    TokenType[TokenType["URL_TOKEN"] = 22] = "URL_TOKEN";
    TokenType[TokenType["BAD_URL_TOKEN"] = 23] = "BAD_URL_TOKEN";
    TokenType[TokenType["CDC_TOKEN"] = 24] = "CDC_TOKEN";
    TokenType[TokenType["CDO_TOKEN"] = 25] = "CDO_TOKEN";
    TokenType[TokenType["COLON_TOKEN"] = 26] = "COLON_TOKEN";
    TokenType[TokenType["SEMICOLON_TOKEN"] = 27] = "SEMICOLON_TOKEN";
    TokenType[TokenType["LEFT_SQUARE_BRACKET_TOKEN"] = 28] = "LEFT_SQUARE_BRACKET_TOKEN";
    TokenType[TokenType["RIGHT_SQUARE_BRACKET_TOKEN"] = 29] = "RIGHT_SQUARE_BRACKET_TOKEN";
    TokenType[TokenType["UNICODE_RANGE_TOKEN"] = 30] = "UNICODE_RANGE_TOKEN";
    TokenType[TokenType["WHITESPACE_TOKEN"] = 31] = "WHITESPACE_TOKEN";
    TokenType[TokenType["EOF_TOKEN"] = 32] = "EOF_TOKEN";
  })(TokenType || (_exports.TokenType = TokenType = {}));
  const FLAG_UNRESTRICTED = _exports.FLAG_UNRESTRICTED = 1 << 0;
  const FLAG_ID = _exports.FLAG_ID = 1 << 1;
  const FLAG_INTEGER = _exports.FLAG_INTEGER = 1 << 2;
  const FLAG_NUMBER = _exports.FLAG_NUMBER = 1 << 3;
  const LINE_FEED = 0x000a;
  const SOLIDUS = 0x002f;
  const REVERSE_SOLIDUS = 0x005c;
  const CHARACTER_TABULATION = 0x0009;
  const SPACE = 0x0020;
  const QUOTATION_MARK = 0x0022;
  const EQUALS_SIGN = 0x003d;
  const NUMBER_SIGN = 0x0023;
  const DOLLAR_SIGN = 0x0024;
  const PERCENTAGE_SIGN = 0x0025;
  const APOSTROPHE = 0x0027;
  const LEFT_PARENTHESIS = 0x0028;
  const RIGHT_PARENTHESIS = 0x0029;
  const LOW_LINE = 0x005f;
  const HYPHEN_MINUS = 0x002d;
  const EXCLAMATION_MARK = 0x0021;
  const LESS_THAN_SIGN = 0x003c;
  const GREATER_THAN_SIGN = 0x003e;
  const COMMERCIAL_AT = 0x0040;
  const LEFT_SQUARE_BRACKET = 0x005b;
  const RIGHT_SQUARE_BRACKET = 0x005d;
  const CIRCUMFLEX_ACCENT = 0x003d;
  const LEFT_CURLY_BRACKET = 0x007b;
  const QUESTION_MARK = 0x003f;
  const RIGHT_CURLY_BRACKET = 0x007d;
  const VERTICAL_LINE = 0x007c;
  const TILDE = 0x007e;
  const CONTROL = 0x0080;
  const REPLACEMENT_CHARACTER = 0xfffd;
  const ASTERISK = 0x002a;
  const PLUS_SIGN = 0x002b;
  const COMMA = 0x002c;
  const COLON = 0x003a;
  const SEMICOLON = 0x003b;
  const FULL_STOP = 0x002e;
  const NULL = 0x0000;
  const BACKSPACE = 0x0008;
  const LINE_TABULATION = 0x000b;
  const SHIFT_OUT = 0x000e;
  const INFORMATION_SEPARATOR_ONE = 0x001f;
  const DELETE = 0x007f;
  const EOF = -1;
  const ZERO = 0x0030;
  const a = 0x0061;
  const e = 0x0065;
  const f = 0x0066;
  const u = 0x0075;
  const z = 0x007a;
  const A = 0x0041;
  const E = 0x0045;
  const F = 0x0046;
  const U = 0x0055;
  const Z = 0x005a;
  const isDigit = (codePoint) => codePoint >= ZERO && codePoint <= 0x0039;
  const isSurrogateCodePoint = (codePoint) => codePoint >= 0xd800 && codePoint <= 0xdfff;
  const isHex = (codePoint) => isDigit(codePoint) || codePoint >= A && codePoint <= F || codePoint >= a && codePoint <= f;
  const isLowerCaseLetter = (codePoint) => codePoint >= a && codePoint <= z;
  const isUpperCaseLetter = (codePoint) => codePoint >= A && codePoint <= Z;
  const isLetter = (codePoint) => isLowerCaseLetter(codePoint) || isUpperCaseLetter(codePoint);
  const isNonASCIICodePoint = (codePoint) => codePoint >= CONTROL;
  const isWhiteSpace = (codePoint) => codePoint === LINE_FEED || codePoint === CHARACTER_TABULATION || codePoint === SPACE;
  const isNameStartCodePoint = (codePoint) => isLetter(codePoint) || isNonASCIICodePoint(codePoint) || codePoint === LOW_LINE;
  const isNameCodePoint = (codePoint) => isNameStartCodePoint(codePoint) || isDigit(codePoint) || codePoint === HYPHEN_MINUS;
  const isNonPrintableCodePoint = (codePoint) => {
    return codePoint >= NULL && codePoint <= BACKSPACE ||
    codePoint === LINE_TABULATION ||
    codePoint >= SHIFT_OUT && codePoint <= INFORMATION_SEPARATOR_ONE ||
    codePoint === DELETE;
  };
  const isValidEscape = (c1, c2) => {
    if (c1 !== REVERSE_SOLIDUS) {
      return false;
    }
    return c2 !== LINE_FEED;
  };
  const isIdentifierStart = (c1, c2, c3) => {
    if (c1 === HYPHEN_MINUS) {
      return isNameStartCodePoint(c2) || isValidEscape(c2, c3);
    } else
    if (isNameStartCodePoint(c1)) {
      return true;
    } else
    if (c1 === REVERSE_SOLIDUS && isValidEscape(c1, c2)) {
      return true;
    }
    return false;
  };
  const isNumberStart = (c1, c2, c3) => {
    if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
      if (isDigit(c2)) {
        return true;
      }
      return c2 === FULL_STOP && isDigit(c3);
    }
    if (c1 === FULL_STOP) {
      return isDigit(c2);
    }
    return isDigit(c1);
  };
  const stringToNumber = (codePoints) => {
    let c = 0;
    let sign = 1;
    if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
      if (codePoints[c] === HYPHEN_MINUS) {
        sign = -1;
      }
      c++;
    }
    const integers = [];
    while (isDigit(codePoints[c])) {
      integers.push(codePoints[c++]);
    }
    const int = integers.length ? parseInt((0, _cssLineBreak.fromCodePoint)(...integers), 10) : 0;
    if (codePoints[c] === FULL_STOP) {
      c++;
    }
    const fraction = [];
    while (isDigit(codePoints[c])) {
      fraction.push(codePoints[c++]);
    }
    const fracd = fraction.length;
    const frac = fracd ? parseInt((0, _cssLineBreak.fromCodePoint)(...fraction), 10) : 0;
    if (codePoints[c] === E || codePoints[c] === e) {
      c++;
    }
    let expsign = 1;
    if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
      if (codePoints[c] === HYPHEN_MINUS) {
        expsign = -1;
      }
      c++;
    }
    const exponent = [];
    while (isDigit(codePoints[c])) {
      exponent.push(codePoints[c++]);
    }
    const exp = exponent.length ? parseInt((0, _cssLineBreak.fromCodePoint)(...exponent), 10) : 0;
    return sign * (int + frac * Math.pow(10, -fracd)) * Math.pow(10, expsign * exp);
  };
  const LEFT_PARENTHESIS_TOKEN = {
    type: TokenType.LEFT_PARENTHESIS_TOKEN
  };
  const RIGHT_PARENTHESIS_TOKEN = {
    type: TokenType.RIGHT_PARENTHESIS_TOKEN
  };
  const COMMA_TOKEN = { type: TokenType.COMMA_TOKEN };
  const SUFFIX_MATCH_TOKEN = { type: TokenType.SUFFIX_MATCH_TOKEN };
  const PREFIX_MATCH_TOKEN = { type: TokenType.PREFIX_MATCH_TOKEN };
  const COLUMN_TOKEN = { type: TokenType.COLUMN_TOKEN };
  const DASH_MATCH_TOKEN = { type: TokenType.DASH_MATCH_TOKEN };
  const INCLUDE_MATCH_TOKEN = { type: TokenType.INCLUDE_MATCH_TOKEN };
  const LEFT_CURLY_BRACKET_TOKEN = {
    type: TokenType.LEFT_CURLY_BRACKET_TOKEN
  };
  const RIGHT_CURLY_BRACKET_TOKEN = {
    type: TokenType.RIGHT_CURLY_BRACKET_TOKEN
  };
  const SUBSTRING_MATCH_TOKEN = { type: TokenType.SUBSTRING_MATCH_TOKEN };
  const BAD_URL_TOKEN = { type: TokenType.BAD_URL_TOKEN };
  const BAD_STRING_TOKEN = { type: TokenType.BAD_STRING_TOKEN };
  const CDO_TOKEN = { type: TokenType.CDO_TOKEN };
  const CDC_TOKEN = { type: TokenType.CDC_TOKEN };
  const COLON_TOKEN = { type: TokenType.COLON_TOKEN };
  const SEMICOLON_TOKEN = { type: TokenType.SEMICOLON_TOKEN };
  const LEFT_SQUARE_BRACKET_TOKEN = {
    type: TokenType.LEFT_SQUARE_BRACKET_TOKEN
  };
  const RIGHT_SQUARE_BRACKET_TOKEN = {
    type: TokenType.RIGHT_SQUARE_BRACKET_TOKEN
  };
  const WHITESPACE_TOKEN = { type: TokenType.WHITESPACE_TOKEN };
  const EOF_TOKEN = _exports.EOF_TOKEN = { type: TokenType.EOF_TOKEN };
  class Tokenizer {
    constructor() {
      this._value = [];
    }
    write(chunk) {
      this._value = this._value.concat((0, _cssLineBreak.toCodePoints)(chunk));
    }
    read() {
      const tokens = [];
      let token = this.consumeToken();
      while (token !== EOF_TOKEN) {
        tokens.push(token);
        token = this.consumeToken();
      }
      return tokens;
    }
    consumeToken() {
      const codePoint = this.consumeCodePoint();
      switch (codePoint) {
        case QUOTATION_MARK:
          return this.consumeStringToken(QUOTATION_MARK);
        case NUMBER_SIGN:
          const c1 = this.peekCodePoint(0);
          const c2 = this.peekCodePoint(1);
          const c3 = this.peekCodePoint(2);
          if (isNameCodePoint(c1) || isValidEscape(c2, c3)) {
            const flags = isIdentifierStart(c1, c2, c3) ? FLAG_ID : FLAG_UNRESTRICTED;
            const value = this.consumeName();
            return { type: TokenType.HASH_TOKEN, value, flags };
          }
          break;
        case DOLLAR_SIGN:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return SUFFIX_MATCH_TOKEN;
          }
          break;
        case APOSTROPHE:
          return this.consumeStringToken(APOSTROPHE);
        case LEFT_PARENTHESIS:
          return LEFT_PARENTHESIS_TOKEN;
        case RIGHT_PARENTHESIS:
          return RIGHT_PARENTHESIS_TOKEN;
        case ASTERISK:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return SUBSTRING_MATCH_TOKEN;
          }
          break;
        case PLUS_SIGN:
          if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeNumericToken();
          }
          break;
        case COMMA:
          return COMMA_TOKEN;
        case HYPHEN_MINUS:
          const e1 = codePoint;
          const e2 = this.peekCodePoint(0);
          const e3 = this.peekCodePoint(1);
          if (isNumberStart(e1, e2, e3)) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeNumericToken();
          }
          if (isIdentifierStart(e1, e2, e3)) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeIdentLikeToken();
          }
          if (e2 === HYPHEN_MINUS && e3 === GREATER_THAN_SIGN) {
            this.consumeCodePoint();
            this.consumeCodePoint();
            return CDC_TOKEN;
          }
          break;
        case FULL_STOP:
          if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeNumericToken();
          }
          break;
        case SOLIDUS:
          if (this.peekCodePoint(0) === ASTERISK) {
            this.consumeCodePoint();
            while (true) {
              let c = this.consumeCodePoint();
              if (c === ASTERISK) {
                c = this.consumeCodePoint();
                if (c === SOLIDUS) {
                  return this.consumeToken();
                }
              }
              if (c === EOF) {
                return this.consumeToken();
              }
            }
          }
          break;
        case COLON:
          return COLON_TOKEN;
        case SEMICOLON:
          return SEMICOLON_TOKEN;
        case LESS_THAN_SIGN:
          if (this.peekCodePoint(0) === EXCLAMATION_MARK &&
          this.peekCodePoint(1) === HYPHEN_MINUS &&
          this.peekCodePoint(2) === HYPHEN_MINUS) {
            this.consumeCodePoint();
            this.consumeCodePoint();
            return CDO_TOKEN;
          }
          break;
        case COMMERCIAL_AT:
          const a1 = this.peekCodePoint(0);
          const a2 = this.peekCodePoint(1);
          const a3 = this.peekCodePoint(2);
          if (isIdentifierStart(a1, a2, a3)) {
            const value = this.consumeName();
            return { type: TokenType.AT_KEYWORD_TOKEN, value };
          }
          break;
        case LEFT_SQUARE_BRACKET:
          return LEFT_SQUARE_BRACKET_TOKEN;
        case REVERSE_SOLIDUS:
          if (isValidEscape(codePoint, this.peekCodePoint(0))) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeIdentLikeToken();
          }
          break;
        case RIGHT_SQUARE_BRACKET:
          return RIGHT_SQUARE_BRACKET_TOKEN;
        case CIRCUMFLEX_ACCENT:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return PREFIX_MATCH_TOKEN;
          }
          break;
        case LEFT_CURLY_BRACKET:
          return LEFT_CURLY_BRACKET_TOKEN;
        case RIGHT_CURLY_BRACKET:
          return RIGHT_CURLY_BRACKET_TOKEN;
        case u:
        case U:
          const u1 = this.peekCodePoint(0);
          const u2 = this.peekCodePoint(1);
          if (u1 === PLUS_SIGN && (isHex(u2) || u2 === QUESTION_MARK)) {
            this.consumeCodePoint();
            this.consumeUnicodeRangeToken();
          }
          this.reconsumeCodePoint(codePoint);
          return this.consumeIdentLikeToken();
        case VERTICAL_LINE:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return DASH_MATCH_TOKEN;
          }
          if (this.peekCodePoint(0) === VERTICAL_LINE) {
            this.consumeCodePoint();
            return COLUMN_TOKEN;
          }
          break;
        case TILDE:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return INCLUDE_MATCH_TOKEN;
          }
          break;
        case EOF:
          return EOF_TOKEN;
      }
      if (isWhiteSpace(codePoint)) {
        this.consumeWhiteSpace();
        return WHITESPACE_TOKEN;
      }
      if (isDigit(codePoint)) {
        this.reconsumeCodePoint(codePoint);
        return this.consumeNumericToken();
      }
      if (isNameStartCodePoint(codePoint)) {
        this.reconsumeCodePoint(codePoint);
        return this.consumeIdentLikeToken();
      }
      return { type: TokenType.DELIM_TOKEN, value: (0, _cssLineBreak.fromCodePoint)(codePoint) };
    }
    consumeCodePoint() {
      const value = this._value.shift();
      return typeof value === 'undefined' ? -1 : value;
    }
    reconsumeCodePoint(codePoint) {
      this._value.unshift(codePoint);
    }
    peekCodePoint(delta) {
      if (delta >= this._value.length) {
        return -1;
      }
      return this._value[delta];
    }
    consumeUnicodeRangeToken() {
      const digits = [];
      let codePoint = this.consumeCodePoint();
      while (isHex(codePoint) && digits.length < 6) {
        digits.push(codePoint);
        codePoint = this.consumeCodePoint();
      }
      let questionMarks = false;
      while (codePoint === QUESTION_MARK && digits.length < 6) {
        digits.push(codePoint);
        codePoint = this.consumeCodePoint();
        questionMarks = true;
      }
      if (questionMarks) {
        const start = parseInt((0, _cssLineBreak.fromCodePoint)(...digits.map((digit) => digit === QUESTION_MARK ? ZERO : digit)), 16);
        const end = parseInt((0, _cssLineBreak.fromCodePoint)(...digits.map((digit) => digit === QUESTION_MARK ? F : digit)), 16);
        return { type: TokenType.UNICODE_RANGE_TOKEN, start, end };
      }
      const start = parseInt((0, _cssLineBreak.fromCodePoint)(...digits), 16);
      if (this.peekCodePoint(0) === HYPHEN_MINUS && isHex(this.peekCodePoint(1))) {
        this.consumeCodePoint();
        codePoint = this.consumeCodePoint();
        const endDigits = [];
        while (isHex(codePoint) && endDigits.length < 6) {
          endDigits.push(codePoint);
          codePoint = this.consumeCodePoint();
        }
        const end = parseInt((0, _cssLineBreak.fromCodePoint)(...endDigits), 16);
        return { type: TokenType.UNICODE_RANGE_TOKEN, start, end };
      } else
      {
        return { type: TokenType.UNICODE_RANGE_TOKEN, start, end: start };
      }
    }
    consumeIdentLikeToken() {
      const value = this.consumeName();
      if (value.toLowerCase() === 'url' && this.peekCodePoint(0) === LEFT_PARENTHESIS) {
        this.consumeCodePoint();
        return this.consumeUrlToken();
      } else
      if (this.peekCodePoint(0) === LEFT_PARENTHESIS) {
        this.consumeCodePoint();
        return { type: TokenType.FUNCTION_TOKEN, value };
      }
      return { type: TokenType.IDENT_TOKEN, value };
    }
    consumeUrlToken() {
      const value = [];
      this.consumeWhiteSpace();
      if (this.peekCodePoint(0) === EOF) {
        return { type: TokenType.URL_TOKEN, value: '' };
      }
      const next = this.peekCodePoint(0);
      if (next === APOSTROPHE || next === QUOTATION_MARK) {
        const stringToken = this.consumeStringToken(this.consumeCodePoint());
        if (stringToken.type === TokenType.STRING_TOKEN) {
          this.consumeWhiteSpace();
          if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
            this.consumeCodePoint();
            return { type: TokenType.URL_TOKEN, value: stringToken.value };
          }
        }
        this.consumeBadUrlRemnants();
        return BAD_URL_TOKEN;
      }
      while (true) {
        const codePoint = this.consumeCodePoint();
        if (codePoint === EOF || codePoint === RIGHT_PARENTHESIS) {
          return { type: TokenType.URL_TOKEN, value: (0, _cssLineBreak.fromCodePoint)(...value) };
        } else
        if (isWhiteSpace(codePoint)) {
          this.consumeWhiteSpace();
          if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
            this.consumeCodePoint();
            return { type: TokenType.URL_TOKEN, value: (0, _cssLineBreak.fromCodePoint)(...value) };
          }
          this.consumeBadUrlRemnants();
          return BAD_URL_TOKEN;
        } else
        if (codePoint === QUOTATION_MARK ||
        codePoint === APOSTROPHE ||
        codePoint === LEFT_PARENTHESIS ||
        isNonPrintableCodePoint(codePoint)) {
          this.consumeBadUrlRemnants();
          return BAD_URL_TOKEN;
        } else
        if (codePoint === REVERSE_SOLIDUS) {
          if (isValidEscape(codePoint, this.peekCodePoint(0))) {
            value.push(this.consumeEscapedCodePoint());
          } else
          {
            this.consumeBadUrlRemnants();
            return BAD_URL_TOKEN;
          }
        } else
        {
          value.push(codePoint);
        }
      }
    }
    consumeWhiteSpace() {
      while (isWhiteSpace(this.peekCodePoint(0))) {
        this.consumeCodePoint();
      }
    }
    consumeBadUrlRemnants() {
      while (true) {
        let codePoint = this.consumeCodePoint();
        if (codePoint === RIGHT_PARENTHESIS || codePoint === EOF) {
          return;
        }
        if (isValidEscape(codePoint, this.peekCodePoint(0))) {
          this.consumeEscapedCodePoint();
        }
      }
    }
    consumeStringSlice(count) {
      const SLICE_STACK_SIZE = 60000;
      let value = '';
      while (count > 0) {
        const amount = Math.min(SLICE_STACK_SIZE, count);
        value += (0, _cssLineBreak.fromCodePoint)(...this._value.splice(0, amount));
        count -= amount;
      }
      this._value.shift();
      return value;
    }
    consumeStringToken(endingCodePoint) {
      let value = '';
      let i = 0;
      do {
        const codePoint = this._value[i];
        if (codePoint === EOF || codePoint === undefined || codePoint === endingCodePoint) {
          value += this.consumeStringSlice(i);
          return { type: TokenType.STRING_TOKEN, value };
        }
        if (codePoint === LINE_FEED) {
          this._value.splice(0, i);
          return BAD_STRING_TOKEN;
        }
        if (codePoint === REVERSE_SOLIDUS) {
          const next = this._value[i + 1];
          if (next !== EOF && next !== undefined) {
            if (next === LINE_FEED) {
              value += this.consumeStringSlice(i);
              i = -1;
              this._value.shift();
            } else
            if (isValidEscape(codePoint, next)) {
              value += this.consumeStringSlice(i);
              value += (0, _cssLineBreak.fromCodePoint)(this.consumeEscapedCodePoint());
              i = -1;
            }
          }
        }
        i++;
      } while (true);
    }
    consumeNumber() {
      let repr = [];
      let type = FLAG_INTEGER;
      let c1 = this.peekCodePoint(0);
      if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
        repr.push(this.consumeCodePoint());
      }
      while (isDigit(this.peekCodePoint(0))) {
        repr.push(this.consumeCodePoint());
      }
      c1 = this.peekCodePoint(0);
      let c2 = this.peekCodePoint(1);
      if (c1 === FULL_STOP && isDigit(c2)) {
        repr.push(this.consumeCodePoint(), this.consumeCodePoint());
        type = FLAG_NUMBER;
        while (isDigit(this.peekCodePoint(0))) {
          repr.push(this.consumeCodePoint());
        }
      }
      c1 = this.peekCodePoint(0);
      c2 = this.peekCodePoint(1);
      let c3 = this.peekCodePoint(2);
      if ((c1 === E || c1 === e) && ((c2 === PLUS_SIGN || c2 === HYPHEN_MINUS) && isDigit(c3) || isDigit(c2))) {
        repr.push(this.consumeCodePoint(), this.consumeCodePoint());
        type = FLAG_NUMBER;
        while (isDigit(this.peekCodePoint(0))) {
          repr.push(this.consumeCodePoint());
        }
      }
      return [stringToNumber(repr), type];
    }
    consumeNumericToken() {const _this$consumeNumber =
        this.consumeNumber(),_this$consumeNumber2 = (0, _slicedToArray2.default)(_this$consumeNumber, 2),number = _this$consumeNumber2[0],flags = _this$consumeNumber2[1];
      const c1 = this.peekCodePoint(0);
      const c2 = this.peekCodePoint(1);
      const c3 = this.peekCodePoint(2);
      if (isIdentifierStart(c1, c2, c3)) {
        let unit = this.consumeName();
        return { type: TokenType.DIMENSION_TOKEN, number, flags, unit };
      }
      if (c1 === PERCENTAGE_SIGN) {
        this.consumeCodePoint();
        return { type: TokenType.PERCENTAGE_TOKEN, number, flags };
      }
      return { type: TokenType.NUMBER_TOKEN, number, flags };
    }
    consumeEscapedCodePoint() {
      const codePoint = this.consumeCodePoint();
      if (isHex(codePoint)) {
        let hex = (0, _cssLineBreak.fromCodePoint)(codePoint);
        while (isHex(this.peekCodePoint(0)) && hex.length < 6) {
          hex += (0, _cssLineBreak.fromCodePoint)(this.consumeCodePoint());
        }
        if (isWhiteSpace(this.peekCodePoint(0))) {
          this.consumeCodePoint();
        }
        const hexCodePoint = parseInt(hex, 16);
        if (hexCodePoint === 0 || isSurrogateCodePoint(hexCodePoint) || hexCodePoint > 0x10ffff) {
          return REPLACEMENT_CHARACTER;
        }
        return hexCodePoint;
      }
      if (codePoint === EOF) {
        return REPLACEMENT_CHARACTER;
      }
      return codePoint;
    }
    consumeName() {
      let result = '';
      while (true) {
        const codePoint = this.consumeCodePoint();
        if (isNameCodePoint(codePoint)) {
          result += (0, _cssLineBreak.fromCodePoint)(codePoint);
        } else
        if (isValidEscape(codePoint, this.peekCodePoint(0))) {
          result += (0, _cssLineBreak.fromCodePoint)(this.consumeEscapedCodePoint());
        } else
        {
          this.reconsumeCodePoint(codePoint);
          return result;
        }
      }
    }
  }_exports.Tokenizer = Tokenizer;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/types/angle.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/tokenizer.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/length-percentage.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _parser, _tokenizer, _lengthPercentage) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.parseNamedSide = _exports.isAngle = _exports.deg = _exports.angle = void 0;


  const DEG = 'deg';
  const GRAD = 'grad';
  const RAD = 'rad';
  const TURN = 'turn';
  const angle = _exports.angle = {
    name: 'angle',
    parse: (value) => {
      if (value.type === _tokenizer.TokenType.DIMENSION_TOKEN) {
        switch (value.unit) {
          case DEG:
            return Math.PI * value.number / 180;
          case GRAD:
            return Math.PI / 200 * value.number;
          case RAD:
            return value.number;
          case TURN:
            return Math.PI * 2 * value.number;
        }
      }
      throw new Error("Unsupported angle type");
    }
  };
  const isAngle = (value) => {
    if (value.type === _tokenizer.TokenType.DIMENSION_TOKEN) {
      if (value.unit === DEG || value.unit === GRAD || value.unit === RAD || value.unit === TURN) {
        return true;
      }
    }
    return false;
  };_exports.isAngle = isAngle;
  const parseNamedSide = (tokens) => {
    const sideOrCorner = tokens.
    filter(_parser.isIdentToken).
    map((ident) => ident.value).
    join(' ');
    switch (sideOrCorner) {
      case 'to bottom right':
      case 'to right bottom':
      case 'left top':
      case 'top left':
        return [_lengthPercentage.ZERO_LENGTH, _lengthPercentage.ZERO_LENGTH];
      case 'to top':
      case 'bottom':
        return deg(0);
      case 'to bottom left':
      case 'to left bottom':
      case 'right top':
      case 'top right':
        return [_lengthPercentage.ZERO_LENGTH, _lengthPercentage.HUNDRED_PERCENT];
      case 'to right':
      case 'left':
        return deg(90);
      case 'to top left':
      case 'to left top':
      case 'right bottom':
      case 'bottom right':
        return [_lengthPercentage.HUNDRED_PERCENT, _lengthPercentage.HUNDRED_PERCENT];
      case 'to bottom':
      case 'top':
        return deg(180);
      case 'to top right':
      case 'to right top':
      case 'left bottom':
      case 'bottom left':
        return [_lengthPercentage.HUNDRED_PERCENT, _lengthPercentage.ZERO_LENGTH];
      case 'to left':
      case 'right':
        return deg(270);
    }
    return 0;
  };_exports.parseNamedSide = parseNamedSide;
  const deg = (deg) => Math.PI * deg / 180;_exports.deg = deg;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/types/color.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/slicedToArray.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/tokenizer.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/angle.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/length-percentage.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _slicedToArray2, _parser, _tokenizer, _angle, _lengthPercentage) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.pack = _exports.isTransparent = _exports.color = _exports.asString = _exports.COLORS = void 0;_slicedToArray2 = _interopRequireDefault(_slicedToArray2);



  const color = _exports.color = {
    name: 'color',
    parse: (value) => {
      if (value.type === _tokenizer.TokenType.FUNCTION) {
        const colorFunction = SUPPORTED_COLOR_FUNCTIONS[value.name];
        if (typeof colorFunction === 'undefined') {
          throw new Error("Attempting to parse an unsupported color function \"".concat(value.name, "\""));
        }
        return colorFunction(value.values);
      }
      if (value.type === _tokenizer.TokenType.HASH_TOKEN) {
        if (value.value.length === 3) {
          const r = value.value.substring(0, 1);
          const g = value.value.substring(1, 2);
          const b = value.value.substring(2, 3);
          return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), 1);
        }
        if (value.value.length === 4) {
          const r = value.value.substring(0, 1);
          const g = value.value.substring(1, 2);
          const b = value.value.substring(2, 3);
          const a = value.value.substring(3, 4);
          return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), parseInt(a + a, 16) / 255);
        }
        if (value.value.length === 6) {
          const r = value.value.substring(0, 2);
          const g = value.value.substring(2, 4);
          const b = value.value.substring(4, 6);
          return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), 1);
        }
        if (value.value.length === 8) {
          const r = value.value.substring(0, 2);
          const g = value.value.substring(2, 4);
          const b = value.value.substring(4, 6);
          const a = value.value.substring(6, 8);
          return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), parseInt(a, 16) / 255);
        }
      }
      if (value.type === _tokenizer.TokenType.IDENT_TOKEN) {
        const namedColor = COLORS[value.value.toUpperCase()];
        if (typeof namedColor !== 'undefined') {
          return namedColor;
        }
      }
      return COLORS.TRANSPARENT;
    }
  };
  const isTransparent = (color) => (0xff & color) === 0;_exports.isTransparent = isTransparent;
  const asString = (color) => {
    const alpha = 0xff & color;
    const blue = 0xff & color >> 8;
    const green = 0xff & color >> 16;
    const red = 0xff & color >> 24;
    return alpha < 255 ? "rgba(".concat(red, ",").concat(green, ",").concat(blue, ",").concat(alpha / 255, ")") : "rgb(".concat(red, ",").concat(green, ",").concat(blue, ")");
  };_exports.asString = asString;
  const pack = (r, g, b, a) => (r << 24 | g << 16 | b << 8 | Math.round(a * 255) << 0) >>> 0;_exports.pack = pack;
  const getTokenColorValue = (token, i) => {
    if (token.type === _tokenizer.TokenType.NUMBER_TOKEN) {
      return token.number;
    }
    if (token.type === _tokenizer.TokenType.PERCENTAGE_TOKEN) {
      const max = i === 3 ? 1 : 255;
      return i === 3 ? token.number / 100 * max : Math.round(token.number / 100 * max);
    }
    return 0;
  };
  const rgb = (args) => {
    const tokens = args.filter(_parser.nonFunctionArgSeparator);
    if (tokens.length === 3) {const _tokens$map =
        tokens.map(getTokenColorValue),_tokens$map2 = (0, _slicedToArray2.default)(_tokens$map, 3),r = _tokens$map2[0],g = _tokens$map2[1],b = _tokens$map2[2];
      return pack(r, g, b, 1);
    }
    if (tokens.length === 4) {const _tokens$map3 =
        tokens.map(getTokenColorValue),_tokens$map4 = (0, _slicedToArray2.default)(_tokens$map3, 4),r = _tokens$map4[0],g = _tokens$map4[1],b = _tokens$map4[2],a = _tokens$map4[3];
      return pack(r, g, b, a);
    }
    return 0;
  };
  function hue2rgb(t1, t2, hue) {
    if (hue < 0) {
      hue += 1;
    }
    if (hue >= 1) {
      hue -= 1;
    }
    if (hue < 1 / 6) {
      return (t2 - t1) * hue * 6 + t1;
    } else
    if (hue < 1 / 2) {
      return t2;
    } else
    if (hue < 2 / 3) {
      return (t2 - t1) * 6 * (2 / 3 - hue) + t1;
    } else
    {
      return t1;
    }
  }
  const hsl = (args) => {
    const tokens = args.filter(_parser.nonFunctionArgSeparator);const _tokens = (0, _slicedToArray2.default)(
        tokens, 4),hue = _tokens[0],saturation = _tokens[1],lightness = _tokens[2],alpha = _tokens[3];
    const h = (hue.type === _tokenizer.TokenType.NUMBER_TOKEN ? (0, _angle.deg)(hue.number) : _angle.angle.parse(hue)) / (Math.PI * 2);
    const s = (0, _lengthPercentage.isLengthPercentage)(saturation) ? saturation.number / 100 : 0;
    const l = (0, _lengthPercentage.isLengthPercentage)(lightness) ? lightness.number / 100 : 0;
    const a = typeof alpha !== 'undefined' && (0, _lengthPercentage.isLengthPercentage)(alpha) ? (0, _lengthPercentage.getAbsoluteValue)(alpha, 1) : 1;
    if (s === 0) {
      return pack(l * 255, l * 255, l * 255, 1);
    }
    const t2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
    const t1 = l * 2 - t2;
    const r = hue2rgb(t1, t2, h + 1 / 3);
    const g = hue2rgb(t1, t2, h);
    const b = hue2rgb(t1, t2, h - 1 / 3);
    return pack(r * 255, g * 255, b * 255, a);
  };
  const SUPPORTED_COLOR_FUNCTIONS = {
    hsl: hsl,
    hsla: hsl,
    rgb: rgb,
    rgba: rgb
  };
  const COLORS = _exports.COLORS = {
    ALICEBLUE: 0xf0f8ffff,
    ANTIQUEWHITE: 0xfaebd7ff,
    AQUA: 0x00ffffff,
    AQUAMARINE: 0x7fffd4ff,
    AZURE: 0xf0ffffff,
    BEIGE: 0xf5f5dcff,
    BISQUE: 0xffe4c4ff,
    BLACK: 0x000000ff,
    BLANCHEDALMOND: 0xffebcdff,
    BLUE: 0x0000ffff,
    BLUEVIOLET: 0x8a2be2ff,
    BROWN: 0xa52a2aff,
    BURLYWOOD: 0xdeb887ff,
    CADETBLUE: 0x5f9ea0ff,
    CHARTREUSE: 0x7fff00ff,
    CHOCOLATE: 0xd2691eff,
    CORAL: 0xff7f50ff,
    CORNFLOWERBLUE: 0x6495edff,
    CORNSILK: 0xfff8dcff,
    CRIMSON: 0xdc143cff,
    CYAN: 0x00ffffff,
    DARKBLUE: 0x00008bff,
    DARKCYAN: 0x008b8bff,
    DARKGOLDENROD: 0xb886bbff,
    DARKGRAY: 0xa9a9a9ff,
    DARKGREEN: 0x006400ff,
    DARKGREY: 0xa9a9a9ff,
    DARKKHAKI: 0xbdb76bff,
    DARKMAGENTA: 0x8b008bff,
    DARKOLIVEGREEN: 0x556b2fff,
    DARKORANGE: 0xff8c00ff,
    DARKORCHID: 0x9932ccff,
    DARKRED: 0x8b0000ff,
    DARKSALMON: 0xe9967aff,
    DARKSEAGREEN: 0x8fbc8fff,
    DARKSLATEBLUE: 0x483d8bff,
    DARKSLATEGRAY: 0x2f4f4fff,
    DARKSLATEGREY: 0x2f4f4fff,
    DARKTURQUOISE: 0x00ced1ff,
    DARKVIOLET: 0x9400d3ff,
    DEEPPINK: 0xff1493ff,
    DEEPSKYBLUE: 0x00bfffff,
    DIMGRAY: 0x696969ff,
    DIMGREY: 0x696969ff,
    DODGERBLUE: 0x1e90ffff,
    FIREBRICK: 0xb22222ff,
    FLORALWHITE: 0xfffaf0ff,
    FORESTGREEN: 0x228b22ff,
    FUCHSIA: 0xff00ffff,
    GAINSBORO: 0xdcdcdcff,
    GHOSTWHITE: 0xf8f8ffff,
    GOLD: 0xffd700ff,
    GOLDENROD: 0xdaa520ff,
    GRAY: 0x808080ff,
    GREEN: 0x008000ff,
    GREENYELLOW: 0xadff2fff,
    GREY: 0x808080ff,
    HONEYDEW: 0xf0fff0ff,
    HOTPINK: 0xff69b4ff,
    INDIANRED: 0xcd5c5cff,
    INDIGO: 0x4b0082ff,
    IVORY: 0xfffff0ff,
    KHAKI: 0xf0e68cff,
    LAVENDER: 0xe6e6faff,
    LAVENDERBLUSH: 0xfff0f5ff,
    LAWNGREEN: 0x7cfc00ff,
    LEMONCHIFFON: 0xfffacdff,
    LIGHTBLUE: 0xadd8e6ff,
    LIGHTCORAL: 0xf08080ff,
    LIGHTCYAN: 0xe0ffffff,
    LIGHTGOLDENRODYELLOW: 0xfafad2ff,
    LIGHTGRAY: 0xd3d3d3ff,
    LIGHTGREEN: 0x90ee90ff,
    LIGHTGREY: 0xd3d3d3ff,
    LIGHTPINK: 0xffb6c1ff,
    LIGHTSALMON: 0xffa07aff,
    LIGHTSEAGREEN: 0x20b2aaff,
    LIGHTSKYBLUE: 0x87cefaff,
    LIGHTSLATEGRAY: 0x778899ff,
    LIGHTSLATEGREY: 0x778899ff,
    LIGHTSTEELBLUE: 0xb0c4deff,
    LIGHTYELLOW: 0xffffe0ff,
    LIME: 0x00ff00ff,
    LIMEGREEN: 0x32cd32ff,
    LINEN: 0xfaf0e6ff,
    MAGENTA: 0xff00ffff,
    MAROON: 0x800000ff,
    MEDIUMAQUAMARINE: 0x66cdaaff,
    MEDIUMBLUE: 0x0000cdff,
    MEDIUMORCHID: 0xba55d3ff,
    MEDIUMPURPLE: 0x9370dbff,
    MEDIUMSEAGREEN: 0x3cb371ff,
    MEDIUMSLATEBLUE: 0x7b68eeff,
    MEDIUMSPRINGGREEN: 0x00fa9aff,
    MEDIUMTURQUOISE: 0x48d1ccff,
    MEDIUMVIOLETRED: 0xc71585ff,
    MIDNIGHTBLUE: 0x191970ff,
    MINTCREAM: 0xf5fffaff,
    MISTYROSE: 0xffe4e1ff,
    MOCCASIN: 0xffe4b5ff,
    NAVAJOWHITE: 0xffdeadff,
    NAVY: 0x000080ff,
    OLDLACE: 0xfdf5e6ff,
    OLIVE: 0x808000ff,
    OLIVEDRAB: 0x6b8e23ff,
    ORANGE: 0xffa500ff,
    ORANGERED: 0xff4500ff,
    ORCHID: 0xda70d6ff,
    PALEGOLDENROD: 0xeee8aaff,
    PALEGREEN: 0x98fb98ff,
    PALETURQUOISE: 0xafeeeeff,
    PALEVIOLETRED: 0xdb7093ff,
    PAPAYAWHIP: 0xffefd5ff,
    PEACHPUFF: 0xffdab9ff,
    PERU: 0xcd853fff,
    PINK: 0xffc0cbff,
    PLUM: 0xdda0ddff,
    POWDERBLUE: 0xb0e0e6ff,
    PURPLE: 0x800080ff,
    REBECCAPURPLE: 0x663399ff,
    RED: 0xff0000ff,
    ROSYBROWN: 0xbc8f8fff,
    ROYALBLUE: 0x4169e1ff,
    SADDLEBROWN: 0x8b4513ff,
    SALMON: 0xfa8072ff,
    SANDYBROWN: 0xf4a460ff,
    SEAGREEN: 0x2e8b57ff,
    SEASHELL: 0xfff5eeff,
    SIENNA: 0xa0522dff,
    SILVER: 0xc0c0c0ff,
    SKYBLUE: 0x87ceebff,
    SLATEBLUE: 0x6a5acdff,
    SLATEGRAY: 0x708090ff,
    SLATEGREY: 0x708090ff,
    SNOW: 0xfffafaff,
    SPRINGGREEN: 0x00ff7fff,
    STEELBLUE: 0x4682b4ff,
    TAN: 0xd2b48cff,
    TEAL: 0x008080ff,
    THISTLE: 0xd8bfd8ff,
    TOMATO: 0xff6347ff,
    TRANSPARENT: 0x00000000,
    TURQUOISE: 0x40e0d0ff,
    VIOLET: 0xee82eeff,
    WHEAT: 0xf5deb3ff,
    WHITE: 0xffffffff,
    WHITESMOKE: 0xf5f5f5ff,
    YELLOW: 0xffff00ff,
    YELLOWGREEN: 0x9acd32ff
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/types/functions/-prefix-linear-gradient.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/image.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/tokenizer.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/angle.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/functions/gradient.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _parser, _image, _tokenizer, _angle, _gradient) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.prefixLinearGradient = void 0;




  const prefixLinearGradient = (tokens) => {
    let angle = (0, _angle.deg)(180);
    const stops = [];
    (0, _parser.parseFunctionArgs)(tokens).forEach((arg, i) => {
      if (i === 0) {
        const firstToken = arg[0];
        if (firstToken.type === _tokenizer.TokenType.IDENT_TOKEN &&
        ['top', 'left', 'right', 'bottom'].indexOf(firstToken.value) !== -1) {
          angle = (0, _angle.parseNamedSide)(arg);
          return;
        } else
        if ((0, _angle.isAngle)(firstToken)) {
          angle = (_angle.angle.parse(firstToken) + (0, _angle.deg)(270)) % (0, _angle.deg)(360);
          return;
        }
      }
      const colorStop = (0, _gradient.parseColorStop)(arg);
      stops.push(colorStop);
    });
    return {
      angle,
      stops,
      type: _image.CSSImageType.LINEAR_GRADIENT
    };
  };_exports.prefixLinearGradient = prefixLinearGradient;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/types/functions/-prefix-radial-gradient.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/image.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/functions/gradient.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/length-percentage.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/length.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/functions/radial-gradient.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _parser, _image, _gradient, _lengthPercentage, _length, _radialGradient) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.prefixRadialGradient = void 0;





  const prefixRadialGradient = (tokens) => {
    let shape = _image.CSSRadialShape.CIRCLE;
    let size = _image.CSSRadialExtent.FARTHEST_CORNER;
    const stops = [];
    const position = [];
    (0, _parser.parseFunctionArgs)(tokens).forEach((arg, i) => {
      let isColorStop = true;
      if (i === 0) {
        isColorStop = arg.reduce((acc, token) => {
          if ((0, _parser.isIdentToken)(token)) {
            switch (token.value) {
              case 'center':
                position.push(_lengthPercentage.FIFTY_PERCENT);
                return false;
              case 'top':
              case 'left':
                position.push(_lengthPercentage.ZERO_LENGTH);
                return false;
              case 'right':
              case 'bottom':
                position.push(_lengthPercentage.HUNDRED_PERCENT);
                return false;
            }
          } else
          if ((0, _lengthPercentage.isLengthPercentage)(token) || (0, _length.isLength)(token)) {
            position.push(token);
            return false;
          }
          return acc;
        }, isColorStop);
      } else
      if (i === 1) {
        isColorStop = arg.reduce((acc, token) => {
          if ((0, _parser.isIdentToken)(token)) {
            switch (token.value) {
              case _radialGradient.CIRCLE:
                shape = _image.CSSRadialShape.CIRCLE;
                return false;
              case _radialGradient.ELLIPSE:
                shape = _image.CSSRadialShape.ELLIPSE;
                return false;
              case _radialGradient.CONTAIN:
              case _radialGradient.CLOSEST_SIDE:
                size = _image.CSSRadialExtent.CLOSEST_SIDE;
                return false;
              case _radialGradient.FARTHEST_SIDE:
                size = _image.CSSRadialExtent.FARTHEST_SIDE;
                return false;
              case _radialGradient.CLOSEST_CORNER:
                size = _image.CSSRadialExtent.CLOSEST_CORNER;
                return false;
              case _radialGradient.COVER:
              case _radialGradient.FARTHEST_CORNER:
                size = _image.CSSRadialExtent.FARTHEST_CORNER;
                return false;
            }
          } else
          if ((0, _length.isLength)(token) || (0, _lengthPercentage.isLengthPercentage)(token)) {
            if (!Array.isArray(size)) {
              size = [];
            }
            size.push(token);
            return false;
          }
          return acc;
        }, isColorStop);
      }
      if (isColorStop) {
        const colorStop = (0, _gradient.parseColorStop)(arg);
        stops.push(colorStop);
      }
    });
    return { size, shape, stops, position, type: _image.CSSImageType.RADIAL_GRADIENT };
  };_exports.prefixRadialGradient = prefixRadialGradient;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/types/functions/-webkit-gradient.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/image.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/angle.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/tokenizer.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/color.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/length-percentage.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _parser, _image, _angle, _tokenizer, _color, _lengthPercentage) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.webkitGradient = void 0;





  const webkitGradient = (tokens) => {
    let angle = (0, _angle.deg)(180);
    const stops = [];
    let type = _image.CSSImageType.LINEAR_GRADIENT;
    let shape = _image.CSSRadialShape.CIRCLE;
    let size = _image.CSSRadialExtent.FARTHEST_CORNER;
    const position = [];
    (0, _parser.parseFunctionArgs)(tokens).forEach((arg, i) => {
      const firstToken = arg[0];
      if (i === 0) {
        if ((0, _parser.isIdentToken)(firstToken) && firstToken.value === 'linear') {
          type = _image.CSSImageType.LINEAR_GRADIENT;
          return;
        } else
        if ((0, _parser.isIdentToken)(firstToken) && firstToken.value === 'radial') {
          type = _image.CSSImageType.RADIAL_GRADIENT;
          return;
        }
      }
      if (firstToken.type === _tokenizer.TokenType.FUNCTION) {
        if (firstToken.name === 'from') {
          const color = _color.color.parse(firstToken.values[0]);
          stops.push({ stop: _lengthPercentage.ZERO_LENGTH, color });
        } else
        if (firstToken.name === 'to') {
          const color = _color.color.parse(firstToken.values[0]);
          stops.push({ stop: _lengthPercentage.HUNDRED_PERCENT, color });
        } else
        if (firstToken.name === 'color-stop') {
          const values = firstToken.values.filter(_parser.nonFunctionArgSeparator);
          if (values.length === 2) {
            const color = _color.color.parse(values[1]);
            const stop = values[0];
            if ((0, _parser.isNumberToken)(stop)) {
              stops.push({
                stop: { type: _tokenizer.TokenType.PERCENTAGE_TOKEN, number: stop.number * 100, flags: stop.flags },
                color
              });
            }
          }
        }
      }
    });
    return type === _image.CSSImageType.LINEAR_GRADIENT ?
    {
      angle: (angle + (0, _angle.deg)(180)) % (0, _angle.deg)(360),
      stops,
      type
    } :
    { size, shape, stops, position, type };
  };_exports.webkitGradient = webkitGradient;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/types/functions/counter.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/list-style-type.js"), __webpack_require__("../../node_modules/css-line-break/dist/css-line-break.es5.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/core/bitwise.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _listStyleType, _cssLineBreak, _bitwise) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.createCounterText = _exports.CounterState = void 0;


  class CounterState {
    constructor() {
      this.counters = {};
    }
    getCounterValue(name) {
      const counter = this.counters[name];
      if (counter && counter.length) {
        return counter[counter.length - 1];
      }
      return 1;
    }
    getCounterValues(name) {
      const counter = this.counters[name];
      return counter ? counter : [];
    }
    pop(counters) {
      counters.forEach((counter) => this.counters[counter].pop());
    }
    parse(style) {
      const counterIncrement = style.counterIncrement;
      const counterReset = style.counterReset;
      let canReset = true;
      if (counterIncrement !== null) {
        counterIncrement.forEach((entry) => {
          const counter = this.counters[entry.counter];
          if (counter && entry.increment !== 0) {
            canReset = false;
            counter[Math.max(0, counter.length - 1)] += entry.increment;
          }
        });
      }
      const counterNames = [];
      if (canReset) {
        counterReset.forEach((entry) => {
          let counter = this.counters[entry.counter];
          counterNames.push(entry.counter);
          if (!counter) {
            counter = this.counters[entry.counter] = [];
          }
          counter.push(entry.reset);
        });
      }
      return counterNames;
    }
  }_exports.CounterState = CounterState;
  const ROMAN_UPPER = {
    integers: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    values: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  };
  const ARMENIAN = {
    integers: [
    9000,
    8000,
    7000,
    6000,
    5000,
    4000,
    3000,
    2000,
    1000,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1],

    values: [
    'Ք',
    'Փ',
    'Ւ',
    'Ց',
    'Ր',
    'Տ',
    'Վ',
    'Ս',
    'Ռ',
    'Ջ',
    'Պ',
    'Չ',
    'Ո',
    'Շ',
    'Ն',
    'Յ',
    'Մ',
    'Ճ',
    'Ղ',
    'Ձ',
    'Հ',
    'Կ',
    'Ծ',
    'Խ',
    'Լ',
    'Ի',
    'Ժ',
    'Թ',
    'Ը',
    'Է',
    'Զ',
    'Ե',
    'Դ',
    'Գ',
    'Բ',
    'Ա']

  };
  const HEBREW = {
    integers: [
    10000,
    9000,
    8000,
    7000,
    6000,
    5000,
    4000,
    3000,
    2000,
    1000,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    19,
    18,
    17,
    16,
    15,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1],

    values: [
    'י׳',
    'ט׳',
    'ח׳',
    'ז׳',
    'ו׳',
    'ה׳',
    'ד׳',
    'ג׳',
    'ב׳',
    'א׳',
    'ת',
    'ש',
    'ר',
    'ק',
    'צ',
    'פ',
    'ע',
    'ס',
    'נ',
    'מ',
    'ל',
    'כ',
    'יט',
    'יח',
    'יז',
    'טז',
    'טו',
    'י',
    'ט',
    'ח',
    'ז',
    'ו',
    'ה',
    'ד',
    'ג',
    'ב',
    'א']

  };
  const GEORGIAN = {
    integers: [
    10000,
    9000,
    8000,
    7000,
    6000,
    5000,
    4000,
    3000,
    2000,
    1000,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1],

    values: [
    'ჵ',
    'ჰ',
    'ჯ',
    'ჴ',
    'ხ',
    'ჭ',
    'წ',
    'ძ',
    'ც',
    'ჩ',
    'შ',
    'ყ',
    'ღ',
    'ქ',
    'ფ',
    'ჳ',
    'ტ',
    'ს',
    'რ',
    'ჟ',
    'პ',
    'ო',
    'ჲ',
    'ნ',
    'მ',
    'ლ',
    'კ',
    'ი',
    'თ',
    'ჱ',
    'ზ',
    'ვ',
    'ე',
    'დ',
    'გ',
    'ბ',
    'ა']

  };
  const createAdditiveCounter = (value, min, max, symbols, fallback, suffix) => {
    if (value < min || value > max) {
      return createCounterText(value, fallback, suffix.length > 0);
    }
    return symbols.integers.reduce((string, integer, index) => {
      while (value >= integer) {
        value -= integer;
        string += symbols.values[index];
      }
      return string;
    }, '') + suffix;
  };
  const createCounterStyleWithSymbolResolver = (value, codePointRangeLength, isNumeric, resolver) => {
    let string = '';
    do {
      if (!isNumeric) {
        value--;
      }
      string = resolver(value) + string;
      value /= codePointRangeLength;
    } while (value * codePointRangeLength >= codePointRangeLength);
    return string;
  };
  const createCounterStyleFromRange = (value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) => {
    const codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;
    return (value < 0 ? '-' : '') + (
    createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, (codePoint) => (0, _cssLineBreak.fromCodePoint)(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart)) +
    suffix);
  };
  const createCounterStyleFromSymbols = function (value, symbols) {let suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '. ';
    const codePointRangeLength = symbols.length;
    return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, (codePoint) => symbols[Math.floor(codePoint % codePointRangeLength)]) + suffix;
  };
  const CJK_ZEROS = 1 << 0;
  const CJK_TEN_COEFFICIENTS = 1 << 1;
  const CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
  const CJK_HUNDRED_COEFFICIENTS = 1 << 3;
  const createCJKCounter = (value, numbers, multipliers, negativeSign, suffix, flags) => {
    if (value < -9999 || value > 9999) {
      return createCounterText(value, _listStyleType.LIST_STYLE_TYPE.CJK_DECIMAL, suffix.length > 0);
    }
    let tmp = Math.abs(value);
    let string = suffix;
    if (tmp === 0) {
      return numbers[0] + string;
    }
    for (let digit = 0; tmp > 0 && digit <= 4; digit++) {
      let coefficient = tmp % 10;
      if (coefficient === 0 && (0, _bitwise.contains)(flags, CJK_ZEROS) && string !== '') {
        string = numbers[coefficient] + string;
      } else
      if (coefficient > 1 ||
      coefficient === 1 && digit === 0 ||
      coefficient === 1 && digit === 1 && (0, _bitwise.contains)(flags, CJK_TEN_COEFFICIENTS) ||
      coefficient === 1 && digit === 1 && (0, _bitwise.contains)(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 ||
      coefficient === 1 && digit > 1 && (0, _bitwise.contains)(flags, CJK_HUNDRED_COEFFICIENTS)) {
        string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : '') + string;
      } else
      if (coefficient === 1 && digit > 0) {
        string = multipliers[digit - 1] + string;
      }
      tmp = Math.floor(tmp / 10);
    }
    return (value < 0 ? negativeSign : '') + string;
  };
  const CHINESE_INFORMAL_MULTIPLIERS = '十百千萬';
  const CHINESE_FORMAL_MULTIPLIERS = '拾佰仟萬';
  const JAPANESE_NEGATIVE = 'マイナス';
  const KOREAN_NEGATIVE = '마이너스';
  const createCounterText = (value, type, appendSuffix) => {
    const defaultSuffix = appendSuffix ? '. ' : '';
    const cjkSuffix = appendSuffix ? '、' : '';
    const koreanSuffix = appendSuffix ? ', ' : '';
    const spaceSuffix = appendSuffix ? ' ' : '';
    switch (type) {
      case _listStyleType.LIST_STYLE_TYPE.DISC:
        return '•' + spaceSuffix;
      case _listStyleType.LIST_STYLE_TYPE.CIRCLE:
        return '◦' + spaceSuffix;
      case _listStyleType.LIST_STYLE_TYPE.SQUARE:
        return '◾' + spaceSuffix;
      case _listStyleType.LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO:
        const string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
        return string.length < 4 ? "0".concat(string) : string;
      case _listStyleType.LIST_STYLE_TYPE.CJK_DECIMAL:
        return createCounterStyleFromSymbols(value, '〇一二三四五六七八九', cjkSuffix);
      case _listStyleType.LIST_STYLE_TYPE.LOWER_ROMAN:
        return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _listStyleType.LIST_STYLE_TYPE.DECIMAL, defaultSuffix).toLowerCase();
      case _listStyleType.LIST_STYLE_TYPE.UPPER_ROMAN:
        return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _listStyleType.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
      case _listStyleType.LIST_STYLE_TYPE.LOWER_GREEK:
        return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
      case _listStyleType.LIST_STYLE_TYPE.LOWER_ALPHA:
        return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
      case _listStyleType.LIST_STYLE_TYPE.UPPER_ALPHA:
        return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
      case _listStyleType.LIST_STYLE_TYPE.ARABIC_INDIC:
        return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
      case _listStyleType.LIST_STYLE_TYPE.ARMENIAN:
      case _listStyleType.LIST_STYLE_TYPE.UPPER_ARMENIAN:
        return createAdditiveCounter(value, 1, 9999, ARMENIAN, _listStyleType.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
      case _listStyleType.LIST_STYLE_TYPE.LOWER_ARMENIAN:
        return createAdditiveCounter(value, 1, 9999, ARMENIAN, _listStyleType.LIST_STYLE_TYPE.DECIMAL, defaultSuffix).toLowerCase();
      case _listStyleType.LIST_STYLE_TYPE.BENGALI:
        return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
      case _listStyleType.LIST_STYLE_TYPE.CAMBODIAN:
      case _listStyleType.LIST_STYLE_TYPE.KHMER:
        return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
      case _listStyleType.LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH:
        return createCounterStyleFromSymbols(value, '子丑寅卯辰巳午未申酉戌亥', cjkSuffix);
      case _listStyleType.LIST_STYLE_TYPE.CJK_HEAVENLY_STEM:
        return createCounterStyleFromSymbols(value, '甲乙丙丁戊己庚辛壬癸', cjkSuffix);
      case _listStyleType.LIST_STYLE_TYPE.CJK_IDEOGRAPHIC:
      case _listStyleType.LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL:
        return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
      case _listStyleType.LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL:
        return createCJKCounter(value, '零壹貳參肆伍陸柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
      case _listStyleType.LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL:
        return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
      case _listStyleType.LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL:
        return createCJKCounter(value, '零壹贰叁肆伍陆柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
      case _listStyleType.LIST_STYLE_TYPE.JAPANESE_INFORMAL:
        return createCJKCounter(value, '〇一二三四五六七八九', '十百千万', JAPANESE_NEGATIVE, cjkSuffix, 0);
      case _listStyleType.LIST_STYLE_TYPE.JAPANESE_FORMAL:
        return createCJKCounter(value, '零壱弐参四伍六七八九', '拾百千万', JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
      case _listStyleType.LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL:
        return createCJKCounter(value, '영일이삼사오육칠팔구', '십백천만', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
      case _listStyleType.LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL:
        return createCJKCounter(value, '零一二三四五六七八九', '十百千萬', KOREAN_NEGATIVE, koreanSuffix, 0);
      case _listStyleType.LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL:
        return createCJKCounter(value, '零壹貳參四五六七八九', '拾百千', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
      case _listStyleType.LIST_STYLE_TYPE.DEVANAGARI:
        return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);
      case _listStyleType.LIST_STYLE_TYPE.GEORGIAN:
        return createAdditiveCounter(value, 1, 19999, GEORGIAN, _listStyleType.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
      case _listStyleType.LIST_STYLE_TYPE.GUJARATI:
        return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);
      case _listStyleType.LIST_STYLE_TYPE.GURMUKHI:
        return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);
      case _listStyleType.LIST_STYLE_TYPE.HEBREW:
        return createAdditiveCounter(value, 1, 10999, HEBREW, _listStyleType.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
      case _listStyleType.LIST_STYLE_TYPE.HIRAGANA:
        return createCounterStyleFromSymbols(value, 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん');
      case _listStyleType.LIST_STYLE_TYPE.HIRAGANA_IROHA:
        return createCounterStyleFromSymbols(value, 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす');
      case _listStyleType.LIST_STYLE_TYPE.KANNADA:
        return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);
      case _listStyleType.LIST_STYLE_TYPE.KATAKANA:
        return createCounterStyleFromSymbols(value, 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン', cjkSuffix);
      case _listStyleType.LIST_STYLE_TYPE.KATAKANA_IROHA:
        return createCounterStyleFromSymbols(value, 'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス', cjkSuffix);
      case _listStyleType.LIST_STYLE_TYPE.LAO:
        return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);
      case _listStyleType.LIST_STYLE_TYPE.MONGOLIAN:
        return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);
      case _listStyleType.LIST_STYLE_TYPE.MYANMAR:
        return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);
      case _listStyleType.LIST_STYLE_TYPE.ORIYA:
        return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);
      case _listStyleType.LIST_STYLE_TYPE.PERSIAN:
        return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);
      case _listStyleType.LIST_STYLE_TYPE.TAMIL:
        return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);
      case _listStyleType.LIST_STYLE_TYPE.TELUGU:
        return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);
      case _listStyleType.LIST_STYLE_TYPE.THAI:
        return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);
      case _listStyleType.LIST_STYLE_TYPE.TIBETAN:
        return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);
      case _listStyleType.LIST_STYLE_TYPE.DECIMAL:
      default:
        return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
    }
  };_exports.createCounterText = createCounterText;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/types/functions/gradient.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/slicedToArray.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/image.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/color.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/length-percentage.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _slicedToArray2, _image, _color, _lengthPercentage) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.processColorStops = _exports.parseColorStop = _exports.calculateRadius = _exports.calculateGradientDirection = void 0;_slicedToArray2 = _interopRequireDefault(_slicedToArray2);


  const parseColorStop = (args) => {
    const color = _color.color.parse(args[0]);
    const stop = args[1];
    return stop && (0, _lengthPercentage.isLengthPercentage)(stop) ? { color, stop } : { color, stop: null };
  };_exports.parseColorStop = parseColorStop;
  const processColorStops = (stops, lineLength) => {
    const first = stops[0];
    const last = stops[stops.length - 1];
    if (first.stop === null) {
      first.stop = _lengthPercentage.ZERO_LENGTH;
    }
    if (last.stop === null) {
      last.stop = _lengthPercentage.HUNDRED_PERCENT;
    }
    const processStops = [];
    let previous = 0;
    for (let i = 0; i < stops.length; i++) {
      const stop = stops[i].stop;
      if (stop !== null) {
        const absoluteValue = (0, _lengthPercentage.getAbsoluteValue)(stop, lineLength);
        if (absoluteValue > previous) {
          processStops.push(absoluteValue);
        } else
        {
          processStops.push(previous);
        }
        previous = absoluteValue;
      } else
      {
        processStops.push(null);
      }
    }
    let gapBegin = null;
    for (let i = 0; i < processStops.length; i++) {
      const stop = processStops[i];
      if (stop === null) {
        if (gapBegin === null) {
          gapBegin = i;
        }
      } else
      if (gapBegin !== null) {
        const gapLength = i - gapBegin;
        const beforeGap = processStops[gapBegin - 1];
        const gapValue = (stop - beforeGap) / (gapLength + 1);
        for (let g = 1; g <= gapLength; g++) {
          processStops[gapBegin + g - 1] = gapValue * g;
        }
        gapBegin = null;
      }
    }
    return stops.map((_ref, i) => {let color = _ref.color;
      return { color, stop: Math.max(Math.min(1, processStops[i] / lineLength), 0) };
    });
  };_exports.processColorStops = processColorStops;
  const getAngleFromCorner = (corner, width, height) => {
    const centerX = width / 2;
    const centerY = height / 2;
    const x = (0, _lengthPercentage.getAbsoluteValue)(corner[0], width) - centerX;
    const y = centerY - (0, _lengthPercentage.getAbsoluteValue)(corner[1], height);
    return (Math.atan2(y, x) + Math.PI * 2) % (Math.PI * 2);
  };
  const calculateGradientDirection = (angle, width, height) => {
    const radian = typeof angle === 'number' ? angle : getAngleFromCorner(angle, width, height);
    const lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    const halfLineLength = lineLength / 2;
    const yDiff = Math.sin(radian - Math.PI / 2) * halfLineLength;
    const xDiff = Math.cos(radian - Math.PI / 2) * halfLineLength;
    return [lineLength, halfWidth - xDiff, halfWidth + xDiff, halfHeight - yDiff, halfHeight + yDiff];
  };_exports.calculateGradientDirection = calculateGradientDirection;
  const distance = (a, b) => Math.sqrt(a * a + b * b);
  const findCorner = (width, height, x, y, closest) => {
    const corners = [[0, 0], [0, height], [width, 0], [width, height]];
    return corners.reduce((stat, corner) => {const _corner = (0, _slicedToArray2.default)(
          corner, 2),cx = _corner[0],cy = _corner[1];
      const d = distance(x - cx, y - cy);
      if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
        return {
          optimumCorner: corner,
          optimumDistance: d
        };
      }
      return stat;
    }, {
      optimumDistance: closest ? Infinity : -Infinity,
      optimumCorner: null
    }).optimumCorner;
  };
  const calculateRadius = (gradient, x, y, width, height) => {
    let rx = 0;
    let ry = 0;
    switch (gradient.size) {
      case _image.CSSRadialExtent.CLOSEST_SIDE:
        // The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient’s center.
        // If the shape is an ellipse, it exactly meets the closest side in each dimension.
        if (gradient.shape === _image.CSSRadialShape.CIRCLE) {
          rx = ry = Math.min(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
        } else
        if (gradient.shape === _image.CSSRadialShape.ELLIPSE) {
          rx = Math.min(Math.abs(x), Math.abs(x - width));
          ry = Math.min(Math.abs(y), Math.abs(y - height));
        }
        break;
      case _image.CSSRadialExtent.CLOSEST_CORNER:
        // The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient’s center.
        // If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if closest-side were specified.
        if (gradient.shape === _image.CSSRadialShape.CIRCLE) {
          rx = ry = Math.min(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
        } else
        if (gradient.shape === _image.CSSRadialShape.ELLIPSE) {
          // Compute the ratio ry/rx (which is to be the same as for "closest-side")
          const c = Math.min(Math.abs(y), Math.abs(y - height)) / Math.min(Math.abs(x), Math.abs(x - width));const _findCorner =
            findCorner(width, height, x, y, true),_findCorner2 = (0, _slicedToArray2.default)(_findCorner, 2),cx = _findCorner2[0],cy = _findCorner2[1];
          rx = distance(cx - x, (cy - y) / c);
          ry = c * rx;
        }
        break;
      case _image.CSSRadialExtent.FARTHEST_SIDE:
        // Same as closest-side, except the ending shape is sized based on the farthest side(s)
        if (gradient.shape === _image.CSSRadialShape.CIRCLE) {
          rx = ry = Math.max(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
        } else
        if (gradient.shape === _image.CSSRadialShape.ELLIPSE) {
          rx = Math.max(Math.abs(x), Math.abs(x - width));
          ry = Math.max(Math.abs(y), Math.abs(y - height));
        }
        break;
      case _image.CSSRadialExtent.FARTHEST_CORNER:
        // Same as closest-corner, except the ending shape is sized based on the farthest corner.
        // If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if farthest-side were specified.
        if (gradient.shape === _image.CSSRadialShape.CIRCLE) {
          rx = ry = Math.max(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
        } else
        if (gradient.shape === _image.CSSRadialShape.ELLIPSE) {
          // Compute the ratio ry/rx (which is to be the same as for "farthest-side")
          const c = Math.max(Math.abs(y), Math.abs(y - height)) / Math.max(Math.abs(x), Math.abs(x - width));const _findCorner3 =
            findCorner(width, height, x, y, false),_findCorner4 = (0, _slicedToArray2.default)(_findCorner3, 2),cx = _findCorner4[0],cy = _findCorner4[1];
          rx = distance(cx - x, (cy - y) / c);
          ry = c * rx;
        }
        break;
    }
    if (Array.isArray(gradient.size)) {
      rx = (0, _lengthPercentage.getAbsoluteValue)(gradient.size[0], width);
      ry = gradient.size.length === 2 ? (0, _lengthPercentage.getAbsoluteValue)(gradient.size[1], height) : rx;
    }
    return [rx, ry];
  };_exports.calculateRadius = calculateRadius;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/types/functions/linear-gradient.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/tokenizer.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/angle.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/image.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/functions/gradient.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _parser, _tokenizer, _angle, _image, _gradient) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.linearGradient = void 0;




  const linearGradient = (tokens) => {
    let angle = (0, _angle.deg)(180);
    const stops = [];
    (0, _parser.parseFunctionArgs)(tokens).forEach((arg, i) => {
      if (i === 0) {
        const firstToken = arg[0];
        if (firstToken.type === _tokenizer.TokenType.IDENT_TOKEN && firstToken.value === 'to') {
          angle = (0, _angle.parseNamedSide)(arg);
          return;
        } else
        if ((0, _angle.isAngle)(firstToken)) {
          angle = _angle.angle.parse(firstToken);
          return;
        }
      }
      const colorStop = (0, _gradient.parseColorStop)(arg);
      stops.push(colorStop);
    });
    return { angle, stops, type: _image.CSSImageType.LINEAR_GRADIENT };
  };_exports.linearGradient = linearGradient;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/types/functions/radial-gradient.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/image.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/functions/gradient.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/length-percentage.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/length.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _parser, _image, _gradient, _lengthPercentage, _length) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.radialGradient = _exports.FARTHEST_SIDE = _exports.FARTHEST_CORNER = _exports.ELLIPSE = _exports.COVER = _exports.CONTAIN = _exports.CLOSEST_SIDE = _exports.CLOSEST_CORNER = _exports.CIRCLE = void 0;




  const CLOSEST_SIDE = _exports.CLOSEST_SIDE = 'closest-side';
  const FARTHEST_SIDE = _exports.FARTHEST_SIDE = 'farthest-side';
  const CLOSEST_CORNER = _exports.CLOSEST_CORNER = 'closest-corner';
  const FARTHEST_CORNER = _exports.FARTHEST_CORNER = 'farthest-corner';
  const CIRCLE = _exports.CIRCLE = 'circle';
  const ELLIPSE = _exports.ELLIPSE = 'ellipse';
  const COVER = _exports.COVER = 'cover';
  const CONTAIN = _exports.CONTAIN = 'contain';
  const radialGradient = (tokens) => {
    let shape = _image.CSSRadialShape.CIRCLE;
    let size = _image.CSSRadialExtent.FARTHEST_CORNER;
    const stops = [];
    const position = [];
    (0, _parser.parseFunctionArgs)(tokens).forEach((arg, i) => {
      let isColorStop = true;
      if (i === 0) {
        let isAtPosition = false;
        isColorStop = arg.reduce((acc, token) => {
          if (isAtPosition) {
            if ((0, _parser.isIdentToken)(token)) {
              switch (token.value) {
                case 'center':
                  position.push(_lengthPercentage.FIFTY_PERCENT);
                  return acc;
                case 'top':
                case 'left':
                  position.push(_lengthPercentage.ZERO_LENGTH);
                  return acc;
                case 'right':
                case 'bottom':
                  position.push(_lengthPercentage.HUNDRED_PERCENT);
                  return acc;
              }
            } else
            if ((0, _lengthPercentage.isLengthPercentage)(token) || (0, _length.isLength)(token)) {
              position.push(token);
            }
          } else
          if ((0, _parser.isIdentToken)(token)) {
            switch (token.value) {
              case CIRCLE:
                shape = _image.CSSRadialShape.CIRCLE;
                return false;
              case ELLIPSE:
                shape = _image.CSSRadialShape.ELLIPSE;
                return false;
              case 'at':
                isAtPosition = true;
                return false;
              case CLOSEST_SIDE:
                size = _image.CSSRadialExtent.CLOSEST_SIDE;
                return false;
              case COVER:
              case FARTHEST_SIDE:
                size = _image.CSSRadialExtent.FARTHEST_SIDE;
                return false;
              case CONTAIN:
              case CLOSEST_CORNER:
                size = _image.CSSRadialExtent.CLOSEST_CORNER;
                return false;
              case FARTHEST_CORNER:
                size = _image.CSSRadialExtent.FARTHEST_CORNER;
                return false;
            }
          } else
          if ((0, _length.isLength)(token) || (0, _lengthPercentage.isLengthPercentage)(token)) {
            if (!Array.isArray(size)) {
              size = [];
            }
            size.push(token);
            return false;
          }
          return acc;
        }, isColorStop);
      }
      if (isColorStop) {
        const colorStop = (0, _gradient.parseColorStop)(arg);
        stops.push(colorStop);
      }
    });
    return { size, shape, stops, position, type: _image.CSSImageType.RADIAL_GRADIENT };
  };_exports.radialGradient = radialGradient;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/types/image.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/tokenizer.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/functions/linear-gradient.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/functions/-prefix-linear-gradient.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/core/cache-storage.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/functions/-webkit-gradient.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/functions/radial-gradient.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/functions/-prefix-radial-gradient.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _tokenizer, _linearGradient, _prefixLinearGradient, _cacheStorage, _webkitGradient, _radialGradient, _prefixRadialGradient) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.isRadialGradient = _exports.isLinearGradient = _exports.image = _exports.CSSRadialShape = _exports.CSSRadialExtent = _exports.CSSImageType = void 0;_exports.isSupportedImage = isSupportedImage;






  var CSSImageType;
  (function (CSSImageType) {
    CSSImageType[CSSImageType["URL"] = 0] = "URL";
    CSSImageType[CSSImageType["LINEAR_GRADIENT"] = 1] = "LINEAR_GRADIENT";
    CSSImageType[CSSImageType["RADIAL_GRADIENT"] = 2] = "RADIAL_GRADIENT";
  })(CSSImageType || (_exports.CSSImageType = CSSImageType = {}));
  const isLinearGradient = (background) => {
    return background.type === CSSImageType.LINEAR_GRADIENT;
  };_exports.isLinearGradient = isLinearGradient;
  const isRadialGradient = (background) => {
    return background.type === CSSImageType.RADIAL_GRADIENT;
  };_exports.isRadialGradient = isRadialGradient;
  var CSSRadialShape;
  (function (CSSRadialShape) {
    CSSRadialShape[CSSRadialShape["CIRCLE"] = 0] = "CIRCLE";
    CSSRadialShape[CSSRadialShape["ELLIPSE"] = 1] = "ELLIPSE";
  })(CSSRadialShape || (_exports.CSSRadialShape = CSSRadialShape = {}));
  var CSSRadialExtent;
  (function (CSSRadialExtent) {
    CSSRadialExtent[CSSRadialExtent["CLOSEST_SIDE"] = 0] = "CLOSEST_SIDE";
    CSSRadialExtent[CSSRadialExtent["FARTHEST_SIDE"] = 1] = "FARTHEST_SIDE";
    CSSRadialExtent[CSSRadialExtent["CLOSEST_CORNER"] = 2] = "CLOSEST_CORNER";
    CSSRadialExtent[CSSRadialExtent["FARTHEST_CORNER"] = 3] = "FARTHEST_CORNER";
  })(CSSRadialExtent || (_exports.CSSRadialExtent = CSSRadialExtent = {}));
  const image = _exports.image = {
    name: 'image',
    parse: (value) => {
      if (value.type === _tokenizer.TokenType.URL_TOKEN) {
        const image = { url: value.value, type: CSSImageType.URL };
        _cacheStorage.CacheStorage.getInstance().addImage(value.value);
        return image;
      }
      if (value.type === _tokenizer.TokenType.FUNCTION) {
        const imageFunction = SUPPORTED_IMAGE_FUNCTIONS[value.name];
        if (typeof imageFunction === 'undefined') {
          throw new Error("Attempting to parse an unsupported image function \"".concat(value.name, "\""));
        }
        return imageFunction(value.values);
      }
      throw new Error("Unsupported image type");
    }
  };
  function isSupportedImage(value) {
    return value.type !== _tokenizer.TokenType.FUNCTION || SUPPORTED_IMAGE_FUNCTIONS[value.name];
  }
  const SUPPORTED_IMAGE_FUNCTIONS = {
    'linear-gradient': _linearGradient.linearGradient,
    '-moz-linear-gradient': _prefixLinearGradient.prefixLinearGradient,
    '-ms-linear-gradient': _prefixLinearGradient.prefixLinearGradient,
    '-o-linear-gradient': _prefixLinearGradient.prefixLinearGradient,
    '-webkit-linear-gradient': _prefixLinearGradient.prefixLinearGradient,
    'radial-gradient': _radialGradient.radialGradient,
    '-moz-radial-gradient': _prefixRadialGradient.prefixRadialGradient,
    '-ms-radial-gradient': _prefixRadialGradient.prefixRadialGradient,
    '-o-radial-gradient': _prefixRadialGradient.prefixRadialGradient,
    '-webkit-radial-gradient': _prefixRadialGradient.prefixRadialGradient,
    '-webkit-gradient': _webkitGradient.webkitGradient
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/types/length-percentage.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/slicedToArray.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/tokenizer.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/length.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _slicedToArray2, _tokenizer, _parser, _length) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.parseLengthPercentageTuple = _exports.isLengthPercentage = _exports.getAbsoluteValueForTuple = _exports.getAbsoluteValue = _exports.ZERO_LENGTH = _exports.HUNDRED_PERCENT = _exports.FIFTY_PERCENT = void 0;_slicedToArray2 = _interopRequireDefault(_slicedToArray2);


  const isLengthPercentage = (token) => token.type === _tokenizer.TokenType.PERCENTAGE_TOKEN || (0, _length.isLength)(token);_exports.isLengthPercentage = isLengthPercentage;
  const parseLengthPercentageTuple = (tokens) => tokens.length > 1 ? [tokens[0], tokens[1]] : [tokens[0]];_exports.parseLengthPercentageTuple = parseLengthPercentageTuple;
  const ZERO_LENGTH = _exports.ZERO_LENGTH = {
    type: _tokenizer.TokenType.NUMBER_TOKEN,
    number: 0,
    flags: _tokenizer.FLAG_INTEGER
  };
  const FIFTY_PERCENT = _exports.FIFTY_PERCENT = {
    type: _tokenizer.TokenType.PERCENTAGE_TOKEN,
    number: 50,
    flags: _tokenizer.FLAG_INTEGER
  };
  const HUNDRED_PERCENT = _exports.HUNDRED_PERCENT = {
    type: _tokenizer.TokenType.PERCENTAGE_TOKEN,
    number: 100,
    flags: _tokenizer.FLAG_INTEGER
  };
  const getAbsoluteValueForTuple = (tuple, width, height) => {let _tuple = (0, _slicedToArray2.default)(
        tuple, 2),x = _tuple[0],y = _tuple[1];
    return [getAbsoluteValue(x, width), getAbsoluteValue(typeof y !== 'undefined' ? y : x, height)];
  };_exports.getAbsoluteValueForTuple = getAbsoluteValueForTuple;
  const getAbsoluteValue = (token, parent) => {
    if (token.type === _tokenizer.TokenType.PERCENTAGE_TOKEN) {
      return token.number / 100 * parent;
    }
    if ((0, _parser.isDimensionToken)(token)) {
      switch (token.unit) {
        case 'rem':
        case 'em':
          return 16 * token.number; // TODO use correct font-size
        case 'px':
        default:
          return token.number;
      }
    }
    return token.number;
  };_exports.getAbsoluteValue = getAbsoluteValue;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/css/types/length.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/tokenizer.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _tokenizer) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.isLength = void 0;
  const isLength = (token) => token.type === _tokenizer.TokenType.NUMBER_TOKEN || token.type === _tokenizer.TokenType.DIMENSION_TOKEN;_exports.isLength = isLength;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/dom/document-cloner.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/slicedToArray.js"), __webpack_require__("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/node-parser.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/core/logger.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/tokenizer.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/functions/counter.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/list-style-type.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/index.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/quotes.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _slicedToArray2, _asyncToGenerator2, _nodeParser, _logger, _parser, _tokenizer, _counter, _listStyleType, _index, _quotes) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.copyCSSStyles = _exports.DocumentCloner = void 0;_slicedToArray2 = _interopRequireDefault(_slicedToArray2);_asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);







  const IGNORE_ATTRIBUTE = 'data-html2canvas-ignore';
  class DocumentCloner {
    constructor(element, options) {
      this.options = options;
      this.scrolledElements = [];
      this.referenceElement = element;
      this.counters = new _counter.CounterState();
      this.quoteDepth = 0;
      if (!element.ownerDocument) {
        throw new Error('Cloned element does not have an owner document');
      }
      this.documentElement = this.cloneNode(element.ownerDocument.documentElement);
    }
    toIFrame(ownerDocument, windowSize) {var _this = this;
      const iframe = createIFrameContainer(ownerDocument, windowSize);
      if (!iframe.contentWindow) {
        return Promise.reject("Unable to find iframe window");
      }
      const scrollX = ownerDocument.defaultView.pageXOffset;
      const scrollY = ownerDocument.defaultView.pageYOffset;
      const cloneWindow = iframe.contentWindow;
      const documentClone = cloneWindow.document;
      /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
       if window url is about:blank, we can assign the url to current by writing onto the document
       */
      const iframeLoad = iframeLoader(iframe).then( /*#__PURE__*/(0, _asyncToGenerator2.default)(function* () {
        _this.scrolledElements.forEach(restoreNodeScroll);
        if (cloneWindow) {
          cloneWindow.scrollTo(windowSize.left, windowSize.top);
          if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (
          cloneWindow.scrollY !== windowSize.top || cloneWindow.scrollX !== windowSize.left)) {
            documentClone.documentElement.style.top = -windowSize.top + 'px';
            documentClone.documentElement.style.left = -windowSize.left + 'px';
            documentClone.documentElement.style.position = 'absolute';
          }
        }
        const onclone = _this.options.onclone;
        if (typeof _this.clonedReferenceElement === 'undefined') {
          return Promise.reject("Error finding the ".concat(_this.referenceElement.nodeName, " in the cloned document"));
        }
        if (documentClone.fonts && documentClone.fonts.ready) {
          yield documentClone.fonts.ready;
        }
        if (typeof onclone === 'function') {
          return Promise.resolve().
          then(() => onclone(documentClone)).
          then(() => iframe);
        }
        return iframe;
      }));
      documentClone.open();
      documentClone.write("".concat(serializeDoctype(document.doctype), "<html></html>"));
      // Chrome scrolls the parent document for some reason after the write to the cloned window???
      restoreOwnerScroll(this.referenceElement.ownerDocument, scrollX, scrollY);
      documentClone.replaceChild(documentClone.adoptNode(this.documentElement), documentClone.documentElement);
      documentClone.close();
      return iframeLoad;
    }
    createElementClone(node) {
      if ((0, _nodeParser.isCanvasElement)(node)) {
        return this.createCanvasClone(node);
      }
      /*
      if (isIFrameElement(node)) {
          return this.createIFrameClone(node);
      }
      */
      if ((0, _nodeParser.isStyleElement)(node)) {
        return this.createStyleClone(node);
      }
      const clone = node.cloneNode(false);
      // @ts-ignore
      if ((0, _nodeParser.isImageElement)(clone) && clone.loading === 'lazy') {
        // @ts-ignore
        clone.loading = 'eager';
      }
      return clone;
    }
    createStyleClone(node) {
      try {
        const sheet = node.sheet;
        if (sheet && sheet.cssRules) {
          const css = [].slice.call(sheet.cssRules, 0).reduce((css, rule) => {
            if (rule && typeof rule.cssText === 'string') {
              return css + rule.cssText;
            }
            return css;
          }, '');
          const style = node.cloneNode(false);
          style.textContent = css;
          return style;
        }
      }
      catch (e) {
        // accessing node.sheet.cssRules throws a DOMException
        _logger.Logger.getInstance(this.options.id).error('Unable to access cssRules property', e);
        if (e.name !== 'SecurityError') {
          throw e;
        }
      }
      return node.cloneNode(false);
    }
    createCanvasClone(canvas) {
      if (this.options.inlineImages && canvas.ownerDocument) {
        const img = canvas.ownerDocument.createElement('img');
        try {
          img.src = canvas.toDataURL();
          return img;
        }
        catch (e) {
          _logger.Logger.getInstance(this.options.id).info("Unable to clone canvas contents, canvas is tainted");
        }
      }
      const clonedCanvas = canvas.cloneNode(false);
      try {
        clonedCanvas.width = canvas.width;
        clonedCanvas.height = canvas.height;
        const ctx = canvas.getContext('2d');
        const clonedCtx = clonedCanvas.getContext('2d');
        if (clonedCtx) {
          if (ctx) {
            clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
          } else
          {
            clonedCtx.drawImage(canvas, 0, 0);
          }
        }
        return clonedCanvas;
      }
      catch (e) {}
      return clonedCanvas;
    }
    /*
    createIFrameClone(iframe: HTMLIFrameElement) {
        const tempIframe = <HTMLIFrameElement>iframe.cloneNode(false);
        const iframeKey = generateIframeKey();
        tempIframe.setAttribute('data-html2canvas-internal-iframe-key', iframeKey);
         const {width, height} = parseBounds(iframe);
         this.resourceLoader.cache[iframeKey] = getIframeDocumentElement(iframe, this.options)
            .then(documentElement => {
                return this.renderer(
                    documentElement,
                    {
                        allowTaint: this.options.allowTaint,
                        backgroundColor: '#ffffff',
                        canvas: null,
                        imageTimeout: this.options.imageTimeout,
                        logging: this.options.logging,
                        proxy: this.options.proxy,
                        removeContainer: this.options.removeContainer,
                        scale: this.options.scale,
                        foreignObjectRendering: this.options.foreignObjectRendering,
                        useCORS: this.options.useCORS,
                        target: new CanvasRenderer(),
                        width,
                        height,
                        x: 0,
                        y: 0,
                        windowWidth: documentElement.ownerDocument.defaultView.innerWidth,
                        windowHeight: documentElement.ownerDocument.defaultView.innerHeight,
                        scrollX: documentElement.ownerDocument.defaultView.pageXOffset,
                        scrollY: documentElement.ownerDocument.defaultView.pageYOffset
                    },
                );
            })
            .then(
                (canvas: HTMLCanvasElement) =>
                    new Promise((resolve, reject) => {
                        const iframeCanvas = document.createElement('img');
                        iframeCanvas.onload = () => resolve(canvas);
                        iframeCanvas.onerror = (event) => {
                            // Empty iframes may result in empty "data:," URLs, which are invalid from the <img>'s point of view
                            // and instead of `onload` cause `onerror` and unhandled rejection warnings
                            // https://github.com/niklasvh/html2canvas/issues/1502
                            iframeCanvas.src == 'data:,' ? resolve(canvas) : reject(event);
                        };
                        iframeCanvas.src = canvas.toDataURL();
                        if (tempIframe.parentNode && iframe.ownerDocument && iframe.ownerDocument.defaultView) {
                            tempIframe.parentNode.replaceChild(
                                copyCSSStyles(
                                    iframe.ownerDocument.defaultView.getComputedStyle(iframe),
                                    iframeCanvas
                                ),
                                tempIframe
                            );
                        }
                    })
            );
        return tempIframe;
    }
    */


    cloneNode(node) {
      if ((0, _nodeParser.isTextNode)(node)) {
        return document.createTextNode(node.data);
      }
      if (!node.ownerDocument) {
        return node.cloneNode(false);
      }
      const window = node.ownerDocument.defaultView;
      if (window && (0, _nodeParser.isElementNode)(node) && ((0, _nodeParser.isHTMLElementNode)(node) || (0, _nodeParser.isSVGElementNode)(node))) {
        const clone = this.createElementClone(node);
        const style = window.getComputedStyle(node);
        const styleBefore = window.getComputedStyle(node, ':before');
        const styleAfter = window.getComputedStyle(node, ':after');
        if (this.referenceElement === node && (0, _nodeParser.isHTMLElementNode)(clone)) {
          this.clonedReferenceElement = clone;
        }
        if ((0, _nodeParser.isBodyElement)(clone)) {
          createPseudoHideStyles(clone);
        }
        const counters = this.counters.parse(new _index.CSSParsedCounterDeclaration(style));
        const before = this.resolvePseudoContent(node, clone, styleBefore, PseudoElementType.BEFORE);
        for (let child = node.firstChild; child; child = child.nextSibling) {
          if (!(0, _nodeParser.isElementNode)(child) ||
          !(0, _nodeParser.isScriptElement)(child) &&
          !child.hasAttribute(IGNORE_ATTRIBUTE) && (
          typeof this.options.ignoreElements !== 'function' || !this.options.ignoreElements(child))) {
            if (!this.options.copyStyles || !(0, _nodeParser.isElementNode)(child) || !(0, _nodeParser.isStyleElement)(child)) {
              clone.appendChild(this.cloneNode(child));
            }
          }
        }
        if (before) {
          clone.insertBefore(before, clone.firstChild);
        }
        const after = this.resolvePseudoContent(node, clone, styleAfter, PseudoElementType.AFTER);
        if (after) {
          clone.appendChild(after);
        }
        this.counters.pop(counters);
        if (style && (this.options.copyStyles || (0, _nodeParser.isSVGElementNode)(node)) && !(0, _nodeParser.isIFrameElement)(node)) {
          copyCSSStyles(style, clone);
        }
        //this.inlineAllImages(clone);
        if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
          this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
        }
        if (((0, _nodeParser.isTextareaElement)(node) || (0, _nodeParser.isSelectElement)(node)) && (
        (0, _nodeParser.isTextareaElement)(clone) || (0, _nodeParser.isSelectElement)(clone))) {
          clone.value = node.value;
        }
        return clone;
      }
      return node.cloneNode(false);
    }
    resolvePseudoContent(node, clone, style, pseudoElt) {
      if (!style) {
        return;
      }
      const value = style.content;
      const document = clone.ownerDocument;
      if (!document || !value || value === 'none' || value === '-moz-alt-content' || style.display === 'none') {
        return;
      }
      this.counters.parse(new _index.CSSParsedCounterDeclaration(style));
      const declaration = new _index.CSSParsedPseudoDeclaration(style);
      const anonymousReplacedElement = document.createElement('html2canvaspseudoelement');
      copyCSSStyles(style, anonymousReplacedElement);
      declaration.content.forEach((token) => {
        if (token.type === _tokenizer.TokenType.STRING_TOKEN) {
          anonymousReplacedElement.appendChild(document.createTextNode(token.value));
        } else
        if (token.type === _tokenizer.TokenType.URL_TOKEN) {
          const img = document.createElement('img');
          img.src = token.value;
          img.style.opacity = '1';
          anonymousReplacedElement.appendChild(img);
        } else
        if (token.type === _tokenizer.TokenType.FUNCTION) {
          if (token.name === 'attr') {
            const attr = token.values.filter(_parser.isIdentToken);
            if (attr.length) {
              anonymousReplacedElement.appendChild(document.createTextNode(node.getAttribute(attr[0].value) || ''));
            }
          } else
          if (token.name === 'counter') {const _token$values$filter =
              token.values.filter(_parser.nonFunctionArgSeparator),_token$values$filter2 = (0, _slicedToArray2.default)(_token$values$filter, 2),counter = _token$values$filter2[0],counterStyle = _token$values$filter2[1];
            if (counter && (0, _parser.isIdentToken)(counter)) {
              const counterState = this.counters.getCounterValue(counter.value);
              const counterType = counterStyle && (0, _parser.isIdentToken)(counterStyle) ?
              _listStyleType.listStyleType.parse(counterStyle.value) :
              _listStyleType.LIST_STYLE_TYPE.DECIMAL;
              anonymousReplacedElement.appendChild(document.createTextNode((0, _counter.createCounterText)(counterState, counterType, false)));
            }
          } else
          if (token.name === 'counters') {const _token$values$filter3 =
              token.values.filter(_parser.nonFunctionArgSeparator),_token$values$filter4 = (0, _slicedToArray2.default)(_token$values$filter3, 3),counter = _token$values$filter4[0],delim = _token$values$filter4[1],counterStyle = _token$values$filter4[2];
            if (counter && (0, _parser.isIdentToken)(counter)) {
              const counterStates = this.counters.getCounterValues(counter.value);
              const counterType = counterStyle && (0, _parser.isIdentToken)(counterStyle) ?
              _listStyleType.listStyleType.parse(counterStyle.value) :
              _listStyleType.LIST_STYLE_TYPE.DECIMAL;
              const separator = delim && delim.type === _tokenizer.TokenType.STRING_TOKEN ? delim.value : '';
              const text = counterStates.
              map((value) => (0, _counter.createCounterText)(value, counterType, false)).
              join(separator);
              anonymousReplacedElement.appendChild(document.createTextNode(text));
            }
          } else
          {

            //   console.log('FUNCTION_TOKEN', token);
          }} else
        if (token.type === _tokenizer.TokenType.IDENT_TOKEN) {
          switch (token.value) {
            case 'open-quote':
              anonymousReplacedElement.appendChild(document.createTextNode((0, _quotes.getQuote)(declaration.quotes, this.quoteDepth++, true)));
              break;
            case 'close-quote':
              anonymousReplacedElement.appendChild(document.createTextNode((0, _quotes.getQuote)(declaration.quotes, --this.quoteDepth, false)));
              break;
            default:
              // safari doesn't parse string tokens correctly because of lack of quotes
              anonymousReplacedElement.appendChild(document.createTextNode(token.value));
          }
        }
      });
      anonymousReplacedElement.className = "".concat(PSEUDO_HIDE_ELEMENT_CLASS_BEFORE, " ").concat(PSEUDO_HIDE_ELEMENT_CLASS_AFTER);
      const newClassName = pseudoElt === PseudoElementType.BEFORE ? " ".concat(
        PSEUDO_HIDE_ELEMENT_CLASS_BEFORE) : " ".concat(
        PSEUDO_HIDE_ELEMENT_CLASS_AFTER);
      if ((0, _nodeParser.isSVGElementNode)(clone)) {
        clone.className.baseValue += newClassName;
      } else
      {
        clone.className += newClassName;
      }
      return anonymousReplacedElement;
    }
    static destroy(container) {
      if (container.parentNode) {
        container.parentNode.removeChild(container);
        return true;
      }
      return false;
    }
  }_exports.DocumentCloner = DocumentCloner;
  var PseudoElementType;
  (function (PseudoElementType) {
    PseudoElementType[PseudoElementType["BEFORE"] = 0] = "BEFORE";
    PseudoElementType[PseudoElementType["AFTER"] = 1] = "AFTER";
  })(PseudoElementType || (PseudoElementType = {}));
  const createIFrameContainer = (ownerDocument, bounds) => {
    const cloneIframeContainer = ownerDocument.createElement('iframe');
    cloneIframeContainer.className = 'html2canvas-container';
    cloneIframeContainer.style.visibility = 'hidden';
    cloneIframeContainer.style.position = 'fixed';
    cloneIframeContainer.style.left = '-10000px';
    cloneIframeContainer.style.top = '0px';
    cloneIframeContainer.style.border = '0';
    cloneIframeContainer.width = bounds.width.toString();
    cloneIframeContainer.height = bounds.height.toString();
    cloneIframeContainer.scrolling = 'no'; // ios won't scroll without it
    cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, 'true');
    ownerDocument.body.appendChild(cloneIframeContainer);
    return cloneIframeContainer;
  };
  const iframeLoader = (iframe) => {
    return new Promise((resolve, reject) => {
      const cloneWindow = iframe.contentWindow;
      if (!cloneWindow) {
        return reject("No window assigned for iframe");
      }
      const documentClone = cloneWindow.document;
      cloneWindow.onload = iframe.onload = documentClone.onreadystatechange = () => {
        cloneWindow.onload = iframe.onload = documentClone.onreadystatechange = null;
        const interval = setInterval(() => {
          if (documentClone.body.childNodes.length > 0 && documentClone.readyState === 'complete') {
            clearInterval(interval);
            resolve(iframe);
          }
        }, 50);
      };
    });
  };
  const copyCSSStyles = (style, target) => {
    // Edge does not provide value for cssText
    for (let i = style.length - 1; i >= 0; i--) {
      const property = style.item(i);
      // Safari shows pseudoelements if content is set
      if (property !== 'content') {
        target.style.setProperty(property, style.getPropertyValue(property));
      }
    }
    return target;
  };_exports.copyCSSStyles = copyCSSStyles;
  const serializeDoctype = (doctype) => {
    let str = '';
    if (doctype) {
      str += '<!DOCTYPE ';
      if (doctype.name) {
        str += doctype.name;
      }
      if (doctype.internalSubset) {
        str += doctype.internalSubset;
      }
      if (doctype.publicId) {
        str += "\"".concat(doctype.publicId, "\"");
      }
      if (doctype.systemId) {
        str += "\"".concat(doctype.systemId, "\"");
      }
      str += '>';
    }
    return str;
  };
  const restoreOwnerScroll = (ownerDocument, x, y) => {
    if (ownerDocument &&
    ownerDocument.defaultView && (
    x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
      ownerDocument.defaultView.scrollTo(x, y);
    }
  };
  const restoreNodeScroll = (_ref2) => {let _ref3 = (0, _slicedToArray2.default)(_ref2, 3),element = _ref3[0],x = _ref3[1],y = _ref3[2];
    element.scrollLeft = x;
    element.scrollTop = y;
  };
  const PSEUDO_BEFORE = ':before';
  const PSEUDO_AFTER = ':after';
  const PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = '___html2canvas___pseudoelement_before';
  const PSEUDO_HIDE_ELEMENT_CLASS_AFTER = '___html2canvas___pseudoelement_after';
  const PSEUDO_HIDE_ELEMENT_STYLE = "{\n    content: \"\" !important;\n    display: none !important;\n}";



  const createPseudoHideStyles = (body) => {
    createStyles(body, ".".concat(PSEUDO_HIDE_ELEMENT_CLASS_BEFORE).concat(PSEUDO_BEFORE).concat(PSEUDO_HIDE_ELEMENT_STYLE, "\n         .").concat(
      PSEUDO_HIDE_ELEMENT_CLASS_AFTER).concat(PSEUDO_AFTER).concat(PSEUDO_HIDE_ELEMENT_STYLE));
  };
  const createStyles = (body, styles) => {
    const document = body.ownerDocument;
    if (document) {
      const style = document.createElement('style');
      style.textContent = styles;
      body.appendChild(style);
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/dom/element-container.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/index.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/layout/bounds.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/node-parser.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _index, _bounds, _nodeParser) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.ElementContainer = void 0;


  class ElementContainer {
    constructor(element) {
      this.styles = new _index.CSSParsedDeclaration(window.getComputedStyle(element, null));
      this.textNodes = [];
      this.elements = [];
      if (this.styles.transform !== null && (0, _nodeParser.isHTMLElementNode)(element)) {
        // getBoundingClientRect takes transforms into account
        element.style.transform = 'none';
      }
      this.bounds = (0, _bounds.parseBounds)(element);
      this.flags = 0;
    }
  }_exports.ElementContainer = ElementContainer;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/dom/elements/li-element-container.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/element-container.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _elementContainer) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.LIElementContainer = void 0;
  class LIElementContainer extends _elementContainer.ElementContainer {
    constructor(element) {
      super(element);
      this.value = element.value;
    }
  }_exports.LIElementContainer = LIElementContainer;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/dom/elements/ol-element-container.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/element-container.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _elementContainer) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.OLElementContainer = void 0;
  class OLElementContainer extends _elementContainer.ElementContainer {
    constructor(element) {
      super(element);
      this.start = element.start;
      this.reversed = typeof element.reversed === 'boolean' && element.reversed === true;
    }
  }_exports.OLElementContainer = OLElementContainer;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/dom/elements/select-element-container.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/element-container.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _elementContainer) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.SelectElementContainer = void 0;
  class SelectElementContainer extends _elementContainer.ElementContainer {
    constructor(element) {
      super(element);
      const option = element.options[element.selectedIndex || 0];
      this.value = option ? option.text || '' : '';
    }
  }_exports.SelectElementContainer = SelectElementContainer;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/dom/elements/textarea-element-container.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/element-container.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _elementContainer) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.TextareaElementContainer = void 0;
  class TextareaElementContainer extends _elementContainer.ElementContainer {
    constructor(element) {
      super(element);
      this.value = element.value;
    }
  }_exports.TextareaElementContainer = TextareaElementContainer;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/dom/node-parser.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/element-container.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/text-container.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/replaced-elements/image-element-container.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/replaced-elements/canvas-element-container.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/replaced-elements/svg-element-container.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/elements/li-element-container.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/elements/ol-element-container.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/replaced-elements/input-element-container.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/elements/select-element-container.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/elements/textarea-element-container.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/replaced-elements/iframe-element-container.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _elementContainer, _textContainer, _imageElementContainer, _canvasElementContainer, _svgElementContainer, _liElementContainer, _olElementContainer, _inputElementContainer, _selectElementContainer, _textareaElementContainer, _iframeElementContainer) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.parseTree = _exports.isTextareaElement = _exports.isTextNode = _exports.isStyleElement = _exports.isSelectElement = _exports.isScriptElement = _exports.isSVGElementNode = _exports.isSVGElement = _exports.isOLElement = _exports.isLIElement = _exports.isInputElement = _exports.isImageElement = _exports.isIFrameElement = _exports.isHTMLElementNode = _exports.isHTMLElement = _exports.isElementNode = _exports.isCanvasElement = _exports.isBodyElement = void 0;










  const LIST_OWNERS = ['OL', 'UL', 'MENU'];
  const parseNodeTree = (node, parent, root) => {
    for (let childNode = node.firstChild, nextNode; childNode; childNode = nextNode) {
      nextNode = childNode.nextSibling;
      if (isTextNode(childNode) && childNode.data.trim().length > 0) {
        parent.textNodes.push(new _textContainer.TextContainer(childNode, parent.styles));
      } else
      if (isElementNode(childNode)) {
        const container = createContainer(childNode);
        if (container.styles.isVisible()) {
          if (createsRealStackingContext(childNode, container, root)) {
            container.flags |= 4 /* CREATES_REAL_STACKING_CONTEXT */;
          } else
          if (createsStackingContext(container.styles)) {
            container.flags |= 2 /* CREATES_STACKING_CONTEXT */;
          }
          if (LIST_OWNERS.indexOf(childNode.tagName) !== -1) {
            container.flags |= 8 /* IS_LIST_OWNER */;
          }
          parent.elements.push(container);
          if (!isTextareaElement(childNode) && !isSVGElement(childNode) && !isSelectElement(childNode)) {
            parseNodeTree(childNode, container, root);
          }
        }
      }
    }
  };
  const createContainer = (element) => {
    if (isImageElement(element)) {
      return new _imageElementContainer.ImageElementContainer(element);
    }
    if (isCanvasElement(element)) {
      return new _canvasElementContainer.CanvasElementContainer(element);
    }
    if (isSVGElement(element)) {
      return new _svgElementContainer.SVGElementContainer(element);
    }
    if (isLIElement(element)) {
      return new _liElementContainer.LIElementContainer(element);
    }
    if (isOLElement(element)) {
      return new _olElementContainer.OLElementContainer(element);
    }
    if (isInputElement(element)) {
      return new _inputElementContainer.InputElementContainer(element);
    }
    if (isSelectElement(element)) {
      return new _selectElementContainer.SelectElementContainer(element);
    }
    if (isTextareaElement(element)) {
      return new _textareaElementContainer.TextareaElementContainer(element);
    }
    if (isIFrameElement(element)) {
      return new _iframeElementContainer.IFrameElementContainer(element);
    }
    return new _elementContainer.ElementContainer(element);
  };
  const parseTree = (element) => {
    const container = createContainer(element);
    container.flags |= 4 /* CREATES_REAL_STACKING_CONTEXT */;
    parseNodeTree(element, container, container);
    return container;
  };_exports.parseTree = parseTree;
  const createsRealStackingContext = (node, container, root) => {
    return container.styles.isPositionedWithZIndex() ||
    container.styles.opacity < 1 ||
    container.styles.isTransformed() ||
    isBodyElement(node) && root.styles.isTransparent();
  };
  const createsStackingContext = (styles) => styles.isPositioned() || styles.isFloating();
  const isTextNode = (node) => node.nodeType === Node.TEXT_NODE;_exports.isTextNode = isTextNode;
  const isElementNode = (node) => node.nodeType === Node.ELEMENT_NODE;_exports.isElementNode = isElementNode;
  const isHTMLElementNode = (node) => isElementNode(node) && typeof node.style !== 'undefined' && !isSVGElementNode(node);_exports.isHTMLElementNode = isHTMLElementNode;
  const isSVGElementNode = (element) => typeof element.className === 'object';_exports.isSVGElementNode = isSVGElementNode;
  const isLIElement = (node) => node.tagName === 'LI';_exports.isLIElement = isLIElement;
  const isOLElement = (node) => node.tagName === 'OL';_exports.isOLElement = isOLElement;
  const isInputElement = (node) => node.tagName === 'INPUT';_exports.isInputElement = isInputElement;
  const isHTMLElement = (node) => node.tagName === 'HTML';_exports.isHTMLElement = isHTMLElement;
  const isSVGElement = (node) => node.tagName === 'svg';_exports.isSVGElement = isSVGElement;
  const isBodyElement = (node) => node.tagName === 'BODY';_exports.isBodyElement = isBodyElement;
  const isCanvasElement = (node) => node.tagName === 'CANVAS';_exports.isCanvasElement = isCanvasElement;
  const isImageElement = (node) => node.tagName === 'IMG';_exports.isImageElement = isImageElement;
  const isIFrameElement = (node) => node.tagName === 'IFRAME';_exports.isIFrameElement = isIFrameElement;
  const isStyleElement = (node) => node.tagName === 'STYLE';_exports.isStyleElement = isStyleElement;
  const isScriptElement = (node) => node.tagName === 'SCRIPT';_exports.isScriptElement = isScriptElement;
  const isTextareaElement = (node) => node.tagName === 'TEXTAREA';_exports.isTextareaElement = isTextareaElement;
  const isSelectElement = (node) => node.tagName === 'SELECT';_exports.isSelectElement = isSelectElement;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/dom/replaced-elements/canvas-element-container.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/element-container.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _elementContainer) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.CanvasElementContainer = void 0;
  class CanvasElementContainer extends _elementContainer.ElementContainer {
    constructor(canvas) {
      super(canvas);
      this.canvas = canvas;
      this.intrinsicWidth = canvas.width;
      this.intrinsicHeight = canvas.height;
    }
  }_exports.CanvasElementContainer = CanvasElementContainer;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/dom/replaced-elements/iframe-element-container.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/element-container.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/node-parser.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/color.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _elementContainer, _nodeParser, _color, _parser) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.IFrameElementContainer = void 0;



  const parseColor = (value) => _color.color.parse(_parser.Parser.create(value).parseComponentValue());
  class IFrameElementContainer extends _elementContainer.ElementContainer {
    constructor(iframe) {
      super(iframe);
      this.src = iframe.src;
      this.width = parseInt(iframe.width, 10) || 0;
      this.height = parseInt(iframe.height, 10) || 0;
      this.backgroundColor = this.styles.backgroundColor;
      try {
        if (iframe.contentWindow &&
        iframe.contentWindow.document &&
        iframe.contentWindow.document.documentElement) {
          this.tree = (0, _nodeParser.parseTree)(iframe.contentWindow.document.documentElement);
          // http://www.w3.org/TR/css3-background/#special-backgrounds
          const documentBackgroundColor = iframe.contentWindow.document.documentElement ?
          parseColor(getComputedStyle(iframe.contentWindow.document.documentElement).
          backgroundColor) :
          _color.COLORS.TRANSPARENT;
          const bodyBackgroundColor = iframe.contentWindow.document.body ?
          parseColor(getComputedStyle(iframe.contentWindow.document.body).backgroundColor) :
          _color.COLORS.TRANSPARENT;
          this.backgroundColor = (0, _color.isTransparent)(documentBackgroundColor) ?
          (0, _color.isTransparent)(bodyBackgroundColor) ?
          this.styles.backgroundColor :
          bodyBackgroundColor :
          documentBackgroundColor;
        }
      }
      catch (e) {}
    }
  }_exports.IFrameElementContainer = IFrameElementContainer;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/dom/replaced-elements/image-element-container.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/element-container.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/core/cache-storage.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _elementContainer, _cacheStorage) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.ImageElementContainer = void 0;

  class ImageElementContainer extends _elementContainer.ElementContainer {
    constructor(img) {
      super(img);
      this.src = img.currentSrc || img.src;
      this.intrinsicWidth = img.naturalWidth;
      this.intrinsicHeight = img.naturalHeight;
      _cacheStorage.CacheStorage.getInstance().addImage(this.src);
    }
  }_exports.ImageElementContainer = ImageElementContainer;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/dom/replaced-elements/input-element-container.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/element-container.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/border-style.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/background-clip.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/tokenizer.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/layout/bounds.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _elementContainer, _borderStyle, _backgroundClip, _tokenizer, _bounds) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.RADIO = _exports.PASSWORD = _exports.InputElementContainer = _exports.INPUT_COLOR = _exports.CHECKBOX = void 0;




  const CHECKBOX_BORDER_RADIUS = [
  {
    type: _tokenizer.TokenType.DIMENSION_TOKEN,
    flags: 0,
    unit: 'px',
    number: 3
  }];

  const RADIO_BORDER_RADIUS = [
  {
    type: _tokenizer.TokenType.PERCENTAGE_TOKEN,
    flags: 0,
    number: 50
  }];

  const reformatInputBounds = (bounds) => {
    if (bounds.width > bounds.height) {
      return new _bounds.Bounds(bounds.left + (bounds.width - bounds.height) / 2, bounds.top, bounds.height, bounds.height);
    } else
    if (bounds.width < bounds.height) {
      return new _bounds.Bounds(bounds.left, bounds.top + (bounds.height - bounds.width) / 2, bounds.width, bounds.width);
    }
    return bounds;
  };
  const getInputValue = (node) => {
    const value = node.type === PASSWORD ? new Array(node.value.length + 1).join('\u2022') : node.value;
    return value.length === 0 ? node.placeholder || '' : value;
  };
  const CHECKBOX = _exports.CHECKBOX = 'checkbox';
  const RADIO = _exports.RADIO = 'radio';
  const PASSWORD = _exports.PASSWORD = 'password';
  const INPUT_COLOR = _exports.INPUT_COLOR = 0x2a2a2aff;
  class InputElementContainer extends _elementContainer.ElementContainer {
    constructor(input) {
      super(input);
      this.type = input.type.toLowerCase();
      this.checked = input.checked;
      this.value = getInputValue(input);
      if (this.type === CHECKBOX || this.type === RADIO) {
        this.styles.backgroundColor = 0xdededeff;
        this.styles.borderTopColor = this.styles.borderRightColor = this.styles.borderBottomColor = this.styles.borderLeftColor = 0xa5a5a5ff;
        this.styles.borderTopWidth = this.styles.borderRightWidth = this.styles.borderBottomWidth = this.styles.borderLeftWidth = 1;
        this.styles.borderTopStyle = this.styles.borderRightStyle = this.styles.borderBottomStyle = this.styles.borderLeftStyle =
        _borderStyle.BORDER_STYLE.SOLID;
        this.styles.backgroundClip = [_backgroundClip.BACKGROUND_CLIP.BORDER_BOX];
        this.styles.backgroundOrigin = [0 /* BORDER_BOX */];
        this.bounds = reformatInputBounds(this.bounds);
      }
      switch (this.type) {
        case CHECKBOX:
          this.styles.borderTopRightRadius = this.styles.borderTopLeftRadius = this.styles.borderBottomRightRadius = this.styles.borderBottomLeftRadius = CHECKBOX_BORDER_RADIUS;
          break;
        case RADIO:
          this.styles.borderTopRightRadius = this.styles.borderTopLeftRadius = this.styles.borderBottomRightRadius = this.styles.borderBottomLeftRadius = RADIO_BORDER_RADIUS;
          break;
      }
    }
  }_exports.InputElementContainer = InputElementContainer;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/dom/replaced-elements/svg-element-container.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/element-container.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/core/cache-storage.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _elementContainer, _cacheStorage) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.SVGElementContainer = void 0;

  class SVGElementContainer extends _elementContainer.ElementContainer {
    constructor(img) {
      super(img);
      const s = new XMLSerializer();
      this.svg = "data:image/svg+xml,".concat(encodeURIComponent(s.serializeToString(img)));
      this.intrinsicWidth = img.width.baseVal.value;
      this.intrinsicHeight = img.height.baseVal.value;
      _cacheStorage.CacheStorage.getInstance().addImage(this.svg);
    }
  }_exports.SVGElementContainer = SVGElementContainer;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/dom/text-container.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/text-transform.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/layout/text.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _textTransform, _text) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.TextContainer = void 0;

  class TextContainer {
    constructor(node, styles) {
      this.text = transform(node.data, styles.textTransform);
      this.textBounds = (0, _text.parseTextBounds)(this.text, styles, node);
    }
  }_exports.TextContainer = TextContainer;
  const transform = (text, transform) => {
    switch (transform) {
      case _textTransform.TEXT_TRANSFORM.LOWERCASE:
        return text.toLowerCase();
      case _textTransform.TEXT_TRANSFORM.CAPITALIZE:
        return text.replace(CAPITALIZE, capitalize);
      case _textTransform.TEXT_TRANSFORM.UPPERCASE:
        return text.toUpperCase();
      default:
        return text;
    }
  };
  const CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;
  const capitalize = (m, p1, p2) => {
    if (m.length > 0) {
      return p1 + p2.toUpperCase();
    }
    return m;
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/defineProperty.js"), __webpack_require__("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/layout/bounds.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/color.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/document-cloner.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/node-parser.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/core/logger.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/core/cache-storage.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/render/canvas/canvas-renderer.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/render/canvas/foreignobject-renderer.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _defineProperty2, _asyncToGenerator2, _bounds, _color, _parser, _documentCloner, _nodeParser, _logger, _cacheStorage, _canvasRenderer, _foreignobjectRenderer) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.default = void 0;_defineProperty2 = _interopRequireDefault(_defineProperty2);_asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {(0, _defineProperty2.default)(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}








  const parseColor = (value) => _color.color.parse(_parser.Parser.create(value).parseComponentValue());
  const html2canvas = function (element) {let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return renderElement(element, options);
  };var _default = _exports.default =
  html2canvas;
  if (typeof window !== 'undefined') {
    _cacheStorage.CacheStorage.setContext(window);
  }
  const renderElement = /*#__PURE__*/function () {var _ref = (0, _asyncToGenerator2.default)(function* (element, opts) {
      const ownerDocument = element.ownerDocument;
      if (!ownerDocument) {
        throw new Error("Element is not attached to a Document");
      }
      const defaultView = ownerDocument.defaultView;
      if (!defaultView) {
        throw new Error("Document is not attached to a Window");
      }
      const instanceName = (Math.round(Math.random() * 1000) + Date.now()).toString(16);const _ref2 =
        (0, _nodeParser.isBodyElement)(element) || (0, _nodeParser.isHTMLElement)(element) ? (0, _bounds.parseDocumentSize)(ownerDocument) : (0, _bounds.parseBounds)(element),width = _ref2.width,height = _ref2.height,left = _ref2.left,top = _ref2.top;
      const defaultResourceOptions = {
        allowTaint: false,
        imageTimeout: 15000,
        proxy: undefined,
        useCORS: false
      };
      const resourceOptions = _objectSpread(_objectSpread({}, defaultResourceOptions), opts);
      const defaultOptions = {
        backgroundColor: '#ffffff',
        cache: opts.cache ? opts.cache : _cacheStorage.CacheStorage.create(instanceName, resourceOptions),
        logging: true,
        removeContainer: true,
        foreignObjectRendering: false,
        scale: defaultView.devicePixelRatio || 1,
        windowWidth: defaultView.innerWidth,
        windowHeight: defaultView.innerHeight,
        scrollX: defaultView.pageXOffset,
        scrollY: defaultView.pageYOffset,
        x: left,
        y: top,
        width: Math.ceil(width),
        height: Math.ceil(height),
        id: instanceName
      };
      const options = _objectSpread(_objectSpread(_objectSpread({}, defaultOptions), resourceOptions), opts);
      const windowBounds = new _bounds.Bounds(options.scrollX, options.scrollY, options.windowWidth, options.windowHeight);
      _logger.Logger.create({ id: instanceName, enabled: options.logging });
      _logger.Logger.getInstance(instanceName).debug("Starting document clone");
      const documentCloner = new _documentCloner.DocumentCloner(element, {
        id: instanceName,
        onclone: options.onclone,
        ignoreElements: options.ignoreElements,
        inlineImages: options.foreignObjectRendering,
        copyStyles: options.foreignObjectRendering
      });
      const clonedElement = documentCloner.clonedReferenceElement;
      if (!clonedElement) {
        return Promise.reject("Unable to find element in cloned iframe");
      }
      const container = yield documentCloner.toIFrame(ownerDocument, windowBounds);
      // http://www.w3.org/TR/css3-background/#special-backgrounds
      const documentBackgroundColor = ownerDocument.documentElement ?
      parseColor(getComputedStyle(ownerDocument.documentElement).backgroundColor) :
      _color.COLORS.TRANSPARENT;
      const bodyBackgroundColor = ownerDocument.body ?
      parseColor(getComputedStyle(ownerDocument.body).backgroundColor) :
      _color.COLORS.TRANSPARENT;
      const bgColor = opts.backgroundColor;
      const defaultBackgroundColor = typeof bgColor === 'string' ? parseColor(bgColor) : bgColor === null ? _color.COLORS.TRANSPARENT : 0xffffffff;
      const backgroundColor = element === ownerDocument.documentElement ?
      (0, _color.isTransparent)(documentBackgroundColor) ?
      (0, _color.isTransparent)(bodyBackgroundColor) ?
      defaultBackgroundColor :
      bodyBackgroundColor :
      documentBackgroundColor :
      defaultBackgroundColor;
      const renderOptions = {
        id: instanceName,
        cache: options.cache,
        canvas: options.canvas,
        backgroundColor,
        scale: options.scale,
        x: options.x,
        y: options.y,
        scrollX: options.scrollX,
        scrollY: options.scrollY,
        width: options.width,
        height: options.height,
        windowWidth: options.windowWidth,
        windowHeight: options.windowHeight
      };
      let canvas;
      if (options.foreignObjectRendering) {
        _logger.Logger.getInstance(instanceName).debug("Document cloned, using foreign object rendering");
        const renderer = new _foreignobjectRenderer.ForeignObjectRenderer(renderOptions);
        canvas = yield renderer.render(clonedElement);
      } else
      {
        _logger.Logger.getInstance(instanceName).debug("Document cloned, using computed rendering");
        _cacheStorage.CacheStorage.attachInstance(options.cache);
        _logger.Logger.getInstance(instanceName).debug("Starting DOM parsing");
        const root = (0, _nodeParser.parseTree)(clonedElement);
        _cacheStorage.CacheStorage.detachInstance();
        if (backgroundColor === root.styles.backgroundColor) {
          root.styles.backgroundColor = _color.COLORS.TRANSPARENT;
        }
        _logger.Logger.getInstance(instanceName).debug("Starting renderer");
        const renderer = new _canvasRenderer.CanvasRenderer(renderOptions);
        canvas = yield renderer.render(root);
      }
      if (options.removeContainer === true) {
        if (!_documentCloner.DocumentCloner.destroy(container)) {
          _logger.Logger.getInstance(instanceName).error("Cannot detach cloned iframe as it is not in the DOM anymore");
        }
      }
      _logger.Logger.getInstance(instanceName).debug("Finished rendering");
      _logger.Logger.destroy(instanceName);
      _cacheStorage.CacheStorage.destroy(instanceName);
      return canvas;
    });return function renderElement(_x, _x2) {return _ref.apply(this, arguments);};}();});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/render/background.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/slicedToArray.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/background-size.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/render/vector.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/background-repeat.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/length-percentage.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/render/box-sizing.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/background-clip.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _slicedToArray2, _backgroundSize, _vector, _backgroundRepeat, _lengthPercentage, _parser, _boxSizing, _backgroundClip) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.isAuto = _exports.getBackgroundValueForIndex = _exports.calculateBackgroundSize = _exports.calculateBackgroundRepeatPath = _exports.calculateBackgroundRendering = _exports.calculateBackgroundPositioningArea = _exports.calculateBackgroundPaintingArea = void 0;_slicedToArray2 = _interopRequireDefault(_slicedToArray2);






  const calculateBackgroundPositioningArea = (backgroundOrigin, element) => {
    if (backgroundOrigin === 0 /* BORDER_BOX */) {
      return element.bounds;
    }
    if (backgroundOrigin === 2 /* CONTENT_BOX */) {
      return (0, _boxSizing.contentBox)(element);
    }
    return (0, _boxSizing.paddingBox)(element);
  };_exports.calculateBackgroundPositioningArea = calculateBackgroundPositioningArea;
  const calculateBackgroundPaintingArea = (backgroundClip, element) => {
    if (backgroundClip === _backgroundClip.BACKGROUND_CLIP.BORDER_BOX) {
      return element.bounds;
    }
    if (backgroundClip === _backgroundClip.BACKGROUND_CLIP.CONTENT_BOX) {
      return (0, _boxSizing.contentBox)(element);
    }
    return (0, _boxSizing.paddingBox)(element);
  };_exports.calculateBackgroundPaintingArea = calculateBackgroundPaintingArea;
  const calculateBackgroundRendering = (container, index, intrinsicSize) => {
    const backgroundPositioningArea = calculateBackgroundPositioningArea(getBackgroundValueForIndex(container.styles.backgroundOrigin, index), container);
    const backgroundPaintingArea = calculateBackgroundPaintingArea(getBackgroundValueForIndex(container.styles.backgroundClip, index), container);
    const backgroundImageSize = calculateBackgroundSize(getBackgroundValueForIndex(container.styles.backgroundSize, index), intrinsicSize, backgroundPositioningArea);const _backgroundImageSize = (0, _slicedToArray2.default)(
        backgroundImageSize, 2),sizeWidth = _backgroundImageSize[0],sizeHeight = _backgroundImageSize[1];
    const position = (0, _lengthPercentage.getAbsoluteValueForTuple)(getBackgroundValueForIndex(container.styles.backgroundPosition, index), backgroundPositioningArea.width - sizeWidth, backgroundPositioningArea.height - sizeHeight);
    const path = calculateBackgroundRepeatPath(getBackgroundValueForIndex(container.styles.backgroundRepeat, index), position, backgroundImageSize, backgroundPositioningArea, backgroundPaintingArea);
    const offsetX = Math.round(backgroundPositioningArea.left + position[0]);
    const offsetY = Math.round(backgroundPositioningArea.top + position[1]);
    return [path, offsetX, offsetY, sizeWidth, sizeHeight];
  };_exports.calculateBackgroundRendering = calculateBackgroundRendering;
  const isAuto = (token) => (0, _parser.isIdentToken)(token) && token.value === _backgroundSize.BACKGROUND_SIZE.AUTO;_exports.isAuto = isAuto;
  const hasIntrinsicValue = (value) => typeof value === 'number';
  const calculateBackgroundSize = (size, _ref, bounds) => {let _ref2 = (0, _slicedToArray2.default)(_ref, 3),intrinsicWidth = _ref2[0],intrinsicHeight = _ref2[1],intrinsicProportion = _ref2[2];const _size = (0, _slicedToArray2.default)(
        size, 2),first = _size[0],second = _size[1];
    if ((0, _lengthPercentage.isLengthPercentage)(first) && second && (0, _lengthPercentage.isLengthPercentage)(second)) {
      return [(0, _lengthPercentage.getAbsoluteValue)(first, bounds.width), (0, _lengthPercentage.getAbsoluteValue)(second, bounds.height)];
    }
    const hasIntrinsicProportion = hasIntrinsicValue(intrinsicProportion);
    if ((0, _parser.isIdentToken)(first) && (first.value === _backgroundSize.BACKGROUND_SIZE.CONTAIN || first.value === _backgroundSize.BACKGROUND_SIZE.COVER)) {
      if (hasIntrinsicValue(intrinsicProportion)) {
        const targetRatio = bounds.width / bounds.height;
        return targetRatio < intrinsicProportion !== (first.value === _backgroundSize.BACKGROUND_SIZE.COVER) ?
        [bounds.width, bounds.width / intrinsicProportion] :
        [bounds.height * intrinsicProportion, bounds.height];
      }
      return [bounds.width, bounds.height];
    }
    const hasIntrinsicWidth = hasIntrinsicValue(intrinsicWidth);
    const hasIntrinsicHeight = hasIntrinsicValue(intrinsicHeight);
    const hasIntrinsicDimensions = hasIntrinsicWidth || hasIntrinsicHeight;
    // If the background-size is auto or auto auto:
    if (isAuto(first) && (!second || isAuto(second))) {
      // If the image has both horizontal and vertical intrinsic dimensions, it's rendered at that size.
      if (hasIntrinsicWidth && hasIntrinsicHeight) {
        return [intrinsicWidth, intrinsicHeight];
      }
      // If the image has no intrinsic dimensions and has no intrinsic proportions,
      // it's rendered at the size of the background positioning area.
      if (!hasIntrinsicProportion && !hasIntrinsicDimensions) {
        return [bounds.width, bounds.height];
      }
      // TODO If the image has no intrinsic dimensions but has intrinsic proportions, it's rendered as if contain had been specified instead.
      // If the image has only one intrinsic dimension and has intrinsic proportions, it's rendered at the size corresponding to that one dimension.
      // The other dimension is computed using the specified dimension and the intrinsic proportions.
      if (hasIntrinsicDimensions && hasIntrinsicProportion) {
        const width = hasIntrinsicWidth ?
        intrinsicWidth :
        intrinsicHeight * intrinsicProportion;
        const height = hasIntrinsicHeight ?
        intrinsicHeight :
        intrinsicWidth / intrinsicProportion;
        return [width, height];
      }
      // If the image has only one intrinsic dimension but has no intrinsic proportions,
      // it's rendered using the specified dimension and the other dimension of the background positioning area.
      const width = hasIntrinsicWidth ? intrinsicWidth : bounds.width;
      const height = hasIntrinsicHeight ? intrinsicHeight : bounds.height;
      return [width, height];
    }
    // If the image has intrinsic proportions, it's stretched to the specified dimension.
    // The unspecified dimension is computed using the specified dimension and the intrinsic proportions.
    if (hasIntrinsicProportion) {
      let width = 0;
      let height = 0;
      if ((0, _lengthPercentage.isLengthPercentage)(first)) {
        width = (0, _lengthPercentage.getAbsoluteValue)(first, bounds.width);
      } else
      if ((0, _lengthPercentage.isLengthPercentage)(second)) {
        height = (0, _lengthPercentage.getAbsoluteValue)(second, bounds.height);
      }
      if (isAuto(first)) {
        width = height * intrinsicProportion;
      } else
      if (!second || isAuto(second)) {
        height = width / intrinsicProportion;
      }
      return [width, height];
    }
    // If the image has no intrinsic proportions, it's stretched to the specified dimension.
    // The unspecified dimension is computed using the image's corresponding intrinsic dimension,
    // if there is one. If there is no such intrinsic dimension,
    // it becomes the corresponding dimension of the background positioning area.
    let width = null;
    let height = null;
    if ((0, _lengthPercentage.isLengthPercentage)(first)) {
      width = (0, _lengthPercentage.getAbsoluteValue)(first, bounds.width);
    } else
    if (second && (0, _lengthPercentage.isLengthPercentage)(second)) {
      height = (0, _lengthPercentage.getAbsoluteValue)(second, bounds.height);
    }
    if (width !== null && (!second || isAuto(second))) {
      height =
      hasIntrinsicWidth && hasIntrinsicHeight ?
      width / intrinsicWidth * intrinsicHeight :
      bounds.height;
    }
    if (height !== null && isAuto(first)) {
      width =
      hasIntrinsicWidth && hasIntrinsicHeight ?
      height / intrinsicHeight * intrinsicWidth :
      bounds.width;
    }
    if (width !== null && height !== null) {
      return [width, height];
    }
    throw new Error("Unable to calculate background-size for element");
  };_exports.calculateBackgroundSize = calculateBackgroundSize;
  const getBackgroundValueForIndex = (values, index) => {
    const value = values[index];
    if (typeof value === 'undefined') {
      return values[0];
    }
    return value;
  };_exports.getBackgroundValueForIndex = getBackgroundValueForIndex;
  const calculateBackgroundRepeatPath = (repeat, _ref3, _ref4, backgroundPositioningArea, backgroundPaintingArea) => {let _ref5 = (0, _slicedToArray2.default)(_ref3, 2),x = _ref5[0],y = _ref5[1];let _ref6 = (0, _slicedToArray2.default)(_ref4, 2),width = _ref6[0],height = _ref6[1];
    switch (repeat) {
      case _backgroundRepeat.BACKGROUND_REPEAT.REPEAT_X:
        return [
        new _vector.Vector(Math.round(backgroundPositioningArea.left), Math.round(backgroundPositioningArea.top + y)),
        new _vector.Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(backgroundPositioningArea.top + y)),
        new _vector.Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(height + backgroundPositioningArea.top + y)),
        new _vector.Vector(Math.round(backgroundPositioningArea.left), Math.round(height + backgroundPositioningArea.top + y))];

      case _backgroundRepeat.BACKGROUND_REPEAT.REPEAT_Y:
        return [
        new _vector.Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top)),
        new _vector.Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top)),
        new _vector.Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top)),
        new _vector.Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top))];

      case _backgroundRepeat.BACKGROUND_REPEAT.NO_REPEAT:
        return [
        new _vector.Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y)),
        new _vector.Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y)),
        new _vector.Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y + height)),
        new _vector.Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y + height))];

      default:
        return [
        new _vector.Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.top)),
        new _vector.Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.top)),
        new _vector.Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top)),
        new _vector.Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top))];

    }
  };_exports.calculateBackgroundRepeatPath = calculateBackgroundRepeatPath;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/render/bezier-curve.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/render/vector.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/render/path.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _vector, _path) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.isBezierCurve = _exports.BezierCurve = void 0;

  const lerp = (a, b, t) => {
    return new _vector.Vector(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
  };
  class BezierCurve {
    constructor(start, startControl, endControl, end) {
      this.type = _path.PathType.BEZIER_CURVE;
      this.start = start;
      this.startControl = startControl;
      this.endControl = endControl;
      this.end = end;
    }
    subdivide(t, firstHalf) {
      const ab = lerp(this.start, this.startControl, t);
      const bc = lerp(this.startControl, this.endControl, t);
      const cd = lerp(this.endControl, this.end, t);
      const abbc = lerp(ab, bc, t);
      const bccd = lerp(bc, cd, t);
      const dest = lerp(abbc, bccd, t);
      return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);
    }
    add(deltaX, deltaY) {
      return new BezierCurve(this.start.add(deltaX, deltaY), this.startControl.add(deltaX, deltaY), this.endControl.add(deltaX, deltaY), this.end.add(deltaX, deltaY));
    }
    reverse() {
      return new BezierCurve(this.end, this.endControl, this.startControl, this.start);
    }
  }_exports.BezierCurve = BezierCurve;
  const isBezierCurve = (path) => path.type === _path.PathType.BEZIER_CURVE;_exports.isBezierCurve = isBezierCurve;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/render/border.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/render/bezier-curve.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _bezierCurve) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.parsePathForBorder = void 0;
  const parsePathForBorder = (curves, borderSide) => {
    switch (borderSide) {
      case 0:
        return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftPaddingBox, curves.topRightBorderBox, curves.topRightPaddingBox);
      case 1:
        return createPathFromCurves(curves.topRightBorderBox, curves.topRightPaddingBox, curves.bottomRightBorderBox, curves.bottomRightPaddingBox);
      case 2:
        return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox);
      case 3:
      default:
        return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox, curves.topLeftBorderBox, curves.topLeftPaddingBox);
    }
  };_exports.parsePathForBorder = parsePathForBorder;
  const createPathFromCurves = (outer1, inner1, outer2, inner2) => {
    const path = [];
    if ((0, _bezierCurve.isBezierCurve)(outer1)) {
      path.push(outer1.subdivide(0.5, false));
    } else
    {
      path.push(outer1);
    }
    if ((0, _bezierCurve.isBezierCurve)(outer2)) {
      path.push(outer2.subdivide(0.5, true));
    } else
    {
      path.push(outer2);
    }
    if ((0, _bezierCurve.isBezierCurve)(inner2)) {
      path.push(inner2.subdivide(0.5, true).reverse());
    } else
    {
      path.push(inner2);
    }
    if ((0, _bezierCurve.isBezierCurve)(inner1)) {
      path.push(inner1.subdivide(0.5, false).reverse());
    } else
    {
      path.push(inner1);
    }
    return path;
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/render/bound-curves.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/slicedToArray.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/length-percentage.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/render/vector.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/render/bezier-curve.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _slicedToArray2, _lengthPercentage, _vector, _bezierCurve) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.calculatePaddingBoxPath = _exports.calculateContentBoxPath = _exports.calculateBorderBoxPath = _exports.BoundCurves = void 0;_slicedToArray2 = _interopRequireDefault(_slicedToArray2);


  class BoundCurves {
    constructor(element) {
      const styles = element.styles;
      const bounds = element.bounds;let _getAbsoluteValueForT =
        (0, _lengthPercentage.getAbsoluteValueForTuple)(styles.borderTopLeftRadius, bounds.width, bounds.height),_getAbsoluteValueForT2 = (0, _slicedToArray2.default)(_getAbsoluteValueForT, 2),tlh = _getAbsoluteValueForT2[0],tlv = _getAbsoluteValueForT2[1];let _getAbsoluteValueForT3 =
        (0, _lengthPercentage.getAbsoluteValueForTuple)(styles.borderTopRightRadius, bounds.width, bounds.height),_getAbsoluteValueForT4 = (0, _slicedToArray2.default)(_getAbsoluteValueForT3, 2),trh = _getAbsoluteValueForT4[0],trv = _getAbsoluteValueForT4[1];let _getAbsoluteValueForT5 =
        (0, _lengthPercentage.getAbsoluteValueForTuple)(styles.borderBottomRightRadius, bounds.width, bounds.height),_getAbsoluteValueForT6 = (0, _slicedToArray2.default)(_getAbsoluteValueForT5, 2),brh = _getAbsoluteValueForT6[0],brv = _getAbsoluteValueForT6[1];let _getAbsoluteValueForT7 =
        (0, _lengthPercentage.getAbsoluteValueForTuple)(styles.borderBottomLeftRadius, bounds.width, bounds.height),_getAbsoluteValueForT8 = (0, _slicedToArray2.default)(_getAbsoluteValueForT7, 2),blh = _getAbsoluteValueForT8[0],blv = _getAbsoluteValueForT8[1];
      const factors = [];
      factors.push((tlh + trh) / bounds.width);
      factors.push((blh + brh) / bounds.width);
      factors.push((tlv + blv) / bounds.height);
      factors.push((trv + brv) / bounds.height);
      const maxFactor = Math.max(...factors);
      if (maxFactor > 1) {
        tlh /= maxFactor;
        tlv /= maxFactor;
        trh /= maxFactor;
        trv /= maxFactor;
        brh /= maxFactor;
        brv /= maxFactor;
        blh /= maxFactor;
        blv /= maxFactor;
      }
      const topWidth = bounds.width - trh;
      const rightHeight = bounds.height - brv;
      const bottomWidth = bounds.width - brh;
      const leftHeight = bounds.height - blv;
      const borderTopWidth = styles.borderTopWidth;
      const borderRightWidth = styles.borderRightWidth;
      const borderBottomWidth = styles.borderBottomWidth;
      const borderLeftWidth = styles.borderLeftWidth;
      const paddingTop = (0, _lengthPercentage.getAbsoluteValue)(styles.paddingTop, element.bounds.width);
      const paddingRight = (0, _lengthPercentage.getAbsoluteValue)(styles.paddingRight, element.bounds.width);
      const paddingBottom = (0, _lengthPercentage.getAbsoluteValue)(styles.paddingBottom, element.bounds.width);
      const paddingLeft = (0, _lengthPercentage.getAbsoluteValue)(styles.paddingLeft, element.bounds.width);
      this.topLeftBorderBox =
      tlh > 0 || tlv > 0 ?
      getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) :
      new _vector.Vector(bounds.left, bounds.top);
      this.topRightBorderBox =
      trh > 0 || trv > 0 ?
      getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) :
      new _vector.Vector(bounds.left + bounds.width, bounds.top);
      this.bottomRightBorderBox =
      brh > 0 || brv > 0 ?
      getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) :
      new _vector.Vector(bounds.left + bounds.width, bounds.top + bounds.height);
      this.bottomLeftBorderBox =
      blh > 0 || blv > 0 ?
      getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) :
      new _vector.Vector(bounds.left, bounds.top + bounds.height);
      this.topLeftPaddingBox =
      tlh > 0 || tlv > 0 ?
      getCurvePoints(bounds.left + borderLeftWidth, bounds.top + borderTopWidth, Math.max(0, tlh - borderLeftWidth), Math.max(0, tlv - borderTopWidth), CORNER.TOP_LEFT) :
      new _vector.Vector(bounds.left + borderLeftWidth, bounds.top + borderTopWidth);
      this.topRightPaddingBox =
      trh > 0 || trv > 0 ?
      getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borderLeftWidth), bounds.top + borderTopWidth, topWidth > bounds.width + borderLeftWidth ? 0 : trh - borderLeftWidth, trv - borderTopWidth, CORNER.TOP_RIGHT) :
      new _vector.Vector(bounds.left + bounds.width - borderRightWidth, bounds.top + borderTopWidth);
      this.bottomRightPaddingBox =
      brh > 0 || brv > 0 ?
      getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borderLeftWidth), bounds.top + Math.min(rightHeight, bounds.height + borderTopWidth), Math.max(0, brh - borderRightWidth), brv - borderBottomWidth, CORNER.BOTTOM_RIGHT) :
      new _vector.Vector(bounds.left + bounds.width - borderRightWidth, bounds.top + bounds.height - borderBottomWidth);
      this.bottomLeftPaddingBox =
      blh > 0 || blv > 0 ?
      getCurvePoints(bounds.left + borderLeftWidth, bounds.top + leftHeight, Math.max(0, blh - borderLeftWidth), blv - borderBottomWidth, CORNER.BOTTOM_LEFT) :
      new _vector.Vector(bounds.left + borderLeftWidth, bounds.top + bounds.height - borderBottomWidth);
      this.topLeftContentBox =
      tlh > 0 || tlv > 0 ?
      getCurvePoints(bounds.left + borderLeftWidth + paddingLeft, bounds.top + borderTopWidth + paddingTop, Math.max(0, tlh - (borderLeftWidth + paddingLeft)), Math.max(0, tlv - (borderTopWidth + paddingTop)), CORNER.TOP_LEFT) :
      new _vector.Vector(bounds.left + borderLeftWidth + paddingLeft, bounds.top + borderTopWidth + paddingTop);
      this.topRightContentBox =
      trh > 0 || trv > 0 ?
      getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borderLeftWidth + paddingLeft), bounds.top + borderTopWidth + paddingTop, topWidth > bounds.width + borderLeftWidth + paddingLeft ? 0 : trh - borderLeftWidth + paddingLeft, trv - (borderTopWidth + paddingTop), CORNER.TOP_RIGHT) :
      new _vector.Vector(bounds.left + bounds.width - (borderRightWidth + paddingRight), bounds.top + borderTopWidth + paddingTop);
      this.bottomRightContentBox =
      brh > 0 || brv > 0 ?
      getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - (borderLeftWidth + paddingLeft)), bounds.top + Math.min(rightHeight, bounds.height + borderTopWidth + paddingTop), Math.max(0, brh - (borderRightWidth + paddingRight)), brv - (borderBottomWidth + paddingBottom), CORNER.BOTTOM_RIGHT) :
      new _vector.Vector(bounds.left + bounds.width - (borderRightWidth + paddingRight), bounds.top + bounds.height - (borderBottomWidth + paddingBottom));
      this.bottomLeftContentBox =
      blh > 0 || blv > 0 ?
      getCurvePoints(bounds.left + borderLeftWidth + paddingLeft, bounds.top + leftHeight, Math.max(0, blh - (borderLeftWidth + paddingLeft)), blv - (borderBottomWidth + paddingBottom), CORNER.BOTTOM_LEFT) :
      new _vector.Vector(bounds.left + borderLeftWidth + paddingLeft, bounds.top + bounds.height - (borderBottomWidth + paddingBottom));
    }
  }_exports.BoundCurves = BoundCurves;
  var CORNER;
  (function (CORNER) {
    CORNER[CORNER["TOP_LEFT"] = 0] = "TOP_LEFT";
    CORNER[CORNER["TOP_RIGHT"] = 1] = "TOP_RIGHT";
    CORNER[CORNER["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
    CORNER[CORNER["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
  })(CORNER || (CORNER = {}));
  const getCurvePoints = (x, y, r1, r2, position) => {
    const kappa = 4 * ((Math.sqrt(2) - 1) / 3);
    const ox = r1 * kappa; // control point offset horizontal
    const oy = r2 * kappa; // control point offset vertical
    const xm = x + r1; // x-middle
    const ym = y + r2; // y-middle
    switch (position) {
      case CORNER.TOP_LEFT:
        return new _bezierCurve.BezierCurve(new _vector.Vector(x, ym), new _vector.Vector(x, ym - oy), new _vector.Vector(xm - ox, y), new _vector.Vector(xm, y));
      case CORNER.TOP_RIGHT:
        return new _bezierCurve.BezierCurve(new _vector.Vector(x, y), new _vector.Vector(x + ox, y), new _vector.Vector(xm, ym - oy), new _vector.Vector(xm, ym));
      case CORNER.BOTTOM_RIGHT:
        return new _bezierCurve.BezierCurve(new _vector.Vector(xm, y), new _vector.Vector(xm, y + oy), new _vector.Vector(x + ox, ym), new _vector.Vector(x, ym));
      case CORNER.BOTTOM_LEFT:
      default:
        return new _bezierCurve.BezierCurve(new _vector.Vector(xm, ym), new _vector.Vector(xm - ox, ym), new _vector.Vector(x, y + oy), new _vector.Vector(x, y));
    }
  };
  const calculateBorderBoxPath = (curves) => {
    return [curves.topLeftBorderBox, curves.topRightBorderBox, curves.bottomRightBorderBox, curves.bottomLeftBorderBox];
  };_exports.calculateBorderBoxPath = calculateBorderBoxPath;
  const calculateContentBoxPath = (curves) => {
    return [
    curves.topLeftContentBox,
    curves.topRightContentBox,
    curves.bottomRightContentBox,
    curves.bottomLeftContentBox];

  };_exports.calculateContentBoxPath = calculateContentBoxPath;
  const calculatePaddingBoxPath = (curves) => {
    return [
    curves.topLeftPaddingBox,
    curves.topRightPaddingBox,
    curves.bottomRightPaddingBox,
    curves.bottomLeftPaddingBox];

  };_exports.calculatePaddingBoxPath = calculatePaddingBoxPath;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/render/box-sizing.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/length-percentage.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _lengthPercentage) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.paddingBox = _exports.contentBox = void 0;
  const paddingBox = (element) => {
    const bounds = element.bounds;
    const styles = element.styles;
    return bounds.add(styles.borderLeftWidth, styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth), -(styles.borderTopWidth + styles.borderBottomWidth));
  };_exports.paddingBox = paddingBox;
  const contentBox = (element) => {
    const styles = element.styles;
    const bounds = element.bounds;
    const paddingLeft = (0, _lengthPercentage.getAbsoluteValue)(styles.paddingLeft, bounds.width);
    const paddingRight = (0, _lengthPercentage.getAbsoluteValue)(styles.paddingRight, bounds.width);
    const paddingTop = (0, _lengthPercentage.getAbsoluteValue)(styles.paddingTop, bounds.width);
    const paddingBottom = (0, _lengthPercentage.getAbsoluteValue)(styles.paddingBottom, bounds.width);
    return bounds.add(paddingLeft + styles.borderLeftWidth, paddingTop + styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth + paddingLeft + paddingRight), -(styles.borderTopWidth + styles.borderBottomWidth + paddingTop + paddingBottom));
  };_exports.contentBox = contentBox;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/render/canvas/canvas-renderer.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/slicedToArray.js"), __webpack_require__("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/render/stacking-context.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/color.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/core/logger.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/border-style.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/render/path.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/background-clip.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/render/bound-curves.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/render/bezier-curve.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/render/vector.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/image.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/render/border.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/render/background.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/syntax/parser.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/layout/text.js"), __webpack_require__("../../node_modules/css-line-break/dist/css-line-break.es5.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/replaced-elements/image-element-container.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/render/box-sizing.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/replaced-elements/canvas-element-container.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/replaced-elements/svg-element-container.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/render/effects.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/core/bitwise.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/functions/gradient.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/length-percentage.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/render/font-metrics.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/layout/bounds.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/list-style-type.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/line-height.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/replaced-elements/input-element-container.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/text-align.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/elements/textarea-element-container.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/elements/select-element-container.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/replaced-elements/iframe-element-container.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _slicedToArray2, _asyncToGenerator2, _stackingContext, _color, _logger, _borderStyle, _path, _backgroundClip, _boundCurves, _bezierCurve, _vector, _image, _border, _background, _parser, _text, _cssLineBreak, _imageElementContainer, _boxSizing, _canvasElementContainer, _svgElementContainer, _effects, _bitwise, _gradient, _lengthPercentage, _fontMetrics, _bounds, _listStyleType, _lineHeight, _inputElementContainer, _textAlign, _textareaElementContainer, _selectElementContainer, _iframeElementContainer) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.CanvasRenderer = void 0;_slicedToArray2 = _interopRequireDefault(_slicedToArray2);_asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);































  const MASK_OFFSET = 10000;
  class CanvasRenderer {
    constructor(options) {
      this._activeEffects = [];
      this.canvas = options.canvas ? options.canvas : document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.options = options;
      if (!options.canvas) {
        this.canvas.width = Math.floor(options.width * options.scale);
        this.canvas.height = Math.floor(options.height * options.scale);
        this.canvas.style.width = "".concat(options.width, "px");
        this.canvas.style.height = "".concat(options.height, "px");
      }
      this.fontMetrics = new _fontMetrics.FontMetrics(document);
      this.ctx.scale(this.options.scale, this.options.scale);
      this.ctx.translate(-options.x + options.scrollX, -options.y + options.scrollY);
      this.ctx.textBaseline = 'bottom';
      this._activeEffects = [];
      _logger.Logger.getInstance(options.id).debug("Canvas renderer initialized (".concat(options.width, "x").concat(options.height, " at ").concat(options.x, ",").concat(options.y, ") with scale ").concat(options.scale));
    }
    applyEffects(effects, target) {
      while (this._activeEffects.length) {
        this.popEffect();
      }
      effects.filter((effect) => (0, _bitwise.contains)(effect.target, target)).forEach((effect) => this.applyEffect(effect));
    }
    applyEffect(effect) {
      this.ctx.save();
      if ((0, _effects.isTransformEffect)(effect)) {
        this.ctx.translate(effect.offsetX, effect.offsetY);
        this.ctx.transform(effect.matrix[0], effect.matrix[1], effect.matrix[2], effect.matrix[3], effect.matrix[4], effect.matrix[5]);
        this.ctx.translate(-effect.offsetX, -effect.offsetY);
      }
      if ((0, _effects.isClipEffect)(effect)) {
        this.path(effect.path);
        this.ctx.clip();
      }
      this._activeEffects.push(effect);
    }
    popEffect() {
      this._activeEffects.pop();
      this.ctx.restore();
    }
    renderStack(stack) {var _this = this;return (0, _asyncToGenerator2.default)(function* () {
        const styles = stack.element.container.styles;
        if (styles.isVisible()) {
          _this.ctx.globalAlpha = styles.opacity;
          yield _this.renderStackContent(stack);
        }})();
    }
    renderNode(paint) {var _this2 = this;return (0, _asyncToGenerator2.default)(function* () {
        if (paint.container.styles.isVisible()) {
          yield _this2.renderNodeBackgroundAndBorders(paint);
          yield _this2.renderNodeContent(paint);
        }})();
    }
    renderTextWithLetterSpacing(text, letterSpacing) {
      if (letterSpacing === 0) {
        this.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);
      } else
      {
        const letters = (0, _cssLineBreak.toCodePoints)(text.text).map((i) => (0, _cssLineBreak.fromCodePoint)(i));
        letters.reduce((left, letter) => {
          this.ctx.fillText(letter, left, text.bounds.top + text.bounds.height);
          return left + this.ctx.measureText(letter).width;
        }, text.bounds.left);
      }
    }
    createFontStyle(styles) {
      const fontVariant = styles.fontVariant.
      filter((variant) => variant === 'normal' || variant === 'small-caps').
      join('');
      const fontFamily = styles.fontFamily.join(', ');
      const fontSize = (0, _parser.isDimensionToken)(styles.fontSize) ? "".concat(
        styles.fontSize.number).concat(styles.fontSize.unit) : "".concat(
        styles.fontSize.number, "px");
      return [
      [styles.fontStyle, fontVariant, styles.fontWeight, fontSize, fontFamily].join(' '),
      fontFamily,
      fontSize];

    }
    renderTextNode(text, styles) {var _this3 = this;return (0, _asyncToGenerator2.default)(function* () {const _this3$createFontStyl =
          _this3.createFontStyle(styles),_this3$createFontStyl2 = (0, _slicedToArray2.default)(_this3$createFontStyl, 3),font = _this3$createFontStyl2[0],fontFamily = _this3$createFontStyl2[1],fontSize = _this3$createFontStyl2[2];
        _this3.ctx.font = font;
        text.textBounds.forEach((text) => {
          _this3.ctx.fillStyle = (0, _color.asString)(styles.color);
          _this3.renderTextWithLetterSpacing(text, styles.letterSpacing);
          const textShadows = styles.textShadow;
          if (textShadows.length && text.text.trim().length) {
            textShadows.
            slice(0).
            reverse().
            forEach((textShadow) => {
              _this3.ctx.shadowColor = (0, _color.asString)(textShadow.color);
              _this3.ctx.shadowOffsetX = textShadow.offsetX.number * _this3.options.scale;
              _this3.ctx.shadowOffsetY = textShadow.offsetY.number * _this3.options.scale;
              _this3.ctx.shadowBlur = textShadow.blur.number;
              _this3.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);
            });
            _this3.ctx.shadowColor = '';
            _this3.ctx.shadowOffsetX = 0;
            _this3.ctx.shadowOffsetY = 0;
            _this3.ctx.shadowBlur = 0;
          }
          if (styles.textDecorationLine.length) {
            _this3.ctx.fillStyle = (0, _color.asString)(styles.textDecorationColor || styles.color);
            styles.textDecorationLine.forEach((textDecorationLine) => {
              switch (textDecorationLine) {
                case 1 /* UNDERLINE */:
                  // Draws a line at the baseline of the font
                  // TODO As some browsers display the line as more than 1px if the font-size is big,
                  // need to take that into account both in position and size
                  const _this3$fontMetrics$ge = _this3.fontMetrics.getMetrics(fontFamily, fontSize),baseline = _this3$fontMetrics$ge.baseline;
                  _this3.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1);
                  break;
                case 2 /* OVERLINE */:
                  _this3.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1);
                  break;
                case 3 /* LINE_THROUGH */:
                  // TODO try and find exact position for line-through
                  const _this3$fontMetrics$ge2 = _this3.fontMetrics.getMetrics(fontFamily, fontSize),middle = _this3$fontMetrics$ge2.middle;
                  _this3.ctx.fillRect(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1);
                  break;
              }
            });
          }
        });})();
    }
    renderReplacedElement(container, curves, image) {
      if (image && container.intrinsicWidth > 0 && container.intrinsicHeight > 0) {
        const box = (0, _boxSizing.contentBox)(container);
        const path = (0, _boundCurves.calculatePaddingBoxPath)(curves);
        this.path(path);
        this.ctx.save();
        this.ctx.clip();
        this.ctx.drawImage(image, 0, 0, container.intrinsicWidth, container.intrinsicHeight, box.left, box.top, box.width, box.height);
        this.ctx.restore();
      }
    }
    renderNodeContent(paint) {var _this4 = this;return (0, _asyncToGenerator2.default)(function* () {
        _this4.applyEffects(paint.effects, 4 /* CONTENT */);
        const container = paint.container;
        const curves = paint.curves;
        const styles = container.styles;
        for (const child of container.textNodes) {
          yield _this4.renderTextNode(child, styles);
        }
        if (container instanceof _imageElementContainer.ImageElementContainer) {
          try {
            const image = yield _this4.options.cache.match(container.src);
            _this4.renderReplacedElement(container, curves, image);
          }
          catch (e) {
            _logger.Logger.getInstance(_this4.options.id).error("Error loading image ".concat(container.src));
          }
        }
        if (container instanceof _canvasElementContainer.CanvasElementContainer) {
          _this4.renderReplacedElement(container, curves, container.canvas);
        }
        if (container instanceof _svgElementContainer.SVGElementContainer) {
          try {
            const image = yield _this4.options.cache.match(container.svg);
            _this4.renderReplacedElement(container, curves, image);
          }
          catch (e) {
            _logger.Logger.getInstance(_this4.options.id).error("Error loading svg ".concat(container.svg.substring(0, 255)));
          }
        }
        if (container instanceof _iframeElementContainer.IFrameElementContainer && container.tree) {
          const iframeRenderer = new CanvasRenderer({
            id: _this4.options.id,
            scale: _this4.options.scale,
            backgroundColor: container.backgroundColor,
            x: 0,
            y: 0,
            scrollX: 0,
            scrollY: 0,
            width: container.width,
            height: container.height,
            cache: _this4.options.cache,
            windowWidth: container.width,
            windowHeight: container.height
          });
          const canvas = yield iframeRenderer.render(container.tree);
          if (container.width && container.height) {
            _this4.ctx.drawImage(canvas, 0, 0, container.width, container.height, container.bounds.left, container.bounds.top, container.bounds.width, container.bounds.height);
          }
        }
        if (container instanceof _inputElementContainer.InputElementContainer) {
          const size = Math.min(container.bounds.width, container.bounds.height);
          if (container.type === _inputElementContainer.CHECKBOX) {
            if (container.checked) {
              _this4.ctx.save();
              _this4.path([
              new _vector.Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79),
              new _vector.Vector(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549),
              new _vector.Vector(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071),
              new _vector.Vector(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649),
              new _vector.Vector(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23),
              new _vector.Vector(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085),
              new _vector.Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)]
              );
              _this4.ctx.fillStyle = (0, _color.asString)(_inputElementContainer.INPUT_COLOR);
              _this4.ctx.fill();
              _this4.ctx.restore();
            }
          } else
          if (container.type === _inputElementContainer.RADIO) {
            if (container.checked) {
              _this4.ctx.save();
              _this4.ctx.beginPath();
              _this4.ctx.arc(container.bounds.left + size / 2, container.bounds.top + size / 2, size / 4, 0, Math.PI * 2, true);
              _this4.ctx.fillStyle = (0, _color.asString)(_inputElementContainer.INPUT_COLOR);
              _this4.ctx.fill();
              _this4.ctx.restore();
            }
          }
        }
        if (isTextInputElement(container) && container.value.length) {var _this4$createFontStyl =
          _this4.createFontStyle(styles);var _this4$createFontStyl2 = (0, _slicedToArray2.default)(_this4$createFontStyl, 1);_this4.ctx.font = _this4$createFontStyl2[0];
          _this4.ctx.fillStyle = (0, _color.asString)(styles.color);
          _this4.ctx.textBaseline = 'middle';
          _this4.ctx.textAlign = canvasTextAlign(container.styles.textAlign);
          const bounds = (0, _boxSizing.contentBox)(container);
          let x = 0;
          switch (container.styles.textAlign) {
            case _textAlign.TEXT_ALIGN.CENTER:
              x += bounds.width / 2;
              break;
            case _textAlign.TEXT_ALIGN.RIGHT:
              x += bounds.width;
              break;
          }
          const textBounds = bounds.add(x, 0, 0, -bounds.height / 2 + 1);
          _this4.ctx.save();
          _this4.path([
          new _vector.Vector(bounds.left, bounds.top),
          new _vector.Vector(bounds.left + bounds.width, bounds.top),
          new _vector.Vector(bounds.left + bounds.width, bounds.top + bounds.height),
          new _vector.Vector(bounds.left, bounds.top + bounds.height)]
          );
          _this4.ctx.clip();
          _this4.renderTextWithLetterSpacing(new _text.TextBounds(container.value, textBounds), styles.letterSpacing);
          _this4.ctx.restore();
          _this4.ctx.textBaseline = 'bottom';
          _this4.ctx.textAlign = 'left';
        }
        if ((0, _bitwise.contains)(container.styles.display, 2048 /* LIST_ITEM */)) {
          if (container.styles.listStyleImage !== null) {
            const img = container.styles.listStyleImage;
            if (img.type === _image.CSSImageType.URL) {
              let image;
              const url = img.url;
              try {
                image = yield _this4.options.cache.match(url);
                _this4.ctx.drawImage(image, container.bounds.left - (image.width + 10), container.bounds.top);
              }
              catch (e) {
                _logger.Logger.getInstance(_this4.options.id).error("Error loading list-style-image ".concat(url));
              }
            }
          } else
          if (paint.listValue && container.styles.listStyleType !== _listStyleType.LIST_STYLE_TYPE.NONE) {var _this4$createFontStyl3 =
            _this4.createFontStyle(styles);var _this4$createFontStyl4 = (0, _slicedToArray2.default)(_this4$createFontStyl3, 1);_this4.ctx.font = _this4$createFontStyl4[0];
            _this4.ctx.fillStyle = (0, _color.asString)(styles.color);
            _this4.ctx.textBaseline = 'middle';
            _this4.ctx.textAlign = 'right';
            const bounds = new _bounds.Bounds(container.bounds.left, container.bounds.top + (0, _lengthPercentage.getAbsoluteValue)(container.styles.paddingTop, container.bounds.width), container.bounds.width, (0, _lineHeight.computeLineHeight)(styles.lineHeight, styles.fontSize.number) / 2 + 1);
            _this4.renderTextWithLetterSpacing(new _text.TextBounds(paint.listValue, bounds), styles.letterSpacing);
            _this4.ctx.textBaseline = 'bottom';
            _this4.ctx.textAlign = 'left';
          }
        }})();
    }
    renderStackContent(stack) {var _this5 = this;return (0, _asyncToGenerator2.default)(function* () {
        // https://www.w3.org/TR/css-position-3/#painting-order
        // 1. the background and borders of the element forming the stacking context.
        yield _this5.renderNodeBackgroundAndBorders(stack.element);
        // 2. the child stacking contexts with negative stack levels (most negative first).
        for (const child of stack.negativeZIndex) {
          yield _this5.renderStack(child);
        }
        // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
        yield _this5.renderNodeContent(stack.element);
        for (const child of stack.nonInlineLevel) {
          yield _this5.renderNode(child);
        }
        // 4. All non-positioned floating descendants, in tree order. For each one of these,
        // treat the element as if it created a new stacking context, but any positioned descendants and descendants
        // which actually create a new stacking context should be considered part of the parent stacking context,
        // not this new one.
        for (const child of stack.nonPositionedFloats) {
          yield _this5.renderStack(child);
        }
        // 5. the in-flow, inline-level, non-positioned descendants, including inline tables and inline blocks.
        for (const child of stack.nonPositionedInlineLevel) {
          yield _this5.renderStack(child);
        }
        for (const child of stack.inlineLevel) {
          yield _this5.renderNode(child);
        }
        // 6. All positioned, opacity or transform descendants, in tree order that fall into the following categories:
        //  All positioned descendants with 'z-index: auto' or 'z-index: 0', in tree order.
        //  For those with 'z-index: auto', treat the element as if it created a new stacking context,
        //  but any positioned descendants and descendants which actually create a new stacking context should be
        //  considered part of the parent stacking context, not this new one. For those with 'z-index: 0',
        //  treat the stacking context generated atomically.
        //
        //  All opacity descendants with opacity less than 1
        //
        //  All transform descendants with transform other than none
        for (const child of stack.zeroOrAutoZIndexOrTransformedOrOpacity) {
          yield _this5.renderStack(child);
        }
        // 7. Stacking contexts formed by positioned descendants with z-indices greater than or equal to 1 in z-index
        // order (smallest first) then tree order.
        for (const child of stack.positiveZIndex) {
          yield _this5.renderStack(child);
        }})();
    }
    mask(paths) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(this.canvas.width, 0);
      this.ctx.lineTo(this.canvas.width, this.canvas.height);
      this.ctx.lineTo(0, this.canvas.height);
      this.ctx.lineTo(0, 0);
      this.formatPath(paths.slice(0).reverse());
      this.ctx.closePath();
    }
    path(paths) {
      this.ctx.beginPath();
      this.formatPath(paths);
      this.ctx.closePath();
    }
    formatPath(paths) {
      paths.forEach((point, index) => {
        const start = (0, _bezierCurve.isBezierCurve)(point) ? point.start : point;
        if (index === 0) {
          this.ctx.moveTo(start.x, start.y);
        } else
        {
          this.ctx.lineTo(start.x, start.y);
        }
        if ((0, _bezierCurve.isBezierCurve)(point)) {
          this.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
        }
      });
    }
    renderRepeat(path, pattern, offsetX, offsetY) {
      this.path(path);
      this.ctx.fillStyle = pattern;
      this.ctx.translate(offsetX, offsetY);
      this.ctx.fill();
      this.ctx.translate(-offsetX, -offsetY);
    }
    resizeImage(image, width, height) {
      if (image.width === width && image.height === height) {
        return image;
      }
      const canvas = this.canvas.ownerDocument.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height);
      return canvas;
    }
    renderBackgroundImage(container) {var _this6 = this;return (0, _asyncToGenerator2.default)(function* () {
        let index = container.styles.backgroundImage.length - 1;
        for (const backgroundImage of container.styles.backgroundImage.slice(0).reverse()) {
          if (backgroundImage.type === _image.CSSImageType.URL) {
            let image;
            const url = backgroundImage.url;
            try {
              image = yield _this6.options.cache.match(url);
            }
            catch (e) {
              _logger.Logger.getInstance(_this6.options.id).error("Error loading background-image ".concat(url));
            }
            if (image) {const _calculateBackgroundR =
                (0, _background.calculateBackgroundRendering)(container, index, [
                image.width,
                image.height,
                image.width / image.height]
                ),_calculateBackgroundR2 = (0, _slicedToArray2.default)(_calculateBackgroundR, 5),path = _calculateBackgroundR2[0],x = _calculateBackgroundR2[1],y = _calculateBackgroundR2[2],width = _calculateBackgroundR2[3],height = _calculateBackgroundR2[4];
              const pattern = _this6.ctx.createPattern(_this6.resizeImage(image, width, height), 'repeat');
              _this6.renderRepeat(path, pattern, x, y);
            }
          } else
          if ((0, _image.isLinearGradient)(backgroundImage)) {const _calculateBackgroundR3 =
              (0, _background.calculateBackgroundRendering)(container, index, [null, null, null]),_calculateBackgroundR4 = (0, _slicedToArray2.default)(_calculateBackgroundR3, 5),path = _calculateBackgroundR4[0],x = _calculateBackgroundR4[1],y = _calculateBackgroundR4[2],width = _calculateBackgroundR4[3],height = _calculateBackgroundR4[4];const _calculateGradientDir =
              (0, _gradient.calculateGradientDirection)(backgroundImage.angle, width, height),_calculateGradientDir2 = (0, _slicedToArray2.default)(_calculateGradientDir, 5),lineLength = _calculateGradientDir2[0],x0 = _calculateGradientDir2[1],x1 = _calculateGradientDir2[2],y0 = _calculateGradientDir2[3],y1 = _calculateGradientDir2[4];
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            const gradient = ctx.createLinearGradient(x0, y0, x1, y1);
            (0, _gradient.processColorStops)(backgroundImage.stops, lineLength).forEach((colorStop) => gradient.addColorStop(colorStop.stop, (0, _color.asString)(colorStop.color)));
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
            if (width > 0 && height > 0) {
              const pattern = _this6.ctx.createPattern(canvas, 'repeat');
              _this6.renderRepeat(path, pattern, x, y);
            }
          } else
          if ((0, _image.isRadialGradient)(backgroundImage)) {const _calculateBackgroundR5 =
              (0, _background.calculateBackgroundRendering)(container, index, [
              null,
              null,
              null]
              ),_calculateBackgroundR6 = (0, _slicedToArray2.default)(_calculateBackgroundR5, 5),path = _calculateBackgroundR6[0],left = _calculateBackgroundR6[1],top = _calculateBackgroundR6[2],width = _calculateBackgroundR6[3],height = _calculateBackgroundR6[4];
            const position = backgroundImage.position.length === 0 ? [_lengthPercentage.FIFTY_PERCENT] : backgroundImage.position;
            const x = (0, _lengthPercentage.getAbsoluteValue)(position[0], width);
            const y = (0, _lengthPercentage.getAbsoluteValue)(position[position.length - 1], height);const _calculateRadius =
              (0, _gradient.calculateRadius)(backgroundImage, x, y, width, height),_calculateRadius2 = (0, _slicedToArray2.default)(_calculateRadius, 2),rx = _calculateRadius2[0],ry = _calculateRadius2[1];
            if (rx > 0 && rx > 0) {
              const radialGradient = _this6.ctx.createRadialGradient(left + x, top + y, 0, left + x, top + y, rx);
              (0, _gradient.processColorStops)(backgroundImage.stops, rx * 2).forEach((colorStop) => radialGradient.addColorStop(colorStop.stop, (0, _color.asString)(colorStop.color)));
              _this6.path(path);
              _this6.ctx.fillStyle = radialGradient;
              if (rx !== ry) {
                // transforms for elliptical radial gradient
                const midX = container.bounds.left + 0.5 * container.bounds.width;
                const midY = container.bounds.top + 0.5 * container.bounds.height;
                const f = ry / rx;
                const invF = 1 / f;
                _this6.ctx.save();
                _this6.ctx.translate(midX, midY);
                _this6.ctx.transform(1, 0, 0, f, 0, 0);
                _this6.ctx.translate(-midX, -midY);
                _this6.ctx.fillRect(left, invF * (top - midY) + midY, width, height * invF);
                _this6.ctx.restore();
              } else
              {
                _this6.ctx.fill();
              }
            }
          }
          index--;
        }})();
    }
    renderBorder(color, side, curvePoints) {var _this7 = this;return (0, _asyncToGenerator2.default)(function* () {
        _this7.path((0, _border.parsePathForBorder)(curvePoints, side));
        _this7.ctx.fillStyle = (0, _color.asString)(color);
        _this7.ctx.fill();})();
    }
    renderNodeBackgroundAndBorders(paint) {var _this8 = this;return (0, _asyncToGenerator2.default)(function* () {
        _this8.applyEffects(paint.effects, 2 /* BACKGROUND_BORDERS */);
        const styles = paint.container.styles;
        const hasBackground = !(0, _color.isTransparent)(styles.backgroundColor) || styles.backgroundImage.length;
        const borders = [
        { style: styles.borderTopStyle, color: styles.borderTopColor },
        { style: styles.borderRightStyle, color: styles.borderRightColor },
        { style: styles.borderBottomStyle, color: styles.borderBottomColor },
        { style: styles.borderLeftStyle, color: styles.borderLeftColor }];

        const backgroundPaintingArea = calculateBackgroundCurvedPaintingArea((0, _background.getBackgroundValueForIndex)(styles.backgroundClip, 0), paint.curves);
        if (hasBackground || styles.boxShadow.length) {
          _this8.ctx.save();
          _this8.path(backgroundPaintingArea);
          _this8.ctx.clip();
          if (!(0, _color.isTransparent)(styles.backgroundColor)) {
            _this8.ctx.fillStyle = (0, _color.asString)(styles.backgroundColor);
            _this8.ctx.fill();
          }
          yield _this8.renderBackgroundImage(paint.container);
          _this8.ctx.restore();
          styles.boxShadow.
          slice(0).
          reverse().
          forEach((shadow) => {
            _this8.ctx.save();
            const borderBoxArea = (0, _boundCurves.calculateBorderBoxPath)(paint.curves);
            const maskOffset = shadow.inset ? 0 : MASK_OFFSET;
            const shadowPaintingArea = (0, _path.transformPath)(borderBoxArea, -maskOffset + (shadow.inset ? 1 : -1) * shadow.spread.number, (shadow.inset ? 1 : -1) * shadow.spread.number, shadow.spread.number * (shadow.inset ? -2 : 2), shadow.spread.number * (shadow.inset ? -2 : 2));
            if (shadow.inset) {
              _this8.path(borderBoxArea);
              _this8.ctx.clip();
              _this8.mask(shadowPaintingArea);
            } else
            {
              _this8.mask(borderBoxArea);
              _this8.ctx.clip();
              _this8.path(shadowPaintingArea);
            }
            _this8.ctx.shadowOffsetX = shadow.offsetX.number + maskOffset;
            _this8.ctx.shadowOffsetY = shadow.offsetY.number;
            _this8.ctx.shadowColor = (0, _color.asString)(shadow.color);
            _this8.ctx.shadowBlur = shadow.blur.number;
            _this8.ctx.fillStyle = shadow.inset ? (0, _color.asString)(shadow.color) : 'rgba(0,0,0,1)';
            _this8.ctx.fill();
            _this8.ctx.restore();
          });
        }
        let side = 0;
        for (const border of borders) {
          if (border.style !== _borderStyle.BORDER_STYLE.NONE && !(0, _color.isTransparent)(border.color)) {
            yield _this8.renderBorder(border.color, side, paint.curves);
          }
          side++;
        }})();
    }
    render(element) {var _this9 = this;return (0, _asyncToGenerator2.default)(function* () {
        if (_this9.options.backgroundColor) {
          _this9.ctx.fillStyle = (0, _color.asString)(_this9.options.backgroundColor);
          _this9.ctx.fillRect(_this9.options.x - _this9.options.scrollX, _this9.options.y - _this9.options.scrollY, _this9.options.width, _this9.options.height);
        }
        const stack = (0, _stackingContext.parseStackingContexts)(element);
        yield _this9.renderStack(stack);
        _this9.applyEffects([], 2 /* BACKGROUND_BORDERS */);
        return _this9.canvas;})();
    }
  }_exports.CanvasRenderer = CanvasRenderer;
  const isTextInputElement = (container) => {
    if (container instanceof _textareaElementContainer.TextareaElementContainer) {
      return true;
    } else
    if (container instanceof _selectElementContainer.SelectElementContainer) {
      return true;
    } else
    if (container instanceof _inputElementContainer.InputElementContainer && container.type !== _inputElementContainer.RADIO && container.type !== _inputElementContainer.CHECKBOX) {
      return true;
    }
    return false;
  };
  const calculateBackgroundCurvedPaintingArea = (clip, curves) => {
    switch (clip) {
      case _backgroundClip.BACKGROUND_CLIP.BORDER_BOX:
        return (0, _boundCurves.calculateBorderBoxPath)(curves);
      case _backgroundClip.BACKGROUND_CLIP.CONTENT_BOX:
        return (0, _boundCurves.calculateContentBoxPath)(curves);
      case _backgroundClip.BACKGROUND_CLIP.PADDING_BOX:
      default:
        return (0, _boundCurves.calculatePaddingBoxPath)(curves);
    }
  };
  const canvasTextAlign = (textAlign) => {
    switch (textAlign) {
      case _textAlign.TEXT_ALIGN.CENTER:
        return 'center';
      case _textAlign.TEXT_ALIGN.RIGHT:
        return 'right';
      case _textAlign.TEXT_ALIGN.LEFT:
      default:
        return 'left';
    }
  };});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/render/canvas/foreignobject-renderer.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/core/logger.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/core/features.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/color.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _asyncToGenerator2, _logger, _features, _color) {"use strict";var _interopRequireDefault = __webpack_require__("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(_exports, "__esModule", { value: true });_exports.loadSerializedSVG = _exports.ForeignObjectRenderer = void 0;_asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);


  class ForeignObjectRenderer {
    constructor(options) {
      this.canvas = options.canvas ? options.canvas : document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.options = options;
      this.canvas.width = Math.floor(options.width * options.scale);
      this.canvas.height = Math.floor(options.height * options.scale);
      this.canvas.style.width = "".concat(options.width, "px");
      this.canvas.style.height = "".concat(options.height, "px");
      this.ctx.scale(this.options.scale, this.options.scale);
      this.ctx.translate(-options.x + options.scrollX, -options.y + options.scrollY);
      _logger.Logger.getInstance(options.id).debug("EXPERIMENTAL ForeignObject renderer initialized (".concat(options.width, "x").concat(options.height, " at ").concat(options.x, ",").concat(options.y, ") with scale ").concat(options.scale));
    }
    render(element) {var _this = this;return (0, _asyncToGenerator2.default)(function* () {
        const svg = (0, _features.createForeignObjectSVG)(Math.max(_this.options.windowWidth, _this.options.width) * _this.options.scale, Math.max(_this.options.windowHeight, _this.options.height) * _this.options.scale, _this.options.scrollX * _this.options.scale, _this.options.scrollY * _this.options.scale, element);
        const img = yield loadSerializedSVG(svg);
        if (_this.options.backgroundColor) {
          _this.ctx.fillStyle = (0, _color.asString)(_this.options.backgroundColor);
          _this.ctx.fillRect(0, 0, _this.options.width * _this.options.scale, _this.options.height * _this.options.scale);
        }
        _this.ctx.drawImage(img, -_this.options.x * _this.options.scale, -_this.options.y * _this.options.scale);
        return _this.canvas;})();
    }
  }_exports.ForeignObjectRenderer = ForeignObjectRenderer;
  const loadSerializedSVG = (svg) => new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.onerror = reject;
    img.src = "data:image/svg+xml;charset=utf-8,".concat(encodeURIComponent(new XMLSerializer().serializeToString(svg)));
  });_exports.loadSerializedSVG = loadSerializedSVG;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/render/effects.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.isTransformEffect = _exports.isClipEffect = _exports.TransformEffect = _exports.ClipEffect = void 0;class TransformEffect {
    constructor(offsetX, offsetY, matrix) {
      this.type = 0 /* TRANSFORM */;
      this.offsetX = offsetX;
      this.offsetY = offsetY;
      this.matrix = matrix;
      this.target = 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */;
    }
  }_exports.TransformEffect = TransformEffect;
  class ClipEffect {
    constructor(path, target) {
      this.type = 1 /* CLIP */;
      this.target = target;
      this.path = path;
    }
  }_exports.ClipEffect = ClipEffect;
  const isTransformEffect = (effect) => effect.type === 0 /* TRANSFORM */;_exports.isTransformEffect = isTransformEffect;
  const isClipEffect = (effect) => effect.type === 1 /* CLIP */;_exports.isClipEffect = isClipEffect;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/render/font-metrics.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/core/util.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _util) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.FontMetrics = void 0;
  const SAMPLE_TEXT = 'Hidden Text';
  class FontMetrics {
    constructor(document) {
      this._data = {};
      this._document = document;
    }
    parseMetrics(fontFamily, fontSize) {
      const container = this._document.createElement('div');
      const img = this._document.createElement('img');
      const span = this._document.createElement('span');
      const body = this._document.body;
      container.style.visibility = 'hidden';
      container.style.fontFamily = fontFamily;
      container.style.fontSize = fontSize;
      container.style.margin = '0';
      container.style.padding = '0';
      body.appendChild(container);
      img.src = _util.SMALL_IMAGE;
      img.width = 1;
      img.height = 1;
      img.style.margin = '0';
      img.style.padding = '0';
      img.style.verticalAlign = 'baseline';
      span.style.fontFamily = fontFamily;
      span.style.fontSize = fontSize;
      span.style.margin = '0';
      span.style.padding = '0';
      span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
      container.appendChild(span);
      container.appendChild(img);
      const baseline = img.offsetTop - span.offsetTop + 2;
      container.removeChild(span);
      container.appendChild(this._document.createTextNode(SAMPLE_TEXT));
      container.style.lineHeight = 'normal';
      img.style.verticalAlign = 'super';
      const middle = img.offsetTop - container.offsetTop + 2;
      body.removeChild(container);
      return { baseline, middle };
    }
    getMetrics(fontFamily, fontSize) {
      const key = "".concat(fontFamily, " ").concat(fontSize);
      if (typeof this._data[key] === 'undefined') {
        this._data[key] = this.parseMetrics(fontFamily, fontSize);
      }
      return this._data[key];
    }
  }_exports.FontMetrics = FontMetrics;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/render/path.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.transformPath = _exports.equalPath = _exports.PathType = void 0;var PathType;
  (function (PathType) {
    PathType[PathType["VECTOR"] = 0] = "VECTOR";
    PathType[PathType["BEZIER_CURVE"] = 1] = "BEZIER_CURVE";
  })(PathType || (_exports.PathType = PathType = {}));
  const equalPath = (a, b) => {
    if (a.length === b.length) {
      return a.some((v, i) => v === b[i]);
    }
    return false;
  };_exports.equalPath = equalPath;
  const transformPath = (path, deltaX, deltaY, deltaW, deltaH) => {
    return path.map((point, index) => {
      switch (index) {
        case 0:
          return point.add(deltaX, deltaY);
        case 1:
          return point.add(deltaX + deltaW, deltaY);
        case 2:
          return point.add(deltaX + deltaW, deltaY + deltaH);
        case 3:
          return point.add(deltaX, deltaY + deltaH);
      }
      return point;
    });
  };_exports.transformPath = transformPath;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/render/stacking-context.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/core/bitwise.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/render/bound-curves.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/render/effects.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/property-descriptors/overflow.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/render/path.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/elements/ol-element-container.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/dom/elements/li-element-container.js"), __webpack_require__("../sandbox-hooks/html2canvas-lib/css/types/functions/counter.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _bitwise, _boundCurves, _effects, _overflow, _path, _olElementContainer, _liElementContainer, _counter) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.parseStackingContexts = _exports.StackingContext = _exports.ElementPaint = void 0;







  class StackingContext {
    constructor(container) {
      this.element = container;
      this.inlineLevel = [];
      this.nonInlineLevel = [];
      this.negativeZIndex = [];
      this.zeroOrAutoZIndexOrTransformedOrOpacity = [];
      this.positiveZIndex = [];
      this.nonPositionedFloats = [];
      this.nonPositionedInlineLevel = [];
    }
  }_exports.StackingContext = StackingContext;
  class ElementPaint {
    constructor(element, parentStack) {
      this.container = element;
      this.effects = parentStack.slice(0);
      this.curves = new _boundCurves.BoundCurves(element);
      if (element.styles.transform !== null) {
        const offsetX = element.bounds.left + element.styles.transformOrigin[0].number;
        const offsetY = element.bounds.top + element.styles.transformOrigin[1].number;
        const matrix = element.styles.transform;
        this.effects.push(new _effects.TransformEffect(offsetX, offsetY, matrix));
      }
      if (element.styles.overflowX !== _overflow.OVERFLOW.VISIBLE) {
        const borderBox = (0, _boundCurves.calculateBorderBoxPath)(this.curves);
        const paddingBox = (0, _boundCurves.calculatePaddingBoxPath)(this.curves);
        if ((0, _path.equalPath)(borderBox, paddingBox)) {
          this.effects.push(new _effects.ClipEffect(borderBox, 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */));
        } else
        {
          this.effects.push(new _effects.ClipEffect(borderBox, 2 /* BACKGROUND_BORDERS */));
          this.effects.push(new _effects.ClipEffect(paddingBox, 4 /* CONTENT */));
        }
      }
    }
    getParentEffects() {
      const effects = this.effects.slice(0);
      if (this.container.styles.overflowX !== _overflow.OVERFLOW.VISIBLE) {
        const borderBox = (0, _boundCurves.calculateBorderBoxPath)(this.curves);
        const paddingBox = (0, _boundCurves.calculatePaddingBoxPath)(this.curves);
        if (!(0, _path.equalPath)(borderBox, paddingBox)) {
          effects.push(new _effects.ClipEffect(paddingBox, 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */));
        }
      }
      return effects;
    }
  }_exports.ElementPaint = ElementPaint;
  const parseStackTree = (parent, stackingContext, realStackingContext, listItems) => {
    parent.container.elements.forEach((child) => {
      const treatAsRealStackingContext = (0, _bitwise.contains)(child.flags, 4 /* CREATES_REAL_STACKING_CONTEXT */);
      const createsStackingContext = (0, _bitwise.contains)(child.flags, 2 /* CREATES_STACKING_CONTEXT */);
      const paintContainer = new ElementPaint(child, parent.getParentEffects());
      if ((0, _bitwise.contains)(child.styles.display, 2048 /* LIST_ITEM */)) {
        listItems.push(paintContainer);
      }
      const listOwnerItems = (0, _bitwise.contains)(child.flags, 8 /* IS_LIST_OWNER */) ? [] : listItems;
      if (treatAsRealStackingContext || createsStackingContext) {
        const parentStack = treatAsRealStackingContext || child.styles.isPositioned() ? realStackingContext : stackingContext;
        const stack = new StackingContext(paintContainer);
        if (child.styles.isPositioned() || child.styles.opacity < 1 || child.styles.isTransformed()) {
          const order = child.styles.zIndex.order;
          if (order < 0) {
            let index = 0;
            parentStack.negativeZIndex.some((current, i) => {
              if (order > current.element.container.styles.zIndex.order) {
                index = i;
                return false;
              } else
              if (index > 0) {
                return true;
              }
              return false;
            });
            parentStack.negativeZIndex.splice(index, 0, stack);
          } else
          if (order > 0) {
            let index = 0;
            parentStack.positiveZIndex.some((current, i) => {
              if (order >= current.element.container.styles.zIndex.order) {
                index = i + 1;
                return false;
              } else
              if (index > 0) {
                return true;
              }
              return false;
            });
            parentStack.positiveZIndex.splice(index, 0, stack);
          } else
          {
            parentStack.zeroOrAutoZIndexOrTransformedOrOpacity.push(stack);
          }
        } else
        {
          if (child.styles.isFloating()) {
            parentStack.nonPositionedFloats.push(stack);
          } else
          {
            parentStack.nonPositionedInlineLevel.push(stack);
          }
        }
        parseStackTree(paintContainer, stack, treatAsRealStackingContext ? stack : realStackingContext, listOwnerItems);
      } else
      {
        if (child.styles.isInlineLevel()) {
          stackingContext.inlineLevel.push(paintContainer);
        } else
        {
          stackingContext.nonInlineLevel.push(paintContainer);
        }
        parseStackTree(paintContainer, stackingContext, realStackingContext, listOwnerItems);
      }
      if ((0, _bitwise.contains)(child.flags, 8 /* IS_LIST_OWNER */)) {
        processListItems(child, listOwnerItems);
      }
    });
  };
  const processListItems = (owner, elements) => {
    let numbering = owner instanceof _olElementContainer.OLElementContainer ? owner.start : 1;
    const reversed = owner instanceof _olElementContainer.OLElementContainer ? owner.reversed : false;
    for (let i = 0; i < elements.length; i++) {
      const item = elements[i];
      if (item.container instanceof _liElementContainer.LIElementContainer &&
      typeof item.container.value === 'number' &&
      item.container.value !== 0) {
        numbering = item.container.value;
      }
      item.listValue = (0, _counter.createCounterText)(numbering, item.container.styles.listStyleType, true);
      numbering += reversed ? -1 : 1;
    }
  };
  const parseStackingContexts = (container) => {
    const paintContainer = new ElementPaint(container, []);
    const root = new StackingContext(paintContainer);
    const listItems = [];
    parseStackTree(paintContainer, root, root, listItems);
    processListItems(paintContainer.container, listItems);
    return root;
  };_exports.parseStackingContexts = parseStackingContexts;});

/***/ }),

/***/ "../sandbox-hooks/html2canvas-lib/render/vector.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../sandbox-hooks/html2canvas-lib/render/path.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _path) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.isVector = _exports.Vector = void 0;
  class Vector {
    constructor(x, y) {
      this.type = _path.PathType.VECTOR;
      this.x = x;
      this.y = y;
    }
    add(deltaX, deltaY) {
      return new Vector(this.x + deltaX, this.y + deltaY);
    }
  }_exports.Vector = Vector;
  const isVector = (path) => path.type === _path.PathType.VECTOR;_exports.isVector = isVector;});

/***/ })

}]);
//# sourceMappingURL=4.257942984.chunk.js.map