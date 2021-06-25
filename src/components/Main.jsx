import React from "react";
import "../css/Main.css";
import PostPreview from "./PostPreview";
import { getPostsLength } from "../Posts";
import { Paragraph, Title } from "./HTMLBuildHelpers";
import Container from "@material-ui/core/Container";

const Main = () => {
  const previewPosts = [];
  const postsLength = getPostsLength() - 1;

  for (let i = postsLength; i > postsLength - 4; i--) {
    previewPosts.push(i);
  }

  return (
    <Container id="main-container">
      {Paragraph(
        <>
          Hello and welcome to my blog. Here I share my ramblings and (soon to
          come) different projects I've created in my time learning as a
          software developer.

          This is still very much a work in progress but I'm excited to see what I can add and improve.
          
          Head to the "About me" page if you'd like to get
          to know me and see what I'm all about.

         I hope you find some fun/interesting tidbits of information here. Have fun exploring!
        </>
      )}
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
