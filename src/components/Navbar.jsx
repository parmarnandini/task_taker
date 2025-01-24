import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { login } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom'; 
import '../styles/Navbar.css';

const Navbar = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleOpenNews = () => {
    navigate('/news');
  };

  return (
    <nav className="navbar">
      <h1>Task Taker</h1>
      <div className="navbar-actions">
        {isLoggedIn ? (
          <> 
            <div className="navbar-user">
              <button onClick={() => dispatch(logout())} className="navbar-button logout-button">
                Logout
              </button>
            </div>
            <button onClick={handleOpenNews} className="navbar-button news-button">
              Read Daily News
            </button> 
          </>
        ) : (
          <button onClick={() => dispatch(login('User'))} className="navbar-button login-button">
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;