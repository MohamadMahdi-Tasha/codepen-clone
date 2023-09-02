// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component To Client Side
'use client';

// Importing Part
import {ReactNode, useState} from "react";
import IconComponent from "@/chunks/iconComponent";

// Creating And Exporting Search Component As Default
export default function SearchComponent():ReactNode {
    // Returning JSX
    return (
        <form className={'bg-dropdownBg/30 w-full shadow-lg rounded-[7px] flex items-center gap-[20px] p-[12px]'} action={'#'}>
            <label htmlFor={"search-input"}>
                <IconComponent name={'search'} className={'text-dropdownBg'} />
            </label>
            <input autoComplete={'false'} className={'bg-transparent placeholder:text-dropdownBg placeholder:text-[20px] text-[20px] text-white placeholder:font-bold w-full outline-0'} required type="search" id={'search-input'} placeholder={'Search CodePen...'} />
        </form>
    );
}