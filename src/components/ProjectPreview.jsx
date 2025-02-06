import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { Description, Title } from "./HTMLBuildHelpers";
import { useHistory } from "react-router-dom";
import DOMPurify from "dompurify";

const ProjectPreview = ({ project }) => {
  const history = useHistory();
  const noImageSrc = "images/no-image.svg";

  const goToProject = (projectId) => {
    // window.scrollTo(0, 0, "smooth");
    history.push({
      pathname: "/projects",
      state: { projectId: projectId },
    });
  };

  return (
    <Card
      className="preview-card"
      onClick={() => goToProject(project.id)}
    >
      <CardHeader
        className="card-header"
        title={Title(project.title, "h3")}
      />
      <CardMedia
        className="card-media"
        image={project.imageSource ? project.imageSource : noImageSrc}
        title={project.title}
      />
      {project.descriptionIsHTML ? (
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(project.description),
          }}
        />
      ) : (
        Description(project.description)
      )}
    </Card>
  );
};

export default ProjectPreview;
