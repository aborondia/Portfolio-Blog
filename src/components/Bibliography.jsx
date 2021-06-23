import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import "../css/Bibliography.css";

const Bibliography = ({ post }) => {
  const citations = [...post.citations];

  return (
    <Container id="bibliography">
      <Typography
        className="description"
        display="block"
        variant="h3"
        color="textSecondary"
        component="div"
      >Bibliography</Typography>
      {citations.map((citation, index) => {
        return (
          <Container key={index}>
            <Typography
              className="description"
              display="block"
              variant="body2"
              color="textSecondary"
              component="div"
            >
              {citation.author}. {citation.date}. {citation.document}.{" "}
              {citation.retrieved}, from{" "}
              <Link href={citation.link}>{citation.link}</Link>
            </Typography>
          </Container>
        );
      })}
    </Container>
  );
};

export default Bibliography;
