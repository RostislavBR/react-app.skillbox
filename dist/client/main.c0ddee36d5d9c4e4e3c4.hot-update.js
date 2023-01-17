webpackHotUpdate("main",{

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBlock = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/Header/SortBlock/sortblock.css\"));\r\nconst ListInterface_1 = __webpack_require__(/*! ../../../interfaces/ListInterface */ \"./src/interfaces/ListInterface.tsx\");\r\nconst generateRandomIndex_1 = __webpack_require__(/*! ../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nconst merge_1 = __webpack_require__(/*! ../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nconst DropDown_1 = __webpack_require__(/*! ../../DropDown */ \"./src/shared/DropDown/index.ts\");\r\nconst SORTLIST = [\r\n    { AS: 'li', text: 'Просмотренное', className: `${sortblock_css_1.default['sort-block-item']}` },\r\n    { AS: 'li', text: 'Сохраннённое', className: `${sortblock_css_1.default['sort-block-item']}` },\r\n    { AS: 'li', text: 'Мои посты', className: `${sortblock_css_1.default['sort-block-item']}` },\r\n    { AS: 'li', text: 'Прокомментированное', className: `${sortblock_css_1.default['sort-block-item']}` },\r\n].map((item) => (Object.assign(Object.assign({}, item), { id: (0, generateRandomIndex_1.generateRandomString)() })));\r\nfunction pipe(...fns) {\r\n    return (initialValue) => fns.reduce((previousValue, fn) => fn(previousValue), initialValue);\r\n}\r\nfunction pick(prop) {\r\n    return (obj) => obj[prop];\r\n}\r\nfunction isEqual(left) {\r\n    return (right) => left === right;\r\n}\r\nfunction cond(b) {\r\n    return !b;\r\n}\r\nfunction SortBlock() {\r\n    const [defaultItem, setDefaultItem] = react_1.default.useState('Просмотренное');\r\n    const [list, setList] = react_1.default.useState(SORTLIST);\r\n    const content = list.map((item) => item.text);\r\n    const handleItemClick = (id) => {\r\n        list.filter((item) => item.id === id ? setDefaultItem(item.text) : item);\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: sortblock_css_1.default['sort-block'] },\r\n        react_1.default.createElement(DropDown_1.DropDown, { button: react_1.default.createElement(\"div\", { className: sortblock_css_1.default['sort-block-item'] }, defaultItem) },\r\n            react_1.default.createElement(\"ul\", { className: sortblock_css_1.default['sort-block-list'] },\r\n                react_1.default.createElement(ListInterface_1.MyList, { list: list.map(((0, merge_1.merge)({ onClick: handleItemClick }))) }),\r\n                react_1.default.createElement(\"button\", { type: \"button\", className: sortblock_css_1.default.btn }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")))));\r\n}\r\nexports.SortBlock = SortBlock;\r\n// <li className={styles['sort-block-item']}>\r\n//     <svg width=\"12\" height=\"8\" viewBox=\"0 0 12 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"\r\n//          className={styles['svg']}>\r\n//         <path\r\n//             d=\"M6 0C3.27273 0 0.943636 1.65867 0 4C0.943636 6.34133 3.27273 8 6 8C8.72727 8 11.0564 6.34133 12 4C11.0564 1.65867 8.72727 0 6 0ZM6 6.66667C4.49455 6.66667 3.27273 5.472 3.27273 4C3.27273 2.528 4.49455 1.33333 6 1.33333C7.50545 1.33333 8.72727 2.528 8.72727 4C8.72727 5.472 7.50545 6.66667 6 6.66667ZM6 2.4C5.09455 2.4 4.36364 3.11467 4.36364 4C4.36364 4.88533 5.09455 5.6 6 5.6C6.90545 5.6 7.63636 4.88533 7.63636 4C7.63636 3.11467 6.90545 2.4 6 2.4Z\"\r\n//             fill=\"#CC6633\"/>\r\n//     </svg>\r\n//     <span className={styles['sort-text']}>{text}</span>\r\n// </li>\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/index.ts?");

/***/ })

})