import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <form className='searchField'>
      <input className='input' type='text' name='search' placeholder='search'/>
      <button className='button' >Search</button>
    </form>
  )
}
export default SearchForm;