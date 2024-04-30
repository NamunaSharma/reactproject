// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";

// // // function AdminPage() {
// // //   const [userCount, setUserCount] = useState(0);
// // //   const [CategoryCount, setCategoryCount] = useState(0);
// // //   const [bookCount, setBookCount] = useState(0);

// // //   useEffect(() => {
// // //     fetchBookCount();
// // //   }, []);

// // //   const fetchBookCount = async () => {
// // //     try {
// // //       const response = await axios.get("http://localhost:5555/books"); // Replace '/books' with the actual route
// // //       setBookCount(response.data.count);
// // //     } catch (error) {
// // //       console.error("Error fetching book count:", error);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchUserData();
// // //   }, []);
// // //   useEffect(() => {
// // //     fetchCategoryData();
// // //   }, []);

// // //   const fetchUserData = async () => {
// // //     try {
// // //       const response = await axios.get("http://localhost:5555/api/users");
// // //       const { userCount } = response.data; // Extracting userCount from the response data
// // //       setUserCount(userCount);
// // //     } catch (error) {
// // //       console.error("Error fetching user count:", error);
// // //     }
// // //   };
// // //   const fetchCategoryData = async () => {
// // //     try {
// // //       const response = await axios.get(
// // //         "http://localhost:5555/api/category/get-category"
// // //       );
// // //       const { CategoryCount } = response.data; // Extracting userCount from the response data
// // //       setCategoryCount(CategoryCount);
// // //     } catch (error) {
// // //       console.error("Error fetching user count:", error);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>User Count: {userCount}</h2>
// // //       <h2>Category Count: {CategoryCount}</h2>
// // //       <h2>Book Count: {bookCount}</h2>
// // //     </div>
// // //   );
// // // }

// // // export default AdminPage;
// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";

// // // function AdminPage() {
// // //   const [userCount, setUserCount] = useState(0);
// // //   const [categoryCount, setCategoryCount] = useState(0);
// // //   const [bookCount, setBookCount] = useState(0);

// // //   useEffect(() => {
// // //     fetchUserData();
// // //     fetchCategoryData();
// // //     fetchBookCount();
// // //   }, []);

// // //   const fetchUserData = async () => {
// // //     try {
// // //       const response = await axios.get("http://localhost:5555/api/users");
// // //       const { userCount } = response.data; // Extracting userCount from the response data
// // //       setUserCount(userCount); // Assuming the user count is retrieved as an array
// // //     } catch (error) {
// // //       console.error("Error fetching user count:", error);
// // //     }
// // //   };

// // //   const fetchCategoryData = async () => {
// // //     try {
// // //       const response = await axios.get(
// // //         "http://localhost:5555/api/category/get-category"
// // //       );
// // //       setCategoryCount(response.data.CategoryCount);
// // //     } catch (error) {
// // //       console.error("Error fetching category count:", error);
// // //     }
// // //   };

// // //   const fetchBookCount = async () => {
// // //     try {
// // //       const response = await axios.get("http://localhost:5555/books");
// // //       setBookCount(response.data.count);
// // //     } catch (error) {
// // //       console.error("Error fetching book count:", error);
// // //     }
// // //   };

// // //   return (
// // //     <div className="container mx-auto px-4 py-8">
// // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //         <div className="bg-white p-4 rounded-lg shadow-md">
// // //           <h2 className="text-xl font-semibold mb-4">User Count</h2>
// // //           <p className="text-3xl font-bold">{userCount}</p>
// // //         </div>
// // //         <div className="bg-white p-4 rounded-lg shadow-md">
// // //           <h2 className="text-xl font-semibold mb-4">Category Count</h2>
// // //           <p className="text-3xl font-bold">{categoryCount}</p>
// // //         </div>
// // //         <div className="bg-white p-4 rounded-lg shadow-md">
// // //           <h2 className="text-xl font-semibold mb-4">Book Count</h2>
// // //           <p className="text-3xl font-bold">{bookCount}</p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default AdminPage;
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import Navbar from "./components/Navbar";

// // function AdminPage() {
// //   const [userCount, setUserCount] = useState(0);
// //   const [categoryCount, setCategoryCount] = useState(0);
// //   const [bookCount, setBookCount] = useState(0);

// //   useEffect(() => {
// //     fetchUserData();
// //     fetchCategoryData();
// //     fetchBookCount();
// //   }, []);

// //   const fetchUserData = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:5555/api/users");
// //       const { userCount } = response.data; // Extracting userCount from the response data
// //       setUserCount(userCount); // Assuming the user count is retrieved as an array
// //     } catch (error) {
// //       console.error("Error fetching user count:", error);
// //     }
// //   };

// //   const fetchCategoryData = async () => {
// //     try {
// //       const response = await axios.get(
// //         "http://localhost:5555/api/category/get-category"
// //       );
// //       setCategoryCount(response.data.CategoryCount);
// //     } catch (error) {
// //       console.error("Error fetching category count:", error);
// //     }
// //   };

// //   const fetchBookCount = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:5555/books");
// //       setBookCount(response.data.count);
// //     } catch (error) {
// //       console.error("Error fetching book count:", error);
// //     }
// //   };

// //   return (
// //     <div className="flex min-h-screen">
// //       <Navbar />
// //       <h1 className="text-3xl font-bold mb-4">Welcome to Admin Dashboard</h1>
// //       <h2 className="text-xl font-semibold mb-4">OVERVIEW</h2>
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //         <div className="bg-blue-100 p-4 rounded-lg shadow-md">
// //           <h2 className="text-xl font-semibold mb-4">User Count</h2>
// //           <p className="text-3xl font-bold">{userCount}</p>
// //         </div>
// //         <div className="bg-green-100 p-4 rounded-lg shadow-md">
// //           <h2 className="text-xl font-semibold mb-4">Category Count</h2>
// //           <p className="text-3xl font-bold">{categoryCount}</p>
// //         </div>
// //         <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
// //           <h2 className="text-xl font-semibold mb-4">Book Count</h2>
// //           <p className="text-3xl font-bold">{bookCount}</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AdminPage;
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // function AdminPage() {
// //   const [userCount, setUserCount] = useState(0);
// //   const [CategoryCount, setCategoryCount] = useState(0);
// //   const [bookCount, setBookCount] = useState(0);

// //   useEffect(() => {
// //     fetchBookCount();
// //   }, []);

// //   const fetchBookCount = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:5555/books"); // Replace '/books' with the actual route
// //       setBookCount(response.data.count);
// //     } catch (error) {
// //       console.error("Error fetching book count:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchUserData();
// //   }, []);
// //   useEffect(() => {
// //     fetchCategoryData();
// //   }, []);

// //   const fetchUserData = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:5555/api/users");
// //       const { userCount } = response.data; // Extracting userCount from the response data
// //       setUserCount(userCount);
// //     } catch (error) {
// //       console.error("Error fetching user count:", error);
// //     }
// //   };
// //   const fetchCategoryData = async () => {
// //     try {
// //       const response = await axios.get(
// //         "http://localhost:5555/api/category/get-category"
// //       );
// //       const { CategoryCount } = response.data; // Extracting userCount from the response data
// //       setCategoryCount(CategoryCount);
// //     } catch (error) {
// //       console.error("Error fetching user count:", error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>User Count: {userCount}</h2>
// //       <h2>Category Count: {CategoryCount}</h2>
// //       <h2>Book Count: {bookCount}</h2>
// //     </div>
// //   );
// // }

// // export default AdminPage;
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // function AdminPage() {
// //   const [userCount, setUserCount] = useState(0);
// //   const [categoryCount, setCategoryCount] = useState(0);
// //   const [bookCount, setBookCount] = useState(0);

// //   useEffect(() => {
// //     fetchUserData();
// //     fetchCategoryData();
// //     fetchBookCount();
// //   }, []);

// //   const fetchUserData = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:5555/api/users");
// //       const { userCount } = response.data; // Extracting userCount from the response data
// //       setUserCount(userCount); // Assuming the user count is retrieved as an array
// //     } catch (error) {
// //       console.error("Error fetching user count:", error);
// //     }
// //   };

// //   const fetchCategoryData = async () => {
// //     try {
// //       const response = await axios.get(
// //         "http://localhost:5555/api/category/get-category"
// //       );
// //       setCategoryCount(response.data.CategoryCount);
// //     } catch (error) {
// //       console.error("Error fetching category count:", error);
// //     }
// //   };

// //   const fetchBookCount = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:5555/books");
// //       setBookCount(response.data.count);
// //     } catch (error) {
// //       console.error("Error fetching book count:", error);
// //     }
// //   };

// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //         <div className="bg-white p-4 rounded-lg shadow-md">
// //           <h2 className="text-xl font-semibold mb-4">User Count</h2>
// //           <p className="text-3xl font-bold">{userCount}</p>
// //         </div>
// //         <div className="bg-white p-4 rounded-lg shadow-md">
// //           <h2 className="text-xl font-semibold mb-4">Category Count</h2>
// //           <p className="text-3xl font-bold">{categoryCount}</p>
// //         </div>
// //         <div className="bg-white p-4 rounded-lg shadow-md">
// //           <h2 className="text-xl font-semibold mb-4">Book Count</h2>
// //           <p className="text-3xl font-bold">{bookCount}</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AdminPage;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Navbar from "./components/Navbar";

// function AdminPage() {
//   const [userCount, setUserCount] = useState(0);
//   const [categoryCount, setCategoryCount] = useState(0);
//   const [bookCount, setBookCount] = useState(0);

//   useEffect(() => {
//     fetchUserData();
//     fetchCategoryData();
//     fetchBookCount();
//   }, []);

//   const fetchUserData = async () => {
//     try {
//       const response = await axios.get("http://localhost:5555/api/users");
//       const { userCount } = response.data; // Extracting userCount from the response data
//       setUserCount(userCount); // Assuming the user count is retrieved as an array
//     } catch (error) {
//       console.error("Error fetching user count:", error);
//     }
//   };

//   const fetchCategoryData = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5555/api/category/get-category"
//       );
//       setCategoryCount(response.data.CategoryCount);
//     } catch (error) {
//       console.error("Error fetching category count:", error);
//     }
//   };

//   const fetchBookCount = async () => {
//     try {
//       const response = await axios.get("http://localhost:5555/books");
//       setBookCount(response.data.count);
//     } catch (error) {
//       console.error("Error fetching book count:", error);
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       <Navbar />
//       <h1 className="text-3xl font-bold mb-4">Welcome to Admin Dashboard</h1>
//       <h2 className="text-xl font-semibold mb-4">OVERVIEW</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="bg-blue-100 p-4 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold mb-4">User Count</h2>
//           <p className="text-3xl font-bold">{userCount}</p>
//         </div>
//         <div className="bg-green-100 p-4 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold mb-4">Category Count</h2>
//           <p className="text-3xl font-bold">{categoryCount}</p>
//         </div>
//         <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold mb-4">Book Count</h2>
//           <p className="text-3xl font-bold">{bookCount}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminPage;
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const [userCount, setUserCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);
  const [bookCount, setBookCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
    fetchCategoryData();
    fetchBookCount();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:5555/api/users");
      const { userCount } = response.data; // Extracting userCount from the response data
      setUserCount(userCount); // Assuming the user count is retrieved as an array
    } catch (error) {
      console.error("Error fetching user count:", error);
    }
  };

  const fetchCategoryData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5555/api/category/get-category"
      );
      setCategoryCount(response.data.CategoryCount);
    } catch (error) {
      console.error("Error fetching category count:", error);
    }
  };

  const fetchBookCount = async () => {
    try {
      const response = await axios.get("http://localhost:5555/books");
      setBookCount(response.data.count);
    } catch (error) {
      console.error("Error fetching book count:", error);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen">
      <Navbar />
      <div className="w-full ml-64">
        {" "}
        {/* Adjust the margin to accommodate the sidebar width */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-end">
            <button
              className="bg-black text-white px-4 py-2 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          <h1 className="text-3xl font-bold mb-4">
            Welcome to Admin Dashboard
          </h1>
          <h2 className="text-xl font-semibold mb-4">OVERVIEW</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-100 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">User Count</h2>
              <p className="text-3xl font-bold">{userCount}</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Category Count</h2>
              <p className="text-3xl font-bold">{categoryCount}</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Book Count</h2>
              <p className="text-3xl font-bold">{bookCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
