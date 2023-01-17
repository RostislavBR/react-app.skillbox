import React from "react";
import styles from "./menulist.css";
import {MyList} from "../../../../../interfaces/ListInterface";
import {generateRandomString} from "../../../../../utils/react/generateRandomIndex";

const MENULIST = [
    {AS: 'li', text: 'text1', className: `${styles['menu-list-item']}`},
    {AS: 'li', text: 'text2', className: `${styles['menu-list-item']}`},
    {AS: 'li', text: 'text3', className: `${styles['menu-list-item']}`},
].map((item) => ({...item, id: generateRandomString()}));

export function MenuList() {
    const [list, setList] = React.useState(MENULIST);
    const handleItemClick = (id: string) => {
        console.log(id)
    }

    return (
        <div className={styles['menu-wrapper']}>
            <ul className={styles['menu-list']}>
                <MyList list={list.map((item) => ({
                    ...item, onClick: () => {
                        console.log(list)
                    }
                }))}
                />
            </ul>
            <button className={styles['menu-list-button']}>
                Закрыть
            </button>
        </div>
    )
        ;
}
