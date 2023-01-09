import React from 'react';
import styles from './cardinfo.css';
import {AuthorInfo} from "./AuthorInfo";
import {CardInfoTitle} from "./CardInfoTitle";
import  {CardParams} from  "../Card"

export function CardInfo({name, title, description} : CardParams) {

    return (
        <div className={styles['card-info']}>
            <AuthorInfo name={name} description={description}/>
            <CardInfoTitle title={title}/>
        </div>
    );
}
