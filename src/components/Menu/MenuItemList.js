import React from 'react';
import './MenuItemList.scss';

// import MenuItem from './MenuItem'

import {SortableContainer, SortableElement, sortableHandle} from 'react-sortable-hoc';

const MenuItemList = ({props}) => {

  console.log("props",props);
  
  const menuItems = props.menuItems;

  const onMenuItemClick = (menuItem) => {
    props.history.push("/menu/menu-item/"+menuItem.id);
  }

  const DragHandle = sortableHandle(() => <div className={"reorder"}></div>)
  const SortableItem = SortableElement(({value}) => {
    return(
      <li className="menu-item-list-item hlo">
        <div className="menu-item-list-item-container">
          <DragHandle/>    
          <div className={"body"} onClick={() => {onMenuItemClick(value)}}>{value.name}</div>
        </div>
      </li>
    )
  });

  const SortableList = SortableContainer(({items}) => {
    return (
      <ul className="menu-item-list">
        {menuItems.map((value, index) => {
          return (
            <SortableItem key={`item-${index}`} index={index} value={value} />   
          )
        })} 
      </ul>
    );
  });

  const onSortEndHandle = ({oldIndex, newIndex}) => {
    console.log("onSortEndHandle");
    console.log("oldIndex",oldIndex,"newIndex",newIndex)
  }

  const render = () => {
    
    return (
      <SortableList 
        useDragHandle
        items={menuItems} 
        onSortEnd={onSortEndHandle} />
    );
  }

  return render();
};

export default MenuItemList;