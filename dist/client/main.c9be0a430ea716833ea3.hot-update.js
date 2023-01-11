webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/DropDown/dropdown.css":
false,

/***/ "./src/shared/DropDown/DropDown.tsx":
/*!******************************************!*\
  !*** ./src/shared/DropDown/DropDown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.DropDown = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst NOOP = () => {\r\n};\r\nfunction DropDown({ button, children, isOpen, onClose = NOOP, onOpen = NOOP }) {\r\n    const [isDropDownOpen, setIsDropDownOpen] = react_1.default.useState(isOpen);\r\n    react_1.default.useEffect(() => setIsDropDownOpen(isOpen), [isOpen]);\r\n    react_1.default.useEffect(() => isDropDownOpen ? onOpen() : onClose, [isDropDownOpen]);\r\n    const handleOpen = () => {\r\n        if (isOpen === undefined) {\r\n            setIsDropDownOpen(!isDropDownOpen);\r\n        }\r\n    };\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(\"div\", { onClick: handleOpen }, button),\r\n        isDropDownOpen && (react_1.default.createElement(\"div\", null,\r\n            react_1.default.createElement(\"div\", { onClick: () => setIsDropDownOpen(false) }, children)))));\r\n}\r\nexports.DropDown = DropDown;\r\n\n\n//# sourceURL=webpack:///./src/shared/DropDown/DropDown.tsx?");

/***/ }),

/***/ "./src/shared/DropDown/dropdown.css":
false,

/***/ "./src/shared/DropDown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/DropDown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./DropDown */ \"./src/shared/DropDown/DropDown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/DropDown/index.ts?");

/***/ })

})