import React from 'react';
import './Menu.css'

const Menu = ({ navOptions, selectTopic, state }) => {
  navOptions.pop()
  return (
    <ul className='menu'>{navOptions.map((topic, i) => <li className='topic' key={i} id={topic} onClick={() => selectTopic(state[topic])}>{topic.toUpperCase()}</li>)} </ul> 
  )
  
}

export default Menu;