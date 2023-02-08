import React from 'react';
import styles from './menubutton.css';
import {MenuIcon} from "../../../../Icons";

export function MenuButton() {
  return (
      <button className={styles['menu-button']}>
          <MenuIcon/>
      </button>
  );
}
