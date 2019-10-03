import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import './App.scss';

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
        <header className="site-header">
          <h1>What's <span>New ?</span></h1>
          <SearchForm currentTopic={this.state.currentTopic} selectTopic={this.selectTopic}/>
        </header>

        <nav className="site-nav">
          <Menu navOptions={Object.keys(this.state)} selectTopic={this.selectTopic} state={this.state} />
        </nav>

        <section className="site-container">
          <NewsContainer news={this.state.currentTopic}/>
        </section>
      </div>
    );
  }
}

export default App;
