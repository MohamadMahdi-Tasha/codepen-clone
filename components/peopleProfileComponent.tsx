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
        <div className={'relative z-[2] [&>div:first-of-type]:hover:scale-100'}>
            <div className={'absolute bg-headerBg top-0 left-0 w-full h-full origin-right scale-90 rounded-[20px] -z-[1] transition-all duration-500'} />
            <div className={'z-[2] p-[20px]'}>
                <div className={'flex items-center gap-[10px] mb-[20px]'}>
                    <img className={'w-[60px] shrink-0 aspect-square object-cover rounded-[10px]'} src={profileImage} alt={`Profile Image Of ${name}`}/>
                    <div className={'w-full'}>
                        <div className={'flex items-center justify-between gap-[10px] w-[50%]'}>
                            <span className={'block truncate w-full text-white text-[18px] font-bold shrink-0'}>{name}</span>
                            {(isPro) ? <span className={'text-[12px] font-bold bg-yellow px-[10px]'}>PRO</span> : false}
                        </div>
                        <div className={'flex items-center gap-[10px] w-full'}>
                            <span className={'block text-white/30 font-normal'}>{(pensCount < 500) ? pensCount : '500+'} Pens</span>
                            <a href="#">
                                <button className={'px-[10px] py-[5px] text-[12px] bg-green rounded-[2px] flex items-center gap-[5px] text-black'} tabIndex={-1}>
                                    <IconComponent name={'plus'} className={'text-black'} />
                                    Follow
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={'grid grid-cols-2 h-[100px] gap-[10px]'}>
                    <div className={'rounded-[10px] bg-purple'} />
                    <div className={'rounded-[10px] bg-purple'} />
                </div>
            </div>
        </div>
    );
}