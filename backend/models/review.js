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
// reviewSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: "user",
//     select: "name photo",
//   });
//   next();
// });

// reviewSchema.statics.calcAverageRatings = async function (BookId) {
//   const stats = await this.aggregate([
//     {
//       $match: { book: BookId },
//     },
//     {
//       $group: {
//         _id: "$book",
//         numOfRating: { $sum: 1 },
//         avgRating: { $avg: "$rating" },
//       },
//     },
//   ]);

//   if (stats.length > 0) {
//     await Book.findByIdAndUpdate(BookId, {
//       totalRating: stats[0].numOfRating,
//       averageRating: stats[0].avgRating,
//     });
//   } else {
//     console.error("No statistics found for book:", BookId);
//   }
// };

// reviewSchema.post("save", function () {
//   this.constructor.calcAverageRatings(this.book);
// });