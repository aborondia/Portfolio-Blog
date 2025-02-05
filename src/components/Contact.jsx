import { EmailAddress, HyperLink, Title } from "./HTMLBuildHelpers";
import Container from "@material-ui/core/Container";
import "../css/Contact.css";

const Contact = () => {
  return (
    <Container>
      <div id="contact">
        {window.scrollTo(0, 0, "smooth")}
        <li> {Title("Contact", "h2")}</li>
        <li> Email: {EmailAddress("aborondia@gmail.com")}</li>
        <li>
          {"Linkedin:"}
          {HyperLink(
            "https://www.linkedin.com/in/aborondia/",
            "@Andrew Borondia"
          )}
        </li>
        <li>
          {"GitHub:"}
          {HyperLink("https://github.com/aborondia", "@Andrew Borondia")}
        </li>
      </div>
    </Container>
  );
};

export default Contact;
