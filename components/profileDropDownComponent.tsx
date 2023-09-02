// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component To Client Side
'use client';

// Importing Part
import {ReactNode, useState} from "react";
import IconComponent from "@/chunks/iconComponent";

// Creating And Exporting Profile DropDown Component As Default
export default function ProfileDropDownComponent():ReactNode {
    // Returning JSX
    return (
        <div>
            <button data-opened={true} className={'rounded-[10px] h-[50px] aspect-square green-bar-data-opened bg-[url("../public/assets/img/img-profile.jpg")] bg-cover'} />
            <div>

            </div>
        </div>
    );
}
