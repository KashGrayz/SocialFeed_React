import React, { useState } from 'react';

const NewPost = (props) => {

    const [name , setName] = useState(0)
    const [comment, setComment] = ('')

    function handleSubmit(event) {
        event.preventDefault();
        let newStatus ={

            name: name,
            comment: comment
        };
        console.log(newStatus)
        props.addNewStatusProperty(newStatus)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <lable>Name</lable>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
                <label>Comment</label>
                <input type='text' value={comment} onChange={(event) => setComment(event.target.value)} />
            </div>
            <button type='submit'>Buzz</button>
        </form>
    )
}

export default NewPost;