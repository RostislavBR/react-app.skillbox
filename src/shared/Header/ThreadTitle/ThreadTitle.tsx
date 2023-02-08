import React from 'react';
import styles from './threadtitle.css';
import {Text} from "../../Text";
import {Break} from "../../Break";

export function ThreadTitle() {
    return (
        // <h1 className={styles['thread-title']}>Личный кабинет</h1>
        <Text size={20} mobileSize={20} tabletSize={28} As={'h1'}>Личный кабинет</Text>
    );
}
