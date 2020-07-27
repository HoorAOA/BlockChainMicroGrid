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
            }), __jsx("div", {
              className: "ui two buttons",
              id: index
            }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
              color: "green",
              basic: true,
              floated: "right",
              onClick: _this2.onSubmit.bind(_this2, {
                index: index
              })
            }, "Buy"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
              disabled: request.complete,
              color: "blue",
              basic: true,
              floated: "right",
              onClick: _this2.onFinalize.bind(_this2, {
                index: index
              })
            }, "Finalize")), " "),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJFeGNoYW5nZUluZGV4IiwidW5pdHMiLCJwcmljZSIsIm1hbmFnZXIiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwiZXZlbnQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiaW5kZXhvZkJ1dHR0b24iLCJwYXJzZUludCIsImV4Y2hhbmdlIiwiRXhjaGFuZ2UiLCJwcm9wcyIsIlRoZUFkZHJlc3MiLCJyZXF1ZXN0cyIsImV0aGVyZXVtIiwiZW5hYmxlIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwidmFsdWUiLCJmaW5hbGl6ZVJlcXVlc3QiLCJBbGxFeGNoYW5nZXMiLCJsZW5ndGgiLCJpdGVtcyIsIm1hcCIsInJlcXVlc3QiLCJpbmRleCIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwib25TdWJtaXQiLCJiaW5kIiwiY29tcGxldGUiLCJvbkZpbmFsaXplIiwibWV0YSIsImZsdWlkIiwic3R5bGUiLCJ3aWR0aCIsInJlbmRlckNhcmQiLCJmYWN0b3J5IiwiZ2V0RGVwbG95ZWRFeGNoYW5nZXMiLCJjYWxsIiwiZ2V0UmVxdWVzdHNDb3VudCIsInJlcXVlc3RDb3VudCIsIlByb21pc2UiLCJhbGwiLCJBcnJheSIsImZpbGwiLCJlbGVtZW50IiwiZXhjaGFuZ2VSZXF1ZXN0cyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUNBOztJQUVNQSxhOzs7Ozs7Ozs7Ozs7Ozs7O2dOQXlCTTtBQUNKQyxXQUFLLEVBQUUsRUFESDtBQUVKQyxXQUFLLEVBQUUsRUFGSDtBQUdKQyxhQUFPLEVBQUUsRUFITDtBQUlKQyxh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QkFBVSxHQUFHYyxZQUFZLENBQUMsQ0FBRCxDQUF6QjtBQUNNakIsd0IsR0FBV0MsbUVBQVEsQ0FBQ2dCLFlBQVksQ0FBQyxDQUFELENBQWIsQzs7dUJBQ0VqQixRQUFRLENBQUNXLE9BQVQsQ0FBaUIwQixnQkFBakIsR0FBb0NELElBQXBDLEU7OztBQUFyQkUsNEI7O3VCQUVXQyxPQUFPLENBQUNDLEdBQVIsQ0FDYkMsS0FBSyxDQUFDMUMsUUFBUSxDQUFDdUMsWUFBRCxDQUFULENBQUwsQ0FBOEJJLElBQTlCLEdBQXFDdEIsR0FBckMsQ0FBeUMsVUFBQ3VCLE9BQUQsRUFBVXJCLEtBQVYsRUFBb0I7QUFDekQseUJBQU90QixRQUFRLENBQUNXLE9BQVQsQ0FBaUJpQyxnQkFBakIsQ0FBa0N0QixLQUFsQyxFQUF5Q2MsSUFBekMsRUFBUDtBQUNILGlCQUZELENBRGEsQzs7O0FBQWpCaEMsd0I7OztrREFTRztBQUFFYSw4QkFBWSxFQUFaQSxZQUFGO0FBQWdCYiwwQkFBUSxFQUFSQSxRQUFoQjtBQUEwQkQsNEJBQVUsRUFBVkE7QUFBMUIsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFyQmEwQywrQzs7QUE0SWIzRCw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMTFhNzE2NjdiNmM5NTQzYWMyNjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDYXJkICwgQnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XHJcbmltcG9ydCBFeGNoYW5nZSBmcm9tICcuLi9ldGhlcmV1bS9leGNoYW5nZSc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIDxoMT5UaGlzIGlzIHRoZSBpbmRleCBwYWdlPC9oMT47XHJcbi8vIH07XHJcblxyXG5jbGFzcyBFeGNoYW5nZUluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCl7XHJcbiAgICAgICAgY29uc3QgQWxsRXhjaGFuZ2VzID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkRXhjaGFuZ2VzKCkuY2FsbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEFsbEV4Y2hhbmdlcyk7XHJcbiAgICAgICAgdmFyIHJlcXVlc3RzID0gW107XHJcbiAgICAgICAgdmFyIFRoZUFkZHJlc3MgPSAnJztcclxuICAgICAgICBpZiAoQWxsRXhjaGFuZ2VzLmxlbmd0aCAhPSAwICl7XHJcbiAgICAgICAgICAgIFRoZUFkZHJlc3MgPSBBbGxFeGNoYW5nZXNbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IGV4Y2hhbmdlID0gRXhjaGFuZ2UoQWxsRXhjaGFuZ2VzWzBdKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdENvdW50ID0gYXdhaXQgZXhjaGFuZ2UubWV0aG9kcy5nZXRSZXF1ZXN0c0NvdW50KCkuY2FsbCgpO1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgICAgICAgICAgIEFycmF5KHBhcnNlSW50KHJlcXVlc3RDb3VudCkpLmZpbGwoKS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4Y2hhbmdlLm1ldGhvZHMuZXhjaGFuZ2VSZXF1ZXN0cyhpbmRleCkuY2FsbCgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7IEFsbEV4Y2hhbmdlcyAscmVxdWVzdHMsIFRoZUFkZHJlc3N9O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICB1bml0czogJycsXHJcbiAgICAgICAgcHJpY2U6ICcnLFxyXG4gICAgICAgIG1hbmFnZXI6ICcnLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTonJ1xyXG4gICAgICAgIC8vIGNhcmRzSXRlbXM6IHt9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2FyZCgpIHtcclxuICAgICAgICBpZih0aGlzLnByb3BzLkFsbEV4Y2hhbmdlcy5sZW5ndGggIT0gMCl7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLnJlcXVlc3RzLm1hcCggKHJlcXVlc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiByZXF1ZXN0LnVuaXRzICsgJyBLdyB8ICcgKyByZXF1ZXN0LnByaWNlICsgJyB3ZWknICxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgaW52ZXJ0ZWQgZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1aSB0d28gYnV0dG9ucycgaWQ9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0gXCJncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2ljIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMsIHtpbmRleH0pfT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJ1eVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e3JlcXVlc3QuY29tcGxldGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0gXCJibHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzaWMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0ZWQ9XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25GaW5hbGl6ZS5iaW5kKHRoaXMsIHtpbmRleH0pfT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbmFsaXplXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+PC9kaXY+IDwvZGl2PixcclxuICAgICAgICAgICAgICAgICAgICBtZXRhOiAnT3duZXI6ICcgKyByZXF1ZXN0Lm1hbmFnZXIgLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsdWlkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7d2lkdGg6JzUwMHB4J31cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gY29uc3QgY2FyZHNJdGVtcyA9IGF3YWl0IFByb21pc2UuYWxsKGl0ZW1zKS50aGVuKCh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdmFsdWVzO1xyXG4gICAgICAgICAgICAvLyAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGNhcmRzSXRlbXMgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz5cclxuICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQsIGlkKSA9PiB7XHJcbiAgICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpZC50YXJnZXQucGFyZW50Tm9kZS5pZCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXhvZkJ1dHR0b24gPSBwYXJzZUludChpZC50YXJnZXQucGFyZW50Tm9kZS5pZCk7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5pbmRleG9mQnV0dHRvbiA9IGlkLnRhcmdldC5pZDtcclxuICAgICAgICBjb25zdCBleGNoYW5nZSA9IEV4Y2hhbmdlKHRoaXMucHJvcHMuVGhlQWRkcmVzcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHtwcmljZX0gPSB0aGlzLnByb3BzLnJlcXVlc3RzW2luZGV4b2ZCdXR0dG9uXTtcclxuICAgICAgICBcclxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6ICcnfSk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBldGhlcmV1bS5lbmFibGUoKTtcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYXdhaXQgZXhjaGFuZ2UubWV0aG9kcy5jb250cmlidXRlKCkuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBmcm9tIDogYWNjb3VudHNbMF0sXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA6IHBhcnNlSW50KHByaWNlKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25GaW5hbGl6ZSA9IGFzeW5jIChldmVudCwgaWQpID0+IHtcclxuICAgICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkLnRhcmdldC5wYXJlbnROb2RlLmlkKTtcclxuICAgICAgICBjb25zdCBpbmRleG9mQnV0dHRvbiA9IHBhcnNlSW50KGlkLnRhcmdldC5wYXJlbnROb2RlLmlkKTtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLmluZGV4b2ZCdXR0dG9uID0gaWQudGFyZ2V0LmlkO1xyXG4gICAgICAgIGNvbnN0IGV4Y2hhbmdlID0gRXhjaGFuZ2UodGhpcy5wcm9wcy5UaGVBZGRyZXNzKTtcclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogJyd9KTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IGV0aGVyZXVtLmVuYWJsZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgYXdhaXQgZXhjaGFuZ2UubWV0aG9kcy5maW5hbGl6ZVJlcXVlc3QoaW5kZXhvZkJ1dHR0b24pLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZnJvbSA6IGFjY291bnRzWzBdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPExheW91dD5cclxuXHJcbiAgICAgICAgICAgIDxoMj5QZW5kaW5nIEV4Y2hhbmdlczwvaDI+XHJcbiAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL0V4Y2hhbmdlcy9uZXdcIj5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9J0NyZWF0ZSBuZXcgRXhjaGFuZ2UnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPSdhZGQnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIHsvKiA8Q2FyZC5Hcm91cCBpdGVtcz17dGhpcy5zdGF0ZS5jYXJkc0l0ZW1zfS8+ICovfVxyXG4gICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDYXJkKCl9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4Y2hhbmdlSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==