// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import Link from "next/link";
import DropdownComponent from "@/chunks/dropdownComponent";
import IconComponent from "@/chunks/iconComponent";
import SquarSpaceImage from '@/public/assets/img/header/img-squarspace.png';

// Creating And Exporting Header Component AsDefault
export default function HeaderComponent():ReactNode {
    // Returning JSX
    return (
        <header>
            <Link href={'/'}><IconComponent name={'logo-typo'} /></Link>
            <div>
                <span>CREATE</span>
                <div>
                    <DropdownComponent title={'Pen'}>
                        <li><a href="#"><button><IconComponent name={'vue'} />Vue Pen</button></a></li>
                        <li>
                            <DropdownComponent noIcon title={'from Template'}>
                                <li>
                                    <a href="#">
                                        <button>
                                            <IconComponent name={'L'} />
                                            You have no templates yet .
                                            Let's go make one!
                                        </button>
                                    </a>
                                </li>
                            </DropdownComponent>
                        </li>
                    </DropdownComponent>
                    <a href="#"><button><IconComponent name={'collection'} />Collection</button></a>
                </div>
            </div>
            <ul>
                <li><a href="#"><button>Your Work</button></a></li>
                <li><a href="#"><button>Activity</button></a></li>
                <li><a href="#"><button>Assets</button></a></li>
                <li><a href="#"><button>Pinned Items</button></a></li>
            </ul>
            <ul>
                <li><a href="#"><button>Following</button></a></li>
                <li><a href="#"><button>Trending</button></a></li>
                <li><a href="#"><button>Challenges</button></a></li>
                <li><a href="#"><button>Spark</button></a></li>
            </ul>
            <a href="#"><button>CodePan <span>PRO</span></button></a>
            <a href={'#'}>
                <img src={SquarSpaceImage.src} alt="SquarSpace"/>
                <p>Squarespace is everything you need to sell anything: your brand, products, services, content, or reservations. ads (via Carbon)</p>
            </a>
        </header>
    );
}