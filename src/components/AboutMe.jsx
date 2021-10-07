import { getPostBody } from "../Posts";
import Container from "@material-ui/core/Container";

const AboutMe = () => {
  const postData = getPostBody(1);

  return (
    <Container maxWidth="md">
      {(window.scrollTo(0, 0), "smooth")}
      {postData}
    </Container>
  );
};

export default AboutMe;
