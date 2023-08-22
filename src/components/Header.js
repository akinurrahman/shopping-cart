import React, { useContext } from "react";
import "../App.css";
import Context from "../stateManagement/Context";
const Header = () => {
  const {setShowCart, cart, showCart,uniqueList} = useContext(Context)
  console.log(uniqueList)
  return (
    <>
      <div className="flex shopping-cart  ">
        <h1 className="logo">Shopping Cart App</h1>
        <div
          onClick={() => setShowCart((prev) => !prev)}
          style={{ cursor: "pointer" }}
        >

        

          {!showCart ? (
            <>
              <i
                className="fa-solid fa-cart-shopping"
                style={{ fontSize: "24px" }}
              ></i>{" "}
              <sup>{cart.length}</sup>
            </>
          ) : (
            <i className="fa-solid fa-house-user" style={{ fontSize: "24px" }}></i>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
