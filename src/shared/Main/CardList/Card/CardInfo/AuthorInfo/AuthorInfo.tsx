import React from 'react';
import styles from './authorinfo.css';
import {EColor, Text} from "../../../../../Text";
import {Break} from "../../../../../Break";
import {IconAnon} from "../../../../../Icons/IconAnon";

interface IAuthorInfo {
    name: string;
    description: string;
    avatarSrc?: string;
}

export function AuthorInfo({name, description, avatarSrc} : IAuthorInfo) {
    return (
        <div className={styles['author-wrapper']}>
            <div className={styles['logo-wrapper']}>
                {avatarSrc
                    ? <img src={avatarSrc} alt="user avatar"/>
                    : <IconAnon/>
                }
            </div>
            <Text size={10} color={EColor.orange}>{name}</Text>
            <Break size={4}/>
            <Text size={10} color={EColor.grey99}>
                <span className={styles['post-label']}>опубликовано</span>
                {/*<Text size={10} color={EColor.grey99}>опубликовано</Text>*/}
                {description}
            </Text>
        </div>
    );
}
