// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component To Client Side
'use client';

// Importing Part
import {ReactNode, useState, useRef} from "react";
import IconComponent from "@/chunks/iconComponent";

// Creating And Exporting Search Component As Default
export default function SearchComponent():ReactNode {
    // Returning JSX
    return (
        <form action={'#'}>
            <label htmlFor={"search-input"}>
                <IconComponent name={'search'} className={'text-white'} />
            </label>
            <input required type="search" id={'search-input'} placeholder={'Search CodePen...'}/>
        </form>
    );
}