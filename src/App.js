import React, { useState } from "react";
import './styles/App.css';

import { BrowserRouter as Router } from "react-router-dom";
import MyNavbar from "./components/UI/Navbar/MyNavbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";


function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <Router>
        <MyNavbar />
        <AppRouter />
      </Router>
    </AuthContext.Provider>
  )
}

export default App;