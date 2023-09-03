// Codes BY Mahdi Tasha
// Forcing NextJS To Render This Component To Client Side
'use client';

// Importing Part
import {ReactNode, useState} from "react";
import HeaderComponent from '@/components/headerComponent';
import SearchComponent from '@/components/searchComponent';
import PinnedItemsComponent from '@/components/pinnedItemsComponent';
import ProfileDropDownComponent from '@/components/profileDropDownComponent';
import PenComponent from "@/components/penComponent";
import ProfileImage from '@/public/assets/img/img-profile.jpg';
import '@/app/index.css';

// Creating And Exporting Home Page Of Project As Default
export default function HomePage():ReactNode {
    // Defining States Of Component
    const [activePensToShow, setActivePensToShow] = useState('trending');

    // Returning JSX
    return (
        <div className={'flex'}>
            <HeaderComponent />
            <section className={'w-full bg-mainBg p-[20px] h-[100vh] overflow-x-hidden overflow-y-auto'}>
                <header className={'flex gap-[15px] mb-[20px]'}>
                    <SearchComponent />
                    <PinnedItemsComponent />
                    <ProfileDropDownComponent />
                </header>
                <main>
                    <div className={'overflow-x-auto'}>
                        <div className={'flex border-b-2 border-b-dropdownBg'}>
                            <button onClick={() => setActivePensToShow('following')} data-active={(activePensToShow === 'following')} className={'py-[10px] whitespace-nowrap bg-transparent px-[25px] text-[20px] text-dropdownBg data-[active="true"]:text-white shrink-0 relative data-[active="true"]:after:content-[""] data-[active="true"]:after:absolute data-[active="true"]:after:top-full data-[active="true"]:after:left-0 data-[active="true"]:after:w-full data-[active="true"]:after:h-[2px] data-[active="true"]:after:bg-green'}>Following</button>
                            <button onClick={() => setActivePensToShow('trending')} data-active={(activePensToShow === 'trending')} className={'py-[10px] whitespace-nowrap bg-transparent px-[25px] text-[20px] text-dropdownBg data-[active="true"]:text-white shrink-0 relative data-[active="true"]:after:content-[""] data-[active="true"]:after:absolute data-[active="true"]:after:top-full data-[active="true"]:after:left-0 data-[active="true"]:after:w-full data-[active="true"]:after:h-[2px] data-[active="true"]:after:bg-green'}>Trending</button>
                            <button onClick={() => setActivePensToShow('to-work')} data-active={(activePensToShow === 'to-work')} className={'py-[10px] whitespace-nowrap bg-transparent px-[25px] text-[20px] text-dropdownBg data-[active="true"]:text-white shrink-0 relative data-[active="true"]:after:content-[""] data-[active="true"]:after:absolute data-[active="true"]:after:top-full data-[active="true"]:after:left-0 data-[active="true"]:after:w-full data-[active="true"]:after:h-[2px] data-[active="true"]:after:bg-green'}>Your Work</button>
                        </div>
                    </div>
                    <div>
                        <PenComponent name={'Scott R McGann'} cssCode={'h1 {background-color: red;}'} htmlCode={'<h1>Hello</h1>'} commentsCount={0} likesCount={8} viewCount={181} title={'waterfall fancy'} id={'cantelope'} profileImage={ProfileImage.src} />
                    </div>
                </main>
            </section>
        </div>
    );
}