// Comments.js
import React from 'react';

const Comments = ({ postId, closeComments }) => {
    return (
        <div className="comments-container">
            <button onClick={closeComments}>Close Comments</button>
            <h3>Comments for Post {postId}</h3>
            {/* Add comments display logic here */}
        </div>
    );
};

export default Comments;
