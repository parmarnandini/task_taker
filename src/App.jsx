import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import NewsPage from './components/NewsPage'; // Import NewsPage component
import Login from './components/Login';
import './styles/App.css';

const App = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  return (
    <Router> 
      <div className='App'>
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              isLoggedIn ? (
                <>
                  <header className='welcome-header'>
                    <h1>Welcome, {user}!</h1>
                  </header>
                  <TaskInput />
                  <TaskList />
                </>
              ) : (
                <Login />
              )
            } 
          />
          <Route path="/news" element={<NewsPage />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;