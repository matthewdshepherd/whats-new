import React, { Component } from 'react';
import local from '../../data/local';
import NewsContainer from '../NewsContainer/NewsContainer'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    return (
      <div className="app">
        YOUR CODE GOES HERE!
        <NewsContainer news={this.state.local}/>
      </div>
    );
  }
}

export default App;
