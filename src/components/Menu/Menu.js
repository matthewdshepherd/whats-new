import React from 'react';
import './Menu.css'

const Menu = ({ navOptions, selectTopic }) => {

  const navBar = navOptions.map((topic, i) => <li key={i} id={i} onClick={(event) => selectTopic(event)}>{topic}</li>)  
  

  return (
    <ul>{navBar}</ul>
  )
}

export default Menu;