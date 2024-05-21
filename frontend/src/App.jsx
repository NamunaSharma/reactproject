import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserNavbar from "./pages/usernavbar";
import { Route, Routes, Navigate } from "react-router-dom";
// import Main from "./components/Main";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserHomepage from "./components/userpage/userhomepage";
import Privateroute from "./components/Privateroute";
import Author from "./components/userpage/AuthorPage";
import BookDetailPage from "./components/userpage/BookDetailsPage";
import CartPage from "./components/userpage/Cart/Cart";
// import CreateBooks from "./pages/CreateBooks";
// import EditBook from "./pages/EditBook";
// import ShowBook from "./pages/ShowBook";
// import DeleteBook from "./pages/DeleteBook";
import CreateBooks from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";

import Home from "./pages/Home";
import Cart from "./components/userpage/Cart/Cart";
// import CreateCategory from "./pages/CreateCategory";
// import CategoryForm from "./components/Form/CategoryForm";
import CreateCategory from "./pages/CreateCategory";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import AuthorPage from "./components/userpage/AuthorPage";
import AccountPage from "./components/userpage/accountpage";
import Success from "./success";
import Cancel from "./cancel";
import OrderPage from "./orderpage";
import AdminReviewsPage from "./adminreviewpage";
import Banner from "./Banner";
import AdminPage from "./adminpage";
import UsedBooks from "./pages/usedbooks";
// import Payment from "./components/userpage/Cart/payment";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" exact element={<Banner />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/" element={<Privateroute />}>
        <Route path="homepage" element={<UserHomepage />} />
        <Route path="author" element={<AuthorPage />} />
        <Route path="accountpage" element={<AccountPage />} />
        <Route path="BookDetailsPage/:id" element={<BookDetailPage />} />
        <Route path="cart" element={<Cart />} />
      </Route>
      <Route path="/books/create" exact element={<CreateBooks />} />
      <Route path="/books/edit/:id" exact element={<EditBook />} />
      <Route path="/books/details/:id" exact element={<ShowBook />} />
      <Route path="/books/delete/:id" exact element={<DeleteBook />} />
      <Route path="/adminhome" exact element={<Home />} />
      <Route path="/createcategory" exact element={<CreateCategory />} />
      <Route path="/categories" exact element={<Categories />} />
      <Route path="/category/:slug" exact element={<CategoryProduct />} />
      <Route path="/success" exact element={<Success />} />
      <Route path="/cancel" exact element={<Cancel />} />
      <Route path="/orders" exact element={<OrderPage />} />
      <Route path="/adminreview" exact element={<AdminReviewsPage />} />
      <Route path="/banner" exact element={<Banner />} />
      <Route path="/admin" exact element={<AdminPage />} />
      <Route path="/usedbooks" element={<UsedBooks />} />
    </Routes>
  );
  // const user = localStorage.getItem("token");
  // return (
  //   <>
  //     <Outlet />
  //   </>
  // );
}
export default App;
