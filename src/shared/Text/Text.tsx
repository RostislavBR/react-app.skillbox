import React from 'react';
import styles from './text.css';
import classNames from 'classnames';

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

// Лучше перенести в отдельный файл!
export enum EColor {
    black = 'black',
    white = 'white',
    orange = 'orange',
    green = 'green',
    greyF3 = 'greyF3',
    greyF4 = 'greyF4',
    greyD9 = 'greyD9',
    grey99 = 'grey99',
    grey66 = 'grey66',
    greyC4 = 'greyC4',
    greyEC = 'greyEC',
}

interface ITextProps {
    As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'li';
    children?: React.ReactNode;
    size: TSizes;
    mobileSize?: TSizes;
    tabletSize?: TSizes;
    desktopSize?: TSizes;
    color?: EColor;
    bold?: boolean;
}

export function Text(props: ITextProps) {
    const {
        As = 'span',
        children,
        color = EColor.black,
        bold = false,
        size, mobileSize,
        tabletSize,
        desktopSize
    } = props;

    const classes = classNames(
        styles[`s${size}`],
        styles[color],
        {[styles.bold]: bold},
        {[styles[`m${mobileSize}`]]: mobileSize},
        {[styles[`t${tabletSize}`]]: tabletSize},
        {[styles[`d${desktopSize}`]]: desktopSize},
    );

    return (
        <As className={classes}>
            {children}
        </As>
    );
}
