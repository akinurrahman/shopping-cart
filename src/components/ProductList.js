import React, { useContext, useState } from "react";
import Context from "../stateManagement/Context";

const ProductList = () => {
  const { addToCart, products, uniqueList } = useContext(Context);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  // Function to handle category button clicks
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container my-4">
      
  <div className="col-12 mb-4">
    <div className="dropdown">
      {/* ... Dropdown code ... */}
      <div className="col-12 mb-4 d-flex justify-content-center">
  <div className="dropdown">
    <button
      className="btn btn-secondary dropdown-toggle"
      type="button"
      id="categoryDropdown"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {selectedCategory === "All" ? "All Categories" : selectedCategory}
    </button>
    <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
      <li>
        <button
          className={`dropdown-item ${
            selectedCategory === "All" ? "active" : ""
          }`}
          onClick={() => handleCategoryClick("All")}
        >
          All Categories
        </button>
      </li>
      {Array.from(uniqueList).map((category, index) => (
        <li key={index}>
          <button
            className={`dropdown-item ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  </div>
</div>

    </div>
  </div>
  <div className="row justify-content-center">
    {/* ... Product card mapping ... */}
    <div className="row justify-content-center">
  {filteredProducts.map((product, index) => (
    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={product.thumbnail}
            style={{ height: "191px" }}
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <h6 className="card-subtitle mb-2 " style={{ color: "green" }}>
              Category: {product.category}
            </h6>
            <p className="text-muted">{product.description}</p>
            {Array.from({ length: Math.round(product.rating) }, (_, i) => (
              <span
                key={i}
                style={{ paddingLeft: i === 0 ? "3px" : "0" }}
              >
                ⭐
              </span>
            ))}
            <h6
              className="card-subtitle mb-2  d-flex justify-content-between "
              style={{ padding: "0 5px", marginTop: "5px" }}
            >
              <span> Starts from ₹ {product.price} /-</span>{" "}
              <span
                style={{
                  color: "green",
                  fontWeight: "bold",
                }}
              >
                {product.discountPercentage}% OFF
              </span>
            </h6>
            <div
              className="btn btn-dark col-12"
              onClick={() => addToCart(product)}
            >
              Add to Cart &nbsp;
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

  </div>
</div>

  );
};

export default ProductList;
