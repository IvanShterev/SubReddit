import './left-sidebar.scss';
import React, { useState } from 'react';

const LeftSidebar = () => {

    const [customFeedsOpen, setCustomFeedsOpen] = useState(true);
    const [recentOpen, setRecentOpen] = useState(true);
    const [communitiesOpen, setCommunitiesOpen] = useState(true);
    const [resourcesOpen, setResourcesOpen] = useState(true);

    const toggleSection = (setSectionOpen) =>{
        setSectionOpen((prevOpen) => !prevOpen);
    }

    const [starStates, setStarStates] = useState({
        star1: false,
        star2: false,
        star3: false,
        star4: false,
        star5: false,
        star6: false,
        star7: false,
        star8: false,
        star9: false,
        star10: false,
        star11: false,
    });

    const toggleStarFill = (starKey) => {
        setStarStates((prevStates) => ({
            ...prevStates,
            [starKey]: !prevStates[starKey],
        }));
    };

    return (
        <>
            <div className="left-sidebar-con">

                <div className='left-sidebar-nav'> 
                    <div className="nav-option">
                        <svg rpl="" fill="currentColor" height="20" icon-name="home-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="m17.71 8.549 1.244.832v8.523a1.05 1.05 0 0 1-1.052 1.046H12.73a.707.707 0 0 1-.708-.707v-4.507c0-.76-1.142-1.474-2.026-1.474-.884 0-2.026.714-2.026 1.474v4.507a.71.71 0 0 1-.703.707H2.098a1.046 1.046 0 0 1-1.052-1.043V9.381l1.244-.835v9.158h4.44v-3.968c0-1.533 1.758-2.72 3.27-2.72s3.27 1.187 3.27 2.72v3.968h4.44V8.549Zm2.04-1.784L10.646.655a1.12 1.12 0 0 0-1.28-.008L.25 6.765l.696 1.036L10 1.721l9.054 6.08.696-1.036Z"></path>
                        </svg>
                        <span>Home</span>
                    </div>
                    <div className="nav-option">
                        <svg rpl="" fill="currentColor" height="20" icon-name="popular-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0a10 10 0 1 0 10 10A10.01 10.01 0 0 0 10 0Zm0 18.75a8.7 8.7 0 0 1-5.721-2.145l8.471-8.471v4.148H14V6.638A.647.647 0 0 0 13.362 6H7.718v1.25h4.148L3.4 15.721A8.739 8.739 0 1 1 10 18.75Z"></path>
                        </svg>
                        <span>Popular</span>
                    </div>
                    <div className="nav-option">
                        <svg rpl="" fill="currentColor" height="20" icon-name="communities-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="m18.937 19.672-2.27-2.23A9.917 9.917 0 0 1 10 20a10.032 10.032 0 0 1-7.419-3.297 1.976 1.976 0 0 1-.475-1.418 3.455 3.455 0 0 1 2.173-3.207c.426-.17.881-.255 1.34-.248h2.49a3.569 3.569 0 0 1 3.616 3.504v1.57h-1.25v-1.565a2.313 2.313 0 0 0-2.366-2.256h-2.49a2.243 2.243 0 0 0-2.098 1.388c-.113.275-.17.57-.167.868a.784.784 0 0 0 .143.52A8.778 8.778 0 0 0 10 18.752a8.694 8.694 0 0 0 6.234-2.607l.084-.085v-.72a2.235 2.235 0 0 0-2.218-2.256h-2.361v-1.248H14.1a3.492 3.492 0 0 1 3.464 3.504v1.237l2.245 2.206-.872.89ZM4.63 8.53a2.443 2.443 0 0 1 1.511-2.259A2.45 2.45 0 0 1 9.48 8.053a2.443 2.443 0 0 1-2.401 2.923A2.451 2.451 0 0 1 4.63 8.53Zm1.25 0a1.198 1.198 0 0 0 1.434 1.176 1.2 1.2 0 0 0 .875-1.634 1.2 1.2 0 0 0-2.309.458Zm4.794 0a2.443 2.443 0 0 1 1.511-2.259 2.45 2.45 0 0 1 3.338 1.782 2.443 2.443 0 0 1-2.401 2.923 2.451 2.451 0 0 1-2.448-2.446Zm1.25 0a1.197 1.197 0 0 0 1.434 1.176 1.2 1.2 0 0 0 .875-1.634 1.2 1.2 0 0 0-2.309.458ZM1.25 10.01A8.733 8.733 0 0 1 4.361 3.3a8.753 8.753 0 0 1 10.654-.48 8.745 8.745 0 0 1 3.702 6.406 8.732 8.732 0 0 1-.498 3.756l.714 1.498a9.98 9.98 0 0 0-2.62-12.237A10.005 10.005 0 0 0 .992 5.652a9.98 9.98 0 0 0-.103 8.454l.729-1.598a8.723 8.723 0 0 1-.368-2.497Z"></path>
                        </svg>
                        <span>Explore</span>
                    </div>
                    <div className="nav-option">
                        <svg rpl="" fill="currentColor" height="20" icon-name="all-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0a10 10 0 1 0 10 10A10.01 10.01 0 0 0 10 0Zm5 17.171V6h-1.25v11.894a8.66 8.66 0 0 1-2.75.794V10H9.75v8.737A8.684 8.684 0 0 1 6.47 18H7v-4H5.75v3.642a8.753 8.753 0 1 1 9.25-.471Z"></path>
                        </svg>
                        <span>All</span>
                    </div>
                </div>

                <span className='line'></span>

                <div className="create-cont">
                    <div className="show-hide-btn" onClick={() => toggleSection(setCustomFeedsOpen)} >
                        <span>CUSTOM FEEDS</span>
                        <svg className={`arrow ${customFeedsOpen ? 'open' : 'closed'}`} rpl="" fill="currentColor" height="20" icon-name="caret-down-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                        </svg>
                    </div>

                    {customFeedsOpen ? <div className="add-create">
                        <svg rpl="" fill="currentColor" height="20" icon-name="add-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9.375h-8.375V1h-1.25v8.375H1v1.25h8.375V19h1.25v-8.375H19v-1.25Z"></path>
                        </svg>
                        <span>Create a custom feed</span>
                    </div> : ''}

                </div>

                <span className='line'></span>

                <div className="create-cont">
                    <div className="show-hide-btn" onClick={() => toggleSection(setRecentOpen)}>
                        <span>RECENT</span>
                        <svg className={`arrow ${recentOpen ? 'open' : 'closed'}`} rpl="" fill="currentColor" height="20" icon-name="caret-down-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                        </svg>
                    </div>

                    {recentOpen ? <div className="recent-icon">
                        <img className="rounded-full" src="https://styles.redditmedia.com/t5_2xhvq/styles/communityIcon_8qil7zgp7oh81.png" />
                        <span>r/AmItheAsshole</span>
                    </div> : ''}

                </div>

                <span className='line'></span>

                <div className="create-cont">
                    <div className="show-hide-btn" onClick={() => toggleSection(setCommunitiesOpen)}>
                        <span>COMMUNITIES</span>
                        <svg className={`arrow ${communitiesOpen ? 'open' : 'closed'}`} rpl="" fill="currentColor" icon-name="caret-down-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                        </svg>
                    </div>

                    {communitiesOpen ? 
                        <>
                        <div className="add-create">
                            <svg rpl="" icon-name="add-outline" fill="currentColor" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 9.375h-8.375V1h-1.25v8.375H1v1.25h8.375V19h1.25v-8.375H19v-1.25Z"></path>
                            </svg>
                            <span>Create a community</span>
                        </div>

                        <div className="communities_options">
                            <img className="rounded-full" src="https://styles.redditmedia.com/t5_2xhvq/styles/communityIcon_8qil7zgp7oh81.png?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=87ad6ce57343bb44542c6c716b0816eb1f4634ea" />
                            <span>r/AmItheAsshole</span>
                            <button onClick={() => toggleStarFill('star1')}>
                                {starStates.star1 ?
                                    <svg rpl="" className='star' fill="currentColor" height="16" icon-name="star-fill" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.943 7.659a1.142 1.142 0 0 0-.871-.771l-5.4-1.046L11 1.024a1.191 1.191 0 0 0-2 0L6.333 5.842.928 6.888a1.145 1.145 0 0 0-.619 1.9l3.757 4.024-.674 5.468a1.144 1.144 0 0 0 1.62 1.178L10 17.127l4.988 2.331a1.145 1.145 0 0 0 1.62-1.177l-.674-5.464 3.757-4.024a1.14 1.14 0 0 0 .252-1.134Z"></path>
                                    </svg> :
                                    <svg className='star' icon-name="star-outline" fill="currentColor" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.473 19.566c-.168 0-.333-.036-.485-.107L10 17.127l-4.988 2.332a1.145 1.145 0 0 1-1.62-1.179l.674-5.463L.309 8.793a1.145 1.145 0 0 1 .619-1.9l5.405-1.051L9 1.024a1.192 1.192 0 0 1 2 0l2.665 4.818 5.4 1.046a1.145 1.145 0 0 1 .619 1.9l-3.757 4.024.674 5.464a1.143 1.143 0 0 1-1.135 1.285l.007.005ZM10 15.748l5.345 2.5-.724-5.855 4.026-4.313-5.791-1.122L10 1.8 7.144 6.958 1.353 8.08l4.026 4.311-.724 5.855L10 15.748Z"></path>
                                    </svg>
                                }
                            </button>
                        </div>

                        <div className="communities_options">
                            <img className="rounded-full" src="https://styles.redditmedia.com/t5_2r0ij/styles/communityIcon_yor9myhxz5x11.png?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=681d33bd42be28350bef1f10e2fc7e8c4cf50b74" />
                            <span>r/announcements</span>
                            <button onClick={() => toggleStarFill('star2')}>
                                {starStates.star2 ?
                                    <svg rpl="" className='star' fill="currentColor" height="16" icon-name="star-fill" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.943 7.659a1.142 1.142 0 0 0-.871-.771l-5.4-1.046L11 1.024a1.191 1.191 0 0 0-2 0L6.333 5.842.928 6.888a1.145 1.145 0 0 0-.619 1.9l3.757 4.024-.674 5.468a1.144 1.144 0 0 0 1.62 1.178L10 17.127l4.988 2.331a1.145 1.145 0 0 0 1.62-1.177l-.674-5.464 3.757-4.024a1.14 1.14 0 0 0 .252-1.134Z"></path>
                                    </svg> :
                                    <svg className='star' icon-name="star-outline" fill="currentColor" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.473 19.566c-.168 0-.333-.036-.485-.107L10 17.127l-4.988 2.332a1.145 1.145 0 0 1-1.62-1.179l.674-5.463L.309 8.793a1.145 1.145 0 0 1 .619-1.9l5.405-1.051L9 1.024a1.192 1.192 0 0 1 2 0l2.665 4.818 5.4 1.046a1.145 1.145 0 0 1 .619 1.9l-3.757 4.024.674 5.464a1.143 1.143 0 0 1-1.135 1.285l.007.005ZM10 15.748l5.345 2.5-.724-5.855 4.026-4.313-5.791-1.122L10 1.8 7.144 6.958 1.353 8.08l4.026 4.311-.724 5.855L10 15.748Z"></path>
                                    </svg>
                                }
                            </button>
                        </div>

                        <div className="communities_options">
                            <svg className="rounded-full" rpl="" icon-name="community-fill" fill="currentColor" viewBox="0 0 20 20" width="32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0ZM8.016 8.633a1.616 1.616 0 0 0-.2.806V13.5H5.931V6.172h1.8v.9h.039a3.009 3.009 0 0 1 1.018-.732 3.45 3.45 0 0 1 1.449-.284c.246-.003.491.02.732.068.158.024.309.08.444.164l-.759 1.832a2.09 2.09 0 0 0-1.093-.26c-.33-.01-.658.062-.954.208a1.422 1.422 0 0 0-.591.565Zm2.9 6.918H9.355L14.7 2.633c.426.272.828.58 1.2.922l-4.984 11.996Z"></path>
                            </svg>
                            <span>r/confession</span>
                            <button onClick={() => toggleStarFill('star3')}>
                                {starStates.star3 ?
                                    <svg rpl="" className='star' fill="currentColor" height="16" icon-name="star-fill" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.943 7.659a1.142 1.142 0 0 0-.871-.771l-5.4-1.046L11 1.024a1.191 1.191 0 0 0-2 0L6.333 5.842.928 6.888a1.145 1.145 0 0 0-.619 1.9l3.757 4.024-.674 5.468a1.144 1.144 0 0 0 1.62 1.178L10 17.127l4.988 2.331a1.145 1.145 0 0 0 1.62-1.177l-.674-5.464 3.757-4.024a1.14 1.14 0 0 0 .252-1.134Z"></path>
                                    </svg> :
                                    <svg className='star' icon-name="star-outline" fill="currentColor" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.473 19.566c-.168 0-.333-.036-.485-.107L10 17.127l-4.988 2.332a1.145 1.145 0 0 1-1.62-1.179l.674-5.463L.309 8.793a1.145 1.145 0 0 1 .619-1.9l5.405-1.051L9 1.024a1.192 1.192 0 0 1 2 0l2.665 4.818 5.4 1.046a1.145 1.145 0 0 1 .619 1.9l-3.757 4.024.674 5.464a1.143 1.143 0 0 1-1.135 1.285l.007.005ZM10 15.748l5.345 2.5-.724-5.855 4.026-4.313-5.791-1.122L10 1.8 7.144 6.958 1.353 8.08l4.026 4.311-.724 5.855L10 15.748Z"></path>
                                    </svg>
                                }
                            </button>
                        </div>

                        <div className="communities_options">
                            <img className="rounded-full" src="https://styles.redditmedia.com/t5_k4fie/styles/communityIcon_y6nlpusz7ju51.png?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=2fda6e70438e67f2d3031e2380216e09ff05eab2"/>
                            <span>r/HobbyDrama</span>
                            <button onClick={() => toggleStarFill('star4')}>
                                {starStates.star4 ?
                                    <svg rpl="" className='star' fill="currentColor" height="16" icon-name="star-fill" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.943 7.659a1.142 1.142 0 0 0-.871-.771l-5.4-1.046L11 1.024a1.191 1.191 0 0 0-2 0L6.333 5.842.928 6.888a1.145 1.145 0 0 0-.619 1.9l3.757 4.024-.674 5.468a1.144 1.144 0 0 0 1.62 1.178L10 17.127l4.988 2.331a1.145 1.145 0 0 0 1.62-1.177l-.674-5.464 3.757-4.024a1.14 1.14 0 0 0 .252-1.134Z"></path>
                                    </svg> :
                                    <svg className='star' icon-name="star-outline" fill="currentColor" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.473 19.566c-.168 0-.333-.036-.485-.107L10 17.127l-4.988 2.332a1.145 1.145 0 0 1-1.62-1.179l.674-5.463L.309 8.793a1.145 1.145 0 0 1 .619-1.9l5.405-1.051L9 1.024a1.192 1.192 0 0 1 2 0l2.665 4.818 5.4 1.046a1.145 1.145 0 0 1 .619 1.9l-3.757 4.024.674 5.464a1.143 1.143 0 0 1-1.135 1.285l.007.005ZM10 15.748l5.345 2.5-.724-5.855 4.026-4.313-5.791-1.122L10 1.8 7.144 6.958 1.353 8.08l4.026 4.311-.724 5.855L10 15.748Z"></path>
                                    </svg>
                                }
                            </button>
                        </div>

                        <div className="communities_options">
                            <img className="rounded-full" src="https://styles.redditmedia.com/t5_341k1/styles/communityIcon_bn1at6z1bag01.png?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=d72417b5392db1c17f7623968dd0e59249ba8d15"/>
                            <span>r/IDontWorkHer...</span>
                            <button onClick={() => toggleStarFill('star5')}>
                                {starStates.star5 ?
                                    <svg rpl="" className='star' fill="currentColor" height="16" icon-name="star-fill" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.943 7.659a1.142 1.142 0 0 0-.871-.771l-5.4-1.046L11 1.024a1.191 1.191 0 0 0-2 0L6.333 5.842.928 6.888a1.145 1.145 0 0 0-.619 1.9l3.757 4.024-.674 5.468a1.144 1.144 0 0 0 1.62 1.178L10 17.127l4.988 2.331a1.145 1.145 0 0 0 1.62-1.177l-.674-5.464 3.757-4.024a1.14 1.14 0 0 0 .252-1.134Z"></path>
                                    </svg> :
                                    <svg className='star' icon-name="star-outline" fill="currentColor" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.473 19.566c-.168 0-.333-.036-.485-.107L10 17.127l-4.988 2.332a1.145 1.145 0 0 1-1.62-1.179l.674-5.463L.309 8.793a1.145 1.145 0 0 1 .619-1.9l5.405-1.051L9 1.024a1.192 1.192 0 0 1 2 0l2.665 4.818 5.4 1.046a1.145 1.145 0 0 1 .619 1.9l-3.757 4.024.674 5.464a1.143 1.143 0 0 1-1.135 1.285l.007.005ZM10 15.748l5.345 2.5-.724-5.855 4.026-4.313-5.791-1.122L10 1.8 7.144 6.958 1.353 8.08l4.026 4.311-.724 5.855L10 15.748Z"></path>
                                    </svg>
                                }
                            </button>
                        </div>

                        <div className="communities_options">
                            <svg className="rounded-full" rpl="" icon-name="community-fill" viewBox="0 0 20 20" width="32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0ZM8.016 8.633a1.616 1.616 0 0 0-.2.806V13.5H5.931V6.172h1.8v.9h.039a3.009 3.009 0 0 1 1.018-.732 3.45 3.45 0 0 1 1.449-.284c.246-.003.491.02.732.068.158.024.309.08.444.164l-.759 1.832a2.09 2.09 0 0 0-1.093-.26c-.33-.01-.658.062-.954.208a1.422 1.422 0 0 0-.591.565Zm2.9 6.918H9.355L14.7 2.633c.426.272.828.58 1.2.922l-4.984 11.996Z"></path>
                            </svg>
                            <span>r/MaliciousCom...</span>
                            <button onClick={() => toggleStarFill('star6')}>
                                {starStates.star6 ?
                                    <svg rpl="" className='star' fill="currentColor" height="16" icon-name="star-fill" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.943 7.659a1.142 1.142 0 0 0-.871-.771l-5.4-1.046L11 1.024a1.191 1.191 0 0 0-2 0L6.333 5.842.928 6.888a1.145 1.145 0 0 0-.619 1.9l3.757 4.024-.674 5.468a1.144 1.144 0 0 0 1.62 1.178L10 17.127l4.988 2.331a1.145 1.145 0 0 0 1.62-1.177l-.674-5.464 3.757-4.024a1.14 1.14 0 0 0 .252-1.134Z"></path>
                                    </svg> :
                                    <svg className='star' icon-name="star-outline" fill="currentColor" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.473 19.566c-.168 0-.333-.036-.485-.107L10 17.127l-4.988 2.332a1.145 1.145 0 0 1-1.62-1.179l.674-5.463L.309 8.793a1.145 1.145 0 0 1 .619-1.9l5.405-1.051L9 1.024a1.192 1.192 0 0 1 2 0l2.665 4.818 5.4 1.046a1.145 1.145 0 0 1 .619 1.9l-3.757 4.024.674 5.464a1.143 1.143 0 0 1-1.135 1.285l.007.005ZM10 15.748l5.345 2.5-.724-5.855 4.026-4.313-5.791-1.122L10 1.8 7.144 6.958 1.353 8.08l4.026 4.311-.724 5.855L10 15.748Z"></path>
                                    </svg>
                                }
                            </button>
                        </div>

                        <div className="communities_options">
                            <img className="rounded-full" src="https://styles.redditmedia.com/t5_2rm4d/styles/communityIcon_q054jahxvm5b1.png?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=07dc30de55bc83670fd3d2f0851081adc510c4ff"/>
                            <span>r/nosleep</span>
                            <button onClick={() => toggleStarFill('star7')}>
                                {starStates.star7 ?
                                    <svg rpl="" className='star' fill="currentColor" height="16" icon-name="star-fill" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.943 7.659a1.142 1.142 0 0 0-.871-.771l-5.4-1.046L11 1.024a1.191 1.191 0 0 0-2 0L6.333 5.842.928 6.888a1.145 1.145 0 0 0-.619 1.9l3.757 4.024-.674 5.468a1.144 1.144 0 0 0 1.62 1.178L10 17.127l4.988 2.331a1.145 1.145 0 0 0 1.62-1.177l-.674-5.464 3.757-4.024a1.14 1.14 0 0 0 .252-1.134Z"></path>
                                    </svg> :
                                    <svg className='star' icon-name="star-outline" fill="currentColor" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.473 19.566c-.168 0-.333-.036-.485-.107L10 17.127l-4.988 2.332a1.145 1.145 0 0 1-1.62-1.179l.674-5.463L.309 8.793a1.145 1.145 0 0 1 .619-1.9l5.405-1.051L9 1.024a1.192 1.192 0 0 1 2 0l2.665 4.818 5.4 1.046a1.145 1.145 0 0 1 .619 1.9l-3.757 4.024.674 5.464a1.143 1.143 0 0 1-1.135 1.285l.007.005ZM10 15.748l5.345 2.5-.724-5.855 4.026-4.313-5.791-1.122L10 1.8 7.144 6.958 1.353 8.08l4.026 4.311-.724 5.855L10 15.748Z"></path>
                                    </svg>
                                }
                            </button>
                        </div>

                        <div className="communities_options">
                            <img className="rounded-full" src="https://styles.redditmedia.com/t5_2vg7t/styles/communityIcon_6ofkqruptzc71.png?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=3d8f98bacc9a29968e8d2f30add4db3320214bbb"/>
                            <span>r/pettyrevenge</span>
                            <button onClick={() => toggleStarFill('star8')}>
                                {starStates.star8 ?
                                    <svg rpl="" className='star' fill="currentColor" height="16" icon-name="star-fill" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.943 7.659a1.142 1.142 0 0 0-.871-.771l-5.4-1.046L11 1.024a1.191 1.191 0 0 0-2 0L6.333 5.842.928 6.888a1.145 1.145 0 0 0-.619 1.9l3.757 4.024-.674 5.468a1.144 1.144 0 0 0 1.62 1.178L10 17.127l4.988 2.331a1.145 1.145 0 0 0 1.62-1.177l-.674-5.464 3.757-4.024a1.14 1.14 0 0 0 .252-1.134Z"></path>
                                    </svg> :
                                    <svg className='star' icon-name="star-outline" fill="currentColor" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.473 19.566c-.168 0-.333-.036-.485-.107L10 17.127l-4.988 2.332a1.145 1.145 0 0 1-1.62-1.179l.674-5.463L.309 8.793a1.145 1.145 0 0 1 .619-1.9l5.405-1.051L9 1.024a1.192 1.192 0 0 1 2 0l2.665 4.818 5.4 1.046a1.145 1.145 0 0 1 .619 1.9l-3.757 4.024.674 5.464a1.143 1.143 0 0 1-1.135 1.285l.007.005ZM10 15.748l5.345 2.5-.724-5.855 4.026-4.313-5.791-1.122L10 1.8 7.144 6.958 1.353 8.08l4.026 4.311-.724 5.855L10 15.748Z"></path>
                                    </svg>
                                }
                            </button>
                        </div>

                        <div className="communities_options">
                            <svg className="rounded-full" rpl="" icon-name="community-fill" viewBox="0 0 20 20" width="32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0ZM8.016 8.633a1.616 1.616 0 0 0-.2.806V13.5H5.931V6.172h1.8v.9h.039a3.009 3.009 0 0 1 1.018-.732 3.45 3.45 0 0 1 1.449-.284c.246-.003.491.02.732.068.158.024.309.08.444.164l-.759 1.832a2.09 2.09 0 0 0-1.093-.26c-.33-.01-.658.062-.954.208a1.422 1.422 0 0 0-.591.565Zm2.9 6.918H9.355L14.7 2.633c.426.272.828.58 1.2.922l-4.984 11.996Z"></path>
                            </svg>
                            <span>r/ProRevenge</span>
                            <button onClick={() => toggleStarFill('star9')}>
                                {starStates.star9 ?
                                    <svg rpl="" className='star' fill="currentColor" height="16" icon-name="star-fill" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.943 7.659a1.142 1.142 0 0 0-.871-.771l-5.4-1.046L11 1.024a1.191 1.191 0 0 0-2 0L6.333 5.842.928 6.888a1.145 1.145 0 0 0-.619 1.9l3.757 4.024-.674 5.468a1.144 1.144 0 0 0 1.62 1.178L10 17.127l4.988 2.331a1.145 1.145 0 0 0 1.62-1.177l-.674-5.464 3.757-4.024a1.14 1.14 0 0 0 .252-1.134Z"></path>
                                    </svg> :
                                    <svg className='star' icon-name="star-outline" fill="currentColor" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.473 19.566c-.168 0-.333-.036-.485-.107L10 17.127l-4.988 2.332a1.145 1.145 0 0 1-1.62-1.179l.674-5.463L.309 8.793a1.145 1.145 0 0 1 .619-1.9l5.405-1.051L9 1.024a1.192 1.192 0 0 1 2 0l2.665 4.818 5.4 1.046a1.145 1.145 0 0 1 .619 1.9l-3.757 4.024.674 5.464a1.143 1.143 0 0 1-1.135 1.285l.007.005ZM10 15.748l5.345 2.5-.724-5.855 4.026-4.313-5.791-1.122L10 1.8 7.144 6.958 1.353 8.08l4.026 4.311-.724 5.855L10 15.748Z"></path>
                                    </svg>
                                }
                            </button>
                        </div>

                        <div className="communities_options">
                            <svg className="rounded-full" rpl="" icon-name="community-fill" fill="currentColor" viewBox="0 0 20 20" width="32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0ZM8.016 8.633a1.616 1.616 0 0 0-.2.806V13.5H5.931V6.172h1.8v.9h.039a3.009 3.009 0 0 1 1.018-.732 3.45 3.45 0 0 1 1.449-.284c.246-.003.491.02.732.068.158.024.309.08.444.164l-.759 1.832a2.09 2.09 0 0 0-1.093-.26c-.33-.01-.658.062-.954.208a1.422 1.422 0 0 0-.591.565Zm2.9 6.918H9.355L14.7 2.633c.426.272.828.58 1.2.922l-4.984 11.996Z"></path>
                            </svg>
                            <span>r/TalesFromRetail</span>
                            <button onClick={() => toggleStarFill('star10')}>
                                {starStates.star10 ?
                                    <svg rpl="" className='star' fill="currentColor" height="16" icon-name="star-fill" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.943 7.659a1.142 1.142 0 0 0-.871-.771l-5.4-1.046L11 1.024a1.191 1.191 0 0 0-2 0L6.333 5.842.928 6.888a1.145 1.145 0 0 0-.619 1.9l3.757 4.024-.674 5.468a1.144 1.144 0 0 0 1.62 1.178L10 17.127l4.988 2.331a1.145 1.145 0 0 0 1.62-1.177l-.674-5.464 3.757-4.024a1.14 1.14 0 0 0 .252-1.134Z"></path>
                                    </svg> :
                                    <svg className='star' icon-name="star-outline" fill="currentColor" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.473 19.566c-.168 0-.333-.036-.485-.107L10 17.127l-4.988 2.332a1.145 1.145 0 0 1-1.62-1.179l.674-5.463L.309 8.793a1.145 1.145 0 0 1 .619-1.9l5.405-1.051L9 1.024a1.192 1.192 0 0 1 2 0l2.665 4.818 5.4 1.046a1.145 1.145 0 0 1 .619 1.9l-3.757 4.024.674 5.464a1.143 1.143 0 0 1-1.135 1.285l.007.005ZM10 15.748l5.345 2.5-.724-5.855 4.026-4.313-5.791-1.122L10 1.8 7.144 6.958 1.353 8.08l4.026 4.311-.724 5.855L10 15.748Z"></path>
                                    </svg>
                                }
                            </button>
                        </div>

                        <div className="communities_options">
                            <img className="rounded-full" src="https://styles.redditmedia.com/t5_2wlcx/styles/communityIcon_iodmd8g233hb1.png?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=2e5710a3897b95d344930e0c9172a468bbb99f57"/>
                            <span>r/TalesFromTheF...</span>
                            <button onClick={() => toggleStarFill('star11')}>
                                {starStates.star11 ?
                                    <svg rpl="" className='star' fill="currentColor" height="16" icon-name="star-fill" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.943 7.659a1.142 1.142 0 0 0-.871-.771l-5.4-1.046L11 1.024a1.191 1.191 0 0 0-2 0L6.333 5.842.928 6.888a1.145 1.145 0 0 0-.619 1.9l3.757 4.024-.674 5.468a1.144 1.144 0 0 0 1.62 1.178L10 17.127l4.988 2.331a1.145 1.145 0 0 0 1.62-1.177l-.674-5.464 3.757-4.024a1.14 1.14 0 0 0 .252-1.134Z"></path>
                                    </svg> :
                                    <svg className='star' icon-name="star-outline" fill="currentColor" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.473 19.566c-.168 0-.333-.036-.485-.107L10 17.127l-4.988 2.332a1.145 1.145 0 0 1-1.62-1.179l.674-5.463L.309 8.793a1.145 1.145 0 0 1 .619-1.9l5.405-1.051L9 1.024a1.192 1.192 0 0 1 2 0l2.665 4.818 5.4 1.046a1.145 1.145 0 0 1 .619 1.9l-3.757 4.024.674 5.464a1.143 1.143 0 0 1-1.135 1.285l.007.005ZM10 15.748l5.345 2.5-.724-5.855 4.026-4.313-5.791-1.122L10 1.8 7.144 6.958 1.353 8.08l4.026 4.311-.724 5.855L10 15.748Z"></path>
                                    </svg>
                                }
                            </button>
                        </div> </> : ''
                    }

                </div>

                <span className='line'></span>

                <div className="create-cont">

                    <div className="show-hide-btn" onClick={() => toggleSection(setResourcesOpen)}>
                        <span>RESOURCES</span>
                        <svg className={`arrow ${resourcesOpen ? 'open' : 'closed'}`} rpl="" fill="currentColor" icon-name="caret-down-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                        </svg>
                    </div>

                    {resourcesOpen ? 
                        <>
                            <div className="resources-option">
                                <svg className='res-icon' rpl="" fill="currentColor" height="20" icon-name="admin-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.938 9.211a3.25 3.25 0 0 0-3.177-2.642c-.45 0-.895.102-1.3.3a10.812 10.812 0 0 0-4.838-1.379l.81-3.741 2.444.519a1.492 1.492 0 1 0 .2-1.235L11.572.5a1.13 1.13 0 0 0-1.333.862L9.343 5.5a10.77 10.77 0 0 0-4.791 1.357 3.214 3.214 0 0 0-1.315-.289A3.248 3.248 0 0 0 .064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 0 0 .912 1.754l.066.071v.127c.076 3.69 4.013 6.582 8.975 6.582 4.961 0 8.89-2.889 8.965-6.567l.006-.138.044-.046a3.252 3.252 0 0 0 .939-1.778c.067-.4.062-.81-.015-1.208Zm-1.221 1c-.075.42-.282.805-.59 1.1l-.392.407-.024.625c-.061 3-3.45 5.354-7.716 5.354-4.267 0-7.66-2.353-7.717-5.371l-.024-.6-.4-.433c-.3-.293-.5-.674-.571-1.087a2.138 2.138 0 0 1 .012-.765 2 2 0 0 1 1.942-1.623c.353.003.698.102 1 .286l.337.216.334-.22a9.435 9.435 0 0 1 4.758-1.381h.719a9.427 9.427 0 0 1 4.726 1.4l.347.225.343-.232a1.7 1.7 0 0 1 .96-.3 2 2 0 0 1 1.949 1.629c.049.253.051.512.007.766v.004Z"></path>
                                </svg>
                                <span>About Reddit</span>
                            </div>

                            <div className="resources-option">
                                <svg className='res-icon' rpl="" fill="currentColor" height="20" icon-name="topic-activism-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.175 13.11c-.237.462-.428.6-.514.627l-.133-.035c-.439-.238-1.278-2.03-1.278-5.2 0-2.95.729-4.718 1.184-5.144l.245-.087c.095.042.276.192.5.62l.284.556 1.113-.57-.285-.556c-.541-1.057-1.17-1.3-1.618-1.316h-.044a1.4 1.4 0 0 0-.754.23L3.7 5.852c-.915-.552-1.847-.991-2.61-.58C.237 5.735.044 6.98 0 9c.047 2 .24 3.245 1.093 3.7.783.423 1.754-.06 2.7-.637.288.1.685.218 1.224.37v4.347a1.122 1.122 0 0 0 1.121 1.12h2.75a1.123 1.123 0 0 0 1.122-1.12v-3l4.028 1.075c.183.088.384.134.587.135.45 0 1.1-.23 1.661-1.32l.285-.555-1.113-.57-.283.566Zm-11.882-2.2c-1.247.782-1.546.734-1.607.7C1.6 11.56 1.3 11.229 1.25 9c.049-2.25.345-2.582.434-2.63.064-.033.361-.081 1.61.7a.624.624 0 0 0 .54.058l8.838-3.146A13.9 13.9 0 0 0 12 8.5c-.034 1.608.221 3.21.754 4.728L3.79 10.834a.622.622 0 0 0-.497.073v.004Zm2.97 5.753v-3.877c.678.184 1.507.405 2.5.67v3.2l-2.5.007ZM19.25 8v1.25H16V8h3.25Zm-3.477-2.674 2.82-1.594.615 1.088-2.819 1.594-.616-1.088Zm.616 5.26 2.819 1.594-.615 1.088-2.82-1.594.616-1.088Z"></path>
                                </svg>
                                <span>Advertise</span>
                            </div>

                            <div className="resources-option">
                                <svg className='res-icon' rpl="" fill="currentColor" height="20" icon-name="help-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 20a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Zm0-18.75A8.75 8.75 0 1 0 18.75 10 8.76 8.76 0 0 0 10 1.25Zm1.611 4.058a2.4 2.4 0 0 1 .994.861c.241.375.366.812.359 1.258a2.04 2.04 0 0 1-.167.854c-.1.229-.238.439-.407.622-.2.208-.413.404-.636.588-.223.188-.4.348-.533.483a1.754 1.754 0 0 0-.328.464 1.326 1.326 0 0 0-.13.591v.78H9.328v-.759a2.216 2.216 0 0 1 .601-1.572c.204-.21.421-.406.65-.588.209-.173.373-.316.492-.431a1.52 1.52 0 0 0 .3-.4 1.154 1.154 0 0 0-.058-1.128 1.192 1.192 0 0 0-.485-.421 1.525 1.525 0 0 0-.677-.151 1.545 1.545 0 0 0-.721.168 1.3 1.3 0 0 0-.713 1.131H7.256a2.628 2.628 0 0 1 1.381-2.293A3.132 3.132 0 0 1 10.175 5c.496-.008.987.097 1.436.308Zm-2.164 9.843a1.088 1.088 0 0 1-.386-.385 1.034 1.034 0 0 1-.144-.537c-.002-.186.048-.37.144-.53.094-.16.227-.293.386-.387a1.03 1.03 0 0 1 .53-.143 1.062 1.062 0 0 1 .926 1.597c-.096.159-.23.291-.389.385a1.034 1.034 0 0 1-.537.144 1.021 1.021 0 0 1-.53-.144Z"></path>
                                </svg>
                                <span>Help</span>
                            </div>

                            <div className="resources-option">
                                <svg className='res-icon' rpl="" fill="currentColor" height="20" icon-name="topic-reading-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.375 2h-7.292A2.688 2.688 0 0 0 10 3a2.688 2.688 0 0 0-2.083-1H.625A.625.625 0 0 0 0 2.625v14.75A.625.625 0 0 0 .625 18h7.917v-1.25H1.25V3.25h6.667a1.465 1.465 0 0 1 1.458 1.469v11.093h1.25V4.719a1.465 1.465 0 0 1 1.458-1.469h6.667v13.5h-6.667a2.64 2.64 0 0 0-2.708 2.625V20h1.25v-.625A1.388 1.388 0 0 1 12.083 18h7.292a.624.624 0 0 0 .625-.625V2.625A.625.625 0 0 0 19.375 2Z"></path>
                                </svg>
                                <span>Blog</span>
                            </div>

                            <div className="resources-option">
                                <svg className='res-icon' rpl="" fill="currentColor" height="20" icon-name="topic-careers-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.784 12.331a7 7 0 0 0 1.165.6l-6.174 6.178a2.747 2.747 0 0 1-3.883-3.884l6.18-6.181c.162.409.362.8.6 1.171l-5.897 5.894a1.5 1.5 0 0 0 0 2.116 1.533 1.533 0 0 0 2.118 0l5.891-5.894Zm4.481-.309a5.7 5.7 0 0 0 4.671-3.953 5.372 5.372 0 0 0-.1-3.538 1.116 1.116 0 0 0-.813-.7 1.127 1.127 0 0 0-1.039.305L14.118 7A.807.807 0 0 1 13 7a.79.79 0 0 1 0-1.116l2.864-2.863a1.127 1.127 0 0 0 .3-1.04 1.112 1.112 0 0 0-.7-.812 5.363 5.363 0 0 0-3.539-.1 5.7 5.7 0 0 0-3.946 4.666 5.627 5.627 0 0 0 6.287 6.287Zm.58-9.75L12.117 5a2.043 2.043 0 0 0 0 2.884 2.088 2.088 0 0 0 2.883 0l2.727-2.726c.271.825.276 1.714.013 2.542a4.432 4.432 0 0 1-3.628 3.079A4.377 4.377 0 0 1 9.22 5.887a4.429 4.429 0 0 1 4.342-3.822c.437 0 .87.07 1.284.207Z"></path>
                                </svg>
                                <span>Careers</span>
                            </div>

                            <div className="resources-option marg-bottom">
                                <svg className='res-icon' rpl="" fill="currentColor" height="20" icon-name="author-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.128 0a4.78 4.78 0 0 0-4.774 4.774c.007.214.029.427.065.638l-.137-.138a1.143 1.143 0 0 0-1.719.126L.461 16.2a2.315 2.315 0 0 0 3.241 3.24l10.8-8.1a1.14 1.14 0 0 0 .122-1.718l-.138-.138c.212.036.426.058.64.065a4.773 4.773 0 1 0 0-9.547L15.128 0ZM2.955 18.445a1.07 1.07 0 0 1-1.5-1.5L9.487 6.239l4.175 4.176-10.707 8.03ZM15.128 8.3a3.53 3.53 0 1 1 0-7.06 3.53 3.53 0 0 1 0 7.06Zm-7.186 2.78L10.018 9l.88.88-2.077 2.08-.879-.88Z"></path>
                                </svg>
                                <span>Press</span>
                            </div>

                            <span className='line'></span>

                            <div className="resources-option marg-top">
                                <svg className='res-icon' rpl="" fill="currentColor" height="20" icon-name="community-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.875 7.614a2.055 2.055 0 0 0-.974.222 1.62 1.62 0 0 0-.879 1.46v4.2H6.409V6.2h1.552v.93H8c.275-.32.616-.575 1-.748.453-.207.947-.31 1.445-.3.243-.003.487.02.725.071.158.03.31.084.451.161l-.649 1.559a1.731 1.731 0 0 0-.523-.2 2.755 2.755 0 0 0-.574-.059ZM20 10A10 10 0 1 1 10 0a10.011 10.011 0 0 1 10 10Zm-1.25 0a8.722 8.722 0 0 0-2.841-6.435l-4.974 11.986H9.581l5.3-12.809A8.748 8.748 0 1 0 18.75 10Z"></path>
                                </svg>
                                <span>Communitis</span>
                            </div>

                            <div className="resources-option">
                                <svg className='res-icon' rpl="" fill="currentColor" height="20" icon-name="topic-history-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.625 19H2.375v-1.25h15.25V19ZM17 4.684V3.625h-1.25v1.059a4.6 4.6 0 0 1-2.8 4.215l-1.062.442a.626.626 0 0 0 0 1.155l1.055.438a4.609 4.609 0 0 1 2.81 4.219v1.222H17v-1.222a5.853 5.853 0 0 0-3.28-5.235A5.85 5.85 0 0 0 17 4.684Zm-7 9.253 2.475 2.438h1.783l-3.82-3.761a.625.625 0 0 0-.876 0l-3.8 3.761h1.763L10 13.937ZM3 3.625v1.059a5.85 5.85 0 0 0 3.28 5.234A5.852 5.852 0 0 0 3 15.153v1.222h1.25v-1.222a4.6 4.6 0 0 1 2.8-4.215l1.065-.438a.626.626 0 0 0 0-1.155L7.06 8.9a4.609 4.609 0 0 1-2.81-4.216V3.625H3ZM17.625 1H2.375v1.25h15.25V1Z"></path>
                                </svg>
                                <span>Best of Reddit</span>
                            </div>

                            <div className="resources-option marg-bottom">
                                <svg className='res-icon' rpl="" fill="currentColor" height="20" icon-name="topic-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="m19.567 18.683-2.194-2.194a3.508 3.508 0 1 0-.884.885l2.194 2.193.884-.884ZM14.5 16.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM5.5 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0 5.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM12.125 9h4.75A1.127 1.127 0 0 0 18 7.875v-4.75A1.127 1.127 0 0 0 16.875 2h-4.75A1.127 1.127 0 0 0 11 3.125v4.75A1.127 1.127 0 0 0 12.125 9Zm.125-5.75h4.5v4.5h-4.5v-4.5ZM7.875 11h-4.75A1.127 1.127 0 0 0 2 12.125v4.75A1.127 1.127 0 0 0 3.125 18h4.75A1.127 1.127 0 0 0 9 16.875v-4.75A1.127 1.127 0 0 0 7.875 11Zm-.125 5.75h-4.5v-4.5h4.5v4.5Z"></path>
                                </svg>
                                <span>Topics</span>
                            </div>

                            <span className='line'></span>

                            <div className="resources-option marg-top">
                                <svg className='res-icon' rpl="" fill="currentColor" height="20" icon-name="topic-ethics-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.375 1H18.25V0H17v1h-1.375a.625.625 0 0 0-.625.625V3H5V1.625A.625.625 0 0 0 4.375 1H3.25V0H2v1H.625A.625.625 0 0 0 0 1.625v16.75A.625.625 0 0 0 .625 19H2v1h1.25v-1h1.125A.625.625 0 0 0 5 18.375V17h10v1.375a.624.624 0 0 0 .625.625H17v1h1.25v-1h1.125a.624.624 0 0 0 .625-.625V1.625A.625.625 0 0 0 19.375 1ZM3.75 17.75h-2.5V2.25h2.5v15.5Zm1.25-2V4.25h10v11.5H5Zm13.75 2h-2.5V2.25h2.5v15.5ZM7.782 7.025h4.436v1.25H7.782v-1.25Zm0 4h4.436v1.25H7.782v-1.25Z"></path>
                                </svg>
                                <span>Content Policy</span>
                            </div>

                            <div className="resources-option">
                                <svg className='res-icon' rpl="" fill="currentColor" height="20" icon-name="topic-law-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.3 8.625 3.621 5.31l1.324 3.315h1.346L4.256 3.53a1.37 1.37 0 0 1 1.362-1.28h8.764a1.37 1.37 0 0 1 1.362 1.28l-2.035 5.1h1.346l1.324-3.32L17.7 8.625h1.346l-2.061-5.16A2.62 2.62 0 0 0 14.382 1H5.618a2.62 2.62 0 0 0-2.606 2.465L.951 8.625H2.3Z"></path><path d="M6.617 10H.625a.625.625 0 0 0-.625.625 3.62 3.62 0 1 0 7.242 0A.625.625 0 0 0 6.617 10Zm-3 3a2.376 2.376 0 0 1-2.288-1.75h4.58A2.376 2.376 0 0 1 3.621 13h-.004Z"></path><path d="M19.375 10h-5.992a.624.624 0 0 0-.625.625 3.622 3.622 0 0 0 6.966 1.386c.182-.44.276-.91.276-1.386a.624.624 0 0 0-.625-.625Zm-3 3a2.376 2.376 0 0 1-2.288-1.75h4.576A2.375 2.375 0 0 1 16.379 13h-.004Z"></path><path d="M10.625 5h-1.25v12.7H6.479v1.25h7.042V17.7h-2.896V5Z"></path>
                                </svg>
                                <span>Privacy Policy</span>
                            </div>

                            <div className="resources-option">
                                <svg className='res-icon' rpl="" fill="currentColor" height="20" icon-name="rules-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.35 7.333H5.733V6.77h.48V5.23a1.232 1.232 0 0 1-.47.111v-.507c.178.01.353-.05.487-.167h.7v2.1h.419l.003.566Zm-.767 1.92c.164 0 .258.082.258.23 0 .22-.115.276-.516.522-.7.422-.768.806-.768 1.185v.143h1.975v-.564H6.374c.039-.106.149-.236.483-.424.538-.29.659-.581.659-.878 0-.488-.3-.8-.916-.8a1.171 1.171 0 0 0-1.05.633l.479.345a.708.708 0 0 1 .554-.392Zm.536 4.66a.544.544 0 0 0 .383-.545c0-.438-.313-.7-.9-.7a1.435 1.435 0 0 0-1.01.4l.369.427a.824.824 0 0 1 .588-.26c.178 0 .275.081.275.211 0 .156-.1.253-.448.253h-.218v.482h.205c.356 0 .507.086.507.307 0 .162-.1.28-.383.28a.7.7 0 0 1-.566-.334L5.5 14.8a1.22 1.22 0 0 0 1.047.529c.626 0 1.036-.286 1.036-.826a.581.581 0 0 0-.464-.59Zm1.88-3.288h6v-1.25H9v1.25Zm0 4h6v-1.25H9v1.25Zm0-8h6v-1.25H9v1.25Zm9-5.014v17.271A1.123 1.123 0 0 1 16.876 20h-12.7a1.123 1.123 0 0 1-1.125-1.118V4.25h-.875A1.127 1.127 0 0 1 1.05 3.125v-1.5A1.627 1.627 0 0 1 2.675 0h13.7A1.62 1.62 0 0 1 18 1.611ZM2.3 3h.75V1.625a.375.375 0 0 0-.75 0V3Zm14.45-1.389a.369.369 0 0 0-.374-.361H4.252a1.6 1.6 0 0 1 .048.375V18.75h12.45V1.611Z"></path>
                                </svg>
                                <span>User Agreement</span>
                            </div>
                        </> : ''
                    }

                </div>

                <footer>
                    <a href="https://redditinc.com/">
                        Reddit, Inc. © 2024. All rights reserved.
                    </a>
                </footer>

            </div>
        </>
    )

}

export default LeftSidebar;