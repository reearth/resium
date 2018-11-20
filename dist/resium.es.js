import React from 'react';
import Cesium, { Event, ScreenSpaceEventType, ScreenSpaceEventHandler, Viewer, CesiumWidget, SceneMode, Entity, ConstantProperty } from 'cesium';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol$1 = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, props) {
  object = Object(object);
  return basePickBy(object, props, function(value, key) {
    return key in object;
  });
}

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick from.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, props, predicate) {
  var index = -1,
      length = props.length,
      result = {};

  while (++index < length) {
    var key = props[index],
        value = object[key];

    if (predicate(value, key)) {
      result[key] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [props] The property identifiers to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = baseRest(function(object, props) {
  return object == null ? {} : basePick(object, arrayMap(baseFlatten(props, 1), toKey));
});

var lodash_pick = pick;

var _a;
var Provider = (_a = React.createContext({}), _a.Provider), Consumer = _a.Consumer;
var withContext = function (Component) {
    // supports both functional components and class components
    return React.forwardRef(function (props, ref) { return (React.createElement(Consumer, null, function (value) { return React.createElement(Component, __assign({}, Object.assign({}, props, { ref: ref }), { cesium: value })); })); });
};

var attachEvents = function (target, events) {
    Object.entries(events).forEach(function (_a) {
        var k = _a[0], v = _a[1];
        var ev = target[k];
        if (ev instanceof Event && v) {
            ev.addEventListener(v);
        }
    });
};
var detachEvents = function (target, events) {
    Object.entries(events).forEach(function (_a) {
        var k = _a[0], v = _a[1];
        var ev = target[k];
        if (ev instanceof Event && v) {
            ev.removeEventListener(v);
        }
    });
};
var updateEvents = function (target, prevEvents, newEvents) {
    var pek = Object.keys(prevEvents);
    var nek = Object.keys(newEvents);
    // removed events
    var re = pek
        .map(function (k) { return [k, prevEvents[k]]; })
        .reduce(function (e, _a) {
        var k = _a[0], v = _a[1];
        if (nek.indexOf(k) === -1 || v !== newEvents[k]) {
            e[k] = v;
        }
        return e;
    }, {});
    // new events
    var ne = nek
        .map(function (k) { return [k, newEvents[k]]; })
        .reduce(function (e, _a) {
        var k = _a[0], v = _a[1];
        if (pek.indexOf(k) === -1 || v !== prevEvents[k]) {
            e[k] = v;
        }
        return e;
    }, {});
    detachEvents(target, re);
    attachEvents(target, ne);
};
var getEventProps = function (eventNames, props) {
    return eventNames.reduce(function (a, b) {
        var _a;
        return (__assign({}, a, (_a = {}, _a[b] = props["on" + b[0].toUpperCase() + b.slice(1).replace(/Event$/, "")], _a)));
    }, {});
};

var createCesiumComponent = function (opts) {
    var CesiumComponent = /** @class */ (function (_super) {
        __extends(CesiumComponent, _super);
        function CesiumComponent(props) {
            var _this = _super.call(this, props) || this;
            _this.mounted = false;
            if (opts.createRef) {
                _this.ref = React.createRef();
            }
            if (!opts.createRef) {
                _this.create(props);
            }
            return _this;
        }
        CesiumComponent.getCesiumEventMap = function (props) {
            if (!opts.cesiumEventProps) {
                return {};
            }
            return Object.entries(opts.cesiumEventProps).reduce(function (a, _a) {
                var cesiumEventName = _a[0], eventProp = _a[1];
                var _b;
                return (__assign({}, a, (eventProp
                    ? (_b = {},
                        _b[cesiumEventName] = props[eventProp],
                        _b) : {})));
            }, {});
        };
        CesiumComponent.getCesiumProps = function (props) {
            return lodash_pick(props, opts.cesiumProps || []);
        };
        CesiumComponent.getCesiumReadOnlyProps = function (props) {
            return lodash_pick(props, opts.cesiumReadonlyProps || []);
        };
        CesiumComponent.shouldUpdate = function (a, b) {
            return Object.keys(a).some(function (k) { return a[k] !== b[k]; });
        };
        Object.defineProperty(CesiumComponent.prototype, "cesiumElement", {
            get: function () {
                return this._ce;
            },
            enumerable: true,
            configurable: true
        });
        CesiumComponent.prototype.render = function () {
            if (opts.noRender) {
                return null;
            }
            var render = opts.render
                ? opts.render(this._ce, this.props, this.mounted, this.ref)
                : this.props.children || null;
            return !opts.render && !this.mounted ? null : opts.provide ? (React.createElement(Provider, { value: Object.assign({}, this.props.cesium, this._ce ? opts.provide(this._ce, this.props) : {}) }, render)) : (render);
        };
        CesiumComponent.prototype.componentDidMount = function () {
            if (opts.createRef) {
                this.create();
            }
            this.mount();
            this.mounted = true;
            this.forceUpdate();
        };
        CesiumComponent.prototype.componentDidUpdate = function (prevProps) {
            // if readonly props is updated, remount this component.
            if (CesiumComponent.shouldUpdate(CesiumComponent.getCesiumReadOnlyProps(this.props), CesiumComponent.getCesiumReadOnlyProps(prevProps))) {
                this.remount();
                return;
            }
            this.update(prevProps);
        };
        CesiumComponent.prototype.componentWillUnmount = function () {
            this.unmount();
            this._ce = undefined;
        };
        CesiumComponent.prototype.create = function (props) {
            var _this = this;
            if (props === void 0) { props = this.props; }
            var cesiumProps = lodash_pick(props, (opts.cesiumProps || []).concat((opts.cesiumReadonlyProps || [])));
            this._ce = opts.create(cesiumProps, props, this.props.cesium, this.ref);
            if (opts.setCesiumPropsAfterCreate && this._ce) {
                Object.entries(CesiumComponent.getCesiumProps(this.props)).forEach(function (_a) {
                    var k = _a[0], v = _a[1];
                    if (_this._ce) {
                        _this._ce[k] = v;
                    }
                });
            }
            attachEvents(this._ce, CesiumComponent.getCesiumEventMap(this.props));
        };
        CesiumComponent.prototype.mount = function () {
            if (opts.mount && this._ce) {
                opts.mount(this._ce, this.props.cesium, this.props, this.ref);
            }
        };
        CesiumComponent.prototype.unmount = function () {
            if (opts.unmount && this._ce) {
                opts.unmount(this._ce, this.props.cesium, this.props, this.ref);
            }
            if (this._ce) {
                detachEvents(this._ce, CesiumComponent.getCesiumEventMap(this.props));
            }
            this._ce = undefined;
        };
        CesiumComponent.prototype.update = function (prevProps) {
            var _this = this;
            Object.entries(CesiumComponent.getCesiumProps(this.props))
                .filter(function (_a) {
                var k = _a[0], v = _a[1];
                return prevProps[k] !== v;
            })
                .forEach(function (_a) {
                var k = _a[0], v = _a[1];
                if (_this._ce) {
                    _this._ce[k] = v;
                }
            });
            updateEvents(this._ce, CesiumComponent.getCesiumEventMap(prevProps), CesiumComponent.getCesiumEventMap(this.props));
            if (opts.update && this._ce) {
                opts.update(this._ce, this.props, prevProps, this.props.cesium);
            }
        };
        CesiumComponent.prototype.remount = function () {
            this.unmount();
            this.create(undefined);
            this.mount();
        };
        CesiumComponent.displayName = opts.name;
        return CesiumComponent;
    }(React.PureComponent));
    return withContext(CesiumComponent);
};

var createCameraOperation = function (opts) {
    var _a;
    return withContext((_a = /** @class */ (function (_super) {
            __extends(CameraOperation, _super);
            function CameraOperation() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CameraOperation.prototype.componentDidMount = function () {
                opts.cameraOperationStart(this.props.cesium.camera, this.props);
            };
            CameraOperation.prototype.componentDidUpdate = function (prevProps) {
                this.props.cesium.camera.cancelFlight();
                opts.cameraOperationStart(this.props.cesium.camera, this.props, prevProps);
            };
            CameraOperation.prototype.componentWillUnmount = function () {
                var cancelCameraFlight = this.props.cancelCameraFlight;
                if (cancelCameraFlight) {
                    this.props.cesium.camera.cancelFlight();
                }
            };
            CameraOperation.prototype.render = function () {
                return null;
            };
            return CameraOperation;
        }(React.PureComponent)),
        _a.displayName = name,
        _a));
};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0,
    MAX_SAFE_INTEGER$1 = 9007199254740991;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    funcTag$1 = '[object Function]',
    genTag$1 = '[object GeneratorFunction]',
    symbolTag$1 = '[object Symbol]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$1 = freeGlobal$1 || freeSelf$1 || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap$1(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush$1(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto$1 = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root$1['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$1 = objectProto$1.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol$2 = root$1.Symbol,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    propertyIsEnumerable$1 = objectProto$1.propertyIsEnumerable,
    splice = arrayProto.splice,
    spreadableSymbol$1 = Symbol$2 ? Symbol$2.isConcatSpreadable : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeMax$1 = Math.max;

/* Built-in method references that are verified to be native. */
var Map = getNative(root$1, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty$1.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray$1(value) || isArguments$1(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$1.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap$1(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten$1(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable$1);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten$1(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush$1(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$1(object) ? result : arrayPush$1(result, symbolsFunc(object));
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject$1(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction$1(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject$1(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$1.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick.
 * @returns {Object} Returns the new object.
 */
function basePick$1(object, props) {
  object = Object(object);
  return basePickBy$1(object, props, function(value, key) {
    return key in object;
  });
}

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick from.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy$1(object, props, predicate) {
  var index = -1,
      length = props.length,
      result = {};

  while (++index < length) {
    var key = props[index],
        value = object[key];

    if (predicate(value, key)) {
      result[key] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest$1(func, start) {
  start = nativeMax$1(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax$1(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply$1(func, this, otherArgs);
  };
}

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Creates an array of the own and inherited enumerable symbol properties
 * of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush$1(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable$1(value) {
  return isArray$1(value) || isArguments$1(value) ||
    !!(spreadableSymbol$1 && value && value[spreadableSymbol$1]);
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$1;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey$1(value) {
  if (typeof value == 'string' || isSymbol$1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments$1(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject$1(value) && hasOwnProperty$1.call(value, 'callee') &&
    (!propertyIsEnumerable$1.call(value, 'callee') || objectToString$1.call(value) == argsTag$1);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$1 = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike$1(value) {
  return value != null && isLength$1(value.length) && !isFunction$1(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject$1(value) {
  return isObjectLike$1(value) && isArrayLike$1(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject$1(value) ? objectToString$1.call(value) : '';
  return tag == funcTag$1 || tag == genTag$1;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength$1(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$1(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$1(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$1(value) && objectToString$1.call(value) == symbolTag$1);
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike$1(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable string keyed properties of `object` that are
 * not omitted.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [props] The property identifiers to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = baseRest$1(function(object, props) {
  if (object == null) {
    return {};
  }
  props = arrayMap$1(baseFlatten$1(props, 1), toKey$1);
  return basePick$1(object, baseDifference(getAllKeysIn(object), props));
});

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var lodash_omit = omit;

var createEventWrapper = function (Comp) {
    var _a;
    return withContext((_a = /** @class */ (function (_super) {
            __extends(EventWrapper, _super);
            function EventWrapper() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.ref = React.createRef();
                _this.hovering = false;
                _this.checkHovering = function (m) {
                    if (!_this.ref.current || !_this.ref.current.cesiumElement) {
                        return;
                    }
                    var source = _this.ref.current.cesiumElement;
                    var scene = _this.props.cesium.scene;
                    var picked = m.endPosition ? scene.pick(m.endPosition) : undefined;
                    var before = _this.hovering;
                    var hovering = !!picked && !!picked.id && picked.id === source;
                    _this.hovering = hovering;
                    if (before !== hovering) {
                        if (hovering) {
                            if (_this.props.onMouseEnter) {
                                _this.props.onMouseEnter(m, source);
                            }
                        }
                        else {
                            if (_this.props.onMouseLeave) {
                                _this.props.onMouseLeave(m, source);
                            }
                        }
                    }
                };
                return _this;
            }
            EventWrapper.prototype.render = function () {
                var props = lodash_omit(this.props, EventWrapper.events.map(function (e) { return e.prop; }));
                return React.createElement(Comp, __assign({ ref: this.ref }, props));
            };
            EventWrapper.prototype.componentDidMount = function () {
                var _this = this;
                this.sseh2 = new ScreenSpaceEventHandler(this.props.cesium.cesiumWidget.canvas);
                if (this.props.onMouseEnter || this.props.onMouseLeave) {
                    this.sseh2.setInputAction(this.checkHovering, ScreenSpaceEventType.MOUSE_MOVE);
                }
                this.sseh = new ScreenSpaceEventHandler(this.props.cesium.cesiumWidget.canvas);
                EventWrapper.events.forEach(function (e) {
                    var prop = _this.props[e.prop];
                    if (_this.sseh && prop) {
                        var ev = _this.createEvent(prop);
                        _this.sseh.setInputAction(ev, e.type);
                    }
                });
            };
            EventWrapper.prototype.componentDidUpdate = function (prevProps) {
                var _this = this;
                EventWrapper.events.forEach(function (e) {
                    var prop = _this.props[e.prop];
                    if (_this.sseh && prevProps[e.prop] && prevProps[e.prop] !== prop && !prop) {
                        _this.sseh.removeInputAction(e.type);
                    }
                    if (_this.sseh && prop && prevProps[e.prop] !== prop) {
                        var ev = _this.createEvent(prop);
                        _this.sseh.setInputAction(ev, e.type);
                    }
                });
                if (this.sseh2 &&
                    (prevProps.onMouseEnter !== this.props.onMouseEnter ||
                        prevProps.onMouseLeave !== this.props.onMouseLeave)) {
                    if (!this.props.onMouseEnter && !this.props.onMouseLeave) {
                        this.sseh2.removeInputAction(ScreenSpaceEventType.MOUSE_MOVE);
                    }
                    else if ((this.props.onMouseEnter || this.props.onMouseLeave) &&
                        !prevProps.onMouseEnter &&
                        !prevProps.onMouseLeave) {
                        this.sseh2.setInputAction(this.checkHovering, ScreenSpaceEventType.MOUSE_MOVE);
                    }
                }
            };
            EventWrapper.prototype.componentWillUnmount = function () {
                if (this.sseh && !this.sseh.isDestroyed) {
                    this.sseh.destroy();
                }
                if (this.sseh2 && !this.sseh2.isDestroyed) {
                    this.sseh2.destroy();
                }
            };
            EventWrapper.prototype.createEvent = function (fn) {
                if (!this.ref.current || !this.ref.current.cesiumElement) {
                    return;
                }
                var source = this.ref.current.cesiumElement;
                var scene = this.props.cesium.scene;
                return function (movement) {
                    var picked = movement.position ? scene.pick(movement.position) : undefined;
                    if (picked && picked.id && picked.id === source) {
                        fn(movement, source);
                    }
                };
            };
            return EventWrapper;
        }(React.PureComponent)),
        _a.events = [
            { prop: "onClick", type: ScreenSpaceEventType.LEFT_CLICK },
            { prop: "onDoubleClick", type: ScreenSpaceEventType.LEFT_DOUBLE_CLICK },
            { prop: "onMouseDown", type: ScreenSpaceEventType.LEFT_DOWN },
            { prop: "onMouseUp", type: ScreenSpaceEventType.LEFT_UP },
            { prop: "onMiddleClick", type: ScreenSpaceEventType.MIDDLE_CLICK },
            { prop: "onMiddleDown", type: ScreenSpaceEventType.MIDDLE_DOWN },
            { prop: "onMiddleUp", type: ScreenSpaceEventType.MIDDLE_UP },
            { prop: "onMouseMove", type: ScreenSpaceEventType.MOUSE_MOVE },
            { prop: "onPinchEnd", type: ScreenSpaceEventType.PINCH_END },
            { prop: "onPinchMove", type: ScreenSpaceEventType.PINCH_MOVE },
            { prop: "onPinchStart", type: ScreenSpaceEventType.PINCH_START },
            { prop: "onRightClick", type: ScreenSpaceEventType.RIGHT_CLICK },
            { prop: "onRightDown", type: ScreenSpaceEventType.RIGHT_DOWN },
            { prop: "onRightUp", type: ScreenSpaceEventType.RIGHT_UP },
            { prop: "onWheel", type: ScreenSpaceEventType.WHEEL },
        ],
        _a));
};

var cesiumProps = [
    "terrainProvider",
    "terrainShadows",
    "clockTrackedDataSource",
    "targetFrameRate",
    "useDefaultRenderLoop",
    "resolutionScale",
    "allowDataSourcesToSuspendAnimation",
    "trackedEntity",
    "selectedEntity",
    "shadows",
];
var cesiumReadonlyProps = [
    "animation",
    "baseLayerPicker",
    "fullscreenButton",
    "vrButton",
    "geocoder",
    "homeButton",
    "infoBox",
    "sceneModePicker",
    "selectionIndicator",
    "timeline",
    "navigationHelpButton",
    "navigationInstructionsInitiallyVisible",
    "scene3DOnly",
    "shouldAnimate",
    "clockViewModel",
    "selectedImageryProviderViewModel",
    "imageryProviderViewModels",
    "selectedTerrainProviderViewModel",
    "terrainProviderViewModels",
    "imageryProvider",
    "skyBox",
    "skyAtmosphere",
    "fullscreenElement",
    "showRenderLoopErrors",
    "automaticallyTrackDataSourceClocks",
    "contextOptions",
    "sceneMode",
    "mapProjection",
    "globe",
    "orderIndependentTranslucency",
    "creditContainer",
    "creditViewport",
    "dataSources",
    "terrainExaggeration",
    "mapMode2D",
    "projectionPicker",
    "requestRenderMode",
    "maximumRenderTimeChange",
];
var cesiumEventProps = {
    selectedEntityChanged: "onSelectedEntityChange",
    trackedEntityChanged: "onTrackedEntityChange",
};
var Viewer$1 = createCesiumComponent({
    name: "Viewer",
    createRef: true,
    create: function (cprops, props, context, ref) {
        // ref is not always undefined
        var v = new Viewer(ref.current, cprops);
        if (!v) {
            return undefined; // failed to initialize Viewer
        }
        if (props.extend) {
            if (Array.isArray(props.extend)) {
                props.extend.forEach(function (e) {
                    v.extend(e, {});
                });
            }
            else {
                v.extend(props.extend, {});
            }
        }
        return v;
    },
    render: function (element, props, mounted, ref) {
        return (React.createElement("div", __assign({ className: props.className, id: props.id, ref: ref, style: __assign({}, (props.full
                ? {
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    top: "0",
                }
                : {}), props.style) }, props.containerProps), element ? props.children : null));
    },
    unmount: function (element) {
        if (element && !element.isDestroyed) {
            element.destroy();
        }
    },
    provide: function (element) {
        if (!element) {
            return {};
        }
        return {
            viewer: element,
            cesiumWidget: element.cesiumWidget,
            dataSourceCollection: element.dataSources,
            entityCollection: element.entities,
            scene: element.scene,
            camera: element.scene.camera,
            imageryLayerCollection: element.scene.globe.imageryLayers,
            primitiveCollection: element.scene.primitives,
        };
    },
    cesiumProps: cesiumProps,
    cesiumReadonlyProps: cesiumReadonlyProps,
    cesiumEventProps: cesiumEventProps,
});

var cesiumProps$1 = [
    "resolutionScale",
    "useDefaultRenderLoop",
    "targetFrameRate",
];
var cesiumReadonlyProps$1 = [
    "clock",
    "imageryProvider",
    "terrainProvider",
    "skyBox",
    "skyAtmosphere",
    "sceneMode",
    "scene3DOnly",
    "orderIndependentTranslucency",
    "mapProjection",
    "globe",
    "showRenderLoopErrors",
    "contextOptions",
    "creditContainer",
    "creditViewport",
    "terrainExaggeration",
    "shadows",
    "terrainShadows",
    "requestRenderMode",
    "maximumRenderTimeChange",
];
var CesiumWidget$1 = createCesiumComponent({
    name: "Viewer",
    createRef: true,
    create: function (cprops, props, context, ref) {
        // ref is not always undefined
        var v = new CesiumWidget(ref.current, cprops);
        if (!v) {
            return undefined; // failed to initialize Viewer
        }
        if (typeof props.resolutionScale === "number") {
            v.resolutionScale = props.resolutionScale;
        }
        return v;
    },
    render: function (element, props, mounted, ref) {
        return (React.createElement("div", __assign({ className: props.className, id: props.id, ref: ref, style: __assign({}, (props.full
                ? {
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    top: "0",
                }
                : {}), props.style) }, props.containerProps), element ? props.children : null));
    },
    unmount: function (element) {
        if (element && !element.isDestroyed) {
            element.destroy();
        }
    },
    provide: function (element) {
        if (!element) {
            return {};
        }
        return {
            cesiumWidget: element,
            scene: element.scene,
            camera: element.scene.camera,
            imageryLayerCollection: element.scene.globe.imageryLayers,
            primitiveCollection: element.scene.primitives,
        };
    },
    cesiumProps: cesiumProps$1,
    cesiumReadonlyProps: cesiumReadonlyProps$1,
});

var cesiumProps$2 = [
    "backgroundColor",
    "completeMorphOnUserInput",
    "debugCommandFilter",
    "debugShowCommands",
    "debugShowDepthFrustum",
    "debugShowFramesPerSecond",
    "debugShowFrustumPlanes",
    "debugShowFrustums",
    "eyeSeparation",
    "farToNearRatio",
    "focalLength",
    "fog",
    "fxaa",
    "globe",
    "imagerySplitPosition",
    "invertClassification",
    "invertClassificationColor",
    "logarithmicDepthBuffer",
    "logarithmicDepthFarToNearRatio",
    "mapMode2D",
    "maximumRenderTimeChange",
    "minimumDisableDepthTestDistance",
    // "mode", // enable morph with animation
    "moon",
    "morphTime",
    "nearToFarDistance2D",
    "pickTranslucentDepth",
    "requestRenderMode",
    "rethrowRenderErrors",
    "shadowMap",
    "skyAtmosphere",
    "skyBox",
    "sun",
    "sunBloom",
    "terrainExaggeration",
    "terrainProvider",
    "useDepthPicking",
    "useWebVR",
];
var cesiumEventProps$1 = {
    morphComplete: "onMorphComplete",
    morphStart: "onMorphStart",
    postRender: "onPostRender",
    preRender: "onPreRender",
    preUpdate: "onPreUpdate",
    renderError: "onRenderError",
    terrainProviderChanged: "onTerrainProviderChange",
};
var morph = function (scene, mode, morphTime) {
    switch (mode) {
        case SceneMode.SCENE2D:
            scene.morphTo2D(morphTime);
            break;
        case SceneMode.COLUMBUS_VIEW:
            scene.morphToColumbusView(morphTime);
            break;
        case SceneMode.SCENE3D:
            scene.morphTo3D(morphTime);
            break;
    }
};
var Scene = createCesiumComponent({
    name: "Scene",
    create: function (cprops, props, context) {
        var scene = context.scene;
        if (props.mode) {
            morph(scene, props.mode, props.morph);
        }
        return scene;
    },
    update: function (scene, props, prevProps) {
        if (props.mode !== prevProps.mode && props.mode) {
            morph(scene, props.mode, props.morph);
        }
    },
    // provide(element) {
    //   return {
    //     scene: element,
    //     camera: element.camera,
    //   };
    // },
    cesiumProps: cesiumProps$2,
    cesiumEventProps: cesiumEventProps$1,
    setCesiumPropsAfterCreate: true,
});

var cesiumProps$3 = [
    "position",
    "direction",
    "up",
    "right",
    "frustum",
    "defaultMoveAmount",
    "defaultLookAmount",
    "defaultRotateAmount",
    "defaultZoomAmount",
    "constrainedAxis",
    "maximumTranslateFactor",
    "maximumZoomFactor",
];
var cesiumEventProps$2 = {
    changed: "onChange",
    moveEnd: "onMoveEnd",
    moveStart: "onMoveStart",
};
var Camera = createCesiumComponent({
    name: "camera",
    create: function (cprops, props, context) {
        return context.scene.camera;
    },
    cesiumProps: cesiumProps$3,
    cesiumEventProps: cesiumEventProps$2,
    setCesiumPropsAfterCreate: true,
});

var cesiumProps$4 = [
    "availability",
    "billboard",
    "box",
    "corridor",
    "cylinder",
    "description",
    "ellipse",
    "ellipsoid",
    "entityCollection",
    "label",
    "model",
    "name",
    "orientation",
    "parent",
    "path",
    "plane",
    "point",
    "polygon",
    "polyline",
    "polylineVolume",
    "position",
    "properties",
    "rectangle",
    "show",
    "viewFrom",
    "wall",
];
var cesiumReadonlyProps$2 = ["id"];
var cesiumEventProps$3 = {
    definitionChanged: "onDefinitionChange",
};
var Entity$1 = createCesiumComponent({
    name: "Entity",
    create: function (cprops) {
        return new Entity(cprops);
    },
    mount: function (element, context) {
        context.entityCollection.add(element);
    },
    unmount: function (element, context) {
        context.entityCollection.remove(element);
    },
    provide: function (element) {
        return {
            entity: element,
        };
    },
    cesiumProps: cesiumProps$4,
    cesiumReadonlyProps: cesiumReadonlyProps$2,
    cesiumEventProps: cesiumEventProps$3,
});

// tslint:disable-next-line:no-var-requires
var renderToStaticMarkup = require("react-dom/server.browser").renderToStaticMarkup;
var EntityDescription = /** @class */ (function (_super) {
    __extends(EntityDescription, _super);
    function EntityDescription(props) {
        var _this = _super.call(this, props) || this;
        _this.update(props);
        return _this;
    }
    EntityDescription.prototype.componentDidMount = function () {
        this.update();
    };
    EntityDescription.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.children !== prevProps.children) {
            this.update();
        }
    };
    EntityDescription.prototype.render = function () {
        return null;
    };
    EntityDescription.prototype.update = function (props) {
        if (props === void 0) { props = this.props; }
        if (props.cesium && props.cesium.entity && props.children) {
            props.cesium.entity.description = new ConstantProperty(renderToStaticMarkup(props.children));
        }
    };
    return EntityDescription;
}(React.PureComponent));
var EntityDescription$1 = withContext(EntityDescription);

var ExtendedEntity = createEventWrapper(Entity$1);

var cesiumProps$5 = ["clustering", "name", "show"];
var cesiumEventProps$4 = {
    changedEvent: "onChange",
    errorEvent: "onError",
    loadingEvent: "onLoading",
};
var CustomDataSource = createCesiumComponent({
    name: "CustomDataSource",
    create: function (cprops) {
        var ds = new Cesium.CustomDataSource(cprops.name);
        if (cprops.clustering) {
            ds.clustering = cprops.clustering;
        }
        if (typeof cprops.show === "boolean") {
            ds.show = cprops.show;
        }
        return ds;
    },
    mount: function (element, context) {
        context.dataSourceCollection.add(element);
    },
    unmount: function (element, context) {
        context.dataSourceCollection.remove(element);
    },
    provide: function (element) {
        return {
            entityCollection: element.entities,
        };
    },
    cesiumProps: cesiumProps$5,
    cesiumEventProps: cesiumEventProps$4,
});

var cesiumProps$6 = ["clustering"];
var cesiumReadonlyProps$3 = ["name"];
var cesiumEventProps$5 = {
    changedEvent: "onChange",
    errorEvent: "onError",
    loadingEvent: "onLoading",
};
var load = function (_a) {
    var element = _a.element, data = _a.data, onLoad = _a.onLoad, sourceUri = _a.sourceUri;
    element
        .load(data, {
        sourceUri: sourceUri,
    })
        .then(function (value) {
        if (onLoad) {
            try {
                onLoad(value);
            }
            catch (e) {
                throw e;
            }
        }
    });
};
var CzmlDataSource = createCesiumComponent({
    name: "CzmlDataSource",
    create: function (cprops, props) {
        var ds = new Cesium.CzmlDataSource(props.name);
        if (cprops.clustering) {
            ds.clustering = cprops.clustering;
        }
        if (typeof cprops.show === "boolean") {
            ds.show = cprops.show;
        }
        return ds;
    },
    mount: function (element, context, props) {
        context.dataSourceCollection.add(element);
        if (props.data) {
            load({
                element: element,
                dataSources: context.dataSourceCollection,
                data: props.data,
                onLoad: props.onLoad,
                sourceUri: props.sourceUri,
            });
        }
    },
    update: function (element, props, prevProps, context) {
        if (prevProps.show !== props.show || !props.data) {
            element.show = !!props.data && (typeof props.show === "boolean" ? props.show : true);
        }
        if (props.data && (prevProps.data !== props.data || prevProps.sourceUri !== props.sourceUri)) {
            load({
                element: element,
                dataSources: context.dataSourceCollection,
                data: props.data,
                onLoad: props.onLoad,
                sourceUri: props.sourceUri,
            });
        }
    },
    unmount: function (element, context) {
        context.dataSourceCollection.remove(element);
    },
    cesiumProps: cesiumProps$6,
    cesiumReadonlyProps: cesiumReadonlyProps$3,
    cesiumEventProps: cesiumEventProps$5,
});

var cesiumProps$7 = ["clustering", "name"];
var cesiumEventProps$6 = {
    changedEvent: "onChange",
    errorEvent: "onError",
    loadingEvent: "onLoading",
};
var load$1 = function (_a) {
    var element = _a.element, data = _a.data, onLoad = _a.onLoad, clampToGround = _a.clampToGround, sourceUri = _a.sourceUri, markerSize = _a.markerSize, markerSymbol = _a.markerSymbol, markerColor = _a.markerColor, stroke = _a.stroke, strokeWidth = _a.strokeWidth, fill = _a.fill;
    element
        .load(data, {
        clampToGround: clampToGround,
        markerSize: markerSize,
        markerSymbol: markerSymbol,
        markerColor: markerColor,
        stroke: stroke,
        strokeWidth: strokeWidth,
        fill: fill,
        sourceUri: sourceUri,
    })
        .then(function (value) {
        if (onLoad) {
            try {
                onLoad(value);
            }
            catch (e) {
                throw e;
            }
        }
    });
};
var GeoJsonDataSource = createCesiumComponent({
    name: "GeoJsonDataSource",
    create: function (cprops, props, context) {
        var ds = new Cesium.GeoJsonDataSource(props.name);
        if (cprops.clustering) {
            ds.clustering = cprops.clustering;
        }
        if (typeof cprops.show === "boolean") {
            ds.show = cprops.show;
        }
        return ds;
    },
    mount: function (element, context, props) {
        context.dataSourceCollection.add(element);
        if (props.data) {
            load$1({
                element: element,
                dataSources: context.dataSourceCollection,
                data: props.data,
                onLoad: props.onLoad,
                clampToGround: props.clampToGround,
                sourceUri: props.sourceUri,
                markerSize: props.markerSize,
                markerSymbol: props.markerSymbol,
                markerColor: props.markerColor,
                stroke: props.stroke,
                strokeWidth: props.strokeWidth,
                fill: props.fill,
            });
        }
    },
    update: function (element, props, prevProps, context) {
        if (prevProps.show !== props.show || !props.data) {
            element.show = !!props.data && (typeof props.show === "boolean" ? props.show : true);
        }
        if (props.data &&
            (prevProps.data !== props.data ||
                prevProps.clampToGround !== props.clampToGround ||
                prevProps.sourceUri !== props.sourceUri ||
                prevProps.markerSize !== props.markerSize ||
                prevProps.markerSymbol !== props.markerSymbol ||
                prevProps.markerColor !== props.markerColor ||
                prevProps.stroke !== props.stroke ||
                prevProps.strokeWidth !== props.strokeWidth ||
                prevProps.fill !== props.fill)) {
            load$1({
                element: element,
                dataSources: context.dataSourceCollection,
                data: props.data,
                onLoad: props.onLoad,
                clampToGround: props.clampToGround,
                sourceUri: props.sourceUri,
                markerSize: props.markerSize,
                markerSymbol: props.markerSymbol,
                markerColor: props.markerColor,
                stroke: props.stroke,
                strokeWidth: props.strokeWidth,
                fill: props.fill,
            });
        }
    },
    unmount: function (element, context) {
        context.dataSourceCollection.remove(element);
    },
    cesiumProps: cesiumProps$7,
    cesiumEventProps: cesiumEventProps$6,
});

var cesiumProps$8 = ["clustering"];
var cesiumReadonlyProps$4 = [
    "camera",
    "canvas",
    "ellipsoid",
];
var cesiumEventProps$7 = {
    changedEvent: "onChange",
    errorEvent: "onError",
    loadingEvent: "onLoading",
    refreshEvent: "onReferesh",
    unsupportedNodeEvent: "onUnsupportedNode",
};
var load$2 = function (_a) {
    var element = _a.element, data = _a.data, onLoad = _a.onLoad, clampToGround = _a.clampToGround, ellipsoid = _a.ellipsoid, sourceUri = _a.sourceUri;
    element.load(data, { clampToGround: clampToGround, ellipsoid: ellipsoid, sourceUri: sourceUri }).then(function (value) {
        if (onLoad) {
            try {
                onLoad(value);
            }
            catch (e) {
                throw e;
            }
        }
    });
};
var KmlDataSource = createCesiumComponent({
    name: "KmlDataSource",
    create: function (cprops, props, context) {
        var ds = new Cesium.KmlDataSource({
            camera: cprops.camera || context.scene.camera,
            canvas: cprops.canvas || context.scene.canvas,
            ellipsoid: cprops.ellipsoid,
        });
        if (cprops.clustering) {
            ds.clustering = cprops.clustering;
        }
        if (typeof cprops.show === "boolean") {
            ds.show = cprops.show;
        }
        return ds;
    },
    mount: function (element, context, props) {
        context.dataSourceCollection.add(element);
        if (props.data) {
            load$2({
                element: element,
                dataSources: context.dataSourceCollection,
                data: props.data,
                onLoad: props.onLoad,
                clampToGround: props.clampToGround,
                ellipsoid: props.ellipsoid,
                sourceUri: props.sourceUri,
            });
        }
    },
    update: function (element, props, prevProps, context) {
        if (prevProps.show !== props.show || !props.data) {
            element.show = !!props.data && (typeof props.show === "boolean" ? props.show : true);
        }
        if (props.data &&
            (prevProps.data !== props.data ||
                prevProps.clampToGround !== props.clampToGround ||
                prevProps.ellipsoid !== props.ellipsoid ||
                prevProps.sourceUri !== props.sourceUri)) {
            load$2({
                element: element,
                dataSources: context.dataSourceCollection,
                data: props.data,
                onLoad: props.onLoad,
                clampToGround: props.clampToGround,
                ellipsoid: props.ellipsoid,
                sourceUri: props.sourceUri,
            });
        }
    },
    unmount: function (element, context) {
        context.dataSourceCollection.remove(element);
    },
    cesiumProps: cesiumProps$8,
    cesiumReadonlyProps: cesiumReadonlyProps$4,
    cesiumEventProps: cesiumEventProps$7,
});

var cesiumProps$9 = [
    "appearance",
    "cull",
    "debugShowBoundingVolume",
    "depthFailAppearance",
    "modelMatrix",
    "shadows",
    "show",
];
var cesiumReadonlyProps$5 = [
    "allowPicking",
    "asynchronous",
    "compressVertices",
    "geometryInstances",
    "interleave",
    "releaseGeometryInstances",
    "vertexCacheOptimize",
];
var Primitive = createCesiumComponent({
    name: "Primitive",
    create: function (cprops) {
        return new Cesium.Primitive(cprops);
    },
    mount: function (element, context) {
        context.primitiveCollection.add(element);
    },
    unmount: function (element, context) {
        context.primitiveCollection.remove(element);
        if (!element.isDestroyed) {
            element.destroy();
        }
    },
    cesiumProps: cesiumProps$9,
    cesiumReadonlyProps: cesiumReadonlyProps$5,
});

var ExtendedPrimitve = createEventWrapper(Primitive);

var cesiumProps$a = [
    "color",
    "disableDepthTestDistance",
    "distanceDisplayCondition",
    "id",
    "outlineColor",
    "outlineWidth",
    "pixelSize",
    "position",
    "scaleByDistance",
    "show",
    "translucencyByDistance",
];
var PointPrimitive = createCesiumComponent({
    name: "PointPrimitive",
    create: function () {
        return new Cesium.PointPrimitive();
    },
    mount: function (element, context) {
        context.pointPrimitiveCollection.add(element);
    },
    unmount: function (element, context) {
        if (!context.pointPrimitiveCollection.isDestroyed) {
            context.pointPrimitiveCollection.remove(element);
        }
    },
    cesiumProps: cesiumProps$a,
    setCesiumPropsAfterCreate: true,
});

var ExtendedPointPrimitve = createEventWrapper(PointPrimitive);

var cesiumProps$b = [
    "blendOption",
    "debugShowBoundingVolume",
    "modelMatrix",
];
var PointPrimitiveCollection = createCesiumComponent({
    name: "PointPrimitveCollection",
    create: function (cprops) {
        return new Cesium.PointPrimitiveCollection(cprops);
    },
    mount: function (element, context) {
        context.primitiveCollection.add(element);
    },
    unmount: function (element, context) {
        if (!context.primitiveCollection.isDestroyed) {
            context.primitiveCollection.remove(element);
        }
        if (!element.isDestroyed) {
            element.destroy();
        }
    },
    provide: function (element) {
        return {
            pointPrimitiveCollection: element,
        };
    },
    cesiumProps: cesiumProps$b,
});

var ScreenSpaceEvent = /** @class */ (function (_super) {
    __extends(ScreenSpaceEvent, _super);
    function ScreenSpaceEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScreenSpaceEvent.prototype.componentDidMount = function () {
        this.setEvent();
    };
    ScreenSpaceEvent.prototype.componentDidUpdate = function (prevProps) {
        var screenSpaceEventHandler = this.context.screenSpaceEventHandler;
        screenSpaceEventHandler.removeInputAction(prevProps.type, prevProps.modifier);
        this.setEvent();
    };
    ScreenSpaceEvent.prototype.componentWillUnmount = function () {
        var _a = this.props, action = _a.action, screenSpaceEventHandler = _a.cesium.screenSpaceEventHandler, modifier = _a.modifier, type = _a.type;
        if (screenSpaceEventHandler && !screenSpaceEventHandler.isDestroyed() && action) {
            screenSpaceEventHandler.removeInputAction(type, modifier);
        }
    };
    ScreenSpaceEvent.prototype.render = function () {
        return null;
    };
    ScreenSpaceEvent.prototype.setEvent = function () {
        var _a = this.props, action = _a.action, screenSpaceEventHandler = _a.cesium.screenSpaceEventHandler, modifier = _a.modifier, type = _a.type;
        if (action) {
            screenSpaceEventHandler.setInputAction(action, type, modifier);
        }
        else {
            // just remove default events
            screenSpaceEventHandler.removeInputAction(type, modifier);
        }
    };
    return ScreenSpaceEvent;
}(React.PureComponent));
var ScreenSpaceEvent$1 = withContext(ScreenSpaceEvent);

var ScreenSpaceEventHandler$1 = createCesiumComponent({
    name: "ScreenSpaceEventHandler",
    create: function (cprops, props, context) {
        return new Cesium.ScreenSpaceEventHandler(context.scene.canvas);
    },
    unmount: function (element) {
        if (!element.isDestroyed()) {
            element.destroy();
        }
    },
    provide: function (element) {
        return {
            screenSpaceEventHandler: element,
        };
    },
});

var cesiumProps$c = [
    "bounceAnimationTime",
    "enableCollisionDetection",
    "enableInputs",
    "enableLook",
    "enableRotate",
    "enableTilt",
    "enableTranslate",
    "enableZoom",
    "inertiaSpin",
    "inertiaTranslate",
    "inertiaZoom",
    "lookEventTypes",
    "maximumMovementRatio",
    "maximumZoomDistance",
    "minimumCollisionTerrainHeight",
    "minimumPickingTerrainHeight",
    "minimumTrackBallHeight",
    "minimumZoomDistance",
    "rotateEventTypes",
    "tiltEventTypes",
    "translateEventTypes",
    "zoomEventTypes",
];
var ScreenSpaceCameraController = createCesiumComponent({
    name: "ScreenSpaceCameraController",
    create: function (cprops, props, context) {
        return context.scene.screenSpaceCameraController;
    },
    cesiumProps: cesiumProps$c,
    setCesiumPropsAfterCreate: true,
});

var DefaultScreenSpaceEventHandler = createCesiumComponent({
    name: "ScreenSpaceEventHandler",
    create: function (cprops, props, context) {
        return context.cesiumWidget.screenSpaceEventHandler;
    },
    provide: function (element) {
        return {
            screenSpaceEventHandler: element,
        };
    },
});

var cesiumProps$d = [
    "alpha",
    "brightness",
    "contrast",
    "hue",
    "saturation",
    "gamma",
    "splitDirection",
    "minificationFilter",
    "magnificationFilter",
    "cutoutRectangle",
    "show",
];
var cesiumReadonlyProps$6 = [
    "imageryProvider",
    "rectangle",
    "maximumAnisotropy",
    "minimumTerrainLevel",
    "maximumTerrainLevel",
];
var ImageryLayer = createCesiumComponent({
    name: "ImageryLayer",
    create: function (cprops) {
        return new Cesium.ImageryLayer(cprops.imageryProvider, {
            rectangle: cprops.rectangle,
            alpha: cprops.alpha,
            brightness: cprops.brightness,
            contrast: cprops.contrast,
            hue: cprops.hue,
            saturation: cprops.saturation,
            gamma: cprops.gamma,
            splitDirection: cprops.splitDirection,
            minificationFilter: cprops.minificationFilter,
            magnificationFilter: cprops.magnificationFilter,
            show: cprops.show,
            maximumAnisotropy: cprops.maximumAnisotropy,
            minimumTerrainLevel: cprops.minimumTerrainLevel,
            maximumTerrainLevel: cprops.maximumTerrainLevel,
            cutoutRectangle: cprops.cutoutRectangle,
        } /* workaround for splitDirection */);
    },
    mount: function (element, context) {
        context.imageryLayerCollection.add(element);
    },
    unmount: function (element, context) {
        context.imageryLayerCollection.remove(element);
    },
    cesiumProps: cesiumProps$d,
    cesiumReadonlyProps: cesiumReadonlyProps$6,
});

var CameraFlyHome = createCameraOperation({
    name: "CameraFlyHome",
    cameraOperationStart: function (camera, props) {
        camera.flyHome(props.duration);
    },
});

var CameraFlyTo = createCameraOperation({
    name: "CameraFlyTo",
    cameraOperationStart: function (camera, props) {
        var destination = props.destination, orientation = props.orientation, duration = props.duration, onComplete = props.onComplete, onCancel = props.onCancel, endTransform = props.endTransform, maximumHeight = props.maximumHeight, pitchAdjustHeight = props.pitchAdjustHeight, flyOverLongitude = props.flyOverLongitude, flyOverLongitudeWeight = props.flyOverLongitudeWeight, easingFunction = props.easingFunction;
        camera.flyTo({
            destination: destination,
            orientation: orientation,
            duration: duration,
            complete: onComplete,
            cancel: onCancel,
            endTransform: endTransform,
            maximumHeight: maximumHeight,
            pitchAdjustHeight: pitchAdjustHeight,
            flyOverLongitude: flyOverLongitude,
            flyOverLongitudeWeight: flyOverLongitudeWeight,
            easingFunction: easingFunction,
        });
    },
});

var CameraFlyToBoundingSphere = createCameraOperation({
    name: "CameraFlyToBoundingSphere",
    cameraOperationStart: function (camera, props) {
        var boundingSphere = props.boundingSphere, offset = props.offset, duration = props.duration, onComplete = props.onComplete, onCancel = props.onCancel, endTransform = props.endTransform, maximumHeight = props.maximumHeight, pitchAdjustHeight = props.pitchAdjustHeight, flyOverLongitude = props.flyOverLongitude, flyOverLongitudeWeight = props.flyOverLongitudeWeight, easingFunction = props.easingFunction;
        camera.flyToBoundingSphere(boundingSphere, {
            offset: offset,
            duration: duration,
            complete: onComplete,
            cancel: onCancel,
            endTransform: endTransform,
            maximumHeight: maximumHeight,
            pitchAdjustHeight: pitchAdjustHeight,
            flyOverLongitude: flyOverLongitude,
            flyOverLongitudeWeight: flyOverLongitudeWeight,
            easingFunction: easingFunction,
        });
    },
});

export { createCesiumComponent, createCameraOperation as CameraOperation, createEventWrapper, Viewer$1 as Viewer, CesiumWidget$1 as CesiumWidget, Scene, Camera, Entity$1 as Entity, EntityDescription$1 as EntityDescription, ExtendedEntity, CustomDataSource, CzmlDataSource, GeoJsonDataSource, KmlDataSource, Primitive, ExtendedPrimitve as ExtendedPrimitive, ExtendedPointPrimitve as ExtendedPointPrimitive, PointPrimitive, PointPrimitiveCollection, ScreenSpaceEvent$1 as ScreenSpaceEvent, ScreenSpaceEventHandler$1 as ScreenSpaceEventHandler, ScreenSpaceCameraController, DefaultScreenSpaceEventHandler, ImageryLayer, CameraFlyHome, CameraFlyTo, CameraFlyToBoundingSphere, Provider, Consumer, withContext, attachEvents, detachEvents, updateEvents, getEventProps };
//# sourceMappingURL=resium.es.js.map
