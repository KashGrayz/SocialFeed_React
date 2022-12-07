// Creates the frame for Creating New Posts

import React, { useState } from 'react';

const CreatePostForm = (props) => {

    const [name , setName] = useState('')
    const [comment, setComment] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        let newStatus ={
            name: name,
            comment: comment
        };
        console.log(newStatus)
        props.addNewPostProperty(newStatus)
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

export default CreatePostForm;