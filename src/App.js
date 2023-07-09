import React, { Fragment } from "react";
import './styles/App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import MyNavbar from "./components/UI/Navbar/MyNavbar";
import Error from "./pages/Error";


function App() {
  return (
    <Router>
      <MyNavbar />
      <Fragment>
        <Routes>
          <Route  path="/" element={<About />}></Route>
          <Route  path="/about" element={<About />}></Route>
          <Route  path="/posts" element={<Posts />}></Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Fragment>
    </Router>
  )
}

export default App;