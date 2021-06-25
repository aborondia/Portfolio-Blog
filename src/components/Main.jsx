import React from "react";
import "../css/Main.css";
import PostPreview from "./PostPreview";
import { getPostsLength } from "../Posts";
import { Title } from "./HTMLBuildHelpers";
import Container from "@material-ui/core/Container";


const Main = () => {
  const previewPosts = [];
  const postsLength = getPostsLength() - 1;

  for (let i = postsLength; i > postsLength - 4; i--) {
    previewPosts.push(i);
  }

  return (
    <Container id='main-container'>
      {Title("Recent Posts")}
      <div id="card-container">
        {previewPosts.map((id, index) => {
          return <PostPreview postId={id} key={index} />;
        })}
      </div>
    </Container>
  );
};

export default Main;
