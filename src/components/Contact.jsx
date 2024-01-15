import { EmailAddress, HyperLink, Title } from "./HTMLBuildHelpers";
import Container from "@material-ui/core/Container";
import "../css/Contact.css";

const Contact = () => {
  return (
    <Container>
      <div id="contact">
        {window.scrollTo(0, 0, "smooth")}
        <li> {Title("Contact", "h2")}</li>
        {/* <li> Name: {Author("Andrew Borondia")}</li> */}
        <li> Email: {EmailAddress("aborondia@gmail.com")}</li>
        <li>
          {" "}
          LinkedIn:{" "}
          {HyperLink(
            "https://www.linkedin.com/in/andrew-b-60578122/",
            "@Andrew Borondia"
          )}
        </li>
        <li>
          {" "}
          GitHub:{" "}
          {HyperLink("https://github.com/aborondia", "@Andrew Borondia")}
        </li>
        <li>
          {" "}
          LeetCode:{" "}
          {HyperLink("https://leetcode.com/aborondia/", "@Andrew Borondia")}
        </li>
      </div>
    </Container>
  );
};

export default Contact;
