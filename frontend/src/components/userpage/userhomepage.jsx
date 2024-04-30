// // // // // import React from "react";
// // // // // import { Link } from "react-router-dom";
// // // // // import book1 from "../Asset/book1.jpg";
// // // // // import book2 from "../Asset/book2.png";
// // // // // import book3 from "../Asset/book3.png";
// // // // // import book4 from "../Asset/book4.png";
// // // // // import book5 from "../Asset/book5.png";
// // // // // import book6 from "../Asset/book6.png";
// // // // // import book7 from "../Asset/book7.png";
// // // // // import book8 from "../Asset/book8.png";
// // // // // import book9 from "../Asset/book9.png";
// // // // // import book10 from "../Asset/book10.png";
// // // // // import book11 from "../Asset/book11.png";
// // // // // import book12 from "../Asset/book12.png";
// // // // // import Reviews from "../userpage/reviews";

// // // // // const books = [
// // // // //   {
// // // // //     id: 1,
// // // // //     image: book1,
// // // // //     title: "Book Title 1",
// // // // //   },
// // // // //   {
// // // // //     id: 2,
// // // // //     image: book2,
// // // // //     title: "Book Title 2",
// // // // //   },
// // // // //   {
// // // // //     id: 3,
// // // // //     image: book3,
// // // // //     title: "Book Title 3",
// // // // //   },
// // // // //   {
// // // // //     id: 4,
// // // // //     image: book4,
// // // // //     title: "Book Title 4",
// // // // //   },
// // // // //   {
// // // // //     id: 5,
// // // // //     image: book5,
// // // // //     title: "Book Title 5",
// // // // //   },
// // // // //   {
// // // // //     id: 6,
// // // // //     image: book6,
// // // // //     title: "Book Title 6",
// // // // //   },
// // // // //   {
// // // // //     id: 7,
// // // // //     image: book7,
// // // // //     title: "Book Title 7",
// // // // //   },
// // // // //   {
// // // // //     id: 8,
// // // // //     image: book8,
// // // // //     title: "Book Title 8",
// // // // //   },
// // // // //   {
// // // // //     id: 9,
// // // // //     image: book9,
// // // // //     title: "Book Title 9",
// // // // //   },
// // // // //   {
// // // // //     id: 10,
// // // // //     image: book10,
// // // // //     title: "Book Title 10",
// // // // //   },
// // // // //   {
// // // // //     id: 11,
// // // // //     image: book11,
// // // // //     title: "Book Title 11",
// // // // //   },
// // // // //   {
// // // // //     id: 12,
// // // // //     image: book12,
// // // // //     title: "Book Title 12",
// // // // //   },
// // // // // ];

// // // // // const UserHomepage = () => {
// // // // //   return (
// // // // //     <div className="homepage bg-gray-200 min-h-screen">
// // // // //       <div className="section mb-20">
// // // // //         <h2 className="text-2xl font-bold text-blue-900 mb-4">Top Sellers</h2>
// // // // //         <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// // // // //           {books.slice(0, 6).map((book) => (
// // // // //             <Link
// // // // //               to={{ pathname: `/BookDetailsPage/${book.id}`, state: book }}
// // // // //               key={book.id}
// // // // //               className="product flex flex-col items-center justify-center rounded-md shadow-md p-4 bg-white hover:bg-gray-100 transition duration-300"
// // // // //             >
// // // // //               <img
// // // // //                 src={book.image}
// // // // //                 alt={book.title}
// // // // //                 className="w-48 h-60 object-cover mb-2 rounded-lg"
// // // // //               />
// // // // //               <h3 className="text-lg font-semibold text-blue-900">
// // // // //                 {book.title}
// // // // //               </h3>
// // // // //               <p className="text-gray-600 text-center">Discover more</p>
// // // // //             </Link>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //       <div className="section">
// // // // //         <h2 className="text-2xl font-bold text-blue-900 mb-4">
// // // // //           Recommended Books
// // // // //         </h2>
// // // // //         <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// // // // //           {books.slice(6, 12).map((book) => (
// // // // //             <Link
// // // // //               to={{ pathname: `/BookDetailsPage/${book.id}`, state: book }}
// // // // //               key={book.id}
// // // // //               className="product flex flex-col items-center justify-center rounded-md shadow-md p-4 bg-white hover:bg-gray-100 transition duration-300"
// // // // //             >
// // // // //               <img
// // // // //                 src={book.image}
// // // // //                 alt={book.title}
// // // // //                 className="w-48 h-60 object-cover mb-2 rounded-lg"
// // // // //               />
// // // // //               <h3 className="text-lg font-semibold text-blue-900">
// // // // //                 {book.title}
// // // // //               </h3>
// // // // //               <p className="text-gray-600 text-center">Explore now</p>
// // // // //             </Link>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //       <Reviews />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default UserHomepage;
// // // // // import React, { useEffect, useState } from "react";
// // // // // import { Link } from "react-router-dom";
// // // // // import axios from "axios";
// // // // // // import Spinner from "../pages/Spinner";
// // // // // import Reviews from "../userpage/reviews";
// // // // // import Spinner from "../../pages/Spinner";

// // // // // const UserHomepage = () => {
// // // // //   const [books, setBooks] = useState([]);
// // // // //   const [loading, setLoading] = useState(false);

// // // // //   useEffect(() => {
// // // // //     setLoading(true);
// // // // //     axios
// // // // //       .get("http://localhost:5555/books")
// // // // //       .then((response) => {
// // // // //         console.log("Fetched books:", response.data);
// // // // //         setBooks(response.data);
// // // // //         setLoading(false);
// // // // //       })
// // // // //       .catch((error) => {
// // // // //         console.error("Error fetching books:", error);
// // // // //         setLoading(false);
// // // // //       });
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className="homepage bg-gray-200 min-h-screen">
// // // // //       <div className="section mb-20">
// // // // //         <h2 className="text-2xl font-bold text-blue-900 mb-4">Top Sellers</h2>
// // // // //         <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// // // // //           {loading ? (
// // // // //             <Spinner />
// // // // //           ) : (
// // // // //             books.slice(0, 6).map((book) => (
// // // // //               <Link
// // // // //                 to={{ pathname: `/BookDetailsPage/${book._id}`, state: book }}
// // // // //                 key={book._id}
// // // // //                 className="product flex flex-col items-center justify-center rounded-md shadow-md p-4 bg-white hover:bg-gray-100 transition duration-300"
// // // // //               >
// // // // //                 <img
// // // // //                   src={`../../src/images/${book.image}`}
// // // // //                   alt={book.title}
// // // // //                   className="w-48 h-60 object-cover mb-2 rounded-lg"
// // // // //                 />
// // // // //                 <h3 className="text-lg font-semibold text-blue-900">
// // // // //                   {book.title}
// // // // //                 </h3>
// // // // //                 <p className="text-gray-600 text-center">Discover more</p>
// // // // //               </Link>
// // // // //             ))
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //       <div className="section">
// // // // //         <h2 className="text-2xl font-bold text-blue-900 mb-4">
// // // // //           Recommended Books
// // // // //         </h2>
// // // // //         <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// // // // //           {loading ? (
// // // // //             <Spinner />
// // // // //           ) : (
// // // // //             books.slice(6, 12).map((book) => (
// // // // //               <Link
// // // // //                 to={{ pathname: `/BookDetailsPage/${book._id}`, state: book }}
// // // // //                 key={book._id}
// // // // //                 className="product flex flex-col items-center justify-center rounded-md shadow-md p-4 bg-white hover:bg-gray-100 transition duration-300"
// // // // //               >
// // // // //                 <img
// // // // //                   src={`../../src/images/${book.image}`}
// // // // //                   alt={book.title}
// // // // //                   className="w-48 h-60 object-cover mb-2 rounded-lg"
// // // // //                 />
// // // // //                 <h3 className="text-lg font-semibold text-blue-900">
// // // // //                   {book.title}
// // // // //                 </h3>
// // // // //                 <p className="text-gray-600 text-center">Explore now</p>
// // // // //               </Link>
// // // // //             ))
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //       <Reviews />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default UserHomepage;
// // // // import React, { useEffect, useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import axios from "axios";
// // // // import Reviews from "../userpage/reviews";
// // // // import Spinner from "../../pages/Spinner";

// // // // const UserHomepage = () => {
// // // //   const [books, setBooks] = useState([]);
// // // //   const [loading, setLoading] = useState(false);

// // // //   useEffect(() => {
// // // //     setLoading(true);
// // // //     axios
// // // //       .get("http://localhost:5555/books")
// // // //       .then((response) => {
// // // //         console.log("Fetched books:", response.data);
// // // //         setBooks(response.data);
// // // //         setLoading(false);
// // // //       })
// // // //       .catch((error) => {
// // // //         console.error("Error fetching books:", error);
// // // //         setLoading(false);
// // // //       });
// // // //   }, []);

// // // //   return (
// // // //     <div className="homepage bg-gray-200 min-h-screen">
// // // //       <div className="section mb-20">
// // // //         <h2 className="text-2xl font-bold text-blue-900 mb-4">Top Sellers</h2>
// // // //         <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// // // //           {loading ? (
// // // //             <Spinner />
// // // //           ) : (
// // // //             books &&
// // // //             books.slice(0, 6).map((book) => (
// // // //               <Link
// // // //                 to={{ pathname: `/BookDetailsPage/${book._id}`, state: book }}
// // // //                 key={book._id}
// // // //                 className="product flex flex-col items-center justify-center rounded-md shadow-md p-4 bg-white hover:bg-gray-100 transition duration-300"
// // // //               >
// // // //                 <img
// // // //                   src={`../../src/images/${book.image}`}
// // // //                   alt={book.title}
// // // //                   className="w-48 h-60 object-cover mb-2 rounded-lg"
// // // //                 />
// // // //                 <h3 className="text-lg font-semibold text-blue-900">
// // // //                   {book.title}
// // // //                 </h3>
// // // //                 <p className="text-gray-600 text-center">Discover more</p>
// // // //               </Link>
// // // //             ))
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //       <div className="section">
// // // //         <h2 className="text-2xl font-bold text-blue-900 mb-4">
// // // //           Recommended Books
// // // //         </h2>
// // // //         <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// // // //           {loading ? (
// // // //             <Spinner />
// // // //           ) : (
// // // //             books &&
// // // //             books.slice(6, 12).map((book) => (
// // // //               <Link
// // // //                 to={{ pathname: `/BookDetailsPage/${book._id}`, state: book }}
// // // //                 key={book._id}
// // // //                 className="product flex flex-col items-center justify-center rounded-md shadow-md p-4 bg-white hover:bg-gray-100 transition duration-300"
// // // //               >
// // // //                 <img
// // // //                   src={`../../src/images/${book.image}`}
// // // //                   alt={book.title}
// // // //                   className="w-48 h-60 object-cover mb-2 rounded-lg"
// // // //                 />
// // // //                 <h3 className="text-lg font-semibold text-blue-900">
// // // //                   {book.title}
// // // //                 </h3>
// // // //                 <p className="text-gray-600 text-center">Explore now</p>
// // // //               </Link>
// // // //             ))
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //       <Reviews />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default UserHomepage;
// // // // import React, { useEffect, useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import axios from "axios";
// // // // import Reviews from "../userpage/reviews";
// // // // import Spinner from "../../pages/Spinner";

// // // // const UserHomepage = () => {
// // // //   const [books, setBooks] = useState([]);
// // // //   const [loading, setLoading] = useState(false);

// // // //   useEffect(() => {
// // // //     setLoading(true);
// // // //     axios
// // // //       .get("http://localhost:5555/books")
// // // //       .then((response) => {
// // // //         console.log("Fetched books:", response.data);
// // // //         // Check if response data contains a 'data' array
// // // //         if (response.data && Array.isArray(response.data.data)) {
// // // //           // Limit the books array to the first 12 items
// // // //           setBooks(response.data.data.slice(0, 12));
// // // //         } else {
// // // //           console.error(
// // // //             "Error fetching books: Response data does not contain the expected 'data' property"
// // // //           );
// // // //         }
// // // //         setLoading(false);
// // // //       })
// // // //       .catch((error) => {
// // // //         console.error("Error fetching books:", error);
// // // //         setLoading(false);
// // // //       });
// // // //   }, []);

// // // //   return (
// // // //     <div className="homepage bg-gray-200 min-h-screen">
// // // //       <div className="section mb-20">
// // // //         <h2 className="text-2xl font-bold text-blue-900 mb-4">Top Sellers</h2>
// // // //         <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// // // //           {loading ? (
// // // //             <Spinner />
// // // //           ) : (
// // // //             books.map((book) => (
// // // //               <Link
// // // //                 to={{ pathname: `/BookDetailsPage/${book._id}`, state: book }}
// // // //                 key={book._id}
// // // //                 className="product flex flex-col items-center justify-center rounded-md shadow-md p-4 bg-white hover:bg-gray-100 transition duration-300"
// // // //               >
// // // //                 <img
// // // //                   src={`../../src/images/${book.image}`}
// // // //                   alt={book.title}
// // // //                   className="w-48 h-60 object-cover mb-2 rounded-lg"
// // // //                 />
// // // //                 <h3 className="text-lg font-semibold text-blue-900">
// // // //                   {book.title}
// // // //                 </h3>
// // // //                 <p className="text-gray-600 text-center">Discover more</p>
// // // //               </Link>
// // // //             ))
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //       <Reviews />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default UserHomepage;
// // // // import React, { useEffect, useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import axios from "axios";
// // // // // import Reviews from "../userpage/reviews";
// // // // import Spinner from "../../pages/Spinner";
// // // // import UserNavbar from "../../pages/usernavbar";

// // // // const UserHomepage = () => {
// // // //   const [books, setBooks] = useState([]);
// // // //   const [loading, setLoading] = useState(false);

// // // //   useEffect(() => {
// // // //     setLoading(true);
// // // //     axios
// // // //       .get("http://localhost:5555/books")
// // // //       .then((response) => {
// // // //         console.log("Fetched books:", response.data);
// // // //         // Check if response data contains a 'data' array
// // // //         if (response.data && Array.isArray(response.data.data)) {
// // // //           // Limit the books array to the first 12 items
// // // //           setBooks(response.data.data.slice(0, 12));
// // // //         } else {
// // // //           console.error(
// // // //             "Error fetching books: Response data does not contain the expected 'data' property"
// // // //           );
// // // //         }
// // // //         setLoading(false);
// // // //       })
// // // //       .catch((error) => {
// // // //         console.error("Error fetching books:", error);
// // // //         setLoading(false);
// // // //       });
// // // //   }, []);

// // // //   const handleAddToCart = (bookId) => {
// // // //     // Implement your add to cart logic here
// // // //     console.log("Add to cart clicked for book with ID:", bookId);
// // // //   };

// // // //   return (
// // // //     <div className="homepage bg-gray-200 min-h-screen">
// // // //       <UserNavbar />
// // // //       <div className="section mb-20">
// // // //         <h2 className="text-2xl font-bold text-blue-900 mb-4">Top Sellers</h2>
// // // //         <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// // // //           {loading ? (
// // // //             <Spinner />
// // // //           ) : (
// // // //             books.map((book) => (
// // // //               <div
// // // //                 key={book._id}
// // // //                 className="product flex flex-col items-center justify-center rounded-md shadow-md p-4 bg-white hover:bg-gray-100 transition duration-300"
// // // //               >
// // // //                 <Link
// // // //                   to={{ pathname: `/BookDetailsPage/${book._id}`, state: book }}
// // // //                 >
// // // //                   <img
// // // //                     src={`../../src/images/${book.image}`}
// // // //                     alt={book.title}
// // // //                     className="w-48 h-60 object-cover mb-2 rounded-lg"
// // // //                   />
// // // //                 </Link>
// // // //                 <h3 className="text-lg font-semibold text-blue-900">
// // // //                   {book.title}
// // // //                 </h3>
// // // //                 <p className="text-gray-600 text-center">Discover more</p>
// // // //                 <button
// // // //                   className="add-to-cart-btn"
// // // //                   onClick={() => handleAddToCart(book._id)}
// // // //                 >
// // // //                   Add to Cart
// // // //                 </button>
// // // //               </div>
// // // //             ))
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //       {/* <Reviews /> */}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default UserHomepage;
// // // import React, { useEffect, useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import axios from "axios";
// // // import Spinner from "../../pages/Spinner";
// // // import UserNavbar from "../../pages/usernavbar";

// // // const UserHomepage = () => {
// // //   const [books, setBooks] = useState([]);
// // //   const [loading, setLoading] = useState(false);

// // //   useEffect(() => {
// // //     setLoading(true);
// // //     axios
// // //       .get("http://localhost:5555/books")
// // //       .then((response) => {
// // //         console.log("Fetched books:", response.data);
// // //         if (response.data && Array.isArray(response.data.data)) {
// // //           setBooks(response.data.data.slice(0, 12));
// // //         } else {
// // //           console.error(
// // //             "Error fetching books: Response data does not contain the expected 'data' property"
// // //           );
// // //         }
// // //         setLoading(false);
// // //       })
// // //       .catch((error) => {
// // //         console.error("Error fetching books:", error);
// // //         setLoading(false);
// // //       });
// // //   }, []);

// // //   const handleAddToCart = (bookId) => {
// // //     console.log("Add to cart clicked for book with ID:", bookId);
// // //   };

// // //   return (
// // //     <div className="homepage bg-gray-200 min-h-screen">
// // //       <UserNavbar />
// // //       {/* Container with specified color and content */}
// // //       <div className="container bg-cyan-100 py-8 px-4 mb-8">
// // //         <div className="flex flex-col md:flex-row items-center justify-between">
// // //           <div className="w-full md:w-1/2 mb-4 md:mb-0">
// // //             <p className="text-lg text-gray-800">
// // //               Find your favorite books according to your preferences.
// // //             </p>
// // //           </div>
// // //           <div className="w-full md:w-1/2">
// // //             <img
// // //               src="path_to_your_image"
// // //               alt="Book Image"
// // //               className="w-full h-auto"
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>
// // //       {/* End of container */}
// // //       <div className="section mb-20">
// // //         <h2 className="text-2xl font-bold text-blue-900 mb-4">Top Sellers</h2>
// // //         <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// // //           {loading ? (
// // //             <Spinner />
// // //           ) : (
// // //             books.map((book) => (
// // //               <div
// // //                 key={book._id}
// // //                 className="product flex flex-col items-center justify-center rounded-md shadow-md p-4 bg-white hover:bg-gray-100 transition duration-300"
// // //               >
// // //                 <Link
// // //                   to={{ pathname: `/BookDetailsPage/${book._id}`, state: book }}
// // //                 >
// // //                   <img
// // //                     src={`../../src/images/${book.image}`}
// // //                     alt={book.title}
// // //                     className="w-48 h-60 object-cover mb-2 rounded-lg"
// // //                   />
// // //                 </Link>
// // //                 <h3 className="text-lg font-semibold text-blue-900">
// // //                   {book.title}
// // //                 </h3>
// // //                 <p className="text-gray-600 text-center">Discover more</p>
// // //                 <button
// // //                   className="add-to-cart-btn"
// // //                   onClick={() => handleAddToCart(book._id)}
// // //                 >
// // //                   Add to Cart
// // //                 </button>
// // //               </div>
// // //             ))
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default UserHomepage;
// // import React, { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import axios from "axios";
// // import Spinner from "../../pages/Spinner";
// // import UserNavbar from "../../pages/usernavbar";

// // const UserHomepage = () => {
// //   const [books, setBooks] = useState([]);
// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     setLoading(true);
// //     axios
// //       .get("http://localhost:5555/books")
// //       .then((response) => {
// //         console.log("Fetched books:", response.data);
// //         if (response.data && Array.isArray(response.data.data)) {
// //           setBooks(response.data.data.slice(0, 12));
// //         } else {
// //           console.error(
// //             "Error fetching books: Response data does not contain the expected 'data' property"
// //           );
// //         }
// //         setLoading(false);
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching books:", error);
// //         setLoading(false);
// //       });
// //   }, []);

// //   const handleAddToCart = (bookId) => {
// //     console.log("Add to cart clicked for book with ID:", bookId);
// //   };

// //   return (
// //     <div className="homepage bg-gray-200 min-h-screen">
// //       <UserNavbar />
// //       {/* Container with specified color and content */}
// //       <div className="container-fluid bg-cyan-100 py-8 px-4 mb-8">
// //         <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
// //           <div className="w-full md:w-1/2 mb-4 md:mb-0">
// //             <p className="text-lg text-gray-800">
// //               Find your favorite books according to your preferences.
// //             </p>
// //           </div>
// //           <div className="w-full md:w-1/2">
// //             <img
// //               src="path_to_your_image"
// //               alt="Book Image"
// //               className="w-full h-auto"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //       {/* End of container */}
// //       <div className="section mb-20">
// //         <h2 className="text-2xl font-bold text-blue-900 mb-4">Top Sellers</h2>
// //         <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// //           {loading ? (
// //             <Spinner />
// //           ) : (
// //             books.map((book) => (
// //               <div
// //                 key={book._id}
// //                 className="product flex flex-col items-center justify-center rounded-md shadow-md p-4 bg-white hover:bg-gray-100 transition duration-300"
// //               >
// //                 <Link
// //                   to={{ pathname: `/BookDetailsPage/${book._id}`, state: book }}
// //                 >
// //                   <img
// //                     src={`../../src/images/${book.image}`}
// //                     alt={book.title}
// //                     className="w-48 h-60 object-cover mb-2 rounded-lg"
// //                   />
// //                 </Link>
// //                 <h3 className="text-lg font-semibold text-blue-900">
// //                   {book.title}
// //                 </h3>
// //                 <p className="text-gray-600 text-center">Discover more</p>
// //                 <button
// //                   className="add-to-cart-btn"
// //                   onClick={() => handleAddToCart(book._id)}
// //                 >
// //                   Add to Cart
// //                 </button>
// //               </div>
// //             ))
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserHomepage;
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Spinner from "../../pages/Spinner";
// import UserNavbar from "../../pages/usernavbar";
// import book5 from "../Asset/book5.png";
// const UserHomepage = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get("http://localhost:5555/books")
//       .then((response) => {
//         console.log("Fetched books:", response.data);
//         if (response.data && Array.isArray(response.data.data)) {
//           setBooks(response.data.data.slice(0, 12));
//         } else {
//           console.error(
//             "Error fetching books: Response data does not contain the expected 'data' property"
//           );
//         }
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching books:", error);
//         setLoading(false);
//       });
//   }, []);

//   const handleAddToCart = (bookId) => {
//     console.log("Add to cart clicked for book with ID:", bookId);
//   };

//   return (
//     <div className="homepage bg-gray-200 min-h-screen">
//       <UserNavbar />
//       <div className="container-fluid bg-cyan-100 py-8 px-4 mb-8">
//         <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
//           <div className="w-full md:w-1/2 mb-4 md:mb-0">
//             {/* Styled text */}
//             <p className="text-4xl">
//               <span className="text-red-500">Find</span>{" "}
//               <span className="text-blue-500">your</span>{" "}
//               <span className="text-green-500">favorite</span>{" "}
//               <span className="text-yellow-500">books</span>{" "}
//               <span className="text-purple-500">according</span>{" "}
//               <span className="text-indigo-500">to</span>{" "}
//               <span className="text-pink-500">your</span>{" "}
//               <span className="text-orange-500">preferences</span>
//             </p>
//             {/* Normal font text */}
//             <p className="text-lg text-gray-800 mt-4">
//               Find your favorite books according to your preferences.
//             </p>
//           </div>
//           <div className="w-full md:w-1/2">
//             <img src={book5} alt="Book Image" className="w-full" />
//           </div>
//         </div>
//       </div>
//       <div className="section mb-20">
//         <h2 className="text-2xl font-bold text-blue-900 mb-4">Top Sellers</h2>
//         <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {loading ? (
//             <Spinner />
//           ) : (
//             books.map((book) => (
//               <div
//                 key={book._id}
//                 className="product flex flex-col items-center justify-center rounded-md shadow-md p-4 bg-white hover:bg-gray-100 transition duration-300"
//               >
//                 <Link
//                   to={{ pathname: `/BookDetailsPage/${book._id}`, state: book }}
//                 >
//                   <img
//                     src={`../../src/images/${book.image}`}
//                     alt={book.title}
//                     className="w-48 h-60 object-cover mb-2 rounded-lg"
//                   />
//                 </Link>
//                 <h3 className="text-lg font-semibold text-blue-900">
//                   {book.title}
//                 </h3>
//                 <p className="text-gray-600 text-center">Discover more</p>
//                 <button
//                   className="add-to-cart-btn"
//                   onClick={() => handleAddToCart(book._id)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserHomepage;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../../pages/Spinner";
import UserNavbar from "../../pages/usernavbar";
import book5 from "../Asset/book5.png";
import Reviews from "..//userpage/reviews";
const UserHomepage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        console.log("Fetched books:", response.data);
        if (response.data && Array.isArray(response.data.data)) {
          setBooks(response.data.data.slice(0, 12));
        } else {
          console.error(
            "Error fetching books: Response data does not contain the expected 'data' property"
          );
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);
  const handleAddToCart = (bookId, bookName, bookImage) => {
    // Retrieve existing cart items from localStorage
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the item already exists in the cart
    const isItemInCart = existingCartItems.some((item) => item.id === bookId);

    // If the item is not already in the cart, add it
    if (!isItemInCart) {
      const newCartItem = { id: bookId, name: bookName, image: bookImage };
      const updatedCartItems = [...existingCartItems, newCartItem];
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems); // Update state if needed
    } else {
      // Optionally display a message that the item is already in the cart
      console.log("Item is already in the cart");
    }
  };

  // const handleAddToCart = (bookId, bookName, bookImage) => {
  //   // console.log("Add to cart clicked for book with ID:", bookId);
  //   console.log("Add to cart clicked for book with ID:", bookId);
  //   // Pass book details to CartPage
  //   const cartItem = { id: bookId, name: bookName, image: bookImage };
  //   localStorage.setItem("cartItem", JSON.stringify(cartItem));
  // };

  return (
    <div className="homepage bg-gray-200 min-h-screen">
      <UserNavbar />
      <div className="container-fluid bg-cyan-100 py-8 px-4 mb-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2 mb-4 md:mb-1 pl-12  ">
            {/* Styled text */}
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
            {/* Normal font text */}
            <p className="text-lg text-gray-800 mt-4">
              Open a book, open your mind. Explore endless worlds, ignite your
              imagination, and discover the magic of reading, all from the
              comfort of your home.
            </p>
          </div>
          {/* <div className="w-full md:w-1/4">
            <p className="text-lg text-gray-800 mt-4">
              Word in a different language
            </p>
          </div> */}
          <div className="w-full md:w-1/5 pr-16 ">
            <img
              src={book5}
              alt="Book Image"
              className="w-full h-60 object-cover mb-2 rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="section mb-20">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
          Top Sellers
        </h2>
        <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            <Spinner />
          ) : (
            books.map((book) => (
              <div
                key={book._id}
                className="product flex flex-col items-center justify-center rounded-md shadow-md p-4 bg-white hover:bg-gray-100 transition duration-300"
              >
                <Link
                  to={{ pathname: `/BookDetailsPage/${book._id}`, state: book }}
                >
                  <img
                    src={`../../src/images/${book.image}`}
                    alt={book.title}
                    className="w-48 h-60 object-cover mb-2 rounded-lg"
                  />
                </Link>
                <h3 className="text-lg font-semibold text-blue-900">
                  {book.title}
                </h3>
                {/* <p className="text-gray-600 text-center">Discover more</p> */}
                <div>
                  <button
                    className="add-to-cart-btn bg-blue-400 p-2"
                    onClick={() =>
                      handleAddToCart(book._id, book.title, book.image)
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="section mb-20">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
          Recommended Books
        </h2>
        <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            <Spinner />
          ) : (
            books.map((book) => (
              <div
                key={book._id}
                className="product flex flex-col items-center justify-center rounded-md shadow-md p-4 bg-white hover:bg-gray-100 transition duration-300"
              >
                <Link
                  to={{ pathname: `/BookDetailsPage/${book._id}`, state: book }}
                >
                  <img
                    src={`../../src/images/${book.image}`}
                    alt={book.title}
                    className="w-23 h-60 object-cover mb-2 rounded-lg"
                  />
                </Link>
                <h3 className="text-lg font-semibold text-blue-900">
                  {book.title}
                </h3>
                <p className="text-gray-600 text-center">Discover more</p>
                <button
                  className="add-to-cart-btn"
                  onClick={() =>
                    handleAddToCart(book._id, book.title, book.image)
                  }
                >
                  Add to Cart
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      <Reviews />
    </div>
  );
};

export default UserHomepage;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Spinner from "../../pages/Spinner";
// import UserNavbar from "../../pages/usernavbar";
// import book5 from "../Asset/book5.png";
// import Reviews from "..//userpage/reviews";

// const UserHomepage = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get("http://localhost:5555/books")
//       .then((response) => {
//         console.log("Fetched books:", response.data);
//         if (response.data && Array.isArray(response.data.data)) {
//           setBooks(response.data.data.slice(0, 12));
//         } else {
//           console.error(
//             "Error fetching books: Response data does not contain the expected 'data' property"
//           );
//         }
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching books:", error);
//         setLoading(false);
//       });
//   }, []);

//   const handleAddToCart = (bookId, bookName, bookImage) => {
//     console.log("Add to cart clicked for book with ID:", bookId);
//     // Pass book details to CartPage
//     const cartItem = { id: bookId, name: bookName, image: bookImage };
//     localStorage.setItem("cartItem", JSON.stringify(cartItem));
//   };

//   return (
//     <div className="homepage bg-gray-200 min-h-screen">
//       <UserNavbar />
//       <div className="container-fluid bg-cyan-100 py-8 px-4 mb-8">
//         {/* Omitted code for brevity */}
//       </div>
//       <div className="section mb-20">
//         {/* Omitted code for brevity */}
//         <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {loading ? (
//             <Spinner />
//           ) : (
//             books.map((book) => (
//               <div
//                 key={book._id}
//                 className="product flex flex-col items-center justify-center rounded-md shadow-md p-4 bg-white hover:bg-gray-100 transition duration-300"
//               >
//                 <Link
//                   to={{ pathname: `/BookDetailsPage/${book._id}`, state: book }}
//                 >
//                   <img
//                     src={`../../src/images/${book.image}`}
//                     alt={book.title}
//                     className="w-48 h-60 object-cover mb-2 rounded-lg"
//                   />
//                 </Link>
//                 <h3 className="text-lg font-semibold text-blue-900">
//                   {book.title}
//                 </h3>
//                 <p className="text-gray-600 text-center">Discover more</p>
//                 <button
//                   className="add-to-cart-btn"
//                   onClick={() =>
//                     handleAddToCart(book._id, book.title, book.image)
//                   }
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//       <div className="section mb-20">{/* Omitted code for brevity */}</div>
//       <Reviews />
//     </div>
//   );
// };

// export default UserHomepage;
