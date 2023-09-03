// Codes By Mahdi Tashqa
// Importing Part
import {ReactNode, useState} from "react";
import IconComponent from "@/chunks/iconComponent";

// Defining Type Of Props
interface propsType {
    isPickedByCodePen?: boolean;
    htmlCode: string;
    cssCode: string;
    profileImage: string;
    title: string;
    name: string;
    likesCount: number;
    commentsCount: number;
    viewCount: number;
    id: string;
}

// Creating And Exporting Pen Component As Default
export default function PenComponent({
                                         isPickedByCodePen = false,
                                         htmlCode,
                                         cssCode,
                                         profileImage,
                                         title,
                                         name,
                                         likesCount,
                                         commentsCount,
                                         viewCount,
                                         id
                                     }: propsType): ReactNode {
    // Defining States Of Component
    const [isDropDownOpened, setDropDownOpened] = useState(false);

    // Returning JSX
    return (
        <div className={'relative z-[2] shrink-0 w-[500px] pen-component'}>
            <div className={'bg-headerBg absolute top-0 left-0 w-full h-full -z-[1] origin-right scale-[.88] rounded-[20px] transition-all duration-500'} />
            <div className={'z-[2]'}>
                {
                    (isPickedByCodePen) ? (
                        <div className={'flex items-center absolute top-0 translate-y-[-75%] left-0 w-full'}>
                            <div className={'p-[5px] bg-black rounded-[5px] mr-[10px]'}><IconComponent name={'codepen-logo'} className={'text-white'} /></div>
                            <span className={'whitespace-nowrap text-white text-[14px] mr-[10px]'}>Picked by CodePen</span>
                            <div className={'w-full h-[3px] bg-gradiant-bar'} />
                        </div>
                    ) : false
                }

                <div className={'p-[20px]'}>
                    <a className={'block mb-[20px]'} href="#">
                        <div className={'h-[250px] bg-black rounded-[20px] overflow-hidden'}
                             dangerouslySetInnerHTML={{
                                 __html: `<html><head><style>${cssCode}</style></head><body>${htmlCode}</body></html>`
                             }} />
                    </a>
                    <button className={'open-btn transition-all duration-500 absolute top-[50px] right-[50px] opacity-0 invisible translate-x-[10px] bg-headerBg p-[10px] rounded-[5px]'}><IconComponent name={'open'} className={'text-white'} /></button>
                    <div>
                        <div className={'flex items-center justify-between gap-[10px]'}>
                            <div className={'flex items-center gap-[10px] w-full'}>
                                <a href="#">
                                    <img className={'aspect-square w-[60px] h-[60px] rounded-[10px]'} src={profileImage} alt={`${name}'s Profile Image`} />
                                </a>
                                <div>
                                    <span className={'block mb-[3px] font-bold text-white text-[16px] truncate'}>{title}</span>
                                    <span className={'block text-[14px] font-light text-white/60 truncate'}>{name}</span>
                                </div>
                            </div>
                            <div className={'relative'}>
                                <button onClick={() => setDropDownOpened(prevState => !prevState)}><IconComponent name={'three-dots'} className={'text-white'} /></button>
                                <div data-opened={isDropDownOpened} className={'bg-headerBg w-[200px] transition-all origin-bottom-right duration-500 shadow-lg rounded-[10px] overflow-hidden py-[10px] absolute bottom-[110%] right-0 data-[opened="false"]:scale-0 data-[opened="false"]:opacity-0 data-[opened="false"]:invisible data-[opened="true"]:scale-100 data-[opened="true"]:opacity-100 data-[opened="true"]:visible'}>
                                    <button className={'py-[5px] px-[15px] transition-all bg-headerBg hover:bg-mainBg w-full flex items-center'}>
                                        <IconComponent name={'collection'} className={'text-white shrink-0'} />
                                        <span className={'ml-[10px] text-white font-bold text-[13px] truncate'}>Add To Collections</span>
                                    </button>
                                    <button className={'py-[5px] px-[15px] transition-all bg-headerBg hover:bg-mainBg w-full flex items-center'}>
                                        <IconComponent name={'pin'} className={'text-white shrink-0'} />
                                        <span className={'ml-[10px] text-white font-bold text-[13px] truncate'}>Add To Pins</span>
                                    </button>
                                    <button className={'py-[5px] px-[15px] transition-all bg-headerBg hover:bg-mainBg w-full flex items-center'}>
                                        <IconComponent name={'tick'} className={'text-white shrink-0'} />
                                        <span className={'ml-[10px] text-white font-bold text-[13px] truncate'}>Follow @{id}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={'flex gap-[10px] mt-[20px] opacity-0 -translate-y-[10px] invisible bottom-btns-holder duration-500 transition-all'}>
                            <button className={'bg-dropdownBg flex items-center gap-[10px] px-[15px] py-[5px] rounded-[8px]'}>
                                <IconComponent name={'heart'} className={'text-white'} />
                                <span className={'text-white'}>{(likesCount > 500) ? '500+' : likesCount}</span>
                            </button>
                            <button className={'bg-dropdownBg flex items-center gap-[10px] px-[15px] py-[5px] rounded-[8px]'}>
                                <IconComponent name={'comment'} className={'text-white'} />
                                <span className={'text-white'}>{(commentsCount > 500) ? '500+' : commentsCount}</span>
                            </button>
                            <button className={'bg-dropdownBg flex items-center gap-[10px] px-[15px] py-[5px] rounded-[8px]'}>
                                <IconComponent name={'eye'} className={'text-white'} />
                                <span className={'text-white'}>{(viewCount > 500) ? '500+' : viewCount}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}