import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {Main} from "./partials/main";
import {Invoice} from "./partials/invoice";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Main}/>
        <Route path="/invoice" component={Invoice}/>
      </div>
    );
  }
}

export default App;
