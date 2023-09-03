// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component To Client Side
'use client';

// Importing Part
import {ReactNode} from "react";
import {Provider} from "react-redux";
import appState from "@/store";

// Defining Type Of Props
interface propsType {
    children: ReactNode;
}

// Creating And Exporting Layout Provider Component As Default
export default function LayoutProviderComponent({children}:propsType):ReactNode {
    // Returning JSX
    return (
        <Provider store={appState}>
            {children}
        </Provider>
    );
}