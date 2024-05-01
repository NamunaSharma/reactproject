import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:5555/api/reviews");
        setReviews(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="flex min-h-screen">
      <Navbar />
      <div className="flex-grow w-full pl-20 m-9">
        <h1 className="text-3xl font-bold mb-6">All Reviews</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-600">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-6 py-3">Review Text</th>
                  <th className="px-6 py-3">Rating</th>
                  <th className="px-6 py-3">User</th>
                  <th className="px-6 py-3">Book</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <tr key={review._id}>
                    <td className="border px-6 py-4">{review.reviewText}</td>
                    <td className="border px-6 py-4">{review.rating}</td>
                    <td className="border px-6 py-4">{review.user}</td>
                    <td className="border px-6 py-4">{review.book}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsPage;
