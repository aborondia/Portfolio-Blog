import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const PostPreview = ({ post, image }) => {
  return (
    <Card style={{ flexBasis: "40%", marginTop: "1rem" }}>
      <CardHeader
        title={post.title}
        subheader="September XX, 20XX"
      />
      <CardMedia
        style={{ height: "200px", width: "200px" }}
        image={image}
        title="Post"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="go to post">MORE</IconButton>
      </CardActions>
    </Card>
  );
};

export default PostPreview;
