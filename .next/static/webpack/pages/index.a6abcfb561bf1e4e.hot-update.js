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

/***/ "./src/components/styles/StyledSobre.js":
/*!**********************************************!*\
  !*** ./src/components/styles/StyledSobre.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ndisplay: flex;\\nflex-direction: column;\\nrow-gap: 15px;\\n.container-sobre {\\n    width: 1002px;\\n    height: 427px;\\n    display: flex;\\n    flex-direction: row;\\n    column-gap: 40px;\\n    align-items: center;\\n    justify-content: center;\\n}\\n.container-formacao {\\n    width: 664px;\\n    height: 300.3px;\\n}\\n.container-img-sobre figure{\\n    max-width: 340px;\\n}\\n.container-img-sobre figure img{\\n    width: 100%;\\n    animation: animacao 2s linear infinite;\\n}\\n.container-text-sobre{\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 30px;\\n    text-align: justify;\\n}\\n.container-text-sobre p{\\n    width: 500px;\\n    line-height: 23px;\\n}\\n.container-text-sobre h1{\\n    border-left: 6px solid #9C354A;\\n    padding-left: 16px;\\n    height: 40px;\\n    display: flex;\\n    align-items: center;\\n    text-transform: uppercase;\\n    font-size:25px;\\n}\\n.objetivo{\\n    color: #9C354A;\\n}\\n\\n.container-formacao{\\n    display: flex;\\n    flex-direction: row;\\n    column-gap: 20px;\\n}\\n.formacao{\\n    display: flex;\\n    flex-direction: column;\\n    margin-top: 40px;\\n    padding-left: 40px;\\n    height: 100%;\\n    row-gap: 10px;\\n    \\n}\\n.formacao ul, .cursos ul{\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 10px;\\n    color:#9C354A\\n}\\n.cursos{\\n    border-left: 2px solid #312F34;\\n    padding-left: 40px;\\n    height: 100%;\\n    display: flex;\\n    row-gap: 10px;\\n    flex-direction: column;\\n    justify-content: center;\\n}\\n.formacao p, .cursos p{\\n    color:\",\n        \";\\n    font-size: 14px;\\n    margin-left: 15px;\\n}\\n.atual{\\n    color:$;\\n}\\n\\n@keyframes animacao{\\n    0%, 100%{\\n        transform: translateY(0px);\\n    }\\n    50%{\\n        transform: translateY(-20px);\\n    }\\n}\\n@media(max-width:1325px){\\n        display: none;\\n}\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nconst StyledSobre = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section.withConfig({\n    displayName: \"StyledSobre\",\n    componentId: \"sc-2151b775-0\"\n})(_templateObject(), (param)=>{\n    let { theme  } = param;\n    return theme.fontColor;\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (StyledSobre);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvU3R5bGVkU29icmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7Ozs7Ozs7O0FBQXVDO0FBRXZDLE1BQU1DLGNBQWNELDRFQUFjOzs7c0JBNkV0QixTQUFhRztRQUFaLEVBQUNBLE1BQUssRUFBQztXQUFLQSxNQUFNQyxTQUFTO0FBQUQ7QUFxQnZDLCtEQUFlSCxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9TdHlsZWRTb2JyZS5qcz81YTU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IFN0eWxlZFNvYnJlID0gc3R5bGVkLnNlY3Rpb25gXG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbnJvdy1nYXA6IDE1cHg7XG4uY29udGFpbmVyLXNvYnJlIHtcbiAgICB3aWR0aDogMTAwMnB4O1xuICAgIGhlaWdodDogNDI3cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGNvbHVtbi1nYXA6IDQwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250YWluZXItZm9ybWFjYW8ge1xuICAgIHdpZHRoOiA2NjRweDtcbiAgICBoZWlnaHQ6IDMwMC4zcHg7XG59XG4uY29udGFpbmVyLWltZy1zb2JyZSBmaWd1cmV7XG4gICAgbWF4LXdpZHRoOiAzNDBweDtcbn1cbi5jb250YWluZXItaW1nLXNvYnJlIGZpZ3VyZSBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYW5pbWF0aW9uOiBhbmltYWNhbyAycyBsaW5lYXIgaW5maW5pdGU7XG59XG4uY29udGFpbmVyLXRleHQtc29icmV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHJvdy1nYXA6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5jb250YWluZXItdGV4dC1zb2JyZSBwe1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBsaW5lLWhlaWdodDogMjNweDtcbn1cbi5jb250YWluZXItdGV4dC1zb2JyZSBoMXtcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkICM5QzM1NEE7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6MjVweDtcbn1cbi5vYmpldGl2b3tcbiAgICBjb2xvcjogIzlDMzU0QTtcbn1cblxuLmNvbnRhaW5lci1mb3JtYWNhb3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgY29sdW1uLWdhcDogMjBweDtcbn1cbi5mb3JtYWNhb3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHJvdy1nYXA6IDEwcHg7XG4gICAgXG59XG4uZm9ybWFjYW8gdWwsIC5jdXJzb3MgdWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHJvdy1nYXA6IDEwcHg7XG4gICAgY29sb3I6IzlDMzU0QVxufVxuLmN1cnNvc3tcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMzMTJGMzQ7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHJvdy1nYXA6IDEwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mb3JtYWNhbyBwLCAuY3Vyc29zIHB7XG4gICAgY29sb3I6JHsoe3RoZW1lfSkgPT4gdGhlbWUuZm9udENvbG9yfTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4uYXR1YWx7XG4gICAgY29sb3I6JDtcbn1cblxuQGtleWZyYW1lcyBhbmltYWNhb3tcbiAgICAwJSwgMTAwJXtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgfVxuICAgIDUwJXtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICB9XG59XG5AbWVkaWEobWF4LXdpZHRoOjEzMjVweCl7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG59XG5gXG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZFNvYnJlIl0sIm5hbWVzIjpbInN0eWxlZCIsIlN0eWxlZFNvYnJlIiwic2VjdGlvbiIsInRoZW1lIiwiZm9udENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/styles/StyledSobre.js\n"));

/***/ })

});