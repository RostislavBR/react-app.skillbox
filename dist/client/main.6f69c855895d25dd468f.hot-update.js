webpackHotUpdate("main",{

/***/ "./src/interfaces/ListInterface.tsx":
/*!******************************************!*\
  !*** ./src/interfaces/ListInterface.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (10:151)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n| const noop = () => { };\\n| function MyList({ list }) {\\n>     return (react_1.default.createElement(react_1.default.Fragment, null, list.map(({ As = 'div', text, className, onClick = noop, href, id, default:  }) => (react_1.default.createElement(As, { className: className, onClick: () => onClick(id), key: id, href: href }, text)))));\\n| }\\n| exports.MyList = MyList;\");\n\n//# sourceURL=webpack:///./src/interfaces/ListInterface.tsx?");

/***/ }),

/***/ "./src/shared/Main/CardList/Card/MenuList/MenuList.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/Main/CardList/Card/MenuList/MenuList.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuList = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst menulist_css_1 = __importDefault(__webpack_require__(/*! ./menulist.css */ \"./src/shared/Main/CardList/Card/MenuList/menulist.css\"));\r\nconst ListInterface_1 = __webpack_require__(/*! ../../../../../interfaces/ListInterface */ \"./src/interfaces/ListInterface.tsx\");\r\nconst generateRandomIndex_1 = __webpack_require__(/*! ../../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nconst MENULIST = [\r\n    { AS: 'li', text: 'text1', className: `${menulist_css_1.default['menu-list-item']}` },\r\n    { AS: 'li', text: 'text2', className: `${menulist_css_1.default['menu-list-item']}` },\r\n    { AS: 'li', text: 'text3', className: `${menulist_css_1.default['menu-list-item']}` },\r\n].map((item) => (Object.assign(Object.assign({}, item), { id: (0, generateRandomIndex_1.generateRandomString)() })));\r\nfunction MenuList() {\r\n    const [list, setList] = react_1.default.useState(MENULIST);\r\n    const handleItemClick = (id) => {\r\n        console.log(id);\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: menulist_css_1.default['menu-wrapper'] },\r\n        react_1.default.createElement(\"ul\", { className: menulist_css_1.default['menu-list'] },\r\n            react_1.default.createElement(ListInterface_1.MyList, { list: list.map((item) => (Object.assign(Object.assign({}, item), { onClick: () => {\r\n                        console.log(list);\r\n                    } }))) })),\r\n        react_1.default.createElement(\"button\", { className: menulist_css_1.default['menu-list-button'] }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")));\r\n}\r\nexports.MenuList = MenuList;\r\n\n\n//# sourceURL=webpack:///./src/shared/Main/CardList/Card/MenuList/MenuList.tsx?");

/***/ })

})