import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

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

export const Paragraph = (paragraphs, id) => {
  return (
    <Typography
      display="block"
      variant="body1"
      color="textPrimary"
      component="div"
    >
      {paragraphs[id]}
    </Typography>
  );
};

export const Image = (images, id) => {
  return (
    <Container className="image-container">
      <img src={images[`img${id}`].src} alt={images[`img${id}`].alt} />
      <Typography variant="caption" color="textSecondary" component="div">
        {images[`img${id}`].caption}
      </Typography>
    </Container>
  );
};
