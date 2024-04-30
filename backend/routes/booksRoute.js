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
    // Construct the correct path to the frontend's src/images/ directory
    const imagePath = join(__dirname, "../../frontend/src/images/");
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
    const imageName = request.file.originalname;

    console.log(imageName);

    const newBook = {
      title,
      author,
      publishYear,
      description,
      category,
      quantity,
      price,
      image: imageName, // Use the generated image URL
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Book
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
      const imageURL = `http://localhost:5555/images/${request.file.originalname}`;
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

router.get("/", async (request, response) => {
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

export default router;
