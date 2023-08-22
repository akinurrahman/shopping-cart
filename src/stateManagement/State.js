import React, { useState, useEffect } from "react";
import Context from "./Context";

const State = (props) => {
  
  const [cart, setCart] = useState([]); //holds an array of items that the user has added to their shopping cart. 
  const [showCart, setShowCart] = useState(false); // State for showing/hiding cart component
  const [products, setProducts] = useState([]); //contains an array of products fetched from a fake store API

  // Function to add a product to the cart
  const addToCart = (data) => {
    const existingProduct = cart.find((item) => item.id === data.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...data, quantity: 1 }]);
    }
  };

  // Fetch products data from an fake store API
  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  // getting the unique categories
const uniqueList = new Set(products.map((currElem)=>{
  return currElem.category
}))

  // Context values to be provided to consuming components
  const contextValue = {
    cart,
    setCart,
    showCart,
    setShowCart,
    products,
    setProducts,
    // originalProducts,
    // setOriginalProducts,
    addToCart,
    uniqueList
  };

  // Provide the context values to child components
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default State;
