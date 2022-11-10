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

/***/ "./src/components/styles/StyleMain.js":
/*!********************************************!*\
  !*** ./src/components/styles/StyleMain.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nwidth: 341px;\\nheight: 996px;\\ndisplay: flex;\\nflex-direction: column;\\nbackground-color: \",\n        \";\\nborder: 2px solid #312F34;\\nborder-radius: 20px;\\n\\n.container-info-perfil{\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 15px;\\n}\\n\\n.container-perfil{\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 20px;\\n    align-items: center;\\n    justify-content: center;\\n    width: 100%;\\n    height: 340px;\\n    padding: 0px 20px;\\n}\\n\\n.container-perfil figure{\\n    max-width: 158px;\\n}\\n\\n.container-perfil figure img {\\n    width: 100%;\\n    border-radius: 50%;\\n}\\n.nome {\\n    font-size: 26px;\\n    color: #C18C92;\\n}\\n\\n.cargo {\\n    width: 289px;\\n    height: 37px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    padding: 20px;\\n    background: #312F34;\\n    border-radius: 20px;\\n    font-size: 13px;\\n    text-transform: uppercase;\\n}\\n.container-links{\\n    width: 100%;\\n    padding: 10px 20px;\\n    border-bottom:2px solid #312F34;\\n    border-top: 2px solid #312F34;\\n    font-size: 25px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    column-gap: 45px;\\n}\\n.container-links a{\\n    color: white;\\n    text-decoration: none;\\n}\\n.container-links a:hover{\\n    color: #C18C92;   \\n}\\n.container-location{\\n    display: flex;\\n    column-gap: 10px;\\n}\\n.container-skills{\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 20px;\\n    padding: 0px 20px;\\n}\\n.skill{\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    row-gap: 10px;\\n}\\n.barra{\\n    width: 100%;\\n    height: 9px;\\n    background-color: #2b2a33;\\n    border-radius: 10px;\\n}\\n.progresso{\\n    width: 0%;\\n    height: 9px;\\n    border-radius: 10px;\\n    \\n}\\n\\n.html, .css, .js, .git, .github, .php, .csharp, .python{\\n    background-color: #C18C92;\\n}\\n.html{\\n    animation: barraHtml ease-in-out 2s forwards;\\n}\\n.css{\\n    animation: barraCss ease-in-out 2s forwards;\\n}\\n.js{\\n    animation: barraJs ease-in-out 2s forwards;\\n}\\n.git{\\n    animation: barraGit ease-in-out 2s forwards;\\n}\\n.github{\\n    animation: barraGithub ease-in-out 2s forwards;\\n}\\n.php{\\n    animation: barraPhp ease-in-out 2s forwards;\\n}\\n.csharp{\\n    animation: barraCsharp ease-in-out 2s forwards;\\n}\\n.python{\\n    animation: barraPython ease-in-out 2s forwards;\\n}\\n\\n@keyframes barraHtml{\\n    from{\\n        width: 0%;\\n    }\\n    to{\\n        width: 80%;\\n    }\\n}\\n@keyframes barraCss{\\n    from{\\n        width: 0%;\\n    }\\n    to{\\n        width: 60%;\\n    }\\n}\\n@keyframes barraJs{\\n    from{\\n        width: 0%;\\n    }\\n    to{\\n        width: 40%;\\n    }\\n}\\n@keyframes barraGit{\\n    from{\\n        width: 0%;\\n    }\\n    to{\\n        width: 20%;\\n    }\\n}\\n@keyframes barraGithub{\\n    from{\\n        width: 0%;\\n    }\\n    to{\\n        width: 60%;\\n    }\\n}\\n@keyframes barraPhp{\\n    from{\\n        width: 0%;\\n    }\\n    to{\\n        width: 15%;\\n    }\\n}\\n@keyframes barraCsharp{\\n    from{\\n        width: 0%;\\n    }\\n    to{\\n        width: 25%;\\n    }\\n}\\n@keyframes barraPython{\\n    from{\\n        width: 0%;\\n    }\\n    to{\\n        width: 10%;\\n    }\\n}\\n.container-email{\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 10px;\\n    padding: 15px 20px 0px 20px;\\n    height: 30px;\\n    align-items: center;\\n    justify-content: center;\\n    border-top: 2px solid #312F34;\\n}\\n.email{\\n    display: flex;\\n    column-gap: 10px;\\n    align-items: center;\\n}\\n.container-desenvolvedores{\\n    padding: 0px 20px;\\n    height: 60px;\\n    display: flex;\\n    border-top: 2px solid #312F34;\\n    align-items: center;\\n    justify-content: center;\\n}\\n.container-desenvolvedores p{\\n    font-size: 14px;\\n}\\n\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nconst StyledMain = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].main.withConfig({\n    displayName: \"StyleMain__StyledMain\",\n    componentId: \"sc-2f6a04aa-0\"\n})(_templateObject(), {});\n/* harmony default export */ __webpack_exports__[\"default\"] = (StyledMain);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvU3R5bGVNYWluLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7Ozs7OztBQUFzQztBQUV0QyxNQUFNQyxhQUFhRCx5RUFBVzs7O3NCQUtULENBQUM7QUF1TnRCLCtEQUFlQyxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9TdHlsZU1haW4uanM/NDFhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5cbmNvbnN0IFN0eWxlZE1haW4gPSBzdHlsZWQubWFpbmBcbndpZHRoOiAzNDFweDtcbmhlaWdodDogOTk2cHg7XG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmJhY2tncm91bmQtY29sb3I6ICR7KHt9KX07XG5ib3JkZXI6IDJweCBzb2xpZCAjMzEyRjM0O1xuYm9yZGVyLXJhZGl1czogMjBweDtcblxuLmNvbnRhaW5lci1pbmZvLXBlcmZpbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcm93LWdhcDogMTVweDtcbn1cblxuLmNvbnRhaW5lci1wZXJmaWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHJvdy1nYXA6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDM0MHB4O1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4uY29udGFpbmVyLXBlcmZpbCBmaWd1cmV7XG4gICAgbWF4LXdpZHRoOiAxNThweDtcbn1cblxuLmNvbnRhaW5lci1wZXJmaWwgZmlndXJlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm5vbWUge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBjb2xvcjogI0MxOEM5Mjtcbn1cblxuLmNhcmdvIHtcbiAgICB3aWR0aDogMjg5cHg7XG4gICAgaGVpZ2h0OiAzN3B4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMzMTJGMzQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5jb250YWluZXItbGlua3N7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICMzMTJGMzQ7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMzMTJGMzQ7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2x1bW4tZ2FwOiA0NXB4O1xufVxuLmNvbnRhaW5lci1saW5rcyBhe1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY29udGFpbmVyLWxpbmtzIGE6aG92ZXJ7XG4gICAgY29sb3I6ICNDMThDOTI7ICAgXG59XG4uY29udGFpbmVyLWxvY2F0aW9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sdW1uLWdhcDogMTBweDtcbn1cbi5jb250YWluZXItc2tpbGxze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICByb3ctZ2FwOiAyMHB4O1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuLnNraWxse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHJvdy1nYXA6IDEwcHg7XG59XG4uYmFycmF7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmEzMztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnByb2dyZXNzb3tcbiAgICB3aWR0aDogMCU7XG4gICAgaGVpZ2h0OiA5cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBcbn1cblxuLmh0bWwsIC5jc3MsIC5qcywgLmdpdCwgLmdpdGh1YiwgLnBocCwgLmNzaGFycCwgLnB5dGhvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzE4QzkyO1xufVxuLmh0bWx7XG4gICAgYW5pbWF0aW9uOiBiYXJyYUh0bWwgZWFzZS1pbi1vdXQgMnMgZm9yd2FyZHM7XG59XG4uY3Nze1xuICAgIGFuaW1hdGlvbjogYmFycmFDc3MgZWFzZS1pbi1vdXQgMnMgZm9yd2FyZHM7XG59XG4uanN7XG4gICAgYW5pbWF0aW9uOiBiYXJyYUpzIGVhc2UtaW4tb3V0IDJzIGZvcndhcmRzO1xufVxuLmdpdHtcbiAgICBhbmltYXRpb246IGJhcnJhR2l0IGVhc2UtaW4tb3V0IDJzIGZvcndhcmRzO1xufVxuLmdpdGh1YntcbiAgICBhbmltYXRpb246IGJhcnJhR2l0aHViIGVhc2UtaW4tb3V0IDJzIGZvcndhcmRzO1xufVxuLnBocHtcbiAgICBhbmltYXRpb246IGJhcnJhUGhwIGVhc2UtaW4tb3V0IDJzIGZvcndhcmRzO1xufVxuLmNzaGFycHtcbiAgICBhbmltYXRpb246IGJhcnJhQ3NoYXJwIGVhc2UtaW4tb3V0IDJzIGZvcndhcmRzO1xufVxuLnB5dGhvbntcbiAgICBhbmltYXRpb246IGJhcnJhUHl0aG9uIGVhc2UtaW4tb3V0IDJzIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGJhcnJhSHRtbHtcbiAgICBmcm9te1xuICAgICAgICB3aWR0aDogMCU7XG4gICAgfVxuICAgIHRve1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cbn1cbkBrZXlmcmFtZXMgYmFycmFDc3N7XG4gICAgZnJvbXtcbiAgICAgICAgd2lkdGg6IDAlO1xuICAgIH1cbiAgICB0b3tcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICB9XG59XG5Aa2V5ZnJhbWVzIGJhcnJhSnN7XG4gICAgZnJvbXtcbiAgICAgICAgd2lkdGg6IDAlO1xuICAgIH1cbiAgICB0b3tcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICB9XG59XG5Aa2V5ZnJhbWVzIGJhcnJhR2l0e1xuICAgIGZyb217XG4gICAgICAgIHdpZHRoOiAwJTtcbiAgICB9XG4gICAgdG97XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgfVxufVxuQGtleWZyYW1lcyBiYXJyYUdpdGh1YntcbiAgICBmcm9te1xuICAgICAgICB3aWR0aDogMCU7XG4gICAgfVxuICAgIHRve1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgIH1cbn1cbkBrZXlmcmFtZXMgYmFycmFQaHB7XG4gICAgZnJvbXtcbiAgICAgICAgd2lkdGg6IDAlO1xuICAgIH1cbiAgICB0b3tcbiAgICAgICAgd2lkdGg6IDE1JTtcbiAgICB9XG59XG5Aa2V5ZnJhbWVzIGJhcnJhQ3NoYXJwe1xuICAgIGZyb217XG4gICAgICAgIHdpZHRoOiAwJTtcbiAgICB9XG4gICAgdG97XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgfVxufVxuQGtleWZyYW1lcyBiYXJyYVB5dGhvbntcbiAgICBmcm9te1xuICAgICAgICB3aWR0aDogMCU7XG4gICAgfVxuICAgIHRve1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgIH1cbn1cbi5jb250YWluZXItZW1haWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHJvdy1nYXA6IDEwcHg7XG4gICAgcGFkZGluZzogMTVweCAyMHB4IDBweCAyMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMzEyRjM0O1xufVxuLmVtYWlse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sdW1uLWdhcDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhaW5lci1kZXNlbnZvbHZlZG9yZXN7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMzMTJGMzQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250YWluZXItZGVzZW52b2x2ZWRvcmVzIHB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRNYWluIl0sIm5hbWVzIjpbInN0eWxlZCIsIlN0eWxlZE1haW4iLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/styles/StyleMain.js\n"));

/***/ })

});