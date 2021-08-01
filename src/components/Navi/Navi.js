import React from 'react';
import './Navi.scss';
import { NavLink } from 'react-router-dom';

const Navi = ({navi}) => {

  const render = () => {

    if (window.location.pathname === "/venue-layout" || window.location.pathname === "/view-layout"){
      return(
        <div></div>
      )
    }
    
    return (
      <div className="navi">
        <div className="navi-user">
          <i></i>
          <h4>Username</h4>
        </div>
        <ul>
          <li><NavLink className="navi-venues" to="/venues"><i></i>Venues</NavLink></li>
          <li><NavLink className="navi-menu" to="/menu"><i></i>Menu</NavLink></li>
          <li><NavLink className="navi-company" to="/company"><i></i>Company</NavLink></li>
          <li><NavLink className="navi-settings" to="/settings"><i></i>Settings</NavLink></li>
        </ul>
      </div>
    );
  }

  return render();
};

export default Navi;