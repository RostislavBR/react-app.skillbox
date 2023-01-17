import React, {useRef} from 'react';
import styles from './sortblock.css';
import {MyList} from "../../../interfaces/ListInterface";
import {generateRandomString} from "../../../utils/react/generateRandomIndex";
import {merge} from '../../../utils/js/merge';
import {DropDown} from "../../DropDown";

const SORTLIST = [
    {AS: 'li', text: 'Просмотренное', className: `${styles['sort-block-item']}`},
    {AS: 'li', text: 'Сохраннённое', className: `${styles['sort-block-item']}`},
    {AS: 'li', text: 'Мои посты', className: `${styles['sort-block-item']}`},
    {AS: 'li', text: 'Прокомментированное', className: `${styles['sort-block-item']}`},
].map((item) => ({...item, id: generateRandomString()}));

function pipe<U>(...fns: Function[]) {
    return <E, >(initialValue: any): U =>
        fns.reduce((previousValue, fn) => fn(previousValue), initialValue)
}

function pick<K extends string>(prop: K) {
    return <O extends Record<K, any>>(obj: O) => obj[prop]
}

function isEqual<T>(left: T) {
    return <E extends T>(right: E) => left === right;
}

function cond(b: boolean) {
    return !b;
}

export function SortBlock() {
    const [defaultItem, setDefaultItem] = React.useState('Просмотренное')
    const [list, setList] = React.useState(SORTLIST);
    // const createFilterBy = (prop: string) => (id: string) => pipe(pick(prop), isEqual(id), cond)
    // const filterWithId = createFilterBy('id')
    const handleItemClick = (id: string) => {
        // list.filter((item) => item.id === id ? setDefaultItem(item.text) : item);
        // const filteredCards = list.filter(filterWithId(id))
        console.log(id);
    }

    return (
        <div className={styles['sort-block']}>
            <DropDown button={<div className={styles['sort-block-item']}>{defaultItem}</div>}>
                <ul className={styles['sort-block-list']}>
                    <MyList list={list.map((merge({onClick: handleItemClick})))}/>
                    <button type="button" className={styles.btn}>Закрыть</button>
                </ul>
            </DropDown>
        </div>
    );
}
