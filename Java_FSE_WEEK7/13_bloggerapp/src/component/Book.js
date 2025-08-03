import React from "react";

function BookItem({ book }) {
  return (
    <div className="item-container">
      <h4>{book.title}</h4>
      <p>{book.pages}</p>
    </div>
  );
}

function Book({ books }) {
  return (
    <div>
      <h2>Book Details</h2>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
}

export default Book;
