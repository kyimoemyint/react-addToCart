import React, { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ShopContext } from "../context/shop-context";
import "./ShowModal.css";
import { PRODUCTS } from "../products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


function ModalData({ data }) {
  const { cartItems } = useContext(ShopContext);
  const { id, productName, price, productImage } = data;
  console.log("modal data render");
  return (
    <tr>
      <td><img src={productImage} style={{width:'50px',height:'50px'}}/></td>
      <td>{productName}</td>
      <td>{cartItems[id]}</td>
      <td>$ {price * cartItems[id]}</td>
    </tr>
  );
}

function Modal({ totalAmount }) {
  const { close, cartItems, getDefaultCart,defaultBadge } = useContext(ShopContext);
  const navigate = useNavigate();

  function backToShop() {
    alert("Your Purchase Is Successful");
    if (alert) close();
    // localStorage.setItem('item', JSON.stringify(getDefaultCart()));
    // localStorage.setItem('badge', JSON.stringify(defaultBadge()));
    navigate('/');
  }

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-body">
          <div className="xmark-container text-muted">
            <FontAwesomeIcon
              icon={faXmark}
              className="xmark text-primary"
              onClick={close}
            />
          </div>
          <table className="table table-hover table-responsive ">
            <thead className="table-primary">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Count</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0) {
                  return <ModalData data={product} key={product.id} />;
                }
              })}
            </tbody>
            <tfoot className="table-primary">
              <tr>
                <td colSpan="3" className="text-center">
                  TotalAmount
                </td>
                <th>$ {totalAmount}</th>
              </tr>
            </tfoot>
          </table>
          <div className="button-container">
            <button
              onClick={backToShop}
              className="btn btn-outline-primary w-25"
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShowModal({ totalAmount }) {
  const { showModal } = useContext(ShopContext);

  if (showModal) {
    return createPortal(<Modal totalAmount={totalAmount} />, document.body);
  } else {
    return null;
  }
}
