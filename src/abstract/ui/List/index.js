import React from "react";
import './style.css'

export default function List(props) {
  const {data, onClick, ComponentType} = props;


  let listUI = data.map((listItem, index)=>{
    const listClickHandler = ()=>{
      onClick && onClick(listItem)
    };
    return (
      <ComponentType key={index}
                     onClick={listClickHandler}
                     data={listItem}/>
    )
  });

  return (
  <div className='list-container'>
    {listUI}
  </div>)
}