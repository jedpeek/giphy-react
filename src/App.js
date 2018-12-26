import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

import SimpleNav from "./Components/SimpleNav"
import Home from './Containers/Home'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={SimpleNav}/>
          <Route path="/" exact component={Home}/>
        </div>
      </Router>
    );
  }
}
