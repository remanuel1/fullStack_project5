import React from 'react';

function Info () {

    const userDetails = JSON.parse(localStorage.getItem('current'));

    return (
        <div>
          <h2>About me</h2>
          <p>name: {userDetails.name}</p>
          <p>Email: {userDetails.email}</p>
          <p>Phone: {userDetails.phone}</p>
          <p>Address: {userDetails.address.street}, {userDetails.address.city}</p>
          <p>Work at: {userDetails.company.name}</p>
        </div>
      );
}

export default Info;