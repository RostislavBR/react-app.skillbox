import React from "react";

export interface IItem {
    id: string;
    text: string;
    onClick: (id: string) => void;
    className?: string
    As?: 'a' | 'li' | 'button' | 'div';
    href?: string;
}

export interface IListInterfaceProps {
    list: IItem[];
}

export function MyList({list}: IListInterfaceProps) {
    return (
        <>
            {list.map(({ As = 'li', text, className, onClick, href, id}) => (
                <As
                    className={className}
                    onClick={() => onClick(id)}
                    key={id}
                    href={href}
                >
                    {text}
                </As>
            ))}
        </>
    )
}