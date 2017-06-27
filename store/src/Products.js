import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import Product from './Product';

export default (props) => (
  <div>
    <h2>Products</h2>
    <ul>
      <li>
        <Link to={`${props.match.url}/product1`}>
          Product 1
        </Link>
      </li>
      <li>
        <Link to={`${props.match.url}/product2`}>
          Product 2
        </Link>
      </li>
      <li>
        <Link to={`{props.match.url}/product3`}>
          Product 3
        </Link>
      </li>
    </ul>
    <Route path={`${props.match.url}/:productID`} component={Product} />
    <Route exact path={props.match.url} render={() => (
      <h3>Select a Product</h3>
    )} />
  </div>
);
