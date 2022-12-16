import React from 'react';
import styles from './sortblock.css';

export function SortBlock() {
    return (
        <div className={styles['sort-block']}>
            <ul className={styles['sort-block-list']}>
                <li className={styles['sort-block-item']}>
                    text
                </li>
                <li className={styles['sort-block-item']}>
                    text
                </li>
                <li className={styles['sort-block-item']}>
                    text
                </li>
                <li className={styles['sort-block-item']}>
                    text
                </li>
            </ul>
            <button type="button" className={styles.btn}>Закрыть</button>
        </div>
    );
}