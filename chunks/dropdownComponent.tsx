// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component To Client Side
'use client';

// Importing Part
import Link from 'next/link';
import {ReactNode, useState} from "react";
import IconComponent from "@/chunks/iconComponent";

// Defining Type Of Props
interface propsType {
    title: string;
    children: ReactNode;
    noIcon?: boolean;
    selfLink?: string;
}

// Creating And Exporting Dropdown Component As Default
export default function DropdownComponent({title,children, noIcon, selfLink}:propsType):ReactNode {
    // Defining State Of Component
    const [isOpened, setOpened] = useState(false);

    // Conditional Rendering
    if (!selfLink) {
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
                {(isOpened) ? <ul>{children}</ul> : false}
            </div>
        );
    } else {
        return (
            <div>
                <div className={'bg-dropdownBg/30 transition-all hover:bg-mainBg flex w-full'}>
                    <Link className={'w-full'} href={selfLink}>
                        <button tabIndex={-1} className={'p-[10px] flex gap-[10px]'}>
                            {
                                (!noIcon)
                                    ?  <IconComponent className={'shrink-0 text-dropdownBg'} name={title.toLowerCase()} />
                                    : false
                            }
                            <span className={'truncate text-[14px] text-start font-normal text-white'}>{title}</span>
                        </button>
                    </Link>
                    <button data-opened={isOpened} onClick={() => setOpened(prevState => !prevState)} className={'[&>svg]:data-[opened="true"]:rotate-180 w-[50px] flex justify-center items-center'}>
                        <IconComponent name={'chevron-down'} className={'transition-all text-white'} />
                    </button>
                </div>
                {(isOpened) ? <ul>{children}</ul> : false}
            </div>
        );
    }
}