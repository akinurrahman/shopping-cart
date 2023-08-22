import React, { useContext } from "react";
import Context from "../stateManagement/Context";

const CartList = () => {
  const {setCart, cart}=useContext(Context)
  const handleDelete = (index) => {
    const updatedData = cart.filter((_, i) => i !== index);
    setCart(updatedData);
  };

  return (
    <>
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                <div>
                  <p className="mb-0">
                    <span className="text-muted">Sort by:</span>{" "}
                    <a href="#!" className="text-body">
                      price <i className="fas fa-angle-down mt-1"></i>
                    </a>
                  </p>
                </div>
              </div>

              {cart.map((cartItem, index) => (
                <div className="card rounded-3 mb-4" key={index}>
                  <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-2 col-lg-2 col-xl-2">
                        <img
                          src={cartItem.thumbnail}
                          className="img-fluid rounded-3"
                          alt="Cotton T-shirt"
                        />
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">{cartItem.name}</p>
                        <h6 className="card-subtitle mb-2 text-muted">
                          Category: {cartItem.category}
                        </h6>
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <input
                          id="form1"
                          min={0}
                          type="number"
                          value={cartItem.quantity}
                          className="form-control"
                          onChange={(e) => {
                            const newQuantity = e.target.value; 
                            const updatedCart = cart.map((item, i) =>
                              i === index
                                ? { ...item, quantity: newQuantity }
                                : item
                            );
                            setCart(updatedCart);
                          }}
                        />
                      </div>
                      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 className="mb-0">
                          ₹{cartItem.price * cartItem.quantity}.00
                        </h5>
                      </div>
                      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" className="text-danger">
                          <i
                            className="far fa-trash-alt"
                            style={{ fontSize: "26px", color: "black" }}
                            onClick={() => handleDelete(index)}
                          ></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}



              <div className="card">
                <div className="card-body d-flex gap-3">

                  <button
                    type="button"
                    className="btn btn-dark btn-block btn-lg"
                  >
                    Proceed to Pay
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark btn-block btn-lg"
                    onClick={() => setCart([])}
                  >
                    Remove All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartList;
