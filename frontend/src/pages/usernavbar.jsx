import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useCategory from "../hooks/useCategory";

import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { FaList } from "react-icons/fa";
import logo from "../components/Asset/logo.jpg";

const UserNavbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const categories = useCategory();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <nav className="bg-cyan-100 p-2 flex items-center justify-between h-20">
      <Link to="/">
        <img src={logo} alt="Logo" className="h-16 w-auto" />
      </Link>
      <ul className="flex items-center space-x-10">
        <li>
          <Link to="/homepage" className="flex items-center text-lg text-black">
            <AiOutlineHome className="text-black text-3xl mr-1" />
            Home
          </Link>
        </li>
        <li style={{ position: "relative" }}>
          {/* Categories dropdown */}
          <span
            className="flex items-center text-lg text-black cursor-pointer"
            onClick={toggleCategories}
          >
            <FaList className="text-black text-3xl mr-1" />
            Categories
          </span>
          <ul
            style={{
              display: showCategories ? "block" : "none",
              position: "absolute",
              backgroundColor: "#f9f9f9",
              minWidth: "160px",
              boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
              zIndex: "1",
              padding: "0", // added
              margin: "0", // added
              listStyleType: "none", // added
            }}
          >
            <li
              style={{
                padding: "12px 16px",
                textDecoration: "none",
                display: "block",
                color: "#333",
                borderTop: "1px solid #ddd",
              }}
            >
              <Link className="dropdown-item" to={"/categories"}>
                All Categories
              </Link>
            </li>
            {categories?.map((c, index) => (
              <li
                key={index}
                style={{
                  padding: "12px 16px",
                  textDecoration: "none",
                  display: "block",
                  color: "#333",
                  borderTop: "1px solid #ddd",
                }}
              >
                <Link className="dropdown-item" to={`/category/${c.slug}`}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <Link to="/cart" className="flex items-center text-lg text-black">
            <AiOutlineShoppingCart className="text-black text-3xl mr-1" />
            Cart
          </Link>
        </li>
        {/* <li>
          <Link to="/search" className="flex items-center text-lg text-black">
            <AiOutlineSearch className="text-black text-3xl mr-1" />
            Search
          </Link>
        </li> */}
        <li>
          <Link
            to="/accountpage"
            className="flex items-center text-lg text-black"
          >
            <AiOutlineUser className="text-black text-3xl me-1" />
            Accounts
          </Link>
        </li>
        <li>
          <button
            className="bg-black text-white px-4 py-2 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default UserNavbar;
