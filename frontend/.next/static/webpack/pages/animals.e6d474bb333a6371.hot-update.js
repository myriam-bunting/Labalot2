"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/animals",{

/***/ "./pages/animals.js":
/*!**************************!*\
  !*** ./pages/animals.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"../node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"../node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_AnimalsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AnimalsTable */ \"./components/AnimalsTable.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_UpdateAnimal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UpdateAnimal */ \"./components/UpdateAnimal.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction DashboardContent() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2__.useState(false), 2), open = ref[0], setOpen = ref[1];\n    var toggleDrawer = function() {\n        setOpen(!open);\n    };\n    // ================ Read : Fetch all animals\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2__.useState(true), 2), viewAnimals = ref1[0], setViewAnimals = ref1[1];\n    var ref2 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2__.useState([]), 2), animals = ref2[0], setAnimals = ref2[1];\n    var ref3 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2__.useState(false), 2), viewCages = ref3[0], setViewCages = ref3[1];\n    var ref4 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_2__.useState(false), 2), updateAnimal = ref4[0], setUpdateAnimal = ref4[1];\n    // const handleViewCages = () => {\n    //   setViewCages(!viewCages);\n    //   setViewAnimals(false);\n    //   console.log(`show me those cages baby`);\n    // };\n    // const handleViewAnimals = () => {\n    //   setViewAnimals(true);\n    //   console.log(`animals updated`);\n    // };\n    react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function() {\n        fetchAnimals();\n    }, []);\n    var fetchAnimals = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var url, res, animalData;\n            return _Users_myriambunting_Projects_GA_Project4_Labalot2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        url = \"http://localhost:4000/animals\";\n                        _ctx.next = 3;\n                        return fetch(url, {\n                            method: \"GET\"\n                        });\n                    case 3:\n                        res = _ctx.sent;\n                        console.log(res);\n                        _ctx.next = 7;\n                        return res.json();\n                    case 7:\n                        animalData = _ctx.sent;\n                        console.log(res.status);\n                        console.log(animalData);\n                        setAnimals(animalData);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        //passing cage data down in the state\n        }));\n        return function fetchAnimals() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            updateAnimal && selectedRow && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UpdateAnimal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                animalData: animals.find(function(param) {\n                    var id = param.id;\n                    return id === selectedRow;\n                }),\n                sx: {\n                    zIndex: 100\n                },\n                handleSubmit: function() {\n                    setHandleUpdateSubmit(handleUpdateSubmit + 1);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/pages/animals.js\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n                        onClick: function() {\n                            console.log(animals, selectedRow);\n                            setUpdateAnimal(true);\n                        },\n                        children: \"EDIT CAGE\"\n                    }, void 0, false, {\n                        fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/pages/animals.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n                        onClick: function() {\n                            if (confirm(\"are you sure\")) {\n                                handleDelete();\n                            }\n                        },\n                        children: \"DELETE CAGE\"\n                    }, void 0, false, {\n                        fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/pages/animals.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    animals && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CagesTable, {\n                        handleSelectModelChange: handleSelectModelChange,\n                        animalData: animals\n                    }, void 0, false, {\n                        fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/pages/animals.js\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/pages/animals.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_AnimalsTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                animalData: animals\n            }, void 0, false, {\n                fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/pages/animals.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/pages/animals.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(DashboardContent, \"5OjmrfscwG+3KgxZGlBt9juoTiU=\");\n_c = DashboardContent;\nfunction Dashboard() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(DashboardContent, {}, void 0, false, {\n        fileName: \"/Users/myriambunting/Projects/GA_Project4/Labalot2/frontend/pages/animals.js\",\n        lineNumber: 90,\n        columnNumber: 10\n    }, this);\n};\n_c1 = Dashboard;\nvar _c, _c1;\n$RefreshReg$(_c, \"DashboardContent\");\n$RefreshReg$(_c1, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEJBQ2xDWixlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ3ZCO2tDQUNGLFdBRUQ7Ozs7OzRCQUFTO2tDQUNULDhEQUFDcUIsTUFBTTt3QkFDTEMsT0FBTyxFQUFFLFdBQU07NEJBQ2IsSUFBSUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dDQUMzQkMsWUFBWSxFQUFFLENBQUM7NkJBQ2hCO3lCQUNGO2tDQUNGLGFBRUQ7Ozs7OzRCQUFTO29CQUNSN0IsT0FBTyxrQkFDTiw4REFBQzhCLFVBQVU7d0JBQ1RDLHVCQUF1QixFQUFFQSx1QkFBdUI7d0JBQ2hEckIsVUFBVSxFQUFFVixPQUFPOzs7Ozs0QkFDUDs7Ozs7O29CQUVaOzBCQUNOLDhEQUFDVixnRUFBUztnQkFBQ29CLFVBQVUsRUFBRVYsT0FBTzs7Ozs7b0JBQUk7Ozs7OztZQUMzQixDQUNUO0NBQ0g7R0FqRlFQLGdCQUFnQjtBQUFoQkEsS0FBQUEsZ0JBQWdCO0FBbUZWLFNBQVN1QyxTQUFTLEdBQUc7SUFDbEMscUJBQU8sOERBQUN2QyxnQkFBZ0I7Ozs7WUFBRyxDQUFDO0NBQzdCO0FBRnVCdUMsTUFBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hbmltYWxzLmpzPzQ2ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gXCIuLi9jb21wb25lbnRzL0FuaW1hbHNUYWJsZVwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBVcGRhdGVBbmltYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXBkYXRlQW5pbWFsXCI7XG5cbmZ1bmN0aW9uIERhc2hib2FyZENvbnRlbnQoKSB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XG4gICAgc2V0T3Blbighb3Blbik7XG4gIH07XG5cbiAgLy8gPT09PT09PT09PT09PT09PSBSZWFkIDogRmV0Y2ggYWxsIGFuaW1hbHNcbiAgY29uc3QgW3ZpZXdBbmltYWxzLCBzZXRWaWV3QW5pbWFsc10gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2FuaW1hbHMsIHNldEFuaW1hbHNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuICBjb25zdCBbdmlld0NhZ2VzLCBzZXRWaWV3Q2FnZXNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXBkYXRlQW5pbWFsLCBzZXRVcGRhdGVBbmltYWxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAvLyBjb25zdCBoYW5kbGVWaWV3Q2FnZXMgPSAoKSA9PiB7XG4gIC8vICAgc2V0Vmlld0NhZ2VzKCF2aWV3Q2FnZXMpO1xuICAvLyAgIHNldFZpZXdBbmltYWxzKGZhbHNlKTtcbiAgLy8gICBjb25zb2xlLmxvZyhgc2hvdyBtZSB0aG9zZSBjYWdlcyBiYWJ5YCk7XG4gIC8vIH07XG4gIC8vIGNvbnN0IGhhbmRsZVZpZXdBbmltYWxzID0gKCkgPT4ge1xuICAvLyAgIHNldFZpZXdBbmltYWxzKHRydWUpO1xuICAvLyAgIGNvbnNvbGUubG9nKGBhbmltYWxzIHVwZGF0ZWRgKTtcbiAgLy8gfTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoQW5pbWFscygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZmV0Y2hBbmltYWxzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FuaW1hbHNcIjtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gICAgY29uc3QgYW5pbWFsRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBjb25zb2xlLmxvZyhyZXMuc3RhdHVzKTtcbiAgICBjb25zb2xlLmxvZyhhbmltYWxEYXRhKTtcblxuICAgIHNldEFuaW1hbHMoYW5pbWFsRGF0YSk7XG4gICAgLy9wYXNzaW5nIGNhZ2UgZGF0YSBkb3duIGluIHRoZSBzdGF0ZVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIHt1cGRhdGVBbmltYWwgJiYgc2VsZWN0ZWRSb3cgJiYgKFxuICAgICAgICA8VXBkYXRlQW5pbWFsXG4gICAgICAgICAgYW5pbWFsRGF0YT17YW5pbWFscy5maW5kKCh7IGlkIH0pID0+IGlkID09PSBzZWxlY3RlZFJvdyl9XG4gICAgICAgICAgc3g9e3sgekluZGV4OiAxMDAgfX1cbiAgICAgICAgICBoYW5kbGVTdWJtaXQ9eygpID0+IHtcbiAgICAgICAgICAgIHNldEhhbmRsZVVwZGF0ZVN1Ym1pdChoYW5kbGVVcGRhdGVTdWJtaXQgKyAxKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+PC9VcGRhdGVBbmltYWw+XG4gICAgICApfVxuICAgICAgPGRpdj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFuaW1hbHMsIHNlbGVjdGVkUm93KTtcbiAgICAgICAgICAgIHNldFVwZGF0ZUFuaW1hbCh0cnVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgRURJVCBDQUdFXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbmZpcm0oXCJhcmUgeW91IHN1cmVcIikpIHtcbiAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIERFTEVURSBDQUdFXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICB7YW5pbWFscyAmJiAoXG4gICAgICAgICAgPENhZ2VzVGFibGVcbiAgICAgICAgICAgIGhhbmRsZVNlbGVjdE1vZGVsQ2hhbmdlPXtoYW5kbGVTZWxlY3RNb2RlbENoYW5nZX1cbiAgICAgICAgICAgIGFuaW1hbERhdGE9e2FuaW1hbHN9XG4gICAgICAgICAgPjwvQ2FnZXNUYWJsZT5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPERhdGFUYWJsZSBhbmltYWxEYXRhPXthbmltYWxzfSAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG4gIHJldHVybiA8RGFzaGJvYXJkQ29udGVudCAvPjtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkRhdGFUYWJsZSIsIkxheW91dCIsIlVwZGF0ZUFuaW1hbCIsIkRhc2hib2FyZENvbnRlbnQiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwidG9nZ2xlRHJhd2VyIiwidmlld0FuaW1hbHMiLCJzZXRWaWV3QW5pbWFscyIsImFuaW1hbHMiLCJzZXRBbmltYWxzIiwidmlld0NhZ2VzIiwic2V0Vmlld0NhZ2VzIiwidXBkYXRlQW5pbWFsIiwic2V0VXBkYXRlQW5pbWFsIiwidXNlRWZmZWN0IiwiZmV0Y2hBbmltYWxzIiwidXJsIiwicmVzIiwiYW5pbWFsRGF0YSIsImZldGNoIiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJzdGF0dXMiLCJzZWxlY3RlZFJvdyIsImZpbmQiLCJpZCIsInN4IiwiekluZGV4IiwiaGFuZGxlU3VibWl0Iiwic2V0SGFuZGxlVXBkYXRlU3VibWl0IiwiaGFuZGxlVXBkYXRlU3VibWl0IiwiZGl2IiwiQnV0dG9uIiwib25DbGljayIsImNvbmZpcm0iLCJoYW5kbGVEZWxldGUiLCJDYWdlc1RhYmxlIiwiaGFuZGxlU2VsZWN0TW9kZWxDaGFuZ2UiLCJEYXNoYm9hcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/animals.js\n"));

/***/ })

});