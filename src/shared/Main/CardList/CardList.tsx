import React from 'react';
import styles from './cardlist.css';
import {Card} from "./Card";

export function CardList() {
    return (
        <div className={styles['card-list']}>
            <Card/>
        </div>
    );
}
