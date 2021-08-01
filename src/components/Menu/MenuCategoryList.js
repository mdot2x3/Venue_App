import React from 'react';
import './MenuCategoryList.scss';

import {SortableContainer, SortableElement, sortableHandle} from 'react-sortable-hoc';

const MenuCategoryList = ({props}) => {

  const menuData = props.menuData;


  const onMenuCategoryClick = (category) => {
    props.history.push("/menu/category/"+category.id);
  }

  const DragHandle = sortableHandle(() => <div className={"reorder"}></div>)
  const SortableItem = SortableElement(({value}) => {
    return(
      <li className="menu-category-list-item hlo">
        <div className="menu-category-list-item-container">
          <DragHandle/>    
          <div className={"body"} onClick={() => {onMenuCategoryClick(value)}}>{value.name}</div>
        </div>
      </li>
    )
  });

  const SortableList = SortableContainer(({items}) => {
    return (
      <ul className="menu-category-list">
        {menuData.map((value, index) => {
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
  return (
    <SortableList 
      useDragHandle
      items={menuData} 
      onSortEnd={onSortEndHandle} />
  )

  // const render = () => {
    
  //   return (
  //     <SortableContainer>
  //       <ul className="menu-category-list">
  //         { menuData.map((data,index) => {
  //           return (
  //             <SortableElement>
  //               <li key={index}>
  //                 <div className="menu-category-list-item hlo">
  //                   <div className={"reorder"}></div>
  //                   <div className={"body"} onClick={() => {onMenuCategoryClick(data)}}>{data.name}</div>
  //                 </div>
  //               </li>
  //             </SortableElement>
  //           )
  //         })} 
  //       </ul>
  //     </SortableContainer>
      
  //   );
  // }

  // return render();
};

export default MenuCategoryList;