import React from "react";
import Product from "./Product";
import { PRODUCTS } from "../../products";
import "./Shop.css";

export default function Shop() {
  return (
    <div>
      <h2 className="text-center p-4">Product List</h2>
      <div className="product-container">
        {PRODUCTS.map((product) => (<Product data={product} key={product.id}/>))}
      </div>
    </div>
  );
}
