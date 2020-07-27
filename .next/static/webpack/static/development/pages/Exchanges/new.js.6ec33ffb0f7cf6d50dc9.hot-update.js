webpackHotUpdate("static\\development\\pages\\Exchanges\\new.js",{

/***/ "./pages/Exchanges/new.js":
/*!********************************!*\
  !*** ./pages/Exchanges/new.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_exchange__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ethereum/exchange */ "./ethereum/exchange.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ethereum/factory */ "./ethereum/factory.js");









var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







 // import Router from 'next/router'

var ExchangeNew = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ExchangeNew, _Component);

  var _super = _createSuper(ExchangeNew);

  function ExchangeNew() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ExchangeNew);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      PowerUnits: '',
      Price: '',
      errorMessage: '',
      recipient: '',
      loading: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSubmit", /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var accounts, _this$state, PowerUnits, Price, recipient, AllExchanges, exchange;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({
                  loading: true,
                  errorMessage: ''
                });

                _context.next = 4;
                return ethereum.enable();

              case 4:
                _context.next = 6;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_13__["default"].eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _this$state = _this.state, PowerUnits = _this$state.PowerUnits, Price = _this$state.Price, recipient = _this$state.recipient;
                _context.next = 10;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_15__["default"].methods.getDeployedExchanges().call();

              case 10:
                AllExchanges = _context.sent;

                if (!(AllExchanges.length == 0)) {
                  _context.next = 17;
                  break;
                }

                _context.next = 14;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_15__["default"].methods.createExchange().send({
                  from: accounts[0]
                });

              case 14:
                _context.next = 16;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_15__["default"].methods.getDeployedExchanges().call();

              case 16:
                AllExchanges = _context.sent;

              case 17:
                exchange = Object(_ethereum_exchange__WEBPACK_IMPORTED_MODULE_12__["default"])(AllExchanges[0]);
                _context.prev = 18;
                _context.next = 21;
                return exchange.methods.createRequest(_ethereum_web3__WEBPACK_IMPORTED_MODULE_13__["default"].utils.toWei(Price, 'ether'), recipient, PowerUnits).send({
                  from: accounts[0]
                });

              case 21:
                _routes__WEBPACK_IMPORTED_MODULE_14__["Router"].pushRoute('/');
                _context.next = 27;
                break;

              case 24:
                _context.prev = 24;
                _context.t0 = _context["catch"](18);

                _this.setState({
                  errorMessage: _context.t0.message
                });

              case 27:
                _context.prev = 27;

                _this.setState({
                  loading: false
                });

                return _context.finish(27);

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[18, 24, 27, 30]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ExchangeNew, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx("h2", null, "Create New Exchange"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Divider"], {
        hidden: true
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Divider"], {
        inverted: true,
        width: 6
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Divider"], {
        hidden: true
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"], {
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, {
        width: 6
      }, __jsx("label", null, "Power Units"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        label: "Kw",
        labelPosition: "right",
        value: this.state.PowerUnits,
        onChange: function onChange(event) {
          return _this2.setState({
            PowerUnits: event.target.value
          });
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, {
        width: 6
      }, __jsx("label", null, "Price"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        label: "Ether",
        labelPosition: "right",
        value: this.state.Price,
        onChange: function onChange(event) {
          return _this2.setState({
            Price: event.target.value
          });
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, null, __jsx("label", null, "Recipient"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        value: this.state.recipient,
        onChange: function onChange(event) {
          return _this2.setState({
            recipient: event.target.value
          });
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Divider"], {
        hidden: true
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Divider"], {
        inverted: true,
        width: 6
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Divider"], {
        hidden: true
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        loading: this.state.loading,
        primary: true
      }, "Create")));
    }
  }]);

  return ExchangeNew;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ExchangeNew);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9FeGNoYW5nZXMvbmV3LmpzIl0sIm5hbWVzIjpbIkV4Y2hhbmdlTmV3IiwiUG93ZXJVbml0cyIsIlByaWNlIiwiZXJyb3JNZXNzYWdlIiwicmVjaXBpZW50IiwibG9hZGluZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aGVyZXVtIiwiZW5hYmxlIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJzdGF0ZSIsImZhY3RvcnkiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRFeGNoYW5nZXMiLCJjYWxsIiwiQWxsRXhjaGFuZ2VzIiwibGVuZ3RoIiwiY3JlYXRlRXhjaGFuZ2UiLCJzZW5kIiwiZnJvbSIsImV4Y2hhbmdlIiwiRXhjaGFuZ2UiLCJjcmVhdGVSZXF1ZXN0IiwidXRpbHMiLCJ0b1dlaSIsIlJvdXRlciIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJvblN1Ym1pdCIsInRhcmdldCIsInZhbHVlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7SUFFTUEsVzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDTTtBQUNKQyxnQkFBVSxFQUFFLEVBRFI7QUFFSkMsV0FBSyxFQUFFLEVBRkg7QUFHSkMsa0JBQVksRUFBRSxFQUhWO0FBSUpDLGVBQVMsRUFBRSxFQUpQO0FBS0pDLGFBQU8sRUFBRTtBQUxMLEs7OztrTUFVRyxpQkFBTUMsS0FBTjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1BBLHFCQUFLLENBQUNDLGNBQU47O0FBRUEsc0JBQUtDLFFBQUwsQ0FBYztBQUFDSCx5QkFBTyxFQUFFLElBQVY7QUFBZ0JGLDhCQUFZLEVBQUM7QUFBN0IsaUJBQWQ7O0FBSE87QUFBQSx1QkFLRE0sUUFBUSxDQUFDQyxNQUFULEVBTEM7O0FBQUE7QUFB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QUFDRSxRQUFMLENBQWM7QUFBRU4saUJBQUssRUFBRUksS0FBSyxDQUFDNEIsTUFBTixDQUFhQztBQUF0QixXQUFkLENBRFc7QUFBQTtBQUpuQixRQUZKLENBWEosRUFxQkksTUFBQyx1REFBRCxDQUFNLEtBQU4sUUFDSSxpQ0FESixFQUVJLE1BQUMsd0RBQUQ7QUFDQSxhQUFLLEVBQUUsS0FBS3BCLEtBQUwsQ0FBV1gsU0FEbEI7QUFFQSxnQkFBUSxFQUFFLGtCQUFBRSxLQUFLO0FBQUEsaUJBQUksTUFBSSxDQUFDRSxRQUFMLENBQWM7QUFBRUoscUJBQVMsRUFBRUUsS0FBSyxDQUFDNEIsTUFBTixDQUFhQztBQUExQixXQUFkLENBQUo7QUFBQTtBQUZmLFFBRkosQ0FyQkosRUE0QkksTUFBQywwREFBRDtBQUFTLGNBQU07QUFBZixRQTVCSixFQTZCSSxNQUFDLDBEQUFEO0FBQVMsZ0JBQVEsTUFBakI7QUFBa0IsYUFBSyxFQUFFO0FBQXpCLFFBN0JKLEVBOEJJLE1BQUMsMERBQUQ7QUFBUyxjQUFNO0FBQWYsUUE5QkosRUErQkksTUFBQywwREFBRDtBQUFTLGFBQUssTUFBZDtBQUFlLGNBQU0sRUFBQyxPQUF0QjtBQUE4QixlQUFPLEVBQUUsS0FBS3BCLEtBQUwsQ0FBV1o7QUFBbEQsUUEvQkosRUFnQ0ksTUFBQyx5REFBRDtBQUFRLGVBQU8sRUFBRSxLQUFLWSxLQUFMLENBQVdWLE9BQTVCO0FBQXFDLGVBQU87QUFBNUMsa0JBaENKLENBTEosQ0FESjtBQTBDSDs7OztFQTdGcUIrQiwrQzs7QUFnR1hwQywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcRXhjaGFuZ2VzXFxuZXcuanMuNmVjMzNmZmIwZjdjZjZkNTBkYzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHtGb3JtLCBCdXR0b24sIElucHV0LCBNZXNzYWdlLCBEaXZpZGVyfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBFeGNoYW5nZSBmcm9tICcuLi8uLi9ldGhlcmV1bS9leGNoYW5nZSc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi8uLi9ldGhlcmV1bS9mYWN0b3J5JztcclxuXHJcbi8vIGltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jbGFzcyBFeGNoYW5nZU5ldyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBQb3dlclVuaXRzOiAnJyxcclxuICAgICAgICBQcmljZTogJycsXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcclxuICAgICAgICByZWNpcGllbnQ6ICcnLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgXHJcblxyXG5cclxuICAgIG9uU3VibWl0ID0gYXN5bmMgZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTonJ30pO1xyXG5cclxuICAgICAgICBhd2FpdCBldGhlcmV1bS5lbmFibGUoKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgY29uc3QgeyBQb3dlclVuaXRzLCBQcmljZSwgcmVjaXBpZW50fSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHZhciBBbGxFeGNoYW5nZXMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRFeGNoYW5nZXMoKS5jYWxsKCk7XHJcblxyXG4gICAgICAgIGlmICgoQWxsRXhjaGFuZ2VzLmxlbmd0aCA9PSAwKSl7XHJcbiAgICAgICAgICAgIGF3YWl0IGZhY3RvcnkubWV0aG9kcy5jcmVhdGVFeGNoYW5nZSgpXHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7IGZyb206IGFjY291bnRzWzBdfSk7XHJcbiAgICAgICAgICAgIEFsbEV4Y2hhbmdlcyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZEV4Y2hhbmdlcygpLmNhbGwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV4Y2hhbmdlID0gRXhjaGFuZ2UoQWxsRXhjaGFuZ2VzWzBdKTtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGF3YWl0IGV4Y2hhbmdlLm1ldGhvZHNcclxuICAgICAgICAgICAgICAgIC5jcmVhdGVSZXF1ZXN0KFxyXG4gICAgICAgICAgICAgICAgICAgIHdlYjMudXRpbHMudG9XZWkoUHJpY2UsICdldGhlcicpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2lwaWVudCwgXHJcbiAgICAgICAgICAgICAgICAgICAgUG93ZXJVbml0cykuc2VuZCh7IGZyb206IGFjY291bnRzWzBdfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKCcvJyk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaChlcnIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlfSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHsgXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZX0pO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxoMj5DcmVhdGUgTmV3IEV4Y2hhbmdlPC9oMj5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgaW52ZXJ0ZWQgd2lkdGg9ezZ9Lz5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCB3aWR0aD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qb3dlciBVbml0czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiS3dcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5Qb3dlclVuaXRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBQb3dlclVuaXRzOiBldmVudC50YXJnZXQudmFsdWUgfSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIHdpZHRoPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByaWNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFdGhlclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLlByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBQcmljZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlJlY2lwaWVudDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmVjaXBpZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IHJlY2lwaWVudDogZXZlbnQudGFyZ2V0LnZhbHVlfSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIGludmVydGVkIHdpZHRoPXs2fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gcHJpbWFyeT5DcmVhdGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhjaGFuZ2VOZXc7Il0sInNvdXJjZVJvb3QiOiIifQ==