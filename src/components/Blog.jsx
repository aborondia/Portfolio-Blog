import Post from "./Post";

const Blog = ({ posts }) => {
  return (
    <div className="blog">
      <Post 
      post={posts[0]}
      />
    </div>
  );
};

export default Blog;
