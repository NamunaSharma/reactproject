import React, { useEffect, useState } from "react";
import UserNavbar from "../../../pages/usernavbar";
import emptyCartImage from "../../Asset/emptycart.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    const storedUserId = localStorage.getItem("userId");

    // If stored cart items exist, update their quantities to 1
    if (storedCartItems) {
      const updatedCartItems = storedCartItems.map((item) => ({
        ...item,
        quantity: 1, // Set the quantity to 1 for each item
      }));
      setCartItems(updatedCartItems);
    } else {
      setCartItems([]); // Set cart items to an empty array if no items are stored
    }
    setUserId(storedUserId);
  }, []);

  const removeFromCart = (itemId) => {
    // Filter out the item with the given ID and update the cart
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    // Update local storage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    // Find the item in the cart
    const itemToUpdate = cartItems.find((item) => item.id === itemId);

    // Ensure new quantity is not less than 1 and not more than the available stock
    if (itemToUpdate) {
      newQuantity = Math.max(
        1,
        Math.min(itemToUpdate.stockQuantity, newQuantity)
      );

      const updatedCartItems = cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
      setCartItems(updatedCartItems);
      // Update local storage
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const checkout = async () => {
    try {
      const totalPrice = calculateTotalPrice();
      const res = await fetch(`http://localhost:5555/checkout/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
          items: cartItems,
          userId: userId,
          totalPrice: totalPrice,
        }),
      });
      const data = await res.json();
      localStorage.removeItem("cartItems");

      // Reset the cart items state to an empty array
      setCartItems([]);

      // const orderId = data.orderId;

      // Save the cart items to the order database
      // await saveCartItemsToDatabase(orderId, cartItems);
      console.log(data.url); // Log the URL received from the server
      window.location = data.url;
    } catch (error) {
      console.log(error);
    }
  };
  const saveCartItemsToDatabase = async (orderId, cartItems) => {
    try {
      const res = await fetch(`http://localhost:5555/orders/${orderId}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cartItems,
        }),
      });
      const data = await res.json();
      console.log("Cart items saved to database:", data);
    } catch (error) {
      console.log("Error saving cart items to database:", error);
    }
  };

  return (
    <div className="container bg-white-200 min-h-screen">
      <UserNavbar />
      {/* <h2 className="text-2xl font-bold mb-4">Cart</h2> */}
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-4 flex items-center mb-4"
            >
              <img
                src={`../../src/images/${item.image}`}
                className="w-16 h-20 object-cover mr-4 rounded-lg"
                alt={item.name}
              />
              <div>
                <h3 className="text-lg font-semibold text-blue-900">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600">Price: {item.price}</p>
                <p className="text-sm text-gray-600">
                  Quantity:
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                  {item.stockQuantity &&
                    item.quantity >= item.stockQuantity && (
                      <span style={{ color: "red" }}> (Out of stock)</span>
                    )}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-auto text-red-600 hover:text-red-800 focus:outline-none"
              >
                &#10006; {/* Unicode for cross symbol */}
              </button>
            </div>
          ))}
          <div className="text-right">
            <h3 className="text-lg font-semibold">
              Total Price: {calculateTotalPrice()}
            </h3>
          </div>
          <div className="my-6">
            <button
              onClick={checkout}
              className="bg-green-400 text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-green-500 focus:outline-none focus:bg-green-500"
            >
              Checkout
            </button>
          </div>
        </>
      ) : (
        // <p className="text-center">No items in the cart</p>
        <div className="flex flex-col items-center justify-center mt-8">
          <p className="text-3xl font-bold mb-4">Your Cart is Empty!</p>
          <p className="text-lg mb-4">
            Looks like you haven't added anything to your cart yet. You can find
            interesting books if you look around.
          </p>
          <img src={emptyCartImage} alt="Empty Cart" className="w-96 h-64" />
        </div>
      )}
      {/* <div className="my-6">
        <button
          onClick={checkout}
          className="bg-green-400 text-black px-8 py-9 rounded-md text-2xl font-semibold"
        >
          Checkout
        </button>
      </div> */}
    </div>
  );
};

export default Cart;
