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
    } else if (name === 'search') {
        return <svg className={className} fill='currentColor' width='20' height='20' viewBox="0 0 56.7 56.7"><path d="M42.8 7.3C33-2.4 17.1-2.4 7.3 7.3c-9.8 9.8-9.8 25.7 0 35.5 8.7 8.7 22.2 9.7 32 2.9l9.6 9.6c1.8 1.8 4.7 1.8 6.4 0 1.8-1.8 1.8-4.7 0-6.4l-9.6-9.6c6.8-9.8 5.8-23.3-2.9-32zm-6.2 29.3c-6.4 6.4-16.7 6.4-23.1 0s-6.4-16.7 0-23.1c6.4-6.4 16.7-6.4 23.1 0 6.4 6.4 6.4 16.8 0 23.1z"></path></svg>
    } else if (name === 'project') {
        return <svg className={className} fill='currentColor' width='20' height='20' viewBox="0 0 20 20"><path d="M7 .995C7 .445 7.447 0 7.999 0H19c.552 0 .999.456.999.995v8.01c0 .55-.447.995-.999.995H8C7.447 10 7 9.544 7 9.005V.995Zm0 11.003c0-.551.447-.998.999-.998H19c.552 0 .999.446.999.998v7.004c0 .551-.447.998-.999.998H8A.998.998 0 0 1 7 19.002v-7.004ZM0 .992C0 .444.451 0 .99 0h4.02c.546 0 .99.455.99.992v18.016a.996.996 0 0 1-.99.992H.99a.999.999 0 0 1-.99-.992V.992Z"></path></svg>
    } else if (name === 'person') {
        return <svg className={className} fill='currentColor' width='20' height='20' viewBox="0 0 71 89"><path d="M67.783 66.757c-3.771-5.87-8.347-9.685-14.883-11.845 0 0-4.932-2.547-17.825-2.547-12.894 0-17.824 2.547-17.824 2.547C10.713 57.09 6.14 60.887 2.36 66.757.857 69.067.056 73.716 0 76.195c.02.645 0 1.391 0 2.14v4.28-2.954c0 4.734 3.216 8.568 7.188 8.568h55.756c3.972 0 7.188-3.834 7.188-8.568v2.955-4.28c0-.75-.01-1.496 0-2.14-.048-2.48-.86-7.129-2.35-9.439m-52.37-46.875c0 10.972 6.818 27.097 19.653 27.097 12.62 0 19.646-16.125 19.646-27.097C54.711 8.91 45.913 0 35.065 0 24.21 0 15.41 8.91 15.41 19.882"></path></svg>
    } else if (name === 'pin') {
        return <svg className={className} fill='currentColor' width='20' height='20' viewBox="0 0 12 18"><path d="M1.5 7.74V1.8c-.414 0-.75-.403-.75-.9s.336-.9.75-.9h9c.414 0 .75.403.75.9s-.336.9-.75.9v5.94a7.567 7.567 0 0 1 1.274 2.55c.11.395.166.73.195.973a4.701 4.701 0 0 1 .03.387v.031l.001.01v.007s-.004-.117 0 .002c0 .497-.336.9-.75.9h-4.5v4.5c0 .497-.336.9-.75.9s-.75-.403-.75-.9v-4.5H.75c-.414 0-.75-.403-.75-.9v-.019a2.22 2.22 0 0 1 .005-.122c.004-.074.011-.173.026-.296.029-.244.085-.578.195-.973.2-.72.575-1.632 1.274-2.55Z"></path></svg>
    } else if (name === 'close') {
        return <svg className={className} fill='currentColor' width='20' height='20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M96.8 83.7 63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path></svg>
    } else if (name === 'grid') {
        return <svg className={className} fill='currentColor' width='20' height='20' xmlns="http://www.w3.org/2000/svg" viewBox="-60.741 20.407 74.148 45.778"><path d="M-47.704 20.407h-8.666a4.332 4.332 0 0 0-4.37 4.37v8.742c0 2.37 1.925 4.37 4.37 4.37h8.74c2.37 0 4.37-1.926 4.37-4.37v-8.741c-.073-2.445-2-4.37-4.444-4.37zM-47.704 48.704h-8.666c-2.37 0-4.37 1.926-4.37 4.37v8.74c0 2.371 1.925 4.371 4.37 4.371h8.74c2.37 0 4.37-1.926 4.37-4.37v-8.74c-.073-2.371-2-4.371-4.444-4.371zM-19.333 20.407h-8.741c-2.37 0-4.37 1.926-4.37 4.37v8.742c0 2.37 1.925 4.37 4.37 4.37h8.74c2.371 0 4.371-1.926 4.371-4.37v-8.741c0-2.445-2-4.37-4.37-4.37zM-19.333 48.704h-8.741c-2.37 0-4.37 1.926-4.37 4.37v8.74c0 2.371 1.925 4.371 4.37 4.371h8.74c2.371 0 4.371-1.926 4.371-4.37v-8.74c0-2.371-2-4.371-4.37-4.371zM8.963 20.407H.296c-2.37 0-4.37 1.926-4.37 4.37v8.742c0 2.37 1.926 4.37 4.37 4.37h8.741c2.37 0 4.37-1.926 4.37-4.37v-8.741c-.074-2.445-2-4.37-4.444-4.37zM8.963 48.704H.296c-2.37 0-4.37 1.926-4.37 4.37v8.74c0 2.371 1.926 4.371 4.37 4.371h8.741c2.37 0 4.37-1.926 4.37-4.37v-8.74c-.074-2.371-2-4.371-4.444-4.371z"></path></svg>
    } else if (name === 'list') {
        return <svg className={className} fill='currentColor' width='20' height='20' viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"><path d="M.5 1a1 1 0 0 1 1-1H16a1 1 0 1 1 0 2H1.5a1 1 0 0 1-1-1ZM.5 6.5a1 1 0 0 1 1-1H16a1 1 0 1 1 0 2H1.5a1 1 0 0 1-1-1ZM.5 12a1 1 0 0 1 1-1H16a1 1 0 1 1 0 2H1.5a1 1 0 0 1-1-1Z"></path></svg>
    }
}