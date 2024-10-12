'use client';

import React, { useContext } from "react";
import "./css/Card.css";
import { DataContext } from "../context/Dataprovider";

const ProductsCard = ({ items }) => {
  const { cart = [], addToCart } = useContext(DataContext) || {}; // Safe fallback for cart and addToCart
  
  // Safely destructure id, title, and image using optional chaining
  const { id, title, image } = items || {};

  // Handle case where items is not defined
  if (!items) {
    return <div>Item not found</div>; // Display message if item is not found
  }

  // Check if the item is already in the cart
  const isItemInCart = cart.find((item) => item.id === id);

  const handleAddToCart = () => {
    if (!isItemInCart) {
      // Add new item to cart
      addToCart([...cart, { ...items, quantity: 1 }]);
    } else {
      // Update the quantity if item is already in cart
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      addToCart(updatedCart);
    }
  };

  return (
    <>
      <img
        src={image || "fallback-image-url"} // Provide a fallback image if image is undefined
        className="products_image"
        alt={title || "Product image"} // Add alt attribute for accessibility
        style={{ width: "100%" }}
      />
      <div className="products_details">
        {/* Safely slice the title to avoid any potential errors */}
        <span className="title">{title ? title.split(" ", 2).join(" ") : "No Title"}</span>
        <span className="prod-desc">
          <div className="products_cart">
            <p className="products_price">
              <span style={{ textDecoration: "underline", cursor: "pointer" }}>
                Sign in
              </span>{" "}
              or Create an account to see pricing
            </p>
            <i
              className={`fa-regular fa-heart ${isItemInCart ? "red" : ""}`}
              style={{
                width: "24px",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
                cursor: "pointer",
              }}
              onClick={handleAddToCart}
            ></i>
          </div>
        </span>
      </div>
    </>
  );
};

export default ProductsCard;
