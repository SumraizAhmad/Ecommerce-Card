import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useSelector } from "react-redux";
const Navbar = () => {
  const selector = useSelector((state) => state.cardProduct);
  console.log("asaqsas", selector.cartItem);
  return (
    <div className="main_container">
      <ul>
        <li>
          <Link to={`/addproduct`}>Add Product</Link>
        </li>
        <li>
          <Link to={`/showproduct`}>Show Product</Link>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div>
        <Link to={`/cardpage`}>
          <span className="shopList">{selector.cartItem.length}</span>
          <FontAwesomeIcon icon={faCartShopping} className="shopIcon" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
