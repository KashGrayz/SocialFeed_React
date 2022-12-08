import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm.jsx';
import NavBar from './Components/NavBar/NavBar.jsx'
import PostList from './Components/PostList/PostList.jsx';
import '../src/App.css'


function App() {

  const [posts, setPosts] = useState([{ name: 'Kash Grays', comment: "Let's get into eachothers beezWAX. Please post about whatever you want."}, {name: 'Bruce Banner', comment: "You won't like me when I'm angry"}])

  function addNewPost(post) {
    
    let tempPost = [...posts, post];

    setPosts(tempPost)
  }

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className='container-fluid'>
        <div className='col-md-6'>
          <div className='border-box'>
            <CreatePostForm addNewPostProperty={addNewPost} />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='border-box'>
            <PostList parentPost={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
