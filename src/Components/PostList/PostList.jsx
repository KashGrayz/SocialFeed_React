import React from 'react';
import UserPosts from '../UserPosts/UserPosts.jsx'

const PostList = (props) => {

    return (
        <div>
            {props.parentPost.map((el)=>{
                return(
                    <div>
                        <UserPosts posts ={el}/>
                    </div>
                )
            })}
        </div>
        
    );
}

export default PostList;