import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import './App.css';
import logo from '../../images/KnewsLogo.png'

class App extends Component {
  constructor(data) {
    super();
    this.local = null;
    this.entertainment = null;
    this.health = null;
    this.science = null;
    this.technology = null;
    this.currentTopic = 'local'
    this.state = {
      currentTopic: []
    };
   
  }

  componentDidMount() {
    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
    .then(response => response.json())
    .then( data => this.setTopicData(data))
    .catch(error => console.error(error))
  }

  setTopicData = (data) => {
    this.local = data.local;
    this.entertainment = data.entertainment;
    this.health = data.health;
    this.science = data.science;
    this.technology = data.technology;
    this.setState({ currentTopic: this.local})
  }

  selectTopic = (event, topic) => {
    this.setState({ currentTopic: this[topic]} )
    this.currentTopic = topic
    console.log(event)
    // add css to current topic and remove it from the rest
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
          <img className='title' src={logo} alt='Knews Logo' />
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