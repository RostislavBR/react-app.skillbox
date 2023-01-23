webpackHotUpdate("main",{

/***/ "./src/shared/Main/CardList/Card/MenuList/MenuList.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/Main/CardList/Card/MenuList/MenuList.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuList = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst menulist_css_1 = __importDefault(__webpack_require__(/*! ./menulist.css */ \"./src/shared/Main/CardList/Card/MenuList/menulist.css\"));\r\nconst ListInterface_1 = __webpack_require__(/*! ../../../../../interfaces/ListInterface */ \"./src/interfaces/ListInterface.tsx\");\r\nconst generateRandomIndex_1 = __webpack_require__(/*! ../../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nconst MENULIST = [\r\n    { AS: 'li', text: 'text1', className: `${menulist_css_1.default['menu-list-item']}` },\r\n    { AS: 'li', text: 'text2', className: `${menulist_css_1.default['menu-list-item']}` },\r\n    { AS: 'li', text: 'text3', className: `${menulist_css_1.default['menu-list-item']}` },\r\n].map((item) => (Object.assign(Object.assign({}, item), { id: (0, generateRandomIndex_1.generateRandomString)() })));\r\nfunction MenuList() {\r\n    const [list, setList] = react_1.default.useState(MENULIST);\r\n    const handleItemClick = (id) => {\r\n        console.log(id);\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: menulist_css_1.default['menu-wrapper'] },\r\n        react_1.default.createElement(\"ul\", { className: menulist_css_1.default['menu-list'] },\r\n            react_1.default.createElement(ListInterface_1.MyList, { list: list.map((item) => (Object.assign(Object.assign({}, item), { onClick: () => {\r\n                        console.log(list);\r\n                    } }))) })),\r\n        react_1.default.createElement(\"button\", { className: menulist_css_1.default['menu-list-button'] }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")));\r\n}\r\nexports.MenuList = MenuList;\r\n\n\n//# sourceURL=webpack:///./src/shared/Main/CardList/Card/MenuList/MenuList.tsx?");

/***/ }),

/***/ "./src/shared/Main/CardList/Card/MenuList/index.ts":
/*!*********************************************************!*\
  !*** ./src/shared/Main/CardList/Card/MenuList/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuList */ \"./src/shared/Main/CardList/Card/MenuList/MenuList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Main/CardList/Card/MenuList/index.ts?");

/***/ })

})