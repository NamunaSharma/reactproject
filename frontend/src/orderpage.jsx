import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [ordersReadyForDelivery, setOrdersReadyForDelivery] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5555/api/orders", {
          params: { populate: ["user", "cartItems.book"] },
        });
        // Sort orders by createdAt timestamp in descending order
        const sortedOrders = response.data.sort(
          (a, b) => b.createdAt - a.createdAt
        );
        setOrders(sortedOrders);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleOrderReady = (orderId) => {
    setSelectedOrderId(orderId);
    setShowPopup(true);
    // Add the order ID to the list of orders ready for delivery
    setOrdersReadyForDelivery((prevOrders) => [...prevOrders, orderId]);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex min-h-screen">
      <Navbar />
      <div className="flex-grow w-full pl-20 m-9">
        <h1 className="text-3xl font-bold mb-6">All Orders</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-600">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-6 py-3">Order Date</th>
                  <th className="px-6 py-3">User</th>
                  <th className="px-6 py-3">Book Name</th>
                  <th className="px-6 py-3">Quantity</th>
                  <th className="px-6 py-3">Total Price</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <React.Fragment key={order._id}>
                    {/* Render complete order details with date and user information */}
                    <tr>
                      <td className="border px-6 py-4">
                        {new Date(order.createdAt).toLocaleString()}
                      </td>
                      <td className="border px-6 py-4">
                        {order.user &&
                          `${order.user.firstName} ${order.user.lastName}`}
                      </td>
                      <td className="border px-6 py-4">
                        {order.cartItems[0].name}
                      </td>
                      <td className="border px-6 py-4">
                        {order.cartItems[0].quantity}
                      </td>
                      <td className="border px-6 py-4">{order.totalPrice}</td>
                      <td className="border px-6 py-4">
                        {/* Disable the button if the order is already marked as ready for delivery */}
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleOrderReady(order._id)}
                          disabled={ordersReadyForDelivery.includes(order._id)}
                        >
                          {ordersReadyForDelivery.includes(order._id)
                            ? "Ready for Delivery"
                            : "Mark as Ready"}
                        </button>
                      </td>
                    </tr>
                    {/* Check if the current order has the same createdAt timestamp as the previous order */}
                    {index > 0 &&
                      orders[index - 1].createdAt === order.createdAt && (
                        // If the timestamps are the same, render only book details duplicating date and user information
                        <tr>
                          <td className="border px-6 py-4">
                            {new Date(order.createdAt).toLocaleString()}
                          </td>
                          <td className="border px-6 py-4">
                            {order.user &&
                              `${order.user.firstName} ${order.user.lastName}`}
                          </td>
                          <td className="border px-6 py-4">
                            {order.cartItems[0].name}
                          </td>
                          <td className="border px-6 py-4">
                            {order.cartItems[0].quantity}
                          </td>
                          <td className="border px-6 py-4">
                            {order.totalPrice}
                          </td>
                          <td className="border px-6 py-4">
                            {/* Disable the button if the order is already marked as ready for delivery */}
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                              onClick={() => handleOrderReady(order._id)}
                              disabled={ordersReadyForDelivery.includes(
                                order._id
                              )}
                            >
                              {ordersReadyForDelivery.includes(order._id)
                                ? "Ready for Delivery"
                                : "Mark as Ready"}
                            </button>
                          </td>
                        </tr>
                      )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Order Ready</h2>
            <p>Order is ready for delivery!</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
