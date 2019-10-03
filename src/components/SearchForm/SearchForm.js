import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {

 constructor() {
   super();
   this.state= {
     search: ''
   };
 }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  
  searchSubmit = (event) => {
    event.preventDefault();
    const search = this.state.search.toLowerCase();
    const filteredArticles = this.props.currentTopic.filter( topic => {
      return (topic.headline.toLowerCase().includes(search) || topic.description.toLowerCase().includes(search) )
    })
    // console.log(filteredArticles)

    this.props.selectTopic(filteredArticles)

 }

 render() {
   return (
     <form className='searchField'>
       <input className='input' type='text' name='search' placeholder='search' value={this.state.search} onChange={event => this.handleChange(event)}/>
       <button className='button' onClick={(event) => this.searchSubmit(event)} >Search</button>
     </form>
   )
 }

}

export default SearchForm;