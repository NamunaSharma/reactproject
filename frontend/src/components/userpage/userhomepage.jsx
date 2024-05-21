import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserNavbar from "../../pages/usernavbar";
import book5 from "../Asset/book5.png";
import Reviews from "../userpage/reviews";
import BestSellingBooks from "../../pages/bestsellingbooks";
import favoritebook from "../Asset/favoritebook.jpg";

const UserHomepage = () => {
  const [books, setBooks] = useState([]);
  const [latestBooks, setLatestBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Fetch top sellers
    axios
      .get("http://localhost:5555/books/book")
      .then((response) => {
        if (response.data && Array.isArray(response.data.data)) {
          setBooks(response.data.data.slice(0, 12));
        } else {
          console.error("Error fetching books: Response data is incorrect");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });

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

  const handleAddToCart = (bookId, bookName, bookImage) => {
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    const isItemInCart = existingCartItems.some((item) => item.id === bookId);

    if (!isItemInCart) {
      const newCartItem = { id: bookId, name: bookName, image: bookImage };
      const updatedCartItems = [...existingCartItems, newCartItem];
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems); // Update state if needed
    } else {
      console.log("Item is already in the cart");
    }
  };

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
      <div className="flex justify-around py-8">
        <div className="text-center">
          <div className="text-red-500 mb-2">
            <svg
              className="w-8 h-8 mx-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h18M9 3v18a2 2 0 01-2 2H5a2 2 0 01-2-2V3zm12 0v18a2 2 0 01-2 2h-2a2 2 0 01-2-2V3m6 0H9"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Free Delivery</h3>
          <p className="text-gray-500">
            Enjoy free delivery on all orders, no minimum purchase required.
          </p>
        </div>
        <div className="text-center">
          <div className="text-red-500 mb-2">
            <svg
              className="w-8 h-8 mx-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m1-3a9 9 0 11-9 9 9 9 0 019-9z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Quality Guarantee</h3>
          <p className="text-gray-500">
            We guarantee the highest quality products or your money back.
          </p>
        </div>
        <div className="text-center">
          <div className="text-red-500 mb-2">
            <svg
              className="w-8 h-8 mx-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Daily Offers</h3>
          <p className="text-gray-500">
            Check out our daily offers for exclusive deals and discounts.
          </p>
        </div>
        <div className="text-center">
          <div className="text-red-500 mb-2">
            <svg
              className="w-8 h-8 mx-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m2 0a2 2 0 012 2v2m-1 4H6m13-4v-2a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m6 4H7m13 0a2 2 0 002-2v-2a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m6 4H9m0 0a2 2 0 01-2-2v-2a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 01-2 2H9"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold">100% Secure Payment</h3>
          <p className="text-gray-500">
            Your payments are secure with our end-to-end encryption.
          </p>
        </div>
      </div>
      <div className="section mb-20">
        <BestSellingBooks />
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Our Latest Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {latestBooks.map((book) => (
            <div
              key={book._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden w-full"
            >
              <Link to={`/BookDetailsPage/${book._id}`} state={book}>
                <img
                  src={`http://localhost:5555/${book.image}`}
                  alt={book.title}
                  className="w-full object-cover rounded-t-lg"
                  style={{ height: "300px" }} // Adjust the height to fit your image aspect ratio
                />
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-1">by {book.author}</p>
                <p className="text-gray-500 text-sm mb-4">
                  {book.salesCount} copies sold
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="section mb-20">




        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
          Latest Added Books
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestBooks.map((book) => (
            <div key={book._id} className="p-4 bg-white shadow-md rounded-lg">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-60 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-700 mb-4">{book.author}</p>
              <p className="text-gray-600">{book.description}</p>
              <button
                onClick={() =>
                  handleAddToCart(book._id, book.title, book.image)
                }
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div> */}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center my-16 px-4">
        <div className="w-full md:w-1/3">
          <img
            src={favoritebook}
            alt="Favorite Book"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">
            Ready to browse more books?
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            We have over <span className="font-bold text-blue-900">100+</span>{" "}
            book listings and more than{" "}
            <span className="font-bold text-blue-900">50+</span> regular users.
            Join our community and discover your next great read today!
          </p>
          <Link
            to="/books"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Browse Books
          </Link>
        </div>
      </div>
      <Reviews />
    </div>
  );
};

export default UserHomepage;
