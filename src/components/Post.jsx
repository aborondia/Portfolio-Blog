import { Link } from "react-router-dom";
import { getPost } from "../Posts";
import Container from "@material-ui/core/Container";
import Bibliography from "./Bibliography";

const Post = () => {
  const postData = getPost(2).post;

  return (
    <Container maxWidth="md">
      {postData.title}
      {postData.date}
      <Link to="./about-me.html">by Andrew Borondia</Link>
      {postData.fullPost}
      <Bibliography post={postData} />
    </Container>
  );
};

export default Post;
