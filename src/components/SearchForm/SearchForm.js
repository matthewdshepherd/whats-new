import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {

 constructor() {
   super();
   this.state= {};
 }

 render() {
   return (
     <form className='searchField'>
       <input className='input' type='text' name='search' placeholder='search' />
       <button className='button' >Search</button>
     </form>
   )
 }

}

export default SearchForm;