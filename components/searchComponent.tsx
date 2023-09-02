// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component To Client Side
'use client';

// Importing Part
import Link from "next/link";
import {ReactNode, useState} from "react";
import IconComponent from "@/chunks/iconComponent";

// Creating And Exporting Search Component As Default
export default function SearchComponent():ReactNode {
    // Defining State Of Component
    const [isInputFocused, setInputFocused] = useState(false);

    // Returning JSX
    return (
        <div className={'relative'}>
            <form className={'bg-dropdownBg/30 w-full shadow-lg rounded-[7px] flex items-center gap-[20px] p-[12px]'} action={'#'}>
                <label htmlFor={"search-input"}>
                    <IconComponent name={'search'} className={'text-dropdownBg'} />
                </label>
                <input onFocus={() => setInputFocused(true)} onBlur={() => setInputFocused(false)} autoComplete={'off'} className={'bg-transparent placeholder:text-dropdownBg placeholder:text-[20px] text-[20px] text-white placeholder:font-bold w-full outline-0'} required type="search" id={'search-input'} placeholder={'Search CodePen...'} />
            </form>
            <div data-opened={isInputFocused} className={'absolute flex gap-[20px] top-[110%] rounded-[10px] left-0 shadow-lg p-[10px] w-full overflow-x-auto bg-mainBg transition-all duration-500 data-[opened="true"]:visible data-[opened="true"]:opacity-100 data-[opened="true"]:translate-y-0 data-[opened="false"]:invisible data-[opened="false"]:opacity-0 data-[opened="false"]:translate-y-[-20px]'}>
                <Link href={'/your-work'} className={'block shrink-0'}>
                    <button className={'flex gap-[10px] bg-dropdownBg/30 items-center px-[10px] py-[5px] rounded-[3px] hover:bg-dropdownBg transition-all [&>*]:hover:text-white'} tabIndex={-1}>
                        <IconComponent name={'person'} className={'text-dropdownBg/90 transition-all'} />
                        <span className={'text-[16px] whitespace-nowrap font-normal text-dropdownBg/90 transition-all'}>Your Work</span>
                    </button>
                </Link>
                <Link href={'/search/pens'} className={'block shrink-0'}>
                    <button className={'flex gap-[10px] bg-dropdownBg items-center px-[10px] py-[5px] rounded-[3px]'} tabIndex={-1}>
                        <IconComponent name={'pen'} className={'text-blue'} />
                        <span className={'text-[16px] whitespace-nowrap text-white font-normal'}>Pens</span>
                    </button>
                </Link>
                <Link href={'/search/projects'} className={'block shrink-0'}>
                    <button className={'flex gap-[10px] bg-dropdownBg/30 items-center px-[10px] py-[5px] rounded-[3px] hover:bg-dropdownBg transition-all [&>*]:hover:text-white'} tabIndex={-1}>
                        <IconComponent name={'project'} className={'text-dropdownBg/90 transition-all'} />
                        <span className={'text-[16px] whitespace-nowrap font-normal text-dropdownBg/90 transition-all'}>Projects</span>
                    </button>
                </Link>
                <Link href={'/search/collections'} className={'block shrink-0'}>
                    <button className={'flex gap-[10px] bg-dropdownBg/30 items-center px-[10px] py-[5px] rounded-[3px] hover:bg-dropdownBg transition-all [&>*]:hover:text-white'} tabIndex={-1}>
                        <IconComponent name={'collection'} className={'text-dropdownBg/90 transition-all'} />
                        <span className={'text-[16px] whitespace-nowrap font-normal text-dropdownBg/90 transition-all'}>Collections</span>
                    </button>
                </Link>
            </div>
        </div>
    );
}