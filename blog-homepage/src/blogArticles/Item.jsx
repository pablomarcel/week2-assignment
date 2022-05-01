import React from 'react'

function Item({item, idx}){

  return <li key={idx}>
    <span>{item.title}</span></li>

}

export default Item
