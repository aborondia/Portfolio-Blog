import "../css/Projects.css";
import {
  Title,
  HyperLink,
  Paragraph,
  Image,
  ParagraphHeader,
} from "./HTMLBuildHelpers";
import Container from "@material-ui/core/Container";
import { getProjectsInfo } from "../Projects";

const Projects = () => {
  const projectsInfo = getProjectsInfo();

  return (
    <Container id="projects-container">
      {window.scrollTo(0, 0),'smooth'}
      {Title("Projects")}
      <ul id="projects-info">
        {projectsInfo.map((project) => {
          if (!project.id) {
            return "";
          }

          return (
            <Container className="project-container" key={project.id}>
              <li className="description-title">
                {ParagraphHeader(project.title)}
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
              {/* <li className="description"> */}
              {Paragraph(project.description)}
              {/* </li> */}
            </Container>
          );
        })}
      </ul>
    </Container>
  );
};

export default Projects;
