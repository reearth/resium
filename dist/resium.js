(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('cesium')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'cesium'], factory) :
    (factory((global.Resium = {}),global.React,global.Cesium));
}(this, (function (exports,React,Cesium) { 'use strict';

    React = React && React.hasOwnProperty('default') ? React['default'] : React;
    var Cesium__default = 'default' in Cesium ? Cesium['default'] : Cesium;

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

    var INFINITY = 1 / 0,
        MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = '[object Arguments]',
        funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]',
        symbolTag = '[object Symbol]';
    var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
    var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
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
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var Symbol$1 = root.Symbol,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : undefined;
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
    var withCesium = function (Component) {
        return React.forwardRef(function (props, ref) { return (React.createElement(Consumer, null, function (value) { return React.createElement(Component, __assign({}, Object.assign({}, props, { ref: ref }), { cesium: value })); })); });
    };

    var attachEvents = function (target, events) {
        Object.entries(events).forEach(function (_a) {
            var k = _a[0], v = _a[1];
            var ev = target[k];
            if (ev instanceof Cesium.Event && v) {
                ev.addEventListener(v);
            }
        });
    };
    var detachEvents = function (target, events) {
        Object.entries(events).forEach(function (_a) {
            var k = _a[0], v = _a[1];
            var ev = target[k];
            if (ev instanceof Cesium.Event && v) {
                ev.removeEventListener(v);
            }
        });
    };
    var updateEvents = function (target, prevEvents, newEvents) {
        var pek = Object.keys(prevEvents);
        var nek = Object.keys(newEvents);
        var re = pek
            .map(function (k) { return [k, prevEvents[k]]; })
            .reduce(function (e, _a) {
            var k = _a[0], v = _a[1];
            if (nek.indexOf(k) === -1 || v !== newEvents[k]) {
                e[k] = v;
            }
            return e;
        }, {});
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
                return Object.keys(a).filter(function (k) { return a[k] !== b[k]; });
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
                return !opts.render && !this.mounted ? null : opts.provide ? (React.createElement(Provider, { value: Object.assign({}, this.props.cesium, this._ce ? opts.provide(this._ce, this.props, this._state) : {}) }, render)) : (render);
            };
            CesiumComponent.prototype.componentDidMount = function () {
                if (opts.createRef) {
                    this.create(this.props);
                }
                this.mount();
                this.mounted = true;
                this.forceUpdate();
            };
            CesiumComponent.prototype.componentDidUpdate = function (prevProps) {
                if (!this.mounted) {
                    if (opts.createRef) {
                        this.create(this.props);
                    }
                    this.mount();
                    this.mounted = true;
                    this.forceUpdate();
                    return;
                }
                var shouldUpdateProps = CesiumComponent.shouldUpdate(CesiumComponent.getCesiumReadOnlyProps(this.props), CesiumComponent.getCesiumReadOnlyProps(prevProps));
                if (shouldUpdateProps.length > 0) {
                    if (process.env.NODE_ENV !== "production") {
                        console.warn("Warning: <" + opts.name + "> is remounted because read only props have been updated: " + shouldUpdateProps.join(", "));
                    }
                    this.unmount();
                    if (!opts.createRef) {
                        this.create(this.props);
                    }
                    this.mounted = false;
                    this.forceUpdate();
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
                var cesiumProps = lodash_pick(props, (opts.cesiumProps || []).concat((opts.cesiumReadonlyProps || [])));
                var element = opts.create(cesiumProps, props, this.props.cesium, this.ref);
                if (Array.isArray(element)) {
                    this._ce = element[0];
                    this._state = element[1];
                }
                else {
                    this._ce = element;
                }
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
                    opts.unmount(this._ce, this.props.cesium, this.props, this.ref, this._state);
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
            CesiumComponent.displayName = opts.name;
            CesiumComponent.defaultProps = opts.defaultProps || {};
            return CesiumComponent;
        }(React.PureComponent));
        return withCesium(CesiumComponent);
    };

    var createCameraOperation = function (opts) {
        var _a;
        return withCesium((_a = /** @class */ (function (_super) {
                __extends(CameraOperation, _super);
                function CameraOperation() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                CameraOperation.prototype.componentDidMount = function () {
                    if (this.props.cesium.camera) {
                        opts.cameraOperationStart(this.props.cesium.camera, this.props);
                    }
                };
                CameraOperation.prototype.componentDidUpdate = function (prevProps) {
                    if (this.props.cesium.camera) {
                        this.props.cesium.camera.cancelFlight();
                        opts.cameraOperationStart(this.props.cesium.camera, this.props, prevProps);
                    }
                };
                CameraOperation.prototype.componentWillUnmount = function () {
                    var _a = this.props, cancelCameraFlight = _a.cancelCameraFlight, camera = _a.cesium.camera;
                    if (cancelCameraFlight && camera) {
                        camera.cancelFlight();
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

    var polylineEquals = function (a, b) {
        return !!a &&
            !!b &&
            a instanceof Cesium.Polyline &&
            b instanceof Cesium.Polyline &&
            a.show === b.show &&
            a.width === b.width &&
            a.loop === b.loop &&
            a.material === b.material &&
            a.positions === b.positions &&
            a.id === b.id &&
            Cesium.DistanceDisplayCondition.equals(a.distanceDisplayCondition, b.distanceDisplayCondition);
    };
    var pickedObjectEquals = function (picked, element) {
        return !!picked &&
            (picked === element ||
                (!!picked.id && picked.id === element) ||
                (!!picked.primitive &&
                    (picked.primitive === element ||
                        (!!picked.primitive.equals && picked.primitive.equals(element)) ||
                        polylineEquals(picked.primitive, element))));
    };

    var eventNames = [
        "onClick",
        "onDoubleClick",
        "onMouseDown",
        "onMouseUp",
        "onMiddleClick",
        "onMiddleDown",
        "onMiddleUp",
        "onMouseMove",
        "onPinchEnd",
        "onPinchMove",
        "onPinchStart",
        "onRightClick",
        "onRightDown",
        "onRightUp",
        "onWheel",
        "onMouseEnter",
        "onMouseLeave",
    ];
    var EventManager = /** @class */ (function () {
        function EventManager(scene, canvas) {
            var _this = this;
            this.events = {
                onClick: new Map(),
                onDoubleClick: new Map(),
                onMouseDown: new Map(),
                onMouseUp: new Map(),
                onMiddleClick: new Map(),
                onMiddleDown: new Map(),
                onMiddleUp: new Map(),
                onMouseMove: new Map(),
                onPinchEnd: new Map(),
                onPinchMove: new Map(),
                onPinchStart: new Map(),
                onRightClick: new Map(),
                onRightDown: new Map(),
                onRightUp: new Map(),
                onWheel: new Map(),
                onMouseEnter: new Map(),
                onMouseLeave: new Map(),
            };
            this.hovered = new Map();
            this.changed = new Map();
            this.onMouseMove = function (e) {
                var picked = _this.pick(e.endPosition);
                _this.changed.clear();
                _this.hovered.forEach(function (h, element) {
                    var p = pickedObjectEquals(picked, element);
                    _this.hovered.set(element, p);
                    if (p !== h) {
                        _this.changed.set(element, p);
                    }
                });
                if (picked) {
                    _this.events.onMouseMove.forEach(function (cb, element) {
                        if (_this.hovered.get(element)) {
                            cb(e, element);
                        }
                    });
                }
                _this.changed.forEach(function (hovered, element) {
                    if (hovered) {
                        var onMouseEnter = _this.events.onMouseEnter.get(element);
                        if (onMouseEnter) {
                            onMouseEnter(e, element);
                        }
                    }
                    else {
                        var onMouseLeave = _this.events.onMouseLeave.get(element);
                        if (onMouseLeave) {
                            onMouseLeave(e, element);
                        }
                    }
                });
            };
            this.eventCallback = function (et) { return function (e) {
                var picked = _this.pick(e.position);
                if (picked) {
                    _this.events[et].forEach(function (cb, element) {
                        if (pickedObjectEquals(picked, element)) {
                            cb(e, element);
                        }
                    });
                }
            }; };
            this.scene = scene;
            this.sshe = new Cesium.ScreenSpaceEventHandler(canvas);
        }
        EventManager.prototype.destroy = function () {
            if (!this.sshe.isDestroyed()) {
                this.sshe.destroy();
            }
        };
        EventManager.prototype.isDestroyed = function () {
            return this.sshe.isDestroyed();
        };
        EventManager.prototype.on = function (element, type, cb) {
            this.events[type].set(element, cb);
        };
        EventManager.prototype.off = function (element, type) {
            this.events[type].delete(element);
        };
        EventManager.prototype.setEvents = function (element, props) {
            var _this = this;
            Object.entries(props).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                var et = k;
                if (eventNames.includes(et)) {
                    if (v) {
                        _this.on(element, et, v);
                    }
                    else {
                        _this.off(element, et);
                    }
                }
            });
            this.commit();
        };
        EventManager.prototype.clearEvents = function (element) {
            var _this = this;
            eventNames.forEach(function (et) {
                _this.off(element, et);
            });
            this.commit();
        };
        EventManager.prototype.commit = function () {
            var _this = this;
            var sshe = this.sshe;
            var destroyed = this.sshe.isDestroyed();
            var elements = new Set(this.hovered.keys());
            var elements2 = new Set();
            if (!destroyed) {
                if (this.events.onMouseEnter.size === 0 &&
                    this.events.onMouseLeave.size === 0 &&
                    this.events.onMouseMove.size === 0) {
                    this.sshe.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
                }
                else if (!this.sshe.getInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE)) {
                    this.sshe.setInputAction(this.onMouseMove, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
                }
            }
            Object.entries(this.events).forEach(function (_a) {
                var et = _a[0], m = _a[1];
                var eventType = et;
                m.forEach(function (v, k) {
                    if (!_this.hovered.has(k)) {
                        _this.hovered.set(k, false);
                    }
                    elements2.add(k);
                });
                if (et === "onMouseEnter" || et === "onMouseLeave" || et === "onMouseMove") {
                    return;
                }
                var cesiumEventType = EventManager.eventTypeMap[eventType];
                if (!destroyed) {
                    if (m.size === 0) {
                        sshe.removeInputAction(cesiumEventType);
                    }
                    else if (!sshe.getInputAction(cesiumEventType)) {
                        sshe.setInputAction(_this.eventCallback(eventType), cesiumEventType);
                    }
                }
            });
            elements.forEach(function (e) {
                if (!elements2.has(e)) {
                    _this.hovered.delete(e);
                }
            });
        };
        EventManager.prototype.getScreenSpaceEventHandler = function () {
            return this.sshe;
        };
        EventManager.prototype.pick = function (pos) {
            if (!pos) {
                return undefined;
            }
            var picked = this.scene.pick(pos);
            if (picked) {
                if (picked.id instanceof Cesium__default.Entity) {
                    return picked.id;
                }
                return picked;
            }
            return undefined;
        };
        EventManager.eventTypeMap = {
            onClick: Cesium.ScreenSpaceEventType.LEFT_CLICK,
            onDoubleClick: Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK,
            onMouseDown: Cesium.ScreenSpaceEventType.LEFT_DOWN,
            onMouseUp: Cesium.ScreenSpaceEventType.LEFT_UP,
            onMiddleClick: Cesium.ScreenSpaceEventType.MIDDLE_CLICK,
            onMiddleDown: Cesium.ScreenSpaceEventType.MIDDLE_DOWN,
            onMiddleUp: Cesium.ScreenSpaceEventType.MIDDLE_UP,
            onMouseMove: Cesium.ScreenSpaceEventType.MOUSE_MOVE,
            onPinchEnd: Cesium.ScreenSpaceEventType.PINCH_END,
            onPinchMove: Cesium.ScreenSpaceEventType.PINCH_MOVE,
            onPinchStart: Cesium.ScreenSpaceEventType.PINCH_START,
            onRightClick: Cesium.ScreenSpaceEventType.RIGHT_CLICK,
            onRightDown: Cesium.ScreenSpaceEventType.RIGHT_DOWN,
            onRightUp: Cesium.ScreenSpaceEventType.RIGHT_UP,
            onWheel: Cesium.ScreenSpaceEventType.WHEEL,
            onMouseEnter: Cesium.ScreenSpaceEventType.MOUSE_MOVE,
            onMouseLeave: Cesium.ScreenSpaceEventType.MOUSE_MOVE,
        };
        return EventManager;
    }());

    var cesiumProps = [
        "alignAxis",
        "color",
        "disableDepthTestDistance",
        "distanceDisplayCondition",
        "height",
        "heightReference",
        "horizontalOrigin",
        "id",
        "image",
        "pixelOffset",
        "pixelOffsetScaleByDistance",
        "position",
        "rotation",
        "scale",
        "scaleByDistance",
        "show",
        "sizeInMeters",
        "translucencyByDistance",
        "verticalOrigin",
        "width",
    ];
    var Billboard = createCesiumComponent({
        name: "Billboard",
        create: function (cprops, props, context) {
            return new Cesium__default.Billboard(cprops, context.billboardCollection);
        },
        mount: function (element, context) {
            if (context.billboardCollection) {
                context.billboardCollection.add(element);
            }
        },
        unmount: function (element, context) {
            if (context.__RESIUM_EVENT_MANAGER) {
                context.__RESIUM_EVENT_MANAGER.clearEvents(element);
            }
            if (context.billboardCollection && !context.billboardCollection.isDestroyed()) {
                context.billboardCollection.remove(element);
            }
        },
        update: function (element, props, prevProps, context) {
            if (context.__RESIUM_EVENT_MANAGER) {
                context.__RESIUM_EVENT_MANAGER.setEvents(element, props);
            }
        },
        cesiumProps: cesiumProps,
        setCesiumPropsAfterCreate: true,
    });

    var cesiumProps$1 = [
        "blendOption",
        "debugShowBoundingVolume",
        "length",
        "modelMatrix",
    ];
    var BillboardCollection = createCesiumComponent({
        name: "BillboardCollection",
        create: function (cprops, props, context) {
            return new Cesium__default.BillboardCollection({
                modelMatrix: cprops.modelMatrix,
                debugShowBoundingVolume: cprops.debugShowBoundingVolume,
                scene: context.scene,
                blendOption: cprops.blendOption,
            });
        },
        mount: function (element, context) {
            if (context.primitiveCollection) {
                context.primitiveCollection.add(element);
            }
        },
        unmount: function (element, context) {
            if (context.primitiveCollection && !context.primitiveCollection.isDestroyed()) {
                context.primitiveCollection.remove(element);
            }
            if (!element.isDestroyed()) {
                element.destroy();
            }
        },
        provide: function (element) {
            return {
                billboardCollection: element,
            };
        },
        cesiumProps: cesiumProps$1,
    });

    var cesiumProps$2 = [
        "image",
        "show",
        "scale",
        "horizontalOrigin",
        "verticalOrigin",
        "eyeOffset",
        "pixelOffset",
        "rotation",
        "alignedAxis",
        "width",
        "height",
        "color",
        "scaleByDistance",
        "translucencyByDistance",
        "pixelOffsetScaleByDistance",
        "imageSubRegion",
        "sizeInMeters",
        "heightReference",
        "distanceDisplayCondition",
        "disableDepthTestDistance",
    ];
    var cesiumEventProps = {
        definitionChanged: "onDefinitionChange",
    };
    var BillboardGraphics = createCesiumComponent({
        name: "BillboardGraphics",
        create: function (cprops) {
            return new Cesium__default.BillboardGraphics(cprops);
        },
        mount: function (element, context) {
            if (context.entity) {
                context.entity.billboard = element;
            }
        },
        unmount: function (element, context) {
            if (context.entity) {
                context.entity.billboard = undefined;
            }
        },
        cesiumProps: cesiumProps$2,
        cesiumEventProps: cesiumEventProps,
    });

    var cesiumProps$3 = [
        "heightReference",
        "dimensions",
        "show",
        "fill",
        "material",
        "outline",
        "outlineColor",
        "outlineWidth",
        "shadows",
        "distanceDisplayCondition",
    ];
    var cesiumEventProps$1 = {
        definitionChanged: "onDefinitionChange",
    };
    var BoxGraphics = createCesiumComponent({
        name: "BoxGraphics",
        create: function (cprops) {
            return new Cesium__default.BoxGraphics(cprops);
        },
        mount: function (element, context) {
            if (context.entity) {
                context.entity.box = element;
            }
        },
        unmount: function (element, context) {
            if (context.entity) {
                context.entity.box = undefined;
            }
        },
        cesiumProps: cesiumProps$3,
        cesiumEventProps: cesiumEventProps$1,
    });

    var cesiumProps$4 = [
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
        cesiumProps: cesiumProps$4,
        cesiumEventProps: cesiumEventProps$2,
        setCesiumPropsAfterCreate: true,
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

    var cesiumProps$5 = [
        "url",
        "show",
        "modelMatrix",
        "shadows",
        "maximumScreenSpaceError",
        "maximumMemoryUsage",
        "cullWithChildrenBounds",
        "dynamicScreenSpaceError",
        "dynamicScreenSpaceErrorDensity",
        "dynamicScreenSpaceErrorFactor",
        "dynamicScreenSpaceErrorHeightFalloff",
        "skipLevelOfDetail",
        "baseScreenSpaceError",
        "skipScreenSpaceErrorFactor",
        "skipLevels",
        "immediatelyLoadDesiredLevelOfDetail",
        "loadSiblings",
        "clippingPlanes",
        "classificationType",
        "ellipsoid",
        "imageBasedLightingFactor",
        "lightColor",
        "debugFreezeFrame",
        "debugColorizeTiles",
        "debugWireframe",
        "debugShowBoundingVolume",
        "debugShowContentBoundingVolume",
        "debugShowViewerRequestVolume",
        "debugShowGeometricError",
        "debugShowRenderingStatistics",
        "debugShowMemoryUsage",
        "debugShowUrl",
        "colorBlendAmount",
        "colorBlendMode",
    ];
    var cesiumReadonlyProps = ["pointCloudShading"];
    var cesiumEventProps$3 = {
        allTilesLoaded: "onAllTilesLoad",
        initialTilesLoaded: "onInitialTilesLoad",
        loadProgress: "onLoadProgress",
        tileFailed: "onTileFailed",
        tileLoad: "onTileLoad",
        tileUnload: "onTileUnload",
        tileVisible: "onTileVisible",
    };
    var Cesium3DTileset = createCesiumComponent({
        name: "Cesium3DTileset",
        create: function (cprops, props) {
            var c3ts = new Cesium__default.Cesium3DTileset(cprops);
            c3ts.colorBlendAmount = cprops.colorBlendAmount;
            c3ts.colorBlendMode = cprops.colorBlendMode;
            if (props.onReady) {
                c3ts.readyPromise.then(props.onReady);
            }
            return c3ts;
        },
        mount: function (element, context) {
            if (context.primitiveCollection) {
                context.primitiveCollection.add(element);
            }
        },
        unmount: function (element, context) {
            if (context.primitiveCollection && !context.primitiveCollection.isDestroyed()) {
                context.primitiveCollection.remove(element);
            }
            if (!element.isDestroyed()) {
                element.destroy();
            }
        },
        cesiumProps: cesiumProps$5,
        cesiumReadonlyProps: cesiumReadonlyProps,
        cesiumEventProps: cesiumEventProps$3,
    });

    var cesiumProps$6 = [
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
    var CesiumWidget = createCesiumComponent({
        name: "Viewer",
        createRef: true,
        create: function (cprops, props, context, ref) {
            var v = new Cesium.CesiumWidget(ref.current, cprops);
            if (v && typeof props.resolutionScale === "number") {
                v.resolutionScale = props.resolutionScale;
            }
            var state;
            if (v) {
                state = new Cesium__default.ScreenSpaceEventHandler(v.canvas);
            }
            return [v, state];
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
        unmount: function (element, cprops, props, ref, state) {
            if (element && state) {
                var sshe = state;
                if (!sshe.isDestroyed()) {
                    sshe.destroy();
                }
            }
            if (element && !element.isDestroyed()) {
                element.destroy();
            }
        },
        provide: function (element, props, state) {
            if (!element) {
                return {};
            }
            return {
                cesiumWidget: element,
                scene: element.scene,
                camera: element.scene.camera,
                imageryLayerCollection: element.scene.globe.imageryLayers,
                primitiveCollection: element.scene.primitives,
                globe: element.scene.globe,
                __RESIUM_SSEH: state,
            };
        },
        cesiumProps: cesiumProps$6,
        cesiumReadonlyProps: cesiumReadonlyProps$1,
    });

    var cesiumEventProps$4 = {
        onStop: "onStop",
        onTick: "onTick",
    };
    var cesiumProps$7 = [
        "canAnimate",
        "clockRange",
        "clockStep",
        "currentTime",
        "multiplier",
        "shouldAnimate",
        "startTime",
        "stopTime",
    ];
    var Clock = createCesiumComponent({
        name: "clock",
        create: function (cprops, props, context) {
            return context.cesiumWidget.clock;
        },
        cesiumProps: cesiumProps$7,
        cesiumEventProps: cesiumEventProps$4,
        setCesiumPropsAfterCreate: true,
    });

    var cesiumProps$8 = [
        "positions",
        "width",
        "cornerType",
        "height",
        "heightReference",
        "extrudedHeight",
        "extrudedHeightReference",
        "show",
        "fill",
        "material",
        "outline",
        "outlineColor",
        "outlineWidth",
        "granularity",
        "shadows",
        "distanceDisplayCondition",
        "zIndex",
        "classificationType",
    ];
    var cesiumEventProps$5 = {
        definitionChanged: "onDefinitionChange",
    };
    var CorridorGraphics = createCesiumComponent({
        name: "CorridorGraphics",
        create: function (cprops) {
            var cg = new Cesium__default.CorridorGraphics(cprops);
            if (cprops.classificationType) {
                cg.classificationType = cprops.classificationType;
            }
            return cg;
        },
        mount: function (element, context) {
            if (context.entity) {
                context.entity.corridor = element;
            }
        },
        unmount: function (element, context) {
            if (context.entity) {
                context.entity.corridor = undefined;
            }
        },
        cesiumProps: cesiumProps$8,
        cesiumEventProps: cesiumEventProps$5,
    });

    var cesiumProps$9 = ["clustering", "name", "show"];
    var cesiumEventProps$6 = {
        changedEvent: "onChange",
        errorEvent: "onError",
        loadingEvent: "onLoading",
    };
    var CustomDataSource = createCesiumComponent({
        name: "CustomDataSource",
        create: function (cprops) {
            var ds = new Cesium__default.CustomDataSource(cprops.name);
            if (cprops.clustering) {
                ds.clustering = cprops.clustering;
            }
            if (typeof cprops.show === "boolean") {
                ds.show = cprops.show;
            }
            return ds;
        },
        mount: function (element, context) {
            if (context.dataSourceCollection) {
                context.dataSourceCollection.add(element);
            }
        },
        unmount: function (element, context) {
            if (context.dataSourceCollection && !context.dataSourceCollection.isDestroyed()) {
                context.dataSourceCollection.remove(element);
            }
        },
        provide: function (element) {
            return {
                entityCollection: element.entities,
                dataSource: element,
            };
        },
        cesiumProps: cesiumProps$9,
        cesiumEventProps: cesiumEventProps$6,
    });

    var cesiumProps$a = [
        "heightReference",
        "length",
        "topRadius",
        "bottomRadius",
        "show",
        "fill",
        "material",
        "outline",
        "outlineColor",
        "outlineWidth",
        "numberOfVerticalLines",
        "slices",
        "shadowMode",
        "distanceDisplayCondition",
    ];
    var cesiumEventProps$7 = {
        definitionChanged: "onDefinitionChange",
    };
    var CylinderGraphics = createCesiumComponent({
        name: "CylinderGraphics",
        create: function (cprops) {
            return new Cesium__default.CylinderGraphics(cprops);
        },
        mount: function (element, context) {
            if (context.entity) {
                context.entity.cylinder = element;
            }
        },
        unmount: function (element, context) {
            if (context.entity) {
                context.entity.cylinder = undefined;
            }
        },
        cesiumProps: cesiumProps$a,
        cesiumEventProps: cesiumEventProps$7,
    });

    var cesiumProps$b = ["clustering"];
    var cesiumReadonlyProps$2 = ["name"];
    var cesiumEventProps$8 = {
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
            var ds = new Cesium__default.CzmlDataSource(props.name);
            if (cprops.clustering) {
                ds.clustering = cprops.clustering;
            }
            if (typeof cprops.show === "boolean") {
                ds.show = cprops.show;
            }
            return ds;
        },
        mount: function (element, context, props) {
            if (context.dataSourceCollection) {
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
            }
        },
        update: function (element, props, prevProps, context) {
            if (prevProps.show !== props.show || !props.data) {
                element.show = !!props.data && (typeof props.show === "boolean" ? props.show : true);
            }
            if (context.dataSourceCollection &&
                props.data &&
                (prevProps.data !== props.data || prevProps.sourceUri !== props.sourceUri)) {
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
            if (context.dataSourceCollection && !context.dataSourceCollection.isDestroyed()) {
                context.dataSourceCollection.remove(element);
            }
        },
        provide: function (element) {
            return {
                dataSource: element,
            };
        },
        cesiumProps: cesiumProps$b,
        cesiumReadonlyProps: cesiumReadonlyProps$2,
        cesiumEventProps: cesiumEventProps$8,
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

    var cesiumProps$c = [
        "semiMajorAxis",
        "semiMinorAxis",
        "height",
        "heightReference",
        "extrudedHeight",
        "show",
        "fill",
        "material",
        "outline",
        "outlineColor",
        "outlineWidth",
        "numberOfVerticalLines",
        "rotation",
        "stRotation",
        "granularity",
        "shadows",
        "distanceDisplayCondition",
        "zIndex",
        "classificationType",
    ];
    var cesiumEventProps$9 = {
        definitionChanged: "onDefinitionChange",
    };
    var EllipseGraphics = createCesiumComponent({
        name: "EllipseGraphics",
        create: function (cprops) {
            var eg = new Cesium__default.EllipseGraphics(cprops);
            if (cprops.classificationType) {
                eg.classificationType = cprops.classificationType;
            }
            return eg;
        },
        mount: function (element, context) {
            if (context.entity) {
                context.entity.ellipse = element;
            }
        },
        unmount: function (element, context) {
            if (context.entity) {
                context.entity.ellipse = undefined;
            }
        },
        cesiumProps: cesiumProps$c,
        cesiumEventProps: cesiumEventProps$9,
    });

    var cesiumProps$d = [
        "heightReference",
        "radii",
        "show",
        "fill",
        "material",
        "outline",
        "outlineColor",
        "outlineWidth",
        "subdivisions",
        "stackPartitions",
        "slicePartitions",
        "shadows",
        "distanceDisplayCondition",
    ];
    var cesiumEventProps$a = {
        definitionChanged: "onDefinitionChange",
    };
    var EllipsoidGraphics = createCesiumComponent({
        name: "EllipsoidGraphics",
        create: function (cprops) {
            return new Cesium__default.EllipsoidGraphics(cprops);
        },
        mount: function (element, context) {
            if (context.entity) {
                context.entity.ellipsoid = element;
            }
        },
        unmount: function (element, context) {
            if (context.entity) {
                context.entity.ellipsoid = undefined;
            }
        },
        cesiumProps: cesiumProps$d,
        cesiumEventProps: cesiumEventProps$a,
    });

    var cesiumProps$e = [
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
    var cesiumReadonlyProps$3 = ["id"];
    var cesiumEventProps$b = {
        definitionChanged: "onDefinitionChange",
    };
    var Entity = createCesiumComponent({
        name: "Entity",
        create: function (cprops) {
            return new Cesium.Entity(cprops);
        },
        mount: function (element, context, props) {
            if (context.__RESIUM_EVENT_MANAGER) {
                context.__RESIUM_EVENT_MANAGER.setEvents(element, props);
            }
            if (context.entityCollection) {
                context.entityCollection.add(element);
            }
            if (context.viewer && props.selected) {
                context.viewer.selectedEntity = element;
            }
            if (context.viewer && props.tracked) {
                context.viewer.trackedEntity = element;
            }
        },
        unmount: function (element, context) {
            if (context.__RESIUM_EVENT_MANAGER) {
                context.__RESIUM_EVENT_MANAGER.clearEvents(element);
            }
            if (context.entityCollection) {
                context.entityCollection.remove(element);
            }
        },
        update: function (element, props, prevProps, context) {
            if (context.__RESIUM_EVENT_MANAGER) {
                context.__RESIUM_EVENT_MANAGER.setEvents(element, props);
            }
            if (context.viewer) {
                if (props.selected !== prevProps.selected) {
                    if (props.selected) {
                        context.viewer.selectedEntity = element;
                    }
                    else if (context.viewer.selectedEntity === element) {
                        context.viewer.selectedEntity = undefined;
                    }
                }
                if (props.tracked !== prevProps.tracked) {
                    if (props.tracked) {
                        context.viewer.trackedEntity = element;
                    }
                    else if (context.viewer.trackedEntity === element) {
                        context.viewer.trackedEntity = undefined;
                    }
                }
            }
        },
        provide: function (element) {
            return {
                entity: element,
            };
        },
        cesiumProps: cesiumProps$e,
        cesiumReadonlyProps: cesiumReadonlyProps$3,
        cesiumEventProps: cesiumEventProps$b,
    });

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
                props.cesium.entity.description = new Cesium.ConstantProperty(renderToStaticMarkup(props.children));
            }
        };
        return EntityDescription;
    }(React.PureComponent));
    var EntityDescription$1 = withCesium(EntityDescription);

    var cesiumProps$f = [
        "density",
        "enabled",
        "minimumBrightness",
        "screenSpaceErrorFactor",
    ];
    var Fog = createCesiumComponent({
        name: "fog",
        create: function (cprops, props, context) {
            return new Cesium__default.Fog();
        },
        mount: function (element, context) {
            if (context.scene) {
                context.scene.fog = element;
            }
        },
        unmount: function (element, context) {
            if (context.scene && !context.scene.isDestroyed()) {
                context.scene.fog = new Cesium__default.Fog();
            }
        },
        cesiumProps: cesiumProps$f,
        setCesiumPropsAfterCreate: true,
    });

    var cesiumProps$g = ["clustering", "name"];
    var cesiumEventProps$c = {
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
            var ds = new Cesium__default.GeoJsonDataSource(props.name);
            if (cprops.clustering) {
                ds.clustering = cprops.clustering;
            }
            if (typeof cprops.show === "boolean") {
                ds.show = cprops.show;
            }
            return ds;
        },
        mount: function (element, context, props) {
            if (context.dataSourceCollection) {
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
            }
        },
        update: function (element, props, prevProps, context) {
            if (prevProps.show !== props.show || !props.data) {
                element.show = !!props.data && (typeof props.show === "boolean" ? props.show : true);
            }
            if (context.dataSourceCollection &&
                props.data &&
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
            if (context.dataSourceCollection && !context.dataSourceCollection.isDestroyed()) {
                context.dataSourceCollection.remove(element);
            }
        },
        provide: function (element) {
            return {
                dataSource: element,
            };
        },
        cesiumProps: cesiumProps$g,
        cesiumEventProps: cesiumEventProps$c,
    });

    var cesiumEventProps$d = {
        imageryLayersUpdatedEvent: "onImageryLayersUpdate",
        terrainProviderChanged: "onTerrainProviderChange",
        tileLoadedEvent: "onTileLoad",
        tileLoadProgressEvent: "onTileLoadProgress",
    };
    var cesiumProps$h = [
        "atmosphereBrightnessShift",
        "atmosphereHueShift",
        "atmosphereSaturationShift",
        "baseColor",
        "clippingPlanes",
        "depthTestAgainstTerrain",
        "ellipsoid",
        "enableLighting",
        "imageryLayers",
        "lightingFadeInDistance",
        "lightingFadeOutDistance",
        "material",
        "maximumScreenSpaceError",
        "nightFadeInDistance",
        "nightFadeOutDistance",
        "oceanNormalMapUrl",
        "shadows",
        "show",
        "showGroundAtmosphere",
        "showWaterEffect",
        "terrainProvider",
        "tileCacheSize",
    ];
    var Globe = createCesiumComponent({
        name: "globe",
        create: function (cprops, props, context) {
            return context.scene.globe;
        },
        cesiumProps: cesiumProps$h,
        cesiumEventProps: cesiumEventProps$d,
        setCesiumPropsAfterCreate: true,
    });

    var cesiumProps$i = [
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
    var cesiumReadonlyProps$4 = [
        "imageryProvider",
        "rectangle",
        "maximumAnisotropy",
        "minimumTerrainLevel",
        "maximumTerrainLevel",
    ];
    var ImageryLayer = createCesiumComponent({
        name: "ImageryLayer",
        create: function (cprops) {
            return new Cesium__default.ImageryLayer(cprops.imageryProvider, {
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
            }                                    );
        },
        mount: function (element, context) {
            if (context.imageryLayerCollection) {
                context.imageryLayerCollection.add(element);
            }
        },
        unmount: function (element, context) {
            if (context.imageryLayerCollection) {
                context.imageryLayerCollection.remove(element);
            }
        },
        cesiumProps: cesiumProps$i,
        cesiumReadonlyProps: cesiumReadonlyProps$4,
    });

    var cesiumEventProps$e = {
        layerAdded: "onLayerAdd",
        layerMoved: "onLayerMove",
        layerRemoved: "onLayerRemove",
        layerShownOrHidden: "onLayerShowOrHide",
    };
    var ImageryLayerCollection = createCesiumComponent({
        name: "ImageryLayerCollection",
        create: function (cprops, props, context) {
            return context.globe.imageryLayers;
        },
        cesiumEventProps: cesiumEventProps$e,
    });

    var cesiumProps$j = ["clustering"];
    var cesiumReadonlyProps$5 = [
        "camera",
        "canvas",
        "ellipsoid",
    ];
    var cesiumEventProps$f = {
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
            var ds = new Cesium__default.KmlDataSource({
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
            if (context.dataSourceCollection) {
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
            }
        },
        update: function (element, props, prevProps, context) {
            if (prevProps.show !== props.show || !props.data) {
                element.show = !!props.data && (typeof props.show === "boolean" ? props.show : true);
            }
            if (context.dataSourceCollection &&
                props.data &&
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
            if (context.dataSourceCollection && !context.dataSourceCollection.isDestroyed()) {
                context.dataSourceCollection.remove(element);
            }
        },
        provide: function (element) {
            return {
                dataSource: element,
            };
        },
        cesiumProps: cesiumProps$j,
        cesiumReadonlyProps: cesiumReadonlyProps$5,
        cesiumEventProps: cesiumEventProps$f,
    });

    var cesiumProps$k = [
        "backgroundColor",
        "backgroundPadding",
        "disableDepthTestDistance",
        "distanceDisplayCondition",
        "eyeOffset",
        "fillColor",
        "font",
        "heightReference",
        "horizontalOrigin",
        "id",
        "outlineColor",
        "outlineWidth",
        "pixelOffset",
        "pixelOffsetScaleByDistance",
        "position",
        "scale",
        "scaleByDistance",
        "show",
        "showBackground",
        "style",
        "text",
        "translucencyByDistance",
        "verticalOrigin",
    ];
    var Label = createCesiumComponent({
        name: "Label",
        create: function (cprops, props, context) {
            return new Cesium__default.Label(cprops, context.labelCollection);
        },
        mount: function (element, context, props) {
            if (context.__RESIUM_EVENT_MANAGER) {
                context.__RESIUM_EVENT_MANAGER.setEvents(element, props);
            }
            if (context.labelCollection) {
                context.labelCollection.add(element);
            }
        },
        unmount: function (element, context) {
            if (context.__RESIUM_EVENT_MANAGER) {
                context.__RESIUM_EVENT_MANAGER.clearEvents(element);
            }
            if (context.labelCollection && !context.labelCollection.isDestroyed()) {
                context.labelCollection.remove(element);
            }
        },
        update: function (element, props, prevProps, context) {
            if (context.__RESIUM_EVENT_MANAGER) {
                context.__RESIUM_EVENT_MANAGER.setEvents(element, props);
            }
        },
        cesiumProps: cesiumProps$k,
    });

    var cesiumProps$l = [
        "blendOption",
        "debugShowBoundingVolume",
        "modelMatrix",
    ];
    var LabelCollection = createCesiumComponent({
        name: "LabelCollection",
        create: function (cprops, props, context) {
            return new Cesium__default.LabelCollection({
                scene: context.scene,
                modelMatrix: cprops.modelMatrix,
                blendOption: cprops.blendOption,
                debugShowBoundingVolume: cprops.debugShowBoundingVolume,
            });
        },
        mount: function (element, context) {
            if (context.primitiveCollection) {
                context.primitiveCollection.add(element);
            }
        },
        unmount: function (element, context) {
            if (context.primitiveCollection && !context.primitiveCollection.isDestroyed()) {
                context.primitiveCollection.remove(element);
            }
            if (!element.isDestroyed()) {
                element.destroy();
            }
        },
        provide: function (element) {
            return {
                labelCollection: element,
            };
        },
        cesiumProps: cesiumProps$l,
    });

    var cesiumProps$m = [
        "text",
        "font",
        "style",
        "fillColor",
        "outlineColor",
        "outlineWidth",
        "show",
        "showBackground",
        "backgroundColor",
        "backgroundPadding",
        "scale",
        "horizontalOrigin",
        "verticalOrigin",
        "eyeOffset",
        "pixelOffset",
        "translucencyByDistance",
        "pixelOffsetScaleByDistance",
        "scaleByDistance",
        "heightReference",
        "distanceDisplayCondition",
        "disableDepthTestDistance",
    ];
    var cesiumEventProps$g = {
        definitionChanged: "onDefinitionChange",
    };
    var LabelGraphics = createCesiumComponent({
        name: "LabelGraphics",
        create: function (cprops) {
            return new Cesium__default.LabelGraphics(cprops);
        },
        mount: function (element, context) {
            if (context.entity) {
                context.entity.label = element;
            }
        },
        unmount: function (element, context) {
            if (context.entity) {
                context.entity.label = undefined;
            }
        },
        cesiumProps: cesiumProps$m,
        cesiumEventProps: cesiumEventProps$g,
    });

    var cesiumProps$n = [
        "basePath",
        "clampAnimations",
        "clippingPlanes",
        "color",
        "colorBlendAmount",
        "colorBlendMode",
        "debugShowBoundingVolume",
        "debugWireframe",
        "dequantizeInShader",
        "distanceDisplayCondition",
        "id",
        "imageBasedLightingFactor",
        "lightColor",
        "maximumScale",
        "minimumPixelSize",
        "modelMatrix",
        "scale",
        "scene",
        "shadows",
        "show",
        "silhouetteColor",
        "silhouetteSize",
    ];
    var cesiumReadonlyProps$6 = [
        "allowPicking",
        "asynchronous",
        "gltf",
        "incrementallyLoadTextures",
        "url",
    ];
    var Model = createCesiumComponent({
        name: "Model",
        create: function (cprops, props) {
            var model = props.url
                ? Cesium__default.Model.fromGltf(cprops)
                : new Cesium__default.Model(cprops);
            if (props.onReady) {
                model.readyPromise.then(props.onReady);
            }
            return model;
        },
        mount: function (element, context) {
            context.primitiveCollection.add(element);
        },
        unmount: function (element, context) {
            context.primitiveCollection.remove(element);
            if (!element.isDestroyed()) {
                element.destroy();
            }
        },
        cesiumProps: cesiumProps$n,
        cesiumReadonlyProps: cesiumReadonlyProps$6,
    });

    var cesiumProps$o = [
        "uri",
        "show",
        "scale",
        "minimumPixelSize",
        "maximumScale",
        "incrementallyLoadTextures",
        "runAnimations",
        "clampAnimations",
        "nodeTransformations",
        "shadows",
        "heightReference",
        "distanceDisplayCondition",
        "silhouetteColor",
        "silhouetteSize",
        "color",
        "colorBlendMode",
        "colorBlendAmount",
        "clippingPlanes",
        "imageBasedLightingFactor",
        "lightColor",
    ];
    var cesiumEventProps$h = {
        definitionChanged: "onDefinitionChange",
    };
    var ModelGraphics = createCesiumComponent({
        name: "ModelGraphics",
        create: function (cprops) {
            return new Cesium__default.ModelGraphics(cprops);
        },
        mount: function (element, context) {
            if (context.entity) {
                context.entity.model = element;
            }
        },
        unmount: function (element, context) {
            if (context.entity) {
                context.entity.model = undefined;
            }
        },
        cesiumProps: cesiumProps$o,
        cesiumEventProps: cesiumEventProps$h,
    });

    var cesiumProps$p = ["onlySunLighting", "show", "textureUrl"];
    var cesiumReadonlyProps$7 = ["ellipsoid"];
    var Moon = createCesiumComponent({
        name: "moon",
        create: function (cprops, props, context) {
            return new Cesium__default.Moon(cprops);
        },
        mount: function (element, context) {
            if (context.scene) {
                context.scene.moon = element;
            }
        },
        unmount: function (element, context) {
            if (context.scene && !context.scene.isDestroyed()) {
                context.scene.moon = new Cesium__default.Moon();
            }
        },
        cesiumProps: cesiumProps$p,
        cesiumReadonlyProps: cesiumReadonlyProps$7,
    });

    var cesiumProps$q = [
        "show",
        "emitter",
        "modelMatrix",
        "emitterModelMatrix",
        "emissionRate",
        "bursts",
        "loop",
        "scale",
        "startScale",
        "endScale",
        "color",
        "startColor",
        "endColor",
        "image",
        "imageSize",
        "minimumImageSize",
        "maximumImageSize",
        "speed",
        "minimumSpeed",
        "maximumSpeed",
        "lifetime",
        "particleLife",
        "minimumParticleLife",
        "maximumParticleLife",
        "mass",
        "minimumMass",
        "maximumMass",
    ];
    var cesiumEventProps$i = {
        complete: "onComplete",
    };
    var ParticleSystem = createCesiumComponent({
        name: "ParticleSystem",
        create: function (cprops, props) {
            return new Cesium__default.ParticleSystem(__assign({}, cprops, { updateCallback: props.onUpdate }));
        },
        update: function (element, props, prevProps) {
            if (props.onUpdate !== prevProps.onUpdate) {
                element.updateCallback = props.onUpdate;
            }
        },
        mount: function (element, context) {
            context.primitiveCollection.add(element);
        },
        unmount: function (element, context) {
            if (!context.primitiveCollection.isDestroyed) {
                context.primitiveCollection.remove(element);
            }
        },
        cesiumProps: cesiumProps$q,
        cesiumEventProps: cesiumEventProps$i,
    });

    var cesiumProps$r = [
        "leadTime",
        "trailTime",
        "show",
        "width",
        "material",
        "resolution",
        "distanceDisplayCondition",
    ];
    var cesiumEventProps$j = {
        definitionChanged: "onDefinitionChange",
    };
    var PathGraphics = createCesiumComponent({
        name: "PathGraphics",
        create: function (cprops) {
            return new Cesium__default.PathGraphics(cprops);
        },
        mount: function (element, context) {
            if (context.entity) {
                context.entity.path = element;
            }
        },
        unmount: function (element, context) {
            if (context.entity) {
                context.entity.path = undefined;
            }
        },
        cesiumProps: cesiumProps$r,
        cesiumEventProps: cesiumEventProps$j,
    });

    var cesiumProps$s = [
        "plane",
        "dimensions",
        "show",
        "fill",
        "material",
        "outline",
        "outlineColor",
        "outlineWidth",
        "shadows",
        "distanceDisplayCondition",
    ];
    var cesiumEventProps$k = {
        definitionChanged: "onDefinitionChange",
    };
    var PlaneGraphics = createCesiumComponent({
        name: "PlaneGraphics",
        create: function (cprops) {
            return new Cesium__default.PlaneGraphics(cprops);
        },
        mount: function (element, context) {
            if (context.entity) {
                context.entity.plane = element;
            }
        },
        unmount: function (element, context) {
            if (context.entity) {
                context.entity.plane = undefined;
            }
        },
        cesiumProps: cesiumProps$s,
        cesiumEventProps: cesiumEventProps$k,
    });

    var cesiumProps$t = [
        "color",
        "pixelSize",
        "outlineColor",
        "outlineWidth",
        "show",
        "scaleByDistance",
        "translucencyByDistance",
        "heightReference",
        "distanceDisplayCondition",
        "disableDepthTestDistance",
    ];
    var cesiumEventProps$l = {
        definitionChanged: "onDefinitionChange",
    };
    var PointGraphics = createCesiumComponent({
        name: "PointGraphics",
        create: function (cprops) {
            return new Cesium__default.PointGraphics(cprops);
        },
        mount: function (element, context) {
            if (context.entity) {
                context.entity.point = element;
            }
        },
        unmount: function (element, context) {
            if (context.entity) {
                context.entity.point = undefined;
            }
        },
        cesiumProps: cesiumProps$t,
        cesiumEventProps: cesiumEventProps$l,
    });

    var cesiumProps$u = [
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
            return new Cesium__default.PointPrimitive();
        },
        mount: function (element, context, props) {
            if (context.__RESIUM_EVENT_MANAGER) {
                context.__RESIUM_EVENT_MANAGER.setEvents(element, props);
            }
            if (context.pointPrimitiveCollection) {
                context.pointPrimitiveCollection.add(element);
            }
        },
        update: function (element, props, prevProps, context) {
            if (context.__RESIUM_EVENT_MANAGER) {
                context.__RESIUM_EVENT_MANAGER.setEvents(element, props);
            }
        },
        unmount: function (element, context) {
            if (context.__RESIUM_EVENT_MANAGER) {
                context.__RESIUM_EVENT_MANAGER.clearEvents(element);
            }
            if (context.pointPrimitiveCollection && !context.pointPrimitiveCollection.isDestroyed()) {
                context.pointPrimitiveCollection.remove(element);
            }
        },
        cesiumProps: cesiumProps$u,
        setCesiumPropsAfterCreate: true,
    });

    var cesiumProps$v = [
        "blendOption",
        "debugShowBoundingVolume",
        "modelMatrix",
    ];
    var PointPrimitiveCollection = createCesiumComponent({
        name: "PointPrimitveCollection",
        create: function (cprops) {
            return new Cesium__default.PointPrimitiveCollection(cprops);
        },
        mount: function (element, context) {
            if (context.primitiveCollection) {
                context.primitiveCollection.add(element);
            }
        },
        unmount: function (element, context) {
            if (context.primitiveCollection && !context.primitiveCollection.isDestroyed()) {
                context.primitiveCollection.remove(element);
            }
            if (!element.isDestroyed()) {
                element.destroy();
            }
        },
        provide: function (element) {
            return {
                pointPrimitiveCollection: element,
            };
        },
        cesiumProps: cesiumProps$v,
    });

    var cesiumProps$w = [
        "hierarchy",
        "height",
        "heightReference",
        "extrudedHeight",
        "extrudedHeightReference",
        "show",
        "fill",
        "material",
        "outline",
        "outlineColor",
        "outlineWidth",
        "stRotation",
        "granularity",
        "perPositionHeight",
        "closeTop",
        "closeBottom",
        "shadows",
        "distanceDisplayCondition",
        "zIndex",
        "classificationType",
    ];
    var cesiumEventProps$m = {
        definitionChanged: "onDefinitionChange",
    };
    var PolygonGraphics = createCesiumComponent({
        name: "PolygonGraphics",
        create: function (cprops) {
            var pg = new Cesium__default.PolygonGraphics(cprops);
            if (cprops.classificationType) {
                pg.classificationType = cprops.classificationType;
            }
            return pg;
        },
        mount: function (element, context) {
            if (context.entity) {
                context.entity.polygon = element;
            }
        },
        unmount: function (element, context) {
            if (context.entity) {
                context.entity.polygon = undefined;
            }
        },
        cesiumProps: cesiumProps$w,
        cesiumEventProps: cesiumEventProps$m,
    });

    var cesiumProps$x = [
        "distanceDisplayCondition",
        "id",
        "loop",
        "material",
        "positions",
        "show",
        "width",
    ];
    var Polyline = createCesiumComponent({
        name: "Polyline",
        create: function (cprops, props, context) {
            return new Cesium__default.Polyline(cprops, context.polylineCollection);
        },
        mount: function (element, context) {
            if (context.polylineCollection) {
                context.polylineCollection.add(element);
            }
        },
        unmount: function (element, context) {
            if (context.__RESIUM_EVENT_MANAGER) {
                context.__RESIUM_EVENT_MANAGER.clearEvents(element);
            }
            if (context.polylineCollection && !context.polylineCollection.isDestroyed()) {
                context.polylineCollection.remove(element);
            }
        },
        update: function (element, props, prevProps, context) {
            if (context.__RESIUM_EVENT_MANAGER) {
                context.__RESIUM_EVENT_MANAGER.setEvents(element, props);
            }
        },
        cesiumProps: cesiumProps$x,
    });

    var cesiumProps$y = [
        "debugShowBoundingVolume",
        "length",
        "modelMatrix",
    ];
    var PolylineCollection = createCesiumComponent({
        name: "PolylineCollection",
        create: function (cprops, props, context) {
            return new Cesium__default.PolylineCollection({
                modelMatrix: cprops.modelMatrix,
                debugShowBoundingVolume: cprops.debugShowBoundingVolume,
                length: cprops.length,
                scene: context.scene,
            });
        },
        mount: function (element, context) {
            if (context.primitiveCollection) {
                context.primitiveCollection.add(element);
            }
        },
        unmount: function (element, context) {
            if (context.primitiveCollection && !context.primitiveCollection.isDestroyed()) {
                context.primitiveCollection.remove(element);
            }
            if (!element.isDestroyed()) {
                element.destroy();
            }
        },
        provide: function (element) {
            return {
                polylineCollection: element,
            };
        },
        cesiumProps: cesiumProps$y,
    });

    var cesiumProps$z = [
        "positions",
        "followSurface",
        "clampToGround",
        "width",
        "show",
        "material",
        "depthFailMaterial",
        "granularity",
        "shadows",
        "distanceDisplayCondition",
        "zIndex",
    ];
    var cesiumEventProps$n = {
        definitionChanged: "onDefinitionChange",
    };
    var PolylineGraphics = createCesiumComponent({
        name: "PolylineGraphics",
        create: function (cprops) {
            return new Cesium__default.PolylineGraphics(cprops);
        },
        mount: function (element, context) {
            if (context.entity) {
                context.entity.polyline = element;
            }
        },
        unmount: function (element, context) {
            if (context.entity) {
                context.entity.polyline = undefined;
            }
        },
        cesiumProps: cesiumProps$z,
        cesiumEventProps: cesiumEventProps$n,
    });

    var cesiumProps$A = [
        "positions",
        "shape",
        "cornerType",
        "show",
        "fill",
        "material",
        "outline",
        "outlineColor",
        "outlineWidth",
        "granularity",
        "shadows",
        "distanceDisplayCondition",
    ];
    var cesiumEventProps$o = {
        definitionChanged: "onDefinitionChange",
    };
    var PolylineVolumeGraphics = createCesiumComponent({
        name: "PolylineVolumeGraphics",
        create: function (cprops) {
            return new Cesium__default.PolylineVolumeGraphics(cprops);
        },
        mount: function (element, context) {
            if (context.entity) {
                context.entity.polylineVolume = element;
            }
        },
        unmount: function (element, context) {
            if (context.entity) {
                context.entity.polylineVolume = undefined;
            }
        },
        cesiumProps: cesiumProps$A,
        cesiumEventProps: cesiumEventProps$o,
    });

    var cesiumProps$B = ["enabled", "selected"];
    var createPostProcessStage = function (opts) {
        return createCesiumComponent({
            name: name,
            create: function (cprops, props, context) {
                var ps = opts.create(cprops, context.scene.postProcessStages);
                if (typeof cprops.enabled === "boolean") {
                    ps.enabled = cprops.enabled;
                }
                if (cprops.selected) {
                    ps.selected = cprops.selected;
                }
                opts.props.forEach(function (k) {
                    if ((!opts.readonlyProps || !opts.readonlyProps.includes(k)) &&
                        typeof props[k] !== "undefined") {
                        ps.uniforms[k] = props[k];
                    }
                });
                return ps;
            },
            mount: function (element, context) {
                if (!opts.noMount && context.scene && !context.scene.isDestroyed()) {
                    context.scene.postProcessStages.add(element);
                }
            },
            unmount: function (element, context) {
                if (!opts.noMount) {
                    if (context.scene && !context.scene.isDestroyed()) {
                        context.scene.postProcessStages.remove(element);
                    }
                    if (!element.isDestroyed()) {
                        element.destroy();
                    }
                }
                else {
                    element.enabled = false;
                }
            },
            update: function (element, props, prevProps) {
                opts.props.forEach(function (k) {
                    if ((!opts.readonlyProps || !opts.readonlyProps.includes(k)) && props[k] !== prevProps[k]) {
                        element.uniforms[k] = props[k];
                    }
                });
            },
            cesiumProps: cesiumProps$B,
            cesiumReadonlyProps: opts.readonlyProps,
            defaultProps: {
                enabled: true,
            },
        });
    };

    var cesiumProps$C = ["enabled", "selected"];
    var cesiumReadonlyProps$8 = [
        "clearColor",
        "forcePowerOfTwo",
        "fragmentShader",
        "name",
        "pixelDatatype",
        "pixelFormat",
        "sampleMode",
        "scissorRectangle",
        "textureScale",
        "uniforms",
    ];
    var PostProcessStage = createCesiumComponent({
        name: "PostProcessStage",
        create: function (cprops, props, context) {
            var ps = new Cesium__default.PostProcessStage(cprops);
            if (typeof cprops.enabled === "boolean") {
                ps.enabled = cprops.enabled;
            }
            if (cprops.selected) {
                ps.selected = cprops.selected;
            }
            return ps;
        },
        mount: function (element, context) {
            if (context.scene && !context.scene.isDestroyed()) {
                context.scene.postProcessStages.add(element);
            }
        },
        unmount: function (element, context) {
            if (context.scene && !context.scene.isDestroyed()) {
                context.scene.postProcessStages.remove(element);
            }
            if (!element.isDestroyed()) {
                element.destroy();
            }
        },
        cesiumProps: cesiumProps$C,
        cesiumReadonlyProps: cesiumReadonlyProps$8,
    });
    var BlackAndWhiteStage = createPostProcessStage({
        name: "BlackAndWhiteStage",
        props: ["gradations"],
        create: function () {
            return Cesium__default.PostProcessStageLibrary.createBlackAndWhiteStage();
        },
    });
    var BlurStage = createPostProcessStage({
        name: "BlurStage",
        props: ["delta", "sigma", "stepSize"],
        create: function () {
            return Cesium__default.PostProcessStageLibrary.createBlurStage();
        },
    });
    var BrightnessStage = createPostProcessStage({
        name: "BrightnessStage",
        props: ["brightness"],
        create: function () {
            return Cesium__default.PostProcessStageLibrary.createBrightnessStage();
        },
    });
    var DepthOfFieldStage = createPostProcessStage({
        name: "DepthOfFieldStage",
        props: ["delta", "focalDistance", "sigma", "stepSize"],
        create: function () {
            return Cesium__default.PostProcessStageLibrary.createDepthOfFieldStage();
        },
    });
    var EdgeDetectionStage = createPostProcessStage({
        name: "EdgeDetectionStage",
        props: ["color", "length"],
        create: function () {
            return Cesium__default.PostProcessStageLibrary.createEdgeDetectionStage();
        },
    });
    var LensFlareStage = createPostProcessStage({
        name: "LensFlareStage",
        props: [
            "dirtTexture",
            "starTexture",
            "intensity",
            "distortion",
            "ghostDispersal",
            "haloWidth",
            "earthRadius",
        ],
        create: function () {
            return Cesium__default.PostProcessStageLibrary.createLensFlareStage();
        },
    });
    var NightVisionStage = createPostProcessStage({
        name: "NightVisionStage",
        props: ["color", "length"],
        readonlyProps: ["stages"],
        create: function (props) {
            return Cesium__default.PostProcessStageLibrary.createNightVisionStage(props.stages);
        },
    });
    var SilhouetteStage = createPostProcessStage({
        name: "SilhouetteStage",
        props: ["color", "length"],
        readonlyProps: ["stages"],
        create: function (props) {
            return Cesium__default.PostProcessStageLibrary.createSilhouetteStage(props.stages);
        },
    });
    var Fxaa = createPostProcessStage({
        name: "Bloom",
        create: function (props, collection) {
            return collection.fxaa;
        },
        props: [],
    });

    var cesiumProps$D = ["enabled", "selected"];
    var cesiumReadonlyProps$9 = [
        "inputPreviousStageTexture",
        "name",
        "stages",
        "uniforms",
    ];
    var PostProcessStageComposite = createCesiumComponent({
        name: "PostProcessStageComposite",
        create: function (cprops) {
            var ps = new Cesium__default.PostProcessStageComposite(cprops);
            if (typeof cprops.enabled === "boolean") {
                ps.enabled = cprops.enabled;
            }
            if (cprops.selected) {
                ps.selected = cprops.selected;
            }
            return ps;
        },
        mount: function (element, context) {
            if (context.scene && !context.scene.isDestroyed()) {
                context.scene.postProcessStages.add(element);
            }
        },
        unmount: function (element, context) {
            if (context.scene && !context.scene.isDestroyed()) {
                context.scene.postProcessStages.remove(element);
            }
            if (!element.isDestroyed()) {
                element.destroy();
            }
        },
        cesiumProps: cesiumProps$D,
        cesiumReadonlyProps: cesiumReadonlyProps$9,
    });
    var AmbientOcclusion = createPostProcessStage({
        name: "AmbientOcclusion",
        create: function (props, collection) {
            return collection.ambientOcclusion;
        },
        props: [
            "ambientOcclusionOnly",
            "bias",
            "delta",
            "frustumLength",
            "intensity",
            "lengthCap",
            "sigma",
            "stepSize",
        ],
        noMount: true,
    });
    var Bloom = createPostProcessStage({
        name: "Bloom",
        create: function (props, collection) {
            return collection.bloom;
        },
        props: ["brightness", "contrast", "delta", "glowOnly", "sigma", "stepSize"],
        noMount: true,
    });

    var cesiumProps$E = [
        "appearance",
        "cull",
        "debugShowBoundingVolume",
        "depthFailAppearance",
        "modelMatrix",
        "shadows",
        "show",
    ];
    var cesiumReadonlyProps$a = [
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
        create: function (cprops, props) {
            var primitive = new Cesium__default.Primitive(cprops);
            if (props.onReady) {
                primitive.readyPromise.then(props.onReady);
            }
            return primitive;
        },
        mount: function (element, context, props) {
            if (context.__RESIUM_EVENT_MANAGER) {
                context.__RESIUM_EVENT_MANAGER.setEvents(element, props);
            }
            if (context.primitiveCollection) {
                context.primitiveCollection.add(element);
            }
        },
        update: function (element, props, prevProps, context) {
            if (context.__RESIUM_EVENT_MANAGER) {
                context.__RESIUM_EVENT_MANAGER.setEvents(element, props);
            }
        },
        unmount: function (element, context) {
            if (context.__RESIUM_EVENT_MANAGER) {
                context.__RESIUM_EVENT_MANAGER.clearEvents(element);
            }
            if (context.primitiveCollection && !context.primitiveCollection.isDestroyed()) {
                context.primitiveCollection.remove(element);
            }
            if (!element.isDestroyed()) {
                element.destroy();
            }
        },
        cesiumProps: cesiumProps$E,
        cesiumReadonlyProps: cesiumReadonlyProps$a,
    });

    var cesiumProps$F = [
        "coordinates",
        "height",
        "heightReference",
        "extrudedHeight",
        "extrudedHeightReference",
        "show",
        "fill",
        "material",
        "outline",
        "outlineColor",
        "outlineWidth",
        "rotation",
        "stRotation",
        "granularity",
        "shadows",
        "distanceDisplayCondition",
        "zIndex",
    ];
    var cesiumEventProps$p = {
        definitionChanged: "onDefinitionChange",
    };
    var RectangleGraphics = createCesiumComponent({
        name: "RectangleGraphics",
        create: function (cprops) {
            return new Cesium__default.RectangleGraphics(cprops);
        },
        mount: function (element, context) {
            if (context.entity) {
                context.entity.rectangle = element;
            }
        },
        unmount: function (element, context) {
            if (context.entity) {
                context.entity.rectangle = undefined;
            }
        },
        cesiumProps: cesiumProps$F,
        cesiumEventProps: cesiumEventProps$p,
    });

    var cesiumProps$G = [
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
        "highDynamicRange",
        "imagerySplitPosition",
        "invertClassification",
        "invertClassificationColor",
        "logarithmicDepthBuffer",
        "logarithmicDepthFarToNearRatio",
        "mapMode2D",
        "maximumRenderTimeChange",
        "minimumDisableDepthTestDistance",
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
    var cesiumEventProps$q = {
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
            case Cesium.SceneMode.SCENE2D:
                scene.morphTo2D(morphTime);
                break;
            case Cesium.SceneMode.COLUMBUS_VIEW:
                scene.morphToColumbusView(morphTime);
                break;
            case Cesium.SceneMode.SCENE3D:
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
        cesiumProps: cesiumProps$G,
        cesiumEventProps: cesiumEventProps$q,
        setCesiumPropsAfterCreate: true,
    });

    var cesiumProps$H = [
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
        cesiumProps: cesiumProps$H,
        setCesiumPropsAfterCreate: true,
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
            if (prevProps.type !== this.props.type ||
                prevProps.modifier !== this.props.modifier ||
                prevProps.action !== this.props.action) {
                var screenSpaceEventHandler = this.props.cesium.screenSpaceEventHandler;
                if (screenSpaceEventHandler) {
                    screenSpaceEventHandler.removeInputAction(prevProps.type, prevProps.modifier);
                }
                this.setEvent();
            }
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
            if (!screenSpaceEventHandler) {
                return;
            }
            if (action) {
                screenSpaceEventHandler.setInputAction(action, type, modifier);
            }
            else {
                screenSpaceEventHandler.removeInputAction(type, modifier);
            }
        };
        return ScreenSpaceEvent;
    }(React.PureComponent));
    var ScreenSpaceEvent$1 = withCesium(ScreenSpaceEvent);

    var ScreenSpaceEventHandler = createCesiumComponent({
        name: "ScreenSpaceEventHandler",
        create: function (cprops, props, context) {
            return new Cesium__default.ScreenSpaceEventHandler(context.scene.canvas);
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

    var cesiumProps$I = ["glowFactor", "show"];
    var Sun = createCesiumComponent({
        name: "sun",
        create: function () {
            return new Cesium__default.Sun();
        },
        mount: function (element, context) {
            if (context.scene) {
                context.scene.sun = element;
            }
        },
        unmount: function (element, context) {
            if (context.scene && !context.scene.isDestroyed()) {
                context.scene.sun = new Cesium__default.Sun();
            }
        },
        cesiumProps: cesiumProps$I,
        setCesiumPropsAfterCreate: true,
    });

    var cesiumProps$J = [
        "clippingPlanes",
        "clock",
        "intervals",
        "maximumMemoryUsage",
        "modelMatrix",
        "shadows",
        "show",
        "style",
    ];
    var cesiumReadonlyProps$b = ["shading"];
    var cesiumEventProps$r = {
        frameChanged: "onFrameChange",
    };
    var TimeDynamicPointCloud = createCesiumComponent({
        name: "TimeDynamicPointCloud",
        create: function (cprops, props, context) {
            var tdpc = new Cesium__default.TimeDynamicPointCloud(__assign({}, cprops, { clock: cprops.clock || (context.cesiumWidget && context.cesiumWidget.clock) }));
            if (props.onReady) {
                console.log("ready", tdpc);
                tdpc.readyPromise.then(props.onReady);
            }
            return tdpc;
        },
        mount: function (element, context) {
            if (context.primitiveCollection) {
                context.primitiveCollection.add(element);
            }
        },
        unmount: function (element, context) {
            if (context.primitiveCollection && !context.primitiveCollection.isDestroyed()) {
                context.primitiveCollection.remove(element);
            }
            if (!element.isDestroyed()) {
                element.destroy();
            }
        },
        cesiumProps: cesiumProps$J,
        cesiumReadonlyProps: cesiumReadonlyProps$b,
        cesiumEventProps: cesiumEventProps$r,
    });

    var cesiumProps$K = [
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
    var cesiumReadonlyProps$c = [
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
    var cesiumEventProps$s = {
        selectedEntityChanged: "onSelectedEntityChange",
        trackedEntityChanged: "onTrackedEntityChange",
    };
    var Viewer = createCesiumComponent({
        name: "Viewer",
        createRef: true,
        create: function (cprops, props, context, ref) {
            var v = new Cesium.Viewer(ref.current, cprops);
            if (v && props.extend) {
                if (Array.isArray(props.extend)) {
                    props.extend.forEach(function (e) {
                        v.extend(e, {});
                    });
                }
                else {
                    v.extend(props.extend, {});
                }
            }
            var state;
            if (v) {
                state = new EventManager(v.scene, v.canvas);
            }
            return [v, state];
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
        unmount: function (element, cprops, props, ref, state) {
            if (element && state) {
                var em = state;
                if (!em.isDestroyed()) {
                    em.destroy();
                }
            }
            if (element && !element.isDestroyed()) {
                element.destroy();
            }
        },
        provide: function (element, props, state) {
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
                globe: element.scene.globe,
                __RESIUM_EVENT_MANAGER: state,
            };
        },
        cesiumProps: cesiumProps$K,
        cesiumReadonlyProps: cesiumReadonlyProps$c,
        cesiumEventProps: cesiumEventProps$s,
    });

    var cesiumProps$L = [
        "positions",
        "maximumHeights",
        "minimumHeights",
        "show",
        "fill",
        "material",
        "outline",
        "outlineColor",
        "outlineWidth",
        "granularity",
        "shadows",
        "distanceDisplayCondition",
    ];
    var cesiumEventProps$t = {
        definitionChanged: "onDefinitionChange",
    };
    var WallGraphics = createCesiumComponent({
        name: "WallGraphics",
        create: function (cprops) {
            return new Cesium__default.WallGraphics(cprops);
        },
        mount: function (element, context) {
            if (context.entity) {
                context.entity.wall = element;
            }
        },
        unmount: function (element, context) {
            if (context.entity) {
                context.entity.wall = undefined;
            }
        },
        cesiumProps: cesiumProps$L,
        cesiumEventProps: cesiumEventProps$t,
    });

    exports.createCesiumComponent = createCesiumComponent;
    exports.CameraOperation = createCameraOperation;
    exports.Billboard = Billboard;
    exports.BillboardCollection = BillboardCollection;
    exports.BillboardGraphics = BillboardGraphics;
    exports.BoxGraphics = BoxGraphics;
    exports.Camera = Camera;
    exports.CameraFlyHome = CameraFlyHome;
    exports.CameraFlyTo = CameraFlyTo;
    exports.CameraFlyToBoundingSphere = CameraFlyToBoundingSphere;
    exports.Cesium3DTileset = Cesium3DTileset;
    exports.CesiumWidget = CesiumWidget;
    exports.Clock = Clock;
    exports.CorridorGraphics = CorridorGraphics;
    exports.CustomDataSource = CustomDataSource;
    exports.CylinderGraphics = CylinderGraphics;
    exports.CzmlDataSource = CzmlDataSource;
    exports.DefaultScreenSpaceEventHandler = DefaultScreenSpaceEventHandler;
    exports.EllipseGraphics = EllipseGraphics;
    exports.EllipsoidGraphics = EllipsoidGraphics;
    exports.Entity = Entity;
    exports.EntityDescription = EntityDescription$1;
    exports.Fog = Fog;
    exports.GeoJsonDataSource = GeoJsonDataSource;
    exports.Globe = Globe;
    exports.ImageryLayer = ImageryLayer;
    exports.ImageryLayerCollection = ImageryLayerCollection;
    exports.KmlDataSource = KmlDataSource;
    exports.Label = Label;
    exports.LabelCollection = LabelCollection;
    exports.LabelGraphics = LabelGraphics;
    exports.Model = Model;
    exports.ModelGraphics = ModelGraphics;
    exports.Moon = Moon;
    exports.ParticleSystem = ParticleSystem;
    exports.PathGraphics = PathGraphics;
    exports.PlaneGraphics = PlaneGraphics;
    exports.PointGraphics = PointGraphics;
    exports.PointPrimitive = PointPrimitive;
    exports.PointPrimitiveCollection = PointPrimitiveCollection;
    exports.PolygonGraphics = PolygonGraphics;
    exports.Polyline = Polyline;
    exports.PolylineCollection = PolylineCollection;
    exports.PolylineGraphics = PolylineGraphics;
    exports.PolylineVolumeGraphics = PolylineVolumeGraphics;
    exports.PostProcessStage = PostProcessStage;
    exports.BlackAndWhiteStage = BlackAndWhiteStage;
    exports.BlurStage = BlurStage;
    exports.BrightnessStage = BrightnessStage;
    exports.DepthOfFieldStage = DepthOfFieldStage;
    exports.EdgeDetectionStage = EdgeDetectionStage;
    exports.LensFlareStage = LensFlareStage;
    exports.Fxaa = Fxaa;
    exports.NightVisionStage = NightVisionStage;
    exports.SilhouetteStage = SilhouetteStage;
    exports.PostProcessStageComposite = PostProcessStageComposite;
    exports.AmbientOcclusion = AmbientOcclusion;
    exports.Bloom = Bloom;
    exports.Primitive = Primitive;
    exports.RectangleGraphics = RectangleGraphics;
    exports.Scene = Scene;
    exports.ScreenSpaceCameraController = ScreenSpaceCameraController;
    exports.ScreenSpaceEvent = ScreenSpaceEvent$1;
    exports.ScreenSpaceEventHandler = ScreenSpaceEventHandler;
    exports.Sun = Sun;
    exports.TimeDynamicPointCloud = TimeDynamicPointCloud;
    exports.Viewer = Viewer;
    exports.WallGraphics = WallGraphics;
    exports.Provider = Provider;
    exports.Consumer = Consumer;
    exports.withCesium = withCesium;
    exports.attachEvents = attachEvents;
    exports.detachEvents = detachEvents;
    exports.updateEvents = updateEvents;
    exports.getEventProps = getEventProps;
    exports.eventNames = eventNames;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=resium.js.map
