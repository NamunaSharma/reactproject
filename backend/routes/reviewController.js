// import Review from "../models/ReviewSchema.js";
import Review from "../models/review.js";
// import { Book } from "../models/bookModel.js";
import router from "./booksRoute.js";

// export const getAllReviews
router.get("/getAllReviews/:id", async (request, response) => {
  try {
    const { id } = request.params;

    // Find reviews associated with the provided book ID
    const reviews = await Review.find({ book: id }).populate(
      "user",
      "firstName lastName"
    );

    if (reviews.length === 0) {
      return response.status(404).json({
        success: false,
        message: "No reviews found for the provided book ID",
      });
    }

    response.status(200).json({
      success: true,
      message: "Reviews found",
      data: reviews,
    });
  } catch (err) {
    response.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
});

router.post("/createReview", async (request, response) => {
  if (!request.body.book) request.body.book = request.params.BookId;
  if (!request.body.user) request.body.user = request.userId;

  const newReview = new Review(request.body);

  try {
    const savedReview = await newReview.save();
    await Book.findByIdAndUpdate(request.body.book, {
      $push: { reviews: savedReview._id },
    });
    response
      .status(200)
      .json({ success: true, message: "Review submitted.", data: savedReview });
  } catch (err) {
    response
      .status(500)
      .json({ success: false, message: "Review submitting failed." });
  }
});
router.get("/", async (req, res) => {
  try {
    // Find all reviews in the database
    const reviews = await Review.find();

    // Send the reviews as JSON response
    res.json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Error fetching reviews" }); // Send an error response
  }
});
// router.get("/getReview", async (req, res) => {
//   try {

//     const reviews = await Review.find(); // Fetch all reviews from the database
//     res.json(reviews); // Send the reviews as JSON response
//   } catch (error) {
//     console.error("Error fetching reviews:", error);
//     res.status(500).json({ error: "Error fetching reviews" }); // Send an error response
//   }
// });
export default router;
