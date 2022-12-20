import React from 'react';
import styles from './cardcontrolbar.css';
import {ViewedControl} from "./ViewedControl";
import {MessageCounter} from "./MessageCounter";
import {OtherControls} from "./OtherControls";

export function CardControlBar() {
    return (
        <div className={styles['control-bar-wrapper']}>
            <ViewedControl/>
            <MessageCounter/>
            <OtherControls/>
        </div>
    );
}
