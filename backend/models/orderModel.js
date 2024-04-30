import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    cartItems: [
      {
        id: {
          type: mongoose.Types.ObjectId,
          ref: "Book",
        },
        name: String,
        price: Number,
        quantity: Number,
      },
    ],
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    payment: {
      type: String,
      // enum: ["COD", "ONLINE"],
      // default: "COD",
    },
    totalPrice: {
      type: Number, // Add totalPrice field to store the total price of the order
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
