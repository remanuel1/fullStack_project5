import React from 'react';
import "./info.css";

function Info () {

    const userDetails = JSON.parse(localStorage.getItem('current'));

    return (
        <div className='info_details'>
          <h2>About me</h2>
          <p><strong>name:</strong> {userDetails.name}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>Phone:</strong> {userDetails.phone}</p>
          <p><strong>Address:</strong> {userDetails.address.street}, {userDetails.address.city}</p>
          <p><strong>Work at:</strong> {userDetails.company.name}</p>
        </div>
      );
}

export default Info;