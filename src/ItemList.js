import React from 'react'
import LineItem from './LineItem';

const itemList = ({items,handleCheck,handleDelete}) => {
  return (
    <ul>
    {items.map((item)=>(
      <LineItem
        item= {item}
        key={item.id}// Key id is mentioned in this 
        handleCheck= {handleCheck}
        handleDelete= {handleDelete}
      />
    ))}
   </ul>
  )
}

export default itemList