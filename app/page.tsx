// Codes BY Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import HeaderComponent from '@/components/headerComponent';
import SearchComponent from '@/components/searchComponent';
import PinnedItemsComponent from '@/components/pinnedItemsComponent';
import '@/app/index.css';

// Creating And Exporting Home Page Of Project As Default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <div className={'flex'}>
            <HeaderComponent />
            <section className={'w-full bg-mainBg p-[20px] h-[100vh] overflow-x-hidden overflow-y-auto'}>
                <header className={'flex gap-[15px]'}>
                    <SearchComponent />
                    <PinnedItemsComponent />
                </header>
            </section>
        </div>
    );
}