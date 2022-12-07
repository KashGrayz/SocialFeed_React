import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm.jsx';
import NavBar from './Components/NavBar/NavBar.jsx'
import PostList from './Components/PostList/PostList.jsx';


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
      <div>
        <CreatePostForm addNewPostProperty={addNewPost} />
      </div>
      <div>
        <PostList parentPost={posts} />

      </div>
      
    </div>
  );
}

export default App;
