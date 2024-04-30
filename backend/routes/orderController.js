import express, { request, response } from "express";
// // import Order from "../models/orderModel.js"; // Assuming your order model file is named order.js
// // // import { Book } from "../models/bookModel.js"; // Assuming you have defined your books routes in booksRoute.js
// // // import User from "../models/userModel.js";
// // // import { route } from "./users.cjs";
// // const router = express.Router();
// // // import router from "./users.cjs";

// // router.get("/getAllOrders", async (request, response) => {
// //   try {
// //     const orders = await Order.find();
// //     res.status(200).send(orders);
// //   } catch (error) {
// //     res.status(500).send({ message: "Internal Server Error" });
// //   }
// // });

// // // Get all orders
// // router.get("/getAllOrders/:id", async (request, response) => {
// //   try {
// //     const { id } = request.params;

// //     // Find orders associated with the provided user ID
// //     const orders = await Order.find({ user: id });

// //     if (orders.length === 0) {
// //       return response.status(404).json({
// //         success: false,
// //         message: "No orders found for the provided user ID",
// //       });
// //     }

// //     response.status(200).json({
// //       success: true,
// //       message: "Orders found",
// //       data: orders,
// //     });
// //   } catch (err) {
// //     response.status(500).json({
// //       success: false,
// //       message: "Internal server error",
// //       error: err.message,
// //     });
// //   }
// // });

// // // Create a new order

// // export default router;
// // import express from "express";
// // import Order from "../models/orderModel.js";
// // const router = express.Router();
// // import user from "../models/user.cjs";
// // import { Book } from "../models/bookModel.js";

// // Route to fetch orders of a specific user
// // router.get("/users/:userId", async (req, res) => {
// //   try {
// //     const userId = req.params.userId;
// //     const orders = await Order.find({ user: userId }).populate("Book");
// //     res.json({ success: true, data: orders });
// //   } catch (error) {
// //     console.error("Error fetching user orders:", error);
// //     res.status(500).json({ success: false, error: "Server error" });
// //   }
// // });

// import Review from "../models/review.js";
// import { Book } from "../models/bookModel.js";
// import router from "./booksRoute.js";
import Order from "../models/orderModel.js";
// import { response } from "express";

// router.post("/order",async(request,response)=>{

// })
// // export const getAllReviews
// router.get("/getAllOrders/:id", async (request, response) => {
//   try {
//     const { id } = request.params;

//     const orders = await Order.find({ user: id });

//     if (orders.length === 0) {
//       return response.status(404).json({
//         success: false,
//         message: "No order is found based on that provided id",
//       });
//     }

//     response.status(200).json({
//       success: true,
//       message: "Orders found",
//       data: orders,
//     });
//   } catch (err) {
//     response.status(500).json({
//       success: false,
//       message: "Internal server error",
//       error: err.message,
//     });
//   }
// });
// export default router;
// import router from "./booksRoute.js";
const router = express.Router();
// router.get("/",)
// router.get("/", async (req, res) => {
//   try {
//     const orders = await Order.find();
//     res.json(orders);

//     const { userId } = req.params;
//     // Find all orders with the provided user ID
//     const orders = await Order.find({ user: userId });
//     res.json(orders);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// });
router.get("/", async (req, res) => {
  try {
    // Find all orders and populate the 'user' field to get user details
    const orders = await Order.find().populate("user", "firstName lastName");

    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    // Find all orders with the provided user ID
    const orders = await Order.find({ user: userId });
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
export default router;
