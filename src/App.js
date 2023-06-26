import React, { useMemo, useState } from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'ddd', body: 'ddd' },
    { id: 2, title: 'aaa', body: 'bbb' },
    { id: 3, title: 'fff', body: 'aaaa' }
    // { id: 1, title: 'Javascript 1', body: 'Description 1' },
    // { id: 2, title: 'Javascript 2', body: 'Description 2' },
    // { id: 3, title: 'Javascript 3', body: 'Description 3' }
  ]);

  const [filter, setFilter] = useState({
    sort: '', query: ''
  });


  const sortedPosts = useMemo(() => {
    console.log('Sorted Function worked');
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);



  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query));
  }, [filter.query, sortedPosts]);


  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <PostForm
        create={createPost} />
        
      <hr style={{ margin: '15px 0' }} />

      <PostFilter
        filter={filter}
        setFilter={setFilter} />

      <PostList
        posts={sortedAndSearchedPosts}
        remove={removePost}
        title="Posts über Javascript" />
    </div>
  );
}

export default App;
