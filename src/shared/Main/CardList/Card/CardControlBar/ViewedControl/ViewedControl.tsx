import React, {useState} from 'react';
import styles from './viewedcontrol.css';

interface IViewedCounter {
    str: string
    count: number,
}

export function ViewedControl() {
    const [count, setCount] = useState(0)
    const handleClick = (type: string): void => {
        switch (type) {
            case "increment":
                setCount((prevCount) => prevCount + 1)
                break
            case "decrement":
                setCount((prevCount) => prevCount > 0 ? prevCount - 1 : prevCount)
        }
    }

    return (
        <div className={styles['viewed-wrapper']}>
            <button className={styles['btn-up']} onClick={() => handleClick('increment')}>
                <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
                </svg>
            </button>
            <span className={styles['viewed-counter']}>{count}</span>
            <button className={styles['btn-down']} onClick={() => handleClick('decrement')}>
                <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                     className={styles['arrow-down']}>
                    <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
                </svg>
            </button>
        </div>
    );
}
