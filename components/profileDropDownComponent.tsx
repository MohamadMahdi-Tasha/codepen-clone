// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component To Client Side
'use client';

// Importing Part
import {ReactNode, useState} from "react";
import IconComponent from "@/chunks/iconComponent";

// Creating And Exporting Profile DropDown Component As Default
export default function ProfileDropDownComponent():ReactNode {
    // Defining State Of Component
    const [isOpened, setOpened] = useState(false);

    // Returning JSX
    return (
        <div className={'relative'}>
            <button data-opened={isOpened} onClick={() => setOpened(prevState => !prevState)} className={'rounded-[10px] h-[50px] aspect-square green-bar-data-opened bg-[url("../public/assets/img/img-profile.jpg")] bg-cover'} />
            <div data-opened={isOpened} className={'bg-headerBg py-[10px] absolute right-0 top-[130%] w-[200px] shadow-lg overflow-hidden rounded-[10px] transition-all duration-500 origin-top-right data-[opened="false"]:scale-0 data-[opened="false"]:opacity-0 data-[opened="false"]:invisible data-[opened="true"]:scale-100 data-[opened="true"]:opacity-100 data-[opened="true"]:visible'}>
                <ul>
                    <li><a href="#"><button className={'py-[5px] px-[15px] text-[13px] transition-all bg-headerBg hover:bg-mainBg text-white font-bold truncate w-full text-start'} tabIndex={-1}>Your Work</button></a></li>
                    <li><a href="#"><button className={'py-[5px] px-[15px] text-[13px] transition-all bg-headerBg hover:bg-mainBg text-white font-bold truncate w-full text-start'} tabIndex={-1}>Profile</button></a></li>
                </ul>
                <hr className={'border-white/10 my-[10px]'} />
                <ul>
                    <li><a href="#"><button className={'py-[5px] px-[15px] text-[13px] transition-all bg-headerBg hover:bg-mainBg text-white font-bold truncate w-full text-start'} tabIndex={-1}>New Pen</button></a></li>
                    <li><a href="#"><button className={'py-[5px] px-[15px] text-[13px] transition-all bg-headerBg hover:bg-mainBg text-white font-bold truncate w-full text-start'} tabIndex={-1}>New Collection</button></a></li>
                </ul>
                <hr className={'border-white/10 my-[10px]'} />
                <ul>
                    <li><a href="#"><button className={'py-[5px] px-[15px] text-[13px] transition-all bg-headerBg hover:bg-mainBg text-white font-bold truncate w-full text-start'} tabIndex={-1}>Asset Manager</button></a></li>
                    <li><a href="#"><button className={'py-[5px] px-[15px] text-[13px] transition-all bg-headerBg hover:bg-mainBg text-white font-bold truncate w-full text-start'} tabIndex={-1}>Embed Theme Builder</button></a></li>
                    <li><a href="#"><button className={'py-[5px] px-[15px] text-[13px] transition-all bg-headerBg hover:bg-mainBg text-white font-bold truncate w-full text-start'} tabIndex={-1}>Upgrade To <span>Pro</span></button></a></li>
                </ul>
                <hr className={'border-white/10 my-[10px]'} />
                <ul>
                    <li><a href="#"><button className={'py-[5px] px-[15px] text-[13px] transition-all bg-headerBg hover:bg-mainBg text-white font-bold truncate w-full text-start'} tabIndex={-1}>Documentation</button></a></li>
                    <li><a href="#"><button className={'py-[5px] px-[15px] text-[13px] transition-all bg-headerBg hover:bg-mainBg text-white font-bold truncate w-full text-start'} tabIndex={-1}>Support</button></a></li>
                </ul>
                <hr className={'border-white/10 my-[10px]'} />
                <ul>
                    <li>
                        <a href="#">
                            <button className={'py-[5px] px-[15px] transition-all bg-headerBg hover:bg-mainBg flex items-center gap-[10px] w-full'} tabIndex={-1}>
                                <IconComponent name={'gear'} className={'text-white shrink-0'} />
                                <span className={'text-white font-bold text-[13px] truncate shrink-0'}>Setting</span>
                            </button>
                        </a>
                    </li>
                    <li>
                        <button className={'py-[5px] px-[15px] transition-all bg-headerBg hover:bg-mainBg flex items-center gap-[10px] w-full'}>
                            <IconComponent name={'log-out'} className={'text-white shrink-0'} />
                            <span className={'text-white font-bold text-[13px] truncate shrink-0'}>Log Out</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
