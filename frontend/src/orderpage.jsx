// // import React, { useEffect, useState } from "react";
// // // import { toast, ToastContainer } from "react-toastify";
// // import { ToastContainer } from "react-toastify";
// // import { toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import axios from "axios";

// // const OrdersPage = () => {
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [showPopup, setShowPopup] = useState(false);

// //   useEffect(() => {
// //     const fetchOrders = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:5555/api/orders", {
// //           params: { populate: ["user", "cartItems.book"] },
// //         });
// //         setOrders(response.data);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error("Error fetching orders:", error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchOrders();
// //   }, []);

// //   const getRandomColor = () => {
// //     // Generating random color code in hex format
// //     return "#" + Math.floor(Math.random() * 16777215).toString(16);
// //   };

// //   const handleOrderReady = (orderId) => {
// //     // Handle marking the order as ready for delivery
// //     // You can send a request to your backend to update the order status
// //     console.log("Order ready:", orderId);
// //     console.log("Order ready:", orderId);
// //     toast.success("Order is ready for delivery!");
// //   };

// //   return (
// //     <div className="container mx-auto">
// //       <h1 className="text-3xl font-bold mb-6">All Orders</h1>
// //       {loading ? (
// //         <p>Loading...</p>
// //       ) : (
// //         <div className="overflow-x-auto">
// //           <table className="w-full table-auto border-collapse border border-gray-600">
// //             <thead>
// //               <tr className="bg-gray-200">
// //                 <th className="px-6 py-3">Order Date</th>
// //                 <th className="px-6 py-3">User</th>
// //                 <th className="px-6 py-3">Book Name</th>
// //                 <th className="px-6 py-3">Quantity</th>
// //                 <th className="px-6 py-3">Total Price</th>
// //                 <th className="px-6 py-3">Payment</th>
// //                 <th className="px-6 py-3">Action</th>{" "}
// //                 {/* New column for the button */}
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {orders.map((order) => (
// //                 <tr key={order._id}>
// //                   <td className="border px-6 py-4">
// //                     {new Date(order.createdAt).toLocaleString()}
// //                   </td>
// //                   <td className="border px-6 py-4">
// //                     {order.user &&
// //                       `${order.user.firstName} ${order.user.lastName}`}
// //                   </td>
// //                   {order.cartItems.map((item) => (
// //                     <React.Fragment key={item._id}>
// //                       <td
// //                         className="border px-6 py-4"
// //                         style={{ backgroundColor: getRandomColor() }}
// //                       >
// //                         {item.name}
// //                       </td>
// //                       <td className="border px-6 py-4">{item.quantity}</td>
// //                     </React.Fragment>
// //                   ))}
// //                   <td className="border px-6 py-4">{order.totalPrice}</td>
// //                   <td className="border px-6 py-4">{order.payment}</td>
// //                   <td className="border px-6 py-4">
// //                     <button
// //                       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
// //                       onClick={() => handleOrderReady(order._id)}
// //                     >
// //                       Ready for Delivery
// //                     </button>
// //                     {showPopup && (
// //                       <div className="bg-gray-900 text-white py-2 px-4 rounded-lg mb-4">
// //                         Item ready for delivery
// //                       </div>
// //                     )}
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default OrdersPage;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// // frontend\src\components\Navbar.jsx
// import Navbar from "./components/Navbar";

// const OrdersPage = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedOrderId, setSelectedOrderId] = useState(null);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get("http://localhost:5555/api/orders", {
//           params: { populate: ["user", "cartItems.book"] },
//         });
//         setOrders(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   const getRandomColor = () => {
//     return "#" + Math.floor(Math.random() * 16777215).toString(16);
//   };

//   const handleOrderReady = (orderId) => {
//     setSelectedOrderId(orderId);
//     setShowPopup(true);
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <div className="container mx-auto">
//       <Navbar />
//       <h1 className="text-3xl font-bold mb-6">All Orders</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="w-full table-auto border-collapse border border-gray-600">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="px-6 py-3">Order Date</th>
//                 <th className="px-6 py-3">User</th>
//                 <th className="px-6 py-3">Book Name</th>
//                 <th className="px-6 py-3">Quantity</th>
//                 <th className="px-6 py-3">Total Price</th>
//                 {/* <th className="px-6 py-3">Payment</th> */}
//                 <th className="px-6 py-3">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order) => (
//                 <tr key={order._id}>
//                   <td className="border px-6 py-4">
//                     {new Date(order.createdAt).toLocaleString()}
//                   </td>
//                   <td className="border px-6 py-4">
//                     {order.user &&
//                       `${order.user.firstName} ${order.user.lastName}`}
//                   </td>
//                   {order.cartItems.map((item) => (
//                     <React.Fragment key={item._id}>
//                       <td
//                         className="border px-6 py-4"
//                         style={{ backgroundColor: getRandomColor() }}
//                       >
//                         {item.name}
//                       </td>
//                       <td className="border px-6 py-4">{item.quantity}</td>
//                     </React.Fragment>
//                   ))}
//                   <td className="border px-6 py-4">{order.totalPrice}</td>
//                   {/* <td className="border px-6 py-4">{order.payment}</td> */}
//                   <td className="border px-6 py-4">
//                     <button
//                       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                       onClick={() => handleOrderReady(order._id)}
//                     >
//                       Ready for Delivery
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-8 rounded-lg">
//             <h2 className="text-2xl font-bold mb-4">Order Ready</h2>
//             <p>Order is ready for delivery!</p>
//             <button onClick={handleClosePopup}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrdersPage;
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5555/api/orders", {
          params: { populate: ["user", "cartItems.book"] },
        });
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const handleOrderReady = (orderId) => {
    setSelectedOrderId(orderId);
    setShowPopup(true);
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
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td className="border px-6 py-4">
                      {new Date(order.createdAt).toLocaleString()}
                    </td>
                    <td className="border px-6 py-4">
                      {order.user &&
                        `${order.user.firstName} ${order.user.lastName}`}
                    </td>
                    {order.cartItems.map((item) => (
                      <React.Fragment key={item._id}>
                        <td
                          className="border px-6 py-4"
                          // style={{ backgroundColor: getRandomColor() }}
                        >
                          {item.name}
                        </td>
                        <td className="border px-6 py-4">{item.quantity}</td>
                      </React.Fragment>
                    ))}
                    <td className="border px-6 py-4">{order.totalPrice}</td>
                    <td className="border px-6 py-4">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleOrderReady(order._id)}
                      >
                        Ready for Delivery
                      </button>
                    </td>
                  </tr>
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
