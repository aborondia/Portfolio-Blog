import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link as HTTPLink } from "@material-ui/core";
import { Link } from "react-router-dom";

export const getTitlesClasses = (classesArray) => {
  let classesString = "";

  for (var i = 0; i < classesArray.length; i++) {
    classesString += classesArray[i];

    if (i + 1 < classesArray.length) {
      classesString += " ";
    }
  }

  return classesString;
};

export const Title = (
  content,
  variant,
  textAlign = "left",
  classNames = ["title"]
) => {
  return (
    <Typography
      className={getTitlesClasses(classNames)}
      display="block"
      variant={variant}
      component="div"
      style={{ textAlign: textAlign }}
    >
      {content}
    </Typography>
  );
};

export const Author = (authorName) => {
  return (
    <Link
      className="author"
      to="./about-me"
    >
      {authorName}
    </Link>
  );
};

export const Description = (content, colour = "textSecondary") => {
  return (
    <Typography
      className="description"
      display="block"
      variant="inherit"
      color={colour}
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
      color="inherit"
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
      variant="h5"
      color="initial"
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
      color="inherit"
      className="link"
      variant="inherit"
    >
      {address}
    </HTTPLink>
  );
};

export const HyperLink = (address, linkDescription = address) => {
  return (
    <HTTPLink
      display="inline"
      href={address}
      alt="link"
      color="initial"
      className="link"
      variant="inherit"
    >
      {linkDescription}
    </HTTPLink>
  );
};

export const Image = (image, larger = false) => {
  if (image.src === "") {
    return;
  }

  return (
    <Container
      disableGutters={true}
      className={larger ? "large-picture" : "small-picture"}
    >
      <img
        src={image.src}
        alt={image.alt}
      />
      <Typography
        className="caption"
        variant="caption"
        color="inherit"
        component="div"
      >
        <></>
        {image.caption.text}
        <HTTPLink
          display="block"
          href={image.caption.link}
          alt=""
          color="inherit"
          className="link"
          variant="caption"
        >
          {image.caption.link}
          <></>
        </HTTPLink>
      </Typography>
    </Container>
  );
};
