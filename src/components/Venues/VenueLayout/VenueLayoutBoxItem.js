import React from 'react';
import './VenueLayoutToolsSide.scss';
import Draggable from 'react-draggable';
import {clone} from '../../../common/utils/clone';
import {getRatioInPixels} from '../../../common/utils/getRatioInPixels';

const VenueLayoutBoxItem = ({props}) => {

  const editing = props.editing;
  const item = props.item;
  const box = props.box;
  const index = props.index;
  const venueLayoutState = props.venueLayoutState;
  const setVenueLayoutState = props.setVenueLayoutState;
  
  const handleStopDrag = (e,itemIndex) => {
    const parentElement = e.target.parentElement.parentElement;
    const boxElement = box.current;
    if(!parentElement.classList.contains("react-draggable")){
      return false;
    }
    const offset = parentElement.getBoundingClientRect()
    const boxOffset = boxElement.getBoundingClientRect()

    const top = (((offset.top-boxOffset.top)/boxOffset.height) * 100).toFixed(2);
    const left = (((offset.left-boxOffset.left)/boxOffset.width) * 100).toFixed(2);

    const newLayoutState = clone(venueLayoutState);
    newLayoutState.items[itemIndex].style.top = top;
    newLayoutState.items[itemIndex].style.left = left;
    setVenueLayoutState(newLayoutState);
  }

  const render = () => {

    const pos = {
      top: item.style.top+"%",
      left: item.style.left+"%"
    }

    let offsetWidth = 0;
    let offsetHeight = 0;
    if(box && box.current){// && box.current.offsetHeight && box.offsetWidth){
      offsetWidth = box.current.offsetWidth;
      offsetHeight = box.current.offsetHeight;
    }
    
    const style = getRatioInPixels(
                    item.style.widthRatio,
                    item.style.heightRatio,
                    offsetWidth,
                    offsetHeight
                  )
    style.height = (style.height/100) * item.style.size;
    style.width = (style.width/100) * item.style.size;
    style.margin = style.height/-2+"px 0 0"+style.width/-2+"px";

    style.borderRadius = (item.style.shape === "circle") ? "50%" : "0%";

    const activeClass = (item.active) ? " active" : "";
    const typeClass = " "+item.type;


    const boxItem = (
      <div className={"venue-layout-box-item"+activeClass+typeClass}style={pos}>
        <div className="venue-layout-box-item-container">
          <div className="venue-layout-box-size" style={style}>{item.name}</div>
        </div>
      </div>
    );

    if(!editing){ 
      return boxItem 
    }

    return(
      <Draggable 
        defaultPosition={{x: 0, y: 0}}
        position={{x: 0, y: 0}}
        onStop={(e) => {handleStopDrag(e,index)}}
        >
        {boxItem}
      </Draggable>
    );
  }

  return render();
};

export default VenueLayoutBoxItem;