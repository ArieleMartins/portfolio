"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var _src_components_views_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/views/Main */ \"./src/components/views/Main.js\");\n/* harmony import */ var _src_components_CSSReset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/CSSReset */ \"./src/components/CSSReset.js\");\n/* harmony import */ var _src_components_views_Projetos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/views/Projetos */ \"./src/components/views/Projetos.js\");\n\n\n\n\n\n\nconst StyleContainer = sty;\nfunction HomePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_CSSReset__WEBPACK_IMPORTED_MODULE_3__.CSSReset, {}, void 0, false, {\n                fileName: \"/home/tilinux/portfolio/pages/index.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-flex-around\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_views_Main__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        dados: _config_json__WEBPACK_IMPORTED_MODULE_1__\n                    }, void 0, false, {\n                        fileName: \"/home/tilinux/portfolio/pages/index.js\",\n                        lineNumber: 14,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_views_Projetos__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        projetos: _config_json__WEBPACK_IMPORTED_MODULE_1__.projetos\n                    }, void 0, false, {\n                        fileName: \"/home/tilinux/portfolio/pages/index.js\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/tilinux/portfolio/pages/index.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBbUM7QUFDRztBQUNTO0FBQ087QUFDRTtBQUV4RCxNQUFNSyxpQkFBaUJDO0FBRXZCLFNBQVNDLFdBQVU7SUFDZixxQkFDSTs7MEJBQ0ksOERBQUNKLDhEQUFRQTs7Ozs7MEJBQ1QsOERBQUNLO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ1Asa0VBQUlBO3dCQUFDUSxPQUFPVix5Q0FBTUE7Ozs7OztrQ0FDbkIsOERBQUNJLHNFQUFRQTt3QkFBQ08sVUFBVVgsa0RBQWU7Ozs7Ozs7Ozs7Ozs7O0FBS25EO0tBWFNPO0FBYVQsK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25maWcuanNvblwiXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvdmlld3MvTWFpblwiXG5pbXBvcnQgeyBDU1NSZXNldCB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9DU1NSZXNldFwiO1xuaW1wb3J0IFByb2pldG9zIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy92aWV3cy9Qcm9qZXRvc1wiO1xuXG5jb25zdCBTdHlsZUNvbnRhaW5lciA9IHN0eVxuXG5mdW5jdGlvbiBIb21lUGFnZSgpe1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Q1NTUmVzZXQvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmxleC1hcm91bmRcIj5cbiAgICAgICAgICAgICAgICA8TWFpbiBkYWRvcz17Y29uZmlnfS8+XG4gICAgICAgICAgICAgICAgPFByb2pldG9zIHByb2pldG9zPXtjb25maWcucHJvamV0b3N9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICAgXG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcblxuXG5cblxuXG4iXSwibmFtZXMiOlsiY29uZmlnIiwic3R5bGVkIiwiTWFpbiIsIkNTU1Jlc2V0IiwiUHJvamV0b3MiLCJTdHlsZUNvbnRhaW5lciIsInN0eSIsIkhvbWVQYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGFkb3MiLCJwcm9qZXRvcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});