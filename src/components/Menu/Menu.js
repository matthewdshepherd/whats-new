import React from 'react';
import './Menu.css'

const Menu = ({ navOptions, selectTopic, state }) => {
  navOptions.pop()
  const navBar = navOptions.map((topic, i) => <li key={i} id={topic} onClick={() => selectTopic(state[topic])}>{topic}</li>)  
  
  return (
    <ul>{navBar}</ul>
  )
}

export default Menu;