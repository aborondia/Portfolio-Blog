import { getPostBody } from "../Posts";
import Container from "@material-ui/core/Container";
import { useLocation } from "react-router-dom";

const Post = () => {
  const location = useLocation();
  const postId = new URLSearchParams(location.search).get("id");
  const postData = getPostBody(parseInt(postId));
  // console.log(postData)

  return <Container maxWidth="md">{postData}</Container>;
};

export default Post;
