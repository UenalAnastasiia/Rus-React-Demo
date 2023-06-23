import React from "react";
import './styles/App.css';
import PostItem from "./components/PostItem";

function App() {

  return (
    <div className="App">
      <PostItem value={'2222'} item={{title: 0}} number={1} />
    </div>
  );
}

export default App;
