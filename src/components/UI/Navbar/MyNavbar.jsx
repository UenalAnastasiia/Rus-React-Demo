import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';

const MyNavbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <div className="navbar">
      <MyButton onClick={logout}>
        Abmelden
      </MyButton>

      <div className="navbar__links">
        <Link to="/about">Über App</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default MyNavbar;