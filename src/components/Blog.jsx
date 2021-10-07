import "../css/Blog.css";
import Container from "@material-ui/core/Container";
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
    <Container id="post-descriptions-container">
      {window.scrollTo(0, 0, "smooth")}
      {Title("Posts")}
      <ul id="post-descriptions">
        {postDescriptions.map((post) => {
          if (!post.id) {
            return "";
          }

          return (
            <Container
              className="post-description-container"
              key={post.id}
              onClick={() => goToPost(post.id)}
            >
              <li className="description-title"> {Title(post.title)}</li>
              <li className="small"> Published on:{PostDate(post.date)}</li>
              <li className="small">
                Description: &nbsp;{Description(post.description)}
              </li>
            </Container>
          );
        })}
      </ul>
    </Container>
  );
};

export default Blog;
