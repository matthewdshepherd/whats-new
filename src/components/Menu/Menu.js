import React from 'react';
import './Menu.scss'

const Menu = ({ navOptions, selectTopic, state }) => {
  navOptions.pop()
  
  return (
    <ul className='menu'>
      {navOptions.map((topic, i) => (
        <li className='topic' key={i} id={topic}>
          <a href={`#${topic}`} onClick={() => selectTopic(state[topic])}>{topic.toUpperCase()}</a>
        </li>
      ))}
    </ul> 
  )
  
}

export default Menu;