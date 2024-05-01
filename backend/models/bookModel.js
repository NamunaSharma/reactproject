import mongoose from "mongoose";
const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishYear: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.ObjectId,
    ref: "Category",
    required: true,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
    required: true,
  },
  reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
  // averageRating: {
  //   type: Number,
  //   default: 0,
  // },
  // totalRating: {
  //   type: Number,
  //   default: 0,
  // },
});

export const Book = mongoose.model("Book", bookSchema);
