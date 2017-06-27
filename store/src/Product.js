import React from 'react';
const Product = (props) => {
  <div>
    <h3>{props.match.params.productID}</h3>
  </div>
}

  export default Product;
