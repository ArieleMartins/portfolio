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

/***/ "./src/components/styles/StyledHeader.js":
/*!***********************************************!*\
  !*** ./src/components/styles/StyledHeader.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nwidth: 1002px;\\nheight: 56px;\\n\\n.principal{\\n    display: none;\\n}\\n\\n.menu ul {\\n    display: flex;\\n    justify-content: space-around;\\n    width: 100%;\\n    height: 56px;\\n    align-items: center;\\n    list-style: none;\\n    \\n}\\n.menu ul li a{\\n    color:\",\n        \";\\n    text-decoration: none;\\n    cursor: pointer;\\n    \\n}\\n.menu ul li a:hover{\\n    color: #C18C92;\\n}\\n\\n@media(max-width:1325px){\\n    width: 100%;\\n    border-radius: 0 !important;\\n    background-color:#353535 !important;\\n    border:none !important;\\n    font-size: 13px;\\n    padding: 0;\\n\\n    .principal{\\n        display: flex;\\n        background-color: #111018;\\n    }\\n\\n    .menu{\\n        width: 100vw;\\n    }\\n    .menu ul {\\n        align-items: flex-end;\\n        justify-content: space-between;\\n        width: 100vw;\\n    }\\n    .a-sobre, .a-projetos{\\n        background-color: #474747 !important;\\n    }\\n    .menu ul li{\\n        height: 46px;\\n        padding: 10px 25px;\\n        display: flex;\\n        align-items: center;\\n        border-top-left-radius: 20px;\\n        border-top-right-radius: 20px;\\n    } \\n    .menu ul li a:not(.active){\\n        color:\",\n        \";\\n    \\n    }\\n    .menu ul li a.active{\\n        color:\",\n        \";\\n    \\n    }\\n}\\n\\n\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nconst StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header.withConfig({\n    displayName: \"StyledHeader\",\n    componentId: \"sc-b3a7083c-0\"\n})(_templateObject(), (theme)=>theme.fontColor, (theme)=>theme.mediaFontColor, (theme)=>theme.mediaFontColor);\n/* harmony default export */ __webpack_exports__[\"default\"] = (StyledHeader);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvU3R5bGVkSGVhZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7Ozs7Ozs7O0FBQXVDO0FBRXZDLE1BQU1DLGVBQWVELDJFQUFhOzs7c0JBa0J0QixDQUFDRyxRQUFVQSxNQUFNQyxTQUFTLEVBMEN0QixDQUFDRCxRQUFVQSxNQUFNRSxjQUFjLEVBSS9CLENBQUNGLFFBQVVBLE1BQU1FLGNBQWM7QUFRL0MsK0RBQWVKLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL1N0eWxlZEhlYWRlci5qcz84NDA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IFN0eWxlZEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG53aWR0aDogMTAwMnB4O1xuaGVpZ2h0OiA1NnB4O1xuXG4ucHJpbmNpcGFse1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tZW51IHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTZweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgXG59XG4ubWVudSB1bCBsaSBhe1xuICAgIGNvbG9yOiR7KHRoZW1lKSA9PiB0aGVtZS5mb250Q29sb3J9O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgXG59XG4ubWVudSB1bCBsaSBhOmhvdmVye1xuICAgIGNvbG9yOiAjQzE4QzkyO1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOjEzMjVweCl7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IzM1MzUzNSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICAucHJpbmNpcGFse1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMDE4O1xuICAgIH1cblxuICAgIC5tZW51e1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgfVxuICAgIC5tZW51IHVsIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICB9XG4gICAgLmEtc29icmUsIC5hLXByb2pldG9ze1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0NzQ3ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5tZW51IHVsIGxpe1xuICAgICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgfSBcbiAgICAubWVudSB1bCBsaSBhOm5vdCguYWN0aXZlKXtcbiAgICAgICAgY29sb3I6JHsodGhlbWUpID0+IHRoZW1lLm1lZGlhRm9udENvbG9yfTtcbiAgICBcbiAgICB9XG4gICAgLm1lbnUgdWwgbGkgYS5hY3RpdmV7XG4gICAgICAgIGNvbG9yOiR7KHRoZW1lKSA9PiB0aGVtZS5tZWRpYUZvbnRDb2xvcn07XG4gICAgXG4gICAgfVxufVxuXG5cbmBcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkSGVhZGVyIl0sIm5hbWVzIjpbInN0eWxlZCIsIlN0eWxlZEhlYWRlciIsImhlYWRlciIsInRoZW1lIiwiZm9udENvbG9yIiwibWVkaWFGb250Q29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/styles/StyledHeader.js\n"));

/***/ })

});