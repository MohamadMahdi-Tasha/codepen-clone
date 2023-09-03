// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import IconComponent from "@/chunks/iconComponent";

// Defining ype Ofg Props
interface propsType {
    profileImage: string;
    name: string;
    pensCount: number;
    isPro: boolean;
}

// Creating And Exporting People Profile Component As Default
export default function PeopleProfileComponent({profileImage, isPro, pensCount, name}:propsType):ReactNode {
    // Returning JSX
    return (
        <div>
            <div />
            <div>
                <img src={profileImage} alt={`Profile Image Of ${name}`}/>
                <div>
                    <h6>
                        <span>{name}</span>
                        {(isPro) ? <span>PRO</span> : false}
                    </h6>
                    <div>
                        <span>{pensCount} Pens</span>
                        <a href="#">
                            <button tabIndex={-1}>
                                <IconComponent name={'plus'} className={'text-white'} />
                                Follow
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div />
                <div />
            </div>
        </div>
    );
}