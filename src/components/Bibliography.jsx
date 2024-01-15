import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Link as HTTPLink } from "@material-ui/core";
import "../css/Bibliography.css";

const Bibliography = ({ citations }) => {
  return (
    <Container id="bibliography">
      <Typography
        className="description"
        id="bibliography-header"
        display="block"
        variant="h3"
        component="div"
        color="inherit"
      >
        Bibliography
      </Typography>
      {citations.map((citation, index) => {
        return (
          <Container key={index}>
            <Typography
              className="description"
              display="block"
              variant="body2"
              color="inherit"
              component="div"
            >
              {citation.author}, ({citation.date}). {citation.document},{" "}
              (accessed {citation.retrieved}), from{" "}
              <HTTPLink to={citation.link}>{citation.link}</HTTPLink>
            </Typography>
          </Container>
        );
      })}
    </Container>
  );
};

export default Bibliography;
