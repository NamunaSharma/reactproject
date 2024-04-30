import React from "react";
import { Link, useParams } from "react-router-dom"; // Import Link from react-router-dom

const GenrePage = () => {
  const { genre } = useParams();

  // Dummy data for books related to the genre
  const books = [
    { id: 1, title: "Book 1", author: "Author 1" },
    { id: 2, title: "Book 2", author: "Author 2" },
    // Add more books related to the genre
  ];

  return (
    <div>
      <h2>{genre} Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title}</Link> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenrePage;
