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
            <button data-opened={isOpened} onClick={() => setOpened(prevState => !prevState)}
                    className={'bg-dropdownBg/30 transition-all hover:bg-mainBg p-[10px] flex items-center w-full gap-[15px] [&>div:last-of-type]:data-[opened="true"]:rotate-180'}
            >
                <div className={'flex gap-[10px] items-center justify-start w-[80%]'}>
                    {
                        (!noIcon)
                            ?  <IconComponent className={'shrink-0 text-dropdownBg'} name={title.toLowerCase()} />
                            : false
                    }
                    <span className={'truncate text-[14px] text-start font-normal text-white'}>{title}</span>
                </div>
                <div className={'w-[20%] flex items-center justify-center transition-all'}>
                    <IconComponent name={'chevron-down'} className={'text-white shrink-0'} />
                </div>
            </button>
            <ul data-opened={isOpened} className={'data-[opened="true"]:h-auto data-[opened="false"]:h-0 transition-all data-[opened="true"]:visible data-[opened="false"]:invisible data-[opened="true"]:overflow-auto data-[opened="false"]:overflow-hidden'}>
                {children}
            </ul>
        </div>
    );
}