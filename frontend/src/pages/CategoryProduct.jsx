// // // import React, { useState, useEffect } from "react";
// // // // import Layout from "../components/Layout/Layout";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // // import "../styles/CategoryProductStyles.css";
// // // import axios from "axios";
// // // const CategoryProduct = () => {
// // //   const params = useParams();
// // //   const navigate = useNavigate();
// // //   const [books, setBooks] = useState([]);
// // //   const [category, setCategory] = useState([]);

// // //   useEffect(() => {
// // //     if (params?.slug) getPrductsByCat();
// // //   }, [params?.slug]);
// // //   const getPrductsByCat = async () => {
// // //     try {
// // //       const { data } = await axios.get(
// // //         `http://localhost:5555/books/product-category/${params.slug}`
// // //       );
// // //       setBooks(data?.books);
// // //       setCategory(data?.category);
// // //     } catch (error) {
// // //       console.log(error);
// // //     }
// // //   };

// // //   return (
// // //     // <Layout>
// // //     <div className="container mt-3 category">
// // //       <h4 className="text-center">Category - {category?.name}</h4>
// // //       <h6 className="text-center">{books?.length} result found </h6>
// // //       <div className="row">
// // //         <div className="col-md-9 offset-1">
// // //           <div className="d-flex flex-wrap">
// // //             {books?.map((p) => (
// // //               <div className="card m-2" key={p._id}>
// // //                 <div className="my-4">
// // //                   {/* <span className="text-xl mr-4 text-gray-500">Image</span> */}
// // //                   {p.image ? (
// // //                     <img
// // //                       src={`../../src/images/${p.image}`}
// // //                       // src={`../../src/images/${previousImage}`}
// // //                       alt="Book"
// // //                       className="max-w-xs"
// // //                     />
// // //                   ) : (
// // //                     <span>No image available</span>
// // //                   )}
// // //                 </div>
// // //                 <div className="my-4">
// // //                   <span>{p.title}</span>
// // //                 </div>
// // //                 {/* <img
// // //                   src=
// // //                   {`http://localhost:5555/books/product-photo/${p._id}`}
// // //                   className="card-img-top"
// // //                   alt={p.name}
// // //                 /> */}
// // //                 <div className="card-body">
// // //                   <p className="card-text ">
// // //                     {p.description.substring(0, 60)}...
// // //                   </p>
// // //                   <div className="card-name-price">
// // //                     <button
// // //                       className="btn btn-info ms-1"
// // //                       onClick={() => navigate(`/product/${p.slug}`)}
// // //                     >
// // //                       More Details
// // //                     </button>
// // //                     {/* <button
// // //                     className="btn btn-dark ms-1"
// // //                     onClick={() => {
// // //                       setCart([...cart, p]);
// // //                       localStorage.setItem(
// // //                         "cart",
// // //                         JSON.stringify([...cart, p])
// // //                       );
// // //                       toast.success("Item Added to cart");
// // //                     }}
// // //                   >
// // //                     ADD TO CART
// // //                   </button> */}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //           {/* <div className="m-2 p-3">
// // //             {products && products.length < total && (
// // //               <button
// // //                 className="btn btn-warning"
// // //                 onClick={(e) => {
// // //                   e.preventDefault();
// // //                   setPage(page + 1);
// // //                 }}
// // //               >
// // //                 {loading ? "Loading ..." : "Loadmore"}
// // //               </button>
// // //             )}
// // //           </div> */}
// // //         </div>
// // //       </div>
// // //     </div>
// // //     // </Layout>
// // //   );
// // // };

// // // export default CategoryProduct;
// // // import React, { useState, useEffect } from "react";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import axios from "axios";

// // // const CategoryProduct = () => {
// // //   const params = useParams();
// // //   const navigate = useNavigate();
// // //   const [books, setBooks] = useState([]);
// // //   const [category, setCategory] = useState([]);

// // //   useEffect(() => {
// // //     if (params?.slug) getProductsByCat();
// // //   }, [params?.slug]);

// // //   const getProductsByCat = async () => {
// // //     try {
// // //       const { data } = await axios.get(
// // //         `http://localhost:5555/books/product-category/${params.slug}`
// // //       );
// // //       setBooks(data?.books);
// // //       setCategory(data?.category);
// // //     } catch (error) {
// // //       console.log(error);
// // //     }
// // //   };

// // //   return (
// // //     <div className="container mt-3">
// // //       <h4 className="text-center">Category - {category?.name}</h4>
// // //       <h6 className="text-center">{books?.length} results found</h6>
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// // //         {books?.map((book) => (
// // //           <div key={book._id} className="bg-white rounded-lg shadow-md p-4">
// // //             <div className="flex justify-center">
// // //               {book.image ? (
// // //                 <img
// // //                   src={`../../src/images/${book.image}`}
// // //                   alt={book.title}
// // //                   className="w-32 h-40 object-cover rounded-md"
// // //                 />
// // //               ) : (
// // //                 <span>No image available</span>
// // //               )}
// // //             </div>
// // //             <div className="mt-4">
// // //               <h4 className="text-xl font-semibold">{book.title}</h4>
// // //               <p className="text-gray-600">{book.description}</p>
// // //             </div>
// // //             <div className="mt-4 flex justify-between items-center">
// // //               <button
// // //                 onClick={() => navigate(`/BookDetailsPage/${book._id}`)}
// // //                 className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
// // //               >
// // //                 More Details
// // //               </button>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CategoryProduct;
// // // import React, { useState, useEffect } from "react";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import axios from "axios";

// // // const CategoryProduct = () => {
// // //   const params = useParams();
// // //   const navigate = useNavigate();
// // //   const [books, setBooks] = useState([]);
// // //   const [category, setCategory] = useState([]);

// // //   useEffect(() => {
// // //     if (params?.slug) getProductsByCat();
// // //   }, [params?.slug]);

// // //   const getProductsByCat = async () => {
// // //     try {
// // //       const { data } = await axios.get(
// // //         `http://localhost:5555/books/product-category/${params.slug}`
// // //       );
// // //       setBooks(data?.books);
// // //       setCategory(data?.category);
// // //     } catch (error) {
// // //       console.log(error);
// // //     }
// // //   };

// // //   const handleDetails = (bookId) => {
// // //     navigate(`/BookDetailsPage/${bookId}`);
// // //   };

// // //   const handleAddToCart = (bookId) => {
// // //     // Add your logic for adding the book to the cart
// // //     console.log(`Adding book ${bookId} to cart`);
// // //   };

// // //   return (
// // //     <div className="container mt-3">
// // //       <h4 className="text-center">Category - {category?.name}</h4>
// // //       <h6 className="text-center">{books?.length} results found</h6>
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// // //         {books?.map((book) => (
// // //           <div key={book._id} className="bg-white rounded-lg shadow-md p-4">
// // //             <div className="flex justify-center">
// // //               {book.image ? (
// // //                 <img
// // //                   src={`../../src/images/${book.image}`}
// // //                   alt={book.title}
// // //                   className="w-32 h-40 object-cover rounded-md"
// // //                 />
// // //               ) : (
// // //                 <span>No image available</span>
// // //               )}
// // //             </div>
// // //             <div className="mt-4">
// // //               <h4 className="text-xl font-semibold">{book.title}</h4>
// // //               <p className="text-gray-600">{book.description}</p>
// // //             </div>
// // //             <div className="mt-4 flex justify-between items-center">
// // //               <button
// // //                 onClick={() => handleDetails(book._id)}
// // //                 className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-2"
// // //               >
// // //                 More Details
// // //               </button>
// // //               <button
// // //                 onClick={() => handleAddToCart(book._id)}
// // //                 className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
// // //               >
// // //                 Add to Cart
// // //               </button>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CategoryProduct;
// // import React, { useState, useEffect } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const CategoryProduct = () => {
// //   const params = useParams();
// //   const navigate = useNavigate();
// //   const [books, setBooks] = useState([]);
// //   const [category, setCategory] = useState([]);

// //   useEffect(() => {
// //     if (params?.slug) getProductsByCat();
// //   }, [params?.slug]);

// //   const getProductsByCat = async () => {
// //     try {
// //       const { data } = await axios.get(
// //         `http://localhost:5555/books/product-category/${params.slug}`
// //       );
// //       setBooks(data?.books);
// //       setCategory(data?.category);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   const handleDetails = (bookId) => {
// //     navigate(`/BookDetailsPage/${bookId}`);
// //   };

// //   const handleAddToCart = (bookId) => {
// //     // Add your logic for adding the book to the cart
// //     console.log(`Adding book ${bookId} to cart`);
// //   };

// //   return (
// //     <div className="container mt-3">
// //       <h4 className="text-center">Category - {category?.name}</h4>
// //       <h6 className="text-center">{books?.length} results found</h6>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// //         {books?.map((book) => (
// //           <div key={book._id} className="bg-white rounded-lg shadow-md p-4">
// //             <div className="flex justify-center">
// //               {book.image ? (
// //                 <img
// //                   src={`../../src/images/${book.image}`}
// //                   alt={book.title}
// //                   className="w-32 h-40 object-cover rounded-md"
// //                 />
// //               ) : (
// //                 <span>No image available</span>
// //               )}
// //             </div>
// //             <div className="mt-4">
// //               <h4 className="text-xl font-semibold">{book.title}</h4>
// //               <p className="text-gray-600">{book.description}</p>
// //             </div>
// //             <div className="mt-4 flex justify-between items-center">
// //               <button
// //                 onClick={() => handleDetails(book._id)}
// //                 className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-2"
// //               >
// //                 More Details
// //               </button>
// //               <button
// //                 onClick={() => handleAddToCart(book._id)}
// //                 className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
// //               >
// //                 Add to Cart
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CategoryProduct;
// // import React, { useState, useEffect } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const CategoryProduct = () => {
// //   const params = useParams();
// //   const navigate = useNavigate();
// //   const [books, setBooks] = useState([]);
// //   const [category, setCategory] = useState([]);

// //   useEffect(() => {
// //     if (params?.slug) getProductsByCat();
// //   }, [params?.slug]);

// //   const getProductsByCat = async () => {
// //     try {
// //       const { data } = await axios.get(
// //         `http://localhost:5555/books/product-category/${params.slug}`
// //       );
// //       setBooks(data?.books);
// //       setCategory(data?.category);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   const handleDetails = (bookId) => {
// //     navigate(`/BookDetailsPage/${bookId}`);
// //   };

// //   const handleAddToCart = (bookId) => {
// //     // Add your logic for adding the book to the cart
// //     console.log(`Adding book ${bookId} to cart`);
// //   };

// //   return (
// //     <div className="container mt-3">
// //       <h4 className="text-center">Category - {category?.name}</h4>
// //       <h6 className="text-center">{books?.length} results found</h6>
// //       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //         {books?.map((book) => (
// //           <div
// //             key={book._id}
// //             className="product flex flex-col items-center justify-center rounded-md shadow-md p-4 bg-white hover:bg-gray-100 transition duration-300"
// //           >
// //             <img
// //               src={`../../src/images/${book.image}`}
// //               alt={book.title}
// //               className="w-48 h-60 object-cover mb-2 rounded-lg"
// //             />
// //             <h3 className="text-lg font-semibold text-blue-900">
// //               {book.title}
// //             </h3>
// //             <p className="text-gray-600 text-center">{book.description}</p>
// //             <div className="flex justify-center mt-4">
// //               <button
// //                 onClick={() => handleDetails(book._id)}
// //                 className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-2"
// //               >
// //                 More Details
// //               </button>
// //               <button
// //                 onClick={() => handleAddToCart(book._id)}
// //                 className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
// //               >
// //                 Add to Cart
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CategoryProduct;
// // import React, { useState, useEffect } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const CategoryProduct = () => {
// //   const params = useParams();
// //   const navigate = useNavigate();
// //   const [books, setBooks] = useState([]);
// //   const [category, setCategory] = useState([]);

// //   useEffect(() => {
// //     if (params?.slug) getProductsByCat();
// //   }, [params?.slug]);

// //   const getProductsByCat = async () => {
// //     try {
// //       const { data } = await axios.get(
// //         `http://localhost:5555/books/product-category/${params.slug}`
// //       );
// //       setBooks(data?.books);
// //       setCategory(data?.category);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   const handleDetails = (bookId) => {
// //     navigate(`/BookDetailsPage/${bookId}`);
// //   };

// //   const handleAddToCart = (bookId) => {
// //     // Add your logic for adding the book to the cart
// //     console.log(`Adding book ${bookId} to cart`);
// //   };

// //   return (
// //     <div className="container mt-3">
// //       <h4 className="text-center">Category - {category?.name}</h4>
// //       <h6 className="text-center">{books?.length} results found</h6>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //         {books?.map((book) => (
// //           <div
// //             key={book._id}
// //             className="product flex flex-col items-center justify-center rounded-md shadow-md p-4 bg-white hover:bg-gray-100 transition duration-300"
// //             style={{ width: "280px" }} // Adjust card width
// //           >
// //             <img
// //               src={`../../src/images/${book.image}`}
// //               alt={book.title}
// //               className="w-64 h-80 object-cover mb-4 rounded-lg" // Increase image size
// //             />
// //             <h3 className="text-lg font-semibold text-blue-900 mb-2">
// //               {book.title}
// //             </h3>
// //             <p className="text-gray-600 text-center mb-4">{book.description}</p>
// //             <div className="flex justify-center space-x-4">
// //               <button
// //                 onClick={() => handleDetails(book._id)}
// //                 className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
// //               >
// //                 More Details
// //               </button>
// //               <button
// //                 onClick={() => handleAddToCart(book._id)}
// //                 className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
// //               >
// //                 Add to Cart
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CategoryProduct;
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// const CategoryProduct = () => {
//   const params = useParams();
//   const navigate = useNavigate();
//   const [books, setBooks] = useState([]);
//   const [category, setCategory] = useState([]);

//   useEffect(() => {
//     if (params?.slug) getProductsByCat();
//   }, [params?.slug]);

//   const getProductsByCat = async () => {
//     try {
//       const { data } = await axios.get(
//         `http://localhost:5555/books/product-category/${params.slug}`
//       );
//       setBooks(data?.books);
//       setCategory(data?.category);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleDetails = (bookId) => {
//     navigate(`/BookDetailsPage/${bookId}`);
//   };

//   const handleAddToCart = (bookId) => {
//     // Add your logic for adding the book to the cart
//     console.log(`Adding book ${bookId} to cart`);
//   };

//   return (
//     <div className="container mt-3">
//       <h4 className="text-center">Category - {category?.name}</h4>
//       <h6 className="text-center">{books?.length} results found</h6>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {books?.map((book) => (
//           <div
//             key={book._id}
//             className="product flex flex-col items-center justify-center rounded-md shadow-md p-4 bg-white hover:bg-gray-100 transition duration-300"
//             style={{ width: "280px" }} // Adjust card width
//           >
//             <img
//               src={`../../src/images/${book.image}`}
//               alt={book.title}
//               className="w-64 h-80 object-cover mb-4 rounded-lg" // Increase image size
//             />
//             <h3 className="text-lg font-semibold text-blue-900 mb-2">
//               {book.title}
//             </h3>
//             <p className="text-gray-600 text-center mb-4">{book.description}</p>
//             <div className="flex justify-center space-x-4">
//               <button
//                 onClick={() => handleDetails(book._id)}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//               >
//                 More Details
//               </button>
//               <button
//                 onClick={() => handleAddToCart(book._id)}
//                 className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryProduct;
//   const handleAddToCart = (bookId) => {
//     // Add your logic for adding the book to the cart
//     console.log(`Adding book ${bookId} to cart`);
//   };
//   const handleAddToCart = (bookId, bookTitle, bookImage) => {
//     // Retrieve existing cart items from localStorage
//     const existingCartItems =
//       JSON.parse(localStorage.getItem("cartItems")) || [];

//     // Check if the item already exists in the cart
//     const isItemInCart = existingCartItems.some((item) => item.id === bookId);

//     // If the item is not already in the cart, add it
//     if (!isItemInCart) {
//       const newCartItem = { id: bookId, title: bookTitle, image: bookImage };
//       const updatedCartItems = [...existingCartItems, newCartItem];
//       localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
//       // Optionally update state if needed
//       // setCartItems(updatedCartItems);
//       // Show a confirmation message
//       console.log("Item added to cart!");
//     } else {
//       // Optionally display a message that the item is already in the cart
//       console.log("Item is already in the cart");
//     }
//   };
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import UserNavbar from "./usernavbar";

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getProductsByCat();
  }, [params?.slug]);

  const getProductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5555/books/product-category/${params.slug}`
      );
      setBooks(data?.books);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDetails = (bookId) => {
    navigate(`/BookDetailsPage/${bookId}`);
  };

  const handleAddToCart = (bookId, bookTitle, bookImage) => {
    // Retrieve existing cart items from localStorage
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the item already exists in the cart
    const isItemInCart = existingCartItems.some((item) => item.id === bookId);

    // If the item is not already in the cart, add it
    if (!isItemInCart) {
      const newCartItem = { id: bookId, title: bookTitle, image: bookImage };
      const updatedCartItems = [...existingCartItems, newCartItem];
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      // Optionally update state if needed
      // setCartItems(updatedCartItems);
      // Show a confirmation message
      console.log("Item added to cart:", bookTitle);
    } else {
      // Optionally display a message that the item is already in the cart
      console.log("Item is already in the cart:", bookTitle);
    }
  };
  const truncateDescription = (description, maxLength) => {
    return description.length > maxLength
      ? description.substring(0, maxLength) + "..."
      : description;
  };
  return (
    <div className="container mt-3">
      <UserNavbar />
      {/* <h4 className="text-center">Category - {category?.name}</h4> */}
      {/* <h6 className="text-center">{books?.length} results found</h6> */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
        {books?.map((book) => (
          <div
            key={book._id}
            className="product flex flex-col items-center justify-center rounded-md shadow-md p-4 bg-white hover:bg-gray-100 transition duration-300"
            style={{ width: "280px" }} // Adjust card width
          >
            <img
              src={`../../src/images/${book.image}`}
              //   alt={book.title}
              className="w-64 h-80 object-cover mb-4 rounded-lg" // Increase image size
            />
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              {book.title}
            </h3>
            {/* <p className="text-gray-600 text-center mb-4">{book.description}</p> */}
            <p className="text-gray-600 text-center mb-4">
              {truncateDescription(book.description, 150)}
            </p>
            <div className="flex justify-between w-full px-2">
              <button
                onClick={() => handleDetails(book._id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 pr-2"
              >
                More Details
              </button>
              <button
                onClick={() =>
                  handleAddToCart(book._id, book.title, book.image)
                }
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
              >
                Add to Cart
              </button>

              {/* <button
                onClick={() => handleAddToCart(book._id)}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
              >
                Add to Cart
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;
