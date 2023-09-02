// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component To Client Side
'use client';

// Importing Part
import {ReactNode, useState} from "react";
import IconComponent from "@/chunks/iconComponent";
import NoPinImg from '@/public/assets/img/pins/img-nopin.webp';

// Creating And Exporting Pinned Items Component As Default
export default function pinnedItemsComponent():ReactNode {
    // Defining State Of Components
    const [isModalOpened, setModalOpened] = useState(false);

    // Returning JSX
    return (
        <div>
            <button data-opened={isModalOpened} className={'bg-dropdownBg/30 items-center h-[50px] aspect-square flex justify-center px-[10px] relative rounded-[10px] green-bar-data-opened'} onClick={() => setModalOpened(true)}>
                <IconComponent className={'text-white'} name={'pin'} />
                <IconComponent className={'text-white'} name={'chevron-down'} />
            </button>
            {
                (isModalOpened) ? (
                    <>
                        <div className={'bg-black/80 fixed top-0 left-0 w-full h-full'} onClick={() => setModalOpened(false)} />
                        <div className={'bg-headerBg flex flex-col fixed top-[50%] left-[50%] translate-x-[-50%] border-2 border-dropdownBg translate-y-[-50%] w-[60vw] h-[70vh] rounded-[10px] overflow-hidden'}>
                            <div className={'overflow-auto'}>
                                <div className={'flex justify-between items-center p-[10px] border-b-2 border-b-dropdownBg'}>
                                    <span className={'block relative text-[16px] font-bold text-white after:content-[""] after:absolute after:top-[140%] after:left-0 after:w-full after:h-[2px] after:bg-green'}>Pinned Items</span>
                                    <button className={'w-[20px] h-[20px] rounded-[3px] flex justify-center items-center bg-dropdownBg'} onClick={() => setModalOpened(false)}><IconComponent className={'text-white'} name={'close'} /></button>
                                </div>
                                <div className={'bg-dropdownBg/30 p-[10px] flex items-center'}>
                                    <span className={'text-dropdownBg font-normal text-[10px]'}>GRID</span>
                                    <button className={'w-[30px] h-[30px] rounded-l-[5px] flex items-center justify-center ml-[10px] bg-dropdownBg'}><IconComponent className={'text-white'} name={'grid'} /></button>
                                    <button className={'w-[30px] h-[30px] rounded-r-[5px] flex items-center justify-center mr-[10px] bg-dropdownBg'}><IconComponent className={'text-white'} name={'list'} /></button>
                                    <span className={'text-dropdownBg font-normal text-[10px]'}>LIST</span>
                                </div>
                                <div className={'py-[50px] px-[10px]'}>
                                    <div className={'max-w-[500px] mx-auto bg-dropdownBg p-[20px] rounded-[10px]'}>
                                        <h5 className={'text-center text-white font-normal text-[18px] mb-[15px]'}>You don't have any <span className={'text-blue'}>pinned items</span> yet.</h5>
                                        <h6 className={'text-center text-white font-normal text-[16px] mb-[25px]'}>You can pin any Pen, Project, or Collection for easy access here.</h6>
                                        <img className={'w-full rounded-[20px]'} src={NoPinImg.src} alt="An image which describes how to add pens to you pins"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : false
            }
        </div>
    );
}
