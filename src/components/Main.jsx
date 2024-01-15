import React from "react";
import "../css/Main.css";
import { Paragraph } from "./HTMLBuildHelpers";
// import PostPreview from "./PostPreview";
import ProjectPreview from "./ProjectPreview";
import { getPostsLength } from "../Posts";
import { getProjectsIds } from "../Projects";
import Container from "@material-ui/core/Container";
import Bio from "./Bio";

const Main = () => {
  const previewPosts = [];
  const postsLength = getPostsLength() - 1;
  const previewProjects = [];
  const projectIds = getProjectsIds();

  for (let i = postsLength + 1; i > postsLength - 3; i--) {
    previewPosts.push(i);
  }

  projectIds.forEach((pi) => previewProjects.push(pi));

  return (
    <Container id="main-container">
      {window.scrollTo(0, 0, "smooth")}
      <Bio bioType={{ type: "top-bio" }} />
      {Paragraph(
        <>
          I started my professional developer journey in 2021 by joining the{" "}
          <b>Software Developer Program at MITT</b> in my home city of Winnipeg,
          MB (though I have been developing as a hobby long before that).
        </>
      )}
      {Paragraph(
        <>
          Since the completion of the course, I have worked on many varied
          projects, mostly solutions built in <b>Unity</b>. These projects
          include several <b>VR based educational games</b> created for the
          contruction sector, a heavy <b>UI</b> front end for a biology engine
          built with <b>Unity's UI Toolkit</b>, and other cool things.
        </>
      )}
      {Paragraph(
        <>
          These days when I'm not spending time with my wife & daughter, I'm
          either gaming, or working on whatever side project that happens to
          have taken my fancy at the time.
        </>
      )}
      {/* {Title("Recent Posts")} */}
      <div id="card-container">
        {previewProjects.map((id, index) => {
          return (
            <ProjectPreview
              projectId={id}
              key={index}
            />
          );
        })}
        {/* {previewPosts.map((id, index) => {
          return (
            <PostPreview
              postId={id}
              key={index}
            />
          );
        })} */}
      </div>
    </Container>
  );
};

export default Main;
