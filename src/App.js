import React from "react";
import './styles/App.css';

import { BrowserRouter as Router } from "react-router-dom";
import MyNavbar from "./components/UI/Navbar/MyNavbar";
import AppRouter from "./components/AppRouter";


function App() {
  return (
    <Router>
      <MyNavbar />
      <AppRouter />
    </Router>
  )
}

export default App;