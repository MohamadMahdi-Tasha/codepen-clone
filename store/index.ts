// Codes By Mahdi Tasha
// Importing Part
import {configureStore, createSlice, Slice} from "@reduxjs/toolkit";
import ProfileImage from '@/public/assets/img/img-profile.jpg';

// Creating Slice
const appSlice:Slice = createSlice({
    name: 'App',
    initialState: {
        users: [
            {
                profileImage: ProfileImage.src,
                name: 'MahdiTasha',
                isPro: false,
                id: 'tashaDev',
                location: 'Iran, Tehran',
                bio: 'junior font end developer :))',
                links: [
                    'https://www.instagram.com/mahditasha_',
                    'https://www.github.com/MohamadMahdi-Tasha'
                ],
                following: [
                    {
                        profileImage: ProfileImage.src,
                        name: 'NoBody',
                        isPro: false,
                        id: 'Anonymous',
                        location: 'Heaven',
                        followersCount: 1,
                        followingCount: 1,
                        bio: 'Hacker with 100 years of experience',
                        links: [],
                        pens: [
                            {
                                isPickedByCodePen: false,
                                htmlCode: '<img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Anonymous_emblem.svg" alt="Logo Of Anonymous Group" />',
                                cssCode: 'img {width: 100px;height: 100px;border-radius: 100%}',
                                name: 'Expect Us | Anonymous',
                                likesCount: 1002344234217,
                                commentsCount: 112345687,
                                viewCount: 53100003240006,
                            }
                        ]
                    }
                ],
                followers: [],
                pens: [
                    {
                        isPickedByCodePen: true,
                        htmlCode: '<h1>Waterfall Fancy</h1>',
                        cssCode: 'h1 {font-weight: 700;color: red;text-align:center;}',
                        name: 'Waterfall Fancy',
                        likesCount: 536,
                        commentsCount: 536,
                        viewCount: 536,
                        author: 'MahdiTasha',
                        profileImage: ProfileImage.src,
                        id: 'tashaDev',
                    }
                ]
            },
            {
                profileImage: ProfileImage.src,
                name: 'NoBody',
                isPro: false,
                id: 'Anonymous',
                location: 'Heaven',
                following: [],
                followers: [
                    {
                        profileImage: ProfileImage.src,
                        name: 'MahdiTasha',
                        isPro: false,
                        id: 'tashaDev',
                        location: 'Iran, Tehran',
                        bio: 'junior font end developer :))',
                        links: [
                            'https://www.instagram.com/mahditasha_',
                            'https://www.github.com/MohamadMahdi-Tasha'
                        ],
                        following: [
                            {
                                profileImage: ProfileImage.src,
                                name: 'NoBody',
                                isPro: false,
                                id: 'Anonymous',
                                location: 'Heaven',
                                followersCount: 1,
                                followingCount: 1,
                                bio: 'Hacker with 100 years of experience',
                                links: [],
                                pens: [
                                    {
                                        isPickedByCodePen: false,
                                        htmlCode: '<img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Anonymous_emblem.svg" alt="Logo Of Anonymous Group" />',
                                        cssCode: 'img {width: 100px;height: 100px;border-radius: 100%}',
                                        name: 'Expect Us | Anonymous',
                                        likesCount: 1002344234217,
                                        commentsCount: 112345687,
                                        viewCount: 53100003240006,
                                    }
                                ]
                            }
                        ],
                        followers: [],
                        pens: [
                            {
                                isPickedByCodePen: true,
                                htmlCode: '<h1>Waterfall Fancy</h1>',
                                cssCode: 'h1 {font-weight: 700;color: red;text-align:center;}',
                                name: 'Waterfall Fancy',
                                likesCount: 536,
                                commentsCount: 536,
                                viewCount: 536,
                            }
                        ]
                    },
                ],
                bio: 'Hacker with 100 years of experience',
                links: [],
                pens: [
                    {
                        isPickedByCodePen: false,
                        htmlCode: '<img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Anonymous_emblem.svg" alt="Logo Of Anonymous Group" />',
                        cssCode: 'img {width: 100px;height: 100px;border-radius: 100%}',
                        name: 'Expect Us | Anonymous',
                        likesCount: 1002344234217,
                        commentsCount: 112345687,
                        viewCount: 53100003240006,
                        author: 'NoBody',
                        profileImage: ProfileImage.src,
                        id: 'Anonymous',
                    }
                ]
            }
        ]
    },
    reducers: {}
})

// Exporting Actions To Use
export const actionsOfAppSlice = appSlice.actions;

// Configuring Store And Exporting It As Default
const appState = configureStore({reducer: appSlice.reducer})
export default appState;