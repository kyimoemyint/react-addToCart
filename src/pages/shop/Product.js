import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export default function Product(props) {
  const { addToCart, cartItems,addBadge } = useContext(ShopContext);
  const { id, productName, price, productImage } = props.data;
  
  const count = cartItems[id];
  return (
    <div className="card shadow-sm" style={{ width: "18rem", padding: "10px" }}>
      <img className="card-img-top" src={productImage} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">${price}</p>
        <button className="btn btn-primary" onClick={() => {addToCart(id);addBadge()}}>
          Add To Cart {count > 0 && <>({count})</>}
        </button>
      </div>
    </div>
  );
}
