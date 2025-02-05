import Container from "@material-ui/core/Container";
import {
  Title,
  Author,
  PostDate,
  Paragraph,
  Image,
} from "./components/HTMLBuildHelpers";

const images = {
  post1: {
    img1: {
      src: "/images/post1/nothing.jpg",
      alt: "A picture of nothing",
      caption: { text: `There is no picture`, link: "" },
    },
  },
};
const paragraphs = {
  post1: [Paragraph(<>Thre is nothing here.</>)],
};
const otherText = {
  post1: {
    title: "No Title",
    description: "There is nothing here.",
    date: 1620414480,
    headers: [],
    citations: [],
  },
};
const posts = [
  {
    id: 1,
    description: otherText.post1.description,
    fullPost: (
      <Container
        disableGutters={true}
        maxWidth="md"
        id="post-body"
      >
        {Title(otherText.post1.title, "h2")}
        {PostDate(otherText.post1.date)}
      </Container>
    ),
  },
];

export const getPostBody = (id) => {
  const post = posts.find((post) => post.id === id);

  return post.fullPost;
};

export const getPostPreview = (id) => {
  return {
    title: otherText[`post${id}`].title,
    date: new Date(otherText[`post${id}`].date * 1000).toLocaleDateString(),
    description: otherText[`post${id}`].description,
    image: images[`post${id}`].img1,
  };
};

export const getPostsLength = () => {
  return posts.length;
};

export const getPostDescriptions = () => {
  const postDescriptions = [];

  for (let i = 0; i < posts.length; i++) {
    postDescriptions.push({
      id: posts[i].id,
      title: otherText[`post${i + 1}`].title,
      date: otherText[`post${i + 1}`].date,
      description: otherText[`post${i + 1}`].description,
    });
  }

  return postDescriptions;
};
