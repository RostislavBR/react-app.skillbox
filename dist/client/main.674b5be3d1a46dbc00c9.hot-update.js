webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".sortblock__sort-block--_fGva {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    background-color: var(--white);\\r\\n    border-radius: 7px;\\r\\n}\\r\\n\\r\\n.sortblock__sort-block-list--1dKYk {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.sortblock__sort-block-item--1JVOz,\\r\\n.sortblock__sort-block-item--default--3MMCp{\\r\\n    display: block;\\r\\n    position: relative;\\r\\n    font-size: 12px;\\r\\n    font-weight: 400;\\r\\n    line-height: 14px;\\r\\n    color: var(--grey99);\\r\\n    border-bottom: 1px solid var(--greyEC);\\r\\n    padding: 10px 20px;\\r\\n}\\r\\n\\r\\n.sortblock__sort-block-item--1JVOz:last-child {\\r\\n    border: none;\\r\\n    /*padding-bottom: 0;*/\\r\\n}\\r\\n\\r\\n.sortblock__svg--1fmeL {\\r\\n    margin: 0 8px 0 0;\\r\\n}\\r\\n\\r\\n.sortblock__btn--3Dy7e {\\r\\n    width: 100%;\\r\\n    display: block;\\r\\n    padding: 11px;\\r\\n    text-align: center;\\r\\n    font-size: 12px;\\r\\n    font-weight: 400;\\r\\n    line-height: 14px;\\r\\n    color: var(--grey66);\\r\\n    background-color: var(--greyD9);\\r\\n    border: none;\\r\\n    border-radius: 0px 0px 3px 3px;\\r\\n    cursor: pointer;\\r\\n    outline: 1px black;\\r\\n}\\r\\n\\r\\n@media all and (min-width: 1024px) {\\r\\n    .sortblock__sort-block--_fGva {\\r\\n        flex-direction: row;\\r\\n        width: 412px;\\r\\n        position: absolute;\\r\\n        top: 121px;\\r\\n        right: 491px;\\r\\n        background-color: transparent;\\r\\n        padding: 0;\\r\\n        margin: 0;\\r\\n        border-radius: 0;\\r\\n    }\\r\\n\\r\\n    .sortblock__sort-block-list--1dKYk {\\r\\n        flex-direction: row;\\r\\n        margin: 0;\\r\\n        padding: 0;\\r\\n    }\\r\\n\\r\\n    .sortblock__sort-block-item--1JVOz {\\r\\n        font-weight: 400;\\r\\n        font-size: 20px;\\r\\n        line-height: 23px;\\r\\n        color: var(--black);\\r\\n        white-space: nowrap;\\r\\n        padding: 0 0 13px 60px;\\r\\n        border-bottom: 2px solid var(--greyEC);\\r\\n    }\\r\\n\\r\\n    .sortblock__sort-block-item--1JVOz:first-child {\\r\\n        padding-left: 0;\\r\\n    }\\r\\n\\r\\n    .sortblock__sort-block-item--1JVOz:last-child {\\r\\n        padding-left: 63px;\\r\\n        border-bottom: 2px solid var(--greyEC);\\r\\n    }\\r\\n\\r\\n    .sortblock__svg--1fmeL {\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .sortblock__btn--3Dy7e {\\r\\n        display: none;\\r\\n    }\\r\\n}\\r\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"sort-block\": \"sortblock__sort-block--_fGva\",\n\t\"sort-block-list\": \"sortblock__sort-block-list--1dKYk\",\n\t\"sort-block-item\": \"sortblock__sort-block-item--1JVOz\",\n\t\"sort-block-item--default\": \"sortblock__sort-block-item--default--3MMCp\",\n\t\"svg\": \"sortblock__svg--1fmeL\",\n\t\"btn\": \"sortblock__btn--3Dy7e\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBlock = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/Header/SortBlock/sortblock.css\"));\r\nconst ListInterface_1 = __webpack_require__(/*! ../../../interfaces/ListInterface */ \"./src/interfaces/ListInterface.tsx\");\r\nconst generateRandomIndex_1 = __webpack_require__(/*! ../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nconst merge_1 = __webpack_require__(/*! ../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nconst DropDown_1 = __webpack_require__(/*! ../../DropDown */ \"./src/shared/DropDown/index.ts\");\r\nconst SORTLIST = [\r\n    { AS: 'li', text: 'Просмотренное', className: `${sortblock_css_1.default['sort-block-item']}` },\r\n    { AS: 'li', text: 'Сохраннённое', className: `${sortblock_css_1.default['sort-block-item']}` },\r\n    { AS: 'li', text: 'Мои посты', className: `${sortblock_css_1.default['sort-block-item']}` },\r\n    { AS: 'li', text: 'Прокомментированное', className: `${sortblock_css_1.default['sort-block-item']}` },\r\n].map((item) => (Object.assign(Object.assign({}, item), { id: (0, generateRandomIndex_1.generateRandomString)() })));\r\nfunction pipe(...fns) {\r\n    return (initialValue) => fns.reduce((previousValue, fn) => fn(previousValue), initialValue);\r\n}\r\nfunction pick(prop) {\r\n    return (obj) => obj[prop];\r\n}\r\nfunction isEqual(left) {\r\n    return (right) => left === right;\r\n}\r\nfunction cond(b) {\r\n    return !b;\r\n}\r\nfunction SortBlock({ value }) {\r\n    const [list, setList] = react_1.default.useState(SORTLIST);\r\n    const content = list.map((item) => item.text);\r\n    const handleItemClick = (id) => {\r\n        list.filter((item) => item.id === id);\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: sortblock_css_1.default['sort-block'] },\r\n        react_1.default.createElement(DropDown_1.DropDown, { button: react_1.default.createElement(\"button\", null, \"2\") },\r\n            react_1.default.createElement(\"ul\", { className: sortblock_css_1.default['sort-block-list'] },\r\n                react_1.default.createElement(ListInterface_1.MyList, { list: list.map(((0, merge_1.merge)({ onClick: handleItemClick }))) }),\r\n                react_1.default.createElement(\"button\", { type: \"button\", className: sortblock_css_1.default.btn }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")))));\r\n}\r\nexports.SortBlock = SortBlock;\r\n// <li className={styles['sort-block-item']}>\r\n//     <svg width=\"12\" height=\"8\" viewBox=\"0 0 12 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"\r\n//          className={styles['svg']}>\r\n//         <path\r\n//             d=\"M6 0C3.27273 0 0.943636 1.65867 0 4C0.943636 6.34133 3.27273 8 6 8C8.72727 8 11.0564 6.34133 12 4C11.0564 1.65867 8.72727 0 6 0ZM6 6.66667C4.49455 6.66667 3.27273 5.472 3.27273 4C3.27273 2.528 4.49455 1.33333 6 1.33333C7.50545 1.33333 8.72727 2.528 8.72727 4C8.72727 5.472 7.50545 6.66667 6 6.66667ZM6 2.4C5.09455 2.4 4.36364 3.11467 4.36364 4C4.36364 4.88533 5.09455 5.6 6 5.6C6.90545 5.6 7.63636 4.88533 7.63636 4C7.63636 3.11467 6.90545 2.4 6 2.4Z\"\r\n//             fill=\"#CC6633\"/>\r\n//     </svg>\r\n//     <span className={styles['sort-text']}>{text}</span>\r\n// </li>\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./sortblock.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/SortBlock/sortblock.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./sortblock.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/SortBlock/sortblock.css\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./sortblock.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/SortBlock/sortblock.css\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.css?");

/***/ }),

/***/ "./src/utils/js/merge.ts":
/*!*******************************!*\
  !*** ./src/utils/js/merge.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.merge = void 0;\r\nfunction merge(obj) {\r\n    return (obj2) => (Object.assign(Object.assign({}, obj), obj2));\r\n}\r\nexports.merge = merge;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/merge.ts?");

/***/ })

})