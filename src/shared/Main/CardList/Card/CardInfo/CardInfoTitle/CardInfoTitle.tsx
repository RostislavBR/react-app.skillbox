import React from 'react';
import styles from './cardinfotitle.css';

interface ICardTitle {
    title: string
}

export function CardInfoTitle({title} : ICardTitle) {
    return (
        <h1 className={styles['card-info-title']}>{title}</h1>
    );
}
