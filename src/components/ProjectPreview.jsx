import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { getProjectPreview } from "../Projects";
import { Description, Title } from "./HTMLBuildHelpers";
import { useHistory } from "react-router-dom";

const ProjectPreview = ({ projectId }) => {
  const history = useHistory();
  const { title, description, image } = getProjectPreview(projectId);
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
      onClick={() => goToProject(projectId)}
    >
      <CardHeader
        className="card-header"
        title={Title(title, "h3")}
        // subheader={gitHub}
      />
      <CardMedia
        className="card-media"
        image={image.src ? image.src : noImageSrc}
        title={image ? image.alt : ""}
      />
      {Description(description)}
    </Card>
  );
};

export default ProjectPreview;
