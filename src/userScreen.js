import React, { useState } from 'react';
import { BrowserRouter, Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import Login from './login';
import Info from './info';
import Todos from './todos';
import Posts from './post';
import Albums from './albums';



function UserScreen() {

  const userDetails = JSON.parse(localStorage.getItem('current'));
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem(userDetails.id);
    localStorage.removeItem('current');
  }

  return (
    
      <div>
        <header>
          <h1>Welcome {userDetails.username}!</h1>
          <nav>
            <ul>
              <li>
                <Link to="/info">Info</Link>
              </li>
              <li>
                <Link to="/todos">Todos</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
              <li>
                <Link to="/albums">Albums</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </nav>
        </header>

          <Routes>
            <Route path="/info" element={<Info/>} />
            <Route path="/todos" element={<Todos/>} />
            <Route path="/posts" element={<Posts/>} />
            <Route path="/albums" element={<Albums/>} />
          </Routes>
      </div>
    
  );
}

export default UserScreen;
