import React from "react";
import { Link } from "react-router-dom";
import "./CategoryNavigation.css";

const CategoryNavigation = () => {
  return (
    <div className="category-navigation">
      <div className="dropdown">
        <button className="dropbtn">Genres</button>
        <div className="dropdown-content">
          <Link to="/genres/thriller">Thriller</Link>
          <Link to="/genres/fiction">Fiction</Link>
          {/* Add more genre links */}
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Authors</button>
        <div className="dropdown-content">
          <Link to="/authors/stephen-king">Stephen King</Link>
          <Link to="/authors/j-k-rowling">J.K. Rowling</Link>
          {/* Add more author links */}
        </div>
      </div>
    </div>
  );
};

export default CategoryNavigation;
