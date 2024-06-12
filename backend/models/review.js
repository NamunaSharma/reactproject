import mongoose from "mongoose";
// import { Book } from "./bookModel.js";
import user from "./user.cjs";

const reviewSchema = new mongoose.Schema(
  {
    book: {
      type: mongoose.Types.ObjectId,
      ref: "Book",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Review", reviewSchema);
