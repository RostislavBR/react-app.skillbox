import React from 'react';
import styles from './viewedcontrol.css';

export function ViewedControl() {
    return (
        <div className={styles['viewed-wrapper']}>
            <button className={styles['btn-up']}>
                <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
                </svg>

            </button>
            <span className={styles['viewed-counter']}>286</span>
            <button className={styles['btn-down']}>
                <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles['arrow-down']}>
                    <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
                </svg>
            </button>
        </div>
    );
}
