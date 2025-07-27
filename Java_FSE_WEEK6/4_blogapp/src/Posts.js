import {Component} from "react";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    }
  }

  async loadPosts() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const result = await response.json();

      this.setState({posts: result});
    } catch (error) {
      this.setState({error: error});
    }
  }

  componentDidMount() {
    this.loadPosts();
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {posts.map(post => (
          <div key={post.id} style={{ borderBottom: '1px solid #ccc', marginTop: '20px', paddingBottom: '20px' }}>
            {/* The title is displayed in a heading tag[1]. */}
            <h3>{post.title}</h3>
            {/* The post content (body) is displayed in a paragraph tag[1]. */}
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }

  componentDidCatch(error, errorInfo) {
    alert(`An error occurred in Posts Component: ${error.toString()}`);
    console.error("Component error: ", error, errorInfo)
  }
}

export default Posts;