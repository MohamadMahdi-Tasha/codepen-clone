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
        return <svg className={className} fill='currentColor' width='10' height='10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M96.8 83.7 63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path></svg>
    } else if (name === 'grid') {
        return <svg className={className} fill='currentColor' width='15' height='15' xmlns="http://www.w3.org/2000/svg" viewBox="-60.741 20.407 74.148 45.778"><path d="M-47.704 20.407h-8.666a4.332 4.332 0 0 0-4.37 4.37v8.742c0 2.37 1.925 4.37 4.37 4.37h8.74c2.37 0 4.37-1.926 4.37-4.37v-8.741c-.073-2.445-2-4.37-4.444-4.37zM-47.704 48.704h-8.666c-2.37 0-4.37 1.926-4.37 4.37v8.74c0 2.371 1.925 4.371 4.37 4.371h8.74c2.37 0 4.37-1.926 4.37-4.37v-8.74c-.073-2.371-2-4.371-4.444-4.371zM-19.333 20.407h-8.741c-2.37 0-4.37 1.926-4.37 4.37v8.742c0 2.37 1.925 4.37 4.37 4.37h8.74c2.371 0 4.371-1.926 4.371-4.37v-8.741c0-2.445-2-4.37-4.37-4.37zM-19.333 48.704h-8.741c-2.37 0-4.37 1.926-4.37 4.37v8.74c0 2.371 1.925 4.371 4.37 4.371h8.74c2.371 0 4.371-1.926 4.371-4.37v-8.74c0-2.371-2-4.371-4.37-4.371zM8.963 20.407H.296c-2.37 0-4.37 1.926-4.37 4.37v8.742c0 2.37 1.926 4.37 4.37 4.37h8.741c2.37 0 4.37-1.926 4.37-4.37v-8.741c-.074-2.445-2-4.37-4.444-4.37zM8.963 48.704H.296c-2.37 0-4.37 1.926-4.37 4.37v8.74c0 2.371 1.926 4.371 4.37 4.371h8.741c2.37 0 4.37-1.926 4.37-4.37v-8.74c-.074-2.371-2-4.371-4.444-4.371z"></path></svg>
    } else if (name === 'list') {
        return <svg className={className} fill='currentColor' width='15' height='15' viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"><path d="M.5 1a1 1 0 0 1 1-1H16a1 1 0 1 1 0 2H1.5a1 1 0 0 1-1-1ZM.5 6.5a1 1 0 0 1 1-1H16a1 1 0 1 1 0 2H1.5a1 1 0 0 1-1-1ZM.5 12a1 1 0 0 1 1-1H16a1 1 0 1 1 0 2H1.5a1 1 0 0 1-1-1Z"></path></svg>
    } else if (name === 'gear') {
        return <svg className={className} fill='currentColor' width='20' height='20' viewBox="0 0 100 100"><path d="M87.687 45.077c-.313-2.433-.816-4.807-1.542-7.079l8.145-11.73-5.827-7.515-.094-.123-5.824-7.514-12.955 5.577c-2.041-1.265-4.192-2.362-6.459-3.219L59.42 0H40.586l-3.709 13.474c-2.27.857-4.421 1.955-6.463 3.222l-12.957-5.577-5.825 7.514-.097.124-5.822 7.517 8.146 11.731a39.832 39.832 0 0 0-1.544 7.079L0 52.032l2.08 9.375.033.15 2.08 9.375 14.001.761a39.157 39.157 0 0 0 4.4 5.668l-2.396 14.227 8.416 4.173.138.067L37.169 100l9.309-10.796c1.161.109 2.335.173 3.524.173s2.358-.074 3.52-.184l9.317 10.804 8.415-4.173.141-.066 8.413-4.172-2.396-14.228a39.06 39.06 0 0 0 4.4-5.672l14-.759 2.078-9.375.035-.154L100 52.025l-12.313-6.948zM50.003 34.51c8.435 0 15.272 7.035 15.272 15.719 0 8.679-6.839 15.717-15.272 15.717-8.436 0-15.272-7.038-15.272-15.717 0-8.684 6.838-15.719 15.272-15.719z"></path></svg>
    } else if (name === 'log-out') {
        return <svg className={className} fill='currentColor' width='20' height='20' viewBox="0 0 98.28 68.04"><path fill="none" d="M82.78 0h15.5v68.04h-15.5z"></path><path d="M0 0h.51v68.04H0zM56 47.11V60.1H8.39V7.94H56v12.99h7.88V0H.51v68.04h63.37V47.11H56z"></path><path fill="none" d="M0 0h22.97v68.04H0z"></path><path d="M41.87 38.04h40.85l-9.93 9.9 5.63 5.67 19.35-19.49-19.35-19.48-5.63 5.57L82.51 30H41.87v8.04z"></path></svg>
    } else if (name === 'codepen-logo') {
        return <svg className={className} fill='currentColor' width='20' height='20' viewBox="0 0 100 100"><path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8 19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path></svg>
    } else if (name === 'three-dots') {
        return <svg className={className} fill='currentColor' width='20' height='20' viewBox="0 0 29 7"><circle cx="3.5" cy="3.5" r="3.5"></circle><circle cx="14.5" cy="3.5" r="3.5"></circle><circle cx="25.5" cy="3.5" r="3.5"></circle></svg>
    } else if (name === 'tick') {
        return <svg className={className} fill='currentColor' width='20' height='20' viewBox="0 0 100 100"><path d="M34.6 82.4c-2.3 0-4.6-.9-6.3-2.6L8.8 60.7c-3.5-3.5-3.6-9.2-.1-12.7s9.2-3.6 12.7-.1l13.1 12.9L78.3 17c3.5-3.5 9.2-3.5 12.7 0s3.5 9.2 0 12.7L40.9 79.8c-1.7 1.8-4 2.6-6.3 2.6z"></path></svg>
    } else if (name === 'heart') {
        return <svg className={className} fill='currentColor' width='20' height='20' viewBox="-2 0 105 92"><path d="M85.24 2.67C72.29-3.08 55.75 2.67 50 14.9 44.25 2 27-3.8 14.76 2.67 1.1 9.14-5.37 25 5.42 44.38 13.33 58 27 68.11 50 86.81 73.73 68.11 87.39 58 94.58 44.38c10.79-18.7 4.32-35.24-9.34-41.71Z"></path></svg>
    } else if (name === 'comment') {
        return <svg className={className} fill='currentColor' width='20' height='20' viewBox="-405.9 238 56.3 54.8"><path d="M-391 291.4c0 1.5 1.2 1.7 1.9 1.2 1.8-1.6 15.9-14.6 15.9-14.6h19.3c3.8 0 4.4-.8 4.4-4.5v-31.1c0-3.7-.8-4.5-4.4-4.5h-47.4c-3.6 0-4.4.9-4.4 4.5v31.1c0 3.7.7 4.4 4.4 4.4h10.4v13.5z"></path></svg>
    } else if (name === 'eye') {
        return <svg className={className} fill='currentColor' width='20' height='20' viewBox="0 0 30.5 16.5"><path d="M15.3 0C8.9 0 3.3 3.3 0 8.3c3.3 5 8.9 8.3 15.3 8.3s12-3.3 15.3-8.3C27.3 3.3 21.7 0 15.3 0zm0 14.5c-3.4 0-6.2-2.8-6.2-6.2C9 4.8 11.8 2 15.3 2c3.4 0 6.2 2.8 6.2 6.2 0 3.5-2.8 6.3-6.2 6.3z"></path></svg>
    } else if (name === 'open') {
        return <svg className={className} fill='currentColor' width='20' height='20' viewBox="0 0 100 100"><path d="M3.563-.004a3.573 3.573 0 0 0-3.527 4.09l-.004-.02v28.141c0 1.973 1.602 3.57 3.57 3.57s3.57-1.598 3.57-3.57V12.218v.004l22.461 22.461a3.571 3.571 0 0 0 6.093-2.527c0-.988-.398-1.879-1.047-2.523L12.218 7.172h19.989c1.973 0 3.57-1.602 3.57-3.57s-1.598-3.57-3.57-3.57H4.035a3.008 3.008 0 0 0-.473-.035zM96.333 0l-.398.035.02-.004h-28.16a3.569 3.569 0 0 0-3.57 3.57 3.569 3.569 0 0 0 3.57 3.57h19.989L65.323 29.632a3.555 3.555 0 0 0-1.047 2.523 3.571 3.571 0 0 0 6.093 2.527L92.83 12.221v19.985a3.569 3.569 0 0 0 3.57 3.57 3.569 3.569 0 0 0 3.57-3.57V4.034v.004a3.569 3.569 0 0 0-3.539-4.043l-.105.004zM3.548 64.23A3.573 3.573 0 0 0 .029 67.8v28.626-.004l.016.305-.004-.016.004.059v-.012l.039.289-.004-.023.023.121-.004-.023c.074.348.191.656.34.938l-.008-.02.055.098-.008-.02.148.242-.008-.012.055.082-.008-.012c.199.285.43.531.688.742l.008.008.031.027.004.004c.582.461 1.32.742 2.121.762h.004l.078.004h28.61a3.569 3.569 0 0 0 3.57-3.57 3.569 3.569 0 0 0-3.57-3.57H12.224l22.461-22.461a3.569 3.569 0 0 0-2.492-6.125l-.105.004h.008a3.562 3.562 0 0 0-2.453 1.074L7.182 87.778V67.793a3.571 3.571 0 0 0-3.57-3.57h-.055.004zm92.805 0a3.573 3.573 0 0 0-3.519 3.57v19.993-.004L70.373 65.328a3.553 3.553 0 0 0-2.559-1.082h-.004a3.573 3.573 0 0 0-3.566 3.57c0 1.004.414 1.91 1.082 2.555l22.461 22.461H67.802a3.57 3.57 0 1 0 0 7.14h28.606c.375 0 .742-.059 1.082-.168l-.023.008.027-.012-.02.008.352-.129-.023.008.039-.02-.02.008.32-.156-.02.008.023-.016-.008.008c.184-.102.34-.207.488-.32l-.008.008.137-.113-.008.004.223-.211.008-.008c.156-.164.301-.34.422-.535l.008-.016-.008.016.008-.02.164-.285.008-.02-.008.016.008-.02c.098-.188.184-.406.246-.633l.008-.023-.004.008.008-.023a3.44 3.44 0 0 0 .121-.852v-.004l.004-.078V67.804a3.569 3.569 0 0 0-3.57-3.57h-.055.004z"></path></svg>
    }
}