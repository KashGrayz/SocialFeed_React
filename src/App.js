import React, { useState } from 'react';
import NavBar from './NavBar/NavBar.jsx'
import NewPost from './NewPost/NewPost.jsx';

function App() {

  const [posts, setPosts] = useState([{ name: 'Kash Grays', comment: "Let's get into eachothers beezWAX. Please post about whatever you want."}])

  function addNewPost(post) {
    
    let tempPost = [...posts, post];

    setPosts(tempPost)
  }

  return (
    <><div>
      <NavBar />
    </div><div>
        <NewPost addNewPostProperty={addNewPost} />
      </div></>
  );
}

export default App;
