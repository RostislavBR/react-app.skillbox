// import React from "react";
// import {getValue} from "./utils/react/pickFromSyntheticEvent";
// //
// // window.addEventListener('resize', () => {
// // });
// //
// // function addEventListenerWithDispose(element, name, handler) {
// //     element.addEventListener(name, handler);
// //     return () => element.removeEventListener(name, handler)
// // }
// //
// // const dispose = addEventListenerWithDispose(window, 'resize', () => {
// //     console.log('resize');
// //     dispose();
// // });
// //
// // const withIdKey = withKey('id');
// //
// // function Feed(props: { blocks: IBlockProps[] }) {
// //     return (
// //         <div>
// //             {props.blocks.map(withIdKey(Block))}
// //         </div>
// //     )
// // }
// //
// // interface IBlockProps {
// //     title: string,
// //     id: string,
// // }
// //
// // function Block(props: IBlockProps) {
// //     return (
// //         <div>{props.title}</div>
// //     )
// // }
// //
// // function withKey(key?: string) {
// //     return <E, T extends React.ComponentType<E>>(component: T) => {
// //         return (props: E, index: number) => {
// //             return React.createElement(
// //                 component,
// //                 { ...props, key: key ? props[key as keyof E] : index},
// //                 []
// //             );
// //         };
// //     }
// // }
// function  Input({ onChange, value }: { onChange: (value: string) => void, value: string }) {
//     return (
//         <input value={value} onChange={getValue(onChange)}/>
//     )
// }
//
// function pickFromSyntheticEvent<T extends HTMLElement>() {
//     return <K extends keyof T>(key: K) =>
//         <E extends ((t: T[K]) => void)>(fn: E) =>
//             (e: React.SyntheticEvent<T>) =>
//                 fn(e.currentTarget[key]);
// }
//
// export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');
//
// // function NotStandardLink(props: any) {
// //     return (
// //         <a onClick={preventDefault(stopPropagation(props.onClick))}></a>
// //     )
// // }
//
//
//
