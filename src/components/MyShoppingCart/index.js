import React from 'react';

function MyShoppingCart(props) {
  const things = props.cart.map((element, index) => {
    return (
      <li onClick={() => props.removeFromCart(index)}>
        {element.name} - $ {element.price}
      </li>
    );
  });
  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      <ul>{things}</ul>
    </div>
  );
}


export default MyShoppingCart;
