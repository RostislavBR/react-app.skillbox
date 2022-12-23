import React from 'react';
import styles from './cardcontrolbar.css';
import {ViewedControl} from "./ViewedControl";
import {CommentCounter} from "./CommentCounter";
import {OtherControls} from "./OtherControls";

export function CardControlBar() {
    return (
        <div className={styles['control-bar-wrapper']}>
            <ViewedControl/>
            <CommentCounter/>
            <OtherControls/>
        </div>
    );
}
