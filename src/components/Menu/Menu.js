import React from 'react';
import './Menu.scss'

const Menu = ({ navOptions, selectTopic, state }) => {
  navOptions.pop()
  return (
    <ul className='menu'>{navOptions.map((topic, i) => <li className='topic' key={i} id={topic} onClick={() => selectTopic(state[topic])}>{topic.toUpperCase()}</li>)} </ul> 
  )
  
}

export default Menu;