import "../css/Projects.css";
import { Title, HyperLink, Paragraph, Image } from "./HTMLBuildHelpers";
import Container from "@material-ui/core/Container";
import { getProjectsInfo } from "../Projects";
import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

const Projects = () => {
  const history = useHistory();
  const projectsInfo = getProjectsInfo();
  const scrollRef = useRef(null);
  const scrollToElement = () => scrollRef.current.scrollIntoView();
  const targetProjectId = history?.location?.state?.projectId;
  let noScrollRef = targetProjectId === undefined;
  let isScrollRef;
  
  useEffect(() => {
    scrollToElement();
  });

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
              <li>{Image(project.image)}</li>
              {project.gitHub ? (
                <li className="small">{HyperLink(project.gitHub, "GitHub")}</li>
              ) : (
                ""
              )}
              {project.live ? (
                <li className="small">{HyperLink(project.live, "Live")}</li>
              ) : (
                ""
              )}{" "}
              {Paragraph(project.description)}
            </Container>
          );
        })}
      </div>
    </Container>
  );
};

export default Projects;
