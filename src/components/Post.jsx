import { getPost } from "../Posts";
import Container from "@material-ui/core/Container";

const Post = () => {
  const postData = getPost(2).post;

  return <Container maxWidth="md">{postData.fullPost}</Container>;
};

export default Post;
