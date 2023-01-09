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
    cardList: ICardListItem[]
}

export function CardList({cardList}: ICardListProps) {
    return (
        <div className={styles['card-list']}>
            {cardList.map(({ title, description, name, id }) => (
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
