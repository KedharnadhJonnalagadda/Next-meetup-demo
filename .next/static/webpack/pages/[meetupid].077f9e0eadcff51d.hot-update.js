"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[meetupid]",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DUMMY_MEETUPS\": function() { return /* binding */ DUMMY_MEETUPS; },\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\n\nvar __N_SSG = true;\nvar DUMMY_MEETUPS = [\n    {\n        id: \"m1\",\n        title: \"A First Meetup\",\n        image: \"https://livesharetravel.com/wp-content/uploads/2014/08/Places-to-go-in-London-for-every-traveller.jpg\",\n        description: \"London is one of the world's most exciting cities but its also one of the biggest and there are a host of great things to do there.\",\n        address: \"London\"\n    },\n    {\n        id: \"m2\",\n        title: \"A Second Meetup\",\n        image: \"https://media2.thrillophilia.com/images/photos/000/041/109/original/1584271952_shutterstock_749994316.jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true\",\n        description: \"Mumbai is one of the world's most exciting cities but its also one of the biggest and there are a host of great things to do there.\",\n        address: \"Mumbai\"\n    }, \n];\nfunction HomePage(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"React Meetup\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kedha\\\\Workspace\\\\React Meetup\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"New Metups!\",\n                        content: \"List of all metups\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kedha\\\\Workspace\\\\React Meetup\\\\pages\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kedha\\\\Workspace\\\\React Meetup\\\\pages\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                meetups: props.meetups\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kedha\\\\Workspace\\\\React Meetup\\\\pages\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQzZCO0FBQzZCOztBQUNuRCxJQUFNRSxhQUFhLEdBQUc7SUFDM0I7UUFDRUMsRUFBRSxFQUFFLElBQUk7UUFDUkMsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QkMsS0FBSyxFQUNILHVHQUF1RztRQUN6R0MsV0FBVyxFQUNULHFJQUFxSTtRQUN2SUMsT0FBTyxFQUFFLFFBQVE7S0FDbEI7SUFDRDtRQUNFSixFQUFFLEVBQUUsSUFBSTtRQUNSQyxLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCQyxLQUFLLEVBQ0gsc09BQXNPO1FBQ3hPQyxXQUFXLEVBQ1QscUlBQXFJO1FBQ3ZJQyxPQUFPLEVBQUUsUUFBUTtLQUNsQjtDQUNGLENBQUM7QUFFYSxTQUFTQyxRQUFRLENBQUNDLEtBQUssRUFBRTtJQUN0QyxxQkFDRTs7MEJBQ0UsOERBQUNULGtEQUFJOztrQ0FDSCw4REFBQ0ksT0FBSztrQ0FBQyxjQUFZOzs7Ozs0QkFBUTtrQ0FDM0IsOERBQUNNLE1BQUk7d0JBQUNDLElBQUksRUFBQyxhQUFhO3dCQUFDQyxPQUFPLEVBQUMsb0JBQW9COzs7Ozs0QkFBRzs7Ozs7O29CQUNuRDswQkFDUCw4REFBQ1gsc0VBQVU7Z0JBQUNZLE9BQU8sRUFBRUosS0FBSyxDQUFDSSxPQUFPOzs7OztvQkFBSTs7b0JBQ3JDLENBQ0g7QUFDSixDQUFDO0FBVnVCTCxLQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5leHBvcnQgY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcclxuICB7XHJcbiAgICBpZDogXCJtMVwiLFxyXG4gICAgdGl0bGU6IFwiQSBGaXJzdCBNZWV0dXBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vbGl2ZXNoYXJldHJhdmVsLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wOC9QbGFjZXMtdG8tZ28taW4tTG9uZG9uLWZvci1ldmVyeS10cmF2ZWxsZXIuanBnXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb25kb24gaXMgb25lIG9mIHRoZSB3b3JsZCdzIG1vc3QgZXhjaXRpbmcgY2l0aWVzIGJ1dCBpdHMgYWxzbyBvbmUgb2YgdGhlIGJpZ2dlc3QgYW5kIHRoZXJlIGFyZSBhIGhvc3Qgb2YgZ3JlYXQgdGhpbmdzIHRvIGRvIHRoZXJlLlwiLFxyXG4gICAgYWRkcmVzczogXCJMb25kb25cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm0yXCIsXHJcbiAgICB0aXRsZTogXCJBIFNlY29uZCBNZWV0dXBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vbWVkaWEyLnRocmlsbG9waGlsaWEuY29tL2ltYWdlcy9waG90b3MvMDAwLzA0MS8xMDkvb3JpZ2luYWwvMTU4NDI3MTk1Ml9zaHV0dGVyc3RvY2tfNzQ5OTk0MzE2LmpwZz9ncmF2aXR5PWNlbnRlciZ3aWR0aD0xMjgwJmhlaWdodD02NDImY3JvcD1maWxsJnF1YWxpdHk9YXV0byZmZXRjaF9mb3JtYXQ9YXV0byZmbGFncz1zdHJpcF9wcm9maWxlJmZvcm1hdD1qcGcmc2lnbl91cmw9dHJ1ZVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTXVtYmFpIGlzIG9uZSBvZiB0aGUgd29ybGQncyBtb3N0IGV4Y2l0aW5nIGNpdGllcyBidXQgaXRzIGFsc28gb25lIG9mIHRoZSBiaWdnZXN0IGFuZCB0aGVyZSBhcmUgYSBob3N0IG9mIGdyZWF0IHRoaW5ncyB0byBkbyB0aGVyZS5cIixcclxuICAgIGFkZHJlc3M6IFwiTXVtYmFpXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5SZWFjdCBNZWV0dXA8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJOZXcgTWV0dXBzIVwiIGNvbnRlbnQ9XCJMaXN0IG9mIGFsbCBtZXR1cHNcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgXCJtb25nb2RiK3NydjovL2tlZGhhcm5hZGg1NTU6S2VkaGFyLjU1NUBjbHVzdGVyMC5sbHpveGl0Lm1vbmdvZGIubmV0L21lZXR1cD9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHkmYXBwTmFtZT1DbHVzdGVyMFwiXHJcbiAgKTtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcbiAgbGV0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG4gIGNvbnNvbGUubG9nKG1lZXR1cHMpO1xyXG4gIChtZWV0dXBzID0gbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcclxuICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbjogbWVldHVwLmRlc2NyaXB0aW9uLFxyXG4gICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcclxuICAgIGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxyXG4gICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICB9KSkpLFxyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cHMsXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMSxcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiTWVldHVwTGlzdCIsIkRVTU1ZX01FRVRVUFMiLCJpZCIsInRpdGxlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImFkZHJlc3MiLCJIb21lUGFnZSIsInByb3BzIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibWVldHVwcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});