import React from 'react';
import './User.scss';


const User = ({props}) => {

  const render = () => {
    
    return (
      <div className="user">
        <h1>User</h1>
        <ul>
          <li>user settings</li>
          <li>log out</li>
        </ul>
      </div>
    );
  }

  return render();
};

export default User;