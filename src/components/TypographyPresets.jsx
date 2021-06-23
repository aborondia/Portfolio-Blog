import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {Link as HTTPLink} from '@material-ui/core';


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

export const Description = (content) => {
  return (
    <Typography
      className="description"
      display="block"
      variant="body2"
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
      variant="caption"
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
      variant="body1"
      color="textPrimary"
      component="div"
    >
      {paragraph}
    </Typography>
  );
};

export const Image = (image) => {
  return (
    <Container className="image-container">
      <img src={image.src} alt={image.alt} />
      <Typography className='caption' variant="caption" color="textSecondary" component="div">
        {image.caption.text}
        <HTTPLink
            display="block"
            to={image.caption.link}
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
