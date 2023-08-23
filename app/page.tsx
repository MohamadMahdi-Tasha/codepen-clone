// Codes BY Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import HeaderComponent from '@/components/headerComponent';
import '@/app/index.css';

// Creating And Exporting Home Page Of Project As Default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <>
            <HeaderComponent />
            <h1>Home Page</h1>
        </>
    );
}