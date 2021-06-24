import React from "react";
import PostPreview from "./PostPreview";

const Main = () => {
  const previewPosts = [1, 3];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {previewPosts.map((id, index) => {
        return <PostPreview postId={id} key={index} />;
      })}
    </div>
  );
};

export default Main;
