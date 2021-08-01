import React from 'react';
import './Menu.scss';

import MenuCategoryList from './MenuCategoryList'
import { menuMockData } from './MenuMockData'

const Menu = ({props}) => {

  const render = () => {

    return (
      <div className="menu">
        <h1>Menu</h1>

        <section>
          <button className="button view-live-menu">View Live Menu</button>
        </section>

        <section>
          <MenuCategoryList props={{
            menuData: menuMockData,
            history: props.history,
            }}/>
          <button className={"new-category"}>New Category + </button>
        </section>
        
      </div>
    );
  }

  return render();
};

export default Menu;