import React from "react";

export interface IItem {
    As?: 'a' | 'li' | 'button' | 'div' | 'p';
    id: string;
    text: string;
    onClick: (id: string) => void;
    className?: string
    href?: string;
}

export interface IListInterfaceProps {
    list: IItem[];
}

const noop = () => {
};


export function MyList({list}: IListInterfaceProps) {
    return (
        <>
            {list.map(({As = 'div', text, className, onClick = noop, href, id}) => (
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