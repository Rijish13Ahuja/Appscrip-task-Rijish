import React from "react";

const CategoryOption = ({ type, handleCheckboxChange, category }) => {
  const getOptions = () => {
    switch (type) {
      case "CATEGORY":
        return ["All", "Men", "Women", "Kids", "Electronics"];
      case "PRICE RANGE":
        return ["500+", "2000+", "5000+"];
      case "RATING":
        return ['⭐', '⭐⭐', '⭐⭐⭐','⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'];
      case "RATING COUNT":
        return ["50", "100", "200"];
      default:
        return [];
    }
  };

  const options = getOptions();

  return (
    <div className="category-options-list">
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={option}
            checked={category === option}
            onChange={() => handleCheckboxChange(option)}
          />
          <label>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default CategoryOption;
