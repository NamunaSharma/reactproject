// import React, { useState, useEffect } from "react";
// import UserNavbar from "../../pages/usernavbar";

// const AccountPage = () => {
//   const [orders, setOrders] = useState([]);
//   const [userName, setUserName] = useState("");
//   const userId = localStorage.getItem("userId"); // Replace 'YOUR_USER_ID' with the actual user ID

//   useEffect(() => {
//     fetchUserName();
//     fetchOrders();
//   }, []);

//   const fetchUserName = async () => {
//     try {
//       const response = await fetch(`http://localhost:5555/api/users/${userId}`);
//       const data = await response.json();
//       setUserName(data.firstName);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const fetchOrders = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:5555/api/orders/${userId}`
//       );
//       const data = await response.json();
//       setOrders(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container mx-auto mt-8">
//       <UserNavbar />
//       <h2 className="text-2xl font-bold mb-4">Orders {userName} </h2>
//       <table className="w-full table-auto">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">Order Date</th>
//             <th className="px-4 py-2">Book Name</th>
//             <th className="px-4 py-2">Quantity</th>
//             <th className="px-4 py-2">Price</th>
//             <th className="px-4 py-2">Total Price</th>
//             <th className="px-4 py-2">Payment Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order._id}>
//               <td className="border px-4 py-2">
//                 {new Date(order.createdAt).toLocaleDateString()}
//               </td>
//               <td className="border px-4 py-2">
//                 {order.cartItems.map((item) => (
//                   <div key={item.id}>{item.name}</div>
//                 ))}
//               </td>
//               <td className="border px-4 py-2">
//                 {order.cartItems.map((item) => (
//                   <div key={item.id}>{item.quantity}</div>
//                 ))}
//               </td>
//               <td className="border px-4 py-2">
//                 {order.cartItems.map((item) => (
//                   <div key={item.id}>${item.price}</div>
//                 ))}
//               </td>
//               <td className="border px-4 py-2">${order.totalPrice}</td>
//               <td className="border px-4 py-2">
//                 {order.success ? "Success" : "Success"}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AccountPage;
import React, { useState, useEffect } from "react";
import UserNavbar from "../../pages/usernavbar";

const AccountPage = () => {
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);
  const [userName, setUserName] = useState("");
  const userId = localStorage.getItem("userId"); // Replace 'YOUR_USER_ID' with the actual user ID

  useEffect(() => {
    fetchUserData();
    fetchOrders();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch(`http://localhost:5555/api/users/${userId}`);
      const data = await response.json();
      setUser(data);
      setUserName(`${data.firstName} ${data.lastName}`);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await fetch(
        `http://localhost:5555/api/orders/${userId}`
      );
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container bg-white-200 min-h-screen">
      <UserNavbar />
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Welcome, {userName}</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Email:</p>
            <p>{user.email}</p>
          </div>
          <div>
            <p className="font-semibold">Phone:</p>
            <p>{user.phone}</p>
          </div>
          <div>
            <p className="font-semibold">Address:</p>
            <p>{user.address}</p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Order Date</th>
            <th className="px-4 py-2">Book Name</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Total Price</th>
            <th className="px-4 py-2">Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td className="border px-4 py-2">
                {new Date(order.createdAt).toLocaleDateString()}
              </td>
              <td className="border px-4 py-2">
                {order.cartItems.map((item) => (
                  <div key={item.id}>{item.name}</div>
                ))}
              </td>
              <td className="border px-4 py-2">
                {order.cartItems.map((item) => (
                  <div key={item.id}>{item.quantity}</div>
                ))}
              </td>
              <td className="border px-4 py-2">
                {order.cartItems.map((item) => (
                  <div key={item.id}>{item.price}</div>
                ))}
              </td>
              <td className="border px-4 py-2">{order.totalPrice}</td>
              <td className="border px-4 py-2">
                {order.success ? "Success" : "Success"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountPage;
