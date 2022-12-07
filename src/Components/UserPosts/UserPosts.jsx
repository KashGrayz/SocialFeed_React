

const UserPosts = (props) => {


    return (
        <div>
            {props.parentPost.map((el)=>{
                return(
                    <div>
                        <h2>{el.name}</h2>
                        <p>{el.comment}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default UserPosts;