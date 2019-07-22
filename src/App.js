import React, { Component } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
// import Navbar from './components/NavBar';

class App extends Component {
    render() {
      return (
        <Router>
        <div>
          <NavBar/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
        </div>
        </Router>
      );
    }
}
export default App;
