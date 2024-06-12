import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserNavbar from "../../pages/usernavbar";
import book5 from "../Asset/book5.png";
import BestSellingBooks from "../../pages/bestsellingbooks";
import favoritebook from "../Asset/favoritebook.jpg";
import Footer from "./footer";
import AppStore from "../../pages/AppStore";
import Banner from "./Banner";

const UserHomepage = () => {
  const [latestBooks, setLatestBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleAddToCart = (book) => {
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    const isItemInCart = existingCartItems.some((item) => item.id === book._id);

    if (!isItemInCart) {
      // Add book details to the cart item
      const newCartItem = {
        id: book._id,
        name: book.title,
        image: book.image,
        price: book.price, // Add book price to the cart item
        stockQuantity: book.quantity, // Add book quantity to the cart item
      };
      const updatedCartItems = [...existingCartItems, newCartItem];
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      setPopupMessage("Item added to cart!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    } else {
      setPopupMessage("Item is already in the cart");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    }
  };

  useEffect(() => {
    setLoading(true);
    // Fetch the latest added books
    axios
      .get("http://localhost:5555/books/latest")
      .then((response) => {
        if (response.data && Array.isArray(response.data.data)) {
          setLatestBooks(response.data.data);
        } else {
          console.error(
            "Error fetching latest books: Response data is incorrect"
          );
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching latest books:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="homepage bg-white min-h-screen">
      <UserNavbar />
      <div className="container-fluid bg-cyan-100 py-8 px-4 mb-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2 mb-4 md:mb-1 pl-12">
            <p className="text-4xl">
              <span className="text-red-500">Find</span>{" "}
              <span className="text-blue-500">your</span>{" "}
              <span className="text-green-500">favorite</span>{" "}
              <span className="text-yellow-500">books</span>{" "}
              <span className="text-purple-500">according</span>{" "}
              <span className="text-indigo-500">to</span>{" "}
              <span className="text-pink-500">your</span>{" "}
              <span className="text-orange-500">preferences</span>
            </p>
            <p className="text-lg text-gray-800 mt-4">
              Open a book, open your mind. Explore endless worlds, ignite your
              imagination, and discover the magic of reading, all from the
              comfort of your home.
            </p>
          </div>
          <div className="w-full md:w-1/5 pr-16">
            <img
              src={book5}
              alt="Book Image"
              className="w-full h-60 object-cover mb-2 rounded-lg"
            />
          </div>
        </div>
      </div>

      <BestSellingBooks />
      <div className="flex flex-col md:flex-row items-center justify-center my-16 px-4">
        <div className="w-full md:w-1/3">
          <img
            src={favoritebook}
            alt="Favorite Book"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-5 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-blue-900 ml-3">
            Ready to browse more books?
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            We have over <span className="font-bold text-blue-900">100+</span>{" "}
            book listings and more than{" "}
            <span className="font-bold text-blue-900">50+</span> regular users.
            Join our community and discover your next great read today!
          </p>
          <Link
            to="/categories"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Browse Books
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Our Latest Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {latestBooks.map((book) => (
            <div
              key={book._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden w-full "
            >
              <Link to={`/BookDetailsPage/${book._id}`} state={book}>
                <img
                  src={`http://localhost:5555/${book.image}`}
                  alt={book.title}
                  className="h-[300px] w-[210px] object-cover rounded-md ml-8"
                  style={{ height: "300px" }} // Adjust the height to fit your image aspect ratio
                />
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 truncate">
                  {book.title}
                </h3>
                <p className="text-gray-600 mb-1">by {book.author}</p>
                <br></br>
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleAddToCart(book)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        {showPopup && (
          <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded">
            {popupMessage}
          </div>
        )}
      </div>
      <Banner />
      <AppStore />
      <Footer />
    </div>
  );
};

export default UserHomepage;
