import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './login';
import UserScreen from './userScreen';

function Start() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/Login" Component={Login}/>
        </Routes>
      </BrowserRouter>
    );
}

export default Start;
