"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Authprovider.js":
/*!****************************************!*\
  !*** ./src/components/Authprovider.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Auth\": function() { return /* binding */ Auth; },\n/* harmony export */   \"useAuth\": function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Loadingscreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loadingscreen */ \"./src/components/Loadingscreen.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/firebase */ \"./src/firebase/firebase.js\");\n/* harmony import */ var _pages_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/login */ \"./src/pages/login.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/home/user/Desktop/leap2/team1/admin/src/components/Authprovider.js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Authcontext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nvar Auth = function Auth(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  // console.log(children);\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      login = _useState[0],\n      setLogin = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      loading = _useState2[0],\n      setloading = _useState2[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.onAuthStateChanged)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, function (user) {\n      if (user) {\n        setLogin(user.uid);\n      } else {\n        setLogin(function () {\n          var returnValue = undefined;\n          return returnValue;\n        });\n      }\n\n      setloading(false);\n    });\n    return function () {\n      return unsubscribe();\n    };\n  }, []);\n\n  var UserSignOut = function UserSignOut() {\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signOut)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__.auth).then(function () {\n      router.push('/login');\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  };\n\n  if (!loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Loadingscreen__WEBPACK_IMPORTED_MODULE_2__.Loadingscreen, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 26\n  }, _this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Authcontext.Provider, {\n    value: {\n      loading: loading,\n      login: login,\n      UserSignOut: UserSignOut\n    },\n    children: [loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Loadingscreen__WEBPACK_IMPORTED_MODULE_2__.Loadingscreen, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 25\n    }, _this), !loading && !user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_pages_login__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 35\n    }, _this), !loading && user && children]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Auth, \"psOT3HA/rNh2w/3xZFn7qfRATGA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = Auth;\nvar useAuth = function useAuth() {\n  _s2();\n\n  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Authcontext);\n};\n\n_s2(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"Auth\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BdXRocHJvdmlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTVUsV0FBVyxnQkFBR04sb0RBQWEsQ0FBQyxFQUFELENBQWpDO0FBQ08sSUFBTU8sSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQ2xDO0FBQ0Esa0JBQTBCViwrQ0FBUSxDQUFDLEtBQUQsQ0FBbEM7QUFBQSxNQUFPVyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBOEJaLCtDQUFRLENBQUMsSUFBRCxDQUF0QztBQUFBLE1BQU9hLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHVixzREFBUyxFQUF4QjtBQUNBRixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDWixRQUFNYSxXQUFXLEdBQUdsQixpRUFBa0IsQ0FBQ1Esb0RBQUQsRUFBTyxVQUFDVyxJQUFELEVBQVU7QUFDckQsVUFBSUEsSUFBSixFQUFVO0FBQ1JMLFFBQUFBLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDQyxHQUFOLENBQVI7QUFDRCxPQUZELE1BRU87QUFDTE4sUUFBQUEsUUFBUSxDQUFDLFlBQU07QUFDYixjQUFNTyxXQUFXLEdBQUdDLFNBQXBCO0FBQ0EsaUJBQU9ELFdBQVA7QUFDRCxTQUhPLENBQVI7QUFJRDs7QUFDREwsTUFBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEtBVnFDLENBQXRDO0FBV0EsV0FBTztBQUFBLGFBQU1FLFdBQVcsRUFBakI7QUFBQSxLQUFQO0FBQ0QsR0FiTSxFQWFKLEVBYkksQ0FBVDs7QUFlQSxNQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCdEIsSUFBQUEsc0RBQU8sQ0FBQ08sb0RBQUQsQ0FBUCxDQUFjZ0IsSUFBZCxDQUFtQixZQUFNO0FBQ3JCUCxNQUFBQSxNQUFNLENBQUNRLElBQVAsQ0FBWSxRQUFaO0FBQ0gsS0FGRCxXQUVTLFVBQUNDLEtBQUQsRUFBVztBQUNoQkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSCxLQUpEO0FBS0gsR0FORDs7QUFPQSxNQUFJLENBQUNYLE9BQUwsRUFBYyxvQkFBTyw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDZCxzQkFDSSw4REFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFBRUEsTUFBQUEsT0FBTyxFQUFQQSxPQUFGO0FBQVdGLE1BQUFBLEtBQUssRUFBTEEsS0FBWDtBQUFrQlUsTUFBQUEsV0FBVyxFQUFYQTtBQUFsQixLQUE3QjtBQUFBLGVBQ0tSLE9BQU8saUJBQUksOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURoQixFQUVLLENBQUNBLE9BQUQsSUFBWSxDQUFDSSxJQUFiLGlCQUFxQiw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRjFCLEVBR0ssQ0FBQ0osT0FBRCxJQUFZSSxJQUFaLElBQW9CUCxRQUh6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU9ILENBbkNNOztHQUFNRDtVQUlNSjs7O0tBSk5JO0FBb0NOLElBQU1rQixPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBOztBQUFBLFNBQU0xQixpREFBVSxDQUFDTyxXQUFELENBQWhCO0FBQUEsQ0FBaEI7O0lBQU1tQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BdXRocHJvdmlkZXIuanM/YzNiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvbkF1dGhTdGF0ZUNoYW5nZWQsIHNpZ25PdXQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExvYWRpbmdzY3JlZW4gfSBmcm9tICcuL0xvYWRpbmdzY3JlZW4nXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vZmlyZWJhc2UvZmlyZWJhc2UnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vcGFnZXMvbG9naW4nXG5jb25zdCBBdXRoY29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pXG5leHBvcnQgY29uc3QgQXV0aCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhjaGlsZHJlbik7XG4gICAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbbG9hZGluZywgc2V0bG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcbiAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgc2V0TG9naW4odXNlci51aWQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRMb2dpbigoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHJldHVyblZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0bG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcbiAgICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IFVzZXJTaWduT3V0ID0gKCkgPT4ge1xuICAgICAgICBzaWduT3V0KGF1dGgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKCFsb2FkaW5nKSByZXR1cm4gPExvYWRpbmdzY3JlZW4gLz5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXV0aGNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbG9hZGluZywgbG9naW4sIFVzZXJTaWduT3V0IH19PlxuICAgICAgICAgICAge2xvYWRpbmcgJiYgPExvYWRpbmdzY3JlZW4gLz59XG4gICAgICAgICAgICB7IWxvYWRpbmcgJiYgIXVzZXIgJiYgPExvZ2luIC8+fVxuICAgICAgICAgICAgeyFsb2FkaW5nICYmIHVzZXIgJiYgY2hpbGRyZW59XG4gICAgICAgIDwvQXV0aGNvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB1c2VDb250ZXh0KEF1dGhjb250ZXh0KSJdLCJuYW1lcyI6WyJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJzaWduT3V0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsIkxvYWRpbmdzY3JlZW4iLCJ1c2VSb3V0ZXIiLCJhdXRoIiwiTG9naW4iLCJBdXRoY29udGV4dCIsIkF1dGgiLCJjaGlsZHJlbiIsImxvZ2luIiwic2V0TG9naW4iLCJsb2FkaW5nIiwic2V0bG9hZGluZyIsInJvdXRlciIsInVuc3Vic2NyaWJlIiwidXNlciIsInVpZCIsInJldHVyblZhbHVlIiwidW5kZWZpbmVkIiwiVXNlclNpZ25PdXQiLCJ0aGVuIiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInVzZUF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Authprovider.js\n");

/***/ })

});