import React from 'react';
import './MenuCategory.scss';

import {menuMockData} from './MenuMockData';
import MenuItemList from './MenuItemList';

const MenuCategory = ({props}) => {

  // const category = props.category;
  // const id = category.id;
  // const name = category.name;
  // const order = category.order;
  // const menuItems = category.menuItems;
  // console.log("props",props);
  // console.log(props.match.params.id);

  const category = menuMockData[props.match.params.id-1];

  const onMenuItemClick = (category) => {
    props.history.push("/menu/category/"+category.id);
  }

  const render = () => {
    
    return (
      <div className="menu-category hlo">
        <h1>Menu -> {category.name}</h1>
        
        <section>
          <label>Name</label>
          <input type="text"/>

          <label>Available</label>
          <input type="checkbox"/>

          <label>Hours Available</label>
          <input type="text"/>
        </section>
        
        <section>
          <MenuItemList props={{
              menuItems: category.menuItems,
              history: props.history,
            }}/>
        </section>

      </div>
    );
  }

  return render();
};

export default MenuCategory;