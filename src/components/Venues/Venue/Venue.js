import React,{useState,useEffect} from 'react';
import './Venue.scss';

import VenueLayout from '../VenueLayout/VenueLayout'

const Venue = ({props}) => {

  // Don't delete this yet. you still need it
  // console.log("props",props)
  // console.log(props.match.params.id)

  const [editingVenueLayout, setEditingVenueLayout] = useState(false)
  const [expandVenueLayout, setExpandVenueLayout] = useState(false)
  
  const toggleVenueLayoutEditing = () => {
    setEditingVenueLayout(!editingVenueLayout)
  }

  const toggleVenueLayoutExpand = () => {
    setExpandVenueLayout(!expandVenueLayout)
  }

  useEffect(() => {
    if(editingVenueLayout){
      setExpandVenueLayout(true)
    }
  },[editingVenueLayout])

  useEffect(() => {
    if(!expandVenueLayout){
      setEditingVenueLayout(false)
    }
  },[expandVenueLayout])

  const render = () => {
    
    return (
      <div className="venue">
        <h1>Venues -> Venue Name</h1>

        <section>
          <button className="button view-live-feed" onClick={toggleVenueLayoutExpand}>Live Venue Feed</button>
        </section>

        <section>
          <label>Name</label>
          <input type="text" placeholder="Name" defaultValue="Name"/>
        </section>
        
        <section>
          <label>Description</label>
          <textarea placeholder="Description" defaultValue="Description"></textarea>
        </section>

        <section>
          <label>Phone Number</label>
          <input type="text" placeholder="Phone Number" defaultValue="123-456-7890"/>
        </section>

        <section>
          <label>Operating Hours</label>
          <input type="text" placeholder="Operating Hours" defaultValue="10:00am to 6:00pm"/>
        </section>
        
        <section>
          <label>Venue Layout <button className="button" onClick={toggleVenueLayoutEditing}>Edit</button></label>
          <div style={{
            "height": "350px",
            "width": "350px",
          }}>
            <VenueLayout props={{
                editing: editingVenueLayout,
                expand: expandVenueLayout,
                toggleVenueLayoutEditing: toggleVenueLayoutEditing,
                toggleVenueLayoutExpand: toggleVenueLayoutExpand,
              }}/>
          </div>
          
        </section>

      </div>
    );
  }

  return render();
};

export default Venue;