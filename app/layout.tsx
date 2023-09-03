// Codes By Mahdi Tasha
// Importing Part
import {Metadata} from "next";
import {ReactNode} from "react";
import LayoutProviderComponent from "@/components/layoutProviderComponent";

// Defining Meta Data Of Pages
export const metadata:Metadata = {
    title: 'CodePen Clone',
    description: 'CodePen Clone - Made By Mahdi Tasha - CodePen Is Platform To Share Code Snippets All Across The World',
    keywords: 'CodePen,codepen,code,sharing,code snippet,world,clone,resume,front-end,next-js,mahdi tasha,github',
    themeColor: '#1e1e1e',
    viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
    manifest: '/manifest.json',
    robots: '/robots.tsx'
}

// Defining Type Of Props
interface propsType {
    children: ReactNode;
}


// Creating And Exporting Root Layout Of Pages As Default
export default function RootLayout({children}:propsType):ReactNode {
    // Returning JSX
    return (
        <html lang={'en'}>
            <LayoutProviderComponent>
                <body>
                    {children}
                </body>
            </LayoutProviderComponent>
        </html>
    );
}