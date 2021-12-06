// import useState
import React, { useState } from "react";
import "./styles.css";
import AllTheThings from "./components/AllTheThings";
import MyShoppingCart from "./components/MyShoppingCart";
import Form from "./components/Form";
import productsArr from "./products";

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);
  
  const addToCart = (index) => {
    setCart([
      ...cart,
      {
        name: products[index].name,
        price: products[index].price
      }
    ]);
  }

  const removeFromCart = (index) => {
    const filteredCart = cart.filter((_, idx) => idx !== index)

    setCart([
      ...filteredCart,
    ])
  };

  // create an addToCart function that takes in a product as a param
  // using the ...spread operator add the product to the cart array

  // create an removeFromCart function that takes in an index as a param
  // using Array.filter remove create a new array where that item is removed

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <Form />
      <div className="products">
        <AllTheThings productsArr={productsArr} addToCart={addToCart} />
        <MyShoppingCart cart = {cart} removeFromCart={removeFromCart}/>
      </div>
    </div>
  );
}
