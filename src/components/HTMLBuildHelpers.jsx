import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link as HTTPLink } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Title = (content) => {
  return (
    <Typography
      className="title"
      display="block"
      variant="h2"
      color="secondary"
      component="div"
    >
      {content}
    </Typography>
  );
};

export const Author = (authorName) => {
  return (
    <Link to="./about-me" className="author">
      {authorName}
    </Link>
  );
};

export const ParagraphHeader = (content) => {
  return (
    <Typography
      display="block"
      variant="h4"
      color="secondary"
      component="div"
      className="paragraph-header"
    >
      {content}
    </Typography>
  );
};

export const Description = (content) => {
  return (
    <Typography
      className="description"
      display="block"
      variant="inherit"
      color="textSecondary"
      component="div"
    >
      {content}
    </Typography>
  );
};

export const PostDate = (date) => {
  return (
    <Typography
      className="date"
      variant="inherit"
      color="textSecondary"
      component="div"
    >
      {new Date(date * 1000).toLocaleDateString()}
    </Typography>
  );
};

export const Paragraph = (paragraph) => {
  return (
    <Typography
      display="block"
      variant="h6"
      color="textPrimary"
      component="div"
      className="paragraph"
    >
      {paragraph}
    </Typography>
  );
};

export const EmailAddress = (address) => {
  return (
    <HTTPLink
      display="inline"
      href={`mailto:${address}`}
      alt="contact me"
      color="primary"
      variant="inherit"
    >
      {address}
    </HTTPLink>
  );
};

export const Image = (image, larger = false) => {
  return (
    <Container className={larger ? 'large-picture' : 'small-picture'}>
      <img src={image.src} alt={image.alt} />
      <Typography
        className="caption"
        variant="caption"
        color="textSecondary"
        component="div"
      >
        {image.caption.text}
        <HTTPLink
          display="block"
          href={image.caption.link}
          alt=""
          color="primary"
          variant="caption"
        >
          {image.caption.link}
        </HTTPLink>
      </Typography>
    </Container>
  );
};
