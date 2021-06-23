import { Link } from "react-router-dom";
import { getPost } from "../Posts";
import Container from "@material-ui/core/Container";

const AboutMe = () => {
  const postData = getPost(1).post;

  return (
    <Container  maxWidth="md">
      {postData.title}
      {postData.date}
      <Link to="./about-me.html">by Andrew Borondia</Link>
      {postData.fullPost}
    </Container>
  );
};

export default AboutMe;
