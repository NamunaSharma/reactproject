import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../../pages/Spinner";
import Cart from "../userpage/Cart/Cart";
import UserNavbar from "../../pages/usernavbar";
import Recommendations from "../../pages/recommendations";
import { Link } from "react-router-dom";

const BookDetailsPage = () => {
  const { id: bookId } = useParams();
  const [book, setBook] = useState({});
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  // const { id } = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [userReview, setUserReview] = useState({
    reviewText: "",
    rating: 0,
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const userId = localStorage.getItem("userId");
  const userId = localStorage.getItem("userId");

  console.log(userId);
  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5555/api/users/${userId}`
      );
      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [userId]);
  const handleAddToCart = () => {
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
      setCartItems(updatedCartItems);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    } else {
      console.log("Item is already in the cart");
    }
  };
  const handleReviewSubmit = async () => {
    try {
      const reviewData = {
        ...userReview,
        book: bookId,
        user: userId,
        // user: localStorage.getItem("userId"),
      };

      const response = await axios.post(
        `http://localhost:5555/api/review/createReview`,
        reviewData
      );

      // Handle response accordingly
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // Retrieve cart items from local storage for the specific user
    const storedCartItems =
      JSON.parse(localStorage.getItem(`cartItems_${userId}`)) || [];
    setCartItems(storedCartItems);
  }, [userId]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${bookId}`)
      .then((response) => {
        setBook(response.data);
        setReviews(response.data.reviews);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [bookId]);

  useEffect(() => {
    axios
      .get(`http://localhost:5555/books/recommend/${bookId}`)
      .then((response) => {
        setRecommendedBooks(response.data); // Assuming response.data is an array of books
      })
      .catch((error) => {
        console.log(error);
      });
  }, [bookId]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/api/review/getAllReviews/${bookId}`)
      .then((response) => {
        setReviews(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [bookId]);

  // Function to render star icons based on the rating
  // Function to render star icons based on the rating
  const renderStars = (rating) => {
    const starCount = Math.max(0, Math.min(5, Math.round(rating)));
    return Array.from({ length: starCount }, (_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-yellow-500 fill-current"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 1l2.54 6.644H18l-5.416 4.22 2.083 6.45L10 14.156l-4.667 3.158 2.083-6.45L2 7.644h5.46L10 1z"
          clipRule="evenodd"
        />
      </svg>
    ));
  };

  return (
    <div className="homepage bg-white min-h-screen">
      <UserNavbar />
      {/* Book Details Section */}
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <img
            src={`http://localhost:5555/${book.image}`}
            alt="Book"
            className="mx-auto md:mx-0 rounded-lg shadow-lg "
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 px-4 ml-0.9">
          <h1 className="text-4xl font-bold text-blue-700 mb-6">
            {book.title}
          </h1>
          <p className="text-lg font-bold text-gray-800 mb-4">
            Author: {book.author}
          </p>
          <p className="text-lg font-semibold text-gray-800 mb-4">
            Publish Year: {book.publishYear}
          </p>
          <p className="text-lg text-gray-800 mb-4">
            <span className="text-1xl font-semibold">Description:</span>{" "}
            {book.description}
          </p>
          <p className="text-lg text-red-800 font-semibold mb-4">
            <span className="text-2xl">Price:</span>{" "}
            <span className="text-2xl">{book.price}</span>
          </p>

          <p className="text-lg text-gray-800 mb-4">
            Quantity: {book.quantity}
          </p>
          {/* <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          <p className="text-xl mb-2">Author: {book.author}</p>
          <p className="text-xl mb-2">Publish Year: {book.publishYear}</p>
          <p className="text-xl mb-2">Description: {book.description}</p>
          <p className="text-xl mb-2">Price: {book.price}</p>
          <p className="text-xl mb-2">Quantity: {book.quantity}</p> */}

          <button
            className="bg-green-500 text-white py-4 px-11 rounded-lg mb-4 font-semibold"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          {showPopup && (
            <div className="bg-gray-900 text-white py-2 px-4 rounded-lg mb-4 max-w-sm font-semibold">
              Item added to cart!
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Recommended Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {recommendedBooks.map((book) => (
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
                <h3 className="text-xl font-semibold mb-2 truncate">
                  {book.title}
                </h3>
                <p className="text-gray-600 mb-1">by {book.author}</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Customer Reviews Section */}

      <div className="py-8">
        <h2 className="text-3xl font-bold ">Customer Reviews</h2>
        <div className="my-4">
          <input
            type="text"
            value={userReview.reviewText}
            onChange={(e) =>
              setUserReview({ ...userReview, reviewText: e.target.value })
            }
            placeholder="Add a review"
            className="border border-gray-300 rounded-lg p-2 mr-2"
          />
          <input
            type="number"
            value={userReview.rating}
            onChange={(e) => {
              const rating = parseInt(e.target.value);
              if (rating >= 0 && rating <= 5) {
                setUserReview({ ...userReview, rating });
              }
            }}
            placeholder="Rating (0-5)"
            className="border border-gray-300 rounded-lg p-2"
          />

          {/* <input
              type="number"
              value={userReview.rating}
              onChange={(e) =>
                setUserReview({ ...userReview, rating: e.target.value })
              }
              placeholder="Rating (0-5)"
              className="border border-gray-300 rounded-lg p-2"
            /> */}
          <button
            onClick={handleReviewSubmit}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-2"
          >
            Submit Review
          </button>
        </div>

        {reviews.length > 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-10 h-19 w-13  ">
            {reviews.map((review) => (
              <div key={review._id} className=" rounded-lg shadow-lg ">
                <p className="font-bold mb-2">
                  {review.user
                    ? `${review.user.firstName} ${review.user.lastName}`
                    : "Unknown User"}
                </p>
                <div className="flex items-center">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-700">{review.reviewText}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-2xl">No reviews yet</p>
        )}
      </div>
    </div>
  );
};

export default BookDetailsPage;
