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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_components_CSSReset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/CSSReset */ \"./src/components/CSSReset.js\");\n/* harmony import */ var _src_components_views_ColorMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/views/ColorMode */ \"./src/components/views/ColorMode.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst theme = {\n    dark: {\n        backgroundBase: \"#111018\",\n        fontColor: \"white\",\n        backgroundContainer: \"#111018\",\n        colorBorder: \"#312F34\",\n        backCargo: \"#312F34\"\n    },\n    light: {\n        backgroundBase: \"rgba(0 ,0 ,0 ,0.1)\",\n        fontColor: \"black\",\n        backgroundContainer: \"white\",\n        colorBorder: \"black\",\n        backCargo: \"black\"\n    }\n};\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const contexto = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_src_components_views_ColorMode__WEBPACK_IMPORTED_MODULE_3__.ColorModeContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_views_ColorMode__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n            theme: theme[contexto.mode],\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_CSSReset__WEBPACK_IMPORTED_MODULE_2__.CSSReset, {}, void 0, false, {\n                    fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_s(MyApp, \"ZR0oSHYnh86JaJQkXCiE4u/O/jw=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQXlCO0FBQ3lCO0FBQ0k7QUFDa0M7QUFFeEYsTUFBTUssUUFBUTtJQUNWQyxNQUFLO1FBQ0RDLGdCQUFnQjtRQUNoQkMsV0FBWTtRQUNaQyxxQkFBcUI7UUFDckJDLGFBQWE7UUFDYkMsV0FBVztJQUNmO0lBQ0FDLE9BQU07UUFDRkwsZ0JBQWdCO1FBQ2hCQyxXQUFXO1FBQ1hDLHFCQUFxQjtRQUNyQkMsYUFBYTtRQUNiQyxXQUFXO0lBQ2Y7QUFFSjtBQUVBLFNBQVNFLE1BQU0sS0FBdUIsRUFBQztRQUF4QixFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBQyxHQUF2Qjs7SUFDWCxNQUFNQyxXQUFXaEIsdURBQWdCLENBQUNJLDZFQUFnQkE7SUFDbEQscUJBQ0ksOERBQUNELHVFQUFpQkE7a0JBQ2QsNEVBQUNGLDREQUFhQTtZQUFDSSxPQUFPQSxLQUFLLENBQUNXLFNBQVNFLElBQUksQ0FBQzs7OEJBQ3RDLDhEQUFDaEIsOERBQVFBOzs7Ozs4QkFDVCw4REFBQ1k7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEM7R0FYU0Y7S0FBQUE7QUFhVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBDU1NSZXNldCB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9DU1NSZXNldFwiO1xuaW1wb3J0IENvbG9yTW9kZVByb3ZpZGVyLCB7IENvbG9yTW9kZUNvbnRleHQgfSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvdmlld3MvQ29sb3JNb2RlXCI7XG5cbmNvbnN0IHRoZW1lID0ge1xuICAgIGRhcms6e1xuICAgICAgICBiYWNrZ3JvdW5kQmFzZTogJyMxMTEwMTgnLFxuICAgICAgICBmb250Q29sb3IgOiAnd2hpdGUnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29udGFpbmVyOiAnIzExMTAxOCcsXG4gICAgICAgIGNvbG9yQm9yZGVyOiAnIzMxMkYzNCcsXG4gICAgICAgIGJhY2tDYXJnbzogJyMzMTJGMzQnXG4gICAgfSxcbiAgICBsaWdodDp7XG4gICAgICAgIGJhY2tncm91bmRCYXNlOiAncmdiYSgwICwwICwwICwwLjEpJyxcbiAgICAgICAgZm9udENvbG9yOiAnYmxhY2snLFxuICAgICAgICBiYWNrZ3JvdW5kQ29udGFpbmVyOiAnd2hpdGUnLFxuICAgICAgICBjb2xvckJvcmRlcjogJ2JsYWNrJyxcbiAgICAgICAgYmFja0NhcmdvOiAnYmxhY2snXG4gICAgfVxuXG59O1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzfSl7XG4gICAgY29uc3QgY29udGV4dG8gPSBSZWFjdC51c2VDb250ZXh0KENvbG9yTW9kZUNvbnRleHQpICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29sb3JNb2RlUHJvdmlkZXI+XG4gICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWVbY29udGV4dG8ubW9kZV19PlxuICAgICAgICAgICAgICAgIDxDU1NSZXNldC8+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+XG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgIDwvQ29sb3JNb2RlUHJvdmlkZXI+XG4gICAgXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiUmVhY3QiLCJUaGVtZVByb3ZpZGVyIiwiQ1NTUmVzZXQiLCJDb2xvck1vZGVQcm92aWRlciIsIkNvbG9yTW9kZUNvbnRleHQiLCJ0aGVtZSIsImRhcmsiLCJiYWNrZ3JvdW5kQmFzZSIsImZvbnRDb2xvciIsImJhY2tncm91bmRDb250YWluZXIiLCJjb2xvckJvcmRlciIsImJhY2tDYXJnbyIsImxpZ2h0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjb250ZXh0byIsInVzZUNvbnRleHQiLCJtb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});