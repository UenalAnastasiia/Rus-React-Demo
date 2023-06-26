import React, { useState } from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript 1', body: 'Description 1' },
    { id: 2, title: 'Javascript 2', body: 'Description 2' },
    { id: 3, title: 'Javascript 3', body: 'Description 3' }
  ]);


  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length !== 0
        ?
        <PostList posts={posts} remove={removePost} title="Posts über Javascript" />
        :
        <h1 style={{ textAlign: 'center' }}>Keine Posts vorhanden!</h1>
      }
    </div>
  );
}

export default App;
