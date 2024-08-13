/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AspectRatio: () => (/* binding */ AspectRatio),
  EnumAlignContent: () => (/* reexport */ external_flex_layout_system_namespaceObject.EnumAlignContent),
  EnumAlignItems: () => (/* reexport */ external_flex_layout_system_namespaceObject.EnumAlignItems),
  EnumAlignSelf: () => (/* reexport */ external_flex_layout_system_namespaceObject.EnumAlignSelf),
  EnumJustifyContent: () => (/* reexport */ external_flex_layout_system_namespaceObject.EnumJustifyContent),
  FitBox: () => (/* binding */ FitBox),
  FlexBox: () => (/* binding */ FlexBox),
  FlexCanvas: () => (/* binding */ FlexCanvas),
  FlexCell: () => (/* binding */ FlexCell),
  FlexDivider: () => (/* binding */ FlexDivider),
  FlexGrid: () => (/* binding */ FlexGrid),
  FlexMedia: () => (/* binding */ FlexMedia),
  LtrOnly: () => (/* binding */ LtrOnly),
  SpaceBox: () => (/* binding */ SpaceBox),
  SrOnly: () => (/* binding */ SrOnly),
  StackedBox: () => (/* binding */ StackedBox),
  StackedCell: () => (/* binding */ StackedCell),
  StyleBox: () => (/* binding */ StyleBox)
});

;// CONCATENATED MODULE: external "react"
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_namespaceObject);
;// CONCATENATED MODULE: external "@lit-labs/react"
const react_namespaceObject = require("@lit-labs/react");
;// CONCATENATED MODULE: external "flex-layout-system"
const external_flex_layout_system_namespaceObject = require("flex-layout-system");
;// CONCATENATED MODULE: ./index.tsx




const LtrOnly = (0,react_namespaceObject.createComponent)({
    react: (external_react_default()),
    tagName: "ltr-only",
    elementClass: external_flex_layout_system_namespaceObject.LtrOnly,
});
const AspectRatio = (0,react_namespaceObject.createComponent)({
    react: (external_react_default()),
    tagName: "a-ratio",
    elementClass: external_flex_layout_system_namespaceObject.AspectRatio,
});
const SrOnly = (0,react_namespaceObject.createComponent)({
    react: (external_react_default()),
    tagName: "sr-only",
    elementClass: external_flex_layout_system_namespaceObject.ScreenReaderOnly,
});
const FlexBox = (0,react_namespaceObject.createComponent)({
    react: (external_react_default()),
    tagName: "flex-box",
    elementClass: external_flex_layout_system_namespaceObject.FlexBox,
});
const FitBox = (0,react_namespaceObject.createComponent)({
    react: (external_react_default()),
    tagName: "fit-box",
    elementClass: external_flex_layout_system_namespaceObject.FitBox,
});
const FlexCanvas = (0,react_namespaceObject.createComponent)({
    react: (external_react_default()),
    tagName: "flex-canvas",
    elementClass: external_flex_layout_system_namespaceObject.FlexCanvas,
});
const FlexCell = (0,react_namespaceObject.createComponent)({
    react: (external_react_default()),
    tagName: "flex-cell",
    elementClass: external_flex_layout_system_namespaceObject.FlexCell,
});
const FlexDivider = (0,react_namespaceObject.createComponent)({
    react: (external_react_default()),
    tagName: "flex-divider",
    elementClass: external_flex_layout_system_namespaceObject.FlexDivider,
});
const FlexGrid = (0,react_namespaceObject.createComponent)({
    react: (external_react_default()),
    tagName: "flex-grid",
    elementClass: external_flex_layout_system_namespaceObject.FlexGrid,
});
const FlexMedia = (0,react_namespaceObject.createComponent)({
    react: (external_react_default()),
    tagName: "flex-media",
    elementClass: external_flex_layout_system_namespaceObject.FlexMedia,
});
const SpaceBox = (0,react_namespaceObject.createComponent)({
    react: (external_react_default()),
    tagName: "space-box",
    elementClass: external_flex_layout_system_namespaceObject.SpaceBox,
});
const StackedBox = (0,react_namespaceObject.createComponent)({
    react: (external_react_default()),
    tagName: "stacked-box",
    elementClass: external_flex_layout_system_namespaceObject.StackedBox,
});
const StackedCell = (0,react_namespaceObject.createComponent)({
    react: (external_react_default()),
    tagName: "stacked-cell",
    elementClass: external_flex_layout_system_namespaceObject.StackedCell,
});
const StyleBox = (0,react_namespaceObject.createComponent)({
    react: (external_react_default()),
    tagName: "s-box",
    elementClass: external_flex_layout_system_namespaceObject.StyleBox,
});

module.exports = __webpack_exports__;
/******/ })()
;