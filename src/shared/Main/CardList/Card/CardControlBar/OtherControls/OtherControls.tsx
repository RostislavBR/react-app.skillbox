import React from 'react';
import styles from './othercontrols.css';
import {ShareIcon} from "../../../../../Icons/ShareIcon";
import {SavedIcon} from "../../../../../Icons/SavedIcon";

export function OtherControls() {
    return (
        <div className={styles['other-controls-wrapper']}>
            <button className={styles['share-button']}>
                <ShareIcon/>
            </button>
            <button className={styles['saved-button']}>
                <SavedIcon/>
            </button>
        </div>
    );
}
