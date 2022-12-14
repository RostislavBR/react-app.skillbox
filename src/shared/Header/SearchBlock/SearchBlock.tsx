import React from 'react';
import styles from './searchblock.css';

export function SearchBlock() {
    return (
        <div className={styles['search-block']}>
            <div className={styles['logo-wrapper']}>
                <svg width="56px" height="56px" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" className={styles['logo-svg']}>
                    <path
                        d="M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 27.9999 26.6875 C 24.7421 26.6640 22.1640 23.9453 22.1640 20.3125 C 22.1640 16.9140 24.7421 14.0781 27.9999 14.0781 C 31.2343 14.0781 33.8124 16.9140 33.8124 20.3125 C 33.8124 23.9453 31.2343 26.7344 27.9999 26.6875 Z M 17.6171 39.7422 C 16.7030 39.7422 16.2577 39.1328 16.2577 38.3125 C 16.2577 35.8047 20.0312 29.3594 27.9999 29.3594 C 35.9687 29.3594 39.7187 35.8047 39.7187 38.3125 C 39.7187 39.1328 39.2733 39.7422 38.3827 39.7422 Z"/>
                </svg>
                <h2 className={styles['person-name']}>Константин</h2>
            </div>
            <div className={styles['search-string-wrapper']}>
                <input type="text" className={styles['search-string']} placeholder={'Поиск'}/>
            </div>
            <div className={styles['notifications-wrapper']}>
                <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles['notification-svg']}>
                    <path d="M11.7235 0.276367H1.51072C0.808598 0.276367 0.240514 0.850834 0.240514 1.55296L0.234131 9.21252C0.234131 9.91465 0.808598 10.4891 1.51072 10.4891H11.7235C12.4256 10.4891 13.0001 9.91465 13.0001 9.21252V1.55296C13.0001 0.850834 12.4256 0.276367 11.7235 0.276367ZM11.7235 2.82955L6.6171 6.02104L1.51072 2.82955V1.55296L6.6171 4.74444L11.7235 1.55296V2.82955Z" fill="#D9D9D9"/>
                </svg>
            </div>
        </div>
    );
}
