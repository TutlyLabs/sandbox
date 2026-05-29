this["webpackChunk"](["babel-plugin-jsx-pragmatic"],{

/***/ "../../node_modules/babel-plugin-jsx-pragmatic/jsx-pragmatic.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Insert code to load a module when JSX is detected.
 * This is supposed to load a module corresponding to the `pragma` option of
 * the JSX transform.
 */

module.exports = function jsxPragmatic (babel) {
  var
    t = babel.types,
    visitor = {};

  function getPragmaImport (state) {
    return t.importDeclaration(
      [t.importSpecifier(
        t.identifier(state.opts.import),
        t.identifier(state.opts.export || "default")
      )],
      t.stringLiteral(state.opts.module)
    );
  }
  // getPragmaImport

  visitor = {
    Program: {
      exit: function (path, state) {
        if (! state.get('jsxDetected')) return;

        // Apparently it's now safe to do this even if Program begins with
        // directives.
        path.unshiftContainer('body', getPragmaImport(state));
      },
      // exit
    },
    // Program

    // It seems pretty hokey that this'll work even if JSX has already been
    // transformed, but apparently that's the basis for the whole plugin
    // architecture for babel@6, so I'm rolling with it and maybe it'll make
    // more sense to me once I understand it better.
    JSXElement: function (path, state) {
      state.set('jsxDetected', true);
    },
    // JSXElement
  };

  return {
    pre: function () {
      if (! (this.opts.module && this.opts.import)) {
        throw new Error("babel-plugin-jsx-pragmatic: You must specify `module` and `import`");
      }
    },
    inherits: __webpack_require__("../../node_modules/babel-plugin-syntax-jsx/lib/index.js"),
    visitor: visitor,
  };
};
// jsxPragmatic


/***/ }),

/***/ "../../node_modules/babel-plugin-syntax-jsx/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function () {
  return {
    manipulateOptions: function manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push("jsx");
    }
  };
};

module.exports = exports["default"];

/***/ })

});
//# sourceMappingURL=babel-plugin-jsx-pragmatic.babel-transpiler.6f6a33cb.worker.js.map