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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_components_CSSReset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/CSSReset */ \"./src/components/CSSReset.js\");\n/* harmony import */ var _src_components_views_ColorMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/views/ColorMode */ \"./src/components/views/ColorMode.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst theme = {\n    dark: {\n        backgroundBase: \"#111018\",\n        fontColor: \"white\",\n        backgroundContainer: \"#111018\",\n        colorBorder: \"#312F34\",\n        backCargo: \"#312F34\",\n        backgroundTheme: \"white\",\n        colorBallTheme: \"#333333\",\n        cursoFontColor: \"#FFDF6C\",\n        colorBarraProgress: \"#2b2a33\",\n        mediaFontColor: \"white\",\n        mediaFontColorActive: \"white\",\n        mediaBackgroundColorActive: \"#111018\",\n        mediaBackgroundColor: \"#474747\",\n        mediaColorBorder: \"#111018\"\n    },\n    light: {\n        backgroundBase: \"rgba(0 ,0 ,0 ,0.1)\",\n        fontColor: \"black\",\n        backgroundContainer: \"white\",\n        colorBorder: \"black\",\n        backCargo: \"black\",\n        backgroundTheme: \"#333333\",\n        colorBallTheme: \"white\",\n        cursoFontColor: \"#8b71d1\",\n        colorBarraProgress: \"#5f5f5f\",\n        mediaFontColor: \"white\",\n        mediaFontColorActive: \"black\",\n        mediaBackgroundColorActive: \"white\",\n        mediaBackgroundColor: \"#474747\",\n        mediaColorBorder: \"white\"\n    }\n};\nfunction ProviderWrapper(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_views_ColorMode__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        initialMode: \"dark\",\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, this);\n}\n_c = ProviderWrapper;\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    var contexto = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_src_components_views_ColorMode__WEBPACK_IMPORTED_MODULE_3__.ColorModeContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n        theme: theme[contexto.mode],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_CSSReset__WEBPACK_IMPORTED_MODULE_2__.CSSReset, {}, void 0, false, {\n                fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n                lineNumber: 55,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n                lineNumber: 56,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n        lineNumber: 54,\n        columnNumber: 13\n    }, this);\n}\n_s(MyApp, \"ZR0oSHYnh86JaJQkXCiE4u/O/jw=\");\n_c1 = MyApp;\nfunction _App(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProviderWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyApp, {\n            ...props\n        }, void 0, false, {\n            fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n            lineNumber: 64,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, this);\n}\nwindow.addEventListener(\"o\");\nvar _c, _c1;\n$RefreshReg$(_c, \"ProviderWrapper\");\n$RefreshReg$(_c1, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXlCO0FBQ3lCO0FBQ0k7QUFDa0M7QUFFeEYsTUFBTUssUUFBUTtJQUNWQyxNQUFLO1FBQ0RDLGdCQUFnQjtRQUNoQkMsV0FBWTtRQUNaQyxxQkFBcUI7UUFDckJDLGFBQWE7UUFDYkMsV0FBVztRQUNYQyxpQkFBaUI7UUFDakJDLGdCQUFlO1FBQ2ZDLGdCQUFnQjtRQUNoQkMsb0JBQW9CO1FBQ3BCQyxnQkFBZTtRQUNmQyxzQkFBc0I7UUFDdEJDLDRCQUE0QjtRQUM1QkMsc0JBQXNCO1FBQ3RCQyxrQkFBa0I7SUFDdEI7SUFDQUMsT0FBTTtRQUNGZCxnQkFBZ0I7UUFDaEJDLFdBQVc7UUFDWEMscUJBQXFCO1FBQ3JCQyxhQUFhO1FBQ2JDLFdBQVc7UUFDWEMsaUJBQWlCO1FBQ2pCQyxnQkFBZ0I7UUFDaEJDLGdCQUFnQjtRQUNoQkMsb0JBQW9CO1FBQ3BCQyxnQkFBZTtRQUNmQyxzQkFBc0I7UUFDdEJDLDRCQUE0QjtRQUM1QkMsc0JBQXNCO1FBQ3RCQyxrQkFBa0I7SUFDdEI7QUFFSjtBQUVBLFNBQVNFLGdCQUFnQkMsS0FBSyxFQUFDO0lBQzNCLHFCQUNJLDhEQUFDcEIsdUVBQWlCQTtRQUFDcUIsYUFBYTtrQkFDM0JELE1BQU1FLFFBQVE7Ozs7OztBQUczQjtLQU5TSDtBQVNULFNBQVNJLE1BQU0sS0FBdUIsRUFBQztRQUF4QixFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBQyxHQUF2Qjs7SUFDWCxJQUFJQyxXQUFXN0IsdURBQWdCLENBQUNJLDZFQUFnQkE7SUFDaEQscUJBQ1EsOERBQUNILDREQUFhQTtRQUFDSSxPQUFPQSxLQUFLLENBQUN3QixTQUFTRSxJQUFJLENBQUM7OzBCQUN0Qyw4REFBQzdCLDhEQUFRQTs7Ozs7MEJBQ1QsOERBQUN5QjtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFHeEM7R0FSU0Y7TUFBQUE7QUFVTSxTQUFTTSxLQUFLVCxLQUFLLEVBQUM7SUFDL0IscUJBQ0ksOERBQUNEO2tCQUNHLDRFQUFDSTtZQUFPLEdBQUdILEtBQUs7Ozs7Ozs7Ozs7O0FBRzVCLENBQUM7QUFFRFUsT0FBT0MsZ0JBQWdCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQ1NTUmVzZXQgfSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQ1NTUmVzZXRcIjtcbmltcG9ydCBDb2xvck1vZGVQcm92aWRlciwgeyBDb2xvck1vZGVDb250ZXh0IH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3ZpZXdzL0NvbG9yTW9kZVwiO1xuXG5jb25zdCB0aGVtZSA9IHtcbiAgICBkYXJrOntcbiAgICAgICAgYmFja2dyb3VuZEJhc2U6ICcjMTExMDE4JyxcbiAgICAgICAgZm9udENvbG9yIDogJ3doaXRlJyxcbiAgICAgICAgYmFja2dyb3VuZENvbnRhaW5lcjogJyMxMTEwMTgnLFxuICAgICAgICBjb2xvckJvcmRlcjogJyMzMTJGMzQnLFxuICAgICAgICBiYWNrQ2FyZ286ICcjMzEyRjM0JyxcbiAgICAgICAgYmFja2dyb3VuZFRoZW1lOiBcIndoaXRlXCIsXG4gICAgICAgIGNvbG9yQmFsbFRoZW1lOlwiIzMzMzMzM1wiLFxuICAgICAgICBjdXJzb0ZvbnRDb2xvcjogJyNGRkRGNkMnLFxuICAgICAgICBjb2xvckJhcnJhUHJvZ3Jlc3M6ICcjMmIyYTMzJyxcbiAgICAgICAgbWVkaWFGb250Q29sb3I6J3doaXRlJyxcbiAgICAgICAgbWVkaWFGb250Q29sb3JBY3RpdmU6ICd3aGl0ZScsXG4gICAgICAgIG1lZGlhQmFja2dyb3VuZENvbG9yQWN0aXZlOiAnIzExMTAxOCcsXG4gICAgICAgIG1lZGlhQmFja2dyb3VuZENvbG9yOiAnIzQ3NDc0NycsXG4gICAgICAgIG1lZGlhQ29sb3JCb3JkZXI6ICcjMTExMDE4J1xuICAgIH0sXG4gICAgbGlnaHQ6e1xuICAgICAgICBiYWNrZ3JvdW5kQmFzZTogJ3JnYmEoMCAsMCAsMCAsMC4xKScsXG4gICAgICAgIGZvbnRDb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgYmFja2dyb3VuZENvbnRhaW5lcjogJ3doaXRlJyxcbiAgICAgICAgY29sb3JCb3JkZXI6ICdibGFjaycsXG4gICAgICAgIGJhY2tDYXJnbzogJ2JsYWNrJyxcbiAgICAgICAgYmFja2dyb3VuZFRoZW1lOiAnIzMzMzMzMycsXG4gICAgICAgIGNvbG9yQmFsbFRoZW1lOiAnd2hpdGUnLFxuICAgICAgICBjdXJzb0ZvbnRDb2xvcjogJyM4YjcxZDEnLFxuICAgICAgICBjb2xvckJhcnJhUHJvZ3Jlc3M6ICcjNWY1ZjVmJyxcbiAgICAgICAgbWVkaWFGb250Q29sb3I6J3doaXRlJyxcbiAgICAgICAgbWVkaWFGb250Q29sb3JBY3RpdmU6ICdibGFjaycsXG4gICAgICAgIG1lZGlhQmFja2dyb3VuZENvbG9yQWN0aXZlOiAnd2hpdGUnLFxuICAgICAgICBtZWRpYUJhY2tncm91bmRDb2xvcjogJyM0NzQ3NDcnLFxuICAgICAgICBtZWRpYUNvbG9yQm9yZGVyOiAnd2hpdGUnXG4gICAgfVxuXG59O1xuXG5mdW5jdGlvbiBQcm92aWRlcldyYXBwZXIocHJvcHMpe1xuICAgIHJldHVybihcbiAgICAgICAgPENvbG9yTW9kZVByb3ZpZGVyIGluaXRpYWxNb2RlPXtcImRhcmtcIn0+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvQ29sb3JNb2RlUHJvdmlkZXI+XG4gICAgKVxufVxuXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHN9KXtcbiAgICB2YXIgY29udGV4dG8gPSBSZWFjdC51c2VDb250ZXh0KENvbG9yTW9kZUNvbnRleHQpO1xuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWVbY29udGV4dG8ubW9kZV19PlxuICAgICAgICAgICAgICAgIDxDU1NSZXNldC8+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+XG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfQXBwKHByb3BzKXtcbiAgICByZXR1cm4oXG4gICAgICAgIDxQcm92aWRlcldyYXBwZXIgPlxuICAgICAgICAgICAgPE15QXBwIHsuLi5wcm9wc30gLz5cbiAgICAgICAgPC9Qcm92aWRlcldyYXBwZXI+XG4gICAgKVxufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ28nKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlRoZW1lUHJvdmlkZXIiLCJDU1NSZXNldCIsIkNvbG9yTW9kZVByb3ZpZGVyIiwiQ29sb3JNb2RlQ29udGV4dCIsInRoZW1lIiwiZGFyayIsImJhY2tncm91bmRCYXNlIiwiZm9udENvbG9yIiwiYmFja2dyb3VuZENvbnRhaW5lciIsImNvbG9yQm9yZGVyIiwiYmFja0NhcmdvIiwiYmFja2dyb3VuZFRoZW1lIiwiY29sb3JCYWxsVGhlbWUiLCJjdXJzb0ZvbnRDb2xvciIsImNvbG9yQmFycmFQcm9ncmVzcyIsIm1lZGlhRm9udENvbG9yIiwibWVkaWFGb250Q29sb3JBY3RpdmUiLCJtZWRpYUJhY2tncm91bmRDb2xvckFjdGl2ZSIsIm1lZGlhQmFja2dyb3VuZENvbG9yIiwibWVkaWFDb2xvckJvcmRlciIsImxpZ2h0IiwiUHJvdmlkZXJXcmFwcGVyIiwicHJvcHMiLCJpbml0aWFsTW9kZSIsImNoaWxkcmVuIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjb250ZXh0byIsInVzZUNvbnRleHQiLCJtb2RlIiwiX0FwcCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});