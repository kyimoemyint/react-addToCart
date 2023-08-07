import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const defaultBadge = () => {
  let badge = 0;
  return badge;
}

export default function ShopContextProvider(props) {
  const [badge, setBadge] = useState(() => {
    let badge = localStorage.getItem('badge');
    return JSON.parse(badge);
  });

  const [cartItems, setCartItems] = useState(() => {
    let localValue = localStorage.getItem("item");
    return JSON.parse(localValue);
  });

  const [showModal,setShowModal] = useState(false);
  const open = () => setShowModal(true);
  const close = () => setShowModal(false);

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(cartItems));
    localStorage.setItem('badge',JSON.stringify(badge));
    console.log("use effect run");
  }, [cartItems,badge]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (let item in cartItems) {
      let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
      totalAmount += cartItems[item] * itemInfo.price;
    }
    return totalAmount;
  };

  function addBadge() {
    setBadge(badge + 1);
  }
  function removeBadge() {
    setBadge(badge - 1);
  }

  const contextValue = {
    cartItems,
    addToCart,
    removeCart,
    updateCartItemCount,
    getTotalCartAmount,
    badge,
    addBadge,
    removeBadge,
    defaultBadge,
    showModal,
    open,
    close,
    getDefaultCart
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
