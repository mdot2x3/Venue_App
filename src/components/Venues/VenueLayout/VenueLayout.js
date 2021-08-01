import React,{useState,useEffect,useRef} from 'react';
import './VenueLayout.scss';

import { getRatioInPixels } from '../../../common/utils/getRatioInPixels'
import { ResizeObserver } from 'resize-observer';

import VenueLayoutBoxItem from './VenueLayoutBoxItem';
import VenueLayoutToolsSide from './VenueLayoutToolsSide';
import VenueLayoutToolsTop from './VenueLayoutToolsTop';

const VenueLayout = ({props}) => {

  const initVenueLayout = (localStorage.venueLayoutState !== undefined) ? JSON.parse(localStorage.venueLayoutState) : {
    size:{
      width: 16,
      height: 16,
    },
    items: [],
  }

  const editing = props.editing;
  const expand = props.expand;
  const toggleVenueLayoutEditing = props.toggleVenueLayoutEditing;
  const toggleVenueLayoutExpand = props.toggleVenueLayoutExpand;

  const box = useRef(null);
  const boxContainer = useRef(null);
  const [boxStyle,setBoxStyle] = useState({"height": "0px","width": "0px",});

  const [updateItems,setUpdateItems] = useState(false);
  const updateItemRef = useRef({})
  updateItemRef.current = updateItems
  const [venueLayoutState,setVenueLayoutState] = useState(initVenueLayout);
  const venueLayoutRef = useRef({});
  venueLayoutRef.current = venueLayoutState;

  useEffect(() =>{
    // State did update
  });

  useEffect(() =>{
    // Component did mount
    const element = boxContainer.current
    const observer = new ResizeObserver(() => {
      updateBox();
    });
    observer.observe(element)
    return () => {
      observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    // This state did update
    localStorage.setItem("venueLayoutState",JSON.stringify(venueLayoutState));
    console.log("update localStorage", venueLayoutState);
    updateBox()
  }, [venueLayoutState]);

  useEffect(() => {
    // updateItems
    setUpdateItems(!updateItemRef.current);
  }, [boxStyle]);

  const updateBox = (heightArg,widthArg) => {
    const width = (widthArg !== undefined) ? widthArg : venueLayoutRef.current.size.width 
    const height = (heightArg !== undefined) ? heightArg : venueLayoutRef.current.size.height

    const size = getRatioInPixels(width,height,boxContainer.current.offsetWidth,boxContainer.current.offsetHeight)
    setBoxStyle(size)
  }

  const render = () => {

    const expandClass = (expand) ? " expand" : "";

    return (
      <div className={"venue-layout"+expandClass} >
        <VenueLayoutToolsTop props={{
            display: expand,
            editing: editing,
            venueLayoutState: venueLayoutState,
            setVenueLayoutState: setVenueLayoutState,
            toggleVenueLayoutEditing: toggleVenueLayoutEditing,
            toggleVenueLayoutExpand: toggleVenueLayoutExpand,
          }}/>
        
        <div className="venue-layout-container">
          <VenueLayoutToolsSide props={{
              display: editing,
              venueLayoutState: venueLayoutState,
              setVenueLayoutState: setVenueLayoutState,
            }}/>

          <div className="venue-layout-box-container" ref={boxContainer}>
            <div className="venue-layout-box" style={boxStyle} ref={box}>
              {venueLayoutState.items.map((item,index) => 
                <VenueLayoutBoxItem key={index} props={{
                    box: box,
                    boxContainer: boxContainer,
                    editing: editing,
                    expand: expand,
                    item: item,
                    index: index,
                    updateItems: updateItems,
                    venueLayoutState: venueLayoutState,
                    setVenueLayoutState: setVenueLayoutState,
                  }}/>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return render();
};

export default VenueLayout;