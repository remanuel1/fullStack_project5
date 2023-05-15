import React from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate, Routes } from 'react-router-dom';

//import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './main';
import Login from './login';
import UserScreen from './userScreen';
import Info from './info';
import Todos from './todos'
import Posts from './post';
import Albums from './albums';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Main/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/userScreen/:id" element={<UserScreen/>}>
        <Route path="/userScreen/:id/todos" element={<Todos/>} />
        <Route path="/userScreen/:id/info" element={<Info/>} />
        <Route path="/userScreen/:id/posts" element={<Posts/>}>
          <Route path="/userScreen/:id/posts/:postid" element={<Posts/>}>
          <Route path="/userScreen/:id/posts/:postid/comments" element={<Posts/>}/>
          </Route>
        </Route>
        <Route path="/userScreen/:id/albums" element={<Albums/>}>
          <Route path="/userScreen/:id/albums/:albumsid/photos" element={<Albums/>}/>
        </Route>
      </Route>
      
    </Routes>
  </Router>




);

reportWebVitals();