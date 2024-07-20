import React from "react";
import "../categories/categories.css"

const Categories = () => {
  return (
    <div className="categories" id="categories">
      <h1>Top Categories</h1>
      <div className="category__containers">
        <span className="category">Data Science</span>
        <span className="category">Product Management</span>
        <span className="category">Finance</span>
      </div>
    </div>
  );
};

export default Categories;
