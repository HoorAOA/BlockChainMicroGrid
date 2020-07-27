webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ethereum_exchange__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ethereum/exchange */ "./ethereum/exchange.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");









var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







 // export default () => {
//     return <h1>This is the index page</h1>;
// };

var ExchangeIndex = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ExchangeIndex, _Component);

  var _super = _createSuper(ExchangeIndex);

  function ExchangeIndex() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ExchangeIndex);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      units: '',
      price: '',
      manager: '',
      loading: false,
      errorMessage: '' // cardsItems: {}

    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSubmit", /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event, id) {
        var indexofButtton, exchange, price, accounts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // event.preventDefault();
                console.log(id.target.parentNode.id);
                indexofButtton = parseInt(id.target.parentNode.id); // this.state.indexofButtton = id.target.id;

                exchange = Object(_ethereum_exchange__WEBPACK_IMPORTED_MODULE_14__["default"])(_this.props.TheAddress);
                price = _this.props.requests[indexofButtton].price; // this.setState({loading: true, errorMessage: ''});

                _context.next = 6;
                return ethereum.enable();

              case 6:
                _context.next = 8;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_15__["default"].eth.getAccounts();

              case 8:
                accounts = _context.sent;
                _context.next = 11;
                return exchange.methods.contribute().send({
                  from: accounts[0],
                  value: parseInt(price)
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onFinalize", /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event, id) {
        var indexofButtton, exchange, accounts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // event.preventDefault();
                console.log(id.target.parentNode.id);
                indexofButtton = parseInt(id.target.parentNode.id); // this.state.indexofButtton = id.target.id;

                exchange = Object(_ethereum_exchange__WEBPACK_IMPORTED_MODULE_14__["default"])(_this.props.TheAddress); // this.setState({loading: true, errorMessage: ''});

                _context2.next = 5;
                return ethereum.enable();

              case 5:
                _context2.next = 7;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_15__["default"].eth.getAccounts();

              case 7:
                accounts = _context2.sent;
                _context2.next = 10;
                return exchange.methods.finalizeRequest(indexofButtton).send({
                  from: accounts[0]
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ExchangeIndex, [{
    key: "renderCard",
    value: function renderCard() {
      var _this2 = this;

      if (this.props.AllExchanges.length != 0) {
        var items = this.props.requests.map(function (request, index) {
          return {
            header: request.units + ' Kw | ' + request.price + ' wei',
            description: __jsx("div", null, __jsx("div", {
              "class": "ui inverted divider"
            }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
              color: "green",
              basic: true,
              floated: "right",
              onClick: _this2.onSubmit.bind(_this2, {
                index: index
              })
            }, "Buy")),
            meta: 'Owner: ' + request.manager,
            fluid: true,
            style: {
              width: '500px'
            }
          };
        }); // const cardsItems = await Promise.all(items).then((values) => {
        //     console.log(values);
        //     return values;
        //   });
        // this.setState({ cardsItems });

        return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Card"].Group, {
          items: items
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], null, __jsx("h2", null, "Pending Exchanges"), __jsx(_routes__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        route: "/Exchanges/new"
      }, __jsx("a", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        content: "Create new Exchange",
        icon: "add",
        primary: true,
        floated: "right"
      }))), this.renderCard()));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var AllExchanges, requests, TheAddress, exchange, requestCount;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_11__["default"].methods.getDeployedExchanges().call();

              case 2:
                AllExchanges = _context3.sent;
                console.log(AllExchanges);
                requests = [];
                TheAddress = '';

                if (!(AllExchanges.length != 0)) {
                  _context3.next = 15;
                  break;
                }

                TheAddress = AllExchanges[0];
                exchange = Object(_ethereum_exchange__WEBPACK_IMPORTED_MODULE_14__["default"])(AllExchanges[0]);
                _context3.next = 11;
                return exchange.methods.getRequestsCount().call();

              case 11:
                requestCount = _context3.sent;
                _context3.next = 14;
                return Promise.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return exchange.methods.exchangeRequests(index).call();
                }));

              case 14:
                requests = _context3.sent;

              case 15:
                return _context3.abrupt("return", {
                  AllExchanges: AllExchanges,
                  requests: requests,
                  TheAddress: TheAddress
                });

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ExchangeIndex;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ExchangeIndex);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJFeGNoYW5nZUluZGV4IiwidW5pdHMiLCJwcmljZSIsIm1hbmFnZXIiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwiZXZlbnQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiaW5kZXhvZkJ1dHR0b24iLCJwYXJzZUludCIsImV4Y2hhbmdlIiwiRXhjaGFuZ2UiLCJwcm9wcyIsIlRoZUFkZHJlc3MiLCJyZXF1ZXN0cyIsImV0aGVyZXVtIiwiZW5hYmxlIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwidmFsdWUiLCJmaW5hbGl6ZVJlcXVlc3QiLCJBbGxFeGNoYW5nZXMiLCJsZW5ndGgiLCJpdGVtcyIsIm1hcCIsInJlcXVlc3QiLCJpbmRleCIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwib25TdWJtaXQiLCJiaW5kIiwibWV0YSIsImZsdWlkIiwic3R5bGUiLCJ3aWR0aCIsInJlbmRlckNhcmQiLCJmYWN0b3J5IiwiZ2V0RGVwbG95ZWRFeGNoYW5nZXMiLCJjYWxsIiwiZ2V0UmVxdWVzdHNDb3VudCIsInJlcXVlc3RDb3VudCIsIlByb21pc2UiLCJhbGwiLCJBcnJheSIsImZpbGwiLCJlbGVtZW50IiwiZXhjaGFuZ2VSZXF1ZXN0cyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUNBOztJQUVNQSxhOzs7Ozs7Ozs7Ozs7Ozs7O2dOQXlCTTtBQUNKQyxXQUFLLEVBQUUsRUFESDtBQUVKQyxXQUFLLEVBQUUsRUFGSDtBQUdKQyxhQUFPLEVBQUUsRUFITDtBQUlKQyxhQUFPLEVBQUUsS0FKTDtBQUtKQyxrQkFB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LFFBQVEsQ0FBQ1csT0FBVCxDQUFpQitCLGdCQUFqQixDQUFrQ3BCLEtBQWxDLEVBQXlDWSxJQUF6QyxFQUFQO0FBQ0gsaUJBRkQsQ0FEYSxDOzs7QUFBakI5Qix3Qjs7O2tEQVNHO0FBQUVhLDhCQUFZLEVBQVpBLFlBQUY7QUFBZ0JiLDBCQUFRLEVBQVJBLFFBQWhCO0FBQTBCRCw0QkFBVSxFQUFWQTtBQUExQixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXJCYXdDLCtDOztBQXFJYnpELDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5hNjk4YTg4YjNkYjFmNmM1ZjZlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NhcmQgLCBCdXR0b259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJztcclxuaW1wb3J0IEV4Y2hhbmdlIGZyb20gJy4uL2V0aGVyZXVtL2V4Y2hhbmdlJztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbi8vICAgICByZXR1cm4gPGgxPlRoaXMgaXMgdGhlIGluZGV4IHBhZ2U8L2gxPjtcclxuLy8gfTtcclxuXHJcbmNsYXNzIEV4Y2hhbmdlSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKXtcclxuICAgICAgICBjb25zdCBBbGxFeGNoYW5nZXMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRFeGNoYW5nZXMoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coQWxsRXhjaGFuZ2VzKTtcclxuICAgICAgICB2YXIgcmVxdWVzdHMgPSBbXTtcclxuICAgICAgICB2YXIgVGhlQWRkcmVzcyA9ICcnO1xyXG4gICAgICAgIGlmIChBbGxFeGNoYW5nZXMubGVuZ3RoICE9IDAgKXtcclxuICAgICAgICAgICAgVGhlQWRkcmVzcyA9IEFsbEV4Y2hhbmdlc1swXTtcclxuICAgICAgICAgICAgY29uc3QgZXhjaGFuZ2UgPSBFeGNoYW5nZShBbGxFeGNoYW5nZXNbMF0pO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0Q291bnQgPSBhd2FpdCBleGNoYW5nZS5tZXRob2RzLmdldFJlcXVlc3RzQ291bnQoKS5jYWxsKCk7XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgICAgICAgICAgQXJyYXkocGFyc2VJbnQocmVxdWVzdENvdW50KSkuZmlsbCgpLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXhjaGFuZ2UubWV0aG9kcy5leGNoYW5nZVJlcXVlc3RzKGluZGV4KS5jYWxsKClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHsgQWxsRXhjaGFuZ2VzICxyZXF1ZXN0cywgVGhlQWRkcmVzc307XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHVuaXRzOiAnJyxcclxuICAgICAgICBwcmljZTogJycsXHJcbiAgICAgICAgbWFuYWdlcjogJycsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOicnXHJcbiAgICAgICAgLy8gY2FyZHNJdGVtczoge31cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDYXJkKCkge1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuQWxsRXhjaGFuZ2VzLmxlbmd0aCAhPSAwKXtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMucmVxdWVzdHMubWFwKCAocmVxdWVzdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHJlcXVlc3QudW5pdHMgKyAnIEt3IHwgJyArIHJlcXVlc3QucHJpY2UgKyAnIHdlaScgLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBpbnZlcnRlZCBkaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9IFwiZ3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNpYyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMub25TdWJtaXQuYmluZCh0aGlzLCB7aW5kZXh9KX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCdXlcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YTogJ093bmVyOiAnICsgcmVxdWVzdC5tYW5hZ2VyICxcclxuICAgICAgICAgICAgICAgICAgICBmbHVpZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge3dpZHRoOic1MDBweCd9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGNhcmRzSXRlbXMgPSBhd2FpdCBQcm9taXNlLmFsbChpdGVtcykudGhlbigodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIHZhbHVlcztcclxuICAgICAgICAgICAgLy8gICB9KTtcclxuICAgIFxyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBjYXJkc0l0ZW1zIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+XHJcbiAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50LCBpZCkgPT4ge1xyXG4gICAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coaWQudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4b2ZCdXR0dG9uID0gcGFyc2VJbnQoaWQudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuaW5kZXhvZkJ1dHR0b24gPSBpZC50YXJnZXQuaWQ7XHJcbiAgICAgICAgY29uc3QgZXhjaGFuZ2UgPSBFeGNoYW5nZSh0aGlzLnByb3BzLlRoZUFkZHJlc3MpO1xyXG5cclxuICAgICAgICBjb25zdCB7cHJpY2V9ID0gdGhpcy5wcm9wcy5yZXF1ZXN0c1tpbmRleG9mQnV0dHRvbl07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiAnJ30pO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgZXRoZXJldW0uZW5hYmxlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGF3YWl0IGV4Y2hhbmdlLm1ldGhvZHMuY29udHJpYnV0ZSgpLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZnJvbSA6IGFjY291bnRzWzBdLFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgOiBwYXJzZUludChwcmljZSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uRmluYWxpemUgPSBhc3luYyAoZXZlbnQsIGlkKSA9PiB7XHJcbiAgICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpZC50YXJnZXQucGFyZW50Tm9kZS5pZCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXhvZkJ1dHR0b24gPSBwYXJzZUludChpZC50YXJnZXQucGFyZW50Tm9kZS5pZCk7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5pbmRleG9mQnV0dHRvbiA9IGlkLnRhcmdldC5pZDtcclxuICAgICAgICBjb25zdCBleGNoYW5nZSA9IEV4Y2hhbmdlKHRoaXMucHJvcHMuVGhlQWRkcmVzcyk7XHJcblxyXG5cclxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6ICcnfSk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBldGhlcmV1bS5lbmFibGUoKTtcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IGV4Y2hhbmdlLm1ldGhvZHMuZmluYWxpemVSZXF1ZXN0KGluZGV4b2ZCdXR0dG9uKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGZyb20gOiBhY2NvdW50c1swXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICA8aDI+UGVuZGluZyBFeGNoYW5nZXM8L2gyPlxyXG4gICAgICAgICAgICA8TGluayByb3V0ZT1cIi9FeGNoYW5nZXMvbmV3XCI+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PSdDcmVhdGUgbmV3IEV4Y2hhbmdlJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj0nYWRkJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB7LyogPENhcmQuR3JvdXAgaXRlbXM9e3RoaXMuc3RhdGUuY2FyZHNJdGVtc30vPiAqL31cclxuICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FyZCgpfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeGNoYW5nZUluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=