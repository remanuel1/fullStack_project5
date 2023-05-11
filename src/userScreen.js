import React, { useState } from 'react';
import { BrowserRouter, Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import Login from './login';
import Info from './info';
import Todos from './todos';
import Posts from './post';
import { FaInfoCircle , FaTasks, FaNewspaper, FaPhotoVideo, FaSignOutAlt } from 'react-icons/fa';
import Albums from './albums';
import './userScreen.css';


function UserScreen() {

  const userDetails = JSON.parse(localStorage.getItem('current'));
  const [page, setPage] = useState('info'); // initialize the state with the default page to show
  const [showInfo, setShowInfo] = useState(false); // initialize the state for showing the info to false

  const handleLogout = () => {
    localStorage.removeItem(userDetails.id);
    localStorage.removeItem('current');
    setPage('login');

  }

  const renderPage = () => {
    switch(page) {
      case 'info':
        return showInfo && <Info />;
      case 'todos':
        return <Todos />;
      case 'posts':
        return <Posts />;
      case 'albums':
        return <Albums />;
      case 'login':
        return <Login />;
      default:
        return showInfo && <Info />;
    }
    
  }

  
  return (
    
      <div>
        <header>
          <h1 className="title">Welcome {userDetails.username}!</h1>
          <nav className="toolbar">
            <ul>
              <li>
                {/* <Link to="/info">Info</Link> */}
                <button onClick={() => {
                  setPage('info');
                  setShowInfo(true); 
                }}>
                  <FaInfoCircle   />
                   Info
                  </button>
              </li>
              <li>
                {/* <Link to="/todos">Todos</Link> */}
                <button onClick={() => setPage('todos')}><FaTasks /> Todos</button>
              </li>
              <li>
                {/* <Link to="/posts">Posts</Link> */}
                <button onClick={() => setPage('posts')}><FaNewspaper /> Posts</button>
              </li>
              <li>
                {/* <Link to="/albums">Albums</Link> */}
                <button onClick={() => setPage('albums')}><FaPhotoVideo /> Albums</button>
              </li>
              <li>
                <button onClick={handleLogout}><FaSignOutAlt /> Logout</button>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          {/* <Routes>
            <Route path="/" exact component={Login} />
            <Route path="/info" component={Info} />
            <Route path="/todos" component={Todos} />
            <Route path="/posts" component={Posts} />
            <Route path="/albums" component={Albums} />
          </Routes> */}
          {renderPage()}
        </main>
      </div>
    
  );
}


export default UserScreen;