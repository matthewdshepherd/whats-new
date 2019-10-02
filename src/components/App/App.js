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
    this.state = {
      local,
      entertainment,
      health,
      science,
      technology,
      currentTopic: local
    }
  }

  selectTopic = (topic) => {
    this.setState({ currentTopic: topic} )
  }

  render () {
    return (
      <div className='app'>
        <header>
          <h1 className='title'>WHATS NEW</h1>
          <SearchForm />
        </header>
        <nav className='nav'>
          <Menu navOptions={Object.keys(this.state)} selectTopic={this.selectTopic} state={this.state} />
        </nav>
        <section className='section'>
          <NewsContainer news={this.state.currentTopic}/>
        </section>
      </div>
    );
  }
}

export default App;
