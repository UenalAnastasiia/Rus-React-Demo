import React, { useMemo, useState } from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'ddd', body: 'ddd' },
    { id: 2, title: 'aaa', body: 'bbb' },
    { id: 3, title: 'fff', body: 'aaaa' }
    // { id: 1, title: 'Javascript 1', body: 'Description 1' },
    // { id: 2, title: 'Javascript 2', body: 'Description 2' },
    // { id: 3, title: 'Javascript 3', body: 'Description 3' }
  ]);
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuary, setSearchQuary] = useState('');


  const sortedPosts = useMemo(() => {
    console.log('Sorted Function worked');
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts]);


  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }


  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />

      <div>
        <MyInput
          value={searchQuary}
          onChange={e => setSearchQuary(e.target.value)}
          placeholder="Suche..." />

        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sortieren nach..."
          options={[
            { value: 'title', name: 'Nach Titel' },
            { value: 'body', name: 'Nach Body' }
          ]} />
      </div>

      {posts.length !== 0
        ?
        <PostList posts={sortedPosts} remove={removePost} title="Posts über Javascript" />
        :
        <h1 style={{ textAlign: 'center' }}>Keine Posts vorhanden!</h1>
      }
    </div>
  );
}

export default App;
