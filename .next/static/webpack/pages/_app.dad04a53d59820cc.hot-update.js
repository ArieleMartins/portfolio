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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_components_CSSReset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/CSSReset */ \"./src/components/CSSReset.js\");\n/* harmony import */ var _src_components_views_ColorMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/views/ColorMode */ \"./src/components/views/ColorMode.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst theme = {\n    dark: {\n        backgroundBase: \"#111018\",\n        fontColor: \"white\",\n        backgroundContainer: \"#111018\",\n        colorBorder: \"#312F34\",\n        backCargo: \"#312F34\",\n        backgroundTheme: \"white\",\n        colorBallTheme: \"#333333\",\n        cursoFontColor: \"#FFDF6C\",\n        colorBarraProgress: \"#2b2a33\",\n        mediaFontColor: \"white\",\n        mediaFontColorActive: \"white\",\n        mediaBackgroundColorActive: \"#111018\",\n        mediaBackgroundColor: \"#474747\",\n        mediaColorBorder: \"#111018\"\n    },\n    light: {\n        backgroundBase: \"rgba(0 ,0 ,0 ,0.1)\",\n        fontColor: \"black\",\n        backgroundContainer: \"white\",\n        colorBorder: \"black\",\n        backCargo: \"black\",\n        backgroundTheme: \"#333333\",\n        colorBallTheme: \"white\",\n        cursoFontColor: \"#8b71d1\",\n        colorBarraProgress: \"#5f5f5f\",\n        mediaFontColor: \"white\",\n        mediaFontColorActive: \"black\",\n        mediaBackgroundColorActive: \"white\",\n        mediaBackgroundColor: \"#474747\",\n        mediaColorBorder: \"white\"\n    }\n};\nfunction ProviderWrapper(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_views_ColorMode__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        initialMode: \"dark\",\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, this);\n}\n_c = ProviderWrapper;\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    var contexto = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_src_components_views_ColorMode__WEBPACK_IMPORTED_MODULE_3__.ColorModeContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n        theme: theme[contexto.mode],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_CSSReset__WEBPACK_IMPORTED_MODULE_2__.CSSReset, {}, void 0, false, {\n                fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n                lineNumber: 55,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n                lineNumber: 56,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n        lineNumber: 54,\n        columnNumber: 13\n    }, this);\n}\n_s(MyApp, \"ZR0oSHYnh86JaJQkXCiE4u/O/jw=\");\n_c1 = MyApp;\nfunction _App(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProviderWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyApp, {\n            ...props\n        }, void 0, false, {\n            fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n            lineNumber: 64,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/tilinux/portfolio/pages/_app.js\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, this);\n}\n{}var _c, _c1;\n$RefreshReg$(_c, \"ProviderWrapper\");\n$RefreshReg$(_c1, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXlCO0FBQ3lCO0FBQ0k7QUFDa0M7QUFFeEYsTUFBTUssUUFBUTtJQUNWQyxNQUFLO1FBQ0RDLGdCQUFnQjtRQUNoQkMsV0FBWTtRQUNaQyxxQkFBcUI7UUFDckJDLGFBQWE7UUFDYkMsV0FBVztRQUNYQyxpQkFBaUI7UUFDakJDLGdCQUFlO1FBQ2ZDLGdCQUFnQjtRQUNoQkMsb0JBQW9CO1FBQ3BCQyxnQkFBZTtRQUNmQyxzQkFBc0I7UUFDdEJDLDRCQUE0QjtRQUM1QkMsc0JBQXNCO1FBQ3RCQyxrQkFBa0I7SUFDdEI7SUFDQUMsT0FBTTtRQUNGZCxnQkFBZ0I7UUFDaEJDLFdBQVc7UUFDWEMscUJBQXFCO1FBQ3JCQyxhQUFhO1FBQ2JDLFdBQVc7UUFDWEMsaUJBQWlCO1FBQ2pCQyxnQkFBZ0I7UUFDaEJDLGdCQUFnQjtRQUNoQkMsb0JBQW9CO1FBQ3BCQyxnQkFBZTtRQUNmQyxzQkFBc0I7UUFDdEJDLDRCQUE0QjtRQUM1QkMsc0JBQXNCO1FBQ3RCQyxrQkFBa0I7SUFDdEI7QUFFSjtBQUVBLFNBQVNFLGdCQUFnQkMsS0FBSyxFQUFDO0lBQzNCLHFCQUNJLDhEQUFDcEIsdUVBQWlCQTtRQUFDcUIsYUFBYTtrQkFDM0JELE1BQU1FLFFBQVE7Ozs7OztBQUczQjtLQU5TSDtBQVNULFNBQVNJLE1BQU0sS0FBdUIsRUFBQztRQUF4QixFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBQyxHQUF2Qjs7SUFDWCxJQUFJQyxXQUFXN0IsdURBQWdCLENBQUNJLDZFQUFnQkE7SUFDaEQscUJBQ1EsOERBQUNILDREQUFhQTtRQUFDSSxPQUFPQSxLQUFLLENBQUN3QixTQUFTRSxJQUFJLENBQUM7OzBCQUN0Qyw4REFBQzdCLDhEQUFRQTs7Ozs7MEJBQ1QsOERBQUN5QjtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFHeEM7R0FSU0Y7TUFBQUE7QUFVTSxTQUFTTSxLQUFLVCxLQUFLLEVBQUM7SUFDL0IscUJBQ0ksOERBQUNEO2tCQUNHLDRFQUFDSTtZQUFPLEdBQUdILEtBQUs7Ozs7Ozs7Ozs7O0FBRzVCLENBQUM7QUFDRCxDQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IENTU1Jlc2V0IH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0NTU1Jlc2V0XCI7XG5pbXBvcnQgQ29sb3JNb2RlUHJvdmlkZXIsIHsgQ29sb3JNb2RlQ29udGV4dCB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy92aWV3cy9Db2xvck1vZGVcIjtcblxuY29uc3QgdGhlbWUgPSB7XG4gICAgZGFyazp7XG4gICAgICAgIGJhY2tncm91bmRCYXNlOiAnIzExMTAxOCcsXG4gICAgICAgIGZvbnRDb2xvciA6ICd3aGl0ZScsXG4gICAgICAgIGJhY2tncm91bmRDb250YWluZXI6ICcjMTExMDE4JyxcbiAgICAgICAgY29sb3JCb3JkZXI6ICcjMzEyRjM0JyxcbiAgICAgICAgYmFja0NhcmdvOiAnIzMxMkYzNCcsXG4gICAgICAgIGJhY2tncm91bmRUaGVtZTogXCJ3aGl0ZVwiLFxuICAgICAgICBjb2xvckJhbGxUaGVtZTpcIiMzMzMzMzNcIixcbiAgICAgICAgY3Vyc29Gb250Q29sb3I6ICcjRkZERjZDJyxcbiAgICAgICAgY29sb3JCYXJyYVByb2dyZXNzOiAnIzJiMmEzMycsXG4gICAgICAgIG1lZGlhRm9udENvbG9yOid3aGl0ZScsXG4gICAgICAgIG1lZGlhRm9udENvbG9yQWN0aXZlOiAnd2hpdGUnLFxuICAgICAgICBtZWRpYUJhY2tncm91bmRDb2xvckFjdGl2ZTogJyMxMTEwMTgnLFxuICAgICAgICBtZWRpYUJhY2tncm91bmRDb2xvcjogJyM0NzQ3NDcnLFxuICAgICAgICBtZWRpYUNvbG9yQm9yZGVyOiAnIzExMTAxOCdcbiAgICB9LFxuICAgIGxpZ2h0OntcbiAgICAgICAgYmFja2dyb3VuZEJhc2U6ICdyZ2JhKDAgLDAgLDAgLDAuMSknLFxuICAgICAgICBmb250Q29sb3I6ICdibGFjaycsXG4gICAgICAgIGJhY2tncm91bmRDb250YWluZXI6ICd3aGl0ZScsXG4gICAgICAgIGNvbG9yQm9yZGVyOiAnYmxhY2snLFxuICAgICAgICBiYWNrQ2FyZ286ICdibGFjaycsXG4gICAgICAgIGJhY2tncm91bmRUaGVtZTogJyMzMzMzMzMnLFxuICAgICAgICBjb2xvckJhbGxUaGVtZTogJ3doaXRlJyxcbiAgICAgICAgY3Vyc29Gb250Q29sb3I6ICcjOGI3MWQxJyxcbiAgICAgICAgY29sb3JCYXJyYVByb2dyZXNzOiAnIzVmNWY1ZicsXG4gICAgICAgIG1lZGlhRm9udENvbG9yOid3aGl0ZScsXG4gICAgICAgIG1lZGlhRm9udENvbG9yQWN0aXZlOiAnYmxhY2snLFxuICAgICAgICBtZWRpYUJhY2tncm91bmRDb2xvckFjdGl2ZTogJ3doaXRlJyxcbiAgICAgICAgbWVkaWFCYWNrZ3JvdW5kQ29sb3I6ICcjNDc0NzQ3JyxcbiAgICAgICAgbWVkaWFDb2xvckJvcmRlcjogJ3doaXRlJ1xuICAgIH1cblxufTtcblxuZnVuY3Rpb24gUHJvdmlkZXJXcmFwcGVyKHByb3BzKXtcbiAgICByZXR1cm4oXG4gICAgICAgIDxDb2xvck1vZGVQcm92aWRlciBpbml0aWFsTW9kZT17XCJkYXJrXCJ9PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0NvbG9yTW9kZVByb3ZpZGVyPlxuICAgIClcbn1cblxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzfSl7XG4gICAgdmFyIGNvbnRleHRvID0gUmVhY3QudXNlQ29udGV4dChDb2xvck1vZGVDb250ZXh0KTtcbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lW2NvbnRleHRvLm1vZGVdfT5cbiAgICAgICAgICAgICAgICA8Q1NTUmVzZXQvPlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxuICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX0FwcChwcm9wcyl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8UHJvdmlkZXJXcmFwcGVyID5cbiAgICAgICAgICAgIDxNeUFwcCB7Li4ucHJvcHN9IC8+XG4gICAgICAgIDwvUHJvdmlkZXJXcmFwcGVyPlxuICAgIClcbn07XG57XG4gICAgXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiVGhlbWVQcm92aWRlciIsIkNTU1Jlc2V0IiwiQ29sb3JNb2RlUHJvdmlkZXIiLCJDb2xvck1vZGVDb250ZXh0IiwidGhlbWUiLCJkYXJrIiwiYmFja2dyb3VuZEJhc2UiLCJmb250Q29sb3IiLCJiYWNrZ3JvdW5kQ29udGFpbmVyIiwiY29sb3JCb3JkZXIiLCJiYWNrQ2FyZ28iLCJiYWNrZ3JvdW5kVGhlbWUiLCJjb2xvckJhbGxUaGVtZSIsImN1cnNvRm9udENvbG9yIiwiY29sb3JCYXJyYVByb2dyZXNzIiwibWVkaWFGb250Q29sb3IiLCJtZWRpYUZvbnRDb2xvckFjdGl2ZSIsIm1lZGlhQmFja2dyb3VuZENvbG9yQWN0aXZlIiwibWVkaWFCYWNrZ3JvdW5kQ29sb3IiLCJtZWRpYUNvbG9yQm9yZGVyIiwibGlnaHQiLCJQcm92aWRlcldyYXBwZXIiLCJwcm9wcyIsImluaXRpYWxNb2RlIiwiY2hpbGRyZW4iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvbnRleHRvIiwidXNlQ29udGV4dCIsIm1vZGUiLCJfQXBwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});