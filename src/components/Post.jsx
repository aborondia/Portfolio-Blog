import { getPostBody } from "../Posts";
import Container from "@material-ui/core/Container";
import { useLocation } from "react-router-dom";

const Post = () => {
  const location = useLocation();
  const postId = new URLSearchParams(location.search).get("id");
  const postData = getPostBody(parseInt(postId));

  return (
    <Container disableGutters maxWidth="lg">
      {window.scrollTo(0, 0, "smooth")}
      {postData}
    </Container>
  );
};

export default Post;
