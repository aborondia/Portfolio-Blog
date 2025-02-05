import "../css/Projects.css";
import { Title, HyperLink, Paragraph, Image } from "./HTMLBuildHelpers";
import Container from "@material-ui/core/Container";
import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useProjects } from "../scripts/ProjectsContext";

const Projects = () => {
  const { projectsInfo, loading, error } = useProjects();
  const history = useHistory();
  const scrollRef = useRef(null);
  const scrollToElement = () => scrollRef.current.scrollIntoView();
  const targetProjectId = history?.location?.state?.projectId;
  let noScrollRef = targetProjectId === undefined;
  let isScrollRef;

  useEffect(() => {
    if (!loading) {
      scrollToElement();
    }
  }, [loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
    <Container
      id="projects-container"
      ref={noScrollRef ? scrollRef : null}
    >
      {Title("Projects", "h2")}
      <div id="projects-info">
        {projectsInfo.map((project) => {
          if (!project.id) {
            return "";
          }

          isScrollRef = !noScrollRef && project.id === targetProjectId;

          return (
            <Container
              className="project-container"
              disableGutters={true}
              key={project.id}
              id={project.id}
              ref={isScrollRef ? scrollRef : null}
            >
              <li className="description-title">
                {Title(project.title, "h3")}
              </li>
              <li>
                {Image(project.imageSource, project.imageAlt, project.caption)}
              </li>
              {project.github ? (
                <li className="small">{HyperLink(project.github, "GitHub")}</li>
              ) : (
                ""
              )}
              {project.live ? (
                <li className="small">{HyperLink(project.live, "Live")}</li>
              ) : (
                ""
              )}
              {Paragraph(project.description)}
            </Container>
          );
        })}
      </div>
    </Container>
  );
};

export default Projects;
