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

/***/ "./common/utils/fetch.ts":
/*!*******************************!*\
  !*** ./common/utils/fetch.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"get\": function() { return /* binding */ get; },\n/* harmony export */   \"post\": function() { return /* binding */ post; }\n/* harmony export */ });\n/* harmony import */ var _code_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _code_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_code_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar requestOptions = function(verb, body) {\n    return {\n        method: verb || 'GET',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: body ? JSON.stringify(body) : undefined\n    };\n};\nvar get = function() {\n    var _ref = _asyncToGenerator(_code_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url) {\n        var response;\n        return _code_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(url, requestOptions());\n                case 2:\n                    response = _ctx.sent;\n                    return _ctx.abrupt(\"return\", response.json());\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function get(url) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar post = function() {\n    var _ref = _asyncToGenerator(_code_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url, body) {\n        var response;\n        return _code_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(url, requestOptions('POST', body));\n                case 2:\n                    response = _ctx.sent;\n                    return _ctx.abrupt(\"return\", response);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function post(url, body) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    get: get,\n    post: post\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vdXRpbHMvZmV0Y2gudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxHQUFLLENBQUNBLGNBQWMsR0FBRyxRQUFRLENBQVBDLElBQWEsRUFBRUMsSUFBOEIsRUFBSyxDQUFDO0lBQ3pFLE1BQU0sQ0FBQyxDQUFDO1FBQ05DLE1BQU0sRUFBRUYsSUFBSSxJQUFJLENBQUs7UUFDckJHLE9BQU8sRUFBRSxDQUFDO1lBQUMsQ0FBYyxlQUFFLENBQWtCO1FBQUMsQ0FBQztRQUMvQ0YsSUFBSSxFQUFFQSxJQUFJLEdBQUdHLElBQUksQ0FBQ0MsU0FBUyxDQUFDSixJQUFJLElBQUlLLFNBQVM7SUFDL0MsQ0FBQztBQUNILENBQUM7QUFFTSxHQUFLLENBQUNDLEdBQUc7a0pBQUcsUUFBUSxTQUFEQyxHQUFXLEVBQUssQ0FBQztZQUNuQ0MsUUFBUTs7Ozs7MkJBQVNDLEtBQUssQ0FBQ0YsR0FBRyxFQUFFVCxjQUFjOztvQkFBMUNVLFFBQVE7aURBQ1BBLFFBQVEsQ0FBQ0UsSUFBSTs7Ozs7O0lBQ3RCLENBQUM7b0JBSFlKLEdBQUcsQ0FBVUMsR0FBVzs7OztBQUs5QixHQUFLLENBQUNJLElBQUk7a0pBQUcsUUFDcEIsU0FBRUosR0FBVyxFQUNYUCxJQUE2QixFQUNQLENBQUM7WUFDakJRLFFBQVE7Ozs7OzJCQUFTQyxLQUFLLENBQUNGLEdBQUcsRUFBRVQsY0FBYyxDQUFDLENBQU0sT0FBRUUsSUFBSTs7b0JBQXZEUSxRQUFRO2lEQUNQQSxRQUFROzs7Ozs7SUFDakIsQ0FBQztvQkFOWUcsSUFBSSxDQUNmSixHQUFXLEVBQ1hQLElBQTZCOzs7O0FBTS9CLCtEQUFlLENBQUM7SUFDZE0sR0FBRyxFQUFIQSxHQUFHO0lBQ0hLLElBQUksRUFBSkEsSUFBSTtBQUNOLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21tb24vdXRpbHMvZmV0Y2gudHM/M2VlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXF1ZXN0T3B0aW9ucyA9ICh2ZXJiPzogc3RyaW5nLCBib2R5PzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBtZXRob2Q6IHZlcmIgfHwgJ0dFVCcsXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgYm9keTogYm9keSA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogdW5kZWZpbmVkLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldCA9IGFzeW5jICh1cmw6IHN0cmluZykgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgcmVxdWVzdE9wdGlvbnMoKSk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5leHBvcnQgY29uc3QgcG9zdCA9IGFzeW5jIChcbiAgdXJsOiBzdHJpbmcsXG4gIGJvZHk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4pOiBQcm9taXNlPFJlc3BvbnNlPiA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCByZXF1ZXN0T3B0aW9ucygnUE9TVCcsIGJvZHkpKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQsXG4gIHBvc3QsXG59O1xuIl0sIm5hbWVzIjpbInJlcXVlc3RPcHRpb25zIiwidmVyYiIsImJvZHkiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInVuZGVmaW5lZCIsImdldCIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwicG9zdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./common/utils/fetch.ts\n");

/***/ })

});