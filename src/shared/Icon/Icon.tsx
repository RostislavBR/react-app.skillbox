import React from 'react';
import styles from './icon.css';
import {MenuIcon} from "../Icons";

type TSizes = 12 | 14 | 16 | 18 | 20;

export enum EIcons {

}

interface IIconsProps {
    As?: 'span' | 'div' | 'li' | 'p';
    size: TSizes;
    mobileSize?: TSizes;
    tabletSize?: TSizes;
    desktopSize?: TSizes;
    icons: EIcons;
}

export function Icon() {
    return (

    );
}
