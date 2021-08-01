import React from 'react';

const VenueListItem = ({props}) => {

  const render = () => {

    return (
      <li className="venue-list-item" onClick={() => {props.onVenueClick(props.venue)}}>
        <i></i>
        <div className="venue-list-item-details">
          <h4>{props.venue.name}</h4>
        </div>
      </li>
    );
  }

  return render();
};

export default VenueListItem;
