import React from 'react';
import styles from './cardinfotitle.css';
import {Text} from "../../../../../Text";

interface ICardTitle {
    title: string
}

export function CardInfoTitle({title} : ICardTitle) {
    return (
        // <h1 className={styles['card-info-title']}>{title}</h1>
        <Text size={16} tabletSize={20} As={"h2"}>{title}</Text>
    );
}
