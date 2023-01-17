import React from 'react';
import styles from './cardlist.css';
import {Card} from "./Card";

interface ICardListItem {
    id: string;
    title: string;
    description: string;
    name: string;
    image?: string;
    className?: string;
}

interface ICardListProps {
    list: ICardListItem[]
}

export function CardList({list}: ICardListProps) {
    return (
        <div className={styles['card-list']}>
            {list.map(({ title, description, name, id }) => (
                <Card
                    title={title}
                    description={description}
                    name={name}
                    key={id}
                />
            ))}
        </div>
    );
}
