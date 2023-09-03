// Codes By Mahdi Tashqa
// Importing Part
import {ReactNode} from "react";
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
    // Returning JSX
    return (
        <div>
            <div/>
            <div>
                {
                    (isPickedByCodePen) ? (
                        <div>
                            <div>
                                <IconComponent name={'codepen-logo'} className={'text-white'} />
                                <span>Picked by CodePen</span>
                                <div />
                            </div>
                        </div>
                    ) : false
                }

                <div dangerouslySetInnerHTML={{__html: `<html><head><style>${cssCode}</style></head><body>${htmlCode}</body></html>`}} />
                <button><IconComponent name={'open'} className={'text-white'} /></button>
                <div>
                    <div>
                        <div>
                            <img src={profileImage} alt={`${name}'s Profile Image`} />
                            <div>
                                <span>{title}</span>
                                <span>{name}</span>
                            </div>
                        </div>
                        <div>
                            <button><IconComponent name={'three-dots'} className={'text-white'} /></button>
                            <div>
                                <button>
                                    <IconComponent name={'collection'} className={'text-white'} />
                                    Add To Collections
                                </button>
                                <button>
                                    <IconComponent name={'pin'} className={'text-white'} />
                                    Add To Pins
                                </button>
                                <button>
                                    <IconComponent name={'tick'} className={'text-white'} />
                                    Follow @{id}
                                </button>
                            </div>
                        </div>
                        <div>
                            <button>
                                <IconComponent name={'heart'} className={'text-white'} />
                                <span>{likesCount}</span>
                            </button>
                            <button>
                                <IconComponent name={'comment'} className={'text-white'} />
                                <span>{commentsCount}</span>
                            </button>
                            <button>
                                <IconComponent name={'eye'} className={'text-white'} />
                                <span>{viewCount}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}