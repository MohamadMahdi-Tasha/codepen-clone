// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component To Client Side
'use client';

// Importing Part
import {ReactNode, useState} from "react";
import IconComponent from "@/chunks/iconComponent";

// Creating And Exporting Profile DropDown Component As Default
export default function ProfileDropDownComponent():ReactNode {
    // Defining State Of Component
    const [isOpened, setOpened] = useState(false);

    // Returning JSX
    return (
        <div>
            <button data-opened={isOpened} onClick={() => setOpened(prevState => !prevState)} className={'rounded-[10px] h-[50px] aspect-square green-bar-data-opened bg-[url("../public/assets/img/img-profile.jpg")] bg-cover'} />
            <div data-opened={isOpened}>
                <ul>
                    <li><a href="#"><button tabIndex={-1}>Your Work</button></a></li>
                    <li><a href="#"><button tabIndex={-1}>Profile</button></a></li>
                </ul>
                <hr/>
                <ul>
                    <li><a href="#"><button tabIndex={-1}>New Pen</button></a></li>
                    <li><a href="#"><button tabIndex={-1}>New Collection</button></a></li>
                </ul>
                <hr/>
                <ul>
                    <li><a href="#"><button tabIndex={-1}>Asset Manager</button></a></li>
                    <li><a href="#"><button tabIndex={-1}>Embed Theme Builder</button></a></li>
                    <li><a href="#"><button tabIndex={-1}>Upgrade To <span>Pro</span></button></a></li>
                </ul>
                <hr/>
                <ul>
                    <li><a href="#"><button tabIndex={-1}>Documentation</button></a></li>
                    <li><a href="#"><button tabIndex={-1}>Support</button></a></li>
                </ul>
                <hr/>
                <ul>
                    <li>
                        <a href="#">
                            <button tabIndex={-1}>
                                <IconComponent name={'gear'} className={''} />
                                Setting
                            </button>
                        </a>
                    </li>
                    <li>
                        <button>
                            <IconComponent name={'log-out'} className={''} />
                            Log Out
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
