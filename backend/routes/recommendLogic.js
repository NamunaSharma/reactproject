// // // recommendationLogic.js

// // // Import necessary models
// // import { Book } from "../models/bookModel.js";
// // import { User } from "../models/user.cjs";
// // import Review from "../models/review.js";

// // // Function to generate content-based recommendations based on book attributes
// // export const generateContentBasedRecommendations = async (book) => {
// //   try {
// //     // Example content-based recommendation logic:
// //     // Find other books with the same genre as the input book
// //     const similarBooks = await Book.find({
// //       genre: book.genre,
// //       _id: { $ne: book._id },
// //     }).limit(5); // Limit to 5 recommendations
// //     return similarBooks;
// //   } catch (error) {
// //     console.error("Error generating content-based recommendations:", error);
// //     return [];
// //   }
// // };

// // // Function to generate collaborative filtering recommendations based on user interactions
// // export const generateCollaborativeFilteringRecommendations = async (book) => {
// //   try {
// //     // Example collaborative filtering recommendation logic:
// //     // Find users who have reviewed the input book
// //     const bookReviews = await Review.find({ book: book._id });
// //     const userIds = bookReviews.map((review) => review.user);

// //     // Find other books reviewed by these users
// //     const recommendedBooks = await Review.aggregate([
// //       { $match: { user: { $in: userIds } } }, // Filter reviews by users who reviewed the input book
// //       { $sample: { size: 5 } }, // Sample 5 random reviews
// //       {
// //         $lookup: {
// //           from: "books",
// //           localField: "book",
// //           foreignField: "_id",
// //           as: "bookInfo",
// //         },
// //       }, // Lookup book details
// //       { $unwind: "$bookInfo" }, // Unwind the bookInfo array
// //       { $group: { _id: "$bookInfo._id", book: { $first: "$bookInfo" } } }, // Group by book ID and keep the first book document
// //       { $replaceRoot: { newRoot: "$book" } }, // Replace the root with the book document
// //     ]);

// //     return recommendedBooks;
// //   } catch (error) {
// //     console.error(
// //       "Error generating collaborative filtering recommendations:",
// //       error
// //     );
// //     return [];
// //   }
// // };

// import express from "express";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";
// import natural from "natural";
// import { Book } from "../models/bookModel";
// const router = express.Router;

// const app = express();
// app.use(bodyParser.json());

// // mongoose.connect('mongodb://localhost:27017/bookstore', { useNewUrlParser: true, useUnifiedTopology: true });
// // Adjust the import path accordingly

// const cosineSimilarity = (vecA, vecB) => {
//   const dotProduct = vecA.reduce((sum, a, idx) => sum + a * vecB[idx], 0);
//   const normA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
//   const normB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
//   return dotProduct / (normA * normB);
// };

// const getSimilarBooks = async (bookId) => {
//   const books = await Book.find({});
//   const tfidf = new natural.TfIdf();

//   books.forEach((book) => {
//     tfidf.addDocument(book.description, book._id.toString());
//   });

//   const targetBook = await Book.findById(bookId);
//   const targetVector =
//     tfidf.documents[books.findIndex((book) => book._id.equals(bookId))];

//   const similarities = books.map((book, idx) => {
//     const vector = tfidf.documents[idx];
//     return {
//       book,
//       similarity: cosineSimilarity(targetVector, vector),
//     };
//   });

//   similarities.sort((a, b) => b.similarity - a.similarity);
//   return similarities.slice(1, 6).map((sim) => sim.book); // Return top 5 similar books
// };

// app.get("/recommend/:bookId", async (req, res) => {
//   const bookId = req.params.bookId;
//   try {
//     const similarBooks = await getSimilarBooks(bookId);
//     res.json(similarBooks);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });
// export default router;
