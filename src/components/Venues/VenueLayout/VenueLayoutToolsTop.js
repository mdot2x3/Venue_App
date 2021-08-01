import React from 'react';
import './VenueLayoutToolsTop.scss';
import {clone} from '../../../common/utils/clone';

const VenueLayoutsToolsTop = ({props}) => {
  
  const venueLayoutState = props.venueLayoutState;
  const setVenueLayoutState = props.setVenueLayoutState;
  const display = props.display;
  const editing = props.editing;
  const toggleVenueLayoutEditing = props.toggleVenueLayoutEditing;
  const toggleVenueLayoutExpand = props.toggleVenueLayoutExpand;

  const sizeRatioOnChange = (widthArg,heightArg) => {
    let width = (widthArg === null) ? venueLayoutState.size.width : widthArg;
    let height = (heightArg === null) ? venueLayoutState.size.height : heightArg;

    const cloneVenueLayoutState = clone(venueLayoutState);
    cloneVenueLayoutState.size.width = width
    cloneVenueLayoutState.size.height = height

    setVenueLayoutState(cloneVenueLayoutState)
  }

  const render = () => {

    const displayToolsTopClass = (display) ? " display" : "";
    const displayEditingClass = (editing) ? " display" : "";
    const displayViewingClass = (editing) ? " display" : "";

    return (
      <div className={"venue-layout-tools-top"+displayToolsTopClass}>
        <div className={"buttons-left"+displayViewingClass}>
          <button className="button editing">
            View Venue Orders
          </button>
        </div>

        <div className={"size-ratio"+displayEditingClass}>
          Layout Size Ratio 
          <input 
            type="number" 
            value={venueLayoutState.size.width} 
            onChange={(e) => {sizeRatioOnChange(e.target.value,null)}}/>
          by
          <input 
            type="number" 
            value={venueLayoutState.size.height} 
            onChange={(e) => {sizeRatioOnChange(null,e.target.value)}}/>
        </div>        

        <div className="buttons-right">
          <button className="button editing" onClick={() => {toggleVenueLayoutEditing()}}>
            {(editing) ? "Save" : "Edit"}
          </button>
          <button className="button close" onClick={() => {toggleVenueLayoutExpand()}}>
            Close
          </button>
        </div>
      </div>
    )
  }

  return render(); 
}


export default VenueLayoutsToolsTop;