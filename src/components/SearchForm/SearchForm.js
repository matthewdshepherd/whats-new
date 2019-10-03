import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {

 constructor() {
   super();
   this.currentTopic = ''
   this.state= {
     search: ''
    };
    console.log(this.props)
 }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  
  searchSubmit = (event) => {
    event.preventDefault();
    this.props.search(this.state.search.toLowerCase())
   
 }

 render() {
   return (
     <form className='searchField'>
       <input className='input' type='text' name='search' placeholder='search' value={this.state.search} onChange={event => this.handleChange(event)}/>
       <button className='button' onClick={(event) => this.searchSubmit(event)} >GO</button>
     </form>
   )
 }

}

export default SearchForm;