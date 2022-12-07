import React from 'react';
import UserPosts from '../UserPosts/UserPosts.jsx'

function PostList(props){

    return (
        <div>
            {props.posts.map((el)=>{
                return(
                    <div>
                        <UserPosts posts ={el}/>
                    </div>
                )
                
            })};
        </div>
        
    );
}

export default PostList;