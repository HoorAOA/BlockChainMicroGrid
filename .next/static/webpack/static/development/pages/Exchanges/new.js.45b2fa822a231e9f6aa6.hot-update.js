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
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, {
        width: 6
      }, __jsx("label", null, "Recipient"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Input"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9FeGNoYW5nZXMvbmV3LmpzIl0sIm5hbWVzIjpbIkV4Y2hhbmdlTmV3IiwiUG93ZXJVbml0cyIsIlByaWNlIiwiZXJyb3JNZXNzYWdlIiwicmVjaXBpZW50IiwibG9hZGluZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aGVyZXVtIiwiZW5hYmxlIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJzdGF0ZSIsImZhY3RvcnkiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRFeGNoYW5nZXMiLCJjYWxsIiwiQWxsRXhjaGFuZ2VzIiwibGVuZ3RoIiwiY3JlYXRlRXhjaGFuZ2UiLCJzZW5kIiwiZnJvbSIsImV4Y2hhbmdlIiwiRXhjaGFuZ2UiLCJjcmVhdGVSZXF1ZXN0IiwidXRpbHMiLCJ0b1dlaSIsIlJvdXRlciIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJvblN1Ym1pdCIsInRhcmdldCIsInZhbHVlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7SUFFTUEsVzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDTTtBQUNKQyxnQkFBVSxFQUFFLEVBRFI7QUFFSkMsV0FBSyxFQUFFLEVBRkg7QUFHSkMsa0JBQVksRUFBRSxFQUhWO0FBSUpDLGVBQVMsRUFBRSxFQUpQO0FBS0pDLGFBQU8sRUFBRTtBQUxMLEs7OztrTUFVRyxpQkFBTUMsS0FBTjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1BBLHFCQUFLLENBQUNDLGNBQU47O0FBRUEsc0JBQUtDLFFBQUwsQ0FBYztBQUFDSCx5QkFBTyxFQUFFLElBQVY7QUFBZ0JGLDhCQUFZLEVBQUM7QUFBN0IsaUJBQWQ7O0FBSE87QUFBQSx1QkFLRE0sUUFBUSxDQUFDQyxNQUFULEVBTEM7O0FBQUE7QUFB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QUFDRSxRQUFMLENBQWM7QUFBRU4saUJBQUssRUFBRUksS0FBSyxDQUFDNEIsTUFBTixDQUFhQztBQUF0QixXQUFkLENBRFc7QUFBQTtBQUpuQixRQUZKLENBWEosRUFxQkksTUFBQyx1REFBRCxDQUFNLEtBQU47QUFBWSxhQUFLLEVBQUU7QUFBbkIsU0FDSSxpQ0FESixFQUVJLE1BQUMsd0RBQUQ7QUFDSSxhQUFLLEVBQUUsS0FBS3BCLEtBQUwsQ0FBV1gsU0FEdEI7QUFFSSxnQkFBUSxFQUFFLGtCQUFBRSxLQUFLO0FBQUEsaUJBQUksTUFBSSxDQUFDRSxRQUFMLENBQWM7QUFBRUoscUJBQVMsRUFBRUUsS0FBSyxDQUFDNEIsTUFBTixDQUFhQztBQUExQixXQUFkLENBQUo7QUFBQTtBQUZuQixRQUZKLENBckJKLEVBNEJJLE1BQUMsMERBQUQ7QUFBUyxjQUFNO0FBQWYsUUE1QkosRUE2QkksTUFBQywwREFBRDtBQUFTLGdCQUFRLE1BQWpCO0FBQWtCLGFBQUssRUFBRTtBQUF6QixRQTdCSixFQThCSSxNQUFDLDBEQUFEO0FBQVMsY0FBTTtBQUFmLFFBOUJKLEVBK0JJLE1BQUMsMERBQUQ7QUFBUyxhQUFLLE1BQWQ7QUFBZSxjQUFNLEVBQUMsT0FBdEI7QUFBOEIsZUFBTyxFQUFFLEtBQUtwQixLQUFMLENBQVdaO0FBQWxELFFBL0JKLEVBZ0NJLE1BQUMseURBQUQ7QUFBUSxlQUFPLEVBQUUsS0FBS1ksS0FBTCxDQUFXVixPQUE1QjtBQUFxQyxlQUFPO0FBQTVDLGtCQWhDSixDQUxKLENBREo7QUEwQ0g7Ozs7RUE3RnFCK0IsK0M7O0FBZ0dYcEMsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXEV4Y2hhbmdlc1xcbmV3LmpzLjQ1YjJmYTgyMmEyMzFlOWY2YWE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7Rm9ybSwgQnV0dG9uLCBJbnB1dCwgTWVzc2FnZSwgRGl2aWRlcn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgRXhjaGFuZ2UgZnJvbSAnLi4vLi4vZXRoZXJldW0vZXhjaGFuZ2UnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vLi4vZXRoZXJldW0vZmFjdG9yeSc7XHJcblxyXG4vLyBpbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY2xhc3MgRXhjaGFuZ2VOZXcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgUG93ZXJVbml0czogJycsXHJcbiAgICAgICAgUHJpY2U6ICcnLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTogJycsXHJcbiAgICAgICAgcmVjaXBpZW50OiAnJyxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgfTtcclxuICAgIFxyXG5cclxuXHJcbiAgICBvblN1Ym1pdCA9IGFzeW5jIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6Jyd9KTtcclxuXHJcbiAgICAgICAgYXdhaXQgZXRoZXJldW0uZW5hYmxlKCk7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgIGNvbnN0IHsgUG93ZXJVbml0cywgUHJpY2UsIHJlY2lwaWVudH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICB2YXIgQWxsRXhjaGFuZ2VzID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkRXhjaGFuZ2VzKCkuY2FsbCgpO1xyXG5cclxuICAgICAgICBpZiAoKEFsbEV4Y2hhbmdlcy5sZW5ndGggPT0gMCkpe1xyXG4gICAgICAgICAgICBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuY3JlYXRlRXhjaGFuZ2UoKVxyXG4gICAgICAgICAgICAgICAgLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXX0pO1xyXG4gICAgICAgICAgICBBbGxFeGNoYW5nZXMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRFeGNoYW5nZXMoKS5jYWxsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBleGNoYW5nZSA9IEV4Y2hhbmdlKEFsbEV4Y2hhbmdlc1swXSk7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBhd2FpdCBleGNoYW5nZS5tZXRob2RzXHJcbiAgICAgICAgICAgICAgICAuY3JlYXRlUmVxdWVzdChcclxuICAgICAgICAgICAgICAgICAgICB3ZWIzLnV0aWxzLnRvV2VpKFByaWNlLCAnZXRoZXInKSxcclxuICAgICAgICAgICAgICAgICAgICByZWNpcGllbnQsIFxyXG4gICAgICAgICAgICAgICAgICAgIFBvd2VyVW5pdHMpLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXX0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZSgnLycpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZXJyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZX0pO1xyXG4gICAgICAgIH0gZmluYWxseSB7IFxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KTtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8aDI+Q3JlYXRlIE5ldyBFeGNoYW5nZTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIGludmVydGVkIHdpZHRoPXs2fS8+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgd2lkdGg9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UG93ZXIgVW5pdHM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkt3XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuUG93ZXJVbml0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgUG93ZXJVbml0czogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCB3aWR0aD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QcmljZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRXRoZXJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5QcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgUHJpY2U6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgd2lkdGg9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UmVjaXBpZW50PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmVjaXBpZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyByZWNpcGllbnQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciBpbnZlcnRlZCB3aWR0aD17Nn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IHByaW1hcnk+Q3JlYXRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4Y2hhbmdlTmV3OyJdLCJzb3VyY2VSb290IjoiIn0=