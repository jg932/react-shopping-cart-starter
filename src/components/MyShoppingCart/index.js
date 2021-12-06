import React from 'react';

function MyShoppingCart(props) {
  const things = props.cart.map((element, index) => {
    return (
      <li onClick={() => props.addToCart(index)}>
        {element.name} - $ {element.price}
      </li>
    );
  });
  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
     
    </div>
  );
}


export default MyShoppingCart;
