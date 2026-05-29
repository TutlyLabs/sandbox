(this["csbJsonP"] = this["csbJsonP"] || []).push([["vendors~vue-style-compiler"],{

/***/ "../../node_modules/flatten/index.js":
/***/ (function(module, exports) {

module.exports = function flatten(list, depth) {
  depth = (typeof depth == 'number') ? depth : Infinity;

  if (!depth) {
    if (Array.isArray(list)) {
      return list.map(function(i) { return i; });
    }
    return list;
  }

  return _flatten(list, 1);

  function _flatten(list, d) {
    return list.reduce(function (acc, item) {
      if (Array.isArray(item) && d < depth) {
        return acc.concat(_flatten(item, d + 1));
      }
      else {
        return acc.concat(item);
      }
    }, []);
  }
};


/***/ }),

/***/ "../../node_modules/indexes-of/index.js":
/***/ (function(module, exports) {

module.exports = function (ary, item) {
  var i = -1, indexes = []
  while((i = ary.indexOf(item, i + 1)) !== -1)
    indexes.push(i)
  return indexes
}


/***/ }),

/***/ "../../node_modules/uniq/uniq.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique


/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _processor = __webpack_require__("./node_modules/postcss-selector-parser/dist/processor.js");

var _processor2 = _interopRequireDefault(_processor);

var _attribute = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/attribute.js");

var _attribute2 = _interopRequireDefault(_attribute);

var _className = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/className.js");

var _className2 = _interopRequireDefault(_className);

var _combinator = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/combinator.js");

var _combinator2 = _interopRequireDefault(_combinator);

var _comment = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/comment.js");

var _comment2 = _interopRequireDefault(_comment);

var _id = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/id.js");

var _id2 = _interopRequireDefault(_id);

var _nesting = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/nesting.js");

var _nesting2 = _interopRequireDefault(_nesting);

var _pseudo = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/pseudo.js");

var _pseudo2 = _interopRequireDefault(_pseudo);

var _root = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/root.js");

var _root2 = _interopRequireDefault(_root);

var _selector = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/selector.js");

var _selector2 = _interopRequireDefault(_selector);

var _string = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/string.js");

var _string2 = _interopRequireDefault(_string);

var _tag = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/tag.js");

var _tag2 = _interopRequireDefault(_tag);

var _universal = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/universal.js");

var _universal2 = _interopRequireDefault(_universal);

var _types = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/types.js");

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parser = function parser(processor) {
    return new _processor2.default(processor);
};

parser.attribute = function (opts) {
    return new _attribute2.default(opts);
};
parser.className = function (opts) {
    return new _className2.default(opts);
};
parser.combinator = function (opts) {
    return new _combinator2.default(opts);
};
parser.comment = function (opts) {
    return new _comment2.default(opts);
};
parser.id = function (opts) {
    return new _id2.default(opts);
};
parser.nesting = function (opts) {
    return new _nesting2.default(opts);
};
parser.pseudo = function (opts) {
    return new _pseudo2.default(opts);
};
parser.root = function (opts) {
    return new _root2.default(opts);
};
parser.selector = function (opts) {
    return new _selector2.default(opts);
};
parser.string = function (opts) {
    return new _string2.default(opts);
};
parser.tag = function (opts) {
    return new _tag2.default(opts);
};
parser.universal = function (opts) {
    return new _universal2.default(opts);
};

Object.keys(types).forEach(function (type) {
    if (type === '__esModule') {
        return;
    }
    parser[type] = types[type]; // eslint-disable-line
});

exports.default = parser;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/parser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _flatten = __webpack_require__("../../node_modules/flatten/index.js");

var _flatten2 = _interopRequireDefault(_flatten);

var _indexesOf = __webpack_require__("../../node_modules/indexes-of/index.js");

var _indexesOf2 = _interopRequireDefault(_indexesOf);

var _uniq = __webpack_require__("../../node_modules/uniq/uniq.js");

var _uniq2 = _interopRequireDefault(_uniq);

var _root = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/root.js");

var _root2 = _interopRequireDefault(_root);

var _selector = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/selector.js");

var _selector2 = _interopRequireDefault(_selector);

var _className = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/className.js");

var _className2 = _interopRequireDefault(_className);

var _comment = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/comment.js");

var _comment2 = _interopRequireDefault(_comment);

var _id = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/id.js");

var _id2 = _interopRequireDefault(_id);

var _tag = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/tag.js");

var _tag2 = _interopRequireDefault(_tag);

var _string = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/string.js");

var _string2 = _interopRequireDefault(_string);

var _pseudo = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/pseudo.js");

var _pseudo2 = _interopRequireDefault(_pseudo);

var _attribute = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/attribute.js");

var _attribute2 = _interopRequireDefault(_attribute);

var _universal = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/universal.js");

var _universal2 = _interopRequireDefault(_universal);

var _combinator = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/combinator.js");

var _combinator2 = _interopRequireDefault(_combinator);

var _nesting = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/nesting.js");

var _nesting2 = _interopRequireDefault(_nesting);

var _sortAscending = __webpack_require__("./node_modules/postcss-selector-parser/dist/sortAscending.js");

var _sortAscending2 = _interopRequireDefault(_sortAscending);

var _tokenize = __webpack_require__("./node_modules/postcss-selector-parser/dist/tokenize.js");

var _tokenize2 = _interopRequireDefault(_tokenize);

var _types = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/types.js");

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parser = function () {
    function Parser(input) {
        _classCallCheck(this, Parser);

        this.input = input;
        this.lossy = input.options.lossless === false;
        this.position = 0;
        this.root = new _root2.default();

        var selectors = new _selector2.default();
        this.root.append(selectors);

        this.current = selectors;
        if (this.lossy) {
            this.tokens = (0, _tokenize2.default)({ safe: input.safe, css: input.css.trim() });
        } else {
            this.tokens = (0, _tokenize2.default)(input);
        }

        return this.loop();
    }

    Parser.prototype.attribute = function attribute() {
        var str = '';
        var attr = void 0;
        var startingToken = this.currToken;
        this.position++;
        while (this.position < this.tokens.length && this.currToken[0] !== ']') {
            str += this.tokens[this.position][1];
            this.position++;
        }
        if (this.position === this.tokens.length && !~str.indexOf(']')) {
            this.error('Expected a closing square bracket.');
        }
        var parts = str.split(/((?:[*~^$|]?=))([^]*)/);
        var namespace = parts[0].split(/(\|)/g);
        var attributeProps = {
            operator: parts[1],
            value: parts[2],
            source: {
                start: {
                    line: startingToken[2],
                    column: startingToken[3]
                },
                end: {
                    line: this.currToken[2],
                    column: this.currToken[3]
                }
            },
            sourceIndex: startingToken[4]
        };
        if (namespace.length > 1) {
            if (namespace[0] === '') {
                namespace[0] = true;
            }
            attributeProps.attribute = this.parseValue(namespace[2]);
            attributeProps.namespace = this.parseNamespace(namespace[0]);
        } else {
            attributeProps.attribute = this.parseValue(parts[0]);
        }
        attr = new _attribute2.default(attributeProps);

        if (parts[2]) {
            var insensitive = parts[2].split(/(\s+i\s*?)$/);
            var trimmedValue = insensitive[0].trim();
            attr.value = this.lossy ? trimmedValue : insensitive[0];
            if (insensitive[1]) {
                attr.insensitive = true;
                if (!this.lossy) {
                    attr.raws.insensitive = insensitive[1];
                }
            }
            attr.quoted = trimmedValue[0] === '\'' || trimmedValue[0] === '"';
            attr.raws.unquoted = attr.quoted ? trimmedValue.slice(1, -1) : trimmedValue;
        }
        this.newNode(attr);
        this.position++;
    };

    Parser.prototype.combinator = function combinator() {
        if (this.currToken[1] === '|') {
            return this.namespace();
        }
        var node = new _combinator2.default({
            value: '',
            source: {
                start: {
                    line: this.currToken[2],
                    column: this.currToken[3]
                },
                end: {
                    line: this.currToken[2],
                    column: this.currToken[3]
                }
            },
            sourceIndex: this.currToken[4]
        });
        while (this.position < this.tokens.length && this.currToken && (this.currToken[0] === 'space' || this.currToken[0] === 'combinator')) {
            if (this.nextToken && this.nextToken[0] === 'combinator') {
                node.spaces.before = this.parseSpace(this.currToken[1]);
                node.source.start.line = this.nextToken[2];
                node.source.start.column = this.nextToken[3];
                node.source.end.column = this.nextToken[3];
                node.source.end.line = this.nextToken[2];
                node.sourceIndex = this.nextToken[4];
            } else if (this.prevToken && this.prevToken[0] === 'combinator') {
                node.spaces.after = this.parseSpace(this.currToken[1]);
            } else if (this.currToken[0] === 'combinator') {
                node.value = this.currToken[1];
            } else if (this.currToken[0] === 'space') {
                node.value = this.parseSpace(this.currToken[1], ' ');
            }
            this.position++;
        }
        return this.newNode(node);
    };

    Parser.prototype.comma = function comma() {
        if (this.position === this.tokens.length - 1) {
            this.root.trailingComma = true;
            this.position++;
            return;
        }
        var selectors = new _selector2.default();
        this.current.parent.append(selectors);
        this.current = selectors;
        this.position++;
    };

    Parser.prototype.comment = function comment() {
        var node = new _comment2.default({
            value: this.currToken[1],
            source: {
                start: {
                    line: this.currToken[2],
                    column: this.currToken[3]
                },
                end: {
                    line: this.currToken[4],
                    column: this.currToken[5]
                }
            },
            sourceIndex: this.currToken[6]
        });
        this.newNode(node);
        this.position++;
    };

    Parser.prototype.error = function error(message) {
        throw new this.input.error(message); // eslint-disable-line new-cap
    };

    Parser.prototype.missingBackslash = function missingBackslash() {
        return this.error('Expected a backslash preceding the semicolon.');
    };

    Parser.prototype.missingParenthesis = function missingParenthesis() {
        return this.error('Expected opening parenthesis.');
    };

    Parser.prototype.missingSquareBracket = function missingSquareBracket() {
        return this.error('Expected opening square bracket.');
    };

    Parser.prototype.namespace = function namespace() {
        var before = this.prevToken && this.prevToken[1] || true;
        if (this.nextToken[0] === 'word') {
            this.position++;
            return this.word(before);
        } else if (this.nextToken[0] === '*') {
            this.position++;
            return this.universal(before);
        }
    };

    Parser.prototype.nesting = function nesting() {
        this.newNode(new _nesting2.default({
            value: this.currToken[1],
            source: {
                start: {
                    line: this.currToken[2],
                    column: this.currToken[3]
                },
                end: {
                    line: this.currToken[2],
                    column: this.currToken[3]
                }
            },
            sourceIndex: this.currToken[4]
        }));
        this.position++;
    };

    Parser.prototype.parentheses = function parentheses() {
        var last = this.current.last;
        if (last && last.type === types.PSEUDO) {
            var selector = new _selector2.default();
            var cache = this.current;
            last.append(selector);
            this.current = selector;
            var balanced = 1;
            this.position++;
            while (this.position < this.tokens.length && balanced) {
                if (this.currToken[0] === '(') {
                    balanced++;
                }
                if (this.currToken[0] === ')') {
                    balanced--;
                }
                if (balanced) {
                    this.parse();
                } else {
                    selector.parent.source.end.line = this.currToken[2];
                    selector.parent.source.end.column = this.currToken[3];
                    this.position++;
                }
            }
            if (balanced) {
                this.error('Expected closing parenthesis.');
            }
            this.current = cache;
        } else {
            var _balanced = 1;
            this.position++;
            last.value += '(';
            while (this.position < this.tokens.length && _balanced) {
                if (this.currToken[0] === '(') {
                    _balanced++;
                }
                if (this.currToken[0] === ')') {
                    _balanced--;
                }
                last.value += this.parseParenthesisToken(this.currToken);
                this.position++;
            }
            if (_balanced) {
                this.error('Expected closing parenthesis.');
            }
        }
    };

    Parser.prototype.pseudo = function pseudo() {
        var _this = this;

        var pseudoStr = '';
        var startingToken = this.currToken;
        while (this.currToken && this.currToken[0] === ':') {
            pseudoStr += this.currToken[1];
            this.position++;
        }
        if (!this.currToken) {
            return this.error('Expected pseudo-class or pseudo-element');
        }
        if (this.currToken[0] === 'word') {
            var pseudo = void 0;
            this.splitWord(false, function (first, length) {
                pseudoStr += first;
                pseudo = new _pseudo2.default({
                    value: pseudoStr,
                    source: {
                        start: {
                            line: startingToken[2],
                            column: startingToken[3]
                        },
                        end: {
                            line: _this.currToken[4],
                            column: _this.currToken[5]
                        }
                    },
                    sourceIndex: startingToken[4]
                });
                _this.newNode(pseudo);
                if (length > 1 && _this.nextToken && _this.nextToken[0] === '(') {
                    _this.error('Misplaced parenthesis.');
                }
            });
        } else {
            this.error('Unexpected "' + this.currToken[0] + '" found.');
        }
    };

    Parser.prototype.space = function space() {
        var token = this.currToken;
        // Handle space before and after the selector
        if (this.position === 0 || this.prevToken[0] === ',' || this.prevToken[0] === '(') {
            this.spaces = this.parseSpace(token[1]);
            this.position++;
        } else if (this.position === this.tokens.length - 1 || this.nextToken[0] === ',' || this.nextToken[0] === ')') {
            this.current.last.spaces.after = this.parseSpace(token[1]);
            this.position++;
        } else {
            this.combinator();
        }
    };

    Parser.prototype.string = function string() {
        var token = this.currToken;
        this.newNode(new _string2.default({
            value: this.currToken[1],
            source: {
                start: {
                    line: token[2],
                    column: token[3]
                },
                end: {
                    line: token[4],
                    column: token[5]
                }
            },
            sourceIndex: token[6]
        }));
        this.position++;
    };

    Parser.prototype.universal = function universal(namespace) {
        var nextToken = this.nextToken;
        if (nextToken && nextToken[1] === '|') {
            this.position++;
            return this.namespace();
        }
        this.newNode(new _universal2.default({
            value: this.currToken[1],
            source: {
                start: {
                    line: this.currToken[2],
                    column: this.currToken[3]
                },
                end: {
                    line: this.currToken[2],
                    column: this.currToken[3]
                }
            },
            sourceIndex: this.currToken[4]
        }), namespace);
        this.position++;
    };

    Parser.prototype.splitWord = function splitWord(namespace, firstCallback) {
        var _this2 = this;

        var nextToken = this.nextToken;
        var word = this.currToken[1];
        while (nextToken && nextToken[0] === 'word') {
            this.position++;
            var current = this.currToken[1];
            word += current;
            if (current.lastIndexOf('\\') === current.length - 1) {
                var next = this.nextToken;
                if (next && next[0] === 'space') {
                    word += this.parseSpace(next[1], ' ');
                    this.position++;
                }
            }
            nextToken = this.nextToken;
        }
        var hasClass = (0, _indexesOf2.default)(word, '.');
        var hasId = (0, _indexesOf2.default)(word, '#');
        // Eliminate Sass interpolations from the list of id indexes
        var interpolations = (0, _indexesOf2.default)(word, '#{');
        if (interpolations.length) {
            hasId = hasId.filter(function (hashIndex) {
                return !~interpolations.indexOf(hashIndex);
            });
        }
        var indices = (0, _sortAscending2.default)((0, _uniq2.default)((0, _flatten2.default)([[0], hasClass, hasId])));
        indices.forEach(function (ind, i) {
            var index = indices[i + 1] || word.length;
            var value = word.slice(ind, index);
            if (i === 0 && firstCallback) {
                return firstCallback.call(_this2, value, indices.length);
            }
            var node = void 0;
            if (~hasClass.indexOf(ind)) {
                node = new _className2.default({
                    value: value.slice(1),
                    source: {
                        start: {
                            line: _this2.currToken[2],
                            column: _this2.currToken[3] + ind
                        },
                        end: {
                            line: _this2.currToken[4],
                            column: _this2.currToken[3] + (index - 1)
                        }
                    },
                    sourceIndex: _this2.currToken[6] + indices[i]
                });
            } else if (~hasId.indexOf(ind)) {
                node = new _id2.default({
                    value: value.slice(1),
                    source: {
                        start: {
                            line: _this2.currToken[2],
                            column: _this2.currToken[3] + ind
                        },
                        end: {
                            line: _this2.currToken[4],
                            column: _this2.currToken[3] + (index - 1)
                        }
                    },
                    sourceIndex: _this2.currToken[6] + indices[i]
                });
            } else {
                node = new _tag2.default({
                    value: value,
                    source: {
                        start: {
                            line: _this2.currToken[2],
                            column: _this2.currToken[3] + ind
                        },
                        end: {
                            line: _this2.currToken[4],
                            column: _this2.currToken[3] + (index - 1)
                        }
                    },
                    sourceIndex: _this2.currToken[6] + indices[i]
                });
            }
            _this2.newNode(node, namespace);
        });
        this.position++;
    };

    Parser.prototype.word = function word(namespace) {
        var nextToken = this.nextToken;
        if (nextToken && nextToken[1] === '|') {
            this.position++;
            return this.namespace();
        }
        return this.splitWord(namespace);
    };

    Parser.prototype.loop = function loop() {
        while (this.position < this.tokens.length) {
            this.parse(true);
        }
        return this.root;
    };

    Parser.prototype.parse = function parse(throwOnParenthesis) {
        switch (this.currToken[0]) {
            case 'space':
                this.space();
                break;
            case 'comment':
                this.comment();
                break;
            case '(':
                this.parentheses();
                break;
            case ')':
                if (throwOnParenthesis) {
                    this.missingParenthesis();
                }
                break;
            case '[':
                this.attribute();
                break;
            case ']':
                this.missingSquareBracket();
                break;
            case 'at-word':
            case 'word':
                this.word();
                break;
            case ':':
                this.pseudo();
                break;
            case ';':
                this.missingBackslash();
                break;
            case ',':
                this.comma();
                break;
            case '*':
                this.universal();
                break;
            case '&':
                this.nesting();
                break;
            case 'combinator':
                this.combinator();
                break;
            case 'string':
                this.string();
                break;
        }
    };

    /**
     * Helpers
     */

    Parser.prototype.parseNamespace = function parseNamespace(namespace) {
        if (this.lossy && typeof namespace === 'string') {
            var trimmed = namespace.trim();
            if (!trimmed.length) {
                return true;
            }

            return trimmed;
        }

        return namespace;
    };

    Parser.prototype.parseSpace = function parseSpace(space, replacement) {
        return this.lossy ? replacement || '' : space;
    };

    Parser.prototype.parseValue = function parseValue(value) {
        return this.lossy && value && typeof value === 'string' ? value.trim() : value;
    };

    Parser.prototype.parseParenthesisToken = function parseParenthesisToken(token) {
        if (!this.lossy) {
            return token[1];
        }

        if (token[0] === 'space') {
            return this.parseSpace(token[1], ' ');
        }

        return this.parseValue(token[1]);
    };

    Parser.prototype.newNode = function newNode(node, namespace) {
        if (namespace) {
            node.namespace = this.parseNamespace(namespace);
        }
        if (this.spaces) {
            node.spaces.before = this.spaces;
            this.spaces = '';
        }
        return this.current.append(node);
    };

    _createClass(Parser, [{
        key: 'currToken',
        get: function get() {
            return this.tokens[this.position];
        }
    }, {
        key: 'nextToken',
        get: function get() {
            return this.tokens[this.position + 1];
        }
    }, {
        key: 'prevToken',
        get: function get() {
            return this.tokens[this.position - 1];
        }
    }]);

    return Parser;
}();

exports.default = Parser;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/processor.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parser = __webpack_require__("./node_modules/postcss-selector-parser/dist/parser.js");

var _parser2 = _interopRequireDefault(_parser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Processor = function () {
    function Processor(func) {
        _classCallCheck(this, Processor);

        this.func = func || function noop() {};
        return this;
    }

    Processor.prototype.process = function process(selectors) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var input = new _parser2.default({
            css: selectors,
            error: function error(e) {
                throw new Error(e);
            },
            options: options
        });
        this.res = input;
        this.func(input);
        return this;
    };

    _createClass(Processor, [{
        key: 'result',
        get: function get() {
            return String(this.res);
        }
    }]);

    return Processor;
}();

exports.default = Processor;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/attribute.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _namespace = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/namespace.js");

var _namespace2 = _interopRequireDefault(_namespace);

var _types = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Attribute = function (_Namespace) {
    _inherits(Attribute, _Namespace);

    function Attribute(opts) {
        _classCallCheck(this, Attribute);

        var _this = _possibleConstructorReturn(this, _Namespace.call(this, opts));

        _this.type = _types.ATTRIBUTE;
        _this.raws = {};
        return _this;
    }

    Attribute.prototype.toString = function toString() {
        var selector = [this.spaces.before, '[', this.ns, this.attribute];

        if (this.operator) {
            selector.push(this.operator);
        }
        if (this.value) {
            selector.push(this.value);
        }
        if (this.raws.insensitive) {
            selector.push(this.raws.insensitive);
        } else if (this.insensitive) {
            selector.push(' i');
        }
        selector.push(']');
        return selector.concat(this.spaces.after).join('');
    };

    return Attribute;
}(_namespace2.default);

exports.default = Attribute;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/className.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _namespace = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/namespace.js");

var _namespace2 = _interopRequireDefault(_namespace);

var _types = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClassName = function (_Namespace) {
    _inherits(ClassName, _Namespace);

    function ClassName(opts) {
        _classCallCheck(this, ClassName);

        var _this = _possibleConstructorReturn(this, _Namespace.call(this, opts));

        _this.type = _types.CLASS;
        return _this;
    }

    ClassName.prototype.toString = function toString() {
        return [this.spaces.before, this.ns, String('.' + this.value), this.spaces.after].join('');
    };

    return ClassName;
}(_namespace2.default);

exports.default = ClassName;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/combinator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _node = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/node.js");

var _node2 = _interopRequireDefault(_node);

var _types = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Combinator = function (_Node) {
    _inherits(Combinator, _Node);

    function Combinator(opts) {
        _classCallCheck(this, Combinator);

        var _this = _possibleConstructorReturn(this, _Node.call(this, opts));

        _this.type = _types.COMBINATOR;
        return _this;
    }

    return Combinator;
}(_node2.default);

exports.default = Combinator;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/comment.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _node = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/node.js");

var _node2 = _interopRequireDefault(_node);

var _types = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comment = function (_Node) {
    _inherits(Comment, _Node);

    function Comment(opts) {
        _classCallCheck(this, Comment);

        var _this = _possibleConstructorReturn(this, _Node.call(this, opts));

        _this.type = _types.COMMENT;
        return _this;
    }

    return Comment;
}(_node2.default);

exports.default = Comment;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/container.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _node = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/node.js");

var _node2 = _interopRequireDefault(_node);

var _types = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/types.js");

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_Node) {
    _inherits(Container, _Node);

    function Container(opts) {
        _classCallCheck(this, Container);

        var _this = _possibleConstructorReturn(this, _Node.call(this, opts));

        if (!_this.nodes) {
            _this.nodes = [];
        }
        return _this;
    }

    Container.prototype.append = function append(selector) {
        selector.parent = this;
        this.nodes.push(selector);
        return this;
    };

    Container.prototype.prepend = function prepend(selector) {
        selector.parent = this;
        this.nodes.unshift(selector);
        return this;
    };

    Container.prototype.at = function at(index) {
        return this.nodes[index];
    };

    Container.prototype.index = function index(child) {
        if (typeof child === 'number') {
            return child;
        }
        return this.nodes.indexOf(child);
    };

    Container.prototype.removeChild = function removeChild(child) {
        child = this.index(child);
        this.at(child).parent = undefined;
        this.nodes.splice(child, 1);

        var index = void 0;
        for (var id in this.indexes) {
            index = this.indexes[id];
            if (index >= child) {
                this.indexes[id] = index - 1;
            }
        }

        return this;
    };

    Container.prototype.removeAll = function removeAll() {
        for (var _iterator = this.nodes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
            }

            var node = _ref;

            node.parent = undefined;
        }
        this.nodes = [];
        return this;
    };

    Container.prototype.empty = function empty() {
        return this.removeAll();
    };

    Container.prototype.insertAfter = function insertAfter(oldNode, newNode) {
        var oldIndex = this.index(oldNode);
        this.nodes.splice(oldIndex + 1, 0, newNode);

        var index = void 0;
        for (var id in this.indexes) {
            index = this.indexes[id];
            if (oldIndex <= index) {
                this.indexes[id] = index + this.nodes.length;
            }
        }

        return this;
    };

    Container.prototype.insertBefore = function insertBefore(oldNode, newNode) {
        var oldIndex = this.index(oldNode);
        this.nodes.splice(oldIndex, 0, newNode);

        var index = void 0;
        for (var id in this.indexes) {
            index = this.indexes[id];
            if (oldIndex <= index) {
                this.indexes[id] = index + this.nodes.length;
            }
        }

        return this;
    };

    Container.prototype.each = function each(callback) {
        if (!this.lastEach) {
            this.lastEach = 0;
        }
        if (!this.indexes) {
            this.indexes = {};
        }

        this.lastEach++;
        var id = this.lastEach;
        this.indexes[id] = 0;

        if (!this.length) {
            return undefined;
        }

        var index = void 0,
            result = void 0;
        while (this.indexes[id] < this.length) {
            index = this.indexes[id];
            result = callback(this.at(index), index);
            if (result === false) {
                break;
            }

            this.indexes[id] += 1;
        }

        delete this.indexes[id];

        if (result === false) {
            return false;
        }
    };

    Container.prototype.walk = function walk(callback) {
        return this.each(function (node, i) {
            var result = callback(node, i);

            if (result !== false && node.length) {
                result = node.walk(callback);
            }

            if (result === false) {
                return false;
            }
        });
    };

    Container.prototype.walkAttributes = function walkAttributes(callback) {
        var _this2 = this;

        return this.walk(function (selector) {
            if (selector.type === types.ATTRIBUTE) {
                return callback.call(_this2, selector);
            }
        });
    };

    Container.prototype.walkClasses = function walkClasses(callback) {
        var _this3 = this;

        return this.walk(function (selector) {
            if (selector.type === types.CLASS) {
                return callback.call(_this3, selector);
            }
        });
    };

    Container.prototype.walkCombinators = function walkCombinators(callback) {
        var _this4 = this;

        return this.walk(function (selector) {
            if (selector.type === types.COMBINATOR) {
                return callback.call(_this4, selector);
            }
        });
    };

    Container.prototype.walkComments = function walkComments(callback) {
        var _this5 = this;

        return this.walk(function (selector) {
            if (selector.type === types.COMMENT) {
                return callback.call(_this5, selector);
            }
        });
    };

    Container.prototype.walkIds = function walkIds(callback) {
        var _this6 = this;

        return this.walk(function (selector) {
            if (selector.type === types.ID) {
                return callback.call(_this6, selector);
            }
        });
    };

    Container.prototype.walkNesting = function walkNesting(callback) {
        var _this7 = this;

        return this.walk(function (selector) {
            if (selector.type === types.NESTING) {
                return callback.call(_this7, selector);
            }
        });
    };

    Container.prototype.walkPseudos = function walkPseudos(callback) {
        var _this8 = this;

        return this.walk(function (selector) {
            if (selector.type === types.PSEUDO) {
                return callback.call(_this8, selector);
            }
        });
    };

    Container.prototype.walkTags = function walkTags(callback) {
        var _this9 = this;

        return this.walk(function (selector) {
            if (selector.type === types.TAG) {
                return callback.call(_this9, selector);
            }
        });
    };

    Container.prototype.walkUniversals = function walkUniversals(callback) {
        var _this10 = this;

        return this.walk(function (selector) {
            if (selector.type === types.UNIVERSAL) {
                return callback.call(_this10, selector);
            }
        });
    };

    Container.prototype.split = function split(callback) {
        var _this11 = this;

        var current = [];
        return this.reduce(function (memo, node, index) {
            var split = callback.call(_this11, node);
            current.push(node);
            if (split) {
                memo.push(current);
                current = [];
            } else if (index === _this11.length - 1) {
                memo.push(current);
            }
            return memo;
        }, []);
    };

    Container.prototype.map = function map(callback) {
        return this.nodes.map(callback);
    };

    Container.prototype.reduce = function reduce(callback, memo) {
        return this.nodes.reduce(callback, memo);
    };

    Container.prototype.every = function every(callback) {
        return this.nodes.every(callback);
    };

    Container.prototype.some = function some(callback) {
        return this.nodes.some(callback);
    };

    Container.prototype.filter = function filter(callback) {
        return this.nodes.filter(callback);
    };

    Container.prototype.sort = function sort(callback) {
        return this.nodes.sort(callback);
    };

    Container.prototype.toString = function toString() {
        return this.map(String).join('');
    };

    _createClass(Container, [{
        key: 'first',
        get: function get() {
            return this.at(0);
        }
    }, {
        key: 'last',
        get: function get() {
            return this.at(this.length - 1);
        }
    }, {
        key: 'length',
        get: function get() {
            return this.nodes.length;
        }
    }]);

    return Container;
}(_node2.default);

exports.default = Container;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/id.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _namespace = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/namespace.js");

var _namespace2 = _interopRequireDefault(_namespace);

var _types = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ID = function (_Namespace) {
    _inherits(ID, _Namespace);

    function ID(opts) {
        _classCallCheck(this, ID);

        var _this = _possibleConstructorReturn(this, _Namespace.call(this, opts));

        _this.type = _types.ID;
        return _this;
    }

    ID.prototype.toString = function toString() {
        return [this.spaces.before, this.ns, String('#' + this.value), this.spaces.after].join('');
    };

    return ID;
}(_namespace2.default);

exports.default = ID;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/namespace.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _node = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/node.js");

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Namespace = function (_Node) {
    _inherits(Namespace, _Node);

    function Namespace() {
        _classCallCheck(this, Namespace);

        return _possibleConstructorReturn(this, _Node.apply(this, arguments));
    }

    Namespace.prototype.toString = function toString() {
        return [this.spaces.before, this.ns, String(this.value), this.spaces.after].join('');
    };

    _createClass(Namespace, [{
        key: 'ns',
        get: function get() {
            var n = this.namespace;
            return n ? (typeof n === 'string' ? n : '') + '|' : '';
        }
    }]);

    return Namespace;
}(_node2.default);

exports.default = Namespace;
;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/nesting.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _node = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/node.js");

var _node2 = _interopRequireDefault(_node);

var _types = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nesting = function (_Node) {
    _inherits(Nesting, _Node);

    function Nesting(opts) {
        _classCallCheck(this, Nesting);

        var _this = _possibleConstructorReturn(this, _Node.call(this, opts));

        _this.type = _types.NESTING;
        _this.value = '&';
        return _this;
    }

    return Nesting;
}(_node2.default);

exports.default = Nesting;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/node.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cloneNode = function cloneNode(obj, parent) {
    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
        return obj;
    }

    var cloned = new obj.constructor();

    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) {
            continue;
        }
        var value = obj[i];
        var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

        if (i === 'parent' && type === 'object') {
            if (parent) {
                cloned[i] = parent;
            }
        } else if (value instanceof Array) {
            cloned[i] = value.map(function (j) {
                return cloneNode(j, cloned);
            });
        } else {
            cloned[i] = cloneNode(value, cloned);
        }
    }

    return cloned;
};

var _class = function () {
    function _class() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, _class);

        for (var key in opts) {
            this[key] = opts[key];
        }
        var _opts$spaces = opts.spaces;
        _opts$spaces = _opts$spaces === undefined ? {} : _opts$spaces;
        var _opts$spaces$before = _opts$spaces.before,
            before = _opts$spaces$before === undefined ? '' : _opts$spaces$before,
            _opts$spaces$after = _opts$spaces.after,
            after = _opts$spaces$after === undefined ? '' : _opts$spaces$after;

        this.spaces = { before: before, after: after };
    }

    _class.prototype.remove = function remove() {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.parent = undefined;
        return this;
    };

    _class.prototype.replaceWith = function replaceWith() {
        if (this.parent) {
            for (var index in arguments) {
                this.parent.insertBefore(this, arguments[index]);
            }
            this.remove();
        }
        return this;
    };

    _class.prototype.next = function next() {
        return this.parent.at(this.parent.index(this) + 1);
    };

    _class.prototype.prev = function prev() {
        return this.parent.at(this.parent.index(this) - 1);
    };

    _class.prototype.clone = function clone() {
        var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var cloned = cloneNode(this);
        for (var name in overrides) {
            cloned[name] = overrides[name];
        }
        return cloned;
    };

    _class.prototype.toString = function toString() {
        return [this.spaces.before, String(this.value), this.spaces.after].join('');
    };

    return _class;
}();

exports.default = _class;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/pseudo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _container = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/container.js");

var _container2 = _interopRequireDefault(_container);

var _types = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pseudo = function (_Container) {
    _inherits(Pseudo, _Container);

    function Pseudo(opts) {
        _classCallCheck(this, Pseudo);

        var _this = _possibleConstructorReturn(this, _Container.call(this, opts));

        _this.type = _types.PSEUDO;
        return _this;
    }

    Pseudo.prototype.toString = function toString() {
        var params = this.length ? '(' + this.map(String).join(',') + ')' : '';
        return [this.spaces.before, String(this.value), params, this.spaces.after].join('');
    };

    return Pseudo;
}(_container2.default);

exports.default = Pseudo;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/root.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _container = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/container.js");

var _container2 = _interopRequireDefault(_container);

var _types = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Root = function (_Container) {
    _inherits(Root, _Container);

    function Root(opts) {
        _classCallCheck(this, Root);

        var _this = _possibleConstructorReturn(this, _Container.call(this, opts));

        _this.type = _types.ROOT;
        return _this;
    }

    Root.prototype.toString = function toString() {
        var str = this.reduce(function (memo, selector) {
            var sel = String(selector);
            return sel ? memo + sel + ',' : '';
        }, '').slice(0, -1);
        return this.trailingComma ? str + ',' : str;
    };

    return Root;
}(_container2.default);

exports.default = Root;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/selector.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _container = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/container.js");

var _container2 = _interopRequireDefault(_container);

var _types = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Selector = function (_Container) {
    _inherits(Selector, _Container);

    function Selector(opts) {
        _classCallCheck(this, Selector);

        var _this = _possibleConstructorReturn(this, _Container.call(this, opts));

        _this.type = _types.SELECTOR;
        return _this;
    }

    return Selector;
}(_container2.default);

exports.default = Selector;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/string.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _node = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/node.js");

var _node2 = _interopRequireDefault(_node);

var _types = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var String = function (_Node) {
    _inherits(String, _Node);

    function String(opts) {
        _classCallCheck(this, String);

        var _this = _possibleConstructorReturn(this, _Node.call(this, opts));

        _this.type = _types.STRING;
        return _this;
    }

    return String;
}(_node2.default);

exports.default = String;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/tag.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _namespace = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/namespace.js");

var _namespace2 = _interopRequireDefault(_namespace);

var _types = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tag = function (_Namespace) {
    _inherits(Tag, _Namespace);

    function Tag(opts) {
        _classCallCheck(this, Tag);

        var _this = _possibleConstructorReturn(this, _Namespace.call(this, opts));

        _this.type = _types.TAG;
        return _this;
    }

    return Tag;
}(_namespace2.default);

exports.default = Tag;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/types.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var TAG = exports.TAG = 'tag';
var STRING = exports.STRING = 'string';
var SELECTOR = exports.SELECTOR = 'selector';
var ROOT = exports.ROOT = 'root';
var PSEUDO = exports.PSEUDO = 'pseudo';
var NESTING = exports.NESTING = 'nesting';
var ID = exports.ID = 'id';
var COMMENT = exports.COMMENT = 'comment';
var COMBINATOR = exports.COMBINATOR = 'combinator';
var CLASS = exports.CLASS = 'class';
var ATTRIBUTE = exports.ATTRIBUTE = 'attribute';
var UNIVERSAL = exports.UNIVERSAL = 'universal';

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/selectors/universal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _namespace = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/namespace.js");

var _namespace2 = _interopRequireDefault(_namespace);

var _types = __webpack_require__("./node_modules/postcss-selector-parser/dist/selectors/types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Universal = function (_Namespace) {
    _inherits(Universal, _Namespace);

    function Universal(opts) {
        _classCallCheck(this, Universal);

        var _this = _possibleConstructorReturn(this, _Namespace.call(this, opts));

        _this.type = _types.UNIVERSAL;
        _this.value = '*';
        return _this;
    }

    return Universal;
}(_namespace2.default);

exports.default = Universal;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/sortAscending.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = sortAscending;
function sortAscending(list) {
    return list.sort(function (a, b) {
        return a - b;
    });
};
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/postcss-selector-parser/dist/tokenize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = tokenize;
var singleQuote = 39,
    doubleQuote = 34,
    backslash = 92,
    slash = 47,
    newline = 10,
    space = 32,
    feed = 12,
    tab = 9,
    cr = 13,
    plus = 43,
    gt = 62,
    tilde = 126,
    pipe = 124,
    comma = 44,
    openBracket = 40,
    closeBracket = 41,
    openSq = 91,
    closeSq = 93,
    semicolon = 59,
    asterisk = 42,
    colon = 58,
    ampersand = 38,
    at = 64,
    atEnd = /[ \n\t\r\{\(\)'"\\;/]/g,
    wordEnd = /[ \n\t\r\(\)\*:;@!&'"\+\|~>,\[\]\\]|\/(?=\*)/g;

function tokenize(input) {
    var tokens = [];
    var css = input.css.valueOf();

    var code = void 0,
        next = void 0,
        quote = void 0,
        lines = void 0,
        last = void 0,
        content = void 0,
        escape = void 0,
        nextLine = void 0,
        nextOffset = void 0,
        escaped = void 0,
        escapePos = void 0;

    var length = css.length;
    var offset = -1;
    var line = 1;
    var pos = 0;

    var unclosed = function unclosed(what, end) {
        if (input.safe) {
            css += end;
            next = css.length - 1;
        } else {
            throw input.error('Unclosed ' + what, line, pos - offset, pos);
        }
    };

    while (pos < length) {
        code = css.charCodeAt(pos);

        if (code === newline) {
            offset = pos;
            line += 1;
        }

        switch (code) {
            case newline:
            case space:
            case tab:
            case cr:
            case feed:
                next = pos;
                do {
                    next += 1;
                    code = css.charCodeAt(next);
                    if (code === newline) {
                        offset = next;
                        line += 1;
                    }
                } while (code === space || code === newline || code === tab || code === cr || code === feed);

                tokens.push(['space', css.slice(pos, next), line, pos - offset, pos]);
                pos = next - 1;
                break;

            case plus:
            case gt:
            case tilde:
            case pipe:
                next = pos;
                do {
                    next += 1;
                    code = css.charCodeAt(next);
                } while (code === plus || code === gt || code === tilde || code === pipe);
                tokens.push(['combinator', css.slice(pos, next), line, pos - offset, pos]);
                pos = next - 1;
                break;

            case asterisk:
                tokens.push(['*', '*', line, pos - offset, pos]);
                break;

            case ampersand:
                tokens.push(['&', '&', line, pos - offset, pos]);
                break;

            case comma:
                tokens.push([',', ',', line, pos - offset, pos]);
                break;

            case openSq:
                tokens.push(['[', '[', line, pos - offset, pos]);
                break;

            case closeSq:
                tokens.push([']', ']', line, pos - offset, pos]);
                break;

            case colon:
                tokens.push([':', ':', line, pos - offset, pos]);
                break;

            case semicolon:
                tokens.push([';', ';', line, pos - offset, pos]);
                break;

            case openBracket:
                tokens.push(['(', '(', line, pos - offset, pos]);
                break;

            case closeBracket:
                tokens.push([')', ')', line, pos - offset, pos]);
                break;

            case singleQuote:
            case doubleQuote:
                quote = code === singleQuote ? "'" : '"';
                next = pos;
                do {
                    escaped = false;
                    next = css.indexOf(quote, next + 1);
                    if (next === -1) {
                        unclosed('quote', quote);
                    }
                    escapePos = next;
                    while (css.charCodeAt(escapePos - 1) === backslash) {
                        escapePos -= 1;
                        escaped = !escaped;
                    }
                } while (escaped);

                tokens.push(['string', css.slice(pos, next + 1), line, pos - offset, line, next - offset, pos]);
                pos = next;
                break;

            case at:
                atEnd.lastIndex = pos + 1;
                atEnd.test(css);
                if (atEnd.lastIndex === 0) {
                    next = css.length - 1;
                } else {
                    next = atEnd.lastIndex - 2;
                }
                tokens.push(['at-word', css.slice(pos, next + 1), line, pos - offset, line, next - offset, pos]);
                pos = next;
                break;

            case backslash:
                next = pos;
                escape = true;
                while (css.charCodeAt(next + 1) === backslash) {
                    next += 1;
                    escape = !escape;
                }
                code = css.charCodeAt(next + 1);
                if (escape && code !== slash && code !== space && code !== newline && code !== tab && code !== cr && code !== feed) {
                    next += 1;
                }
                tokens.push(['word', css.slice(pos, next + 1), line, pos - offset, line, next - offset, pos]);
                pos = next;
                break;

            default:
                if (code === slash && css.charCodeAt(pos + 1) === asterisk) {
                    next = css.indexOf('*/', pos + 2) + 1;
                    if (next === 0) {
                        unclosed('comment', '*/');
                    }

                    content = css.slice(pos, next + 1);
                    lines = content.split('\n');
                    last = lines.length - 1;

                    if (last > 0) {
                        nextLine = line + last;
                        nextOffset = next - lines[last].length;
                    } else {
                        nextLine = line;
                        nextOffset = offset;
                    }

                    tokens.push(['comment', content, line, pos - offset, nextLine, next - nextOffset, pos]);

                    offset = nextOffset;
                    line = nextLine;
                    pos = next;
                } else {
                    wordEnd.lastIndex = pos + 1;
                    wordEnd.test(css);
                    if (wordEnd.lastIndex === 0) {
                        next = css.length - 1;
                    } else {
                        next = wordEnd.lastIndex - 2;
                    }

                    tokens.push(['word', css.slice(pos, next + 1), line, pos - offset, line, next - offset, pos]);
                    pos = next;
                }

                break;
        }

        pos++;
    }

    return tokens;
}
module.exports = exports['default'];

/***/ })

}]);
//# sourceMappingURL=vendors~vue-style-compiler.94007958a.chunk.js.map