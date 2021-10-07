import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { getPostPreview } from "../Posts";
import { Description, ParagraphHeader } from "./HTMLBuildHelpers";
import { useHistory } from "react-router-dom";

const PostPreview = ({ postId }) => {
  const history = useHistory();
  const { title, description, date, image } = getPostPreview(postId);
  const noImageSrc = "images/no-image.svg";

  const goToPost = (id) => {
    console.log(id);
    window.scrollTo(0, 0, "smooth");
    history.push({
      pathname: "/blog/post",
      search: `id=${id}`,
    });
  };

  return (
    <Card className="preview-card" onClick={() => goToPost(postId)}>
      <CardHeader
        className="card-header"
        title={ParagraphHeader(title)}
        subheader={date}
      />
      <CardMedia
        className="card-media"
        image={image ? image.src : noImageSrc}
        title={image ? image.alt : ""}
      />
      {Description(description)}
    </Card>
  );
};

export default PostPreview;
