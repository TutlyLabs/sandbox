(this["csbJsonP"] = this["csbJsonP"] || []).push([["vendors~sandbox-startup"],{

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

/***/ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../node_modules/console-feed/lib/Hook/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Methods_1 = __webpack_require__("../../node_modules/console-feed/lib/definitions/Methods.js");
var parse_1 = __webpack_require__("../../node_modules/console-feed/lib/Hook/parse/index.js");
var Transform_1 = __webpack_require__("../../node_modules/console-feed/lib/Transform/index.js");
// import Construct from './construct'
/**
 * Hook a console constructor and forward messages to a callback
 * @argument console The Console constructor to Hook
 * @argument callback The callback to be called once a message is logged
 */
function Hook(console, callback, encode) {
    if (encode === void 0) { encode = true; }
    var TargetConsole = console;
    var Storage = {
        pointers: {},
        src: {
            npm: 'https://npmjs.com/package/console-feed',
            github: 'https://github.com/samdenty99/console-feed'
        }
    };
    var _loop_1 = function (method) {
        var NativeMethod = TargetConsole[method];
        // Override
        TargetConsole[method] = function () {
            // Pass back to native method
            NativeMethod.apply(this, arguments);
            // Parse arguments and send to transport
            var args = [].slice.call(arguments);
            // setTimeout to prevent lag
            setTimeout(function () {
                var parsed = parse_1["default"](method, args);
                if (parsed) {
                    var encoded = parsed;
                    if (encode) {
                        encoded = Transform_1.Encode(parsed);
                    }
                    callback(encoded, parsed);
                }
            });
        };
        // Store native methods
        Storage.pointers[method] = NativeMethod;
    };
    // Override console methods
    for (var _i = 0, Methods_2 = Methods_1["default"]; _i < Methods_2.length; _i++) {
        var method = Methods_2[_i];
        _loop_1(method);
    }
    TargetConsole.feed = Storage;
    return TargetConsole;
}
exports["default"] = Hook;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvSG9vay9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLGtEQUE0QztBQUU1QyxpQ0FBMkI7QUFFM0IsMENBQXFDO0FBQ3JDLHNDQUFzQztBQUV0Qzs7OztHQUlHO0FBQ0gsU0FBd0IsSUFBSSxDQUMxQixPQUFnQixFQUNoQixRQUFrQixFQUNsQixNQUFhO0lBQWIsdUJBQUEsRUFBQSxhQUFhO0lBRWIsSUFBTSxhQUFhLEdBQUcsT0FBd0IsQ0FBQTtJQUM5QyxJQUFNLE9BQU8sR0FBWTtRQUN2QixRQUFRLEVBQUUsRUFBRTtRQUNaLEdBQUcsRUFBRTtZQUNILEdBQUcsRUFBRSx3Q0FBd0M7WUFDN0MsTUFBTSxFQUFFLDRDQUE0QztTQUNyRDtLQUNGLENBQUE7NEJBR1EsTUFBTTtRQUNiLElBQU0sWUFBWSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUUxQyxXQUFXO1FBQ1gsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHO1lBQ3RCLDZCQUE2QjtZQUM3QixZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQTtZQUVuQyx3Q0FBd0M7WUFDeEMsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7WUFFckMsNEJBQTRCO1lBQzVCLFVBQVUsQ0FBQztnQkFDVCxJQUFNLE1BQU0sR0FBRyxrQkFBSyxDQUFDLE1BQXdCLEVBQUUsSUFBSSxDQUFDLENBQUE7Z0JBQ3BELElBQUksTUFBTSxFQUFFO29CQUNWLElBQUksT0FBTyxHQUFZLE1BQWlCLENBQUE7b0JBQ3hDLElBQUksTUFBTSxFQUFFO3dCQUNWLE9BQU8sR0FBRyxrQkFBTSxDQUFDLE1BQU0sQ0FBWSxDQUFBO3FCQUNwQztvQkFDRCxRQUFRLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFBO2lCQUMxQjtZQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFBO1FBRUQsdUJBQXVCO1FBQ3ZCLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsWUFBWSxDQUFBOztJQTFCekMsMkJBQTJCO0lBQzNCLEtBQW1CLFVBQU8sRUFBUCxZQUFBLG9CQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1FBQXJCLElBQUksTUFBTSxnQkFBQTtnQkFBTixNQUFNO0tBMEJkO0lBRUQsYUFBYSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUE7SUFFNUIsT0FBTyxhQUFhLENBQUE7QUFDdEIsQ0FBQztBQTlDRCwwQkE4Q0MifQ==

/***/ }),

/***/ "../../node_modules/console-feed/lib/Hook/parse/GUID.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        Date.now());
}
exports["default"] = guidGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR1VJRC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Ib29rL3BhcnNlL0dVSUQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUF3QixhQUFhO0lBQ25DLElBQUksRUFBRSxHQUFHO1FBQ1AsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN4RSxDQUFDLENBQUE7SUFDRCxPQUFPLENBQ0wsRUFBRSxFQUFFO1FBQ0osRUFBRSxFQUFFO1FBQ0osR0FBRztRQUNILEVBQUUsRUFBRTtRQUNKLEdBQUc7UUFDSCxFQUFFLEVBQUU7UUFDSixHQUFHO1FBQ0gsRUFBRSxFQUFFO1FBQ0osR0FBRztRQUNILEVBQUUsRUFBRTtRQUNKLEdBQUc7UUFDSCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQ1gsQ0FBQTtBQUNILENBQUM7QUFsQkQsbUNBa0JDIn0=

/***/ }),

/***/ "../../node_modules/console-feed/lib/Hook/parse/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var GUID_1 = __webpack_require__("../../node_modules/console-feed/lib/Hook/parse/GUID.js");
var Timing = __webpack_require__("../../node_modules/console-feed/lib/Hook/parse/methods/timing.js");
var Count = __webpack_require__("../../node_modules/console-feed/lib/Hook/parse/methods/count.js");
var Assert = __webpack_require__("../../node_modules/console-feed/lib/Hook/parse/methods/assert.js");
/**
 * Parses a console log and converts it to a special Log object
 * @argument method The console method to parse
 * @argument data The arguments passed to the console method
 */
function Parse(method, data, staticID) {
    // Create an ID
    var id = staticID || GUID_1["default"]();
    // Parse the methods
    switch (method) {
        case 'clear': {
            return {
                method: method,
                id: id
            };
        }
        case 'count': {
            var label = typeof data[0] === 'string' ? data[0] : 'default';
            if (!label)
                return false;
            return __assign(__assign({}, Count.increment(label)), { id: id });
        }
        case 'time':
        case 'timeEnd': {
            var label = typeof data[0] === 'string' ? data[0] : 'default';
            if (!label)
                return false;
            if (method === 'time') {
                Timing.start(label);
                return false;
            }
            return __assign(__assign({}, Timing.stop(label)), { id: id });
        }
        case 'assert': {
            var valid = data.length !== 0;
            if (valid) {
                var assertion = Assert.test.apply(Assert, __spreadArrays([data[0]], data.slice(1)));
                if (assertion) {
                    return __assign(__assign({}, assertion), { id: id });
                }
            }
            return false;
        }
        case 'error': {
            var errors = data.map(function (error) {
                try {
                    return error.stack || error;
                }
                catch (e) {
                    return error;
                }
            });
            return {
                method: method,
                id: id,
                data: errors
            };
        }
        default: {
            return {
                method: method,
                id: id,
                data: data
            };
        }
    }
}
exports["default"] = Parse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvSG9vay9wYXJzZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLCtCQUF5QjtBQUV6Qix5Q0FBMEM7QUFDMUMsdUNBQXdDO0FBQ3hDLHlDQUEwQztBQUUxQzs7OztHQUlHO0FBQ0gsU0FBUyxLQUFLLENBQ1osTUFBZSxFQUNmLElBQVcsRUFDWCxRQUFpQjtJQUVqQixlQUFlO0lBQ2YsSUFBTSxFQUFFLEdBQUcsUUFBUSxJQUFJLGlCQUFJLEVBQUUsQ0FBQTtJQUU3QixvQkFBb0I7SUFDcEIsUUFBUSxNQUFNLEVBQUU7UUFDZCxLQUFLLE9BQU8sQ0FBQyxDQUFDO1lBQ1osT0FBTztnQkFDTCxNQUFNLFFBQUE7Z0JBQ04sRUFBRSxJQUFBO2FBQ0gsQ0FBQTtTQUNGO1FBRUQsS0FBSyxPQUFPLENBQUMsQ0FBQztZQUNaLElBQU0sS0FBSyxHQUFHLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUE7WUFDL0QsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTyxLQUFLLENBQUE7WUFFeEIsNkJBQ0ssS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FDekIsRUFBRSxJQUFBLElBQ0g7U0FDRjtRQUVELEtBQUssTUFBTSxDQUFDO1FBQ1osS0FBSyxTQUFTLENBQUMsQ0FBQztZQUNkLElBQU0sS0FBSyxHQUFHLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUE7WUFDL0QsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTyxLQUFLLENBQUE7WUFFeEIsSUFBSSxNQUFNLEtBQUssTUFBTSxFQUFFO2dCQUNyQixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNuQixPQUFPLEtBQUssQ0FBQTthQUNiO1lBRUQsNkJBQ0ssTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FDckIsRUFBRSxJQUFBLElBQ0g7U0FDRjtRQUVELEtBQUssUUFBUSxDQUFDLENBQUM7WUFDYixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQTtZQUUvQixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxPQUFYLE1BQU0sa0JBQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQTtnQkFDeEQsSUFBSSxTQUFTLEVBQUU7b0JBQ2IsNkJBQ0ssU0FBUyxLQUNaLEVBQUUsSUFBQSxJQUNIO2lCQUNGO2FBQ0Y7WUFFRCxPQUFPLEtBQUssQ0FBQTtTQUNiO1FBRUQsS0FBSyxPQUFPLENBQUMsQ0FBQztZQUNaLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLO2dCQUMzQixJQUFJO29CQUNGLE9BQU8sS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUE7aUJBQzVCO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNWLE9BQU8sS0FBSyxDQUFBO2lCQUNiO1lBQ0gsQ0FBQyxDQUFDLENBQUE7WUFFRixPQUFPO2dCQUNMLE1BQU0sUUFBQTtnQkFDTixFQUFFLElBQUE7Z0JBQ0YsSUFBSSxFQUFFLE1BQU07YUFDYixDQUFBO1NBQ0Y7UUFFRCxPQUFPLENBQUMsQ0FBQztZQUNQLE9BQU87Z0JBQ0wsTUFBTSxRQUFBO2dCQUNOLEVBQUUsSUFBQTtnQkFDRixJQUFJLE1BQUE7YUFDTCxDQUFBO1NBQ0Y7S0FDRjtBQUNILENBQUM7QUFFRCxxQkFBZSxLQUFLLENBQUEifQ==

/***/ }),

/***/ "../../node_modules/console-feed/lib/Hook/parse/methods/assert.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.test = void 0;
function test(expression) {
    var messages = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        messages[_i - 1] = arguments[_i];
    }
    if (expression)
        return false;
    // Default message
    if (messages.length === 0)
        messages.push('console.assert');
    return {
        method: 'error',
        data: __spreadArrays(["Assertion failed:"], messages)
    };
}
exports.test = test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0hvb2svcGFyc2UvbWV0aG9kcy9hc3NlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFNBQWdCLElBQUksQ0FBQyxVQUFlO0lBQUUsa0JBQWtCO1NBQWxCLFVBQWtCLEVBQWxCLHFCQUFrQixFQUFsQixJQUFrQjtRQUFsQixpQ0FBa0I7O0lBQ3RELElBQUksVUFBVTtRQUFFLE9BQU8sS0FBSyxDQUFBO0lBRTVCLGtCQUFrQjtJQUNsQixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUUxRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLE9BQU87UUFDZixJQUFJLGtCQUFHLG1CQUFtQixHQUFLLFFBQVEsQ0FBQztLQUN6QyxDQUFBO0FBQ0gsQ0FBQztBQVZELG9CQVVDIn0=

/***/ }),

/***/ "../../node_modules/console-feed/lib/Hook/parse/methods/count.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.increment = void 0;
var state_1 = __webpack_require__("../../node_modules/console-feed/lib/Hook/store/state.js");
var dispatch_1 = __webpack_require__("../../node_modules/console-feed/lib/Hook/store/dispatch.js");
var actions_1 = __webpack_require__("../../node_modules/console-feed/lib/Hook/store/actions.js");
function increment(label) {
    dispatch_1["default"](actions_1.count(label));
    var times = state_1.state.count[label];
    return {
        method: 'log',
        data: [label + ": " + times]
    };
}
exports.increment = increment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvSG9vay9wYXJzZS9tZXRob2RzL2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF5QztBQUN6QyxpREFBMkM7QUFDM0MsK0NBQTJDO0FBRTNDLFNBQWdCLFNBQVMsQ0FBQyxLQUFhO0lBQ3JDLHFCQUFRLENBQUMsZUFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFDdEIsSUFBTSxLQUFLLEdBQUcsYUFBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVoQyxPQUFPO1FBQ0wsTUFBTSxFQUFFLEtBQUs7UUFDYixJQUFJLEVBQUUsQ0FBSSxLQUFLLFVBQUssS0FBTyxDQUFDO0tBQzdCLENBQUE7QUFDSCxDQUFDO0FBUkQsOEJBUUMifQ==

/***/ }),

/***/ "../../node_modules/console-feed/lib/Hook/parse/methods/timing.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.stop = exports.start = void 0;
var state_1 = __webpack_require__("../../node_modules/console-feed/lib/Hook/store/state.js");
var dispatch_1 = __webpack_require__("../../node_modules/console-feed/lib/Hook/store/dispatch.js");
var actions_1 = __webpack_require__("../../node_modules/console-feed/lib/Hook/store/actions.js");
function start(label) {
    dispatch_1["default"](actions_1.timeStart(label));
}
exports.start = start;
function stop(label) {
    var timing = state_1.state === null || state_1.state === void 0 ? void 0 : state_1.state.timings[label];
    if (timing && !timing.end) {
        dispatch_1["default"](actions_1.timeEnd(label));
        var time = state_1.state.timings[label].time;
        return {
            method: 'log',
            data: [label + ": " + time + "ms"]
        };
    }
    return {
        method: 'warn',
        data: ["Timer '" + label + "' does not exist"]
    };
}
exports.stop = stop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0hvb2svcGFyc2UvbWV0aG9kcy90aW1pbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXlDO0FBQ3pDLGlEQUEyQztBQUMzQywrQ0FBd0Q7QUFFeEQsU0FBZ0IsS0FBSyxDQUFDLEtBQWE7SUFDakMscUJBQVEsQ0FBQyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7QUFDNUIsQ0FBQztBQUZELHNCQUVDO0FBRUQsU0FBZ0IsSUFBSSxDQUFDLEtBQWE7SUFDaEMsSUFBTSxNQUFNLEdBQUcsYUFBSyxhQUFMLGFBQUssdUJBQUwsYUFBSyxDQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNwQyxJQUFJLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUU7UUFDekIscUJBQVEsQ0FBQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7UUFDaEIsSUFBQSxJQUFJLEdBQUssYUFBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBekIsQ0FBeUI7UUFFckMsT0FBTztZQUNMLE1BQU0sRUFBRSxLQUFLO1lBQ2IsSUFBSSxFQUFFLENBQUksS0FBSyxVQUFLLElBQUksT0FBSSxDQUFDO1NBQzlCLENBQUE7S0FDRjtJQUNELE9BQU87UUFDTCxNQUFNLEVBQUUsTUFBTTtRQUNkLElBQUksRUFBRSxDQUFDLFlBQVUsS0FBSyxxQkFBa0IsQ0FBQztLQUMxQyxDQUFBO0FBQ0gsQ0FBQztBQWZELG9CQWVDIn0=

/***/ }),

/***/ "../../node_modules/console-feed/lib/Hook/store/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.timeEnd = exports.timeStart = exports.count = void 0;
function count(name) {
    return {
        type: 'COUNT',
        name: name
    };
}
exports.count = count;
function timeStart(name) {
    return {
        type: 'TIME_START',
        name: name
    };
}
exports.timeStart = timeStart;
function timeEnd(name) {
    return {
        type: 'TIME_END',
        name: name
    };
}
exports.timeEnd = timeEnd;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Ib29rL3N0b3JlL2FjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsU0FBZ0IsS0FBSyxDQUFDLElBQVk7SUFDaEMsT0FBTztRQUNMLElBQUksRUFBRSxPQUFPO1FBQ2IsSUFBSSxNQUFBO0tBQ0wsQ0FBQTtBQUNILENBQUM7QUFMRCxzQkFLQztBQUVELFNBQWdCLFNBQVMsQ0FBQyxJQUFZO0lBQ3BDLE9BQU87UUFDTCxJQUFJLEVBQUUsWUFBWTtRQUNsQixJQUFJLE1BQUE7S0FDTCxDQUFBO0FBQ0gsQ0FBQztBQUxELDhCQUtDO0FBRUQsU0FBZ0IsT0FBTyxDQUFDLElBQVk7SUFDbEMsT0FBTztRQUNMLElBQUksRUFBRSxVQUFVO1FBQ2hCLElBQUksTUFBQTtLQUNMLENBQUE7QUFDSCxDQUFDO0FBTEQsMEJBS0MifQ==

/***/ }),

/***/ "../../node_modules/console-feed/lib/Hook/store/dispatch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var reducer_1 = __webpack_require__("../../node_modules/console-feed/lib/Hook/store/reducer.js");
var state_1 = __webpack_require__("../../node_modules/console-feed/lib/Hook/store/state.js");
function dispatch(action) {
    state_1.update(reducer_1["default"](state_1.state, action));
}
exports["default"] = dispatch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGF0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvSG9vay9zdG9yZS9kaXNwYXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHFDQUE4QjtBQUM5QixpQ0FBdUM7QUFFdkMsU0FBUyxRQUFRLENBQUMsTUFBYztJQUM5QixjQUFNLENBQUMsb0JBQU0sQ0FBQyxhQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQTtBQUMvQixDQUFDO0FBRUQscUJBQWUsUUFBUSxDQUFBIn0=

/***/ }),

/***/ "../../node_modules/console-feed/lib/Hook/store/reducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.initialState = void 0;
exports.initialState = {
    timings: {},
    count: {}
};
exports["default"] = (function (state, action) {
    var _a, _b, _c;
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case 'COUNT': {
            var times = state.count[action.name] || 0;
            return __assign(__assign({}, state), { count: __assign(__assign({}, state.count), (_a = {}, _a[action.name] = times + 1, _a)) });
        }
        case 'TIME_START': {
            return __assign(__assign({}, state), { timings: __assign(__assign({}, state.timings), (_b = {}, _b[action.name] = {
                    start: performance.now() || +new Date()
                }, _b)) });
        }
        case 'TIME_END': {
            var timing = state.timings[action.name];
            var end = performance.now() || +new Date();
            var start = timing.start;
            var time = end - start;
            return __assign(__assign({}, state), { timings: __assign(__assign({}, state.timings), (_c = {}, _c[action.name] = __assign(__assign({}, timing), { end: end,
                    time: time }), _c)) });
        }
        default: {
            return state;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Ib29rL3N0b3JlL3JlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFYSxRQUFBLFlBQVksR0FBRztJQUMxQixPQUFPLEVBQUUsRUFBRTtJQUNYLEtBQUssRUFBRSxFQUFFO0NBQ1YsQ0FBQTtBQUVELHNCQUFlLFVBQUMsS0FBb0IsRUFBRSxNQUFjOztJQUFwQyxzQkFBQSxFQUFBLFFBQVEsb0JBQVk7SUFDbEMsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssT0FBTyxDQUFDLENBQUM7WUFDWixJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFFM0MsNkJBQ0ssS0FBSyxLQUNSLEtBQUssd0JBQ0EsS0FBSyxDQUFDLEtBQUssZ0JBQ2IsTUFBTSxDQUFDLElBQUksSUFBRyxLQUFLLEdBQUcsQ0FBQyxVQUUzQjtTQUNGO1FBRUQsS0FBSyxZQUFZLENBQUMsQ0FBQztZQUNqQiw2QkFDSyxLQUFLLEtBQ1IsT0FBTyx3QkFDRixLQUFLLENBQUMsT0FBTyxnQkFDZixNQUFNLENBQUMsSUFBSSxJQUFHO29CQUNiLEtBQUssRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtpQkFDeEMsVUFFSjtTQUNGO1FBRUQsS0FBSyxVQUFVLENBQUMsQ0FBQztZQUNmLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBRXpDLElBQU0sR0FBRyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUE7WUFDcEMsSUFBQSxLQUFLLEdBQUssTUFBTSxNQUFYLENBQVc7WUFFeEIsSUFBTSxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQTtZQUV4Qiw2QkFDSyxLQUFLLEtBQ1IsT0FBTyx3QkFDRixLQUFLLENBQUMsT0FBTyxnQkFDZixNQUFNLENBQUMsSUFBSSwwQkFDUCxNQUFNLEtBQ1QsR0FBRyxLQUFBO29CQUNILElBQUksTUFBQSxhQUdUO1NBQ0Y7UUFFRCxPQUFPLENBQUMsQ0FBQztZQUNQLE9BQU8sS0FBSyxDQUFBO1NBQ2I7S0FDRjtBQUNILENBQUMsRUFBQSJ9

/***/ }),

/***/ "../../node_modules/console-feed/lib/Hook/store/state.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.update = exports.state = void 0;
function update(newState) {
    exports.state = newState;
}
exports.update = update;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvSG9vay9zdG9yZS9zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxTQUFnQixNQUFNLENBQUMsUUFBYTtJQUNsQyxhQUFLLEdBQUcsUUFBUSxDQUFBO0FBQ2xCLENBQUM7QUFGRCx3QkFFQyJ9

/***/ }),

/***/ "../../node_modules/console-feed/lib/Transform/Function.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * Serialize a function into JSON
 */
exports["default"] = {
    type: 'Function',
    shouldTransform: function (type, obj) {
        return typeof obj === 'function';
    },
    toSerializable: function (func) {
        var body = '';
        try {
            body = func
                .toString()
                .substring(body.indexOf('{') + 1, body.lastIndexOf('}'));
        }
        catch (e) { }
        return {
            name: func.name,
            body: body,
            proto: Object.getPrototypeOf(func).constructor.name
        };
    },
    fromSerializable: function (data) {
        try {
            var tempFunc = function () { };
            if (typeof data.name === 'string') {
                Object.defineProperty(tempFunc, 'name', {
                    value: data.name,
                    writable: false
                });
            }
            if (typeof data.body === 'string') {
                Object.defineProperty(tempFunc, 'body', {
                    value: data.body,
                    writable: false
                });
            }
            if (typeof data.proto === 'string') {
                // @ts-ignore
                tempFunc.constructor = {
                    name: data.proto
                };
            }
            return tempFunc;
        }
        catch (e) {
            return data;
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvVHJhbnNmb3JtL0Z1bmN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUE7O0dBRUc7QUFDSCxxQkFBZTtJQUNiLElBQUksRUFBRSxVQUFVO0lBQ2hCLGVBQWUsRUFBZixVQUFnQixJQUFTLEVBQUUsR0FBUTtRQUNqQyxPQUFPLE9BQU8sR0FBRyxLQUFLLFVBQVUsQ0FBQTtJQUNsQyxDQUFDO0lBQ0QsY0FBYyxFQUFkLFVBQWUsSUFBYztRQUMzQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUE7UUFDYixJQUFJO1lBQ0YsSUFBSSxHQUFHLElBQUk7aUJBQ1IsUUFBUSxFQUFFO2lCQUNWLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7U0FDM0Q7UUFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO1FBRWQsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksTUFBQTtZQUNKLEtBQUssRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJO1NBQ3BELENBQUE7SUFDSCxDQUFDO0lBQ0QsZ0JBQWdCLEVBQWhCLFVBQWlCLElBQWE7UUFDNUIsSUFBSTtZQUNGLElBQU0sUUFBUSxHQUFHLGNBQVksQ0FBQyxDQUFBO1lBRTlCLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDakMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFO29CQUN0QyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSxLQUFLO2lCQUNoQixDQUFDLENBQUE7YUFDSDtZQUVELElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDakMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFO29CQUN0QyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSxLQUFLO2lCQUNoQixDQUFDLENBQUE7YUFDSDtZQUVELElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtnQkFDbEMsYUFBYTtnQkFDYixRQUFRLENBQUMsV0FBVyxHQUFHO29CQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUs7aUJBQ2pCLENBQUE7YUFDRjtZQUVELE9BQU8sUUFBUSxDQUFBO1NBQ2hCO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQTtTQUNaO0lBQ0gsQ0FBQztDQUNGLENBQUEifQ==

/***/ }),

/***/ "../../node_modules/console-feed/lib/Transform/HTML.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
// Sandbox HTML elements
var sandbox = document.implementation.createHTMLDocument('sandbox');
function objectifyAttributes(element) {
    var data = {};
    for (var _i = 0, _a = element.attributes; _i < _a.length; _i++) {
        var attribute = _a[_i];
        data[attribute.name] = attribute.value;
    }
    return data;
}
/**
 * Serialize a HTML element into JSON
 */
exports["default"] = {
    type: 'HTMLElement',
    shouldTransform: function (type, obj) {
        return (obj &&
            obj.children &&
            typeof obj.innerHTML === 'string' &&
            typeof obj.tagName === 'string');
    },
    toSerializable: function (element) {
        return {
            tagName: element.tagName.toLowerCase(),
            attributes: objectifyAttributes(element),
            innerHTML: element.innerHTML
        };
    },
    fromSerializable: function (data) {
        try {
            var element = sandbox.createElement(data.tagName);
            element.innerHTML = data.innerHTML;
            for (var _i = 0, _a = Object.keys(data.attributes); _i < _a.length; _i++) {
                var attribute = _a[_i];
                try {
                    element.setAttribute(attribute, data.attributes[attribute]);
                }
                catch (e) { }
            }
            return element;
        }
        catch (e) {
            return data;
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSFRNTC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UcmFuc2Zvcm0vSFRNTC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdCQUF3QjtBQUN4QixJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBVXJFLFNBQVMsbUJBQW1CLENBQUMsT0FBWTtJQUN2QyxJQUFNLElBQUksR0FBRyxFQUFFLENBQUE7SUFDZixLQUFzQixVQUFrQixFQUFsQixLQUFBLE9BQU8sQ0FBQyxVQUFVLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCLEVBQUU7UUFBckMsSUFBSSxTQUFTLFNBQUE7UUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFBO0tBQ3ZDO0lBQ0QsT0FBTyxJQUFJLENBQUE7QUFDYixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxxQkFBZTtJQUNiLElBQUksRUFBRSxhQUFhO0lBQ25CLGVBQWUsRUFBZixVQUFnQixJQUFTLEVBQUUsR0FBUTtRQUNqQyxPQUFPLENBQ0wsR0FBRztZQUNILEdBQUcsQ0FBQyxRQUFRO1lBQ1osT0FBTyxHQUFHLENBQUMsU0FBUyxLQUFLLFFBQVE7WUFDakMsT0FBTyxHQUFHLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FDaEMsQ0FBQTtJQUNILENBQUM7SUFDRCxjQUFjLEVBQWQsVUFBZSxPQUFvQjtRQUNqQyxPQUFPO1lBQ0wsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ3RDLFVBQVUsRUFBRSxtQkFBbUIsQ0FBQyxPQUFPLENBQUM7WUFDeEMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTO1NBQ2xCLENBQUE7SUFDZCxDQUFDO0lBQ0QsZ0JBQWdCLEVBQWhCLFVBQWlCLElBQWE7UUFDNUIsSUFBSTtZQUNGLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBZ0IsQ0FBQTtZQUNsRSxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUE7WUFDbEMsS0FBc0IsVUFBNEIsRUFBNUIsS0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBNUIsY0FBNEIsRUFBNUIsSUFBNEIsRUFBRTtnQkFBL0MsSUFBSSxTQUFTLFNBQUE7Z0JBQ2hCLElBQUk7b0JBQ0YsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO2lCQUM1RDtnQkFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO2FBQ2Y7WUFDRCxPQUFPLE9BQU8sQ0FBQTtTQUNmO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQTtTQUNaO0lBQ0gsQ0FBQztDQUNGLENBQUEifQ==

/***/ }),

/***/ "../../node_modules/console-feed/lib/Transform/Map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
/**
 * Serialize a Map into JSON
 */
exports["default"] = {
    type: 'Map',
    shouldTransform: function (type, obj) {
        return obj && obj.constructor && obj.constructor.name === 'Map';
    },
    toSerializable: function (map) {
        var body = {};
        map.forEach(function (value, key) {
            var k = typeof key == 'object' ? JSON.stringify(key) : key;
            body[k] = value;
        });
        return {
            name: 'Map',
            body: body,
            proto: Object.getPrototypeOf(map).constructor.name
        };
    },
    fromSerializable: function (data) {
        var body = data.body;
        var obj = __assign({}, body);
        if (typeof data.proto === 'string') {
            // @ts-ignore
            obj.constructor = {
                name: data.proto
            };
        }
        return obj;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1RyYW5zZm9ybS9NYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQU1BOztHQUVHO0FBQ0gscUJBQWU7SUFDYixJQUFJLEVBQUUsS0FBSztJQUNYLGVBQWUsRUFBZixVQUFnQixJQUFTLEVBQUUsR0FBUTtRQUNqQyxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsV0FBVyxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQTtJQUNqRSxDQUFDO0lBQ0QsY0FBYyxFQUFkLFVBQWUsR0FBUTtRQUNyQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUE7UUFFYixHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVMsS0FBSyxFQUFFLEdBQUc7WUFDN0IsSUFBTSxDQUFDLEdBQUcsT0FBTyxHQUFHLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7WUFDNUQsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQTtRQUNqQixDQUFDLENBQUMsQ0FBQTtRQUVGLE9BQU87WUFDTCxJQUFJLEVBQUUsS0FBSztZQUNYLElBQUksTUFBQTtZQUNKLEtBQUssRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJO1NBQ25ELENBQUE7SUFDSCxDQUFDO0lBQ0QsZ0JBQWdCLEVBQWhCLFVBQWlCLElBQWE7UUFDcEIsSUFBQSxJQUFJLEdBQUssSUFBSSxLQUFULENBQVM7UUFDckIsSUFBSSxHQUFHLGdCQUFRLElBQUksQ0FBRSxDQUFBO1FBRXJCLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUNsQyxhQUFhO1lBQ2IsR0FBRyxDQUFDLFdBQVcsR0FBRztnQkFDaEIsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO2FBQ2pCLENBQUE7U0FDRjtRQUVELE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztDQUNGLENBQUEifQ==

/***/ }),

/***/ "../../node_modules/console-feed/lib/Transform/arithmetic.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Arithmetic;
(function (Arithmetic) {
    Arithmetic[Arithmetic["infinity"] = 0] = "infinity";
    Arithmetic[Arithmetic["minusInfinity"] = 1] = "minusInfinity";
    Arithmetic[Arithmetic["minusZero"] = 2] = "minusZero";
})(Arithmetic || (Arithmetic = {}));
function isMinusZero(value) {
    return 1 / value === -Infinity;
}
exports["default"] = {
    type: 'Arithmetic',
    shouldTransform: function (type, value) {
        return (type === 'number' &&
            (value === Infinity || value === -Infinity || isMinusZero(value)));
    },
    toSerializable: function (value) {
        return value === Infinity
            ? Arithmetic.infinity
            : value === -Infinity
                ? Arithmetic.minusInfinity
                : Arithmetic.minusZero;
    },
    fromSerializable: function (data) {
        if (data === Arithmetic.infinity)
            return Infinity;
        if (data === Arithmetic.minusInfinity)
            return -Infinity;
        if (data === Arithmetic.minusZero)
            return -0;
        return data;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJpdGhtZXRpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UcmFuc2Zvcm0vYXJpdGhtZXRpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUssVUFJSjtBQUpELFdBQUssVUFBVTtJQUNiLG1EQUFRLENBQUE7SUFDUiw2REFBYSxDQUFBO0lBQ2IscURBQVMsQ0FBQTtBQUNYLENBQUMsRUFKSSxVQUFVLEtBQVYsVUFBVSxRQUlkO0FBRUQsU0FBUyxXQUFXLENBQUMsS0FBSztJQUN4QixPQUFPLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxRQUFRLENBQUE7QUFDaEMsQ0FBQztBQUVELHFCQUFlO0lBQ2IsSUFBSSxFQUFFLFlBQVk7SUFDbEIsZUFBZSxFQUFmLFVBQWdCLElBQVMsRUFBRSxLQUFVO1FBQ25DLE9BQU8sQ0FDTCxJQUFJLEtBQUssUUFBUTtZQUNqQixDQUFDLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxLQUFLLENBQUMsUUFBUSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUNsRSxDQUFBO0lBQ0gsQ0FBQztJQUNELGNBQWMsRUFBZCxVQUFlLEtBQUs7UUFDbEIsT0FBTyxLQUFLLEtBQUssUUFBUTtZQUN2QixDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVE7WUFDckIsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLFFBQVE7Z0JBQ25CLENBQUMsQ0FBQyxVQUFVLENBQUMsYUFBYTtnQkFDMUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUE7SUFDNUIsQ0FBQztJQUNELGdCQUFnQixFQUFoQixVQUFpQixJQUFnQjtRQUMvQixJQUFJLElBQUksS0FBSyxVQUFVLENBQUMsUUFBUTtZQUFFLE9BQU8sUUFBUSxDQUFBO1FBQ2pELElBQUksSUFBSSxLQUFLLFVBQVUsQ0FBQyxhQUFhO1lBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQTtRQUN2RCxJQUFJLElBQUksS0FBSyxVQUFVLENBQUMsU0FBUztZQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFFNUMsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0NBQ0YsQ0FBQSJ9

/***/ }),

/***/ "../../node_modules/console-feed/lib/Transform/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.Decode = exports.Encode = void 0;
var arithmetic_1 = __webpack_require__("../../node_modules/console-feed/lib/Transform/arithmetic.js");
var Function_1 = __webpack_require__("../../node_modules/console-feed/lib/Transform/Function.js");
var HTML_1 = __webpack_require__("../../node_modules/console-feed/lib/Transform/HTML.js");
var Map_1 = __webpack_require__("../../node_modules/console-feed/lib/Transform/Map.js");
var replicator_1 = __webpack_require__("../../node_modules/console-feed/lib/Transform/replicator/index.js");
var transforms = [HTML_1["default"], Function_1["default"], arithmetic_1["default"], Map_1["default"]];
var replicator = new replicator_1["default"]();
replicator.addTransforms(transforms);
function Encode(data) {
    return JSON.parse(replicator.encode(data));
}
exports.Encode = Encode;
function Decode(data) {
    return replicator.decode(JSON.stringify(data));
}
exports.Decode = Decode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvVHJhbnNmb3JtL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDJDQUFxQztBQUNyQyx1Q0FBaUM7QUFDakMsK0JBQXlCO0FBQ3pCLDZCQUF1QjtBQUV2QiwyQ0FBcUM7QUFFckMsSUFBTSxVQUFVLEdBQUcsQ0FBQyxpQkFBSSxFQUFFLHFCQUFRLEVBQUUsdUJBQVUsRUFBRSxnQkFBRyxDQUFDLENBQUE7QUFFcEQsSUFBTSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUE7QUFDbkMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUVwQyxTQUFnQixNQUFNLENBQUksSUFBUztJQUNqQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0FBQzVDLENBQUM7QUFGRCx3QkFFQztBQUVELFNBQWdCLE1BQU0sQ0FBQyxJQUFTO0lBQzlCLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7QUFDaEQsQ0FBQztBQUZELHdCQUVDIn0=

/***/ }),

/***/ "../../node_modules/console-feed/lib/Transform/replicator/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
// Const
var TRANSFORMED_TYPE_KEY = '@t';
var CIRCULAR_REF_KEY = '@r';
var KEY_REQUIRE_ESCAPING_RE = /^#*@(t|r)$/;
var GLOBAL = (function getGlobal() {
    // NOTE: see http://www.ecma-international.org/ecma-262/6.0/index.html#sec-performeval step 10
    var savedEval = eval;
    return savedEval('this');
})();
var ARRAY_BUFFER_SUPPORTED = typeof ArrayBuffer === 'function';
var MAP_SUPPORTED = typeof Map === 'function';
var SET_SUPPORTED = typeof Set === 'function';
var TYPED_ARRAY_CTORS = [
    'Int8Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Int16Array',
    'Uint16Array',
    'Int32Array',
    'Uint32Array',
    'Float32Array',
    'Float64Array',
];
// Saved proto functions
var arrSlice = Array.prototype.slice;
// Default serializer
var JSONSerializer = {
    serialize: function (val) {
        return JSON.stringify(val);
    },
    deserialize: function (val) {
        return JSON.parse(val);
    }
};
// EncodingTransformer
var EncodingTransformer = /** @class */ (function () {
    function EncodingTransformer(val, transforms) {
        this.references = val;
        this.transforms = transforms;
        this.circularCandidates = [];
        this.circularCandidatesDescrs = [];
        this.circularRefCount = 0;
    }
    EncodingTransformer._createRefMark = function (idx) {
        var obj = Object.create(null);
        obj[CIRCULAR_REF_KEY] = idx;
        return obj;
    };
    EncodingTransformer.prototype._createCircularCandidate = function (val, parent, key) {
        this.circularCandidates.push(val);
        this.circularCandidatesDescrs.push({ parent: parent, key: key, refIdx: -1 });
    };
    EncodingTransformer.prototype._applyTransform = function (val, parent, key, transform) {
        var result = Object.create(null);
        var serializableVal = transform.toSerializable(val);
        if (typeof serializableVal === 'object')
            this._createCircularCandidate(val, parent, key);
        result[TRANSFORMED_TYPE_KEY] = transform.type;
        result.data = this._handleValue(function () { return serializableVal; }, parent, key);
        return result;
    };
    EncodingTransformer.prototype._handleArray = function (arr) {
        var result = [];
        var _loop_1 = function (i) {
            result[i] = this_1._handleValue(function () { return arr[i]; }, result, i);
        };
        var this_1 = this;
        for (var i = 0; i < arr.length; i++) {
            _loop_1(i);
        }
        return result;
    };
    EncodingTransformer.prototype._handlePlainObject = function (obj) {
        var _a, _b;
        var result = Object.create(null);
        var _loop_2 = function (key) {
            if (Reflect.has(obj, key)) {
                var resultKey = KEY_REQUIRE_ESCAPING_RE.test(key) ? "#" + key : key;
                result[resultKey] = this_2._handleValue(function () { return obj[key]; }, result, resultKey);
            }
        };
        var this_2 = this;
        for (var key in obj) {
            _loop_2(key);
        }
        var name = (_b = (_a = obj === null || obj === void 0 ? void 0 : obj.__proto__) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name;
        if (name && name !== 'Object') {
            result.constructor = { name: name };
        }
        return result;
    };
    EncodingTransformer.prototype._handleObject = function (obj, parent, key) {
        this._createCircularCandidate(obj, parent, key);
        return Array.isArray(obj)
            ? this._handleArray(obj)
            : this._handlePlainObject(obj);
    };
    EncodingTransformer.prototype._ensureCircularReference = function (obj) {
        var circularCandidateIdx = this.circularCandidates.indexOf(obj);
        if (circularCandidateIdx > -1) {
            var descr = this.circularCandidatesDescrs[circularCandidateIdx];
            if (descr.refIdx === -1)
                descr.refIdx = descr.parent ? ++this.circularRefCount : 0;
            return EncodingTransformer._createRefMark(descr.refIdx);
        }
        return null;
    };
    EncodingTransformer.prototype._handleValue = function (getVal, parent, key) {
        try {
            var val = getVal();
            var type = typeof val;
            var isObject = type === 'object' && val !== null;
            if (isObject) {
                var refMark = this._ensureCircularReference(val);
                if (refMark)
                    return refMark;
            }
            for (var _i = 0, _a = this.transforms; _i < _a.length; _i++) {
                var transform = _a[_i];
                if (transform.shouldTransform(type, val))
                    return this._applyTransform(val, parent, key, transform);
            }
            if (isObject)
                return this._handleObject(val, parent, key);
            return val;
        }
        catch (e) {
            try {
                return this._handleValue(function () { return (e instanceof Error ? e : new Error(e)); }, parent, key);
            }
            catch (_b) {
                return null;
            }
        }
    };
    EncodingTransformer.prototype.transform = function () {
        var _this = this;
        var references = [this._handleValue(function () { return _this.references; }, null, null)];
        for (var _i = 0, _a = this.circularCandidatesDescrs; _i < _a.length; _i++) {
            var descr = _a[_i];
            if (descr.refIdx > 0) {
                references[descr.refIdx] = descr.parent[descr.key];
                descr.parent[descr.key] = EncodingTransformer._createRefMark(descr.refIdx);
            }
        }
        return references;
    };
    return EncodingTransformer;
}());
// DecodingTransform
var DecodingTransformer = /** @class */ (function () {
    function DecodingTransformer(references, transformsMap) {
        this.activeTransformsStack = [];
        this.visitedRefs = Object.create(null);
        this.references = references;
        this.transformMap = transformsMap;
    }
    DecodingTransformer.prototype._handlePlainObject = function (obj) {
        var unescaped = Object.create(null);
        if ('constructor' in obj) {
            if (!obj.constructor || typeof obj.constructor.name !== 'string') {
                obj.constructor = {
                    name: 'Object'
                };
            }
        }
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                this._handleValue(obj[key], obj, key);
                if (KEY_REQUIRE_ESCAPING_RE.test(key)) {
                    // NOTE: use intermediate object to avoid unescaped and escaped keys interference
                    // E.g. unescaped "##@t" will be "#@t" which can overwrite escaped "#@t".
                    unescaped[key.substring(1)] = obj[key];
                    delete obj[key];
                }
            }
        }
        for (var unsecapedKey in unescaped)
            obj[unsecapedKey] = unescaped[unsecapedKey];
    };
    DecodingTransformer.prototype._handleTransformedObject = function (obj, parent, key) {
        var transformType = obj[TRANSFORMED_TYPE_KEY];
        var transform = this.transformMap[transformType];
        if (!transform)
            throw new Error("Can't find transform for \"" + transformType + "\" type.");
        this.activeTransformsStack.push(obj);
        this._handleValue(obj.data, obj, 'data');
        this.activeTransformsStack.pop();
        parent[key] = transform.fromSerializable(obj.data);
    };
    DecodingTransformer.prototype._handleCircularSelfRefDuringTransform = function (refIdx, parent, key) {
        // NOTE: we've hit a hard case: object reference itself during transformation.
        // We can't dereference it since we don't have resulting object yet. And we'll
        // not be able to restore reference lately because we will need to traverse
        // transformed object again and reference might be unreachable or new object contain
        // new circular references. As a workaround we create getter, so once transformation
        // complete, dereferenced property will point to correct transformed object.
        var references = this.references;
        Object.defineProperty(parent, key, {
            // @ts-ignore
            val: void 0,
            configurable: true,
            enumerable: true,
            get: function () {
                if (this.val === void 0)
                    this.val = references[refIdx];
                return this.val;
            },
            set: function (value) {
                this.val = value;
            }
        });
    };
    DecodingTransformer.prototype._handleCircularRef = function (refIdx, parent, key) {
        if (this.activeTransformsStack.includes(this.references[refIdx]))
            this._handleCircularSelfRefDuringTransform(refIdx, parent, key);
        else {
            if (!this.visitedRefs[refIdx]) {
                this.visitedRefs[refIdx] = true;
                this._handleValue(this.references[refIdx], this.references, refIdx);
            }
            parent[key] = this.references[refIdx];
        }
    };
    DecodingTransformer.prototype._handleValue = function (val, parent, key) {
        if (typeof val !== 'object' || val === null)
            return;
        var refIdx = val[CIRCULAR_REF_KEY];
        if (refIdx !== void 0)
            this._handleCircularRef(refIdx, parent, key);
        else if (val[TRANSFORMED_TYPE_KEY])
            this._handleTransformedObject(val, parent, key);
        else if (Array.isArray(val)) {
            for (var i = 0; i < val.length; i++)
                this._handleValue(val[i], val, i);
        }
        else
            this._handlePlainObject(val);
    };
    DecodingTransformer.prototype.transform = function () {
        this.visitedRefs[0] = true;
        this._handleValue(this.references[0], this.references, 0);
        return this.references[0];
    };
    return DecodingTransformer;
}());
// Transforms
var builtInTransforms = [
    {
        type: '[[NaN]]',
        shouldTransform: function (type, val) {
            return type === 'number' && isNaN(val);
        },
        toSerializable: function () {
            return '';
        },
        fromSerializable: function () {
            return NaN;
        }
    },
    {
        type: '[[undefined]]',
        shouldTransform: function (type) {
            return type === 'undefined';
        },
        toSerializable: function () {
            return '';
        },
        fromSerializable: function () {
            return void 0;
        }
    },
    {
        type: '[[Date]]',
        shouldTransform: function (type, val) {
            return val instanceof Date;
        },
        toSerializable: function (date) {
            return date.getTime();
        },
        fromSerializable: function (val) {
            var date = new Date();
            date.setTime(val);
            return date;
        }
    },
    {
        type: '[[RegExp]]',
        shouldTransform: function (type, val) {
            return val instanceof RegExp;
        },
        toSerializable: function (re) {
            var result = {
                src: re.source,
                flags: ''
            };
            if (re.global)
                result.flags += 'g';
            if (re.ignoreCase)
                result.flags += 'i';
            if (re.multiline)
                result.flags += 'm';
            return result;
        },
        fromSerializable: function (val) {
            return new RegExp(val.src, val.flags);
        }
    },
    {
        type: '[[Error]]',
        shouldTransform: function (type, val) {
            return val instanceof Error;
        },
        toSerializable: function (err) {
            return {
                name: err.name,
                message: err.message,
                stack: err.stack
            };
        },
        fromSerializable: function (val) {
            var Ctor = GLOBAL[val.name] || Error;
            var err = new Ctor(val.message);
            err.stack = val.stack;
            return err;
        }
    },
    {
        type: '[[ArrayBuffer]]',
        shouldTransform: function (type, val) {
            return ARRAY_BUFFER_SUPPORTED && val instanceof ArrayBuffer;
        },
        toSerializable: function (buffer) {
            var view = new Int8Array(buffer);
            return arrSlice.call(view);
        },
        fromSerializable: function (val) {
            if (ARRAY_BUFFER_SUPPORTED) {
                var buffer = new ArrayBuffer(val.length);
                var view = new Int8Array(buffer);
                view.set(val);
                return buffer;
            }
            return val;
        }
    },
    {
        type: '[[TypedArray]]',
        shouldTransform: function (type, val) {
            for (var _i = 0, TYPED_ARRAY_CTORS_1 = TYPED_ARRAY_CTORS; _i < TYPED_ARRAY_CTORS_1.length; _i++) {
                var ctorName = TYPED_ARRAY_CTORS_1[_i];
                if (typeof GLOBAL[ctorName] === 'function' &&
                    val instanceof GLOBAL[ctorName])
                    return true;
            }
            return false;
        },
        toSerializable: function (arr) {
            return {
                ctorName: arr.constructor.name,
                arr: arrSlice.call(arr)
            };
        },
        fromSerializable: function (val) {
            return typeof GLOBAL[val.ctorName] === 'function'
                ? new GLOBAL[val.ctorName](val.arr)
                : val.arr;
        }
    },
    {
        type: '[[Map]]',
        shouldTransform: function (type, val) {
            return MAP_SUPPORTED && val instanceof Map;
        },
        toSerializable: function (map) {
            var flattenedKVArr = [];
            map.forEach(function (val, key) {
                flattenedKVArr.push(key);
                flattenedKVArr.push(val);
            });
            return flattenedKVArr;
        },
        fromSerializable: function (val) {
            if (MAP_SUPPORTED) {
                // NOTE: new Map(iterable) is not supported by all browsers
                var map = new Map();
                for (var i = 0; i < val.length; i += 2)
                    map.set(val[i], val[i + 1]);
                return map;
            }
            var kvArr = [];
            // @ts-ignore
            for (var j = 0; j < val.length; j += 2)
                kvArr.push([val[i], val[i + 1]]);
            return kvArr;
        }
    },
    {
        type: '[[Set]]',
        shouldTransform: function (type, val) {
            return SET_SUPPORTED && val instanceof Set;
        },
        toSerializable: function (set) {
            var arr = [];
            set.forEach(function (val) {
                arr.push(val);
            });
            return arr;
        },
        fromSerializable: function (val) {
            if (SET_SUPPORTED) {
                // NOTE: new Set(iterable) is not supported by all browsers
                var set = new Set();
                for (var i = 0; i < val.length; i++)
                    set.add(val[i]);
                return set;
            }
            return val;
        }
    },
];
// Replicator
var Replicator = /** @class */ (function () {
    function Replicator(serializer) {
        this.transforms = [];
        this.transformsMap = Object.create(null);
        this.serializer = serializer || JSONSerializer;
        this.addTransforms(builtInTransforms);
    }
    Replicator.prototype.addTransforms = function (transforms) {
        transforms = Array.isArray(transforms) ? transforms : [transforms];
        for (var _i = 0, transforms_1 = transforms; _i < transforms_1.length; _i++) {
            var transform = transforms_1[_i];
            if (this.transformsMap[transform.type])
                throw new Error("Transform with type \"" + transform.type + "\" was already added.");
            this.transforms.push(transform);
            this.transformsMap[transform.type] = transform;
        }
        return this;
    };
    Replicator.prototype.removeTransforms = function (transforms) {
        transforms = Array.isArray(transforms) ? transforms : [transforms];
        for (var _i = 0, transforms_2 = transforms; _i < transforms_2.length; _i++) {
            var transform = transforms_2[_i];
            var idx = this.transforms.indexOf(transform);
            if (idx > -1)
                this.transforms.splice(idx, 1);
            delete this.transformsMap[transform.type];
        }
        return this;
    };
    Replicator.prototype.encode = function (val) {
        var transformer = new EncodingTransformer(val, this.transforms);
        var references = transformer.transform();
        return this.serializer.serialize(references);
    };
    Replicator.prototype.decode = function (val) {
        var references = this.serializer.deserialize(val);
        var transformer = new DecodingTransformer(references, this.transformsMap);
        return transformer.transform();
    };
    return Replicator;
}());
exports["default"] = Replicator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvVHJhbnNmb3JtL3JlcGxpY2F0b3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxRQUFRO0FBQ1IsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUE7QUFDakMsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUE7QUFDN0IsSUFBTSx1QkFBdUIsR0FBRyxZQUFZLENBQUE7QUFFNUMsSUFBTSxNQUFNLEdBQUcsQ0FBQyxTQUFTLFNBQVM7SUFDaEMsOEZBQThGO0lBQzlGLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQTtJQUV0QixPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUMxQixDQUFDLENBQUMsRUFBRSxDQUFBO0FBRUosSUFBTSxzQkFBc0IsR0FBRyxPQUFPLFdBQVcsS0FBSyxVQUFVLENBQUE7QUFDaEUsSUFBTSxhQUFhLEdBQUcsT0FBTyxHQUFHLEtBQUssVUFBVSxDQUFBO0FBQy9DLElBQU0sYUFBYSxHQUFHLE9BQU8sR0FBRyxLQUFLLFVBQVUsQ0FBQTtBQUUvQyxJQUFNLGlCQUFpQixHQUFHO0lBQ3hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsY0FBYztDQUNmLENBQUE7QUFFRCx3QkFBd0I7QUFDeEIsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUE7QUFFdEMscUJBQXFCO0FBQ3JCLElBQU0sY0FBYyxHQUFHO0lBQ3JCLFNBQVMsRUFBVCxVQUFVLEdBQVE7UUFDaEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFRCxXQUFXLEVBQVgsVUFBWSxHQUFRO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUN4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

/***/ }),

/***/ "../../node_modules/console-feed/lib/definitions/Methods.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var methods = [
    'log',
    'debug',
    'info',
    'warn',
    'error',
    'table',
    'clear',
    'time',
    'timeEnd',
    'count',
    'assert'
];
exports["default"] = methods;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0aG9kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9ucy9NZXRob2RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxPQUFPLEdBQUc7SUFDZCxLQUFLO0lBQ0wsT0FBTztJQUNQLE1BQU07SUFDTixNQUFNO0lBQ04sT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtDQUNULENBQUE7QUFFRCxxQkFBZSxPQUFPLENBQUEifQ==

/***/ }),

/***/ "../../node_modules/os-browserify/browser.js":
/***/ (function(module, exports) {

exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

exports.homedir = function () {
	return '/'
};


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


/***/ })

}]);
//# sourceMappingURL=vendors~sandbox-startup.a77b5078c.chunk.js.map