import React from "react";
import "./App.css";
import Course from "./component/Course";
import Book from "./component/Book";
import Blog from "./component/Blog";

function App() {
  const courses = [
    { id: 1, name: "Next", date: "4/5/2021" },
    { id: 2, name: "React", date: "6/3/20201" },
  ];

  const books = [
    { id: 1, title: "Master React", pages: 900 },
    { id: 2, title: "Deep Dive into ML", pages: 780 },
    { id: 3, title: "Mongo Essentials", pages: 450 },
  ];

  const posts = [
    {
      id: 1,
      title: "React Learning",
      author: "Stephen Biz",
      content: "Welcome to learning React!",
    },
    {
      id: 2,
      title: "Installation",
      author: "Schewzdenier",
      content: "You can install React from npm.",
    },
  ];

  return (
    <div className="app-container">
      <div className="details-section">
        <Course courses={courses} />
      </div>
      <div className="details-section">
        <Book books={books} />
      </div>
      <div className="details-section no-border">
        <Blog posts={posts} />
      </div>
    </div>
  );
}

export default App;
