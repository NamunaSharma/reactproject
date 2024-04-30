import React from "react";
import { useParams } from "react-router-dom";

const AuthorPage = () => {
  const { author } = useParams();

  // Dummy data for books by the author
  const books = [
    { id: 1, title: "Book 1", genre: "Thriller" },
    { id: 2, title: "Book 2", genre: "Fiction" },
    // Add more books by the author
  ];

  return (
    <div>
      <h2>Books by {author}</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title}</Link> - {book.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorPage;
