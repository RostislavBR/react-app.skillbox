webpackHotUpdate("main",{

/***/ "./src/interfaces/ListInterface.tsx":
/*!******************************************!*\
  !*** ./src/interfaces/ListInterface.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MyList = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst noop = () => {\r\n};\r\nfunction MyList({ list }) {\r\n    return (react_1.default.createElement(react_1.default.Fragment, null, list.map(({ As = 'div', text, className, onClick = noop, href, id }) => (react_1.default.createElement(As, { className: className, onClick: () => onClick(id), key: id, href: href }, text)))));\r\n}\r\nexports.MyList = MyList;\r\n\n\n//# sourceURL=webpack:///./src/interfaces/ListInterface.tsx?");

/***/ })

})