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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Main/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/userScreen" element={<UserScreen/>} />
      <Route path="/todos" element={<Todos/>} />
      <Route path="/info" element={<Info/>} />
      <Route path="/post" element={<Posts/>} />
    </Routes>
  </Router>




);

reportWebVitals();