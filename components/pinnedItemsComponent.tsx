// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component To Client Side
'use client';

// Importing Part
import {ReactNode, useState} from "react";
import IconComponent from "@/chunks/iconComponent";
import NoPinImg from '@/public/assets/img/pins/img-nopin.webp';

// Creating And Exporting Pinned Items Component As Default
export default function pinnedItemsComponent():ReactNode {
    // Returning JSX
    return (
        <>
            <button>
                <IconComponent name={'pin'} />
                <IconComponent name={'chevron-down'} />
            </button>
            <div>
                <div>
                    <span>Pinned Items</span>
                    <button><IconComponent name={'close'} /></button>
                </div>
                <div>
                    <span>GRID</span>
                    <button><IconComponent name={'grid'} /></button>
                    <button><IconComponent name={'list'} /></button>
                    <span>LIST</span>
                </div>
                <div>
                    <div>
                        <h5>You don't have any <span>pinned items</span> yet.</h5>
                        <h6>You can pin any Pen, Project, or Collection for easy access here.</h6>
                        <img src={NoPinImg.src} alt="An image which describes how to add pens to you pins"/>
                    </div>
                </div>
            </div>
        </>
    );
}
