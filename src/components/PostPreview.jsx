import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { getPost } from "../Posts";
import "../css/PostPreview.css";

const PostPreview = ({ post, image }) => {
  const postData = getPost(1).post;
  const postImages = getPost(1).images;

  return (
    <Card className="preview-card">
      <CardHeader
      className='card-header'
        title={postData.title}
        subheader="September XX, 20XX"
      />
      <CardMedia
        className="card-media"
        image={postImages.img1.src}
        title={postImages.img1.alt}
      />
      {postData.description}
      <Button color='secondary' variant='contained' aria-label="go to post">MORE</Button>
    </Card>
  );
};

export default PostPreview;
