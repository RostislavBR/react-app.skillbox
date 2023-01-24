import React from 'react';
import styles from './main.css';
import {CardList} from "./CardList";
import {generateId} from "../../utils/react/generateRandomIndex";

const LIST = [
    {
        name: 'Константин Кодов',
        description: '8 часов назад',
        title: 'Реплицированные с зарубежных источников возможности '
    },
    {
        name: 'Ирина Зверева',
        description: '6 часов назад',
        title: 'С учётом сложившейся международной обстановки'
    },
    {
        name: 'Владимир Петров',
        description: '5 часов назад',
        title: 'Следует отметить, что новая модель организационной деятельности'
    },
].map(generateId);

export function Main() {

    return (
        <main>
            <CardList list={LIST}/>
        </main>
    );
}
