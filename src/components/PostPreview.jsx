import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { getPostPreview } from "../Posts";
import "../css/PostPreview.css";
import { Description } from "./TypographyPresets";

const PostPreview = () => {
  const { title, description, image } = getPostPreview(1);

  return (
    <Card className="preview-card">
      <CardHeader
        className="card-header"
        title={title}
        subheader="September XX, 20XX"
      />
      <CardMedia className="card-media" image={image.src} title={image.alt} />
      {Description(description)}
      <Button color="secondary" variant="contained" aria-label="go to post">
        MORE
      </Button>
    </Card>
  );
};

export default PostPreview;
