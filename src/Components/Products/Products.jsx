import React from "react";
import "./Products.css";
import Filterdetails from "../Filterdetails/Filterdetails";
import Productslist from "../ProductsList/Productslist";

const Products = () => {
  return (
    <div className="productsContainer">
      <div className="headingContainer">
        <h1>Product's</h1>
        <hr />
      </div>
        <br />
        <br />
      <Filterdetails />
      <Productslist />
    </div>
  );
};

export default Products;
