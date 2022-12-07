import React from 'react';

function UserPosts(props) {
    return (
        <div>
            <div>
                <h3>{props.post.name}</h3>
                <p>{props.post.comment}</p>
            </div>
            <div>
                
            </div>
        </div>
    );
    
}

export default UserPosts;