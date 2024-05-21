import React, { useState, useEffect } from "react";

const Recommendations = ({ bookId }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5555/books/recommend/${bookId}`)
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, [bookId]);

  return (
    <div>
      <h2>Recommended Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
