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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DUMMY_MEETUPS\": function() { return /* binding */ DUMMY_MEETUPS; },\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\nvar __N_SSG = true;\nvar DUMMY_MEETUPS = [\n    {\n        id: \"m1\",\n        title: \"A First Meetup\",\n        image: \"https://livesharetravel.com/wp-content/uploads/2014/08/Places-to-go-in-London-for-every-traveller.jpg\",\n        description: \"London is one of the world's most exciting cities but its also one of the biggest and there are a host of great things to do there.\",\n        address: \"London\"\n    },\n    {\n        id: \"m2\",\n        title: \"A Second Meetup\",\n        image: \"https://media2.thrillophilia.com/images/photos/000/041/109/original/1584271952_shutterstock_749994316.jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true\",\n        description: \"Mumbai is one of the world's most exciting cities but its also one of the biggest and there are a host of great things to do there.\",\n        address: \"Mumbai\"\n    }, \n];\nfunction HomePage(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            meetups: props.meetups\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kedha\\\\Workspace\\\\React Meetup\\\\pages\\\\index.js\",\n            lineNumber: 26,\n            columnNumber: 3\n        }, this)\n    }, void 0, false);\n}\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUMwRDs7QUFDbkQsSUFBTUMsYUFBYSxHQUFHO0lBQzNCO1FBQ0VDLEVBQUUsRUFBRSxJQUFJO1FBQ1JDLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkJDLEtBQUssRUFDSCx1R0FBdUc7UUFDekdDLFdBQVcsRUFDVCxxSUFBcUk7UUFDdklDLE9BQU8sRUFBRSxRQUFRO0tBQ2xCO0lBQ0Q7UUFDRUosRUFBRSxFQUFFLElBQUk7UUFDUkMsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QkMsS0FBSyxFQUNILHNPQUFzTztRQUN4T0MsV0FBVyxFQUNULHFJQUFxSTtRQUN2SUMsT0FBTyxFQUFFLFFBQVE7S0FDbEI7Q0FDRixDQUFDO0FBRWEsU0FBU0MsUUFBUSxDQUFDQyxLQUFLLEVBQUU7SUFDdEMscUJBQU87a0JBQ1AsNEVBQUNSLHNFQUFVO1lBQUNTLE9BQU8sRUFBRUQsS0FBSyxDQUFDQyxPQUFPOzs7OztnQkFBSTtxQkFBRyxDQUFDO0FBQzVDLENBQUM7QUFIdUJGLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5leHBvcnQgY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcclxuICB7XHJcbiAgICBpZDogXCJtMVwiLFxyXG4gICAgdGl0bGU6IFwiQSBGaXJzdCBNZWV0dXBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vbGl2ZXNoYXJldHJhdmVsLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wOC9QbGFjZXMtdG8tZ28taW4tTG9uZG9uLWZvci1ldmVyeS10cmF2ZWxsZXIuanBnXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMb25kb24gaXMgb25lIG9mIHRoZSB3b3JsZCdzIG1vc3QgZXhjaXRpbmcgY2l0aWVzIGJ1dCBpdHMgYWxzbyBvbmUgb2YgdGhlIGJpZ2dlc3QgYW5kIHRoZXJlIGFyZSBhIGhvc3Qgb2YgZ3JlYXQgdGhpbmdzIHRvIGRvIHRoZXJlLlwiLFxyXG4gICAgYWRkcmVzczogXCJMb25kb25cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm0yXCIsXHJcbiAgICB0aXRsZTogXCJBIFNlY29uZCBNZWV0dXBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vbWVkaWEyLnRocmlsbG9waGlsaWEuY29tL2ltYWdlcy9waG90b3MvMDAwLzA0MS8xMDkvb3JpZ2luYWwvMTU4NDI3MTk1Ml9zaHV0dGVyc3RvY2tfNzQ5OTk0MzE2LmpwZz9ncmF2aXR5PWNlbnRlciZ3aWR0aD0xMjgwJmhlaWdodD02NDImY3JvcD1maWxsJnF1YWxpdHk9YXV0byZmZXRjaF9mb3JtYXQ9YXV0byZmbGFncz1zdHJpcF9wcm9maWxlJmZvcm1hdD1qcGcmc2lnbl91cmw9dHJ1ZVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTXVtYmFpIGlzIG9uZSBvZiB0aGUgd29ybGQncyBtb3N0IGV4Y2l0aW5nIGNpdGllcyBidXQgaXRzIGFsc28gb25lIG9mIHRoZSBiaWdnZXN0IGFuZCB0aGVyZSBhcmUgYSBob3N0IG9mIGdyZWF0IHRoaW5ncyB0byBkbyB0aGVyZS5cIixcclxuICAgIGFkZHJlc3M6IFwiTXVtYmFpXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XHJcbiAgcmV0dXJuIDw+XHJcbiAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz48Lz47XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICBcIm1vbmdvZGIrc3J2Oi8va2VkaGFybmFkaDU1NTpLZWRoYXIuNTU1QGNsdXN0ZXIwLmxsem94aXQubW9uZ29kYi5uZXQvbWVldHVwP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPUNsdXN0ZXIwXCJcclxuICApO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuICBsZXQgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcbiAgY29uc29sZS5sb2cobWVldHVwcylcclxuICBtZWV0dXBzPW1lZXR1cHMubWFwKChtZWV0dXApID0+ICh7XHJcbiAgICB0aXRsZTptZWV0dXAudGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbjptZWV0dXAuZGVzY3JpcHRpb24sXHJcbiAgICBpbWFnZTptZWV0dXAuaW1hZ2UsXHJcbiAgICBhZGRyZXNzOm1lZXR1cC5hZGRyZXNzLFxyXG4gICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICB9KSksXHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cHMgXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZToxXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiTWVldHVwTGlzdCIsIkRVTU1ZX01FRVRVUFMiLCJpZCIsInRpdGxlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImFkZHJlc3MiLCJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});