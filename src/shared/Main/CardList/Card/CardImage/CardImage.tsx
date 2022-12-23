import React from 'react';
import styles from './cardimage.css';

export function CardImage() {
    return (
        <div className={styles['card-image-wrapper']}>
            <img src="https://cdn.dribbble.com/userupload/4172959/file/original-2988a776acede70750a8cb98895324c7.png?compress=1&resize=450x338&vertical=top" alt="image" className={styles['card-image']}/>
        </div>
    );
}
