(this["csbJsonP"] = this["csbJsonP"] || []).push([[6],{

/***/ "../../node_modules/@vue/compiler-sfc/dist sync recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../node_modules/@vue/compiler-sfc/dist sync recursive";

/***/ }),

/***/ "../vue3-browser-compiler/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("../../node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__("../../node_modules/@vue/compiler-sfc/dist/compiler-sfc.esm-browser.js"), exports);


/***/ }),

/***/ "../vue3-transpiler/lib/cssModules.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return genCSSModulesCode; });
function genCSSModulesCode(id, index, request, moduleName, needsHotReload) {
    const styleVar = `style${index}`;
    let code = `\nimport ${styleVar} from ${request}`;
    // inject variable
    const name = typeof moduleName === 'string' ? moduleName : '$style';
    code += `\ncssModules["${name}"] = ${styleVar}`;
    if (needsHotReload) {
        code += `
if (module.hot) {
  module.hot.accept(${request}, () => {
    cssModules["${name}"] = ${styleVar}
    __VUE_HMR_RUNTIME__.rerender("${id}")
  })
}`;
    }
    return code;
}


/***/ }),

/***/ "../vue3-transpiler/lib/formatError.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatError; });
/* harmony import */ var vue3_browser_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../vue3-browser-compiler/lib/index.js");
/* harmony import */ var vue3_browser_compiler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue3_browser_compiler__WEBPACK_IMPORTED_MODULE_0__);

function formatError(err, source, file) {
    const loc = err.loc;
    if (!loc) {
        return;
    }
    const locString = `:${loc.start.line}:${loc.start.column}`;
    const filePath = `at ${file}${locString}`;
    const codeframe = Object(vue3_browser_compiler__WEBPACK_IMPORTED_MODULE_0__["generateCodeFrame"])(source, loc.start.offset, loc.end.offset);
    err.message = `\n${`VueCompilerError: ${err.message}`}\n${filePath}\n${codeframe}\n`;
}


/***/ }),

/***/ "../vue3-transpiler/lib/hotReload.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return genHotReloadCode; });
// __VUE_HMR_RUNTIME__ is injected to global scope by @vue/runtime-core
function genHotReloadCode(id, templateRequest) {
    return `
/* hot reload */
if (module.hot) {
  script.__hmrId = "${id}"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('${id}', script)) {
    api.reload('${id}', script)
  }
  ${templateRequest ? genTemplateHotReloadCode(id, templateRequest) : ''}
}
`;
}
function genTemplateHotReloadCode(id, request) {
    return `
  module.hot.accept(${request}, () => {
    api.rerender('${id}', render)
  })
`;
}


/***/ }),

/***/ "../vue3-transpiler/lib/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loader; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hash_sum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../vue3-transpiler/node_modules/hash-sum/hash-sum.js");
/* harmony import */ var hash_sum__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hash_sum__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sandpack_core_lib_transpiler_utils_loader_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../sandpack-core/lib/transpiler/utils/loader-utils/index.js");
/* harmony import */ var vue3_browser_compiler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../vue3-browser-compiler/lib/index.js");
/* harmony import */ var vue3_browser_compiler__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue3_browser_compiler__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../vue3-transpiler/lib/select.js");
/* harmony import */ var _hotReload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../vue3-transpiler/lib/hotReload.js");
/* harmony import */ var _cssModules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../vue3-transpiler/lib/cssModules.js");
/* harmony import */ var _formatError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../vue3-transpiler/lib/formatError.js");
/* harmony import */ var _transpilers_template_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../vue3-transpiler/lib/transpilers/template-loader.js");
/* harmony import */ var _transpilers_style_post_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../vue3-transpiler/lib/transpilers/style-post-loader.js");











querystring__WEBPACK_IMPORTED_MODULE_1___default.a.escape = encodeURIComponent;
function loader(source, loaderContext) {
    function getLoaderQuery(lang, vueQuery) {
        // !style-loader!css-loader
        const query = lang
            ? loaderContext.getLoaderQuery({
                path: `test.${lang}`,
                code: '',
            })
            : '';
        return `${query}!vue-loader${vueQuery}`;
    }
    const stringifyRequest = (r) => sandpack_core_lib_transpiler_utils_loader_utils__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].stringifyRequest(loaderContext, r);
    const { target, sourceMap, resourceQuery } = loaderContext;
    const rootContext = '/';
    const resourcePath = loaderContext.path;
    const rawQuery = resourceQuery.slice(1);
    const incomingQuery = querystring__WEBPACK_IMPORTED_MODULE_1___default.a.parse(rawQuery);
    const options = (sandpack_core_lib_transpiler_utils_loader_utils__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].getOptions(loaderContext) ||
        {});
    const isServer = target === 'node';
    const isProduction = false;
    const { descriptor, errors } = Object(vue3_browser_compiler__WEBPACK_IMPORTED_MODULE_4__["parse"])(source, {
        filename: resourcePath,
        sourceMap,
    });
    if (errors.length) {
        errors.forEach(err => {
            Object(_formatError__WEBPACK_IMPORTED_MODULE_8__[/* formatError */ "a"])(err, source, resourcePath);
            loaderContext.emitError(err);
        });
        return { transpiledCode: `` };
    }
    // if the query has a type field, this is a language block request
    // e.g. foo.vue?type=template&id=xxxxx
    // and we will return early
    if (incomingQuery.type) {
        return Object(_select__WEBPACK_IMPORTED_MODULE_5__[/* selectBlock */ "a"])(descriptor, incomingQuery);
    }
    // module id for scoped CSS & hot-reload
    const rawShortFilePath = path__WEBPACK_IMPORTED_MODULE_0___default.a
        .relative(rootContext || process.cwd(), resourcePath)
        .replace(/^(\.\.[/\\])+/, '');
    const shortFilePath = rawShortFilePath.replace(/\\/g, '/') + resourceQuery;
    const id = hash_sum__WEBPACK_IMPORTED_MODULE_2___default()(isProduction ? shortFilePath + '\n' + source : shortFilePath);
    // feature information
    const hasScoped = descriptor.styles.some(s => s.scoped);
    const needsHotReload = !isServer &&
        !isProduction &&
        !!(descriptor.script || descriptor.template) &&
        options.hotReload !== false;
    // script
    let script;
    let scriptImport = `const script = {}`;
    if (descriptor.script || descriptor.scriptSetup) {
        try {
            // eslint-disable-next-line no-multi-assign
            script = descriptor.scriptCompiled = Object(vue3_browser_compiler__WEBPACK_IMPORTED_MODULE_4__["compileScript"])(descriptor, {
                babelParserPlugins: options.babelParserPlugins,
                id,
            });
        }
        catch (e) {
            loaderContext.emitError(e);
        }
        if (script) {
            const src = script.src || resourcePath;
            const attrsQuery = attrsToQuery(script.attrs, 'js');
            const query = `?vue&type=script${attrsQuery}${resourceQuery}`;
            const importers = getLoaderQuery(script.lang || 'js', query);
            const scriptRequest = stringifyRequest(importers + '!' + src);
            scriptImport =
                `import script from ${scriptRequest}\n` +
                    // support named exports
                    `export * from ${scriptRequest}`;
        }
    }
    // template
    let templateImport = ``;
    let templateRequest;
    const renderFnName = isServer ? `ssrRender` : `render`;
    if (descriptor.template) {
        const src = descriptor.template.src || resourcePath;
        const idQuery = `&id=${id}`;
        const scopedQuery = hasScoped ? `&scoped=true` : ``;
        const attrsQuery = attrsToQuery(descriptor.template.attrs);
        const bindingsQuery = (script === null || script === void 0 ? void 0 : script.bindings)
            ? `&bindings=${JSON.stringify(script.bindings)}`
            : ``;
        const query = `?vue&type=template${idQuery}${scopedQuery}${attrsQuery}${bindingsQuery}${resourceQuery}`;
        const importers = `!babel-loader!${_transpilers_template_loader__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].name}${getLoaderQuery(undefined, query)}`;
        templateRequest = stringifyRequest(importers + '!' + src);
        templateImport = `import { ${renderFnName} } from ${templateRequest};`;
    }
    // styles
    let stylesCode = ``;
    let hasCSSModules = false;
    if (descriptor.styles.length) {
        descriptor.styles.forEach((style, i) => {
            const src = style.src || resourcePath;
            const attrsQuery = attrsToQuery(style.attrs, 'css');
            // make sure to only pass id when necessary so that we don't inject
            // duplicate tags when multiple components import the same css file
            const idQuery = style.scoped ? `&id=${id}` : ``;
            const query = `?vue&type=style&index=${i}${idQuery}${attrsQuery}${resourceQuery}`;
            const importers = getLoaderQuery(style.lang || 'css', query);
            const styleRequest = stringifyRequest(
            // Add the vue-style-post-loader after style-loader
            importers.replace(/!style-loader(.*?)!/, `!style-loader$1!${_transpilers_style_post_loader__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].name}!`) +
                '!' +
                src);
            if (style.module) {
                if (!hasCSSModules) {
                    stylesCode += `\nconst cssModules = script.__cssModules = {}`;
                    hasCSSModules = true;
                }
                stylesCode += Object(_cssModules__WEBPACK_IMPORTED_MODULE_7__[/* genCSSModulesCode */ "a"])(id, i, styleRequest, style.module, needsHotReload);
            }
            else {
                stylesCode += `\nimport ${styleRequest}`;
            }
            // TODO SSR critical CSS collection
        });
    }
    let code = [
        templateImport,
        scriptImport,
        stylesCode,
        templateImport ? `script.${renderFnName} = ${renderFnName}` : ``,
    ]
        .filter(Boolean)
        .join('\n');
    // attach scope Id for runtime use
    if (hasScoped) {
        code += `\nscript.__scopeId = "data-v-${id}"`;
    }
    if (needsHotReload) {
        code += Object(_hotReload__WEBPACK_IMPORTED_MODULE_6__[/* genHotReloadCode */ "a"])(id, templateRequest);
    }
    // Expose filename. This is used by the devtools and Vue runtime warnings.
    if (!isProduction) {
        // Expose the file's full path in development, so that it can be opened
        // from the devtools.
        code += `\nscript.__file = ${JSON.stringify(rawShortFilePath.replace(/\\/g, '/'))}`;
    }
    else if (options.exposeFilename) {
        // Libraries can opt-in to expose their components' filenames in production builds.
        // For security reasons, only expose the file's basename in production.
        code += `\nscript.__file = ${JSON.stringify(path__WEBPACK_IMPORTED_MODULE_0___default.a.basename(resourcePath))}`;
    }
    // custom blocks
    if (descriptor.customBlocks && descriptor.customBlocks.length) {
        code += `\n/* custom blocks */\n`;
        code +=
            descriptor.customBlocks
                .map((block, i) => {
                const src = block.attrs.src || resourcePath;
                const attrsQuery = attrsToQuery(block.attrs);
                const blockTypeQuery = `&blockType=${querystring__WEBPACK_IMPORTED_MODULE_1___default.a.escape(block.type)}`;
                const issuerQuery = block.attrs.src
                    ? `&issuerPath=${querystring__WEBPACK_IMPORTED_MODULE_1___default.a.escape(resourcePath)}`
                    : '';
                const query = `?vue&type=custom&index=${i}${blockTypeQuery}${issuerQuery}${attrsQuery}${resourceQuery}`;
                return (`import block${i} from ${stringifyRequest(src + query)}\n` +
                    `if (typeof block${i} === 'function') block${i}(script)`);
            })
                .join(`\n`) + `\n`;
    }
    // finalize
    code += `\n\nexport default script`;
    return { transpiledCode: code };
}
// these are built-in query parameters so should be ignored
// if the user happen to add them as attrs
const ignoreList = ['id', 'index', 'src', 'type'];
function attrsToQuery(attrs, langFallback) {
    let query = ``;
    for (const name in attrs) {
        const value = attrs[name];
        if (!ignoreList.includes(name)) {
            query += `&${querystring__WEBPACK_IMPORTED_MODULE_1___default.a.escape(name)}=${value ? querystring__WEBPACK_IMPORTED_MODULE_1___default.a.escape(String(value)) : ``}`;
        }
    }
    if (langFallback && !(`lang` in attrs)) {
        query += `&lang=${langFallback}`;
    }
    return query;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../../node_modules/process/browser.js")))

/***/ }),

/***/ "../vue3-transpiler/lib/select.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectBlock; });
function convertSourceMapToInline(sourceMap, prefix = '//#', postfix = '') {
    if (!sourceMap) {
        return '';
    }
    return `\n${prefix} sourceMappingURL=data:application/json;charset=utf-8;base64,${Buffer.from(JSON.stringify(sourceMap), 'utf-8').toString('base64')}${postfix}`;
}
function selectBlock(descriptor, query) {
    // template
    if (query.type === `template`) {
        // if we are receiving a query with type it can only come from a *.vue file
        // that contains that block, so the block is guaranteed to exist.
        const template = descriptor.template;
        // Deletion `template` tag
        if (!template) {
            return { transpiledCode: '' };
        }
        return {
            transpiledCode: template.content,
            sourceMap: template.map,
        };
    }
    // script
    if (query.type === `script`) {
        // FIXME: #1723
        // I still don't know when & why `scriptCompiled` would be empty
        // need to work out a better fix later
        const script = descriptor.scriptCompiled || descriptor.script;
        // Deletion `script` tag
        if (!script) {
            return { transpiledCode: '' };
        }
        return {
            transpiledCode: script.content + convertSourceMapToInline(script.map),
            sourceMap: script.map,
        };
    }
    // styles
    if (query.type === `style` && query.index != null) {
        const style = descriptor.styles[Number(query.index)];
        // Deletion `style` tag
        if (!style) {
            return { transpiledCode: '' };
        }
        return {
            transpiledCode: style.content + convertSourceMapToInline(style.map, '/*#', '*/'),
            sourceMap: style.map,
        };
    }
    // custom
    if (query.type === 'custom' && query.index != null) {
        const block = descriptor.customBlocks[Number(query.index)];
        return { transpiledCode: block.content, sourceMap: block.map };
    }
    return { transpiledCode: '' };
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../../node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../vue3-transpiler/lib/transpilers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "stylePostLoader", function() { return /* reexport */ style_post_loader["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "vueLoader", function() { return /* reexport */ vue_loader; });
__webpack_require__.d(__webpack_exports__, "templateLoader", function() { return /* reexport */ template_loader["a" /* default */]; });

// EXTERNAL MODULE: ../vue3-transpiler/lib/transpilers/style-post-loader.js + 1 modules
var style_post_loader = __webpack_require__("../vue3-transpiler/lib/transpilers/style-post-loader.js");

// EXTERNAL MODULE: ../vue3-transpiler/lib/transpilers/template-loader.js + 1 modules
var template_loader = __webpack_require__("../vue3-transpiler/lib/transpilers/template-loader.js");

// EXTERNAL MODULE: ../sandpack-core/lib/index.js + 17 modules
var lib = __webpack_require__("../sandpack-core/lib/index.js");

// EXTERNAL MODULE: ../vue3-transpiler/lib/index.js
var vue3_transpiler_lib = __webpack_require__("../vue3-transpiler/lib/index.js");

// CONCATENATED MODULE: ../vue3-transpiler/lib/transpilers/vue-loader.js


// This is the most advanced compiler, I wanted to get it working in sync first,
// but will eventually move to async.
class vue_loader_VueV3Transpiler extends lib["c" /* Transpiler */] {
    constructor() {
        super('vue-loader');
    }
    doTranspilation(code, loaderContext) {
        return Object(vue3_transpiler_lib["a" /* default */])(code, loaderContext);
    }
}
const transpiler = new vue_loader_VueV3Transpiler();

/* harmony default export */ var vue_loader = (transpiler);

// CONCATENATED MODULE: ../vue3-transpiler/lib/transpilers/index.js






/***/ }),

/***/ "../vue3-transpiler/lib/transpilers/style-post-loader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: VueV3StylePostLoader

// EXTERNAL MODULE: ../sandpack-core/lib/index.js + 17 modules
var lib = __webpack_require__("../sandpack-core/lib/index.js");

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/querystring-es3/index.js
var querystring_es3 = __webpack_require__("../../node_modules/querystring-es3/index.js");
var querystring_es3_default = /*#__PURE__*/__webpack_require__.n(querystring_es3);

// EXTERNAL MODULE: ../vue3-browser-compiler/lib/index.js
var vue3_browser_compiler_lib = __webpack_require__("../vue3-browser-compiler/lib/index.js");

// CONCATENATED MODULE: ../vue3-transpiler/lib/stylePostLoader.js


// This is a post loader that handles scoped CSS transforms.
// Injected right before css-loader by the global pitcher (../pitch.js)
// for any <style scoped> selection requests initiated from within vue files.
const StylePostLoader = function (source, loaderContext) {
    const inMap = undefined;
    const query = querystring_es3_default.a.parse(loaderContext.resourceQuery.slice(1));
    const { code, errors } = Object(vue3_browser_compiler_lib["compileStyle"])({
        source: source,
        filename: loaderContext.path,
        id: `data-v-${query.id}`,
        map: inMap,
        scoped: !!query.scoped,
        trim: true,
    });
    if (errors.length) {
        throw errors[0];
    }
    else {
        return {
            transpiledCode: code,
        };
    }
};
/* harmony default export */ var stylePostLoader = (StylePostLoader);

// CONCATENATED MODULE: ../vue3-transpiler/lib/transpilers/style-post-loader.js


// This is the most advanced compiler, I wanted to get it working in sync first,
// but will eventually move to async.
class style_post_loader_VueV3StylePostLoader extends lib["c" /* Transpiler */] {
    constructor() {
        super('vue-style-post-loader');
    }
    doTranspilation(code, loaderContext) {
        return stylePostLoader(code, loaderContext);
    }
}
const transpiler = new style_post_loader_VueV3StylePostLoader();

/* harmony default export */ var style_post_loader = __webpack_exports__["a"] = (transpiler);


/***/ }),

/***/ "../vue3-transpiler/lib/transpilers/template-loader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: VueV3TemplateLoader

// EXTERNAL MODULE: ../sandpack-core/lib/index.js + 17 modules
var lib = __webpack_require__("../sandpack-core/lib/index.js");

// EXTERNAL MODULE: /Users/uday/Desktop/projects/codesandbox-client/node_modules/querystring-es3/index.js
var querystring_es3 = __webpack_require__("../../node_modules/querystring-es3/index.js");
var querystring_es3_default = /*#__PURE__*/__webpack_require__.n(querystring_es3);

// EXTERNAL MODULE: ../sandpack-core/lib/transpiler/utils/loader-utils/index.js + 4 modules
var loader_utils = __webpack_require__("../sandpack-core/lib/transpiler/utils/loader-utils/index.js");

// EXTERNAL MODULE: ../vue3-browser-compiler/lib/index.js
var vue3_browser_compiler_lib = __webpack_require__("../vue3-browser-compiler/lib/index.js");

// EXTERNAL MODULE: ../vue3-transpiler/lib/formatError.js
var formatError = __webpack_require__("../vue3-transpiler/lib/formatError.js");

// CONCATENATED MODULE: ../vue3-transpiler/lib/templateLoader.js




// Loader that compiles raw template into JavaScript functions.
// This is injected by the global pitcher (../pitch) for template
// selection requests initiated from vue files.
function TemplateLoader(source, loaderContext) {
    // eslint-disable-next-line no-param-reassign
    source = String(source);
    const inMap = undefined;
    // although this is not the main vue-loader, we can get access to the same
    // vue-loader options because we've set an ident in the plugin and used that
    // ident to create the request for this loader in the pitcher.
    const options = (loader_utils["a" /* default */].getOptions(loaderContext) ||
        {});
    const query = querystring_es3_default.a.parse(loaderContext.resourceQuery.slice(1));
    const id = `${query.id}`;
    const scopeId = query.scoped ? `data-v-${id}` : null;
    let compiler;
    if (typeof options.compiler === 'string') {
        // compiler = require(options.compiler);
        throw new Error("Setting compiler via string doesn't work in CodeSandbox");
    }
    else {
        compiler = options.compiler;
    }
    const compiled = Object(vue3_browser_compiler_lib["compileTemplate"])({
        id,
        source,
        inMap,
        filename: loaderContext.path,
        ssr: loaderContext.target === 'node',
        compiler,
        compilerOptions: Object.assign(Object.assign({}, options.compilerOptions), { scopeId, bindingMetadata: typeof query.bindings === 'string' ? JSON.parse(query.bindings) : {} }),
        transformAssetUrls: options.transformAssetUrls || true,
    });
    // tips
    if (compiled.tips.length) {
        compiled.tips.forEach(tip => {
            const warning = {
                message: tip,
                fileName: loaderContext.path,
                source: 'Vue Template Compiler',
                severity: 'notice',
                lineNumber: 0,
                columnNumber: 0,
            };
            loaderContext.emitWarning(warning);
        });
    }
    // errors
    if (compiled.errors && compiled.errors.length) {
        compiled.errors.forEach(err => {
            if (typeof err === 'string') {
                loaderContext.emitError(new Error(err));
            }
            else {
                Object(formatError["a" /* formatError */])(err, 
                // @ts-ignore
                inMap ? inMap.sourcesContent[0] : source, loaderContext.path);
                loaderContext.emitError(err);
            }
        });
    }
    const { code, map } = compiled;
    // loaderContext.callback(null, code, map);
    return { transpiledCode: code, sourceMap: map };
}
/* harmony default export */ var templateLoader = (TemplateLoader);

// CONCATENATED MODULE: ../vue3-transpiler/lib/transpilers/template-loader.js


class template_loader_VueV3TemplateLoader extends lib["c" /* Transpiler */] {
    constructor() {
        super('vue-template-loader');
    }
    doTranspilation(code, loaderContext) {
        return templateLoader(code, loaderContext);
    }
}
const transpiler = new template_loader_VueV3TemplateLoader();

/* harmony default export */ var template_loader = __webpack_exports__["a"] = (transpiler);


/***/ })

}]);
//# sourceMappingURL=6.b064392c1.chunk.js.map