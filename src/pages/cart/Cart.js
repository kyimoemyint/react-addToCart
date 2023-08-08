import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import ShowModal from "../../components/ShowModal";

export default function Cart() {
  const { cartItems, getTotalCartAmount,open } = useContext(ShopContext);
  const navigate = useNavigate();
  let totalAmount = getTotalCartAmount();

  return (
    <div>
      <h2 className="text-center p-4">Cart List</h2>
      <div className="cart-container">
        {
          PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} key={product.id} />;
            }
          })
        }
      </div>
      {
        totalAmount > 0 ? (
          <div className="subtotal">
            <p className="fs-3">Subtotal : ${totalAmount}</p>
            <div className="btn-container d-flex gap-3 justify-content-center">
              <button className="btn btn-primary" onClick={() => navigate("/")}>
                Continue Shopping
              </button>
              <button className="btn btn-success" onClick={open}>CheckOut</button>
              <ShowModal totalAmount={totalAmount}/>
            </div>
          </div>
        ) : (
          <div className="text-center mt-5">
            <h2 className="text-center">Your Cart Is Empty</h2>
            <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
              Back To Shopping
            </button>
          </div>
        )
      }
    </div>
  );
}
