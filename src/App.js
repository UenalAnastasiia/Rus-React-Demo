import React, { useState } from "react";
import './styles/App.css';
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript 1', body: 'Description 1' },
    { id: 2, title: 'Javascript 2', body: 'Description 2' },
    { id: 3, title: 'Javascript 3', body: 'Description 3' }
  ])

  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Python 1', body: 'Description 1' },
    { id: 2, title: 'Python 2', body: 'Description 2' },
    { id: 3, title: 'Python 3', body: 'Description 3' }
  ])

  
  return (
    <div className="App">
      <PostList posts={posts} title="Posts über Javascript" />
      <PostList posts={posts2} title="Posts über Python" />
    </div>
  );
}

export default App;
