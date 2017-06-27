import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
//import Product from './Product';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h2>Tiny Store</h2>
          </div>
          <div className='Navigation'>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/products'>Products</Link></li>
            </ul>
            <Route exact path='/' component={ Home } />
            <Route exact path='/products' component={ Products } />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
