import React from "react";

function PostItem({ post }) {
  return (
    <div className="item-container">
      <h3>{post.title}</h3>
      <p className="author">{post.author}</p>
      <p>{post.content}</p>
    </div>
  );
}

function Blog({ posts }) {
  return (
    <div>
      <h2>Blog Details</h2>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Blog;
