import React from 'react';

const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

function setCategory() {
  // update app context
}

function loadCategories() {
  return categories.map((cat, i) => <button type="button" className="category-btn" onClick="setCategory()" key={i}>{cat}</button>);
}

function Filter() {
  return (
    <div className="categories">
      {loadCategories()}
    </div>
  );
}

export default Filter;
