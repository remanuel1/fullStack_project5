import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
//import { BrowserRouter, Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import Login from './login';
import Info from './info';
import Todos from './todos';
import Posts from './post';
import { FaInfoCircle , FaTasks, FaNewspaper, FaPhotoVideo, FaSignOutAlt } from 'react-icons/fa';
import Albums from './albums';
import './userScreen.css';
import { Navigate } from 'react-router-dom';

function UserScreen() {

  const userDetails = JSON.parse(localStorage.getItem('current'));
  const [page, setPage] = useState('info'); // initialize the state with the default page to show
  const [showInfo, setShowInfo] = useState(false); // initialize the state for showing the info to false

  const handleLogout = () => {
    //localStorage.removeItem(userDetails.id);
    localStorage.removeItem('current');
    return <Navigate to="/login"/>;
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
          <h1 className="title">Welcome {userDetails.username}</h1>
          <nav className="toolbar">
            
            <Link className='toolbar_button' to="info">
                <FaInfoCircle   />
                Info
            </Link>
            <Link className='toolbar_button' to="todos">
                <FaTasks />
                Todos
            </Link>
            <Link className='toolbar_button' to="posts">
                <FaNewspaper />
                Posts
            </Link>
            <Link className='toolbar_button' to="albums">
                <FaPhotoVideo />
                Albums
            </Link>
            <Link className='toolbar_button right' onClick={handleLogout} to="/login">
                <FaSignOutAlt />
                Logout
            </Link>
            
          </nav>
        </header>
        <Outlet />
      </div>
    
  );
}


export default UserScreen;