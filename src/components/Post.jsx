import { Link } from "react-router-dom";
import { getPost } from "../Posts";
import Container from "@material-ui/core/Container";

const Post = ({ post }) => {
  const postData = getPost(2).post;
  const postImages = getPost(2).images;

  return (
    <Container  maxWidth="md">
      {postData.title}
      {postData.date}
      <Link to="./about-me.html">by Andrew Borondia</Link>
      {postData.fullPost}
    </Container>
  );
};

export default Post;
