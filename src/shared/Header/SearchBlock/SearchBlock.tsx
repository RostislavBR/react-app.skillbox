import React from 'react';
import styles from './searchblock.css';
import {UserBlock} from "./UserBlock";
import {NotificationIcon} from "./NotificationIcon";

export function SearchBlock() {
    return (
        <div className={styles['search-block']}>
            <UserBlock/>
            <div className={styles['search-string-wrapper']}>
                <input type="text" className={styles['search-string']} placeholder={'Поиск'}/>
            </div>
            <NotificationIcon/>
        </div>
    );
}
