import React, { useState, useRef } from 'react';
import './main-content.scss';
import InfoMain from '../info-main/info-main';
import CreatePost from '../create-post/create-post';

const MainContent = () => {
    const [allPosts, setAllPosts] = useState(
        Array.from({ length: 10 }, (_, index) => ({
            id: index, 
            photo: 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png',
            name: 'u/Exhausted-fiance',
            posted: 10,
            postTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            post: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
            likes: 500,
            comments: 200,
            liked: false,
            disliked: false
        }))
    );

    const mainContentRef = useRef(null);

    const createPostFunc = () => {
        mainContentRef.current.style.display = 'none';
    }

    const increaseLikes = (id) => {
        setAllPosts(prevPosts =>
            prevPosts.map(post => {
                if(post.id === id){
                    let newLikes;
                    let likedState;
                    let dislikedState;
                    if(post.liked){
                        newLikes = post.likes - 1;
                        likedState = false;
                    }
                    else{
                        newLikes = post.likes + 1;
                        if(post.disliked){
                            dislikedState = false;
                        }
                        else{
                            likedState = true;
                        }
                    }
                    return {
                        ...post,
                        likes: newLikes,
                        liked: likedState,
                        disliked: dislikedState
                    }
                }
                return post;
            })
        );
    };

    const decreaseLikes = (id) => {
        setAllPosts(prevPosts =>
            prevPosts.map(post => {
                if(post.id === id){
                    let newLikes;
                    let dislikedState;
                    let likedState;
                    if(post.disliked){
                        newLikes = post.likes + 1;
                        dislikedState = false;
                    }
                    else{
                        newLikes = post.likes - 1;
                        if(post.liked){
                            likedState = false;
                        }
                        else{
                            dislikedState = true;
                        }
                    }
                    return {
                        ...post,
                        likes: newLikes,
                        liked: likedState,
                        disliked: dislikedState
                    }
                }
                return post;
            })
                
        );
    };

    return (
        <>
            <div className="main-content-con" ref={mainContentRef}>
                <div className="img-cont"></div>

                <div className="create-post-con">

                    <div className="create-post-left">
                        <img src="https://styles.redditmedia.com/t5_2xhvq/styles/communityIcon_8qil7zgp7oh81.png" />
                        <span>r/AmItheAsshole</span>
                    </div>

                    <div className="create-post-right" onClick={createPostFunc}>
                        <a href="#" className='create-post-long'>
                           <svg rpl="" className='create-post-cross' fill="currentColor" height="20" icon-name="add-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 9.375h-8.375V1h-1.25v8.375H1v1.25h8.375V19h1.25v-8.375H19v-1.25Z"></path>
                            </svg>
                            <span>Create Post</span>
                       </a>

                        <a href="#" className='create-post-circle'>
                           <svg rpl="" fill="currentColor" height="20" icon-name="notification-fill" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11 18h1a2 2 0 0 1-4 0h3Zm6.263-7.07a2.699 2.699 0 0 1-1.189-2.23l-.005-1.61a6.069 6.069 0 1 0-12.138 0v1.613a2.7 2.7 0 0 1-1.193 2.227A3.949 3.949 0 0 0 1 14.208v.672A1.119 1.119 0 0 0 2.117 16h15.766A1.119 1.119 0 0 0 19 14.88v-.672a3.952 3.952 0 0 0-1.737-3.278Z"></path>
                            </svg>
                         </a>

                         <a href="#" className='create-post-long'>
                            <span>Joined</span>
                        </a>

                        <a href="#" className='create-post-circle'>
                            <svg rpl="" fill="currentColor" height="20" icon-name="overflow-horizontal-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                             <path d="M5.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM10 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path>
                             </svg>
                         </a>
                    </div>
                </div>   

                <div className="post-and-info-con">
                    <div className="post-cont">
                        {allPosts.map((post) => (
                            <React.Fragment key={post.id}>
                                <span className='line'></span>
                                <div className="post">
                                    <div className="post-header">
                                        <div className="post-header-left">
                                            <img src={post.photo} alt="User Avatar" />
                                            <span className='user-name'>{post.name}</span>
                                            <span className='post-header-left-dot'></span>
                                            <span className='post-header-left-posted'>{post.posted} hr. ago</span>
                                        </div>
                                    </div>
                                    <div className="post-body">
                                        <h3>{post.postTitle}</h3>
                                        <p>{post.post}</p>
                                    </div>
                                    <div className="post-footer">
                                        <span className={`post-footer-long ${post.liked ? 'liked' : post.disliked ? 'disliked' : ''}`}>
                                            <span className='span-like' onClick={() => increaseLikes(post.id)}>
                                                {post.liked ? 
                                                    <svg rpl="" fill="currentColor" height="16" icon-name="upvote-fill" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.706 8.953 10.834.372A1.123 1.123 0 0 0 10 0a1.128 1.128 0 0 0-.833.368L1.29 8.957a1.249 1.249 0 0 0-.171 1.343 1.114 1.114 0 0 0 1.007.7H6v6.877A1.125 1.125 0 0 0 7.123 19h5.754A1.125 1.125 0 0 0 14 17.877V11h3.877a1.114 1.114 0 0 0 1.005-.7 1.251 1.251 0 0 0-.176-1.347Z"></path>
                                                    </svg>
                                                 : 
                                                    <svg className='post-footer-like' rpl="" fill="currentColor" height="16" icon-name="upvote-outline" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.877 19H7.123A1.125 1.125 0 0 1 6 17.877V11H2.126a1.114 1.114 0 0 1-1.007-.7 1.249 1.249 0 0 1 .171-1.343L9.166.368a1.128 1.128 0 0 1 1.668.004l7.872 8.581a1.25 1.25 0 0 1 .176 1.348 1.113 1.113 0 0 1-1.005.7H14v6.877A1.125 1.125 0 0 1 12.877 19ZM7.25 17.75h5.5v-8h4.934L10 1.31 2.258 9.75H7.25v8ZM2.227 9.784l-.012.016c.01-.006.014-.01.012-.016Z"></path>
                                                    </svg>
                                                }
                                            </span>
                                            {post.likes}
                                            <span className='span-dislike' onClick={() => decreaseLikes(post.id)}>
                                                <svg className='post-footer-dislike' rpl="" fill="currentColor" height="16" icon-name="downvote-outline" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 20a1.122 1.122 0 0 1-.834-.372l-7.872-8.581A1.251 1.251 0 0 1 1.118 9.7 1.114 1.114 0 0 1 2.123 9H6V2.123A1.125 1.125 0 0 1 7.123 1h5.754A1.125 1.125 0 0 1 14 2.123V9h3.874a1.114 1.114 0 0 1 1.007.7 1.25 1.25 0 0 1-.171 1.345l-7.876 8.589A1.128 1.128 0 0 1 10 20Zm-7.684-9.75L10 18.69l7.741-8.44H12.75v-8h-5.5v8H2.316Zm15.469-.05c-.01 0-.014.007-.012.013l.012-.013Z"></path>
                                                </svg>
                                            </span>
                                        </span>

                                        <span className='post-footer-long post-footer-hover'>
                                        <svg className='post-footer-comment' rpl="" aria-hidden="true" fill="currentColor" height="20" icon-name="comment-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.725 19.872a.718.718 0 0 1-.607-.328.725.725 0 0 1-.118-.397V16H3.625A2.63 2.63 0 0 1 1 13.375v-9.75A2.629 2.629 0 0 1 3.625 1h12.75A2.63 2.63 0 0 1 19 3.625v9.75A2.63 2.63 0 0 1 16.375 16h-4.161l-4 3.681a.725.725 0 0 1-.489.191ZM3.625 2.25A1.377 1.377 0 0 0 2.25 3.625v9.75a1.377 1.377 0 0 0 1.375 1.375h4a.625.625 0 0 1 .625.625v2.575l3.3-3.035a.628.628 0 0 1 .424-.165h4.4a1.377 1.377 0 0 0 1.375-1.375v-9.75a1.377 1.377 0 0 0-1.374-1.375H3.625Z"></path>
                                        </svg>
                                        {post.comments}
                                    </span>
                                    <span className='post-footer-long ribbon post-footer-hover'>
                                        <svg className='post-footer-ribbon' rpl="" aria-hidden="true" fill="currentColor" height="20" icon-name="award-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m19.435 15.839-3.003-4.5A7.495 7.495 0 1 0 2.5 7.498c0 1.354.37 2.68 1.069 3.84L.573 15.825a.85.85 0 0 0 .744 1.34l2.565-.104.878 2.359a.848.848 0 0 0 .672.57.891.891 0 0 0 .848-.378l3.1-4.645c.41.034.83.034 1.24 0l3.109 4.658a.887.887 0 0 0 .841.365c.3-.043.563-.26.662-.546l.886-2.384 2.544.103a.852.852 0 0 0 .773-1.325Zm-13.767 2.44c-.243-.653-.412-1.915-1.03-2.336-.63-.429-1.898-.085-2.602-.057l2.315-3.468a7.502 7.502 0 0 0 3.685 2.312l-2.368 3.548ZM3.75 7.498A6.25 6.25 0 1 1 10 13.75 6.257 6.257 0 0 1 3.75 7.5Zm11.62 8.432c-.625.412-.796 1.697-1.037 2.348l-2.37-3.549a7.502 7.502 0 0 0 3.686-2.312l2.314 3.468c-.7-.029-1.962-.37-2.593.045Z"></path>
                                        </svg>
                                    </span> 
                                    <span className='post-footer-long post-footer-hover'>
                                        <svg className='post-footer-share' rpl="" aria-hidden="true" fill="currentColor" height="20" icon-name="share-new-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m18.8 8.286-6.466-7.064a.759.759 0 0 0-1.295.537v3.277C5.623 5.365 1 9.918 1 15.082v2.907h1.274C2.516 15 5.81 12.62 9.834 12.62h1.205v3.226a.757.757 0 0 0 1.315.515l6.422-7.021A.756.756 0 0 0 19 8.8a.736.736 0 0 0-.2-.514Zm-6.508 6.3V12a.625.625 0 0 0-.625-.625H9.834A9.436 9.436 0 0 0 2.26 14.7c.228-4.536 4.525-8.435 9.4-8.435a.626.626 0 0 0 .625-.625V3.023L17.576 8.8l-5.284 5.786Zm5.586-6.107a.176.176 0 0 0-.023.024.171.171 0 0 1 .02-.028l.003.004Zm-.011.642a.53.53 0 0 0-.003-.004l.003.004Z"></path>
                                        </svg>
                                        <span>Share</span>
                                    </span>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>

                    <InfoMain />
                </div>
            </div>
        </>
    );
}

export default MainContent;
