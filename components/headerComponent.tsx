// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import Link from "next/link";
import DropdownComponent from "@/chunks/dropdownComponent";
import IconComponent from "@/chunks/iconComponent";
import SquarSpaceImage from '@/public/assets/img/header/img-squarspace.png';

// Creating And Exporting Header Component AsDefault
export default function HeaderComponent():ReactNode {
    // Returning JSX
    return (
        <header className={'h-full absolute left-0 top-0 w-[200px] bg-headerBg overflow-y-auto overflow-x-hidden'}>
            <div className={'p-[20px]'}>
                <Link className={'block mb-[20px]'} href={'/'}><IconComponent className={'text-white w-full'} name={'logo-typo'} /></Link>
                <div>
                    <span className={'block text-[10px] text-dropdownBg mb-[10px] font-bold'}>CREATE</span>
                    <div className={'before-gradiant-bar rounded-[5px] overflow-hidden'}>
                        <DropdownComponent title={'Pen'}>
                            <li>
                                <a className={'block w-full'} href="#">
                                    <button tabIndex={-1} className={'w-full p-[10px] flex gap-[10px] items-center bg-dropdownBg/30 transition-all hover:bg-mainBg'}>
                                        <IconComponent name={'vue'} />
                                        <span className={'truncate text-[14px] font-normal text-white'}>Vue Pen</span>
                                    </button>
                                </a>
                            </li>
                            <li>
                                <DropdownComponent noIcon title={'from Template'}>
                                    <li>
                                        <a className={'block w-full'} href="#">
                                            <button tabIndex={-1} className={'w-full p-[10px] flex gap-[10px] items-center bg-dropdownBg/30 transition-all hover:bg-mainBg'}>
                                                <span className={'text-blue text-[15px]'}>L</span>
                                                <span className={'truncate text-[14px] font-normal text-white'}>
                                                    You have no templates yet .
                                                    Let's go make one!
                                                </span>
                                            </button>
                                        </a>
                                    </li>
                                </DropdownComponent>
                            </li>
                        </DropdownComponent>
                        <a href="#">
                            <button tabIndex={-1} className={'w-full p-[10px] flex gap-[10px] items-center bg-dropdownBg/30 transition-all hover:bg-mainBg'}>
                                <IconComponent className={'text-dropdownBg'} name={'collection'} />
                                <span className={'truncate text-[14px] font-normal text-white'}>Collection</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <ul className={'mb-[20px]'}>
                <li><a className={'block'} href="#"><button className={'transition-all w-full text-start hover:bg-mainBg truncate text-[16px] font-normal px-[20px] py-[10px] text-white'} tabIndex={-1}>Your Work</button></a></li>
                <li><a className={'block'} href="#"><button className={'transition-all w-full text-start hover:bg-mainBg truncate text-[16px] font-normal px-[20px] py-[10px] text-white'} tabIndex={-1}>Activity</button></a></li>
                <li><a className={'block'} href="#"><button className={'transition-all w-full text-start hover:bg-mainBg truncate text-[16px] font-normal px-[20px] py-[10px] text-white'} tabIndex={-1}>Assets</button></a></li>
                <li><a className={'block'} href="#"><button className={'transition-all w-full text-start hover:bg-mainBg truncate text-[16px] font-normal px-[20px] py-[10px] text-white'} tabIndex={-1}>Pinned Items</button></a></li>
            </ul>
            <ul className={'mb-[20px]'}>
                <li><a className={'block'} href="#"><button className={'transition-all w-full text-start hover:bg-mainBg truncate text-[16px] font-normal px-[20px] py-[10px] text-white'} tabIndex={-1}>Following</button></a></li>
                <li><a className={'block'} href="#"><button className={'transition-all w-full text-start hover:bg-mainBg truncate text-[16px] font-normal px-[20px] py-[10px] text-white'} tabIndex={-1}>Trending</button></a></li>
                <li><a className={'block'} href="#"><button className={'transition-all w-full text-start hover:bg-mainBg truncate text-[16px] font-normal px-[20px] py-[10px] text-white'} tabIndex={-1}>Challenges</button></a></li>
                <li><a className={'block'} href="#"><button className={'transition-all w-full text-start hover:bg-mainBg truncate text-[16px] font-normal px-[20px] py-[10px] text-white'} tabIndex={-1}>Spark</button></a></li>
            </ul>
            <a href="#" className={'block'}>
                <button tabIndex={-1} className={'transition-all hover:bg-mainBg w-full flex flex-wrap gap-[10px] items-center px-[20px] py-[10px]'}>
                    <span className={'text-white truncate text-[16px] font-normal block'}>CodePan</span>
                    <span className={'text-black bg-yellow text-[10px] font-bold block px-[10px]'}>PRO</span>
                </button>
            </a>
            <a href={'#'} className={'p-[20px] block'}>
                <img className={'w-full mb-[10px]'} src={SquarSpaceImage.src} alt="SquarSpace"/>
                <p className={'text-[14px] font-light text-dropdownBg'}>Squarespace is everything you need to sell anything: your brand, products, services, content, or reservations. ads (via Carbon)</p>
            </a>
        </header>
    );
}