"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cages",{

/***/ "./components/UpdateCage.js":
/*!**********************************!*\
  !*** ./components/UpdateCage.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"../node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"../node_modules/@mui/material/index.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction UpdateCage(props) {\n    _s();\n    var nameRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var experimentIdRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    // ============ Update: Cage ========\n    var updateCage = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(cageData) {\n            var url, res, newCageData;\n            return _Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        url = \"http://localhost:4000/cages/:id\";\n                        _ctx.next = 3;\n                        return fetch(url, {\n                            method: \"PATCH\",\n                            body: JSON.stringify(cageData),\n                            headers: {\n                                \"content-type\": \"application/json\"\n                            }\n                        });\n                    case 3:\n                        res = _ctx.sent;\n                        _ctx.next = 6;\n                        return res.json();\n                    case 6:\n                        newCageData = _ctx.sent;\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function updateCage(cageData) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    updateCage();\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var cageData;\n            return _Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        cageData = {\n                            name: nameRef.current.value,\n                            experiment_id: Number(experimentIdRef.current.value)\n                        };\n                        // console.log(cageData);\n                        updateCage(cageData);\n                        setSubmit(true);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"styles.update\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                children: \"Update Cage: \"\n            }, void 0, false, {\n                fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/UpdateCage.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                id: \"outlined-cageName\",\n                label: \"Cage Name\",\n                inputRef: nameRef\n            }, void 0, false, {\n                fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/UpdateCage.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                id: \"outlined-experiementID\",\n                label: \"Experiment ID\",\n                inputRef: experimentIdRef\n            }, void 0, false, {\n                fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/UpdateCage.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onClick: handleSubmit,\n                children: \"UPDATE CAGE\"\n            }, void 0, false, {\n                fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/UpdateCage.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/components/UpdateCage.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(UpdateCage, \"leYqpNSySuXJVN2D5eQlQn6810U=\");\n_c = UpdateCage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UpdateCage);\nvar _c;\n$RefreshReg$(_c, \"UpdateCage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VwZGF0ZUNhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFBc0M7QUFDZ0I7QUFDbkI7QUFFbkMsU0FBU0ssVUFBVSxDQUFDQyxLQUFLLEVBQUU7O0lBQ3pCLElBQU1DLE9BQU8sR0FBR04sNkNBQU0sRUFBRTtJQUN4QixJQUFNTyxlQUFlLEdBQUdQLDZDQUFNLEVBQUU7SUFFaEMscUNBQXFDO0lBRXJDLElBQU1RLFVBQVU7bUJBQUcsbVFBQU9DLFFBQVEsRUFBSztnQkFDL0JDLEdBQUcsRUFDSEMsR0FBRyxFQUtIQyxXQUFXOzs7O3dCQU5YRixHQUFHLEdBQUcsaUNBQWlDLENBQUM7OytCQUM1QkcsS0FBSyxDQUFDSCxHQUFHLEVBQUU7NEJBQzNCSSxNQUFNLEVBQUUsT0FBTzs0QkFDZkMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1IsUUFBUSxDQUFDOzRCQUM5QlMsT0FBTyxFQUFFO2dDQUFFLGNBQWMsRUFBRSxrQkFBa0I7NkJBQUU7eUJBQ2hELENBQUM7O3dCQUpJUCxHQUFHLFlBSVA7OytCQUN3QkEsR0FBRyxDQUFDUSxJQUFJLEVBQUU7O3dCQUE5QlAsV0FBVyxZQUFtQjs7Ozs7O1NBQ3JDO3dCQVJLSixVQUFVLENBQVVDLFFBQVE7OztPQVFqQztJQUVERCxVQUFVLEVBQUUsQ0FBQztJQUViLElBQU1ZLFlBQVk7bUJBQUcsbVFBQU9DLEtBQUssRUFBSztnQkFJOUJaLFFBQVE7Ozs7d0JBSGRZLEtBQUssQ0FBQ0MsY0FBYyxFQUFFLENBQUM7d0JBR2pCYixRQUFRLEdBQUc7NEJBQ2ZjLElBQUksRUFBRWpCLE9BQU8sQ0FBQ2tCLE9BQU8sQ0FBQ0MsS0FBSzs0QkFDM0JDLGFBQWEsRUFBRUMsTUFBTSxDQUFDcEIsZUFBZSxDQUFDaUIsT0FBTyxDQUFDQyxLQUFLLENBQUM7eUJBQ3JELENBQUM7d0JBQ0YseUJBQXlCO3dCQUN6QmpCLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDLENBQUM7d0JBRXJCbUIsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7U0FDakI7d0JBWktSLFlBQVksQ0FBVUMsS0FBSzs7O09BWWhDO0lBRUQscUJBQ0UsOERBQUNRLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGVBQWU7OzBCQUM1Qiw4REFBQzdCLHFEQUFVOzBCQUFDLGVBQWE7Ozs7O29CQUFhOzBCQUV0Qyw4REFBQ0Msb0RBQVM7Z0JBQUM2QixFQUFFLEVBQUMsbUJBQW1CO2dCQUFDQyxLQUFLLEVBQUMsV0FBVztnQkFBQ0MsUUFBUSxFQUFFM0IsT0FBTzs7Ozs7b0JBQUk7MEJBQ3pFLDhEQUFDSixvREFBUztnQkFDUjZCLEVBQUUsRUFBQyx3QkFBd0I7Z0JBQzNCQyxLQUFLLEVBQUMsZUFBZTtnQkFDckJDLFFBQVEsRUFBRTFCLGVBQWU7Ozs7O29CQUN6QjswQkFDRiw4REFBQ0oscURBQU07Z0JBQUMrQixPQUFPLEVBQUVkLFlBQVk7MEJBQUUsYUFBVzs7Ozs7b0JBQVM7Ozs7OztZQUMvQyxDQUNOO0NBQ0g7R0E3Q1FoQixVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUErQ25CLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVDYWdlLmpzPzZmZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgVGV4dEZpZWxkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuZnVuY3Rpb24gVXBkYXRlQ2FnZShwcm9wcykge1xuICBjb25zdCBuYW1lUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGV4cGVyaW1lbnRJZFJlZiA9IHVzZVJlZigpO1xuXG4gIC8vID09PT09PT09PT09PSBVcGRhdGU6IENhZ2UgPT09PT09PT1cblxuICBjb25zdCB1cGRhdGVDYWdlID0gYXN5bmMgKGNhZ2VEYXRhKSA9PiB7XG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvY2FnZXMvOmlkXCI7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNhZ2VEYXRhKSxcbiAgICAgIGhlYWRlcnM6IHsgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICB9KTtcbiAgICBjb25zdCBuZXdDYWdlRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIH07XG5cbiAgdXBkYXRlQ2FnZSgpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy9vbiBTdWJtaXQsIGRhdGEgaXMgcGFzc2VkIHRvIHRoZSBkYXRhYmFzZVxuXG4gICAgY29uc3QgY2FnZURhdGEgPSB7XG4gICAgICBuYW1lOiBuYW1lUmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICBleHBlcmltZW50X2lkOiBOdW1iZXIoZXhwZXJpbWVudElkUmVmLmN1cnJlbnQudmFsdWUpLFxuICAgIH07XG4gICAgLy8gY29uc29sZS5sb2coY2FnZURhdGEpO1xuICAgIHVwZGF0ZUNhZ2UoY2FnZURhdGEpO1xuXG4gICAgc2V0U3VibWl0KHRydWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdHlsZXMudXBkYXRlXCI+XG4gICAgICA8VHlwb2dyYXBoeT5VcGRhdGUgQ2FnZTogPC9UeXBvZ3JhcGh5PlxuXG4gICAgICA8VGV4dEZpZWxkIGlkPVwib3V0bGluZWQtY2FnZU5hbWVcIiBsYWJlbD1cIkNhZ2UgTmFtZVwiIGlucHV0UmVmPXtuYW1lUmVmfSAvPlxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBpZD1cIm91dGxpbmVkLWV4cGVyaWVtZW50SURcIlxuICAgICAgICBsYWJlbD1cIkV4cGVyaW1lbnQgSURcIlxuICAgICAgICBpbnB1dFJlZj17ZXhwZXJpbWVudElkUmVmfVxuICAgICAgLz5cbiAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fT5VUERBVEUgQ0FHRTwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBVcGRhdGVDYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiVHlwb2dyYXBoeSIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsIlVwZGF0ZUNhZ2UiLCJwcm9wcyIsIm5hbWVSZWYiLCJleHBlcmltZW50SWRSZWYiLCJ1cGRhdGVDYWdlIiwiY2FnZURhdGEiLCJ1cmwiLCJyZXMiLCJuZXdDYWdlRGF0YSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwianNvbiIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuYW1lIiwiY3VycmVudCIsInZhbHVlIiwiZXhwZXJpbWVudF9pZCIsIk51bWJlciIsInNldFN1Ym1pdCIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwibGFiZWwiLCJpbnB1dFJlZiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UpdateCage.js\n"));

/***/ })

});