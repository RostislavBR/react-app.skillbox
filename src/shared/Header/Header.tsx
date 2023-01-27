import React from 'react';
import styles from './header.css';
import {SearchBlock} from "./SearchBlock";
import {ThreadTitle} from "./ThreadTitle";
import {SortBlock} from "./SortBlock";
import {Break} from "../Break";

export function Header() {
    return (
        <header className={styles.header}>
            <SearchBlock/>
            <Break size={20} top/>
            <ThreadTitle/>
            <Break size={16} top/>
            <SortBlock/>
        </header>
    );
}