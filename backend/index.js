import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
// import router from "./routes/booksRoute.js"
import cors from "cors";
import dotenv from "dotenv";
import categoryRoutes from "./routes/categoryRoutes.js";
import reviewController from "./routes/reviewController.js";
import orderController from "./routes/orderController.js";
import Order from "./models/orderModel.js";
// import striperoute from "./routes/striperoute.cjs";
// Importing routes using ES module syntax
import userRoutes from "./routes/users.cjs";
import authRoutes from "./routes/auth.cjs";
// const striperoute = require("./routes/striperoute.js");

// Initialize dotenv for environment variables
dotenv.config();

// Create an Express app
const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors({ origin: "http://localhost:5173" }));

// Database connection
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    // Start listening to the server
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Routes
app.use("/api/reviews", reviewController);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/books", booksRoute);

app.use("/api/category", categoryRoutes);
app.use("/api/orders", orderController);
// Middleware for handling errors

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("Welcome");
});
import stripePackage from "stripe";

const stripe = stripePackage(process.env.STRIPE_SECRET_KEY);

app.post("/checkout/:userId", async (req, res) => {
  try {
    // const { userId: loggedInUserId } = req.body;
    const { userId } = req.params;

    const { items, totalPrice } = req.body;

    // Retrieve cart items from the request body
    const cartItems = req.body.items;

    // Create an order object with user ID, book IDs, and cart items
    const order = new Order({
      user: userId,
      books: items.map((item) => item.id), // Use the correct property name
      cartItems: items,
      totalPrice: totalPrice,
    });

    // Save the order to the database
    await order.save();

    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: cartItems.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      }),
      success_url: "http://localhost:5173/accountpage",
      cancel_url: "http://localhost:5173/cancel",
    });

    console.log(session.url); // Log the URL before sending it in response
    res.json({ url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});
// router.get("/orders/:userId", async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const orders = await Order.find({ userId });
//     res.json(orders);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// });
