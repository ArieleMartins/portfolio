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

/***/ "./src/components/CSSReset.js":
/*!************************************!*\
  !*** ./src/components/CSSReset.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CSSReset\": function() { return /* binding */ CSSReset; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans&display=swap');\\n  /* Reset */\\n  * {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n  }\\n  body {\\n    font-family: sans-serif;\\n    //background-color: #111018;\\n    background-color: \",\n        \";\\n    color: \",\n        \";\\n    transition: background 1s;\\n    font-family: 'Merriweather Sans', sans-serif;\\n  }\\n  /* NextJS */\\n  /* Globals */\\n  button,\\n  a {\\n    text-decoration: none;\\n    opacity: 1;\\n    transition: .3s;\\n    \\n  }\\n  .cabecalho, .container-sobre, .container-formacao, .container-desc-links{\\n    background-color: \",\n        \";\\n    border: 2px solid #312F34;\\n    border-radius: 20px;\\n    co\\n    \\n  } \\n\\n  @media(max-width:1325px){\\n    .container-formacao, .container-sobre{\\n        display: none;\\n    }\\n\\n    body{\\n        padding: 0;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nconst CSSReset = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)(_templateObject(), (param)=>{\n    let { theme  } = param;\n    return theme.backgroundBase;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.fontColor;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.backgroundContainer;\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DU1NSZXNldC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUUvQyxNQUFNQyxXQUFXRCxvRUFBaUJBLG9CQVdqQixTQUFlRTtRQUFkLEVBQUVBLE1BQUssRUFBRTtXQUFLQSxNQUFNQyxjQUFjO0FBQUQsR0FDN0MsU0FBZUQ7UUFBZCxFQUFFQSxNQUFLLEVBQUU7V0FBS0EsTUFBTUUsU0FBUztBQUFELEdBY2xCLFNBQWFGO1FBQVosRUFBQ0EsTUFBSyxFQUFDO1dBQUtBLE1BQU1HLG1CQUFtQjtBQUFELEdBZ0IzRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DU1NSZXNldC5qcz8wMmFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBDU1NSZXNldCA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWVycml3ZWF0aGVyK1NhbnMmZGlzcGxheT1zd2FwJyk7XG4gIC8qIFJlc2V0ICovXG4gICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMTExMDE4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZEJhc2V9O1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRDb2xvcn07XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxcztcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlciBTYW5zJywgc2Fucy1zZXJpZjtcbiAgfVxuICAvKiBOZXh0SlMgKi9cbiAgLyogR2xvYmFscyAqL1xuICBidXR0b24sXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IC4zcztcbiAgICBcbiAgfVxuICAuY2FiZWNhbGhvLCAuY29udGFpbmVyLXNvYnJlLCAuY29udGFpbmVyLWZvcm1hY2FvLCAuY29udGFpbmVyLWRlc2MtbGlua3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoe3RoZW1lfSkgPT4gdGhlbWUuYmFja2dyb3VuZENvbnRhaW5lcn07XG4gICAgYm9yZGVyOiAycHggc29saWQgIzMxMkYzNDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGNvXG4gICAgXG4gIH0gXG5cbiAgQG1lZGlhKG1heC13aWR0aDoxMzI1cHgpe1xuICAgIC5jb250YWluZXItZm9ybWFjYW8sIC5jb250YWluZXItc29icmV7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgYm9keXtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gIH1cbmA7Il0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIiwiQ1NTUmVzZXQiLCJ0aGVtZSIsImJhY2tncm91bmRCYXNlIiwiZm9udENvbG9yIiwiYmFja2dyb3VuZENvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CSSReset.js\n"));

/***/ })

});