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
  const [title, setTitle] = useState('');
  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();     // Stop page reload
    console.log(title);
    console.log(bodyInputRef.current.value);
  }


  return (
    <div className="App">
      <form>
        {/* controlled Input */}
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Post Title" />

        {/* uncontrolled Input */}
        <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="Post Description" />

        <MyButton onClick={addNewPost}>Post erstellen</MyButton>
      </form>

      <PostList posts={posts} title="Posts über Javascript" />
    </div>
  );
}

export default App;
