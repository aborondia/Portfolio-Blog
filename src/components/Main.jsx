import React from "react";
import PostPreview from "./PostPreview";

const Main = () => {
  const recentPosts = [];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      <PostPreview />
    </div>
  );
};

export default Main;
