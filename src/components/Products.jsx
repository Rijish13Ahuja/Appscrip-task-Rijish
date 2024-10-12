'use client';

import React, { useEffect, useState } from "react";
import "./css/Products.css";
import arrow from "../Assets/arrow-left.png";
import { fetchProducts } from "../service/api";
import ProductsCard from "./ProductsCard";
import CategoryOption from "./CategoryOption";

const Products = () => {
  const [toggle, setToggle] = useState(false);
  const [filter, setFilter] = useState("Show Filter");
  const [zind, setZind] = useState("");
  const [adjuststyle, setAdjustStyle] = useState("products");
  const [category, setCategory] = useState("");
  const [rotate, setRotate] = useState("rotate90deg");
  const [priceRange, setPriceRange] = useState(false);
  const [rating, setRating] = useState(false);
  const [ratingCount, setRatingCount] = useState(false);
  const [priceRangeCls, setPriceRangeCls] = useState("rotate90deg");
  const [ratingCls, setRatingCls] = useState("rotate90deg");
  const [ratingCountCls, setRatingCountCls] = useState("rotate90deg");
  const [products, setProdducts] = useState([]);
  const [sortOption, setSortOption] = useState("Recommended");

  // Sorting logic
  const sortProducts = (products) => {
    switch (sortOption) {
      case "Newest first":
        return products.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
      case "Popular":
        return products.sort((a, b) => b.popularity - a.popularity);
      case "PRICE: HIGH TO LOW":
        return products.sort((a, b) => b.price - a.price);
      case "PRICE: LOW TO HIGH":
        return products.sort((a, b) => a.price - b.price);
      default:
        return products;
    }
  };

  // Filter toggle handlers
  const handleCategory = () => {
    setCategory(category ? "" : "CATEGORY");
    setRotate(category ? "rotate90deg" : "rotate270deg");
  };

  const handlePriceRange = () => {
    setPriceRange(!priceRange);
    setPriceRangeCls(priceRange ? "rotate90deg" : "rotate270deg");
  };

  const handleRating = () => {
    setRating(!rating);
    setRatingCls(rating ? "rotate90deg" : "rotate270deg");
  };

  const handleRatingCount = () => {
    setRatingCount(!ratingCount);
    setRatingCountCls(ratingCount ? "rotate90deg" : "rotate270deg");
  };

  // Define options for each filter type
  const categoryOptions = [
    {
      label: "CATEGORY",
      state: category,
      handler: handleCategory,
      cls: rotate,
      type: "CATEGORY",
    },
    {
      label: "PRICE RANGE",
      state: priceRange,
      handler: handlePriceRange,
      cls: priceRangeCls,
      type: "PRICE RANGE",
    },
    {
      label: "RATING",
      state: rating,
      handler: handleRating,
      cls: ratingCls,
      type: "RATING",
    },
    {
      label: "RATING COUNT",
      state: ratingCount,
      handler: handleRatingCount,
      cls: ratingCountCls,
      type: "RATING COUNT",
    },
  ];

  const handleFilterVisibility = () => {
    setToggle(!toggle);
    setFilter(toggle ? "Show Filter" : "Hide Filter");
    setAdjustStyle(toggle ? "products" : "products width75");
  };

  const handleZindex = () => {
    setToggle(!toggle);
    setZind(toggle ? "" : "zind2");
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Fetch products from API
  const getProducts = async () => {
    try {
      const res = await fetchProducts();
      setProdducts(res);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  const handleCheckboxChange = (value) => {
    setCategory(value);
  };

  // Get products on mount
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <section className="filter">
        <span className="showfilter">
          <span className="qty">3425 ITEMS</span>
          <span className="hidefilter" onClick={handleFilterVisibility}>
            <span className="ico">
              <img src={arrow} alt="arrow" />
            </span>
            <span className="txt">{filter}</span>
          </span>
        </span>
        <span className="filterlogo" onClick={handleZindex}>
          FILTER
        </span>
        <span className="sort">
          <span className="txt">
            <select name="sortOptions" id="select" onChange={handleSortChange} value={sortOption}>
              <option value="Recommended">Recommended</option>
              <option value="Newest first">Newest first</option>
              <option value="Popular">Popular</option>
              <option value="PRICE: HIGH TO LOW">PRICE: HIGH TO LOW</option>
              <option value="PRICE: LOW TO HIGH">PRICE: LOW TO HIGH</option>
            </select>
          </span>
        </span>
      </section>

      <section className="body-content">
        {toggle && (
          <aside id="filter" className={zind}>
            {categoryOptions.map((option, index) => (
              <div key={index} className="category-option">
                <span>
                  {option.label}{" "}
                  <img
                    src={arrow}
                    alt="arrow"
                    onClick={option.handler}
                    className={option.cls}
                  />
                </span>
                <span className={`${option.label.toLowerCase()}-type`}>All</span>
                {option.state && (
                  <div className="category-options-list">
                    <CategoryOption
                      type={option.type} // Pass type to CategoryOption
                      handleCheckboxChange={handleCheckboxChange}
                      category={category}
                    />
                  </div>
                )}
              </div>
            ))}
          </aside>
        )}

        <section className={adjuststyle}>
          {sortProducts(
            products.filter((item) => !category || item.category.includes(category))
          ).map((item, index) => (
            <div
              className="card"
              key={item.id}
              style={{
                width: "240px",
                height: "370px",
                marginRight: "10px",
              }}
            >
              <ProductsCard items={item} />
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default Products;
