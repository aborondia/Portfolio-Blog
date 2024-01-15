import { Title } from "./HTMLBuildHelpers";
import Container from "@material-ui/core/Container";
import "../css/Bio.css";

const Bio = ({ bioType }) => {
  return (
    <Container
      id={bioType?.type}
      className={bioType?.type}
    >
      {window.scrollTo(0, 0, "smooth")}
      {Title("Andrew Borondia", "h3", "center", ["title", "bio-name"])}
      {Title("Software Developer", "h4", "center", ["title", "bio-role"])}
    </Container>
  );
};

export default Bio;
