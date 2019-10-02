import React from 'react';
import './Menu.css'

const Menu = ({ navOptions, selectTopic, state }) => {
  navOptions.pop()
  return (
    <ul>{navOptions.map((topic, i) => <li key={i} id={topic} onClick={() => selectTopic(state[topic])}>{topic}</li>)} </ul> 
  )
  
}

export default Menu;