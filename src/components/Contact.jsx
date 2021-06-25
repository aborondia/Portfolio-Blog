import { Author, ParagraphHeader, EmailAddress } from "./HTMLBuildHelpers";
import "../css/Contact.css";

const Contact = () => {
  return (
    <ul id="contact">
      <li> {ParagraphHeader("Contact me")}</li>
      <li> Name: {Author("Andrew Borondia")}</li>
      <li> Email: {EmailAddress("aborondia@gmail.com")}</li>
    </ul>
  );
};

export default Contact;
