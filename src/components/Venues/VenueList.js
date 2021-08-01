import React from 'react';
import './Venues.scss';

import VenueListItem from './VenueListItem'

const VenueList = ({props}) => {

  const render = () => {
    return (
      <ul className="venue-list">
        {
          props.venueData.map((e) => {
            return (
              <VenueListItem 
                key={e.id} 
                props={{
                  venue: e,
                  onVenueClick: props.onVenueClick
                }}>
              </VenueListItem>
            )
          })
        }
      </ul>
    );
  }

  return render();
};

export default VenueList;