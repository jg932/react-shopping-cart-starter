import React from "react";

const AllTheThings = (props) => {

  const things = props.productsArr.map((element, index) => {
    return (
      <li onClick={() => props.addToCart(index)}>
        {element.name} - $ {element.price}
      </li>
    );
  });

  return (
    <div className="AllTheThings">
      <h2>Put these in your cart!</h2>
      <ul>{things}</ul>
      <br />
    </div>
  );
};

export default AllTheThings;