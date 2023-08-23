// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component To Client Side
'use client';

// Importing Part
import {ReactNode, useState} from "react";
import IconComponent from "@/chunks/iconComponent";

// Defining Type Of Props
interface propsType {
    title: string;
    children: ReactNode;
    noIcon?: boolean;
}

// Creating And Exporting Dropdown Component As Default
export default function DropdownComponent({title,children, noIcon}:propsType):ReactNode {
    // Defining State Of Component
    const [isOpened, setOpened] = useState(false);

    // Returning JSX
    return (
        <div>
            <button data-opened={isOpened} onClick={() => setOpened(prevState => !prevState)}>
                {
                    (!noIcon)
                        ?  <IconComponent name={title} />
                        : false
                }
                {title}
                <IconComponent name={'chevron-down'} />
            </button>
            <ul data-opened={isOpened}>
                {children}
            </ul>
        </div>
    );
}