import { getPostBody } from "../Posts";
import Container from "@material-ui/core/Container";

const Post = () => {
  const postData = getPostBody(2);

  return <Container maxWidth="md">{postData}</Container>;
};

export default Post;
