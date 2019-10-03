import React from 'react';
import './Menu.css'

const Menu = ({ selectTopic }) => {
  const navOptions = ['local', 'entertainment', 'health', 'science', 'technology']
  return (
    <ul className='menu'>{navOptions.map((topic, i) => <li className='topic' key={i} id={topic} topic={topic} onClick={() => selectTopic(topic)}>{topic.toUpperCase()}</li>)} </ul> 
  )
  
}

export default Menu;