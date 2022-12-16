import React from 'react';
import styles from './searchblock.css';

export function SearchBlock() {
  return (
      <div className={styles['search-block']}>
        <div className={styles['logo-wrapper']}/>
        <div className={styles['search-string-wrapper']}>
          <input type="text" className={styles['search-string']}/>
        </div>
        <div className={styles['notifications-wrapper']}/>
      </div>
  );
}
