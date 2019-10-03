import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.local = local;
    this.entertainment = entertainment;
    this.health = health;
    this.science = science;
    this.technology = technology;
    this.currentTopic = 'local'
    this.state = {
      currentTopic: this.local
    };
   
  }

  selectTopic = (topic) => {
    this.setState({ currentTopic: this[topic]} )
    this.currentTopic = topic
  }

  displaySearch = (searchResults) => {
    this.setState({ currentTopic: searchResults })
  }

  search = (searchWord) => {

      this.setState({ currentTopic: this[this.currentTopic] }, 
        () => {
      this.displaySearch(this.state.currentTopic.filter(topic => {
        return (topic.headline.toLowerCase().includes(searchWord) || topic.description.toLowerCase().includes(searchWord))
      }))
    })

  }

  render () {
    return (
      <div className='app'>
        <header>
          <h1 className='title'>WHAT'S NEW</h1>
          <SearchForm currentTopic={this.currentTopic} search={this.search}/>
        </header>
        <nav className='nav'>
          <Menu selectTopic={this.selectTopic} />
        </nav>
        <section className='section'>
          <NewsContainer news={this.state.currentTopic}/>
        </section>
      </div>
    );
  }
}

export default App;