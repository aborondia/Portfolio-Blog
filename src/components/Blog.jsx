import "../css/Blog.css";
import { Container, Box } from "@material-ui/core";
import { getPostDescriptions } from "../Posts";
import { Title, PostDate, Description } from "./HTMLBuildHelpers";
import { useHistory } from "react-router-dom";

const Blog = () => {
  const postDescriptions = getPostDescriptions();
  const history = useHistory();

  const goToPost = (id) => {
    window.scrollTo(0, 0);
    history.push({
      pathname: "/blog/post",
      search: `id=${id}`,
    });
  };

  return (
    <Container
      id="post-descriptions-container"
      disableGutters={true}
    >
      {window.scrollTo(0, 0, "smooth")}
      {Title("Posts", "h2", "left", ["title", "post-header"])}
      <div id="post-descriptions">
        {postDescriptions.map((post) => {
          if (!post.id) {
            return "";
          }

          return (
            <Box
              className="post-description-container"
              key={post.id}
              onClick={() => goToPost(post.id)}
            >
              <div className="post-display">
                <li className="description-title">
                  {" "}
                  {Title(post.title, "h2")}
                </li>
                <li className="small small-list-item">
                  {" "}
                  Published on:{PostDate(post.date)}
                </li>
                <li className="small small-list-item">
                  Description: &nbsp;{Description(post.description)}
                </li>
              </div>
            </Box>
          );
        })}
      </div>
    </Container>
  );
};

export default Blog;
