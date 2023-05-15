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
      <Route path="/userScreen" element={<UserScreen/>}>
        <Route path="/userScreen/todos" element={<Todos/>} />
        <Route path="/userScreen/info" element={<Info/>} />
        <Route path="/userScreen/posts" element={<Posts/>} />
        <Route path="/userScreen/albums" element={<Albums/>} />
        
      </Route>
      
    </Routes>
  </Router>




);

reportWebVitals();