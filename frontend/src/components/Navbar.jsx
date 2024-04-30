// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col w-48">
      {/* Set height of parent container */}
      <nav className="flex-grow bg-gray-900">
        <ul className="space-y-2">
          <li>
            <Link to="/admin" className="block p-4 hover:bg-gray-800">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/adminhome" className="block p-4 hover:bg-gray-800">
              Products
            </Link>
          </li>
          <li>
            <Link to="/orders" className="block p-4 hover:bg-gray-800">
              Orders
            </Link>
          </li>
          <li>
            <Link to="/createcategory" className="block p-4 hover:bg-gray-800">
              Categories
            </Link>
          </li>
          <li>
            <Link to="/adminreview" className="block p-4 hover:bg-gray-800">
              Reviews
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
