// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { Link } from "react-router-dom";

// // const BestSellingBooks = () => {
// //   const [book, setBook] = useState([]);
// //   const [bestSellingBooks, setBestSellingBooks] = useState([]);
// //   const [showPopup, setShowPopup] = useState(false);
// //   const [cartItems, setCartItems] = useState([]);
// //   const handleAddToCart = () => {
// //     const existingCartItems =
// //       JSON.parse(localStorage.getItem("cartItems")) || [];
// //     const isItemInCart = existingCartItems.some((item) => item.id === book._id);

// //     if (!isItemInCart) {
// //       // Add book details to the cart item
// //       const newCartItem = {
// //         id: book._id,
// //         name: book.title,
// //         image: book.image,
// //         price: book.price, // Add book price to the cart item
// //         stockQuantity: book.quantity, // Add book quantity to the cart item
// //       };
// //       const updatedCartItems = [...existingCartItems, newCartItem];
// //       localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
// //       setCartItems(updatedCartItems);
// //       setShowPopup(true);
// //       setTimeout(() => setShowPopup(false), 2000);
// //     } else {
// //       console.log("Item is already in the cart");
// //     }
// //   };

// //   useEffect(() => {
// //     const fetchBestSellingBooks = async () => {
// //       try {
// //         const response = await axios.get(
// //           "http://localhost:5555/api/orders/bestsellers"
// //         );
// //         setBestSellingBooks(response.data);
// //       } catch (error) {
// //         console.error("Error fetching best-selling books:", error);
// //       }
// //     };

// //     fetchBestSellingBooks();
// //   }, []);

// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <h2 className="text-3xl font-bold mb-6 text-center">Best Seller Books</h2>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
// //         {bestSellingBooks.map((book) => (
// //           <div
// //             key={book._id}
// //             className="bg-white shadow-lg rounded-lg overflow-hidden w-full "
// //           >
// //             <Link to={`/BookDetailsPage/${book._id}`} state={book}>
// //               <img
// //                 src={`http://localhost:5555/${book.image}`}
// //                 alt={book.title}
// //                 className="h-[300px] w-[210px] object-cover rounded-md ml-8"
// //                 style={{ height: "300px" }} // Adjust the height to fit your image aspect ratio
// //               />
// //             </Link>
// //             <div className="p-4">
// //               <h3 className="text-xl font-semibold mb-2 truncate">
// //                 {book.title}
// //               </h3>
// //               <p className="text-gray-600 mb-1">by {book.author}</p>
// //               <br></br>
// //               <button
// //                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
// //                 onClick={handleAddToCart}
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

// // export default BestSellingBooks;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const BestSellingBooks = () => {
//   const [bestSellingBooks, setBestSellingBooks] = useState([]);
//   const [showPopup, setShowPopup] = useState(false);
//   const [cartItems, setCartItems] = useState([]);

//   const handleAddToCart = (book) => {
//     const existingCartItems =
//       JSON.parse(localStorage.getItem("cartItems")) || [];
//     const isItemInCart = existingCartItems.some((item) => item.id === book._id);

//     if (!isItemInCart) {
//       // Add book details to the cart item
//       const newCartItem = {
//         id: book._id,
//         name: book.title,
//         image: book.image,
//         price: book.price, // Add book price to the cart item
//         stockQuantity: book.quantity, // Add book quantity to the cart item
//       };
//       const updatedCartItems = [...existingCartItems, newCartItem];
//       localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
//       setCartItems(updatedCartItems);
//       setShowPopup(true);
//       setTimeout(() => setShowPopup(false), 2000);
//     } else {
//       console.log("Item is already in the cart");
//     }
//   };

//   useEffect(() => {
//     const fetchBestSellingBooks = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5555/api/orders/bestsellers"
//         );
//         setBestSellingBooks(response.data);
//       } catch (error) {
//         console.error("Error fetching best-selling books:", error);
//       }
//     };

//     fetchBestSellingBooks();
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold mb-6 text-center">Best Seller Books</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//         {bestSellingBooks.map((book) => (
//           <div
//             key={book._id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden w-full"
//           >
//             <Link to={`/BookDetailsPage/${book._id}`} state={book}>
//               <img
//                 src={`http://localhost:5555/${book.image}`}
//                 alt={book.title}
//                 className="h-[300px] w-[210px] object-cover rounded-md ml-8"
//                 style={{ height: "300px" }} // Adjust the height to fit your image aspect ratio
//               />
//             </Link>
//             <div className="p-4">
//               <h3 className="text-xl font-semibold mb-2 truncate">
//                 {book.title}
//               </h3>
//               <p className="text-gray-600 mb-1">by {book.author}</p>
//               <br />
//               <button
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={() => handleAddToCart(book)}
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

// export default BestSellingBooks;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BestSellingBooks = () => {
  const [bestSellingBooks, setBestSellingBooks] = useState([]);
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
      <h2 className="text-3xl font-bold mb-6 text-center">Best Seller Books</h2>
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
                className="h-[300px] w-[210px] object-cover rounded-md ml-8"
                style={{ height: "300px" }} // Adjust the height to fit your image aspect ratio
              />
            </Link>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 truncate">
                {book.title}
              </h3>
              <p className="text-gray-600 mb-1">by {book.author}</p>
              <br />
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
  );
};

export default BestSellingBooks;
