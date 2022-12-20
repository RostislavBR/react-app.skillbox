import React from 'react';
import styles from './card.css';
import {CardInfo} from "./CardInfo";
import {CardImage} from "./CardImage";
import {CardControlBar} from "./CardControlBar";

export function Card() {
    return (
        <div className={styles['card-wrapper']}>
            <CardInfo/>
            <CardImage/>
            <CardControlBar/>
        </div>
    );
}
