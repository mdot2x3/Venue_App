import React from 'react';
import './NotFound.scss';


const NotFound = ({notFound}) => {

  const render = () => {

    return (
      <div className="not-found">
        <p>404 Page not found</p>
      </div>
    );
  }

  return render();
};

export default NotFound;