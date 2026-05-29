(this["csbJsonP"] = this["csbJsonP"] || []).push([["default~sandbox~sandbox-startup"],{

/***/ "../../node_modules/worker-loader/dist/cjs.js?name=babel-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/babel/worker/index.ts":
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "babel-transpiler.6f6a33cb.worker.js");
};

/***/ }),

/***/ "../codesandbox-api/dist/codesandbox.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Protocol", function() { return Protocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformError", function() { return transformError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearErrorTransformers", function() { return clearErrorTransformers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerErrorTransformer", function() { return registerErrorTransformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStandalone", function() { return isStandalone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iframeHandshake", function() { return iframeHandshake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyListeners", function() { return notifyListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFrame", function() { return registerFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reattach", function() { return reattach; });
var transformers = [];
function transformError(error, module, modules) {
    var transformedErrors = transformers.map(function (c) { return c(error, module, modules); }).filter(function (x) { return x != null; });
    return transformedErrors[0];
}
function clearErrorTransformers() {
    transformers.length = 0;
}
function registerErrorTransformer(check) {
    transformers.push(check);
}

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var generateId = function () {
    // Such a random ID
    return Math.floor(Math.random() * 1000000 + Math.random() * 1000000);
};
var getConstructorName = function (x) {
    try {
        return x.constructor.name;
    }
    catch (e) {
        return '';
    }
};
var Protocol = /** @class */ (function () {
    function Protocol(type, handleMessage, target) {
        var _this = this;
        this.type = type;
        this.handleMessage = handleMessage;
        this.target = target;
        this.outgoingMessages = new Set();
        this._messageListener = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var data, result, returnMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = e.data;
                        if (data.$type !== this.getTypeId()) {
                            return [2 /*return*/];
                        }
                        // We are getting a response to the message
                        if (this.outgoingMessages.has(data.$id)) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.handleMessage(data.$data)];
                    case 1:
                        result = _a.sent();
                        returnMessage = {
                            $originId: this.internalId,
                            $type: this.getTypeId(),
                            $data: result,
                            $id: data.$id,
                        };
                        if (e.source) {
                            // @ts-ignore
                            e.source.postMessage(returnMessage, '*');
                        }
                        else {
                            this._postMessage(returnMessage);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.createConnection();
        this.internalId = generateId();
        this.isWorker = getConstructorName(target) === 'Worker';
    }
    Protocol.prototype.getTypeId = function () {
        return "p-".concat(this.type);
    };
    Protocol.prototype.createConnection = function () {
        self.addEventListener('message', this._messageListener);
    };
    Protocol.prototype.dispose = function () {
        self.removeEventListener('message', this._messageListener);
    };
    Protocol.prototype.sendMessage = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            var messageId = generateId();
            var message = {
                $originId: _this.internalId,
                $type: _this.getTypeId(),
                $data: data,
                $id: messageId,
            };
            _this.outgoingMessages.add(messageId);
            var listenFunction = function (e) {
                var data = e.data;
                if (data.$type === _this.getTypeId() &&
                    data.$id === messageId &&
                    data.$originId !== _this.internalId) {
                    resolve(data.$data);
                    self.removeEventListener('message', listenFunction);
                }
            };
            self.addEventListener('message', listenFunction);
            _this._postMessage(message);
        });
    };
    Protocol.prototype._postMessage = function (m) {
        if (this.isWorker ||
            // @ts-ignore Unknown to TS
            (typeof DedicatedWorkerGlobalScope !== 'undefined' &&
                // @ts-ignore Unknown to TS
                this.target instanceof DedicatedWorkerGlobalScope)) {
            // @ts-ignore
            this.target.postMessage(m);
        }
        else {
            this.target.postMessage(m, '*');
        }
    };
    return Protocol;
}());

/**
 * Returns an action that describes to open a notification in the editor
 *
 * @export
 * @param {string} title
 * @param {('notice' | 'warning' | 'error' | 'success')} [notificationType='notice']
 * @param {number} [timeAlive=2] How long the notification should show in seconds
 * @returns {NotificationAction}
 */
function show(title, notificationType, timeAlive) {
    if (notificationType === void 0) { notificationType = 'notice'; }
    if (timeAlive === void 0) { timeAlive = 2; }
    // TODO automatically add type: 'action', maybe do this after conversion to TS
    return {
        type: 'action',
        action: 'notification',
        title: title,
        notificationType: notificationType,
        timeAlive: timeAlive,
    };
}


var notifications = Object.freeze({
	show: show
});

function openModule(id, lineNumber, column) {
    // TODO automatically add type: 'action', maybe do this after conversion to TS
    return {
        type: 'action',
        action: 'editor.open-module',
        path: id,
        lineNumber: lineNumber,
        column: column,
    };
}


var editor = Object.freeze({
	openModule: openModule
});

function add(dependencyName) {
    return {
        type: 'action',
        action: 'source.dependencies.add',
        dependency: dependencyName,
    };
}


var d = Object.freeze({
	add: add
});

function rename(path, title) {
    return {
        type: 'action',
        action: 'source.module.rename',
        path: path,
        title: title,
    };
}


var m = Object.freeze({
	rename: rename
});

var dependencies = d;
var modules = m;


var source = Object.freeze({
	dependencies: dependencies,
	modules: modules
});

/**
 * Returns an action that describes to show an error
 * in the code of the editor (with the red squiggles)
 *
 * @export
 * @param {string} title
 * @param {string} message
 * @param {ErrorOptions} { line, column, path, payload }
 * @returns {ErrorAction}
 */
function show$1(title, message, _a) {
    var line = _a.line, column = _a.column, lineEnd = _a.lineEnd, columnEnd = _a.columnEnd, path = _a.path, payload = _a.payload, source = _a.source;
    return {
        title: title,
        message: message,
        line: line,
        column: column,
        path: path,
        payload: payload,
        lineEnd: lineEnd,
        columnEnd: columnEnd,
        severity: 'error',
        type: 'action',
        action: 'show-error',
        source: source || 'browser',
    };
}
function clear(path, source) {
    return {
        type: 'action',
        action: 'clear-errors',
        path: path,
        source: source,
    };
}


var error = Object.freeze({
	show: show$1,
	clear: clear
});

/**
 * Returns an action that describes to show a correction
 * in the code of the editor (with the yellow/blue squiggles)
 *
 * @export
 * @param {string} title
 * @param {string} message
 * @param {CorrectionOptions} { line, column, payload }
 * @returns {CorrectionAction}
 */
function show$2(message, _a) {
    var _b = _a === void 0 ? {
        path: '',
        severity: 'warning',
        source: '',
    } : _a, line = _b.line, column = _b.column, lineEnd = _b.lineEnd, columnEnd = _b.columnEnd, path = _b.path, payload = _b.payload, _c = _b.severity, severity = _c === void 0 ? 'warning' : _c, _d = _b.source, source = _d === void 0 ? '' : _d;
    return {
        message: message,
        line: line,
        column: column,
        lineEnd: lineEnd,
        columnEnd: columnEnd,
        path: path,
        payload: payload,
        severity: severity,
        source: source,
        type: 'action',
        action: 'show-correction',
    };
}
function clear$1(path, source) {
    return {
        type: 'action',
        action: 'clear-corrections',
        path: path,
        source: source,
    };
}


var correction = Object.freeze({
	show: show$2,
	clear: clear$1
});

/**
 * Returns an action that describes to show a correction
 * in the code of the editor (with the yellow/blue squiggles)
 *
 * @export
 * @param {string} title
 * @param {string} message
 * @param {CorrectionOptions} { line, column, payload }
 * @returns {CorrectionAction}
 */
function show$3(_a) {
    var line = _a.line, path = _a.path, className = _a.className;
    return {
        line: line,
        path: path,
        className: className,
        type: 'action',
        action: 'show-glyph',
    };
}


var glyph = Object.freeze({
	show: show$3
});

// All actions of the editor are defined here. The sandbox can send messages
// like `source.files.rename` which the editor will see as an action to rename
// a module. This will allow plugins to alter project content in the future
var actions = {
    notifications: notifications,
    editor: editor,
    source: source,
    error: error,
    correction: correction,
    glyph: glyph,
};

var host = typeof process !== 'undefined' && "/sandpack";
var host$1 = host || 'https://codesandbox.io';

var __assign = (undefined && undefined.__assign) || function () {
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
// import * as debug from 'debug';
var bundlers = new Map();
function checkIsStandalone() {
    if (typeof window === 'undefined') {
        return true;
    }
    if (window.location && window.location.href.indexOf('?standalone') > -1) {
        return true;
    }
    if (window.opener || window.parent !== window) {
        // Only apply when host is an absolute URL — otherwise self-host sub-paths false-match.
        if (window.location &&
            /^https?:\/\//.test(host$1) &&
            window.location.href.indexOf(host$1) > -1) {
            return true;
        }
        return false;
    }
    return true;
}
// Whether the tab has a connection with the editor
var isStandalone = checkIsStandalone();
var resolveIframeHandshake;
var iframeHandshakeDone = false;
/**
 * Resolves when the handshake between the frame and the editor has succeeded
 */
var iframeHandshake = new Promise(function (resolve) {
    resolveIframeHandshake = resolve;
});
// Track every parent that ever registered with us — sandpack remounts (StrictMode,
// theme key change) create fresh clients with new channelIds. We dispatch to all
// known ids so messages reach whichever listener is currently live.
var parentOrigin = null;
var parentId = null;
var parentIds = new Set();
var parentOriginListener = function (e) {
    var _a;
    if (e.data.type === 'register-frame') {
        parentOrigin = e.data.origin;
        parentId = (_a = e.data.id) !== null && _a !== void 0 ? _a : null;
        if (parentId !== null)
            parentIds.add(parentId);
        if (!iframeHandshakeDone) {
            resolveIframeHandshake();
            iframeHandshakeDone = true;
        }
    }
};
if (typeof window !== 'undefined') {
    self.addEventListener('message', parentOriginListener);
}
function resetState() {
    parentOrigin = null;
    bundlers.clear();
}
/**
 * Send a message to the editor, this is most probably an action you generated
 *
 * @export
 * @param {*} message
 * @returns
 */
function dispatch(message) {
    if (!message)
        return;
    var baseMessage = __assign(__assign({}, message), { codesandbox: true });
    notifyListeners(baseMessage);
    notifyFrames(baseMessage);
    if (isStandalone)
        return;
    if (parentOrigin === null && message.type !== 'initialized')
        return;
    var target = parentOrigin === null ? '*' : parentOrigin;
    var targetWindow = window.opener || window.parent;
    if (parentIds.size === 0) {
        targetWindow.postMessage(baseMessage, target);
        return;
    }
    parentIds.forEach(function (id) {
        targetWindow.postMessage(__assign(__assign({}, baseMessage), { $id: id }), target);
    });
}
var listeners = {};
var listenerId = 0;
/**
 * Listen to everything that comes in from either the editor or the sandbox
 * @param callback Call this function to 'unlisten'
 */
function listen(callback) {
    var id = ++listenerId;
    listeners[id] = callback;
    return function () {
        delete listeners[id];
    };
}
function notifyListeners(data, source) {
    // eslint-disable-next-line no-shadow
    Object.keys(listeners).forEach(function (listenerId) {
        if (listeners[listenerId]) {
            try {
                listeners[listenerId](data, source);
            }
            catch (e) {
                /**/
            }
        }
    });
}
function notifyFrames(message) {
    var rawMessage = JSON.parse(JSON.stringify(message));
    bundlers.forEach(function (origin, frame) {
        if (frame && frame.postMessage) {
            frame.postMessage(__assign(__assign({}, rawMessage), { codesandbox: true }), origin);
        }
    });
}
function eventListener(e) {
    if (e.data.type === 'initialized' || isStandalone) {
        // iframe handshake is auto-resolved in the parent, only the child needs to wait for it
        // we detect the parent either by the "initialized" message which only the parent receives
        // or by the "isStandalone" flag which works for codesandbox.io and when sandpack is not inside an iframe
        iframeHandshakeDone = true;
    }
    if (!iframeHandshakeDone) {
        return;
    }
    var data = e.data;
    if (data &&
        data.codesandbox &&
        (parentOrigin === null || e.origin === parentOrigin) &&
        (data.$id == null || parentId === null || parentId === data.$id)) {
        notifyListeners(data, e.source);
    }
}
/**
 * Register an window as a output the `dispatch` function can send messages to.
 *
 * @param frame
 */
function registerFrame(frame, origin, bundlerId) {
    bundlers.set(frame, origin);
    frame.postMessage({
        type: 'register-frame',
        origin: document.location.origin,
        id: bundlerId,
    }, origin);
}
if (typeof window !== 'undefined') {
    window.addEventListener('message', eventListener);
}
function reattach() {
    window.addEventListener('message', eventListener);
}

// Errors


//# sourceMappingURL=codesandbox.es5.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../../node_modules/process/browser.js")))

/***/ }),

/***/ "../common/lib/templates/helpers/is-server.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isServer = void 0;
const SERVER_TEMPLATE_NAMES = [
    'adonis',
    'apollo',
    'docusaurus',
    'ember',
    'gatsby',
    'gridsome',
    'marko',
    'mdx-deck',
    'nest',
    'next',
    'node',
    'nuxt',
    'quasar',
    'remix',
    'sapper',
    'styleguidist',
    'unibit',
    'vuepress',
];
const isServer = (template) => SERVER_TEMPLATE_NAMES.indexOf(template) !== -1;
exports.isServer = isServer;


/***/ }),

/***/ "../common/lib/utils/url-generator.js":
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
exports.v2BranchUrl = exports.dashboard = exports.githubAppInstallLink = exports.teamInviteLink = exports.blogUrl = exports.packageExamplesUrl = exports.docsUrl = exports.getSandboxId = exports.privacyUrl = exports.tosUrl = exports.csbSite = exports.searchUrl = exports.gitHubToProjectsUrl = exports.gitHubToSandboxUrl = exports.optionsToParameterizedUrl = exports.githubRepoUrl = exports.profileLikesUrl = exports.profileSandboxesUrl = exports.teamOverviewUrl = exports.exploreUrl = exports.dashboardUrl = exports.profileUrl = exports.signInVercelUrl = exports.signInUrl = exports.signInPageUrl = exports.isSafeRedirectPath = exports.forkSandboxUrl = exports.frameUrl = exports.vsCodeUrl = exports.vsCodeLauncherUrl = exports.embedUrl = exports.sandboxUrl = exports.newEditorUrlPrefix = exports.editorUrl = exports.uploadFromCliUrl = exports.newCxJSSandboxUrl = exports.newAngularSandboxUrl = exports.newSvelteSandboxUrl = exports.importFromGitHubUrl = exports.newVueSandboxUrl = exports.newPreactSandboxUrl = exports.newDojoSandboxUrl = exports.newReactTypeScriptSandboxUrl = exports.parcelSandboxUrl = exports.newSandboxUrl = exports.newSandboxWizard = exports.protocolAndHost = exports.host = exports.CSBProjectGitHubRepository = exports.gitHubRepoPattern = void 0;
exports.v2DefaultBranchUrl = void 0;
const is_server_1 = __webpack_require__("../common/lib/templates/helpers/is-server.js");
const dashboard = __importStar(__webpack_require__("../common/lib/utils/url-generator/dashboard.js"));
exports.dashboard = dashboard;
exports.gitHubRepoPattern = /(https?:\/\/)?((www.)?)github.com(\/[\w-]+){2,}/;
const gitHubPrefix = /(https?:\/\/)?((www.)?)github.com/;
const dotGit = /(\.git)$/;
const sandboxHost = {
    'https://codesandbox.io': 'https://csb.app',
    'https://codesandbox.stream': 'https://csb.dev',
};
// Second slash comes from joining URL parts
const STATIC_SITE_PROTOCOL = 'https:/';
const STATIC_SITE_DOMAIN = 'codesandbox.io';
const CSBProjectGitHubRepository = ({ owner, repo, welcome, }) => {
    const origin =  false
        ? undefined
        : 'https://codesandbox.io';
    return `${origin}/p/github/${owner}/${repo}?create=true${welcome ? '&welcome=true' : ''}`;
};
exports.CSBProjectGitHubRepository = CSBProjectGitHubRepository;
const buildEncodedUri = (strings, ...values) => strings[0] +
    values
        .map((value, i) => `${encodeURIComponent(value)}${strings[i + 1]}`)
        .join('');
const REGEX = /(?<id>\w{5,6})-(?<port>\d{1,5})\.(?<hostname>.*)/;
function getCodeSandboxDevHost(port) {
    if (typeof window === 'undefined') {
        // eslint-disable-next-line global-require
        const hostname = __webpack_require__("../../node_modules/os-browserify/browser.js").hostname();
        return `${hostname}-${port}.preview.csb.app`;
    }
    const currentUrl = location.host;
    const currentMatch = currentUrl.match(REGEX);
    if (!(currentMatch === null || currentMatch === void 0 ? void 0 : currentMatch.groups)) {
        return undefined;
    }
    const { id, hostname } = currentMatch.groups;
    if (!id || !port || !hostname) {
        return undefined;
    }
    return `${id}-${port}.${hostname}`;
}
const host = () => {
    if (false) {}
    if (true) {
        return "/sandpack".split('//')[1];
    }
    if (false) {}
    return "codesandbox.test";
};
exports.host = host;
const protocolAndHost = () => `${location.protocol}//${(0, exports.host)()}`;
exports.protocolAndHost = protocolAndHost;
const newSandboxWizard = () => `/s`;
exports.newSandboxWizard = newSandboxWizard;
const newSandboxUrl = () => `/s/new`;
exports.newSandboxUrl = newSandboxUrl;
const parcelSandboxUrl = () => `/s/vanilla`;
exports.parcelSandboxUrl = parcelSandboxUrl;
const newReactTypeScriptSandboxUrl = () => `/s/react-ts`;
exports.newReactTypeScriptSandboxUrl = newReactTypeScriptSandboxUrl;
const newDojoSandboxUrl = () => `/s/github/dojo/dojo-codesandbox-template`;
exports.newDojoSandboxUrl = newDojoSandboxUrl;
const newPreactSandboxUrl = () => `/s/preact`;
exports.newPreactSandboxUrl = newPreactSandboxUrl;
const newVueSandboxUrl = () => `/s/vue`;
exports.newVueSandboxUrl = newVueSandboxUrl;
const importFromGitHubUrl = () => `/s/github`;
exports.importFromGitHubUrl = importFromGitHubUrl;
const newSvelteSandboxUrl = () => `/s/svelte`;
exports.newSvelteSandboxUrl = newSvelteSandboxUrl;
const newAngularSandboxUrl = () => `/s/angular`;
exports.newAngularSandboxUrl = newAngularSandboxUrl;
const newCxJSSandboxUrl = () => `/s/github/codaxy/cxjs-codesandbox-template`;
exports.newCxJSSandboxUrl = newCxJSSandboxUrl;
const uploadFromCliUrl = () => `/s/cli`;
exports.uploadFromCliUrl = uploadFromCliUrl;
const sandboxGitUrl = (git) => buildEncodedUri `github/${git.username}/${git.repo}/tree/${git.branch}/` +
    git.path;
const editorUrl = () => `/s/`;
exports.editorUrl = editorUrl;
const newEditorUrlPrefix = () => `/p/`;
exports.newEditorUrlPrefix = newEditorUrlPrefix;
const sandboxUrl = (sandboxDetails) => {
    const baseUrl = sandboxDetails.isV2
        ? `${(0, exports.newEditorUrlPrefix)()}devbox/`
        : `${(0, exports.newEditorUrlPrefix)()}sandbox/`;
    const queryParams = sandboxDetails.query
        ? `?${new URLSearchParams(sandboxDetails.query).toString()}`
        : '';
    if (sandboxDetails.git) {
        const { git } = sandboxDetails;
        return `${baseUrl}${sandboxGitUrl(git)}${queryParams}`;
    }
    if (sandboxDetails.alias) {
        return `${baseUrl}${sandboxDetails.alias}${queryParams}`;
    }
    return `${baseUrl}${sandboxDetails.id}${queryParams}`;
};
exports.sandboxUrl = sandboxUrl;
const embedUrl = (sandbox) => {
    if (sandbox.git) {
        const { git } = sandbox;
        return `/embed/${sandboxGitUrl(git)}`;
    }
    if (sandbox.alias) {
        return `/embed/${sandbox.alias}`;
    }
    return `/embed/${sandbox.id}`;
};
exports.embedUrl = embedUrl;
const vsCodeLauncherUrl = (devboxId) => {
    return `${(0, exports.protocolAndHost)()}${(0, exports.newEditorUrlPrefix)()}vscode?sandboxId=${devboxId}`;
};
exports.vsCodeLauncherUrl = vsCodeLauncherUrl;
const vsCodeUrl = (devboxId) => {
    return `vscode://CodeSandbox-io.codesandbox-projects/sandbox/${devboxId}`;
};
exports.vsCodeUrl = vsCodeUrl;
const stagingFrameUrl = (shortid, path) => {
    const stagingHost = ( true
        ? "/sandpack"
        : undefined).split('//')[1];
    const segments = stagingHost.split('.');
    const first = segments.shift();
    return `${location.protocol}//${first}-${shortid}.${segments.join('.')}/${path}`;
};
const frameUrl = (sandbox, append = '', { useFallbackDomain = false, port = undefined, } = {}) => {
    var _a, _b;
    // @ts-ignore
    const usesStaticPreviewURL = ((_a = window._env_) === null || _a === void 0 ? void 0 : _a.USE_STATIC_PREVIEW) === 'true';
    // @ts-ignore
    const previewDomain = (_b = window._env_) === null || _b === void 0 ? void 0 : _b.PREVIEW_DOMAIN;
    const path = append.indexOf('/') === 0 ? append.substr(1) : append;
    if (usesStaticPreviewURL && previewDomain) {
        return `${location.protocol}//${previewDomain}/${path}`;
    }
    const templateIsServer = (0, is_server_1.isServer)(sandbox.template);
    if (false) {}
    if (false) {}
    let sHost = (0, exports.host)();
    if (`https://${sHost}` in sandboxHost &&
        !useFallbackDomain &&
        !templateIsServer) {
        sHost = sandboxHost[`https://${sHost}`].split('//')[1];
    }
    return `${location.protocol}//${sandbox.id}${port ? `-${port}` : ''}.${templateIsServer ? 'sse.' : ''}${sHost}/${path}`;
};
exports.frameUrl = frameUrl;
const forkSandboxUrl = (sandbox) => `${(0, exports.sandboxUrl)(sandbox)}/fork`;
exports.forkSandboxUrl = forkSandboxUrl;
const isSafeRedirectPath = (url) => url.startsWith('/') && !url.startsWith('//') && !url.includes('://');
exports.isSafeRedirectPath = isSafeRedirectPath;
const signInPageUrl = (redirectTo) => {
    if (!redirectTo) {
        return '/signin';
    }
    const params = new URLSearchParams({ continue: redirectTo });
    return `/signin?${params.toString()}`;
};
exports.signInPageUrl = signInPageUrl;
const signInUrl = (extraScopes = false) => '/auth/github' +
    (extraScopes ? '?scope=user:email,public_repo,workflow' : '');
exports.signInUrl = signInUrl;
const signInVercelUrl = () => '/auth/vercel';
exports.signInVercelUrl = signInVercelUrl;
const profileUrl = (username) => `/u/${username}`;
exports.profileUrl = profileUrl;
const dashboardUrl = () => `/dashboard`;
exports.dashboardUrl = dashboardUrl;
const exploreUrl = () => `/explore`;
exports.exploreUrl = exploreUrl;
const teamOverviewUrl = (teamId) => `/dashboard/teams/${teamId}`;
exports.teamOverviewUrl = teamOverviewUrl;
const profileSandboxesUrl = (username, page) => `${(0, exports.profileUrl)(username)}/sandboxes${page ? `/${page}` : ''}`;
exports.profileSandboxesUrl = profileSandboxesUrl;
const profileLikesUrl = (username, page) => `${(0, exports.profileUrl)(username)}/likes${page ? `/${page}` : ''}`;
exports.profileLikesUrl = profileLikesUrl;
const githubRepoUrl = ({ repo, branch, username, path, }) => buildEncodedUri `https://github.com/${username}/${repo}/tree/${branch}/` +
    path;
exports.githubRepoUrl = githubRepoUrl;
const optionsToParameterizedUrl = (options) => {
    const keyValues = Object.keys(options)
        .sort()
        .filter(a => options[a])
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(options[key])}`)
        .join('&');
    return keyValues ? `?${keyValues}` : '';
};
exports.optionsToParameterizedUrl = optionsToParameterizedUrl;
const gitHubToSandboxUrl = (githubUrl) => githubUrl.replace(gitHubPrefix, '/s/github').replace(dotGit, '');
exports.gitHubToSandboxUrl = gitHubToSandboxUrl;
const gitHubToProjectsUrl = (githubUrl) => githubUrl.replace(gitHubPrefix, '/p/github').replace(dotGit, '');
exports.gitHubToProjectsUrl = gitHubToProjectsUrl;
const searchUrl = (query) => `/search${query ? `?query=${query}` : ''}`;
exports.searchUrl = searchUrl;
const csbSite = () => [STATIC_SITE_PROTOCOL, STATIC_SITE_DOMAIN].join('/');
exports.csbSite = csbSite;
const tosUrl = () => `${(0, exports.csbSite)()}/legal/terms`;
exports.tosUrl = tosUrl;
const privacyUrl = () => `${(0, exports.csbSite)()}/legal/privacy`;
exports.privacyUrl = privacyUrl;
function getSandboxId() {
    const csbHost = "/sandpack";
    if (false) {}
    if (false) {}
    let result;
    [csbHost, sandboxHost[csbHost]].filter(Boolean).forEach(tryHost => {
        const hostRegex = tryHost.replace(/https?:\/\//, '').replace(/\./g, '\\.');
        const sandboxRegex = new RegExp(`(.*)\\.${hostRegex}`);
        const matches = document.location.host.match(sandboxRegex);
        if (matches) {
            result = matches[1];
        }
    });
    if (!result) {
        throw new Error(`Can't detect sandbox ID from the current URL`);
    }
    return result;
}
exports.getSandboxId = getSandboxId;
const docsUrl = (path = '') => `${(0, exports.csbSite)()}/docs${path}`;
exports.docsUrl = docsUrl;
const packageExamplesUrl = (packageName) => `${(0, exports.csbSite)()}/examples/package/${packageName}`;
exports.packageExamplesUrl = packageExamplesUrl;
const blogUrl = (path = '') => `${(0, exports.csbSite)()}/blog${path}`;
exports.blogUrl = blogUrl;
const teamInviteLink = (inviteToken) => `${(0, exports.protocolAndHost)()}/invite/${inviteToken}`;
exports.teamInviteLink = teamInviteLink;
const githubAppInstallLink = () => {
    return `${(0, exports.protocolAndHost)()}/auth/github/app-install`;
};
exports.githubAppInstallLink = githubAppInstallLink;
// This function handles all the scenarios of v2 branch editor urls
// It is not exported from the package to avoid miss-using it
const v2EditorBranchUrl = ({ owner, repoName, branchName, workspaceId, createDraftBranch, importFlag, source, }) => {
    const queryString = new URLSearchParams(Object.assign(Object.assign(Object.assign(Object.assign({}, (workspaceId ? { workspaceId } : {})), (createDraftBranch ? { create: 'true' } : {})), (importFlag ? { import: 'true' } : {})), (source ? { utm_source: source } : {}))).toString();
    return `${(0, exports.newEditorUrlPrefix)()}github/${owner}/${repoName}${branchName ? '/' + branchName : ''}${queryString ? '?' + queryString : ''}`;
};
const v2BranchUrl = (params) => {
    return v2EditorBranchUrl(params);
};
exports.v2BranchUrl = v2BranchUrl;
const v2DefaultBranchUrl = (params) => {
    return v2EditorBranchUrl(params);
};
exports.v2DefaultBranchUrl = v2DefaultBranchUrl;


/***/ }),

/***/ "../common/lib/utils/url-generator/dashboard.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createWorkspaceUrl = exports.upgradeUrl = exports.search = exports.portalRelativePath = exports.portalVMUsage = exports.portalVMSettings = exports.portalPermissions = exports.portalRegistry = exports.portalOverview = exports.liked = exports.shared = exports.deleted = exports.getStarted = exports.recent = exports.templates = exports.syncedSandboxes = exports.repository = exports.repositories = exports.myContributions = exports.drafts = exports.sandboxes = exports.ALL_SANDBOXES_URL_PREFIX = exports.DASHBOARD_URL_PREFIX = void 0;
exports.DASHBOARD_URL_PREFIX = '/dashboard';
exports.ALL_SANDBOXES_URL_PREFIX = `${exports.DASHBOARD_URL_PREFIX}/sandboxes`;
function appendTeamIdQueryParam(url, teamId) {
    if (teamId) {
        return `${url}?workspace=${teamId}`;
    }
    return url;
}
function sanitizePath(path) {
    return path
        .split('/')
        .map(p => p.split(' ').map(encodeURIComponent).join(' '))
        .join('/');
}
const sandboxes = (path, teamId) => appendTeamIdQueryParam(`${exports.ALL_SANDBOXES_URL_PREFIX}${sanitizePath(path)}`, teamId);
exports.sandboxes = sandboxes;
const drafts = (teamId) => appendTeamIdQueryParam(`${exports.DASHBOARD_URL_PREFIX}/drafts`, teamId);
exports.drafts = drafts;
const myContributions = (teamId) => appendTeamIdQueryParam(`${exports.DASHBOARD_URL_PREFIX}/my-contributions`, teamId);
exports.myContributions = myContributions;
const repositories = (teamId) => appendTeamIdQueryParam(`${exports.DASHBOARD_URL_PREFIX}/repositories`, teamId);
exports.repositories = repositories;
const repository = ({ owner, name, teamId, }) => appendTeamIdQueryParam(`${exports.DASHBOARD_URL_PREFIX}/repositories/github/${owner}/${name}`, teamId);
exports.repository = repository;
const syncedSandboxes = (teamId) => appendTeamIdQueryParam(`${exports.DASHBOARD_URL_PREFIX}/synced-sandboxes`, teamId);
exports.syncedSandboxes = syncedSandboxes;
const templates = (teamId) => appendTeamIdQueryParam(`${exports.DASHBOARD_URL_PREFIX}/templates`, teamId);
exports.templates = templates;
const recent = (teamId, extraParams) => {
    let recentUrl = appendTeamIdQueryParam(`${exports.DASHBOARD_URL_PREFIX}/recent`, teamId);
    if (extraParams && Object.keys(extraParams).length > 0) {
        const params = new URLSearchParams(extraParams);
        if (recentUrl.includes('?')) {
            recentUrl += '&';
        }
        else {
            recentUrl += '?';
        }
        recentUrl += params.toString();
    }
    return recentUrl;
};
exports.recent = recent;
const getStarted = (teamId) => appendTeamIdQueryParam(`${exports.DASHBOARD_URL_PREFIX}/get-started`, teamId);
exports.getStarted = getStarted;
const deleted = (teamId) => appendTeamIdQueryParam(`${exports.DASHBOARD_URL_PREFIX}/deleted`, teamId);
exports.deleted = deleted;
const shared = (teamId) => appendTeamIdQueryParam(`${exports.DASHBOARD_URL_PREFIX}/shared`, teamId);
exports.shared = shared;
const liked = (teamId) => appendTeamIdQueryParam(`${exports.DASHBOARD_URL_PREFIX}/liked`, teamId);
exports.liked = liked;
const portalBaseUrl = () => {
    const origin = "https://codesandbox.io" || false;
    return `${origin}/t`;
};
const portalOverview = (teamId, params) => {
    if (!teamId) {
        return `${portalBaseUrl()}/overview`;
    }
    const url = appendTeamIdQueryParam(`${portalBaseUrl()}/overview`, teamId);
    const searchParams = new URLSearchParams(params);
    return `${url}&${searchParams.toString()}`;
};
exports.portalOverview = portalOverview;
const portalRegistry = (teamId) => appendTeamIdQueryParam(`${portalBaseUrl()}/registry`, teamId);
exports.portalRegistry = portalRegistry;
const portalPermissions = (teamId) => appendTeamIdQueryParam(`${portalBaseUrl()}/permissions`, teamId);
exports.portalPermissions = portalPermissions;
const portalVMSettings = (teamId) => appendTeamIdQueryParam(`${portalBaseUrl()}/vm_settings`, teamId);
exports.portalVMSettings = portalVMSettings;
const portalVMUsage = (teamId) => appendTeamIdQueryParam(`${portalBaseUrl()}/usage`, teamId);
exports.portalVMUsage = portalVMUsage;
// This is used separately for checkout endpoints where the success/cancel paths need to be relative
const portalRelativePath = (teamId) => appendTeamIdQueryParam(`/t/overview`, teamId);
exports.portalRelativePath = portalRelativePath;
const search = (query, teamId) => {
    let searchUrl = appendTeamIdQueryParam(`${exports.DASHBOARD_URL_PREFIX}/search`, teamId);
    if (searchUrl.includes('?')) {
        searchUrl += '&';
    }
    else {
        searchUrl += '?';
    }
    searchUrl += `query=${query}`;
    return searchUrl;
};
exports.search = search;
const upgradeUrl = ({ workspaceId, source, } = {}) => {
    const searchQuery = new URLSearchParams({});
    if (workspaceId) {
        searchQuery.set('workspace', workspaceId);
    }
    if (source) {
        searchQuery.set('utm_source', source);
    }
    const queryString = searchQuery.toString();
    return queryString ? `/upgrade?${queryString}` : '/upgrade';
};
exports.upgradeUrl = upgradeUrl;
const createWorkspaceUrl = ({ workspaceId, }) => {
    const searchQuery = new URLSearchParams();
    if (workspaceId) {
        searchQuery.set('workspace', workspaceId);
    }
    const queryString = searchQuery.toString();
    return queryString ? `/create-workspace?${queryString}` : '/create-workspace';
};
exports.createWorkspaceUrl = createWorkspaceUrl;


/***/ }),

/***/ "../sandbox-hooks/preview-secret.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("../common/lib/utils/url-generator.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _urlGenerator) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.setPreviewSecret = _exports.requestPreviewSecretFromApp = _exports.listenForPreviewSecret = _exports.getPreviewSecret = void 0;

  const PREVIEW_SECRET_COOKIE_NAME = 'csb_sandbox_secret';

  const getPreviewSecret = () =>
  document.cookie.replace(
    new RegExp("(?:(?:^|.*;\\s*)".concat(
      PREVIEW_SECRET_COOKIE_NAME, "\\s*\\=\\s*([^;]*).*$)|^.*$")
    ),
    '$1'
  );_exports.getPreviewSecret = getPreviewSecret;

  const setPreviewSecret = (secret) => {
    if (secret === null) {
      return;
    }

    const cookieValue = getPreviewSecret();
    if (
    cookieValue && !secret ||
    secret && !cookieValue ||
    cookieValue !== secret)
    {
      if (secret) {
        document.cookie = "".concat(PREVIEW_SECRET_COOKIE_NAME, "=").concat(secret, ";samesite=none;secure;partitioned;");

        setTimeout(() => {
          location.reload();
        }, 1000);
      } else {
        document.cookie = "".concat(PREVIEW_SECRET_COOKIE_NAME, "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;");
      }
    }
  };_exports.setPreviewSecret = setPreviewSecret;

  const listenForPreviewSecret = () => {
    const listener = (data) => {
      if (data.data && data.data.$type === 'preview-secret') {const
        previewSecret = data.data.previewSecret;
        setPreviewSecret(previewSecret);
      }
    };

    window.addEventListener('message', listener);

    return () => {
      window.removeEventListener('message', listener);
    };
  };_exports.listenForPreviewSecret = listenForPreviewSecret;

  function getPopupOffset(_ref) {let width = _ref.width,height = _ref.height;
    const wLeft = window.screenLeft ? window.screenLeft : window.screenX;
    const wTop = window.screenTop ? window.screenTop : window.screenY;

    const left = wLeft + window.innerWidth / 2 - width / 2;
    const top = wTop + window.innerHeight / 2 - height / 2;

    return { top, left };
  }

  function getPopupSize() {
    return { width: 1020, height: 618 };
  }

  function getPopupDimensions() {const _getPopupSize =
      getPopupSize(),width = _getPopupSize.width,height = _getPopupSize.height;const _getPopupOffset =
      getPopupOffset({ width, height }),top = _getPopupOffset.top,left = _getPopupOffset.left;

    return "width=".concat(width, ",height=").concat(height, ",top=").concat(top, ",left=").concat(left);
  }

  /**
   * This helper function is purely there to also work when we're building
   * for SSE, which means that the env vars are not set and we thus don't
   * know the host.
   */
  function getProtocolAndHostWithSSE() {
    if (true) {
      return (0, _urlGenerator.protocolAndHost)();
    }

    if (document.location.host.endsWith('.stream')) {
      return 'https://codesandbox.stream';
    }

    return 'https://codesandbox.io';
  }

  const requestPreviewSecretFromApp = (sandboxId) => {
    const host = getProtocolAndHostWithSSE();
    const popup = window.open(
      host + '/auth/sandbox/' + sandboxId,
      name, "scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no, ".concat(
        getPopupDimensions())
    );

    setInterval(() => {
      popup.postMessage({ $type: 'request-preview-secret' }, host);
    }, 500);

    const listener = (e) => {
      if (e.data && e.data.$type === 'preview-secret') {
        setPreviewSecret(e.data.previewSecret);
        window.removeEventListener('message', listener);

        popup.close();
      }
    };
    window.addEventListener('message', listener);
  };_exports.requestPreviewSecretFromApp = requestPreviewSecretFromApp;});

/***/ })

}]);
//# sourceMappingURL=default~sandbox~sandbox-startup.98e8a4c13.chunk.js.map