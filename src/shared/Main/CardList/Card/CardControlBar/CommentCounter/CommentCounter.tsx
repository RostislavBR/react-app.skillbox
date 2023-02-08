import React from 'react';
import styles from './commentcounter.css';
import {CommentIcon} from "../../../../../Icons/CommentIcon";

export function CommentCounter() {
    return (
        <div className={styles['comment-wrapper']}>
            <button className={styles['comment-button']}>
                <CommentIcon/>
                <span className={styles['comment-counter']}>27</span>
            </button>
        </div>
    );
}
