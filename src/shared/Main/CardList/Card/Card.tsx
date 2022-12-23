import React from 'react';
import styles from './card.css';
import {CardInfo} from "./CardInfo";
import {CardImage} from "./CardImage";
import {CardControlBar} from "./CardControlBar";
import {MenuButton} from "./MenuButton";

export function Card() {
    return (
        <div className={styles['card-wrapper']}>
            <CardInfo/>
            <CardImage/>
            <MenuButton/>
            <CardControlBar/>
        </div>
    );
}
