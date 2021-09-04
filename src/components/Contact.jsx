import { Author, ParagraphHeader, EmailAddress, HyperLink as HyperLink, Title } from "./HTMLBuildHelpers";
import "../css/Contact.css";

const Contact = () => {
  return (
    <ul id="contact">
      <li> {Title("Contact me")}</li>
      <li> Name: {Author("Andrew Borondia")}</li>
      <li> Email: {EmailAddress("aborondia@gmail.com")}</li>
      <li> LinkedIn: {HyperLink("https://www.linkedin.com/in/andrew-b-60578122/", "@Andrew Borondia")}</li>
      <li> GitHub: {HyperLink("https://github.com/aborondia", "@Andrew Borondia")}</li>
      <li> LeetCode: {HyperLink("https://leetcode.com/aborondia/", "@Andrew Borondia")}</li>
    </ul>
  );
};

export default Contact;
