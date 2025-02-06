import React from "react";
import "../css/Main.css";
import { Paragraph } from "./HTMLBuildHelpers";
import ProjectPreview from "./ProjectPreview";
import { Title } from "./HTMLBuildHelpers";
import Container from "@material-ui/core/Container";
import { useProjects } from "../scripts/ProjectsContext";
import Bio from "./Bio";

const Main = () => {
  const { projectsInfo, loading, error } = useProjects();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
          contruction sector, a <b>UI</b> heavy front end for a biology engine
          built with <b>Unity's UI Toolkit</b>, and other cool things.
        </>
      )}
      {Paragraph(
        <>
          These days when I'm not spending time with my family, I'm either
          gaming, or working on whatever side project that happens to have taken
          my fancy at the time.
        </>
      )}
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
