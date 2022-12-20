import React from 'react';
import styles from './cardinfo.css';
import {AuthorInfo} from "./AuthorInfo";
import {CardInfoTitle} from "./CardInfoTitle";

export function CardInfo() {
    return (
        <div className={styles['card-info']}>
            <AuthorInfo/>
            <CardInfoTitle/>
        </div>
    );
}
