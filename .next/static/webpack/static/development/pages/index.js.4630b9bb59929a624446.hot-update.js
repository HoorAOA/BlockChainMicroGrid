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
                console.log(id.target.id);
                indexofButtton = parseInt(id.target.id); // this.state.indexofButtton = id.target.id;

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
                _context.next = 13;
                return exchange.methods.finalizeRequest(indexofButtton).send({
                  from: accounts[0]
                });

              case 13:
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
              id: index,
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
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var AllExchanges, requests, TheAddress, exchange, requestCount;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_11__["default"].methods.getDeployedExchanges().call();

              case 2:
                AllExchanges = _context2.sent;
                console.log(AllExchanges);
                requests = [];
                TheAddress = '';

                if (!(AllExchanges.length != 0)) {
                  _context2.next = 15;
                  break;
                }

                TheAddress = AllExchanges[0];
                exchange = Object(_ethereum_exchange__WEBPACK_IMPORTED_MODULE_14__["default"])(AllExchanges[0]);
                _context2.next = 11;
                return exchange.methods.getRequestsCount().call();

              case 11:
                requestCount = _context2.sent;
                _context2.next = 14;
                return Promise.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return exchange.methods.exchangeRequests(index).call();
                }));

              case 14:
                requests = _context2.sent;

              case 15:
                return _context2.abrupt("return", {
                  AllExchanges: AllExchanges,
                  requests: requests,
                  TheAddress: TheAddress
                });

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJFeGNoYW5nZUluZGV4IiwidW5pdHMiLCJwcmljZSIsIm1hbmFnZXIiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwiZXZlbnQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpbmRleG9mQnV0dHRvbiIsInBhcnNlSW50IiwiZXhjaGFuZ2UiLCJFeGNoYW5nZSIsInByb3BzIiwiVGhlQWRkcmVzcyIsInJlcXVlc3RzIiwiZXRoZXJldW0iLCJlbmFibGUiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ2YWx1ZSIsImZpbmFsaXplUmVxdWVzdCIsIkFsbEV4Y2hhbmdlcyIsImxlbmd0aCIsIml0ZW1zIiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJvblN1Ym1pdCIsImJpbmQiLCJtZXRhIiwiZmx1aWQiLCJzdHlsZSIsIndpZHRoIiwicmVuZGVyQ2FyZCIsImZhY3RvcnkiLCJnZXREZXBsb3llZEV4Y2hhbmdlcyIsImNhbGwiLCJnZXRSZXF1ZXN0c0NvdW50IiwicmVxdWVzdENvdW50IiwiUHJvbWlzZSIsImFsbCIsIkFycmF5IiwiZmlsbCIsImVsZW1lbnQiLCJleGNoYW5nZVJlcXVlc3RzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7O0lBRU1BLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BeUJNO0FBQ0pDLFdBQUssRUFBRSxFQURIO0FBRUpDLFdBQUssRUFBRSxFQUZIO0FBR0pDLGFBQU8sRUFBRSxFQUhMO0FBSUpDLGFBQU8sRUFBRSxLQUpMO0FBS0pDLGtCQUFZLEVBQUMsRUFMVCxD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Q0FBQ3JCLE9BQVIsQ0FBZ0JzQixvQkFBaEIsR0FBdUNDLElBQXZDLEU7OztBQUFyQmpCLDRCO0FBQ050Qix1QkFBTyxDQUFDQyxHQUFSLENBQVlxQixZQUFaO0FBQ0liLHdCLEdBQVcsRTtBQUNYRCwwQixHQUFhLEU7O3NCQUNiYyxZQUFZLENBQUNDLE1BQWIsSUFBdUIsQzs7Ozs7QUFDdkJmLDBCQUFVLEdBQUdjLFlBQVksQ0FBQyxDQUFELENBQXpCO0FBQ01qQix3QixHQUFXQyxtRUFBUSxDQUFDZ0IsWUFBWSxDQUFDLENBQUQsQ0FBYixDOzt1QkFDRWpCLFFBQVEsQ0FBQ1csT0FBVCxDQUFpQndCLGdCQUFqQixHQUFvQ0QsSUFBcEMsRTs7O0FBQXJCRSw0Qjs7dUJBRVdDLE9BQU8sQ0FBQ0MsR0FBUixDQUNiQyxLQUFLLENBQUN4QyxRQUFRLENBQUNxQyxZQUFELENBQVQsQ0FBTCxDQUE4QkksSUFBOUIsR0FBcUNwQixHQUFyQyxDQUF5QyxVQUFDcUIsT0FBRCxFQUFVbkIsS0FBVixFQUFvQjtBQUN6RCx5QkFBT3RCLFFBQVEsQ0FBQ1csT0FBVCxDQUFpQitCLGdCQUFqQixDQUFrQ3BCLEtBQWxDLEVBQXlDWSxJQUF6QyxFQUFQO0FBQ0gsaUJBRkQsQ0FEYSxDOzs7QUFBakI5Qix3Qjs7O2tEQVNHO0FBQUVhLDhCQUFZLEVBQVpBLFlBQUY7QUFBZ0JiLDBCQUFRLEVBQVJBLFFBQWhCO0FBQTBCRCw0QkFBVSxFQUFWQTtBQUExQixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXJCYXdDLCtDOztBQXVIYnhELDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy40NjMwYjliYjU5OTI5YTYyNDQ0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NhcmQgLCBCdXR0b259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJztcclxuaW1wb3J0IEV4Y2hhbmdlIGZyb20gJy4uL2V0aGVyZXVtL2V4Y2hhbmdlJztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbi8vICAgICByZXR1cm4gPGgxPlRoaXMgaXMgdGhlIGluZGV4IHBhZ2U8L2gxPjtcclxuLy8gfTtcclxuXHJcbmNsYXNzIEV4Y2hhbmdlSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKXtcclxuICAgICAgICBjb25zdCBBbGxFeGNoYW5nZXMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRFeGNoYW5nZXMoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coQWxsRXhjaGFuZ2VzKTtcclxuICAgICAgICB2YXIgcmVxdWVzdHMgPSBbXTtcclxuICAgICAgICB2YXIgVGhlQWRkcmVzcyA9ICcnO1xyXG4gICAgICAgIGlmIChBbGxFeGNoYW5nZXMubGVuZ3RoICE9IDAgKXtcclxuICAgICAgICAgICAgVGhlQWRkcmVzcyA9IEFsbEV4Y2hhbmdlc1swXTtcclxuICAgICAgICAgICAgY29uc3QgZXhjaGFuZ2UgPSBFeGNoYW5nZShBbGxFeGNoYW5nZXNbMF0pO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0Q291bnQgPSBhd2FpdCBleGNoYW5nZS5tZXRob2RzLmdldFJlcXVlc3RzQ291bnQoKS5jYWxsKCk7XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgICAgICAgICAgQXJyYXkocGFyc2VJbnQocmVxdWVzdENvdW50KSkuZmlsbCgpLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXhjaGFuZ2UubWV0aG9kcy5leGNoYW5nZVJlcXVlc3RzKGluZGV4KS5jYWxsKClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHsgQWxsRXhjaGFuZ2VzICxyZXF1ZXN0cywgVGhlQWRkcmVzc307XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHVuaXRzOiAnJyxcclxuICAgICAgICBwcmljZTogJycsXHJcbiAgICAgICAgbWFuYWdlcjogJycsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOicnXHJcbiAgICAgICAgLy8gY2FyZHNJdGVtczoge31cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDYXJkKCkge1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuQWxsRXhjaGFuZ2VzLmxlbmd0aCAhPSAwKXtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMucmVxdWVzdHMubWFwKCAocmVxdWVzdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHJlcXVlc3QudW5pdHMgKyAnIEt3IHwgJyArIHJlcXVlc3QucHJpY2UgKyAnIHdlaScgLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBpbnZlcnRlZCBkaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9IFwiZ3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNpYyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMsIHtpbmRleH0pfT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJ1eVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgICAgICAgICBtZXRhOiAnT3duZXI6ICcgKyByZXF1ZXN0Lm1hbmFnZXIgLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsdWlkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7d2lkdGg6JzUwMHB4J31cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gY29uc3QgY2FyZHNJdGVtcyA9IGF3YWl0IFByb21pc2UuYWxsKGl0ZW1zKS50aGVuKCh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdmFsdWVzO1xyXG4gICAgICAgICAgICAvLyAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGNhcmRzSXRlbXMgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz5cclxuICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQsIGlkKSA9PiB7XHJcbiAgICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpZC50YXJnZXQuaWQpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4b2ZCdXR0dG9uID0gcGFyc2VJbnQoaWQudGFyZ2V0LmlkKTtcclxuICAgICAgICAvLyB0aGlzLnN0YXRlLmluZGV4b2ZCdXR0dG9uID0gaWQudGFyZ2V0LmlkO1xyXG4gICAgICAgIGNvbnN0IGV4Y2hhbmdlID0gRXhjaGFuZ2UodGhpcy5wcm9wcy5UaGVBZGRyZXNzKTtcclxuXHJcbiAgICAgICAgY29uc3Qge3ByaWNlfSA9IHRoaXMucHJvcHMucmVxdWVzdHNbaW5kZXhvZkJ1dHR0b25dO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogJyd9KTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IGV0aGVyZXVtLmVuYWJsZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhd2FpdCBleGNoYW5nZS5tZXRob2RzLmNvbnRyaWJ1dGUoKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGZyb20gOiBhY2NvdW50c1swXSxcclxuICAgICAgICAgICAgICAgIHZhbHVlIDogcGFyc2VJbnQocHJpY2UpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgZXhjaGFuZ2UubWV0aG9kcy5maW5hbGl6ZVJlcXVlc3QoaW5kZXhvZkJ1dHR0b24pLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZnJvbSA6IGFjY291bnRzWzBdXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPExheW91dD5cclxuXHJcbiAgICAgICAgICAgIDxoMj5QZW5kaW5nIEV4Y2hhbmdlczwvaDI+XHJcbiAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL0V4Y2hhbmdlcy9uZXdcIj5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9J0NyZWF0ZSBuZXcgRXhjaGFuZ2UnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPSdhZGQnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIHsvKiA8Q2FyZC5Hcm91cCBpdGVtcz17dGhpcy5zdGF0ZS5jYXJkc0l0ZW1zfS8+ICovfVxyXG4gICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDYXJkKCl9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4Y2hhbmdlSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==