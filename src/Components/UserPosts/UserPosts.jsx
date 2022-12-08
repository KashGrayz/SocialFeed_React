import React from 'react';
import PostButton from '../PostButton/PostButton';

const UserPosts = (props) => {
    return (
        <div>
            <div>
                <br></br>
                <h3>{props.posts.name}</h3>
                <br></br>
                <p>{props.posts.comment}</p>
                <PostButton/>
                <hr style={{'height':'2px','border-width':'0','color':'gray','background-color':'gray'}}></hr>
            </div>
        </div>
    );
    
}

export default UserPosts;