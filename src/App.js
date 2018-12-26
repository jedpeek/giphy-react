import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

import SimpleNav from "./Components/SimpleNav"
import Home from './Containers/Home'
import Favorites from './Components/Favorites'
import MyDropzone from './Components/Dropzone'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={SimpleNav} />
          <Route path="/" exact component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/upload" component={MyDropzone} />
        </div>
      </Router>
    );
  }
}
