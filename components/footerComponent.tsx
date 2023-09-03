// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import IconComponent from "@/chunks/iconComponent";
import Link from "next/link";

// Creating And Exporting Footer Component As Default
export default function FooterComponent():ReactNode {
    // Returning JSX
    return (
        <footer>
            <div>
                <ul>
                    <li>CodePen</li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Podcast</a></li>
                    <li><a href="#">Documentation</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Advertising</a></li>
                </ul>
                <ul>
                    <li>For</li>
                    <li><a href="#">Teams</a></li>
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Embeds</a></li>
                    <li><a href="#">Asset</a></li>
                    <li><a href="#">Hosting</a></li>
                </ul>
                <ul>
                    <li>Social</li>
                    <li><a href="#">YouTube</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Mastodon</a></li>
                </ul>
                <ul>
                    <li>Community</li>
                    <li><a href="#">Spark</a></li>
                    <li><a href="#">Challenges</a></li>
                    <li><a href="#">Topics</a></li>
                    <li><a href="#">Code of Conduct</a></li>
                </ul>
            </div>
            <div>
                <Link href={'/'}><IconComponent name={'logo-typo'} className={'w-[100px]'} /></Link>
                <span>&copy;{2023} Mahdi Tasha</span>
                <span>Demo or it didn't happen.</span>
                <div>
                    <a href="#">Terms of Service</a>
                    <span>.</span>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}