// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import Navbar from "./components/Navbar";

// // const AdminReviewsPage = () => {
// //   const [reviews, setReviews] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchReviews = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:5555/api/review");
// //         console.log(response.data); // Add this line to inspect the structure of the data
// //         setReviews(response.data.data);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error("Error fetching reviews:", error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchReviews();
// //   }, []);

// //   const arr = Object.values(reviews);

// //   return (
// //     <div className="container mx-auto">
// //       <Navbar />
// //       <h1 className="text-3xl font-bold mb-6">Admin Reviews</h1>
// //       {loading ? (
// //         <p>Loading...</p>
// //       ) : (
// //         <div className="overflow-x-auto">
// //           <table className="w-full table-auto border-collapse border border-gray-600">
// //             <thead>
// //               <tr className="bg-gray-200">
// //                 <th className="px-6 py-3">Review Text</th>
// //                 <th className="px-6 py-3">Rating</th>
// //                 <th className="px-6 py-3">User</th>
// //                 <th className="px-6 py-3">Book</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {arr.map((book) => (
// //                 <React.Fragment key={book._id}>
// //                   {Array.isArray(book.reviews) && book.reviews.length > 0 ? (
// //                     book.reviews.map((reviewId) => {
// //                       const review = reviews.find((r) => r._id === reviewId);
// //                       if (review) {
// //                         // Check if review is found
// //                         return (
// //                           <tr key={reviewId}>
// //                             <td className="border px-6 py-4">
// //                               {review.reviewText}
// //                             </td>
// //                             <td className="border px-6 py-4">
// //                               {review.rating}
// //                             </td>
// //                             <td className="border px-6 py-4">{review.user}</td>
// //                             <td className="border px-6 py-4">{book.title}</td>
// //                           </tr>
// //                         );
// //                       } else {
// //                         return null; // Review not found, return null
// //                       }
// //                     })
// //                   ) : (
// //                     <tr key={book._id}>
// //                       <td colSpan="4">No reviews found</td>
// //                     </tr>
// //                   )}
// //                 </React.Fragment>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default AdminReviewsPage;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "./components/Navbar";

// const AdminReviewsPage = () => {
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get("http://localhost:5555/api/review");
//         console.log(response.data); // Check the structure of the data received
//         const reviewsArray = Object.values(response.data.data); // Convert object to array
//         setReviews(reviewsArray);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching reviews:", error);
//         setLoading(false);
//       }
//     };

//     fetchReviews();
//   }, []);

//   return (
//     <div className="container mx-auto">
//       <Navbar />
//       <h1 className="text-3xl font-bold mb-6">Admin Reviews</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="w-full table-auto border-collapse border border-gray-600">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="px-6 py-3">Review Text</th>
//                 <th className="px-6 py-3">Rating</th>
//                 <th className="px-6 py-3">User</th>
//                 <th className="px-6 py-3">Book</th>
//               </tr>
//             </thead>
//             <tbody>
//               {reviews.map((review) => (
//                 <tr key={review._id}>
//                   <td className="border px-6 py-4">{review.reviewText}</td>
//                   <td className="border px-6 py-4">{review.rating}</td>
//                   <td className="border px-6 py-4">{review.user}</td>
//                   <td className="border px-6 py-4">{review.book}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminReviewsPage;
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";

const AdminReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:5555/api/review");
        console.log(response.data); // Check the structure of the data received
        setReviews(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="container mx-auto">
      <Navbar />
      <h1 className="text-3xl font-bold mb-6">Admin Reviews</h1>
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
  );
};

export default AdminReviewsPage;
