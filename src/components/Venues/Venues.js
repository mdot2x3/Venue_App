import React from 'react';
import './Venues.scss';

import {venueMockData} from './VenueMockData'
import VenueList from './VenueList'

const Venues = ({props}) => {

  const onVenueClick = (venue) => {
    props.history.push("/venues/"+venue.id);
  }

  const render = () => {

    const venueListProps = {
      venueData: venueMockData,
      onVenueClick: onVenueClick,
    }

    return (
      <div className="venues">
        <h1>Venues</h1>
        <button className="new-venue button">New Venue</button>
        <VenueList props={venueListProps}></VenueList>
      </div>
    );
  }

  return render();
};

export default Venues;