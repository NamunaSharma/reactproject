import React from "react";
import manImage from "../Asset/man.png";

const reviews = [
  {
    id: 1,
    personImage: "person1.jpg",
    review: "This book is amazing!",
    stars: 5,
  },
  {
    id: 2,
    personImage: "person2.jpg",
    review: "I loved reading this book!",
    stars: 4,
  },
  {
    id: 3,
    personImage: "person3.jpg",
    review: "Great plot and character development.",
    stars: 4,
  },
  {
    id: 4,
    personImage: "person4.jpg",
    review: "Couldn't put it down, a must-read!",
    stars: 5,
  },
  {
    id: 5,
    personImage: "person5.jpg",
    review: "Enjoyed every moment of it.",
    stars: 5,
  },
];

const Reviews = () => {
  return (
    <div className="section bg-gray-200 py-16">
      {" "}
      {/* Increased py-10 to py-16 */}
      <h2 className="text-2xl font-bold text-blue-900 mb-4">
        Customer Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className={`bg-white rounded-md shadow-md p-6 ${
              review.review.includes("loved") ? "bg-yellow-100" : ""
            }`}
          >
            <div className="flex items-center mb-4">
              <img
                src={manImage}
                alt="Person"
                className="w-10 h-10 rounded-full mr-2"
                style={{ filter: "hue-rotate(90deg)" }}
              />
              <div>
                <p className="font-semibold">Customer Name</p>
                <div className="flex items-center">
                  {[...Array(review.stars)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1l2.54 6.644H18l-5.416 4.22 2.083 6.45L10 14.156l-4.667 3.158 2.083-6.45L2 7.644h5.46L10 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p
              className={
                review.review.includes("loved") ? "text-black" : "text-gray-600"
              }
            >
              {review.review}
            </p>
              </div>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
