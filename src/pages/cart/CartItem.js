import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export default function CartItem(props) {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeCart,updateCartItemCount,addBadge,removeBadge } = useContext(ShopContext);
  return (
    <div className="card shadow-sm" style={{ width: "18rem", padding: "10px" }}>
      <img className="card-img-top" src={productImage} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">${price}</p>
        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-primary" onClick={() => {removeCart(id);removeBadge()}}>
            -
          </button>
          <input
            type="text"
            value={cartItems[id]}
            onChange={e => updateCartItemCount(Number(e.target.value),id)}
            className="form-control w-25 text-center"
          />
          <button className="btn btn-primary" onClick={() => {addToCart(id);addBadge()}}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
