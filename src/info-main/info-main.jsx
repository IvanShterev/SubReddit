import React, { useState } from 'react';

const InfoMain = () => {

    return (
        <>
            <div className="info-cont">

                <div className="info-top-con">
                    <span className='info-top-title'>Am I the Asshole?</span>
                    <p>A catharsis for the frustrated moral philosopher in all of us, and a place to finally find out if you were wrong in an argument that's been bothering you. Tell us about any non-violent conflict you have experienced; give us both sides of the story, and find out if you're right, or you're the asshole. See our ~~*Best Of*~~ "Most Controversial" at /r/AITAFiltered!</p>
                    <div className="info-top-additional-first">
                        <svg rpl="" class="mr-xs" fill="currentColor" height="16" icon-name="cake-outline" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="m19.426 8.687-8.3-4.73A5.1 5.1 0 0 0 7.746.948c-.84 0-3.587 1.758-3.587 4.125 0 .112.023.218.032.328l-3.816 3.4A1.1 1.1 0 0 0 0 9.623v8.214a1.153 1.153 0 0 0 1.175 1.125L18.819 19c.318 0 .623-.124.85-.347a1.092 1.092 0 0 0 .331-.778V9.652a1.117 1.117 0 0 0-.574-.965ZM7.7 2.195c.387.076 2.382 1.308 2.382 2.878a2.34 2.34 0 1 1-4.675 0C5.409 3.5 7.4 2.271 7.7 2.195ZM18.75 14.75H4.451V16h14.3v1.75l-17.5-.037V11.25h17.5l-.001 3.5Zm0-4.75H1.25v-.3l3.325-2.967a3.555 3.555 0 0 0 6.717-1.24L18.75 9.74V10Z"></path>
                        </svg>
                        <span className='info-top-small-text'>Created Jun 8, 2013</span>
                    </div>
                    <div className="info-top-additional-second">
                        <svg rpl="" class="mr-xs" fill="currentColor" height="16" icon-name="world-outline" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm8.718 9.375h-4.645c-.075-3.017-.7-6.051-1.819-7.82a8.755 8.755 0 0 1 6.464 7.82ZM10 18.75c-1.138 0-2.7-3.077-2.824-8.125h5.647C12.7 15.673 11.137 18.75 10 18.75ZM7.176 9.375C7.3 4.327 8.862 1.25 10 1.25s2.7 3.077 2.823 8.125H7.176Zm.569-7.82C6.625 3.324 6 6.359 5.926 9.375H1.282a8.756 8.756 0 0 1 6.463-7.82Zm-6.463 9.07h4.644c.075 3.016.7 6.051 1.819 7.82a8.756 8.756 0 0 1-6.463-7.82Zm10.972 7.82c1.12-1.769 1.744-4.8 1.819-7.82h4.645a8.754 8.754 0 0 1-6.464 7.82Z"></path>
                        </svg>
                        <span className='info-top-small-text'>Public</span>
                    </div>

                    <div className="members-and-online">
                        <div className="members">
                            <span className='numbers'>21M</span>
                            <span className='info-top-small-text'>Members</span>
                        </div>

                        <div className="online">
                            <span className='numbers'>2.8K</span>
                            <span className='info-top-small-text'><span className='online-green'></span> Online</span>
                        </div>
                    </div>
                </div>

                <span className='info-line'></span>

                <div className="community-bookmarks-top">
                    <span>COMMUNITY BOOKMARKS</span>
                    <a href='#'>Assk the Mods</a>
                    <a href='#'>Frequently Assed Q's</a>
                    <a href="#" id='community-bookmarks-top-diff'>Asshole Arsechives<svg rpl="" fill="currentColor" height="16" icon-name="caret-down-outline" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                        </svg>
                    </a>
                    <a href="#">Resources</a>
                </div>

                <span className='info-line'></span>

                <div className="important-links-cont">
                    <span>IMPORTANT LINKS</span>
                    <a href="#">Frequently Assed Questions</a>
                    <a href="#">How To Post</a>
                    <span>See our <a href="#">Resources page</a> for:</span>
                    <ul>
                        <li><a href="#">Resources for those in an unhealthy or<br></br> abusive relationship</a></li>
                        <li><a href="#">Resources for members of the<br></br> LGBTQIA+ community that might need<br></br> help or support</a></li>
                        <li><a href="#">https://al-anon.org/ <br /><span>and</span> http://www.teen-anon.com/</a></li>
                        <li><a href="#">https://www.childhelp.org/</a></li>
                    </ul>
                </div>

                <span className='info-line'></span>

                <div className="rules-cont">
                    <span className='rules-title'>RULES</span>

                    <div className="rule">
                        <div className="rule-num-text">
                            <span className='rule-num'>1</span>
                            <span className='rule-text'>Be Civil</span>
                        </div>
                        <svg rpl="" fill="currentColor" height="20" icon-name="caret-down-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                        </svg>
                    </div>

                    <div className="rule">
                        <div className="rule-num-text">
                            <span className='rule-num'>2</span>
                            <span className='rule-text'>Voting Rules</span>
                        </div>
                        <svg rpl="" fill="currentColor" height="20" icon-name="caret-down-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                        </svg>
                    </div>

                    <div className="rule">
                        <div className="rule-num-text">
                            <span className='rule-num'>3</span>
                            <span className='rule-text'>Accept Your Judgment</span>
                        </div>
                        <svg rpl="" fill="currentColor" height="20" icon-name="caret-down-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                        </svg>
                    </div>

                    <div className="rule">
                        <div className="rule-num-text">
                            <span className='rule-num'>4</span>
                            <span className='rule-text'>Never Delete An Active Discussion</span>
                        </div>
                        <svg rpl="" fill="currentColor" height="20" icon-name="caret-down-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                        </svg>
                    </div>

                    <div className="rule">
                        <div className="rule-num-text">
                            <span className='rule-num'>5</span>
                            <span className='rule-text'>No Violence</span>
                        </div>
                        <svg rpl="" fill="currentColor" height="20" icon-name="caret-down-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                        </svg>
                    </div>

                    <div className="rule">
                        <div className="rule-num-text">
                            <span className='rule-num'>6</span>
                            <span className='rule-text'>How To Post</span>
                        </div>
                        <svg rpl="" fill="currentColor" height="20" icon-name="caret-down-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                        </svg>
                    </div>

                    <div className="rule">
                        <div className="rule-num-text">
                            <span className='rule-num'>7</span>
                            <span className='rule-text'>Post Interpersonal Conflicts</span>
                        </div>
                        <svg rpl="" fill="currentColor" height="20" icon-name="caret-down-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                        </svg>
                    </div>

                    <div className="rule">
                        <div className="rule-num-text">
                            <span className='rule-num'>8</span>
                            <span className='rule-text'>No Shitposts</span>
                        </div>
                        <svg rpl="" fill="currentColor" height="20" icon-name="caret-down-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                        </svg>
                    </div>

                    <div className="rule">
                        <div className="rule-num-text">
                            <span className='rule-num'>9</span>
                            <span className='rule-text'>Do Not Ask For Advice</span>
                        </div>
                        <svg rpl="" fill="currentColor" height="20" icon-name="caret-down-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                        </svg>
                    </div>

                    <div className="rule">
                        <div className="rule-num-text">
                            <span className='rule-num'>10</span>
                            <span className='rule-text'>Update and META posts are restricted</span>
                        </div>
                        <svg rpl="" fill="currentColor" height="20" icon-name="caret-down-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                        </svg>
                    </div>

                    <div className="rule">
                        <div className="rule-num-text">
                            <span className='rule-num'>11</span>
                            <span className='rule-text'>No
                                Partings/Relationship/Sex/Rep
                                roductive Autonomy Posts
                            </span>
                        </div>
                        <svg rpl="" fill="currentColor" height="20" icon-name="caret-down-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                        </svg>
                    </div>

                    <div className="rule">
                        <div className="rule-num-text">
                            <span className='rule-num'>12</span>
                            <span className='rule-text'>This Is Not A Debate Sub</span>
                        </div>
                        <svg rpl="" fill="currentColor" height="20" icon-name="caret-down-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                        </svg>
                    </div>

                    <div className="rule">
                        <div className="rule-num-text">
                            <span className='rule-num'>13</span>
                            <span className='rule-text'>No Revenge Stories</span>
                        </div>
                        <svg rpl="" fill="currentColor" height="20" icon-name="caret-down-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                        </svg>
                    </div>

                    <div className="rule">
                        <div className="rule-num-text">
                            <span className='rule-num'>14</span>
                            <span className='rule-text'>No Medical Conflicts</span>
                        </div>
                        <svg rpl="" fill="currentColor" height="20" icon-name="caret-down-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                        </svg>
                    </div>

                    <div className="rule">
                        <div className="rule-num-text">
                            <span className='rule-num'>15</span>
                            <span className='rule-text'>Review the FAQ Before Participating</span>
                        </div>
                        <svg rpl="" fill="currentColor" height="20" icon-name="caret-down-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                        </svg>
                    </div>
                </div>

                <span className='info-line'></span>

                <div className="voting-guide-cont">
                    <span>VOTING GUIDE</span>
                    <span>In your top level comment be sure to include one abbreviation for your judgment, i.e.</span>
                    <span>YTA = You're the Asshole</span>
                    <span>YWBTA = You Would Be the Asshole</span>
                    <span>NTA = Not the Asshole (and the other person is)</span>
                    <span>YWNBTA = You Would Not be the Asshole (and the other person would)</span>
                    <span>ESH = Everyone Sucks here</span>
                    <span>NAH = No Assholes here</span>
                    <span>INFO = Not Enough Info</span>
                </div>

                <span className='info-line'></span>

                <div className="flair-cont">
                    <span>FILTER BY FLAIR</span>
                    <div className="flair-options">
                        <button id='flair-asshole'>Asshole</button>
                        <button id='flair-not-asshole'>Not the A-hole</button>
                        <button id='flair-everyone-sucks'>Everyone Sucks</button>
                        <button id='flair-not-a-hole-here'>No A-holes here</button>
                        <button id='flair-ended'>Talk ENDED</button>
                        <button id='flair-update'>UPDATE</button>
                        <button id='flair-meta'>META</button>
                        <button id='flair-live'>Talk LIVE</button>
                        <button id='flair-open'>Open Forum</button>
                        <button id='flair-best'>Best of 2022</button>
                    </div>
                </div>

                <span className='info-line'></span>

                <div className="related-communities-cont">
                    <span className='related-communities-title'>RELATED COMMUNITIES</span>
                    <div className="related-community">
                        <div className="related-img-text">
                            <img src="https://styles.redditmedia.com/t5_2h1drm/styles/communityIcon_rl5tuzyrh8nb1.png" />
                            <div className="related-community-text-con">
                                <span className='related-top-span'>r/AITAFiltered</span>
                                <span className='related-bot-span'>134,402 members</span>
                            </div>
                        </div>
                        <button className="related-join">Join</button>
                    </div>

                    <div className="related-community">
                        <div className="related-img-text">
                            <img src="https://styles.redditmedia.com/t5_2h1drm/styles/communityIcon_rl5tuzyrh8nb1.png" />
                            <div className="related-community-text-con">
                                <span className='related-top-span'>r/AITAFiltered</span>
                                <span className='related-bot-span'>134,402 members</span>
                            </div>
                        </div>
                        <button className="related-join">Join</button>
                    </div>

                    <div className="related-community">
                        <div className="related-img-text">
                            <img src="https://styles.redditmedia.com/t5_2h1drm/styles/communityIcon_rl5tuzyrh8nb1.png" />
                            <div className="related-community-text-con">
                                <span className='related-top-span'>r/AITAFiltered</span>
                                <span className='related-bot-span'>134,402 members</span>
                            </div>
                        </div>
                        <button className="related-join">Join</button>
                    </div>

                    <div className="related-community">
                        <div className="related-img-text">
                            <img src="https://styles.redditmedia.com/t5_2h1drm/styles/communityIcon_rl5tuzyrh8nb1.png" />
                            <div className="related-community-text-con">
                                <span className='related-top-span'>r/AITAFiltered</span>
                                <span className='related-bot-span'>134,402 members</span>
                            </div>
                        </div>
                        <button className="related-join">Join</button>
                    </div>

                    <div className="related-community">
                        <div className="related-img-text">
                            <img src="https://styles.redditmedia.com/t5_2h1drm/styles/communityIcon_rl5tuzyrh8nb1.png" />
                            <div className="related-community-text-con">
                                <span className='related-top-span'>r/AITAFiltered</span>
                                <span className='related-bot-span'>134,402 members</span>
                            </div>
                        </div>
                        <button className="related-join">Join</button>
                    </div>

                    <div className="related-community">
                        <div className="related-img-text">
                            <img src="https://styles.redditmedia.com/t5_2h1drm/styles/communityIcon_rl5tuzyrh8nb1.png" />
                            <div className="related-community-text-con">
                                <span className='related-top-span'>r/AITAFiltered</span>
                                <span className='related-bot-span'>134,402 members</span>
                            </div>
                        </div>
                        <button className="related-join">Join</button>
                    </div>

                    <div className="related-community">
                        <div className="related-img-text">
                            <img src="https://styles.redditmedia.com/t5_2h1drm/styles/communityIcon_rl5tuzyrh8nb1.png" />
                            <div className="related-community-text-con">
                                <span className='related-top-span'>r/AITAFiltered</span>
                                <span className='related-bot-span'>134,402 members</span>
                            </div>
                        </div>
                        <button className="related-join">Join</button>
                    </div>

                    <div className="related-community">
                        <div className="related-img-text">
                            <img src="https://styles.redditmedia.com/t5_2h1drm/styles/communityIcon_rl5tuzyrh8nb1.png" />
                            <div className="related-community-text-con">
                                <span className='related-top-span'>r/AITAFiltered</span>
                                <span className='related-bot-span'>134,402 members</span>
                            </div>
                        </div>
                        <button className="related-join">Join</button>
                    </div>
                </div>

                <span className='info-line'></span>

            </div>
        </>
    )
}

export default InfoMain;