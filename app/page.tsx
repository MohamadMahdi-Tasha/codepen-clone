// Codes BY Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import HeaderComponent from '@/components/headerComponent';
import SearchComponent from '@/components/searchComponent';
import '@/app/index.css';

// Creating And Exporting Home Page Of Project As Default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <div className={'flex'}>
            <HeaderComponent />
            <section className={'w-full bg-mainBg p-[20px]'}>
                <header>
                    <SearchComponent />
                </header>
            </section>
        </div>
    );
}