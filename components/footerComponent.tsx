// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import IconComponent from "@/chunks/iconComponent";
import Link from "next/link";

// Creating And Exporting Footer Component As Default
export default function FooterComponent():ReactNode {
    // Returning JSX
    return (
        <footer className={'bg-black px-[20px] py-[40px]'}>
            <div className={'mx-auto max-w-[1100px] flex items-center justify-between gap-[20px]'}>
                <div className={'flex flex-col gap-[5px]'}>
                    <ul className={'flex items-center gap-[10px]'}>
                        <li className={'text-white text-[18px]'}>CodePen</li>
                        <li><a className={'text-white/30 text-[14px] hover:text-white'} href="#">About</a></li>
                        <li><a className={'text-white/30 text-[14px] hover:text-white'} href="#">Blog</a></li>
                        <li><a className={'text-white/30 text-[14px] hover:text-white'} href="#">Podcast</a></li>
                        <li><a className={'text-white/30 text-[14px] hover:text-white'} href="#">Documentation</a></li>
                        <li><a className={'text-white/30 text-[14px] hover:text-white'} href="#">Support</a></li>
                        <li><a className={'text-white/30 text-[14px] hover:text-white'} href="#">Advertising</a></li>
                    </ul>
                    <ul className={'flex items-center gap-[10px]'}>
                        <li className={'text-white text-[18px]'}>For</li>
                        <li><a className={'text-white/30 text-[14px] hover:text-white'} href="#">Teams</a></li>
                        <li><a className={'text-white/30 text-[14px] hover:text-white'} href="#">Education</a></li>
                        <li><a className={'text-white/30 text-[14px] hover:text-white'} href="#">Privacy</a></li>
                        <li><a className={'text-white/30 text-[14px] hover:text-white'} href="#">Embeds</a></li>
                        <li><a className={'text-white/30 text-[14px] hover:text-white'} href="#">Asset</a></li>
                        <li><a className={'text-white/30 text-[14px] hover:text-white'} href="#">Hosting</a></li>
                    </ul>
                    <ul className={'flex items-center gap-[10px]'}>
                        <li className={'text-white text-[18px]'}>Social</li>
                        <li><a className={'text-white/30 text-[14px] hover:text-white'} href="#">YouTube</a></li>
                        <li><a className={'text-white/30 text-[14px] hover:text-white'} href="#">Twitter</a></li>
                        <li><a className={'text-white/30 text-[14px] hover:text-white'} href="#">Instagram</a></li>
                        <li><a className={'text-white/30 text-[14px] hover:text-white'} href="#">Mastodon</a></li>
                    </ul>
                    <ul className={'flex items-center gap-[10px]'}>
                        <li className={'text-white text-[18px]'}>Community</li>
                        <li><a className={'text-white/30 text-[14px] hover:text-white'} href="#">Spark</a></li>
                        <li><a className={'text-white/30 text-[14px] hover:text-white'} href="#">Challenges</a></li>
                        <li><a className={'text-white/30 text-[14px] hover:text-white'} href="#">Topics</a></li>
                        <li><a className={'text-white/30 text-[14px] hover:text-white'} href="#">Code of Conduct</a></li>
                    </ul>
                </div>
                <div className={'flex flex-col items-end'}>
                    <Link className={'block mb-[10px]'} href={'/'}><IconComponent name={'logo-typo'} className={'w-[200px] text-white'} /></Link>
                    <span className={'text-[14px] font-light m-0 text-white/30'}>&copy;{2023} Mahdi Tasha</span>
                    <span className={'text-[14px] font-light m-0 text-white/30 italic'}>Demo or it didn't happen.</span>
                    <div className={'flex items-center gap-[10px]'}>
                        <a className={'text-[14px] font-light m-0 text-white/30'} href="#">Terms of Service</a>
                        <span className={'text-[14px] font-light m-0 text-white/30'}>.</span>
                        <a className={'text-[14px] font-light m-0 text-white/30'} href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}