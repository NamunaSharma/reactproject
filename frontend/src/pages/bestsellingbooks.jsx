import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BestSellingBooks = () => {
  const [bestSellingBooks, setBestSellingBooks] = useState([]);

  useEffect(() => {
    const fetchBestSellingBooks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5555/api/orders/bestsellers"
        );
        setBestSellingBooks(response.data);
      } catch (error) {
        console.error("Error fetching best-selling books:", error);
      }
    };

    fetchBestSellingBooks();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">
        Best-Selling Books
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {bestSellingBooks.map((book) => (
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
    </div>
  );
};

export default BestSellingBooks;
