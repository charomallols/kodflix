import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Technologies from './Technologies';

import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Technologies} />
        <Route exact path='/details' component={Details} />
      </div>
    </Router>
    );
  }
}

function Details() {
  return (
    <div><h1>Welcome to the details page, WIP :)</h1></div>
  )
}

export default App;


