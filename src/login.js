import React, { useState } from 'react';
import {UserScreen} from './userScreen';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = async () => {
    //const users = []
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json());

    const user = response.find(user => user.username === username);
    try {
        let field_lat = user.address.geo.lat;
        if(field_lat.slice(-4) == password) {
            localStorage.setItem(user.id, JSON.stringify(user)); // save in local storage
            localStorage.setItem('current', JSON.stringify(user)); //to save the current user
            //this.props.history.push("/game")
            window.open('./UserScreen.js', '_blank');
        } else {
            alert("incorrect password");
        }
    } catch {
        alert("the user name is not found.");
    }
    

  }

  return (
    <div>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
