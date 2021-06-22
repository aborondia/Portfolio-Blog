import React from "react";
import PostPreview from "./PostPreview";

const Main = ({ posts, images }) => {
  const recentPosts = [];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      <PostPreview post={posts[0]} image={images.post1.img1.src} />
    </div>
  );
};

export default Main;
