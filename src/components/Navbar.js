import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shop-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

export default function Navbar() {
  const { badge } = useContext(ShopContext);

  return (
    <div className="navbar-container">
      <nav className="navbar bg-light p-3">
        <Link to="/" className="navbar-brand px-3 text-primary">
          Product
        </Link>
        <Link to="/cart" className="navbar-brand position-relative px-3">
          <FontAwesomeIcon icon={faCartShopping} className="fs-4 text-primary"/>
          <span className="badge 
                           bg-primary 
                           rounded-pill 
                           position-absolute 
                           top-0
                           start-100
                           translate-middle
                           ">
            {badge > 0 ? badge : null}
          </span>
        </Link>
      </nav>
    </div>
  );
}
