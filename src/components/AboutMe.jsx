import { getPostBody } from "../Posts";
import Container from "@material-ui/core/Container";

const AboutMe = () => {
  const postData = getPostBody(1);

  return <Container maxWidth="md">{postData}</Container>;
};

export default AboutMe;
