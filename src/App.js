import React, { Component } from 'react';
import './App.css'
import './components/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeLight from './components/HomeLight'
import Home from './components/Home'
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/light" exact component={Home}/>
        <Route path="/" component={HomeLight}/>
      </div>
    </Router>
  );
}
export default App;
