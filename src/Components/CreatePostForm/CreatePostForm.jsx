// Creates the frame for Creating New Posts
import './/CreateNewForm.css'
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
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <lable>Name</lable>
                <input className="form-control" type='text' value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className='form-group'>
                <label>Post</label>
                <input className="form-control" type='text' value={comment} onChange={(event) => setComment(event.target.value)} />
            </div>
            <button className='btn btn-primary buzz' style={{'margin-top': '1em'}} type='submit'>Buzz!</button>
        </form>
    )
}

export default CreatePostForm;