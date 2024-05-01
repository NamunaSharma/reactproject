import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { MdOutlineAddBox } from "react-icons/md";
import { MdOutlineAddBox } from "react-icons/md";

import BooksTable from "../components/BooksTable";
import Navbar from "../components/Navbar";
import Spinner from "../pages/Spinner";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books/book")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Navbar />
      <div className="flex-grow w-full mt-8 p-5">
        <h1 className="text-4xl font-bold mb-8 text-center text-cyan-700">
          Books List
        </h1>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <Link to="/books/create">
              <MdOutlineAddBox className="text-blue-600 text-3xl hover:text-blue-500" />
            </Link>
          </div>
          {loading ? <Spinner /> : <BooksTable books={books} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
