import express, { request, response } from "express";
import Order from "../models/orderModel.js";
import { Book } from "../models/bookModel.js";

const router = express.Router();

router.get("/bestsellers", async (req, res) => {
  try {
    const bestSellingBooks = await Book.find()
      .sort({ salesCount: -1 })
      .limit(5); // Sort by salesCount in descending order and limit the results
    res.status(200).json(bestSellingBooks);
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

export default router;
