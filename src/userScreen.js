import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useHistory } from 'react-router-dom';
import Login from './login';
import Info from './info';
import Todos from './todos';
import Posts from './post';
import Albums from './albums';



function UserScreen() {

  const userDetails = JSON.parse(localStorage.getItem('current'));
  //const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem(userDetails.id);
    localStorage.removeItem('current');
    //history.push('/');
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

        <main>
          <Routes>
            <Route path="/" exact component={Login} />
            <Route path="/info" component={Info} />
            <Route path="/todos" component={Todos} />
            <Route path="/posts" component={Posts} />
            <Route path="/albums" component={Albums} />
          </Routes>
        </main>
      </div>
    
  );
}

export default UserScreen;
