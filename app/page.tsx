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
import PeopleProfileComponent from "@/components/peopleProfileComponent";
import FooterComponent from "@/components/footerComponent";
import {useSelector} from "react-redux";
import '@/app/index.css';

// Creating And Exporting Home Page Of Project As Default
export default function HomePage():ReactNode {
    // Defining States Of Component
    const [activePensToShow, setActivePensToShow] = useState('trending');

    // Redux Part
    const state:any = useSelector(state => state);
    const users:[] = state.users;
    const pensOfUsers:any = users.map((item:any) => item.pens)

    // Returning JSX
    return (
        <div className={'flex'}>
            <HeaderComponent />
            <section className={'w-full bg-mainBg h-[100vh] overflow-x-hidden overflow-y-auto'}>
                <div className={'lg:p-[20px] p-[10px]'}>
                    <header className={'flex gap-[15px] mb-[20px]'}>
                        <SearchComponent />
                        <PinnedItemsComponent />
                        <ProfileDropDownComponent />
                    </header>
                    <main>
                        <div className={'mx-auto max-w-[1100px]'}>
                            <div className={'overflow-x-auto overflow-y-hidden'}>
                                <div className={'flex border-b-2 border-b-dropdownBg'}>
                                    <button onClick={() => setActivePensToShow('following')} data-active={(activePensToShow === 'following')} className={'py-[10px] whitespace-nowrap bg-transparent px-[25px] text-[20px] text-dropdownBg data-[active="true"]:text-white shrink-0 relative data-[active="true"]:after:content-[""] data-[active="true"]:after:absolute data-[active="true"]:after:top-full data-[active="true"]:after:left-0 data-[active="true"]:after:w-full data-[active="true"]:after:h-[2px] data-[active="true"]:after:bg-green'}>Following</button>
                                    <button onClick={() => setActivePensToShow('trending')} data-active={(activePensToShow === 'trending')} className={'py-[10px] whitespace-nowrap bg-transparent px-[25px] text-[20px] text-dropdownBg data-[active="true"]:text-white shrink-0 relative data-[active="true"]:after:content-[""] data-[active="true"]:after:absolute data-[active="true"]:after:top-full data-[active="true"]:after:left-0 data-[active="true"]:after:w-full data-[active="true"]:after:h-[2px] data-[active="true"]:after:bg-green'}>Trending</button>
                                    <button onClick={() => setActivePensToShow('to-work')} data-active={(activePensToShow === 'to-work')} className={'py-[10px] whitespace-nowrap bg-transparent px-[25px] text-[20px] text-dropdownBg data-[active="true"]:text-white shrink-0 relative data-[active="true"]:after:content-[""] data-[active="true"]:after:absolute data-[active="true"]:after:top-full data-[active="true"]:after:left-0 data-[active="true"]:after:w-full data-[active="true"]:after:h-[2px] data-[active="true"]:after:bg-green'}>Your Work</button>
                                </div>
                            </div>
                            <div className={'mb-[40px] pt-[70px] pb-[20px] overflow-x-auto'}>
                                <div className={'flex gap-[30px] mb-[30px]'}>
                                    {
                                        pensOfUsers.map((item:any) =>  (
                                            <PenComponent name={item[0].author}
                                                          viewCount={item[0].viewCount}
                                                          likesCount={item[0].likesCount}
                                                          commentsCount={item[0].commentsCount}
                                                          profileImage={item[0].profileImage}
                                                          isPickedByCodePen={item[0].isPickedByCodePen}
                                                          id={item[0].id}
                                                          title={item[0].name}
                                                          cssCode={item[0].cssCode}
                                                          htmlCode={item[0].htmlCode}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                            <div>
                                <div className={'border-b-2 border-b-dropdownBg pb-[10px] mb-[30px]'}><span className={'text-[20px] font-bold text-white'}>Interesting People to Follow</span></div>
                                <div className={'grid lg:grid-cols-2 grid-cols-1 gap-[30px]'}>
                                    {
                                        users.map((item:any) => (
                                            <PeopleProfileComponent profileImage={item.profileImage}
                                                                    isPro={item.isPro}
                                                                    pensCount={item.pens.length}
                                                                    name={item.name}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <FooterComponent />
            </section>
        </div>
    );
}