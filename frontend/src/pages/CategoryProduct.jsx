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

  const handleAddToCart = (
    bookId,
    bookTitle,
    bookImage,
    bookPrice,
    bookQuantity
  ) => {
    // Retrieve existing cart items from localStorage
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the item already exists in the cart
    const isItemInCart = existingCartItems.some((item) => item.id === bookId);

    // If the item is not already in the cart, add it
    if (!isItemInCart) {
      const newCartItem = {
        id: bookId,
        title: bookTitle,
        image: bookImage,
        price: bookPrice,
        quantity: 1,
      };
      const updatedCartItems = [...existingCartItems, newCartItem];
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      console.log("Item added to cart:", bookTitle);
    } else {
      // Increment quantity if the item is already in the cart
      const updatedCartItems = existingCartItems.map((item) =>
        item.id === bookId ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      console.log("Item quantity increased:", bookTitle);
    }
  };
  //     const updatedCartItems = [...existingCartItems, newCartItem];
  //     localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  //     // Optionally update state if needed
  //     // setCartItems(updatedCartItems);
  //     // Show a confirmation message
  //     console.log("Item added to cart:", bookTitle);
  //   } else {
  //     // Optionally display a message that the item is already in the cart
  //     console.log("Item is already in the cart:", bookTitle);
  //   }
  // };
  const truncateDescription = (description, maxLength) => {
    return description.length > maxLength
      ? description.substring(0, maxLength) + "..."
      : description;
  };
  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength
      ? title.substring(0, maxLength) + "..."
      : title;
  };
  return (
    <div className="homepage bg-white min-h-screen">
      <UserNavbar />
      {/* <h4 className="text-center">Category - {category?.name}</h4> */}
      {/* <h6 className="text-center">{books?.length} results found</h6> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books?.map((book) => (
          <div
            key={book._id}
            className="product flex flex-col items-center justify-center rounded-md shadow-md p-4 bg-white hover:bg-gray-100 transition duration-300"
            style={{ width: "280px" }} // Adjust card width
          >
            <img
              src={`http://localhost:5555/${book.image}`}
              className="h-[300px] w-[210px] object-cover rounded-md ml-8"
              style={{ height: "300px" }}
              //   alt={book.title}
              // className="w-64 h-80 object-cover mb-4 rounded-lg" // Increase image size
            />
            <h3 className="text-lg font-semibold text-blue-900 mb-3 ">
              {truncateTitle(book.title, 20)}
            </h3>
            {/* <p className="text-gray-600 text-center mb-4">{book.description}</p> */}
            <p className="text-gray-600 text-center mb-4">
              {truncateDescription(book.description, 100)}
            </p>
            <div className="flex justify-between w-full px-2 mt-3">
              <button
                onClick={() => handleDetails(book._id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 pr-2"
              >
                More Details
              </button>
              <button
                onClick={() =>
                  handleAddToCart(
                    book._id,
                    book.title,
                    book.image,
                    book.quantity,
                    book.price
                  )
                }
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 mu"
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
