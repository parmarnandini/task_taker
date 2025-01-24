import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';
import '../styles/Login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login(username));
    } else {
      alert('Please enter a valid username');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  );
};

export default Login;
