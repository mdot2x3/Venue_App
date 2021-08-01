import React from 'react';
import './VenueLayoutToolsSide.scss';
import {clone} from '../../../common/utils/clone'

const VenueLayoutToolsSide = ({props}) => {

  const venueLayoutState = props.venueLayoutState;
  const setVenueLayoutState = props.setVenueLayoutState;
  const display = props.display;
  // const editing = props.editing;

  const onSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    e.target[0].value = "";

    addItem(name,"table");
  }

  const addItem = (name,type) => {
    const newLayoutState = clone(venueLayoutState)

    newLayoutState.items.push({
      name: name,
      type: type,
      active: false,
      style:{
        heightRatio: 1,//percentage of parent
        widthRatio: 1,
        size: 5,//percentage of parent
        top: 50,
        left: 50,
        shape: "square",
      },
    })

    setVenueLayoutState(newLayoutState)
    
  }

  const toggleItemLi = (index) => {
    const newLayoutState = clone(venueLayoutState)
    newLayoutState.items[index].active = !newLayoutState.items[index].active
    setVenueLayoutState(newLayoutState);
  }

  const onChangeItem = (itemIndex,name,value) => {
    const newLayoutState = clone(venueLayoutState);

    switch(name){
      case "name":
        newLayoutState.items[itemIndex].name = value;
        break;
      case "type":
        newLayoutState.items[itemIndex].type = value;
        break;
      case "height-ratio":
        newLayoutState.items[itemIndex].style.heightRatio = value;
        break;
      case "width-ratio":
        newLayoutState.items[itemIndex].style.widthRatio = value;
        break;
      case "relative-ratio":
        newLayoutState.items[itemIndex].style.size = value;
        break;
      case "pos-top":
        newLayoutState.items[itemIndex].style.top = value;
        break;
      case "pos-left":
        newLayoutState.items[itemIndex].style.left = value;
        break;
      case "shape":
        newLayoutState.items[itemIndex].style.shape = value;
        break;
      default:
        break;
    }

    setVenueLayoutState(newLayoutState);

  }

  const onDeleteItem = (index) => {
    const newLayoutState = clone(venueLayoutState);

    newLayoutState.items.splice(index, 1);

    setVenueLayoutState(newLayoutState);
  }


  const DragHandle = (() => <div className={"reorder"}></div>)
  


  const render = () => {
    const displayClass = (display) ? " display" : "";

    return (
      <div className={"venue-layout-tools-side"+displayClass}>
        <h2>Items</h2>
        <ul>
          {venueLayoutState.items.map((item,index) => {
            const active = item.active ? " active" : "";
            return(
              <li className={"venue-layout-tools-side-item hlo"+active} key={index} >
                <div className="venue-layout-tools-side-item-summary">
                  <DragHandle />
                  <div className="venue-layout-tools-side-item-name" onClick={() => { toggleItemLi(index)}}>
                    {(item.name === "") ? item.type : item.name}
                  </div>
                </div>
                <div className={"venue-layout-tools-side-item-details"}>
                  <form className="venue-layout-tools-side-item-details-form"
                    onSubmit={(e) => {e.preventDefault()}}>
                    <div>
                      <label>Name</label>
                      <input type="text" 
                        onChange={(e) => {onChangeItem(index,e.target.name,e.target.value)}} 
                        name="name" value={item.name}/>
                    </div>
                    <div>
                      <label>Type</label>
                      <select
                        name="type" 
                        value={item.type}
                        onChange={(e) => {onChangeItem(index,e.target.name,e.target.value)}}
                        >
                        <option value="object">Object/Shape</option>
                        <option value="table">Table</option>
                      </select>
                    </div>
                    <div className="flex">
                      <div className="flex-item">
                        <label>Height</label>
                        <input type="number" 
                          onChange={(e) => {onChangeItem(index,e.target.name,e.target.value)}} 
                          name="height-ratio" value={item.style.heightRatio}/>
                      </div>
                      <div className="flex-item">
                        <label>Width</label>
                        <input type="number"
                          onChange={(e) => {onChangeItem(index,e.target.name,e.target.value)}}
                          name="width-ratio" value={item.style.widthRatio}/>
                      </div>
                      <div className="flex-item">
                        <label>Relative</label>
                        <input type="number" 
                          onChange={(e) => {onChangeItem(index,e.target.name,e.target.value)}}
                          name="relative-ratio" value={item.style.size}/>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-item">
                        <label>Top</label>
                        <input type="number" 
                          onChange={(e) => {onChangeItem(index,e.target.name,e.target.value)}}
                          name="pos-top" value={item.style.top}/>
                      </div>
                      <div className="flex-item">
                        <label>Left</label>
                        <input type="number" 
                          onChange={(e) => {onChangeItem(index,e.target.name,e.target.value)}}
                          name="pos-left" value={item.style.left}/>
                      </div>
                    </div>
                    <label>Shape</label>
                      <select
                        name="shape" 
                        value={item.shape}
                        onChange={(e) => {onChangeItem(index,e.target.name,e.target.value)}}
                        >
                        <option value="square">Square</option>
                        <option value="circle">Circle</option>
                      </select>
                    <div>
                      <button type="button" onClick={() => {onDeleteItem(index)}}>Delete</button>
                    </div>
                  </form>
                </div>
              </li> 
            )                
          })}
        </ul>
        
        <form action="" method="" onSubmit={onSubmit}>
          <input type="text" name="item" placeholder="Add Items" />
          <input type="submit" value="Add"/>
        </form>
      </div>
    );
  }

  return render();
};



export default VenueLayoutToolsSide;