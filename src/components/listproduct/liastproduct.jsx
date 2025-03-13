


import React, { useEffect, useState } from "react";
import "./listproduct.css";
import cross_icon from "../Admin_Assets/cross_icon.png"; // Ensure correct import path
// import { Await } from "react-router-dom";

const ListProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  // Fetch Products
  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:510/allproducts");
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  // Remove Product Function
const remove_product = async (id)=>{
  await fetch('http://localhost:510/removeproduct',{
    method:"POST",
    headers:{
      Accept:'application/json',
      'content-Type':'application/json',

    },
    body:JSON.stringify({id:id})
  })
  await fetchInfo();
}

  return (
    <div className="listproduct">
      <h1>All Product List</h1>
      <div className="listproduct-header">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <hr />
      {allProducts.map((product) => (
        <div key={product._id} className="listproduct-format">
          <img
            src={product.image}
            alt="Product"
            className="listproduct-product-icon"
          />
          <p>{product.name}</p>
          <p>${product.old_price}</p>
          <p>${product.new_price}</p>
          <p>{product.category}</p>
          <img
            onClick={() => remove_product(product.id)}
            className="listproduct-remove-icon"
            src={cross_icon}
            alt="Remove"
            style={{ cursor: "pointer" }}
          />
        </div>
      ))}
    </div>
  );
};

export default ListProducts;

