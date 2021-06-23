import { getPost } from "../Posts";
import Container from "@material-ui/core/Container";

const AboutMe = () => {
  const postData = getPost(1).post;

  return <Container maxWidth="md">{postData.fullPost}</Container>;
};

export default AboutMe;
