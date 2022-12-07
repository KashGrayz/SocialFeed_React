import React from 'react';
import PostButton from '../PostButton/PostButton';

const UserPosts = (props) => {
    return (
        <div>
            <div>
                <h3>{props.posts.name}</h3>
                <p>{props.posts.comment}</p>
                <PostButton/>
            </div>
        </div>
    );
    
}

export default UserPosts;