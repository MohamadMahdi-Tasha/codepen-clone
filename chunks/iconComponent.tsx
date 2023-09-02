// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";

// Defining Type Of Props
interface propsType {
    name: string;
    className?: string;
}

// Creating And Exporting Icon Component As Defualt
export default function IconComponent({name, className}:propsType):ReactNode {
    // Conditional Rendering
    if (name === 'logo-typo') {
        return <svg className={className} viewBox="0 0 138 26" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6" /></svg>
    } else if (name === 'chevron-down') {
        return <svg className={className} width="10" height="10" viewBox="-122.9 121.1 105.9 61.9"><path fill='currentColor' d="m-63.2 180.3 43.5-43.5c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.7L-69.9 161l-37.2-37.2c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.6c-1.9 1.8-2.8 4.2-2.8 6.6 0 2.3.9 4.6 2.6 6.5 11.4 11.5 41 41.2 43 43.3l.2.2c3.6 3.6 10.3 3.6 13.9 0z"></path></svg>
    } else if (name === 'pen') {
        return <svg className={className} fill='currentColor' width="20" height="20" viewBox="0 0 20 20"><path d="M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998V9.002Zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 0 1 6 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 0 1 0 5.997V1.003Zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0 1 13 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 0 1 7 5.997V1.003Zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0 1 20 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0 1 14 5.997V1.003Z"></path></svg>
    } else if (name === 'collection') {
        return <svg className={className} width="20" height="20" fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect y="10.36" width="9.64" height="9.64" rx="1" ry="1"></rect><rect x="10.36" y="10.36" width="9.64" height="9.64" rx="1" ry="1"></rect><rect width="9.64" height="9.64" rx="1" ry="1"></rect><rect x="10.36" width="9.64" height="9.64" rx="1" ry="1"></rect></svg>
    } else if (name === 'vue') {
        return <svg xmlns="http://www.w3.org/2000/svg" width='20' height='20' viewBox="0 -10 196.32 190.02"><path fill="#42b883" d="M120.83 0 98.16 39.26 75.49 0H0l98.16 170.02L196.32 0h-75.49z"></path><path fill="#35495e" d="M120.83 0 98.16 39.26 75.49 0H39.26l58.9 102.01L157.06 0h-36.23z"></path></svg>
    } else if (name === 'toggle-nav') {
        return <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"/></svg>
    }
}