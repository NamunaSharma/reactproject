import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import axios from "axios";
import Spinner from "../pages/Spinner";

const UsedBooks = ({}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUsedBooksCategory = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5555/api/category/get-category"
        );
        if (data?.success) {
          const usedBooksCategory = data.category.find(
            (c) => c.name === "UsedBook"
          );
          if (usedBooksCategory) {
            console.log("Fetched Used Books category:", usedBooksCategory); // Debug log
            setCategories([usedBooksCategory]);
            setCategory(usedBooksCategory._id); // Set default value for category
          } else {
            enqueueSnackbar("Used Books category not found", {
              variant: "error",
            });
          }
        }
      } catch (error) {
        console.log("Error fetching categories:", error); // Debug log
        enqueueSnackbar(
          "Something went wrong in getting the Used Books category",
          { variant: "error" }
        );
      }
    };

    fetchUsedBooksCategory();
  }, [enqueueSnackbar]);

  const handleSaveBook = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("author", author);
      formData.append("publishYear", publishYear);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("quantity", quantity);
      formData.append("price", price);
      formData.append("image", image);
      formData.append("userId", userId); // Pass userId here

      const response = await axios.post(
        "http://localhost:5555/books",
        formData
      );

      setLoading(false);
      enqueueSnackbar("Book created successfully", { variant: "success" });
      navigate("/accountpage");
    } catch (error) {
      setLoading(false);
      enqueueSnackbar("Error creating book", { variant: "error" });
      console.error("Error:", error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="container mx-auto py-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">Add Used Book</h1>
      {loading && <Spinner />}
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter author"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Publish Year
          </label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter publish year"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter description"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Quantity
          </label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter quantity"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter price"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex justify-center">
          <button
            className="px-4 py-2 bg-indigo-500 text-black rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            onClick={handleSaveBook}
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsedBooks;
