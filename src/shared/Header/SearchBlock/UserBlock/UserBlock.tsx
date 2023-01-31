import React from 'react';
import styles from './userblock.css';
import {Text} from "../../../Text";
import {Break} from "../../../Break";
import {IconAnon} from "../../../Icons/IconAnon"

interface IUserBlockProps {
    avatarSrc?: string;
    username?: string;
}

export function UserBlock({avatarSrc, username}: IUserBlockProps) {
    return (
        <a
            href="https://www.reddit.com/api/v1/authorize?client_id=rlBFor0VA0yznnqitbRGhg&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
            className={styles['user-box']}
        >
            <div className={styles['avatar-box']}>
                {avatarSrc
                    ? <img src={avatarSrc} alt="user avatar"/>
                    : <IconAnon/>
                }
            </div>
            <Break size={8} inline/>
            <div className={styles['user-name']}>
                <Break size={12}/>
                <Text size={20} bold={true}>{username || 'Аноним'}</Text>
            </div>
        </a>
    );
}
