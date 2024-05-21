import express from "express";
import { Book } from "../models/bookModel.js";
// import bookModel from "../models/bookModel.js";
import categoryModel from "../models/categoryModel.js";
import multer from "multer"; // Step 1: Import Multer
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { request } from "http";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// import { productCategoryController } from "../controller/bookController.js";

const router = express.Router();

// Step 2: Set up Multer memory storage
// const storage = multer.memoryStorage();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const imagePath = join(__dirname, "../mongoosedatabase/uploads/");
    cb(null, imagePath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
    // const uniqueSuffix = Date.now();
    // cb(null, uniqueSuffix + file.originalname);
  },
});
// Step 3: Create Multer upload middleware
const upload = multer({ storage: storage });

// Route for Save a new Book (modified to include image upload)
router.post("/", upload.single("image"), async (request, response) => {
  try {
    // const { userId } = request.params;
    const userId = request.body.userId;
    console.log(userId);
    const {
      title,
      author,
      publishYear,
      description,
      category,
      quantity,
      price,
    } = request.body;

    if (
      !title ||
      !author ||
      !publishYear ||
      !description ||
      !category ||
      !quantity ||
      !price ||
      !request.file
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: title, author, publishYear, description,category and image",
      });
    }

    // Generate image URL
    const imageName = `uploads/${request.file.filename}`;

    console.log(imageName);

    const newBook = {
      title,
      author,
      publishYear,
      description,
      category,
      quantity,
      price,
      image: imageName,
      addedby: userId, // Use the generated image URL
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.put("/:id", upload.single("image"), async (request, response) => {
  try {
    const {
      title,
      author,
      publishYear,
      description,
      category,
      quantity,
      price,
    } = request.body;
    const { id } = request.params;

    // Find the existing book by ID
    const existingBook = await Book.findById(id);

    // If no book with the given ID is found, return a 404 error
    if (!existingBook) {
      return response.status(404).json({ message: "Book not found" });
    }

    // Create an object to hold the updated book data
    let updatedBook = {
      title,
      author,
      publishYear,
      description,
      category,
      quantity,
      price,
      image: existingBook.image, // Retain the existing image by default
    };

    // If a new image is uploaded, update the image URL
    if (request.file) {
      // Construct the image URL with the correct path
      const imageURL = `uploads/${request.file.filename}`;
      updatedBook.image = imageURL;
    }

    // Update the book with the new data
    const result = await Book.findByIdAndUpdate(id, updatedBook, { new: true });

    // If no updated book is returned, return a 404 error
    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    // Return a success message along with the updated book data
    return response
      .status(200)
      .json({ message: "Book updated successfully", data: result });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
router.get("/latest", async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 }).limit(5); // Adjust the limit as needed
    res.status(200).json({
      success: true,
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching books",
    });
  }
});
router.get("/book", async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Book from database by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const book = await Book.findById(id);

    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
// router.get("/product-category/:slug", async (request, response) => {
//   try {
//     const category = await categoryModel.findOne({ slug: request.params.slug });
//     const books = await bookModel.find({ category }).populate("category");
//     response.status(200).send({
//       success: true,
//       category,
//       books,
//     });
//   } catch (error) {
//     console.log(error);
//     response.status(400).send({
//       success: false,
//       error,
//       message: "Error While Getting products",
//     });
//   }
// });
router.get("/product-category/:slug", async (request, response) => {
  try {
    const category = await categoryModel.findOne({ slug: request.params.slug });
    if (!category) {
      return response.status(404).send({
        success: false,
        message: "Category not found",
      });
    }

    const books = await Book.find({ category }).populate("category");
    response.status(200).send({
      success: true,
      category,
      books,
    });
  } catch (error) {
    console.log(error); // Log the error for debugging purposes
    response.status(500).send({
      success: false,
      error, // Include the actual error object
      message: "Error while getting products",
    });
  }
});
// Route for Delete a book
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    return response.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
router.get("/:userId", async (request, response) => {
  try {
    const { userId } = request.params;

    // Find cart items belonging to the user
    const cartItems = await CartItem.find({ userId });

    // Map cart items to book IDs
    const bookIds = cartItems.map((cartItem) => cartItem.bookId);

    // Find books based on the retrieved book IDs
    const books = await Book.find({ _id: { $in: bookIds } });

    // Create an order object to save books to the orders schema
    const order = new Orders({
      userId: userId,
      books: books.map((book) => book._id), // Assuming books have an _id field
      // Other fields of the order if needed
    });

    // Save the order to the database
    await order.save();

    // Send a success response with the retrieved books
    response.status(200).send({
      success: true,
      books,
    });
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: error.message });
  }
});
router.get("/user/:userId", async (request, response) => {
  try {
    const { userId } = request.params;

    // Find books posted by the user
    const books = await Book.find({ addedby: userId });

    // Check if any books are found
    if (books.length === 0) {
      return response
        .status(404)
        .json({ message: "No books found for this user" });
    }

    // Return the found books
    return response.status(200).json({ count: books.length, data: books });
  } catch (error) {
    console.error(error.message);
    return response.status(500).json({ message: "Internal server error" });
  }
});

import bodyParser from "body-parser";
import natural from "natural";
//recommendation
const cosineSimilarity = (vecA, vecB) => {
  console.log(`Original Vector A: ${JSON.stringify(vecA)}`);
  console.log(`Original Vector B: ${JSON.stringify(vecB)}`);

  // Extract keys and combine them
  const keys = Array.from(
    new Set([...Object.keys(vecA), ...Object.keys(vecB)])
  );

  // Convert objects to arrays based on the combined keys, ensuring numeric values
  const arrayA = keys
    .map((key) => (vecA[key] !== undefined ? vecA[key] : 0))
    .filter(Number.isFinite);
  const arrayB = keys
    .map((key) => (vecB[key] !== undefined ? vecB[key] : 0))
    .filter(Number.isFinite);

  console.log(`Filtered Vector A: ${JSON.stringify(arrayA)}`);
  console.log(`Filtered Vector B: ${JSON.stringify(arrayB)}`);

  const dotProduct = arrayA.reduce((sum, a, idx) => sum + a * arrayB[idx], 0);
  const normA = Math.sqrt(arrayA.reduce((sum, a) => sum + a * a, 0));
  const normB = Math.sqrt(arrayB.reduce((sum, b) => sum + b * b, 0));

  console.log(`Dot Product: ${dotProduct}`);
  console.log(`Norm A: ${normA}`);
  console.log(`Norm B: ${normB}`);

  if (normA === 0 || normB === 0) {
    console.log("One of the vectors is zero, returning similarity of 0");
    return 0; // Return a similarity of 0 if either vector is zero
  }

  return dotProduct / (normA * normB);
};

const getSimilarBooks = async (bookId) => {
  console.log(`Getting similar books for book ID ${bookId}`);

  try {
    const books = await Book.find({});
    console.log(`Found ${books.length} books in the database`);

    const tfidf = new natural.TfIdf();

    books.forEach((book) => {
      tfidf.addDocument(book.description, book._id.toString());
      console.log(`Added document for book ${book.title}`);
      console.log(
        `TF-IDF vector for book ${book.title}: ${JSON.stringify(
          tfidf.documents[tfidf.documents.length - 1]
        )}`
      );
    });

    const targetBook = await Book.findById(bookId);
    console.log(`Target book: ${targetBook.title}`);

    const targetVector =
      tfidf.documents[books.findIndex((book) => book._id.equals(bookId))];
    console.log(`Target vector: ${JSON.stringify(targetVector)}`);

    const otherBooks = books.filter((book) => !book._id.equals(bookId));
    console.log(`Other books: ${otherBooks.length}`);

    const similarities = otherBooks.map((book, idx) => {
      const vector =
        tfidf.documents[books.findIndex((b) => b._id.equals(book._id))];
      console.log(`Calculating similarity for book ${book.title}`);
      console.log(
        `TF-IDF vector for book ${book.title}: ${JSON.stringify(vector)}`
      );
      const similarity = cosineSimilarity(targetVector, vector);
      console.log(`Similarity for book ${book.title}: ${similarity}`);
      return {
        book,
        similarity: similarity,
      };
    });

    console.log(`Similarities: ${similarities.length}`);

    similarities.sort((a, b) => b.similarity - a.similarity);
    console.log(`Sorted similarities: ${similarities.length}`);

    return similarities.slice(0, 5).map((sim) => sim.book); // Return top 5 similar books
  } catch (error) {
    console.error(`Error in getSimilarBooks: ${error.message}`);
    throw error;
  }
};

router.get("/recommend/:bookId", async (req, res) => {
  const bookId = req.params.bookId;
  try {
    const similarBooks = await getSimilarBooks(bookId);
    res.json(similarBooks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
