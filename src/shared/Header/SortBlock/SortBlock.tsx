import React from 'react';
import styles from './sortblock.css';

export function SortBlock() {
    return (
        <div className={styles['sort-block']}>
            <ul className={styles['sort-block-list']}>
                <li className={styles['sort-block-item']}>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles['svg']}>
                        <path
                            d="M6 0C3.27273 0 0.943636 1.65867 0 4C0.943636 6.34133 3.27273 8 6 8C8.72727 8 11.0564 6.34133 12 4C11.0564 1.65867 8.72727 0 6 0ZM6 6.66667C4.49455 6.66667 3.27273 5.472 3.27273 4C3.27273 2.528 4.49455 1.33333 6 1.33333C7.50545 1.33333 8.72727 2.528 8.72727 4C8.72727 5.472 7.50545 6.66667 6 6.66667ZM6 2.4C5.09455 2.4 4.36364 3.11467 4.36364 4C4.36364 4.88533 5.09455 5.6 6 5.6C6.90545 5.6 7.63636 4.88533 7.63636 4C7.63636 3.11467 6.90545 2.4 6 2.4Z"
                            fill="#CC6633"/>
                    </svg>
                    text
                </li>
                <li className={styles['sort-block-item']}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles['svg']}>
                        <path
                            d="M1 2H0V9C0 9.55 0.45 10 1 10H8V9H1V2ZM9 0H3C2.45 0 2 0.45 2 1V7C2 7.55 2.45 8 3 8H9C9.55 8 10 7.55 10 7V1C10 0.45 9.55 0 9 0ZM8.5 4.5H6.5V6.5H5.5V4.5H3.5V3.5H5.5V1.5H6.5V3.5H8.5V4.5Z"
                            fill="#CC6633"/>
                    </svg>
                    text
                </li>
                <li className={styles['sort-block-item']}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles['svg']}>
                        <path
                            d="M0 7.91696V10H2.08304L8.22664 3.85641L6.14359 1.77336L0 7.91696ZM9.83752 2.24552C10.0542 2.02888 10.0542 1.67893 9.83752 1.4623L8.5377 0.162477C8.32107 -0.0541591 7.97112 -0.0541591 7.75448 0.162477L6.73795 1.179L8.821 3.26205L9.83752 2.24552Z"
                            fill="#CC6633"/>
                    </svg>
                    text
                </li>
                <li className={styles['sort-block-item']}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles['svg']}>
                        <path
                            d="M10.8 0H1.2C0.54 0 0 0.54 0 1.2V8.4C0 9.06 0.54 9.6 1.2 9.6H9.6L12 12V1.2C12 0.54 11.46 0 10.8 0ZM9.6 7.2H2.4V6H9.6V7.2ZM9.6 5.4H2.4V4.2H9.6V5.4ZM9.6 3.6H2.4V2.4H9.6V3.6Z"
                            fill="#CC6633"/>
                    </svg>
                    text
                </li>
            </ul>
            <button type="button" className={styles.btn}>Закрыть</button>
        </div>
    );
}