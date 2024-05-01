import express, { request, response } from "express";
import Order from "../models/orderModel.js";

const router = express.Router();
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
