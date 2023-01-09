import React from "react";

interface IItem {
    id: string;
    text: string;
    className?: string
    onClick?: (id: string) => void;
    As?: 'a' | 'li' | 'button' | 'div';
    href?: string;
}

interface IListInterfaceProps {
    list: IItem[];
}

export function MyList({list}: IListInterfaceProps) {
    return (
        <>
            {list.map(({ As = 'div', text, className, onClick, href, id}) => (
                <As
                    className={className}
                    key={id}
                    href={href}
                >
                    {text}
                </As>
            ))}
        </>
    )
}