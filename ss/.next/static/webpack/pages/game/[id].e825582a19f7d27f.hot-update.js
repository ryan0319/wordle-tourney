"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game/[id]",{

/***/ "./pages/game/[id].tsx":
/*!*****************************!*\
  !*** ./pages/game/[id].tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_components_Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/components/Game */ \"./common/components/Game.tsx\");\n/* harmony import */ var _common_utils_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/utils/functions */ \"./common/utils/functions.ts\");\n/* harmony import */ var _styles_GameHome_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/GameHome.module.scss */ \"./styles/GameHome.module.scss\");\n/* harmony import */ var _styles_GameHome_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_GameHome_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar GameHome = function(param) {\n    var game = param.game;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_GameHome_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"game-home-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/code/pages/game/[id].tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/code/pages/game/[id].tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/code/pages/game/[id].tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/code/pages/game/[id].tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_GameHome_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"game-home-main\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_GameHome_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"game-home-scoring\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/logo.png\",\n                            width: 400,\n                            height: 200,\n                            objectFit: \"contain\",\n                            alt: \"Wordle Battle Tournament\"\n                        }, void 0, false, {\n                            fileName: \"/code/pages/game/[id].tsx\",\n                            lineNumber: 24,\n                            columnNumber: 9\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/code/pages/game/[id].tsx\",\n                        lineNumber: 23,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: 'App-container',\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_components_Game__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            maxGuesses: _common_utils_functions__WEBPACK_IMPORTED_MODULE_4__.maxGuesses,\n                            game: game\n                        }, void 0, false, {\n                            fileName: \"/code/pages/game/[id].tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/code/pages/game/[id].tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/code/pages/game/[id].tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_GameHome_module_scss__WEBPACK_IMPORTED_MODULE_5___default().footer)\n            }, void 0, false, {\n                fileName: \"/code/pages/game/[id].tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/code/pages/game/[id].tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this));\n};\n_c = GameHome;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameHome);\nvar _c;\n$RefreshReg$(_c, \"GameHome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nYW1lL1tpZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNEI7QUFDRTtBQUM0QjtBQUVEO0FBRUg7O0FBR3RELEdBQUssQ0FBQ0ssUUFBUSxHQUFzRCxRQUMvRCxRQUNDLENBQUM7UUFETEMsSUFBSSxTQUFKQSxJQUFJO0lBRUosTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUVKLDRGQUE0Qjs7d0ZBQ3pDSixrREFBSTs7Z0dBQ0ZTLENBQUs7a0NBQUMsQ0FBZTs7Ozs7O2dHQUNyQkMsQ0FBSTt3QkFBQ0MsSUFBSSxFQUFDLENBQWE7d0JBQUNDLE9BQU8sRUFBQyxDQUE4Qjs7Ozs7O2dHQUM5REMsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNDLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7Ozs7d0ZBR3JDQyxDQUFJO2dCQUFDUixTQUFTLEVBQUVKLHVGQUF1Qjs7Z0dBQ3ZDRyxDQUFHO3dCQUFDQyxTQUFTLEVBQUVKLDBGQUEwQjs4R0FDdkNILG1EQUFLOzRCQUNKZ0IsR0FBRyxFQUFDLENBQVc7NEJBQ2ZDLEtBQUssRUFBRSxHQUFHOzRCQUNWQyxNQUFNLEVBQUUsR0FBRzs0QkFDWEMsU0FBUyxFQUFDLENBQVM7NEJBQ25CQyxHQUFHLEVBQUMsQ0FBMEI7Ozs7Ozs7Ozs7O2dHQUcvQmQsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFFLENBQWU7OEdBQzVCTiwrREFBSTs0QkFBQ0MsVUFBVSxFQUFFQSwrREFBVTs0QkFBRUcsSUFBSSxFQUFFQSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFJM0NnQixDQUFNO2dCQUFDZCxTQUFTLEVBQUVKLDRFQUFhOzs7Ozs7Ozs7Ozs7QUFHdEMsQ0FBQztLQTdCS0MsUUFBUTs7QUF5Q2QsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nYW1lL1tpZF0udHN4PzNmZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IEdhbWUsIHsgR3Vlc3MgfSBmcm9tICcuLi8uLi9jb21tb24vY29tcG9uZW50cy9HYW1lJztcbmltcG9ydCB7IGdldCB9IGZyb20gJy4uLy4uL2NvbW1vbi91dGlscy9mZXRjaCc7XG5pbXBvcnQgeyBtYXhHdWVzc2VzIH0gZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBhZGRCYXNlVXJsIH0gZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzL3Nzcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9HYW1lSG9tZS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBHYW1lIGFzIEdhbWVEYiB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuY29uc3QgR2FtZUhvbWU6IE5leHRQYWdlPHsgZ2FtZTogR2FtZURiICYgeyBlbnRyaWVzOiBHdWVzc1tdIH0gfT4gPSAoe1xuICBnYW1lLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2dhbWUtaG9tZS1jb250YWluZXInXX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlc1snZ2FtZS1ob21lLW1haW4nXX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydnYW1lLWhvbWUtc2NvcmluZyddfT5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPVwiL2xvZ28ucG5nXCJcbiAgICAgICAgICB3aWR0aD17NDAwfVxuICAgICAgICAgIGhlaWdodD17MjAwfVxuICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgIGFsdD1cIldvcmRsZSBCYXR0bGUgVG91cm5hbWVudFwiXG4gICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J0FwcC1jb250YWluZXInfT5cbiAgICAgICAgICA8R2FtZSBtYXhHdWVzc2VzPXttYXhHdWVzc2VzfSBnYW1lPXtnYW1lfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PjwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgY29uc3QgZ2FtZSA9IGF3YWl0IGdldChcbiAgICBhZGRCYXNlVXJsKGAvYXBpL2dhbWUvJHtjb250ZXh0LnF1ZXJ5LmlkfWAsICEhY29udGV4dC5yZXEpLFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgZ2FtZSB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZUhvbWU7XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwiR2FtZSIsIm1heEd1ZXNzZXMiLCJzdHlsZXMiLCJHYW1lSG9tZSIsImdhbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiYWx0IiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/game/[id].tsx\n");

/***/ })

});