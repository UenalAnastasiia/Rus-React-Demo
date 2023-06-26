import React, { useRef, useState } from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript 1', body: 'Description 1' },
    { id: 2, title: 'Javascript 2', body: 'Description 2' },
    { id: 3, title: 'Javascript 3', body: 'Description 3' }
  ])
  const [post, setPost] = useState({
    title: '',
    body: ''
  });

  const addNewPost = (e) => {
    e.preventDefault();     // Stop page reload
    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({title: '', body: ''});
  }


  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="Post Title" />

        <MyInput
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text"
          placeholder="Post Description" />

        <MyButton onClick={addNewPost}>Post erstellen</MyButton>
      </form>

      <PostList posts={posts} title="Posts über Javascript" />
    </div>
  );
}

export default App;
