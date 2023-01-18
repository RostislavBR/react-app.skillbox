import React, {useContext, useState} from 'react';
import styles from './card.css';
import {CardInfo} from "./CardInfo";
import {CardImage} from "./CardImage";
import {CardControlBar} from "./CardControlBar";
import {MenuButton} from "./MenuButton";
import {MenuList} from "./MenuList";
import {DropDown} from "../../../DropDown";

export interface CardParams {
    name: string
    title: string,
    description: string,
}

export function Card({name, title, description}: CardParams) {
    return (
        <div className={styles['card-wrapper']}>
            <CardInfo
                name={name}
                title={title}
                description={description}
            />
            <CardImage/>
            <DropDown button={<MenuButton/>}>
                <MenuList/>
            </DropDown>
            <CardControlBar/>
        </div>
    );
}
