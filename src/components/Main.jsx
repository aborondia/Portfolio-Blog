import React from "react";
import "../css/Main.css";
import Underscore from "underscore";
import ProjectPreview from "./ProjectPreview";
import TextBlockPreview from "./TextBlockPreview";
import { Title } from "./HTMLBuildHelpers";
import Container from "@material-ui/core/Container";
import { useProjects } from "../scripts/ProjectsContext";
import { useTextBlocks } from "../scripts/TextBlocksContext";
import Bio from "./Bio";
import DOMPurify from "dompurify";

const Main = () => {
  const { projectsInfo, loadingProjects, errorProjects } = useProjects();
  const { textInfo, loadingText, errorText } = useTextBlocks();

  if (loadingProjects) {
    return <div>Loading...</div>;
  }

  if (errorProjects) {
    return <div>Error: {errorProjects.message}</div>;
  }

  if (loadingText) {
    return <div>Loading...</div>;
  }

  if (errorText) {
    return <div>Error: {errorText.message}</div>;
  }

  const intro = Underscore.find(
    textInfo,
    (ti) => ti.identifier === "introduction"
  );

  return (
    <Container id="main-container">
      {window.scrollTo(0, 0, "smooth")}
      <Bio bioType={{ type: "top-bio" }} />

      <div>
        <TextBlockPreview textBlock={intro} />
      </div>

      {Title("Recent Projects")}
      <div id="card-container">
        {projectsInfo.slice(0, 4).map((project, index) => {
          return (
            <ProjectPreview
              project={project}
              key={index}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Main;
