import "../css/Projects.css";
import { Title, HyperLink, Description, Image, ParagraphHeader } from "./HTMLBuildHelpers";
import Container from "@material-ui/core/Container";
import { getProjectsInfo } from "../Projects";

const Projects = () => {
  const projectsInfo = getProjectsInfo();

  return (
    <Container id="projects-container">
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
              {project.image ? Image(project.image) : ""}
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
              <li className="description">
                {Description(project.description)}
              </li>
            </Container>
          );
        })}
      </ul>
    </Container>
  );
};

export default Projects;
